export const id = 242;
export const ids = [242];
export const modules = {
  39517: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => TU,
      h: () => hU,
      i: () => KU,
      l: () => qU
    });
    var tU = gU(39302),
      pU = gU(38236),
      EU = gU(39437),
      PU = gU(39354);
    class TU {
      get lRU() {
        return this._isDisposed
      }
      constructor(UU, RU, gU) {
        let pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          EU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          TU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          qU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          KU = arguments.length > 7 ? arguments[7] : void 0,
          cU = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, PU.c)(), UU && UU.aZ ? this._engine = UU.aZ().WC() : this._engine = UU, this._updatable = gU, this._instanced = TU, this._divisor = KU || 1, this._label = cU, RU instanceof tU.b ? (this._data = null, this._buffer = RU) : (this._data = RU, this._buffer = null), this.byteStride = qU ? pU : pU * Float32Array.BYTES_PER_ELEMENT, EU || this.create()
      }
      createVertexBuffer(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          PU = arguments.length > 6 ? arguments[6] : void 0;
        const TU = EU ? RU : RU * Float32Array.BYTES_PER_ELEMENT,
          KU = tU ? EU ? tU : tU * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new qU(this._engine, this, UU, this._updatable, !0, KU, void 0 === pU ? this._instanced : pU, TU, gU, void 0, void 0, !0, this._divisor || PU)
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
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !UU && this._buffer || (UU = UU || this._data, UU && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, UU), this._data = UU) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(UU, this._label), this._data = UU) : this._buffer = this._engine.createVertexBuffer(UU, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.hG > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.hG, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.hG, void 0, this._label));
          pU.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(UU) {
        this.create(UU)
      }
      updateDirectly(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, UU, tU ? RU : RU * Float32Array.BYTES_PER_ELEMENT, gU ? gU * this.byteStride : void 0), this._data = 0 === RU && void 0 === gU ? UU : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class qU {
      get lRU() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(UU) {
        const RU = 0 != UU;
        this._instanceDivisor = UU, RU !== this._instanced && (this._instanced = RU, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const UU = this.getData();
        return UU ? Array.isArray(UU) ? UU.length / (this.byteStride / 4) - this.byteOffset / 4 : (UU.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(UU, RU, gU, tU, pU, PU, GU, jU, uU, CU) {
        let hU, QU = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          eU = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          WU = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          fU = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = UU, "object" === typeof tU && null !== tU ? (hU = tU.updatable ?? !1, pU = tU.postponeInternalCreation, PU = tU.stride, GU = tU.instanced, jU = tU.offset, uU = tU.size, CU = tU.type, QU = tU.normalized ?? !1, eU = tU.useBytes ?? !1, WU = tU.divisor ?? 1, fU = tU.takeBufferOwnership ?? !1, this._label = tU.label) : hU = !!tU, RU instanceof TU ? (this._buffer = RU, this._ownsBuffer = fU) : (this._buffer = new TU(UU, RU, hU, PU, pU, GU, eU, WU, this._label), this._ownsBuffer = !0), this.uniqueId = qU._Counter++, this._kind = gU, void 0 === CU) {
          const UU = this.getData();
          this.type = UU ? cU(UU) : qU.FLOAT
        } else this.type = CU;
        const xU = (0, EU.o)(this.type);
        eU ? (this._size = uU || (PU ? PU / xU : KU(gU)), this.byteStride = PU || this._buffer.byteStride || this._size * xU, this.byteOffset = jU || 0) : (this._size = uU || PU || KU(gU), this.byteStride = PU ? PU * xU : this._buffer.byteStride || this._size * xU, this.byteOffset = (jU || 0) * xU), this.normalized = QU, this._instanced = void 0 !== GU && GU, this._instanceDivisor = GU ? WU : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(UU) {
        switch (UU) {
          case qU.BYTE:
            return 0;
          case qU.UNSIGNED_BYTE:
            return 1;
          case qU.SHORT:
            return 2;
          case qU.UNSIGNED_SHORT:
            return 3;
          case qU.INT:
            return 4;
          case qU.UNSIGNED_INT:
            return 5;
          case qU.FLOAT:
            return 6;
          case qU.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${UU}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (qU._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(UU, RU) {
        const gU = this.getData();
        return gU ? (0, EU.n)(gU, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, UU, RU) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, EU.o)(this.type)
      }
      sRU() {
        return this.byteOffset / (0, EU.o)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, EU.o)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(UU) {
        this._buffer.create(UU), this._alignBuffer()
      }
      update(UU) {
        this._buffer.update(UU), this._alignBuffer()
      }
      updateDirectly(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(UU, RU, void 0, gU), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(UU, RU) {
        (0, EU.i)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, UU, this.normalized, ((UU, gU) => {
          for (let tU = 0; tU < this._size; tU++) RU(UU[tU], gU + tU)
        }))
      }
      _alignBuffer() {}
    }

    function KU(UU) {
      switch (UU) {
        case qU.UVKind:
        case qU.UV2Kind:
        case qU.UV3Kind:
        case qU.UV4Kind:
        case qU.UV5Kind:
        case qU.UV6Kind:
          return 2;
        case qU.NormalKind:
        case qU.PositionKind:
          return 3;
        case qU.ColorKind:
        case qU.ColorInstanceKind:
        case qU.MatricesIndicesKind:
        case qU.MatricesIndicesExtraKind:
        case qU.MatricesWeightsKind:
        case qU.MatricesWeightsExtraKind:
        case qU.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + UU + "'")
      }
    }

    function cU(UU) {
      return UU instanceof Int8Array ? qU.BYTE : UU instanceof Uint8Array ? qU.UNSIGNED_BYTE : UU instanceof Int16Array ? qU.SHORT : UU instanceof Uint16Array ? qU.UNSIGNED_SHORT : UU instanceof Int32Array ? qU.INT : UU instanceof Uint32Array ? qU.UNSIGNED_INT : qU.FLOAT
    }

    function GU(UU) {
      return (0, EU.o)(UU)
    }

    function jU(UU, RU, gU, tU, pU, PU, TU, qU) {
      (0, EU.i)(UU, RU, gU, tU, pU, PU, TU, ((UU, RU) => {
        for (let gU = 0; gU < tU; gU++) qU(UU[gU], RU + gU)
      }))
    }

    function uU(UU, RU, gU, tU, pU, PU, TU, qU) {
      return (0, EU.n)(UU, RU, gU, tU, pU, PU, TU, qU)
    }
    qU._Counter = 0, qU.BYTE = 5120, qU.UNSIGNED_BYTE = 5121, qU.SHORT = 5122, qU.UNSIGNED_SHORT = 5123, qU.INT = 5124, qU.UNSIGNED_INT = 5125, qU.FLOAT = 5126, qU.HALF_FLOAT = 5131, qU.PositionKind = "position", qU.NormalKind = "normal", qU.TangentKind = "tangent", qU.UVKind = "uv", qU.UV2Kind = "uv2", qU.UV3Kind = "uv3", qU.UV4Kind = "uv4", qU.UV5Kind = "uv5", qU.UV6Kind = "uv6", qU.ColorKind = "color", qU.ColorInstanceKind = "instanceColor", qU.MatricesIndicesKind = "matricesIndices", qU.MatricesWeightsKind = "matricesWeights", qU.MatricesIndicesExtraKind = "matricesIndicesExtra", qU.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let CU = !1;

    function hU() {
      CU || (CU = !0, qU.DeduceStride = KU, qU.GetDataType = cU, qU.GetTypeByteLength = GU, qU.ForEach = jU, qU.GetFloatData = uU)
    }
  },
  39302: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU
    });
    class tU {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.hG = 0, this.is32Bits = !1, this.uniqueId = tU._Counter++
      }
    }
    tU._Counter = 0
  },
  39513: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => EU
    });
    var tU = gU(36600),
      pU = gU(39517);
    class EU {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || RU && !this.pickedMesh.isVerticesDataPresent(pU.l.NormalKind)) return null;
        let gU, EU = this.pickedMesh.dgU();
        0 === EU?.length && (EU = null);
        const PU = tU.h.xC[0],
          TU = tU.h.xC[1],
          qU = tU.h.xC[2];
        if (RU) {
          const UU = this.pickedMesh.getVerticesData(pU.l.NormalKind);
          let RU = EU ? tU.n.FromArrayToRef(UU, 3 * EU[3 * this.faceId], PU) : PU.b_(UU[3 * this.faceId * 3], UU[3 * this.faceId * 3 + 1], UU[3 * this.faceId * 3 + 2]),
            KU = EU ? tU.n.FromArrayToRef(UU, 3 * EU[3 * this.faceId + 1], TU) : TU.b_(UU[3 * (3 * this.faceId + 1)], UU[3 * (3 * this.faceId + 1) + 1], UU[3 * (3 * this.faceId + 1) + 2]),
            cU = EU ? tU.n.FromArrayToRef(UU, 3 * EU[3 * this.faceId + 2], qU) : qU.b_(UU[3 * (3 * this.faceId + 2)], UU[3 * (3 * this.faceId + 2) + 1], UU[3 * (3 * this.faceId + 2) + 2]);
          RU = RU.scale(this.bu), KU = KU.scale(this.bv), cU = cU.scale(1 - this.bu - this.bv), gU = new tU.n(RU.x + KU.x + cU.x, RU.y + KU.y + cU.y, RU.z + KU.z + cU.z)
        } else {
          const UU = this.pickedMesh.getVerticesData(pU.l.PositionKind),
            RU = EU ? tU.n.FromArrayToRef(UU, 3 * EU[3 * this.faceId], PU) : PU.b_(UU[3 * this.faceId * 3], UU[3 * this.faceId * 3 + 1], UU[3 * this.faceId * 3 + 2]),
            KU = EU ? tU.n.FromArrayToRef(UU, 3 * EU[3 * this.faceId + 1], TU) : TU.b_(UU[3 * (3 * this.faceId + 1)], UU[3 * (3 * this.faceId + 1) + 1], UU[3 * (3 * this.faceId + 1) + 2]),
            cU = EU ? tU.n.FromArrayToRef(UU, 3 * EU[3 * this.faceId + 2], qU) : qU.b_(UU[3 * (3 * this.faceId + 2)], UU[3 * (3 * this.faceId + 2) + 1], UU[3 * (3 * this.faceId + 2) + 2]),
            GU = RU.subtract(KU),
            jU = cU.subtract(KU);
          gU = tU.n.Cross(GU, jU)
        }
        const KU = (UU, RU) => {
          if (-1 !== this.thinInstanceIndex) {
            const gU = UU._thinInstanceDataStorage.matrixData,
              pU = this.thinInstanceIndex << 4;
            if (gU && gU.length > pU) {
              const UU = tU.h.Matrix[0];
              tU.c.FromArrayToRef(gU, pU, UU), tU.n.TransformNormalToRef(RU, UU, RU)
            }
          }
          let gU = UU.getWorldMatrix();
          UU.nonUniformScaling && (tU.h.Matrix[0].PgU(gU), gU = tU.h.Matrix[0], gU.setTranslationFromFloats(0, 0, 0), gU.invert(), gU.transposeToRef(tU.h.Matrix[1]), gU = tU.h.Matrix[1]), tU.n.TransformNormalToRef(RU, gU, RU)
        };
        if (UU && KU(this.pickedMesh, gU), this.ray) {
          const RU = tU.h.xC[0].PgU(gU);
          UU || KU(this.pickedMesh, RU), tU.n.Dot(RU, this.ray.direction) > 0 && gU.negateInPlace()
        }
        return gU.normalize(), gU
      }
      getTextureCoordinates() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pU.l.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(UU)) return null;
        const RU = this.pickedMesh.dgU();
        if (!RU) return null;
        const gU = this.pickedMesh.getVerticesData(UU);
        if (!gU) return null;
        let EU = tU.l.FromArray(gU, 2 * RU[3 * this.faceId]),
          PU = tU.l.FromArray(gU, 2 * RU[3 * this.faceId + 1]),
          TU = tU.l.FromArray(gU, 2 * RU[3 * this.faceId + 2]);
        return EU = EU.scale(this.bu), PU = PU.scale(this.bv), TU = TU.scale(1 - this.bu - this.bv), new tU.l(EU.x + PU.x + TU.x, EU.y + PU.y + TU.y)
      }
    }
  },
  39354: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU
    });
    var tU = gU(39215);
    let pU = !1;

    function EU() {
      pU || (pU = !0, tU.ThinEngine.prototype.updateDynamicIndexBuffer = function(UU, RU) {
        let gU;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(UU), gU = UU.is32Bits ? RU instanceof Uint32Array ? RU : new Uint32Array(RU) : RU instanceof Uint16Array ? RU : new Uint16Array(RU), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, gU, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, tU.ThinEngine.prototype.updateDynamicVertexBuffer = function(UU, RU, gU, tU) {
        this.bindArrayBuffer(UU), void 0 === gU && (gU = 0);
        const pU = RU.byteLength || RU.length;
        void 0 === tU || tU >= pU && 0 === gU ? RU instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, gU, new Float32Array(RU)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, gU, RU) : RU instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, gU, new Float32Array(RU).subarray(0, tU / 4)) : (RU = ArrayBuffer.isView(RU) ? new Uint8Array(RU.buffer, RU.byteOffset, tU) : new Uint8Array(RU, 0, tU), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, gU, RU)), this._resetVertexBufferBinding()
      })
    }
  },
  39316: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU
    });
    class tU {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RU = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = RU, !UU && (UU = RU.createTexture(), !UU)) throw new Error("Unable to create webGL texture");
        this.set(UU)
      }
      setUsage() {}
      set(UU) {
        this._webGLTexture = UU
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(UU) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(UU)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const UU of this._MSAARenderBuffers) this._context.deleteRenderbuffer(UU);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[UU] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39272: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => WU
    });
    var tU = gU(36624),
      pU = gU(39223),
      EU = gU(36622),
      PU = gU(38236),
      TU = gU(36619),
      qU = gU(39280);
    class KU {
      constructor() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, UU && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(UU) {
        this._zOffset !== UU && (this._zOffset = UU, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(UU) {
        this._zOffsetUnits !== UU && (this._zOffsetUnits = UU, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(UU) {
        this._cullFace !== UU && (this._cullFace = UU, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(UU) {
        this._cull !== UU && (this._cull = UU, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(UU) {
        this._depthFunc !== UU && (this._depthFunc = UU, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(UU) {
        this._depthMask !== UU && (this._depthMask = UU, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(UU) {
        this._depthTest !== UU && (this._depthTest = UU, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(UU) {
        this._frontFace !== UU && (this._frontFace = UU, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(UU) {
        this.isDirty && (this._isCullDirty && (this.cull ? UU.enable(UU.CULL_FACE) : UU.disable(UU.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (UU.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (UU.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? UU.enable(UU.DEPTH_TEST) : UU.disable(UU.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (UU.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (UU.enable(UU.POLYGON_OFFSET_FILL), UU.polygonOffset(this.zOffset, this.zOffsetUnits)) : UU.disable(UU.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (UU.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class cU {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(UU) {
        this._func !== UU && (this._func = UU, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(UU) {
        this._backFunc !== UU && (this._backFunc = UU, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(UU) {
        this._funcRef !== UU && (this._funcRef = UU, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(UU) {
        this._funcMask !== UU && (this._funcMask = UU, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(UU) {
        this._opStencilFail !== UU && (this._opStencilFail = UU, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(UU) {
        this._opDepthFail !== UU && (this._opDepthFail = UU, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(UU) {
        this._opStencilDepthPass !== UU && (this._opStencilDepthPass = UU, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(UU) {
        this._backOpStencilFail !== UU && (this._backOpStencilFail = UU, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(UU) {
        this._backOpDepthFail !== UU && (this._backOpDepthFail = UU, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(UU) {
        this._backOpStencilDepthPass !== UU && (this._backOpStencilDepthPass = UU, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(UU) {
        this._mask !== UU && (this._mask = UU, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(UU) {
        this._enabled !== UU && (this._enabled = UU, this._isStencilTestDirty = !0)
      }
      constructor() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, UU && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(UU) {
        if (!UU) return;
        const RU = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = RU ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = RU ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = RU ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = RU ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = RU ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = RU ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = RU ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = RU ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = RU ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = RU ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = RU ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = RU ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? UU.enable(UU.STENCIL_TEST) : UU.disable(UU.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (UU.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (UU.stencilFuncSeparate(UU.FRONT, this.func, this.funcRef, this.funcMask), UU.stencilFuncSeparate(UU.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (UU.stencilOpSeparate(UU.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), UU.stencilOpSeparate(UU.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class GU {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = GU.ALWAYS, this.opStencilFail = GU.KEEP, this.opDepthFail = GU.KEEP, this.opStencilDepthPass = GU.REPLACE, this.backFunc = GU.ALWAYS, this.backOpStencilFail = GU.KEEP, this.backOpDepthFail = GU.KEEP, this.backOpStencilDepthPass = GU.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(UU) {
        this.func = UU
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(UU) {
        this.backFunc = UU
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(UU) {
        this.funcRef = UU
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(UU) {
        this.funcMask = UU
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(UU) {
        this.opStencilFail = UU
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(UU) {
        this.opDepthFail = UU
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(UU) {
        this.opStencilDepthPass = UU
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(UU) {
        this.backOpStencilFail = UU
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(UU) {
        this.backOpDepthFail = UU
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(UU) {
        this.backOpStencilDepthPass = UU
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(UU) {
        this.mask = UU
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(UU) {
        this.enabled = UU
      }
    }
    GU.ALWAYS = 519, GU.KEEP = 7680, GU.REPLACE = 7681;
    var jU = gU(39284),
      uU = gU(39256),
      CU = gU(39203),
      hU = gU(39231),
      QU = gU(39248);

    function eU(UU, RU) {
      if (RU) {
        const {
          requestAnimationFrame: gU
        } = RU;
        if ("function" === typeof gU) return gU(UU)
      }
      if ((0, hU.k)()) {
        const {
          requestAnimationFrame: gU
        } = RU || window;
        if ("function" === typeof gU) return gU(UU)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(UU);
      return setTimeout(UU, 16)
    }
    class WU {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(UU) {
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
      get VgU() {
        return this._useReverseDepthBuffer
      }
      set VgU(UU) {
        UU !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = UU, this._depthCullingState.depthFunc = UU ? 518 : 515)
      }
      setColorWrite(UU) {
        UU !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = UU)
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
      _getGlobalDefines(UU) {
        if (UU) return this.isNDCHalfZRange ? UU.IS_NDC_HALF_ZRANGE = "" : delete UU.IS_NDC_HALF_ZRANGE, this.VgU ? UU.USE_REVERSE_DEPTHBUFFER = "" : delete UU.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? UU.USE_EXACT_SRGB_CONVERSIONS = "" : delete UU.USE_EXACT_SRGB_CONVERSIONS);
        {
          let UU = "";
          return this.isNDCHalfZRange && (UU += "#define IS_NDC_HALF_ZRANGE"), this.VgU && (UU && (UU += "\n"), UU += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (UU && (UU += "\n"), UU += "#define USE_EXACT_SRGB_CONVERSIONS"), UU
        }
      }
      _rebuildInternalTextures() {
        const UU = this._internalTexturesCache.slice();
        for (const RU of UU) RU._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const UU = this._renderTargetWrapperCache.slice();
        for (const RU of UU) RU.textures?.some((UU => 15 === UU.source)) || RU._rebuild()
      }
      _rebuildEffects() {
        for (const UU in this._compiledEffects) {
          const RU = this._compiledEffects[UU];
          RU._pipelineContext = null, RU._prepareEffect()
        }
        pU.d.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        PU.e.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(UU) {
        setTimeout((() => {
          this._clearEmptyResources();
          const RU = this._depthCullingState.depthTest,
            gU = this._depthCullingState.depthFunc,
            tU = this._depthCullingState.depthMask,
            pU = this._stencilState.stencilTest;
          UU(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = RU, this._depthCullingState.depthFunc = gU, this._depthCullingState.depthMask = tU, this._stencilState.stencilTest = pU, this._flagContextRestored()
        }), 0)
      }
      get lRU() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(UU) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(UU) {}
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
          const UU = new Uint8Array(4),
            RU = [UU, UU, UU, UU, UU, UU];
          this._emptyCubeTexture = this.createRawCubeTexture(RU, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(UU) {
        this._framebufferDimensionsObject = UU
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(UU) {
        if (!UU) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const RU = this._activeRenderLoops.indexOf(UU);
        RU >= 0 && (this._activeRenderLoops.splice(RU, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: UU
            } = this.customAnimationFrameRequester;
            UU && UU(this.customAnimationFrameRequester.mC), delete this.customAnimationFrameRequester.mC
          }
        } else if (0 !== this._frameHandler) {
          const UU = this._frameHandler;
          if (this._frameHandler = 0, (0, hU.k)()) {
            const {
              cancelAnimationFrame: RU
            } = this.getHostWindow() || window;
            if ("function" === typeof RU) return RU(UU)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(UU);
          return clearTimeout(UU)
        }
      }
      Am() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      Om() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(UU) {
        this._maxFPS = UU, void 0 !== UU && (this._minFrameTime = UU <= 0 ? Number.MAX_VALUE : 1e3 / UU)
      }
      _isOverFrameTime(UU) {
        if (!UU || void 0 === this._maxFPS) return !1;
        const RU = UU - this._lastFrameTime;
        return this._lastFrameTime = UU, this._renderAccumulator += RU, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(UU) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(UU)) {
          let UU = !0;
          (this.lRU || !this.renderEvenInBackground && this._windowIsBackground) && (UU = !1), UU && (this.Am(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.Om())
        }
      }
      _renderLoop(UU) {
        this._processFrame(UU), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let UU = 0; UU < this._activeRenderLoops.length; UU++) {
          (0, this._activeRenderLoops[UU])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(UU, RU) {
        return eU(UU, RU)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.mC = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.mC) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(UU) {
        -1 === this._activeRenderLoops.indexOf(UU) && (this._activeRenderLoops.push(UU), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(UU) {
        this._depthCullingState.depthTest = UU
      }
      setZOffset(UU) {
        this._depthCullingState.zOffset = this.VgU ? -UU : UU
      }
      getZOffset() {
        const UU = this._depthCullingState.zOffset;
        return this.VgU ? -UU : UU
      }
      setZOffsetUnits(UU) {
        this._depthCullingState.zOffsetUnits = this.VgU ? -UU : UU
      }
      getZOffsetUnits() {
        const UU = this._depthCullingState.zOffsetUnits;
        return this.VgU ? -UU : UU
      }
      getHostWindow() {
        return (0, hU.k)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(UU) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const UU of this.scenes) UU._rebuildTextures();
        for (const UU of this._virtualScenes) UU._rebuildTextures()
      }
      _releaseRenderTargetWrapper(UU) {
        const RU = this._renderTargetWrapperCache.indexOf(UU); - 1 !== RU && this._renderTargetWrapperCache.splice(RU, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(UU, RU, gU) {
        const tU = RU || this.getRenderWidth(),
          pU = gU || this.getRenderHeight(),
          EU = UU.x || 0,
          PU = UU.y || 0;
        this._cachedViewport = UU, this._viewport(EU * tU, PU * pU, tU * UU.width, pU * UU.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(UU) {
        return new Path2D(UU)
      }
      get description() {
        let UU = this.name + this.version;
        return this._caps.parallelShaderCompile && (UU += " - Parallel shader compilation"), UU
      }
      _createTextureBase(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          TU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          qU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          KU = arguments.length > 7 ? arguments[7] : void 0,
          cU = arguments.length > 8 ? arguments[8] : void 0,
          GU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          jU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          uU = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          hU = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          QU = arguments.length > 13 ? arguments[13] : void 0,
          eU = arguments.length > 14 ? arguments[14] : void 0,
          fU = arguments.length > 15 ? arguments[15] : void 0;
        const xU = "data:" === (UU = UU || "").substring(0, 5),
          mU = "blob:" === UU.substring(0, 5),
          IU = xU && -1 !== UU.indexOf(";base64,"),
          JU = jU || new CU.d(this, 1);
        JU !== jU && (JU.label = UU.substring(0, 60));
        const wU = UU;
        !this._transformTextureUrl || IU || jU || GU || (UU = this._transformTextureUrl(UU)), wU !== UU && (JU._originalUrl = wU);
        const nU = UU.lastIndexOf(".");
        let bU = hU || (nU > -1 ? UU.substring(nU).toLowerCase() : "");
        bU.indexOf("?") > -1 && (bU = bU.split("?")[0]);
        const oU = WU.GetCompatibleTextureLoader(bU, QU);
        tU && tU.addPendingData(JU), JU.url = UU, JU.generateMipMaps = !RU, JU.samplingMode = pU, JU.invertY = gU, JU._useSRGBBuffer = this._getUseSRGBBuffer(!!fU, RU), this._doNotHandleContextLost || (JU._buffer = GU);
        let ZU = null;
        TU && !jU && (ZU = JU.onLoadedObservable.add(TU)), jU || this._internalTexturesCache.push(JU);
        const aU = (gU, jU) => {
          tU && tU.removePendingData(JU), UU === wU ? (ZU && JU.onLoadedObservable.remove(ZU), EU.c.UseFallbackTexture && UU !== EU.c.FallbackTexture && this._createTextureBase(EU.c.FallbackTexture, RU, JU.invertY, tU, pU, null, qU, KU, cU, GU, JU), gU = (gU || "Unknown error") + (EU.c.UseFallbackTexture ? " - Fallback texture was used" : ""), JU.onErrorObservable.notifyObservers({
            message: gU,
            exception: jU
          }), qU && qU(gU, jU)) : (PU.e.Warn(`Failed to load ${UU}, falling back to ${wU}`), this._createTextureBase(wU, RU, JU.invertY, tU, pU, TU, qU, KU, cU, GU, JU, uU, hU, QU, eU, fU))
        };
        if (oU) {
          const RU = async UU => {
            (await oU).loadData(UU, JU, ((UU, RU, gU, EU, PU, TU) => {
              TU ? aU("TextureLoader failed to load data") : KU(JU, bU, tU, {
                width: UU,
                height: RU
              }, JU.invertY, !gU, EU, (() => (PU(), !1)), pU)
            }), eU)
          };
          if (GU) {
            const UU = async UU => {
              try {
                await RU(UU)
              } catch (gU) {
                aU("Failed to parse texture data", gU)
              }
            };
            GU instanceof ArrayBuffer ? UU(new Uint8Array(GU)) : ArrayBuffer.isView(GU) ? UU(GU) : qU && qU("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(UU, (async UU => {
            try {
              await RU(new Uint8Array(UU))
            } catch (gU) {
              aU("Failed to parse texture data", gU)
            }
          }), void 0, tU ? tU.offlineProvider : void 0, !0, ((UU, RU) => {
            aU("Unable to load " + (UU && UU.responseURL, RU))
          }))
        } else {
          const gU = UU => {
            mU && !this._doNotHandleContextLost && (JU._buffer = UU), KU(JU, bU, tU, UU, JU.invertY, RU, !1, cU, pU)
          };
          !xU || IU ? GU && ("string" === typeof GU.decoding || GU.close) ? gU(GU) : WU._FileToolsLoadImage(UU || "", gU, aU, tU ? tU.offlineProvider : null, QU, JU.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof GU || GU instanceof ArrayBuffer || ArrayBuffer.isView(GU) || GU instanceof Blob ? WU._FileToolsLoadImage(GU, gU, aU, tU ? tU.offlineProvider : null, QU, JU.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : GU && gU(GU)
        }
        return JU
      }
      _rebuildBuffers() {
        for (const UU of this._uniformBuffers) UU._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, hU.g)() ? document : null
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
        for (const UU in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, UU) && (this._boundTexturesCache[UU] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(UU) {
        this._name = UU
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
      setHardwareScalingLevel(UU) {
        this._hardwareScalingLevel = UU, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(UU) {
        this._doNotHandleContextLost = UU
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(UU, RU, gU) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new KU, this._stencilStateComposer = new cU, this._stencilState = new GU, this._alphaState = new jU.d(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new tU.b, this.onCanvasFocusObservable = new tU.b, this.onNewSceneAddedObservable = new tU.b, this.onResizeObservable = new tU.b, this.onCanvasPointerOutObservable = new tU.b, this.onEffectErrorObservable = new tU.b, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new tU.b, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = UU => this._renderLoop(UU), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new tU.b, this.onAfterShaderCompilationObservable = new tU.b, this.onBeginFrameObservable = new tU.b, this.onEndFrameObservable = new tU.b, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new tU.b, this.onContextRestoredObservable = new tU.b, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.HZ = new tU.b, this.onReleaseEffectsObservable = new tU.b, EU.c.Instances.push(this), this.startTime = qU.b.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, TU.c.SetMatrixPrecision(!!RU.useLargeWorldRendering || !!RU.useHighPrecisionMatrix), (0, hU.h)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), RU.antialias = UU ?? RU.antialias, RU.deterministicLockstep = RU.deterministicLockstep ?? !1, RU.lockstepMaxSteps = RU.lockstepMaxSteps ?? 4, RU.timeStep = RU.timeStep ?? 1 / 60, RU.stencil = RU.stencil ?? !0, this._audioContext = RU.audioEngineOptions?.audioContext ?? null, this._audioDestination = RU.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = RU.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!RU.doNotHandleContextLost, this._isStencilEnable = !!RU.stencil, this.useExactSrgbConversions = RU.useExactSrgbConversions ?? !1, this.canvasTabIndex = RU.canvasTabIndex ?? this.canvasTabIndex;
        const pU = (0, hU.k)() && window.devicePixelRatio || 1,
          PU = RU.limitDeviceRatio || pU;
        gU = gU || RU.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = gU, this._hardwareScalingLevel = gU ? 1 / Math.min(PU, pU) : 1, this._lastDevicePixelRatio = pU, this._creationOptions = RU
      }
      resize() {
        let UU, RU, gU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const UU = (0, hU.k)() && window.devicePixelRatio || 1,
            RU = this._lastDevicePixelRatio / UU;
          this._lastDevicePixelRatio = UU, this._hardwareScalingLevel *= RU
        }
        if ((0, hU.k)() && (0, hU.g)())
          if (this._renderingCanvas) {
            const gU = this._renderingCanvas.getBoundingClientRect?.();
            UU = this._renderingCanvas.clientWidth || gU?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, RU = this._renderingCanvas.clientHeight || gU?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else UU = window.innerWidth, RU = window.innerHeight;
        else UU = this._renderingCanvas ? this._renderingCanvas.width : 100, RU = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(UU / this._hardwareScalingLevel, RU / this._hardwareScalingLevel, gU)
      }
      setSize(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (UU |= 0, RU |= 0, !gU && this._renderingCanvas.width === UU && this._renderingCanvas.height === RU) return !1;
        if (this._renderingCanvas.width = UU, this._renderingCanvas.height = RU, this.scenes) {
          for (let UU = 0; UU < this.scenes.length; UU++) {
            const RU = this.scenes[UU];
            for (let UU = 0; UU < RU.cameras.length; UU++) {
              RU.cameras[UU]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU, GU) {
        throw (0, uU.n)("engine.rawTexture")
      }
      createRawCubeTexture(UU, RU, gU, tU, pU, EU, PU, TU) {
        throw (0, uU.n)("engine.rawTexture")
      }
      createRawTexture3D(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU) {
        throw (0, uU.n)("engine.rawTexture")
      }
      createRawTexture2DArray(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU, GU) {
        throw (0, uU.n)("engine.rawTexture")
      }
      _sharedInit(UU) {
        this._renderingCanvas = UU
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const UU = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== UU.indexOf("Mobile") || -1 !== UU.indexOf("Mac") && (0, hU.g)() && "ontouchend" in document
        }, this._checkForMobile(), (0, hU.k)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(UU) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(UU, !1)
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
      _createImageBitmapFromSource(UU, RU) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(UU, RU) {
        return createImageBitmap(UU, RU)
      }
      resizeImageBitmap(UU, RU, gU) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(UU) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(UU, RU) {
        if ("undefined" === typeof document) return new OffscreenCanvas(UU, RU);
        const gU = document.createElement("canvas");
        return gU.width = UU, gU.height = RU, gU
      }
      createCanvas(UU, RU) {
        return WU._CreateCanvas(UU, RU)
      }
      static _FileToolsLoadImage(UU, RU, gU, tU, pU, EU, PU) {
        if (!QU.e.loadImage) throw (0, uU.n)("FileTools");
        return QU.e.loadImage(UU, RU, gU, tU, pU, EU, PU)
      }
      _loadFile(UU, RU, gU, tU, pU, EU) {
        const PU = (0, QU.m)(UU, RU, gU, tU, pU, EU);
        return this._activeRequests.push(PU), PU.onCompleteObservable.add((() => {
          const UU = this._activeRequests.indexOf(PU); - 1 !== UU && this._activeRequests.splice(UU, 1)
        })), PU
      }
      static _FileToolsLoadFile(UU, RU, gU, tU, pU, EU) {
        if (QU.e.loadFile) return QU.e.loadFile(UU, RU, gU, tU, pU, EU);
        throw (0, uU.n)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), pU.d.ResetCache();
        for (const RU of this._activeRequests) RU.abort();
        this._boundRenderFunction = null, this.HZ.notifyObservers(this), this.HZ.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, hU.k)() && window.removeEventListener("resize", this._checkForMobile);
        const UU = EU.c.Instances.indexOf(this);
        UU >= 0 && EU.c.Instances.splice(UU, 1), EU.c.Instances.length || (EU.c.OnEnginesDisposedObservable.notifyObservers(this), EU.c.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(UU) {
        throw (0, uU.n)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(UU, RU) {
        for (let gU = 0; gU < EU.c.Instances.length; gU++) {
          const tU = EU.c.Instances[gU];
          for (let gU = 0; gU < tU.scenes.length; gU++) tU.scenes[gU].markAllMaterialsAsDirty(UU, RU)
        }
      }
      static GetCompatibleTextureLoader(UU, RU) {
        return null
      }
    }
    WU._RenderPassIdCounter = 0, WU._RescalePostProcessFactory = null, WU.CollisionsEpsilon = .001, WU.QueueNewFrame = eU
  },
  39225: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    class tU {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? tU.ShadersRepository : tU.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? tU.ShadersStore : tU.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? tU.IncludesShadersStore : tU.IncludesShadersStoreWGSL
      }
    }
    tU.ShadersRepository = "src/Shaders/", tU.ShadersStore = {}, tU.IncludesShadersStore = {}, tU.ShadersRepositoryWGSL = "src/ShadersWGSL/", tU.ShadersStoreWGSL = {}, tU.IncludesShadersStoreWGSL = {}
  },
  39240: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => jU,
      h: () => fU,
      i: () => CU,
      j: () => uU,
      n: () => hU,
      o: () => WU,
      r: () => GU,
      u: () => KU,
      x: () => cU,
      A: () => qU,
      E: () => TU
    });
    class tU {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(UU) {
        UU && this.program && UU(this.program)
      }
      setEngine(UU) {
        this.engine = UU
      }
      _fillEffectInformation(UU, RU, gU, tU, pU, EU, PU, TU) {
        const qU = this.engine;
        if (qU.supportsUniformBuffers)
          for (const cU in RU) UU.bindUniformBlock(cU, RU[cU]);
        let KU;
        for (this.engine.getUniforms(this, gU).forEach(((UU, RU) => {
            tU[gU[RU]] = UU
          })), this._uniforms = tU, KU = 0; KU < pU.length; KU++) {
          null == UU.getUniform(pU[KU]) && (pU.splice(KU, 1), KU--)
        }
        pU.forEach(((UU, RU) => {
          EU[UU] = RU
        }));
        for (const cU of qU.getAttributes(this, PU)) TU.push(cU)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(UU, RU) {
        const gU = this._valueCache[UU],
          tU = RU.updateFlag;
        if (void 0 !== gU && gU === tU) return !1;
        const pU = RU.vgU();
        let EU = this._matrixValueCache[UU];
        if (void 0 !== gU && null !== gU && void 0 !== EU) {
          let RU = !0;
          for (let UU = 15; UU >= 0; UU--)
            if (EU[UU] !== pU[UU]) {
              RU = !1;
              break
            } if (RU) return this._valueCache[UU] = tU, !1
        }
        return void 0 === EU && (EU = this._matrixValueCache[UU] = new Float32Array(16)), EU.set(pU), this._valueCache[UU] = tU, !0
      }
      _cacheFloat2(UU, RU, gU) {
        let tU = this._valueCache[UU];
        if (!tU || 2 !== tU.length) return tU = [RU, gU], this._valueCache[UU] = tU, !0;
        let pU = !1;
        return tU[0] !== RU && (tU[0] = RU, pU = !0), tU[1] !== gU && (tU[1] = gU, pU = !0), pU
      }
      _cacheFloat3(UU, RU, gU, tU) {
        let pU = this._valueCache[UU];
        if (!pU || 3 !== pU.length) return pU = [RU, gU, tU], this._valueCache[UU] = pU, !0;
        let EU = !1;
        return pU[0] !== RU && (pU[0] = RU, EU = !0), pU[1] !== gU && (pU[1] = gU, EU = !0), pU[2] !== tU && (pU[2] = tU, EU = !0), EU
      }
      _cacheFloat4(UU, RU, gU, tU, pU) {
        let EU = this._valueCache[UU];
        if (!EU || 4 !== EU.length) return EU = [RU, gU, tU, pU], this._valueCache[UU] = EU, !0;
        let PU = !1;
        return EU[0] !== RU && (EU[0] = RU, PU = !0), EU[1] !== gU && (EU[1] = gU, PU = !0), EU[2] !== tU && (EU[2] = tU, PU = !0), EU[3] !== pU && (EU[3] = pU, PU = !0), PU
      }
      setInt(UU, RU) {
        const gU = this._valueCache[UU];
        void 0 !== gU && gU === RU || this.engine.setInt(this._uniforms[UU], RU) && (this._valueCache[UU] = RU)
      }
      setInt2(UU, RU, gU) {
        this._cacheFloat2(UU, RU, gU) && (this.engine.setInt2(this._uniforms[UU], RU, gU) || (this._valueCache[UU] = null))
      }
      setInt3(UU, RU, gU, tU) {
        this._cacheFloat3(UU, RU, gU, tU) && (this.engine.setInt3(this._uniforms[UU], RU, gU, tU) || (this._valueCache[UU] = null))
      }
      setInt4(UU, RU, gU, tU, pU) {
        this._cacheFloat4(UU, RU, gU, tU, pU) && (this.engine.setInt4(this._uniforms[UU], RU, gU, tU, pU) || (this._valueCache[UU] = null))
      }
      setIntArray(UU, RU) {
        this._valueCache[UU] = null, this.engine.setIntArray(this._uniforms[UU], RU)
      }
      setIntArray2(UU, RU) {
        this._valueCache[UU] = null, this.engine.setIntArray2(this._uniforms[UU], RU)
      }
      setIntArray3(UU, RU) {
        this._valueCache[UU] = null, this.engine.setIntArray3(this._uniforms[UU], RU)
      }
      setIntArray4(UU, RU) {
        this._valueCache[UU] = null, this.engine.setIntArray4(this._uniforms[UU], RU)
      }
      setUInt(UU, RU) {
        const gU = this._valueCache[UU];
        void 0 !== gU && gU === RU || this.engine.setUInt(this._uniforms[UU], RU) && (this._valueCache[UU] = RU)
      }
      setUInt2(UU, RU, gU) {
        this._cacheFloat2(UU, RU, gU) && (this.engine.setUInt2(this._uniforms[UU], RU, gU) || (this._valueCache[UU] = null))
      }
      setUInt3(UU, RU, gU, tU) {
        this._cacheFloat3(UU, RU, gU, tU) && (this.engine.setUInt3(this._uniforms[UU], RU, gU, tU) || (this._valueCache[UU] = null))
      }
      setUInt4(UU, RU, gU, tU, pU) {
        this._cacheFloat4(UU, RU, gU, tU, pU) && (this.engine.setUInt4(this._uniforms[UU], RU, gU, tU, pU) || (this._valueCache[UU] = null))
      }
      setUIntArray(UU, RU) {
        this._valueCache[UU] = null, this.engine.setUIntArray(this._uniforms[UU], RU)
      }
      setUIntArray2(UU, RU) {
        this._valueCache[UU] = null, this.engine.setUIntArray2(this._uniforms[UU], RU)
      }
      setUIntArray3(UU, RU) {
        this._valueCache[UU] = null, this.engine.setUIntArray3(this._uniforms[UU], RU)
      }
      setUIntArray4(UU, RU) {
        this._valueCache[UU] = null, this.engine.setUIntArray4(this._uniforms[UU], RU)
      }
      setArray(UU, RU) {
        this._valueCache[UU] = null, this.engine.setArray(this._uniforms[UU], RU)
      }
      setArray2(UU, RU) {
        this._valueCache[UU] = null, this.engine.setArray2(this._uniforms[UU], RU)
      }
      setArray3(UU, RU) {
        this._valueCache[UU] = null, this.engine.setArray3(this._uniforms[UU], RU)
      }
      setArray4(UU, RU) {
        this._valueCache[UU] = null, this.engine.setArray4(this._uniforms[UU], RU)
      }
      setMatrices(UU, RU) {
        RU && (this._valueCache[UU] = null, this.engine.setMatrices(this._uniforms[UU], RU))
      }
      setMatrix(UU, RU) {
        this._cacheMatrix(UU, RU) && (this.engine.setMatrices(this._uniforms[UU], RU.vgU()) || (this._valueCache[UU] = null))
      }
      setMatrix3x3(UU, RU) {
        this._valueCache[UU] = null, this.engine.setMatrix3x3(this._uniforms[UU], RU)
      }
      setMatrix2x2(UU, RU) {
        this._valueCache[UU] = null, this.engine.setMatrix2x2(this._uniforms[UU], RU)
      }
      setFloat(UU, RU) {
        const gU = this._valueCache[UU];
        void 0 !== gU && gU === RU || this.engine.setFloat(this._uniforms[UU], RU) && (this._valueCache[UU] = RU)
      }
      setVector2(UU, RU) {
        this._cacheFloat2(UU, RU.x, RU.y) && (this.engine.setFloat2(this._uniforms[UU], RU.x, RU.y) || (this._valueCache[UU] = null))
      }
      setFloat2(UU, RU, gU) {
        this._cacheFloat2(UU, RU, gU) && (this.engine.setFloat2(this._uniforms[UU], RU, gU) || (this._valueCache[UU] = null))
      }
      setVector3(UU, RU) {
        this._cacheFloat3(UU, RU.x, RU.y, RU.z) && (this.engine.setFloat3(this._uniforms[UU], RU.x, RU.y, RU.z) || (this._valueCache[UU] = null))
      }
      setFloat3(UU, RU, gU, tU) {
        this._cacheFloat3(UU, RU, gU, tU) && (this.engine.setFloat3(this._uniforms[UU], RU, gU, tU) || (this._valueCache[UU] = null))
      }
      setVector4(UU, RU) {
        this._cacheFloat4(UU, RU.x, RU.y, RU.z, RU.w) && (this.engine.setFloat4(this._uniforms[UU], RU.x, RU.y, RU.z, RU.w) || (this._valueCache[UU] = null))
      }
      setQuaternion(UU, RU) {
        this._cacheFloat4(UU, RU.x, RU.y, RU.z, RU.w) && (this.engine.setFloat4(this._uniforms[UU], RU.x, RU.y, RU.z, RU.w) || (this._valueCache[UU] = null))
      }
      setFloat4(UU, RU, gU, tU, pU) {
        this._cacheFloat4(UU, RU, gU, tU, pU) && (this.engine.setFloat4(this._uniforms[UU], RU, gU, tU, pU) || (this._valueCache[UU] = null))
      }
      setColor3(UU, RU) {
        this._cacheFloat3(UU, RU.r, RU.g, RU.b) && (this.engine.setFloat3(this._uniforms[UU], RU.r, RU.g, RU.b) || (this._valueCache[UU] = null))
      }
      setColor4(UU, RU, gU) {
        this._cacheFloat4(UU, RU.r, RU.g, RU.b, gU) && (this.engine.setFloat4(this._uniforms[UU], RU.r, RU.g, RU.b, gU) || (this._valueCache[UU] = null))
      }
      setDirectColor4(UU, RU) {
        this._cacheFloat4(UU, RU.r, RU.g, RU.b, RU.a) && (this.engine.setFloat4(this._uniforms[UU], RU.r, RU.g, RU.b, RU.a) || (this._valueCache[UU] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var pU = gU(39248);
    const EU = new WeakMap,
      PU = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function TU(UU) {
      let RU = EU.get(UU);
      if (!RU) {
        if (!UU) return PU;
        RU = {
          _webGLVersion: UU.TEXTURE_BINDING_3D ? 2 : 1,
          _context: UU,
          parallelShaderCompile: UU.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, EU.set(UU, RU)
      }
      return RU
    }

    function qU(UU) {
      EU.delete(UU)
    }

    function KU(UU, RU, gU, tU, pU, EU) {
      const PU = TU(tU);
      EU || (EU = PU._createShaderProgramInjection ?? jU);
      return EU(UU, eU(RU, "vertex", tU, PU._contextWasLost), eU(gU, "fragment", tU, PU._contextWasLost), tU, pU, PU.validateShaderPrograms)
    }

    function cU(UU, RU, gU, tU, pU) {
      let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        PU = arguments.length > 6 ? arguments[6] : void 0;
      const qU = TU(pU);
      PU || (PU = qU._createShaderProgramInjection ?? jU);
      const KU = qU._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return PU(UU, QU(RU, "vertex", tU, KU, pU, qU._contextWasLost), QU(gU, "fragment", tU, KU, pU, qU._contextWasLost), pU, EU, qU.validateShaderPrograms)
    }

    function GU(UU, RU) {
      const gU = new tU,
        pU = TU(UU);
      return pU.parallelShaderCompile && !pU.disableParallelShaderCompile && (gU.isParallelCompiled = !0), gU.context = pU._context, gU
    }

    function jU(UU, RU, gU, tU) {
      let pU = arguments.length > 5 ? arguments[5] : void 0;
      const EU = tU.createProgram();
      if (UU.program = EU, !EU) throw new Error("Unable to create program");
      return tU.attachShader(EU, RU), tU.attachShader(EU, gU), tU.linkProgram(EU), UU.context = tU, UU.vertexShader = RU, UU.fragmentShader = gU, UU.isParallelCompiled || CU(UU, tU, pU), EU
    }

    function uU(UU, RU, gU) {
      const tU = UU;
      if (tU._isDisposed) return !1;
      const pU = TU(RU);
      return !!(pU && pU.parallelShaderCompile && pU.parallelShaderCompile.COMPLETION_STATUS_KHR && tU.program && RU.getProgramParameter(tU.program, pU.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (CU(tU, RU, gU), !0)
    }

    function CU(UU, RU, gU) {
      const tU = UU.context,
        pU = UU.vertexShader,
        EU = UU.fragmentShader,
        PU = UU.program;
      if (!tU.getProgramParameter(PU, tU.LINK_STATUS)) {
        if (!RU.getShaderParameter(pU, RU.COMPILE_STATUS)) {
          const gU = RU.getShaderInfoLog(pU);
          if (gU) throw UU.vertexCompilationError = gU, new Error("VERTEX SHADER " + gU)
        }
        if (!RU.getShaderParameter(EU, RU.COMPILE_STATUS)) {
          const gU = RU.getShaderInfoLog(EU);
          if (gU) throw UU.fragmentCompilationError = gU, new Error("FRAGMENT SHADER " + gU)
        }
        const gU = tU.getProgramInfoLog(PU);
        if (gU) throw UU.programLinkError = gU, new Error(gU)
      }
      if (gU) {
        tU.validateProgram(PU);
        if (!tU.getProgramParameter(PU, tU.VALIDATE_STATUS)) {
          const RU = tU.getProgramInfoLog(PU);
          if (RU) throw UU.programValidationError = RU, new Error(RU)
        }
      }
      tU.deleteShader(pU), tU.deleteShader(EU), UU.vertexShader = void 0, UU.fragmentShader = void 0, UU.onCompiled && (UU.onCompiled(), UU.onCompiled = void 0)
    }

    function hU(UU, RU, gU, tU, pU, EU, PU, qU, GU) {
      let jU = arguments.length > 10 ? arguments[10] : void 0,
        uU = arguments.length > 11 ? arguments[11] : void 0,
        CU = arguments.length > 12 ? arguments[12] : void 0;
      const hU = TU(UU.context);
      uU || (uU = hU.createRawShaderProgramInjection ?? KU), CU || (CU = hU.createShaderProgramInjection ?? cU);
      const QU = UU;
      QU.program = tU ? uU(QU, RU, gU, QU.context, GU) : CU(QU, RU, gU, qU, QU.context, GU), QU.program.__SPECTOR_rebuildProgram = PU, jU()
    }

    function QU(UU, RU, gU, tU, EU, PU) {
      return eU((0, pU.f)(UU, gU, tU), RU, EU, PU)
    }

    function eU(UU, RU, gU, tU) {
      const pU = gU.createShader("vertex" === RU ? gU.VERTEX_SHADER : gU.FRAGMENT_SHADER);
      if (!pU) {
        let UU, pU = gU.NO_ERROR;
        for (;
          (UU = gU.getError()) !== gU.NO_ERROR;) pU = UU;
        throw new Error(`Something went wrong while creating a gl ${RU} shader object. gl error=${pU}, gl isContextLost=${gU.isContextLost()}, _contextWasLost=${tU}`)
      }
      return gU.shaderSource(pU, UU), gU.compileShader(pU), pU
    }

    function WU(UU, RU) {
      RU.useProgram(UU)
    }

    function fU(UU, RU) {
      const gU = UU;
      if (!gU.isParallelCompiled) return void RU(UU);
      const tU = gU.onCompiled;
      gU.onCompiled = () => {
        tU?.(), RU(UU)
      }
    }
  },
  39215: (UU, RU, gU) => {
    gU.d(RU, {
      ThinEngine: () => mU
    });
    var tU = gU(39223),
      pU = gU(39240),
      EU = gU(39272),
      PU = gU(39292),
      TU = gU(38236),
      qU = gU(39231);
    class KU {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(UU, RU, gU, tU, pU) {
        if (pU.drawBuffersExtensionDisabled) {
          const RU = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          UU = UU.replace(RU, "")
        }
        return UU
      }
    }
    const cU = /(flat\s)?\s*varying\s*.*/;
    class GU {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(UU) {
        return UU.replace("attribute", "in")
      }
      varyingCheck(UU, RU) {
        return cU.test(UU)
      }
      varyingProcessor(UU, RU) {
        return UU.replace("varying", RU ? "in" : "out")
      }
      postProcessor(UU, RU, gU) {
        const tU = -1 !== UU.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (UU = (UU = UU.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), gU) {
          const gU = -1 !== UU.search(/layout *\(location *= *0\) *out/g),
            pU = -1 !== RU.indexOf("#define DUAL_SOURCE_BLENDING"),
            EU = pU ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          pU && (UU = "#extension GL_EXT_blend_func_extended : require\n" + UU), UU = (UU = (UU = (UU = (UU = (UU = (UU = UU.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (tU || gU ? "" : EU) + "void main(")
        } else {
          RU.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (UU = "invariant gl_Position;\n" + UU);
          if (-1 !== RU.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + UU
        }
        return UU
      }
    }
    var jU = gU(39299),
      uU = gU(39311),
      CU = gU(39316),
      hU = gU(39203),
      QU = gU(39248),
      eU = gU(39229),
      WU = gU(39324),
      fU = gU(39284);
    class xU {}
    class mU extends EU.d {
      get name() {
        return this._name
      }
      set name(UU) {
        this._name = UU
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return tU.d.ShadersRepository
      }
      static set ShadersRepository(UU) {
        tU.d.ShadersRepository = UU
      }
      get supportsUniformBuffers() {
        return this.MC > 1 && !this.disableUniformBuffers
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
      constructor(UU, RU, gU, tU) {
        if (gU = gU || {}, super(RU ?? gU.antialias, gU, tU), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !UU) return;
        let EU;
        if (UU.getContext) {
          if (EU = UU, void 0 === gU.preserveDrawingBuffer && (gU.preserveDrawingBuffer = !1), void 0 === gU.xrCompatible && (gU.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const UU = navigator.userAgent;
            for (const RU of mU.ExceptionList) {
              const tU = RU.key,
                pU = RU.targets;
              if (new RegExp(tU).test(UU)) {
                if (RU.capture && RU.captureConstraint) {
                  const gU = RU.capture,
                    tU = RU.captureConstraint,
                    pU = new RegExp(gU).exec(UU);
                  if (pU && pU.length > 0) {
                    if (parseInt(pU[pU.length - 1]) >= tU) continue
                  }
                }
                for (const UU of pU) switch (UU) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    gU.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, pU.A)(this._gl)
            } : (this._onContextLost = UU => {
              UU.preventDefault(), this._contextWasLost = !0, (0, pU.A)(this._gl), TU.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, EU.addEventListener("webglcontextrestored", this._onContextRestored, !1), gU.powerPreference = gU.powerPreference || "high-performance"), EU.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (gU.xrCompatible = !1), !gU.disableWebGL2Support) try {
            this._gl = EU.getContext("webgl2", gU) || EU.getContext("experimental-webgl2", gU), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (cU) {}
          if (!this._gl) {
            if (!EU) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = EU.getContext("webgl", gU) || EU.getContext("experimental-webgl", gU)
            } catch (cU) {
              throw new Error("WebGL not supported", {
                cause: cU
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = UU, EU = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const RU = this._gl.getContextAttributes();
          RU && (gU.stencil = RU.stencil)
        }
        this._sharedInit(EU), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== gU.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = gU.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let pU = 0; pU < this._caps.maxVertexAttribs; pU++) this._currentBufferPointers[pU] = new xU;
        this._shaderProcessor = this.MC > 1 ? new GU : new KU;
        const PU = `Babylon.js v${mU.Version}`;
        TU.e.Log(PU + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", PU);
        const qU = (0, pU.E)(this._gl);
        qU.validateShaderPrograms = this.validateShaderPrograms, qU.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(UU) {
        return null
      }
      areAllEffectsReady() {
        for (const UU in this._compiledEffects) {
          if (!this._compiledEffects[UU].isReady()) return !1
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
        const UU = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != UU && (this._glRenderer = this._gl.getParameter(UU.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(UU.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const RU = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!RU, this._alphaState = new fU.d(this._caps.blendParametersPerTarget), RU && (this._gl.blendEquationSeparateIndexed = RU.blendEquationSeparateiOES.bind(RU), this._gl.blendEquationIndexed = RU.blendEquationiOES.bind(RU), this._gl.blendFuncSeparateIndexed = RU.blendFuncSeparateiOES.bind(RU), this._gl.blendFuncIndexed = RU.blendFunciOES.bind(RU), this._gl.colorMaskIndexed = RU.colorMaskiOES.bind(RU), this._gl.disableIndexed = RU.disableiOES.bind(RU), this._gl.enableIndexed = RU.enableiOES.bind(RU)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const UU = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== UU) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = UU.drawBuffersWEBGL.bind(UU), this._caps.maxDrawBuffers = this._gl.getParameter(UU.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let RU = 0; RU < 16; RU++) this._gl["COLOR_ATTACHMENT" + RU + "_WEBGL"] = UU["COLOR_ATTACHMENT" + RU + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const UU = this._gl.getExtension("WEBGL_depth_texture");
          null != UU && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = UU.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const UU = this._gl.getExtension("OES_vertex_array_object");
          null != UU && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = UU.createVertexArrayOES.bind(UU), this._gl.bindVertexArray = UU.bindVertexArrayOES.bind(UU), this._gl.deleteVertexArray = UU.deleteVertexArrayOES.bind(UU))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const UU = this._gl.getExtension("ANGLE_instanced_arrays");
          null != UU ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = UU.drawArraysInstancedANGLE.bind(UU), this._gl.drawElementsInstanced = UU.drawElementsInstancedANGLE.bind(UU), this._gl.vertexAttribDivisor = UU.vertexAttribDivisorANGLE.bind(UU)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const UU = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            RU = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (UU && RU && (this._caps.highPrecisionShaderSupported = 0 !== UU.precision && 0 !== RU.precision, this._caps.shaderFloatPrecision = Math.min(UU.precision, RU.precision)), !this._shouldUseHighPrecisionShader) {
            const UU = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              RU = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            UU && RU && (this._caps.shaderFloatPrecision = Math.min(UU.precision, RU.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const UU = this._gl.getExtension("EXT_blend_minmax");
          null != UU && (this._caps.blendMinMax = !0, this._gl.MAX = UU.MAX_EXT, this._gl.MIN = UU.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const UU = this._gl.getExtension("EXT_sRGB");
            null != UU && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: UU.SRGB_EXT,
              SRGB8: UU.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: UU.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const UU = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== UU && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && UU)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let gU = 0; gU < this._maxSimultaneousTextures; gU++) this._nextFreeTextureSlots.push(gU);
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
      get MC() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const UU = this._workingCanvas.getContext("2d");
        UU && (this._workingContext = UU)
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
        const UU = this.getGlInfo();
        return UU && UU.renderer ? UU.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const EU = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = EU;
        let PU = 0;
        if (RU && UU) {
          let RU = !0;
          if (this._currentRenderTarget) {
            const gU = this._currentRenderTarget.texture?.format;
            if (void 0 !== gU && (0, WU.f)(gU)) {
              const gU = this._currentRenderTarget.texture?.type;
              void 0 !== gU && (0, WU.j)(gU) ? (mU._TempClearColorUint32[0] = 255 * UU.r, mU._TempClearColorUint32[1] = 255 * UU.g, mU._TempClearColorUint32[2] = 255 * UU.b, mU._TempClearColorUint32[3] = 255 * UU.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, mU._TempClearColorUint32), RU = !1) : (mU._TempClearColorInt32[0] = 255 * UU.r, mU._TempClearColorInt32[1] = 255 * UU.g, mU._TempClearColorInt32[2] = 255 * UU.b, mU._TempClearColorInt32[3] = 255 * UU.a, this._gl.clearBufferiv(this._gl.COLOR, 0, mU._TempClearColorInt32), RU = !1)
            }
          }
          RU && (this._gl.clearColor(UU.r, UU.g, UU.b, void 0 !== UU.a ? UU.a : 1), PU |= this._gl.COLOR_BUFFER_BIT)
        }
        gU && (this.VgU ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), PU |= this._gl.DEPTH_BUFFER_BIT), tU && (this._gl.clearStencil(pU), PU |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(PU)
      }
      _clearColorAttachment(UU, RU, gU, tU) {
        if ((0, WU.f)(gU)) {
          const gU = (0, WU.j)(tU),
            pU = gU ? mU._TempClearColorUint32 : mU._TempClearColorInt32;
          return pU[0] = RU.r, pU[1] = RU.g, pU[2] = RU.b, pU[3] = RU.a, void(gU ? this._gl.clearBufferuiv(this._gl.COLOR, UU, pU) : this._gl.clearBufferiv(this._gl.COLOR, UU, pU))
        }
        mU._TempClearColorFloat32[0] = RU.r, mU._TempClearColorFloat32[1] = RU.g, mU._TempClearColorFloat32[2] = RU.b, mU._TempClearColorFloat32[3] = RU.a, this._gl.clearBufferfv(this._gl.COLOR, UU, mU._TempClearColorFloat32)
      }
      _viewport(UU, RU, gU, tU) {
        UU === this._viewportCached.x && RU === this._viewportCached.y && gU === this._viewportCached.z && tU === this._viewportCached.w || (this._viewportCached.x = UU, this._viewportCached.y = RU, this._viewportCached.z = gU, this._viewportCached.w = tU, this._gl.viewport(UU, RU, gU, tU))
      }
      Om() {
        super.Om(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = arguments.length > 3 ? arguments[3] : void 0,
          pU = arguments.length > 4 ? arguments[4] : void 0,
          EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          PU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const qU = UU;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = UU, this._integerMRTAttachmentsMask = !UU.isMulti && UU.texture && (0, WU.f)(UU.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(qU._framebuffer);
        const KU = this._gl;
        UU.isMulti || (UU.is2DArray || UU.is3D ? (KU.framebufferTextureLayer(KU.FRAMEBUFFER, KU.COLOR_ATTACHMENT0, UU.texture._hardwareTexture?.underlyingResource, EU, PU), qU._currentLOD = EU) : UU.isCube ? KU.framebufferTexture2D(KU.FRAMEBUFFER, KU.COLOR_ATTACHMENT0, KU.TEXTURE_CUBE_MAP_POSITIVE_X + RU, UU.texture._hardwareTexture?.underlyingResource, EU) : qU._currentLOD !== EU && (KU.framebufferTexture2D(KU.FRAMEBUFFER, KU.COLOR_ATTACHMENT0, KU.TEXTURE_2D, UU.texture._hardwareTexture?.underlyingResource, EU), qU._currentLOD = EU));
        const cU = UU._depthStencilTexture;
        if (cU) {
          UU.is3D && (UU.texture.width === cU.width && UU.texture.height === cU.height && UU.texture.depth === cU.depth || TU.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const gU = UU._depthStencilTextureWithStencil ? KU.DEPTH_STENCIL_ATTACHMENT : KU.DEPTH_ATTACHMENT;
          UU.is2DArray || UU.is3D ? KU.framebufferTextureLayer(KU.FRAMEBUFFER, gU, cU._hardwareTexture?.underlyingResource, EU, PU) : UU.isCube ? KU.framebufferTexture2D(KU.FRAMEBUFFER, gU, KU.TEXTURE_CUBE_MAP_POSITIVE_X + RU, cU._hardwareTexture?.underlyingResource, EU) : KU.framebufferTexture2D(KU.FRAMEBUFFER, gU, KU.TEXTURE_2D, cU._hardwareTexture?.underlyingResource, EU)
        }
        qU._MSAAFramebuffer && this._bindUnboundFramebuffer(qU._MSAAFramebuffer), this._cachedViewport && !pU ? this.setViewport(this._cachedViewport, gU, tU) : (gU || (gU = UU.width, EU && (gU /= Math.pow(2, EU))), tU || (tU = UU.height, EU && (tU /= Math.pow(2, EU))), this._viewport(0, 0, gU, tU)), this.wipeCaches()
      }
      setStateCullFaceType(UU, RU) {
        const gU = this.cullBackFaces ?? UU ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== gU || RU) && (this._depthCullingState.cullFace = gU)
      }
      setState(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          pU = arguments.length > 4 ? arguments[4] : void 0,
          EU = arguments.length > 5 ? arguments[5] : void 0,
          PU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== UU || gU) && (this._depthCullingState.cull = UU), this.setStateCullFaceType(pU, gU), this.setZOffset(RU), this.setZOffsetUnits(PU);
        const TU = tU ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== TU || gU) && (this._depthCullingState.frontFace = TU), this._stencilStateComposer.stencilMaterial = EU
      }
      _resolveAndGenerateMipMapsFramebuffer(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        UU.disableAutomaticMSAAResolve || (UU.isMulti ? this.resolveMultiFramebuffer(UU) : this.resolveFramebuffer(UU)), RU || (UU.isMulti ? this.generateMipMapsMultiFramebuffer(UU) : this.generateMipMapsFramebuffer(UU))
      }
      _bindUnboundFramebuffer(UU) {
        this._currentFramebuffer !== UU && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, UU), this._currentFramebuffer = UU)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(UU) {
        const RU = this._getTextureTarget(UU);
        this._bindTextureDirectly(RU, UU, !0), this._gl.generateMipmap(RU), this._bindTextureDirectly(RU, null)
      }
      unBindFramebuffer(UU, RU, gU) {
        const tU = UU;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(UU, RU), gU && (tU._MSAAFramebuffer && this._bindUnboundFramebuffer(tU._framebuffer), gU()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(UU) {
        UU.isMulti || !UU.texture?.generateMipMaps || UU.isCube || this.generateMipmaps(UU.texture)
      }
      resolveFramebuffer(UU) {
        const RU = UU,
          gU = this._gl;
        if (!RU._MSAAFramebuffer || RU.isMulti) return;
        let tU = RU.resolveMSAAColors ? gU.COLOR_BUFFER_BIT : 0;
        tU |= RU._generateDepthBuffer && RU.resolveMSAADepth ? gU.DEPTH_BUFFER_BIT : 0, tU |= RU._generateStencilBuffer && RU.resolveMSAAStencil ? gU.STENCIL_BUFFER_BIT : 0, gU.bindFramebuffer(gU.READ_FRAMEBUFFER, RU._MSAAFramebuffer), gU.bindFramebuffer(gU.DRAW_FRAMEBUFFER, RU._framebuffer), gU.blitFramebuffer(0, 0, UU.width, UU.height, 0, 0, UU.width, UU.height, tU, gU.NEAREST)
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
      createVertexBuffer(UU, RU, gU) {
        return this._createVertexBuffer(UU, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(UU, RU) {
        const gU = this._gl.createBuffer();
        if (!gU) throw new Error("Unable to create vertex buffer");
        const tU = new jU.c(gU);
        return this.bindArrayBuffer(tU), "number" !== typeof UU ? UU instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(UU), RU), tU.hG = 4 * UU.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, UU, RU), tU.hG = UU.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(UU), RU), tU.hG = UU), this._resetVertexBufferBinding(), tU.references = 1, tU
      }
      createDynamicVertexBuffer(UU, RU) {
        return this._createVertexBuffer(UU, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(UU, RU, gU) {
        const tU = this._gl.createBuffer(),
          pU = new jU.c(tU);
        if (!tU) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(pU);
        const EU = this._normalizeIndexData(UU);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, EU, RU ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), pU.references = 1, pU.is32Bits = 4 === EU.BYTES_PER_ELEMENT, pU
      }
      _normalizeIndexData(UU) {
        if (2 === UU.BYTES_PER_ELEMENT) return UU;
        if (this._caps.uintIndices) {
          if (UU instanceof Uint32Array) return UU;
          for (let RU = 0; RU < UU.length; RU++)
            if (UU[RU] >= 65535) return new Uint32Array(UU);
          return new Uint16Array(UU)
        }
        return new Uint16Array(UU)
      }
      bindArrayBuffer(UU) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(UU, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(UU, RU, gU) {
        const tU = UU.program,
          pU = this._gl.getUniformBlockIndex(tU, RU);
        this._gl.uniformBlockBinding(tU, pU, gU)
      }
      bindIndexBuffer(UU) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(UU, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(UU, RU) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[RU] !== UU) && (this._gl.bindBuffer(RU, UU ? UU.underlyingResource : null), this._currentBoundBuffer[RU] = UU)
      }
      updateArrayBuffer(UU) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, UU)
      }
      _vertexAttribPointer(UU, RU, gU, tU, pU, EU, PU) {
        const TU = this._currentBufferPointers[RU];
        if (!TU) return;
        let qU = !1;
        TU.active ? (TU.buffer !== UU && (TU.buffer = UU, qU = !0), TU.size !== gU && (TU.size = gU, qU = !0), TU.type !== tU && (TU.type = tU, qU = !0), TU.normalized !== pU && (TU.normalized = pU, qU = !0), TU.stride !== EU && (TU.stride = EU, qU = !0), TU.offset !== PU && (TU.offset = PU, qU = !0)) : (qU = !0, TU.active = !0, TU.index = RU, TU.size = gU, TU.type = tU, TU.normalized = pU, TU.stride = EU, TU.offset = PU, TU.buffer = UU), (qU || this._vaoRecordInProgress) && (this.bindArrayBuffer(UU), tU === this._gl.UNSIGNED_INT || tU === this._gl.INT ? this._gl.vertexAttribIPointer(RU, gU, tU, EU, PU) : this._gl.vertexAttribPointer(RU, gU, tU, pU, EU, PU))
      }
      _bindIndexBufferWithCache(UU) {
        null != UU && this._cachedIndexBuffer !== UU && (this._cachedIndexBuffer = UU, this.bindIndexBuffer(UU), this._uintIndicesCurrentlySet = UU.is32Bits)
      }
      _bindVertexBuffersAttributes(UU, RU, gU) {
        const tU = RU.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let pU = 0; pU < tU.length; pU++) {
          const EU = RU.getAttributeLocation(pU);
          if (EU >= 0) {
            const RU = tU[pU];
            let PU = null;
            if (gU && (PU = gU[RU]), PU || (PU = UU[RU]), !PU) continue;
            this._gl.enableVertexAttribArray(EU), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[EU] = !0);
            const TU = PU.getBuffer();
            TU && (this._vertexAttribPointer(TU, EU, PU.getSize(), PU.type, PU.normalized, PU.byteStride, PU.byteOffset), PU.getIsInstanced() && (this._gl.vertexAttribDivisor(EU, PU.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(EU), this._currentInstanceBuffers.push(TU))))
          }
        }
      }
      recordVertexArrayObject(UU, RU, gU, tU) {
        const pU = this._gl.createVertexArray();
        if (!pU) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(pU), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(UU, gU, tU), this.bindIndexBuffer(RU), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), pU
      }
      bindVertexArrayObject(UU, RU) {
        this._cachedVertexArrayObject !== UU && (this._cachedVertexArrayObject = UU, this._gl.bindVertexArray(UU), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != RU && RU.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(UU, RU, gU, tU, pU) {
        if (this._cachedVertexBuffers !== UU || this._cachedEffectForVertexBuffers !== pU) {
          this._cachedVertexBuffers = UU, this._cachedEffectForVertexBuffers = pU;
          const RU = pU.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let EU = 0;
          for (let PU = 0; PU < RU; PU++)
            if (PU < gU.length) {
              const RU = pU.getAttributeLocation(PU);
              RU >= 0 && (this._gl.enableVertexAttribArray(RU), this._vertexAttribArraysEnabled[RU] = !0, this._vertexAttribPointer(UU, RU, gU[PU], this._gl.FLOAT, !1, tU, EU)), EU += 4 * gU[PU]
            }
        }
        this._bindIndexBufferWithCache(RU)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(UU, RU, gU, tU) {
        this._cachedVertexBuffers === UU && this._cachedEffectForVertexBuffers === gU || (this._cachedVertexBuffers = UU, this._cachedEffectForVertexBuffers = gU, this._bindVertexBuffersAttributes(UU, gU, tU)), this._bindIndexBufferWithCache(RU)
      }
      unbindInstanceAttributes() {
        let UU;
        for (let RU = 0, gU = this._currentInstanceLocations.length; RU < gU; RU++) {
          const gU = this._currentInstanceBuffers[RU];
          UU != gU && gU.references && (UU = gU, this.bindArrayBuffer(gU));
          const tU = this._currentInstanceLocations[RU];
          this._gl.vertexAttribDivisor(tU, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(UU) {
        this._gl.deleteVertexArray(UU)
      }
      _releaseBuffer(UU) {
        return UU.references--, 0 === UU.references && (this._deleteBuffer(UU), !0)
      }
      _deleteBuffer(UU) {
        this._gl.deleteBuffer(UU.underlyingResource)
      }
      updateAndBindInstancesBuffer(UU, RU, gU) {
        if (this.bindArrayBuffer(UU), RU && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, RU), void 0 !== gU[0].index) this.bindInstancesBuffer(UU, gU, !0);
        else
          for (let tU = 0; tU < 4; tU++) {
            const RU = gU[tU];
            this._vertexAttribArraysEnabled[RU] || (this._gl.enableVertexAttribArray(RU), this._vertexAttribArraysEnabled[RU] = !0), this._vertexAttribPointer(UU, RU, 4, this._gl.FLOAT, !1, 64, 16 * tU), this._gl.vertexAttribDivisor(RU, 1), this._currentInstanceLocations.push(RU), this._currentInstanceBuffers.push(UU)
          }
      }
      bindInstancesBuffer(UU, RU) {
        let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(UU);
        let tU = 0;
        if (gU)
          for (let pU = 0; pU < RU.length; pU++) {
            tU += 4 * RU[pU].attributeSize
          }
        for (let pU = 0; pU < RU.length; pU++) {
          const gU = RU[pU];
          void 0 === gU.index && (gU.index = this._currentEffect.getAttributeLocationByName(gU.attributeName)), gU.index < 0 || (this._vertexAttribArraysEnabled[gU.index] || (this._gl.enableVertexAttribArray(gU.index), this._vertexAttribArraysEnabled[gU.index] = !0), this._vertexAttribPointer(UU, gU.index, gU.attributeSize, gU.attributeType || this._gl.FLOAT, gU.normalized || !1, tU, gU.offset), this._gl.vertexAttribDivisor(gU.index, void 0 === gU.divisor ? 1 : gU.divisor), this._currentInstanceLocations.push(gU.index), this._currentInstanceBuffers.push(UU))
        }
      }
      disableInstanceAttributeByName(UU) {
        if (!this._currentEffect) return;
        const RU = this._currentEffect.getAttributeLocationByName(UU);
        this.disableInstanceAttribute(RU)
      }
      disableInstanceAttribute(UU) {
        let RU, gU = !1;
        for (; - 1 !== (RU = this._currentInstanceLocations.indexOf(UU));) this._currentInstanceLocations.splice(RU, 1), this._currentInstanceBuffers.splice(RU, 1), gU = !0;
        gU && (this._gl.vertexAttribDivisor(UU, 0), this.disableAttributeByIndex(UU))
      }
      disableAttributeByIndex(UU) {
        this._gl.disableVertexAttribArray(UU), this._vertexAttribArraysEnabled[UU] = !1, this._currentBufferPointers[UU].active = !1
      }
      draw(UU, RU, gU, tU) {
        this.drawElementsType(UU ? 0 : 1, RU, gU, tU)
      }
      drawPointClouds(UU, RU, gU) {
        this.drawArraysType(2, UU, RU, gU)
      }
      drawUnIndexed(UU, RU, gU, tU) {
        this.drawArraysType(UU ? 0 : 1, RU, gU, tU)
      }
      drawElementsType(UU, RU, gU, tU) {
        this.applyStates(), this._reportDrawCall();
        const pU = this._drawMode(UU),
          EU = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          PU = this._uintIndicesCurrentlySet ? 4 : 2;
        tU ? this._gl.drawElementsInstanced(pU, gU, EU, RU * PU, tU) : this._gl.drawElements(pU, gU, EU, RU * PU)
      }
      drawArraysType(UU, RU, gU, tU) {
        this.applyStates(), this._reportDrawCall();
        const pU = this._drawMode(UU);
        tU ? this._gl.drawArraysInstanced(pU, RU, gU, tU) : this._gl.drawArrays(pU, RU, gU)
      }
      _drawMode(UU) {
        switch (UU) {
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
      _releaseEffect(UU) {
        this._compiledEffects[UU._key] && delete this._compiledEffects[UU._key];
        const RU = UU.getPipelineContext();
        RU && this._deletePipelineContext(RU)
      }
      _deletePipelineContext(UU) {
        const RU = UU;
        RU && RU.program && (RU.program.__SPECTOR_rebuildProgram = null, (0, eU.m)(RU), this._gl && (this._currentProgram === RU.program && this._setProgram(null), this._gl.deleteProgram(RU.program)))
      }
      _getGlobalDefines(UU) {
        return (0, QU.j)(UU, this.isNDCHalfZRange, this.VgU, this.useExactSrgbConversions)
      }
      createEffect(UU, RU, gU, EU, PU, TU, qU, KU, cU) {
        let GU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          jU = arguments.length > 10 ? arguments[10] : void 0;
        const uU = "string" === typeof UU ? UU : UU.vertexToken || UU.vertexSource || UU.vertexElement || UU.vertex,
          CU = "string" === typeof UU ? UU : UU.fragmentToken || UU.fragmentSource || UU.fragmentElement || UU.fragment,
          hU = this._getGlobalDefines(),
          QU = void 0 !== RU.attributes;
        let eU = PU ?? RU.defines ?? "";
        hU && (eU += hU);
        const WU = uU + "+" + CU + "@" + eU;
        if (this._compiledEffects[WU]) {
          const UU = this._compiledEffects[WU];
          return qU && UU.isReady() && qU(UU), UU._refCount++, UU
        }
        this._gl && (0, pU.E)(this._gl);
        const fU = new tU.d(UU, RU, QU ? this : gU, EU, this, PU, TU, qU, KU, cU, WU, RU.shaderLanguage ?? GU, RU.extraInitializationsAsync ?? jU);
        return this._compiledEffects[WU] = fU, fU
      }
      _getShaderSource(UU) {
        return this._gl.getShaderSource(UU)
      }
      createRawShaderProgram(UU, RU, gU, tU) {
        let EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const PU = (0, pU.E)(this._gl);
        return PU._contextWasLost = this._contextWasLost, PU.validateShaderPrograms = this.validateShaderPrograms, (0, pU.u)(UU, RU, gU, tU || this._gl, EU)
      }
      createShaderProgram(UU, RU, gU, tU, EU) {
        let PU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const TU = (0, pU.E)(this._gl);
        return TU._contextWasLost = this._contextWasLost, TU.validateShaderPrograms = this.validateShaderPrograms, (0, pU.x)(UU, RU, gU, tU, EU || this._gl, PU)
      }
      inlineShaderCode(UU) {
        return UU
      }
      createPipelineContext(UU) {
        if (this._gl) {
          (0, pU.E)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const RU = (0, pU.r)(this._gl, UU);
        return RU.engine = this, RU
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(UU) {
        return (0, pU.i)(UU, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(UU, RU, gU, tU, EU, PU, TU, qU, KU, cU, GU) {
        const jU = (0, pU.E)(this._gl);
        return jU._contextWasLost = this._contextWasLost, jU.validateShaderPrograms = this.validateShaderPrograms, jU._createShaderProgramInjection = this._createShaderProgram.bind(this), jU.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), jU.createShaderProgramInjection = this.createShaderProgram.bind(this), jU.loadFileInjection = this._loadFile.bind(this), (0, pU.n)(UU, RU, gU, tU, EU, PU, TU, qU, KU, cU, GU)
      }
      _createShaderProgram(UU, RU, gU, tU) {
        let EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, pU.e)(UU, RU, gU, tU, EU)
      }
      _isRenderingStateCompiled(UU) {
        return !this._isDisposed && (0, pU.j)(UU, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(UU, RU) {
        (0, pU.h)(UU, RU)
      }
      getUniforms(UU, RU) {
        const gU = new Array,
          tU = UU;
        for (let pU = 0; pU < RU.length; pU++) gU.push(this._gl.getUniformLocation(tU.program, RU[pU]));
        return gU
      }
      getAttributes(UU, RU) {
        const gU = [],
          tU = UU;
        for (let EU = 0; EU < RU.length; EU++) try {
          gU.push(this._gl.getAttribLocation(tU.program, RU[EU]))
        } catch (pU) {
          gU.push(-1)
        }
        return gU
      }
      enableEffect(UU) {
        (UU = null !== UU && (0, PU.c)(UU) ? UU.effect : UU) && UU !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(UU), this._currentEffect = UU, UU.onBind && UU.onBind(UU), UU._onBindObservable && UU._onBindObservable.notifyObservers(UU))
      }
      setInt(UU, RU) {
        return !!UU && (this._gl.uniform1i(UU, RU), !0)
      }
      setInt2(UU, RU, gU) {
        return !!UU && (this._gl.uniform2i(UU, RU, gU), !0)
      }
      setInt3(UU, RU, gU, tU) {
        return !!UU && (this._gl.uniform3i(UU, RU, gU, tU), !0)
      }
      setInt4(UU, RU, gU, tU, pU) {
        return !!UU && (this._gl.uniform4i(UU, RU, gU, tU, pU), !0)
      }
      setIntArray(UU, RU) {
        return !!UU && (this._gl.uniform1iv(UU, RU), !0)
      }
      setIntArray2(UU, RU) {
        return !(!UU || RU.length % 2 !== 0) && (this._gl.uniform2iv(UU, RU), !0)
      }
      setIntArray3(UU, RU) {
        return !(!UU || RU.length % 3 !== 0) && (this._gl.uniform3iv(UU, RU), !0)
      }
      setIntArray4(UU, RU) {
        return !(!UU || RU.length % 4 !== 0) && (this._gl.uniform4iv(UU, RU), !0)
      }
      setUInt(UU, RU) {
        return !!UU && (this._gl.uniform1ui(UU, RU), !0)
      }
      setUInt2(UU, RU, gU) {
        return !!UU && (this._gl.uniform2ui(UU, RU, gU), !0)
      }
      setUInt3(UU, RU, gU, tU) {
        return !!UU && (this._gl.uniform3ui(UU, RU, gU, tU), !0)
      }
      setUInt4(UU, RU, gU, tU, pU) {
        return !!UU && (this._gl.uniform4ui(UU, RU, gU, tU, pU), !0)
      }
      setUIntArray(UU, RU) {
        return !!UU && (this._gl.uniform1uiv(UU, RU), !0)
      }
      setUIntArray2(UU, RU) {
        return !(!UU || RU.length % 2 !== 0) && (this._gl.uniform2uiv(UU, RU), !0)
      }
      setUIntArray3(UU, RU) {
        return !(!UU || RU.length % 3 !== 0) && (this._gl.uniform3uiv(UU, RU), !0)
      }
      setUIntArray4(UU, RU) {
        return !(!UU || RU.length % 4 !== 0) && (this._gl.uniform4uiv(UU, RU), !0)
      }
      setArray(UU, RU) {
        return !!UU && (!(RU.length < 1) && (this._gl.uniform1fv(UU, RU), !0))
      }
      setArray2(UU, RU) {
        return !(!UU || RU.length % 2 !== 0) && (this._gl.uniform2fv(UU, RU), !0)
      }
      setArray3(UU, RU) {
        return !(!UU || RU.length % 3 !== 0) && (this._gl.uniform3fv(UU, RU), !0)
      }
      setArray4(UU, RU) {
        return !(!UU || RU.length % 4 !== 0) && (this._gl.uniform4fv(UU, RU), !0)
      }
      setMatrices(UU, RU) {
        return !!UU && (this._gl.uniformMatrix4fv(UU, !1, RU), !0)
      }
      setMatrix3x3(UU, RU) {
        return !!UU && (this._gl.uniformMatrix3fv(UU, !1, RU), !0)
      }
      setMatrix2x2(UU, RU) {
        return !!UU && (this._gl.uniformMatrix2fv(UU, !1, RU), !0)
      }
      setFloat(UU, RU) {
        return !!UU && (this._gl.uniform1f(UU, RU), !0)
      }
      setFloat2(UU, RU, gU) {
        return !!UU && (this._gl.uniform2f(UU, RU, gU), !0)
      }
      setFloat3(UU, RU, gU, tU) {
        return !!UU && (this._gl.uniform3f(UU, RU, gU, tU), !0)
      }
      setFloat4(UU, RU, gU, tU, pU) {
        return !!UU && (this._gl.uniform4f(UU, RU, gU, tU, pU), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const UU = this._colorWrite;
          this._gl.colorMask(UU, UU, UU, UU)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(UU) {
        this.preventCacheWipeBetweenFrames && !UU || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), UU && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(UU, RU) {
        const gU = this._gl;
        let tU = gU.NEAREST,
          pU = gU.NEAREST,
          EU = !1;
        switch (UU) {
          case 11:
            tU = gU.LINEAR, pU = RU ? gU.LINEAR_MIPMAP_NEAREST : gU.LINEAR;
            break;
          case 3:
            tU = gU.LINEAR, EU = !0, pU = RU ? gU.LINEAR_MIPMAP_LINEAR : gU.LINEAR;
            break;
          case 8:
            EU = !0, tU = gU.NEAREST, pU = RU ? gU.NEAREST_MIPMAP_LINEAR : gU.NEAREST;
            break;
          case 4:
            tU = gU.NEAREST, pU = RU ? gU.NEAREST_MIPMAP_NEAREST : gU.NEAREST;
            break;
          case 5:
            tU = gU.NEAREST, pU = RU ? gU.LINEAR_MIPMAP_NEAREST : gU.LINEAR;
            break;
          case 6:
            EU = !0, tU = gU.NEAREST, pU = RU ? gU.LINEAR_MIPMAP_LINEAR : gU.LINEAR;
            break;
          case 7:
            tU = gU.NEAREST, pU = gU.LINEAR;
            break;
          case 1:
            tU = gU.NEAREST, pU = gU.NEAREST;
            break;
          case 9:
            tU = gU.LINEAR, pU = RU ? gU.NEAREST_MIPMAP_NEAREST : gU.NEAREST;
            break;
          case 10:
            EU = !0, tU = gU.LINEAR, pU = RU ? gU.NEAREST_MIPMAP_LINEAR : gU.NEAREST;
            break;
          case 2:
            tU = gU.LINEAR, pU = gU.LINEAR;
            break;
          case 12:
            tU = gU.LINEAR, pU = gU.NEAREST
        }
        return {
          min: pU,
          mag: tU,
          hasMipMaps: EU
        }
      }
      _createTexture() {
        const UU = this._gl.createTexture();
        if (!UU) throw new Error("Unable to create texture");
        return UU
      }
      _createHardwareTexture() {
        return new CU.b(this._createTexture(), this._gl)
      }
      _createInternalTexture(UU, RU) {
        let gU, tU, pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          EU = !1,
          PU = 0,
          qU = 3,
          KU = 5,
          cU = !1,
          GU = 1,
          jU = !1,
          uU = 0,
          CU = !1;
        void 0 !== RU && "object" === typeof RU ? (gU = !!RU.generateMipMaps, EU = !!RU.createMipMaps, PU = void 0 === RU.type ? 0 : RU.type, qU = void 0 === RU.samplingMode ? 3 : RU.samplingMode, KU = void 0 === RU.format ? 5 : RU.format, cU = void 0 !== RU.useSRGBBuffer && RU.useSRGBBuffer, GU = RU.samples ?? 1, tU = RU.label, jU = !!RU.createMSAATexture, uU = RU.comparisonFunction || 0, CU = !!RU.isCube) : gU = !!RU, cU && (cU = this._caps.supportSRGBBuffers && (this.MC > 1 || this.isWebGPU)), (1 !== PU || this._caps.textureFloatLinearFiltering) && (2 !== PU || this._caps.textureHalfFloatLinearFiltering) || (qU = 1), 1 !== PU || this._caps.textureFloat || (PU = 0, TU.e.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const QU = (0, WU.d)(KU),
          eU = (0, WU.b)(KU),
          fU = this._gl,
          xU = new hU.d(this, pU),
          mU = UU.width || UU,
          IU = UU.height || UU,
          JU = UU.depth || 0,
          wU = UU.layers || 0,
          nU = this._getSamplingParameters(qU, (gU || EU) && !QU),
          bU = 0 !== wU ? fU.TEXTURE_2D_ARRAY : 0 !== JU ? fU.TEXTURE_3D : CU ? fU.TEXTURE_CUBE_MAP : fU.TEXTURE_2D,
          oU = QU ? this._getInternalFormatFromDepthTextureFormat(KU, !0, eU) : this._getRGBABufferInternalSizedFormat(PU, KU, cU),
          ZU = QU ? eU ? fU.DEPTH_STENCIL : fU.DEPTH_COMPONENT : this._getInternalFormat(KU),
          aU = QU ? this._getWebGLTextureTypeFromDepthTextureFormat(KU) : this._getWebGLTextureType(PU);
        if (this._bindTextureDirectly(bU, xU), 0 !== wU) xU.is2DArray = !0, fU.texImage3D(bU, 0, oU, mU, IU, wU, 0, ZU, aU, null);
        else if (0 !== JU) xU.is3D = !0, fU.texImage3D(bU, 0, oU, mU, IU, JU, 0, ZU, aU, null);
        else if (CU) {
          xU.isCube = !0;
          for (let UU = 0; UU < 6; UU++) fU.texImage2D(fU.TEXTURE_CUBE_MAP_POSITIVE_X + UU, 0, oU, mU, IU, 0, ZU, aU, null)
        } else fU.texImage2D(bU, 0, oU, mU, IU, 0, ZU, aU, null);
        if (fU.texParameteri(bU, fU.TEXTURE_MAG_FILTER, nU.mag), fU.texParameteri(bU, fU.TEXTURE_MIN_FILTER, nU.min), fU.texParameteri(bU, fU.TEXTURE_WRAP_S, fU.CLAMP_TO_EDGE), fU.texParameteri(bU, fU.TEXTURE_WRAP_T, fU.CLAMP_TO_EDGE), QU && this.MC > 1 && (0 === uU ? (fU.texParameteri(bU, fU.TEXTURE_COMPARE_FUNC, 515), fU.texParameteri(bU, fU.TEXTURE_COMPARE_MODE, fU.NONE)) : (fU.texParameteri(bU, fU.TEXTURE_COMPARE_FUNC, uU), fU.texParameteri(bU, fU.TEXTURE_COMPARE_MODE, fU.COMPARE_REF_TO_TEXTURE))), (gU || EU) && this._gl.generateMipmap(bU), this._bindTextureDirectly(bU, null), xU._useSRGBBuffer = cU, xU.baseWidth = mU, xU.baseHeight = IU, xU.width = mU, xU.height = IU, xU.depth = wU || JU, xU.isReady = !0, xU.samples = GU, xU.generateMipMaps = gU, xU.samplingMode = qU, xU.type = PU, xU.format = KU, xU.label = tU, xU.comparisonFunction = uU, this._internalTexturesCache.push(xU), jU) {
          let UU;
          if (UU = (0, WU.d)(xU.format) ? this._setupFramebufferDepthAttachments((0, WU.b)(xU.format), 19 !== xU.format, xU.width, xU.height, GU, xU.format, !0) : this._createRenderBuffer(xU.width, xU.height, GU, -1, this._getRGBABufferInternalSizedFormat(xU.type, xU.format, xU._useSRGBBuffer), -1), !UU) throw new Error("Unable to create render buffer");
          xU._autoMSAAManagement = !0;
          let RU = xU._hardwareTexture;
          RU || (RU = xU._hardwareTexture = this._createHardwareTexture()), RU.addMSAARenderBuffer(UU)
        }
        return xU
      }
      _getUseSRGBBuffer(UU, RU) {
        return UU && this._caps.supportSRGBBuffers && (this.MC > 1 || RU)
      }
      createTexture(UU, RU, gU, tU) {
        var pU = this;
        let EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          PU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          TU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          qU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          KU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          cU = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          GU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          jU = arguments.length > 11 ? arguments[11] : void 0,
          uU = arguments.length > 12 ? arguments[12] : void 0,
          CU = arguments.length > 13 ? arguments[13] : void 0,
          QU = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(UU, RU, gU, tU, EU, PU, TU, (function() {
          for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
          return pU._prepareWebGLTexture(...RU, cU)
        }), ((UU, RU, gU, pU, EU, PU) => {
          const TU = this._gl,
            qU = gU.width === UU && gU.height === RU;
          EU._creationFlags = CU ?? 0;
          const KU = this._getTexImageParametersForCreateTexture(EU.format, EU._useSRGBBuffer);
          if (qU) return TU.texImage2D(TU.TEXTURE_2D, 0, KU.internalFormat, KU.format, KU.type, gU), !1;
          const cU = this._caps.maxTextureSize;
          if (gU.width > cU || gU.height > cU || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = UU, this._workingCanvas.height = RU, this._workingContext.drawImage(gU, 0, 0, gU.width, gU.height, 0, 0, UU, RU), TU.texImage2D(TU.TEXTURE_2D, 0, KU.internalFormat, KU.format, KU.type, this._workingCanvas), EU.width = UU, EU.height = RU, !1);
          {
            const UU = new hU.d(this, 2);
            this._bindTextureDirectly(TU.TEXTURE_2D, UU, !0), TU.texImage2D(TU.TEXTURE_2D, 0, KU.internalFormat, KU.format, KU.type, gU), this._rescaleTexture(UU, EU, tU, KU.format, (() => {
              this._releaseTexture(UU), this._bindTextureDirectly(TU.TEXTURE_2D, EU, !0), PU()
            }))
          }
          return !0
        }), qU, KU, cU, GU, jU, uU, QU)
      }
      _getTexImageParametersForCreateTexture(UU, RU) {
        let gU, tU;
        return 1 === this.MC ? (gU = this._getInternalFormat(UU, RU), tU = gU) : (gU = this._getInternalFormat(UU, !1), tU = this._getRGBABufferInternalSizedFormat(0, UU, RU)), {
          internalFormat: tU,
          format: gU,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(UU, RU, gU, tU, pU) {}
      _unpackFlipY(UU) {
        this._unpackFlipYCached !== UU && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, UU ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = UU))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(UU) {
        return UU.isCube ? this._gl.TEXTURE_CUBE_MAP : UU.is3D ? this._gl.TEXTURE_3D : UU.is2DArray || UU.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tU = this._getTextureTarget(RU),
          pU = this._getSamplingParameters(UU, RU.useMipMaps || gU);
        this._setTextureParameterInteger(tU, this._gl.TEXTURE_MAG_FILTER, pU.mag, RU), this._setTextureParameterInteger(tU, this._gl.TEXTURE_MIN_FILTER, pU.min), gU && pU.hasMipMaps && (RU.generateMipMaps = !0, this._gl.generateMipmap(tU)), this._bindTextureDirectly(tU, null), RU.samplingMode = UU
      }
      updateTextureDimensions(UU, RU, gU) {}
      updateTextureWrappingMode(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const pU = this._getTextureTarget(UU);
        null !== RU && (this._setTextureParameterInteger(pU, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(RU), UU), UU._cachedWrapU = RU), null !== gU && (this._setTextureParameterInteger(pU, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(gU), UU), UU._cachedWrapV = gU), (UU.is2DArray || UU.is3D) && null !== tU && (this._setTextureParameterInteger(pU, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(tU), UU), UU._cachedWrapR = tU), this._bindTextureDirectly(pU, null)
      }
      _uploadCompressedDataToTextureDirectly(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          PU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const TU = this._gl;
        let qU = TU.TEXTURE_2D;
        if (UU.isCube && (qU = TU.TEXTURE_CUBE_MAP_POSITIVE_X + EU), UU._useSRGBBuffer) switch (RU) {
          case 37492:
          case 36196:
            this._caps.etc2 ? RU = TU.COMPRESSED_SRGB8_ETC2 : UU._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? RU = TU.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : UU._useSRGBBuffer = !1;
            break;
          case 36492:
            RU = TU.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            RU = TU.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            RU = TU.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            RU = TU.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            RU = TU.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            RU = TU.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            RU = TU.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            RU = TU.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            RU = TU.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            RU = TU.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            RU = TU.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            RU = TU.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            RU = TU.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            RU = TU.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            RU = TU.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? RU = TU.COMPRESSED_SRGB_S3TC_DXT1_EXT : UU._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? RU = TU.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : UU._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? RU = TU.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : UU._useSRGBBuffer = !1;
            break;
          default:
            UU._useSRGBBuffer = !1
        }
        if (UU.generateMipMaps) {
          const EU = UU._hardwareTexture;
          EU.memoryAllocated || (TU.texStorage2D(UU.isCube ? TU.TEXTURE_CUBE_MAP : TU.TEXTURE_2D, Math.floor(Math.log2(Math.max(gU, tU))) + 1, RU, UU.width, UU.height), EU.memoryAllocated = !0), this._gl.compressedTexSubImage2D(qU, PU, 0, 0, gU, tU, RU, pU)
        } else this._gl.compressedTexImage2D(qU, PU, RU, gU, tU, 0, pU)
      }
      _uploadDataToTextureDirectly(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pU = arguments.length > 4 ? arguments[4] : void 0,
          EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const PU = this._gl,
          TU = this._getWebGLTextureType(UU.type),
          qU = this._getInternalFormat(UU.format),
          KU = void 0 === pU ? this._getRGBABufferInternalSizedFormat(UU.type, UU.format, UU._useSRGBBuffer) : this._getInternalFormat(pU, UU._useSRGBBuffer);
        this._unpackFlipY(UU.invertY);
        let cU = PU.TEXTURE_2D;
        UU.isCube && (cU = PU.TEXTURE_CUBE_MAP_POSITIVE_X + gU);
        const GU = Math.round(Math.log(UU.width) * Math.LOG2E),
          jU = Math.round(Math.log(UU.height) * Math.LOG2E),
          uU = EU ? UU.width : Math.pow(2, Math.max(GU - tU, 0)),
          CU = EU ? UU.height : Math.pow(2, Math.max(jU - tU, 0));
        PU.texImage2D(cU, tU, KU, uU, CU, 0, qU, TU, RU)
      }
      updateTextureData(UU, RU, gU, tU, pU, EU) {
        let PU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          TU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          qU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const KU = this._gl,
          cU = this._getWebGLTextureType(UU.type),
          GU = this._getInternalFormat(UU.format);
        this._unpackFlipY(UU.invertY);
        let jU = KU.TEXTURE_2D,
          uU = KU.TEXTURE_2D;
        UU.isCube && (uU = KU.TEXTURE_CUBE_MAP_POSITIVE_X + PU, jU = KU.TEXTURE_CUBE_MAP), this._bindTextureDirectly(jU, UU, !0), KU.texSubImage2D(uU, TU, gU, tU, pU, EU, GU, cU, RU), qU && this._gl.generateMipmap(uU), this._bindTextureDirectly(jU, null)
      }
      _uploadArrayBufferViewToTexture(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const pU = this._gl,
          EU = UU.isCube ? pU.TEXTURE_CUBE_MAP : pU.TEXTURE_2D;
        this._bindTextureDirectly(EU, UU, !0), this._uploadDataToTextureDirectly(UU, RU, gU, tU), this._bindTextureDirectly(EU, null, !0)
      }
      _prepareWebGLTextureContinuation(UU, RU, gU, tU, pU) {
        const EU = this._gl;
        if (!EU) return;
        const PU = this._getSamplingParameters(pU, !gU);
        EU.texParameteri(EU.TEXTURE_2D, EU.TEXTURE_MAG_FILTER, PU.mag), EU.texParameteri(EU.TEXTURE_2D, EU.TEXTURE_MIN_FILTER, PU.min), gU || tU || EU.generateMipmap(EU.TEXTURE_2D), this._bindTextureDirectly(EU.TEXTURE_2D, null), RU && RU.removePendingData(UU), UU.onLoadedObservable.notifyObservers(UU), UU.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU) {
        const cU = this.getCaps().maxTextureSize,
          GU = Math.min(cU, this.needPOTTextures ? (0, uU.e)(tU.width, cU) : tU.width),
          jU = Math.min(cU, this.needPOTTextures ? (0, uU.e)(tU.height, cU) : tU.height),
          CU = this._gl;
        CU && (UU._hardwareTexture ? (this._bindTextureDirectly(CU.TEXTURE_2D, UU, !0), this._unpackFlipY(void 0 === pU || !!pU), UU.baseWidth = tU.width, UU.baseHeight = tU.height, UU.width = GU, UU.height = jU, UU.isReady = !0, UU.type = -1 !== UU.type ? UU.type : 0, UU.format = -1 !== UU.format ? UU.format : KU ?? (".jpg" !== RU || UU._useSRGBBuffer ? 5 : 4), TU(GU, jU, tU, RU, UU, (() => {
          this._prepareWebGLTextureContinuation(UU, gU, EU, PU, qU)
        })) || this._prepareWebGLTextureContinuation(UU, gU, EU, PU, qU)) : gU && gU.removePendingData(UU))
      }
      _getInternalFormatFromDepthTextureFormat(UU, RU, gU) {
        const tU = this._gl;
        if (!RU) return tU.STENCIL_INDEX8;
        let pU = gU ? tU.DEPTH_STENCIL : tU.DEPTH_COMPONENT;
        return this.MC > 1 ? 15 === UU ? pU = tU.DEPTH_COMPONENT16 : 16 === UU ? pU = tU.DEPTH_COMPONENT24 : 17 === UU || 13 === UU ? pU = gU ? tU.DEPTH24_STENCIL8 : tU.DEPTH_COMPONENT24 : 14 === UU ? pU = tU.DEPTH_COMPONENT32F : 18 === UU && (pU = gU ? tU.DEPTH32F_STENCIL8 : tU.DEPTH_COMPONENT32F) : pU = tU.DEPTH_COMPONENT16, pU
      }
      _getWebGLTextureTypeFromDepthTextureFormat(UU) {
        const RU = this._gl;
        let gU = RU.UNSIGNED_INT;
        return 15 === UU ? gU = RU.UNSIGNED_SHORT : 17 === UU || 13 === UU ? gU = RU.UNSIGNED_INT_24_8 : 14 === UU ? gU = RU.FLOAT : 18 === UU ? gU = RU.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === UU && (gU = RU.UNSIGNED_BYTE), gU
      }
      _setupFramebufferDepthAttachments(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          EU = arguments.length > 5 ? arguments[5] : void 0,
          PU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const TU = this._gl;
        EU = EU ?? (UU ? 13 : 14);
        const qU = this._getInternalFormatFromDepthTextureFormat(EU, RU, UU);
        return UU && RU ? this._createRenderBuffer(gU, tU, pU, TU.DEPTH_STENCIL, qU, PU ? -1 : TU.DEPTH_STENCIL_ATTACHMENT) : RU ? this._createRenderBuffer(gU, tU, pU, qU, qU, PU ? -1 : TU.DEPTH_ATTACHMENT) : UU ? this._createRenderBuffer(gU, tU, pU, qU, qU, PU ? -1 : TU.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(UU, RU, gU, tU, pU, EU) {
        let PU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const TU = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(TU, UU, RU, gU, tU, pU, EU, PU)
      }
      _updateRenderBuffer(UU, RU, gU, tU, pU, EU, PU) {
        let TU = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const qU = this._gl;
        return qU.bindRenderbuffer(qU.RENDERBUFFER, UU), tU > 1 && qU.renderbufferStorageMultisample ? qU.renderbufferStorageMultisample(qU.RENDERBUFFER, tU, EU, RU, gU) : qU.renderbufferStorage(qU.RENDERBUFFER, pU, RU, gU), -1 !== PU && qU.framebufferRenderbuffer(qU.FRAMEBUFFER, PU, qU.RENDERBUFFER, UU), TU && qU.bindRenderbuffer(qU.RENDERBUFFER, null), UU
      }
      _releaseTexture(UU) {
        this._deleteTexture(UU._hardwareTexture), this.unbindAllTextures();
        const RU = this._internalTexturesCache.indexOf(UU); - 1 !== RU && this._internalTexturesCache.splice(RU, 1), UU._lodTextureHigh && UU._lodTextureHigh.dispose(), UU._lodTextureMid && UU._lodTextureMid.dispose(), UU._lodTextureLow && UU._lodTextureLow.dispose(), UU._irradianceTexture && UU._irradianceTexture.dispose()
      }
      _deleteTexture(UU) {
        UU?.release()
      }
      _setProgram(UU) {
        this._currentProgram !== UU && ((0, pU.o)(UU, this._gl), this._currentProgram = UU)
      }
      bindSamplers(UU) {
        const RU = UU.getPipelineContext();
        this._setProgram(RU.program);
        const gU = UU.getSamplers();
        for (let tU = 0; tU < gU.length; tU++) {
          const RU = UU.getUniform(gU[tU]);
          RU && (this._boundUniforms[tU] = RU)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          pU = !1;
        const EU = RU && RU._associatedChannel > -1;
        gU && EU && (this._activeChannel = RU._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== RU || tU) {
          if (this._activateCurrentTexture(), RU && RU.isMultiview) throw TU.e.Error(["_bindTextureDirectly called with a multiview texture!", UU, RU]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(UU, RU?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = RU, RU && (RU._associatedChannel = this._activeChannel)
        } else gU && (pU = !0, this._activateCurrentTexture());
        return EU && !gU && this._bindSamplerUniformToChannel(RU._associatedChannel, this._activeChannel), pU
      }
      _bindTexture(UU, RU, gU) {
        if (void 0 === UU) return;
        RU && (RU._associatedChannel = UU), this._activeChannel = UU;
        const tU = RU ? this._getTextureTarget(RU) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(tU, RU)
      }
      unbindAllTextures() {
        for (let UU = 0; UU < this._maxSimultaneousTextures; UU++) this._activeChannel = UU, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.MC > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(UU, RU, gU, tU) {
        void 0 !== UU && (RU && (this._boundUniforms[UU] = RU), this._setTexture(UU, gU))
      }
      _bindSamplerUniformToChannel(UU, RU) {
        const gU = this._boundUniforms[UU];
        gU && gU._currentState !== RU && (this._gl.uniform1i(gU, RU), gU._currentState = RU)
      }
      _getTextureWrapMode(UU) {
        switch (UU) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(UU, RU) {
        let gU, tU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!RU) return null != this._boundTexturesCache[UU] && (this._activeChannel = UU, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.MC > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (RU.video) {
          this._activeChannel = UU;
          const gU = RU.getInternalTexture();
          gU && (gU._associatedChannel = UU), RU.update()
        } else if (4 === RU.delayLoadState) return RU.delayLoad(), !1;
        gU = pU ? RU.depthStencilTexture : RU.isReady() ? RU.getInternalTexture() : RU.isCube ? this.emptyCubeTexture : RU.is3D ? this.emptyTexture3D : RU.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !tU && gU && (gU._associatedChannel = UU);
        let EU = !0;
        this._boundTexturesCache[UU] === gU && (tU || this._bindSamplerUniformToChannel(gU._associatedChannel, UU), EU = !1), this._activeChannel = UU;
        const PU = this._getTextureTarget(gU);
        if (EU && this._bindTextureDirectly(PU, gU, tU), gU && !gU.isMultiview) {
          if (gU.isCube && gU._cachedCoordinatesMode !== RU.coordinatesMode) {
            gU._cachedCoordinatesMode = RU.coordinatesMode;
            const UU = 3 !== RU.coordinatesMode && 5 !== RU.coordinatesMode ? 1 : 0;
            RU.wrapU = UU, RU.wrapV = UU
          }
          gU._cachedWrapU !== RU.wrapU && (gU._cachedWrapU = RU.wrapU, this._setTextureParameterInteger(PU, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(RU.wrapU), gU)), gU._cachedWrapV !== RU.wrapV && (gU._cachedWrapV = RU.wrapV, this._setTextureParameterInteger(PU, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(RU.wrapV), gU)), gU.is3D && gU._cachedWrapR !== RU.wrapR && (gU._cachedWrapR = RU.wrapR, this._setTextureParameterInteger(PU, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(RU.wrapR), gU)), this._setAnisotropicLevel(PU, gU, RU.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(UU, RU, gU, tU) {
        if (void 0 !== UU && RU) {
          this._textureUnits && this._textureUnits.length === gU.length || (this._textureUnits = new Int32Array(gU.length));
          for (let RU = 0; RU < gU.length; RU++) {
            const tU = gU[RU].getInternalTexture();
            tU ? (this._textureUnits[RU] = UU + RU, tU._associatedChannel = UU + RU) : this._textureUnits[RU] = -1
          }
          this._gl.uniform1iv(RU, this._textureUnits);
          for (let UU = 0; UU < gU.length; UU++) this._setTexture(this._textureUnits[UU], gU[UU], !0)
        }
      }
      _setAnisotropicLevel(UU, RU, gU) {
        const tU = this._caps.textureAnisotropicFilterExtension;
        11 !== RU.samplingMode && 3 !== RU.samplingMode && 2 !== RU.samplingMode && (gU = 1), tU && RU._cachedAnisotropicFilteringLevel !== gU && (this._setTextureParameterFloat(UU, tU.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(gU, this._caps.maxAnisotropy), RU), RU._cachedAnisotropicFilteringLevel = gU)
      }
      _setTextureParameterFloat(UU, RU, gU, tU) {
        this._bindTextureDirectly(UU, tU, !0, !0), this._gl.texParameterf(UU, RU, gU)
      }
      _setTextureParameterInteger(UU, RU, gU, tU) {
        tU && this._bindTextureDirectly(UU, tU, !0, !0), this._gl.texParameteri(UU, RU, gU)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let UU = 0; UU < this._caps.maxVertexAttribs; UU++) this.disableAttributeByIndex(UU)
        } else
          for (let UU = 0, RU = this._vertexAttribArraysEnabled.length; UU < RU; UU++) UU >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[UU] || this.disableAttributeByIndex(UU)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, qU.k)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, pU.A)(this._gl)
      }
      attachContextLostEvent(UU) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", UU, !1)
      }
      attachContextRestoredEvent(UU) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", UU, !1)
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
      _canRenderToFramebuffer(UU) {
        const RU = this._gl;
        for (; RU.getError() !== RU.NO_ERROR;);
        let gU = !0;
        const tU = RU.createTexture();
        RU.bindTexture(RU.TEXTURE_2D, tU), RU.texImage2D(RU.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(UU), 1, 1, 0, RU.RGBA, this._getWebGLTextureType(UU), null), RU.texParameteri(RU.TEXTURE_2D, RU.TEXTURE_MIN_FILTER, RU.NEAREST), RU.texParameteri(RU.TEXTURE_2D, RU.TEXTURE_MAG_FILTER, RU.NEAREST);
        const pU = RU.createFramebuffer();
        RU.bindFramebuffer(RU.FRAMEBUFFER, pU), RU.framebufferTexture2D(RU.FRAMEBUFFER, RU.COLOR_ATTACHMENT0, RU.TEXTURE_2D, tU, 0);
        const EU = RU.checkFramebufferStatus(RU.FRAMEBUFFER);
        if (gU = gU && EU === RU.FRAMEBUFFER_COMPLETE, gU = gU && RU.getError() === RU.NO_ERROR, gU && (RU.clear(RU.COLOR_BUFFER_BIT), gU = gU && RU.getError() === RU.NO_ERROR), gU) {
          RU.bindFramebuffer(RU.FRAMEBUFFER, null);
          const UU = RU.RGBA,
            tU = RU.UNSIGNED_BYTE,
            pU = new Uint8Array(4);
          RU.readPixels(0, 0, 1, 1, UU, tU, pU), gU = gU && RU.getError() === RU.NO_ERROR
        }
        for (RU.deleteTexture(tU), RU.deleteFramebuffer(pU), RU.bindFramebuffer(RU.FRAMEBUFFER, null); !gU && RU.getError() !== RU.NO_ERROR;);
        return gU
      }
      _getWebGLTextureType(UU) {
        if (1 === this._webGLVersion) {
          switch (UU) {
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
        switch (UU) {
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
      _getInternalFormat(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = RU ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (UU) {
          case 0:
            gU = this._gl.ALPHA;
            break;
          case 1:
            gU = this._gl.LUMINANCE;
            break;
          case 2:
            gU = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            gU = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            gU = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            gU = RU ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            gU = RU ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (UU) {
          case 8:
            gU = this._gl.RED_INTEGER;
            break;
          case 9:
            gU = this._gl.RG_INTEGER;
            break;
          case 10:
            gU = this._gl.RGB_INTEGER;
            break;
          case 11:
            gU = this._gl.RGBA_INTEGER
        }
        return gU
      }
      _getRGBABufferInternalSizedFormat(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== RU) switch (RU) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return gU ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (UU) {
          case 3:
            switch (RU) {
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
            switch (RU) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return gU ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return gU ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (RU) {
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
            switch (RU) {
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
            switch (RU) {
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
            switch (RU) {
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
            switch (RU) {
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
            switch (RU) {
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
            switch (RU) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return gU ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(UU, RU, gU, tU) {
        let pU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          EU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          PU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const qU = pU ? 4 : 3,
          KU = pU ? this._gl.RGBA : this._gl.RGB,
          cU = gU * tU * qU;
        if (PU) {
          if (PU.length < cU) return TU.e.Error(`Data buffer is too small to store the read pixels (${PU.length} should be more than ${cU})`), Promise.resolve(PU)
        } else PU = new Uint8Array(cU);
        return EU && this.flushFramebuffer(), this._gl.readPixels(UU, RU, gU, tU, KU, this._gl.UNSIGNED_BYTE, PU), Promise.resolve(PU)
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
          const UU = EU.d._CreateCanvas(1, 1),
            RU = UU.getContext("webgl") || UU.getContext("experimental-webgl");
          this._IsSupported = null != RU && !!globalThis.WebGLRenderingContext
        } catch (UU) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const UU = EU.d._CreateCanvas(1, 1),
            RU = UU.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || UU.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !RU
        } catch (UU) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    mU._TempClearColorUint32 = new Uint32Array(4), mU._TempClearColorInt32 = new Int32Array(4), mU._TempClearColorFloat32 = new Float32Array(4), mU.ExceptionList = [{
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
    }], mU._ConcatenateShader = QU.f, mU._IsSupported = null, mU._HasMajorPerformanceCaveat = null
  },
  39571: (UU, RU, gU) => {
    var tU;
    gU.d(RU, {
        c: () => pU
      }),
      function(UU) {
        UU[UU.PointerMove = 0] = "PointerMove", UU[UU.PointerDown = 1] = "PointerDown", UU[UU.PointerUp = 2] = "PointerUp"
      }(tU || (tU = {}));
    class pU {}
    pU.DOM_DELTA_PIXEL = 0, pU.DOM_DELTA_LINE = 1, pU.DOM_DELTA_PAGE = 2
  },
  39562: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU,
      e: () => EU,
      f: () => pU
    });
    class tU {}
    tU.KEYDOWN = 1, tU.KEYUP = 2;
    class pU {
      constructor(UU, RU) {
        this.type = UU, this.event = RU
      }
    }
    class EU extends pU {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(UU) {
        this.skipOnKeyboardObservable = UU
      }
      constructor(UU, RU) {
        super(UU, RU), this.type = UU, this.event = RU, this.skipOnKeyboardObservable = !1
      }
    }
  },
  39554: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU,
      g: () => PU,
      k: () => TU
    });
    var tU = gU(36600);
    class pU {}
    pU.POINTERDOWN = 1, pU.POINTERUP = 2, pU.POINTERMOVE = 4, pU.POINTERWHEEL = 8, pU.POINTERPICK = 16, pU.POINTERTAP = 32, pU.POINTERDOUBLETAP = 64;
    class EU {
      constructor(UU, RU) {
        this.type = UU, this.event = RU
      }
    }
    class PU extends EU {
      constructor(UU, RU, gU, pU) {
        super(UU, RU), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new tU.l(gU, pU)
      }
    }
    class TU extends EU {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(UU, RU), this._pickInfo = gU, this._inputManager = tU
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  39581: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU
    });
    class tU {
      static CompareLightsPriority(UU, RU) {
        return UU.shadowEnabled !== RU.shadowEnabled ? (RU.shadowEnabled ? 1 : 0) - (UU.shadowEnabled ? 1 : 0) : RU.renderPriority - UU.renderPriority
      }
    }
    tU.FALLOFF_DEFAULT = 0, tU.FALLOFF_PHYSICAL = 1, tU.FALLOFF_GLTF = 2, tU.FALLOFF_STANDARD = 3, tU.LIGHTMAP_DEFAULT = 0, tU.LIGHTMAP_SPECULAR = 1, tU.LIGHTMAP_SHADOWSONLY = 2, tU.INTENSITYMODE_AUTOMATIC = 0, tU.INTENSITYMODE_LUMINOUSPOWER = 1, tU.INTENSITYMODE_LUMINOUSINTENSITY = 2, tU.INTENSITYMODE_ILLUMINANCE = 3, tU.INTENSITYMODE_LUMINANCE = 4, tU.LIGHTTYPEID_POINTLIGHT = 0, tU.LIGHTTYPEID_DIRECTIONALLIGHT = 1, tU.LIGHTTYPEID_SPOTLIGHT = 2, tU.LIGHTTYPEID_HEMISPHERICLIGHT = 3, tU.LIGHTTYPEID_RECT_AREALIGHT = 4, tU.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39203: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => PU
    });
    var tU, pU = gU(36624),
      EU = gU(39211);
    ! function(UU) {
      UU[UU.Unknown = 0] = "Unknown", UU[UU.Url = 1] = "Url", UU[UU.Temp = 2] = "Temp", UU[UU.Raw = 3] = "Raw", UU[UU.Dynamic = 4] = "Dynamic", UU[UU.RenderTarget = 5] = "RenderTarget", UU[UU.MultiRenderTarget = 6] = "MultiRenderTarget", UU[UU.Cube = 7] = "Cube", UU[UU.CubeRaw = 8] = "CubeRaw", UU[UU.CubePrefiltered = 9] = "CubePrefiltered", UU[UU.Raw3D = 10] = "Raw3D", UU[UU.Raw2DArray = 11] = "Raw2DArray", UU[UU.DepthStencil = 12] = "DepthStencil", UU[UU.CubeRawRGBD = 13] = "CubeRawRGBD", UU[UU.Depth = 14] = "Depth", UU[UU.External = 15] = "External"
    }(tU || (tU = {}));
    class PU extends EU.c {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(UU) {
        this._useMipMaps = UU
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(UU) {
        this._uniqueId = UU
      }
      WC() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new pU.b, this.onErrorObservable = new pU.b, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = UU, this._source = RU, this._uniqueId = PU._Counter++, gU || (this._hardwareTexture = UU._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, UU, RU, gU), this.width = UU, this.height = RU, this.depth = gU, this.baseWidth = UU, this.baseHeight = RU, this.baseDepth = gU, this._size = UU * RU * gU
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const UU = this.onRebuildCallback(this),
            RU = RU => {
              RU._swapAndDie(this, !1), this.isReady = UU.isReady
            };
          return void(UU.isAsync ? UU.proxy.then(RU) : RU(UU.proxy))
        }
        let UU;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(UU = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (UU => {
              UU._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (UU = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), UU._swapAndDie(this, !1), this._bufferViewArray)
              for (let UU = 0; UU < this._bufferViewArray.length; UU++) {
                const RU = this._bufferViewArray[UU];
                RU && this._engine.updateRawTexture(this, RU, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, UU)
              }
            this.isReady = !0;
            break;
          case 10:
            UU = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), UU._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (UU = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), UU._swapAndDie(this, !1), this._bufferViewArray)
              for (let UU = 0; UU < this._bufferViewArray.length; UU++) {
                const RU = this._bufferViewArray[UU];
                RU && this._engine.updateRawTexture2DArray(this, RU, this.format, this.invertY, this._compression, this.type, UU)
              }
            this.isReady = !0;
            break;
          case 4:
            UU = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), UU._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(UU = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              UU._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            UU = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), UU._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return UU = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (UU => {
              UU && UU._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(UU._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(UU._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), UU._hardwareTexture = this._hardwareTexture, UU._setUniqueId(PU._Counter++), RU && (UU._isRGBD = this._isRGBD), this._lodTextureHigh && (UU._lodTextureHigh && UU._lodTextureHigh.dispose(), UU._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (UU._lodTextureMid && UU._lodTextureMid.dispose(), UU._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (UU._lodTextureLow && UU._lodTextureLow.dispose(), UU._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (UU._irradianceTexture && UU._irradianceTexture.dispose(), UU._irradianceTexture = this._irradianceTexture);
        const gU = this._engine.getLoadedTexturesCache();
        let tU = gU.indexOf(this); - 1 !== tU && gU.splice(tU, 1), tU = gU.indexOf(UU), -1 === tU && gU.push(UU)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    PU._Counter = 0
  },
  39324: (UU, RU, gU) => {
    function tU(UU) {
      return 13 === UU || 14 === UU || 15 === UU || 16 === UU || 17 === UU || 18 === UU || 19 === UU
    }

    function pU(UU) {
      return 8 === UU || 9 === UU || 10 === UU || 11 === UU
    }

    function EU(UU) {
      return 0 === UU || 5 === UU || 7 === UU || 11 === UU
    }

    function PU(UU) {
      return 13 === UU || 17 === UU || 18 === UU || 19 === UU
    }
    gU.d(RU, {
      b: () => PU,
      d: () => tU,
      f: () => pU,
      j: () => EU
    })
  },
  39211: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU
    });
    class tU {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(UU) {
        this._cachedWrapU = UU
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(UU) {
        this._cachedWrapV = UU
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(UU) {
        this._cachedWrapR = UU
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(UU) {
        this._cachedAnisotropicFilteringLevel = UU
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(UU) {
        this._comparisonFunction = UU
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(UU) {
        this._useMipMaps = UU
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = UU, this._cachedWrapV = RU, this._cachedWrapR = gU, this._cachedAnisotropicFilteringLevel = tU, this.samplingMode = pU, this._comparisonFunction = EU, this
      }
      compareSampler(UU) {
        return this._cachedWrapU === UU._cachedWrapU && this._cachedWrapV === UU._cachedWrapV && this._cachedWrapR === UU._cachedWrapR && this._cachedAnisotropicFilteringLevel === UU._cachedAnisotropicFilteringLevel && this.samplingMode === UU.samplingMode && this._comparisonFunction === UU._comparisonFunction && this._useMipMaps === UU._useMipMaps
      }
    }
  },
  39486: (UU, RU, gU) => {
    function tU(UU) {
      UU.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    gU.d(RU, {
      d: () => tU
    })
  },
  39292: (UU, RU, gU) => {
    function tU(UU) {
      return void 0 === UU.getPipelineContext
    }
    gU.d(RU, {
      c: () => tU
    })
  },
  39714: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU
    });
    var tU = gU(39268);
    class pU {
      static GetEffect(UU) {
        return void 0 === UU.getPipelineContext ? UU.effect : UU
      }
      constructor(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = UU.createDrawContext(), RU && (this.materialContext = UU.createMaterialContext())
      }
      setEffect(UU, RU) {
        let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        gU || this.effect === UU || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = UU, void 0 !== RU && (this.defines = RU), gU && this.drawContext?.reset()
      }
      dispose() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const RU = this.effect;
          UU ? RU.dispose() : tU.b.SetImmediate((() => {
            RU.WC().onEndFrameObservable.addOnce((() => {
              RU.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39229: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => GU,
      h: () => uU,
      l: () => KU,
      m: () => cU
    });
    var tU = gU(39231),
      pU = gU(39240),
      EU = gU(39225),
      PU = gU(38236),
      TU = gU(39265),
      qU = gU(39248);

    function KU(UU, RU) {
      return (0, pU.E)(RU).cachedPipelines[UU]
    }

    function cU(UU) {
      const RU = UU._name,
        gU = UU.context;
      if (RU && gU) {
        const UU = (0, pU.E)(gU),
          tU = UU.cachedPipelines[RU];
        tU?.dispose(), delete UU.cachedPipelines[RU]
      }
    }

    function GU(UU, RU, gU, pU, EU, PU, qU) {
      let KU, cU;
      const GU = (0, tU.k)() ? PU?.getHostDocument() : null;
      KU = "string" === typeof RU ? RU : "string" === typeof RU.vertexSource ? "source:" + RU.vertexSource : "string" === typeof RU.vertexElement ? GU?.getElementById(RU.vertexElement) || RU.vertexElement : RU.vertex || RU, cU = "string" === typeof RU ? RU : "string" === typeof RU.fragmentSource ? "source:" + RU.fragmentSource : "string" === typeof RU.fragmentElement ? GU?.getElementById(RU.fragmentElement) || RU.fragmentElement : RU.fragment || RU;
      const uU = [void 0, void 0],
        CU = () => {
          if (uU[0] && uU[1]) {
            const [tU, KU] = uU;
            (0, TU.g)(UU), (0, TU.l)(tU, UU, ((tU, cU) => {
              qU && (qU._vertexSourceCodeBeforeMigration = cU), gU && (tU = gU("vertex", tU)), UU.isFragment = !0, (0, TU.l)(KU, UU, ((PU, KU) => {
                qU && (qU._fragmentSourceCodeBeforeMigration = KU), gU && (PU = gU("fragment", PU));
                const cU = (0, TU.d)(tU, PU, UU);
                UU = null;
                const GU = function(UU, RU, gU, tU) {
                  if (gU) {
                    return {
                      vertexSourceCode: (1 === tU ? "//" : "") + "#define SHADER_NAME vertex:" + (gU.vertexElement || gU.vertex || gU.spectorName || gU) + "\n" + UU,
                      fragmentSourceCode: (1 === tU ? "//" : "") + "#define SHADER_NAME fragment:" + (gU.fragmentElement || gU.fragment || gU.spectorName || gU) + "\n" + RU
                    }
                  }
                  return {
                    vertexSourceCode: UU,
                    fragmentSourceCode: RU
                  }
                }(cU.vertexCode, cU.fragmentCode, RU, EU);
                pU?.(GU.vertexSourceCode, GU.fragmentSourceCode)
              }), PU)
            }), PU)
          }
        };
      jU(KU, "Vertex", "", (UU => {
        qU && (qU._rawVertexSourceCode = UU), uU[0] = UU, CU()
      }), EU), jU(cU, "Fragment", "Pixel", (UU => {
        qU && (qU._rawFragmentSourceCode = UU), uU[1] = UU, CU()
      }), EU)
    }

    function jU(UU, RU, gU, pU, PU, TU) {
      if ("undefined" !== typeof HTMLElement && UU instanceof HTMLElement) {
        return void pU((0, tU.c)(UU))
      }
      if ("source:" === UU.substring(0, 7)) return void pU(UU.substring(7));
      if ("base64:" === UU.substring(0, 7)) {
        return void pU(window.atob(UU.substring(7)))
      }
      const KU = EU.d.GetShadersStore(PU);
      if (KU[UU + RU + "Shader"]) return void pU(KU[UU + RU + "Shader"]);
      if (gU && KU[UU + gU + "Shader"]) return void pU(KU[UU + gU + "Shader"]);
      let cU;
      if (cU = "." === UU[0] || "/" === UU[0] || UU.indexOf("http") > -1 ? UU : EU.d.GetShadersRepository(PU) + UU, !(TU = TU || qU.m)) throw new Error("loadFileInjection is not defined");
      TU(cU + "." + RU.toLowerCase() + ".fx", pU)
    }
    const uU = (UU, RU, gU, tU) => {
      try {
        const EU = UU.context ? (0, pU.E)(UU.context) : null;
        EU && (EU.disableParallelShaderCompile = UU.disableParallelCompilation);
        const PU = UU.existingPipelineContext || RU(UU.shaderProcessingContext);
        return PU._name = UU.name, UU.name && EU && (EU.cachedPipelines[UU.name] = PU), gU(PU, UU.vertex, UU.fragment, !!UU.createAsRaw, "", "", UU.rebuildRebind, UU.defines, UU.transformFeedbackVaryings, "", (() => {
          tU(PU, (() => {
            UU.onRenderingStateCompiled?.(PU)
          }))
        })), PU
      } catch (EU) {
        throw PU.e.Error("Error compiling effect"), EU
      }
    }
  },
  39223: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => qU
    });
    var tU = gU(36624),
      pU = gU(38236),
      EU = gU(39225),
      PU = gU(39229),
      TU = gU(39268);
    class qU {
      static get ShadersRepository() {
        return EU.d.ShadersRepository
      }
      static set ShadersRepository(UU) {
        EU.d.ShadersRepository = UU
      }
      get lRU() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new tU.b), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(UU, RU, gU) {
        let pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          EU = arguments.length > 4 ? arguments[4] : void 0,
          TU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          KU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          cU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          GU = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          jU = arguments.length > 9 ? arguments[9] : void 0,
          uU = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          CU = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          hU = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new tU.b, this.onErrorObservable = new tU.b, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = UU, this._key = uU;
        const QU = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let eU;
        if (RU.attributes) {
          const UU = RU;
          if (this._engine = gU, this._attributesNames = UU.attributes, this._uniformsNames = UU.uniformsNames.concat(UU.samplers), this._samplerList = UU.samplers.slice(), this.defines = UU.defines, this.onError = UU.onError, this.onCompiled = UU.onCompiled, this._fallbacks = UU.fallbacks, this._indexParameters = UU.indexParameters, this._transformFeedbackVaryings = UU.transformFeedbackVaryings || null, this._multiTarget = !!UU.multiTarget, this._shaderLanguage = UU.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!UU.disableParallelShaderCompilation, UU.uniformBuffersNames) {
            this._uniformBuffersNamesList = UU.uniformBuffersNames.slice();
            for (let RU = 0; RU < UU.uniformBuffersNames.length; RU++) this._uniformBuffersNames[UU.uniformBuffersNames[RU]] = RU
          }
          this._processFinalCode = UU.processFinalCode ?? null, this._processCodeAfterIncludes = UU.processCodeAfterIncludes ?? void 0, hU = UU.extraInitializationsAsync, eU = UU.existingPipelineContext
        } else this._engine = EU, this.defines = null == TU ? "" : TU, this._uniformsNames = gU.concat(pU), this._samplerList = pU ? pU.slice() : [], this._attributesNames = RU, this._uniformBuffersNamesList = [], this._shaderLanguage = CU, this.onError = GU, this.onCompiled = cU, this._indexParameters = jU, this._fallbacks = KU;
        "WEBGL2" === this._engine.shaderPlatformName && (eU = (0, PU.l)(QU, this._engine._gl) ?? eU), this._attributeLocationByName = {}, this.uniqueId = qU._UniqueIdSeed++, eU ? (this._pipelineContext = eU, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, hU).catch((UU => {
          const RU = UU?.message ?? String(UU),
            gU = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${RU}`);
          UU && "string" === typeof UU.stack && (gU.stack = `${gU.message}\nCaused by: ${UU.stack}`), this._processCompilationErrors(gU)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.lRU || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tU = arguments.length > 3 ? arguments[3] : void 0;
        tU && await tU(), this._processingContext = gU || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const pU = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: UU ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: EU.d.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: EU.d.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          VgU: this._engine.VgU,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, PU.d)(pU, this.name, this._processFinalCode, ((UU, gU) => {
          this._vertexSourceCode = UU, this._fragmentSourceCode = gU, this._prepareEffect(RU)
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
        return !!this._engine.lRU || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      WC() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(UU) {
        return this._attributes[UU]
      }
      getAttributeLocationByName(UU) {
        return this._attributeLocationByName[UU]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(UU) {
        return this._uniformsNames.indexOf(UU)
      }
      getUniform(UU) {
        return this._uniforms[UU]
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
        return await new Promise((UU => {
          this.executeWhenCompiled(UU)
        }))
      }
      executeWhenCompiled(UU) {
        this.isReady() ? UU(this) : (this.onCompileObservable.add((RU => {
          UU(RU)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(UU) {
        (0, TU.c)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (RU => {
          this._processCompilationErrors(RU, UU)
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
            VgU: this._engine.VgU,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(UU, RU, gU, tU) {
        this._isReady = !1, this._vertexSourceCodeOverride = UU, this._fragmentSourceCodeOverride = RU, this.onError = (UU, RU) => {
          tU && tU(RU)
        }, this.onCompiled = () => {
          const UU = this.WC().scenes;
          if (UU)
            for (let RU = 0; RU < UU.length; RU++) UU[RU].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(gU)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(UU) {
        if (this._pipelineContext = UU, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let RU = 0; RU < this._attributesNames.length; RU++) {
            const UU = this._attributesNames[RU];
            this._attributeLocationByName[UU] = this._attributes[RU]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), qU.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RU = this._pipelineContext;
        this._isReady = !1;
        try {
          const gU = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            tU = gU ? null : this.defines,
            pU = gU ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            EU = gU ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            TU = this._engine;
          this._pipelineContext = (0, PU.h)({
            existingPipelineContext: UU ? RU : null,
            vertex: pU,
            fragment: EU,
            context: "WEBGL2" === TU.shaderPlatformName || "WEBGL1" === TU.shaderPlatformName ? TU._gl : void 0,
            rebuildRebind: (UU, RU, gU, tU) => this._rebuildProgram(UU, RU, gU, tU),
            defines: tU,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: gU,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: gU => {
              RU && !UU && this._engine._deletePipelineContext(RU), gU && this._onRenderingStateCompiled(gU)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(RU)
        } catch (gU) {
          this._processCompilationErrors(gU, RU)
        }
      }
      _getShaderCodeAndErrorLine(UU, RU, gU) {
        const tU = gU ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let pU = null;
        if (RU && UU) {
          const EU = RU.match(tU);
          if (EU && 2 === EU.length) {
            const RU = parseInt(EU[1]),
              tU = UU.split("\n", -1);
            tU.length >= RU && (pU = `Offending line [${RU}] in ${gU?"fragment":"vertex"} code: ${tU[RU-1]}`)
          }
        }
        return [UU, pU]
      }
      _processCompilationErrors(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof UU?.stack ? UU.stack : UU?.message ?? String(UU);
        const gU = this._attributesNames,
          tU = this._fallbacks;
        if (pU.e.Error("Unable to compile effect:"), pU.e.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), pU.e.Error(`Attributes: ${gU.join(" ")}`), pU.e.Error("Defines:\n" + this.defines), qU.LogShaderCodeOnCompilationError) {
          let UU, RU = null,
            gU = null;
          this._pipelineContext?._getVertexShaderCode() && ([UU, RU] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), UU && (pU.e.Error("Vertex code:"), pU.e.Error(UU))), this._pipelineContext?._getFragmentShaderCode() && ([UU, gU] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), UU && (pU.e.Error("Fragment code:"), pU.e.Error(UU))), RU && pU.e.Error(RU), gU && pU.e.Error(gU)
        }
        pU.e.Error("Error: " + this._compilationError);
        const EU = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        RU && (this._pipelineContext = RU, this._isReady = !0, EU()), tU ? (this._pipelineContext = null, tU.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, pU.e.Error("Trying next fallback."), this.defines = tU.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, EU(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, RU || EU())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(UU, RU) {
        this._engine._bindTexture(this._samplers[UU], RU, UU)
      }
      setTexture(UU, RU) {
        this._engine.setTexture(this._samplers[UU], this._uniforms[UU], RU, UU)
      }
      setTextureArray(UU, RU) {
        const gU = UU + "Ex";
        if (-1 === this._samplerList.indexOf(gU + "0")) {
          const tU = this._samplerList.indexOf(UU);
          for (let UU = 1; UU < RU.length; UU++) {
            const RU = gU + (UU - 1).toString();
            this._samplerList.splice(tU + UU, 0, RU)
          }
          let pU = 0;
          for (const UU of this._samplerList) this._samplers[UU] = pU, pU += 1
        }
        this._engine.setTextureArray(this._samplers[UU], this._uniforms[UU], RU, UU)
      }
      bindUniformBuffer(UU, RU) {
        const gU = this._uniformBuffersNames[RU];
        void 0 === gU || qU._BaseCache[gU] === UU && this._engine._features.useUBOBindingCache || (qU._BaseCache[gU] = UU, this._engine.bindUniformBufferBase(UU, gU, RU))
      }
      bindUniformBlock(UU, RU) {
        this._engine.bindUniformBlock(this._pipelineContext, UU, RU)
      }
      setInt(UU, RU) {
        return this._pipelineContext.setInt(UU, RU), this
      }
      setInt2(UU, RU, gU) {
        return this._pipelineContext.setInt2(UU, RU, gU), this
      }
      setInt3(UU, RU, gU, tU) {
        return this._pipelineContext.setInt3(UU, RU, gU, tU), this
      }
      setInt4(UU, RU, gU, tU, pU) {
        return this._pipelineContext.setInt4(UU, RU, gU, tU, pU), this
      }
      setIntArray(UU, RU) {
        return this._pipelineContext.setIntArray(UU, RU), this
      }
      setIntArray2(UU, RU) {
        return this._pipelineContext.setIntArray2(UU, RU), this
      }
      setIntArray3(UU, RU) {
        return this._pipelineContext.setIntArray3(UU, RU), this
      }
      setIntArray4(UU, RU) {
        return this._pipelineContext.setIntArray4(UU, RU), this
      }
      setUInt(UU, RU) {
        return this._pipelineContext.setUInt(UU, RU), this
      }
      setUInt2(UU, RU, gU) {
        return this._pipelineContext.setUInt2(UU, RU, gU), this
      }
      setUInt3(UU, RU, gU, tU) {
        return this._pipelineContext.setUInt3(UU, RU, gU, tU), this
      }
      setUInt4(UU, RU, gU, tU, pU) {
        return this._pipelineContext.setUInt4(UU, RU, gU, tU, pU), this
      }
      setUIntArray(UU, RU) {
        return this._pipelineContext.setUIntArray(UU, RU), this
      }
      setUIntArray2(UU, RU) {
        return this._pipelineContext.setUIntArray2(UU, RU), this
      }
      setUIntArray3(UU, RU) {
        return this._pipelineContext.setUIntArray3(UU, RU), this
      }
      setUIntArray4(UU, RU) {
        return this._pipelineContext.setUIntArray4(UU, RU), this
      }
      setFloatArray(UU, RU) {
        return this._pipelineContext.setArray(UU, RU), this
      }
      setFloatArray2(UU, RU) {
        return this._pipelineContext.setArray2(UU, RU), this
      }
      setFloatArray3(UU, RU) {
        return this._pipelineContext.setArray3(UU, RU), this
      }
      setFloatArray4(UU, RU) {
        return this._pipelineContext.setArray4(UU, RU), this
      }
      setArray(UU, RU) {
        return this._pipelineContext.setArray(UU, RU), this
      }
      setArray2(UU, RU) {
        return this._pipelineContext.setArray2(UU, RU), this
      }
      setArray3(UU, RU) {
        return this._pipelineContext.setArray3(UU, RU), this
      }
      setArray4(UU, RU) {
        return this._pipelineContext.setArray4(UU, RU), this
      }
      setMatrices(UU, RU) {
        return this._pipelineContext.setMatrices(UU, RU), this
      }
      setMatrix(UU, RU) {
        return this._pipelineContext.setMatrix(UU, RU), this
      }
      setMatrix3x3(UU, RU) {
        return this._pipelineContext.setMatrix3x3(UU, RU), this
      }
      setMatrix2x2(UU, RU) {
        return this._pipelineContext.setMatrix2x2(UU, RU), this
      }
      setFloat(UU, RU) {
        return this._pipelineContext.setFloat(UU, RU), this
      }
      setBool(UU, RU) {
        return this._pipelineContext.setInt(UU, RU ? 1 : 0), this
      }
      setVector2(UU, RU) {
        return this._pipelineContext.setVector2(UU, RU), this
      }
      setFloat2(UU, RU, gU) {
        return this._pipelineContext.setFloat2(UU, RU, gU), this
      }
      setVector3(UU, RU) {
        return this._pipelineContext.setVector3(UU, RU), this
      }
      setFloat3(UU, RU, gU, tU) {
        return this._pipelineContext.setFloat3(UU, RU, gU, tU), this
      }
      setVector4(UU, RU) {
        return this._pipelineContext.setVector4(UU, RU), this
      }
      setQuaternion(UU, RU) {
        return this._pipelineContext.setQuaternion(UU, RU), this
      }
      setFloat4(UU, RU, gU, tU, pU) {
        return this._pipelineContext.setFloat4(UU, RU, gU, tU, pU), this
      }
      setColor3(UU, RU) {
        return this._pipelineContext.setColor3(UU, RU), this
      }
      setColor4(UU, RU, gU) {
        return this._pipelineContext.setColor4(UU, RU, gU), this
      }
      setDirectColor4(UU, RU) {
        return this._pipelineContext.setDirectColor4(UU, RU), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (qU.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, PU.m)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        RU && (EU.d.GetShadersStore(tU)[`${UU}PixelShader`] = RU), gU && (EU.d.GetShadersStore(tU)[`${UU}VertexShader`] = gU)
      }
      static ResetCache() {
        qU._BaseCache = {}
      }
    }
    qU.LogShaderCodeOnCompilationError = !0, qU.PersistentMode = !1, qU.AutomaticallyClearCodeCache = !1, qU._UniqueIdSeed = 0, qU._BaseCache = {}, qU.ShadersStore = EU.d.ShadersStore, qU.IncludesShadersStore = EU.d.IncludesShadersStore
  },
  39531: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => cU,
      d: () => JU,
      e: () => IU
    });
    var tU = gU(39223),
      pU = gU(36600),
      EU = gU(36634),
      PU = gU(39504);
    const TU = new pU.c,
      qU = new pU.c,
      KU = new pU.c,
      cU = {
        aZ: () => {},
        eyeAtCamera: !0
      };

    function GU(UU, RU, gU) {
      const tU = gU.vgU(),
        pU = RU.vgU();
      for (let EU = 0; EU < 16; EU++) tU[EU] = pU[EU];
      return tU[12] -= UU.x, tU[13] -= UU.y, tU[14] -= UU.z, gU.markAsUpdated(), gU
    }

    function jU(UU, RU, gU) {
      return (0, EU.j)(RU, qU), GU(UU, qU, KU), (0, EU.j)(KU, gU), gU
    }

    function uU(UU, RU, gU) {
      if (!cU.eyeAtCamera) return jU(UU, RU, gU);
      const tU = gU.vgU(),
        pU = RU.vgU();
      for (let EU = 0; EU < 16; EU++) tU[EU] = pU[EU];
      return tU[12] = 0, tU[13] = 0, tU[14] = 0, gU.markAsUpdated(), gU
    }

    function CU(UU, RU, gU, tU) {
      return (0, EU.u)(uU(UU, RU, tU), gU, tU), tU
    }

    function hU(UU, RU, gU, tU) {
      return (0, EU.j)(gU, qU), (0, EU.u)(RU, qU, KU), GU(UU, KU, qU), uU(UU, gU, KU), (0, EU.u)(qU, KU, tU), tU
    }

    function QU(UU, RU, gU, tU, pU, PU) {
      return (0, EU.j)(gU, qU), (0, EU.u)(RU, qU, KU), GU(UU, KU, qU), CU(UU, tU, pU, KU), (0, EU.u)(qU, KU, PU), PU
    }

    function eU(UU, RU) {
      const gU = cU.aZ();
      if (!gU || TU === RU) return RU;
      TU.updateFlag = RU.updateFlag;
      const tU = gU.floatingOriginOffset;
      switch (UU) {
        case "world":
          return GU(tU, RU, TU);
        case "view":
          return uU(tU, RU, TU);
        case "worldView":
          return hU(tU, RU, gU.getViewMatrix(), TU);
        case "viewProjection":
          return CU(tU, gU.getViewMatrix(), gU.getProjectionMatrix(), TU);
        case "worldViewProjection":
          return QU(tU, RU, gU.getTransformMatrix(), gU.getViewMatrix(), gU.getProjectionMatrix(), TU);
        default:
          if (UU.startsWith("u_")) {
            const pU = UU.toLowerCase();
            if (pU.startsWith("u_worldviewprojection")) return QU(tU, RU, gU.getTransformMatrix(), gU.getViewMatrix(), gU.getProjectionMatrix(), TU);
            if (pU.startsWith("u_viewprojection")) return CU(tU, gU.getViewMatrix(), gU.getProjectionMatrix(), TU);
            if (pU.startsWith("u_worldview")) return hU(tU, RU, gU.getViewMatrix(), TU);
            if (pU.startsWith("u_world")) return GU(tU, RU, TU);
            if (pU.startsWith("u_view")) return uU(tU, RU, TU)
          }
          return RU
      }
    }
    const WU = PU.c,
      fU = tU.d,
      xU = WU.prototype._updateMatrixForUniform,
      mU = tU.d.prototype.setMatrix;

    function IU() {
      tU.d.prototype.setMatrix = mU, fU._setMatrixOverride = void 0, WU.prototype._updateMatrixForUniform = xU, WU.prototype._updateMatrixForUniformOverride = void 0
    }

    function JU() {
      fU.prototype._setMatrixOverride = mU, fU.prototype.setMatrix = function(UU, RU) {
        return this._setMatrixOverride(UU, eU(UU, RU)), this
      }, WU.prototype._updateMatrixForUniformOverride = xU, WU.prototype._updateMatrixForUniform = function(UU, RU) {
        this._updateMatrixForUniformOverride(UU, eU(UU, RU))
      }
    }
  },
  39495: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU,
      f: () => pU
    });
    var tU = gU(39486);

    function pU(UU, RU) {
      RU.WHITEBALANCE && UU.push("whiteBalanceMatrix"), RU.EXPOSURE && UU.push("exposureLinear"), RU.CONTRAST && UU.push("contrast"), RU.COLORGRADING && UU.push("colorTransformSettings"), (RU.VIGNETTE || RU.DITHER) && UU.push("vInverseScreenSize"), RU.VIGNETTE && (UU.push("vignetteSettings1"), UU.push("vignetteSettings2")), RU.COLORCURVES && (0, tU.d)(UU), RU.DITHER && UU.push("ditherIntensity")
    }

    function EU(UU, RU) {
      RU.COLORGRADING && UU.push("txColorTransform")
    }
  },
  39483: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => ZU,
      g: () => BU
    });
    var tU = gU(39377),
      pU = gU(39380),
      EU = gU(36624),
      PU = gU(36761),
      TU = gU(36626),
      qU = gU(36600);
    const KU = [
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
      cU = 1e6 / KU[KU.length - 1][0],
      GU = 150;

    function jU(UU, RU) {
      const gU = Number.isNaN(UU) ? cU : Math.max(UU, cU),
        tU = (0, TU.Clamp)(1e6 / gU, KU[0][0], KU[KU.length - 1][0]);
      let pU = 0,
        EU = KU.length - 1;
      for (; EU - pU > 1;) {
        const UU = pU + EU >> 1;
        KU[UU][0] <= tU ? pU = UU : EU = UU
      }
      const PU = pU,
        [jU, uU, CU, hU] = KU[PU],
        [QU, eU, WU, fU] = KU[PU + 1],
        xU = (tU - jU) / (QU - jU),
        mU = qU.l.Lerp(new qU.l(uU, CU), new qU.l(eU, WU), xU),
        IU = qU.l.Normalize(new qU.l(1, hU)),
        JU = qU.l.Normalize(new qU.l(1, fU)),
        wU = qU.l.Normalize(qU.l.Lerp(IU, JU, xU)),
        nU = (0, TU.Clamp)(RU, -150, GU);
      mU.ptU(wU.scale(nU / 3e3));
      const bU = 2 * mU.x - 8 * mU.y + 4,
        oU = 3 * mU.x / bU,
        ZU = 2 * mU.y / bU;
      return new qU.n(oU / ZU, 1, (1 - oU - ZU) / ZU)
    }
    const uU = qU.c.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      CU = qU.c.Invert(uU);

    function hU(UU, RU) {
      const gU = RU > 0 ? UU / RU : 10;
      return (0, TU.Clamp)(gU, .1, 10)
    }

    function QU(UU, RU) {
      const gU = qU.n.TransformNormal(UU, uU),
        tU = qU.n.TransformNormal(RU, uU),
        pU = qU.c.FromArray([hU(tU.x, gU.x), 0, 0, 0, 0, hU(tU.y, gU.y), 0, 0, 0, 0, hU(tU.z, gU.z), 0, 0, 0, 0, 1]);
      return uU.multiply(pU).multiply(CU)
    }
    const eU = new qU.n(.95047, 1, 1.08883),
      WU = qU.c.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(QU(eU, jU(6500, 0))),
      fU = qU.c.Invert(WU),
      xU = qU.n.TransformNormal(new qU.n(1, 1, 1), WU);
    var mU = gU(39395),
      IU = gU(39486);
    let JU = (() => {
      var UU;
      let RU, gU, EU, TU, qU, KU, cU, GU, jU, uU, CU, hU, QU = [],
        eU = [],
        WU = [],
        fU = [],
        xU = [],
        JU = [],
        wU = [],
        nU = [],
        bU = [],
        oU = [],
        ZU = [],
        aU = [],
        YU = [],
        BU = [],
        VU = [],
        rU = [],
        XU = [],
        vU = [],
        dU = [],
        HU = [],
        SU = [],
        sU = [],
        yU = [],
        kU = [];
      return UU = class {
        constructor() {
          this._dirty = !0, this._tempColor = new PU.g(0, 0, 0, 0), this._globalCurve = new PU.g(0, 0, 0, 0), this._highlightsCurve = new PU.g(0, 0, 0, 0), this._midtonesCurve = new PU.g(0, 0, 0, 0), this._shadowsCurve = new PU.g(0, 0, 0, 0), this._positiveCurve = new PU.g(0, 0, 0, 0), this._negativeCurve = new PU.g(0, 0, 0, 0), this._globalHue = (0, tU.j)(this, QU, 30), this._globalDensity = ((0, tU.j)(this, eU), (0, tU.j)(this, WU, 0)), this._globalSaturation = ((0, tU.j)(this, fU), (0, tU.j)(this, xU, 0)), this._globalExposure = ((0, tU.j)(this, JU), (0, tU.j)(this, wU, 0)), this._highlightsHue = ((0, tU.j)(this, nU), (0, tU.j)(this, bU, 30)), this._highlightsDensity = ((0, tU.j)(this, oU), (0, tU.j)(this, ZU, 0)), this._highlightsSaturation = ((0, tU.j)(this, aU), (0, tU.j)(this, YU, 0)), this._highlightsExposure = ((0, tU.j)(this, BU), (0, tU.j)(this, VU, 0)), this._midtonesHue = ((0, tU.j)(this, rU), (0, tU.j)(this, XU, 30)), this._midtonesDensity = ((0, tU.j)(this, vU), (0, tU.j)(this, dU, 0)), this._midtonesSaturation = ((0, tU.j)(this, HU), (0, tU.j)(this, SU, 0)), this._midtonesExposure = ((0, tU.j)(this, sU), (0, tU.j)(this, yU, 0)), this._shadowsHue = ((0, tU.j)(this, kU), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(UU) {
          this._globalHue = UU, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(UU) {
          this._globalDensity = UU, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(UU) {
          this._globalSaturation = UU, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(UU) {
          this._globalExposure = UU, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(UU) {
          this._highlightsHue = UU, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(UU) {
          this._highlightsDensity = UU, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(UU) {
          this._highlightsSaturation = UU, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(UU) {
          this._highlightsExposure = UU, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(UU) {
          this._midtonesHue = UU, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(UU) {
          this._midtonesDensity = UU, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(UU) {
          this._midtonesSaturation = UU, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(UU) {
          this._midtonesExposure = UU, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(UU) {
          this._shadowsHue = UU, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(UU) {
          this._shadowsDensity = UU, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(UU) {
          this._shadowsSaturation = UU, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(UU) {
          this._shadowsExposure = UU, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(RU, gU, tU, pU, EU) {
          null != RU && (RU = UU._Clamp(RU, 0, 360), gU = UU._Clamp(gU, -100, 100), tU = UU._Clamp(tU, -100, 100), pU = UU._Clamp(pU, -100, 100), gU = UU._ApplyColorGradingSliderNonlinear(gU), gU *= .5, pU = UU._ApplyColorGradingSliderNonlinear(pU), gU < 0 && (gU *= -1, RU = (RU + 180) % 360), UU._FromHSBToRef(RU, gU, 50 + .25 * pU, EU), EU.scaleToRef(2, EU), EU.a = 1 + .01 * tU)
        }
        static _ApplyColorGradingSliderNonlinear(UU) {
          UU /= 100;
          let RU = Math.abs(UU);
          return RU = Math.pow(RU, 2), UU < 0 && (RU *= -1), RU *= 100, RU
        }
        static _FromHSBToRef(RU, gU, tU, pU) {
          let EU = UU._Clamp(RU, 0, 360);
          const PU = UU._Clamp(gU / 100, 0, 1),
            TU = UU._Clamp(tU / 100, 0, 1);
          if (0 === PU) pU.r = TU, pU.g = TU, pU.b = TU;
          else {
            EU /= 60;
            const UU = Math.floor(EU),
              RU = EU - UU,
              gU = TU * (1 - PU),
              tU = TU * (1 - PU * RU),
              qU = TU * (1 - PU * (1 - RU));
            switch (UU) {
              case 0:
                pU.r = TU, pU.g = qU, pU.b = gU;
                break;
              case 1:
                pU.r = tU, pU.g = TU, pU.b = gU;
                break;
              case 2:
                pU.r = gU, pU.g = TU, pU.b = qU;
                break;
              case 3:
                pU.r = gU, pU.g = tU, pU.b = TU;
                break;
              case 4:
                pU.r = qU, pU.g = gU, pU.b = TU;
                break;
              default:
                pU.r = TU, pU.g = gU, pU.b = tU
            }
          }
          pU.a = 1
        }
        static _Clamp(UU, RU, gU) {
          return Math.min(Math.max(UU, RU), gU)
        }
        clone() {
          return mU.b.Clone((() => new UU), this)
        }
        serialize() {
          return mU.b.Serialize(this)
        }
        _bind(UU) {
          let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), UU && (UU.setFloat4(RU, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), UU.setFloat4(gU, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), UU.setFloat4(tU, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const PU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        RU = [(0, pU.K)()], gU = [(0, pU.K)()], EU = [(0, pU.K)()], TU = [(0, pU.K)()], qU = [(0, pU.K)()], KU = [(0, pU.K)()], cU = [(0, pU.K)()], GU = [(0, pU.K)()], jU = [(0, pU.K)()], uU = [(0, pU.K)()], CU = [(0, pU.K)()], hU = [(0, pU.K)()], (0, tU.i)(null, null, RU, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: UU => "_globalHue" in UU,
            get: UU => UU._globalHue,
            set: (UU, RU) => {
              UU._globalHue = RU
            }
          },
          metadata: PU
        }, QU, eU), (0, tU.i)(null, null, gU, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "_globalDensity" in UU,
            get: UU => UU._globalDensity,
            set: (UU, RU) => {
              UU._globalDensity = RU
            }
          },
          metadata: PU
        }, WU, fU), (0, tU.i)(null, null, EU, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: UU => "_globalSaturation" in UU,
            get: UU => UU._globalSaturation,
            set: (UU, RU) => {
              UU._globalSaturation = RU
            }
          },
          metadata: PU
        }, xU, JU), (0, tU.i)(null, null, TU, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: UU => "_globalExposure" in UU,
            get: UU => UU._globalExposure,
            set: (UU, RU) => {
              UU._globalExposure = RU
            }
          },
          metadata: PU
        }, wU, nU), (0, tU.i)(null, null, qU, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: UU => "_highlightsHue" in UU,
            get: UU => UU._highlightsHue,
            set: (UU, RU) => {
              UU._highlightsHue = RU
            }
          },
          metadata: PU
        }, bU, oU), (0, tU.i)(null, null, KU, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "_highlightsDensity" in UU,
            get: UU => UU._highlightsDensity,
            set: (UU, RU) => {
              UU._highlightsDensity = RU
            }
          },
          metadata: PU
        }, ZU, aU), (0, tU.i)(null, null, cU, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: UU => "_highlightsSaturation" in UU,
            get: UU => UU._highlightsSaturation,
            set: (UU, RU) => {
              UU._highlightsSaturation = RU
            }
          },
          metadata: PU
        }, YU, BU), (0, tU.i)(null, null, GU, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: UU => "_highlightsExposure" in UU,
            get: UU => UU._highlightsExposure,
            set: (UU, RU) => {
              UU._highlightsExposure = RU
            }
          },
          metadata: PU
        }, VU, rU), (0, tU.i)(null, null, jU, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: UU => "_midtonesHue" in UU,
            get: UU => UU._midtonesHue,
            set: (UU, RU) => {
              UU._midtonesHue = RU
            }
          },
          metadata: PU
        }, XU, vU), (0, tU.i)(null, null, uU, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: UU => "_midtonesDensity" in UU,
            get: UU => UU._midtonesDensity,
            set: (UU, RU) => {
              UU._midtonesDensity = RU
            }
          },
          metadata: PU
        }, dU, HU), (0, tU.i)(null, null, CU, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: UU => "_midtonesSaturation" in UU,
            get: UU => UU._midtonesSaturation,
            set: (UU, RU) => {
              UU._midtonesSaturation = RU
            }
          },
          metadata: PU
        }, SU, sU), (0, tU.i)(null, null, hU, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: UU => "_midtonesExposure" in UU,
            get: UU => UU._midtonesExposure,
            set: (UU, RU) => {
              UU._midtonesExposure = RU
            }
          },
          metadata: PU
        }, yU, kU), PU && Object.defineProperty(UU, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: PU
        })
      })(), UU.PrepareUniforms = IU.d, UU
    })();

    function wU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      UU._bind(RU, gU, tU, pU)
    }
    var nU = gU(39311),
      bU = gU(39495),
      oU = gU(36639);
    let ZU = (() => {
        var UU;
        let RU, gU, KU, uU, CU, hU, eU, IU, oU, ZU, aU, YU, BU, VU, rU, XU, vU, dU, HU, SU, sU, yU, kU, FU, iU, AU, zU, MU, DU = [],
          LU = [],
          NU = [],
          lU = [],
          OU = [],
          UR = [],
          RR = [],
          gR = [],
          tR = [],
          pR = [],
          ER = [],
          PR = [],
          TR = [],
          qR = [],
          KR = [],
          cR = [],
          GR = [],
          jR = [],
          uR = [],
          CR = [],
          hR = [],
          QR = [],
          eR = [],
          WR = [],
          fR = [],
          xR = [],
          mR = [],
          IR = [],
          JR = [],
          wR = [],
          nR = [],
          bR = [],
          oR = [],
          ZR = [],
          aR = [],
          YR = [],
          BR = [],
          VR = [],
          rR = [],
          XR = [],
          vR = [],
          dR = [],
          HR = [],
          SR = [],
          sR = [],
          yR = [],
          kR = [],
          FR = [],
          iR = [],
          AR = [],
          zR = [],
          MR = [],
          DR = [],
          LR = [],
          NR = [],
          lR = [];
        return UU = class {
          constructor() {
            this.colorCurves = (0, tU.j)(this, DU, new JU), this._colorCurvesEnabled = ((0, tU.j)(this, LU), (0, tU.j)(this, NU, !1)), this._colorGradingTexture = ((0, tU.j)(this, lU), (0, tU.j)(this, OU, void 0)), this._colorGradingEnabled = ((0, tU.j)(this, UR), (0, tU.j)(this, RR, !1)), this._colorGradingWithGreenDepth = ((0, tU.j)(this, gR), (0, tU.j)(this, tR, !0)), this._colorGradingBGR = ((0, tU.j)(this, pR), (0, tU.j)(this, ER, !0)), this._exposure = ((0, tU.j)(this, PR), (0, tU.j)(this, TR, 1)), this._toneMappingEnabled = ((0, tU.j)(this, qR), (0, tU.j)(this, KR, !1)), this._toneMappingType = ((0, tU.j)(this, cR), (0, tU.j)(this, GR, UU.TONEMAPPING_STANDARD)), this._contrast = ((0, tU.j)(this, jR), (0, tU.j)(this, uR, 1)), this._whiteBalanceEnabled = ((0, tU.j)(this, CR), (0, tU.j)(this, hR, !1)), this._temperature = ((0, tU.j)(this, QR), (0, tU.j)(this, eR, 6500)), this._tint = ((0, tU.j)(this, WR), (0, tU.j)(this, fR, 0)), this._whiteBalanceMatrix = ((0, tU.j)(this, xR), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, tU.j)(this, mR, 0), this.vignetteCenterX = ((0, tU.j)(this, IR), (0, tU.j)(this, JR, 0)), this.vignetteCenterY = ((0, tU.j)(this, wR), (0, tU.j)(this, nR, 0)), this.vignetteWeight = ((0, tU.j)(this, bR), (0, tU.j)(this, oR, 1.5)), this.vignetteColor = ((0, tU.j)(this, ZR), (0, tU.j)(this, aR, new PU.g(0, 0, 0, 0))), this.vignetteCameraFov = ((0, tU.j)(this, YR), (0, tU.j)(this, BR, .5)), this._vignetteBlendMode = ((0, tU.j)(this, VR), (0, tU.j)(this, rR, UU.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, tU.j)(this, XR), (0, tU.j)(this, vR, !1)), this._ditheringEnabled = ((0, tU.j)(this, dR), (0, tU.j)(this, HR, !1)), this._ditheringIntensity = ((0, tU.j)(this, SR), (0, tU.j)(this, sR, 1 / 255)), this._skipFinalColorClamp = ((0, tU.j)(this, yR), (0, tU.j)(this, kR, !1)), this._applyByPostProcess = ((0, tU.j)(this, FR), (0, tU.j)(this, iR, !1)), this._isEnabled = ((0, tU.j)(this, AR), (0, tU.j)(this, zR, !0)), this.outputTextureWidth = ((0, tU.j)(this, MR), (0, tU.j)(this, DR, 0)), this.outputTextureHeight = ((0, tU.j)(this, LR), (0, tU.j)(this, NR, 0)), this.onUpdateParameters = ((0, tU.j)(this, lR), new EU.b)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(UU) {
            this._colorCurvesEnabled !== UU && (this._colorCurvesEnabled = UU, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(UU) {
            this._colorGradingTexture !== UU && (this._colorGradingTexture = UU, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(UU) {
            this._colorGradingEnabled !== UU && (this._colorGradingEnabled = UU, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(UU) {
            this._colorGradingWithGreenDepth !== UU && (this._colorGradingWithGreenDepth = UU, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(UU) {
            this._colorGradingBGR !== UU && (this._colorGradingBGR = UU, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(UU) {
            this._exposure !== UU && (this._exposure = UU, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(UU) {
            this._toneMappingEnabled !== UU && (this._toneMappingEnabled = UU, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(UU) {
            this._toneMappingType !== UU && (this._toneMappingType = UU, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(UU) {
            this._contrast !== UU && (this._contrast = UU, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(UU) {
            this._whiteBalanceEnabled !== UU && (this._whiteBalanceEnabled = UU, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(UU) {
            UU = Number.isNaN(UU) ? cU : Math.max(UU, cU), this._temperature !== UU && (this._temperature = UU, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(UU) {
            UU = (0, TU.Clamp)(UU, -150, GU), this._tint !== UU && (this._tint = UU, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(UU, RU) {
              const gU = QU(jU(UU, RU), xU),
                tU = WU.multiply(gU).multiply(fU);
              return qU.c.GetAsMatrix3x3(tU)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(UU) {
            this.vignetteCenterY = UU
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(UU) {
            this.vignetteCenterX = UU
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(UU) {
            this._vignetteBlendMode !== UU && (this._vignetteBlendMode = UU, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(UU) {
            this._vignetteEnabled !== UU && (this._vignetteEnabled = UU, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(UU) {
            this._ditheringEnabled !== UU && (this._ditheringEnabled = UU, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(UU) {
            this._ditheringIntensity !== UU && (this._ditheringIntensity = UU, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(UU) {
            this._skipFinalColorClamp !== UU && (this._skipFinalColorClamp = UU, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(UU) {
            this._applyByPostProcess !== UU && (this._applyByPostProcess = UU, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(UU) {
            this._isEnabled !== UU && (this._isEnabled = UU, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(RU) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return RU.WHITEBALANCE = !1, RU.VIGNETTE = !1, RU.TONEMAPPING = 0, RU.CONTRAST = !1, RU.EXPOSURE = !1, RU.COLORCURVES = !1, RU.COLORGRADING = !1, RU.COLORGRADING3D = !1, RU.DITHER = !1, RU.IMAGEPROCESSING = !1, RU.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(RU.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (RU.WHITEBALANCE = this._whiteBalanceEnabled, RU.VIGNETTE = this.vignetteEnabled, RU.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === UU._VIGNETTEMODE_MULTIPLY, RU.VIGNETTEBLENDMODEOPAQUE = !RU.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case UU.TONEMAPPING_KHR_PBR_NEUTRAL:
                RU.TONEMAPPING = 3;
                break;
              case UU.TONEMAPPING_ACES:
                RU.TONEMAPPING = 2;
                break;
              default:
                RU.TONEMAPPING = 1
            } else RU.TONEMAPPING = 0;
            RU.CONTRAST = 1 !== this.contrast, RU.EXPOSURE = 1 !== this.exposure, RU.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, RU.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, RU.COLORGRADING ? RU.COLORGRADING3D = this.colorGradingTexture.is3D : RU.COLORGRADING3D = !1, RU.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, RU.SAMPLER3DBGRMAP = this.colorGradingBGR, RU.DITHER = this._ditheringEnabled, RU.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, RU.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, RU.IMAGEPROCESSING = RU.WHITEBALANCE || RU.VIGNETTE || !!RU.TONEMAPPING || RU.CONTRAST || RU.EXPOSURE || RU.COLORCURVES || RU.COLORGRADING || RU.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(UU, RU) {
            if (this._whiteBalanceEnabled && UU.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && wU(this.colorCurves, UU), this._vignetteEnabled || this._ditheringEnabled) {
              const gU = 1 / (this.outputTextureWidth || UU.WC().getRenderWidth()),
                tU = 1 / (this.outputTextureHeight || UU.WC().getRenderHeight());
              if (UU.setFloat2("vInverseScreenSize", gU, tU), this._ditheringEnabled && UU.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const pU = null != RU ? RU : tU / gU;
                let EU = Math.tan(.5 * this.vignetteCameraFov),
                  PU = EU * pU;
                const TU = Math.sqrt(PU * EU);
                PU = (0, nU.i)(PU, TU, this.vignetteStretch), EU = (0, nU.i)(EU, TU, this.vignetteStretch), UU.setFloat4("vignetteSettings1", PU, EU, -PU * this.vignetteCenterX, -EU * this.vignetteCenterY);
                const qU = -2 * this.vignetteWeight;
                UU.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, qU)
              }
            }
            if (UU.setFloat("exposureLinear", this.exposure), UU.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              UU.setTexture("txColorTransform", this.colorGradingTexture);
              const RU = this.colorGradingTexture.getSize().height;
              UU.setFloat4("colorTransformSettings", (RU - 1) / RU, .5 / RU, RU, this.colorGradingTexture.level)
            }
          }
          clone() {
            return mU.b.Clone((() => new UU), this)
          }
          serialize() {
            return mU.b.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const EU = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          RU = [(0, pU.k)()], gU = [(0, pU.K)()], KU = [(0, pU.D)("colorGradingTexture")], uU = [(0, pU.K)()], CU = [(0, pU.K)()], hU = [(0, pU.K)()], eU = [(0, pU.K)()], IU = [(0, pU.K)()], oU = [(0, pU.K)()], ZU = [(0, pU.K)()], aU = [(0, pU.K)()], YU = [(0, pU.K)()], BU = [(0, pU.K)()], VU = [(0, pU.K)()], rU = [(0, pU.K)()], XU = [(0, pU.K)()], vU = [(0, pU.K)()], dU = [(0, pU.p)()], HU = [(0, pU.K)()], SU = [(0, pU.K)()], sU = [(0, pU.K)()], yU = [(0, pU.K)()], kU = [(0, pU.K)()], FU = [(0, pU.K)()], iU = [(0, pU.K)()], AU = [(0, pU.K)()], zU = [(0, pU.K)()], MU = [(0, pU.K)()], (0, tU.i)(null, null, RU, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: UU => "colorCurves" in UU,
              get: UU => UU.colorCurves,
              set: (UU, RU) => {
                UU.colorCurves = RU
              }
            },
            metadata: EU
          }, DU, LU), (0, tU.i)(null, null, gU, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: UU => "_colorCurvesEnabled" in UU,
              get: UU => UU._colorCurvesEnabled,
              set: (UU, RU) => {
                UU._colorCurvesEnabled = RU
              }
            },
            metadata: EU
          }, NU, lU), (0, tU.i)(null, null, KU, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: UU => "_colorGradingTexture" in UU,
              get: UU => UU._colorGradingTexture,
              set: (UU, RU) => {
                UU._colorGradingTexture = RU
              }
            },
            metadata: EU
          }, OU, UR), (0, tU.i)(null, null, uU, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: UU => "_colorGradingEnabled" in UU,
              get: UU => UU._colorGradingEnabled,
              set: (UU, RU) => {
                UU._colorGradingEnabled = RU
              }
            },
            metadata: EU
          }, RR, gR), (0, tU.i)(null, null, CU, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: UU => "_colorGradingWithGreenDepth" in UU,
              get: UU => UU._colorGradingWithGreenDepth,
              set: (UU, RU) => {
                UU._colorGradingWithGreenDepth = RU
              }
            },
            metadata: EU
          }, tR, pR), (0, tU.i)(null, null, hU, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: UU => "_colorGradingBGR" in UU,
              get: UU => UU._colorGradingBGR,
              set: (UU, RU) => {
                UU._colorGradingBGR = RU
              }
            },
            metadata: EU
          }, ER, PR), (0, tU.i)(null, null, eU, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: UU => "_exposure" in UU,
              get: UU => UU._exposure,
              set: (UU, RU) => {
                UU._exposure = RU
              }
            },
            metadata: EU
          }, TR, qR), (0, tU.i)(null, null, IU, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: UU => "_toneMappingEnabled" in UU,
              get: UU => UU._toneMappingEnabled,
              set: (UU, RU) => {
                UU._toneMappingEnabled = RU
              }
            },
            metadata: EU
          }, KR, cR), (0, tU.i)(null, null, oU, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: UU => "_toneMappingType" in UU,
              get: UU => UU._toneMappingType,
              set: (UU, RU) => {
                UU._toneMappingType = RU
              }
            },
            metadata: EU
          }, GR, jR), (0, tU.i)(null, null, ZU, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: UU => "_contrast" in UU,
              get: UU => UU._contrast,
              set: (UU, RU) => {
                UU._contrast = RU
              }
            },
            metadata: EU
          }, uR, CR), (0, tU.i)(null, null, aU, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: UU => "_whiteBalanceEnabled" in UU,
              get: UU => UU._whiteBalanceEnabled,
              set: (UU, RU) => {
                UU._whiteBalanceEnabled = RU
              }
            },
            metadata: EU
          }, hR, QR), (0, tU.i)(null, null, YU, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: UU => "_temperature" in UU,
              get: UU => UU._temperature,
              set: (UU, RU) => {
                UU._temperature = RU
              }
            },
            metadata: EU
          }, eR, WR), (0, tU.i)(null, null, BU, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: UU => "_tint" in UU,
              get: UU => UU._tint,
              set: (UU, RU) => {
                UU._tint = RU
              }
            },
            metadata: EU
          }, fR, xR), (0, tU.i)(null, null, VU, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: UU => "vignetteStretch" in UU,
              get: UU => UU.vignetteStretch,
              set: (UU, RU) => {
                UU.vignetteStretch = RU
              }
            },
            metadata: EU
          }, mR, IR), (0, tU.i)(null, null, rU, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: UU => "vignetteCenterX" in UU,
              get: UU => UU.vignetteCenterX,
              set: (UU, RU) => {
                UU.vignetteCenterX = RU
              }
            },
            metadata: EU
          }, JR, wR), (0, tU.i)(null, null, XU, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: UU => "vignetteCenterY" in UU,
              get: UU => UU.vignetteCenterY,
              set: (UU, RU) => {
                UU.vignetteCenterY = RU
              }
            },
            metadata: EU
          }, nR, bR), (0, tU.i)(null, null, vU, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "vignetteWeight" in UU,
              get: UU => UU.vignetteWeight,
              set: (UU, RU) => {
                UU.vignetteWeight = RU
              }
            },
            metadata: EU
          }, oR, ZR), (0, tU.i)(null, null, dU, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: UU => "vignetteColor" in UU,
              get: UU => UU.vignetteColor,
              set: (UU, RU) => {
                UU.vignetteColor = RU
              }
            },
            metadata: EU
          }, aR, YR), (0, tU.i)(null, null, HU, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: UU => "vignetteCameraFov" in UU,
              get: UU => UU.vignetteCameraFov,
              set: (UU, RU) => {
                UU.vignetteCameraFov = RU
              }
            },
            metadata: EU
          }, BR, VR), (0, tU.i)(null, null, SU, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: UU => "_vignetteBlendMode" in UU,
              get: UU => UU._vignetteBlendMode,
              set: (UU, RU) => {
                UU._vignetteBlendMode = RU
              }
            },
            metadata: EU
          }, rR, XR), (0, tU.i)(null, null, sU, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: UU => "_vignetteEnabled" in UU,
              get: UU => UU._vignetteEnabled,
              set: (UU, RU) => {
                UU._vignetteEnabled = RU
              }
            },
            metadata: EU
          }, vR, dR), (0, tU.i)(null, null, yU, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: UU => "_ditheringEnabled" in UU,
              get: UU => UU._ditheringEnabled,
              set: (UU, RU) => {
                UU._ditheringEnabled = RU
              }
            },
            metadata: EU
          }, HR, SR), (0, tU.i)(null, null, kU, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: UU => "_ditheringIntensity" in UU,
              get: UU => UU._ditheringIntensity,
              set: (UU, RU) => {
                UU._ditheringIntensity = RU
              }
            },
            metadata: EU
          }, sR, yR), (0, tU.i)(null, null, FU, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: UU => "_skipFinalColorClamp" in UU,
              get: UU => UU._skipFinalColorClamp,
              set: (UU, RU) => {
                UU._skipFinalColorClamp = RU
              }
            },
            metadata: EU
          }, kR, FR), (0, tU.i)(null, null, iU, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: UU => "_applyByPostProcess" in UU,
              get: UU => UU._applyByPostProcess,
              set: (UU, RU) => {
                UU._applyByPostProcess = RU
              }
            },
            metadata: EU
          }, iR, AR), (0, tU.i)(null, null, AU, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: UU => "_isEnabled" in UU,
              get: UU => UU._isEnabled,
              set: (UU, RU) => {
                UU._isEnabled = RU
              }
            },
            metadata: EU
          }, zR, MR), (0, tU.i)(null, null, zU, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: UU => "outputTextureWidth" in UU,
              get: UU => UU.outputTextureWidth,
              set: (UU, RU) => {
                UU.outputTextureWidth = RU
              }
            },
            metadata: EU
          }, DR, LR), (0, tU.i)(null, null, MU, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: UU => "outputTextureHeight" in UU,
              get: UU => UU.outputTextureHeight,
              set: (UU, RU) => {
                UU.outputTextureHeight = RU
              }
            },
            metadata: EU
          }, NR, lR), EU && Object.defineProperty(UU, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: EU
          })
        })(), UU.TONEMAPPING_STANDARD = 0, UU.TONEMAPPING_ACES = 1, UU.TONEMAPPING_KHR_PBR_NEUTRAL = 2, UU.PrepareUniforms = bU.f, UU.PrepareSamplers = bU.c, UU._VIGNETTEMODE_MULTIPLY = 0, UU._VIGNETTEMODE_OPAQUE = 1, UU
      })(),
      aU = !1;

    function YU(UU) {
      const RU = mU.b.Parse((() => new ZU), UU, null, null);
      return void 0 !== UU.vignetteCentreX && (RU.vignetteCenterX = UU.vignetteCentreX), void 0 !== UU.vignetteCentreY && (RU.vignetteCenterY = UU.vignetteCentreY), RU
    }

    function BU() {
      aU || (aU = !0, ZU.Parse = YU, mU.b._ImageProcessingConfigurationParser = YU, (0, oU.g)("BABYLON.ImageProcessingConfiguration", ZU))
    }
  },
  39504: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU
    });
    var tU = gU(38236),
      pU = gU(39473);
    class EU {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = arguments.length > 3 ? arguments[3] : void 0,
          pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          EU = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = UU, this._noUBO = !UU.supportsUniformBuffers || pU, this._dynamic = gU, this._name = tU ?? "no-name", this._data = RU || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === EU && this._engine._features.trackUbosInFrame || !0 === EU) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.p_ = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.p_ = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(UU) {
        let RU;
        if (RU = UU <= 2 ? UU : 4, this._uniformLocationPointer % RU !== 0) {
          const UU = this._uniformLocationPointer;
          this._uniformLocationPointer += RU - this._uniformLocationPointer % RU;
          const gU = this._uniformLocationPointer - UU;
          for (let RU = 0; RU < gU; RU++) this._data.push(0)
        }
      }
      addUniform(UU, RU) {
        let gU, tU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (tU > 0 && "number" === typeof RU && (this._uniformArraySizes[UU] = {
            strideSize: RU,
            arraySize: tU
          }), void 0 === this._uniformLocations[UU] && (this._uniformNames.push(UU), !this._noUBO)) {
          if (tU > 0) {
            if (RU instanceof Array) throw "addUniform should not be use with Array in UBO: " + UU;
            if (this._fillAlignment(4), 16 == RU) RU *= tU;
            else {
              RU = RU * tU + (4 - RU) * tU
            }
            gU = [];
            for (let UU = 0; UU < RU; UU++) gU.push(0)
          } else {
            if (RU instanceof Array) gU = RU, RU = gU.length;
            else {
              gU = [];
              for (let UU = 0; UU < RU; UU++) gU.push(0)
            }
            this._fillAlignment(RU)
          }
          this._uniformSizes[UU] = RU, this._uniformLocations[UU] = this._uniformLocationPointer, this._uniformLocationPointer += RU;
          for (let UU = 0; UU < RU; UU++) this._data.push(gU[UU]);
          this._needSync = !0
        }
      }
      addMatrix(UU, RU) {
        this.addUniform(UU, Array.prototype.slice.call(RU.vgU()))
      }
      addFloat2(UU, RU, gU) {
        const tU = [RU, gU];
        this.addUniform(UU, tU)
      }
      addFloat3(UU, RU, gU, tU) {
        const pU = [RU, gU, tU];
        this.addUniform(UU, pU)
      }
      addColor3(UU, RU) {
        const gU = [RU.r, RU.g, RU.b];
        this.addUniform(UU, gU)
      }
      addColor4(UU, RU, gU) {
        const tU = [RU.r, RU.g, RU.b, gU];
        this.addUniform(UU, tU)
      }
      addVector3(UU, RU) {
        const gU = [RU.x, RU.y, RU.z];
        this.addUniform(UU, gU)
      }
      addMatrix3x3(UU) {
        this.addUniform(UU, 12)
      }
      addMatrix2x2(UU) {
        this.addUniform(UU, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const UU = [];
        let RU = 0;
        for (const gU in this._uniformLocations)
          if (UU.push(gU), 10 === ++RU) break;
        return UU.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const UU of this._ownerListsBySlot.values()) this._removeOwnerBacklink(UU);
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
      set name(UU) {
        this._name = UU
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(UU, RU) {
        for (let gU = 0; gU < UU.length; ++gU)
          if (UU[gU] !== RU[gU]) return !1;
        return !0
      }
      _copyBuffer(UU, RU) {
        for (let gU = 0; gU < UU.length; ++gU) RU[gU] = UU[gU]
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
      _updateOwnerKeyed(UU) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let RU = this._slotByOwner.get(UU);
        if (void 0 === RU && (RU = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(UU, RU), this._ownerCount++, UU._uniformBuffersWithOwnedSlot || (UU._uniformBuffersWithOwnedSlot = []), UU._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(RU, UU._uniformBuffersWithOwnedSlot)), this._slotGeneration[RU] === this._dataGeneration) return this._bufferIndex = RU, this._buffer = this._buffers[RU][0], this.bindUniformBuffer(), this._slotFrameId[RU] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const gU = this._buffers[RU][1];
        this._slotFrameId[RU] === this._currentFrameId && gU && !this._buffersEqual(this._bufferData, gU) && (RU = this._takeFreeSlot(!1)), this._bufferIndex = RU, this._buffer = this._buffers[RU][0], this.bindUniformBuffer();
        const tU = this._buffers[RU][1];
        tU && this._buffersEqual(this._bufferData, tU) || (tU && this._copyBuffer(this._bufferData, tU), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[RU] = this._currentFrameId, this._slotGeneration[RU] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(UU) {
        for (let gU = 0; gU < this._freeSlots.length; ++gU) {
          const RU = this._freeSlots[gU];
          if (this._slotFrameId[RU] !== this._currentFrameId) return UU && (this._freeSlots[gU] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), RU
        }
        this._rebuild();
        const RU = this._buffers.length - 1;
        return UU || this._freeSlots.push(RU), RU
      }
      _releaseOwnerSlot(UU) {
        const RU = this._slotByOwner?.get(UU);
        if (void 0 === RU) return;
        this._slotByOwner.delete(UU);
        const gU = this._ownerListsBySlot.get(RU);
        gU && (this._removeOwnerBacklink(gU), this._ownerListsBySlot.delete(RU)), this._ownerCount--, this._freeSlots.push(RU)
      }
      _removeOwnerBacklink(UU) {
        const RU = UU.indexOf(this); - 1 !== RU && (UU[RU] = UU[UU.length - 1], UU.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(UU, RU, gU) {
        this._checkNewFrame();
        let pU = this._uniformLocations[UU];
        if (void 0 === pU) {
          if (this._buffer) return void tU.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + UU);
          this.addUniform(UU, gU), pU = this._uniformLocations[UU]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let UU = 0; UU < gU; UU++) this._bufferData[pU + UU] = RU[UU];
          this._dataGeneration++
        } else {
          let UU = !1;
          for (let tU = 0; tU < gU; tU++)(16 === gU && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[pU + tU] !== Math.fround(RU[tU])) && (UU = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[pU + tU] = RU[tU]);
          this._needSync = this._needSync || UU, UU && this._dataGeneration++
        }
      }
      updateUniformArray(UU, RU, gU) {
        this._checkNewFrame();
        const EU = this._uniformLocations[UU];
        if (void 0 === EU) return void tU.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const PU = this._uniformArraySizes[UU];
        if (this._dynamic) {
          for (let UU = 0; UU < gU; UU++) this._bufferData[EU + UU] = RU[UU];
          this._dataGeneration++
        } else {
          let UU = !1,
            tU = 0,
            TU = 0;
          for (let qU = 0; qU < gU; qU++)
            if (this._bufferData[EU + 4 * TU + tU] !== pU.g.FloatRound(RU[qU]) && (UU = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[EU + 4 * TU + tU] = RU[qU]), tU++, tU === PU.strideSize) {
              for (; tU < 4; tU++) this._bufferData[EU + 4 * TU + tU] = 0;
              tU = 0, TU++
            } this._needSync = this._needSync || UU, UU && this._dataGeneration++
        }
      }
      _cacheMatrix(UU, RU) {
        this._checkNewFrame();
        const gU = this._valueCache[UU],
          tU = RU.updateFlag;
        return (void 0 === gU || gU !== tU) && (this._valueCache[UU] = tU, !0)
      }
      _updateMatrix3x3ForUniform(UU, RU) {
        for (let gU = 0; gU < 3; gU++) EU._TempBuffer[4 * gU] = RU[3 * gU], EU._TempBuffer[4 * gU + 1] = RU[3 * gU + 1], EU._TempBuffer[4 * gU + 2] = RU[3 * gU + 2], EU._TempBuffer[4 * gU + 3] = 0;
        this.updateUniform(UU, EU._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(UU, RU) {
        this._currentEffect.setMatrix3x3(UU, RU)
      }
      _updateMatrix2x2ForEffect(UU, RU) {
        this._currentEffect.setMatrix2x2(UU, RU)
      }
      _updateMatrix2x2ForUniform(UU, RU) {
        for (let gU = 0; gU < 2; gU++) EU._TempBuffer[4 * gU] = RU[2 * gU], EU._TempBuffer[4 * gU + 1] = RU[2 * gU + 1], EU._TempBuffer[4 * gU + 2] = 0, EU._TempBuffer[4 * gU + 3] = 0;
        this.updateUniform(UU, EU._TempBuffer, 8)
      }
      _updateFloatForEffect(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(UU + gU, RU)
      }
      _updateFloatForUniform(UU, RU) {
        EU._TempBuffer[0] = RU, this.updateUniform(UU, EU._TempBuffer, 1)
      }
      _updateFloat2ForEffect(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(UU + tU, RU, gU)
      }
      _updateFloat2ForUniform(UU, RU, gU) {
        EU._TempBuffer[0] = RU, EU._TempBuffer[1] = gU, this.updateUniform(UU, EU._TempBuffer, 2)
      }
      _updateFloat3ForEffect(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(UU + pU, RU, gU, tU)
      }
      _updateFloat3ForUniform(UU, RU, gU, tU) {
        EU._TempBuffer[0] = RU, EU._TempBuffer[1] = gU, EU._TempBuffer[2] = tU, this.updateUniform(UU, EU._TempBuffer, 3)
      }
      _updateFloat4ForEffect(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(UU + EU, RU, gU, tU, pU)
      }
      _updateFloat4ForUniform(UU, RU, gU, tU, pU) {
        EU._TempBuffer[0] = RU, EU._TempBuffer[1] = gU, EU._TempBuffer[2] = tU, EU._TempBuffer[3] = pU, this.updateUniform(UU, EU._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[UU]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(UU + gU, RU);
            break;
          case 3:
            this._currentEffect.setFloatArray3(UU + gU, RU);
            break;
          case 4:
            this._currentEffect.setFloatArray4(UU + gU, RU);
            break;
          default:
            this._currentEffect.setFloatArray(UU + gU, RU)
        }
      }
      _updateFloatArrayForUniform(UU, RU) {
        this.updateUniformArray(UU, RU, RU.length)
      }
      _updateArrayForEffect(UU, RU) {
        this._currentEffect.setArray(UU, RU)
      }
      _updateArrayForUniform(UU, RU) {
        this.updateUniformArray(UU, RU, RU.length)
      }
      _updateIntArrayForEffect(UU, RU) {
        this._currentEffect.setIntArray(UU, RU)
      }
      _updateIntArrayForUniform(UU, RU) {
        EU._TempBufferInt32View.set(RU), this.updateUniformArray(UU, EU._TempBuffer, RU.length)
      }
      _updateUIntArrayForEffect(UU, RU) {
        this._currentEffect.setUIntArray(UU, RU)
      }
      _updateUIntArrayForUniform(UU, RU) {
        EU._TempBufferUInt32View.set(RU), this.updateUniformArray(UU, EU._TempBuffer, RU.length)
      }
      _updateMatrixForEffect(UU, RU) {
        this._currentEffect.setMatrix(UU, RU)
      }
      _updateMatrixForUniform(UU, RU) {
        this._cacheMatrix(UU, RU) && this.updateUniform(UU, RU.vgU(), 16)
      }
      _updateMatricesForEffect(UU, RU) {
        this._currentEffect.setMatrices(UU, RU)
      }
      _updateMatricesForUniform(UU, RU) {
        this.updateUniform(UU, RU, RU.length)
      }
      _updateVector3ForEffect(UU, RU) {
        this._currentEffect.setVector3(UU, RU)
      }
      _updateVector3ForUniform(UU, RU) {
        EU._TempBuffer[0] = RU.x, EU._TempBuffer[1] = RU.y, EU._TempBuffer[2] = RU.z, this.updateUniform(UU, EU._TempBuffer, 3)
      }
      _updateVector4ForEffect(UU, RU) {
        this._currentEffect.setVector4(UU, RU)
      }
      _updateVector4ForUniform(UU, RU) {
        EU._TempBuffer[0] = RU.x, EU._TempBuffer[1] = RU.y, EU._TempBuffer[2] = RU.z, EU._TempBuffer[3] = RU.w, this.updateUniform(UU, EU._TempBuffer, 4)
      }
      _updateColor3ForEffect(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(UU + gU, RU)
      }
      _updateColor3ForUniform(UU, RU) {
        EU._TempBuffer[0] = RU.r, EU._TempBuffer[1] = RU.g, EU._TempBuffer[2] = RU.b, this.updateUniform(UU, EU._TempBuffer, 3)
      }
      _updateColor4ForEffect(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(UU + tU, RU, gU)
      }
      _updateDirectColor4ForEffect(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(UU + gU, RU)
      }
      _updateColor4ForUniform(UU, RU, gU) {
        EU._TempBuffer[0] = RU.r, EU._TempBuffer[1] = RU.g, EU._TempBuffer[2] = RU.b, EU._TempBuffer[3] = gU, this.updateUniform(UU, EU._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(UU, RU) {
        EU._TempBuffer[0] = RU.r, EU._TempBuffer[1] = RU.g, EU._TempBuffer[2] = RU.b, EU._TempBuffer[3] = RU.a, this.updateUniform(UU, EU._TempBuffer, 4)
      }
      _updateIntForEffect(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(UU + gU, RU)
      }
      _updateIntForUniform(UU, RU) {
        EU._TempBufferInt32View[0] = RU, this.updateUniform(UU, EU._TempBuffer, 1)
      }
      _updateInt2ForEffect(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(UU + tU, RU, gU)
      }
      _updateInt2ForUniform(UU, RU, gU) {
        EU._TempBufferInt32View[0] = RU, EU._TempBufferInt32View[1] = gU, this.updateUniform(UU, EU._TempBuffer, 2)
      }
      _updateInt3ForEffect(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(UU + pU, RU, gU, tU)
      }
      _updateInt3ForUniform(UU, RU, gU, tU) {
        EU._TempBufferInt32View[0] = RU, EU._TempBufferInt32View[1] = gU, EU._TempBufferInt32View[2] = tU, this.updateUniform(UU, EU._TempBuffer, 3)
      }
      _updateInt4ForEffect(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(UU + EU, RU, gU, tU, pU)
      }
      _updateInt4ForUniform(UU, RU, gU, tU, pU) {
        EU._TempBufferInt32View[0] = RU, EU._TempBufferInt32View[1] = gU, EU._TempBufferInt32View[2] = tU, EU._TempBufferInt32View[3] = pU, this.updateUniform(UU, EU._TempBuffer, 4)
      }
      _updateUIntForEffect(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(UU + gU, RU)
      }
      _updateUIntForUniform(UU, RU) {
        EU._TempBufferUInt32View[0] = RU, this.updateUniform(UU, EU._TempBuffer, 1)
      }
      _updateUInt2ForEffect(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(UU + tU, RU, gU)
      }
      _updateUInt2ForUniform(UU, RU, gU) {
        EU._TempBufferUInt32View[0] = RU, EU._TempBufferUInt32View[1] = gU, this.updateUniform(UU, EU._TempBuffer, 2)
      }
      _updateUInt3ForEffect(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(UU + pU, RU, gU, tU)
      }
      _updateUInt3ForUniform(UU, RU, gU, tU) {
        EU._TempBufferUInt32View[0] = RU, EU._TempBufferUInt32View[1] = gU, EU._TempBufferUInt32View[2] = tU, this.updateUniform(UU, EU._TempBuffer, 3)
      }
      _updateUInt4ForEffect(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(UU + EU, RU, gU, tU, pU)
      }
      _updateUInt4ForUniform(UU, RU, gU, tU, pU) {
        EU._TempBufferUInt32View[0] = RU, EU._TempBufferUInt32View[1] = gU, EU._TempBufferUInt32View[2] = tU, EU._TempBufferUInt32View[3] = pU, this.updateUniform(UU, EU._TempBuffer, 4)
      }
      setTexture(UU, RU) {
        this._currentEffect.setTexture(UU, RU)
      }
      setTextureArray(UU, RU) {
        this._currentEffect.setTextureArray(UU, RU)
      }
      bindTexture(UU, RU) {
        this._currentEffect._bindTexture(UU, RU)
      }
      updateUniformDirectly(UU, RU) {
        this.updateUniform(UU, RU, RU.length), this.update()
      }
      bindToEffect(UU, RU) {
        this._currentEffect = UU, this._currentEffectName = RU
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(UU) {
        if (!this._buffers) return this._buffer === UU;
        for (let RU = 0; RU < this._buffers.length; ++RU) {
          if (this._buffers[RU][0] === UU) return this._bufferIndex = RU, this._buffer = UU, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[RU][1] && (this._bufferData.set(this._buffers[RU][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(UU) {
        return void 0 !== this._uniformLocations[UU]
      }
      dispose() {
        if (this._noUBO) return;
        const UU = this._engine._uniformBuffers,
          RU = UU.indexOf(this);
        if (-1 !== RU && (UU[RU] = UU[UU.length - 1], UU.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let UU = 0; UU < this._buffers.length; ++UU) {
            const RU = this._buffers[UU][0];
            this._engine._releaseBuffer(RU)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    EU._MAX_UNIFORM_SIZE = 256, EU._TempBuffer = new Float32Array(EU._MAX_UNIFORM_SIZE), EU._TempBufferInt32View = new Int32Array(EU._TempBuffer.buffer), EU._TempBufferUInt32View = new Uint32Array(EU._TempBuffer.buffer)
  },
  39299: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU
    });
    var tU = gU(39302);
    class pU extends tU.b {
      constructor(UU) {
        super(), this._buffer = UU
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39382: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => qU,
      d: () => KU
    });
    const tU = "__bjs_serializable__",
      pU = new WeakMap;

    function EU(UU, RU) {
      return Object.prototype.hasOwnProperty.call(UU, RU)
    }
    const PU = function() {
      let UU = Symbol.metadata;
      return UU || (UU = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: UU
      })), UU
    }();

    function TU(UU) {
      return "function" === typeof UU ? UU : UU?.constructor
    }

    function qU(UU) {
      if (!UU) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(PU)}) polyfill must run before decorated classes are evaluated.`);
      return EU(UU, tU) || (UU[tU] = {}), UU[tU]
    }

    function KU(UU) {
      const RU = TU(UU),
        gU = RU ? RU[PU] : void 0;
      if (!gU) return {};
      const qU = pU.get(gU);
      if (qU) return qU;
      const KU = {},
        cU = [];
      let GU = gU;
      for (; GU;) cU.push(GU), GU = Object.getPrototypeOf(GU);
      for (const pU of cU)
        if (EU(pU, tU)) {
          const UU = pU[tU];
          for (const RU in UU) KU[RU] = UU[RU]
        } return pU.set(gU, KU), KU
    }
  },
  39380: (UU, RU, gU) => {
    gU.d(RU, {
      D: () => TU,
      E: () => cU,
      I: () => GU,
      K: () => PU,
      d: () => fU,
      e: () => EU,
      g: () => WU,
      k: () => uU,
      l: () => qU,
      p: () => CU,
      t: () => KU,
      v: () => QU,
      w: () => jU,
      z: () => hU
    });
    var tU = gU(39382);

    function pU(UU, RU) {
      return (gU, pU) => {
        if (!pU.metadata) return;
        const EU = String(pU.name),
          PU = (0, tU.c)(pU.metadata);
        PU[EU] || (PU[EU] = {
          type: UU,
          sourceName: RU
        })
      }
    }

    function EU(UU) {
      return function(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (gU, tU) => {
          const pU = RU || "_" + String(tU.name);
          return {
            init(UU) {
              return void 0 === UU && pU in this || (this[pU] = UU), UU
            },
            get() {
              return this[pU]
            },
            set(RU) {
              "function" === typeof this[pU]?.equals && this[pU].equals(RU) || this[pU] !== RU && (this[pU] = RU, this[UU]())
            }
          }
        }
      }(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function PU(UU) {
      return pU(0, UU)
    }

    function TU(UU) {
      return pU(1, UU)
    }

    function qU(UU) {
      return pU(2, UU)
    }

    function KU(UU) {
      return pU(3, UU)
    }

    function cU(UU) {
      return pU(4, UU)
    }

    function GU(UU) {
      return pU(5, UU)
    }

    function jU(UU) {
      return pU(6, UU)
    }

    function uU(UU) {
      return pU(7, UU)
    }

    function CU(UU) {
      return pU(8, UU)
    }

    function hU(UU) {
      return pU(10, UU)
    }

    function QU(UU) {
      return pU(12, UU)
    }

    function eU(UU, RU, gU) {
      const tU = String(RU.name);
      let pU = null;
      const EU = function() {
        if (null === pU) {
          pU = UU, "undefined" !== typeof _native && _native[tU] && (pU = gU(_native[tU], UU));
          const PU = this && (RU.static ? this : Object.getPrototypeOf(this));
          PU?.[tU] === EU && (PU[tU] = pU)
        }
        for (var PU = arguments.length, TU = new Array(PU), qU = 0; qU < PU; qU++) TU[qU] = arguments[qU];
        return pU.apply(this, TU)
      };
      return EU
    }

    function WU(UU, RU) {
      return eU(UU, RU, (UU => UU))
    }

    function fU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (gU, tU) => {
        const pU = RU || "_" + String(tU.name);
        return {
          get() {
            return this[pU]?.value
          },
          set(RU) {
            "function" === typeof this[pU]?.value?.equals && this[pU].value.equals(RU) || this[pU].value !== RU && (this[pU].value = RU, this[UU]())
          }
        }
      }
    }
    WU.filter = function(UU) {
      return (RU, gU) => eU(RU, gU, ((RU, gU) => function() {
        for (var tU = arguments.length, pU = new Array(tU), EU = 0; EU < tU; EU++) pU[EU] = arguments[EU];
        return UU(...pU) ? RU(...pU) : gU.apply(this, pU)
      }))
    }
  },
  39395: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => KU
    });
    var tU = gU(39256),
      pU = gU(39402),
      EU = gU(36761),
      PU = gU(36600),
      TU = gU(39382);
    const qU = function(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const EU = UU();
      pU.d && pU.d.HasTags(RU) && pU.d.AddTagsTo(EU, pU.d.GetTags(RU, !0));
      const PU = (0, TU.d)(EU),
        qU = {};
      for (const pU in PU) {
        const UU = PU[pU],
          TU = RU[pU],
          cU = UU.type;
        if (void 0 !== TU && null !== TU && ("uniqueId" !== pU || KU.AllowLoadingUniqueId)) switch (cU) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof TU.slice ? EU[pU] = TU.slice() : EU[pU] = TU;
            break;
          case 1:
            tU.cloneTexturesOnlyOnce && qU[TU.uniqueId] ? EU[pU] = qU[TU.uniqueId] : (EU[pU] = gU || TU.isRenderTarget ? TU : TU.clone(), qU[TU.uniqueId] = EU[pU]);
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
            EU[pU] = gU ? TU : TU.clone()
        }
      }
      return EU
    };
    class KU {
      static AppendSerializedAnimations(UU, RU) {
        if (UU.animations) {
          RU.animations = [];
          for (let gU = 0; gU < UU.animations.length; gU++) {
            const tU = UU.animations[gU];
            RU.animations.push(tU.serialize())
          }
        }
      }
      static Serialize(UU, RU) {
        RU || (RU = {}), pU.d && (RU.tags = pU.d.GetTags(UU));
        const gU = (0, TU.d)(UU);
        for (const tU in gU) {
          const pU = gU[tU],
            EU = pU.sourceName || tU,
            PU = pU.type,
            TU = UU[tU];
          if (void 0 !== TU && null !== TU && ("uniqueId" !== tU || KU.AllowLoadingUniqueId)) switch (PU) {
            case 0:
              Array.isArray(TU) ? RU[EU] = TU.slice() : RU[EU] = TU;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              RU[EU] = TU.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              RU[EU] = TU.vgU();
              break;
            case 6:
            case 11:
              RU[EU] = TU.id
          }
        }
        return RU
      }
      static ParseProperties(UU, RU, gU, tU) {
        tU || (tU = "");
        const pU = (0, TU.d)(RU);
        for (const TU in pU) {
          const qU = pU[TU],
            cU = UU[qU.sourceName || TU],
            GU = qU.type;
          if (void 0 !== cU && null !== cU && ("uniqueId" !== TU || KU.AllowLoadingUniqueId)) {
            const UU = RU;
            switch (GU) {
              case 0:
                UU[TU] = cU;
                break;
              case 1:
                gU && (UU[TU] = KU._TextureParser(cU, gU, tU));
                break;
              case 2:
                UU[TU] = EU.e.FromArray(cU);
                break;
              case 3:
                UU[TU] = KU._FresnelParametersParser(cU);
                break;
              case 4:
                UU[TU] = PU.l.FromArray(cU);
                break;
              case 5:
                UU[TU] = PU.n.FromArray(cU);
                break;
              case 6:
                gU && (UU[TU] = gU.getLastMeshById(cU));
                break;
              case 7:
                UU[TU] = KU._ColorCurvesParser(cU);
                break;
              case 8:
                UU[TU] = EU.g.FromArray(cU);
                break;
              case 9:
                UU[TU] = KU._ImageProcessingConfigurationParser(cU);
                break;
              case 10:
                UU[TU] = PU.d.FromArray(cU);
                break;
              case 11:
                gU && (UU[TU] = gU.getCameraById(cU));
                break;
              case 12:
                UU[TU] = PU.c.FromArray(cU);
                break;
              case 13:
                UU[TU] = PU.q.FromArray(cU)
            }
          }
        }
      }
      static Parse(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const EU = UU();
        return pU.d && pU.d.AddTagsTo(EU, RU.tags), KU.ParseProperties(RU, EU, gU, tU), EU
      }
      static Clone(UU, RU) {
        return qU(UU, RU, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(UU, RU) {
        return qU(UU, RU, !0)
      }
    }
    KU.AllowLoadingUniqueId = !1, KU._ImageProcessingConfigurationParser = UU => {
      throw (0, tU.n)("ImageProcessingConfiguration")
    }, KU._FresnelParametersParser = UU => {
      throw (0, tU.n)("FresnelParameters")
    }, KU._ColorCurvesParser = UU => {
      throw (0, tU.n)("ColorCurves")
    }, KU._TextureParser = (UU, RU, gU) => {
      throw (0, tU.n)("Texture")
    }
  },
  39326: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU
    });
    var tU = gU(39280);
    class pU {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = pU.Enabled, this._lastSecValueCount++
      }
      addCount(UU, RU) {
        pU.Enabled && (this._current += UU, this._hasCurrentValue = !0, RU && this._fetchResult())
      }
      beginMonitoring() {
        pU.Enabled && (this._startMonitoringTime = tU.b.Now)
      }
      endMonitoring() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!pU.Enabled) return;
        UU && this.fetchNewFrame();
        const RU = tU.b.Now;
        this._current = RU - this._startMonitoringTime, this._hasCurrentValue = !0, UU && this._fetchResult()
      }
      Om() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const UU = tU.b.Now;
        UU - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = UU, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    pU.Enabled = !0
  },
  39480: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU,
      h: () => tU
    });
    class tU {
      constructor(UU) {
        this.length = 0, this.data = new Array(UU), this._id = tU._GlobalId++
      }
      push(UU) {
        this.data[this.length++] = UU, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(UU) {
        for (let RU = 0; RU < this.length; RU++) UU(this.data[RU])
      }
      sort(UU) {
        this.data.sort(UU)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(UU) {
        if (0 !== UU.length) {
          this.length + UU.length > this.data.length && (this.data.length = 2 * (this.length + UU.length));
          for (let RU = 0; RU < UU.length; RU++) this.data[this.length++] = (UU.data || UU)[RU]
        }
      }
      indexOf(UU) {
        const RU = this.data.indexOf(UU);
        return RU >= this.length ? -1 : RU
      }
      contains(UU) {
        return -1 !== this.indexOf(UU)
      }
    }
    tU._GlobalId = 0;
    class pU extends tU {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(UU) {
        super.push(UU), UU.__smartArrayFlags || (UU.__smartArrayFlags = {}), UU.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(UU) {
        return (!UU.__smartArrayFlags || UU.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(UU), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(UU) {
        if (0 !== UU.length) {
          this.length + UU.length > this.data.length && (this.data.length = 2 * (this.length + UU.length));
          for (let RU = 0; RU < UU.length; RU++) {
            const gU = (UU.data || UU)[RU];
            this.pushNoDuplicate(gU)
          }
        }
      }
    }
  },
  39402: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => pU
    });
    class tU {
      static Eval(UU, RU) {
        return "true" === (UU = UU.match(/\([^()]*\)/g) ? UU.replace(/\([^()]*\)/g, (UU => (UU = UU.slice(1, UU.length - 1), tU._HandleParenthesisContent(UU, RU)))) : tU._HandleParenthesisContent(UU, RU)) || "false" !== UU && tU.Eval(UU, RU)
      }
      static _HandleParenthesisContent(UU, RU) {
        let gU;
        RU = RU || (UU => "true" === UU);
        const pU = UU.split("||");
        for (const EU in pU)
          if (Object.prototype.hasOwnProperty.call(pU, EU)) {
            let UU = tU._SimplifyNegation(pU[EU].trim());
            const PU = UU.split("&&");
            if (PU.length > 1)
              for (let pU = 0; pU < PU.length; ++pU) {
                const EU = tU._SimplifyNegation(PU[pU].trim());
                if (gU = "true" !== EU && "false" !== EU ? "!" === EU[0] ? !RU(EU.substring(1)) : RU(EU) : "true" === EU, !gU) {
                  UU = "false";
                  break
                }
              }
            if (gU || "true" === UU) {
              gU = !0;
              break
            }
            gU = "true" !== UU && "false" !== UU ? "!" === UU[0] ? !RU(UU.substring(1)) : RU(UU) : "true" === UU
          } return gU ? "true" : "false"
      }
      static _SimplifyNegation(UU) {
        return "!true" === (UU = (UU = UU.replace(/^[\s!]+/, (UU => (UU = UU.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? UU = "false" : "!false" === UU && (UU = "true"), UU
      }
    }
    class pU {
      static EnableFor(UU) {
        UU._tags = UU._tags || {}, UU.hasTags = () => pU.HasTags(UU), UU.addTags = RU => pU.AddTagsTo(UU, RU), UU.removeTags = RU => pU.RemoveTagsFrom(UU, RU), UU.matchesTagsQuery = RU => pU.MatchesQuery(UU, RU)
      }
      static DisableFor(UU) {
        delete UU._tags, delete UU.hasTags, delete UU.addTags, delete UU.removeTags, delete UU.matchesTagsQuery
      }
      static HasTags(UU) {
        if (!UU._tags) return !1;
        const RU = UU._tags;
        for (const gU in RU)
          if (Object.prototype.hasOwnProperty.call(RU, gU)) return !0;
        return !1
      }
      static GetTags(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!UU._tags) return null;
        if (RU) {
          const RU = [];
          for (const gU in UU._tags) Object.prototype.hasOwnProperty.call(UU._tags, gU) && !0 === UU._tags[gU] && RU.push(gU);
          return RU.join(" ")
        }
        return UU._tags
      }
      static AddTagsTo(UU, RU) {
        if (!RU) return;
        if ("string" !== typeof RU) return;
        const gU = RU.split(" ");
        for (const tU of gU) pU._AddTagTo(UU, tU)
      }
      static _AddTagTo(UU, RU) {
        "" !== (RU = RU.trim()) && "true" !== RU && "false" !== RU && (RU.match(/[\s]/) || RU.match(/^([!]|([|]|[&]){2})/) || (pU.EnableFor(UU), UU._tags[RU] = !0))
      }
      static RemoveTagsFrom(UU, RU) {
        if (!pU.HasTags(UU)) return;
        const gU = RU.split(" ");
        for (const tU in gU) pU._RemoveTagFrom(UU, gU[tU])
      }
      static _RemoveTagFrom(UU, RU) {
        delete UU._tags[RU]
      }
      static MatchesQuery(UU, RU) {
        return void 0 === RU || ("" === RU ? pU.HasTags(UU) : tU.Eval(RU, (RU => pU.HasTags(UU) && UU._tags[RU])))
      }
    }
  },
  39524: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU
    });
    var tU = gU(39517),
      pU = gU(36624);
    class EU {
      constructor(UU) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new pU.b, this._scene = UU
      }
      _prepareBuffers() {
        if (this._vertexBuffers[tU.l.PositionKind]) return;
        const UU = [];
        UU.push(1, 1), UU.push(-1, 1), UU.push(-1, -1), UU.push(1, -1), this._vertexBuffers[tU.l.PositionKind] = new tU.l(this._scene.WC(), UU, tU.l.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const UU = [];
        UU.push(0), UU.push(1), UU.push(2), UU.push(0), UU.push(2), UU.push(3), this._indexBuffer = this._scene.WC().createIndexBuffer(UU)
      }
      _getActivePostProcesses(UU) {
        const RU = this._activePostProcesses;
        RU.length = 0;
        for (let gU = 0; gU < UU.length; gU++) {
          const tU = UU[gU];
          tU && RU.push(tU)
        }
        return RU
      }
      _rebuild() {
        const UU = this._vertexBuffers[tU.l.PositionKind];
        UU && (UU._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const gU = this._scene.activeCamera;
        return !!gU && (RU = RU || this._getActivePostProcesses(gU._postProcesses), !(!RU || 0 === RU.length || !this._scene.postProcessesEnabled) && (RU[0].activate(gU, UU, null !== RU && void 0 !== RU), !0))
      }
      directRender(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          EU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          PU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : UU.length;
        const TU = this._scene.WC();
        for (let qU = 0; qU < PU; qU++) {
          qU < UU.length - 1 ? UU[qU + 1].activate(this._scene.activeCamera || this._scene, RU?.texture) : (RU ? TU.bindFramebuffer(RU, tU, void 0, void 0, gU, pU) : EU || TU.restoreDefaultFramebuffer(), TU._debugInsertMarker?.(`post process ${UU[qU].name} output`));
          const PU = UU[qU],
            KU = PU.apply();
          KU && (PU.onBeforeRenderObservable.notifyObservers(KU), this._prepareBuffers(), TU.bindBuffers(this._vertexBuffers, this._indexBuffer, KU), TU.drawElementsType(0, 0, 6), PU.onAfterRenderObservable.notifyObservers(KU))
        }
        TU.setDepthBuffer(!0), TU.setDepthWrite(!0)
      }
      _finalizeFrame(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const EU = this._scene.activeCamera;
        if (!EU) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (tU = tU || this._getActivePostProcesses(EU._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const PU = this._scene.WC();
        for (let TU = 0, qU = tU.length; TU < qU; TU++) {
          const KU = tU[TU];
          if (TU < qU - 1 ? KU._outputTexture = tU[TU + 1].activate(EU, RU?.texture) : (RU ? (PU.bindFramebuffer(RU, gU, void 0, void 0, pU), KU._outputTexture = RU) : (PU.restoreDefaultFramebuffer(), KU._outputTexture = null), PU._debugInsertMarker?.(`post process ${tU[TU].name} output`)), UU) break;
          const cU = KU.apply();
          cU && (KU.onBeforeRenderObservable.notifyObservers(cU), this._prepareBuffers(), PU.bindBuffers(this._vertexBuffers, this._indexBuffer, cU), PU.drawElementsType(0, 0, 6), KU.onAfterRenderObservable.notifyObservers(cU))
        }
        PU.setDepthBuffer(!0), PU.setDepthWrite(!0), PU.setAlphaMode(0)
      }
      dispose() {
        const UU = this._vertexBuffers[tU.l.PositionKind];
        UU && (UU.dispose(), this._vertexBuffers[tU.l.PositionKind] = null), this._indexBuffer && (this._scene.WC()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  39543: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU
    });
    var tU = gU(39480),
      pU = gU(36600);
    class EU {
      set opaqueSortCompareFn(UU) {
        this._opaqueSortCompareFn = UU || EU.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(UU) {
        this._alphaTestSortCompareFn = UU || EU.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(UU) {
        this._transparentSortCompareFn = UU || EU.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          EU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = UU, this._opaqueSubMeshes = new tU.h(256), this._transparentSubMeshes = new tU.h(256), this._alphaTestSubMeshes = new tU.h(256), this._depthOnlySubMeshes = new tU.h(256), this._particleSystems = new tU.h(256), this._spriteManagers = new tU.h(256), this._empty = !0, this._edgesRenderers = new tU.d(16), this.disableDepthPrePass = !1, this._scene = RU, this.opaqueSortCompareFn = gU, this.alphaTestSortCompareFn = pU, this.transparentSortCompareFn = EU
      }
      render(UU, RU, gU, tU) {
        let pU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          EU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          PU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          TU = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          qU = arguments.length > 8 ? arguments[8] : void 0;
        if (UU) return void UU(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const KU = this._scene.WC();
        pU && 0 !== this._depthOnlySubMeshes.length && (KU.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), KU.setColorWrite(!0)), EU && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), PU && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const cU = KU.getStencilBuffer();
        if (KU.setStencilBuffer(!1), RU && this._renderSprites(), gU && this._renderParticles(tU), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), TU && (qU || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (KU.setStencilBuffer(cU), qU) qU(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const UU = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            UU.length && this._renderTransparent(UU)
          } else this._renderTransparent(this._transparentSubMeshes);
          KU.setAlphaMode(0)
        }
        if (KU.setStencilBuffer(!1), EU && this._edgesRenderers.length) {
          for (let UU = 0; UU < this._edgesRenderers.length; UU++) this._edgesRenderers.data[UU].render();
          KU.setAlphaMode(0)
        }
        KU.setStencilBuffer(cU)
      }
      _renderOpaqueSorted(UU) {
        EU._RenderSorted(UU, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(UU) {
        EU._RenderSorted(UU, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(UU) {
        EU._RenderSorted(UU, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(UU, RU, gU, tU, PU) {
        let TU, qU = 0;
        const KU = gU ? gU.globalPosition : EU._ZeroVector;
        if (tU && RU !== EU.PainterSortCompare)
          for (; qU < UU.length; qU++) TU = UU.data[qU], TU._alphaIndex = TU.getMesh().alphaIndex, TU._distanceToCamera = pU.n.Distance(TU.lY().qtU.centerWorld, KU);
        const cU = UU.length === UU.data.length ? UU.data : UU.data.slice(0, UU.length);
        RU && cU.sort(RU);
        const GU = cU[0].getMesh().aZ();
        for (qU = 0; qU < cU.length; qU++) {
          if (TU = cU[qU], GU._activeMeshesFrozenButKeepClipping && !TU.isInFrustum(GU._frustumPlanes)) continue;
          let UU = !1;
          if (tU) {
            const RU = TU.JC();
            if (RU && RU.needDepthPrePass && !PU) {
              UU = !0;
              const gU = RU.aZ().WC();
              gU.setColorWrite(!1), gU.setAlphaMode(0), TU.render(!1), gU.setColorWrite(!0)
            }
          }
          const RU = TU._renderingMesh;
          !UU && RU._renderRunFollower(TU, tU) || TU.render(tU)
        }
      }
      static defaultTransparentSortCompare(UU, RU) {
        return UU._alphaIndex > RU._alphaIndex ? 1 : UU._alphaIndex < RU._alphaIndex ? -1 : EU.backToFrontSortCompare(UU, RU)
      }
      static backToFrontSortCompare(UU, RU) {
        return UU._distanceToCamera < RU._distanceToCamera ? 1 : UU._distanceToCamera > RU._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(UU, RU) {
        return UU._distanceToCamera < RU._distanceToCamera ? -1 : UU._distanceToCamera > RU._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(UU, RU) {
        const gU = UU.getMesh(),
          tU = RU.getMesh();
        return gU.material && tU.material ? gU.material.uniqueId - tU.material.uniqueId : gU.uniqueId - tU.uniqueId
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
      dispatch(UU, RU, gU) {
        void 0 === RU && (RU = UU.getMesh()), void 0 === gU && (gU = UU.JC()), null !== gU && void 0 !== gU && (gU.needAlphaBlendingForMesh(RU) ? this._transparentSubMeshes.push(UU) : gU.needAlphaTestingForMesh(RU) ? (gU.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(UU), this._alphaTestSubMeshes.push(UU)) : (gU.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(UU), this._opaqueSubMeshes.push(UU)), RU._renderingGroup = this, RU._edgesRenderer && RU.isEnabled() && RU.isVisible && RU._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(RU._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(UU) {
        this._spriteManagers.push(UU), this._empty = !1
      }
      dispatchParticles(UU) {
        this._particleSystems.push(UU), this._empty = !1
      }
      _renderParticles(UU) {
        if (0 === this._particleSystems.length) return;
        const RU = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let gU = 0; gU < this._particleSystems.length; gU++) {
          const tU = this._particleSystems.data[gU];
          if (0 === (RU && RU.layerMask & tU.layerMask)) continue;
          const pU = tU.emitter;
          pU.position && UU && -1 === UU.indexOf(pU) || this._scene._activeParticles.addCount(tU.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const UU = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let RU = 0; RU < this._spriteManagers.length; RU++) {
          const gU = this._spriteManagers.data[RU];
          0 !== (UU && UU.layerMask & gU.layerMask) && gU.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    EU._ZeroVector = pU.n.Zero()
  },
  39534: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU
    });
    var tU = gU(39543);
    class pU {}
    class EU {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(UU) {
        this._disableDepthPrePass = UU;
        for (const RU of this._renderingGroups) RU.disableDepthPrePass = UU
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(UU) {
        UU !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = UU, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const UU of this._scene.meshes)
          if (UU.ZI)
            for (const RU of UU.ZI) RU._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const UU of this._scene.spriteManagers) UU._wasDispatched = !1;
        for (const UU of this._scene.vI) UU._wasDispatched = !1
      }
      constructor(UU) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new pU, this._maintainStateBetweenFrames = !1, this._scene = UU;
        for (let RU = EU.MIN_RENDERINGGROUPS; RU < EU.MAX_RENDERINGGROUPS; RU++) this._autoClearDepthStencil[RU] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(UU) {
        const RU = UU || 0;
        return this._prepareRenderingGroup(RU), this._renderingGroups[RU]
      }
      _clearDepthStencilBuffer() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.WC().clear(null, !1, UU, RU), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(UU, RU, gU, tU) {
        let pU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          PU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          TU = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          qU = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          KU = arguments.length > 8 ? arguments[8] : void 0,
          cU = arguments.length > 9 ? arguments[9] : void 0;
        const GU = this._renderingGroupInfo;
        GU.Zh = this._scene, GU.camera = this._scene.activeCamera, GU.renderingManager = this;
        const jU = cU ?? this._scene.spriteManagers;
        if (jU && tU)
          for (let EU = 0; EU < jU.length; EU++) {
            const UU = jU[EU];
            this.dispatchSprites(UU)
          }
        for (let uU = EU.MIN_RENDERINGGROUPS; uU < EU.MAX_RENDERINGGROUPS; uU++) {
          this._depthStencilBufferAlreadyCleaned = uU === EU.MIN_RENDERINGGROUPS;
          const cU = this._renderingGroups[uU];
          if (!cU || cU._empty) continue;
          const jU = 1 << uU;
          if (GU.renderingGroupId = uU, this._scene.onBeforeRenderingGroupObservable.notifyObservers(GU, jU), EU.AUTOCLEAR) {
            const UU = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(uU) : this._autoClearDepthStencil[uU];
            UU && UU.autoClear && this._clearDepthStencilBuffer(UU.depth, UU.stencil)
          }
          for (let UU = 0, RU = this._scene._beforeRenderingGroupDrawStage; UU < RU.length; UU++) {
            RU[UU].action(uU)
          }
          cU.render(UU, tU, gU, RU, pU, PU, TU, qU, KU);
          for (let UU = 0, RU = this._scene._afterRenderingGroupDrawStage; UU < RU.length; UU++) {
            RU[UU].action(uU)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(GU, jU)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let UU = EU.MIN_RENDERINGGROUPS; UU < EU.MAX_RENDERINGGROUPS; UU++) {
            const RU = this._renderingGroups[UU];
            RU && RU.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let UU = EU.MIN_RENDERINGGROUPS; UU < EU.MAX_RENDERINGGROUPS; UU++) {
            const RU = this._renderingGroups[UU];
            RU && RU.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let UU = EU.MIN_RENDERINGGROUPS; UU < EU.MAX_RENDERINGGROUPS; UU++) {
          const RU = this._renderingGroups[UU];
          RU && RU.dispose()
        }
      }
      _prepareRenderingGroup(UU) {
        void 0 === this._renderingGroups[UU] && (this._renderingGroups[UU] = new tU.e(UU, this._scene, this._customOpaqueSortCompareFn[UU], this._customAlphaTestSortCompareFn[UU], this._customTransparentSortCompareFn[UU]), this._renderingGroups[UU].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(UU) {
        this.maintainStateBetweenFrames && UU._wasDispatched || (UU._wasDispatched = !0, this.getRenderingGroup(UU.renderingGroupId).dispatchSprites(UU))
      }
      dispatchParticles(UU) {
        this.maintainStateBetweenFrames && UU._wasDispatched || (UU._wasDispatched = !0, this.getRenderingGroup(UU.renderingGroupId).dispatchParticles(UU))
      }
      dispatch(UU, RU, gU) {
        void 0 === RU && (RU = UU.getMesh()), this.maintainStateBetweenFrames && UU._wasDispatched || (UU._wasDispatched = !0, this.getRenderingGroup(RU.renderingGroupId).dispatch(UU, RU, gU))
      }
      setRenderingOrder(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[UU] = RU, this._customAlphaTestSortCompareFn[UU] = gU, this._customTransparentSortCompareFn[UU] = tU, this._renderingGroups[UU]) {
          const RU = this._renderingGroups[UU];
          RU.opaqueSortCompareFn = this._customOpaqueSortCompareFn[UU], RU.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[UU], RU.transparentSortCompareFn = this._customTransparentSortCompareFn[UU]
        }
      }
      setRenderingAutoClearDepthStencil(UU, RU) {
        let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          tU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[UU] = {
          autoClear: RU,
          depth: gU,
          stencil: tU
        }
      }
      getAutoClearDepthStencilSetup(UU) {
        return this._autoClearDepthStencil[UU]
      }
    }
    EU.MAX_RENDERINGGROUPS = 4, EU.MIN_RENDERINGGROUPS = 0, EU.AUTOCLEAR = !0
  },
  39284: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    class tU {
      constructor(UU) {
        this._supportBlendParametersPerTarget = UU, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(UU) {
        this.setAlphaBlend(UU)
      }
      setAlphaBlend(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[RU] !== UU && (UU ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[RU] = UU, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(UU, RU, gU, tU) {
        this._blendConstants[0] === UU && this._blendConstants[1] === RU && this._blendConstants[2] === gU && this._blendConstants[3] === tU || (this._blendConstants[0] = UU, this._blendConstants[1] = RU, this._blendConstants[2] = gU, this._blendConstants[3] = tU, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(UU, RU, gU, tU) {
        const pU = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[pU + 0] === UU && this._blendFunctionParameters[pU + 1] === RU && this._blendFunctionParameters[pU + 2] === gU && this._blendFunctionParameters[pU + 3] === tU || (this._blendFunctionParameters[pU + 0] = UU, this._blendFunctionParameters[pU + 1] = RU, this._blendFunctionParameters[pU + 2] = gU, this._blendFunctionParameters[pU + 3] = tU, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(UU, RU) {
        const gU = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[gU + 0] === UU && this._blendEquationParameters[gU + 1] === RU || (this._blendEquationParameters[gU + 0] = UU, this._blendEquationParameters[gU + 1] = RU, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== RU && (this._numTargets = RU, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== gU && (this._blendDisabledTargetsMask = gU, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (UU.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === RU || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (RU > 1 && 0 !== gU && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & gU) ? UU.enable(UU.BLEND) : UU.disable(UU.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (UU.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (UU.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const tU = UU;
        if (this._isAlphaBlendDirty) {
          for (let pU = 0; pU < RU; pU++) {
            const RU = pU < this._numTargetEnabled ? pU : 0;
            this._alphaBlend[RU] && 0 === (gU & 1 << pU) ? tU.enableIndexed(UU.BLEND, pU) : tU.disableIndexed(UU.BLEND, pU)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let UU = 0; UU < RU; UU++) {
            const RU = UU < this._numTargetEnabled ? 4 * UU : 0;
            tU.blendFuncSeparateIndexed(UU, this._blendFunctionParameters[RU + 0], this._blendFunctionParameters[RU + 1], this._blendFunctionParameters[RU + 2], this._blendFunctionParameters[RU + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let UU = 0; UU < RU; UU++) {
            const RU = UU < this._numTargetEnabled ? 2 * UU : 0;
            tU.blendEquationSeparateIndexed(UU, this._blendEquationParameters[RU + 0], this._blendEquationParameters[RU + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(UU, RU) {
        let gU = 32774;
        switch (UU) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, RU);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, RU);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, RU);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, RU);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, RU);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, RU);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, RU);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, RU);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, RU);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, RU);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, RU);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, RU);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, RU);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, RU);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, RU);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, RU);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, RU), gU = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, RU), gU = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, RU);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, RU)
        }
        this.setAlphaEquationParameters(gU, gU, RU)
      }
    }
  },
  39574: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => tU
    });
    class tU {}
    tU._IsPickingAvailable = !1
  },
  39468: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => Tg,
      f: () => Eg
    });
    var tU = gU(39473),
      pU = gU(39268),
      EU = gU(39280),
      PU = gU(36624),
      TU = gU(39480);
    class qU {
      constructor() {
        this._count = 0, this._data = {}
      }
      PgU(UU) {
        this.clear(), UU.forEach(((UU, RU) => this.add(UU, RU)))
      }
      get(UU) {
        const RU = this._data[UU];
        if (void 0 !== RU) return RU
      }
      getOrAddWithFactory(UU, RU) {
        let gU = this.get(UU);
        return void 0 !== gU || (gU = RU(UU), gU && this.add(UU, gU)), gU
      }
      getOrAdd(UU, RU) {
        const gU = this.get(UU);
        return void 0 !== gU ? gU : (this.add(UU, RU), RU)
      }
      contains(UU) {
        return void 0 !== this._data[UU]
      }
      add(UU, RU) {
        return void 0 === this._data[UU] && (this._data[UU] = RU, ++this._count, !0)
      }
      set(UU, RU) {
        return void 0 !== this._data[UU] && (this._data[UU] = RU, !0)
      }
      getAndRemove(UU) {
        const RU = this.get(UU);
        return void 0 !== RU ? (delete this._data[UU], --this._count, RU) : null
      }
      remove(UU) {
        return !!this.contains(UU) && (delete this._data[UU], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(UU) {
        for (const RU in this._data) {
          UU(RU, this._data[RU])
        }
      }
      first(UU) {
        for (const RU in this._data) {
          const gU = UU(RU, this._data[RU]);
          if (gU) return gU
        }
        return null
      }
    }
    var KU = gU(39402),
      cU = gU(36600),
      GU = gU(39483),
      jU = gU(39504),
      uU = gU(39513);
    class CU {
      constructor(UU, RU, gU, tU, pU, EU) {
        this.source = UU, this.pointerX = RU, this.pointerY = gU, this.meshUnderPointer = tU, this.sourceEvent = pU, this.additionalData = EU
      }
      static CreateNew(UU, RU, gU) {
        const tU = UU.aZ();
        return new CU(UU, tU.pointerX, tU.pointerY, tU.meshUnderPointer || UU, RU, gU)
      }
      static CreateNewFromSprite(UU, RU, gU, tU) {
        return new CU(UU, RU.pointerX, RU.pointerY, RU.meshUnderPointer, gU, tU)
      }
      static CreateNewFromScene(UU, RU) {
        return new CU(null, UU.pointerX, UU.pointerY, UU.meshUnderPointer, RU)
      }
      static CreateNewFromPrimitive(UU, RU, gU, tU) {
        return new CU(UU, RU.x, RU.y, null, gU, tU)
      }
    }
    var hU = gU(39524),
      QU = gU(39531),
      eU = gU(39534),
      WU = gU(39547),
      fU = gU(39231),
      xU = gU(36622),
      mU = gU(39256),
      IU = gU(39554);
    class JU {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const UU in JU.Triggers)
          if (Object.prototype.hasOwnProperty.call(JU.Triggers, UU)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const UU in JU.Triggers)
          if (Object.prototype.hasOwnProperty.call(JU.Triggers, UU)) {
            const RU = parseInt(UU);
            if (RU >= 1 && RU <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(UU) {
        for (const RU in JU.Triggers)
          if (Object.prototype.hasOwnProperty.call(JU.Triggers, RU)) {
            if (parseInt(RU) === UU) return !0
          } return !1
      }
    }
    JU.Triggers = {};
    var wU, nU, bU, oU, ZU, aU, YU, BU = gU(39562);
    ! function(UU) {
      UU[UU.Generic = 0] = "Generic", UU[UU.Keyboard = 1] = "Keyboard", UU[UU.Mouse = 2] = "Mouse", UU[UU.Touch = 3] = "Touch", UU[UU.DualShock = 4] = "DualShock", UU[UU.Xbox = 5] = "Xbox", UU[UU.Switch = 6] = "Switch", UU[UU.DualSense = 7] = "DualSense"
    }(wU || (wU = {})),
    function(UU) {
      UU[UU.Horizontal = 0] = "Horizontal", UU[UU.Vertical = 1] = "Vertical", UU[UU.LeftClick = 2] = "LeftClick", UU[UU.MiddleClick = 3] = "MiddleClick", UU[UU.RightClick = 4] = "RightClick", UU[UU.BrowserBack = 5] = "BrowserBack", UU[UU.BrowserForward = 6] = "BrowserForward", UU[UU.MouseWheelX = 7] = "MouseWheelX", UU[UU.MouseWheelY = 8] = "MouseWheelY", UU[UU.MouseWheelZ = 9] = "MouseWheelZ", UU[UU.Move = 12] = "Move"
    }(nU || (nU = {})),
    function(UU) {
      UU[UU.Horizontal = 0] = "Horizontal", UU[UU.Vertical = 1] = "Vertical", UU[UU.LeftClick = 2] = "LeftClick", UU[UU.MiddleClick = 3] = "MiddleClick", UU[UU.RightClick = 4] = "RightClick", UU[UU.BrowserBack = 5] = "BrowserBack", UU[UU.BrowserForward = 6] = "BrowserForward", UU[UU.MouseWheelX = 7] = "MouseWheelX", UU[UU.MouseWheelY = 8] = "MouseWheelY", UU[UU.MouseWheelZ = 9] = "MouseWheelZ", UU[UU.DeltaHorizontal = 10] = "DeltaHorizontal", UU[UU.DeltaVertical = 11] = "DeltaVertical"
    }(bU || (bU = {})),
    function(UU) {
      UU[UU.Cross = 0] = "Cross", UU[UU.Circle = 1] = "Circle", UU[UU.Square = 2] = "Square", UU[UU.Triangle = 3] = "Triangle", UU[UU.L1 = 4] = "L1", UU[UU.R1 = 5] = "R1", UU[UU.L2 = 6] = "L2", UU[UU.R2 = 7] = "R2", UU[UU.Share = 8] = "Share", UU[UU.Options = 9] = "Options", UU[UU.L3 = 10] = "L3", UU[UU.R3 = 11] = "R3", UU[UU.DPadUp = 12] = "DPadUp", UU[UU.DPadDown = 13] = "DPadDown", UU[UU.DPadLeft = 14] = "DPadLeft", UU[UU.DPadRight = 15] = "DPadRight", UU[UU.Home = 16] = "Home", UU[UU.TouchPad = 17] = "TouchPad", UU[UU.LStickXAxis = 18] = "LStickXAxis", UU[UU.LStickYAxis = 19] = "LStickYAxis", UU[UU.RStickXAxis = 20] = "RStickXAxis", UU[UU.RStickYAxis = 21] = "RStickYAxis"
    }(oU || (oU = {})),
    function(UU) {
      UU[UU.Cross = 0] = "Cross", UU[UU.Circle = 1] = "Circle", UU[UU.Square = 2] = "Square", UU[UU.Triangle = 3] = "Triangle", UU[UU.L1 = 4] = "L1", UU[UU.R1 = 5] = "R1", UU[UU.L2 = 6] = "L2", UU[UU.R2 = 7] = "R2", UU[UU.Create = 8] = "Create", UU[UU.Options = 9] = "Options", UU[UU.L3 = 10] = "L3", UU[UU.R3 = 11] = "R3", UU[UU.DPadUp = 12] = "DPadUp", UU[UU.DPadDown = 13] = "DPadDown", UU[UU.DPadLeft = 14] = "DPadLeft", UU[UU.DPadRight = 15] = "DPadRight", UU[UU.Home = 16] = "Home", UU[UU.TouchPad = 17] = "TouchPad", UU[UU.LStickXAxis = 18] = "LStickXAxis", UU[UU.LStickYAxis = 19] = "LStickYAxis", UU[UU.RStickXAxis = 20] = "RStickXAxis", UU[UU.RStickYAxis = 21] = "RStickYAxis"
    }(ZU || (ZU = {})),
    function(UU) {
      UU[UU.A = 0] = "A", UU[UU.B = 1] = "B", UU[UU.X = 2] = "X", UU[UU.Y = 3] = "Y", UU[UU.LB = 4] = "LB", UU[UU.RB = 5] = "RB", UU[UU.LT = 6] = "LT", UU[UU.RT = 7] = "RT", UU[UU.Back = 8] = "Back", UU[UU.Start = 9] = "Start", UU[UU.LS = 10] = "LS", UU[UU.RS = 11] = "RS", UU[UU.DPadUp = 12] = "DPadUp", UU[UU.DPadDown = 13] = "DPadDown", UU[UU.DPadLeft = 14] = "DPadLeft", UU[UU.DPadRight = 15] = "DPadRight", UU[UU.Home = 16] = "Home", UU[UU.LStickXAxis = 17] = "LStickXAxis", UU[UU.LStickYAxis = 18] = "LStickYAxis", UU[UU.RStickXAxis = 19] = "RStickXAxis", UU[UU.RStickYAxis = 20] = "RStickYAxis"
    }(aU || (aU = {})),
    function(UU) {
      UU[UU.B = 0] = "B", UU[UU.A = 1] = "A", UU[UU.Y = 2] = "Y", UU[UU.X = 3] = "X", UU[UU.L = 4] = "L", UU[UU.R = 5] = "R", UU[UU.ZL = 6] = "ZL", UU[UU.ZR = 7] = "ZR", UU[UU.Minus = 8] = "Minus", UU[UU.Plus = 9] = "Plus", UU[UU.LS = 10] = "LS", UU[UU.RS = 11] = "RS", UU[UU.DPadUp = 12] = "DPadUp", UU[UU.DPadDown = 13] = "DPadDown", UU[UU.DPadLeft = 14] = "DPadLeft", UU[UU.DPadRight = 15] = "DPadRight", UU[UU.Home = 16] = "Home", UU[UU.Capture = 17] = "Capture", UU[UU.LStickXAxis = 18] = "LStickXAxis", UU[UU.LStickYAxis = 19] = "LStickYAxis", UU[UU.RStickXAxis = 20] = "RStickXAxis", UU[UU.RStickYAxis = 21] = "RStickYAxis"
    }(YU || (YU = {}));
    var VU = gU(39571);
    class rU {
      static CreateDeviceEvent(UU, RU, gU, tU, pU, EU, PU) {
        switch (UU) {
          case wU.Keyboard:
            return this._CreateKeyboardEvent(gU, tU, pU, EU);
          case wU.Mouse:
            if (gU === nU.MouseWheelX || gU === nU.MouseWheelY || gU === nU.MouseWheelZ) return this._CreateWheelEvent(UU, RU, gU, tU, pU, EU);
          case wU.Touch:
            return this._CreatePointerEvent(UU, RU, gU, tU, pU, EU, PU);
          default:
            throw `Unable to generate event for device ${wU[UU]}`
        }
      }
      static _CreatePointerEvent(UU, RU, gU, tU, pU, EU, PU) {
        const TU = this._CreateMouseEvent(UU, RU, gU, tU, pU, EU);
        UU === wU.Mouse ? (TU.deviceType = wU.Mouse, TU.pointerId = 1, TU.pointerType = "mouse") : (TU.deviceType = wU.Touch, TU.pointerId = PU ?? RU, TU.pointerType = "touch");
        let qU = 0;
        return qU += pU.pollInput(UU, RU, nU.LeftClick), qU += 2 * pU.pollInput(UU, RU, nU.RightClick), qU += 4 * pU.pollInput(UU, RU, nU.MiddleClick), TU.buttons = qU, gU === nU.Move ? TU.type = "pointermove" : gU >= nU.LeftClick && gU <= nU.RightClick && (TU.type = 1 === tU ? "pointerdown" : "pointerup", TU.button = gU - 2), TU
      }
      static _CreateWheelEvent(UU, RU, gU, tU, pU, EU) {
        const PU = this._CreateMouseEvent(UU, RU, gU, tU, pU, EU);
        switch (PU.pointerId = 1, PU.type = "wheel", PU.deltaMode = VU.c.DOM_DELTA_PIXEL, PU.deltaX = 0, PU.deltaY = 0, PU.deltaZ = 0, gU) {
          case nU.MouseWheelX:
            PU.deltaX = tU;
            break;
          case nU.MouseWheelY:
            PU.deltaY = tU;
            break;
          case nU.MouseWheelZ:
            PU.deltaZ = tU
        }
        return PU
      }
      static _CreateMouseEvent(UU, RU, gU, tU, pU, EU) {
        const PU = this._CreateEvent(EU),
          TU = pU.pollInput(UU, RU, nU.Horizontal),
          qU = pU.pollInput(UU, RU, nU.Vertical);
        return EU ? (PU.movementX = 0, PU.movementY = 0, PU.offsetX = PU.movementX - EU.getBoundingClientRect().x, PU.offsetY = PU.movementY - EU.getBoundingClientRect().y) : (PU.movementX = pU.pollInput(UU, RU, 10), PU.movementY = pU.pollInput(UU, RU, 11), PU.offsetX = 0, PU.offsetY = 0), this._CheckNonCharacterKeys(PU, pU), PU.clientX = TU, PU.clientY = qU, PU.x = TU, PU.y = qU, PU.deviceType = UU, PU.deviceSlot = RU, PU.inputIndex = gU, PU
      }
      static _CreateKeyboardEvent(UU, RU, gU, tU) {
        const pU = this._CreateEvent(tU);
        return this._CheckNonCharacterKeys(pU, gU), pU.deviceType = wU.Keyboard, pU.deviceSlot = 0, pU.inputIndex = UU, pU.type = 1 === RU ? "keydown" : "keyup", pU.key = String.fromCharCode(UU), pU.keyCode = UU, pU
      }
      static _CheckNonCharacterKeys(UU, RU) {
        const gU = RU.isDeviceAvailable(wU.Keyboard),
          tU = gU && 1 === RU.pollInput(wU.Keyboard, 0, 18),
          pU = gU && 1 === RU.pollInput(wU.Keyboard, 0, 17),
          EU = gU && (1 === RU.pollInput(wU.Keyboard, 0, 91) || 1 === RU.pollInput(wU.Keyboard, 0, 92) || 1 === RU.pollInput(wU.Keyboard, 0, 93)),
          PU = gU && 1 === RU.pollInput(wU.Keyboard, 0, 16);
        UU.altKey = tU, UU.ctrlKey = pU, UU.metaKey = EU, UU.shiftKey = PU
      }
      static _CreateEvent(UU) {
        const RU = {
          preventDefault: () => {}
        };
        return RU.target = UU, RU
      }
    }
    class XU {
      constructor(UU, RU, gU) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(UU, RU, ((UU, RU, tU, pU) => {
          const EU = rU.CreateDeviceEvent(UU, RU, tU, pU, this);
          gU(UU, RU, EU)
        })) : this._createDummyNativeInput()
      }
      pollInput(UU, RU, gU) {
        return this._nativeInput.pollInput(UU, RU, gU)
      }
      isDeviceAvailable(UU) {
        return UU === wU.Mouse || UU === wU.Touch
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
    const vU = Object.keys(nU).length / 2;
    class dU {
      constructor(UU, RU, gU, pU) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = tU.g.IsSafari(), this._usingMacOs = (0, fU.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = UU => {}, this._keyboardUpEvent = UU => {}, this._keyboardBlurEvent = UU => {}, this._pointerMoveEvent = UU => {}, this._pointerDownEvent = UU => {}, this._pointerUpEvent = UU => {}, this._pointerCancelEvent = UU => {}, this._pointerCancelTouch = UU => {}, this._pointerLeaveEvent = UU => {}, this._pointerWheelEvent = UU => {}, this._pointerBlurEvent = UU => {}, this._pointerMacOsChromeOutEvent = UU => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, fU.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, fU.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = UU => {}, this._gamepadDisconnectedEvent = UU => {}, this._eventPrefix = tU.g.GetPointerPrefix(UU), this._engine = UU, this._onDeviceConnected = RU, this._onDeviceDisconnected = gU, this._onInputChanged = pU, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(UU, RU, gU) {
        const pU = this._inputs[UU][RU];
        if (!pU) throw `Unable to find device ${wU[UU]}`;
        UU >= wU.DualShock && UU <= wU.DualSense && this._updateDevice(UU, RU, gU);
        const EU = pU[gU];
        if (void 0 === EU) throw `Unable to find input ${gU} for device ${wU[UU]} in slot ${RU}`;
        return gU === nU.Move && tU.g.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), EU
      }
      isDeviceAvailable(UU) {
        return void 0 !== this._inputs[UU]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const UU = this?._engine.getInputElement();
        if (UU && (!this._eventsAttached || this._elementToAttachTo !== UU)) {
          if (this._disableEvents(), this._inputs)
            for (const UU of this._inputs)
              if (UU)
                for (const RU in UU) {
                  const gU = UU[+RU];
                  if (gU)
                    for (let UU = 0; UU < gU.length; UU++) gU[UU] = 0
                }
          this._elementToAttachTo = UU, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const UU = navigator.getGamepads();
          for (const RU of UU) RU && this._addGamePad(RU)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(wU.Mouse, 0, 0, 0)
      }
      _addGamePad(UU) {
        const RU = this._getGamepadDeviceType(UU.id),
          gU = UU.index;
        this._gamepads = this._gamepads || new Array(UU.index + 1), this._registerDevice(RU, gU, UU.buttons.length + UU.axes.length), this._gamepads[gU] = RU
      }
      _addPointerDevice(UU, RU, gU, tU) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(UU, RU, vU);
        const pU = this._inputs[UU][RU];
        pU[0] = gU, pU[1] = tU
      }
      _registerDevice(UU, RU, gU) {
        if (void 0 === RU) throw `Unable to register device ${wU[UU]} to undefined slot.`;
        if (this._inputs[UU] || (this._inputs[UU] = {}), !this._inputs[UU][RU]) {
          const tU = new Array(gU);
          tU.fill(0), this._inputs[UU][RU] = tU, this._onDeviceConnected(UU, RU)
        }
      }
      _unregisterDevice(UU, RU) {
        this._inputs[UU][RU] && (delete this._inputs[UU][RU], this._onDeviceDisconnected(UU, RU))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = UU => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(wU.Keyboard, 0, 255));
          const RU = this._inputs[wU.Keyboard][0];
          if (RU) {
            RU[UU.keyCode] = 1;
            const gU = UU;
            gU.inputIndex = UU.keyCode, this._usingMacOs && UU.metaKey && "Meta" !== UU.key && (this._metaKeys.includes(UU.keyCode) || this._metaKeys.push(UU.keyCode)), this._onInputChanged(wU.Keyboard, 0, gU)
          }
        }, this._keyboardUpEvent = UU => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(wU.Keyboard, 0, 255));
          const RU = this._inputs[wU.Keyboard][0];
          if (RU) {
            RU[UU.keyCode] = 0;
            const gU = UU;
            if (gU.inputIndex = UU.keyCode, this._usingMacOs && "Meta" === UU.key && this._metaKeys.length > 0) {
              for (const UU of this._metaKeys) {
                const gU = rU.CreateDeviceEvent(wU.Keyboard, 0, UU, 0, this, this._elementToAttachTo);
                RU[UU] = 0, this._onInputChanged(wU.Keyboard, 0, gU)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(wU.Keyboard, 0, gU)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const UU = this._inputs[wU.Keyboard][0];
            for (let RU = 0; RU < UU.length; RU++)
              if (0 !== UU[RU]) {
                UU[RU] = 0;
                const gU = rU.CreateDeviceEvent(wU.Keyboard, 0, RU, 0, this, this._elementToAttachTo);
                this._onInputChanged(wU.Keyboard, 0, gU)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, fU.h)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let tU = 0; tU < this._maxTouchPoints; tU++) this._activeTouchIds[tU] = -1;
        this._pointerMoveEvent = UU => {
          const RU = this._getPointerType(UU);
          let gU = RU === wU.Mouse ? 0 : this._activeTouchIds.indexOf(UU.pointerId);
          if (RU === wU.Touch && -1 === gU) {
            if (0 === UU.buttons) return;
            const pU = this._activeTouchIds.indexOf(-1);
            if (!(pU >= 0)) return void tU.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            gU = pU, this._activeTouchIds[pU] = UU.pointerId, this._onDeviceConnected(RU, gU)
          }
          this._inputs[RU] || (this._inputs[RU] = {}), this._inputs[RU][gU] || this._addPointerDevice(RU, gU, UU.clientX, UU.clientY);
          const pU = this._inputs[RU][gU];
          if (pU) {
            const tU = UU;
            tU.inputIndex = nU.Move, pU[nU.Horizontal] = UU.clientX, pU[nU.Vertical] = UU.clientY, RU === wU.Touch && 0 === pU[nU.LeftClick] && (pU[nU.LeftClick] = 1), void 0 === UU.pointerId && (UU.pointerId = this._mouseId), this._onInputChanged(RU, gU, tU), this._usingSafari || -1 === UU.button || (tU.inputIndex = UU.button + 2, pU[UU.button + 2] = pU[UU.button + 2] ? 0 : 1, this._onInputChanged(RU, gU, tU))
          }
        }, this._pointerDownEvent = UU => {
          const RU = this._getPointerType(UU);
          let gU = RU === wU.Mouse ? 0 : UU.pointerId;
          if (RU === wU.Touch) {
            let RU = this._activeTouchIds.indexOf(UU.pointerId);
            if (-1 === RU && (RU = this._activeTouchIds.indexOf(-1)), !(RU >= 0)) return void tU.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            gU = RU, this._activeTouchIds[RU] = UU.pointerId
          }
          this._inputs[RU] || (this._inputs[RU] = {}), this._inputs[RU][gU] ? RU === wU.Touch && this._onDeviceConnected(RU, gU) : this._addPointerDevice(RU, gU, UU.clientX, UU.clientY);
          const pU = this._inputs[RU][gU];
          if (pU) {
            const tU = pU[nU.Horizontal],
              PU = pU[nU.Vertical];
            if (RU === wU.Mouse) {
              if (void 0 === UU.pointerId && (UU.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (EU) {}
            } else if (UU.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(UU.pointerId)
            } catch (EU) {}
            pU[nU.Horizontal] = UU.clientX, pU[nU.Vertical] = UU.clientY, pU[UU.button + 2] = 1;
            const TU = UU;
            TU.inputIndex = UU.button + 2, this._onInputChanged(RU, gU, TU), tU === UU.clientX && PU === UU.clientY || (TU.inputIndex = nU.Move, this._onInputChanged(RU, gU, TU))
          }
        }, this._pointerUpEvent = UU => {
          const RU = this._getPointerType(UU),
            gU = RU === wU.Mouse ? 0 : this._activeTouchIds.indexOf(UU.pointerId);
          if (RU === wU.Touch) {
            if (-1 === gU) return;
            this._activeTouchIds[gU] = -1
          }
          const tU = this._inputs[RU]?.[gU];
          let pU = UU.button,
            EU = tU && 0 !== tU[pU + 2];
          if (!EU && this._isUsingFirefox && this._usingMacOs && tU && (pU = 2 === pU ? 0 : 2, EU = 0 !== tU[pU + 2]), EU) {
            const EU = tU[nU.Horizontal],
              PU = tU[nU.Vertical];
            tU[nU.Horizontal] = UU.clientX, tU[nU.Vertical] = UU.clientY, tU[pU + 2] = 0;
            const TU = UU;
            void 0 === UU.pointerId && (UU.pointerId = this._mouseId), EU === UU.clientX && PU === UU.clientY || (TU.inputIndex = nU.Move, this._onInputChanged(RU, gU, TU)), TU.inputIndex = pU + 2, RU === wU.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : UU.pointerId && this._elementToAttachTo.hasPointerCapture?.(UU.pointerId) && this._elementToAttachTo.releasePointerCapture(UU.pointerId), this._onInputChanged(RU, gU, TU), RU === wU.Touch && this._onDeviceDisconnected(RU, gU)
          }
        }, this._pointerCancelTouch = UU => {
          const RU = this._activeTouchIds.indexOf(UU);
          if (-1 === RU) return;
          this._elementToAttachTo.hasPointerCapture?.(UU) && this._elementToAttachTo.releasePointerCapture(UU), this._inputs[wU.Touch][RU][nU.LeftClick] = 0;
          const gU = rU.CreateDeviceEvent(wU.Touch, RU, nU.LeftClick, 0, this, this._elementToAttachTo, UU);
          this._onInputChanged(wU.Touch, RU, gU), this._activeTouchIds[RU] = -1, this._onDeviceDisconnected(wU.Touch, RU)
        }, this._pointerCancelEvent = UU => {
          if ("mouse" === UU.pointerType) {
            const UU = this._inputs[wU.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let RU = nU.LeftClick; RU <= nU.BrowserForward; RU++)
              if (1 === UU[RU]) {
                UU[RU] = 0;
                const gU = rU.CreateDeviceEvent(wU.Mouse, 0, RU, 0, this, this._elementToAttachTo);
                this._onInputChanged(wU.Mouse, 0, gU)
              }
          } else this._pointerCancelTouch(UU.pointerId)
        }, this._pointerLeaveEvent = UU => {
          "pen" === UU.pointerType && this._pointerCancelTouch(UU.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let UU = !1;
        const RU = function() {};
        try {
          const gU = Object.defineProperty({}, "passive", {
            get: function() {
              UU = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", RU, gU), this._elementToAttachTo.removeEventListener("test", RU, gU)
        } catch (gU) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(wU.Mouse)) {
            const UU = this._inputs[wU.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let RU = nU.LeftClick; RU <= nU.BrowserForward; RU++)
              if (1 === UU[RU]) {
                UU[RU] = 0;
                const gU = rU.CreateDeviceEvent(wU.Mouse, 0, RU, 0, this, this._elementToAttachTo);
                this._onInputChanged(wU.Mouse, 0, gU)
              }
          }
          if (this.isDeviceAvailable(wU.Touch)) {
            const UU = this._inputs[wU.Touch];
            for (let RU = 0; RU < this._activeTouchIds.length; RU++) {
              const gU = this._activeTouchIds[RU];
              if (this._elementToAttachTo.hasPointerCapture?.(gU) && this._elementToAttachTo.releasePointerCapture(gU), -1 !== gU && 1 === UU[RU]?.[nU.LeftClick]) {
                UU[RU][nU.LeftClick] = 0;
                const tU = rU.CreateDeviceEvent(wU.Touch, RU, nU.LeftClick, 0, this, this._elementToAttachTo, gU);
                this._onInputChanged(wU.Touch, RU, tU), this._activeTouchIds[RU] = -1, this._onDeviceDisconnected(wU.Touch, RU)
              }
            }
          }
        }, this._pointerWheelEvent = UU => {
          const RU = wU.Mouse;
          this._inputs[RU] || (this._inputs[RU] = []), this._inputs[RU][0] || (this._pointerActive = !0, this._registerDevice(RU, 0, vU));
          const gU = this._inputs[RU][0];
          if (gU) {
            gU[nU.MouseWheelX] = UU.deltaX || 0, gU[nU.MouseWheelY] = UU.deltaY || UU.wheelDelta || 0, gU[nU.MouseWheelZ] = UU.deltaZ || 0;
            const tU = UU;
            void 0 === UU.pointerId && (UU.pointerId = this._mouseId), 0 !== gU[nU.MouseWheelX] && (tU.inputIndex = nU.MouseWheelX, this._onInputChanged(RU, 0, tU)), 0 !== gU[nU.MouseWheelY] && (tU.inputIndex = nU.MouseWheelY, this._onInputChanged(RU, 0, tU)), 0 !== gU[nU.MouseWheelZ] && (tU.inputIndex = nU.MouseWheelZ, this._onInputChanged(RU, 0, tU))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = UU => {
          UU.buttons > 1 && this._pointerCancelEvent(UU)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!UU && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(wU.Mouse)) {
            const UU = this._inputs[wU.Mouse][0];
            UU[nU.MouseWheelX] = 0, UU[nU.MouseWheelY] = 0, UU[nU.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = UU => {
          this._addGamePad(UU.gamepad)
        }, this._gamepadDisconnectedEvent = UU => {
          if (this._gamepads) {
            const RU = this._getGamepadDeviceType(UU.gamepad.id),
              gU = UU.gamepad.index;
            this._unregisterDevice(RU, gU), delete this._gamepads[gU]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(UU, RU, gU) {
        const tU = navigator.getGamepads()[RU];
        if (tU && UU === this._gamepads[RU]) {
          const pU = this._inputs[UU][RU];
          gU >= tU.buttons.length ? pU[gU] = tU.axes[gU - tU.buttons.length].valueOf() : pU[gU] = tU.buttons[gU].value
        }
      }
      _getGamepadDeviceType(UU) {
        return -1 !== UU.indexOf("054c") ? -1 !== UU.indexOf("0ce6") ? wU.DualSense : wU.DualShock : -1 !== UU.indexOf("Xbox One") || -1 !== UU.search("Xbox 360") || -1 !== UU.search("xinput") || -1 !== UU.indexOf("045e") && -1 === UU.indexOf("Surface Dock") ? wU.Xbox : -1 !== UU.indexOf("057e") ? wU.Switch : wU.Generic
      }
      _getPointerType(UU) {
        let RU = wU.Mouse;
        return ("touch" === UU.pointerType || "pen" === UU.pointerType || UU.touches) && (RU = wU.Touch), RU
      }
    }
    class HU {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = RU, this.deviceSlot = gU, this.onInputChangedObservable = new PU.b, this._deviceInputSystem = UU
      }
      getInput(UU) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, UU)
      }
    }
    class SU {
      constructor(UU) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = UU => {
          for (let RU = 0; RU < this._devices.length; RU++) {
            const gU = this._devices[RU];
            for (const tU in gU) {
              const gU = +tU;
              UU._addDevice(new HU(this._deviceInputSystem, RU, gU))
            }
          }
          this._registeredManagers.push(UU)
        }, this.unregisterManager = UU => {
          const RU = this._registeredManagers.indexOf(UU);
          RU > -1 && this._registeredManagers.splice(RU, 1)
        };
        const RU = Object.keys(wU).length / 2;
        this._devices = new Array(RU);
        const gU = (UU, RU) => {
            this._devices[UU] || (this._devices[UU] = new Array), this._devices[UU][RU] || (this._devices[UU][RU] = RU);
            for (const gU of this._registeredManagers) {
              const tU = new HU(this._deviceInputSystem, UU, RU);
              gU._addDevice(tU)
            }
          },
          tU = (UU, RU) => {
            this._devices[UU]?.[RU] && delete this._devices[UU][RU];
            for (const gU of this._registeredManagers) gU._removeDevice(UU, RU)
          },
          pU = (UU, RU, gU) => {
            if (gU)
              for (const tU of this._registeredManagers) tU._onInputChanged(UU, RU, gU)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new XU(gU, tU, pU) : this._deviceInputSystem = new dU(UU, gU, tU, pU)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class sU {
      getDeviceSource(UU, RU) {
        if (void 0 === RU) {
          if (void 0 === this._firstDevice[UU]) return null;
          RU = this._firstDevice[UU]
        }
        return this._devices[UU] && void 0 !== this._devices[UU][RU] ? this._devices[UU][RU] : null
      }
      getDeviceSources(UU) {
        return this._devices[UU] ? this._devices[UU].filter((UU => !!UU)) : []
      }
      constructor(UU) {
        const RU = Object.keys(wU).length / 2;
        this._devices = new Array(RU), this._firstDevice = new Array(RU), this._engine = UU, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new SU(UU)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new PU.b((UU => {
          for (const RU of this._devices)
            if (RU)
              for (const gU of RU) gU && this.onDeviceConnectedObservable.notifyObserver(UU, gU)
        })), this.onDeviceDisconnectedObservable = new PU.b, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = UU.HZ.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.HZ.remove(this._onDisposeObserver)
      }
      _addDevice(UU) {
        this._devices[UU.deviceType] || (this._devices[UU.deviceType] = []), this._devices[UU.deviceType][UU.deviceSlot] || (this._devices[UU.deviceType][UU.deviceSlot] = UU, this._updateFirstDevices(UU.deviceType)), this.onDeviceConnectedObservable.notifyObservers(UU)
      }
      _removeDevice(UU, RU) {
        const gU = this._devices[UU]?.[RU];
        this.onDeviceDisconnectedObservable.notifyObservers(gU), this._devices[UU]?.[RU] && delete this._devices[UU][RU], this._updateFirstDevices(UU)
      }
      _onInputChanged(UU, RU, gU) {
        this._devices[UU]?.[RU]?.onInputChangedObservable.notifyObservers(gU)
      }
      _updateFirstDevices(UU) {
        switch (UU) {
          case wU.Keyboard:
          case wU.Mouse:
            this._firstDevice[UU] = 0;
            break;
          case wU.Touch:
          case wU.DualSense:
          case wU.DualShock:
          case wU.Xbox:
          case wU.Switch:
          case wU.Generic: {
            delete this._firstDevice[UU];
            const RU = this._devices[UU];
            if (RU)
              for (let gU = 0; gU < RU.length; gU++)
                if (RU[gU]) {
                  this._firstDevice[UU] = gU;
                  break
                } break
          }
        }
      }
    }
    var yU = gU(39574);
    class kU {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get uc() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(UU) {
        this._singleClick = UU
      }
      set uc(UU) {
        this._doubleClick = UU
      }
      set hasSwiped(UU) {
        this._hasSwiped = UU
      }
      set ignore(UU) {
        this._ignore = UU
      }
    }
    class FU {
      constructor(UU) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new cU.l(0, 0), this._previousStartingPointerPosition = new cU.l(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = UU || xU.c.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(UU) {
        return this._meshUnderPointerId[UU] || null
      }
      get unTranslatedPointer() {
        return new cU.l(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(UU) {
        this._pointerX = UU
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(UU) {
        this._pointerY = UU
      }
      _updatePointerPosition(UU) {
        const RU = this._scene.WC().getInputElementClientRect();
        RU && (this._pointerX = UU.clientX - RU.left, this._pointerY = UU.clientY - RU.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(UU, RU) {
        const gU = this._scene,
          tU = gU.WC(),
          pU = tU.getInputElement();
        pU && (pU.tabIndex = tU.canvasTabIndex, gU.doNotHandleCursors || (pU.style.cursor = gU.defaultCursor)), this._setCursorAndPointerOverMesh(UU, RU, gU);
        for (const TU of gU._pointerMoveStage) {
          UU = UU || this._pickMove(RU);
          const gU = !!UU?.pickedMesh;
          UU = TU.action(this._unTranslatedPointerX, this._unTranslatedPointerY, UU, gU, pU)
        }
        const EU = RU.inputIndex >= nU.MouseWheelX && RU.inputIndex <= nU.MouseWheelZ ? IU.e.POINTERWHEEL : IU.e.POINTERMOVE;
        let PU;
        gU.onPointerMove && (UU = UU || this._pickMove(RU), gU.onPointerMove(RU, UU, EU)), UU ? (PU = new IU.k(EU, RU, UU), this._setRayOnPointerInfo(UU, RU)) : (PU = new IU.k(EU, RU, null, this), this._movePointerInfo = PU), gU.onPointerObservable.hasObservers() && gU.onPointerObservable.notifyObservers(PU, EU)
      }
      _setRayOnPointerInfo(UU, RU) {
        const gU = this._scene;
        UU && yU.b._IsPickingAvailable && (UU.ray || (UU.ray = gU.createPickingRay(RU.offsetX, RU.offsetY, cU.c.Identity(), gU.activeCamera)))
      }
      _addCameraPointerObserver(UU, RU) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(UU, RU)
      }
      _removeCameraPointerObserver(UU) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(UU)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(UU, RU, gU) {
        const tU = this._scene,
          pU = new IU.g(gU, RU, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return UU && (pU.originalPickingInfo = UU, pU.ray = UU.ray, "xr-near" === RU.pointerType && UU.originMesh && (pU.nearInteractionPickingInfo = UU)), tU.onPrePointerObservable.notifyObservers(pU, gU), !!pU.skipOnPointerObservable
      }
      _pickMove(UU) {
        const RU = this._scene,
          gU = RU.Hj(this._unTranslatedPointerX, this._unTranslatedPointerY, RU.pointerMovePredicate, RU.pointerMoveFastCheck, RU.cameraToUseForPointers, RU.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(gU, UU, RU), gU
      }
      _updateMeshUnderPointer() {
        const UU = this._scene;
        if (!UU.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || UU.skipPointerMovePicking || !UU.cameraToUseForPointers && !UU.activeCamera) return;
        this._ensurePointerMovePredicate();
        const RU = this._pointerX,
          gU = this._pointerY,
          tU = this._unTranslatedPointerX,
          pU = this._unTranslatedPointerY;
        for (const EU of this._latestPointerMoveEvents.values()) this._pointerX = EU.pointerX, this._pointerY = EU.pointerY, this._unTranslatedPointerX = EU.unTranslatedPointerX, this._unTranslatedPointerY = EU.unTranslatedPointerY, this._pickMove(EU.event);
        this._pointerX = RU, this._pointerY = gU, this._unTranslatedPointerX = tU, this._unTranslatedPointerY = pU
      }
      _ensurePointerMovePredicate() {
        const UU = this._scene;
        UU.pointerMovePredicate || (UU.pointerMovePredicate = RU => (RU._isPointerMovePickable ?? RU.Yh) && RU.isVisible && RU.isReady() && RU.isEnabled() && (RU.enablePointerMoveEvents || UU.constantlyUpdateMeshUnderPointer || null !== RU._getActionManagerForTrigger()) && (!UU.cameraToUseForPointers || 0 !== (UU.cameraToUseForPointers.layerMask & RU.layerMask)))
      }
      _setCursorAndPointerOverMesh(UU, RU, gU) {
        const tU = gU.WC().getInputElement();
        if (UU?.pickedMesh) {
          if (this.setPointerOverMesh(UU.pickedMesh, RU.pointerId, UU, RU), !gU.doNotHandleCursors && tU && this._pointerOverMesh) {
            const UU = this._pointerOverMesh._getActionManagerForTrigger();
            UU && UU.hasPointerTriggers && (tU.style.cursor = UU.hoverCursor || gU.hoverCursor)
          }
        } else this.setPointerOverMesh(null, RU.pointerId, UU, RU)
      }
      simulatePointerMove(UU, RU) {
        const gU = new PointerEvent("pointermove", RU);
        gU.inputIndex = nU.Move, this._checkPrePointerObservable(UU, gU, IU.e.POINTERMOVE) || this._processPointerMove(UU, gU)
      }
      simulatePointerDown(UU, RU) {
        const gU = new PointerEvent("pointerdown", RU);
        gU.inputIndex = gU.button + 2, this._checkPrePointerObservable(UU, gU, IU.e.POINTERDOWN) || this._processPointerDown(UU, gU)
      }
      _processPointerDown(UU, RU) {
        const gU = this._scene;
        if (UU?.pickedMesh) {
          this._pickedDownMesh = UU.pickedMesh;
          const tU = UU.pickedMesh._getActionManagerForTrigger();
          if (tU) {
            if (tU.hasPickTriggers) switch (tU.processTrigger(5, new CU(UU.pickedMesh, gU.pointerX, gU.pointerY, UU.pickedMesh, RU, UU)), RU.button) {
              case 0:
                tU.processTrigger(2, new CU(UU.pickedMesh, gU.pointerX, gU.pointerY, UU.pickedMesh, RU, UU));
                break;
              case 1:
                tU.processTrigger(4, new CU(UU.pickedMesh, gU.pointerX, gU.pointerY, UU.pickedMesh, RU, UU));
                break;
              case 2:
                tU.processTrigger(3, new CU(UU.pickedMesh, gU.pointerX, gU.pointerY, UU.pickedMesh, RU, UU))
            }
            tU.hasSpecificTrigger(8) && window.setTimeout((() => {
              const UU = gU.Hj(this._unTranslatedPointerX, this._unTranslatedPointerY, (UU => UU.Yh && UU.isVisible && UU.isReady() && UU.actionManager && UU.actionManager.hasSpecificTrigger(8) && UU === this._pickedDownMesh), !1, gU.cameraToUseForPointers);
              UU?.pickedMesh && tU && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > FU.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, tU.processTrigger(8, CU.CreateNew(UU.pickedMesh, RU)))
            }), FU.LongPressDelay)
          }
        } else
          for (const EU of gU._pointerDownStage) UU = EU.action(this._unTranslatedPointerX, this._unTranslatedPointerY, UU, RU, !1);
        let tU;
        const pU = IU.e.POINTERDOWN;
        UU ? (gU.onPointerDown && gU.onPointerDown(RU, UU, pU), tU = new IU.k(pU, RU, UU), this._setRayOnPointerInfo(UU, RU)) : tU = new IU.k(pU, RU, null, this), gU.onPointerObservable.hasObservers() && gU.onPointerObservable.notifyObservers(tU, pU)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(UU, RU, gU) {
        const tU = new PointerEvent("pointerup", RU);
        tU.inputIndex = nU.Move;
        const pU = new kU;
        gU ? pU.uc = !0 : pU.singleClick = !0, this._checkPrePointerObservable(UU, tU, IU.e.POINTERUP) || this._processPointerUp(UU, tU, pU)
      }
      _processPointerUp(UU, RU, gU) {
        const tU = this._scene;
        if (UU?.pickedMesh) {
          if (this._pickedUpMesh = UU.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (tU.onPointerPick && tU.onPointerPick(RU, UU), gU.singleClick && !gU.ignore && tU.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const gU = IU.e.POINTERPICK,
              pU = new IU.k(gU, RU, UU);
            this._setRayOnPointerInfo(UU, RU), tU.onPointerObservable.notifyObservers(pU, gU)
          }
          const pU = UU.pickedMesh._getActionManagerForTrigger();
          if (pU && !gU.ignore) {
            pU.processTrigger(7, CU.CreateNew(UU.pickedMesh, RU, UU)), !gU.hasSwiped && gU.singleClick && pU.processTrigger(1, CU.CreateNew(UU.pickedMesh, RU, UU));
            const tU = UU.pickedMesh._getActionManagerForTrigger(6);
            gU.uc && tU && tU.processTrigger(6, CU.CreateNew(UU.pickedMesh, RU, UU))
          }
        } else if (!gU.ignore)
          for (const pU of tU._pointerUpStage) UU = pU.action(this._unTranslatedPointerX, this._unTranslatedPointerY, UU, RU, gU.uc);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const UU = this._pickedDownMesh._getActionManagerForTrigger(16);
          UU && UU.processTrigger(16, CU.CreateNew(this._pickedDownMesh, RU))
        }
        if (!gU.ignore) {
          const pU = new IU.k(IU.e.POINTERUP, RU, UU);
          if (this._setRayOnPointerInfo(UU, RU), tU.onPointerObservable.notifyObservers(pU, IU.e.POINTERUP), tU.onPointerUp && tU.onPointerUp(RU, UU, IU.e.POINTERUP), !gU.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let pU = 0;
            if (gU.singleClick ? pU = IU.e.POINTERTAP : gU.uc && (pU = IU.e.POINTERDOUBLETAP), pU) {
              const gU = new IU.k(pU, RU, UU);
              tU.onPointerObservable.hasObservers() && tU.onPointerObservable.hasSpecificMask(pU) && tU.onPointerObservable.notifyObservers(gU, pU)
            }
          }
        }
      }
      isPointerCaptured() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[UU]
      }
      attachControl() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const pU = this._scene,
          EU = pU.WC();
        tU || (tU = EU.getInputElement()), this._alreadyAttached && this.detachControl(), tU && (this._alreadyAttachedTo = tU), this._deviceSourceManager = new sU(EU), this._initActionManager = UU => {
          if (!this._meshPickProceed) {
            const RU = pU.skipPointerUpPicking || 0 === pU._registeredActions && !this._checkForPicking() && !pU.onPointerUp ? null : pU.Hj(this._unTranslatedPointerX, this._unTranslatedPointerY, pU.pointerUpPredicate, pU.pointerUpFastCheck, pU.cameraToUseForPointers, pU.pointerUpTrianglePredicate);
            this._currentPickResult = RU, RU && (UU = RU.hit && RU.pickedMesh ? RU.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return UU
        }, this._delayedSimpleClick = (UU, RU, gU) => {
          if ((Date.now() - this._previousStartingPointerTime > FU.DoubleClickDelay && !this._doubleClickOccured || UU !== this._previousButtonPressed) && (this._doubleClickOccured = !1, RU.singleClick = !0, RU.ignore = !1, this._delayedClicks[UU])) {
            const RU = this._delayedClicks[UU].evt,
              gU = IU.e.POINTERTAP,
              tU = new IU.k(gU, RU, this._currentPickResult);
            pU.onPointerObservable.hasObservers() && pU.onPointerObservable.hasSpecificMask(gU) && pU.onPointerObservable.notifyObservers(tU, gU), this._delayedClicks[UU] = null
          }
        }, this._initClickEvent = (UU, RU, gU, tU) => {
          const pU = new kU;
          this._currentPickResult = null;
          let EU = null,
            PU = UU.hasSpecificMask(IU.e.POINTERPICK) || RU.hasSpecificMask(IU.e.POINTERPICK) || UU.hasSpecificMask(IU.e.POINTERTAP) || RU.hasSpecificMask(IU.e.POINTERTAP) || UU.hasSpecificMask(IU.e.POINTERDOUBLETAP) || RU.hasSpecificMask(IU.e.POINTERDOUBLETAP);
          !PU && JU && (EU = this._initActionManager(EU, pU), EU && (PU = EU.hasPickTriggers));
          let TU = !1;
          if (PU = PU && !this._isMultiTouchGesture, PU) {
            const PU = gU.button;
            if (pU.hasSwiped = this._isPointerSwiping(), !pU.hasSwiped) {
              let qU = !FU.ExclusiveDoubleClickMode;
              if (qU || (qU = !UU.hasSpecificMask(IU.e.POINTERDOUBLETAP) && !RU.hasSpecificMask(IU.e.POINTERDOUBLETAP), qU && !JU.HasSpecificTrigger(6) && (EU = this._initActionManager(EU, pU), EU && (qU = !EU.hasSpecificTrigger(6)))), qU)(Date.now() - this._previousStartingPointerTime > FU.DoubleClickDelay || PU !== this._previousButtonPressed) && (pU.singleClick = !0, tU(pU, this._currentPickResult), TU = !0);
              else {
                const UU = {
                  evt: gU,
                  clickInfo: pU,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, PU, pU, tU), FU.DoubleClickDelay)
                };
                this._delayedClicks[PU] = UU
              }
              let KU = UU.hasSpecificMask(IU.e.POINTERDOUBLETAP) || RU.hasSpecificMask(IU.e.POINTERDOUBLETAP);
              !KU && JU.HasSpecificTrigger(6) && (EU = this._initActionManager(EU, pU), EU && (KU = EU.hasSpecificTrigger(6))), KU && (PU === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < FU.DoubleClickDelay && !this._doubleClickOccured ? (pU.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = PU, FU.ExclusiveDoubleClickMode ? (this._delayedClicks[PU] && (clearTimeout(this._delayedClicks[PU]?.timeoutId), this._delayedClicks[PU] = null), tU(pU, this._previousPickResult)) : tU(pU, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, pU.uc = !0, pU.ignore = !1, FU.ExclusiveDoubleClickMode && this._delayedClicks[PU] && (clearTimeout(this._delayedClicks[PU]?.timeoutId), this._delayedClicks[PU] = null), tU(pU, this._currentPickResult)), TU = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = PU))
            }
          }
          TU || tU(pU, this._currentPickResult)
        }, this._onPointerMove = UU => {
          if (this._updatePointerPosition(UU), this._latestPointerMoveEvents.set(UU.pointerId, {
              event: UU,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > FU.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > FU.DragMovementThreshold), EU.isPointerLock && EU._verifyPointerLock(), this._checkPrePointerObservable(null, UU, UU.inputIndex >= nU.MouseWheelX && UU.inputIndex <= nU.MouseWheelZ ? IU.e.POINTERWHEEL : IU.e.POINTERMOVE)) return;
          if (!pU.cameraToUseForPointers && !pU.activeCamera) return;
          if (pU.skipPointerMovePicking) return void this._processPointerMove(new uU.b, UU);
          this._ensurePointerMovePredicate();
          const RU = pU._registeredActions > 0 || pU.constantlyUpdateMeshUnderPointer ? this._pickMove(UU) : null;
          this._processPointerMove(RU, UU)
        }, this._onPointerDown = UU => {
          const RU = this._activePointerIds.indexOf(-1);
          if (-1 === RU ? this._activePointerIds.push(UU.pointerId) : this._activePointerIds[RU] = UU.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, FU.ExclusiveDoubleClickMode)
            for (let tU = 0; tU < this._delayedClicks.length; tU++)
              if (this._delayedClicks[tU])
                if (UU.button === tU) clearTimeout(this._delayedClicks[tU]?.timeoutId);
                else {
                  const UU = this._delayedClicks[tU].clickInfo;
                  this._doubleClickOccured = !1, UU.singleClick = !0, UU.ignore = !1;
                  const RU = this._delayedClicks[tU].evt,
                    gU = IU.e.POINTERTAP,
                    EU = new IU.k(gU, RU, this._currentPickResult);
                  pU.onPointerObservable.hasObservers() && pU.onPointerObservable.hasSpecificMask(gU) && pU.onPointerObservable.notifyObservers(EU, gU), this._delayedClicks[tU] = null
                } if (this._updatePointerPosition(UU), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = UU.button), pU.preventDefaultOnPointerDown && tU && (UU.preventDefault(), tU.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, UU, IU.e.POINTERDOWN)) return;
          if (!pU.cameraToUseForPointers && !pU.activeCamera) return;
          let gU;
          this._pointerCaptures[UU.pointerId] = !0, pU.pointerDownPredicate || (pU.pointerDownPredicate = UU => UU.Yh && UU.isVisible && UU.isReady() && UU.isEnabled() && (!pU.cameraToUseForPointers || 0 !== (pU.cameraToUseForPointers.layerMask & UU.layerMask))), this._pickedDownMesh = null, gU = pU.skipPointerDownPicking || 0 === pU._registeredActions && !this._checkForPicking() && !pU.onPointerDown ? new uU.b : pU.Hj(this._unTranslatedPointerX, this._unTranslatedPointerY, pU.pointerDownPredicate, pU.pointerDownFastCheck, pU.cameraToUseForPointers, pU.pointerDownTrianglePredicate), this._processPointerDown(gU, UU)
        }, this._onPointerUp = UU => {
          const RU = this._activePointerIds.indexOf(UU.pointerId); - 1 !== RU && (this._activePointerIds[RU] = -1, this._activePointerIdsCount--, "touch" === UU.pointerType && this._latestPointerMoveEvents.delete(UU.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(UU), pU.preventDefaultOnPointerUp && tU && (UU.preventDefault(), tU.focus()), this._initClickEvent(pU.onPrePointerObservable, pU.onPointerObservable, UU, ((RU, gU) => {
            if (pU.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !RU.ignore)) {
              if (this._checkPrePointerObservable(null, UU, IU.e.POINTERUP)) return this._swipeButtonPressed === UU.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === UU.buttons && (this._pointerCaptures[UU.pointerId] = !1));
              RU.hasSwiped || (RU.singleClick && pU.onPrePointerObservable.hasSpecificMask(IU.e.POINTERTAP) && this._checkPrePointerObservable(null, UU, IU.e.POINTERTAP) && (this._skipPointerTap = !0), RU.uc && pU.onPrePointerObservable.hasSpecificMask(IU.e.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, UU, IU.e.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[UU.pointerId] ? (0 === UU.buttons && (this._pointerCaptures[UU.pointerId] = !1), (pU.cameraToUseForPointers || pU.activeCamera) && (pU.pointerUpPredicate || (pU.pointerUpPredicate = UU => UU.Yh && UU.isVisible && UU.isReady() && UU.isEnabled() && (!pU.cameraToUseForPointers || 0 !== (pU.cameraToUseForPointers.layerMask & UU.layerMask))), !this._meshPickProceed && (JU && JU.HasTriggers || this._checkForPicking() || pU.onPointerUp) && this._initActionManager(null, RU), gU || (gU = this._currentPickResult), this._processPointerUp(gU, UU, RU), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === UU.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === UU.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = UU => {
          const RU = BU.b.KEYDOWN;
          if (pU.onPreKeyboardObservable.hasObservers()) {
            const gU = new BU.e(RU, UU);
            if (pU.onPreKeyboardObservable.notifyObservers(gU, RU), gU.skipOnKeyboardObservable) return
          }
          if (pU.onKeyboardObservable.hasObservers()) {
            const gU = new BU.f(RU, UU);
            pU.onKeyboardObservable.notifyObservers(gU, RU)
          }
          pU.actionManager && pU.actionManager.processTrigger(14, CU.CreateNewFromScene(pU, UU))
        }, this._onKeyUp = UU => {
          const RU = BU.b.KEYUP;
          if (pU.onPreKeyboardObservable.hasObservers()) {
            const gU = new BU.e(RU, UU);
            if (pU.onPreKeyboardObservable.notifyObservers(gU, RU), gU.skipOnKeyboardObservable) return
          }
          if (pU.onKeyboardObservable.hasObservers()) {
            const gU = new BU.f(RU, UU);
            pU.onKeyboardObservable.notifyObservers(gU, RU)
          }
          pU.actionManager && pU.actionManager.processTrigger(15, CU.CreateNewFromScene(pU, UU))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((tU => {
          tU.deviceType === wU.Mouse ? tU.onInputChangedObservable.add((pU => {
            this._originMouseEvent = pU, pU.inputIndex === nU.LeftClick || pU.inputIndex === nU.MiddleClick || pU.inputIndex === nU.RightClick || pU.inputIndex === nU.BrowserBack || pU.inputIndex === nU.BrowserForward ? RU && 1 === tU.getInput(pU.inputIndex) ? this._onPointerDown(pU) : UU && 0 === tU.getInput(pU.inputIndex) && this._onPointerUp(pU) : gU && (pU.inputIndex === nU.Move ? this._onPointerMove(pU) : pU.inputIndex !== nU.MouseWheelX && pU.inputIndex !== nU.MouseWheelY && pU.inputIndex !== nU.MouseWheelZ || this._onPointerMove(pU))
          })) : tU.deviceType === wU.Touch ? tU.onInputChangedObservable.add((pU => {
            pU.inputIndex === nU.LeftClick && (RU && 1 === tU.getInput(pU.inputIndex) ? (this._onPointerDown(pU), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : UU && 0 === tU.getInput(pU.inputIndex) && (this._onPointerUp(pU), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), gU && pU.inputIndex === nU.Move && this._onPointerMove(pU)
          })) : tU.deviceType === wU.Keyboard && tU.onInputChangedObservable.add((UU => {
            "keydown" === UU.type ? this._onKeyDown(UU) : "keyup" === UU.type && this._onKeyUp(UU)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[RU] === UU && (!UU || !UU._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const pU = this._meshUnderPointerId[RU];
        let EU;
        pU && (EU = pU._getActionManagerForTrigger(10), EU && EU.processTrigger(10, new CU(pU, this._pointerX, this._pointerY, UU, tU, {
          pointerId: RU
        }))), UU ? (this._meshUnderPointerId[RU] = UU, this._pointerOverMesh = UU, EU = UU._getActionManagerForTrigger(9), EU && EU.processTrigger(9, new CU(UU, this._pointerX, this._pointerY, UU, tU, {
          pointerId: RU,
          pickResult: gU
        }))) : (delete this._meshUnderPointerId[RU], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: UU,
          pointerId: RU
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(UU) {
        this._pointerOverMesh === UU && (this._pointerOverMesh = null), this._pickedDownMesh === UU && (this._pickedDownMesh = null), this._pickedUpMesh === UU && (this._pickedUpMesh = null);
        for (const RU in this._meshUnderPointerId) this._meshUnderPointerId[RU] === UU && delete this._meshUnderPointerId[RU]
      }
    }
    FU.DragMovementThreshold = 10, FU.LongPressDelay = 500, FU.DoubleClickDelay = 300, FU.ExclusiveDoubleClickMode = !1;
    var iU = gU(39326),
      AU = gU(36761),
      zU = gU(37301);
    class MU {
      static get UniqueId() {
        const UU = this._UniqueIdCounter;
        return this._UniqueIdCounter++, UU
      }
    }
    MU._UniqueIdCounter = 1;
    var DU = gU(39424),
      LU = gU(39581),
      NU = gU(36610);
    class lU {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var OU, UR, RR, gR, tR, pR, ER, PR, TR, qR, KR, cR, GR, jR, uR, CR, hR, QR, eR, WR, fR, xR, mR, IR, JR, wR, nR, bR, oR, ZR, aR, YR, BR, VR, rR, XR, vR, dR, HR, SR, sR, yR, kR, FR, iR, AR, zR, MR, DR, LR, NR, lR, OR, Ug = gU(38236),
      Rg = gU(36639);
    const gg = new cU.q,
      tg = new cU.q;
    var pg;
    ! function(UU) {
      UU[UU.BackwardCompatible = 0] = "BackwardCompatible", UU[UU.Intermediate = 1] = "Intermediate", UU[UU.Aggressive = 2] = "Aggressive"
    }(pg || (pg = {}));
    class Eg {
      static DefaultMaterialFactory(UU) {
        throw (0, mU.n)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, mU.n)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(UU) {
        UU !== this._clearColor && (this._clearColor = UU, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(UU) {
        if (UU !== this._performancePriority) {
          switch (this._performancePriority = UU, UU) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(UU)
        }
      }
      set forceWireframe(UU) {
        this._forceWireframe !== UU && (this._forceWireframe = UU, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(UU) {
        this._skipFrustumClipping !== UU && (this._skipFrustumClipping = UU)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(UU) {
        this._forcePointsCloud !== UU && (this._forcePointsCloud = UU, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(UU) {
        this._environmentTexture !== UU && (this._environmentTexture = UU, this.onEnvironmentTextureChangedObservable.notifyObservers(UU), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let UU = [];
        UU = UU.concat(this.meshes), UU = UU.concat(this.lights), UU = UU.concat(this.cameras), UU = UU.concat(this.transformNodes);
        for (const RU of this.skeletons) UU = UU.concat(RU.bones);
        return UU
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(UU) {
        this._animationPropertiesOverride = UU
      }
      set onDispose(UU) {
        this._onDisposeObserver && this.HZ.remove(this._onDisposeObserver), this._onDisposeObserver = this.HZ.add(UU)
      }
      set beforeRender(UU) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), UU && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(UU))
      }
      set afterRender(UU) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), UU && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(UU))
      }
      set beforeCameraRender(UU) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(UU)
      }
      set afterCameraRender(UU) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(UU)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(UU) {
        this._pointerPickingConfiguration.pointerDownPredicate = UU
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(UU) {
        this._pointerPickingConfiguration.pointerUpPredicate = UU
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(UU) {
        this._pointerPickingConfiguration.pointerMovePredicate = UU
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(UU) {
        this._pointerPickingConfiguration.pointerDownFastCheck = UU
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(UU) {
        this._pointerPickingConfiguration.pointerUpFastCheck = UU
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(UU) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = UU
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(UU) {
        this._pointerPickingConfiguration.skipPointerMovePicking = UU
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(UU) {
        this._pointerPickingConfiguration.skipPointerDownPicking = UU
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(UU) {
        this._pointerPickingConfiguration.skipPointerUpPicking = UU
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return FU.DragMovementThreshold
      }
      static set DragMovementThreshold(UU) {
        FU.DragMovementThreshold = UU
      }
      static get LongPressDelay() {
        return FU.LongPressDelay
      }
      static set LongPressDelay(UU) {
        FU.LongPressDelay = UU
      }
      static get DoubleClickDelay() {
        return FU.DoubleClickDelay
      }
      static set DoubleClickDelay(UU) {
        FU.DoubleClickDelay = UU
      }
      static get ExclusiveDoubleClickMode() {
        return FU.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(UU) {
        FU.ExclusiveDoubleClickMode = UU
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? cU.n.ZeroReadOnly
      }
      bindEyePosition(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const tU = this._eyePosition,
          pU = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          EU = this.floatingOriginOffset,
          PU = gg.set(tU.x, tU.y, tU.z, pU ? -1 : 1),
          TU = PU.subtractFromFloatsToRef(EU.x, EU.y, EU.z, 0, tg);
        return UU && (gU ? UU.setFloat3(RU, TU.x, TU.y, TU.z) : UU.setVector4(RU, TU)), PU
      }
      finalizeSceneUbo() {
        const UU = this.getSceneUniformBuffer(),
          RU = this.bindEyePosition(null),
          gU = this.floatingOriginOffset;
        return UU.updateFloat4("vEyePosition", RU.x - gU.x, RU.y - gU.y, RU.z - gU.z, RU.w), UU.update(), UU
      }
      set useRightHandedSystem(UU) {
        this._useRightHandedSystem !== UU && (this._useRightHandedSystem = UU, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(UU) {
        this._currentStepId = UU
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(UU) {
        this._fogEnabled !== UU && (this._fogEnabled = UU, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(UU) {
        this._fogMode !== UU && (this._fogMode = UU, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(UU) {
        this._shadowsEnabled !== UU && (this._shadowsEnabled = UU, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(UU) {
        this._lightsEnabled !== UU && (this._lightsEnabled = UU, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(UU) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), UU && (this._unObserveActiveCameras = (0, NU.h)(UU, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = UU
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(UU) {
        UU !== this._activeCamera && (this._activeCamera = UU, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return Eg.DefaultMaterialFactory !== Eg._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = Eg.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(UU) {
        this._defaultMaterial = UU
      }
      set texturesEnabled(UU) {
        this._texturesEnabled !== UU && (this._texturesEnabled = UU, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(UU) {
        if (this._frameGraph) return this._frameGraph = UU, void(UU || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = UU, UU && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(UU) {
        this._skeletonsEnabled !== UU && (this._skeletonsEnabled = UU, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = Eg.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const UU of this._transientComponents) UU.register();
          this._transientComponents.length = 0
        }
      }
      IgU(UU) {
        this._components.push(UU), this._transientComponents.push(UU);
        const RU = UU;
        RU.addFromContainer && RU.serialize && this._serializableComponents.push(RU)
      }
      _getComponent(UU) {
        for (const RU of this._components)
          if (RU.name === UU) return RU;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(UU, RU) {
        this._inputManager = new FU(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new AU.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new PU.b, this.ambientColor = new AU.e(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new PU.b, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.vI = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.HZ = new PU.b, this._onDisposeObserver = null, this.onBeforeRenderObservable = new PU.b, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new PU.b, this.onAfterRenderCameraObservable = new PU.b, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new PU.b, this.onAfterAnimationsObservable = new PU.b, this.onBeforeDrawPhaseObservable = new PU.b, this.onAfterDrawPhaseObservable = new PU.b, this.onReadyObservable = new PU.b, this.onBeforeCameraRenderObservable = new PU.b, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new PU.b, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new PU.b, this.onAfterActiveMeshesEvaluationObservable = new PU.b, this.onBeforeParticlesRenderingObservable = new PU.b, this.onAfterParticlesRenderingObservable = new PU.b, this.onDataLoadedObservable = new PU.b, this.onNewCameraAddedObservable = new PU.b, this.onCameraRemovedObservable = new PU.b, this.onNewLightAddedObservable = new PU.b, this.onLightRemovedObservable = new PU.b, this.onNewGeometryAddedObservable = new PU.b, this.onGeometryRemovedObservable = new PU.b, this.onNewTransformNodeAddedObservable = new PU.b, this.onTransformNodeRemovedObservable = new PU.b, this.onNewMeshAddedObservable = new PU.b, this.onMeshRemovedObservable = new PU.b, this.onNewSkeletonAddedObservable = new PU.b, this.onSkeletonRemovedObservable = new PU.b, this.onNewParticleSystemAddedObservable = new PU.b, this.onParticleSystemRemovedObservable = new PU.b, this.onNewAnimationGroupAddedObservable = new PU.b, this.onAnimationGroupRemovedObservable = new PU.b, this.onNewMaterialAddedObservable = new PU.b, this.onNewMultiMaterialAddedObservable = new PU.b, this.onMaterialRemovedObservable = new PU.b, this.onMultiMaterialRemovedObservable = new PU.b, this.onNewTextureAddedObservable = new PU.b, this.onTextureRemovedObservable = new PU.b, this.onNewFrameGraphAddedObservable = new PU.b, this.onFrameGraphRemovedObservable = new PU.b, this.onNewObjectRendererAddedObservable = new PU.b, this.onObjectRendererRemovedObservable = new PU.b, this.onNewPostProcessAddedObservable = new PU.b, this.onPostProcessRemovedObservable = new PU.b, this.onNewEffectLayerAddedObservable = new PU.b, this.onEffectLayerRemovedObservable = new PU.b, this.onBeforeRenderTargetsRenderObservable = new PU.b, this.onAfterRenderTargetsRenderObservable = new PU.b, this.onBeforeStepObservable = new PU.b, this.onAfterStepObservable = new PU.b, this.onActiveCameraChanged = new PU.b, this.onActiveCamerasChanged = new PU.b, this.onBeforeRenderingGroupObservable = new PU.b, this.onAfterRenderingGroupObservable = new PU.b, this.onMeshImportedObservable = new PU.b, this.onAnimationFileImportedObservable = new PU.b, this.onEnvironmentTextureChangedObservable = new PU.b, this.onMeshUnderPointerUpdatedObservable = new PU.b, this._registeredForLateAnimationBindings = new TU.d(256), this._pointerPickingConfiguration = new lU, this.onPrePointerObservable = new PU.b, this.onPointerObservable = new PU.b, this.onPreKeyboardObservable = new PU.b, this.onKeyboardObservable = new PU.b, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = Eg.FOGMODE_NONE, this.fogColor = new AU.e(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.VV = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new cU.n(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new TU.d(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new iU.c, this._activeIndices = new iU.c, this._activeParticles = new iU.c, this._activeBones = new iU.c, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new TU.h(256), this._processedMaterials = new TU.h(256), this._renderTargets = new TU.d(256), this._materialsRenderTargets = new TU.d(256), this._activeParticleSystems = new TU.h(256), this._activeSkeletons = new TU.d(32), this._softwareSkinnedMeshes = new TU.d(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = cU.c.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = WU.f.Create(), this._beforeClearStage = WU.f.Create(), this._beforeRenderTargetClearStage = WU.f.Create(), this._gatherRenderTargetsStage = WU.f.Create(), this._gatherActiveCameraRenderTargetsStage = WU.f.Create(), this._isReadyForMeshStage = WU.f.Create(), this._beforeEvaluateActiveMeshStage = WU.f.Create(), this._evaluateSubMeshStage = WU.f.Create(), this._preActiveMeshStage = WU.f.Create(), this._cameraDrawRenderTargetStage = WU.f.Create(), this._beforeCameraDrawStage = WU.f.Create(), this._beforeRenderTargetDrawStage = WU.f.Create(), this._beforeRenderingGroupDrawStage = WU.f.Create(), this._beforeRenderingMeshStage = WU.f.Create(), this._afterRenderingMeshStage = WU.f.Create(), this._afterRenderingGroupDrawStage = WU.f.Create(), this._afterCameraDrawStage = WU.f.Create(), this._afterCameraPostProcessStage = WU.f.Create(), this._afterRenderTargetDrawStage = WU.f.Create(), this._afterRenderTargetPostProcessStage = WU.f.Create(), this._afterRenderStage = WU.f.Create(), this._pointerMoveStage = WU.f.Create(), this._pointerDownStage = WU.f.Create(), this._pointerUpStage = WU.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new PU.b, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const gU = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...RU
        };
        this.defaultCameraLayerMask = gU.defaultCameraLayerMask, this.defaultRenderableLayerMask = gU.defaultRenderableLayerMask, UU = this._engine = UU || xU.c.LastCreatedEngine, gU.virtual ? UU._virtualScenes.push(this) : (xU.c._LastCreatedScene = this, UU.scenes.push(this)), (UU.getCreationOptions().useLargeWorldRendering || RU?.useFloatingOrigin) && ((0, QU.d)(), this._floatingOriginScene = this, QU.c.aZ = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new eU.e(this), hU.c && (this.postProcessManager = new hU.c(this)), (0, fU.k)() && this.attachControl(), this._createUbo(), GU.e && (this._imageProcessingConfiguration = new GU.e), this.setDefaultCandidateProviders(), gU.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = gU.useMaterialMeshMap, this.useClonedMeshMap = gU.useClonedMeshMap, RU && RU.virtual || UU.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(UU) {
        return this._defaultSubMeshCandidates.data = UU.ZI, this._defaultSubMeshCandidates.length = UU.ZI.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = UU => this._getDefaultSubMeshCandidates(UU), this.getIntersectingSubMeshCandidates = (UU, RU) => this._getDefaultSubMeshCandidates(UU), this.getCollidingSubMeshCandidates = (UU, RU) => this._getDefaultSubMeshCandidates(UU)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(UU) {
        this._inputManager.pointerX = UU
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(UU) {
        this._inputManager.pointerY = UU
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
      isCachedMaterialInvalid(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== RU || this._cachedMaterial !== UU || this._cachedVisibility !== gU
      }
      WC() {
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
      simulatePointerMove(UU, RU) {
        return this._inputManager.simulatePointerMove(UU, RU), this
      }
      simulatePointerDown(UU, RU) {
        return this._inputManager.simulatePointerDown(UU, RU), this
      }
      simulatePointerUp(UU, RU, gU) {
        return this._inputManager.simulatePointerUp(UU, RU, gU), this
      }
      isPointerCaptured() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(UU)
      }
      attachControl() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(UU, RU, gU)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let UU, RU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const gU = this.WC(),
          tU = gU.currentRenderPassId;
        gU.currentRenderPassId = this.activeCamera?.renderPassId ?? tU;
        let pU = !0;
        for (this._pendingData.length > 0 && (pU = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && pU && (pU = this.depthPeelingRenderer.isReady()), RU && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), UU = 0; UU < this.meshes.length; UU++) {
          const tU = this.meshes[UU];
          if (!tU.ZI || 0 === tU.ZI.length) continue;
          if (!tU.isReady(!0)) {
            pU = !1;
            continue
          }
          const EU = tU.hasThinInstances || "InstancedMesh" === tU.getClassName() || "InstancedLinesMesh" === tU.getClassName() || gU.getCaps().instancedArrays && tU.instances.length > 0;
          for (let UU = 0, RU = this._isReadyForMeshStage; UU < RU.length; UU++) {
            RU[UU].action(tU, EU) || (pU = !1)
          }
          if (!RU) continue;
          const PU = tU.material || this.defaultMaterial;
          if (PU)
            if (PU._storeEffectOnSubMeshes)
              for (const UU of tU.ZI) {
                const RU = UU.JC();
                RU && RU.hasRenderTargetTextures && null != RU.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(RU) && (this._processedMaterials.push(RU), this._materialsRenderTargets.concatWithNoDuplicate(RU.getRenderTargetTextures()))
              } else PU.hasRenderTargetTextures && null != PU.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(PU) && (this._processedMaterials.push(PU), this._materialsRenderTargets.concatWithNoDuplicate(PU.getRenderTargetTextures()))
        }
        if (RU) {
          for (UU = 0; UU < this._materialsRenderTargets.length; ++UU) {
            this._materialsRenderTargets.data[UU].isReadyForRendering() || (pU = !1)
          }
          for (UU = 0; UU < this.customRenderTargets.length; ++UU) {
            this.customRenderTargets[UU].isReadyForRendering() || (pU = !1)
          }
        }
        for (UU = 0; UU < this.geometries.length; UU++) {
          2 === this.geometries[UU].delayLoadState && (pU = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const EU of this.activeCameras) EU.isReady(!0) || (pU = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (pU = !1));
        for (const EU of this.vI) EU.isReady() || (pU = !1);
        if (this.proceduralTexturesEnabled)
          for (const EU of this.proceduralTextures) EU.isReady() || (pU = !1);
        if (this.layers)
          for (const EU of this.layers) EU.isReady() || (pU = !1);
        if (this.effectLayers)
          for (const EU of this.effectLayers) EU.isLayerReady() || (pU = !1);
        for (const EU of this._isReadyChecks) EU.isReady() || (pU = !1);
        return gU.areAllEffectsReady() || (pU = !1), gU.currentRenderPassId = tU, pU
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(UU) {
        this.onBeforeRenderObservable.add(UU)
      }
      unregisterBeforeRender(UU) {
        this.onBeforeRenderObservable.removeCallback(UU)
      }
      registerAfterRender(UU) {
        this.onAfterRenderObservable.add(UU)
      }
      unregisterAfterRender(UU) {
        this.onAfterRenderObservable.removeCallback(UU)
      }
      _executeOnceBeforeRender(UU) {
        const RU = () => {
          UU(), setTimeout((() => {
            this.unregisterBeforeRender(RU)
          }))
        };
        this.registerBeforeRender(RU)
      }
      executeOnceBeforeRender(UU, RU) {
        void 0 !== RU ? setTimeout((() => {
          this._executeOnceBeforeRender(UU)
        }), RU) : this._executeOnceBeforeRender(UU)
      }
      addPendingData(UU) {
        this._pendingData.push(UU)
      }
      removePendingData(UU) {
        const RU = this.isLoading,
          gU = this._pendingData.indexOf(UU); - 1 !== gU && this._pendingData.splice(gU, 1), RU && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(UU) {
        -1 === this._isReadyChecks.indexOf(UU) && this._isReadyChecks.push(UU)
      }
      removeIsReadyCheck(UU) {
        const RU = this._isReadyChecks.indexOf(UU); - 1 !== RU && this._isReadyChecks.splice(RU, 1)
      }
      executeWhenReady(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(UU), null === this._executeWhenReadyTimeoutId && this._checkIsReady(RU)
      }
      async whenReadyAsync() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((RU => {
          this.executeWhenReady((() => {
            RU()
          }), UU)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = EU.b.Now;
        else if (this.onReadyTimeoutDuration > 0 && EU.b.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(UU)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(UU)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = EU.b.Now
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
      setTransformMatrix(UU, RU, gU, tU) {
        this._multiviewSceneUboIsActive = !!(gU && tU && this._multiviewSceneUbo), this._viewUpdateFlag === UU.updateFlag && this._projectionUpdateFlag === RU.updateFlag || (this._viewUpdateFlag = UU.updateFlag, this._projectionUpdateFlag = RU.updateFlag, this._viewMatrix = UU, this._projectionMatrix = RU, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new cU.c), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? zU.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = zU.e.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(gU, tU) : this._sceneUbo.useUbo && (this._sceneUbo.p_("viewProjection", this._transformMatrix), this._sceneUbo.p_("view", this._viewMatrix), this._sceneUbo.p_("projection", this._projectionMatrix), this._sceneUbo.p_("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(UU, RU) {
        const gU = "boolean" === typeof RU ? RU : RU?.trackUBOsInFrame,
          tU = new jU.c(this._engine, void 0, !1, UU ?? "Zh", void 0, gU);
        return tU.addUniform("viewProjection", 16), tU.addUniform("view", 16), tU.addUniform("projection", 16), tU.addUniform("vEyePosition", 4), tU.addUniform("inverseProjection", 16), tU
      }
      setSceneUniformBuffer(UU) {
        this._sceneUbo = UU, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : cU.n.ZeroReadOnly
      }
      getUniqueId() {
        return MU.UniqueId
      }
      HgU(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(UU), UU._resyncLightSources(), UU.parent || UU._addToSceneRootNodes(), pU.b.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(UU)
          })), RU)) {
          const RU = UU.getChildMeshes();
          for (const UU of RU) this.HgU(UU)
        }
      }
      TY(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const gU = this.meshes.indexOf(UU);
        if (-1 !== gU && (this.meshes.splice(gU, 1), UU.parent || UU._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(UU), this.onMeshRemovedObservable.notifyObservers(UU), RU) {
          const RU = UU.getChildMeshes();
          for (const UU of RU) this.TY(UU)
        }
        return gU
      }
      addTransformNode(UU) {
        this._blockEntityCollection || UU.aZ() === this && -1 !== UU._indexInSceneTransformNodesArray || (UU._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(UU), UU.parent || UU._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(UU))
      }
      removeTransformNode(UU) {
        const RU = UU._indexInSceneTransformNodesArray;
        if (-1 !== RU) {
          if (RU !== this.transformNodes.length - 1) {
            const UU = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[RU] = UU, UU._indexInSceneTransformNodesArray = RU
          }
          UU._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), UU.parent || UU._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(UU), RU
      }
      removeSkeleton(UU) {
        const RU = this.skeletons.indexOf(UU);
        return -1 !== RU && (this.skeletons.splice(RU, 1), this.onSkeletonRemovedObservable.notifyObservers(UU), this._executeActiveContainerCleanup(this._activeSkeletons)), RU
      }
      removeMorphTargetManager(UU) {
        const RU = this.morphTargetManagers.indexOf(UU);
        return -1 !== RU && this.morphTargetManagers.splice(RU, 1), RU
      }
      removeLight(UU) {
        const RU = this.lights.indexOf(UU);
        if (-1 !== RU) {
          for (const RU of this.meshes) RU._removeLightSource(UU, !1);
          this.lights.splice(RU, 1), this.sortLightsByPriority(), UU.parent || UU._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(UU)
        }
        return RU
      }
      removeCamera(UU) {
        const RU = this.cameras.indexOf(UU);
        if (-1 !== RU && (this.cameras.splice(RU, 1), UU.parent || UU._removeFromSceneRootNodes()), this.activeCameras) {
          const RU = this.activeCameras.indexOf(UU); - 1 !== RU && this.activeCameras.splice(RU, 1)
        }
        return this.activeCamera === UU && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(UU), RU
      }
      removeParticleSystem(UU) {
        const RU = this.vI.indexOf(UU);
        return -1 !== RU && (this.vI.splice(RU, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(UU), RU
      }
      removeAnimation(UU) {
        const RU = this.animations.indexOf(UU);
        return -1 !== RU && this.animations.splice(RU, 1), RU
      }
      stopAnimation(UU, RU, gU) {}
      removeAnimationGroup(UU) {
        const RU = this.animationGroups.indexOf(UU);
        return -1 !== RU && this.animationGroups.splice(RU, 1), this.onAnimationGroupRemovedObservable.notifyObservers(UU), RU
      }
      removeMultiMaterial(UU) {
        const RU = this.multiMaterials.indexOf(UU);
        return -1 !== RU && this.multiMaterials.splice(RU, 1), this.onMultiMaterialRemovedObservable.notifyObservers(UU), RU
      }
      removeMaterial(UU) {
        const RU = UU._indexInSceneMaterialArray;
        if (-1 !== RU && RU < this.materials.length) {
          if (RU !== this.materials.length - 1) {
            const UU = this.materials[this.materials.length - 1];
            this.materials[RU] = UU, UU._indexInSceneMaterialArray = RU
          }
          UU._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(UU), RU
      }
      removeActionManager(UU) {
        const RU = this.actionManagers.indexOf(UU);
        return -1 !== RU && this.actionManagers.splice(RU, 1), RU
      }
      removeTexture(UU) {
        const RU = this.textures.indexOf(UU);
        return -1 !== RU && this.textures.splice(RU, 1), this.onTextureRemovedObservable.notifyObservers(UU), RU
      }
      removeFrameGraph(UU) {
        const RU = this.frameGraphs.indexOf(UU);
        return -1 !== RU && this.frameGraphs.splice(RU, 1), this.onFrameGraphRemovedObservable.notifyObservers(UU), RU
      }
      removeObjectRenderer(UU) {
        const RU = this.objectRenderers.indexOf(UU);
        return -1 !== RU && this.objectRenderers.splice(RU, 1), this.onObjectRendererRemovedObservable.notifyObservers(UU), RU
      }
      removePostProcess(UU) {
        const RU = this.postProcesses.indexOf(UU);
        return -1 !== RU && this.postProcesses.splice(RU, 1), this.onPostProcessRemovedObservable.notifyObservers(UU), RU
      }
      removeEffectLayer(UU) {
        const RU = this.effectLayers.indexOf(UU);
        return -1 !== RU && this.effectLayers.splice(RU, 1), this.onEffectLayerRemovedObservable.notifyObservers(UU), RU
      }
      addLight(UU) {
        if (!this._blockEntityCollection) {
          this.lights.push(UU), this.sortLightsByPriority(), UU.parent || UU._addToSceneRootNodes();
          for (const RU of this.meshes) - 1 === RU.lightSources.indexOf(UU) && (RU.lightSources.push(UU), RU._resyncLightSources());
          pU.b.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(UU)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(LU.c.CompareLightsPriority)
      }
      addCamera(UU) {
        this._blockEntityCollection || (this.cameras.push(UU), pU.b.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(UU)
        })), UU.parent || UU._addToSceneRootNodes())
      }
      addSkeleton(UU) {
        this._blockEntityCollection || (this.skeletons.push(UU), pU.b.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(UU)
        })))
      }
      addParticleSystem(UU) {
        this._blockEntityCollection || (this.vI.push(UU), pU.b.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(UU)
        })))
      }
      addAnimation(UU) {
        this._blockEntityCollection || this.animations.push(UU)
      }
      addAnimationGroup(UU) {
        this._blockEntityCollection || (this.animationGroups.push(UU), pU.b.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(UU)
        })))
      }
      addMultiMaterial(UU) {
        this._blockEntityCollection || (this.multiMaterials.push(UU), pU.b.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(UU)
        })))
      }
      addMaterial(UU) {
        this._blockEntityCollection || UU.aZ() === this && -1 !== UU._indexInSceneMaterialArray || (UU._indexInSceneMaterialArray = this.materials.length, this.materials.push(UU), pU.b.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(UU)
        })))
      }
      addMorphTargetManager(UU) {
        this._blockEntityCollection || this.morphTargetManagers.push(UU)
      }
      addGeometry(UU) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[UU.uniqueId] = this.geometries.length), this.geometries.push(UU))
      }
      addActionManager(UU) {
        this.actionManagers.push(UU)
      }
      addTexture(UU) {
        this._blockEntityCollection || (this.textures.push(UU), this.onNewTextureAddedObservable.notifyObservers(UU))
      }
      addFrameGraph(UU) {
        this.frameGraphs.push(UU), pU.b.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(UU)
        }))
      }
      addObjectRenderer(UU) {
        this.objectRenderers.push(UU), pU.b.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(UU)
        }))
      }
      addPostProcess(UU) {
        this._blockEntityCollection || (this.postProcesses.push(UU), pU.b.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(UU)
        })))
      }
      addEffectLayer(UU) {
        this._blockEntityCollection || (this.effectLayers.push(UU), pU.b.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(UU)
        })))
      }
      switchActiveCamera(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = UU, RU && UU.attachControl())
      }
      setActiveCameraById(UU) {
        const RU = this.getCameraById(UU);
        return RU ? (this.activeCamera = RU, RU) : null
      }
      setActiveCameraByName(UU) {
        const RU = this.getCameraByName(UU);
        return RU ? (this.activeCamera = RU, RU) : null
      }
      getAnimationGroupByName(UU) {
        for (let RU = 0; RU < this.animationGroups.length; RU++)
          if (this.animationGroups[RU].name === UU) return this.animationGroups[RU];
        return null
      }
      _getMaterial(UU, RU) {
        for (let gU = 0; gU < this.materials.length; gU++) {
          const UU = this.materials[gU];
          if (RU(UU)) return UU
        }
        if (UU)
          for (let gU = 0; gU < this.multiMaterials.length; gU++) {
            const UU = this.multiMaterials[gU];
            if (RU(UU)) return UU
          }
        return null
      }
      getMaterialByUniqueID(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(UU, RU)
      }
      getMaterialByUniqueId(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(RU, (RU => RU.uniqueId === UU))
      }
      getMaterialById(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(RU, (RU => RU.id === UU))
      }
      getMaterialByName(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(RU, (RU => RU.name === UU))
      }
      getLastMaterialById(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let gU = this.materials.length - 1; gU >= 0; gU--)
          if (this.materials[gU].id === UU) return this.materials[gU];
        if (RU)
          for (let gU = this.multiMaterials.length - 1; gU >= 0; gU--)
            if (this.multiMaterials[gU].id === UU) return this.multiMaterials[gU];
        return null
      }
      getTextureByUniqueId(UU) {
        for (let RU = 0; RU < this.textures.length; RU++)
          if (this.textures[RU].uniqueId === UU) return this.textures[RU];
        return null
      }
      getTextureByName(UU) {
        for (let RU = 0; RU < this.textures.length; RU++)
          if (this.textures[RU].name === UU) return this.textures[RU];
        return null
      }
      getCameraById(UU) {
        for (let RU = 0; RU < this.cameras.length; RU++)
          if (this.cameras[RU].id === UU) return this.cameras[RU];
        return null
      }
      getCameraByUniqueId(UU) {
        for (let RU = 0; RU < this.cameras.length; RU++)
          if (this.cameras[RU].uniqueId === UU) return this.cameras[RU];
        return null
      }
      getCameraByName(UU) {
        for (let RU = 0; RU < this.cameras.length; RU++)
          if (this.cameras[RU].name === UU) return this.cameras[RU];
        return null
      }
      getBoneById(UU) {
        for (let RU = 0; RU < this.skeletons.length; RU++) {
          const gU = this.skeletons[RU];
          for (let RU = 0; RU < gU.bones.length; RU++)
            if (gU.bones[RU].id === UU) return gU.bones[RU]
        }
        return null
      }
      getBoneByName(UU) {
        for (let RU = 0; RU < this.skeletons.length; RU++) {
          const gU = this.skeletons[RU];
          for (let RU = 0; RU < gU.bones.length; RU++)
            if (gU.bones[RU].name === UU) return gU.bones[RU]
        }
        return null
      }
      getLightByName(UU) {
        for (let RU = 0; RU < this.lights.length; RU++)
          if (this.lights[RU].name === UU) return this.lights[RU];
        return null
      }
      getLightById(UU) {
        for (let RU = 0; RU < this.lights.length; RU++)
          if (this.lights[RU].id === UU) return this.lights[RU];
        return null
      }
      getLightByUniqueId(UU) {
        for (let RU = 0; RU < this.lights.length; RU++)
          if (this.lights[RU].uniqueId === UU) return this.lights[RU];
        return null
      }
      getParticleSystemById(UU) {
        for (let RU = 0; RU < this.vI.length; RU++)
          if (this.vI[RU].id === UU) return this.vI[RU];
        return null
      }
      getGeometryById(UU) {
        for (let RU = 0; RU < this.geometries.length; RU++)
          if (this.geometries[RU].id === UU) return this.geometries[RU];
        return null
      }
      _getGeometryByUniqueId(UU) {
        if (this._geometriesByUniqueId) {
          const RU = this._geometriesByUniqueId[UU];
          if (void 0 !== RU) return this.geometries[RU]
        } else
          for (let RU = 0; RU < this.geometries.length; RU++)
            if (this.geometries[RU].uniqueId === UU) return this.geometries[RU];
        return null
      }
      getFrameGraphByName(UU) {
        for (let RU = 0; RU < this.frameGraphs.length; RU++)
          if (this.frameGraphs[RU].name === UU) return this.frameGraphs[RU];
        return null
      }
      pushGeometry(UU, RU) {
        return !(!RU && this._getGeometryByUniqueId(UU.uniqueId)) && (this.addGeometry(UU), pU.b.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(UU)
        })), !0)
      }
      removeGeometry(UU) {
        let RU;
        if (this._geometriesByUniqueId) {
          if (RU = this._geometriesByUniqueId[UU.uniqueId], void 0 === RU) return !1
        } else if (RU = this.geometries.indexOf(UU), RU < 0) return !1;
        if (RU !== this.geometries.length - 1) {
          const UU = this.geometries[this.geometries.length - 1];
          UU && (this.geometries[RU] = UU, this._geometriesByUniqueId && (this._geometriesByUniqueId[UU.uniqueId] = RU))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[UU.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(UU), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(UU) {
        for (let RU = 0; RU < this.meshes.length; RU++)
          if (this.meshes[RU].id === UU) return this.meshes[RU];
        return null
      }
      getMeshesById(UU) {
        return this.meshes.filter((function(RU) {
          return RU.id === UU
        }))
      }
      getTransformNodeById(UU) {
        for (let RU = 0; RU < this.transformNodes.length; RU++)
          if (this.transformNodes[RU].id === UU) return this.transformNodes[RU];
        return null
      }
      getTransformNodeByUniqueId(UU) {
        for (let RU = 0; RU < this.transformNodes.length; RU++)
          if (this.transformNodes[RU].uniqueId === UU) return this.transformNodes[RU];
        return null
      }
      getTransformNodesById(UU) {
        return this.transformNodes.filter((function(RU) {
          return RU.id === UU
        }))
      }
      getMeshByUniqueId(UU) {
        for (let RU = 0; RU < this.meshes.length; RU++)
          if (this.meshes[RU].uniqueId === UU) return this.meshes[RU];
        return null
      }
      getLastMeshById(UU) {
        for (let RU = this.meshes.length - 1; RU >= 0; RU--)
          if (this.meshes[RU].id === UU) return this.meshes[RU];
        return null
      }
      getLastTransformNodeById(UU) {
        for (let RU = this.transformNodes.length - 1; RU >= 0; RU--)
          if (this.transformNodes[RU].id === UU) return this.transformNodes[RU];
        return null
      }
      getLastEntryById(UU) {
        let RU;
        for (RU = this.meshes.length - 1; RU >= 0; RU--)
          if (this.meshes[RU].id === UU) return this.meshes[RU];
        for (RU = this.transformNodes.length - 1; RU >= 0; RU--)
          if (this.transformNodes[RU].id === UU) return this.transformNodes[RU];
        for (RU = this.cameras.length - 1; RU >= 0; RU--)
          if (this.cameras[RU].id === UU) return this.cameras[RU];
        for (RU = this.lights.length - 1; RU >= 0; RU--)
          if (this.lights[RU].id === UU) return this.lights[RU];
        for (RU = this.skeletons.length - 1; RU >= 0; RU--) {
          const gU = this.skeletons[RU];
          for (let RU = gU.bones.length - 1; RU >= 0; RU--)
            if (gU.bones[RU].id === UU) return gU.bones[RU]
        }
        return null
      }
      getNodeById(UU) {
        const RU = this.getMeshById(UU);
        if (RU) return RU;
        const gU = this.getTransformNodeById(UU);
        if (gU) return gU;
        const tU = this.getLightById(UU);
        if (tU) return tU;
        const pU = this.getCameraById(UU);
        if (pU) return pU;
        const EU = this.getBoneById(UU);
        return EU || null
      }
      getNodeByName(UU) {
        const RU = this.getMeshByName(UU);
        if (RU) return RU;
        const gU = this.getTransformNodeByName(UU);
        if (gU) return gU;
        const tU = this.getLightByName(UU);
        if (tU) return tU;
        const pU = this.getCameraByName(UU);
        if (pU) return pU;
        const EU = this.getBoneByName(UU);
        return EU || null
      }
      getMeshByName(UU) {
        for (let RU = 0; RU < this.meshes.length; RU++)
          if (this.meshes[RU].name === UU) return this.meshes[RU];
        return null
      }
      getTransformNodeByName(UU) {
        for (let RU = 0; RU < this.transformNodes.length; RU++)
          if (this.transformNodes[RU].name === UU) return this.transformNodes[RU];
        return null
      }
      getLastSkeletonById(UU) {
        for (let RU = this.skeletons.length - 1; RU >= 0; RU--)
          if (this.skeletons[RU].id === UU) return this.skeletons[RU];
        return null
      }
      getSkeletonByUniqueId(UU) {
        for (let RU = 0; RU < this.skeletons.length; RU++)
          if (this.skeletons[RU].uniqueId === UU) return this.skeletons[RU];
        return null
      }
      getSkeletonById(UU) {
        for (let RU = 0; RU < this.skeletons.length; RU++)
          if (this.skeletons[RU].id === UU) return this.skeletons[RU];
        return null
      }
      getSkeletonByName(UU) {
        for (let RU = 0; RU < this.skeletons.length; RU++)
          if (this.skeletons[RU].name === UU) return this.skeletons[RU];
        return null
      }
      getMorphTargetManagerById(UU) {
        for (let RU = 0; RU < this.morphTargetManagers.length; RU++)
          if (this.morphTargetManagers[RU].uniqueId === UU) return this.morphTargetManagers[RU];
        return null
      }
      getMorphTargetById(UU) {
        for (let RU = 0; RU < this.morphTargetManagers.length; ++RU) {
          const gU = this.morphTargetManagers[RU];
          for (let RU = 0; RU < gU.numTargets; ++RU) {
            const tU = gU.getTarget(RU);
            if (tU.id === UU) return tU
          }
        }
        return null
      }
      getMorphTargetByName(UU) {
        for (let RU = 0; RU < this.morphTargetManagers.length; ++RU) {
          const gU = this.morphTargetManagers[RU];
          for (let RU = 0; RU < gU.numTargets; ++RU) {
            const tU = gU.getTarget(RU);
            if (tU.name === UU) return tU
          }
        }
        return null
      }
      getPostProcessByName(UU) {
        for (let RU = 0; RU < this.postProcesses.length; ++RU) {
          const gU = this.postProcesses[RU];
          if (gU.name === UU) return gU
        }
        return null
      }
      isActiveMesh(UU) {
        return -1 !== this._activeMeshes.indexOf(UU)
      }
      get uid() {
        return this._uid || (this._uid = tU.g.RandomId()), this._uid
      }
      addExternalData(UU, RU) {
        return this._externalData || (this._externalData = new qU), this._externalData.add(UU, RU)
      }
      getExternalData(UU) {
        return this._externalData ? this._externalData.get(UU) : null
      }
      getOrAddExternalDataWithFactory(UU, RU) {
        return this._externalData || (this._externalData = new qU), this._externalData.getOrAddWithFactory(UU, RU)
      }
      removeExternalData(UU) {
        return this._externalData.remove(UU)
      }
      _evaluateSubMesh(UU, RU, gU, tU) {
        if (tU || UU.isInFrustum(this._frustumPlanes)) {
          for (let tU = 0, pU = this._evaluateSubMeshStage; tU < pU.length; tU++) {
            pU[tU].action(RU, UU)
          }
          const gU = UU.JC();
          null !== gU && void 0 !== gU && (gU.hasRenderTargetTextures && null != gU.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(gU) && (this._processedMaterials.push(gU), this._materialsRenderTargets.concatWithNoDuplicate(gU.getRenderTargetTextures())), this._renderingManager.dispatch(UU, RU, gU))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(UU) {
        this._preventFreeActiveMeshesAndRenderingGroups !== UU && (UU && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = UU)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let UU = 0; UU < this.activeCameras.length; UU++) {
            const RU = this.activeCameras[UU];
            RU && RU._activeMeshes && RU._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let UU = 0; UU < this.textures.length; UU++) {
            const RU = this.textures[UU];
            RU && RU.renderList && RU.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          RU = arguments.length > 1 ? arguments[1] : void 0,
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          EU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const PU = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const UU of PU) UU.objectRenderer._freezeActiveMeshes(tU);
          return this._freezeActiveMeshesCancel = (0, pU.c)((() => {
            let UU = !0,
              RU = !0;
            for (const gU of PU) UU && (UU = gU.objectRenderer._isFrozen), RU && (RU = null !== gU.objectRenderer._freezeActiveMeshesCancel);
            if (UU) return !0;
            if (!RU) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = EU, this._skipEvaluateActiveMeshesCompletely = UU, RU?.()
          }), ((UU, RU) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), RU) {
              const RU = "Scene: Timeout while waiting for meshes to be frozen.";
              gU ? gU(RU) : (Ug.e.Error(RU), UU && Ug.e.Error(UU))
            } else {
              const RU = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              gU ? gU(RU) : (Ug.e.Error(RU), UU && (Ug.e.Error(UU), UU.stack && Ug.e.Error(UU.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = EU, this._skipEvaluateActiveMeshesCompletely = UU, tU)
              for (let UU = 0; UU < this._activeMeshes.length; UU++) this._activeMeshes.data[UU]._freeze();
            RU && RU()
          } else gU && gU("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let UU = 0; UU < this.meshes.length; UU++) {
          const RU = this.meshes[UU];
          RU._internalAbstractMeshDataInfo && (RU._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const UU = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const RU of UU) RU.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let UU = 0; UU < this._activeMeshes.length; UU++) this._activeMeshes.data[UU]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(UU) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => UU.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const UU = this._activeMeshes.length;
            for (let RU = 0; RU < UU; RU++) {
              this._activeMeshes.data[RU].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const UU = this._activeParticleSystems.length;
            for (let RU = 0; RU < UU; RU++) this._activeParticleSystems.data[RU].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let pU = 0, EU = this._beforeEvaluateActiveMeshStage; pU < EU.length; pU++) {
          EU[pU].action()
        }
        const UU = this.getActiveMeshCandidates(),
          RU = UU.length,
          gU = iU.c.Enabled,
          tU = this.customLODSelector;
        for (let pU = 0; pU < RU; pU++) {
          const RU = UU.data[pU],
            EU = !tU && !RU.sZ && !RU._internalMeshDataInfo?._LODLevels.length;
          let PU, TU;
          if ((EU || (PU = RU._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), PU ? PU[1] = -1 : (PU = [RU, -1], RU._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, PU))), !RU.isBlocked) && (gU && this._totalVertices.addCount(RU.getTotalVertices(), !1), RU.isReady() && RU.isEnabled() && !RU.ep.hasAZeroComponent)) {
            if (RU.computeWorldMatrix(), RU.actionManager && RU.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(RU), EU) TU = RU;
            else if (TU = tU ? tU(RU, this.activeCamera) : RU.getLOD(this.activeCamera), PU[0] = TU, PU[1] = this._frameId, void 0 === TU || null === TU) continue;
            if (TU !== RU && 0 !== TU.billboardMode && TU.computeWorldMatrix(), RU._preActivate(), RU.isVisible && RU.visibility > 0 && 0 !== (RU.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || RU.fC || RU.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(RU), this.activeCamera._activeMeshes.push(RU), TU !== RU && TU._activate(this._renderId, !1);
              for (let UU = 0, gU = this._preActiveMeshStage; UU < gU.length; UU++) {
                gU[UU].action(RU)
              }
              RU._activate(this._renderId, !1) && (RU.sZ ? RU._internalAbstractMeshDataInfo._actAsRegularMesh && (TU = RU) : TU._internalAbstractMeshDataInfo._onlyForInstances = !1, TU._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(RU, TU)), RU._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let UU = 0; UU < this.vI.length; UU++) {
            const RU = this.vI[UU];
            if (!RU.isStarted() || !RU.emitter) continue;
            const gU = RU.emitter;
            gU.position && !gU.isEnabled() || (this._activeParticleSystems.push(RU), RU.animate(), this._renderingManager.dispatchParticles(RU))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(UU) {
        this._skeletonsEnabled && UU.skeleton && (this._activeSkeletons.pushNoDuplicate(UU.skeleton) && (UU.skeleton.prepare(), this._activeBones.addCount(UU.skeleton.bones.length, !1)), UU.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(UU) && this.frameGraph && UU.applySkeleton(UU.skeleton))
      }
      _activeMesh(UU, RU) {
        this._prepareSkeleton(RU);
        let gU = UU.BtU || UU.sZ || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || RU.fC;
        if (RU && RU.ZI && RU.ZI.length > 0) {
          const tU = this.getActiveSubMeshCandidates(RU),
            pU = tU.length;
          gU = gU || 1 === pU;
          for (let EU = 0; EU < pU; EU++) {
            const pU = tU.data[EU];
            this._evaluateSubMesh(pU, RU, UU, gU)
          }
        }
      }
      updateTransformMatrix(UU) {
        const RU = this.activeCamera;
        if (RU)
          if (RU._renderingMultiview) {
            const gU = RU._rigCameras[0],
              tU = RU._rigCameras[1];
            this.setTransformMatrix(gU.getViewMatrix(), gU.getProjectionMatrix(UU), tU.getViewMatrix(), tU.getProjectionMatrix(UU))
          } else this.setTransformMatrix(RU.getViewMatrix(), RU.getProjectionMatrix(UU))
      }
      _bindFrameBuffer(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (UU && UU._multiviewTexture ? UU._multiviewTexture._bindFrameBuffer() : UU && UU.outputRenderTarget ? UU.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), RU && this._clearFrameBuffer(UU)
      }
      _clearFrameBuffer(UU) {
        if (UU && UU._multiviewTexture);
        else if (UU && UU.outputRenderTarget && !UU._renderingMultiview) {
          const RU = UU.outputRenderTarget;
          RU.onClearObservable.hasObservers() ? RU.onClearObservable.notifyObservers(this._engine) : RU.skipInitialClear || UU.isRightCamera || (this.autoClear && this._engine.clear(RU.clearColor || this._clearColor, !RU._cleared, !0, !0), RU._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(UU, RU) {
        let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (UU && UU._skipRendering) return;
        const pU = this._engine;
        if (this._activeCamera = UU, !this.activeCamera) throw new Error("Active camera not set");
        if (pU.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && gU) {
          let RU = !0;
          UU._renderingMultiview && UU.outputRenderTarget && (RU = UU.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, UU.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), UU._renderingMultiview && UU.outputRenderTarget && (UU.outputRenderTarget.skipInitialClear = RU)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = UU.outputRenderTarget?.renderPassId ?? UU.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let tU = 0; tU < this._softwareSkinnedMeshes.length; tU++) {
          const UU = this._softwareSkinnedMeshes.data[tU];
          UU.applySkeleton(UU.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), UU.customRenderTargets && UU.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(UU.customRenderTargets), RU && RU.customRenderTargets && RU.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(RU.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let tU = 0, TU = this._gatherActiveCameraRenderTargetsStage; tU < TU.length; tU++) {
          TU[tU].action(this._renderTargets)
        }
        let EU = !1;
        if (this.renderTargetsEnabled) {
          let UU;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            tU.g.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const RU = this.getBoundingBoxRenderer?.();
            for (let gU = 0; gU < this._renderTargets.length; gU++) {
              const tU = this._renderTargets.data[gU];
              if (tU._shouldRender()) {
                this._renderId++;
                const gU = tU.activeCamera && tU.activeCamera !== this.activeCamera;
                RU && !UU && (UU = RU.renderList.length > 0 ? RU.renderList.data.slice() : [], UU.length = RU.renderList.length), tU.render(gU, this.dumpNextRenderTargets), EU = !0
              }
            }
            RU && UU && (RU.renderList.data = UU, RU.renderList.length = UU.length), tU.g.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const RU = this.getBoundingBoxRenderer?.();
            RU && !UU && (UU = RU.renderList.length > 0 ? RU.renderList.data.slice() : [], UU.length = RU.renderList.length);
            for (let UU = 0, gU = this._cameraDrawRenderTargetStage; UU < gU.length; UU++) {
              EU = gU[UU].action(this.activeCamera) || EU
            }
            RU && UU && (RU.renderList.data = UU, RU.renderList.length = UU.length)
          }
          this._intermediateRendering = !1
        }
        EU && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || UU._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let tU = 0, TU = this._beforeCameraDrawStage; tU < TU.length; tU++) {
          TU[tU].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const PU = pU.snapshotRendering && 1 === pU.snapshotRenderingMode;
        PU && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !PU), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let tU = 0, TU = this._afterCameraDrawStage; tU < TU.length; tU++) {
          TU[tU].action(this.activeCamera)
        }
        if (this.postProcessManager && !UU._multiviewTexture) {
          const RU = UU.outputRenderTarget ? UU.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(UU.isIntermediate, RU)
        }
        for (let tU = 0, TU = this._afterCameraPostProcessStage; tU < TU.length; tU++) {
          TU[tU].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === UU.cameraRigMode || UU._renderingMultiview) return UU._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(UU, void 0, RU), void this.onAfterRenderCameraObservable.notifyObservers(UU);
        if (UU._useMultiviewToSingleView) this._renderMultiviewToSingleView(UU);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(UU);
          for (let RU = 0; RU < UU._rigCameras.length; RU++) this._renderForCamera(UU._rigCameras[RU], UU)
        }
        this._activeCamera = UU, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(UU)
      }
      _checkIntersections() {
        for (let UU = 0; UU < this._meshesForIntersections.length; UU++) {
          const RU = this._meshesForIntersections.data[UU];
          if (RU.actionManager)
            for (let UU = 0; RU.actionManager && UU < RU.actionManager.actions.length; UU++) {
              const gU = RU.actionManager.actions[UU];
              if (12 === gU.trigger || 13 === gU.trigger) {
                const UU = gU.getTriggerParameter(),
                  tU = UU.mesh ? UU.mesh : UU,
                  pU = tU.JtU(RU, UU.usePreciseIntersection),
                  EU = RU._intersectionsInProgress.indexOf(tU);
                pU && -1 === EU ? 12 === gU.trigger ? (gU._executeCurrent(CU.CreateNew(RU, void 0, tU)), RU._intersectionsInProgress.push(tU)) : 13 === gU.trigger && RU._intersectionsInProgress.push(tU) : !pU && EU > -1 && (13 === gU.trigger && gU._executeCurrent(CU.CreateNew(RU, void 0, tU)), RU.actionManager.hasSpecificTrigger(13, (UU => {
                  const RU = UU.mesh ? UU.mesh : UU;
                  return tU === RU
                })) && 13 !== gU.trigger || RU._intersectionsInProgress.splice(EU, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(UU) {}
      _animate(UU) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let UU = Math.max(Eg.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Eg.MaxDeltaTime)) + this._timeAccumulator;
          const RU = this._engine.getTimeStep(),
            gU = 1e3 / RU / 1e3;
          let tU = 0;
          const pU = this._engine.getLockstepMaxSteps();
          let EU = Math.floor(UU / RU);
          for (EU = Math.min(EU, pU); UU > 0 && tU < EU;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = RU * gU, this._animate(RU), this.onAfterAnimationsObservable.notifyObservers(this), this.VV && this._advancePhysicsEngineStep(RU), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, tU++, UU -= RU;
          this._timeAccumulator = UU < 0 ? 0 : UU
        } else {
          const UU = this.useConstantAnimationDeltaTime ? 16 : Math.max(Eg.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Eg.MaxDeltaTime));
          this._animationRatio = .06 * UU, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.VV && this._advancePhysicsEngineStep(UU)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(UU) {
        if (UU?.outputRenderTarget && !UU?.isRigCamera && (UU.outputRenderTarget._cleared = !1), UU?.rigCameras?.length)
          for (let RU = 0; RU < UU.rigCameras.length; ++RU) {
            const gU = UU.rigCameras[RU].outputRenderTarget;
            gU && (gU._cleared = !1)
          }
      }
      resetDrawCache(UU) {
        if (this.meshes)
          for (const RU of this.meshes) RU.resetDrawCache(UU)
      }
      _renderWithFrameGraph() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          RU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, UU)
          for (const gU of this.cameras)
            if (gU.update(), 0 !== gU.cameraRigMode)
              for (let UU = 0; UU < gU._rigCameras.length; UU++) gU._rigCameras[UU].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(RU)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(UU) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const RU = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), tU.g.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let UU = 0; UU < this._renderTargets.length; UU++) {
            const gU = this._renderTargets.data[UU],
              tU = gU.activeCamera || RU;
            this._renderRenderTarget(gU, tU, !0, this.dumpNextRenderTargets)
          }
          tU.g.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let gU = 0, tU = this._beforeClearStage; gU < tU.length; gU++) {
          tU[gU].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const RU = this.getActiveMeshCandidates(),
            gU = RU.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let UU = 0; UU < gU; UU++) {
                const gU = RU.data[UU];
                gU._internalAbstractMeshDataInfo._wasActiveLastFrame && gU.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const UU = this._activeParticleSystems.length;
              for (let RU = 0; RU < UU; RU++) this._activeParticleSystems.data[RU].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let tU = 0; tU < gU; tU++) {
              const gU = RU.data[tU];
              gU._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, gU.isBlocked || (this._totalVertices.addCount(gU.getTotalVertices(), !1), gU.isReady() && gU.isEnabled() && !gU.ep.hasAZeroComponent && (gU.computeWorldMatrix(UU), gU.actionManager && gU.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(gU)))
            }
            if (this.particlesEnabled)
              for (let UU = 0; UU < this.vI.length; UU++) {
                const RU = this.vI[UU];
                if (!RU.isStarted() || !RU.emitter) continue;
                const gU = RU.emitter;
                gU.position && !gU.isEnabled() || (this._activeParticleSystems.push(RU), RU.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, UU._shouldRender()) {
          if (this._renderId++, this.activeCamera = RU, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), UU.render(gU, tU)
        }
        this._intermediateRendering = !1
      }
      render() {
        let UU = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.lRU) return;
        const gU = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(UU, RU)
        } finally {
          this._renderingMeshEvaluationDepth = gU
        }
      }
      _renderFrame(UU, RU) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), QU.c.aZ = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const gU of this.activeCameras) this._checkCameraRenderTarget(gU);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), RU || this.animate();
        for (let gU = 0, tU = this._beforeCameraUpdateStage; gU < tU.length; gU++) {
          tU[gU].action()
        }
        if (UU)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let gU = 0; gU < this.activeCameras.length; gU++) {
              const UU = this.activeCameras[gU];
              if (UU.update(), 0 !== UU.cameraRigMode)
                for (let RU = 0; RU < UU._rigCameras.length; RU++) UU._rigCameras[RU].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let gU = 0; gU < this.activeCamera._rigCameras.length; gU++) this.activeCamera._rigCameras[gU].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(UU, RU);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const UU = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            tU.g.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let RU = 0; RU < this.customRenderTargets.length; RU++) {
              const gU = this.customRenderTargets[RU],
                tU = gU.activeCamera || this.activeCamera;
              this._renderRenderTarget(gU, tU, UU !== tU, this.dumpNextRenderTargets)
            }
            tU.g.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = UU?.renderPassId ?? 0, this.activeCamera = UU, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let RU = 0, gU = this._beforeClearStage; RU < gU.length; RU++) {
            gU[RU].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let RU = 0, gU = this._gatherRenderTargetsStage; RU < gU.length; RU++) {
            gU[RU].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let RU = 0; RU < this.activeCameras.length; RU++) this._processSubCameras(this.activeCameras[RU], RU > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let gU = 0, tU = this._afterRenderStage; gU < tU.length; gU++) {
          tU[gU].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let UU = 0; UU < this._toBeDisposed.length; UU++) {
            const RU = this._toBeDisposed[UU];
            RU && RU.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let UU = 0; UU < this.materials.length; UU++) this.materials[UU].freeze()
      }
      unfreezeMaterials() {
        for (let UU = 0; UU < this.materials.length; UU++) this.materials[UU].unfreeze()
      }
      dispose() {
        if (this.lRU) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, mU.e)(this.stopAllAnimations)) {
          for (const UU of this._activeAnimatables) UU.onAnimationEndObservable.clear(), UU.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const UU = this._activeRequests.slice();
        for (const EU of UU) EU.abort();
        this._activeRequests.length = 0;
        try {
          this.HZ.notifyObservers(this)
        } catch (pU) {
          Ug.e.Error("An error occurred while calling onDisposeObservable!", pU)
        }
        this.detachControl();
        const RU = this._engine.getInputElement?.();
        if (RU)
          for (let EU = 0; EU < this.cameras.length; EU++) this.cameras[EU].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (UU => UU.dispose(!0))), this._disposeList(this.transformNodes, (UU => UU.dispose(!0)));
        const gU = this.cameras;
        this._disposeList(gU), this._disposeList(this.vI), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let tU = this._engine.scenes.indexOf(this);
        if (tU > -1 && this._engine.scenes.splice(tU, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, QU.e)(), xU.c._LastCreatedScene === this) {
          xU.c._LastCreatedScene = null;
          let UU = xU.c.Instances.length - 1;
          for (; UU >= 0;) {
            const RU = xU.c.Instances[UU];
            if (RU.scenes.length > 0) {
              xU.c._LastCreatedScene = RU.scenes[this._engine.scenes.length - 1];
              break
            }
            UU--
          }
        }
        tU = this._engine._virtualScenes.indexOf(this), tU > -1 && this._engine._virtualScenes.splice(tU, 1), this._engine.wipeCaches(!0), this.HZ.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(UU, RU) {
        const gU = UU.slice(0);
        RU = RU ?? (UU => UU.dispose());
        for (const tU of gU) RU(tU);
        UU.length = 0
      }
      get lRU() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let UU = 0; UU < this.meshes.length; UU++) {
          const RU = this.meshes[UU].geometry;
          RU && RU.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const UU of this.textures) {
          UU._buffer && (UU._buffer = null)
        }
      }
      getWorldExtends(UU) {
        const RU = new cU.n(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          gU = new cU.n(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        UU = UU || (() => !0);
        const tU = this.meshes.filter(UU);
        for (const pU of tU) {
          if (pU.computeWorldMatrix(!0), !pU.ZI || 0 === pU.ZI.length || pU.infiniteDistance) continue;
          const UU = pU.lY(),
            tU = UU.boundingBox.minimumWorld,
            EU = UU.boundingBox.maximumWorld;
          cU.n.CheckExtends(tU, RU, gU), cU.n.CheckExtends(EU, RU, gU)
        }
        return RU.x === Number.MAX_VALUE ? {
          min: cU.n.Zero(),
          max: cU.n.Zero()
        } : {
          min: RU,
          max: gU
        }
      }
      createPickingRay(UU, RU, gU, tU) {
        throw (0, mU.n)("Ray")
      }
      createPickingRayToRef(UU, RU, gU, tU, pU) {
        throw (0, mU.n)("Ray")
      }
      createPickingRayInCameraSpace(UU, RU, gU) {
        throw (0, mU.n)("Ray")
      }
      createPickingRayInCameraSpaceToRef(UU, RU, gU, tU) {
        throw (0, mU.n)("Ray")
      }
      Hj(UU, RU, gU, tU, pU, EU) {
        const PU = (0, mU.n)("Ray", !0);
        return PU && Ug.e.Warn(PU), new uU.b
      }
      pickWithBoundingInfo(UU, RU, gU, tU, pU) {
        const EU = (0, mU.n)("Ray", !0);
        return EU && Ug.e.Warn(EU), new uU.b
      }
      pickWithRay(UU, RU, gU, tU) {
        throw (0, mU.n)("Ray")
      }
      multiPick(UU, RU, gU, tU, pU) {
        throw (0, mU.n)("Ray")
      }
      multiPickWithRay(UU, RU, gU) {
        throw (0, mU.n)("Ray")
      }
      setPointerOverMesh(UU, RU, gU) {
        this._inputManager.setPointerOverMesh(UU, RU, gU)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const UU of this.geometries) UU._rebuild();
        for (const UU of this.meshes) UU._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const UU of this._components) UU.rebuild();
        for (const UU of this.vI) UU.rebuild();
        if (this.spriteManagers)
          for (const UU of this.spriteManagers) UU.rebuild()
      }
      _rebuildTextures() {
        for (const UU of this.textures) UU._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(UU, RU, gU) {
        if (void 0 === RU) return UU;
        const tU = [];
        for (const pU in UU) {
          const EU = UU[pU];
          KU.d && KU.d.MatchesQuery(EU, RU) && (!gU || gU(EU)) && tU.push(EU)
        }
        return tU
      }
      getMeshesByTags(UU, RU) {
        return this._getByTags(this.meshes, UU, RU)
      }
      getCamerasByTags(UU, RU) {
        return this._getByTags(this.cameras, UU, RU)
      }
      getLightsByTags(UU, RU) {
        return this._getByTags(this.lights, UU, RU)
      }
      getMaterialByTags(UU, RU) {
        return this._getByTags(this.materials, UU, RU).concat(this._getByTags(this.multiMaterials, UU, RU))
      }
      getTransformNodesByTags(UU, RU) {
        return this._getByTags(this.transformNodes, UU, RU)
      }
      setRenderingOrder(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(UU, RU, gU, tU)
      }
      setRenderingAutoClearDepthStencil(UU, RU) {
        let gU = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          tU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(UU, RU, gU, tU)
      }
      getAutoClearDepthStencilSetup(UU) {
        return this._renderingManager.getAutoClearDepthStencilSetup(UU)
      }
      _forceBlockMaterialDirtyMechanism(UU) {
        this._blockMaterialDirtyMechanism = UU
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(UU) {
        this._blockMaterialDirtyMechanism !== UU && (this._blockMaterialDirtyMechanism = UU, UU || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(UU, RU) {
        if (!this._blockMaterialDirtyMechanism)
          for (const gU of this.materials) RU && !RU(gU) || gU.cRU(UU)
      }
      _loadFile(UU, RU, gU, tU, pU, EU, PU) {
        const TU = (0, DU.m)(UU, RU, gU, tU ? this.offlineProvider : void 0, pU, EU, PU);
        return this._activeRequests.push(TU), TU.onCompleteObservable.add((UU => {
          this._activeRequests.splice(this._activeRequests.indexOf(UU), 1)
        })), TU
      }
      async _loadFileAsync(UU, RU, gU, tU, pU) {
        return await new Promise(((EU, PU) => {
          this._loadFile(UU, (UU => {
            EU(UU)
          }), RU, gU, tU, ((UU, RU) => {
            PU(RU)
          }), pU)
        }))
      }
      async _loadDelayedFileAsync(UU, RU, gU) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const tU = `${UU}|${RU?"binary":"string"}`;
        let pU = this._delayedFileRequests.get(tU);
        if (!pU) {
          pU = RU ? this._loadFileAsync(UU, void 0, gU, !0) : this._loadFileAsync(UU, void 0, gU, !1);
          const EU = pU;
          (async () => {
            try {
              await EU
            } catch {}
            this._delayedFileRequests?.delete(tU)
          })(), this._delayedFileRequests.set(tU, pU)
        }
        return await pU
      }
      _requestFile(UU, RU, gU, tU, pU, EU, PU) {
        const TU = (0, DU.w)(UU, RU, gU, tU ? this.offlineProvider : void 0, pU, EU, PU);
        return this._activeRequests.push(TU), TU.onCompleteObservable.add((UU => {
          this._activeRequests.splice(this._activeRequests.indexOf(UU), 1)
        })), TU
      }
      async _requestFileAsync(UU, RU, gU, tU, pU) {
        return await new Promise(((EU, PU) => {
          this._requestFile(UU, (UU => {
            EU(UU)
          }), RU, gU, tU, (UU => {
            PU(UU)
          }), pU)
        }))
      }
      _readFile(UU, RU, gU, tU, pU) {
        const EU = (0, DU.r)(UU, RU, gU, tU, pU);
        return this._activeRequests.push(EU), EU.onCompleteObservable.add((UU => {
          this._activeRequests.splice(this._activeRequests.indexOf(UU), 1)
        })), EU
      }
      async _readFileAsync(UU, RU, gU) {
        return await new Promise(((tU, pU) => {
          this._readFile(UU, (UU => {
            tU(UU)
          }), RU, gU, (UU => {
            pU(UU)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, mU.n)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(UU) {
        return this.setActiveCameraById(UU)
      }
      getMaterialByID(UU) {
        return this.getMaterialById(UU)
      }
      getLastMaterialByID(UU) {
        return this.getLastMaterialById(UU)
      }
      getTextureByUniqueID(UU) {
        return this.getTextureByUniqueId(UU)
      }
      getCameraByID(UU) {
        return this.getCameraById(UU)
      }
      getCameraByUniqueID(UU) {
        return this.getCameraByUniqueId(UU)
      }
      getBoneByID(UU) {
        return this.getBoneById(UU)
      }
      getLightByID(UU) {
        return this.getLightById(UU)
      }
      getLightByUniqueID(UU) {
        return this.getLightByUniqueId(UU)
      }
      getParticleSystemByID(UU) {
        return this.getParticleSystemById(UU)
      }
      getGeometryByID(UU) {
        return this.getGeometryById(UU)
      }
      getMeshByID(UU) {
        return this.getMeshById(UU)
      }
      getMeshByUniqueID(UU) {
        return this.getMeshByUniqueId(UU)
      }
      getLastMeshByID(UU) {
        return this.getLastMeshById(UU)
      }
      getMeshesByID(UU) {
        return this.getMeshesById(UU)
      }
      getTransformNodeByID(UU) {
        return this.getTransformNodeById(UU)
      }
      getTransformNodeByUniqueID(UU) {
        return this.getTransformNodeByUniqueId(UU)
      }
      getTransformNodesByID(UU) {
        return this.getTransformNodesById(UU)
      }
      getNodeByID(UU) {
        return this.getNodeById(UU)
      }
      getLastEntryByID(UU) {
        return this.getLastEntryById(UU)
      }
      getLastSkeletonByID(UU) {
        return this.getLastSkeletonById(UU)
      }
    }
    Eg.FOGMODE_NONE = 0, Eg.FOGMODE_EXP = 1, Eg.FOGMODE_EXP2 = 2, Eg.FOGMODE_LINEAR = 3, Eg.MinDeltaTime = 1, Eg.MaxDeltaTime = 1e3, Eg._OriginalDefaultMaterialFactory = Eg.DefaultMaterialFactory;
    let Pg = !1;

    function Tg() {
      Pg || (Pg = !0, (0, Rg.g)("BABYLON.Scene", Eg))
    }(OU = Eg.prototype).sortActiveAnimatables ?? (OU.sortActiveAnimatables = (0, mU.m)("Scene", "sortActiveAnimatables")), (UR = Eg.prototype).beginWeightedAnimation ?? (UR.beginWeightedAnimation = (0, mU.m)("Scene", "beginWeightedAnimation")), (RR = Eg.prototype).beginAnimation ?? (RR.beginAnimation = (0, mU.m)("Scene", "beginAnimation")), (gR = Eg.prototype).beginHierarchyAnimation ?? (gR.beginHierarchyAnimation = (0, mU.m)("Scene", "beginHierarchyAnimation")), (tR = Eg.prototype).beginDirectAnimation ?? (tR.beginDirectAnimation = (0, mU.m)("Scene", "beginDirectAnimation")), (pR = Eg.prototype).beginDirectHierarchyAnimation ?? (pR.beginDirectHierarchyAnimation = (0, mU.m)("Scene", "beginDirectHierarchyAnimation")), (ER = Eg.prototype).getAnimatableByTarget ?? (ER.getAnimatableByTarget = (0, mU.m)("Scene", "getAnimatableByTarget")), (PR = Eg.prototype).getAllAnimatablesByTarget ?? (PR.getAllAnimatablesByTarget = (0, mU.m)("Scene", "getAllAnimatablesByTarget")), (TR = Eg.prototype).stopAllAnimations ?? (TR.stopAllAnimations = (0, mU.m)("Scene", "stopAllAnimations")), (qR = Eg.prototype).getSoundByName ?? (qR.getSoundByName = (0, mU.m)("Scene", "getSoundByName")), (KR = Eg.prototype).createOrUpdateSelectionOctree ?? (KR.createOrUpdateSelectionOctree = (0, mU.m)("Scene", "createOrUpdateSelectionOctree")), (cR = Eg.prototype).createDefaultLight ?? (cR.createDefaultLight = (0, mU.m)("Scene", "createDefaultLight")), (GR = Eg.prototype).createDefaultCamera ?? (GR.createDefaultCamera = (0, mU.m)("Scene", "createDefaultCamera")), (jR = Eg.prototype).createDefaultCameraOrLight ?? (jR.createDefaultCameraOrLight = (0, mU.m)("Scene", "createDefaultCameraOrLight")), (uR = Eg.prototype).createDefaultSkybox ?? (uR.createDefaultSkybox = (0, mU.m)("Scene", "createDefaultSkybox")), (CR = Eg.prototype).createDefaultEnvironment ?? (CR.createDefaultEnvironment = (0, mU.m)("Scene", "createDefaultEnvironment")), (hR = Eg.prototype).createDefaultVRExperience ?? (hR.createDefaultVRExperience = (0, mU.m)("Scene", "createDefaultVRExperience")), (QR = Eg.prototype).createDefaultXRExperienceAsync ?? (QR.createDefaultXRExperienceAsync = (0, mU.m)("Scene", "createDefaultXRExperienceAsync")), (eR = Eg.prototype).getGlowLayerByName ?? (eR.getGlowLayerByName = (0, mU.m)("Scene", "getGlowLayerByName")), (WR = Eg.prototype).getHighlightLayerByName ?? (WR.getHighlightLayerByName = (0, mU.m)("Scene", "getHighlightLayerByName")), (fR = Eg.prototype).getSelectionOutlineLayerByName ?? (fR.getSelectionOutlineLayerByName = (0, mU.m)("Scene", "getSelectionOutlineLayerByName")), (xR = Eg.prototype).removeLensFlareSystem ?? (xR.removeLensFlareSystem = (0, mU.m)("Scene", "removeLensFlareSystem")), (mR = Eg.prototype).addLensFlareSystem ?? (mR.addLensFlareSystem = (0, mU.m)("Scene", "addLensFlareSystem")), (IR = Eg.prototype).getLensFlareSystemByName ?? (IR.getLensFlareSystemByName = (0, mU.m)("Scene", "getLensFlareSystemByName")), (JR = Eg.prototype).getLensFlareSystemByID ?? (JR.getLensFlareSystemByID = (0, mU.m)("Scene", "getLensFlareSystemByID")), (wR = Eg.prototype).getLensFlareSystemById ?? (wR.getLensFlareSystemById = (0, mU.m)("Scene", "getLensFlareSystemById")), (nR = Eg.prototype).getPhysicsEngine ?? (nR.getPhysicsEngine = (0, mU.m)("Scene", "getPhysicsEngine")), (bR = Eg.prototype).enablePhysics ?? (bR.enablePhysics = (0, mU.m)("Scene", "enablePhysics")), (oR = Eg.prototype).disablePhysicsEngine ?? (oR.disablePhysicsEngine = (0, mU.m)("Scene", "disablePhysicsEngine")), (ZR = Eg.prototype).isPhysicsEnabled ?? (ZR.isPhysicsEnabled = (0, mU.m)("Scene", "isPhysicsEnabled")), (aR = Eg.prototype).deleteCompoundImpostor ?? (aR.deleteCompoundImpostor = (0, mU.m)("Scene", "deleteCompoundImpostor")), (YR = Eg.prototype).removeReflectionProbe ?? (YR.removeReflectionProbe = (0, mU.m)("Scene", "removeReflectionProbe")), (BR = Eg.prototype).addReflectionProbe ?? (BR.addReflectionProbe = (0, mU.m)("Scene", "addReflectionProbe")), (VR = Eg.prototype).getBoundingBoxRenderer ?? (VR.getBoundingBoxRenderer = (0, mU.m)("Scene", "getBoundingBoxRenderer")), (rR = Eg.prototype).enableDepthRenderer ?? (rR.enableDepthRenderer = (0, mU.m)("Scene", "enableDepthRenderer")), (XR = Eg.prototype).disableDepthRenderer ?? (XR.disableDepthRenderer = (0, mU.m)("Scene", "disableDepthRenderer")), (vR = Eg.prototype).enableFluidRenderer ?? (vR.enableFluidRenderer = (0, mU.m)("Scene", "enableFluidRenderer")), (dR = Eg.prototype).disableFluidRenderer ?? (dR.disableFluidRenderer = (0, mU.m)("Scene", "disableFluidRenderer")), (HR = Eg.prototype).enableGeometryBufferRenderer ?? (HR.enableGeometryBufferRenderer = (0, mU.m)("Scene", "enableGeometryBufferRenderer")), (SR = Eg.prototype).disableGeometryBufferRenderer ?? (SR.disableGeometryBufferRenderer = (0, mU.m)("Scene", "disableGeometryBufferRenderer")), (sR = Eg.prototype).enableIblCdfGenerator ?? (sR.enableIblCdfGenerator = (0, mU.m)("Scene", "enableIblCdfGenerator")), (yR = Eg.prototype).disableIblCdfGenerator ?? (yR.disableIblCdfGenerator = (0, mU.m)("Scene", "disableIblCdfGenerator")), (kR = Eg.prototype).getOutlineRenderer ?? (kR.getOutlineRenderer = (0, mU.m)("Scene", "getOutlineRenderer")), (FR = Eg.prototype).enablePrePassRenderer ?? (FR.enablePrePassRenderer = (0, mU.m)("Scene", "enablePrePassRenderer")), (iR = Eg.prototype).disablePrePassRenderer ?? (iR.disablePrePassRenderer = (0, mU.m)("Scene", "disablePrePassRenderer")), (AR = Eg.prototype).enableSubSurfaceForPrePass ?? (AR.enableSubSurfaceForPrePass = (0, mU.m)("Scene", "enableSubSurfaceForPrePass")), (zR = Eg.prototype).disableSubSurfaceForPrePass ?? (zR.disableSubSurfaceForPrePass = (0, mU.m)("Scene", "disableSubSurfaceForPrePass")), (MR = Eg.prototype).pickSprite ?? (MR.pickSprite = (0, mU.m)("Scene", "pickSprite")), (DR = Eg.prototype).pickSpriteWithRay ?? (DR.pickSpriteWithRay = (0, mU.m)("Scene", "pickSpriteWithRay")), (LR = Eg.prototype).multiPickSprite ?? (LR.multiPickSprite = (0, mU.m)("Scene", "multiPickSprite")), (NR = Eg.prototype).multiPickSpriteWithRay ?? (NR.multiPickSpriteWithRay = (0, mU.m)("Scene", "multiPickSpriteWithRay")), (lR = Eg.prototype).setPointerOverSprite ?? (lR.setPointerOverSprite = (0, mU.m)("Scene", "setPointerOverSprite")), (OR = Eg.prototype).getPointerOverSprite ?? (OR.getPointerOverSprite = (0, mU.m)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(Eg.prototype, "mainSoundTrack") || Object.defineProperty(Eg.prototype, "mainSoundTrack", (0, mU.i)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(Eg.prototype, "soundTracks") || Object.defineProperty(Eg.prototype, "soundTracks", (0, mU.i)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(Eg.prototype, "audioEnabled") || Object.defineProperty(Eg.prototype, "audioEnabled", (0, mU.i)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(Eg.prototype, "headphone") || Object.defineProperty(Eg.prototype, "headphone", (0, mU.i)("Scene", "headphone")), Object.getOwnPropertyDescriptor(Eg.prototype, "audioListenerPositionProvider") || Object.defineProperty(Eg.prototype, "audioListenerPositionProvider", (0, mU.i)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(Eg.prototype, "audioListenerRotationProvider") || Object.defineProperty(Eg.prototype, "audioListenerRotationProvider", (0, mU.i)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(Eg.prototype, "audioPositioningRefreshRate") || Object.defineProperty(Eg.prototype, "audioPositioningRefreshRate", (0, mU.i)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(Eg.prototype, "selectionOctree") || Object.defineProperty(Eg.prototype, "selectionOctree", (0, mU.i)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(Eg.prototype, "debugLayer") || Object.defineProperty(Eg.prototype, "debugLayer", (0, mU.i)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(Eg.prototype, "gamepadManager") || Object.defineProperty(Eg.prototype, "gamepadManager", (0, mU.i)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(Eg.prototype, "simplificationQueue") || Object.defineProperty(Eg.prototype, "simplificationQueue", (0, mU.i)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(Eg.prototype, "onBeforePhysicsObservable") || Object.defineProperty(Eg.prototype, "onBeforePhysicsObservable", (0, mU.i)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(Eg.prototype, "onAfterPhysicsObservable") || Object.defineProperty(Eg.prototype, "onAfterPhysicsObservable", (0, mU.i)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(Eg.prototype, "reflectionProbes") || Object.defineProperty(Eg.prototype, "reflectionProbes", (0, mU.i)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(Eg.prototype, "forceShowBoundingBoxes") || Object.defineProperty(Eg.prototype, "forceShowBoundingBoxes", (0, mU.i)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(Eg.prototype, "depthPeelingRenderer") || Object.defineProperty(Eg.prototype, "depthPeelingRenderer", (0, mU.i)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(Eg.prototype, "useOrderIndependentTransparency") || Object.defineProperty(Eg.prototype, "useOrderIndependentTransparency", (0, mU.i)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(Eg.prototype, "fluidRenderer") || Object.defineProperty(Eg.prototype, "fluidRenderer", (0, mU.i)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(Eg.prototype, "geometryBufferRenderer") || Object.defineProperty(Eg.prototype, "geometryBufferRenderer", (0, mU.i)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(Eg.prototype, "iblCdfGenerator") || Object.defineProperty(Eg.prototype, "iblCdfGenerator", (0, mU.i)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(Eg.prototype, "prePassRenderer") || Object.defineProperty(Eg.prototype, "prePassRenderer", (0, mU.i)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(Eg.prototype, "subSurfaceConfiguration") || Object.defineProperty(Eg.prototype, "subSurfaceConfiguration", (0, mU.i)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(Eg.prototype, "spriteManagers") || Object.defineProperty(Eg.prototype, "spriteManagers", (0, mU.i)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(Eg.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(Eg.prototype, "onBeforeSpritesRenderingObservable", (0, mU.i)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(Eg.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(Eg.prototype, "onAfterSpritesRenderingObservable", (0, mU.i)("Scene", "onAfterSpritesRenderingObservable"))
  },
  39547: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU,
      f: () => pU
    });
    class tU {}
    tU.NAME_EFFECTLAYER = "EffectLayer", tU.NAME_LAYER = "Layer", tU.NAME_LENSFLARESYSTEM = "LensFlareSystem", tU.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", tU.NAME_PARTICLESYSTEM = "ParticleSystem", tU.NAME_GAMEPAD = "Gamepad", tU.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", tU.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", tU.NAME_PREPASSRENDERER = "PrePassRenderer", tU.NAME_DEPTHRENDERER = "DepthRenderer", tU.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", tU.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", tU.NAME_SPRITE = "Sprite", tU.NAME_SUBSURFACE = "SubSurface", tU.NAME_OUTLINERENDERER = "Outline", tU.NAME_PROCEDURALTEXTURE = "ProceduralTexture", tU.NAME_SHADOWGENERATOR = "ShadowGenerator", tU.NAME_OCTREE = "MgU", tU.NAME_PHYSICSENGINE = "PhysicsEngine", tU.NAME_AUDIO = "Audio", tU.NAME_FLUIDRENDERER = "FluidRenderer", tU.NAME_IBLCDFGENERATOR = "iblCDFGenerator", tU.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", tU.STEP_ISREADYFORMESH_EFFECTLAYER = 0, tU.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, tU.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, tU.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, tU.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, tU.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, tU.STEP_BEFORECAMERADRAW_PREPASS = 0, tU.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, tU.STEP_BEFORECAMERADRAW_LAYER = 2, tU.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, tU.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, tU.STEP_BEFORERENDERINGMESH_PREPASS = 0, tU.STEP_BEFORERENDERINGMESH_OUTLINE = 1, tU.STEP_AFTERRENDERINGMESH_PREPASS = 0, tU.STEP_AFTERRENDERINGMESH_OUTLINE = 1, tU.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, tU.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, tU.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, tU.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, tU.STEP_BEFORECLEAR_PREPASS = 1, tU.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, tU.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, tU.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, tU.STEP_AFTERCAMERADRAW_PREPASS = 0, tU.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, tU.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, tU.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, tU.STEP_AFTERCAMERADRAW_LAYER = 4, tU.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, tU.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, tU.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, tU.STEP_AFTERRENDER_AUDIO = 0, tU.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, tU.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, tU.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, tU.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, tU.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, tU.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, tU.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, tU.STEP_POINTERMOVE_SPRITE = 0, tU.STEP_POINTERDOWN_SPRITE = 0, tU.STEP_POINTERUP_SPRITE = 0;
    class pU extends Array {
      constructor(UU) {
        super(...UU)
      }
      static Create() {
        return Object.create(pU.prototype)
      }
      registerStep(UU, RU, gU) {
        let tU, pU = 0;
        for (; pU < this.length; pU++) {
          if (tU = this[pU].index, UU < tU) break
        }
        this.splice(pU, 0, {
          index: UU,
          component: RU,
          action: gU.bind(RU)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39377: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => PU,
      e: () => TU,
      i: () => tU,
      j: () => pU,
      n: () => EU
    });

    function tU(UU, RU, gU, tU, pU, EU) {
      function PU(UU) {
        if (void 0 !== UU && "function" !== typeof UU) throw new TypeError("Function expected");
        return UU
      }
      for (var TU, qU = tU.kind, KU = "getter" === qU ? "get" : "setter" === qU ? "set" : "value", cU = !RU && UU ? tU.static ? UU : UU.prototype : null, GU = RU || (cU ? Object.getOwnPropertyDescriptor(cU, tU.name) : {}), jU = !1, uU = gU.length - 1; uU >= 0; uU--) {
        var CU = {};
        for (var hU in tU) CU[hU] = "access" === hU ? {} : tU[hU];
        for (var hU in tU.access) CU.access[hU] = tU.access[hU];
        CU.addInitializer = function(UU) {
          if (jU) throw new TypeError("Cannot add initializers after decoration has completed");
          EU.push(PU(UU || null))
        };
        var QU = (0, gU[uU])("accessor" === qU ? {
          get: GU.get,
          set: GU.set
        } : GU[KU], CU);
        if ("accessor" === qU) {
          if (void 0 === QU) continue;
          if (null === QU || "object" !== typeof QU) throw new TypeError("Object expected");
          (TU = PU(QU.get)) && (GU.get = TU), (TU = PU(QU.set)) && (GU.set = TU), (TU = PU(QU.init)) && pU.unshift(TU)
        } else(TU = PU(QU)) && ("field" === qU ? pU.unshift(TU) : GU[KU] = TU)
      }
      cU && Object.defineProperty(cU, tU.name, GU), jU = !0
    }

    function pU(UU, RU, gU) {
      for (var tU = arguments.length > 2, pU = 0; pU < RU.length; pU++) gU = tU ? RU[pU].call(UU, gU) : RU[pU].call(UU);
      return tU ? gU : void 0
    }

    function EU(UU, RU, gU) {
      return "symbol" === typeof RU && (RU = RU.description ? "[".concat(RU.description, "]") : ""), Object.defineProperty(UU, "name", {
        configurable: !0,
        value: gU ? "".concat(gU, " ", RU) : RU
      })
    }
    Object.create;
    Object.create;

    function PU(UU, RU, gU, tU) {
      if ("a" === gU && !tU) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof RU ? UU !== RU || !tU : !RU.has(UU)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === gU ? tU : "a" === gU ? tU.call(UU) : tU ? tU.value : RU.get(UU)
    }

    function TU(UU, RU, gU, tU, pU) {
      if ("m" === tU) throw new TypeError("Private method is not writable");
      if ("a" === tU && !pU) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof RU ? UU !== RU || !pU : !RU.has(UU)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === tU ? pU.call(UU, gU) : pU ? pU.value = gU : RU.set(UU, gU), gU
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);