export const id = 287;
export const ids = [287];
export const modules = {
  41663: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => qR,
      g: () => aR,
      i: () => fR,
      l: () => iR
    });
    var yR = GR(41444),
      tR = GR(39914),
      uR = GR(41586),
      ZR = GR(41491);
    class qR {
      get oB() {
        return this._isDisposed
      }
      constructor(RR, JR, GR) {
        let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          uR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          qR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          iR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          fR = arguments.length > 7 ? arguments[7] : void 0,
          VR = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, ZR.e)(), RR && RR.jH ? this._engine = RR.jH().ke() : this._engine = RR, this._updatable = GR, this._instanced = qR, this._divisor = fR || 1, this._label = VR, JR instanceof yR.b ? (this._data = null, this._buffer = JR) : (this._data = JR, this._buffer = null), this.byteStride = iR ? tR : tR * Float32Array.BYTES_PER_ELEMENT, uR || this.create()
      }
      createVertexBuffer(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          ZR = arguments.length > 6 ? arguments[6] : void 0;
        const qR = uR ? JR : JR * Float32Array.BYTES_PER_ELEMENT,
          fR = yR ? uR ? yR : yR * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new iR(this._engine, this, RR, this._updatable, !0, fR, void 0 === tR ? this._instanced : tR, qR, GR, void 0, void 0, !0, this._divisor || ZR)
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
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !RR && this._buffer || (RR = RR || this._data, RR && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, RR), this._data = RR) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(RR, this._label), this._data = RR) : this._buffer = this._engine.createVertexBuffer(RR, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.hK > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.hK, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.hK, void 0, this._label));
          tR.c.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(RR) {
        this.create(RR)
      }
      updateDirectly(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, RR, yR ? JR : JR * Float32Array.BYTES_PER_ELEMENT, GR ? GR * this.byteStride : void 0), this._data = 0 === JR && void 0 === GR ? RR : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class iR {
      get oB() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(RR) {
        const JR = 0 != RR;
        this._instanceDivisor = RR, JR !== this._instanced && (this._instanced = JR, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const RR = this.getData();
        return RR ? Array.isArray(RR) ? RR.length / (this.byteStride / 4) - this.byteOffset / 4 : (RR.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(RR, JR, GR, yR, tR, ZR, KR, wR, rR, eR) {
        let aR, LR = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          nR = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          UR = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          WR = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = RR, "object" === typeof yR && null !== yR ? (aR = yR.updatable ?? !1, tR = yR.postponeInternalCreation, ZR = yR.stride, KR = yR.instanced, wR = yR.offset, rR = yR.size, eR = yR.type, LR = yR.normalized ?? !1, nR = yR.useBytes ?? !1, UR = yR.divisor ?? 1, WR = yR.takeBufferOwnership ?? !1, this._label = yR.label) : aR = !!yR, JR instanceof qR ? (this._buffer = JR, this._ownsBuffer = WR) : (this._buffer = new qR(RR, JR, aR, ZR, tR, KR, nR, UR, this._label), this._ownsBuffer = !0), this.uniqueId = iR._Counter++, this._kind = GR, void 0 === eR) {
          const RR = this.getData();
          this.type = RR ? VR(RR) : iR.FLOAT
        } else this.type = eR;
        const AR = (0, uR.k)(this.type);
        nR ? (this._size = rR || (ZR ? ZR / AR : fR(GR)), this.byteStride = ZR || this._buffer.byteStride || this._size * AR, this.byteOffset = wR || 0) : (this._size = rR || ZR || fR(GR), this.byteStride = ZR ? ZR * AR : this._buffer.byteStride || this._size * AR, this.byteOffset = (wR || 0) * AR), this.normalized = LR, this._instanced = void 0 !== KR && KR, this._instanceDivisor = KR ? UR : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(RR) {
        switch (RR) {
          case iR.BYTE:
            return 0;
          case iR.UNSIGNED_BYTE:
            return 1;
          case iR.SHORT:
            return 2;
          case iR.UNSIGNED_SHORT:
            return 3;
          case iR.INT:
            return 4;
          case iR.UNSIGNED_INT:
            return 5;
          case iR.FLOAT:
            return 6;
          case iR.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${RR}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (iR._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(RR, JR) {
        const GR = this.getData();
        return GR ? (0, uR.h)(GR, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, RR, JR) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, uR.k)(this.type)
      }
      MyR() {
        return this.byteOffset / (0, uR.k)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, uR.k)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(RR) {
        this._buffer.create(RR), this._alignBuffer()
      }
      update(RR) {
        this._buffer.update(RR), this._alignBuffer()
      }
      updateDirectly(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(RR, JR, void 0, GR), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(RR, JR) {
        (0, uR.e)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, RR, this.normalized, ((RR, GR) => {
          for (let yR = 0; yR < this._size; yR++) JR(RR[yR], GR + yR)
        }))
      }
      _alignBuffer() {}
    }

    function fR(RR) {
      switch (RR) {
        case iR.UVKind:
        case iR.UV2Kind:
        case iR.UV3Kind:
        case iR.UV4Kind:
        case iR.UV5Kind:
        case iR.UV6Kind:
          return 2;
        case iR.NormalKind:
        case iR.PositionKind:
          return 3;
        case iR.ColorKind:
        case iR.ColorInstanceKind:
        case iR.MatricesIndicesKind:
        case iR.MatricesIndicesExtraKind:
        case iR.MatricesWeightsKind:
        case iR.MatricesWeightsExtraKind:
        case iR.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + RR + "'")
      }
    }

    function VR(RR) {
      return RR instanceof Int8Array ? iR.BYTE : RR instanceof Uint8Array ? iR.UNSIGNED_BYTE : RR instanceof Int16Array ? iR.SHORT : RR instanceof Uint16Array ? iR.UNSIGNED_SHORT : RR instanceof Int32Array ? iR.INT : RR instanceof Uint32Array ? iR.UNSIGNED_INT : iR.FLOAT
    }

    function KR(RR) {
      return (0, uR.k)(RR)
    }

    function wR(RR, JR, GR, yR, tR, ZR, qR, iR) {
      (0, uR.e)(RR, JR, GR, yR, tR, ZR, qR, ((RR, JR) => {
        for (let GR = 0; GR < yR; GR++) iR(RR[GR], JR + GR)
      }))
    }

    function rR(RR, JR, GR, yR, tR, ZR, qR, iR) {
      return (0, uR.h)(RR, JR, GR, yR, tR, ZR, qR, iR)
    }
    iR._Counter = 0, iR.BYTE = 5120, iR.UNSIGNED_BYTE = 5121, iR.SHORT = 5122, iR.UNSIGNED_SHORT = 5123, iR.INT = 5124, iR.UNSIGNED_INT = 5125, iR.FLOAT = 5126, iR.HALF_FLOAT = 5131, iR.PositionKind = "position", iR.NormalKind = "normal", iR.TangentKind = "tangent", iR.UVKind = "uv", iR.UV2Kind = "uv2", iR.UV3Kind = "uv3", iR.UV4Kind = "uv4", iR.UV5Kind = "uv5", iR.UV6Kind = "uv6", iR.ColorKind = "color", iR.ColorInstanceKind = "instanceColor", iR.MatricesIndicesKind = "matricesIndices", iR.MatricesWeightsKind = "matricesWeights", iR.MatricesIndicesExtraKind = "matricesIndicesExtra", iR.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let eR = !1;

    function aR() {
      eR || (eR = !0, iR.DeduceStride = fR, iR.GetDataType = VR, iR.GetTypeByteLength = KR, iR.ForEach = wR, iR.GetFloatData = rR)
    }
  },
  41444: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR
    });
    class yR {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.hK = 0, this.is32Bits = !1, this.uniqueId = yR._Counter++
      }
    }
    yR._Counter = 0
  },
  41659: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = GR(38204),
      tR = GR(41663);
    class uR {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || JR && !this.pickedMesh.isVerticesDataPresent(tR.l.NormalKind)) return null;
        let GR, uR = this.pickedMesh.NuR();
        0 === uR?.length && (uR = null);
        const ZR = yR.l.Fe[0],
          qR = yR.l.Fe[1],
          iR = yR.l.Fe[2];
        if (JR) {
          const RR = this.pickedMesh.getVerticesData(tR.l.NormalKind);
          let JR = uR ? yR.r.FromArrayToRef(RR, 3 * uR[3 * this.faceId], ZR) : ZR.VJR(RR[3 * this.faceId * 3], RR[3 * this.faceId * 3 + 1], RR[3 * this.faceId * 3 + 2]),
            fR = uR ? yR.r.FromArrayToRef(RR, 3 * uR[3 * this.faceId + 1], qR) : qR.VJR(RR[3 * (3 * this.faceId + 1)], RR[3 * (3 * this.faceId + 1) + 1], RR[3 * (3 * this.faceId + 1) + 2]),
            VR = uR ? yR.r.FromArrayToRef(RR, 3 * uR[3 * this.faceId + 2], iR) : iR.VJR(RR[3 * (3 * this.faceId + 2)], RR[3 * (3 * this.faceId + 2) + 1], RR[3 * (3 * this.faceId + 2) + 2]);
          JR = JR.scale(this.bu), fR = fR.scale(this.bv), VR = VR.scale(1 - this.bu - this.bv), GR = new yR.r(JR.x + fR.x + VR.x, JR.y + fR.y + VR.y, JR.z + fR.z + VR.z)
        } else {
          const RR = this.pickedMesh.getVerticesData(tR.l.PositionKind),
            JR = uR ? yR.r.FromArrayToRef(RR, 3 * uR[3 * this.faceId], ZR) : ZR.VJR(RR[3 * this.faceId * 3], RR[3 * this.faceId * 3 + 1], RR[3 * this.faceId * 3 + 2]),
            fR = uR ? yR.r.FromArrayToRef(RR, 3 * uR[3 * this.faceId + 1], qR) : qR.VJR(RR[3 * (3 * this.faceId + 1)], RR[3 * (3 * this.faceId + 1) + 1], RR[3 * (3 * this.faceId + 1) + 2]),
            VR = uR ? yR.r.FromArrayToRef(RR, 3 * uR[3 * this.faceId + 2], iR) : iR.VJR(RR[3 * (3 * this.faceId + 2)], RR[3 * (3 * this.faceId + 2) + 1], RR[3 * (3 * this.faceId + 2) + 2]),
            KR = JR.subtract(fR),
            wR = VR.subtract(fR);
          GR = yR.r.Cross(KR, wR)
        }
        const fR = (RR, JR) => {
          if (-1 !== this.thinInstanceIndex) {
            const GR = RR._thinInstanceDataStorage.matrixData,
              tR = this.thinInstanceIndex << 4;
            if (GR && GR.length > tR) {
              const RR = yR.l.Matrix[0];
              yR.e.FromArrayToRef(GR, tR, RR), yR.r.TransformNormalToRef(JR, RR, JR)
            }
          }
          let GR = RR.getWorldMatrix();
          RR.nonUniformScaling && (yR.l.Matrix[0].vN(GR), GR = yR.l.Matrix[0], GR.setTranslationFromFloats(0, 0, 0), GR.invert(), GR.transposeToRef(yR.l.Matrix[1]), GR = yR.l.Matrix[1]), yR.r.TransformNormalToRef(JR, GR, JR)
        };
        if (RR && fR(this.pickedMesh, GR), this.ray) {
          const JR = yR.l.Fe[0].vN(GR);
          RR || fR(this.pickedMesh, JR), yR.r.Dot(JR, this.ray.direction) > 0 && GR.negateInPlace()
        }
        return GR.normalize(), GR
      }
      getTextureCoordinates() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tR.l.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(RR)) return null;
        const JR = this.pickedMesh.NuR();
        if (!JR) return null;
        const GR = this.pickedMesh.getVerticesData(RR);
        if (!GR) return null;
        let uR = yR.n.FromArray(GR, 2 * JR[3 * this.faceId]),
          ZR = yR.n.FromArray(GR, 2 * JR[3 * this.faceId + 1]),
          qR = yR.n.FromArray(GR, 2 * JR[3 * this.faceId + 2]);
        return uR = uR.scale(this.bu), ZR = ZR.scale(this.bv), qR = qR.scale(1 - this.bu - this.bv), new yR.n(uR.x + ZR.x + qR.x, uR.y + ZR.y + qR.y)
      }
    }
  },
  41491: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = GR(41375);
    let tR = !1;

    function uR() {
      tR || (tR = !0, yR.ThinEngine.prototype.updateDynamicIndexBuffer = function(RR, JR) {
        let GR;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(RR), GR = RR.is32Bits ? JR instanceof Uint32Array ? JR : new Uint32Array(JR) : JR instanceof Uint16Array ? JR : new Uint16Array(JR), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, GR, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, yR.ThinEngine.prototype.updateDynamicVertexBuffer = function(RR, JR, GR, yR) {
        this.bindArrayBuffer(RR), void 0 === GR && (GR = 0);
        const tR = JR.byteLength || JR.length;
        void 0 === yR || yR >= tR && 0 === GR ? JR instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, GR, new Float32Array(JR)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, GR, JR) : JR instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, GR, new Float32Array(JR).subarray(0, yR / 4)) : (JR = ArrayBuffer.isView(JR) ? new Uint8Array(JR.buffer, JR.byteOffset, yR) : new Uint8Array(JR, 0, yR), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, GR, JR)), this._resetVertexBufferBinding()
      })
    }
  },
  41457: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR
    });
    class yR {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          JR = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = JR, !RR && (RR = JR.createTexture(), !RR)) throw new Error("Unable to create webGL texture");
        this.set(RR)
      }
      setUsage() {}
      set(RR) {
        this._webGLTexture = RR
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(RR) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(RR)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const RR of this._MSAARenderBuffers) this._context.deleteRenderbuffer(RR);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[RR] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  41418: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => UR
    });
    var yR = GR(38233),
      tR = GR(41382),
      uR = GR(38224),
      ZR = GR(39914),
      qR = GR(38219),
      iR = GR(41425);
    class fR {
      constructor() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, RR && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(RR) {
        this._zOffset !== RR && (this._zOffset = RR, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(RR) {
        this._zOffsetUnits !== RR && (this._zOffsetUnits = RR, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(RR) {
        this._cullFace !== RR && (this._cullFace = RR, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(RR) {
        this._cull !== RR && (this._cull = RR, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(RR) {
        this._depthFunc !== RR && (this._depthFunc = RR, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(RR) {
        this._depthMask !== RR && (this._depthMask = RR, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(RR) {
        this._depthTest !== RR && (this._depthTest = RR, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(RR) {
        this._frontFace !== RR && (this._frontFace = RR, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(RR) {
        this.isDirty && (this._isCullDirty && (this.cull ? RR.enable(RR.CULL_FACE) : RR.disable(RR.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (RR.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (RR.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? RR.enable(RR.DEPTH_TEST) : RR.disable(RR.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (RR.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (RR.enable(RR.POLYGON_OFFSET_FILL), RR.polygonOffset(this.zOffset, this.zOffsetUnits)) : RR.disable(RR.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (RR.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class VR {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(RR) {
        this._func !== RR && (this._func = RR, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(RR) {
        this._backFunc !== RR && (this._backFunc = RR, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(RR) {
        this._funcRef !== RR && (this._funcRef = RR, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(RR) {
        this._funcMask !== RR && (this._funcMask = RR, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(RR) {
        this._opStencilFail !== RR && (this._opStencilFail = RR, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(RR) {
        this._opDepthFail !== RR && (this._opDepthFail = RR, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(RR) {
        this._opStencilDepthPass !== RR && (this._opStencilDepthPass = RR, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(RR) {
        this._backOpStencilFail !== RR && (this._backOpStencilFail = RR, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(RR) {
        this._backOpDepthFail !== RR && (this._backOpDepthFail = RR, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(RR) {
        this._backOpStencilDepthPass !== RR && (this._backOpStencilDepthPass = RR, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(RR) {
        this._mask !== RR && (this._mask = RR, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(RR) {
        this._enabled !== RR && (this._enabled = RR, this._isStencilTestDirty = !0)
      }
      constructor() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, RR && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(RR) {
        if (!RR) return;
        const JR = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = JR ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = JR ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = JR ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = JR ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = JR ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = JR ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = JR ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = JR ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = JR ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = JR ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = JR ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = JR ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? RR.enable(RR.STENCIL_TEST) : RR.disable(RR.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (RR.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (RR.stencilFuncSeparate(RR.FRONT, this.func, this.funcRef, this.funcMask), RR.stencilFuncSeparate(RR.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (RR.stencilOpSeparate(RR.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), RR.stencilOpSeparate(RR.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class KR {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = KR.ALWAYS, this.opStencilFail = KR.KEEP, this.opDepthFail = KR.KEEP, this.opStencilDepthPass = KR.REPLACE, this.backFunc = KR.ALWAYS, this.backOpStencilFail = KR.KEEP, this.backOpDepthFail = KR.KEEP, this.backOpStencilDepthPass = KR.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(RR) {
        this.func = RR
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(RR) {
        this.backFunc = RR
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(RR) {
        this.funcRef = RR
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(RR) {
        this.funcMask = RR
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(RR) {
        this.opStencilFail = RR
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(RR) {
        this.opDepthFail = RR
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(RR) {
        this.opStencilDepthPass = RR
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(RR) {
        this.backOpStencilFail = RR
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(RR) {
        this.backOpDepthFail = RR
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(RR) {
        this.backOpStencilDepthPass = RR
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(RR) {
        this.mask = RR
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(RR) {
        this.enabled = RR
      }
    }
    KR.ALWAYS = 519, KR.KEEP = 7680, KR.REPLACE = 7681;
    var wR = GR(41429),
      rR = GR(41407),
      eR = GR(41364),
      aR = GR(41395),
      LR = GR(41399);

    function nR(RR, JR) {
      if (JR) {
        const {
          requestAnimationFrame: GR
        } = JR;
        if ("function" === typeof GR) return GR(RR)
      }
      if ((0, aR.m)()) {
        const {
          requestAnimationFrame: GR
        } = JR || window;
        if ("function" === typeof GR) return GR(RR)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(RR);
      return setTimeout(RR, 16)
    }
    class UR {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(RR) {
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
      get LtR() {
        return this._useReverseDepthBuffer
      }
      set LtR(RR) {
        RR !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = RR, this._depthCullingState.depthFunc = RR ? 518 : 515)
      }
      setColorWrite(RR) {
        RR !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = RR)
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
      _getGlobalDefines(RR) {
        if (RR) return this.isNDCHalfZRange ? RR.IS_NDC_HALF_ZRANGE = "" : delete RR.IS_NDC_HALF_ZRANGE, this.LtR ? RR.USE_REVERSE_DEPTHBUFFER = "" : delete RR.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? RR.USE_EXACT_SRGB_CONVERSIONS = "" : delete RR.USE_EXACT_SRGB_CONVERSIONS);
        {
          let RR = "";
          return this.isNDCHalfZRange && (RR += "#define IS_NDC_HALF_ZRANGE"), this.LtR && (RR && (RR += "\n"), RR += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (RR && (RR += "\n"), RR += "#define USE_EXACT_SRGB_CONVERSIONS"), RR
        }
      }
      _rebuildInternalTextures() {
        const RR = this._internalTexturesCache.slice();
        for (const JR of RR) JR._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const RR = this._renderTargetWrapperCache.slice();
        for (const JR of RR) JR.textures?.some((RR => 15 === RR.source)) || JR._rebuild()
      }
      _rebuildEffects() {
        for (const RR in this._compiledEffects) {
          const JR = this._compiledEffects[RR];
          JR._pipelineContext = null, JR._prepareEffect()
        }
        tR.d.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        ZR.c.Warn(this.name + " context successfully restored."), this.Ye.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(RR) {
        setTimeout((() => {
          this._clearEmptyResources();
          const JR = this._depthCullingState.depthTest,
            GR = this._depthCullingState.depthFunc,
            yR = this._depthCullingState.depthMask,
            tR = this._stencilState.stencilTest;
          RR(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = JR, this._depthCullingState.depthFunc = GR, this._depthCullingState.depthMask = yR, this._stencilState.stencilTest = tR, this._flagContextRestored()
        }), 0)
      }
      get oB() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(RR) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(RR) {}
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
          const RR = new Uint8Array(4),
            JR = [RR, RR, RR, RR, RR, RR];
          this._emptyCubeTexture = this.createRawCubeTexture(JR, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(RR) {
        this._framebufferDimensionsObject = RR
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(RR) {
        if (!RR) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const JR = this._activeRenderLoops.indexOf(RR);
        JR >= 0 && (this._activeRenderLoops.splice(JR, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: RR
            } = this.customAnimationFrameRequester;
            RR && RR(this.customAnimationFrameRequester.Te), delete this.customAnimationFrameRequester.Te
          }
        } else if (0 !== this._frameHandler) {
          const RR = this._frameHandler;
          if (this._frameHandler = 0, (0, aR.m)()) {
            const {
              cancelAnimationFrame: JR
            } = this.getHostWindow() || window;
            if ("function" === typeof JR) return JR(RR)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(RR);
          return clearTimeout(RR)
        }
      }
      yX() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      XK() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(RR) {
        this._maxFPS = RR, void 0 !== RR && (this._minFrameTime = RR <= 0 ? Number.MAX_VALUE : 1e3 / RR)
      }
      _isOverFrameTime(RR) {
        if (!RR || void 0 === this._maxFPS) return !1;
        const JR = RR - this._lastFrameTime;
        return this._lastFrameTime = RR, this._renderAccumulator += JR, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(RR) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(RR)) {
          let RR = !0;
          (this.oB || !this.renderEvenInBackground && this._windowIsBackground) && (RR = !1), RR && (this.yX(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.XK())
        }
      }
      _renderLoop(RR) {
        this._processFrame(RR), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let RR = 0; RR < this._activeRenderLoops.length; RR++) {
          (0, this._activeRenderLoops[RR])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(RR, JR) {
        return nR(RR, JR)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Te = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.Te) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(RR) {
        -1 === this._activeRenderLoops.indexOf(RR) && (this._activeRenderLoops.push(RR), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(RR) {
        this._depthCullingState.depthTest = RR
      }
      setZOffset(RR) {
        this._depthCullingState.zOffset = this.LtR ? -RR : RR
      }
      getZOffset() {
        const RR = this._depthCullingState.zOffset;
        return this.LtR ? -RR : RR
      }
      setZOffsetUnits(RR) {
        this._depthCullingState.zOffsetUnits = this.LtR ? -RR : RR
      }
      getZOffsetUnits() {
        const RR = this._depthCullingState.zOffsetUnits;
        return this.LtR ? -RR : RR
      }
      getHostWindow() {
        return (0, aR.m)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(RR) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const RR of this.scenes) RR._rebuildTextures();
        for (const RR of this._virtualScenes) RR._rebuildTextures()
      }
      _releaseRenderTargetWrapper(RR) {
        const JR = this._renderTargetWrapperCache.indexOf(RR); - 1 !== JR && this._renderTargetWrapperCache.splice(JR, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(RR, JR, GR) {
        const yR = JR || this.getRenderWidth(),
          tR = GR || this.getRenderHeight(),
          uR = RR.x || 0,
          ZR = RR.y || 0;
        this._cachedViewport = RR, this._viewport(uR * yR, ZR * tR, yR * RR.width, tR * RR.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(RR) {
        return new Path2D(RR)
      }
      get description() {
        let RR = this.name + this.version;
        return this._caps.parallelShaderCompile && (RR += " - Parallel shader compilation"), RR
      }
      _createTextureBase(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          qR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          iR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          fR = arguments.length > 7 ? arguments[7] : void 0,
          VR = arguments.length > 8 ? arguments[8] : void 0,
          KR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          wR = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          rR = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          aR = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          LR = arguments.length > 13 ? arguments[13] : void 0,
          nR = arguments.length > 14 ? arguments[14] : void 0,
          WR = arguments.length > 15 ? arguments[15] : void 0;
        const AR = "data:" === (RR = RR || "").substring(0, 5),
          CR = "blob:" === RR.substring(0, 5),
          XR = AR && -1 !== RR.indexOf(";base64,"),
          MR = wR || new eR.b(this, 1);
        MR !== wR && (MR.label = RR.substring(0, 60));
        const BR = RR;
        !this._transformTextureUrl || XR || wR || KR || (RR = this._transformTextureUrl(RR)), BR !== RR && (MR._originalUrl = BR);
        const lR = RR.lastIndexOf(".");
        let pR = aR || (lR > -1 ? RR.substring(lR).toLowerCase() : "");
        pR.indexOf("?") > -1 && (pR = pR.split("?")[0]);
        const gR = UR.GetCompatibleTextureLoader(pR, LR);
        yR && yR.addPendingData(MR), MR.url = RR, MR.generateMipMaps = !JR, MR.samplingMode = tR, MR.invertY = GR, MR._useSRGBBuffer = this._getUseSRGBBuffer(!!WR, JR), this._doNotHandleContextLost || (MR._buffer = KR);
        let bR = null;
        qR && !wR && (bR = MR.onLoadedObservable.add(qR)), wR || this._internalTexturesCache.push(MR);
        const vR = (GR, wR) => {
          yR && yR.removePendingData(MR), RR === BR ? (bR && MR.onLoadedObservable.remove(bR), uR.c.UseFallbackTexture && RR !== uR.c.FallbackTexture && this._createTextureBase(uR.c.FallbackTexture, JR, MR.invertY, yR, tR, null, iR, fR, VR, KR, MR), GR = (GR || "Unknown error") + (uR.c.UseFallbackTexture ? " - Fallback texture was used" : ""), MR.onErrorObservable.notifyObservers({
            message: GR,
            exception: wR
          }), iR && iR(GR, wR)) : (ZR.c.Warn(`Failed to load ${RR}, falling back to ${BR}`), this._createTextureBase(BR, JR, MR.invertY, yR, tR, qR, iR, fR, VR, KR, MR, rR, aR, LR, nR, WR))
        };
        if (gR) {
          const JR = async RR => {
            (await gR).loadData(RR, MR, ((RR, JR, GR, uR, ZR, qR) => {
              qR ? vR("TextureLoader failed to load data") : fR(MR, pR, yR, {
                width: RR,
                height: JR
              }, MR.invertY, !GR, uR, (() => (ZR(), !1)), tR)
            }), nR)
          };
          if (KR) {
            const RR = async RR => {
              try {
                await JR(RR)
              } catch (GR) {
                vR("Failed to parse texture data", GR)
              }
            };
            KR instanceof ArrayBuffer ? RR(new Uint8Array(KR)) : ArrayBuffer.isView(KR) ? RR(KR) : iR && iR("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(RR, (async RR => {
            try {
              await JR(new Uint8Array(RR))
            } catch (GR) {
              vR("Failed to parse texture data", GR)
            }
          }), void 0, yR ? yR.offlineProvider : void 0, !0, ((RR, JR) => {
            vR("Unable to load " + (RR && RR.responseURL, JR))
          }))
        } else {
          const GR = RR => {
            CR && !this._doNotHandleContextLost && (MR._buffer = RR), fR(MR, pR, yR, RR, MR.invertY, JR, !1, VR, tR)
          };
          !AR || XR ? KR && ("string" === typeof KR.decoding || KR.close) ? GR(KR) : UR._FileToolsLoadImage(RR || "", GR, vR, yR ? yR.offlineProvider : null, LR, MR.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof KR || KR instanceof ArrayBuffer || ArrayBuffer.isView(KR) || KR instanceof Blob ? UR._FileToolsLoadImage(KR, GR, vR, yR ? yR.offlineProvider : null, LR, MR.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : KR && GR(KR)
        }
        return MR
      }
      _rebuildBuffers() {
        for (const RR of this._uniformBuffers) RR._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, aR.e)() ? document : null
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
        for (const RR in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, RR) && (this._boundTexturesCache[RR] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(RR) {
        this._name = RR
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
      setHardwareScalingLevel(RR) {
        this._hardwareScalingLevel = RR, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(RR) {
        this._doNotHandleContextLost = RR
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(RR, JR, GR) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new fR, this._stencilStateComposer = new VR, this._stencilState = new KR, this._alphaState = new wR.d(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new yR.b, this.onCanvasFocusObservable = new yR.b, this.onNewSceneAddedObservable = new yR.b, this.onResizeObservable = new yR.b, this.onCanvasPointerOutObservable = new yR.b, this.onEffectErrorObservable = new yR.b, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new yR.b, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = RR => this._renderLoop(RR), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new yR.b, this.onAfterShaderCompilationObservable = new yR.b, this.onBeginFrameObservable = new yR.b, this.onEndFrameObservable = new yR.b, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new yR.b, this.Ye = new yR.b, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.YH = new yR.b, this.onReleaseEffectsObservable = new yR.b, uR.c.Instances.push(this), this.startTime = iR.b.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, qR.c.SetMatrixPrecision(!!JR.useLargeWorldRendering || !!JR.useHighPrecisionMatrix), (0, aR.i)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), JR.antialias = RR ?? JR.antialias, JR.deterministicLockstep = JR.deterministicLockstep ?? !1, JR.lockstepMaxSteps = JR.lockstepMaxSteps ?? 4, JR.timeStep = JR.timeStep ?? 1 / 60, JR.stencil = JR.stencil ?? !0, this._audioContext = JR.audioEngineOptions?.audioContext ?? null, this._audioDestination = JR.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = JR.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!JR.doNotHandleContextLost, this._isStencilEnable = !!JR.stencil, this.useExactSrgbConversions = JR.useExactSrgbConversions ?? !1, this.canvasTabIndex = JR.canvasTabIndex ?? this.canvasTabIndex;
        const tR = (0, aR.m)() && window.devicePixelRatio || 1,
          ZR = JR.limitDeviceRatio || tR;
        GR = GR || JR.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = GR, this._hardwareScalingLevel = GR ? 1 / Math.min(ZR, tR) : 1, this._lastDevicePixelRatio = tR, this._creationOptions = JR
      }
      resize() {
        let RR, JR, GR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const RR = (0, aR.m)() && window.devicePixelRatio || 1,
            JR = this._lastDevicePixelRatio / RR;
          this._lastDevicePixelRatio = RR, this._hardwareScalingLevel *= JR
        }
        if ((0, aR.m)() && (0, aR.e)())
          if (this._renderingCanvas) {
            const GR = this._renderingCanvas.getBoundingClientRect?.();
            RR = this._renderingCanvas.clientWidth || GR?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, JR = this._renderingCanvas.clientHeight || GR?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else RR = window.innerWidth, JR = window.innerHeight;
        else RR = this._renderingCanvas ? this._renderingCanvas.width : 100, JR = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(RR / this._hardwareScalingLevel, JR / this._hardwareScalingLevel, GR)
      }
      setSize(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (RR |= 0, JR |= 0, !GR && this._renderingCanvas.width === RR && this._renderingCanvas.height === JR) return !1;
        if (this._renderingCanvas.width = RR, this._renderingCanvas.height = JR, this.scenes) {
          for (let RR = 0; RR < this.scenes.length; RR++) {
            const JR = this.scenes[RR];
            for (let RR = 0; RR < JR.cameras.length; RR++) {
              JR.cameras[RR]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR) {
        throw (0, rR.j)("engine.rawTexture")
      }
      createRawCubeTexture(RR, JR, GR, yR, tR, uR, ZR, qR) {
        throw (0, rR.j)("engine.rawTexture")
      }
      createRawTexture3D(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR) {
        throw (0, rR.j)("engine.rawTexture")
      }
      createRawTexture2DArray(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR) {
        throw (0, rR.j)("engine.rawTexture")
      }
      _sharedInit(RR) {
        this._renderingCanvas = RR
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const RR = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== RR.indexOf("Mobile") || -1 !== RR.indexOf("Mac") && (0, aR.e)() && "ontouchend" in document
        }, this._checkForMobile(), (0, aR.m)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(RR) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(RR, !1)
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
      _createImageBitmapFromSource(RR, JR) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(RR, JR) {
        return createImageBitmap(RR, JR)
      }
      resizeImageBitmap(RR, JR, GR) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(RR) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(RR, JR) {
        if ("undefined" === typeof document) return new OffscreenCanvas(RR, JR);
        const GR = document.createElement("canvas");
        return GR.width = RR, GR.height = JR, GR
      }
      createCanvas(RR, JR) {
        return UR._CreateCanvas(RR, JR)
      }
      static _FileToolsLoadImage(RR, JR, GR, yR, tR, uR, ZR) {
        if (!LR.d.loadImage) throw (0, rR.j)("FileTools");
        return LR.d.loadImage(RR, JR, GR, yR, tR, uR, ZR)
      }
      _loadFile(RR, JR, GR, yR, tR, uR) {
        const ZR = (0, LR.k)(RR, JR, GR, yR, tR, uR);
        return this._activeRequests.push(ZR), ZR.onCompleteObservable.add((() => {
          const RR = this._activeRequests.indexOf(ZR); - 1 !== RR && this._activeRequests.splice(RR, 1)
        })), ZR
      }
      static _FileToolsLoadFile(RR, JR, GR, yR, tR, uR) {
        if (LR.d.loadFile) return LR.d.loadFile(RR, JR, GR, yR, tR, uR);
        throw (0, rR.j)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), tR.d.ResetCache();
        for (const JR of this._activeRequests) JR.abort();
        this._boundRenderFunction = null, this.YH.notifyObservers(this), this.YH.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, aR.m)() && window.removeEventListener("resize", this._checkForMobile);
        const RR = uR.c.Instances.indexOf(this);
        RR >= 0 && uR.c.Instances.splice(RR, 1), uR.c.Instances.length || (uR.c.OnEnginesDisposedObservable.notifyObservers(this), uR.c.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(RR) {
        throw (0, rR.j)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(RR, JR) {
        for (let GR = 0; GR < uR.c.Instances.length; GR++) {
          const yR = uR.c.Instances[GR];
          for (let GR = 0; GR < yR.scenes.length; GR++) yR.scenes[GR].markAllMaterialsAsDirty(RR, JR)
        }
      }
      static GetCompatibleTextureLoader(RR, JR) {
        return null
      }
    }
    UR._RenderPassIdCounter = 0, UR._RescalePostProcessFactory = null, UR.CollisionsEpsilon = .001, UR.QueueNewFrame = nR
  },
  41387: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR
    });
    class yR {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? yR.ShadersRepository : yR.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? yR.ShadersStore : yR.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? yR.IncludesShadersStore : yR.IncludesShadersStoreWGSL
      }
    }
    yR.ShadersRepository = "src/Shaders/", yR.ShadersStore = {}, yR.IncludesShadersStore = {}, yR.ShadersRepositoryWGSL = "src/ShadersWGSL/", yR.ShadersStoreWGSL = {}, yR.IncludesShadersStoreWGSL = {}
  },
  41397: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => wR,
      g: () => WR,
      k: () => eR,
      n: () => rR,
      o: () => aR,
      r: () => UR,
      v: () => KR,
      z: () => fR,
      C: () => VR,
      E: () => iR,
      H: () => qR
    });
    class yR {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(RR) {
        RR && this.program && RR(this.program)
      }
      setEngine(RR) {
        this.engine = RR
      }
      _fillEffectInformation(RR, JR, GR, yR, tR, uR, ZR, qR) {
        const iR = this.engine;
        if (iR.supportsUniformBuffers)
          for (const VR in JR) RR.bindUniformBlock(VR, JR[VR]);
        let fR;
        for (this.engine.getUniforms(this, GR).forEach(((RR, JR) => {
            yR[GR[JR]] = RR
          })), this._uniforms = yR, fR = 0; fR < tR.length; fR++) {
          null == RR.getUniform(tR[fR]) && (tR.splice(fR, 1), fR--)
        }
        tR.forEach(((RR, JR) => {
          uR[RR] = JR
        }));
        for (const VR of iR.getAttributes(this, ZR)) qR.push(VR)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(RR, JR) {
        const GR = this._valueCache[RR],
          yR = JR.updateFlag;
        if (void 0 !== GR && GR === yR) return !1;
        const tR = JR.QtR();
        let uR = this._matrixValueCache[RR];
        if (void 0 !== GR && null !== GR && void 0 !== uR) {
          let JR = !0;
          for (let RR = 15; RR >= 0; RR--)
            if (uR[RR] !== tR[RR]) {
              JR = !1;
              break
            } if (JR) return this._valueCache[RR] = yR, !1
        }
        return void 0 === uR && (uR = this._matrixValueCache[RR] = new Float32Array(16)), uR.set(tR), this._valueCache[RR] = yR, !0
      }
      _cacheFloat2(RR, JR, GR) {
        let yR = this._valueCache[RR];
        if (!yR || 2 !== yR.length) return yR = [JR, GR], this._valueCache[RR] = yR, !0;
        let tR = !1;
        return yR[0] !== JR && (yR[0] = JR, tR = !0), yR[1] !== GR && (yR[1] = GR, tR = !0), tR
      }
      _cacheFloat3(RR, JR, GR, yR) {
        let tR = this._valueCache[RR];
        if (!tR || 3 !== tR.length) return tR = [JR, GR, yR], this._valueCache[RR] = tR, !0;
        let uR = !1;
        return tR[0] !== JR && (tR[0] = JR, uR = !0), tR[1] !== GR && (tR[1] = GR, uR = !0), tR[2] !== yR && (tR[2] = yR, uR = !0), uR
      }
      _cacheFloat4(RR, JR, GR, yR, tR) {
        let uR = this._valueCache[RR];
        if (!uR || 4 !== uR.length) return uR = [JR, GR, yR, tR], this._valueCache[RR] = uR, !0;
        let ZR = !1;
        return uR[0] !== JR && (uR[0] = JR, ZR = !0), uR[1] !== GR && (uR[1] = GR, ZR = !0), uR[2] !== yR && (uR[2] = yR, ZR = !0), uR[3] !== tR && (uR[3] = tR, ZR = !0), ZR
      }
      setInt(RR, JR) {
        const GR = this._valueCache[RR];
        void 0 !== GR && GR === JR || this.engine.setInt(this._uniforms[RR], JR) && (this._valueCache[RR] = JR)
      }
      setInt2(RR, JR, GR) {
        this._cacheFloat2(RR, JR, GR) && (this.engine.setInt2(this._uniforms[RR], JR, GR) || (this._valueCache[RR] = null))
      }
      setInt3(RR, JR, GR, yR) {
        this._cacheFloat3(RR, JR, GR, yR) && (this.engine.setInt3(this._uniforms[RR], JR, GR, yR) || (this._valueCache[RR] = null))
      }
      setInt4(RR, JR, GR, yR, tR) {
        this._cacheFloat4(RR, JR, GR, yR, tR) && (this.engine.setInt4(this._uniforms[RR], JR, GR, yR, tR) || (this._valueCache[RR] = null))
      }
      setIntArray(RR, JR) {
        this._valueCache[RR] = null, this.engine.setIntArray(this._uniforms[RR], JR)
      }
      setIntArray2(RR, JR) {
        this._valueCache[RR] = null, this.engine.setIntArray2(this._uniforms[RR], JR)
      }
      setIntArray3(RR, JR) {
        this._valueCache[RR] = null, this.engine.setIntArray3(this._uniforms[RR], JR)
      }
      setIntArray4(RR, JR) {
        this._valueCache[RR] = null, this.engine.setIntArray4(this._uniforms[RR], JR)
      }
      setUInt(RR, JR) {
        const GR = this._valueCache[RR];
        void 0 !== GR && GR === JR || this.engine.setUInt(this._uniforms[RR], JR) && (this._valueCache[RR] = JR)
      }
      setUInt2(RR, JR, GR) {
        this._cacheFloat2(RR, JR, GR) && (this.engine.setUInt2(this._uniforms[RR], JR, GR) || (this._valueCache[RR] = null))
      }
      setUInt3(RR, JR, GR, yR) {
        this._cacheFloat3(RR, JR, GR, yR) && (this.engine.setUInt3(this._uniforms[RR], JR, GR, yR) || (this._valueCache[RR] = null))
      }
      setUInt4(RR, JR, GR, yR, tR) {
        this._cacheFloat4(RR, JR, GR, yR, tR) && (this.engine.setUInt4(this._uniforms[RR], JR, GR, yR, tR) || (this._valueCache[RR] = null))
      }
      setUIntArray(RR, JR) {
        this._valueCache[RR] = null, this.engine.setUIntArray(this._uniforms[RR], JR)
      }
      setUIntArray2(RR, JR) {
        this._valueCache[RR] = null, this.engine.setUIntArray2(this._uniforms[RR], JR)
      }
      setUIntArray3(RR, JR) {
        this._valueCache[RR] = null, this.engine.setUIntArray3(this._uniforms[RR], JR)
      }
      setUIntArray4(RR, JR) {
        this._valueCache[RR] = null, this.engine.setUIntArray4(this._uniforms[RR], JR)
      }
      setArray(RR, JR) {
        this._valueCache[RR] = null, this.engine.setArray(this._uniforms[RR], JR)
      }
      setArray2(RR, JR) {
        this._valueCache[RR] = null, this.engine.setArray2(this._uniforms[RR], JR)
      }
      setArray3(RR, JR) {
        this._valueCache[RR] = null, this.engine.setArray3(this._uniforms[RR], JR)
      }
      setArray4(RR, JR) {
        this._valueCache[RR] = null, this.engine.setArray4(this._uniforms[RR], JR)
      }
      setMatrices(RR, JR) {
        JR && (this._valueCache[RR] = null, this.engine.setMatrices(this._uniforms[RR], JR))
      }
      setMatrix(RR, JR) {
        this._cacheMatrix(RR, JR) && (this.engine.setMatrices(this._uniforms[RR], JR.QtR()) || (this._valueCache[RR] = null))
      }
      setMatrix3x3(RR, JR) {
        this._valueCache[RR] = null, this.engine.setMatrix3x3(this._uniforms[RR], JR)
      }
      setMatrix2x2(RR, JR) {
        this._valueCache[RR] = null, this.engine.setMatrix2x2(this._uniforms[RR], JR)
      }
      setFloat(RR, JR) {
        const GR = this._valueCache[RR];
        void 0 !== GR && GR === JR || this.engine.setFloat(this._uniforms[RR], JR) && (this._valueCache[RR] = JR)
      }
      setVector2(RR, JR) {
        this._cacheFloat2(RR, JR.x, JR.y) && (this.engine.setFloat2(this._uniforms[RR], JR.x, JR.y) || (this._valueCache[RR] = null))
      }
      setFloat2(RR, JR, GR) {
        this._cacheFloat2(RR, JR, GR) && (this.engine.setFloat2(this._uniforms[RR], JR, GR) || (this._valueCache[RR] = null))
      }
      setVector3(RR, JR) {
        this._cacheFloat3(RR, JR.x, JR.y, JR.z) && (this.engine.setFloat3(this._uniforms[RR], JR.x, JR.y, JR.z) || (this._valueCache[RR] = null))
      }
      setFloat3(RR, JR, GR, yR) {
        this._cacheFloat3(RR, JR, GR, yR) && (this.engine.setFloat3(this._uniforms[RR], JR, GR, yR) || (this._valueCache[RR] = null))
      }
      setVector4(RR, JR) {
        this._cacheFloat4(RR, JR.x, JR.y, JR.z, JR.w) && (this.engine.setFloat4(this._uniforms[RR], JR.x, JR.y, JR.z, JR.w) || (this._valueCache[RR] = null))
      }
      setQuaternion(RR, JR) {
        this._cacheFloat4(RR, JR.x, JR.y, JR.z, JR.w) && (this.engine.setFloat4(this._uniforms[RR], JR.x, JR.y, JR.z, JR.w) || (this._valueCache[RR] = null))
      }
      setFloat4(RR, JR, GR, yR, tR) {
        this._cacheFloat4(RR, JR, GR, yR, tR) && (this.engine.setFloat4(this._uniforms[RR], JR, GR, yR, tR) || (this._valueCache[RR] = null))
      }
      setColor3(RR, JR) {
        this._cacheFloat3(RR, JR.r, JR.g, JR.b) && (this.engine.setFloat3(this._uniforms[RR], JR.r, JR.g, JR.b) || (this._valueCache[RR] = null))
      }
      setColor4(RR, JR, GR) {
        this._cacheFloat4(RR, JR.r, JR.g, JR.b, GR) && (this.engine.setFloat4(this._uniforms[RR], JR.r, JR.g, JR.b, GR) || (this._valueCache[RR] = null))
      }
      setDirectColor4(RR, JR) {
        this._cacheFloat4(RR, JR.r, JR.g, JR.b, JR.a) && (this.engine.setFloat4(this._uniforms[RR], JR.r, JR.g, JR.b, JR.a) || (this._valueCache[RR] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var tR = GR(41399);
    const uR = new WeakMap,
      ZR = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function qR(RR) {
      let JR = uR.get(RR);
      if (!JR) {
        if (!RR) return ZR;
        JR = {
          _webGLVersion: RR.TEXTURE_BINDING_3D ? 2 : 1,
          _context: RR,
          parallelShaderCompile: RR.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, uR.set(RR, JR)
      }
      return JR
    }

    function iR(RR) {
      uR.delete(RR)
    }

    function fR(RR, JR, GR, yR, tR, uR) {
      const ZR = qR(yR);
      uR || (uR = ZR._createShaderProgramInjection ?? wR);
      return uR(RR, nR(JR, "vertex", yR, ZR._contextWasLost), nR(GR, "fragment", yR, ZR._contextWasLost), yR, tR, ZR.validateShaderPrograms)
    }

    function VR(RR, JR, GR, yR, tR) {
      let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        ZR = arguments.length > 6 ? arguments[6] : void 0;
      const iR = qR(tR);
      ZR || (ZR = iR._createShaderProgramInjection ?? wR);
      const fR = iR._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return ZR(RR, LR(JR, "vertex", yR, fR, tR, iR._contextWasLost), LR(GR, "fragment", yR, fR, tR, iR._contextWasLost), tR, uR, iR.validateShaderPrograms)
    }

    function KR(RR, JR) {
      const GR = new yR,
        tR = qR(RR);
      return tR.parallelShaderCompile && !tR.disableParallelShaderCompile && (GR.isParallelCompiled = !0), GR.context = tR._context, GR
    }

    function wR(RR, JR, GR, yR) {
      let tR = arguments.length > 5 ? arguments[5] : void 0;
      const uR = yR.createProgram();
      if (RR.program = uR, !uR) throw new Error("Unable to create program");
      return yR.attachShader(uR, JR), yR.attachShader(uR, GR), yR.linkProgram(uR), RR.context = yR, RR.vertexShader = JR, RR.fragmentShader = GR, RR.isParallelCompiled || eR(RR, yR, tR), uR
    }

    function rR(RR, JR, GR) {
      const yR = RR;
      if (yR._isDisposed) return !1;
      const tR = qR(JR);
      return !!(tR && tR.parallelShaderCompile && tR.parallelShaderCompile.COMPLETION_STATUS_KHR && yR.program && JR.getProgramParameter(yR.program, tR.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (eR(yR, JR, GR), !0)
    }

    function eR(RR, JR, GR) {
      const yR = RR.context,
        tR = RR.vertexShader,
        uR = RR.fragmentShader,
        ZR = RR.program;
      if (!yR.getProgramParameter(ZR, yR.LINK_STATUS)) {
        if (!JR.getShaderParameter(tR, JR.COMPILE_STATUS)) {
          const GR = JR.getShaderInfoLog(tR);
          if (GR) throw RR.vertexCompilationError = GR, new Error("VERTEX SHADER " + GR)
        }
        if (!JR.getShaderParameter(uR, JR.COMPILE_STATUS)) {
          const GR = JR.getShaderInfoLog(uR);
          if (GR) throw RR.fragmentCompilationError = GR, new Error("FRAGMENT SHADER " + GR)
        }
        const GR = yR.getProgramInfoLog(ZR);
        if (GR) throw RR.programLinkError = GR, new Error(GR)
      }
      if (GR) {
        yR.validateProgram(ZR);
        if (!yR.getProgramParameter(ZR, yR.VALIDATE_STATUS)) {
          const JR = yR.getProgramInfoLog(ZR);
          if (JR) throw RR.programValidationError = JR, new Error(JR)
        }
      }
      yR.deleteShader(tR), yR.deleteShader(uR), RR.vertexShader = void 0, RR.fragmentShader = void 0, RR.onCompiled && (RR.onCompiled(), RR.onCompiled = void 0)
    }

    function aR(RR, JR, GR, yR, tR, uR, ZR, iR, KR) {
      let wR = arguments.length > 10 ? arguments[10] : void 0,
        rR = arguments.length > 11 ? arguments[11] : void 0,
        eR = arguments.length > 12 ? arguments[12] : void 0;
      const aR = qR(RR.context);
      rR || (rR = aR.createRawShaderProgramInjection ?? fR), eR || (eR = aR.createShaderProgramInjection ?? VR);
      const LR = RR;
      LR.program = yR ? rR(LR, JR, GR, LR.context, KR) : eR(LR, JR, GR, iR, LR.context, KR), LR.program.__SPECTOR_rebuildProgram = ZR, wR()
    }

    function LR(RR, JR, GR, yR, uR, ZR) {
      return nR((0, tR.f)(RR, GR, yR), JR, uR, ZR)
    }

    function nR(RR, JR, GR, yR) {
      const tR = GR.createShader("vertex" === JR ? GR.VERTEX_SHADER : GR.FRAGMENT_SHADER);
      if (!tR) {
        let RR, tR = GR.NO_ERROR;
        for (;
          (RR = GR.getError()) !== GR.NO_ERROR;) tR = RR;
        throw new Error(`Something went wrong while creating a gl ${JR} shader object. gl error=${tR}, gl isContextLost=${GR.isContextLost()}, _contextWasLost=${yR}`)
      }
      return GR.shaderSource(tR, RR), GR.compileShader(tR), tR
    }

    function UR(RR, JR) {
      JR.useProgram(RR)
    }

    function WR(RR, JR) {
      const GR = RR;
      if (!GR.isParallelCompiled) return void JR(RR);
      const yR = GR.onCompiled;
      GR.onCompiled = () => {
        yR?.(), JR(RR)
      }
    }
  },
  41375: (RR, JR, GR) => {
    GR.d(JR, {
      ThinEngine: () => CR
    });
    var yR = GR(41382),
      tR = GR(41397),
      uR = GR(41418),
      ZR = GR(41436),
      qR = GR(39914),
      iR = GR(41395);
    class fR {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(RR, JR, GR, yR, tR) {
        if (tR.drawBuffersExtensionDisabled) {
          const JR = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          RR = RR.replace(JR, "")
        }
        return RR
      }
    }
    const VR = /(flat\s)?\s*varying\s*.*/;
    class KR {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(RR) {
        return RR.replace("attribute", "in")
      }
      varyingCheck(RR, JR) {
        return VR.test(RR)
      }
      varyingProcessor(RR, JR) {
        return RR.replace("varying", JR ? "in" : "out")
      }
      postProcessor(RR, JR, GR) {
        const yR = -1 !== RR.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (RR = (RR = RR.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), GR) {
          const GR = -1 !== RR.search(/layout *\(location *= *0\) *out/g),
            tR = -1 !== JR.indexOf("#define DUAL_SOURCE_BLENDING"),
            uR = tR ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          tR && (RR = "#extension GL_EXT_blend_func_extended : require\n" + RR), RR = (RR = (RR = (RR = (RR = (RR = (RR = RR.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (yR || GR ? "" : uR) + "void main(")
        } else {
          JR.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (RR = "invariant gl_Position;\n" + RR);
          if (-1 !== JR.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + RR
        }
        return RR
      }
    }
    var wR = GR(41441),
      rR = GR(41449),
      eR = GR(41457),
      aR = GR(41364),
      LR = GR(41399),
      nR = GR(41393),
      UR = GR(41466),
      WR = GR(41429);
    class AR {}
    class CR extends uR.c {
      get name() {
        return this._name
      }
      set name(RR) {
        this._name = RR
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return yR.d.ShadersRepository
      }
      static set ShadersRepository(RR) {
        yR.d.ShadersRepository = RR
      }
      get supportsUniformBuffers() {
        return this.Ma > 1 && !this.disableUniformBuffers
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
      constructor(RR, JR, GR, yR) {
        if (GR = GR || {}, super(JR ?? GR.antialias, GR, yR), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !RR) return;
        let uR;
        if (RR.getContext) {
          if (uR = RR, void 0 === GR.preserveDrawingBuffer && (GR.preserveDrawingBuffer = !1), void 0 === GR.xrCompatible && (GR.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const RR = navigator.userAgent;
            for (const JR of CR.ExceptionList) {
              const yR = JR.key,
                tR = JR.targets;
              if (new RegExp(yR).test(RR)) {
                if (JR.capture && JR.captureConstraint) {
                  const GR = JR.capture,
                    yR = JR.captureConstraint,
                    tR = new RegExp(GR).exec(RR);
                  if (tR && tR.length > 0) {
                    if (parseInt(tR[tR.length - 1]) >= yR) continue
                  }
                }
                for (const RR of tR) switch (RR) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    GR.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, tR.E)(this._gl)
            } : (this._onContextLost = RR => {
              RR.preventDefault(), this._contextWasLost = !0, (0, tR.E)(this._gl), qR.c.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, uR.addEventListener("webglcontextrestored", this._onContextRestored, !1), GR.powerPreference = GR.powerPreference || "high-performance"), uR.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (GR.xrCompatible = !1), !GR.disableWebGL2Support) try {
            this._gl = uR.getContext("webgl2", GR) || uR.getContext("experimental-webgl2", GR), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (VR) {}
          if (!this._gl) {
            if (!uR) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = uR.getContext("webgl", GR) || uR.getContext("experimental-webgl", GR)
            } catch (VR) {
              throw new Error("WebGL not supported", {
                cause: VR
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = RR, uR = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const JR = this._gl.getContextAttributes();
          JR && (GR.stencil = JR.stencil)
        }
        this._sharedInit(uR), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== GR.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = GR.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let tR = 0; tR < this._caps.maxVertexAttribs; tR++) this._currentBufferPointers[tR] = new AR;
        this._shaderProcessor = this.Ma > 1 ? new KR : new fR;
        const ZR = `Babylon.js v${CR.Version}`;
        qR.c.Log(ZR + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", ZR);
        const iR = (0, tR.H)(this._gl);
        iR.validateShaderPrograms = this.validateShaderPrograms, iR.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(RR) {
        return null
      }
      areAllEffectsReady() {
        for (const RR in this._compiledEffects) {
          if (!this._compiledEffects[RR].isReady()) return !1
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
        const RR = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != RR && (this._glRenderer = this._gl.getParameter(RR.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(RR.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const JR = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!JR, this._alphaState = new WR.d(this._caps.blendParametersPerTarget), JR && (this._gl.blendEquationSeparateIndexed = JR.blendEquationSeparateiOES.bind(JR), this._gl.blendEquationIndexed = JR.blendEquationiOES.bind(JR), this._gl.blendFuncSeparateIndexed = JR.blendFuncSeparateiOES.bind(JR), this._gl.blendFuncIndexed = JR.blendFunciOES.bind(JR), this._gl.colorMaskIndexed = JR.colorMaskiOES.bind(JR), this._gl.disableIndexed = JR.disableiOES.bind(JR), this._gl.enableIndexed = JR.enableiOES.bind(JR)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const RR = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== RR) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = RR.drawBuffersWEBGL.bind(RR), this._caps.maxDrawBuffers = this._gl.getParameter(RR.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let JR = 0; JR < 16; JR++) this._gl["COLOR_ATTACHMENT" + JR + "_WEBGL"] = RR["COLOR_ATTACHMENT" + JR + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const RR = this._gl.getExtension("WEBGL_depth_texture");
          null != RR && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = RR.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const RR = this._gl.getExtension("OES_vertex_array_object");
          null != RR && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = RR.createVertexArrayOES.bind(RR), this._gl.bindVertexArray = RR.bindVertexArrayOES.bind(RR), this._gl.deleteVertexArray = RR.deleteVertexArrayOES.bind(RR))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const RR = this._gl.getExtension("ANGLE_instanced_arrays");
          null != RR ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = RR.drawArraysInstancedANGLE.bind(RR), this._gl.drawElementsInstanced = RR.drawElementsInstancedANGLE.bind(RR), this._gl.vertexAttribDivisor = RR.vertexAttribDivisorANGLE.bind(RR)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const RR = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            JR = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (RR && JR && (this._caps.highPrecisionShaderSupported = 0 !== RR.precision && 0 !== JR.precision, this._caps.shaderFloatPrecision = Math.min(RR.precision, JR.precision)), !this._shouldUseHighPrecisionShader) {
            const RR = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              JR = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            RR && JR && (this._caps.shaderFloatPrecision = Math.min(RR.precision, JR.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const RR = this._gl.getExtension("EXT_blend_minmax");
          null != RR && (this._caps.blendMinMax = !0, this._gl.MAX = RR.MAX_EXT, this._gl.MIN = RR.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const RR = this._gl.getExtension("EXT_sRGB");
            null != RR && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: RR.SRGB_EXT,
              SRGB8: RR.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: RR.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const RR = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== RR && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && RR)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let GR = 0; GR < this._maxSimultaneousTextures; GR++) this._nextFreeTextureSlots.push(GR);
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
      get Ma() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const RR = this._workingCanvas.getContext("2d");
        RR && (this._workingContext = RR)
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
        const RR = this.getGlInfo();
        return RR && RR.renderer ? RR.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const uR = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = uR;
        let ZR = 0;
        if (JR && RR) {
          let JR = !0;
          if (this._currentRenderTarget) {
            const GR = this._currentRenderTarget.texture?.format;
            if (void 0 !== GR && (0, UR.k)(GR)) {
              const GR = this._currentRenderTarget.texture?.type;
              void 0 !== GR && (0, UR.n)(GR) ? (CR._TempClearColorUint32[0] = 255 * RR.r, CR._TempClearColorUint32[1] = 255 * RR.g, CR._TempClearColorUint32[2] = 255 * RR.b, CR._TempClearColorUint32[3] = 255 * RR.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, CR._TempClearColorUint32), JR = !1) : (CR._TempClearColorInt32[0] = 255 * RR.r, CR._TempClearColorInt32[1] = 255 * RR.g, CR._TempClearColorInt32[2] = 255 * RR.b, CR._TempClearColorInt32[3] = 255 * RR.a, this._gl.clearBufferiv(this._gl.COLOR, 0, CR._TempClearColorInt32), JR = !1)
            }
          }
          JR && (this._gl.clearColor(RR.r, RR.g, RR.b, void 0 !== RR.a ? RR.a : 1), ZR |= this._gl.COLOR_BUFFER_BIT)
        }
        GR && (this.LtR ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), ZR |= this._gl.DEPTH_BUFFER_BIT), yR && (this._gl.clearStencil(tR), ZR |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(ZR)
      }
      _clearColorAttachment(RR, JR, GR, yR) {
        if ((0, UR.k)(GR)) {
          const GR = (0, UR.n)(yR),
            tR = GR ? CR._TempClearColorUint32 : CR._TempClearColorInt32;
          return tR[0] = JR.r, tR[1] = JR.g, tR[2] = JR.b, tR[3] = JR.a, void(GR ? this._gl.clearBufferuiv(this._gl.COLOR, RR, tR) : this._gl.clearBufferiv(this._gl.COLOR, RR, tR))
        }
        CR._TempClearColorFloat32[0] = JR.r, CR._TempClearColorFloat32[1] = JR.g, CR._TempClearColorFloat32[2] = JR.b, CR._TempClearColorFloat32[3] = JR.a, this._gl.clearBufferfv(this._gl.COLOR, RR, CR._TempClearColorFloat32)
      }
      _viewport(RR, JR, GR, yR) {
        RR === this._viewportCached.x && JR === this._viewportCached.y && GR === this._viewportCached.z && yR === this._viewportCached.w || (this._viewportCached.x = RR, this._viewportCached.y = JR, this._viewportCached.z = GR, this._viewportCached.w = yR, this._gl.viewport(RR, JR, GR, yR))
      }
      XK() {
        super.XK(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = arguments.length > 3 ? arguments[3] : void 0,
          tR = arguments.length > 4 ? arguments[4] : void 0,
          uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const iR = RR;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = RR, this._integerMRTAttachmentsMask = !RR.isMulti && RR.texture && (0, UR.k)(RR.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(iR._framebuffer);
        const fR = this._gl;
        RR.isMulti || (RR.is2DArray || RR.is3D ? (fR.framebufferTextureLayer(fR.FRAMEBUFFER, fR.COLOR_ATTACHMENT0, RR.texture._hardwareTexture?.underlyingResource, uR, ZR), iR._currentLOD = uR) : RR.isCube ? fR.framebufferTexture2D(fR.FRAMEBUFFER, fR.COLOR_ATTACHMENT0, fR.TEXTURE_CUBE_MAP_POSITIVE_X + JR, RR.texture._hardwareTexture?.underlyingResource, uR) : iR._currentLOD !== uR && (fR.framebufferTexture2D(fR.FRAMEBUFFER, fR.COLOR_ATTACHMENT0, fR.TEXTURE_2D, RR.texture._hardwareTexture?.underlyingResource, uR), iR._currentLOD = uR));
        const VR = RR._depthStencilTexture;
        if (VR) {
          RR.is3D && (RR.texture.width === VR.width && RR.texture.height === VR.height && RR.texture.depth === VR.depth || qR.c.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const GR = RR._depthStencilTextureWithStencil ? fR.DEPTH_STENCIL_ATTACHMENT : fR.DEPTH_ATTACHMENT;
          RR.is2DArray || RR.is3D ? fR.framebufferTextureLayer(fR.FRAMEBUFFER, GR, VR._hardwareTexture?.underlyingResource, uR, ZR) : RR.isCube ? fR.framebufferTexture2D(fR.FRAMEBUFFER, GR, fR.TEXTURE_CUBE_MAP_POSITIVE_X + JR, VR._hardwareTexture?.underlyingResource, uR) : fR.framebufferTexture2D(fR.FRAMEBUFFER, GR, fR.TEXTURE_2D, VR._hardwareTexture?.underlyingResource, uR)
        }
        iR._MSAAFramebuffer && this._bindUnboundFramebuffer(iR._MSAAFramebuffer), this._cachedViewport && !tR ? this.setViewport(this._cachedViewport, GR, yR) : (GR || (GR = RR.width, uR && (GR /= Math.pow(2, uR))), yR || (yR = RR.height, uR && (yR /= Math.pow(2, uR))), this._viewport(0, 0, GR, yR)), this.wipeCaches()
      }
      setStateCullFaceType(RR, JR) {
        const GR = this.cullBackFaces ?? RR ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== GR || JR) && (this._depthCullingState.cullFace = GR)
      }
      setState(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          tR = arguments.length > 4 ? arguments[4] : void 0,
          uR = arguments.length > 5 ? arguments[5] : void 0,
          ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== RR || GR) && (this._depthCullingState.cull = RR), this.setStateCullFaceType(tR, GR), this.setZOffset(JR), this.setZOffsetUnits(ZR);
        const qR = yR ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== qR || GR) && (this._depthCullingState.frontFace = qR), this._stencilStateComposer.stencilMaterial = uR
      }
      _resolveAndGenerateMipMapsFramebuffer(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        RR.disableAutomaticMSAAResolve || (RR.isMulti ? this.resolveMultiFramebuffer(RR) : this.resolveFramebuffer(RR)), JR || (RR.isMulti ? this.generateMipMapsMultiFramebuffer(RR) : this.generateMipMapsFramebuffer(RR))
      }
      _bindUnboundFramebuffer(RR) {
        this._currentFramebuffer !== RR && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, RR), this._currentFramebuffer = RR)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(RR) {
        const JR = this._getTextureTarget(RR);
        this._bindTextureDirectly(JR, RR, !0), this._gl.generateMipmap(JR), this._bindTextureDirectly(JR, null)
      }
      unBindFramebuffer(RR, JR, GR) {
        const yR = RR;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(RR, JR), GR && (yR._MSAAFramebuffer && this._bindUnboundFramebuffer(yR._framebuffer), GR()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(RR) {
        RR.isMulti || !RR.texture?.generateMipMaps || RR.isCube || this.generateMipmaps(RR.texture)
      }
      resolveFramebuffer(RR) {
        const JR = RR,
          GR = this._gl;
        if (!JR._MSAAFramebuffer || JR.isMulti) return;
        let yR = JR.resolveMSAAColors ? GR.COLOR_BUFFER_BIT : 0;
        yR |= JR._generateDepthBuffer && JR.resolveMSAADepth ? GR.DEPTH_BUFFER_BIT : 0, yR |= JR._generateStencilBuffer && JR.resolveMSAAStencil ? GR.STENCIL_BUFFER_BIT : 0, GR.bindFramebuffer(GR.READ_FRAMEBUFFER, JR._MSAAFramebuffer), GR.bindFramebuffer(GR.DRAW_FRAMEBUFFER, JR._framebuffer), GR.blitFramebuffer(0, 0, RR.width, RR.height, 0, 0, RR.width, RR.height, yR, GR.NEAREST)
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
      createVertexBuffer(RR, JR, GR) {
        return this._createVertexBuffer(RR, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(RR, JR) {
        const GR = this._gl.createBuffer();
        if (!GR) throw new Error("Unable to create vertex buffer");
        const yR = new wR.d(GR);
        return this.bindArrayBuffer(yR), "number" !== typeof RR ? RR instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(RR), JR), yR.hK = 4 * RR.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, RR, JR), yR.hK = RR.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(RR), JR), yR.hK = RR), this._resetVertexBufferBinding(), yR.references = 1, yR
      }
      createDynamicVertexBuffer(RR, JR) {
        return this._createVertexBuffer(RR, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(RR, JR, GR) {
        const yR = this._gl.createBuffer(),
          tR = new wR.d(yR);
        if (!yR) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(tR);
        const uR = this._normalizeIndexData(RR);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, uR, JR ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), tR.references = 1, tR.is32Bits = 4 === uR.BYTES_PER_ELEMENT, tR
      }
      _normalizeIndexData(RR) {
        if (2 === RR.BYTES_PER_ELEMENT) return RR;
        if (this._caps.uintIndices) {
          if (RR instanceof Uint32Array) return RR;
          for (let JR = 0; JR < RR.length; JR++)
            if (RR[JR] >= 65535) return new Uint32Array(RR);
          return new Uint16Array(RR)
        }
        return new Uint16Array(RR)
      }
      bindArrayBuffer(RR) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(RR, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(RR, JR, GR) {
        const yR = RR.program,
          tR = this._gl.getUniformBlockIndex(yR, JR);
        this._gl.uniformBlockBinding(yR, tR, GR)
      }
      bindIndexBuffer(RR) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(RR, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(RR, JR) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[JR] !== RR) && (this._gl.bindBuffer(JR, RR ? RR.underlyingResource : null), this._currentBoundBuffer[JR] = RR)
      }
      updateArrayBuffer(RR) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, RR)
      }
      _vertexAttribPointer(RR, JR, GR, yR, tR, uR, ZR) {
        const qR = this._currentBufferPointers[JR];
        if (!qR) return;
        let iR = !1;
        qR.active ? (qR.buffer !== RR && (qR.buffer = RR, iR = !0), qR.size !== GR && (qR.size = GR, iR = !0), qR.type !== yR && (qR.type = yR, iR = !0), qR.normalized !== tR && (qR.normalized = tR, iR = !0), qR.stride !== uR && (qR.stride = uR, iR = !0), qR.offset !== ZR && (qR.offset = ZR, iR = !0)) : (iR = !0, qR.active = !0, qR.index = JR, qR.size = GR, qR.type = yR, qR.normalized = tR, qR.stride = uR, qR.offset = ZR, qR.buffer = RR), (iR || this._vaoRecordInProgress) && (this.bindArrayBuffer(RR), yR === this._gl.UNSIGNED_INT || yR === this._gl.INT ? this._gl.vertexAttribIPointer(JR, GR, yR, uR, ZR) : this._gl.vertexAttribPointer(JR, GR, yR, tR, uR, ZR))
      }
      _bindIndexBufferWithCache(RR) {
        null != RR && this._cachedIndexBuffer !== RR && (this._cachedIndexBuffer = RR, this.bindIndexBuffer(RR), this._uintIndicesCurrentlySet = RR.is32Bits)
      }
      _bindVertexBuffersAttributes(RR, JR, GR) {
        const yR = JR.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let tR = 0; tR < yR.length; tR++) {
          const uR = JR.getAttributeLocation(tR);
          if (uR >= 0) {
            const JR = yR[tR];
            let ZR = null;
            if (GR && (ZR = GR[JR]), ZR || (ZR = RR[JR]), !ZR) continue;
            this._gl.enableVertexAttribArray(uR), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[uR] = !0);
            const qR = ZR.getBuffer();
            qR && (this._vertexAttribPointer(qR, uR, ZR.getSize(), ZR.type, ZR.normalized, ZR.byteStride, ZR.byteOffset), ZR.getIsInstanced() && (this._gl.vertexAttribDivisor(uR, ZR.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(uR), this._currentInstanceBuffers.push(qR))))
          }
        }
      }
      recordVertexArrayObject(RR, JR, GR, yR) {
        const tR = this._gl.createVertexArray();
        if (!tR) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(tR), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(RR, GR, yR), this.bindIndexBuffer(JR), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), tR
      }
      bindVertexArrayObject(RR, JR) {
        this._cachedVertexArrayObject !== RR && (this._cachedVertexArrayObject = RR, this._gl.bindVertexArray(RR), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != JR && JR.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(RR, JR, GR, yR, tR) {
        if (this._cachedVertexBuffers !== RR || this._cachedEffectForVertexBuffers !== tR) {
          this._cachedVertexBuffers = RR, this._cachedEffectForVertexBuffers = tR;
          const JR = tR.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let uR = 0;
          for (let ZR = 0; ZR < JR; ZR++)
            if (ZR < GR.length) {
              const JR = tR.getAttributeLocation(ZR);
              JR >= 0 && (this._gl.enableVertexAttribArray(JR), this._vertexAttribArraysEnabled[JR] = !0, this._vertexAttribPointer(RR, JR, GR[ZR], this._gl.FLOAT, !1, yR, uR)), uR += 4 * GR[ZR]
            }
        }
        this._bindIndexBufferWithCache(JR)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(RR, JR, GR, yR) {
        this._cachedVertexBuffers === RR && this._cachedEffectForVertexBuffers === GR || (this._cachedVertexBuffers = RR, this._cachedEffectForVertexBuffers = GR, this._bindVertexBuffersAttributes(RR, GR, yR)), this._bindIndexBufferWithCache(JR)
      }
      unbindInstanceAttributes() {
        let RR;
        for (let JR = 0, GR = this._currentInstanceLocations.length; JR < GR; JR++) {
          const GR = this._currentInstanceBuffers[JR];
          RR != GR && GR.references && (RR = GR, this.bindArrayBuffer(GR));
          const yR = this._currentInstanceLocations[JR];
          this._gl.vertexAttribDivisor(yR, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(RR) {
        this._gl.deleteVertexArray(RR)
      }
      _releaseBuffer(RR) {
        return RR.references--, 0 === RR.references && (this._deleteBuffer(RR), !0)
      }
      _deleteBuffer(RR) {
        this._gl.deleteBuffer(RR.underlyingResource)
      }
      updateAndBindInstancesBuffer(RR, JR, GR) {
        if (this.bindArrayBuffer(RR), JR && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, JR), void 0 !== GR[0].index) this.bindInstancesBuffer(RR, GR, !0);
        else
          for (let yR = 0; yR < 4; yR++) {
            const JR = GR[yR];
            this._vertexAttribArraysEnabled[JR] || (this._gl.enableVertexAttribArray(JR), this._vertexAttribArraysEnabled[JR] = !0), this._vertexAttribPointer(RR, JR, 4, this._gl.FLOAT, !1, 64, 16 * yR), this._gl.vertexAttribDivisor(JR, 1), this._currentInstanceLocations.push(JR), this._currentInstanceBuffers.push(RR)
          }
      }
      bindInstancesBuffer(RR, JR) {
        let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(RR);
        let yR = 0;
        if (GR)
          for (let tR = 0; tR < JR.length; tR++) {
            yR += 4 * JR[tR].attributeSize
          }
        for (let tR = 0; tR < JR.length; tR++) {
          const GR = JR[tR];
          void 0 === GR.index && (GR.index = this._currentEffect.getAttributeLocationByName(GR.attributeName)), GR.index < 0 || (this._vertexAttribArraysEnabled[GR.index] || (this._gl.enableVertexAttribArray(GR.index), this._vertexAttribArraysEnabled[GR.index] = !0), this._vertexAttribPointer(RR, GR.index, GR.attributeSize, GR.attributeType || this._gl.FLOAT, GR.normalized || !1, yR, GR.offset), this._gl.vertexAttribDivisor(GR.index, void 0 === GR.divisor ? 1 : GR.divisor), this._currentInstanceLocations.push(GR.index), this._currentInstanceBuffers.push(RR))
        }
      }
      disableInstanceAttributeByName(RR) {
        if (!this._currentEffect) return;
        const JR = this._currentEffect.getAttributeLocationByName(RR);
        this.disableInstanceAttribute(JR)
      }
      disableInstanceAttribute(RR) {
        let JR, GR = !1;
        for (; - 1 !== (JR = this._currentInstanceLocations.indexOf(RR));) this._currentInstanceLocations.splice(JR, 1), this._currentInstanceBuffers.splice(JR, 1), GR = !0;
        GR && (this._gl.vertexAttribDivisor(RR, 0), this.disableAttributeByIndex(RR))
      }
      disableAttributeByIndex(RR) {
        this._gl.disableVertexAttribArray(RR), this._vertexAttribArraysEnabled[RR] = !1, this._currentBufferPointers[RR].active = !1
      }
      draw(RR, JR, GR, yR) {
        this.drawElementsType(RR ? 0 : 1, JR, GR, yR)
      }
      drawPointClouds(RR, JR, GR) {
        this.drawArraysType(2, RR, JR, GR)
      }
      drawUnIndexed(RR, JR, GR, yR) {
        this.drawArraysType(RR ? 0 : 1, JR, GR, yR)
      }
      drawElementsType(RR, JR, GR, yR) {
        this.applyStates(), this._reportDrawCall();
        const tR = this._drawMode(RR),
          uR = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          ZR = this._uintIndicesCurrentlySet ? 4 : 2;
        yR ? this._gl.drawElementsInstanced(tR, GR, uR, JR * ZR, yR) : this._gl.drawElements(tR, GR, uR, JR * ZR)
      }
      drawArraysType(RR, JR, GR, yR) {
        this.applyStates(), this._reportDrawCall();
        const tR = this._drawMode(RR);
        yR ? this._gl.drawArraysInstanced(tR, JR, GR, yR) : this._gl.drawArrays(tR, JR, GR)
      }
      _drawMode(RR) {
        switch (RR) {
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
      _releaseEffect(RR) {
        this._compiledEffects[RR._key] && delete this._compiledEffects[RR._key];
        const JR = RR.getPipelineContext();
        JR && this._deletePipelineContext(JR)
      }
      _deletePipelineContext(RR) {
        const JR = RR;
        JR && JR.program && (JR.program.__SPECTOR_rebuildProgram = null, (0, nR.k)(JR), this._gl && (this._currentProgram === JR.program && this._setProgram(null), this._gl.deleteProgram(JR.program)))
      }
      _getGlobalDefines(RR) {
        return (0, LR.j)(RR, this.isNDCHalfZRange, this.LtR, this.useExactSrgbConversions)
      }
      createEffect(RR, JR, GR, uR, ZR, qR, iR, fR, VR) {
        let KR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          wR = arguments.length > 10 ? arguments[10] : void 0;
        const rR = "string" === typeof RR ? RR : RR.vertexToken || RR.vertexSource || RR.vertexElement || RR.vertex,
          eR = "string" === typeof RR ? RR : RR.fragmentToken || RR.fragmentSource || RR.fragmentElement || RR.fragment,
          aR = this._getGlobalDefines(),
          LR = void 0 !== JR.attributes;
        let nR = ZR ?? JR.defines ?? "";
        aR && (nR += aR);
        const UR = rR + "+" + eR + "@" + nR;
        if (this._compiledEffects[UR]) {
          const RR = this._compiledEffects[UR];
          return iR && RR.isReady() && iR(RR), RR._refCount++, RR
        }
        this._gl && (0, tR.H)(this._gl);
        const WR = new yR.d(RR, JR, LR ? this : GR, uR, this, ZR, qR, iR, fR, VR, UR, JR.shaderLanguage ?? KR, JR.extraInitializationsAsync ?? wR);
        return this._compiledEffects[UR] = WR, WR
      }
      _getShaderSource(RR) {
        return this._gl.getShaderSource(RR)
      }
      createRawShaderProgram(RR, JR, GR, yR) {
        let uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const ZR = (0, tR.H)(this._gl);
        return ZR._contextWasLost = this._contextWasLost, ZR.validateShaderPrograms = this.validateShaderPrograms, (0, tR.z)(RR, JR, GR, yR || this._gl, uR)
      }
      createShaderProgram(RR, JR, GR, yR, uR) {
        let ZR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const qR = (0, tR.H)(this._gl);
        return qR._contextWasLost = this._contextWasLost, qR.validateShaderPrograms = this.validateShaderPrograms, (0, tR.C)(RR, JR, GR, yR, uR || this._gl, ZR)
      }
      inlineShaderCode(RR) {
        return RR
      }
      createPipelineContext(RR) {
        if (this._gl) {
          (0, tR.H)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const JR = (0, tR.v)(this._gl, RR);
        return JR.engine = this, JR
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(RR) {
        return (0, tR.k)(RR, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(RR, JR, GR, yR, uR, ZR, qR, iR, fR, VR, KR) {
        const wR = (0, tR.H)(this._gl);
        return wR._contextWasLost = this._contextWasLost, wR.validateShaderPrograms = this.validateShaderPrograms, wR._createShaderProgramInjection = this._createShaderProgram.bind(this), wR.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), wR.createShaderProgramInjection = this.createShaderProgram.bind(this), wR.loadFileInjection = this._loadFile.bind(this), (0, tR.o)(RR, JR, GR, yR, uR, ZR, qR, iR, fR, VR, KR)
      }
      _createShaderProgram(RR, JR, GR, yR) {
        let uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, tR.e)(RR, JR, GR, yR, uR)
      }
      _isRenderingStateCompiled(RR) {
        return !this._isDisposed && (0, tR.n)(RR, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(RR, JR) {
        (0, tR.g)(RR, JR)
      }
      getUniforms(RR, JR) {
        const GR = new Array,
          yR = RR;
        for (let tR = 0; tR < JR.length; tR++) GR.push(this._gl.getUniformLocation(yR.program, JR[tR]));
        return GR
      }
      getAttributes(RR, JR) {
        const GR = [],
          yR = RR;
        for (let uR = 0; uR < JR.length; uR++) try {
          GR.push(this._gl.getAttribLocation(yR.program, JR[uR]))
        } catch (tR) {
          GR.push(-1)
        }
        return GR
      }
      enableEffect(RR) {
        (RR = null !== RR && (0, ZR.d)(RR) ? RR.effect : RR) && RR !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(RR), this._currentEffect = RR, RR.onBind && RR.onBind(RR), RR._onBindObservable && RR._onBindObservable.notifyObservers(RR))
      }
      setInt(RR, JR) {
        return !!RR && (this._gl.uniform1i(RR, JR), !0)
      }
      setInt2(RR, JR, GR) {
        return !!RR && (this._gl.uniform2i(RR, JR, GR), !0)
      }
      setInt3(RR, JR, GR, yR) {
        return !!RR && (this._gl.uniform3i(RR, JR, GR, yR), !0)
      }
      setInt4(RR, JR, GR, yR, tR) {
        return !!RR && (this._gl.uniform4i(RR, JR, GR, yR, tR), !0)
      }
      setIntArray(RR, JR) {
        return !!RR && (this._gl.uniform1iv(RR, JR), !0)
      }
      setIntArray2(RR, JR) {
        return !(!RR || JR.length % 2 !== 0) && (this._gl.uniform2iv(RR, JR), !0)
      }
      setIntArray3(RR, JR) {
        return !(!RR || JR.length % 3 !== 0) && (this._gl.uniform3iv(RR, JR), !0)
      }
      setIntArray4(RR, JR) {
        return !(!RR || JR.length % 4 !== 0) && (this._gl.uniform4iv(RR, JR), !0)
      }
      setUInt(RR, JR) {
        return !!RR && (this._gl.uniform1ui(RR, JR), !0)
      }
      setUInt2(RR, JR, GR) {
        return !!RR && (this._gl.uniform2ui(RR, JR, GR), !0)
      }
      setUInt3(RR, JR, GR, yR) {
        return !!RR && (this._gl.uniform3ui(RR, JR, GR, yR), !0)
      }
      setUInt4(RR, JR, GR, yR, tR) {
        return !!RR && (this._gl.uniform4ui(RR, JR, GR, yR, tR), !0)
      }
      setUIntArray(RR, JR) {
        return !!RR && (this._gl.uniform1uiv(RR, JR), !0)
      }
      setUIntArray2(RR, JR) {
        return !(!RR || JR.length % 2 !== 0) && (this._gl.uniform2uiv(RR, JR), !0)
      }
      setUIntArray3(RR, JR) {
        return !(!RR || JR.length % 3 !== 0) && (this._gl.uniform3uiv(RR, JR), !0)
      }
      setUIntArray4(RR, JR) {
        return !(!RR || JR.length % 4 !== 0) && (this._gl.uniform4uiv(RR, JR), !0)
      }
      setArray(RR, JR) {
        return !!RR && (!(JR.length < 1) && (this._gl.uniform1fv(RR, JR), !0))
      }
      setArray2(RR, JR) {
        return !(!RR || JR.length % 2 !== 0) && (this._gl.uniform2fv(RR, JR), !0)
      }
      setArray3(RR, JR) {
        return !(!RR || JR.length % 3 !== 0) && (this._gl.uniform3fv(RR, JR), !0)
      }
      setArray4(RR, JR) {
        return !(!RR || JR.length % 4 !== 0) && (this._gl.uniform4fv(RR, JR), !0)
      }
      setMatrices(RR, JR) {
        return !!RR && (this._gl.uniformMatrix4fv(RR, !1, JR), !0)
      }
      setMatrix3x3(RR, JR) {
        return !!RR && (this._gl.uniformMatrix3fv(RR, !1, JR), !0)
      }
      setMatrix2x2(RR, JR) {
        return !!RR && (this._gl.uniformMatrix2fv(RR, !1, JR), !0)
      }
      setFloat(RR, JR) {
        return !!RR && (this._gl.uniform1f(RR, JR), !0)
      }
      setFloat2(RR, JR, GR) {
        return !!RR && (this._gl.uniform2f(RR, JR, GR), !0)
      }
      setFloat3(RR, JR, GR, yR) {
        return !!RR && (this._gl.uniform3f(RR, JR, GR, yR), !0)
      }
      setFloat4(RR, JR, GR, yR, tR) {
        return !!RR && (this._gl.uniform4f(RR, JR, GR, yR, tR), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const RR = this._colorWrite;
          this._gl.colorMask(RR, RR, RR, RR)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(RR) {
        this.preventCacheWipeBetweenFrames && !RR || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), RR && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(RR, JR) {
        const GR = this._gl;
        let yR = GR.NEAREST,
          tR = GR.NEAREST,
          uR = !1;
        switch (RR) {
          case 11:
            yR = GR.LINEAR, tR = JR ? GR.LINEAR_MIPMAP_NEAREST : GR.LINEAR;
            break;
          case 3:
            yR = GR.LINEAR, uR = !0, tR = JR ? GR.LINEAR_MIPMAP_LINEAR : GR.LINEAR;
            break;
          case 8:
            uR = !0, yR = GR.NEAREST, tR = JR ? GR.NEAREST_MIPMAP_LINEAR : GR.NEAREST;
            break;
          case 4:
            yR = GR.NEAREST, tR = JR ? GR.NEAREST_MIPMAP_NEAREST : GR.NEAREST;
            break;
          case 5:
            yR = GR.NEAREST, tR = JR ? GR.LINEAR_MIPMAP_NEAREST : GR.LINEAR;
            break;
          case 6:
            uR = !0, yR = GR.NEAREST, tR = JR ? GR.LINEAR_MIPMAP_LINEAR : GR.LINEAR;
            break;
          case 7:
            yR = GR.NEAREST, tR = GR.LINEAR;
            break;
          case 1:
            yR = GR.NEAREST, tR = GR.NEAREST;
            break;
          case 9:
            yR = GR.LINEAR, tR = JR ? GR.NEAREST_MIPMAP_NEAREST : GR.NEAREST;
            break;
          case 10:
            uR = !0, yR = GR.LINEAR, tR = JR ? GR.NEAREST_MIPMAP_LINEAR : GR.NEAREST;
            break;
          case 2:
            yR = GR.LINEAR, tR = GR.LINEAR;
            break;
          case 12:
            yR = GR.LINEAR, tR = GR.NEAREST
        }
        return {
          min: tR,
          mag: yR,
          hasMipMaps: uR
        }
      }
      _createTexture() {
        const RR = this._gl.createTexture();
        if (!RR) throw new Error("Unable to create texture");
        return RR
      }
      _createHardwareTexture() {
        return new eR.e(this._createTexture(), this._gl)
      }
      _createInternalTexture(RR, JR) {
        let GR, yR, tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          uR = !1,
          ZR = 0,
          iR = 3,
          fR = 5,
          VR = !1,
          KR = 1,
          wR = !1,
          rR = 0,
          eR = !1;
        void 0 !== JR && "object" === typeof JR ? (GR = !!JR.generateMipMaps, uR = !!JR.createMipMaps, ZR = void 0 === JR.type ? 0 : JR.type, iR = void 0 === JR.samplingMode ? 3 : JR.samplingMode, fR = void 0 === JR.format ? 5 : JR.format, VR = void 0 !== JR.useSRGBBuffer && JR.useSRGBBuffer, KR = JR.samples ?? 1, yR = JR.label, wR = !!JR.createMSAATexture, rR = JR.comparisonFunction || 0, eR = !!JR.isCube) : GR = !!JR, VR && (VR = this._caps.supportSRGBBuffers && (this.Ma > 1 || this.isWebGPU)), (1 !== ZR || this._caps.textureFloatLinearFiltering) && (2 !== ZR || this._caps.textureHalfFloatLinearFiltering) || (iR = 1), 1 !== ZR || this._caps.textureFloat || (ZR = 0, qR.c.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const LR = (0, UR.g)(fR),
          nR = (0, UR.d)(fR),
          WR = this._gl,
          AR = new aR.b(this, tR),
          CR = RR.width || RR,
          XR = RR.height || RR,
          MR = RR.depth || 0,
          BR = RR.layers || 0,
          lR = this._getSamplingParameters(iR, (GR || uR) && !LR),
          pR = 0 !== BR ? WR.TEXTURE_2D_ARRAY : 0 !== MR ? WR.TEXTURE_3D : eR ? WR.TEXTURE_CUBE_MAP : WR.TEXTURE_2D,
          gR = LR ? this._getInternalFormatFromDepthTextureFormat(fR, !0, nR) : this._getRGBABufferInternalSizedFormat(ZR, fR, VR),
          bR = LR ? nR ? WR.DEPTH_STENCIL : WR.DEPTH_COMPONENT : this._getInternalFormat(fR),
          vR = LR ? this._getWebGLTextureTypeFromDepthTextureFormat(fR) : this._getWebGLTextureType(ZR);
        if (this._bindTextureDirectly(pR, AR), 0 !== BR) AR.is2DArray = !0, WR.texImage3D(pR, 0, gR, CR, XR, BR, 0, bR, vR, null);
        else if (0 !== MR) AR.is3D = !0, WR.texImage3D(pR, 0, gR, CR, XR, MR, 0, bR, vR, null);
        else if (eR) {
          AR.isCube = !0;
          for (let RR = 0; RR < 6; RR++) WR.texImage2D(WR.TEXTURE_CUBE_MAP_POSITIVE_X + RR, 0, gR, CR, XR, 0, bR, vR, null)
        } else WR.texImage2D(pR, 0, gR, CR, XR, 0, bR, vR, null);
        if (WR.texParameteri(pR, WR.TEXTURE_MAG_FILTER, lR.mag), WR.texParameteri(pR, WR.TEXTURE_MIN_FILTER, lR.min), WR.texParameteri(pR, WR.TEXTURE_WRAP_S, WR.CLAMP_TO_EDGE), WR.texParameteri(pR, WR.TEXTURE_WRAP_T, WR.CLAMP_TO_EDGE), LR && this.Ma > 1 && (0 === rR ? (WR.texParameteri(pR, WR.TEXTURE_COMPARE_FUNC, 515), WR.texParameteri(pR, WR.TEXTURE_COMPARE_MODE, WR.NONE)) : (WR.texParameteri(pR, WR.TEXTURE_COMPARE_FUNC, rR), WR.texParameteri(pR, WR.TEXTURE_COMPARE_MODE, WR.COMPARE_REF_TO_TEXTURE))), (GR || uR) && this._gl.generateMipmap(pR), this._bindTextureDirectly(pR, null), AR._useSRGBBuffer = VR, AR.baseWidth = CR, AR.baseHeight = XR, AR.width = CR, AR.height = XR, AR.depth = BR || MR, AR.isReady = !0, AR.samples = KR, AR.generateMipMaps = GR, AR.samplingMode = iR, AR.type = ZR, AR.format = fR, AR.label = yR, AR.comparisonFunction = rR, this._internalTexturesCache.push(AR), wR) {
          let RR;
          if (RR = (0, UR.g)(AR.format) ? this._setupFramebufferDepthAttachments((0, UR.d)(AR.format), 19 !== AR.format, AR.width, AR.height, KR, AR.format, !0) : this._createRenderBuffer(AR.width, AR.height, KR, -1, this._getRGBABufferInternalSizedFormat(AR.type, AR.format, AR._useSRGBBuffer), -1), !RR) throw new Error("Unable to create render buffer");
          AR._autoMSAAManagement = !0;
          let JR = AR._hardwareTexture;
          JR || (JR = AR._hardwareTexture = this._createHardwareTexture()), JR.addMSAARenderBuffer(RR)
        }
        return AR
      }
      _getUseSRGBBuffer(RR, JR) {
        return RR && this._caps.supportSRGBBuffers && (this.Ma > 1 || JR)
      }
      createTexture(RR, JR, GR, yR) {
        var tR = this;
        let uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          ZR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          qR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          iR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          fR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          VR = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          KR = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          wR = arguments.length > 11 ? arguments[11] : void 0,
          rR = arguments.length > 12 ? arguments[12] : void 0,
          eR = arguments.length > 13 ? arguments[13] : void 0,
          LR = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(RR, JR, GR, yR, uR, ZR, qR, (function() {
          for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
          return tR._prepareWebGLTexture(...JR, VR)
        }), ((RR, JR, GR, tR, uR, ZR) => {
          const qR = this._gl,
            iR = GR.width === RR && GR.height === JR;
          uR._creationFlags = eR ?? 0;
          const fR = this._getTexImageParametersForCreateTexture(uR.format, uR._useSRGBBuffer);
          if (iR) return qR.texImage2D(qR.TEXTURE_2D, 0, fR.internalFormat, fR.format, fR.type, GR), !1;
          const VR = this._caps.maxTextureSize;
          if (GR.width > VR || GR.height > VR || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = RR, this._workingCanvas.height = JR, this._workingContext.drawImage(GR, 0, 0, GR.width, GR.height, 0, 0, RR, JR), qR.texImage2D(qR.TEXTURE_2D, 0, fR.internalFormat, fR.format, fR.type, this._workingCanvas), uR.width = RR, uR.height = JR, !1);
          {
            const RR = new aR.b(this, 2);
            this._bindTextureDirectly(qR.TEXTURE_2D, RR, !0), qR.texImage2D(qR.TEXTURE_2D, 0, fR.internalFormat, fR.format, fR.type, GR), this._rescaleTexture(RR, uR, yR, fR.format, (() => {
              this._releaseTexture(RR), this._bindTextureDirectly(qR.TEXTURE_2D, uR, !0), ZR()
            }))
          }
          return !0
        }), iR, fR, VR, KR, wR, rR, LR)
      }
      _getTexImageParametersForCreateTexture(RR, JR) {
        let GR, yR;
        return 1 === this.Ma ? (GR = this._getInternalFormat(RR, JR), yR = GR) : (GR = this._getInternalFormat(RR, !1), yR = this._getRGBABufferInternalSizedFormat(0, RR, JR)), {
          internalFormat: yR,
          format: GR,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(RR, JR, GR, yR, tR) {}
      _unpackFlipY(RR) {
        this._unpackFlipYCached !== RR && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, RR ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = RR))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(RR) {
        return RR.isCube ? this._gl.TEXTURE_CUBE_MAP : RR.is3D ? this._gl.TEXTURE_3D : RR.is2DArray || RR.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const yR = this._getTextureTarget(JR),
          tR = this._getSamplingParameters(RR, JR.useMipMaps || GR);
        this._setTextureParameterInteger(yR, this._gl.TEXTURE_MAG_FILTER, tR.mag, JR), this._setTextureParameterInteger(yR, this._gl.TEXTURE_MIN_FILTER, tR.min), GR && tR.hasMipMaps && (JR.generateMipMaps = !0, this._gl.generateMipmap(yR)), this._bindTextureDirectly(yR, null), JR.samplingMode = RR
      }
      updateTextureDimensions(RR, JR, GR) {}
      updateTextureWrappingMode(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const tR = this._getTextureTarget(RR);
        null !== JR && (this._setTextureParameterInteger(tR, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(JR), RR), RR._cachedWrapU = JR), null !== GR && (this._setTextureParameterInteger(tR, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(GR), RR), RR._cachedWrapV = GR), (RR.is2DArray || RR.is3D) && null !== yR && (this._setTextureParameterInteger(tR, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(yR), RR), RR._cachedWrapR = yR), this._bindTextureDirectly(tR, null)
      }
      _uploadCompressedDataToTextureDirectly(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const qR = this._gl;
        let iR = qR.TEXTURE_2D;
        if (RR.isCube && (iR = qR.TEXTURE_CUBE_MAP_POSITIVE_X + uR), RR._useSRGBBuffer) switch (JR) {
          case 37492:
          case 36196:
            this._caps.etc2 ? JR = qR.COMPRESSED_SRGB8_ETC2 : RR._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? JR = qR.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : RR._useSRGBBuffer = !1;
            break;
          case 36492:
            JR = qR.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            JR = qR.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            JR = qR.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            JR = qR.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            JR = qR.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            JR = qR.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            JR = qR.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            JR = qR.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            JR = qR.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            JR = qR.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            JR = qR.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            JR = qR.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            JR = qR.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            JR = qR.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            JR = qR.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? JR = qR.COMPRESSED_SRGB_S3TC_DXT1_EXT : RR._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? JR = qR.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : RR._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? JR = qR.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : RR._useSRGBBuffer = !1;
            break;
          default:
            RR._useSRGBBuffer = !1
        }
        if (RR.generateMipMaps) {
          const uR = RR._hardwareTexture;
          uR.memoryAllocated || (qR.texStorage2D(RR.isCube ? qR.TEXTURE_CUBE_MAP : qR.TEXTURE_2D, Math.floor(Math.log2(Math.max(GR, yR))) + 1, JR, RR.width, RR.height), uR.memoryAllocated = !0), this._gl.compressedTexSubImage2D(iR, ZR, 0, 0, GR, yR, JR, tR)
        } else this._gl.compressedTexImage2D(iR, ZR, JR, GR, yR, 0, tR)
      }
      _uploadDataToTextureDirectly(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          tR = arguments.length > 4 ? arguments[4] : void 0,
          uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const ZR = this._gl,
          qR = this._getWebGLTextureType(RR.type),
          iR = this._getInternalFormat(RR.format),
          fR = void 0 === tR ? this._getRGBABufferInternalSizedFormat(RR.type, RR.format, RR._useSRGBBuffer) : this._getInternalFormat(tR, RR._useSRGBBuffer);
        this._unpackFlipY(RR.invertY);
        let VR = ZR.TEXTURE_2D;
        RR.isCube && (VR = ZR.TEXTURE_CUBE_MAP_POSITIVE_X + GR);
        const KR = Math.round(Math.log(RR.width) * Math.LOG2E),
          wR = Math.round(Math.log(RR.height) * Math.LOG2E),
          rR = uR ? RR.width : Math.pow(2, Math.max(KR - yR, 0)),
          eR = uR ? RR.height : Math.pow(2, Math.max(wR - yR, 0));
        ZR.texImage2D(VR, yR, fR, rR, eR, 0, iR, qR, JR)
      }
      updateTextureData(RR, JR, GR, yR, tR, uR) {
        let ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          iR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const fR = this._gl,
          VR = this._getWebGLTextureType(RR.type),
          KR = this._getInternalFormat(RR.format);
        this._unpackFlipY(RR.invertY);
        let wR = fR.TEXTURE_2D,
          rR = fR.TEXTURE_2D;
        RR.isCube && (rR = fR.TEXTURE_CUBE_MAP_POSITIVE_X + ZR, wR = fR.TEXTURE_CUBE_MAP), this._bindTextureDirectly(wR, RR, !0), fR.texSubImage2D(rR, qR, GR, yR, tR, uR, KR, VR, JR), iR && this._gl.generateMipmap(rR), this._bindTextureDirectly(wR, null)
      }
      _uploadArrayBufferViewToTexture(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const tR = this._gl,
          uR = RR.isCube ? tR.TEXTURE_CUBE_MAP : tR.TEXTURE_2D;
        this._bindTextureDirectly(uR, RR, !0), this._uploadDataToTextureDirectly(RR, JR, GR, yR), this._bindTextureDirectly(uR, null, !0)
      }
      _prepareWebGLTextureContinuation(RR, JR, GR, yR, tR) {
        const uR = this._gl;
        if (!uR) return;
        const ZR = this._getSamplingParameters(tR, !GR);
        uR.texParameteri(uR.TEXTURE_2D, uR.TEXTURE_MAG_FILTER, ZR.mag), uR.texParameteri(uR.TEXTURE_2D, uR.TEXTURE_MIN_FILTER, ZR.min), GR || yR || uR.generateMipmap(uR.TEXTURE_2D), this._bindTextureDirectly(uR.TEXTURE_2D, null), JR && JR.removePendingData(RR), RR.onLoadedObservable.notifyObservers(RR), RR.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR) {
        const VR = this.getCaps().maxTextureSize,
          KR = Math.min(VR, this.needPOTTextures ? (0, rR.e)(yR.width, VR) : yR.width),
          wR = Math.min(VR, this.needPOTTextures ? (0, rR.e)(yR.height, VR) : yR.height),
          eR = this._gl;
        eR && (RR._hardwareTexture ? (this._bindTextureDirectly(eR.TEXTURE_2D, RR, !0), this._unpackFlipY(void 0 === tR || !!tR), RR.baseWidth = yR.width, RR.baseHeight = yR.height, RR.width = KR, RR.height = wR, RR.isReady = !0, RR.type = -1 !== RR.type ? RR.type : 0, RR.format = -1 !== RR.format ? RR.format : fR ?? (".jpg" !== JR || RR._useSRGBBuffer ? 5 : 4), qR(KR, wR, yR, JR, RR, (() => {
          this._prepareWebGLTextureContinuation(RR, GR, uR, ZR, iR)
        })) || this._prepareWebGLTextureContinuation(RR, GR, uR, ZR, iR)) : GR && GR.removePendingData(RR))
      }
      _getInternalFormatFromDepthTextureFormat(RR, JR, GR) {
        const yR = this._gl;
        if (!JR) return yR.STENCIL_INDEX8;
        let tR = GR ? yR.DEPTH_STENCIL : yR.DEPTH_COMPONENT;
        return this.Ma > 1 ? 15 === RR ? tR = yR.DEPTH_COMPONENT16 : 16 === RR ? tR = yR.DEPTH_COMPONENT24 : 17 === RR || 13 === RR ? tR = GR ? yR.DEPTH24_STENCIL8 : yR.DEPTH_COMPONENT24 : 14 === RR ? tR = yR.DEPTH_COMPONENT32F : 18 === RR && (tR = GR ? yR.DEPTH32F_STENCIL8 : yR.DEPTH_COMPONENT32F) : tR = yR.DEPTH_COMPONENT16, tR
      }
      _getWebGLTextureTypeFromDepthTextureFormat(RR) {
        const JR = this._gl;
        let GR = JR.UNSIGNED_INT;
        return 15 === RR ? GR = JR.UNSIGNED_SHORT : 17 === RR || 13 === RR ? GR = JR.UNSIGNED_INT_24_8 : 14 === RR ? GR = JR.FLOAT : 18 === RR ? GR = JR.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === RR && (GR = JR.UNSIGNED_BYTE), GR
      }
      _setupFramebufferDepthAttachments(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          uR = arguments.length > 5 ? arguments[5] : void 0,
          ZR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const qR = this._gl;
        uR = uR ?? (RR ? 13 : 14);
        const iR = this._getInternalFormatFromDepthTextureFormat(uR, JR, RR);
        return RR && JR ? this._createRenderBuffer(GR, yR, tR, qR.DEPTH_STENCIL, iR, ZR ? -1 : qR.DEPTH_STENCIL_ATTACHMENT) : JR ? this._createRenderBuffer(GR, yR, tR, iR, iR, ZR ? -1 : qR.DEPTH_ATTACHMENT) : RR ? this._createRenderBuffer(GR, yR, tR, iR, iR, ZR ? -1 : qR.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(RR, JR, GR, yR, tR, uR) {
        let ZR = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const qR = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(qR, RR, JR, GR, yR, tR, uR, ZR)
      }
      _updateRenderBuffer(RR, JR, GR, yR, tR, uR, ZR) {
        let qR = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const iR = this._gl;
        return iR.bindRenderbuffer(iR.RENDERBUFFER, RR), yR > 1 && iR.renderbufferStorageMultisample ? iR.renderbufferStorageMultisample(iR.RENDERBUFFER, yR, uR, JR, GR) : iR.renderbufferStorage(iR.RENDERBUFFER, tR, JR, GR), -1 !== ZR && iR.framebufferRenderbuffer(iR.FRAMEBUFFER, ZR, iR.RENDERBUFFER, RR), qR && iR.bindRenderbuffer(iR.RENDERBUFFER, null), RR
      }
      _releaseTexture(RR) {
        this._deleteTexture(RR._hardwareTexture), this.unbindAllTextures();
        const JR = this._internalTexturesCache.indexOf(RR); - 1 !== JR && this._internalTexturesCache.splice(JR, 1), RR._lodTextureHigh && RR._lodTextureHigh.dispose(), RR._lodTextureMid && RR._lodTextureMid.dispose(), RR._lodTextureLow && RR._lodTextureLow.dispose(), RR._irradianceTexture && RR._irradianceTexture.dispose()
      }
      _deleteTexture(RR) {
        RR?.release()
      }
      _setProgram(RR) {
        this._currentProgram !== RR && ((0, tR.r)(RR, this._gl), this._currentProgram = RR)
      }
      bindSamplers(RR) {
        const JR = RR.getPipelineContext();
        this._setProgram(JR.program);
        const GR = RR.getSamplers();
        for (let yR = 0; yR < GR.length; yR++) {
          const JR = RR.getUniform(GR[yR]);
          JR && (this._boundUniforms[yR] = JR)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          tR = !1;
        const uR = JR && JR._associatedChannel > -1;
        GR && uR && (this._activeChannel = JR._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== JR || yR) {
          if (this._activateCurrentTexture(), JR && JR.isMultiview) throw qR.c.Error(["_bindTextureDirectly called with a multiview texture!", RR, JR]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(RR, JR?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = JR, JR && (JR._associatedChannel = this._activeChannel)
        } else GR && (tR = !0, this._activateCurrentTexture());
        return uR && !GR && this._bindSamplerUniformToChannel(JR._associatedChannel, this._activeChannel), tR
      }
      _bindTexture(RR, JR, GR) {
        if (void 0 === RR) return;
        JR && (JR._associatedChannel = RR), this._activeChannel = RR;
        const yR = JR ? this._getTextureTarget(JR) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(yR, JR)
      }
      unbindAllTextures() {
        for (let RR = 0; RR < this._maxSimultaneousTextures; RR++) this._activeChannel = RR, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Ma > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(RR, JR, GR, yR) {
        void 0 !== RR && (JR && (this._boundUniforms[RR] = JR), this._setTexture(RR, GR))
      }
      _bindSamplerUniformToChannel(RR, JR) {
        const GR = this._boundUniforms[RR];
        GR && GR._currentState !== JR && (this._gl.uniform1i(GR, JR), GR._currentState = JR)
      }
      _getTextureWrapMode(RR) {
        switch (RR) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(RR, JR) {
        let GR, yR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!JR) return null != this._boundTexturesCache[RR] && (this._activeChannel = RR, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Ma > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (JR.video) {
          this._activeChannel = RR;
          const GR = JR.getInternalTexture();
          GR && (GR._associatedChannel = RR), JR.update()
        } else if (4 === JR.delayLoadState) return JR.delayLoad(), !1;
        GR = tR ? JR.depthStencilTexture : JR.isReady() ? JR.getInternalTexture() : JR.isCube ? this.emptyCubeTexture : JR.is3D ? this.emptyTexture3D : JR.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !yR && GR && (GR._associatedChannel = RR);
        let uR = !0;
        this._boundTexturesCache[RR] === GR && (yR || this._bindSamplerUniformToChannel(GR._associatedChannel, RR), uR = !1), this._activeChannel = RR;
        const ZR = this._getTextureTarget(GR);
        if (uR && this._bindTextureDirectly(ZR, GR, yR), GR && !GR.isMultiview) {
          if (GR.isCube && GR._cachedCoordinatesMode !== JR.coordinatesMode) {
            GR._cachedCoordinatesMode = JR.coordinatesMode;
            const RR = 3 !== JR.coordinatesMode && 5 !== JR.coordinatesMode ? 1 : 0;
            JR.wrapU = RR, JR.wrapV = RR
          }
          GR._cachedWrapU !== JR.wrapU && (GR._cachedWrapU = JR.wrapU, this._setTextureParameterInteger(ZR, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(JR.wrapU), GR)), GR._cachedWrapV !== JR.wrapV && (GR._cachedWrapV = JR.wrapV, this._setTextureParameterInteger(ZR, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(JR.wrapV), GR)), GR.is3D && GR._cachedWrapR !== JR.wrapR && (GR._cachedWrapR = JR.wrapR, this._setTextureParameterInteger(ZR, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(JR.wrapR), GR)), this._setAnisotropicLevel(ZR, GR, JR.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(RR, JR, GR, yR) {
        if (void 0 !== RR && JR) {
          this._textureUnits && this._textureUnits.length === GR.length || (this._textureUnits = new Int32Array(GR.length));
          for (let JR = 0; JR < GR.length; JR++) {
            const yR = GR[JR].getInternalTexture();
            yR ? (this._textureUnits[JR] = RR + JR, yR._associatedChannel = RR + JR) : this._textureUnits[JR] = -1
          }
          this._gl.uniform1iv(JR, this._textureUnits);
          for (let RR = 0; RR < GR.length; RR++) this._setTexture(this._textureUnits[RR], GR[RR], !0)
        }
      }
      _setAnisotropicLevel(RR, JR, GR) {
        const yR = this._caps.textureAnisotropicFilterExtension;
        11 !== JR.samplingMode && 3 !== JR.samplingMode && 2 !== JR.samplingMode && (GR = 1), yR && JR._cachedAnisotropicFilteringLevel !== GR && (this._setTextureParameterFloat(RR, yR.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(GR, this._caps.maxAnisotropy), JR), JR._cachedAnisotropicFilteringLevel = GR)
      }
      _setTextureParameterFloat(RR, JR, GR, yR) {
        this._bindTextureDirectly(RR, yR, !0, !0), this._gl.texParameterf(RR, JR, GR)
      }
      _setTextureParameterInteger(RR, JR, GR, yR) {
        yR && this._bindTextureDirectly(RR, yR, !0, !0), this._gl.texParameteri(RR, JR, GR)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let RR = 0; RR < this._caps.maxVertexAttribs; RR++) this.disableAttributeByIndex(RR)
        } else
          for (let RR = 0, JR = this._vertexAttribArraysEnabled.length; RR < JR; RR++) RR >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[RR] || this.disableAttributeByIndex(RR)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, iR.m)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, tR.E)(this._gl)
      }
      attachContextLostEvent(RR) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", RR, !1)
      }
      attachContextRestoredEvent(RR) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", RR, !1)
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
      _canRenderToFramebuffer(RR) {
        const JR = this._gl;
        for (; JR.getError() !== JR.NO_ERROR;);
        let GR = !0;
        const yR = JR.createTexture();
        JR.bindTexture(JR.TEXTURE_2D, yR), JR.texImage2D(JR.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(RR), 1, 1, 0, JR.RGBA, this._getWebGLTextureType(RR), null), JR.texParameteri(JR.TEXTURE_2D, JR.TEXTURE_MIN_FILTER, JR.NEAREST), JR.texParameteri(JR.TEXTURE_2D, JR.TEXTURE_MAG_FILTER, JR.NEAREST);
        const tR = JR.createFramebuffer();
        JR.bindFramebuffer(JR.FRAMEBUFFER, tR), JR.framebufferTexture2D(JR.FRAMEBUFFER, JR.COLOR_ATTACHMENT0, JR.TEXTURE_2D, yR, 0);
        const uR = JR.checkFramebufferStatus(JR.FRAMEBUFFER);
        if (GR = GR && uR === JR.FRAMEBUFFER_COMPLETE, GR = GR && JR.getError() === JR.NO_ERROR, GR && (JR.clear(JR.COLOR_BUFFER_BIT), GR = GR && JR.getError() === JR.NO_ERROR), GR) {
          JR.bindFramebuffer(JR.FRAMEBUFFER, null);
          const RR = JR.RGBA,
            yR = JR.UNSIGNED_BYTE,
            tR = new Uint8Array(4);
          JR.readPixels(0, 0, 1, 1, RR, yR, tR), GR = GR && JR.getError() === JR.NO_ERROR
        }
        for (JR.deleteTexture(yR), JR.deleteFramebuffer(tR), JR.bindFramebuffer(JR.FRAMEBUFFER, null); !GR && JR.getError() !== JR.NO_ERROR;);
        return GR
      }
      _getWebGLTextureType(RR) {
        if (1 === this._webGLVersion) {
          switch (RR) {
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
        switch (RR) {
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
      _getInternalFormat(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = JR ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (RR) {
          case 0:
            GR = this._gl.ALPHA;
            break;
          case 1:
            GR = this._gl.LUMINANCE;
            break;
          case 2:
            GR = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            GR = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            GR = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            GR = JR ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            GR = JR ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (RR) {
          case 8:
            GR = this._gl.RED_INTEGER;
            break;
          case 9:
            GR = this._gl.RG_INTEGER;
            break;
          case 10:
            GR = this._gl.RGB_INTEGER;
            break;
          case 11:
            GR = this._gl.RGBA_INTEGER
        }
        return GR
      }
      _getRGBABufferInternalSizedFormat(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== JR) switch (JR) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return GR ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (RR) {
          case 3:
            switch (JR) {
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
            switch (JR) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return GR ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return GR ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (JR) {
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
            switch (JR) {
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
            switch (JR) {
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
            switch (JR) {
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
            switch (JR) {
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
            switch (JR) {
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
            switch (JR) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return GR ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(RR, JR, GR, yR) {
        let tR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          uR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const iR = tR ? 4 : 3,
          fR = tR ? this._gl.RGBA : this._gl.RGB,
          VR = GR * yR * iR;
        if (ZR) {
          if (ZR.length < VR) return qR.c.Error(`Data buffer is too small to store the read pixels (${ZR.length} should be more than ${VR})`), Promise.resolve(ZR)
        } else ZR = new Uint8Array(VR);
        return uR && this.flushFramebuffer(), this._gl.readPixels(RR, JR, GR, yR, fR, this._gl.UNSIGNED_BYTE, ZR), Promise.resolve(ZR)
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
          const RR = uR.c._CreateCanvas(1, 1),
            JR = RR.getContext("webgl") || RR.getContext("experimental-webgl");
          this._IsSupported = null != JR && !!globalThis.WebGLRenderingContext
        } catch (RR) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const RR = uR.c._CreateCanvas(1, 1),
            JR = RR.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || RR.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !JR
        } catch (RR) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    CR._TempClearColorUint32 = new Uint32Array(4), CR._TempClearColorInt32 = new Int32Array(4), CR._TempClearColorFloat32 = new Float32Array(4), CR.ExceptionList = [{
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
    }], CR._ConcatenateShader = LR.f, CR._IsSupported = null, CR._HasMajorPerformanceCaveat = null
  },
  41707: (RR, JR, GR) => {
    var yR;
    GR.d(JR, {
        c: () => tR
      }),
      function(RR) {
        RR[RR.PointerMove = 0] = "PointerMove", RR[RR.PointerDown = 1] = "PointerDown", RR[RR.PointerUp = 2] = "PointerUp"
      }(yR || (yR = {}));
    class tR {}
    tR.DOM_DELTA_PIXEL = 0, tR.DOM_DELTA_LINE = 1, tR.DOM_DELTA_PAGE = 2
  },
  41705: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR,
      e: () => uR,
      h: () => tR
    });
    class yR {}
    yR.KEYDOWN = 1, yR.KEYUP = 2;
    class tR {
      constructor(RR, JR) {
        this.type = RR, this.event = JR
      }
    }
    class uR extends tR {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(RR) {
        this.skipOnKeyboardObservable = RR
      }
      constructor(RR, JR) {
        super(RR, JR), this.type = RR, this.event = JR, this.skipOnKeyboardObservable = !1
      }
    }
  },
  41701: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR,
      f: () => ZR,
      j: () => qR
    });
    var yR = GR(38204);
    class tR {}
    tR.POINTERDOWN = 1, tR.POINTERUP = 2, tR.POINTERMOVE = 4, tR.POINTERWHEEL = 8, tR.POINTERPICK = 16, tR.POINTERTAP = 32, tR.POINTERDOUBLETAP = 64;
    class uR {
      constructor(RR, JR) {
        this.type = RR, this.event = JR
      }
    }
    class ZR extends uR {
      constructor(RR, JR, GR, tR) {
        super(RR, JR), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new yR.n(GR, tR)
      }
    }
    class qR extends uR {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(RR, JR), this._pickInfo = GR, this._inputManager = yR
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  41715: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      static CompareLightsPriority(RR, JR) {
        return RR.shadowEnabled !== JR.shadowEnabled ? (JR.shadowEnabled ? 1 : 0) - (RR.shadowEnabled ? 1 : 0) : JR.renderPriority - RR.renderPriority
      }
    }
    yR.FALLOFF_DEFAULT = 0, yR.FALLOFF_PHYSICAL = 1, yR.FALLOFF_GLTF = 2, yR.FALLOFF_STANDARD = 3, yR.LIGHTMAP_DEFAULT = 0, yR.LIGHTMAP_SPECULAR = 1, yR.LIGHTMAP_SHADOWSONLY = 2, yR.INTENSITYMODE_AUTOMATIC = 0, yR.INTENSITYMODE_LUMINOUSPOWER = 1, yR.INTENSITYMODE_LUMINOUSINTENSITY = 2, yR.INTENSITYMODE_ILLUMINANCE = 3, yR.INTENSITYMODE_LUMINANCE = 4, yR.LIGHTTYPEID_POINTLIGHT = 0, yR.LIGHTTYPEID_DIRECTIONALLIGHT = 1, yR.LIGHTTYPEID_SPOTLIGHT = 2, yR.LIGHTTYPEID_HEMISPHERICLIGHT = 3, yR.LIGHTTYPEID_RECT_AREALIGHT = 4, yR.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  41364: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    var yR, tR = GR(38233),
      uR = GR(41370);
    ! function(RR) {
      RR[RR.Unknown = 0] = "Unknown", RR[RR.Url = 1] = "Url", RR[RR.Temp = 2] = "Temp", RR[RR.Raw = 3] = "Raw", RR[RR.Dynamic = 4] = "Dynamic", RR[RR.RenderTarget = 5] = "RenderTarget", RR[RR.MultiRenderTarget = 6] = "MultiRenderTarget", RR[RR.Cube = 7] = "Cube", RR[RR.CubeRaw = 8] = "CubeRaw", RR[RR.CubePrefiltered = 9] = "CubePrefiltered", RR[RR.Raw3D = 10] = "Raw3D", RR[RR.Raw2DArray = 11] = "Raw2DArray", RR[RR.DepthStencil = 12] = "DepthStencil", RR[RR.CubeRawRGBD = 13] = "CubeRawRGBD", RR[RR.Depth = 14] = "Depth", RR[RR.External = 15] = "External"
    }(yR || (yR = {}));
    class ZR extends uR.e {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(RR) {
        this._useMipMaps = RR
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(RR) {
        this._uniqueId = RR
      }
      ke() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new tR.b, this.onErrorObservable = new tR.b, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = RR, this._source = JR, this._uniqueId = ZR._Counter++, GR || (this._hardwareTexture = RR._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, RR, JR, GR), this.width = RR, this.height = JR, this.depth = GR, this.baseWidth = RR, this.baseHeight = JR, this.baseDepth = GR, this._size = RR * JR * GR
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const RR = this.onRebuildCallback(this),
            JR = JR => {
              JR._swapAndDie(this, !1), this.isReady = RR.isReady
            };
          return void(RR.isAsync ? RR.proxy.then(JR) : JR(RR.proxy))
        }
        let RR;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(RR = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (RR => {
              RR._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (RR = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), RR._swapAndDie(this, !1), this._bufferViewArray)
              for (let RR = 0; RR < this._bufferViewArray.length; RR++) {
                const JR = this._bufferViewArray[RR];
                JR && this._engine.updateRawTexture(this, JR, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, RR)
              }
            this.isReady = !0;
            break;
          case 10:
            RR = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), RR._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (RR = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), RR._swapAndDie(this, !1), this._bufferViewArray)
              for (let RR = 0; RR < this._bufferViewArray.length; RR++) {
                const JR = this._bufferViewArray[RR];
                JR && this._engine.updateRawTexture2DArray(this, JR, this.format, this.invertY, this._compression, this.type, RR)
              }
            this.isReady = !0;
            break;
          case 4:
            RR = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), RR._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(RR = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              RR._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            RR = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), RR._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return RR = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (RR => {
              RR && RR._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(RR._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(RR._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), RR._hardwareTexture = this._hardwareTexture, RR._setUniqueId(ZR._Counter++), JR && (RR._isRGBD = this._isRGBD), this._lodTextureHigh && (RR._lodTextureHigh && RR._lodTextureHigh.dispose(), RR._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (RR._lodTextureMid && RR._lodTextureMid.dispose(), RR._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (RR._lodTextureLow && RR._lodTextureLow.dispose(), RR._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (RR._irradianceTexture && RR._irradianceTexture.dispose(), RR._irradianceTexture = this._irradianceTexture);
        const GR = this._engine.getLoadedTexturesCache();
        let yR = GR.indexOf(this); - 1 !== yR && GR.splice(yR, 1), yR = GR.indexOf(RR), -1 === yR && GR.push(RR)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    ZR._Counter = 0
  },
  41466: (RR, JR, GR) => {
    function yR(RR) {
      return 13 === RR || 14 === RR || 15 === RR || 16 === RR || 17 === RR || 18 === RR || 19 === RR
    }

    function tR(RR) {
      return 8 === RR || 9 === RR || 10 === RR || 11 === RR
    }

    function uR(RR) {
      return 0 === RR || 5 === RR || 7 === RR || 11 === RR
    }

    function ZR(RR) {
      return 13 === RR || 17 === RR || 18 === RR || 19 === RR
    }
    GR.d(JR, {
      d: () => ZR,
      g: () => yR,
      k: () => tR,
      n: () => uR
    })
  },
  41370: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR
    });
    class yR {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(RR) {
        this._cachedWrapU = RR
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(RR) {
        this._cachedWrapV = RR
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(RR) {
        this._cachedWrapR = RR
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(RR) {
        this._cachedAnisotropicFilteringLevel = RR
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(RR) {
        this._comparisonFunction = RR
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(RR) {
        this._useMipMaps = RR
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = RR, this._cachedWrapV = JR, this._cachedWrapR = GR, this._cachedAnisotropicFilteringLevel = yR, this.samplingMode = tR, this._comparisonFunction = uR, this
      }
      compareSampler(RR) {
        return this._cachedWrapU === RR._cachedWrapU && this._cachedWrapV === RR._cachedWrapV && this._cachedWrapR === RR._cachedWrapR && this._cachedAnisotropicFilteringLevel === RR._cachedAnisotropicFilteringLevel && this.samplingMode === RR.samplingMode && this._comparisonFunction === RR._comparisonFunction && this._useMipMaps === RR._useMipMaps
      }
    }
  },
  41636: (RR, JR, GR) => {
    function yR(RR) {
      RR.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    GR.d(JR, {
      e: () => yR
    })
  },
  41436: (RR, JR, GR) => {
    function yR(RR) {
      return void 0 === RR.getPipelineContext
    }
    GR.d(JR, {
      d: () => yR
    })
  },
  41844: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    var yR = GR(41415);
    class tR {
      static GetEffect(RR) {
        return void 0 === RR.getPipelineContext ? RR.effect : RR
      }
      constructor(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = RR.createDrawContext(), JR && (this.materialContext = RR.createMaterialContext())
      }
      setEffect(RR, JR) {
        let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        GR || this.effect === RR || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = RR, void 0 !== JR && (this.defines = JR), GR && this.drawContext?.reset()
      }
      dispose() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const JR = this.effect;
          RR ? JR.dispose() : yR.e.SetImmediate((() => {
            JR.ke().onEndFrameObservable.addOnce((() => {
              JR.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  41393: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => KR,
      e: () => rR,
      h: () => fR,
      k: () => VR
    });
    var yR = GR(41395),
      tR = GR(41397),
      uR = GR(41387),
      ZR = GR(39914),
      qR = GR(41410),
      iR = GR(41399);

    function fR(RR, JR) {
      return (0, tR.H)(JR).cachedPipelines[RR]
    }

    function VR(RR) {
      const JR = RR._name,
        GR = RR.context;
      if (JR && GR) {
        const RR = (0, tR.H)(GR),
          yR = RR.cachedPipelines[JR];
        yR?.dispose(), delete RR.cachedPipelines[JR]
      }
    }

    function KR(RR, JR, GR, tR, uR, ZR, iR) {
      let fR, VR;
      const KR = (0, yR.m)() ? ZR?.getHostDocument() : null;
      fR = "string" === typeof JR ? JR : "string" === typeof JR.vertexSource ? "source:" + JR.vertexSource : "string" === typeof JR.vertexElement ? KR?.getElementById(JR.vertexElement) || JR.vertexElement : JR.vertex || JR, VR = "string" === typeof JR ? JR : "string" === typeof JR.fragmentSource ? "source:" + JR.fragmentSource : "string" === typeof JR.fragmentElement ? KR?.getElementById(JR.fragmentElement) || JR.fragmentElement : JR.fragment || JR;
      const rR = [void 0, void 0],
        eR = () => {
          if (rR[0] && rR[1]) {
            const [yR, fR] = rR;
            (0, qR.h)(RR), (0, qR.m)(yR, RR, ((yR, VR) => {
              iR && (iR._vertexSourceCodeBeforeMigration = VR), GR && (yR = GR("vertex", yR)), RR.isFragment = !0, (0, qR.m)(fR, RR, ((ZR, fR) => {
                iR && (iR._fragmentSourceCodeBeforeMigration = fR), GR && (ZR = GR("fragment", ZR));
                const VR = (0, qR.e)(yR, ZR, RR);
                RR = null;
                const KR = function(RR, JR, GR, yR) {
                  if (GR) {
                    return {
                      vertexSourceCode: (1 === yR ? "//" : "") + "#define SHADER_NAME vertex:" + (GR.vertexElement || GR.vertex || GR.spectorName || GR) + "\n" + RR,
                      fragmentSourceCode: (1 === yR ? "//" : "") + "#define SHADER_NAME fragment:" + (GR.fragmentElement || GR.fragment || GR.spectorName || GR) + "\n" + JR
                    }
                  }
                  return {
                    vertexSourceCode: RR,
                    fragmentSourceCode: JR
                  }
                }(VR.vertexCode, VR.fragmentCode, JR, uR);
                tR?.(KR.vertexSourceCode, KR.fragmentSourceCode)
              }), ZR)
            }), ZR)
          }
        };
      wR(fR, "Vertex", "", (RR => {
        iR && (iR._rawVertexSourceCode = RR), rR[0] = RR, eR()
      }), uR), wR(VR, "Fragment", "Pixel", (RR => {
        iR && (iR._rawFragmentSourceCode = RR), rR[1] = RR, eR()
      }), uR)
    }

    function wR(RR, JR, GR, tR, ZR, qR) {
      if ("undefined" !== typeof HTMLElement && RR instanceof HTMLElement) {
        return void tR((0, yR.d)(RR))
      }
      if ("source:" === RR.substring(0, 7)) return void tR(RR.substring(7));
      if ("base64:" === RR.substring(0, 7)) {
        return void tR(window.atob(RR.substring(7)))
      }
      const fR = uR.b.GetShadersStore(ZR);
      if (fR[RR + JR + "Shader"]) return void tR(fR[RR + JR + "Shader"]);
      if (GR && fR[RR + GR + "Shader"]) return void tR(fR[RR + GR + "Shader"]);
      let VR;
      if (VR = "." === RR[0] || "/" === RR[0] || RR.indexOf("http") > -1 ? RR : uR.b.GetShadersRepository(ZR) + RR, !(qR = qR || iR.k)) throw new Error("loadFileInjection is not defined");
      qR(VR + "." + JR.toLowerCase() + ".fx", tR)
    }
    const rR = (RR, JR, GR, yR) => {
      try {
        const uR = RR.context ? (0, tR.H)(RR.context) : null;
        uR && (uR.disableParallelShaderCompile = RR.disableParallelCompilation);
        const ZR = RR.existingPipelineContext || JR(RR.shaderProcessingContext);
        return ZR._name = RR.name, RR.name && uR && (uR.cachedPipelines[RR.name] = ZR), GR(ZR, RR.vertex, RR.fragment, !!RR.createAsRaw, "", "", RR.rebuildRebind, RR.defines, RR.transformFeedbackVaryings, "", (() => {
          yR(ZR, (() => {
            RR.onRenderingStateCompiled?.(ZR)
          }))
        })), ZR
      } catch (uR) {
        throw ZR.c.Error("Error compiling effect"), uR
      }
    }
  },
  41382: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => iR
    });
    var yR = GR(38233),
      tR = GR(39914),
      uR = GR(41387),
      ZR = GR(41393),
      qR = GR(41415);
    class iR {
      static get ShadersRepository() {
        return uR.b.ShadersRepository
      }
      static set ShadersRepository(RR) {
        uR.b.ShadersRepository = RR
      }
      get oB() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new yR.b), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(RR, JR, GR) {
        let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          uR = arguments.length > 4 ? arguments[4] : void 0,
          qR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          fR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          VR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          KR = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          wR = arguments.length > 9 ? arguments[9] : void 0,
          rR = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          eR = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          aR = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new yR.b, this.onErrorObservable = new yR.b, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = RR, this._key = rR;
        const LR = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let nR;
        if (JR.attributes) {
          const RR = JR;
          if (this._engine = GR, this._attributesNames = RR.attributes, this._uniformsNames = RR.uniformsNames.concat(RR.samplers), this._samplerList = RR.samplers.slice(), this.defines = RR.defines, this.onError = RR.onError, this.onCompiled = RR.onCompiled, this._fallbacks = RR.fallbacks, this._indexParameters = RR.indexParameters, this._transformFeedbackVaryings = RR.transformFeedbackVaryings || null, this._multiTarget = !!RR.multiTarget, this._shaderLanguage = RR.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!RR.disableParallelShaderCompilation, RR.uniformBuffersNames) {
            this._uniformBuffersNamesList = RR.uniformBuffersNames.slice();
            for (let JR = 0; JR < RR.uniformBuffersNames.length; JR++) this._uniformBuffersNames[RR.uniformBuffersNames[JR]] = JR
          }
          this._processFinalCode = RR.processFinalCode ?? null, this._processCodeAfterIncludes = RR.processCodeAfterIncludes ?? void 0, aR = RR.extraInitializationsAsync, nR = RR.existingPipelineContext
        } else this._engine = uR, this.defines = null == qR ? "" : qR, this._uniformsNames = GR.concat(tR), this._samplerList = tR ? tR.slice() : [], this._attributesNames = JR, this._uniformBuffersNamesList = [], this._shaderLanguage = eR, this.onError = KR, this.onCompiled = VR, this._indexParameters = wR, this._fallbacks = fR;
        "WEBGL2" === this._engine.shaderPlatformName && (nR = (0, ZR.h)(LR, this._engine._gl) ?? nR), this._attributeLocationByName = {}, this.uniqueId = iR._UniqueIdSeed++, nR ? (this._pipelineContext = nR, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, aR).catch((RR => {
          const JR = RR?.message ?? String(RR),
            GR = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${JR}`);
          RR && "string" === typeof RR.stack && (GR.stack = `${GR.message}\nCaused by: ${RR.stack}`), this._processCompilationErrors(GR)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.oB || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          yR = arguments.length > 3 ? arguments[3] : void 0;
        yR && await yR(), this._processingContext = GR || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const tR = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: RR ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: uR.b.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: uR.b.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          LtR: this._engine.LtR,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, ZR.d)(tR, this.name, this._processFinalCode, ((RR, GR) => {
          this._vertexSourceCode = RR, this._fragmentSourceCode = GR, this._prepareEffect(JR)
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
        return !!this._engine.oB || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      ke() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(RR) {
        return this._attributes[RR]
      }
      getAttributeLocationByName(RR) {
        return this._attributeLocationByName[RR]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(RR) {
        return this._uniformsNames.indexOf(RR)
      }
      getUniform(RR) {
        return this._uniforms[RR]
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
        return await new Promise((RR => {
          this.executeWhenCompiled(RR)
        }))
      }
      executeWhenCompiled(RR) {
        this.isReady() ? RR(this) : (this.onCompileObservable.add((JR => {
          RR(JR)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(RR) {
        (0, qR.g)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (JR => {
          this._processCompilationErrors(JR, RR)
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
            LtR: this._engine.LtR,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(RR, JR, GR, yR) {
        this._isReady = !1, this._vertexSourceCodeOverride = RR, this._fragmentSourceCodeOverride = JR, this.onError = (RR, JR) => {
          yR && yR(JR)
        }, this.onCompiled = () => {
          const RR = this.ke().scenes;
          if (RR)
            for (let JR = 0; JR < RR.length; JR++) RR[JR].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(GR)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(RR) {
        if (this._pipelineContext = RR, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let JR = 0; JR < this._attributesNames.length; JR++) {
            const RR = this._attributesNames[JR];
            this._attributeLocationByName[RR] = this._attributes[JR]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), iR.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const JR = this._pipelineContext;
        this._isReady = !1;
        try {
          const GR = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            yR = GR ? null : this.defines,
            tR = GR ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            uR = GR ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            qR = this._engine;
          this._pipelineContext = (0, ZR.e)({
            existingPipelineContext: RR ? JR : null,
            vertex: tR,
            fragment: uR,
            context: "WEBGL2" === qR.shaderPlatformName || "WEBGL1" === qR.shaderPlatformName ? qR._gl : void 0,
            rebuildRebind: (RR, JR, GR, yR) => this._rebuildProgram(RR, JR, GR, yR),
            defines: yR,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: GR,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: GR => {
              JR && !RR && this._engine._deletePipelineContext(JR), GR && this._onRenderingStateCompiled(GR)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(JR)
        } catch (GR) {
          this._processCompilationErrors(GR, JR)
        }
      }
      _getShaderCodeAndErrorLine(RR, JR, GR) {
        const yR = GR ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let tR = null;
        if (JR && RR) {
          const uR = JR.match(yR);
          if (uR && 2 === uR.length) {
            const JR = parseInt(uR[1]),
              yR = RR.split("\n", -1);
            yR.length >= JR && (tR = `Offending line [${JR}] in ${GR?"fragment":"vertex"} code: ${yR[JR-1]}`)
          }
        }
        return [RR, tR]
      }
      _processCompilationErrors(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof RR?.stack ? RR.stack : RR?.message ?? String(RR);
        const GR = this._attributesNames,
          yR = this._fallbacks;
        if (tR.c.Error("Unable to compile effect:"), tR.c.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), tR.c.Error(`Attributes: ${GR.join(" ")}`), tR.c.Error("Defines:\n" + this.defines), iR.LogShaderCodeOnCompilationError) {
          let RR, JR = null,
            GR = null;
          this._pipelineContext?._getVertexShaderCode() && ([RR, JR] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), RR && (tR.c.Error("Vertex code:"), tR.c.Error(RR))), this._pipelineContext?._getFragmentShaderCode() && ([RR, GR] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), RR && (tR.c.Error("Fragment code:"), tR.c.Error(RR))), JR && tR.c.Error(JR), GR && tR.c.Error(GR)
        }
        tR.c.Error("Error: " + this._compilationError);
        const uR = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        JR && (this._pipelineContext = JR, this._isReady = !0, uR()), yR ? (this._pipelineContext = null, yR.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, tR.c.Error("Trying next fallback."), this.defines = yR.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, uR(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, JR || uR())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(RR, JR) {
        this._engine._bindTexture(this._samplers[RR], JR, RR)
      }
      setTexture(RR, JR) {
        this._engine.setTexture(this._samplers[RR], this._uniforms[RR], JR, RR)
      }
      setTextureArray(RR, JR) {
        const GR = RR + "Ex";
        if (-1 === this._samplerList.indexOf(GR + "0")) {
          const yR = this._samplerList.indexOf(RR);
          for (let RR = 1; RR < JR.length; RR++) {
            const JR = GR + (RR - 1).toString();
            this._samplerList.splice(yR + RR, 0, JR)
          }
          let tR = 0;
          for (const RR of this._samplerList) this._samplers[RR] = tR, tR += 1
        }
        this._engine.setTextureArray(this._samplers[RR], this._uniforms[RR], JR, RR)
      }
      bindUniformBuffer(RR, JR) {
        const GR = this._uniformBuffersNames[JR];
        void 0 === GR || iR._BaseCache[GR] === RR && this._engine._features.useUBOBindingCache || (iR._BaseCache[GR] = RR, this._engine.bindUniformBufferBase(RR, GR, JR))
      }
      bindUniformBlock(RR, JR) {
        this._engine.bindUniformBlock(this._pipelineContext, RR, JR)
      }
      setInt(RR, JR) {
        return this._pipelineContext.setInt(RR, JR), this
      }
      setInt2(RR, JR, GR) {
        return this._pipelineContext.setInt2(RR, JR, GR), this
      }
      setInt3(RR, JR, GR, yR) {
        return this._pipelineContext.setInt3(RR, JR, GR, yR), this
      }
      setInt4(RR, JR, GR, yR, tR) {
        return this._pipelineContext.setInt4(RR, JR, GR, yR, tR), this
      }
      setIntArray(RR, JR) {
        return this._pipelineContext.setIntArray(RR, JR), this
      }
      setIntArray2(RR, JR) {
        return this._pipelineContext.setIntArray2(RR, JR), this
      }
      setIntArray3(RR, JR) {
        return this._pipelineContext.setIntArray3(RR, JR), this
      }
      setIntArray4(RR, JR) {
        return this._pipelineContext.setIntArray4(RR, JR), this
      }
      setUInt(RR, JR) {
        return this._pipelineContext.setUInt(RR, JR), this
      }
      setUInt2(RR, JR, GR) {
        return this._pipelineContext.setUInt2(RR, JR, GR), this
      }
      setUInt3(RR, JR, GR, yR) {
        return this._pipelineContext.setUInt3(RR, JR, GR, yR), this
      }
      setUInt4(RR, JR, GR, yR, tR) {
        return this._pipelineContext.setUInt4(RR, JR, GR, yR, tR), this
      }
      setUIntArray(RR, JR) {
        return this._pipelineContext.setUIntArray(RR, JR), this
      }
      setUIntArray2(RR, JR) {
        return this._pipelineContext.setUIntArray2(RR, JR), this
      }
      setUIntArray3(RR, JR) {
        return this._pipelineContext.setUIntArray3(RR, JR), this
      }
      setUIntArray4(RR, JR) {
        return this._pipelineContext.setUIntArray4(RR, JR), this
      }
      setFloatArray(RR, JR) {
        return this._pipelineContext.setArray(RR, JR), this
      }
      setFloatArray2(RR, JR) {
        return this._pipelineContext.setArray2(RR, JR), this
      }
      setFloatArray3(RR, JR) {
        return this._pipelineContext.setArray3(RR, JR), this
      }
      setFloatArray4(RR, JR) {
        return this._pipelineContext.setArray4(RR, JR), this
      }
      setArray(RR, JR) {
        return this._pipelineContext.setArray(RR, JR), this
      }
      setArray2(RR, JR) {
        return this._pipelineContext.setArray2(RR, JR), this
      }
      setArray3(RR, JR) {
        return this._pipelineContext.setArray3(RR, JR), this
      }
      setArray4(RR, JR) {
        return this._pipelineContext.setArray4(RR, JR), this
      }
      setMatrices(RR, JR) {
        return this._pipelineContext.setMatrices(RR, JR), this
      }
      setMatrix(RR, JR) {
        return this._pipelineContext.setMatrix(RR, JR), this
      }
      setMatrix3x3(RR, JR) {
        return this._pipelineContext.setMatrix3x3(RR, JR), this
      }
      setMatrix2x2(RR, JR) {
        return this._pipelineContext.setMatrix2x2(RR, JR), this
      }
      setFloat(RR, JR) {
        return this._pipelineContext.setFloat(RR, JR), this
      }
      setBool(RR, JR) {
        return this._pipelineContext.setInt(RR, JR ? 1 : 0), this
      }
      setVector2(RR, JR) {
        return this._pipelineContext.setVector2(RR, JR), this
      }
      setFloat2(RR, JR, GR) {
        return this._pipelineContext.setFloat2(RR, JR, GR), this
      }
      setVector3(RR, JR) {
        return this._pipelineContext.setVector3(RR, JR), this
      }
      setFloat3(RR, JR, GR, yR) {
        return this._pipelineContext.setFloat3(RR, JR, GR, yR), this
      }
      setVector4(RR, JR) {
        return this._pipelineContext.setVector4(RR, JR), this
      }
      setQuaternion(RR, JR) {
        return this._pipelineContext.setQuaternion(RR, JR), this
      }
      setFloat4(RR, JR, GR, yR, tR) {
        return this._pipelineContext.setFloat4(RR, JR, GR, yR, tR), this
      }
      setColor3(RR, JR) {
        return this._pipelineContext.setColor3(RR, JR), this
      }
      setColor4(RR, JR, GR) {
        return this._pipelineContext.setColor4(RR, JR, GR), this
      }
      setDirectColor4(RR, JR) {
        return this._pipelineContext.setDirectColor4(RR, JR), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (iR.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, ZR.k)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        JR && (uR.b.GetShadersStore(yR)[`${RR}PixelShader`] = JR), GR && (uR.b.GetShadersStore(yR)[`${RR}VertexShader`] = GR)
      }
      static ResetCache() {
        iR._BaseCache = {}
      }
    }
    iR.LogShaderCodeOnCompilationError = !0, iR.PersistentMode = !1, iR.AutomaticallyClearCodeCache = !1, iR._UniqueIdSeed = 0, iR._BaseCache = {}, iR.ShadersStore = uR.b.ShadersStore, iR.IncludesShadersStore = uR.b.IncludesShadersStore
  },
  41678: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => VR,
      h: () => MR,
      i: () => XR
    });
    var yR = GR(41382),
      tR = GR(38204),
      uR = GR(38247),
      ZR = GR(41650);
    const qR = new tR.e,
      iR = new tR.e,
      fR = new tR.e,
      VR = {
        jH: () => {},
        eyeAtCamera: !0
      };

    function KR(RR, JR, GR) {
      const yR = GR.QtR(),
        tR = JR.QtR();
      for (let uR = 0; uR < 16; uR++) yR[uR] = tR[uR];
      return yR[12] -= RR.x, yR[13] -= RR.y, yR[14] -= RR.z, GR.markAsUpdated(), GR
    }

    function wR(RR, JR, GR) {
      return (0, uR.h)(JR, iR), KR(RR, iR, fR), (0, uR.h)(fR, GR), GR
    }

    function rR(RR, JR, GR) {
      if (!VR.eyeAtCamera) return wR(RR, JR, GR);
      const yR = GR.QtR(),
        tR = JR.QtR();
      for (let uR = 0; uR < 16; uR++) yR[uR] = tR[uR];
      return yR[12] = 0, yR[13] = 0, yR[14] = 0, GR.markAsUpdated(), GR
    }

    function eR(RR, JR, GR, yR) {
      return (0, uR.r)(rR(RR, JR, yR), GR, yR), yR
    }

    function aR(RR, JR, GR, yR) {
      return (0, uR.h)(GR, iR), (0, uR.r)(JR, iR, fR), KR(RR, fR, iR), rR(RR, GR, fR), (0, uR.r)(iR, fR, yR), yR
    }

    function LR(RR, JR, GR, yR, tR, ZR) {
      return (0, uR.h)(GR, iR), (0, uR.r)(JR, iR, fR), KR(RR, fR, iR), eR(RR, yR, tR, fR), (0, uR.r)(iR, fR, ZR), ZR
    }

    function nR(RR, JR) {
      const GR = VR.jH();
      if (!GR || qR === JR) return JR;
      qR.updateFlag = JR.updateFlag;
      const yR = GR.floatingOriginOffset;
      switch (RR) {
        case "world":
          return KR(yR, JR, qR);
        case "view":
          return rR(yR, JR, qR);
        case "worldView":
          return aR(yR, JR, GR.getViewMatrix(), qR);
        case "viewProjection":
          return eR(yR, GR.getViewMatrix(), GR.getProjectionMatrix(), qR);
        case "worldViewProjection":
          return LR(yR, JR, GR.getTransformMatrix(), GR.getViewMatrix(), GR.getProjectionMatrix(), qR);
        default:
          if (RR.startsWith("u_")) {
            const tR = RR.toLowerCase();
            if (tR.startsWith("u_worldviewprojection")) return LR(yR, JR, GR.getTransformMatrix(), GR.getViewMatrix(), GR.getProjectionMatrix(), qR);
            if (tR.startsWith("u_viewprojection")) return eR(yR, GR.getViewMatrix(), GR.getProjectionMatrix(), qR);
            if (tR.startsWith("u_worldview")) return aR(yR, JR, GR.getViewMatrix(), qR);
            if (tR.startsWith("u_world")) return KR(yR, JR, qR);
            if (tR.startsWith("u_view")) return rR(yR, JR, qR)
          }
          return JR
      }
    }
    const UR = ZR.b,
      WR = yR.d,
      AR = UR.prototype._updateMatrixForUniform,
      CR = yR.d.prototype.setMatrix;

    function XR() {
      yR.d.prototype.setMatrix = CR, WR._setMatrixOverride = void 0, UR.prototype._updateMatrixForUniform = AR, UR.prototype._updateMatrixForUniformOverride = void 0
    }

    function MR() {
      WR.prototype._setMatrixOverride = CR, WR.prototype.setMatrix = function(RR, JR) {
        return this._setMatrixOverride(RR, nR(RR, JR)), this
      }, UR.prototype._updateMatrixForUniformOverride = AR, UR.prototype._updateMatrixForUniform = function(RR, JR) {
        this._updateMatrixForUniformOverride(RR, nR(RR, JR))
      }
    }
  },
  41644: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      e: () => tR
    });
    var yR = GR(41636);

    function tR(RR, JR) {
      JR.WHITEBALANCE && RR.push("whiteBalanceMatrix"), JR.EXPOSURE && RR.push("exposureLinear"), JR.CONTRAST && RR.push("contrast"), JR.COLORGRADING && RR.push("colorTransformSettings"), (JR.VIGNETTE || JR.DITHER) && RR.push("vInverseScreenSize"), JR.VIGNETTE && (RR.push("vignetteSettings1"), RR.push("vignetteSettings2")), JR.COLORCURVES && (0, yR.e)(RR), JR.DITHER && RR.push("ditherIntensity")
    }

    function uR(RR, JR) {
      JR.COLORGRADING && RR.push("txColorTransform")
    }
  },
  41634: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => bR,
      d: () => xR
    });
    var yR = GR(41520),
      tR = GR(41524),
      uR = GR(38233),
      ZR = GR(38331),
      qR = GR(38239),
      iR = GR(38204);
    const fR = [
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
      VR = 1e6 / fR[fR.length - 1][0],
      KR = 150;

    function wR(RR, JR) {
      const GR = Number.isNaN(RR) ? VR : Math.max(RR, VR),
        yR = (0, qR.Clamp)(1e6 / GR, fR[0][0], fR[fR.length - 1][0]);
      let tR = 0,
        uR = fR.length - 1;
      for (; uR - tR > 1;) {
        const RR = tR + uR >> 1;
        fR[RR][0] <= yR ? tR = RR : uR = RR
      }
      const ZR = tR,
        [wR, rR, eR, aR] = fR[ZR],
        [LR, nR, UR, WR] = fR[ZR + 1],
        AR = (yR - wR) / (LR - wR),
        CR = iR.n.Lerp(new iR.n(rR, eR), new iR.n(nR, UR), AR),
        XR = iR.n.Normalize(new iR.n(1, aR)),
        MR = iR.n.Normalize(new iR.n(1, WR)),
        BR = iR.n.Normalize(iR.n.Lerp(XR, MR, AR)),
        lR = (0, qR.Clamp)(JR, -150, KR);
      CR.VuR(BR.scale(lR / 3e3));
      const pR = 2 * CR.x - 8 * CR.y + 4,
        gR = 3 * CR.x / pR,
        bR = 2 * CR.y / pR;
      return new iR.r(gR / bR, 1, (1 - gR - bR) / bR)
    }
    const rR = iR.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      eR = iR.e.Invert(rR);

    function aR(RR, JR) {
      const GR = JR > 0 ? RR / JR : 10;
      return (0, qR.Clamp)(GR, .1, 10)
    }

    function LR(RR, JR) {
      const GR = iR.r.TransformNormal(RR, rR),
        yR = iR.r.TransformNormal(JR, rR),
        tR = iR.e.FromArray([aR(yR.x, GR.x), 0, 0, 0, 0, aR(yR.y, GR.y), 0, 0, 0, 0, aR(yR.z, GR.z), 0, 0, 0, 0, 1]);
      return rR.multiply(tR).multiply(eR)
    }
    const nR = new iR.r(.95047, 1, 1.08883),
      UR = iR.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(LR(nR, wR(6500, 0))),
      WR = iR.e.Invert(UR),
      AR = iR.r.TransformNormal(new iR.r(1, 1, 1), UR);
    var CR = GR(41542),
      XR = GR(41636);
    let MR = (() => {
      var RR;
      let JR, GR, uR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR = [],
        nR = [],
        UR = [],
        WR = [],
        AR = [],
        MR = [],
        BR = [],
        lR = [],
        pR = [],
        gR = [],
        bR = [],
        vR = [],
        OR = [],
        xR = [],
        NR = [],
        DR = [],
        HR = [],
        oR = [],
        cR = [],
        PR = [],
        IR = [],
        mR = [],
        zR = [],
        SR = [];
      return RR = class {
        constructor() {
          this._dirty = !0, this._tempColor = new ZR.e(0, 0, 0, 0), this._globalCurve = new ZR.e(0, 0, 0, 0), this._highlightsCurve = new ZR.e(0, 0, 0, 0), this._midtonesCurve = new ZR.e(0, 0, 0, 0), this._shadowsCurve = new ZR.e(0, 0, 0, 0), this._positiveCurve = new ZR.e(0, 0, 0, 0), this._negativeCurve = new ZR.e(0, 0, 0, 0), this._globalHue = (0, yR.m)(this, LR, 30), this._globalDensity = ((0, yR.m)(this, nR), (0, yR.m)(this, UR, 0)), this._globalSaturation = ((0, yR.m)(this, WR), (0, yR.m)(this, AR, 0)), this._globalExposure = ((0, yR.m)(this, MR), (0, yR.m)(this, BR, 0)), this._highlightsHue = ((0, yR.m)(this, lR), (0, yR.m)(this, pR, 30)), this._highlightsDensity = ((0, yR.m)(this, gR), (0, yR.m)(this, bR, 0)), this._highlightsSaturation = ((0, yR.m)(this, vR), (0, yR.m)(this, OR, 0)), this._highlightsExposure = ((0, yR.m)(this, xR), (0, yR.m)(this, NR, 0)), this._midtonesHue = ((0, yR.m)(this, DR), (0, yR.m)(this, HR, 30)), this._midtonesDensity = ((0, yR.m)(this, oR), (0, yR.m)(this, cR, 0)), this._midtonesSaturation = ((0, yR.m)(this, PR), (0, yR.m)(this, IR, 0)), this._midtonesExposure = ((0, yR.m)(this, mR), (0, yR.m)(this, zR, 0)), this._shadowsHue = ((0, yR.m)(this, SR), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(RR) {
          this._globalHue = RR, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(RR) {
          this._globalDensity = RR, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(RR) {
          this._globalSaturation = RR, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(RR) {
          this._globalExposure = RR, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(RR) {
          this._highlightsHue = RR, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(RR) {
          this._highlightsDensity = RR, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(RR) {
          this._highlightsSaturation = RR, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(RR) {
          this._highlightsExposure = RR, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(RR) {
          this._midtonesHue = RR, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(RR) {
          this._midtonesDensity = RR, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(RR) {
          this._midtonesSaturation = RR, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(RR) {
          this._midtonesExposure = RR, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(RR) {
          this._shadowsHue = RR, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(RR) {
          this._shadowsDensity = RR, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(RR) {
          this._shadowsSaturation = RR, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(RR) {
          this._shadowsExposure = RR, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(JR, GR, yR, tR, uR) {
          null != JR && (JR = RR._Clamp(JR, 0, 360), GR = RR._Clamp(GR, -100, 100), yR = RR._Clamp(yR, -100, 100), tR = RR._Clamp(tR, -100, 100), GR = RR._ApplyColorGradingSliderNonlinear(GR), GR *= .5, tR = RR._ApplyColorGradingSliderNonlinear(tR), GR < 0 && (GR *= -1, JR = (JR + 180) % 360), RR._FromHSBToRef(JR, GR, 50 + .25 * tR, uR), uR.scaleToRef(2, uR), uR.a = 1 + .01 * yR)
        }
        static _ApplyColorGradingSliderNonlinear(RR) {
          RR /= 100;
          let JR = Math.abs(RR);
          return JR = Math.pow(JR, 2), RR < 0 && (JR *= -1), JR *= 100, JR
        }
        static _FromHSBToRef(JR, GR, yR, tR) {
          let uR = RR._Clamp(JR, 0, 360);
          const ZR = RR._Clamp(GR / 100, 0, 1),
            qR = RR._Clamp(yR / 100, 0, 1);
          if (0 === ZR) tR.r = qR, tR.g = qR, tR.b = qR;
          else {
            uR /= 60;
            const RR = Math.floor(uR),
              JR = uR - RR,
              GR = qR * (1 - ZR),
              yR = qR * (1 - ZR * JR),
              iR = qR * (1 - ZR * (1 - JR));
            switch (RR) {
              case 0:
                tR.r = qR, tR.g = iR, tR.b = GR;
                break;
              case 1:
                tR.r = yR, tR.g = qR, tR.b = GR;
                break;
              case 2:
                tR.r = GR, tR.g = qR, tR.b = iR;
                break;
              case 3:
                tR.r = GR, tR.g = yR, tR.b = qR;
                break;
              case 4:
                tR.r = iR, tR.g = GR, tR.b = qR;
                break;
              default:
                tR.r = qR, tR.g = GR, tR.b = yR
            }
          }
          tR.a = 1
        }
        static _Clamp(RR, JR, GR) {
          return Math.min(Math.max(RR, JR), GR)
        }
        clone() {
          return CR.c.Clone((() => new RR), this)
        }
        serialize() {
          return CR.c.Serialize(this)
        }
        _bind(RR) {
          let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), RR && (RR.setFloat4(JR, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), RR.setFloat4(GR, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), RR.setFloat4(yR, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const ZR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        JR = [(0, tR.H)()], GR = [(0, tR.H)()], uR = [(0, tR.H)()], qR = [(0, tR.H)()], iR = [(0, tR.H)()], fR = [(0, tR.H)()], VR = [(0, tR.H)()], KR = [(0, tR.H)()], wR = [(0, tR.H)()], rR = [(0, tR.H)()], eR = [(0, tR.H)()], aR = [(0, tR.H)()], (0, yR.l)(null, null, JR, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: RR => "_globalHue" in RR,
            get: RR => RR._globalHue,
            set: (RR, JR) => {
              RR._globalHue = JR
            }
          },
          metadata: ZR
        }, LR, nR), (0, yR.l)(null, null, GR, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: RR => "_globalDensity" in RR,
            get: RR => RR._globalDensity,
            set: (RR, JR) => {
              RR._globalDensity = JR
            }
          },
          metadata: ZR
        }, UR, WR), (0, yR.l)(null, null, uR, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: RR => "_globalSaturation" in RR,
            get: RR => RR._globalSaturation,
            set: (RR, JR) => {
              RR._globalSaturation = JR
            }
          },
          metadata: ZR
        }, AR, MR), (0, yR.l)(null, null, qR, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: RR => "_globalExposure" in RR,
            get: RR => RR._globalExposure,
            set: (RR, JR) => {
              RR._globalExposure = JR
            }
          },
          metadata: ZR
        }, BR, lR), (0, yR.l)(null, null, iR, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: RR => "_highlightsHue" in RR,
            get: RR => RR._highlightsHue,
            set: (RR, JR) => {
              RR._highlightsHue = JR
            }
          },
          metadata: ZR
        }, pR, gR), (0, yR.l)(null, null, fR, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: RR => "_highlightsDensity" in RR,
            get: RR => RR._highlightsDensity,
            set: (RR, JR) => {
              RR._highlightsDensity = JR
            }
          },
          metadata: ZR
        }, bR, vR), (0, yR.l)(null, null, VR, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: RR => "_highlightsSaturation" in RR,
            get: RR => RR._highlightsSaturation,
            set: (RR, JR) => {
              RR._highlightsSaturation = JR
            }
          },
          metadata: ZR
        }, OR, xR), (0, yR.l)(null, null, KR, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: RR => "_highlightsExposure" in RR,
            get: RR => RR._highlightsExposure,
            set: (RR, JR) => {
              RR._highlightsExposure = JR
            }
          },
          metadata: ZR
        }, NR, DR), (0, yR.l)(null, null, wR, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: RR => "_midtonesHue" in RR,
            get: RR => RR._midtonesHue,
            set: (RR, JR) => {
              RR._midtonesHue = JR
            }
          },
          metadata: ZR
        }, HR, oR), (0, yR.l)(null, null, rR, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: RR => "_midtonesDensity" in RR,
            get: RR => RR._midtonesDensity,
            set: (RR, JR) => {
              RR._midtonesDensity = JR
            }
          },
          metadata: ZR
        }, cR, PR), (0, yR.l)(null, null, eR, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: RR => "_midtonesSaturation" in RR,
            get: RR => RR._midtonesSaturation,
            set: (RR, JR) => {
              RR._midtonesSaturation = JR
            }
          },
          metadata: ZR
        }, IR, mR), (0, yR.l)(null, null, aR, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: RR => "_midtonesExposure" in RR,
            get: RR => RR._midtonesExposure,
            set: (RR, JR) => {
              RR._midtonesExposure = JR
            }
          },
          metadata: ZR
        }, zR, SR), ZR && Object.defineProperty(RR, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ZR
        })
      })(), RR.PrepareUniforms = XR.e, RR
    })();

    function BR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      RR._bind(JR, GR, yR, tR)
    }
    var lR = GR(41449),
      pR = GR(41644),
      gR = GR(38253);
    let bR = (() => {
        var RR;
        let JR, GR, fR, rR, eR, aR, nR, XR, gR, bR, vR, OR, xR, NR, DR, HR, oR, cR, PR, IR, mR, zR, SR, jR, dR, ER, YR, kR, QR = [],
          FR = [],
          TR = [],
          sR = [],
          hR = [],
          RJ = [],
          JJ = [],
          GJ = [],
          yJ = [],
          tJ = [],
          uJ = [],
          ZJ = [],
          qJ = [],
          iJ = [],
          fJ = [],
          VJ = [],
          KJ = [],
          wJ = [],
          rJ = [],
          eJ = [],
          aJ = [],
          LJ = [],
          nJ = [],
          UJ = [],
          WJ = [],
          AJ = [],
          CJ = [],
          XJ = [],
          MJ = [],
          BJ = [],
          lJ = [],
          pJ = [],
          gJ = [],
          bJ = [],
          vJ = [],
          OJ = [],
          xJ = [],
          NJ = [],
          DJ = [],
          HJ = [],
          oJ = [],
          cJ = [],
          PJ = [],
          IJ = [],
          mJ = [],
          zJ = [],
          SJ = [],
          jJ = [],
          dJ = [],
          EJ = [],
          YJ = [],
          kJ = [],
          QJ = [],
          FJ = [],
          TJ = [],
          sJ = [];
        return RR = class {
          constructor() {
            this.colorCurves = (0, yR.m)(this, QR, new MR), this._colorCurvesEnabled = ((0, yR.m)(this, FR), (0, yR.m)(this, TR, !1)), this._colorGradingTexture = ((0, yR.m)(this, sR), (0, yR.m)(this, hR, void 0)), this._colorGradingEnabled = ((0, yR.m)(this, RJ), (0, yR.m)(this, JJ, !1)), this._colorGradingWithGreenDepth = ((0, yR.m)(this, GJ), (0, yR.m)(this, yJ, !0)), this._colorGradingBGR = ((0, yR.m)(this, tJ), (0, yR.m)(this, uJ, !0)), this._exposure = ((0, yR.m)(this, ZJ), (0, yR.m)(this, qJ, 1)), this._toneMappingEnabled = ((0, yR.m)(this, iJ), (0, yR.m)(this, fJ, !1)), this._toneMappingType = ((0, yR.m)(this, VJ), (0, yR.m)(this, KJ, RR.TONEMAPPING_STANDARD)), this._contrast = ((0, yR.m)(this, wJ), (0, yR.m)(this, rJ, 1)), this._whiteBalanceEnabled = ((0, yR.m)(this, eJ), (0, yR.m)(this, aJ, !1)), this._temperature = ((0, yR.m)(this, LJ), (0, yR.m)(this, nJ, 6500)), this._tint = ((0, yR.m)(this, UJ), (0, yR.m)(this, WJ, 0)), this._whiteBalanceMatrix = ((0, yR.m)(this, AJ), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, yR.m)(this, CJ, 0), this.vignetteCenterX = ((0, yR.m)(this, XJ), (0, yR.m)(this, MJ, 0)), this.vignetteCenterY = ((0, yR.m)(this, BJ), (0, yR.m)(this, lJ, 0)), this.vignetteWeight = ((0, yR.m)(this, pJ), (0, yR.m)(this, gJ, 1.5)), this.vignetteColor = ((0, yR.m)(this, bJ), (0, yR.m)(this, vJ, new ZR.e(0, 0, 0, 0))), this.vignetteCameraFov = ((0, yR.m)(this, OJ), (0, yR.m)(this, xJ, .5)), this._vignetteBlendMode = ((0, yR.m)(this, NJ), (0, yR.m)(this, DJ, RR.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, yR.m)(this, HJ), (0, yR.m)(this, oJ, !1)), this._ditheringEnabled = ((0, yR.m)(this, cJ), (0, yR.m)(this, PJ, !1)), this._ditheringIntensity = ((0, yR.m)(this, IJ), (0, yR.m)(this, mJ, 1 / 255)), this._skipFinalColorClamp = ((0, yR.m)(this, zJ), (0, yR.m)(this, SJ, !1)), this._applyByPostProcess = ((0, yR.m)(this, jJ), (0, yR.m)(this, dJ, !1)), this._isEnabled = ((0, yR.m)(this, EJ), (0, yR.m)(this, YJ, !0)), this.outputTextureWidth = ((0, yR.m)(this, kJ), (0, yR.m)(this, QJ, 0)), this.outputTextureHeight = ((0, yR.m)(this, FJ), (0, yR.m)(this, TJ, 0)), this.onUpdateParameters = ((0, yR.m)(this, sJ), new uR.b)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(RR) {
            this._colorCurvesEnabled !== RR && (this._colorCurvesEnabled = RR, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(RR) {
            this._colorGradingTexture !== RR && (this._colorGradingTexture = RR, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(RR) {
            this._colorGradingEnabled !== RR && (this._colorGradingEnabled = RR, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(RR) {
            this._colorGradingWithGreenDepth !== RR && (this._colorGradingWithGreenDepth = RR, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(RR) {
            this._colorGradingBGR !== RR && (this._colorGradingBGR = RR, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(RR) {
            this._exposure !== RR && (this._exposure = RR, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(RR) {
            this._toneMappingEnabled !== RR && (this._toneMappingEnabled = RR, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(RR) {
            this._toneMappingType !== RR && (this._toneMappingType = RR, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(RR) {
            this._contrast !== RR && (this._contrast = RR, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(RR) {
            this._whiteBalanceEnabled !== RR && (this._whiteBalanceEnabled = RR, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(RR) {
            RR = Number.isNaN(RR) ? VR : Math.max(RR, VR), this._temperature !== RR && (this._temperature = RR, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(RR) {
            RR = (0, qR.Clamp)(RR, -150, KR), this._tint !== RR && (this._tint = RR, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(RR, JR) {
              const GR = LR(wR(RR, JR), AR),
                yR = UR.multiply(GR).multiply(WR);
              return iR.e.GetAsMatrix3x3(yR)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(RR) {
            this.vignetteCenterY = RR
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(RR) {
            this.vignetteCenterX = RR
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(RR) {
            this._vignetteBlendMode !== RR && (this._vignetteBlendMode = RR, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(RR) {
            this._vignetteEnabled !== RR && (this._vignetteEnabled = RR, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(RR) {
            this._ditheringEnabled !== RR && (this._ditheringEnabled = RR, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(RR) {
            this._ditheringIntensity !== RR && (this._ditheringIntensity = RR, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(RR) {
            this._skipFinalColorClamp !== RR && (this._skipFinalColorClamp = RR, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(RR) {
            this._applyByPostProcess !== RR && (this._applyByPostProcess = RR, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(RR) {
            this._isEnabled !== RR && (this._isEnabled = RR, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(JR) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return JR.WHITEBALANCE = !1, JR.VIGNETTE = !1, JR.TONEMAPPING = 0, JR.CONTRAST = !1, JR.EXPOSURE = !1, JR.COLORCURVES = !1, JR.COLORGRADING = !1, JR.COLORGRADING3D = !1, JR.DITHER = !1, JR.IMAGEPROCESSING = !1, JR.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(JR.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (JR.WHITEBALANCE = this._whiteBalanceEnabled, JR.VIGNETTE = this.vignetteEnabled, JR.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === RR._VIGNETTEMODE_MULTIPLY, JR.VIGNETTEBLENDMODEOPAQUE = !JR.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case RR.TONEMAPPING_KHR_PBR_NEUTRAL:
                JR.TONEMAPPING = 3;
                break;
              case RR.TONEMAPPING_ACES:
                JR.TONEMAPPING = 2;
                break;
              default:
                JR.TONEMAPPING = 1
            } else JR.TONEMAPPING = 0;
            JR.CONTRAST = 1 !== this.contrast, JR.EXPOSURE = 1 !== this.exposure, JR.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, JR.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, JR.COLORGRADING ? JR.COLORGRADING3D = this.colorGradingTexture.is3D : JR.COLORGRADING3D = !1, JR.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, JR.SAMPLER3DBGRMAP = this.colorGradingBGR, JR.DITHER = this._ditheringEnabled, JR.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, JR.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, JR.IMAGEPROCESSING = JR.WHITEBALANCE || JR.VIGNETTE || !!JR.TONEMAPPING || JR.CONTRAST || JR.EXPOSURE || JR.COLORCURVES || JR.COLORGRADING || JR.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(RR, JR) {
            if (this._whiteBalanceEnabled && RR.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && BR(this.colorCurves, RR), this._vignetteEnabled || this._ditheringEnabled) {
              const GR = 1 / (this.outputTextureWidth || RR.ke().getRenderWidth()),
                yR = 1 / (this.outputTextureHeight || RR.ke().getRenderHeight());
              if (RR.setFloat2("vInverseScreenSize", GR, yR), this._ditheringEnabled && RR.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const tR = null != JR ? JR : yR / GR;
                let uR = Math.tan(.5 * this.vignetteCameraFov),
                  ZR = uR * tR;
                const qR = Math.sqrt(ZR * uR);
                ZR = (0, lR.h)(ZR, qR, this.vignetteStretch), uR = (0, lR.h)(uR, qR, this.vignetteStretch), RR.setFloat4("vignetteSettings1", ZR, uR, -ZR * this.vignetteCenterX, -uR * this.vignetteCenterY);
                const iR = -2 * this.vignetteWeight;
                RR.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, iR)
              }
            }
            if (RR.setFloat("exposureLinear", this.exposure), RR.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              RR.setTexture("txColorTransform", this.colorGradingTexture);
              const JR = this.colorGradingTexture.getSize().height;
              RR.setFloat4("colorTransformSettings", (JR - 1) / JR, .5 / JR, JR, this.colorGradingTexture.level)
            }
          }
          clone() {
            return CR.c.Clone((() => new RR), this)
          }
          serialize() {
            return CR.c.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const uR = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          JR = [(0, tR.h)()], GR = [(0, tR.H)()], fR = [(0, tR.C)("colorGradingTexture")], rR = [(0, tR.H)()], eR = [(0, tR.H)()], aR = [(0, tR.H)()], nR = [(0, tR.H)()], XR = [(0, tR.H)()], gR = [(0, tR.H)()], bR = [(0, tR.H)()], vR = [(0, tR.H)()], OR = [(0, tR.H)()], xR = [(0, tR.H)()], NR = [(0, tR.H)()], DR = [(0, tR.H)()], HR = [(0, tR.H)()], oR = [(0, tR.H)()], cR = [(0, tR.m)()], PR = [(0, tR.H)()], IR = [(0, tR.H)()], mR = [(0, tR.H)()], zR = [(0, tR.H)()], SR = [(0, tR.H)()], jR = [(0, tR.H)()], dR = [(0, tR.H)()], ER = [(0, tR.H)()], YR = [(0, tR.H)()], kR = [(0, tR.H)()], (0, yR.l)(null, null, JR, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: RR => "colorCurves" in RR,
              get: RR => RR.colorCurves,
              set: (RR, JR) => {
                RR.colorCurves = JR
              }
            },
            metadata: uR
          }, QR, FR), (0, yR.l)(null, null, GR, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: RR => "_colorCurvesEnabled" in RR,
              get: RR => RR._colorCurvesEnabled,
              set: (RR, JR) => {
                RR._colorCurvesEnabled = JR
              }
            },
            metadata: uR
          }, TR, sR), (0, yR.l)(null, null, fR, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: RR => "_colorGradingTexture" in RR,
              get: RR => RR._colorGradingTexture,
              set: (RR, JR) => {
                RR._colorGradingTexture = JR
              }
            },
            metadata: uR
          }, hR, RJ), (0, yR.l)(null, null, rR, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: RR => "_colorGradingEnabled" in RR,
              get: RR => RR._colorGradingEnabled,
              set: (RR, JR) => {
                RR._colorGradingEnabled = JR
              }
            },
            metadata: uR
          }, JJ, GJ), (0, yR.l)(null, null, eR, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: RR => "_colorGradingWithGreenDepth" in RR,
              get: RR => RR._colorGradingWithGreenDepth,
              set: (RR, JR) => {
                RR._colorGradingWithGreenDepth = JR
              }
            },
            metadata: uR
          }, yJ, tJ), (0, yR.l)(null, null, aR, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: RR => "_colorGradingBGR" in RR,
              get: RR => RR._colorGradingBGR,
              set: (RR, JR) => {
                RR._colorGradingBGR = JR
              }
            },
            metadata: uR
          }, uJ, ZJ), (0, yR.l)(null, null, nR, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: RR => "_exposure" in RR,
              get: RR => RR._exposure,
              set: (RR, JR) => {
                RR._exposure = JR
              }
            },
            metadata: uR
          }, qJ, iJ), (0, yR.l)(null, null, XR, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: RR => "_toneMappingEnabled" in RR,
              get: RR => RR._toneMappingEnabled,
              set: (RR, JR) => {
                RR._toneMappingEnabled = JR
              }
            },
            metadata: uR
          }, fJ, VJ), (0, yR.l)(null, null, gR, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: RR => "_toneMappingType" in RR,
              get: RR => RR._toneMappingType,
              set: (RR, JR) => {
                RR._toneMappingType = JR
              }
            },
            metadata: uR
          }, KJ, wJ), (0, yR.l)(null, null, bR, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: RR => "_contrast" in RR,
              get: RR => RR._contrast,
              set: (RR, JR) => {
                RR._contrast = JR
              }
            },
            metadata: uR
          }, rJ, eJ), (0, yR.l)(null, null, vR, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: RR => "_whiteBalanceEnabled" in RR,
              get: RR => RR._whiteBalanceEnabled,
              set: (RR, JR) => {
                RR._whiteBalanceEnabled = JR
              }
            },
            metadata: uR
          }, aJ, LJ), (0, yR.l)(null, null, OR, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: RR => "_temperature" in RR,
              get: RR => RR._temperature,
              set: (RR, JR) => {
                RR._temperature = JR
              }
            },
            metadata: uR
          }, nJ, UJ), (0, yR.l)(null, null, xR, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: RR => "_tint" in RR,
              get: RR => RR._tint,
              set: (RR, JR) => {
                RR._tint = JR
              }
            },
            metadata: uR
          }, WJ, AJ), (0, yR.l)(null, null, NR, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: RR => "vignetteStretch" in RR,
              get: RR => RR.vignetteStretch,
              set: (RR, JR) => {
                RR.vignetteStretch = JR
              }
            },
            metadata: uR
          }, CJ, XJ), (0, yR.l)(null, null, DR, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: RR => "vignetteCenterX" in RR,
              get: RR => RR.vignetteCenterX,
              set: (RR, JR) => {
                RR.vignetteCenterX = JR
              }
            },
            metadata: uR
          }, MJ, BJ), (0, yR.l)(null, null, HR, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: RR => "vignetteCenterY" in RR,
              get: RR => RR.vignetteCenterY,
              set: (RR, JR) => {
                RR.vignetteCenterY = JR
              }
            },
            metadata: uR
          }, lJ, pJ), (0, yR.l)(null, null, oR, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: RR => "vignetteWeight" in RR,
              get: RR => RR.vignetteWeight,
              set: (RR, JR) => {
                RR.vignetteWeight = JR
              }
            },
            metadata: uR
          }, gJ, bJ), (0, yR.l)(null, null, cR, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: RR => "vignetteColor" in RR,
              get: RR => RR.vignetteColor,
              set: (RR, JR) => {
                RR.vignetteColor = JR
              }
            },
            metadata: uR
          }, vJ, OJ), (0, yR.l)(null, null, PR, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: RR => "vignetteCameraFov" in RR,
              get: RR => RR.vignetteCameraFov,
              set: (RR, JR) => {
                RR.vignetteCameraFov = JR
              }
            },
            metadata: uR
          }, xJ, NJ), (0, yR.l)(null, null, IR, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: RR => "_vignetteBlendMode" in RR,
              get: RR => RR._vignetteBlendMode,
              set: (RR, JR) => {
                RR._vignetteBlendMode = JR
              }
            },
            metadata: uR
          }, DJ, HJ), (0, yR.l)(null, null, mR, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: RR => "_vignetteEnabled" in RR,
              get: RR => RR._vignetteEnabled,
              set: (RR, JR) => {
                RR._vignetteEnabled = JR
              }
            },
            metadata: uR
          }, oJ, cJ), (0, yR.l)(null, null, zR, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: RR => "_ditheringEnabled" in RR,
              get: RR => RR._ditheringEnabled,
              set: (RR, JR) => {
                RR._ditheringEnabled = JR
              }
            },
            metadata: uR
          }, PJ, IJ), (0, yR.l)(null, null, SR, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: RR => "_ditheringIntensity" in RR,
              get: RR => RR._ditheringIntensity,
              set: (RR, JR) => {
                RR._ditheringIntensity = JR
              }
            },
            metadata: uR
          }, mJ, zJ), (0, yR.l)(null, null, jR, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: RR => "_skipFinalColorClamp" in RR,
              get: RR => RR._skipFinalColorClamp,
              set: (RR, JR) => {
                RR._skipFinalColorClamp = JR
              }
            },
            metadata: uR
          }, SJ, jJ), (0, yR.l)(null, null, dR, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: RR => "_applyByPostProcess" in RR,
              get: RR => RR._applyByPostProcess,
              set: (RR, JR) => {
                RR._applyByPostProcess = JR
              }
            },
            metadata: uR
          }, dJ, EJ), (0, yR.l)(null, null, ER, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: RR => "_isEnabled" in RR,
              get: RR => RR._isEnabled,
              set: (RR, JR) => {
                RR._isEnabled = JR
              }
            },
            metadata: uR
          }, YJ, kJ), (0, yR.l)(null, null, YR, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: RR => "outputTextureWidth" in RR,
              get: RR => RR.outputTextureWidth,
              set: (RR, JR) => {
                RR.outputTextureWidth = JR
              }
            },
            metadata: uR
          }, QJ, FJ), (0, yR.l)(null, null, kR, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: RR => "outputTextureHeight" in RR,
              get: RR => RR.outputTextureHeight,
              set: (RR, JR) => {
                RR.outputTextureHeight = JR
              }
            },
            metadata: uR
          }, TJ, sJ), uR && Object.defineProperty(RR, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uR
          })
        })(), RR.TONEMAPPING_STANDARD = 0, RR.TONEMAPPING_ACES = 1, RR.TONEMAPPING_KHR_PBR_NEUTRAL = 2, RR.PrepareUniforms = pR.e, RR.PrepareSamplers = pR.c, RR._VIGNETTEMODE_MULTIPLY = 0, RR._VIGNETTEMODE_OPAQUE = 1, RR
      })(),
      vR = !1;

    function OR(RR) {
      const JR = CR.c.Parse((() => new bR), RR, null, null);
      return void 0 !== RR.vignetteCentreX && (JR.vignetteCenterX = RR.vignetteCentreX), void 0 !== RR.vignetteCentreY && (JR.vignetteCenterY = RR.vignetteCentreY), JR
    }

    function xR() {
      vR || (vR = !0, bR.Parse = OR, CR.c._ImageProcessingConfigurationParser = OR, (0, gR.f)("BABYLON.ImageProcessingConfiguration", bR))
    }
  },
  41650: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(39914),
      tR = GR(41616);
    class uR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = arguments.length > 3 ? arguments[3] : void 0,
          tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          uR = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = RR, this._noUBO = !RR.supportsUniformBuffers || tR, this._dynamic = GR, this._name = yR ?? "no-name", this._data = JR || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === uR && this._engine._features.trackUbosInFrame || !0 === uR) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.FRR = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.FRR = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(RR) {
        let JR;
        if (JR = RR <= 2 ? RR : 4, this._uniformLocationPointer % JR !== 0) {
          const RR = this._uniformLocationPointer;
          this._uniformLocationPointer += JR - this._uniformLocationPointer % JR;
          const GR = this._uniformLocationPointer - RR;
          for (let JR = 0; JR < GR; JR++) this._data.push(0)
        }
      }
      addUniform(RR, JR) {
        let GR, yR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (yR > 0 && "number" === typeof JR && (this._uniformArraySizes[RR] = {
            strideSize: JR,
            arraySize: yR
          }), void 0 === this._uniformLocations[RR] && (this._uniformNames.push(RR), !this._noUBO)) {
          if (yR > 0) {
            if (JR instanceof Array) throw "addUniform should not be use with Array in UBO: " + RR;
            if (this._fillAlignment(4), 16 == JR) JR *= yR;
            else {
              JR = JR * yR + (4 - JR) * yR
            }
            GR = [];
            for (let RR = 0; RR < JR; RR++) GR.push(0)
          } else {
            if (JR instanceof Array) GR = JR, JR = GR.length;
            else {
              GR = [];
              for (let RR = 0; RR < JR; RR++) GR.push(0)
            }
            this._fillAlignment(JR)
          }
          this._uniformSizes[RR] = JR, this._uniformLocations[RR] = this._uniformLocationPointer, this._uniformLocationPointer += JR;
          for (let RR = 0; RR < JR; RR++) this._data.push(GR[RR]);
          this._needSync = !0
        }
      }
      addMatrix(RR, JR) {
        this.addUniform(RR, Array.prototype.slice.call(JR.QtR()))
      }
      addFloat2(RR, JR, GR) {
        const yR = [JR, GR];
        this.addUniform(RR, yR)
      }
      addFloat3(RR, JR, GR, yR) {
        const tR = [JR, GR, yR];
        this.addUniform(RR, tR)
      }
      addColor3(RR, JR) {
        const GR = [JR.r, JR.g, JR.b];
        this.addUniform(RR, GR)
      }
      addColor4(RR, JR, GR) {
        const yR = [JR.r, JR.g, JR.b, GR];
        this.addUniform(RR, yR)
      }
      addVector3(RR, JR) {
        const GR = [JR.x, JR.y, JR.z];
        this.addUniform(RR, GR)
      }
      addMatrix3x3(RR) {
        this.addUniform(RR, 12)
      }
      addMatrix2x2(RR) {
        this.addUniform(RR, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const RR = [];
        let JR = 0;
        for (const GR in this._uniformLocations)
          if (RR.push(GR), 10 === ++JR) break;
        return RR.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const RR of this._ownerListsBySlot.values()) this._removeOwnerBacklink(RR);
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
      set name(RR) {
        this._name = RR
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(RR, JR) {
        for (let GR = 0; GR < RR.length; ++GR)
          if (RR[GR] !== JR[GR]) return !1;
        return !0
      }
      _copyBuffer(RR, JR) {
        for (let GR = 0; GR < RR.length; ++GR) JR[GR] = RR[GR]
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
      _updateOwnerKeyed(RR) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let JR = this._slotByOwner.get(RR);
        if (void 0 === JR && (JR = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(RR, JR), this._ownerCount++, RR._uniformBuffersWithOwnedSlot || (RR._uniformBuffersWithOwnedSlot = []), RR._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(JR, RR._uniformBuffersWithOwnedSlot)), this._slotGeneration[JR] === this._dataGeneration) return this._bufferIndex = JR, this._buffer = this._buffers[JR][0], this.bindUniformBuffer(), this._slotFrameId[JR] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const GR = this._buffers[JR][1];
        this._slotFrameId[JR] === this._currentFrameId && GR && !this._buffersEqual(this._bufferData, GR) && (JR = this._takeFreeSlot(!1)), this._bufferIndex = JR, this._buffer = this._buffers[JR][0], this.bindUniformBuffer();
        const yR = this._buffers[JR][1];
        yR && this._buffersEqual(this._bufferData, yR) || (yR && this._copyBuffer(this._bufferData, yR), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[JR] = this._currentFrameId, this._slotGeneration[JR] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(RR) {
        for (let GR = 0; GR < this._freeSlots.length; ++GR) {
          const JR = this._freeSlots[GR];
          if (this._slotFrameId[JR] !== this._currentFrameId) return RR && (this._freeSlots[GR] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), JR
        }
        this._rebuild();
        const JR = this._buffers.length - 1;
        return RR || this._freeSlots.push(JR), JR
      }
      _releaseOwnerSlot(RR) {
        const JR = this._slotByOwner?.get(RR);
        if (void 0 === JR) return;
        this._slotByOwner.delete(RR);
        const GR = this._ownerListsBySlot.get(JR);
        GR && (this._removeOwnerBacklink(GR), this._ownerListsBySlot.delete(JR)), this._ownerCount--, this._freeSlots.push(JR)
      }
      _removeOwnerBacklink(RR) {
        const JR = RR.indexOf(this); - 1 !== JR && (RR[JR] = RR[RR.length - 1], RR.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(RR, JR, GR) {
        this._checkNewFrame();
        let tR = this._uniformLocations[RR];
        if (void 0 === tR) {
          if (this._buffer) return void yR.c.Error("Cannot add an uniform after UBO has been created. uniformName=" + RR);
          this.addUniform(RR, GR), tR = this._uniformLocations[RR]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let RR = 0; RR < GR; RR++) this._bufferData[tR + RR] = JR[RR];
          this._dataGeneration++
        } else {
          let RR = !1;
          for (let yR = 0; yR < GR; yR++)(16 === GR && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[tR + yR] !== Math.fround(JR[yR])) && (RR = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[tR + yR] = JR[yR]);
          this._needSync = this._needSync || RR, RR && this._dataGeneration++
        }
      }
      updateUniformArray(RR, JR, GR) {
        this._checkNewFrame();
        const uR = this._uniformLocations[RR];
        if (void 0 === uR) return void yR.c.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const ZR = this._uniformArraySizes[RR];
        if (this._dynamic) {
          for (let RR = 0; RR < GR; RR++) this._bufferData[uR + RR] = JR[RR];
          this._dataGeneration++
        } else {
          let RR = !1,
            yR = 0,
            qR = 0;
          for (let iR = 0; iR < GR; iR++)
            if (this._bufferData[uR + 4 * qR + yR] !== tR.h.FloatRound(JR[iR]) && (RR = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[uR + 4 * qR + yR] = JR[iR]), yR++, yR === ZR.strideSize) {
              for (; yR < 4; yR++) this._bufferData[uR + 4 * qR + yR] = 0;
              yR = 0, qR++
            } this._needSync = this._needSync || RR, RR && this._dataGeneration++
        }
      }
      _cacheMatrix(RR, JR) {
        this._checkNewFrame();
        const GR = this._valueCache[RR],
          yR = JR.updateFlag;
        return (void 0 === GR || GR !== yR) && (this._valueCache[RR] = yR, !0)
      }
      _updateMatrix3x3ForUniform(RR, JR) {
        for (let GR = 0; GR < 3; GR++) uR._TempBuffer[4 * GR] = JR[3 * GR], uR._TempBuffer[4 * GR + 1] = JR[3 * GR + 1], uR._TempBuffer[4 * GR + 2] = JR[3 * GR + 2], uR._TempBuffer[4 * GR + 3] = 0;
        this.updateUniform(RR, uR._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(RR, JR) {
        this._currentEffect.setMatrix3x3(RR, JR)
      }
      _updateMatrix2x2ForEffect(RR, JR) {
        this._currentEffect.setMatrix2x2(RR, JR)
      }
      _updateMatrix2x2ForUniform(RR, JR) {
        for (let GR = 0; GR < 2; GR++) uR._TempBuffer[4 * GR] = JR[2 * GR], uR._TempBuffer[4 * GR + 1] = JR[2 * GR + 1], uR._TempBuffer[4 * GR + 2] = 0, uR._TempBuffer[4 * GR + 3] = 0;
        this.updateUniform(RR, uR._TempBuffer, 8)
      }
      _updateFloatForEffect(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(RR + GR, JR)
      }
      _updateFloatForUniform(RR, JR) {
        uR._TempBuffer[0] = JR, this.updateUniform(RR, uR._TempBuffer, 1)
      }
      _updateFloat2ForEffect(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(RR + yR, JR, GR)
      }
      _updateFloat2ForUniform(RR, JR, GR) {
        uR._TempBuffer[0] = JR, uR._TempBuffer[1] = GR, this.updateUniform(RR, uR._TempBuffer, 2)
      }
      _updateFloat3ForEffect(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(RR + tR, JR, GR, yR)
      }
      _updateFloat3ForUniform(RR, JR, GR, yR) {
        uR._TempBuffer[0] = JR, uR._TempBuffer[1] = GR, uR._TempBuffer[2] = yR, this.updateUniform(RR, uR._TempBuffer, 3)
      }
      _updateFloat4ForEffect(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(RR + uR, JR, GR, yR, tR)
      }
      _updateFloat4ForUniform(RR, JR, GR, yR, tR) {
        uR._TempBuffer[0] = JR, uR._TempBuffer[1] = GR, uR._TempBuffer[2] = yR, uR._TempBuffer[3] = tR, this.updateUniform(RR, uR._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[RR]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(RR + GR, JR);
            break;
          case 3:
            this._currentEffect.setFloatArray3(RR + GR, JR);
            break;
          case 4:
            this._currentEffect.setFloatArray4(RR + GR, JR);
            break;
          default:
            this._currentEffect.setFloatArray(RR + GR, JR)
        }
      }
      _updateFloatArrayForUniform(RR, JR) {
        this.updateUniformArray(RR, JR, JR.length)
      }
      _updateArrayForEffect(RR, JR) {
        this._currentEffect.setArray(RR, JR)
      }
      _updateArrayForUniform(RR, JR) {
        this.updateUniformArray(RR, JR, JR.length)
      }
      _updateIntArrayForEffect(RR, JR) {
        this._currentEffect.setIntArray(RR, JR)
      }
      _updateIntArrayForUniform(RR, JR) {
        uR._TempBufferInt32View.set(JR), this.updateUniformArray(RR, uR._TempBuffer, JR.length)
      }
      _updateUIntArrayForEffect(RR, JR) {
        this._currentEffect.setUIntArray(RR, JR)
      }
      _updateUIntArrayForUniform(RR, JR) {
        uR._TempBufferUInt32View.set(JR), this.updateUniformArray(RR, uR._TempBuffer, JR.length)
      }
      _updateMatrixForEffect(RR, JR) {
        this._currentEffect.setMatrix(RR, JR)
      }
      _updateMatrixForUniform(RR, JR) {
        this._cacheMatrix(RR, JR) && this.updateUniform(RR, JR.QtR(), 16)
      }
      _updateMatricesForEffect(RR, JR) {
        this._currentEffect.setMatrices(RR, JR)
      }
      _updateMatricesForUniform(RR, JR) {
        this.updateUniform(RR, JR, JR.length)
      }
      _updateVector3ForEffect(RR, JR) {
        this._currentEffect.setVector3(RR, JR)
      }
      _updateVector3ForUniform(RR, JR) {
        uR._TempBuffer[0] = JR.x, uR._TempBuffer[1] = JR.y, uR._TempBuffer[2] = JR.z, this.updateUniform(RR, uR._TempBuffer, 3)
      }
      _updateVector4ForEffect(RR, JR) {
        this._currentEffect.setVector4(RR, JR)
      }
      _updateVector4ForUniform(RR, JR) {
        uR._TempBuffer[0] = JR.x, uR._TempBuffer[1] = JR.y, uR._TempBuffer[2] = JR.z, uR._TempBuffer[3] = JR.w, this.updateUniform(RR, uR._TempBuffer, 4)
      }
      _updateColor3ForEffect(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(RR + GR, JR)
      }
      _updateColor3ForUniform(RR, JR) {
        uR._TempBuffer[0] = JR.r, uR._TempBuffer[1] = JR.g, uR._TempBuffer[2] = JR.b, this.updateUniform(RR, uR._TempBuffer, 3)
      }
      _updateColor4ForEffect(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(RR + yR, JR, GR)
      }
      _updateDirectColor4ForEffect(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(RR + GR, JR)
      }
      _updateColor4ForUniform(RR, JR, GR) {
        uR._TempBuffer[0] = JR.r, uR._TempBuffer[1] = JR.g, uR._TempBuffer[2] = JR.b, uR._TempBuffer[3] = GR, this.updateUniform(RR, uR._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(RR, JR) {
        uR._TempBuffer[0] = JR.r, uR._TempBuffer[1] = JR.g, uR._TempBuffer[2] = JR.b, uR._TempBuffer[3] = JR.a, this.updateUniform(RR, uR._TempBuffer, 4)
      }
      _updateIntForEffect(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(RR + GR, JR)
      }
      _updateIntForUniform(RR, JR) {
        uR._TempBufferInt32View[0] = JR, this.updateUniform(RR, uR._TempBuffer, 1)
      }
      _updateInt2ForEffect(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(RR + yR, JR, GR)
      }
      _updateInt2ForUniform(RR, JR, GR) {
        uR._TempBufferInt32View[0] = JR, uR._TempBufferInt32View[1] = GR, this.updateUniform(RR, uR._TempBuffer, 2)
      }
      _updateInt3ForEffect(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(RR + tR, JR, GR, yR)
      }
      _updateInt3ForUniform(RR, JR, GR, yR) {
        uR._TempBufferInt32View[0] = JR, uR._TempBufferInt32View[1] = GR, uR._TempBufferInt32View[2] = yR, this.updateUniform(RR, uR._TempBuffer, 3)
      }
      _updateInt4ForEffect(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(RR + uR, JR, GR, yR, tR)
      }
      _updateInt4ForUniform(RR, JR, GR, yR, tR) {
        uR._TempBufferInt32View[0] = JR, uR._TempBufferInt32View[1] = GR, uR._TempBufferInt32View[2] = yR, uR._TempBufferInt32View[3] = tR, this.updateUniform(RR, uR._TempBuffer, 4)
      }
      _updateUIntForEffect(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(RR + GR, JR)
      }
      _updateUIntForUniform(RR, JR) {
        uR._TempBufferUInt32View[0] = JR, this.updateUniform(RR, uR._TempBuffer, 1)
      }
      _updateUInt2ForEffect(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(RR + yR, JR, GR)
      }
      _updateUInt2ForUniform(RR, JR, GR) {
        uR._TempBufferUInt32View[0] = JR, uR._TempBufferUInt32View[1] = GR, this.updateUniform(RR, uR._TempBuffer, 2)
      }
      _updateUInt3ForEffect(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(RR + tR, JR, GR, yR)
      }
      _updateUInt3ForUniform(RR, JR, GR, yR) {
        uR._TempBufferUInt32View[0] = JR, uR._TempBufferUInt32View[1] = GR, uR._TempBufferUInt32View[2] = yR, this.updateUniform(RR, uR._TempBuffer, 3)
      }
      _updateUInt4ForEffect(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(RR + uR, JR, GR, yR, tR)
      }
      _updateUInt4ForUniform(RR, JR, GR, yR, tR) {
        uR._TempBufferUInt32View[0] = JR, uR._TempBufferUInt32View[1] = GR, uR._TempBufferUInt32View[2] = yR, uR._TempBufferUInt32View[3] = tR, this.updateUniform(RR, uR._TempBuffer, 4)
      }
      setTexture(RR, JR) {
        this._currentEffect.setTexture(RR, JR)
      }
      setTextureArray(RR, JR) {
        this._currentEffect.setTextureArray(RR, JR)
      }
      bindTexture(RR, JR) {
        this._currentEffect._bindTexture(RR, JR)
      }
      updateUniformDirectly(RR, JR) {
        this.updateUniform(RR, JR, JR.length), this.update()
      }
      bindToEffect(RR, JR) {
        this._currentEffect = RR, this._currentEffectName = JR
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(RR) {
        if (!this._buffers) return this._buffer === RR;
        for (let JR = 0; JR < this._buffers.length; ++JR) {
          if (this._buffers[JR][0] === RR) return this._bufferIndex = JR, this._buffer = RR, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[JR][1] && (this._bufferData.set(this._buffers[JR][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(RR) {
        return void 0 !== this._uniformLocations[RR]
      }
      dispose() {
        if (this._noUBO) return;
        const RR = this._engine._uniformBuffers,
          JR = RR.indexOf(this);
        if (-1 !== JR && (RR[JR] = RR[RR.length - 1], RR.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let RR = 0; RR < this._buffers.length; ++RR) {
            const JR = this._buffers[RR][0];
            this._engine._releaseBuffer(JR)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    uR._MAX_UNIFORM_SIZE = 256, uR._TempBuffer = new Float32Array(uR._MAX_UNIFORM_SIZE), uR._TempBufferInt32View = new Int32Array(uR._TempBuffer.buffer), uR._TempBufferUInt32View = new Uint32Array(uR._TempBuffer.buffer)
  },
  41441: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR
    });
    var yR = GR(41444);
    class tR extends yR.b {
      constructor(RR) {
        super(), this._buffer = RR
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  41527: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => iR,
      h: () => fR
    });
    const yR = "__bjs_serializable__",
      tR = new WeakMap;

    function uR(RR, JR) {
      return Object.prototype.hasOwnProperty.call(RR, JR)
    }
    const ZR = function() {
      let RR = Symbol.metadata;
      return RR || (RR = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: RR
      })), RR
    }();

    function qR(RR) {
      return "function" === typeof RR ? RR : RR?.constructor
    }

    function iR(RR) {
      if (!RR) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(ZR)}) polyfill must run before decorated classes are evaluated.`);
      return uR(RR, yR) || (RR[yR] = {}), RR[yR]
    }

    function fR(RR) {
      const JR = qR(RR),
        GR = JR ? JR[ZR] : void 0;
      if (!GR) return {};
      const iR = tR.get(GR);
      if (iR) return iR;
      const fR = {},
        VR = [];
      let KR = GR;
      for (; KR;) VR.push(KR), KR = Object.getPrototypeOf(KR);
      for (const tR of VR)
        if (uR(tR, yR)) {
          const RR = tR[yR];
          for (const JR in RR) fR[JR] = RR[JR]
        } return tR.set(GR, fR), fR
    }
  },
  41524: (RR, JR, GR) => {
    GR.d(JR, {
      C: () => qR,
      F: () => VR,
      G: () => KR,
      H: () => ZR,
      c: () => WR,
      d: () => uR,
      f: () => UR,
      h: () => rR,
      k: () => iR,
      m: () => eR,
      q: () => fR,
      u: () => LR,
      x: () => wR,
      y: () => aR
    });
    var yR = GR(41527);

    function tR(RR, JR) {
      return (GR, tR) => {
        if (!tR.metadata) return;
        const uR = String(tR.name),
          ZR = (0, yR.d)(tR.metadata);
        ZR[uR] || (ZR[uR] = {
          type: RR,
          sourceName: JR
        })
      }
    }

    function uR(RR) {
      return function(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (GR, yR) => {
          const tR = JR || "_" + String(yR.name);
          return {
            init(RR) {
              return void 0 === RR && tR in this || (this[tR] = RR), RR
            },
            get() {
              return this[tR]
            },
            set(JR) {
              "function" === typeof this[tR]?.equals && this[tR].equals(JR) || this[tR] !== JR && (this[tR] = JR, this[RR]())
            }
          }
        }
      }(RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function ZR(RR) {
      return tR(0, RR)
    }

    function qR(RR) {
      return tR(1, RR)
    }

    function iR(RR) {
      return tR(2, RR)
    }

    function fR(RR) {
      return tR(3, RR)
    }

    function VR(RR) {
      return tR(4, RR)
    }

    function KR(RR) {
      return tR(5, RR)
    }

    function wR(RR) {
      return tR(6, RR)
    }

    function rR(RR) {
      return tR(7, RR)
    }

    function eR(RR) {
      return tR(8, RR)
    }

    function aR(RR) {
      return tR(10, RR)
    }

    function LR(RR) {
      return tR(12, RR)
    }

    function nR(RR, JR, GR) {
      const yR = String(JR.name);
      let tR = null;
      const uR = function() {
        if (null === tR) {
          tR = RR, "undefined" !== typeof _native && _native[yR] && (tR = GR(_native[yR], RR));
          const ZR = this && (JR.static ? this : Object.getPrototypeOf(this));
          ZR?.[yR] === uR && (ZR[yR] = tR)
        }
        for (var ZR = arguments.length, qR = new Array(ZR), iR = 0; iR < ZR; iR++) qR[iR] = arguments[iR];
        return tR.apply(this, qR)
      };
      return uR
    }

    function UR(RR, JR) {
      return nR(RR, JR, (RR => RR))
    }

    function WR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (GR, yR) => {
        const tR = JR || "_" + String(yR.name);
        return {
          get() {
            return this[tR]?.value
          },
          set(JR) {
            "function" === typeof this[tR]?.value?.equals && this[tR].value.equals(JR) || this[tR].value !== JR && (this[tR].value = JR, this[RR]())
          }
        }
      }
    }
    UR.filter = function(RR) {
      return (JR, GR) => nR(JR, GR, ((JR, GR) => function() {
        for (var yR = arguments.length, tR = new Array(yR), uR = 0; uR < yR; uR++) tR[uR] = arguments[uR];
        return RR(...tR) ? JR(...tR) : GR.apply(this, tR)
      }))
    }
  },
  41542: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => fR
    });
    var yR = GR(41407),
      tR = GR(41547),
      uR = GR(38331),
      ZR = GR(38204),
      qR = GR(41527);
    const iR = function(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const uR = RR();
      tR.d && tR.d.HasTags(JR) && tR.d.AddTagsTo(uR, tR.d.GetTags(JR, !0));
      const ZR = (0, qR.h)(uR),
        iR = {};
      for (const tR in ZR) {
        const RR = ZR[tR],
          qR = JR[tR],
          VR = RR.type;
        if (void 0 !== qR && null !== qR && ("uniqueId" !== tR || fR.AllowLoadingUniqueId)) switch (VR) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof qR.slice ? uR[tR] = qR.slice() : uR[tR] = qR;
            break;
          case 1:
            yR.cloneTexturesOnlyOnce && iR[qR.uniqueId] ? uR[tR] = iR[qR.uniqueId] : (uR[tR] = GR || qR.isRenderTarget ? qR : qR.clone(), iR[qR.uniqueId] = uR[tR]);
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
            uR[tR] = GR ? qR : qR.clone()
        }
      }
      return uR
    };
    class fR {
      static AppendSerializedAnimations(RR, JR) {
        if (RR.animations) {
          JR.animations = [];
          for (let GR = 0; GR < RR.animations.length; GR++) {
            const yR = RR.animations[GR];
            JR.animations.push(yR.serialize())
          }
        }
      }
      static Serialize(RR, JR) {
        JR || (JR = {}), tR.d && (JR.tags = tR.d.GetTags(RR));
        const GR = (0, qR.h)(RR);
        for (const yR in GR) {
          const tR = GR[yR],
            uR = tR.sourceName || yR,
            ZR = tR.type,
            qR = RR[yR];
          if (void 0 !== qR && null !== qR && ("uniqueId" !== yR || fR.AllowLoadingUniqueId)) switch (ZR) {
            case 0:
              Array.isArray(qR) ? JR[uR] = qR.slice() : JR[uR] = qR;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              JR[uR] = qR.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              JR[uR] = qR.QtR();
              break;
            case 6:
            case 11:
              JR[uR] = qR.id
          }
        }
        return JR
      }
      static ParseProperties(RR, JR, GR, yR) {
        yR || (yR = "");
        const tR = (0, qR.h)(JR);
        for (const qR in tR) {
          const iR = tR[qR],
            VR = RR[iR.sourceName || qR],
            KR = iR.type;
          if (void 0 !== VR && null !== VR && ("uniqueId" !== qR || fR.AllowLoadingUniqueId)) {
            const RR = JR;
            switch (KR) {
              case 0:
                RR[qR] = VR;
                break;
              case 1:
                GR && (RR[qR] = fR._TextureParser(VR, GR, yR));
                break;
              case 2:
                RR[qR] = uR.d.FromArray(VR);
                break;
              case 3:
                RR[qR] = fR._FresnelParametersParser(VR);
                break;
              case 4:
                RR[qR] = ZR.n.FromArray(VR);
                break;
              case 5:
                RR[qR] = ZR.r.FromArray(VR);
                break;
              case 6:
                GR && (RR[qR] = GR.getLastMeshById(VR));
                break;
              case 7:
                RR[qR] = fR._ColorCurvesParser(VR);
                break;
              case 8:
                RR[qR] = uR.e.FromArray(VR);
                break;
              case 9:
                RR[qR] = fR._ImageProcessingConfigurationParser(VR);
                break;
              case 10:
                RR[qR] = ZR.i.FromArray(VR);
                break;
              case 11:
                GR && (RR[qR] = GR.getCameraById(VR));
                break;
              case 12:
                RR[qR] = ZR.e.FromArray(VR);
                break;
              case 13:
                RR[qR] = ZR.s.FromArray(VR)
            }
          }
        }
      }
      static Parse(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const uR = RR();
        return tR.d && tR.d.AddTagsTo(uR, JR.tags), fR.ParseProperties(JR, uR, GR, yR), uR
      }
      static Clone(RR, JR) {
        return iR(RR, JR, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(RR, JR) {
        return iR(RR, JR, !0)
      }
    }
    fR.AllowLoadingUniqueId = !1, fR._ImageProcessingConfigurationParser = RR => {
      throw (0, yR.j)("ImageProcessingConfiguration")
    }, fR._FresnelParametersParser = RR => {
      throw (0, yR.j)("FresnelParameters")
    }, fR._ColorCurvesParser = RR => {
      throw (0, yR.j)("ColorCurves")
    }, fR._TextureParser = (RR, JR, GR) => {
      throw (0, yR.j)("Texture")
    }
  },
  41475: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR
    });
    var yR = GR(41425);
    class tR {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = tR.Enabled, this._lastSecValueCount++
      }
      addCount(RR, JR) {
        tR.Enabled && (this._current += RR, this._hasCurrentValue = !0, JR && this._fetchResult())
      }
      beginMonitoring() {
        tR.Enabled && (this._startMonitoringTime = yR.b.Now)
      }
      endMonitoring() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!tR.Enabled) return;
        RR && this.fetchNewFrame();
        const JR = yR.b.Now;
        this._current = JR - this._startMonitoringTime, this._hasCurrentValue = !0, RR && this._fetchResult()
      }
      XK() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const RR = yR.b.Now;
        RR - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = RR, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    tR.Enabled = !0
  },
  41626: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR,
      f: () => yR
    });
    class yR {
      constructor(RR) {
        this.length = 0, this.data = new Array(RR), this._id = yR._GlobalId++
      }
      push(RR) {
        this.data[this.length++] = RR, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(RR) {
        for (let JR = 0; JR < this.length; JR++) RR(this.data[JR])
      }
      sort(RR) {
        this.data.sort(RR)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(RR) {
        if (0 !== RR.length) {
          this.length + RR.length > this.data.length && (this.data.length = 2 * (this.length + RR.length));
          for (let JR = 0; JR < RR.length; JR++) this.data[this.length++] = (RR.data || RR)[JR]
        }
      }
      indexOf(RR) {
        const JR = this.data.indexOf(RR);
        return JR >= this.length ? -1 : JR
      }
      contains(RR) {
        return -1 !== this.indexOf(RR)
      }
    }
    yR._GlobalId = 0;
    class tR extends yR {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(RR) {
        super.push(RR), RR.__smartArrayFlags || (RR.__smartArrayFlags = {}), RR.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(RR) {
        return (!RR.__smartArrayFlags || RR.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(RR), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(RR) {
        if (0 !== RR.length) {
          this.length + RR.length > this.data.length && (this.data.length = 2 * (this.length + RR.length));
          for (let JR = 0; JR < RR.length; JR++) {
            const GR = (RR.data || RR)[JR];
            this.pushNoDuplicate(GR)
          }
        }
      }
    }
  },
  41547: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => tR
    });
    class yR {
      static Eval(RR, JR) {
        return "true" === (RR = RR.match(/\([^()]*\)/g) ? RR.replace(/\([^()]*\)/g, (RR => (RR = RR.slice(1, RR.length - 1), yR._HandleParenthesisContent(RR, JR)))) : yR._HandleParenthesisContent(RR, JR)) || "false" !== RR && yR.Eval(RR, JR)
      }
      static _HandleParenthesisContent(RR, JR) {
        let GR;
        JR = JR || (RR => "true" === RR);
        const tR = RR.split("||");
        for (const uR in tR)
          if (Object.prototype.hasOwnProperty.call(tR, uR)) {
            let RR = yR._SimplifyNegation(tR[uR].trim());
            const ZR = RR.split("&&");
            if (ZR.length > 1)
              for (let tR = 0; tR < ZR.length; ++tR) {
                const uR = yR._SimplifyNegation(ZR[tR].trim());
                if (GR = "true" !== uR && "false" !== uR ? "!" === uR[0] ? !JR(uR.substring(1)) : JR(uR) : "true" === uR, !GR) {
                  RR = "false";
                  break
                }
              }
            if (GR || "true" === RR) {
              GR = !0;
              break
            }
            GR = "true" !== RR && "false" !== RR ? "!" === RR[0] ? !JR(RR.substring(1)) : JR(RR) : "true" === RR
          } return GR ? "true" : "false"
      }
      static _SimplifyNegation(RR) {
        return "!true" === (RR = (RR = RR.replace(/^[\s!]+/, (RR => (RR = RR.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? RR = "false" : "!false" === RR && (RR = "true"), RR
      }
    }
    class tR {
      static EnableFor(RR) {
        RR._tags = RR._tags || {}, RR.hasTags = () => tR.HasTags(RR), RR.addTags = JR => tR.AddTagsTo(RR, JR), RR.removeTags = JR => tR.RemoveTagsFrom(RR, JR), RR.matchesTagsQuery = JR => tR.MatchesQuery(RR, JR)
      }
      static DisableFor(RR) {
        delete RR._tags, delete RR.hasTags, delete RR.addTags, delete RR.removeTags, delete RR.matchesTagsQuery
      }
      static HasTags(RR) {
        if (!RR._tags) return !1;
        const JR = RR._tags;
        for (const GR in JR)
          if (Object.prototype.hasOwnProperty.call(JR, GR)) return !0;
        return !1
      }
      static GetTags(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!RR._tags) return null;
        if (JR) {
          const JR = [];
          for (const GR in RR._tags) Object.prototype.hasOwnProperty.call(RR._tags, GR) && !0 === RR._tags[GR] && JR.push(GR);
          return JR.join(" ")
        }
        return RR._tags
      }
      static AddTagsTo(RR, JR) {
        if (!JR) return;
        if ("string" !== typeof JR) return;
        const GR = JR.split(" ");
        for (const yR of GR) tR._AddTagTo(RR, yR)
      }
      static _AddTagTo(RR, JR) {
        "" !== (JR = JR.trim()) && "true" !== JR && "false" !== JR && (JR.match(/[\s]/) || JR.match(/^([!]|([|]|[&]){2})/) || (tR.EnableFor(RR), RR._tags[JR] = !0))
      }
      static RemoveTagsFrom(RR, JR) {
        if (!tR.HasTags(RR)) return;
        const GR = JR.split(" ");
        for (const yR in GR) tR._RemoveTagFrom(RR, GR[yR])
      }
      static _RemoveTagFrom(RR, JR) {
        delete RR._tags[JR]
      }
      static MatchesQuery(RR, JR) {
        return void 0 === JR || ("" === JR ? tR.HasTags(RR) : yR.Eval(JR, (JR => tR.HasTags(RR) && RR._tags[JR])))
      }
    }
  },
  41670: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(41663),
      tR = GR(38233);
    class uR {
      constructor(RR) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new tR.b, this._scene = RR
      }
      _prepareBuffers() {
        if (this._vertexBuffers[yR.l.PositionKind]) return;
        const RR = [];
        RR.push(1, 1), RR.push(-1, 1), RR.push(-1, -1), RR.push(1, -1), this._vertexBuffers[yR.l.PositionKind] = new yR.l(this._scene.ke(), RR, yR.l.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const RR = [];
        RR.push(0), RR.push(1), RR.push(2), RR.push(0), RR.push(2), RR.push(3), this._indexBuffer = this._scene.ke().createIndexBuffer(RR)
      }
      _getActivePostProcesses(RR) {
        const JR = this._activePostProcesses;
        JR.length = 0;
        for (let GR = 0; GR < RR.length; GR++) {
          const yR = RR[GR];
          yR && JR.push(yR)
        }
        return JR
      }
      _rebuild() {
        const RR = this._vertexBuffers[yR.l.PositionKind];
        RR && (RR._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const GR = this._scene.activeCamera;
        return !!GR && (JR = JR || this._getActivePostProcesses(GR._postProcesses), !(!JR || 0 === JR.length || !this._scene.postProcessesEnabled) && (JR[0].activate(GR, RR, null !== JR && void 0 !== JR), !0))
      }
      directRender(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          uR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : RR.length;
        const qR = this._scene.ke();
        for (let iR = 0; iR < ZR; iR++) {
          iR < RR.length - 1 ? RR[iR + 1].activate(this._scene.activeCamera || this._scene, JR?.texture) : (JR ? qR.bindFramebuffer(JR, yR, void 0, void 0, GR, tR) : uR || qR.restoreDefaultFramebuffer(), qR._debugInsertMarker?.(`post process ${RR[iR].name} output`));
          const ZR = RR[iR],
            fR = ZR.apply();
          fR && (ZR.onBeforeRenderObservable.notifyObservers(fR), this._prepareBuffers(), qR.bindBuffers(this._vertexBuffers, this._indexBuffer, fR), qR.drawElementsType(0, 0, 6), ZR.onAfterRenderObservable.notifyObservers(fR))
        }
        qR.setDepthBuffer(!0), qR.setDepthWrite(!0)
      }
      _finalizeFrame(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const uR = this._scene.activeCamera;
        if (!uR) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (yR = yR || this._getActivePostProcesses(uR._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const ZR = this._scene.ke();
        for (let qR = 0, iR = yR.length; qR < iR; qR++) {
          const fR = yR[qR];
          if (qR < iR - 1 ? fR._outputTexture = yR[qR + 1].activate(uR, JR?.texture) : (JR ? (ZR.bindFramebuffer(JR, GR, void 0, void 0, tR), fR._outputTexture = JR) : (ZR.restoreDefaultFramebuffer(), fR._outputTexture = null), ZR._debugInsertMarker?.(`post process ${yR[qR].name} output`)), RR) break;
          const VR = fR.apply();
          VR && (fR.onBeforeRenderObservable.notifyObservers(VR), this._prepareBuffers(), ZR.bindBuffers(this._vertexBuffers, this._indexBuffer, VR), ZR.drawElementsType(0, 0, 6), fR.onAfterRenderObservable.notifyObservers(VR))
        }
        ZR.setDepthBuffer(!0), ZR.setDepthWrite(!0), ZR.setAlphaMode(0)
      }
      dispose() {
        const RR = this._vertexBuffers[yR.l.PositionKind];
        RR && (RR.dispose(), this._vertexBuffers[yR.l.PositionKind] = null), this._indexBuffer && (this._scene.ke()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  41690: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => fR
    });
    var yR = GR(41626),
      tR = GR(38204);
    const uR = [],
      ZR = [];
    let qR = !1;

    function iR(RR, JR) {
      for (; RR.length < JR;) RR.push(void 0)
    }
    class fR {
      set opaqueSortCompareFn(RR) {
        this._opaqueSortCompareFn = RR || fR.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(RR) {
        this._alphaTestSortCompareFn = RR || fR.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(RR) {
        this._transparentSortCompareFn = RR || fR.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          uR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = RR, this._opaqueSubMeshes = new yR.f(256), this._transparentSubMeshes = new yR.f(256), this._alphaTestSubMeshes = new yR.f(256), this._depthOnlySubMeshes = new yR.f(256), this._particleSystems = new yR.f(256), this._spriteManagers = new yR.f(256), this._empty = !0, this._edgesRenderers = new yR.d(16), this.disableDepthPrePass = !1, this._scene = JR, this.opaqueSortCompareFn = GR, this.alphaTestSortCompareFn = tR, this.transparentSortCompareFn = uR
      }
      render(RR, JR, GR, yR) {
        let tR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          uR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          ZR = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          qR = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          iR = arguments.length > 8 ? arguments[8] : void 0;
        if (RR) return void RR(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const fR = this._scene.ke();
        tR && 0 !== this._depthOnlySubMeshes.length && (fR.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), fR.setColorWrite(!0)), uR && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), ZR && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const VR = fR.getStencilBuffer();
        if (fR.setStencilBuffer(!1), JR && this._renderSprites(), GR && this._renderParticles(yR), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), qR && (iR || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (fR.setStencilBuffer(VR), iR) iR(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const RR = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            RR.length && this._renderTransparent(RR)
          } else this._renderTransparent(this._transparentSubMeshes);
          fR.setAlphaMode(0)
        }
        if (fR.setStencilBuffer(!1), uR && this._edgesRenderers.length) {
          for (let RR = 0; RR < this._edgesRenderers.length; RR++) this._edgesRenderers.data[RR].render();
          fR.setAlphaMode(0)
        }
        fR.setStencilBuffer(VR)
      }
      _renderOpaqueSorted(RR) {
        fR._RenderSorted(RR, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(RR) {
        fR._RenderSorted(RR, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(RR) {
        fR._RenderSorted(RR, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(RR, JR, GR, yR, uR) {
        let VR, KR = 0;
        const wR = GR ? GR.globalPosition : fR._ZeroVector;
        if (yR && JR !== fR.PainterSortCompare)
          for (; KR < RR.length; KR++) VR = RR.data[KR], VR._alphaIndex = VR.getMesh().alphaIndex, VR._distanceToCamera = tR.r.Distance(VR.Tm().euR.centerWorld, wR);
        const rR = RR.length;
        let eR = RR.data;
        const aR = rR !== eR.length && !qR;
        if (aR) {
          for (qR = !0, iR(ZR, rR), KR = 0; KR < rR; KR++) ZR[KR] = eR[KR];
          eR = ZR
        } else rR !== eR.length && (eR = eR.slice(0, rR));
        try {
          JR && fR._StableSort(eR, rR, JR), fR._DrawSorted(eR, rR, yR, uR)
        } finally {
          aR && (ZR.fill(void 0, 0, rR), qR = !1)
        }
      }
      static _DrawSorted(RR, JR, GR, yR) {
        let tR;
        const uR = RR[0].getMesh().jH();
        for (let ZR = 0; ZR < JR; ZR++) {
          if (tR = RR[ZR], uR._activeMeshesFrozenButKeepClipping && !tR.isInFrustum(uR._frustumPlanes)) continue;
          let JR = !1;
          if (GR) {
            const RR = tR.he();
            if (RR && RR.needDepthPrePass && !yR) {
              JR = !0;
              const GR = RR.jH().ke();
              GR.setColorWrite(!1), GR.setAlphaMode(0), tR.render(!1), GR.setColorWrite(!0)
            }
          }
          const qR = tR._renderingMesh;
          !JR && qR._renderRunFollower(tR, GR) || tR.render(GR)
        }
      }
      static _StableSort(RR, JR, GR) {
        for (let yR = 0; yR < JR; yR += 16) {
          const tR = Math.min(yR + 16, JR);
          for (let JR = yR + 1; JR < tR; JR++) {
            const tR = RR[JR];
            let uR = yR,
              ZR = JR;
            for (; uR < ZR;) {
              const JR = uR + ZR >>> 1;
              GR(tR, RR[JR]) < 0 ? ZR = JR : uR = JR + 1
            }
            for (let GR = JR; GR > uR; GR--) RR[GR] = RR[GR - 1];
            RR[uR] = tR
          }
        }
        if (!(JR <= 16)) {
          iR(uR, JR);
          try {
            let yR = RR,
              tR = uR;
            for (let RR = 16; RR < JR; RR *= 2) {
              for (let ZR = 0; ZR < JR; ZR += 2 * RR) {
                const uR = Math.min(ZR + RR, JR),
                  qR = Math.min(ZR + 2 * RR, JR);
                let iR = ZR,
                  fR = uR,
                  VR = ZR;
                if (uR < qR && GR(yR[uR], yR[uR - 1]) < 0)
                  for (; iR < uR && fR < qR;) tR[VR++] = GR(yR[fR], yR[iR]) < 0 ? yR[fR++] : yR[iR++];
                for (; iR < uR;) tR[VR++] = yR[iR++];
                for (; fR < qR;) tR[VR++] = yR[fR++]
              }
              const uR = tR;
              tR = yR, yR = uR
            }
            if (yR !== RR)
              for (let GR = 0; GR < JR; GR++) RR[GR] = yR[GR]
          } finally {
            uR.fill(void 0, 0, JR)
          }
        }
      }
      static defaultTransparentSortCompare(RR, JR) {
        return RR._alphaIndex > JR._alphaIndex ? 1 : RR._alphaIndex < JR._alphaIndex ? -1 : fR.backToFrontSortCompare(RR, JR)
      }
      static backToFrontSortCompare(RR, JR) {
        return RR._distanceToCamera < JR._distanceToCamera ? 1 : RR._distanceToCamera > JR._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(RR, JR) {
        return RR._distanceToCamera < JR._distanceToCamera ? -1 : RR._distanceToCamera > JR._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(RR, JR) {
        const GR = RR.getMesh(),
          yR = JR.getMesh();
        return GR.material && yR.material ? GR.material.uniqueId - yR.material.uniqueId : GR.uniqueId - yR.uniqueId
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
      dispatch(RR, JR, GR) {
        void 0 === JR && (JR = RR.getMesh()), void 0 === GR && (GR = RR.he()), null !== GR && void 0 !== GR && (GR.needAlphaBlendingForMesh(JR) ? this._transparentSubMeshes.push(RR) : GR.needAlphaTestingForMesh(JR) ? (GR.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(RR), this._alphaTestSubMeshes.push(RR)) : (GR.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(RR), this._opaqueSubMeshes.push(RR)), JR._renderingGroup = this, JR._edgesRenderer && JR.isEnabled() && JR.isVisible && JR._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(JR._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(RR) {
        this._spriteManagers.push(RR), this._empty = !1
      }
      dispatchParticles(RR) {
        this._particleSystems.push(RR), this._empty = !1
      }
      _renderParticles(RR) {
        if (0 === this._particleSystems.length) return;
        const JR = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let GR = 0; GR < this._particleSystems.length; GR++) {
          const yR = this._particleSystems.data[GR];
          if (0 === (JR && JR.layerMask & yR.layerMask)) continue;
          const tR = yR.emitter;
          tR.position && RR && -1 === RR.indexOf(tR) || this._scene._activeParticles.addCount(yR.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const RR = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let JR = 0; JR < this._spriteManagers.length; JR++) {
          const GR = this._spriteManagers.data[JR];
          0 !== (RR && RR.layerMask & GR.layerMask) && GR.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    fR._ZeroVector = tR.r.Zero()
  },
  41681: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR
    });
    var yR = GR(41690);
    class tR {}
    class uR {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(RR) {
        this._disableDepthPrePass = RR;
        for (const JR of this._renderingGroups) JR.disableDepthPrePass = RR
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(RR) {
        RR !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = RR, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const RR of this._scene.meshes)
          if (RR.XM)
            for (const JR of RR.XM) JR._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const RR of this._scene.spriteManagers) RR._wasDispatched = !1;
        for (const RR of this._scene.pM) RR._wasDispatched = !1
      }
      constructor(RR) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new tR, this._maintainStateBetweenFrames = !1, this._scene = RR;
        for (let JR = uR.MIN_RENDERINGGROUPS; JR < uR.MAX_RENDERINGGROUPS; JR++) this._autoClearDepthStencil[JR] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(RR) {
        const JR = RR || 0;
        return this._prepareRenderingGroup(JR), this._renderingGroups[JR]
      }
      _clearDepthStencilBuffer() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.ke().clear(null, !1, RR, JR), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(RR, JR, GR, yR) {
        let tR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          ZR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          qR = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          iR = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          fR = arguments.length > 8 ? arguments[8] : void 0,
          VR = arguments.length > 9 ? arguments[9] : void 0;
        const KR = this._renderingGroupInfo;
        KR.tL = this._scene, KR.camera = this._scene.activeCamera, KR.renderingManager = this;
        const wR = VR ?? this._scene.spriteManagers;
        if (wR && yR)
          for (let uR = 0; uR < wR.length; uR++) {
            const RR = wR[uR];
            this.dispatchSprites(RR)
          }
        for (let rR = uR.MIN_RENDERINGGROUPS; rR < uR.MAX_RENDERINGGROUPS; rR++) {
          this._depthStencilBufferAlreadyCleaned = rR === uR.MIN_RENDERINGGROUPS;
          const VR = this._renderingGroups[rR];
          if (!VR || VR._empty) continue;
          const wR = 1 << rR;
          if (KR.renderingGroupId = rR, this._scene.onBeforeRenderingGroupObservable.notifyObservers(KR, wR), uR.AUTOCLEAR) {
            const RR = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(rR) : this._autoClearDepthStencil[rR];
            RR && RR.autoClear && this._clearDepthStencilBuffer(RR.depth, RR.stencil)
          }
          for (let RR = 0, JR = this._scene._beforeRenderingGroupDrawStage; RR < JR.length; RR++) {
            JR[RR].action(rR)
          }
          VR.render(RR, yR, GR, JR, tR, ZR, qR, iR, fR);
          for (let RR = 0, JR = this._scene._afterRenderingGroupDrawStage; RR < JR.length; RR++) {
            JR[RR].action(rR)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(KR, wR)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let RR = uR.MIN_RENDERINGGROUPS; RR < uR.MAX_RENDERINGGROUPS; RR++) {
            const JR = this._renderingGroups[RR];
            JR && JR.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let RR = uR.MIN_RENDERINGGROUPS; RR < uR.MAX_RENDERINGGROUPS; RR++) {
            const JR = this._renderingGroups[RR];
            JR && JR.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let RR = uR.MIN_RENDERINGGROUPS; RR < uR.MAX_RENDERINGGROUPS; RR++) {
          const JR = this._renderingGroups[RR];
          JR && JR.dispose()
        }
      }
      _prepareRenderingGroup(RR) {
        void 0 === this._renderingGroups[RR] && (this._renderingGroups[RR] = new yR.d(RR, this._scene, this._customOpaqueSortCompareFn[RR], this._customAlphaTestSortCompareFn[RR], this._customTransparentSortCompareFn[RR]), this._renderingGroups[RR].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(RR) {
        this.maintainStateBetweenFrames && RR._wasDispatched || (RR._wasDispatched = !0, this.getRenderingGroup(RR.renderingGroupId).dispatchSprites(RR))
      }
      dispatchParticles(RR) {
        this.maintainStateBetweenFrames && RR._wasDispatched || (RR._wasDispatched = !0, this.getRenderingGroup(RR.renderingGroupId).dispatchParticles(RR))
      }
      dispatch(RR, JR, GR) {
        void 0 === JR && (JR = RR.getMesh()), this.maintainStateBetweenFrames && RR._wasDispatched || (RR._wasDispatched = !0, this.getRenderingGroup(JR.renderingGroupId).dispatch(RR, JR, GR))
      }
      setRenderingOrder(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[RR] = JR, this._customAlphaTestSortCompareFn[RR] = GR, this._customTransparentSortCompareFn[RR] = yR, this._renderingGroups[RR]) {
          const JR = this._renderingGroups[RR];
          JR.opaqueSortCompareFn = this._customOpaqueSortCompareFn[RR], JR.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[RR], JR.transparentSortCompareFn = this._customTransparentSortCompareFn[RR]
        }
      }
      setRenderingAutoClearDepthStencil(RR, JR) {
        let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[RR] = {
          autoClear: JR,
          depth: GR,
          stencil: yR
        }
      }
      getAutoClearDepthStencilSetup(RR) {
        return this._autoClearDepthStencil[RR]
      }
    }
    uR.MAX_RENDERINGGROUPS = 4, uR.MIN_RENDERINGGROUPS = 0, uR.AUTOCLEAR = !0
  },
  41429: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR
    });
    class yR {
      constructor(RR) {
        this._supportBlendParametersPerTarget = RR, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(RR) {
        this.setAlphaBlend(RR)
      }
      setAlphaBlend(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[JR] !== RR && (RR ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[JR] = RR, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(RR, JR, GR, yR) {
        this._blendConstants[0] === RR && this._blendConstants[1] === JR && this._blendConstants[2] === GR && this._blendConstants[3] === yR || (this._blendConstants[0] = RR, this._blendConstants[1] = JR, this._blendConstants[2] = GR, this._blendConstants[3] = yR, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(RR, JR, GR, yR) {
        const tR = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[tR + 0] === RR && this._blendFunctionParameters[tR + 1] === JR && this._blendFunctionParameters[tR + 2] === GR && this._blendFunctionParameters[tR + 3] === yR || (this._blendFunctionParameters[tR + 0] = RR, this._blendFunctionParameters[tR + 1] = JR, this._blendFunctionParameters[tR + 2] = GR, this._blendFunctionParameters[tR + 3] = yR, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(RR, JR) {
        const GR = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[GR + 0] === RR && this._blendEquationParameters[GR + 1] === JR || (this._blendEquationParameters[GR + 0] = RR, this._blendEquationParameters[GR + 1] = JR, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== JR && (this._numTargets = JR, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== GR && (this._blendDisabledTargetsMask = GR, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (RR.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === JR || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (JR > 1 && 0 !== GR && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & GR) ? RR.enable(RR.BLEND) : RR.disable(RR.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (RR.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (RR.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const yR = RR;
        if (this._isAlphaBlendDirty) {
          for (let tR = 0; tR < JR; tR++) {
            const JR = tR < this._numTargetEnabled ? tR : 0;
            this._alphaBlend[JR] && 0 === (GR & 1 << tR) ? yR.enableIndexed(RR.BLEND, tR) : yR.disableIndexed(RR.BLEND, tR)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let RR = 0; RR < JR; RR++) {
            const JR = RR < this._numTargetEnabled ? 4 * RR : 0;
            yR.blendFuncSeparateIndexed(RR, this._blendFunctionParameters[JR + 0], this._blendFunctionParameters[JR + 1], this._blendFunctionParameters[JR + 2], this._blendFunctionParameters[JR + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let RR = 0; RR < JR; RR++) {
            const JR = RR < this._numTargetEnabled ? 2 * RR : 0;
            yR.blendEquationSeparateIndexed(RR, this._blendEquationParameters[JR + 0], this._blendEquationParameters[JR + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(RR, JR) {
        let GR = 32774;
        switch (RR) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, JR);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, JR);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, JR);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, JR);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, JR);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, JR);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, JR);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, JR);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, JR);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, JR);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, JR);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, JR);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, JR);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, JR);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, JR);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, JR);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, JR), GR = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, JR), GR = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, JR);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, JR)
        }
        this.setAlphaEquationParameters(GR, GR, JR)
      }
    }
  },
  41710: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR
    });
    class yR {}
    yR._IsPickingAvailable = !1
  },
  41612: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qG,
      g: () => uG
    });
    var yR = GR(41616),
      tR = GR(41415),
      uR = GR(41425),
      ZR = GR(38233),
      qR = GR(41626);
    class iR {
      constructor() {
        this._count = 0, this._data = {}
      }
      vN(RR) {
        this.clear(), RR.forEach(((RR, JR) => this.add(RR, JR)))
      }
      get(RR) {
        const JR = this._data[RR];
        if (void 0 !== JR) return JR
      }
      getOrAddWithFactory(RR, JR) {
        let GR = this.get(RR);
        return void 0 !== GR || (GR = JR(RR), GR && this.add(RR, GR)), GR
      }
      getOrAdd(RR, JR) {
        const GR = this.get(RR);
        return void 0 !== GR ? GR : (this.add(RR, JR), JR)
      }
      contains(RR) {
        return void 0 !== this._data[RR]
      }
      add(RR, JR) {
        return void 0 === this._data[RR] && (this._data[RR] = JR, ++this._count, !0)
      }
      set(RR, JR) {
        return void 0 !== this._data[RR] && (this._data[RR] = JR, !0)
      }
      getAndRemove(RR) {
        const JR = this.get(RR);
        return void 0 !== JR ? (delete this._data[RR], --this._count, JR) : null
      }
      remove(RR) {
        return !!this.contains(RR) && (delete this._data[RR], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(RR) {
        for (const JR in this._data) {
          RR(JR, this._data[JR])
        }
      }
      first(RR) {
        for (const JR in this._data) {
          const GR = RR(JR, this._data[JR]);
          if (GR) return GR
        }
        return null
      }
    }
    var fR = GR(41547),
      VR = GR(38204),
      KR = GR(41634),
      wR = GR(41650),
      rR = GR(41659);
    class eR {
      constructor(RR, JR, GR, yR, tR, uR) {
        this.source = RR, this.pointerX = JR, this.pointerY = GR, this.meshUnderPointer = yR, this.sourceEvent = tR, this.additionalData = uR
      }
      static CreateNew(RR, JR, GR) {
        const yR = RR.jH();
        return new eR(RR, yR.pointerX, yR.pointerY, yR.meshUnderPointer || RR, JR, GR)
      }
      static CreateNewFromSprite(RR, JR, GR, yR) {
        return new eR(RR, JR.pointerX, JR.pointerY, JR.meshUnderPointer, GR, yR)
      }
      static CreateNewFromScene(RR, JR) {
        return new eR(null, RR.pointerX, RR.pointerY, RR.meshUnderPointer, JR)
      }
      static CreateNewFromPrimitive(RR, JR, GR, yR) {
        return new eR(RR, JR.x, JR.y, null, GR, yR)
      }
    }
    var aR = GR(41670),
      LR = GR(41678),
      nR = GR(41681),
      UR = GR(41693),
      WR = GR(41395),
      AR = GR(38224),
      CR = GR(41407),
      XR = GR(41701);
    class MR {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const RR in MR.Triggers)
          if (Object.prototype.hasOwnProperty.call(MR.Triggers, RR)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const RR in MR.Triggers)
          if (Object.prototype.hasOwnProperty.call(MR.Triggers, RR)) {
            const JR = parseInt(RR);
            if (JR >= 1 && JR <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(RR) {
        for (const JR in MR.Triggers)
          if (Object.prototype.hasOwnProperty.call(MR.Triggers, JR)) {
            if (parseInt(JR) === RR) return !0
          } return !1
      }
    }
    MR.Triggers = {};
    var BR, lR, pR, gR, bR, vR, OR, xR = GR(41705);
    ! function(RR) {
      RR[RR.Generic = 0] = "Generic", RR[RR.Keyboard = 1] = "Keyboard", RR[RR.Mouse = 2] = "Mouse", RR[RR.Touch = 3] = "Touch", RR[RR.DualShock = 4] = "DualShock", RR[RR.Xbox = 5] = "Xbox", RR[RR.Switch = 6] = "Switch", RR[RR.DualSense = 7] = "DualSense"
    }(BR || (BR = {})),
    function(RR) {
      RR[RR.Horizontal = 0] = "Horizontal", RR[RR.Vertical = 1] = "Vertical", RR[RR.LeftClick = 2] = "LeftClick", RR[RR.MiddleClick = 3] = "MiddleClick", RR[RR.RightClick = 4] = "RightClick", RR[RR.BrowserBack = 5] = "BrowserBack", RR[RR.BrowserForward = 6] = "BrowserForward", RR[RR.MouseWheelX = 7] = "MouseWheelX", RR[RR.MouseWheelY = 8] = "MouseWheelY", RR[RR.MouseWheelZ = 9] = "MouseWheelZ", RR[RR.Move = 12] = "Move"
    }(lR || (lR = {})),
    function(RR) {
      RR[RR.Horizontal = 0] = "Horizontal", RR[RR.Vertical = 1] = "Vertical", RR[RR.LeftClick = 2] = "LeftClick", RR[RR.MiddleClick = 3] = "MiddleClick", RR[RR.RightClick = 4] = "RightClick", RR[RR.BrowserBack = 5] = "BrowserBack", RR[RR.BrowserForward = 6] = "BrowserForward", RR[RR.MouseWheelX = 7] = "MouseWheelX", RR[RR.MouseWheelY = 8] = "MouseWheelY", RR[RR.MouseWheelZ = 9] = "MouseWheelZ", RR[RR.DeltaHorizontal = 10] = "DeltaHorizontal", RR[RR.DeltaVertical = 11] = "DeltaVertical"
    }(pR || (pR = {})),
    function(RR) {
      RR[RR.Cross = 0] = "Cross", RR[RR.Circle = 1] = "Circle", RR[RR.Square = 2] = "Square", RR[RR.Triangle = 3] = "Triangle", RR[RR.L1 = 4] = "L1", RR[RR.R1 = 5] = "R1", RR[RR.L2 = 6] = "L2", RR[RR.R2 = 7] = "R2", RR[RR.Share = 8] = "Share", RR[RR.Options = 9] = "Options", RR[RR.L3 = 10] = "L3", RR[RR.R3 = 11] = "R3", RR[RR.DPadUp = 12] = "DPadUp", RR[RR.DPadDown = 13] = "DPadDown", RR[RR.DPadLeft = 14] = "DPadLeft", RR[RR.DPadRight = 15] = "DPadRight", RR[RR.Home = 16] = "Home", RR[RR.TouchPad = 17] = "TouchPad", RR[RR.LStickXAxis = 18] = "LStickXAxis", RR[RR.LStickYAxis = 19] = "LStickYAxis", RR[RR.RStickXAxis = 20] = "RStickXAxis", RR[RR.RStickYAxis = 21] = "RStickYAxis"
    }(gR || (gR = {})),
    function(RR) {
      RR[RR.Cross = 0] = "Cross", RR[RR.Circle = 1] = "Circle", RR[RR.Square = 2] = "Square", RR[RR.Triangle = 3] = "Triangle", RR[RR.L1 = 4] = "L1", RR[RR.R1 = 5] = "R1", RR[RR.L2 = 6] = "L2", RR[RR.R2 = 7] = "R2", RR[RR.Create = 8] = "Create", RR[RR.Options = 9] = "Options", RR[RR.L3 = 10] = "L3", RR[RR.R3 = 11] = "R3", RR[RR.DPadUp = 12] = "DPadUp", RR[RR.DPadDown = 13] = "DPadDown", RR[RR.DPadLeft = 14] = "DPadLeft", RR[RR.DPadRight = 15] = "DPadRight", RR[RR.Home = 16] = "Home", RR[RR.TouchPad = 17] = "TouchPad", RR[RR.LStickXAxis = 18] = "LStickXAxis", RR[RR.LStickYAxis = 19] = "LStickYAxis", RR[RR.RStickXAxis = 20] = "RStickXAxis", RR[RR.RStickYAxis = 21] = "RStickYAxis"
    }(bR || (bR = {})),
    function(RR) {
      RR[RR.A = 0] = "A", RR[RR.B = 1] = "B", RR[RR.X = 2] = "X", RR[RR.Y = 3] = "Y", RR[RR.LB = 4] = "LB", RR[RR.RB = 5] = "RB", RR[RR.LT = 6] = "LT", RR[RR.RT = 7] = "RT", RR[RR.Back = 8] = "Back", RR[RR.Start = 9] = "Start", RR[RR.LS = 10] = "LS", RR[RR.RS = 11] = "RS", RR[RR.DPadUp = 12] = "DPadUp", RR[RR.DPadDown = 13] = "DPadDown", RR[RR.DPadLeft = 14] = "DPadLeft", RR[RR.DPadRight = 15] = "DPadRight", RR[RR.Home = 16] = "Home", RR[RR.LStickXAxis = 17] = "LStickXAxis", RR[RR.LStickYAxis = 18] = "LStickYAxis", RR[RR.RStickXAxis = 19] = "RStickXAxis", RR[RR.RStickYAxis = 20] = "RStickYAxis"
    }(vR || (vR = {})),
    function(RR) {
      RR[RR.B = 0] = "B", RR[RR.A = 1] = "A", RR[RR.Y = 2] = "Y", RR[RR.X = 3] = "X", RR[RR.L = 4] = "L", RR[RR.R = 5] = "R", RR[RR.ZL = 6] = "ZL", RR[RR.ZR = 7] = "ZR", RR[RR.Minus = 8] = "Minus", RR[RR.Plus = 9] = "Plus", RR[RR.LS = 10] = "LS", RR[RR.RS = 11] = "RS", RR[RR.DPadUp = 12] = "DPadUp", RR[RR.DPadDown = 13] = "DPadDown", RR[RR.DPadLeft = 14] = "DPadLeft", RR[RR.DPadRight = 15] = "DPadRight", RR[RR.Home = 16] = "Home", RR[RR.Capture = 17] = "Capture", RR[RR.LStickXAxis = 18] = "LStickXAxis", RR[RR.LStickYAxis = 19] = "LStickYAxis", RR[RR.RStickXAxis = 20] = "RStickXAxis", RR[RR.RStickYAxis = 21] = "RStickYAxis"
    }(OR || (OR = {}));
    var NR = GR(41707);
    class DR {
      static CreateDeviceEvent(RR, JR, GR, yR, tR, uR, ZR) {
        switch (RR) {
          case BR.Keyboard:
            return this._CreateKeyboardEvent(GR, yR, tR, uR);
          case BR.Mouse:
            if (GR === lR.MouseWheelX || GR === lR.MouseWheelY || GR === lR.MouseWheelZ) return this._CreateWheelEvent(RR, JR, GR, yR, tR, uR);
          case BR.Touch:
            return this._CreatePointerEvent(RR, JR, GR, yR, tR, uR, ZR);
          default:
            throw `Unable to generate event for device ${BR[RR]}`
        }
      }
      static _CreatePointerEvent(RR, JR, GR, yR, tR, uR, ZR) {
        const qR = this._CreateMouseEvent(RR, JR, GR, yR, tR, uR);
        RR === BR.Mouse ? (qR.deviceType = BR.Mouse, qR.pointerId = 1, qR.pointerType = "mouse") : (qR.deviceType = BR.Touch, qR.pointerId = ZR ?? JR, qR.pointerType = "touch");
        let iR = 0;
        return iR += tR.pollInput(RR, JR, lR.LeftClick), iR += 2 * tR.pollInput(RR, JR, lR.RightClick), iR += 4 * tR.pollInput(RR, JR, lR.MiddleClick), qR.buttons = iR, GR === lR.Move ? qR.type = "pointermove" : GR >= lR.LeftClick && GR <= lR.RightClick && (qR.type = 1 === yR ? "pointerdown" : "pointerup", qR.button = GR - 2), qR
      }
      static _CreateWheelEvent(RR, JR, GR, yR, tR, uR) {
        const ZR = this._CreateMouseEvent(RR, JR, GR, yR, tR, uR);
        switch (ZR.pointerId = 1, ZR.type = "wheel", ZR.deltaMode = NR.c.DOM_DELTA_PIXEL, ZR.deltaX = 0, ZR.deltaY = 0, ZR.deltaZ = 0, GR) {
          case lR.MouseWheelX:
            ZR.deltaX = yR;
            break;
          case lR.MouseWheelY:
            ZR.deltaY = yR;
            break;
          case lR.MouseWheelZ:
            ZR.deltaZ = yR
        }
        return ZR
      }
      static _CreateMouseEvent(RR, JR, GR, yR, tR, uR) {
        const ZR = this._CreateEvent(uR),
          qR = tR.pollInput(RR, JR, lR.Horizontal),
          iR = tR.pollInput(RR, JR, lR.Vertical);
        return uR ? (ZR.movementX = 0, ZR.movementY = 0, ZR.offsetX = ZR.movementX - uR.getBoundingClientRect().x, ZR.offsetY = ZR.movementY - uR.getBoundingClientRect().y) : (ZR.movementX = tR.pollInput(RR, JR, 10), ZR.movementY = tR.pollInput(RR, JR, 11), ZR.offsetX = 0, ZR.offsetY = 0), this._CheckNonCharacterKeys(ZR, tR), ZR.clientX = qR, ZR.clientY = iR, ZR.x = qR, ZR.y = iR, ZR.deviceType = RR, ZR.deviceSlot = JR, ZR.inputIndex = GR, ZR
      }
      static _CreateKeyboardEvent(RR, JR, GR, yR) {
        const tR = this._CreateEvent(yR);
        return this._CheckNonCharacterKeys(tR, GR), tR.deviceType = BR.Keyboard, tR.deviceSlot = 0, tR.inputIndex = RR, tR.type = 1 === JR ? "keydown" : "keyup", tR.key = String.fromCharCode(RR), tR.keyCode = RR, tR
      }
      static _CheckNonCharacterKeys(RR, JR) {
        const GR = JR.isDeviceAvailable(BR.Keyboard),
          yR = GR && 1 === JR.pollInput(BR.Keyboard, 0, 18),
          tR = GR && 1 === JR.pollInput(BR.Keyboard, 0, 17),
          uR = GR && (1 === JR.pollInput(BR.Keyboard, 0, 91) || 1 === JR.pollInput(BR.Keyboard, 0, 92) || 1 === JR.pollInput(BR.Keyboard, 0, 93)),
          ZR = GR && 1 === JR.pollInput(BR.Keyboard, 0, 16);
        RR.altKey = yR, RR.ctrlKey = tR, RR.metaKey = uR, RR.shiftKey = ZR
      }
      static _CreateEvent(RR) {
        const JR = {
          preventDefault: () => {}
        };
        return JR.target = RR, JR
      }
    }
    class HR {
      constructor(RR, JR, GR) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(RR, JR, ((RR, JR, yR, tR) => {
          const uR = DR.CreateDeviceEvent(RR, JR, yR, tR, this);
          GR(RR, JR, uR)
        })) : this._createDummyNativeInput()
      }
      pollInput(RR, JR, GR) {
        return this._nativeInput.pollInput(RR, JR, GR)
      }
      isDeviceAvailable(RR) {
        return RR === BR.Mouse || RR === BR.Touch
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
    const oR = Object.keys(lR).length / 2;
    class cR {
      constructor(RR, JR, GR, tR) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = yR.h.IsSafari(), this._usingMacOs = (0, WR.i)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = RR => {}, this._keyboardUpEvent = RR => {}, this._keyboardBlurEvent = RR => {}, this._pointerMoveEvent = RR => {}, this._pointerDownEvent = RR => {}, this._pointerUpEvent = RR => {}, this._pointerCancelEvent = RR => {}, this._pointerCancelTouch = RR => {}, this._pointerLeaveEvent = RR => {}, this._pointerWheelEvent = RR => {}, this._pointerBlurEvent = RR => {}, this._pointerMacOsChromeOutEvent = RR => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, WR.i)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, WR.i)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = RR => {}, this._gamepadDisconnectedEvent = RR => {}, this._eventPrefix = yR.h.GetPointerPrefix(RR), this._engine = RR, this._onDeviceConnected = JR, this._onDeviceDisconnected = GR, this._onInputChanged = tR, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(RR, JR, GR) {
        const tR = this._inputs[RR][JR];
        if (!tR) throw `Unable to find device ${BR[RR]}`;
        RR >= BR.DualShock && RR <= BR.DualSense && this._updateDevice(RR, JR, GR);
        const uR = tR[GR];
        if (void 0 === uR) throw `Unable to find input ${GR} for device ${BR[RR]} in slot ${JR}`;
        return GR === lR.Move && yR.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), uR
      }
      isDeviceAvailable(RR) {
        return void 0 !== this._inputs[RR]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const RR = this?._engine.getInputElement();
        if (RR && (!this._eventsAttached || this._elementToAttachTo !== RR)) {
          if (this._disableEvents(), this._inputs)
            for (const RR of this._inputs)
              if (RR)
                for (const JR in RR) {
                  const GR = RR[+JR];
                  if (GR)
                    for (let RR = 0; RR < GR.length; RR++) GR[RR] = 0
                }
          this._elementToAttachTo = RR, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const RR = navigator.getGamepads();
          for (const JR of RR) JR && this._addGamePad(JR)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(BR.Mouse, 0, 0, 0)
      }
      _addGamePad(RR) {
        const JR = this._getGamepadDeviceType(RR.id),
          GR = RR.index;
        this._gamepads = this._gamepads || new Array(RR.index + 1), this._registerDevice(JR, GR, RR.buttons.length + RR.axes.length), this._gamepads[GR] = JR
      }
      _addPointerDevice(RR, JR, GR, yR) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(RR, JR, oR);
        const tR = this._inputs[RR][JR];
        tR[0] = GR, tR[1] = yR
      }
      _registerDevice(RR, JR, GR) {
        if (void 0 === JR) throw `Unable to register device ${BR[RR]} to undefined slot.`;
        if (this._inputs[RR] || (this._inputs[RR] = {}), !this._inputs[RR][JR]) {
          const yR = new Array(GR);
          yR.fill(0), this._inputs[RR][JR] = yR, this._onDeviceConnected(RR, JR)
        }
      }
      _unregisterDevice(RR, JR) {
        this._inputs[RR][JR] && (delete this._inputs[RR][JR], this._onDeviceDisconnected(RR, JR))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = RR => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(BR.Keyboard, 0, 255));
          const JR = this._inputs[BR.Keyboard][0];
          if (JR) {
            JR[RR.keyCode] = 1;
            const GR = RR;
            GR.inputIndex = RR.keyCode, this._usingMacOs && RR.metaKey && "Meta" !== RR.key && (this._metaKeys.includes(RR.keyCode) || this._metaKeys.push(RR.keyCode)), this._onInputChanged(BR.Keyboard, 0, GR)
          }
        }, this._keyboardUpEvent = RR => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(BR.Keyboard, 0, 255));
          const JR = this._inputs[BR.Keyboard][0];
          if (JR) {
            JR[RR.keyCode] = 0;
            const GR = RR;
            if (GR.inputIndex = RR.keyCode, this._usingMacOs && "Meta" === RR.key && this._metaKeys.length > 0) {
              for (const RR of this._metaKeys) {
                const GR = DR.CreateDeviceEvent(BR.Keyboard, 0, RR, 0, this, this._elementToAttachTo);
                JR[RR] = 0, this._onInputChanged(BR.Keyboard, 0, GR)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(BR.Keyboard, 0, GR)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const RR = this._inputs[BR.Keyboard][0];
            for (let JR = 0; JR < RR.length; JR++)
              if (0 !== RR[JR]) {
                RR[JR] = 0;
                const GR = DR.CreateDeviceEvent(BR.Keyboard, 0, JR, 0, this, this._elementToAttachTo);
                this._onInputChanged(BR.Keyboard, 0, GR)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, WR.i)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let yR = 0; yR < this._maxTouchPoints; yR++) this._activeTouchIds[yR] = -1;
        this._pointerMoveEvent = RR => {
          const JR = this._getPointerType(RR);
          let GR = JR === BR.Mouse ? 0 : this._activeTouchIds.indexOf(RR.pointerId);
          if (JR === BR.Touch && -1 === GR) {
            if (0 === RR.buttons) return;
            const tR = this._activeTouchIds.indexOf(-1);
            if (!(tR >= 0)) return void yR.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            GR = tR, this._activeTouchIds[tR] = RR.pointerId, this._onDeviceConnected(JR, GR)
          }
          this._inputs[JR] || (this._inputs[JR] = {}), this._inputs[JR][GR] || this._addPointerDevice(JR, GR, RR.clientX, RR.clientY);
          const tR = this._inputs[JR][GR];
          if (tR) {
            const yR = RR;
            yR.inputIndex = lR.Move, tR[lR.Horizontal] = RR.clientX, tR[lR.Vertical] = RR.clientY, JR === BR.Touch && 0 === tR[lR.LeftClick] && (tR[lR.LeftClick] = 1), void 0 === RR.pointerId && (RR.pointerId = this._mouseId), this._onInputChanged(JR, GR, yR), this._usingSafari || -1 === RR.button || (yR.inputIndex = RR.button + 2, tR[RR.button + 2] = tR[RR.button + 2] ? 0 : 1, this._onInputChanged(JR, GR, yR))
          }
        }, this._pointerDownEvent = RR => {
          const JR = this._getPointerType(RR);
          let GR = JR === BR.Mouse ? 0 : RR.pointerId;
          if (JR === BR.Touch) {
            let JR = this._activeTouchIds.indexOf(RR.pointerId);
            if (-1 === JR && (JR = this._activeTouchIds.indexOf(-1)), !(JR >= 0)) return void yR.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            GR = JR, this._activeTouchIds[JR] = RR.pointerId
          }
          this._inputs[JR] || (this._inputs[JR] = {}), this._inputs[JR][GR] ? JR === BR.Touch && this._onDeviceConnected(JR, GR) : this._addPointerDevice(JR, GR, RR.clientX, RR.clientY);
          const tR = this._inputs[JR][GR];
          if (tR) {
            const yR = tR[lR.Horizontal],
              ZR = tR[lR.Vertical];
            if (JR === BR.Mouse) {
              if (void 0 === RR.pointerId && (RR.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (uR) {}
            } else if (RR.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(RR.pointerId)
            } catch (uR) {}
            tR[lR.Horizontal] = RR.clientX, tR[lR.Vertical] = RR.clientY, tR[RR.button + 2] = 1;
            const qR = RR;
            qR.inputIndex = RR.button + 2, this._onInputChanged(JR, GR, qR), yR === RR.clientX && ZR === RR.clientY || (qR.inputIndex = lR.Move, this._onInputChanged(JR, GR, qR))
          }
        }, this._pointerUpEvent = RR => {
          const JR = this._getPointerType(RR),
            GR = JR === BR.Mouse ? 0 : this._activeTouchIds.indexOf(RR.pointerId);
          if (JR === BR.Touch) {
            if (-1 === GR) return;
            this._activeTouchIds[GR] = -1
          }
          const yR = this._inputs[JR]?.[GR];
          let tR = RR.button,
            uR = yR && 0 !== yR[tR + 2];
          if (!uR && this._isUsingFirefox && this._usingMacOs && yR && (tR = 2 === tR ? 0 : 2, uR = 0 !== yR[tR + 2]), uR) {
            const uR = yR[lR.Horizontal],
              ZR = yR[lR.Vertical];
            yR[lR.Horizontal] = RR.clientX, yR[lR.Vertical] = RR.clientY, yR[tR + 2] = 0;
            const qR = RR;
            void 0 === RR.pointerId && (RR.pointerId = this._mouseId), uR === RR.clientX && ZR === RR.clientY || (qR.inputIndex = lR.Move, this._onInputChanged(JR, GR, qR)), qR.inputIndex = tR + 2, JR === BR.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : RR.pointerId && this._elementToAttachTo.hasPointerCapture?.(RR.pointerId) && this._elementToAttachTo.releasePointerCapture(RR.pointerId), this._onInputChanged(JR, GR, qR), JR === BR.Touch && this._onDeviceDisconnected(JR, GR)
          }
        }, this._pointerCancelTouch = RR => {
          const JR = this._activeTouchIds.indexOf(RR);
          if (-1 === JR) return;
          this._elementToAttachTo.hasPointerCapture?.(RR) && this._elementToAttachTo.releasePointerCapture(RR), this._inputs[BR.Touch][JR][lR.LeftClick] = 0;
          const GR = DR.CreateDeviceEvent(BR.Touch, JR, lR.LeftClick, 0, this, this._elementToAttachTo, RR);
          this._onInputChanged(BR.Touch, JR, GR), this._activeTouchIds[JR] = -1, this._onDeviceDisconnected(BR.Touch, JR)
        }, this._pointerCancelEvent = RR => {
          if ("mouse" === RR.pointerType) {
            const RR = this._inputs[BR.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let JR = lR.LeftClick; JR <= lR.BrowserForward; JR++)
              if (1 === RR[JR]) {
                RR[JR] = 0;
                const GR = DR.CreateDeviceEvent(BR.Mouse, 0, JR, 0, this, this._elementToAttachTo);
                this._onInputChanged(BR.Mouse, 0, GR)
              }
          } else this._pointerCancelTouch(RR.pointerId)
        }, this._pointerLeaveEvent = RR => {
          "pen" === RR.pointerType && this._pointerCancelTouch(RR.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let RR = !1;
        const JR = function() {};
        try {
          const GR = Object.defineProperty({}, "passive", {
            get: function() {
              RR = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", JR, GR), this._elementToAttachTo.removeEventListener("test", JR, GR)
        } catch (GR) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(BR.Mouse)) {
            const RR = this._inputs[BR.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let JR = lR.LeftClick; JR <= lR.BrowserForward; JR++)
              if (1 === RR[JR]) {
                RR[JR] = 0;
                const GR = DR.CreateDeviceEvent(BR.Mouse, 0, JR, 0, this, this._elementToAttachTo);
                this._onInputChanged(BR.Mouse, 0, GR)
              }
          }
          if (this.isDeviceAvailable(BR.Touch)) {
            const RR = this._inputs[BR.Touch];
            for (let JR = 0; JR < this._activeTouchIds.length; JR++) {
              const GR = this._activeTouchIds[JR];
              if (this._elementToAttachTo.hasPointerCapture?.(GR) && this._elementToAttachTo.releasePointerCapture(GR), -1 !== GR && 1 === RR[JR]?.[lR.LeftClick]) {
                RR[JR][lR.LeftClick] = 0;
                const yR = DR.CreateDeviceEvent(BR.Touch, JR, lR.LeftClick, 0, this, this._elementToAttachTo, GR);
                this._onInputChanged(BR.Touch, JR, yR), this._activeTouchIds[JR] = -1, this._onDeviceDisconnected(BR.Touch, JR)
              }
            }
          }
        }, this._pointerWheelEvent = RR => {
          const JR = BR.Mouse;
          this._inputs[JR] || (this._inputs[JR] = []), this._inputs[JR][0] || (this._pointerActive = !0, this._registerDevice(JR, 0, oR));
          const GR = this._inputs[JR][0];
          if (GR) {
            GR[lR.MouseWheelX] = RR.deltaX || 0, GR[lR.MouseWheelY] = RR.deltaY || RR.wheelDelta || 0, GR[lR.MouseWheelZ] = RR.deltaZ || 0;
            const yR = RR;
            void 0 === RR.pointerId && (RR.pointerId = this._mouseId), 0 !== GR[lR.MouseWheelX] && (yR.inputIndex = lR.MouseWheelX, this._onInputChanged(JR, 0, yR)), 0 !== GR[lR.MouseWheelY] && (yR.inputIndex = lR.MouseWheelY, this._onInputChanged(JR, 0, yR)), 0 !== GR[lR.MouseWheelZ] && (yR.inputIndex = lR.MouseWheelZ, this._onInputChanged(JR, 0, yR))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = RR => {
          RR.buttons > 1 && this._pointerCancelEvent(RR)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!RR && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(BR.Mouse)) {
            const RR = this._inputs[BR.Mouse][0];
            RR[lR.MouseWheelX] = 0, RR[lR.MouseWheelY] = 0, RR[lR.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = RR => {
          this._addGamePad(RR.gamepad)
        }, this._gamepadDisconnectedEvent = RR => {
          if (this._gamepads) {
            const JR = this._getGamepadDeviceType(RR.gamepad.id),
              GR = RR.gamepad.index;
            this._unregisterDevice(JR, GR), delete this._gamepads[GR]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(RR, JR, GR) {
        const yR = navigator.getGamepads()[JR];
        if (yR && RR === this._gamepads[JR]) {
          const tR = this._inputs[RR][JR];
          GR >= yR.buttons.length ? tR[GR] = yR.axes[GR - yR.buttons.length].valueOf() : tR[GR] = yR.buttons[GR].value
        }
      }
      _getGamepadDeviceType(RR) {
        return -1 !== RR.indexOf("054c") ? -1 !== RR.indexOf("0ce6") ? BR.DualSense : BR.DualShock : -1 !== RR.indexOf("Xbox One") || -1 !== RR.search("Xbox 360") || -1 !== RR.search("xinput") || -1 !== RR.indexOf("045e") && -1 === RR.indexOf("Surface Dock") ? BR.Xbox : -1 !== RR.indexOf("057e") ? BR.Switch : BR.Generic
      }
      _getPointerType(RR) {
        let JR = BR.Mouse;
        return ("touch" === RR.pointerType || "pen" === RR.pointerType || RR.touches) && (JR = BR.Touch), JR
      }
    }
    class PR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = JR, this.deviceSlot = GR, this.onInputChangedObservable = new ZR.b, this._deviceInputSystem = RR
      }
      getInput(RR) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, RR)
      }
    }
    class IR {
      constructor(RR) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = RR => {
          for (let JR = 0; JR < this._devices.length; JR++) {
            const GR = this._devices[JR];
            for (const yR in GR) {
              const GR = +yR;
              RR._addDevice(new PR(this._deviceInputSystem, JR, GR))
            }
          }
          this._registeredManagers.push(RR)
        }, this.unregisterManager = RR => {
          const JR = this._registeredManagers.indexOf(RR);
          JR > -1 && this._registeredManagers.splice(JR, 1)
        };
        const JR = Object.keys(BR).length / 2;
        this._devices = new Array(JR);
        const GR = (RR, JR) => {
            this._devices[RR] || (this._devices[RR] = new Array), this._devices[RR][JR] || (this._devices[RR][JR] = JR);
            for (const GR of this._registeredManagers) {
              const yR = new PR(this._deviceInputSystem, RR, JR);
              GR._addDevice(yR)
            }
          },
          yR = (RR, JR) => {
            this._devices[RR]?.[JR] && delete this._devices[RR][JR];
            for (const GR of this._registeredManagers) GR._removeDevice(RR, JR)
          },
          tR = (RR, JR, GR) => {
            if (GR)
              for (const yR of this._registeredManagers) yR._onInputChanged(RR, JR, GR)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new HR(GR, yR, tR) : this._deviceInputSystem = new cR(RR, GR, yR, tR)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class mR {
      getDeviceSource(RR, JR) {
        if (void 0 === JR) {
          if (void 0 === this._firstDevice[RR]) return null;
          JR = this._firstDevice[RR]
        }
        return this._devices[RR] && void 0 !== this._devices[RR][JR] ? this._devices[RR][JR] : null
      }
      getDeviceSources(RR) {
        return this._devices[RR] ? this._devices[RR].filter((RR => !!RR)) : []
      }
      constructor(RR) {
        const JR = Object.keys(BR).length / 2;
        this._devices = new Array(JR), this._firstDevice = new Array(JR), this._engine = RR, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new IR(RR)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new ZR.b((RR => {
          for (const JR of this._devices)
            if (JR)
              for (const GR of JR) GR && this.onDeviceConnectedObservable.notifyObserver(RR, GR)
        })), this.onDeviceDisconnectedObservable = new ZR.b, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = RR.YH.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.YH.remove(this._onDisposeObserver)
      }
      _addDevice(RR) {
        this._devices[RR.deviceType] || (this._devices[RR.deviceType] = []), this._devices[RR.deviceType][RR.deviceSlot] || (this._devices[RR.deviceType][RR.deviceSlot] = RR, this._updateFirstDevices(RR.deviceType)), this.onDeviceConnectedObservable.notifyObservers(RR)
      }
      _removeDevice(RR, JR) {
        const GR = this._devices[RR]?.[JR];
        this.onDeviceDisconnectedObservable.notifyObservers(GR), this._devices[RR]?.[JR] && delete this._devices[RR][JR], this._updateFirstDevices(RR)
      }
      _onInputChanged(RR, JR, GR) {
        this._devices[RR]?.[JR]?.onInputChangedObservable.notifyObservers(GR)
      }
      _updateFirstDevices(RR) {
        switch (RR) {
          case BR.Keyboard:
          case BR.Mouse:
            this._firstDevice[RR] = 0;
            break;
          case BR.Touch:
          case BR.DualSense:
          case BR.DualShock:
          case BR.Xbox:
          case BR.Switch:
          case BR.Generic: {
            delete this._firstDevice[RR];
            const JR = this._devices[RR];
            if (JR)
              for (let GR = 0; GR < JR.length; GR++)
                if (JR[GR]) {
                  this._firstDevice[RR] = GR;
                  break
                } break
          }
        }
      }
    }
    var zR = GR(41710);
    class SR {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get Ri() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(RR) {
        this._singleClick = RR
      }
      set Ri(RR) {
        this._doubleClick = RR
      }
      set hasSwiped(RR) {
        this._hasSwiped = RR
      }
      set ignore(RR) {
        this._ignore = RR
      }
    }
    class jR {
      constructor(RR) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new VR.n(0, 0), this._previousStartingPointerPosition = new VR.n(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = RR || AR.c.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(RR) {
        return this._meshUnderPointerId[RR] || null
      }
      get unTranslatedPointer() {
        return new VR.n(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(RR) {
        this._pointerX = RR
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(RR) {
        this._pointerY = RR
      }
      _updatePointerPosition(RR) {
        const JR = this._scene.ke().getInputElementClientRect();
        JR && (this._pointerX = RR.clientX - JR.left, this._pointerY = RR.clientY - JR.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(RR, JR) {
        const GR = this._scene,
          yR = GR.ke(),
          tR = yR.getInputElement();
        tR && (tR.tabIndex = yR.canvasTabIndex, GR.doNotHandleCursors || (tR.style.cursor = GR.defaultCursor)), this._setCursorAndPointerOverMesh(RR, JR, GR);
        for (const qR of GR._pointerMoveStage) {
          RR = RR || this._pickMove(JR);
          const GR = !!RR?.pickedMesh;
          RR = qR.action(this._unTranslatedPointerX, this._unTranslatedPointerY, RR, GR, tR)
        }
        const uR = JR.inputIndex >= lR.MouseWheelX && JR.inputIndex <= lR.MouseWheelZ ? XR.c.POINTERWHEEL : XR.c.POINTERMOVE;
        let ZR;
        GR.onPointerMove && (RR = RR || this._pickMove(JR), GR.onPointerMove(JR, RR, uR)), RR ? (ZR = new XR.j(uR, JR, RR), this._setRayOnPointerInfo(RR, JR)) : (ZR = new XR.j(uR, JR, null, this), this._movePointerInfo = ZR), GR.onPointerObservable.hasObservers() && GR.onPointerObservable.notifyObservers(ZR, uR)
      }
      _setRayOnPointerInfo(RR, JR) {
        const GR = this._scene;
        RR && zR.d._IsPickingAvailable && (RR.ray || (RR.ray = GR.createPickingRay(JR.offsetX, JR.offsetY, VR.e.Identity(), GR.activeCamera)))
      }
      _addCameraPointerObserver(RR, JR) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(RR, JR)
      }
      _removeCameraPointerObserver(RR) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(RR)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(RR, JR, GR) {
        const yR = this._scene,
          tR = new XR.f(GR, JR, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return RR && (tR.originalPickingInfo = RR, tR.ray = RR.ray, "xr-near" === JR.pointerType && RR.originMesh && (tR.nearInteractionPickingInfo = RR)), yR.onPrePointerObservable.notifyObservers(tR, GR), !!tR.skipOnPointerObservable
      }
      _pickMove(RR) {
        const JR = this._scene,
          GR = JR.Ur(this._unTranslatedPointerX, this._unTranslatedPointerY, JR.pointerMovePredicate, JR.pointerMoveFastCheck, JR.cameraToUseForPointers, JR.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(GR, RR, JR), GR
      }
      _updateMeshUnderPointer() {
        const RR = this._scene;
        if (!RR.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || RR.skipPointerMovePicking || !RR.cameraToUseForPointers && !RR.activeCamera) return;
        this._ensurePointerMovePredicate();
        const JR = this._pointerX,
          GR = this._pointerY,
          yR = this._unTranslatedPointerX,
          tR = this._unTranslatedPointerY;
        for (const uR of this._latestPointerMoveEvents.values()) this._pointerX = uR.pointerX, this._pointerY = uR.pointerY, this._unTranslatedPointerX = uR.unTranslatedPointerX, this._unTranslatedPointerY = uR.unTranslatedPointerY, this._pickMove(uR.event);
        this._pointerX = JR, this._pointerY = GR, this._unTranslatedPointerX = yR, this._unTranslatedPointerY = tR
      }
      _ensurePointerMovePredicate() {
        const RR = this._scene;
        RR.pointerMovePredicate || (RR.pointerMovePredicate = JR => (JR._isPointerMovePickable ?? JR.ZL) && JR.isVisible && JR.isReady() && JR.isEnabled() && (JR.enablePointerMoveEvents || RR.constantlyUpdateMeshUnderPointer || null !== JR._getActionManagerForTrigger()) && (!RR.cameraToUseForPointers || 0 !== (RR.cameraToUseForPointers.layerMask & JR.layerMask)))
      }
      _setCursorAndPointerOverMesh(RR, JR, GR) {
        const yR = GR.ke().getInputElement();
        if (RR?.pickedMesh) {
          if (this.setPointerOverMesh(RR.pickedMesh, JR.pointerId, RR, JR), !GR.doNotHandleCursors && yR && this._pointerOverMesh) {
            const RR = this._pointerOverMesh._getActionManagerForTrigger();
            RR && RR.hasPointerTriggers && (yR.style.cursor = RR.hoverCursor || GR.hoverCursor)
          }
        } else this.setPointerOverMesh(null, JR.pointerId, RR, JR)
      }
      simulatePointerMove(RR, JR) {
        const GR = new PointerEvent("pointermove", JR);
        GR.inputIndex = lR.Move, this._checkPrePointerObservable(RR, GR, XR.c.POINTERMOVE) || this._processPointerMove(RR, GR)
      }
      simulatePointerDown(RR, JR) {
        const GR = new PointerEvent("pointerdown", JR);
        GR.inputIndex = GR.button + 2, this._checkPrePointerObservable(RR, GR, XR.c.POINTERDOWN) || this._processPointerDown(RR, GR)
      }
      _processPointerDown(RR, JR) {
        const GR = this._scene;
        if (RR?.pickedMesh) {
          this._pickedDownMesh = RR.pickedMesh;
          const yR = RR.pickedMesh._getActionManagerForTrigger();
          if (yR) {
            if (yR.hasPickTriggers) switch (yR.processTrigger(5, new eR(RR.pickedMesh, GR.pointerX, GR.pointerY, RR.pickedMesh, JR, RR)), JR.button) {
              case 0:
                yR.processTrigger(2, new eR(RR.pickedMesh, GR.pointerX, GR.pointerY, RR.pickedMesh, JR, RR));
                break;
              case 1:
                yR.processTrigger(4, new eR(RR.pickedMesh, GR.pointerX, GR.pointerY, RR.pickedMesh, JR, RR));
                break;
              case 2:
                yR.processTrigger(3, new eR(RR.pickedMesh, GR.pointerX, GR.pointerY, RR.pickedMesh, JR, RR))
            }
            yR.hasSpecificTrigger(8) && window.setTimeout((() => {
              const RR = GR.Ur(this._unTranslatedPointerX, this._unTranslatedPointerY, (RR => RR.ZL && RR.isVisible && RR.isReady() && RR.actionManager && RR.actionManager.hasSpecificTrigger(8) && RR === this._pickedDownMesh), !1, GR.cameraToUseForPointers);
              RR?.pickedMesh && yR && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > jR.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, yR.processTrigger(8, eR.CreateNew(RR.pickedMesh, JR)))
            }), jR.LongPressDelay)
          }
        } else
          for (const uR of GR._pointerDownStage) RR = uR.action(this._unTranslatedPointerX, this._unTranslatedPointerY, RR, JR, !1);
        let yR;
        const tR = XR.c.POINTERDOWN;
        RR ? (GR.onPointerDown && GR.onPointerDown(JR, RR, tR), yR = new XR.j(tR, JR, RR), this._setRayOnPointerInfo(RR, JR)) : yR = new XR.j(tR, JR, null, this), GR.onPointerObservable.hasObservers() && GR.onPointerObservable.notifyObservers(yR, tR)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(RR, JR, GR) {
        const yR = new PointerEvent("pointerup", JR);
        yR.inputIndex = lR.Move;
        const tR = new SR;
        GR ? tR.Ri = !0 : tR.singleClick = !0, this._checkPrePointerObservable(RR, yR, XR.c.POINTERUP) || this._processPointerUp(RR, yR, tR)
      }
      _processPointerUp(RR, JR, GR) {
        const yR = this._scene;
        if (RR?.pickedMesh) {
          if (this._pickedUpMesh = RR.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (yR.onPointerPick && yR.onPointerPick(JR, RR), GR.singleClick && !GR.ignore && yR.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const GR = XR.c.POINTERPICK,
              tR = new XR.j(GR, JR, RR);
            this._setRayOnPointerInfo(RR, JR), yR.onPointerObservable.notifyObservers(tR, GR)
          }
          const tR = RR.pickedMesh._getActionManagerForTrigger();
          if (tR && !GR.ignore) {
            tR.processTrigger(7, eR.CreateNew(RR.pickedMesh, JR, RR)), !GR.hasSwiped && GR.singleClick && tR.processTrigger(1, eR.CreateNew(RR.pickedMesh, JR, RR));
            const yR = RR.pickedMesh._getActionManagerForTrigger(6);
            GR.Ri && yR && yR.processTrigger(6, eR.CreateNew(RR.pickedMesh, JR, RR))
          }
        } else if (!GR.ignore)
          for (const tR of yR._pointerUpStage) RR = tR.action(this._unTranslatedPointerX, this._unTranslatedPointerY, RR, JR, GR.Ri);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const RR = this._pickedDownMesh._getActionManagerForTrigger(16);
          RR && RR.processTrigger(16, eR.CreateNew(this._pickedDownMesh, JR))
        }
        if (!GR.ignore) {
          const tR = new XR.j(XR.c.POINTERUP, JR, RR);
          if (this._setRayOnPointerInfo(RR, JR), yR.onPointerObservable.notifyObservers(tR, XR.c.POINTERUP), yR.onPointerUp && yR.onPointerUp(JR, RR, XR.c.POINTERUP), !GR.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let tR = 0;
            if (GR.singleClick ? tR = XR.c.POINTERTAP : GR.Ri && (tR = XR.c.POINTERDOUBLETAP), tR) {
              const GR = new XR.j(tR, JR, RR);
              yR.onPointerObservable.hasObservers() && yR.onPointerObservable.hasSpecificMask(tR) && yR.onPointerObservable.notifyObservers(GR, tR)
            }
          }
        }
      }
      isPointerCaptured() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[RR]
      }
      attachControl() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const tR = this._scene,
          uR = tR.ke();
        yR || (yR = uR.getInputElement()), this._alreadyAttached && this.detachControl(), yR && (this._alreadyAttachedTo = yR), this._deviceSourceManager = new mR(uR), this._initActionManager = RR => {
          if (!this._meshPickProceed) {
            const JR = tR.skipPointerUpPicking || 0 === tR._registeredActions && !this._checkForPicking() && !tR.onPointerUp ? null : tR.Ur(this._unTranslatedPointerX, this._unTranslatedPointerY, tR.pointerUpPredicate, tR.pointerUpFastCheck, tR.cameraToUseForPointers, tR.pointerUpTrianglePredicate);
            this._currentPickResult = JR, JR && (RR = JR.hit && JR.pickedMesh ? JR.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return RR
        }, this._delayedSimpleClick = (RR, JR, GR) => {
          if ((Date.now() - this._previousStartingPointerTime > jR.DoubleClickDelay && !this._doubleClickOccured || RR !== this._previousButtonPressed) && (this._doubleClickOccured = !1, JR.singleClick = !0, JR.ignore = !1, this._delayedClicks[RR])) {
            const JR = this._delayedClicks[RR].evt,
              GR = XR.c.POINTERTAP,
              yR = new XR.j(GR, JR, this._currentPickResult);
            tR.onPointerObservable.hasObservers() && tR.onPointerObservable.hasSpecificMask(GR) && tR.onPointerObservable.notifyObservers(yR, GR), this._delayedClicks[RR] = null
          }
        }, this._initClickEvent = (RR, JR, GR, yR) => {
          const tR = new SR;
          this._currentPickResult = null;
          let uR = null,
            ZR = RR.hasSpecificMask(XR.c.POINTERPICK) || JR.hasSpecificMask(XR.c.POINTERPICK) || RR.hasSpecificMask(XR.c.POINTERTAP) || JR.hasSpecificMask(XR.c.POINTERTAP) || RR.hasSpecificMask(XR.c.POINTERDOUBLETAP) || JR.hasSpecificMask(XR.c.POINTERDOUBLETAP);
          !ZR && MR && (uR = this._initActionManager(uR, tR), uR && (ZR = uR.hasPickTriggers));
          let qR = !1;
          if (ZR = ZR && !this._isMultiTouchGesture, ZR) {
            const ZR = GR.button;
            if (tR.hasSwiped = this._isPointerSwiping(), !tR.hasSwiped) {
              let iR = !jR.ExclusiveDoubleClickMode;
              if (iR || (iR = !RR.hasSpecificMask(XR.c.POINTERDOUBLETAP) && !JR.hasSpecificMask(XR.c.POINTERDOUBLETAP), iR && !MR.HasSpecificTrigger(6) && (uR = this._initActionManager(uR, tR), uR && (iR = !uR.hasSpecificTrigger(6)))), iR)(Date.now() - this._previousStartingPointerTime > jR.DoubleClickDelay || ZR !== this._previousButtonPressed) && (tR.singleClick = !0, yR(tR, this._currentPickResult), qR = !0);
              else {
                const RR = {
                  evt: GR,
                  clickInfo: tR,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, ZR, tR, yR), jR.DoubleClickDelay)
                };
                this._delayedClicks[ZR] = RR
              }
              let fR = RR.hasSpecificMask(XR.c.POINTERDOUBLETAP) || JR.hasSpecificMask(XR.c.POINTERDOUBLETAP);
              !fR && MR.HasSpecificTrigger(6) && (uR = this._initActionManager(uR, tR), uR && (fR = uR.hasSpecificTrigger(6))), fR && (ZR === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < jR.DoubleClickDelay && !this._doubleClickOccured ? (tR.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = ZR, jR.ExclusiveDoubleClickMode ? (this._delayedClicks[ZR] && (clearTimeout(this._delayedClicks[ZR]?.timeoutId), this._delayedClicks[ZR] = null), yR(tR, this._previousPickResult)) : yR(tR, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, tR.Ri = !0, tR.ignore = !1, jR.ExclusiveDoubleClickMode && this._delayedClicks[ZR] && (clearTimeout(this._delayedClicks[ZR]?.timeoutId), this._delayedClicks[ZR] = null), yR(tR, this._currentPickResult)), qR = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = ZR))
            }
          }
          qR || yR(tR, this._currentPickResult)
        }, this._onPointerMove = RR => {
          if (this._updatePointerPosition(RR), this._latestPointerMoveEvents.set(RR.pointerId, {
              event: RR,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > jR.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > jR.DragMovementThreshold), uR.isPointerLock && uR._verifyPointerLock(), this._checkPrePointerObservable(null, RR, RR.inputIndex >= lR.MouseWheelX && RR.inputIndex <= lR.MouseWheelZ ? XR.c.POINTERWHEEL : XR.c.POINTERMOVE)) return;
          if (!tR.cameraToUseForPointers && !tR.activeCamera) return;
          if (tR.skipPointerMovePicking) return void this._processPointerMove(new rR.e, RR);
          this._ensurePointerMovePredicate();
          const JR = tR._registeredActions > 0 || tR.constantlyUpdateMeshUnderPointer ? this._pickMove(RR) : null;
          this._processPointerMove(JR, RR)
        }, this._onPointerDown = RR => {
          const JR = this._activePointerIds.indexOf(-1);
          if (-1 === JR ? this._activePointerIds.push(RR.pointerId) : this._activePointerIds[JR] = RR.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, jR.ExclusiveDoubleClickMode)
            for (let yR = 0; yR < this._delayedClicks.length; yR++)
              if (this._delayedClicks[yR])
                if (RR.button === yR) clearTimeout(this._delayedClicks[yR]?.timeoutId);
                else {
                  const RR = this._delayedClicks[yR].clickInfo;
                  this._doubleClickOccured = !1, RR.singleClick = !0, RR.ignore = !1;
                  const JR = this._delayedClicks[yR].evt,
                    GR = XR.c.POINTERTAP,
                    uR = new XR.j(GR, JR, this._currentPickResult);
                  tR.onPointerObservable.hasObservers() && tR.onPointerObservable.hasSpecificMask(GR) && tR.onPointerObservable.notifyObservers(uR, GR), this._delayedClicks[yR] = null
                } if (this._updatePointerPosition(RR), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = RR.button), tR.preventDefaultOnPointerDown && yR && (RR.preventDefault(), yR.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, RR, XR.c.POINTERDOWN)) return;
          if (!tR.cameraToUseForPointers && !tR.activeCamera) return;
          let GR;
          this._pointerCaptures[RR.pointerId] = !0, tR.pointerDownPredicate || (tR.pointerDownPredicate = RR => RR.ZL && RR.isVisible && RR.isReady() && RR.isEnabled() && (!tR.cameraToUseForPointers || 0 !== (tR.cameraToUseForPointers.layerMask & RR.layerMask))), this._pickedDownMesh = null, GR = tR.skipPointerDownPicking || 0 === tR._registeredActions && !this._checkForPicking() && !tR.onPointerDown ? new rR.e : tR.Ur(this._unTranslatedPointerX, this._unTranslatedPointerY, tR.pointerDownPredicate, tR.pointerDownFastCheck, tR.cameraToUseForPointers, tR.pointerDownTrianglePredicate), this._processPointerDown(GR, RR)
        }, this._onPointerUp = RR => {
          const JR = this._activePointerIds.indexOf(RR.pointerId); - 1 !== JR && (this._activePointerIds[JR] = -1, this._activePointerIdsCount--, "touch" === RR.pointerType && this._latestPointerMoveEvents.delete(RR.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(RR), tR.preventDefaultOnPointerUp && yR && (RR.preventDefault(), yR.focus()), this._initClickEvent(tR.onPrePointerObservable, tR.onPointerObservable, RR, ((JR, GR) => {
            if (tR.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !JR.ignore)) {
              if (this._checkPrePointerObservable(null, RR, XR.c.POINTERUP)) return this._swipeButtonPressed === RR.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === RR.buttons && (this._pointerCaptures[RR.pointerId] = !1));
              JR.hasSwiped || (JR.singleClick && tR.onPrePointerObservable.hasSpecificMask(XR.c.POINTERTAP) && this._checkPrePointerObservable(null, RR, XR.c.POINTERTAP) && (this._skipPointerTap = !0), JR.Ri && tR.onPrePointerObservable.hasSpecificMask(XR.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, RR, XR.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[RR.pointerId] ? (0 === RR.buttons && (this._pointerCaptures[RR.pointerId] = !1), (tR.cameraToUseForPointers || tR.activeCamera) && (tR.pointerUpPredicate || (tR.pointerUpPredicate = RR => RR.ZL && RR.isVisible && RR.isReady() && RR.isEnabled() && (!tR.cameraToUseForPointers || 0 !== (tR.cameraToUseForPointers.layerMask & RR.layerMask))), !this._meshPickProceed && (MR && MR.HasTriggers || this._checkForPicking() || tR.onPointerUp) && this._initActionManager(null, JR), GR || (GR = this._currentPickResult), this._processPointerUp(GR, RR, JR), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === RR.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === RR.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = RR => {
          const JR = xR.b.KEYDOWN;
          if (tR.onPreKeyboardObservable.hasObservers()) {
            const GR = new xR.e(JR, RR);
            if (tR.onPreKeyboardObservable.notifyObservers(GR, JR), GR.skipOnKeyboardObservable) return
          }
          if (tR.onKeyboardObservable.hasObservers()) {
            const GR = new xR.h(JR, RR);
            tR.onKeyboardObservable.notifyObservers(GR, JR)
          }
          tR.actionManager && tR.actionManager.processTrigger(14, eR.CreateNewFromScene(tR, RR))
        }, this._onKeyUp = RR => {
          const JR = xR.b.KEYUP;
          if (tR.onPreKeyboardObservable.hasObservers()) {
            const GR = new xR.e(JR, RR);
            if (tR.onPreKeyboardObservable.notifyObservers(GR, JR), GR.skipOnKeyboardObservable) return
          }
          if (tR.onKeyboardObservable.hasObservers()) {
            const GR = new xR.h(JR, RR);
            tR.onKeyboardObservable.notifyObservers(GR, JR)
          }
          tR.actionManager && tR.actionManager.processTrigger(15, eR.CreateNewFromScene(tR, RR))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((yR => {
          yR.deviceType === BR.Mouse ? yR.onInputChangedObservable.add((tR => {
            this._originMouseEvent = tR, tR.inputIndex === lR.LeftClick || tR.inputIndex === lR.MiddleClick || tR.inputIndex === lR.RightClick || tR.inputIndex === lR.BrowserBack || tR.inputIndex === lR.BrowserForward ? JR && 1 === yR.getInput(tR.inputIndex) ? this._onPointerDown(tR) : RR && 0 === yR.getInput(tR.inputIndex) && this._onPointerUp(tR) : GR && (tR.inputIndex === lR.Move ? this._onPointerMove(tR) : tR.inputIndex !== lR.MouseWheelX && tR.inputIndex !== lR.MouseWheelY && tR.inputIndex !== lR.MouseWheelZ || this._onPointerMove(tR))
          })) : yR.deviceType === BR.Touch ? yR.onInputChangedObservable.add((tR => {
            tR.inputIndex === lR.LeftClick && (JR && 1 === yR.getInput(tR.inputIndex) ? (this._onPointerDown(tR), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : RR && 0 === yR.getInput(tR.inputIndex) && (this._onPointerUp(tR), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), GR && tR.inputIndex === lR.Move && this._onPointerMove(tR)
          })) : yR.deviceType === BR.Keyboard && yR.onInputChangedObservable.add((RR => {
            "keydown" === RR.type ? this._onKeyDown(RR) : "keyup" === RR.type && this._onKeyUp(RR)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[JR] === RR && (!RR || !RR._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const tR = this._meshUnderPointerId[JR];
        let uR;
        tR && (uR = tR._getActionManagerForTrigger(10), uR && uR.processTrigger(10, new eR(tR, this._pointerX, this._pointerY, RR, yR, {
          pointerId: JR
        }))), RR ? (this._meshUnderPointerId[JR] = RR, this._pointerOverMesh = RR, uR = RR._getActionManagerForTrigger(9), uR && uR.processTrigger(9, new eR(RR, this._pointerX, this._pointerY, RR, yR, {
          pointerId: JR,
          pickResult: GR
        }))) : (delete this._meshUnderPointerId[JR], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: RR,
          pointerId: JR
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(RR) {
        this._pointerOverMesh === RR && (this._pointerOverMesh = null), this._pickedDownMesh === RR && (this._pickedDownMesh = null), this._pickedUpMesh === RR && (this._pickedUpMesh = null);
        for (const JR in this._meshUnderPointerId) this._meshUnderPointerId[JR] === RR && delete this._meshUnderPointerId[JR]
      }
    }
    jR.DragMovementThreshold = 10, jR.LongPressDelay = 500, jR.DoubleClickDelay = 300, jR.ExclusiveDoubleClickMode = !1;
    var dR = GR(41475),
      ER = GR(38331),
      YR = GR(38928);
    class kR {
      static get UniqueId() {
        const RR = this._UniqueIdCounter;
        return this._UniqueIdCounter++, RR
      }
    }
    kR._UniqueIdCounter = 1;
    var QR = GR(41564),
      FR = GR(41715),
      TR = GR(38217);
    class sR {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var hR, RJ, JJ, GJ, yJ, tJ, uJ, ZJ, qJ, iJ, fJ, VJ, KJ, wJ, rJ, eJ, aJ, LJ, nJ, UJ, WJ, AJ, CJ, XJ, MJ, BJ, lJ, pJ, gJ, bJ, vJ, OJ, xJ, NJ, DJ, HJ, oJ, cJ, PJ, IJ, mJ, zJ, SJ, jJ, dJ, EJ, YJ, kJ, QJ, FJ, TJ, sJ, hJ, RG = GR(39914),
      JG = GR(38253);
    const GG = new VR.s,
      yG = new VR.s;
    var tG;
    ! function(RR) {
      RR[RR.BackwardCompatible = 0] = "BackwardCompatible", RR[RR.Intermediate = 1] = "Intermediate", RR[RR.Aggressive = 2] = "Aggressive"
    }(tG || (tG = {}));
    class uG {
      static DefaultMaterialFactory(RR) {
        throw (0, CR.j)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, CR.j)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(RR) {
        RR !== this._clearColor && (this._clearColor = RR, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(RR) {
        if (RR !== this._performancePriority) {
          switch (this._performancePriority = RR, RR) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(RR)
        }
      }
      set forceWireframe(RR) {
        this._forceWireframe !== RR && (this._forceWireframe = RR, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(RR) {
        this._skipFrustumClipping !== RR && (this._skipFrustumClipping = RR)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(RR) {
        this._forcePointsCloud !== RR && (this._forcePointsCloud = RR, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(RR) {
        this._environmentTexture !== RR && (this._environmentTexture = RR, this.onEnvironmentTextureChangedObservable.notifyObservers(RR), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let RR = [];
        RR = RR.concat(this.meshes), RR = RR.concat(this.lights), RR = RR.concat(this.cameras), RR = RR.concat(this.transformNodes);
        for (const JR of this.skeletons) RR = RR.concat(JR.bones);
        return RR
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(RR) {
        this._animationPropertiesOverride = RR
      }
      set onDispose(RR) {
        this._onDisposeObserver && this.YH.remove(this._onDisposeObserver), this._onDisposeObserver = this.YH.add(RR)
      }
      set beforeRender(RR) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), RR && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(RR))
      }
      set afterRender(RR) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), RR && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(RR))
      }
      set beforeCameraRender(RR) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(RR)
      }
      set afterCameraRender(RR) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(RR)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(RR) {
        this._pointerPickingConfiguration.pointerDownPredicate = RR
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(RR) {
        this._pointerPickingConfiguration.pointerUpPredicate = RR
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(RR) {
        this._pointerPickingConfiguration.pointerMovePredicate = RR
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(RR) {
        this._pointerPickingConfiguration.pointerDownFastCheck = RR
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(RR) {
        this._pointerPickingConfiguration.pointerUpFastCheck = RR
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(RR) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = RR
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(RR) {
        this._pointerPickingConfiguration.skipPointerMovePicking = RR
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(RR) {
        this._pointerPickingConfiguration.skipPointerDownPicking = RR
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(RR) {
        this._pointerPickingConfiguration.skipPointerUpPicking = RR
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return jR.DragMovementThreshold
      }
      static set DragMovementThreshold(RR) {
        jR.DragMovementThreshold = RR
      }
      static get LongPressDelay() {
        return jR.LongPressDelay
      }
      static set LongPressDelay(RR) {
        jR.LongPressDelay = RR
      }
      static get DoubleClickDelay() {
        return jR.DoubleClickDelay
      }
      static set DoubleClickDelay(RR) {
        jR.DoubleClickDelay = RR
      }
      static get ExclusiveDoubleClickMode() {
        return jR.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(RR) {
        jR.ExclusiveDoubleClickMode = RR
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? VR.r.ZeroReadOnly
      }
      bindEyePosition(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const yR = this._eyePosition,
          tR = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          uR = this.floatingOriginOffset,
          ZR = GG.set(yR.x, yR.y, yR.z, tR ? -1 : 1),
          qR = ZR.subtractFromFloatsToRef(uR.x, uR.y, uR.z, 0, yG);
        return RR && (GR ? RR.setFloat3(JR, qR.x, qR.y, qR.z) : RR.setVector4(JR, qR)), ZR
      }
      finalizeSceneUbo() {
        const RR = this.getSceneUniformBuffer(),
          JR = this.bindEyePosition(null),
          GR = this.floatingOriginOffset;
        return RR.updateFloat4("vEyePosition", JR.x - GR.x, JR.y - GR.y, JR.z - GR.z, JR.w), RR.update(), RR
      }
      set useRightHandedSystem(RR) {
        this._useRightHandedSystem !== RR && (this._useRightHandedSystem = RR, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(RR) {
        this._currentStepId = RR
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(RR) {
        this._fogEnabled !== RR && (this._fogEnabled = RR, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(RR) {
        this._fogMode !== RR && (this._fogMode = RR, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(RR) {
        this._shadowsEnabled !== RR && (this._shadowsEnabled = RR, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(RR) {
        this._lightsEnabled !== RR && (this._lightsEnabled = RR, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(RR) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), RR && (this._unObserveActiveCameras = (0, TR.i)(RR, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = RR
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(RR) {
        RR !== this._activeCamera && (this._activeCamera = RR, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return uG.DefaultMaterialFactory !== uG._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = uG.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(RR) {
        this._defaultMaterial = RR
      }
      set texturesEnabled(RR) {
        this._texturesEnabled !== RR && (this._texturesEnabled = RR, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(RR) {
        if (this._frameGraph) return this._frameGraph = RR, void(RR || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = RR, RR && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(RR) {
        this._skeletonsEnabled !== RR && (this._skeletonsEnabled = RR, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = uG.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const RR of this._transientComponents) RR.register();
          this._transientComponents.length = 0
        }
      }
      qtR(RR) {
        this._components.push(RR), this._transientComponents.push(RR);
        const JR = RR;
        JR.addFromContainer && JR.serialize && this._serializableComponents.push(JR)
      }
      _getComponent(RR) {
        for (const JR of this._components)
          if (JR.name === RR) return JR;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(RR, JR) {
        this._inputManager = new jR(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new ER.e(.2, .2, .3, 1), this.onClearColorChangedObservable = new ZR.b, this.ambientColor = new ER.d(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new ZR.b, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.pM = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.YH = new ZR.b, this._onDisposeObserver = null, this.onBeforeRenderObservable = new ZR.b, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new ZR.b, this.onAfterRenderCameraObservable = new ZR.b, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new ZR.b, this.onAfterAnimationsObservable = new ZR.b, this.onBeforeDrawPhaseObservable = new ZR.b, this.onAfterDrawPhaseObservable = new ZR.b, this.onReadyObservable = new ZR.b, this.onBeforeCameraRenderObservable = new ZR.b, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new ZR.b, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new ZR.b, this.onAfterActiveMeshesEvaluationObservable = new ZR.b, this.onBeforeParticlesRenderingObservable = new ZR.b, this.onAfterParticlesRenderingObservable = new ZR.b, this.onDataLoadedObservable = new ZR.b, this.onNewCameraAddedObservable = new ZR.b, this.onCameraRemovedObservable = new ZR.b, this.onNewLightAddedObservable = new ZR.b, this.onLightRemovedObservable = new ZR.b, this.onNewGeometryAddedObservable = new ZR.b, this.onGeometryRemovedObservable = new ZR.b, this.onNewTransformNodeAddedObservable = new ZR.b, this.onTransformNodeRemovedObservable = new ZR.b, this.onNewMeshAddedObservable = new ZR.b, this.onMeshRemovedObservable = new ZR.b, this.onNewSkeletonAddedObservable = new ZR.b, this.onSkeletonRemovedObservable = new ZR.b, this.onNewParticleSystemAddedObservable = new ZR.b, this.onParticleSystemRemovedObservable = new ZR.b, this.onNewAnimationGroupAddedObservable = new ZR.b, this.onAnimationGroupRemovedObservable = new ZR.b, this.onNewMaterialAddedObservable = new ZR.b, this.onNewMultiMaterialAddedObservable = new ZR.b, this.onMaterialRemovedObservable = new ZR.b, this.onMultiMaterialRemovedObservable = new ZR.b, this.onNewTextureAddedObservable = new ZR.b, this.onTextureRemovedObservable = new ZR.b, this.onNewFrameGraphAddedObservable = new ZR.b, this.onFrameGraphRemovedObservable = new ZR.b, this.onNewObjectRendererAddedObservable = new ZR.b, this.onObjectRendererRemovedObservable = new ZR.b, this.onNewPostProcessAddedObservable = new ZR.b, this.onPostProcessRemovedObservable = new ZR.b, this.onNewEffectLayerAddedObservable = new ZR.b, this.onEffectLayerRemovedObservable = new ZR.b, this.onBeforeRenderTargetsRenderObservable = new ZR.b, this.onAfterRenderTargetsRenderObservable = new ZR.b, this.onBeforeStepObservable = new ZR.b, this.onAfterStepObservable = new ZR.b, this.onActiveCameraChanged = new ZR.b, this.onActiveCamerasChanged = new ZR.b, this.onBeforeRenderingGroupObservable = new ZR.b, this.onAfterRenderingGroupObservable = new ZR.b, this.onMeshImportedObservable = new ZR.b, this.onAnimationFileImportedObservable = new ZR.b, this.onEnvironmentTextureChangedObservable = new ZR.b, this.onMeshUnderPointerUpdatedObservable = new ZR.b, this._registeredForLateAnimationBindings = new qR.d(256), this._pointerPickingConfiguration = new sR, this.onPrePointerObservable = new ZR.b, this.onPointerObservable = new ZR.b, this.onPreKeyboardObservable = new ZR.b, this.onKeyboardObservable = new ZR.b, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = uG.FOGMODE_NONE, this.fogColor = new ER.d(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.AY = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new VR.r(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new qR.d(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new dR.d, this._activeIndices = new dR.d, this._activeParticles = new dR.d, this._activeBones = new dR.d, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new qR.f(256), this._processedMaterials = new qR.f(256), this._renderTargets = new qR.d(256), this._materialsRenderTargets = new qR.d(256), this._activeParticleSystems = new qR.f(256), this._activeSkeletons = new qR.d(32), this._softwareSkinnedMeshes = new qR.d(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = VR.e.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = UR.h.Create(), this._beforeClearStage = UR.h.Create(), this._beforeRenderTargetClearStage = UR.h.Create(), this._gatherRenderTargetsStage = UR.h.Create(), this._gatherActiveCameraRenderTargetsStage = UR.h.Create(), this._isReadyForMeshStage = UR.h.Create(), this._beforeEvaluateActiveMeshStage = UR.h.Create(), this._evaluateSubMeshStage = UR.h.Create(), this._preActiveMeshStage = UR.h.Create(), this._cameraDrawRenderTargetStage = UR.h.Create(), this._beforeCameraDrawStage = UR.h.Create(), this._beforeRenderTargetDrawStage = UR.h.Create(), this._beforeRenderingGroupDrawStage = UR.h.Create(), this._beforeRenderingMeshStage = UR.h.Create(), this._afterRenderingMeshStage = UR.h.Create(), this._afterRenderingGroupDrawStage = UR.h.Create(), this._afterCameraDrawStage = UR.h.Create(), this._afterCameraPostProcessStage = UR.h.Create(), this._afterRenderTargetDrawStage = UR.h.Create(), this._afterRenderTargetPostProcessStage = UR.h.Create(), this._afterRenderStage = UR.h.Create(), this._pointerMoveStage = UR.h.Create(), this._pointerDownStage = UR.h.Create(), this._pointerUpStage = UR.h.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new ZR.b, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const GR = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...JR
        };
        this.defaultCameraLayerMask = GR.defaultCameraLayerMask, this.defaultRenderableLayerMask = GR.defaultRenderableLayerMask, RR = this._engine = RR || AR.c.LastCreatedEngine, GR.virtual ? RR._virtualScenes.push(this) : (AR.c._LastCreatedScene = this, RR.scenes.push(this)), (RR.getCreationOptions().useLargeWorldRendering || JR?.useFloatingOrigin) && ((0, LR.h)(), this._floatingOriginScene = this, LR.d.jH = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new nR.e(this), aR.b && (this.postProcessManager = new aR.b(this)), (0, WR.m)() && this.attachControl(), this._createUbo(), KR.b && (this._imageProcessingConfiguration = new KR.b), this.setDefaultCandidateProviders(), GR.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = GR.useMaterialMeshMap, this.useClonedMeshMap = GR.useClonedMeshMap, JR && JR.virtual || RR.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(RR) {
        return this._defaultSubMeshCandidates.data = RR.XM, this._defaultSubMeshCandidates.length = RR.XM.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = RR => this._getDefaultSubMeshCandidates(RR), this.getIntersectingSubMeshCandidates = (RR, JR) => this._getDefaultSubMeshCandidates(RR), this.getCollidingSubMeshCandidates = (RR, JR) => this._getDefaultSubMeshCandidates(RR)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(RR) {
        this._inputManager.pointerX = RR
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(RR) {
        this._inputManager.pointerY = RR
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
      isCachedMaterialInvalid(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== JR || this._cachedMaterial !== RR || this._cachedVisibility !== GR
      }
      ke() {
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
      simulatePointerMove(RR, JR) {
        return this._inputManager.simulatePointerMove(RR, JR), this
      }
      simulatePointerDown(RR, JR) {
        return this._inputManager.simulatePointerDown(RR, JR), this
      }
      simulatePointerUp(RR, JR, GR) {
        return this._inputManager.simulatePointerUp(RR, JR, GR), this
      }
      isPointerCaptured() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(RR)
      }
      attachControl() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(RR, JR, GR)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let RR, JR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const GR = this.ke(),
          yR = GR.currentRenderPassId;
        GR.currentRenderPassId = this.activeCamera?.renderPassId ?? yR;
        let tR = !0;
        for (this._pendingData.length > 0 && (tR = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && tR && (tR = this.depthPeelingRenderer.isReady()), JR && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), RR = 0; RR < this.meshes.length; RR++) {
          const yR = this.meshes[RR];
          if (!yR.XM || 0 === yR.XM.length) continue;
          if (!yR.isReady(!0)) {
            tR = !1;
            continue
          }
          const uR = yR.hasThinInstances || "InstancedMesh" === yR.getClassName() || "InstancedLinesMesh" === yR.getClassName() || GR.getCaps().instancedArrays && yR.instances.length > 0;
          for (let RR = 0, JR = this._isReadyForMeshStage; RR < JR.length; RR++) {
            JR[RR].action(yR, uR) || (tR = !1)
          }
          if (!JR) continue;
          const ZR = yR.material || this.defaultMaterial;
          if (ZR)
            if (ZR._storeEffectOnSubMeshes)
              for (const RR of yR.XM) {
                const JR = RR.he();
                JR && JR.hasRenderTargetTextures && null != JR.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(JR) && (this._processedMaterials.push(JR), this._materialsRenderTargets.concatWithNoDuplicate(JR.getRenderTargetTextures()))
              } else ZR.hasRenderTargetTextures && null != ZR.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(ZR) && (this._processedMaterials.push(ZR), this._materialsRenderTargets.concatWithNoDuplicate(ZR.getRenderTargetTextures()))
        }
        if (JR) {
          for (RR = 0; RR < this._materialsRenderTargets.length; ++RR) {
            this._materialsRenderTargets.data[RR].isReadyForRendering() || (tR = !1)
          }
          for (RR = 0; RR < this.customRenderTargets.length; ++RR) {
            this.customRenderTargets[RR].isReadyForRendering() || (tR = !1)
          }
        }
        for (RR = 0; RR < this.geometries.length; RR++) {
          2 === this.geometries[RR].delayLoadState && (tR = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const uR of this.activeCameras) uR.isReady(!0) || (tR = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (tR = !1));
        for (const uR of this.pM) uR.isReady() || (tR = !1);
        if (this.proceduralTexturesEnabled)
          for (const uR of this.proceduralTextures) uR.isReady() || (tR = !1);
        if (this.layers)
          for (const uR of this.layers) uR.isReady() || (tR = !1);
        if (this.effectLayers)
          for (const uR of this.effectLayers) uR.isLayerReady() || (tR = !1);
        for (const uR of this._isReadyChecks) uR.isReady() || (tR = !1);
        return GR.areAllEffectsReady() || (tR = !1), GR.currentRenderPassId = yR, tR
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(RR) {
        this.onBeforeRenderObservable.add(RR)
      }
      unregisterBeforeRender(RR) {
        this.onBeforeRenderObservable.removeCallback(RR)
      }
      registerAfterRender(RR) {
        this.onAfterRenderObservable.add(RR)
      }
      unregisterAfterRender(RR) {
        this.onAfterRenderObservable.removeCallback(RR)
      }
      _executeOnceBeforeRender(RR) {
        const JR = () => {
          RR(), setTimeout((() => {
            this.unregisterBeforeRender(JR)
          }))
        };
        this.registerBeforeRender(JR)
      }
      executeOnceBeforeRender(RR, JR) {
        void 0 !== JR ? setTimeout((() => {
          this._executeOnceBeforeRender(RR)
        }), JR) : this._executeOnceBeforeRender(RR)
      }
      addPendingData(RR) {
        this._pendingData.push(RR)
      }
      removePendingData(RR) {
        const JR = this.isLoading,
          GR = this._pendingData.indexOf(RR); - 1 !== GR && this._pendingData.splice(GR, 1), JR && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(RR) {
        -1 === this._isReadyChecks.indexOf(RR) && this._isReadyChecks.push(RR)
      }
      removeIsReadyCheck(RR) {
        const JR = this._isReadyChecks.indexOf(RR); - 1 !== JR && this._isReadyChecks.splice(JR, 1)
      }
      executeWhenReady(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(RR), null === this._executeWhenReadyTimeoutId && this._checkIsReady(JR)
      }
      async whenReadyAsync() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((JR => {
          this.executeWhenReady((() => {
            JR()
          }), RR)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = uR.b.Now;
        else if (this.onReadyTimeoutDuration > 0 && uR.b.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(RR)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(RR)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = uR.b.Now
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
      setTransformMatrix(RR, JR, GR, yR) {
        this._multiviewSceneUboIsActive = !!(GR && yR && this._multiviewSceneUbo), this._viewUpdateFlag === RR.updateFlag && this._projectionUpdateFlag === JR.updateFlag || (this._viewUpdateFlag = RR.updateFlag, this._projectionUpdateFlag = JR.updateFlag, this._viewMatrix = RR, this._projectionMatrix = JR, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new VR.e), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? YR.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = YR.e.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(GR, yR) : this._sceneUbo.useUbo && (this._sceneUbo.FRR("viewProjection", this._transformMatrix), this._sceneUbo.FRR("view", this._viewMatrix), this._sceneUbo.FRR("projection", this._projectionMatrix), this._sceneUbo.FRR("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(RR, JR) {
        const GR = "boolean" === typeof JR ? JR : JR?.trackUBOsInFrame,
          yR = new wR.b(this._engine, void 0, !1, RR ?? "tL", void 0, GR);
        return yR.addUniform("viewProjection", 16), yR.addUniform("view", 16), yR.addUniform("projection", 16), yR.addUniform("vEyePosition", 4), yR.addUniform("inverseProjection", 16), yR
      }
      setSceneUniformBuffer(RR) {
        this._sceneUbo = RR, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : VR.r.ZeroReadOnly
      }
      getUniqueId() {
        return kR.UniqueId
      }
      stR(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(RR), RR._resyncLightSources(), RR.parent || RR._addToSceneRootNodes(), tR.e.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(RR)
          })), JR)) {
          const JR = RR.getChildMeshes();
          for (const RR of JR) this.stR(RR)
        }
      }
      vI(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const GR = this.meshes.indexOf(RR);
        if (-1 !== GR && (this.meshes.splice(GR, 1), RR.parent || RR._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(RR), this.onMeshRemovedObservable.notifyObservers(RR), JR) {
          const JR = RR.getChildMeshes();
          for (const RR of JR) this.vI(RR)
        }
        return GR
      }
      addTransformNode(RR) {
        this._blockEntityCollection || RR.jH() === this && -1 !== RR._indexInSceneTransformNodesArray || (RR._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(RR), RR.parent || RR._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(RR))
      }
      removeTransformNode(RR) {
        const JR = RR._indexInSceneTransformNodesArray;
        if (-1 !== JR) {
          if (JR !== this.transformNodes.length - 1) {
            const RR = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[JR] = RR, RR._indexInSceneTransformNodesArray = JR
          }
          RR._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), RR.parent || RR._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(RR), JR
      }
      removeSkeleton(RR) {
        const JR = this.skeletons.indexOf(RR);
        return -1 !== JR && (this.skeletons.splice(JR, 1), this.onSkeletonRemovedObservable.notifyObservers(RR), this._executeActiveContainerCleanup(this._activeSkeletons)), JR
      }
      removeMorphTargetManager(RR) {
        const JR = this.morphTargetManagers.indexOf(RR);
        return -1 !== JR && this.morphTargetManagers.splice(JR, 1), JR
      }
      removeLight(RR) {
        const JR = this.lights.indexOf(RR);
        if (-1 !== JR) {
          for (const JR of this.meshes) JR._removeLightSource(RR, !1);
          this.lights.splice(JR, 1), this.sortLightsByPriority(), RR.parent || RR._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(RR)
        }
        return JR
      }
      removeCamera(RR) {
        const JR = this.cameras.indexOf(RR);
        if (-1 !== JR && (this.cameras.splice(JR, 1), RR.parent || RR._removeFromSceneRootNodes()), this.activeCameras) {
          const JR = this.activeCameras.indexOf(RR); - 1 !== JR && this.activeCameras.splice(JR, 1)
        }
        return this.activeCamera === RR && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(RR), JR
      }
      removeParticleSystem(RR) {
        const JR = this.pM.indexOf(RR);
        return -1 !== JR && (this.pM.splice(JR, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(RR), JR
      }
      removeAnimation(RR) {
        const JR = this.animations.indexOf(RR);
        return -1 !== JR && this.animations.splice(JR, 1), JR
      }
      stopAnimation(RR, JR, GR) {}
      removeAnimationGroup(RR) {
        const JR = this.animationGroups.indexOf(RR);
        return -1 !== JR && this.animationGroups.splice(JR, 1), this.onAnimationGroupRemovedObservable.notifyObservers(RR), JR
      }
      removeMultiMaterial(RR) {
        const JR = this.multiMaterials.indexOf(RR);
        return -1 !== JR && this.multiMaterials.splice(JR, 1), this.onMultiMaterialRemovedObservable.notifyObservers(RR), JR
      }
      removeMaterial(RR) {
        const JR = RR._indexInSceneMaterialArray;
        if (-1 !== JR && JR < this.materials.length) {
          if (JR !== this.materials.length - 1) {
            const RR = this.materials[this.materials.length - 1];
            this.materials[JR] = RR, RR._indexInSceneMaterialArray = JR
          }
          RR._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(RR), JR
      }
      removeActionManager(RR) {
        const JR = this.actionManagers.indexOf(RR);
        return -1 !== JR && this.actionManagers.splice(JR, 1), JR
      }
      removeTexture(RR) {
        const JR = this.textures.indexOf(RR);
        return -1 !== JR && this.textures.splice(JR, 1), this.onTextureRemovedObservable.notifyObservers(RR), JR
      }
      removeFrameGraph(RR) {
        const JR = this.frameGraphs.indexOf(RR);
        return -1 !== JR && this.frameGraphs.splice(JR, 1), this.onFrameGraphRemovedObservable.notifyObservers(RR), JR
      }
      removeObjectRenderer(RR) {
        const JR = this.objectRenderers.indexOf(RR);
        return -1 !== JR && this.objectRenderers.splice(JR, 1), this.onObjectRendererRemovedObservable.notifyObservers(RR), JR
      }
      removePostProcess(RR) {
        const JR = this.postProcesses.indexOf(RR);
        return -1 !== JR && this.postProcesses.splice(JR, 1), this.onPostProcessRemovedObservable.notifyObservers(RR), JR
      }
      removeEffectLayer(RR) {
        const JR = this.effectLayers.indexOf(RR);
        return -1 !== JR && this.effectLayers.splice(JR, 1), this.onEffectLayerRemovedObservable.notifyObservers(RR), JR
      }
      addLight(RR) {
        if (!this._blockEntityCollection) {
          this.lights.push(RR), this.sortLightsByPriority(), RR.parent || RR._addToSceneRootNodes();
          for (const JR of this.meshes) - 1 === JR.lightSources.indexOf(RR) && (JR.lightSources.push(RR), JR._resyncLightSources());
          tR.e.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(RR)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(FR.c.CompareLightsPriority)
      }
      addCamera(RR) {
        this._blockEntityCollection || (this.cameras.push(RR), tR.e.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(RR)
        })), RR.parent || RR._addToSceneRootNodes())
      }
      addSkeleton(RR) {
        this._blockEntityCollection || (this.skeletons.push(RR), tR.e.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(RR)
        })))
      }
      addParticleSystem(RR) {
        this._blockEntityCollection || (this.pM.push(RR), tR.e.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(RR)
        })))
      }
      addAnimation(RR) {
        this._blockEntityCollection || this.animations.push(RR)
      }
      addAnimationGroup(RR) {
        this._blockEntityCollection || (this.animationGroups.push(RR), tR.e.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(RR)
        })))
      }
      addMultiMaterial(RR) {
        this._blockEntityCollection || (this.multiMaterials.push(RR), tR.e.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(RR)
        })))
      }
      addMaterial(RR) {
        this._blockEntityCollection || RR.jH() === this && -1 !== RR._indexInSceneMaterialArray || (RR._indexInSceneMaterialArray = this.materials.length, this.materials.push(RR), tR.e.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(RR)
        })))
      }
      addMorphTargetManager(RR) {
        this._blockEntityCollection || this.morphTargetManagers.push(RR)
      }
      addGeometry(RR) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[RR.uniqueId] = this.geometries.length), this.geometries.push(RR))
      }
      addActionManager(RR) {
        this.actionManagers.push(RR)
      }
      addTexture(RR) {
        this._blockEntityCollection || (this.textures.push(RR), this.onNewTextureAddedObservable.notifyObservers(RR))
      }
      addFrameGraph(RR) {
        this.frameGraphs.push(RR), tR.e.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(RR)
        }))
      }
      addObjectRenderer(RR) {
        this.objectRenderers.push(RR), tR.e.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(RR)
        }))
      }
      addPostProcess(RR) {
        this._blockEntityCollection || (this.postProcesses.push(RR), tR.e.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(RR)
        })))
      }
      addEffectLayer(RR) {
        this._blockEntityCollection || (this.effectLayers.push(RR), tR.e.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(RR)
        })))
      }
      switchActiveCamera(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = RR, JR && RR.attachControl())
      }
      setActiveCameraById(RR) {
        const JR = this.getCameraById(RR);
        return JR ? (this.activeCamera = JR, JR) : null
      }
      setActiveCameraByName(RR) {
        const JR = this.getCameraByName(RR);
        return JR ? (this.activeCamera = JR, JR) : null
      }
      getAnimationGroupByName(RR) {
        for (let JR = 0; JR < this.animationGroups.length; JR++)
          if (this.animationGroups[JR].name === RR) return this.animationGroups[JR];
        return null
      }
      _getMaterial(RR, JR) {
        for (let GR = 0; GR < this.materials.length; GR++) {
          const RR = this.materials[GR];
          if (JR(RR)) return RR
        }
        if (RR)
          for (let GR = 0; GR < this.multiMaterials.length; GR++) {
            const RR = this.multiMaterials[GR];
            if (JR(RR)) return RR
          }
        return null
      }
      getMaterialByUniqueID(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(RR, JR)
      }
      getMaterialByUniqueId(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(JR, (JR => JR.uniqueId === RR))
      }
      getMaterialById(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(JR, (JR => JR.id === RR))
      }
      getMaterialByName(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(JR, (JR => JR.name === RR))
      }
      getLastMaterialById(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let GR = this.materials.length - 1; GR >= 0; GR--)
          if (this.materials[GR].id === RR) return this.materials[GR];
        if (JR)
          for (let GR = this.multiMaterials.length - 1; GR >= 0; GR--)
            if (this.multiMaterials[GR].id === RR) return this.multiMaterials[GR];
        return null
      }
      getTextureByUniqueId(RR) {
        for (let JR = 0; JR < this.textures.length; JR++)
          if (this.textures[JR].uniqueId === RR) return this.textures[JR];
        return null
      }
      getTextureByName(RR) {
        for (let JR = 0; JR < this.textures.length; JR++)
          if (this.textures[JR].name === RR) return this.textures[JR];
        return null
      }
      getCameraById(RR) {
        for (let JR = 0; JR < this.cameras.length; JR++)
          if (this.cameras[JR].id === RR) return this.cameras[JR];
        return null
      }
      getCameraByUniqueId(RR) {
        for (let JR = 0; JR < this.cameras.length; JR++)
          if (this.cameras[JR].uniqueId === RR) return this.cameras[JR];
        return null
      }
      getCameraByName(RR) {
        for (let JR = 0; JR < this.cameras.length; JR++)
          if (this.cameras[JR].name === RR) return this.cameras[JR];
        return null
      }
      getBoneById(RR) {
        for (let JR = 0; JR < this.skeletons.length; JR++) {
          const GR = this.skeletons[JR];
          for (let JR = 0; JR < GR.bones.length; JR++)
            if (GR.bones[JR].id === RR) return GR.bones[JR]
        }
        return null
      }
      getBoneByName(RR) {
        for (let JR = 0; JR < this.skeletons.length; JR++) {
          const GR = this.skeletons[JR];
          for (let JR = 0; JR < GR.bones.length; JR++)
            if (GR.bones[JR].name === RR) return GR.bones[JR]
        }
        return null
      }
      getLightByName(RR) {
        for (let JR = 0; JR < this.lights.length; JR++)
          if (this.lights[JR].name === RR) return this.lights[JR];
        return null
      }
      getLightById(RR) {
        for (let JR = 0; JR < this.lights.length; JR++)
          if (this.lights[JR].id === RR) return this.lights[JR];
        return null
      }
      getLightByUniqueId(RR) {
        for (let JR = 0; JR < this.lights.length; JR++)
          if (this.lights[JR].uniqueId === RR) return this.lights[JR];
        return null
      }
      getParticleSystemById(RR) {
        for (let JR = 0; JR < this.pM.length; JR++)
          if (this.pM[JR].id === RR) return this.pM[JR];
        return null
      }
      getGeometryById(RR) {
        for (let JR = 0; JR < this.geometries.length; JR++)
          if (this.geometries[JR].id === RR) return this.geometries[JR];
        return null
      }
      _getGeometryByUniqueId(RR) {
        if (this._geometriesByUniqueId) {
          const JR = this._geometriesByUniqueId[RR];
          if (void 0 !== JR) return this.geometries[JR]
        } else
          for (let JR = 0; JR < this.geometries.length; JR++)
            if (this.geometries[JR].uniqueId === RR) return this.geometries[JR];
        return null
      }
      getFrameGraphByName(RR) {
        for (let JR = 0; JR < this.frameGraphs.length; JR++)
          if (this.frameGraphs[JR].name === RR) return this.frameGraphs[JR];
        return null
      }
      pushGeometry(RR, JR) {
        return !(!JR && this._getGeometryByUniqueId(RR.uniqueId)) && (this.addGeometry(RR), tR.e.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(RR)
        })), !0)
      }
      removeGeometry(RR) {
        let JR;
        if (this._geometriesByUniqueId) {
          if (JR = this._geometriesByUniqueId[RR.uniqueId], void 0 === JR) return !1
        } else if (JR = this.geometries.indexOf(RR), JR < 0) return !1;
        if (JR !== this.geometries.length - 1) {
          const RR = this.geometries[this.geometries.length - 1];
          RR && (this.geometries[JR] = RR, this._geometriesByUniqueId && (this._geometriesByUniqueId[RR.uniqueId] = JR))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[RR.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(RR), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(RR) {
        for (let JR = 0; JR < this.meshes.length; JR++)
          if (this.meshes[JR].id === RR) return this.meshes[JR];
        return null
      }
      getMeshesById(RR) {
        return this.meshes.filter((function(JR) {
          return JR.id === RR
        }))
      }
      getTransformNodeById(RR) {
        for (let JR = 0; JR < this.transformNodes.length; JR++)
          if (this.transformNodes[JR].id === RR) return this.transformNodes[JR];
        return null
      }
      getTransformNodeByUniqueId(RR) {
        for (let JR = 0; JR < this.transformNodes.length; JR++)
          if (this.transformNodes[JR].uniqueId === RR) return this.transformNodes[JR];
        return null
      }
      getTransformNodesById(RR) {
        return this.transformNodes.filter((function(JR) {
          return JR.id === RR
        }))
      }
      getMeshByUniqueId(RR) {
        for (let JR = 0; JR < this.meshes.length; JR++)
          if (this.meshes[JR].uniqueId === RR) return this.meshes[JR];
        return null
      }
      getLastMeshById(RR) {
        for (let JR = this.meshes.length - 1; JR >= 0; JR--)
          if (this.meshes[JR].id === RR) return this.meshes[JR];
        return null
      }
      getLastTransformNodeById(RR) {
        for (let JR = this.transformNodes.length - 1; JR >= 0; JR--)
          if (this.transformNodes[JR].id === RR) return this.transformNodes[JR];
        return null
      }
      getLastEntryById(RR) {
        let JR;
        for (JR = this.meshes.length - 1; JR >= 0; JR--)
          if (this.meshes[JR].id === RR) return this.meshes[JR];
        for (JR = this.transformNodes.length - 1; JR >= 0; JR--)
          if (this.transformNodes[JR].id === RR) return this.transformNodes[JR];
        for (JR = this.cameras.length - 1; JR >= 0; JR--)
          if (this.cameras[JR].id === RR) return this.cameras[JR];
        for (JR = this.lights.length - 1; JR >= 0; JR--)
          if (this.lights[JR].id === RR) return this.lights[JR];
        for (JR = this.skeletons.length - 1; JR >= 0; JR--) {
          const GR = this.skeletons[JR];
          for (let JR = GR.bones.length - 1; JR >= 0; JR--)
            if (GR.bones[JR].id === RR) return GR.bones[JR]
        }
        return null
      }
      getNodeById(RR) {
        const JR = this.getMeshById(RR);
        if (JR) return JR;
        const GR = this.getTransformNodeById(RR);
        if (GR) return GR;
        const yR = this.getLightById(RR);
        if (yR) return yR;
        const tR = this.getCameraById(RR);
        if (tR) return tR;
        const uR = this.getBoneById(RR);
        return uR || null
      }
      getNodeByName(RR) {
        const JR = this.getMeshByName(RR);
        if (JR) return JR;
        const GR = this.getTransformNodeByName(RR);
        if (GR) return GR;
        const yR = this.getLightByName(RR);
        if (yR) return yR;
        const tR = this.getCameraByName(RR);
        if (tR) return tR;
        const uR = this.getBoneByName(RR);
        return uR || null
      }
      getMeshByName(RR) {
        for (let JR = 0; JR < this.meshes.length; JR++)
          if (this.meshes[JR].name === RR) return this.meshes[JR];
        return null
      }
      getTransformNodeByName(RR) {
        for (let JR = 0; JR < this.transformNodes.length; JR++)
          if (this.transformNodes[JR].name === RR) return this.transformNodes[JR];
        return null
      }
      getLastSkeletonById(RR) {
        for (let JR = this.skeletons.length - 1; JR >= 0; JR--)
          if (this.skeletons[JR].id === RR) return this.skeletons[JR];
        return null
      }
      getSkeletonByUniqueId(RR) {
        for (let JR = 0; JR < this.skeletons.length; JR++)
          if (this.skeletons[JR].uniqueId === RR) return this.skeletons[JR];
        return null
      }
      getSkeletonById(RR) {
        for (let JR = 0; JR < this.skeletons.length; JR++)
          if (this.skeletons[JR].id === RR) return this.skeletons[JR];
        return null
      }
      getSkeletonByName(RR) {
        for (let JR = 0; JR < this.skeletons.length; JR++)
          if (this.skeletons[JR].name === RR) return this.skeletons[JR];
        return null
      }
      getMorphTargetManagerById(RR) {
        for (let JR = 0; JR < this.morphTargetManagers.length; JR++)
          if (this.morphTargetManagers[JR].uniqueId === RR) return this.morphTargetManagers[JR];
        return null
      }
      getMorphTargetById(RR) {
        for (let JR = 0; JR < this.morphTargetManagers.length; ++JR) {
          const GR = this.morphTargetManagers[JR];
          for (let JR = 0; JR < GR.numTargets; ++JR) {
            const yR = GR.getTarget(JR);
            if (yR.id === RR) return yR
          }
        }
        return null
      }
      getMorphTargetByName(RR) {
        for (let JR = 0; JR < this.morphTargetManagers.length; ++JR) {
          const GR = this.morphTargetManagers[JR];
          for (let JR = 0; JR < GR.numTargets; ++JR) {
            const yR = GR.getTarget(JR);
            if (yR.name === RR) return yR
          }
        }
        return null
      }
      getPostProcessByName(RR) {
        for (let JR = 0; JR < this.postProcesses.length; ++JR) {
          const GR = this.postProcesses[JR];
          if (GR.name === RR) return GR
        }
        return null
      }
      isActiveMesh(RR) {
        return -1 !== this._activeMeshes.indexOf(RR)
      }
      get uid() {
        return this._uid || (this._uid = yR.h.RandomId()), this._uid
      }
      addExternalData(RR, JR) {
        return this._externalData || (this._externalData = new iR), this._externalData.add(RR, JR)
      }
      getExternalData(RR) {
        return this._externalData ? this._externalData.get(RR) : null
      }
      getOrAddExternalDataWithFactory(RR, JR) {
        return this._externalData || (this._externalData = new iR), this._externalData.getOrAddWithFactory(RR, JR)
      }
      removeExternalData(RR) {
        return this._externalData.remove(RR)
      }
      _evaluateSubMesh(RR, JR, GR, yR) {
        if (yR || RR.isInFrustum(this._frustumPlanes)) {
          for (let yR = 0, tR = this._evaluateSubMeshStage; yR < tR.length; yR++) {
            tR[yR].action(JR, RR)
          }
          const GR = RR.he();
          null !== GR && void 0 !== GR && (GR.hasRenderTargetTextures && null != GR.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(GR) && (this._processedMaterials.push(GR), this._materialsRenderTargets.concatWithNoDuplicate(GR.getRenderTargetTextures())), this._renderingManager.dispatch(RR, JR, GR))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(RR) {
        this._preventFreeActiveMeshesAndRenderingGroups !== RR && (RR && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = RR)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let RR = 0; RR < this.activeCameras.length; RR++) {
            const JR = this.activeCameras[RR];
            JR && JR._activeMeshes && JR._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let RR = 0; RR < this.textures.length; RR++) {
            const JR = this.textures[RR];
            JR && JR.renderList && JR.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          JR = arguments.length > 1 ? arguments[1] : void 0,
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          uR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const ZR = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const RR of ZR) RR.objectRenderer._freezeActiveMeshes(yR);
          return this._freezeActiveMeshesCancel = (0, tR.g)((() => {
            let RR = !0,
              JR = !0;
            for (const GR of ZR) RR && (RR = GR.objectRenderer._isFrozen), JR && (JR = null !== GR.objectRenderer._freezeActiveMeshesCancel);
            if (RR) return !0;
            if (!JR) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = uR, this._skipEvaluateActiveMeshesCompletely = RR, JR?.()
          }), ((RR, JR) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), JR) {
              const JR = "Scene: Timeout while waiting for meshes to be frozen.";
              GR ? GR(JR) : (RG.c.Error(JR), RR && RG.c.Error(RR))
            } else {
              const JR = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              GR ? GR(JR) : (RG.c.Error(JR), RR && (RG.c.Error(RR), RR.stack && RG.c.Error(RR.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = uR, this._skipEvaluateActiveMeshesCompletely = RR, yR)
              for (let RR = 0; RR < this._activeMeshes.length; RR++) this._activeMeshes.data[RR]._freeze();
            JR && JR()
          } else GR && GR("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let RR = 0; RR < this.meshes.length; RR++) {
          const JR = this.meshes[RR];
          JR._internalAbstractMeshDataInfo && (JR._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const RR = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const JR of RR) JR.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let RR = 0; RR < this._activeMeshes.length; RR++) this._activeMeshes.data[RR]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(RR) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => RR.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const RR = this._activeMeshes.length;
            for (let JR = 0; JR < RR; JR++) {
              this._activeMeshes.data[JR].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const RR = this._activeParticleSystems.length;
            for (let JR = 0; JR < RR; JR++) this._activeParticleSystems.data[JR].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let tR = 0, uR = this._beforeEvaluateActiveMeshStage; tR < uR.length; tR++) {
          uR[tR].action()
        }
        const RR = this.getActiveMeshCandidates(),
          JR = RR.length,
          GR = dR.d.Enabled,
          yR = this.customLODSelector;
        for (let tR = 0; tR < JR; tR++) {
          const JR = RR.data[tR],
            uR = !yR && !JR.sH && !JR._internalMeshDataInfo?._LODLevels.length;
          let ZR, qR;
          if ((uR || (ZR = JR._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), ZR ? ZR[1] = -1 : (ZR = [JR, -1], JR._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, ZR))), !JR.isBlocked) && (GR && this._totalVertices.addCount(JR.getTotalVertices(), !1), JR.isReady() && JR.isEnabled() && !JR.MK.hasAZeroComponent)) {
            if (JR.computeWorldMatrix(), JR.actionManager && JR.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(JR), uR) qR = JR;
            else if (qR = yR ? yR(JR, this.activeCamera) : JR.getLOD(this.activeCamera), ZR[0] = qR, ZR[1] = this._frameId, void 0 === qR || null === qR) continue;
            if (qR !== JR && 0 !== qR.billboardMode && qR.computeWorldMatrix(), JR._preActivate(), JR.isVisible && JR.visibility > 0 && 0 !== (JR.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || JR.Qe || JR.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(JR), this.activeCamera._activeMeshes.push(JR), qR !== JR && qR._activate(this._renderId, !1);
              for (let RR = 0, GR = this._preActiveMeshStage; RR < GR.length; RR++) {
                GR[RR].action(JR)
              }
              JR._activate(this._renderId, !1) && (JR.sH ? JR._internalAbstractMeshDataInfo._actAsRegularMesh && (qR = JR) : qR._internalAbstractMeshDataInfo._onlyForInstances = !1, qR._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(JR, qR)), JR._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let RR = 0; RR < this.pM.length; RR++) {
            const JR = this.pM[RR];
            if (!JR.isStarted() || !JR.emitter) continue;
            const GR = JR.emitter;
            GR.position && !GR.isEnabled() || (this._activeParticleSystems.push(JR), JR.animate(), this._renderingManager.dispatchParticles(JR))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(RR) {
        this._skeletonsEnabled && RR.skeleton && (this._activeSkeletons.pushNoDuplicate(RR.skeleton) && (RR.skeleton.prepare(), this._activeBones.addCount(RR.skeleton.bones.length, !1)), RR.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(RR) && this.frameGraph && RR.applySkeleton(RR.skeleton))
      }
      _activeMesh(RR, JR) {
        this._prepareSkeleton(JR);
        let GR = RR.PuR || RR.sH || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || JR.Qe;
        if (JR && JR.XM && JR.XM.length > 0) {
          const yR = this.getActiveSubMeshCandidates(JR),
            tR = yR.length;
          GR = GR || 1 === tR;
          for (let uR = 0; uR < tR; uR++) {
            const tR = yR.data[uR];
            this._evaluateSubMesh(tR, JR, RR, GR)
          }
        }
      }
      updateTransformMatrix(RR) {
        const JR = this.activeCamera;
        if (JR)
          if (JR._renderingMultiview) {
            const GR = JR._rigCameras[0],
              yR = JR._rigCameras[1];
            this.setTransformMatrix(GR.getViewMatrix(), GR.getProjectionMatrix(RR), yR.getViewMatrix(), yR.getProjectionMatrix(RR))
          } else this.setTransformMatrix(JR.getViewMatrix(), JR.getProjectionMatrix(RR))
      }
      _bindFrameBuffer(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (RR && RR._multiviewTexture ? RR._multiviewTexture._bindFrameBuffer() : RR && RR.outputRenderTarget ? RR.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), JR && this._clearFrameBuffer(RR)
      }
      _clearFrameBuffer(RR) {
        if (RR && RR._multiviewTexture);
        else if (RR && RR.outputRenderTarget && !RR._renderingMultiview) {
          const JR = RR.outputRenderTarget;
          JR.onClearObservable.hasObservers() ? JR.onClearObservable.notifyObservers(this._engine) : JR.skipInitialClear || RR.isRightCamera || (this.autoClear && this._engine.clear(JR.clearColor || this._clearColor, !JR._cleared, !0, !0), JR._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(RR, JR) {
        let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (RR && RR._skipRendering) return;
        const tR = this._engine;
        if (this._activeCamera = RR, !this.activeCamera) throw new Error("Active camera not set");
        if (tR.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && GR) {
          let JR = !0;
          RR._renderingMultiview && RR.outputRenderTarget && (JR = RR.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, RR.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), RR._renderingMultiview && RR.outputRenderTarget && (RR.outputRenderTarget.skipInitialClear = JR)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = RR.outputRenderTarget?.renderPassId ?? RR.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let yR = 0; yR < this._softwareSkinnedMeshes.length; yR++) {
          const RR = this._softwareSkinnedMeshes.data[yR];
          RR.applySkeleton(RR.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), RR.customRenderTargets && RR.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(RR.customRenderTargets), JR && JR.customRenderTargets && JR.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(JR.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let yR = 0, qR = this._gatherActiveCameraRenderTargetsStage; yR < qR.length; yR++) {
          qR[yR].action(this._renderTargets)
        }
        let uR = !1;
        if (this.renderTargetsEnabled) {
          let RR;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            yR.h.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const JR = this.getBoundingBoxRenderer?.();
            for (let GR = 0; GR < this._renderTargets.length; GR++) {
              const yR = this._renderTargets.data[GR];
              if (yR._shouldRender()) {
                this._renderId++;
                const GR = yR.activeCamera && yR.activeCamera !== this.activeCamera;
                JR && !RR && (RR = JR.renderList.length > 0 ? JR.renderList.data.slice() : [], RR.length = JR.renderList.length), yR.render(GR, this.dumpNextRenderTargets), uR = !0
              }
            }
            JR && RR && (JR.renderList.data = RR, JR.renderList.length = RR.length), yR.h.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const JR = this.getBoundingBoxRenderer?.();
            JR && !RR && (RR = JR.renderList.length > 0 ? JR.renderList.data.slice() : [], RR.length = JR.renderList.length);
            for (let RR = 0, GR = this._cameraDrawRenderTargetStage; RR < GR.length; RR++) {
              uR = GR[RR].action(this.activeCamera) || uR
            }
            JR && RR && (JR.renderList.data = RR, JR.renderList.length = RR.length)
          }
          this._intermediateRendering = !1
        }
        uR && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || RR._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let yR = 0, qR = this._beforeCameraDrawStage; yR < qR.length; yR++) {
          qR[yR].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const ZR = tR.snapshotRendering && 1 === tR.snapshotRenderingMode;
        ZR && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !ZR), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let yR = 0, qR = this._afterCameraDrawStage; yR < qR.length; yR++) {
          qR[yR].action(this.activeCamera)
        }
        if (this.postProcessManager && !RR._multiviewTexture) {
          const JR = RR.outputRenderTarget ? RR.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(RR.isIntermediate, JR)
        }
        for (let yR = 0, qR = this._afterCameraPostProcessStage; yR < qR.length; yR++) {
          qR[yR].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === RR.cameraRigMode || RR._renderingMultiview) return RR._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(RR, void 0, JR), void this.onAfterRenderCameraObservable.notifyObservers(RR);
        if (RR._useMultiviewToSingleView) this._renderMultiviewToSingleView(RR);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(RR);
          for (let JR = 0; JR < RR._rigCameras.length; JR++) this._renderForCamera(RR._rigCameras[JR], RR)
        }
        this._activeCamera = RR, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(RR)
      }
      _checkIntersections() {
        for (let RR = 0; RR < this._meshesForIntersections.length; RR++) {
          const JR = this._meshesForIntersections.data[RR];
          if (JR.actionManager)
            for (let RR = 0; JR.actionManager && RR < JR.actionManager.actions.length; RR++) {
              const GR = JR.actionManager.actions[RR];
              if (12 === GR.trigger || 13 === GR.trigger) {
                const RR = GR.getTriggerParameter(),
                  yR = RR.mesh ? RR.mesh : RR,
                  tR = yR.vuR(JR, RR.usePreciseIntersection),
                  uR = JR._intersectionsInProgress.indexOf(yR);
                tR && -1 === uR ? 12 === GR.trigger ? (GR._executeCurrent(eR.CreateNew(JR, void 0, yR)), JR._intersectionsInProgress.push(yR)) : 13 === GR.trigger && JR._intersectionsInProgress.push(yR) : !tR && uR > -1 && (13 === GR.trigger && GR._executeCurrent(eR.CreateNew(JR, void 0, yR)), JR.actionManager.hasSpecificTrigger(13, (RR => {
                  const JR = RR.mesh ? RR.mesh : RR;
                  return yR === JR
                })) && 13 !== GR.trigger || JR._intersectionsInProgress.splice(uR, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(RR) {}
      _animate(RR) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let RR = Math.max(uG.MinDeltaTime, Math.min(this._engine.getDeltaTime(), uG.MaxDeltaTime)) + this._timeAccumulator;
          const JR = this._engine.getTimeStep(),
            GR = 1e3 / JR / 1e3;
          let yR = 0;
          const tR = this._engine.getLockstepMaxSteps();
          let uR = Math.floor(RR / JR);
          for (uR = Math.min(uR, tR); RR > 0 && yR < uR;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = JR * GR, this._animate(JR), this.onAfterAnimationsObservable.notifyObservers(this), this.AY && this._advancePhysicsEngineStep(JR), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, yR++, RR -= JR;
          this._timeAccumulator = RR < 0 ? 0 : RR
        } else {
          const RR = this.useConstantAnimationDeltaTime ? 16 : Math.max(uG.MinDeltaTime, Math.min(this._engine.getDeltaTime(), uG.MaxDeltaTime));
          this._animationRatio = .06 * RR, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.AY && this._advancePhysicsEngineStep(RR)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(RR) {
        if (RR?.outputRenderTarget && !RR?.isRigCamera && (RR.outputRenderTarget._cleared = !1), RR?.rigCameras?.length)
          for (let JR = 0; JR < RR.rigCameras.length; ++JR) {
            const GR = RR.rigCameras[JR].outputRenderTarget;
            GR && (GR._cleared = !1)
          }
      }
      resetDrawCache(RR) {
        if (this.meshes)
          for (const JR of this.meshes) JR.resetDrawCache(RR)
      }
      _renderWithFrameGraph() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          JR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, RR)
          for (const GR of this.cameras)
            if (GR.update(), 0 !== GR.cameraRigMode)
              for (let RR = 0; RR < GR._rigCameras.length; RR++) GR._rigCameras[RR].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(JR)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(RR) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const JR = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), yR.h.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let RR = 0; RR < this._renderTargets.length; RR++) {
            const GR = this._renderTargets.data[RR],
              yR = GR.activeCamera || JR;
            this._renderRenderTarget(GR, yR, !0, this.dumpNextRenderTargets)
          }
          yR.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let GR = 0, yR = this._beforeClearStage; GR < yR.length; GR++) {
          yR[GR].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const JR = this.getActiveMeshCandidates(),
            GR = JR.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let RR = 0; RR < GR; RR++) {
                const GR = JR.data[RR];
                GR._internalAbstractMeshDataInfo._wasActiveLastFrame && GR.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const RR = this._activeParticleSystems.length;
              for (let JR = 0; JR < RR; JR++) this._activeParticleSystems.data[JR].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let yR = 0; yR < GR; yR++) {
              const GR = JR.data[yR];
              GR._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, GR.isBlocked || (this._totalVertices.addCount(GR.getTotalVertices(), !1), GR.isReady() && GR.isEnabled() && !GR.MK.hasAZeroComponent && (GR.computeWorldMatrix(RR), GR.actionManager && GR.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(GR)))
            }
            if (this.particlesEnabled)
              for (let RR = 0; RR < this.pM.length; RR++) {
                const JR = this.pM[RR];
                if (!JR.isStarted() || !JR.emitter) continue;
                const GR = JR.emitter;
                GR.position && !GR.isEnabled() || (this._activeParticleSystems.push(JR), JR.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, RR._shouldRender()) {
          if (this._renderId++, this.activeCamera = JR, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), RR.render(GR, yR)
        }
        this._intermediateRendering = !1
      }
      render() {
        let RR = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.oB) return;
        const GR = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(RR, JR)
        } finally {
          this._renderingMeshEvaluationDepth = GR
        }
      }
      _renderFrame(RR, JR) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), LR.d.jH = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const GR of this.activeCameras) this._checkCameraRenderTarget(GR);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), JR || this.animate();
        for (let GR = 0, yR = this._beforeCameraUpdateStage; GR < yR.length; GR++) {
          yR[GR].action()
        }
        if (RR)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let GR = 0; GR < this.activeCameras.length; GR++) {
              const RR = this.activeCameras[GR];
              if (RR.update(), 0 !== RR.cameraRigMode)
                for (let JR = 0; JR < RR._rigCameras.length; JR++) RR._rigCameras[JR].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let GR = 0; GR < this.activeCamera._rigCameras.length; GR++) this.activeCamera._rigCameras[GR].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(RR, JR);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const RR = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            yR.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let JR = 0; JR < this.customRenderTargets.length; JR++) {
              const GR = this.customRenderTargets[JR],
                yR = GR.activeCamera || this.activeCamera;
              this._renderRenderTarget(GR, yR, RR !== yR, this.dumpNextRenderTargets)
            }
            yR.h.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = RR?.renderPassId ?? 0, this.activeCamera = RR, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let JR = 0, GR = this._beforeClearStage; JR < GR.length; JR++) {
            GR[JR].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let JR = 0, GR = this._gatherRenderTargetsStage; JR < GR.length; JR++) {
            GR[JR].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let JR = 0; JR < this.activeCameras.length; JR++) this._processSubCameras(this.activeCameras[JR], JR > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let GR = 0, yR = this._afterRenderStage; GR < yR.length; GR++) {
          yR[GR].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let RR = 0; RR < this._toBeDisposed.length; RR++) {
            const JR = this._toBeDisposed[RR];
            JR && JR.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let RR = 0; RR < this.materials.length; RR++) this.materials[RR].freeze()
      }
      unfreezeMaterials() {
        for (let RR = 0; RR < this.materials.length; RR++) this.materials[RR].unfreeze()
      }
      dispose() {
        if (this.oB) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, CR.c)(this.stopAllAnimations)) {
          for (const RR of this._activeAnimatables) RR.onAnimationEndObservable.clear(), RR.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const RR = this._activeRequests.slice();
        for (const uR of RR) uR.abort();
        this._activeRequests.length = 0;
        try {
          this.YH.notifyObservers(this)
        } catch (tR) {
          RG.c.Error("An error occurred while calling onDisposeObservable!", tR)
        }
        this.detachControl();
        const JR = this._engine.getInputElement?.();
        if (JR)
          for (let uR = 0; uR < this.cameras.length; uR++) this.cameras[uR].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (RR => RR.dispose(!0))), this._disposeList(this.transformNodes, (RR => RR.dispose(!0)));
        const GR = this.cameras;
        this._disposeList(GR), this._disposeList(this.pM), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let yR = this._engine.scenes.indexOf(this);
        if (yR > -1 && this._engine.scenes.splice(yR, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, LR.i)(), AR.c._LastCreatedScene === this) {
          AR.c._LastCreatedScene = null;
          let RR = AR.c.Instances.length - 1;
          for (; RR >= 0;) {
            const JR = AR.c.Instances[RR];
            if (JR.scenes.length > 0) {
              AR.c._LastCreatedScene = JR.scenes[this._engine.scenes.length - 1];
              break
            }
            RR--
          }
        }
        yR = this._engine._virtualScenes.indexOf(this), yR > -1 && this._engine._virtualScenes.splice(yR, 1), this._engine.wipeCaches(!0), this.YH.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(RR, JR) {
        const GR = RR.slice(0);
        JR = JR ?? (RR => RR.dispose());
        for (const yR of GR) JR(yR);
        RR.length = 0
      }
      get oB() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let RR = 0; RR < this.meshes.length; RR++) {
          const JR = this.meshes[RR].geometry;
          JR && JR.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const RR of this.textures) {
          RR._buffer && (RR._buffer = null)
        }
      }
      getWorldExtends(RR) {
        const JR = new VR.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          GR = new VR.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        RR = RR || (() => !0);
        const yR = this.meshes.filter(RR);
        for (const tR of yR) {
          if (tR.computeWorldMatrix(!0), !tR.XM || 0 === tR.XM.length || tR.infiniteDistance) continue;
          const RR = tR.Tm(),
            yR = RR.boundingBox.minimumWorld,
            uR = RR.boundingBox.maximumWorld;
          VR.r.CheckExtends(yR, JR, GR), VR.r.CheckExtends(uR, JR, GR)
        }
        return JR.x === Number.MAX_VALUE ? {
          min: VR.r.Zero(),
          max: VR.r.Zero()
        } : {
          min: JR,
          max: GR
        }
      }
      createPickingRay(RR, JR, GR, yR) {
        throw (0, CR.j)("Ray")
      }
      createPickingRayToRef(RR, JR, GR, yR, tR) {
        throw (0, CR.j)("Ray")
      }
      createPickingRayInCameraSpace(RR, JR, GR) {
        throw (0, CR.j)("Ray")
      }
      createPickingRayInCameraSpaceToRef(RR, JR, GR, yR) {
        throw (0, CR.j)("Ray")
      }
      Ur(RR, JR, GR, yR, tR, uR) {
        const ZR = (0, CR.j)("Ray", !0);
        return ZR && RG.c.Warn(ZR), new rR.e
      }
      pickWithBoundingInfo(RR, JR, GR, yR, tR) {
        const uR = (0, CR.j)("Ray", !0);
        return uR && RG.c.Warn(uR), new rR.e
      }
      pickWithRay(RR, JR, GR, yR) {
        throw (0, CR.j)("Ray")
      }
      multiPick(RR, JR, GR, yR, tR) {
        throw (0, CR.j)("Ray")
      }
      multiPickWithRay(RR, JR, GR) {
        throw (0, CR.j)("Ray")
      }
      setPointerOverMesh(RR, JR, GR) {
        this._inputManager.setPointerOverMesh(RR, JR, GR)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const RR of this.geometries) RR._rebuild();
        for (const RR of this.meshes) RR._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const RR of this._components) RR.rebuild();
        for (const RR of this.pM) RR.rebuild();
        if (this.spriteManagers)
          for (const RR of this.spriteManagers) RR.rebuild()
      }
      _rebuildTextures() {
        for (const RR of this.textures) RR._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(RR, JR, GR) {
        if (void 0 === JR) return RR;
        const yR = [];
        for (const tR in RR) {
          const uR = RR[tR];
          fR.d && fR.d.MatchesQuery(uR, JR) && (!GR || GR(uR)) && yR.push(uR)
        }
        return yR
      }
      getMeshesByTags(RR, JR) {
        return this._getByTags(this.meshes, RR, JR)
      }
      getCamerasByTags(RR, JR) {
        return this._getByTags(this.cameras, RR, JR)
      }
      getLightsByTags(RR, JR) {
        return this._getByTags(this.lights, RR, JR)
      }
      getMaterialByTags(RR, JR) {
        return this._getByTags(this.materials, RR, JR).concat(this._getByTags(this.multiMaterials, RR, JR))
      }
      getTransformNodesByTags(RR, JR) {
        return this._getByTags(this.transformNodes, RR, JR)
      }
      setRenderingOrder(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(RR, JR, GR, yR)
      }
      setRenderingAutoClearDepthStencil(RR, JR) {
        let GR = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(RR, JR, GR, yR)
      }
      getAutoClearDepthStencilSetup(RR) {
        return this._renderingManager.getAutoClearDepthStencilSetup(RR)
      }
      _forceBlockMaterialDirtyMechanism(RR) {
        this._blockMaterialDirtyMechanism = RR
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(RR) {
        this._blockMaterialDirtyMechanism !== RR && (this._blockMaterialDirtyMechanism = RR, RR || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(RR, JR) {
        if (!this._blockMaterialDirtyMechanism)
          for (const GR of this.materials) JR && !JR(GR) || GR.hGR(RR)
      }
      _loadFile(RR, JR, GR, yR, tR, uR, ZR) {
        const qR = (0, QR.m)(RR, JR, GR, yR ? this.offlineProvider : void 0, tR, uR, ZR);
        return this._activeRequests.push(qR), qR.onCompleteObservable.add((RR => {
          this._activeRequests.splice(this._activeRequests.indexOf(RR), 1)
        })), qR
      }
      async _loadFileAsync(RR, JR, GR, yR, tR) {
        return await new Promise(((uR, ZR) => {
          this._loadFile(RR, (RR => {
            uR(RR)
          }), JR, GR, yR, ((RR, JR) => {
            ZR(JR)
          }), tR)
        }))
      }
      async _loadDelayedFileAsync(RR, JR, GR) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const yR = `${RR}|${JR?"binary":"string"}`;
        let tR = this._delayedFileRequests.get(yR);
        if (!tR) {
          tR = JR ? this._loadFileAsync(RR, void 0, GR, !0) : this._loadFileAsync(RR, void 0, GR, !1);
          const uR = tR;
          (async () => {
            try {
              await uR
            } catch {}
            this._delayedFileRequests?.delete(yR)
          })(), this._delayedFileRequests.set(yR, tR)
        }
        return await tR
      }
      _requestFile(RR, JR, GR, yR, tR, uR, ZR) {
        const qR = (0, QR.y)(RR, JR, GR, yR ? this.offlineProvider : void 0, tR, uR, ZR);
        return this._activeRequests.push(qR), qR.onCompleteObservable.add((RR => {
          this._activeRequests.splice(this._activeRequests.indexOf(RR), 1)
        })), qR
      }
      async _requestFileAsync(RR, JR, GR, yR, tR) {
        return await new Promise(((uR, ZR) => {
          this._requestFile(RR, (RR => {
            uR(RR)
          }), JR, GR, yR, (RR => {
            ZR(RR)
          }), tR)
        }))
      }
      _readFile(RR, JR, GR, yR, tR) {
        const uR = (0, QR.t)(RR, JR, GR, yR, tR);
        return this._activeRequests.push(uR), uR.onCompleteObservable.add((RR => {
          this._activeRequests.splice(this._activeRequests.indexOf(RR), 1)
        })), uR
      }
      async _readFileAsync(RR, JR, GR) {
        return await new Promise(((yR, tR) => {
          this._readFile(RR, (RR => {
            yR(RR)
          }), JR, GR, (RR => {
            tR(RR)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, CR.j)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(RR) {
        return this.setActiveCameraById(RR)
      }
      getMaterialByID(RR) {
        return this.getMaterialById(RR)
      }
      getLastMaterialByID(RR) {
        return this.getLastMaterialById(RR)
      }
      getTextureByUniqueID(RR) {
        return this.getTextureByUniqueId(RR)
      }
      getCameraByID(RR) {
        return this.getCameraById(RR)
      }
      getCameraByUniqueID(RR) {
        return this.getCameraByUniqueId(RR)
      }
      getBoneByID(RR) {
        return this.getBoneById(RR)
      }
      getLightByID(RR) {
        return this.getLightById(RR)
      }
      getLightByUniqueID(RR) {
        return this.getLightByUniqueId(RR)
      }
      getParticleSystemByID(RR) {
        return this.getParticleSystemById(RR)
      }
      getGeometryByID(RR) {
        return this.getGeometryById(RR)
      }
      getMeshByID(RR) {
        return this.getMeshById(RR)
      }
      getMeshByUniqueID(RR) {
        return this.getMeshByUniqueId(RR)
      }
      getLastMeshByID(RR) {
        return this.getLastMeshById(RR)
      }
      getMeshesByID(RR) {
        return this.getMeshesById(RR)
      }
      getTransformNodeByID(RR) {
        return this.getTransformNodeById(RR)
      }
      getTransformNodeByUniqueID(RR) {
        return this.getTransformNodeByUniqueId(RR)
      }
      getTransformNodesByID(RR) {
        return this.getTransformNodesById(RR)
      }
      getNodeByID(RR) {
        return this.getNodeById(RR)
      }
      getLastEntryByID(RR) {
        return this.getLastEntryById(RR)
      }
      getLastSkeletonByID(RR) {
        return this.getLastSkeletonById(RR)
      }
    }
    uG.FOGMODE_NONE = 0, uG.FOGMODE_EXP = 1, uG.FOGMODE_EXP2 = 2, uG.FOGMODE_LINEAR = 3, uG.MinDeltaTime = 1, uG.MaxDeltaTime = 1e3, uG._OriginalDefaultMaterialFactory = uG.DefaultMaterialFactory;
    let ZG = !1;

    function qG() {
      ZG || (ZG = !0, (0, JG.f)("BABYLON.Scene", uG))
    }(hR = uG.prototype).sortActiveAnimatables ?? (hR.sortActiveAnimatables = (0, CR.f)("Scene", "sortActiveAnimatables")), (RJ = uG.prototype).beginWeightedAnimation ?? (RJ.beginWeightedAnimation = (0, CR.f)("Scene", "beginWeightedAnimation")), (JJ = uG.prototype).beginAnimation ?? (JJ.beginAnimation = (0, CR.f)("Scene", "beginAnimation")), (GJ = uG.prototype).beginHierarchyAnimation ?? (GJ.beginHierarchyAnimation = (0, CR.f)("Scene", "beginHierarchyAnimation")), (yJ = uG.prototype).beginDirectAnimation ?? (yJ.beginDirectAnimation = (0, CR.f)("Scene", "beginDirectAnimation")), (tJ = uG.prototype).beginDirectHierarchyAnimation ?? (tJ.beginDirectHierarchyAnimation = (0, CR.f)("Scene", "beginDirectHierarchyAnimation")), (uJ = uG.prototype).getAnimatableByTarget ?? (uJ.getAnimatableByTarget = (0, CR.f)("Scene", "getAnimatableByTarget")), (ZJ = uG.prototype).getAllAnimatablesByTarget ?? (ZJ.getAllAnimatablesByTarget = (0, CR.f)("Scene", "getAllAnimatablesByTarget")), (qJ = uG.prototype).stopAllAnimations ?? (qJ.stopAllAnimations = (0, CR.f)("Scene", "stopAllAnimations")), (iJ = uG.prototype).getSoundByName ?? (iJ.getSoundByName = (0, CR.f)("Scene", "getSoundByName")), (fJ = uG.prototype).createOrUpdateSelectionOctree ?? (fJ.createOrUpdateSelectionOctree = (0, CR.f)("Scene", "createOrUpdateSelectionOctree")), (VJ = uG.prototype).createDefaultLight ?? (VJ.createDefaultLight = (0, CR.f)("Scene", "createDefaultLight")), (KJ = uG.prototype).createDefaultCamera ?? (KJ.createDefaultCamera = (0, CR.f)("Scene", "createDefaultCamera")), (wJ = uG.prototype).createDefaultCameraOrLight ?? (wJ.createDefaultCameraOrLight = (0, CR.f)("Scene", "createDefaultCameraOrLight")), (rJ = uG.prototype).createDefaultSkybox ?? (rJ.createDefaultSkybox = (0, CR.f)("Scene", "createDefaultSkybox")), (eJ = uG.prototype).createDefaultEnvironment ?? (eJ.createDefaultEnvironment = (0, CR.f)("Scene", "createDefaultEnvironment")), (aJ = uG.prototype).createDefaultVRExperience ?? (aJ.createDefaultVRExperience = (0, CR.f)("Scene", "createDefaultVRExperience")), (LJ = uG.prototype).createDefaultXRExperienceAsync ?? (LJ.createDefaultXRExperienceAsync = (0, CR.f)("Scene", "createDefaultXRExperienceAsync")), (nJ = uG.prototype).getGlowLayerByName ?? (nJ.getGlowLayerByName = (0, CR.f)("Scene", "getGlowLayerByName")), (UJ = uG.prototype).getHighlightLayerByName ?? (UJ.getHighlightLayerByName = (0, CR.f)("Scene", "getHighlightLayerByName")), (WJ = uG.prototype).getSelectionOutlineLayerByName ?? (WJ.getSelectionOutlineLayerByName = (0, CR.f)("Scene", "getSelectionOutlineLayerByName")), (AJ = uG.prototype).removeLensFlareSystem ?? (AJ.removeLensFlareSystem = (0, CR.f)("Scene", "removeLensFlareSystem")), (CJ = uG.prototype).addLensFlareSystem ?? (CJ.addLensFlareSystem = (0, CR.f)("Scene", "addLensFlareSystem")), (XJ = uG.prototype).getLensFlareSystemByName ?? (XJ.getLensFlareSystemByName = (0, CR.f)("Scene", "getLensFlareSystemByName")), (MJ = uG.prototype).getLensFlareSystemByID ?? (MJ.getLensFlareSystemByID = (0, CR.f)("Scene", "getLensFlareSystemByID")), (BJ = uG.prototype).getLensFlareSystemById ?? (BJ.getLensFlareSystemById = (0, CR.f)("Scene", "getLensFlareSystemById")), (lJ = uG.prototype).getPhysicsEngine ?? (lJ.getPhysicsEngine = (0, CR.f)("Scene", "getPhysicsEngine")), (pJ = uG.prototype).enablePhysics ?? (pJ.enablePhysics = (0, CR.f)("Scene", "enablePhysics")), (gJ = uG.prototype).disablePhysicsEngine ?? (gJ.disablePhysicsEngine = (0, CR.f)("Scene", "disablePhysicsEngine")), (bJ = uG.prototype).isPhysicsEnabled ?? (bJ.isPhysicsEnabled = (0, CR.f)("Scene", "isPhysicsEnabled")), (vJ = uG.prototype).deleteCompoundImpostor ?? (vJ.deleteCompoundImpostor = (0, CR.f)("Scene", "deleteCompoundImpostor")), (OJ = uG.prototype).removeReflectionProbe ?? (OJ.removeReflectionProbe = (0, CR.f)("Scene", "removeReflectionProbe")), (xJ = uG.prototype).addReflectionProbe ?? (xJ.addReflectionProbe = (0, CR.f)("Scene", "addReflectionProbe")), (NJ = uG.prototype).getBoundingBoxRenderer ?? (NJ.getBoundingBoxRenderer = (0, CR.f)("Scene", "getBoundingBoxRenderer")), (DJ = uG.prototype).enableDepthRenderer ?? (DJ.enableDepthRenderer = (0, CR.f)("Scene", "enableDepthRenderer")), (HJ = uG.prototype).disableDepthRenderer ?? (HJ.disableDepthRenderer = (0, CR.f)("Scene", "disableDepthRenderer")), (oJ = uG.prototype).enableFluidRenderer ?? (oJ.enableFluidRenderer = (0, CR.f)("Scene", "enableFluidRenderer")), (cJ = uG.prototype).disableFluidRenderer ?? (cJ.disableFluidRenderer = (0, CR.f)("Scene", "disableFluidRenderer")), (PJ = uG.prototype).enableGeometryBufferRenderer ?? (PJ.enableGeometryBufferRenderer = (0, CR.f)("Scene", "enableGeometryBufferRenderer")), (IJ = uG.prototype).disableGeometryBufferRenderer ?? (IJ.disableGeometryBufferRenderer = (0, CR.f)("Scene", "disableGeometryBufferRenderer")), (mJ = uG.prototype).enableIblCdfGenerator ?? (mJ.enableIblCdfGenerator = (0, CR.f)("Scene", "enableIblCdfGenerator")), (zJ = uG.prototype).disableIblCdfGenerator ?? (zJ.disableIblCdfGenerator = (0, CR.f)("Scene", "disableIblCdfGenerator")), (SJ = uG.prototype).getOutlineRenderer ?? (SJ.getOutlineRenderer = (0, CR.f)("Scene", "getOutlineRenderer")), (jJ = uG.prototype).enablePrePassRenderer ?? (jJ.enablePrePassRenderer = (0, CR.f)("Scene", "enablePrePassRenderer")), (dJ = uG.prototype).disablePrePassRenderer ?? (dJ.disablePrePassRenderer = (0, CR.f)("Scene", "disablePrePassRenderer")), (EJ = uG.prototype).enableSubSurfaceForPrePass ?? (EJ.enableSubSurfaceForPrePass = (0, CR.f)("Scene", "enableSubSurfaceForPrePass")), (YJ = uG.prototype).disableSubSurfaceForPrePass ?? (YJ.disableSubSurfaceForPrePass = (0, CR.f)("Scene", "disableSubSurfaceForPrePass")), (kJ = uG.prototype).pickSprite ?? (kJ.pickSprite = (0, CR.f)("Scene", "pickSprite")), (QJ = uG.prototype).pickSpriteWithRay ?? (QJ.pickSpriteWithRay = (0, CR.f)("Scene", "pickSpriteWithRay")), (FJ = uG.prototype).multiPickSprite ?? (FJ.multiPickSprite = (0, CR.f)("Scene", "multiPickSprite")), (TJ = uG.prototype).multiPickSpriteWithRay ?? (TJ.multiPickSpriteWithRay = (0, CR.f)("Scene", "multiPickSpriteWithRay")), (sJ = uG.prototype).setPointerOverSprite ?? (sJ.setPointerOverSprite = (0, CR.f)("Scene", "setPointerOverSprite")), (hJ = uG.prototype).getPointerOverSprite ?? (hJ.getPointerOverSprite = (0, CR.f)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(uG.prototype, "mainSoundTrack") || Object.defineProperty(uG.prototype, "mainSoundTrack", (0, CR.e)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(uG.prototype, "soundTracks") || Object.defineProperty(uG.prototype, "soundTracks", (0, CR.e)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(uG.prototype, "audioEnabled") || Object.defineProperty(uG.prototype, "audioEnabled", (0, CR.e)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(uG.prototype, "headphone") || Object.defineProperty(uG.prototype, "headphone", (0, CR.e)("Scene", "headphone")), Object.getOwnPropertyDescriptor(uG.prototype, "audioListenerPositionProvider") || Object.defineProperty(uG.prototype, "audioListenerPositionProvider", (0, CR.e)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(uG.prototype, "audioListenerRotationProvider") || Object.defineProperty(uG.prototype, "audioListenerRotationProvider", (0, CR.e)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(uG.prototype, "audioPositioningRefreshRate") || Object.defineProperty(uG.prototype, "audioPositioningRefreshRate", (0, CR.e)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(uG.prototype, "selectionOctree") || Object.defineProperty(uG.prototype, "selectionOctree", (0, CR.e)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(uG.prototype, "debugLayer") || Object.defineProperty(uG.prototype, "debugLayer", (0, CR.e)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(uG.prototype, "gamepadManager") || Object.defineProperty(uG.prototype, "gamepadManager", (0, CR.e)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(uG.prototype, "simplificationQueue") || Object.defineProperty(uG.prototype, "simplificationQueue", (0, CR.e)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(uG.prototype, "onBeforePhysicsObservable") || Object.defineProperty(uG.prototype, "onBeforePhysicsObservable", (0, CR.e)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(uG.prototype, "onAfterPhysicsObservable") || Object.defineProperty(uG.prototype, "onAfterPhysicsObservable", (0, CR.e)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(uG.prototype, "reflectionProbes") || Object.defineProperty(uG.prototype, "reflectionProbes", (0, CR.e)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(uG.prototype, "forceShowBoundingBoxes") || Object.defineProperty(uG.prototype, "forceShowBoundingBoxes", (0, CR.e)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(uG.prototype, "depthPeelingRenderer") || Object.defineProperty(uG.prototype, "depthPeelingRenderer", (0, CR.e)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(uG.prototype, "useOrderIndependentTransparency") || Object.defineProperty(uG.prototype, "useOrderIndependentTransparency", (0, CR.e)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(uG.prototype, "fluidRenderer") || Object.defineProperty(uG.prototype, "fluidRenderer", (0, CR.e)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(uG.prototype, "geometryBufferRenderer") || Object.defineProperty(uG.prototype, "geometryBufferRenderer", (0, CR.e)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(uG.prototype, "iblCdfGenerator") || Object.defineProperty(uG.prototype, "iblCdfGenerator", (0, CR.e)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(uG.prototype, "prePassRenderer") || Object.defineProperty(uG.prototype, "prePassRenderer", (0, CR.e)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(uG.prototype, "subSurfaceConfiguration") || Object.defineProperty(uG.prototype, "subSurfaceConfiguration", (0, CR.e)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(uG.prototype, "spriteManagers") || Object.defineProperty(uG.prototype, "spriteManagers", (0, CR.e)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(uG.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(uG.prototype, "onBeforeSpritesRenderingObservable", (0, CR.e)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(uG.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(uG.prototype, "onAfterSpritesRenderingObservable", (0, CR.e)("Scene", "onAfterSpritesRenderingObservable"))
  },
  41693: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => yR,
      h: () => tR
    });
    class yR {}
    yR.NAME_EFFECTLAYER = "EffectLayer", yR.NAME_LAYER = "Layer", yR.NAME_LENSFLARESYSTEM = "LensFlareSystem", yR.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", yR.NAME_PARTICLESYSTEM = "ParticleSystem", yR.NAME_GAMEPAD = "Gamepad", yR.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", yR.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", yR.NAME_PREPASSRENDERER = "PrePassRenderer", yR.NAME_DEPTHRENDERER = "DepthRenderer", yR.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", yR.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", yR.NAME_SPRITE = "Sprite", yR.NAME_SUBSURFACE = "SubSurface", yR.NAME_OUTLINERENDERER = "Outline", yR.NAME_PROCEDURALTEXTURE = "ProceduralTexture", yR.NAME_SHADOWGENERATOR = "ShadowGenerator", yR.NAME_OCTREE = "JuR", yR.NAME_PHYSICSENGINE = "PhysicsEngine", yR.NAME_AUDIO = "Audio", yR.NAME_FLUIDRENDERER = "FluidRenderer", yR.NAME_IBLCDFGENERATOR = "iblCDFGenerator", yR.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", yR.STEP_ISREADYFORMESH_EFFECTLAYER = 0, yR.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, yR.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, yR.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, yR.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, yR.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, yR.STEP_BEFORECAMERADRAW_PREPASS = 0, yR.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, yR.STEP_BEFORECAMERADRAW_LAYER = 2, yR.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, yR.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, yR.STEP_BEFORERENDERINGMESH_PREPASS = 0, yR.STEP_BEFORERENDERINGMESH_OUTLINE = 1, yR.STEP_AFTERRENDERINGMESH_PREPASS = 0, yR.STEP_AFTERRENDERINGMESH_OUTLINE = 1, yR.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, yR.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, yR.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, yR.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, yR.STEP_BEFORECLEAR_PREPASS = 1, yR.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, yR.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, yR.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, yR.STEP_AFTERCAMERADRAW_PREPASS = 0, yR.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, yR.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, yR.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, yR.STEP_AFTERCAMERADRAW_LAYER = 4, yR.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, yR.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, yR.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, yR.STEP_AFTERRENDER_AUDIO = 0, yR.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, yR.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, yR.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, yR.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, yR.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, yR.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, yR.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, yR.STEP_POINTERMOVE_SPRITE = 0, yR.STEP_POINTERDOWN_SPRITE = 0, yR.STEP_POINTERUP_SPRITE = 0;
    class tR extends Array {
      constructor(RR) {
        super(...RR)
      }
      static Create() {
        return Object.create(tR.prototype)
      }
      registerStep(RR, JR, GR) {
        let yR, tR = 0;
        for (; tR < this.length; tR++) {
          if (yR = this[tR].index, RR < yR) break
        }
        this.splice(tR, 0, {
          index: RR,
          component: JR,
          action: GR.bind(JR)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  41520: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => ZR,
      i: () => qR,
      l: () => yR,
      m: () => tR,
      n: () => uR
    });

    function yR(RR, JR, GR, yR, tR, uR) {
      function ZR(RR) {
        if (void 0 !== RR && "function" !== typeof RR) throw new TypeError("Function expected");
        return RR
      }
      for (var qR, iR = yR.kind, fR = "getter" === iR ? "get" : "setter" === iR ? "set" : "value", VR = !JR && RR ? yR.static ? RR : RR.prototype : null, KR = JR || (VR ? Object.getOwnPropertyDescriptor(VR, yR.name) : {}), wR = !1, rR = GR.length - 1; rR >= 0; rR--) {
        var eR = {};
        for (var aR in yR) eR[aR] = "access" === aR ? {} : yR[aR];
        for (var aR in yR.access) eR.access[aR] = yR.access[aR];
        eR.addInitializer = function(RR) {
          if (wR) throw new TypeError("Cannot add initializers after decoration has completed");
          uR.push(ZR(RR || null))
        };
        var LR = (0, GR[rR])("accessor" === iR ? {
          get: KR.get,
          set: KR.set
        } : KR[fR], eR);
        if ("accessor" === iR) {
          if (void 0 === LR) continue;
          if (null === LR || "object" !== typeof LR) throw new TypeError("Object expected");
          (qR = ZR(LR.get)) && (KR.get = qR), (qR = ZR(LR.set)) && (KR.set = qR), (qR = ZR(LR.init)) && tR.unshift(qR)
        } else(qR = ZR(LR)) && ("field" === iR ? tR.unshift(qR) : KR[fR] = qR)
      }
      VR && Object.defineProperty(VR, yR.name, KR), wR = !0
    }

    function tR(RR, JR, GR) {
      for (var yR = arguments.length > 2, tR = 0; tR < JR.length; tR++) GR = yR ? JR[tR].call(RR, GR) : JR[tR].call(RR);
      return yR ? GR : void 0
    }

    function uR(RR, JR, GR) {
      return "symbol" === typeof JR && (JR = JR.description ? "[".concat(JR.description, "]") : ""), Object.defineProperty(RR, "name", {
        configurable: !0,
        value: GR ? "".concat(GR, " ", JR) : JR
      })
    }
    Object.create;
    Object.create;

    function ZR(RR, JR, GR, yR) {
      if ("a" === GR && !yR) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof JR ? RR !== JR || !yR : !JR.has(RR)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === GR ? yR : "a" === GR ? yR.call(RR) : yR ? yR.value : JR.get(RR)
    }

    function qR(RR, JR, GR, yR, tR) {
      if ("m" === yR) throw new TypeError("Private method is not writable");
      if ("a" === yR && !tR) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof JR ? RR !== JR || !tR : !JR.has(RR)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === yR ? tR.call(RR, GR) : tR ? tR.value = GR : JR.set(RR, GR), GR
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);