export const id = 244;
export const ids = [244];
export const modules = {
  39561: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => kQ,
      d: () => AQ,
      e: () => mQ,
      h: () => vQ
    });
    var LQ = wQ(39330),
      qQ = wQ(38203),
      oQ = wQ(39470),
      DQ = wQ(39376);
    class kQ {
      get vW() {
        return this._isDisposed
      }
      constructor(QQ, FQ, wQ) {
        let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          oQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          kQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          vQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          mQ = arguments.length > 7 ? arguments[7] : void 0,
          uQ = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, DQ.b)(), QQ && QQ.iN ? this._engine = QQ.iN().Wx() : this._engine = QQ, this._updatable = wQ, this._instanced = kQ, this._divisor = mQ || 1, this._label = uQ, FQ instanceof LQ.c ? (this._data = null, this._buffer = FQ) : (this._data = FQ, this._buffer = null), this.byteStride = vQ ? qQ : qQ * Float32Array.BYTES_PER_ELEMENT, oQ || this.create()
      }
      createVertexBuffer(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          DQ = arguments.length > 6 ? arguments[6] : void 0;
        const kQ = oQ ? FQ : FQ * Float32Array.BYTES_PER_ELEMENT,
          mQ = LQ ? oQ ? LQ : LQ * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new vQ(this._engine, this, QQ, this._updatable, !0, mQ, void 0 === qQ ? this._instanced : qQ, kQ, wQ, void 0, void 0, !0, this._divisor || DQ)
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
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !QQ && this._buffer || (QQ = QQ || this._data, QQ && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, QQ), this._data = QQ) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(QQ, this._label), this._data = QQ) : this._buffer = this._engine.createVertexBuffer(QQ, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.MH > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.MH, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.MH, void 0, this._label));
          qQ.c.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(QQ) {
        this.create(QQ)
      }
      updateDirectly(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, QQ, LQ ? FQ : FQ * Float32Array.BYTES_PER_ELEMENT, wQ ? wQ * this.byteStride : void 0), this._data = 0 === FQ && void 0 === wQ ? QQ : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class vQ {
      get vW() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(QQ) {
        const FQ = 0 != QQ;
        this._instanceDivisor = QQ, FQ !== this._instanced && (this._instanced = FQ, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const QQ = this.getData();
        return QQ ? Array.isArray(QQ) ? QQ.length / (this.byteStride / 4) - this.byteOffset / 4 : (QQ.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(QQ, FQ, wQ, LQ, qQ, DQ, HQ, bQ, YQ, xQ) {
        let AQ, tQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          eQ = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          MQ = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          GQ = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = QQ, "object" === typeof LQ && null !== LQ ? (AQ = LQ.updatable ?? !1, qQ = LQ.postponeInternalCreation, DQ = LQ.stride, HQ = LQ.instanced, bQ = LQ.offset, YQ = LQ.size, xQ = LQ.type, tQ = LQ.normalized ?? !1, eQ = LQ.useBytes ?? !1, MQ = LQ.divisor ?? 1, GQ = LQ.takeBufferOwnership ?? !1, this._label = LQ.label) : AQ = !!LQ, FQ instanceof kQ ? (this._buffer = FQ, this._ownsBuffer = GQ) : (this._buffer = new kQ(QQ, FQ, AQ, DQ, qQ, HQ, eQ, MQ, this._label), this._ownsBuffer = !0), this.uniqueId = vQ._Counter++, this._kind = wQ, void 0 === xQ) {
          const QQ = this.getData();
          this.type = QQ ? uQ(QQ) : vQ.FLOAT
        } else this.type = xQ;
        const pQ = (0, oQ.q)(this.type);
        eQ ? (this._size = YQ || (DQ ? DQ / pQ : mQ(wQ)), this.byteStride = DQ || this._buffer.byteStride || this._size * pQ, this.byteOffset = bQ || 0) : (this._size = YQ || DQ || mQ(wQ), this.byteStride = DQ ? DQ * pQ : this._buffer.byteStride || this._size * pQ, this.byteOffset = (bQ || 0) * pQ), this.normalized = tQ, this._instanced = void 0 !== HQ && HQ, this._instanceDivisor = HQ ? MQ : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(QQ) {
        switch (QQ) {
          case vQ.BYTE:
            return 0;
          case vQ.UNSIGNED_BYTE:
            return 1;
          case vQ.SHORT:
            return 2;
          case vQ.UNSIGNED_SHORT:
            return 3;
          case vQ.INT:
            return 4;
          case vQ.UNSIGNED_INT:
            return 5;
          case vQ.FLOAT:
            return 6;
          case vQ.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${QQ}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (vQ._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(QQ, FQ) {
        const wQ = this.getData();
        return wQ ? (0, oQ.n)(wQ, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, QQ, FQ) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, oQ.q)(this.type)
      }
      RwQ() {
        return this.byteOffset / (0, oQ.q)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, oQ.q)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(QQ) {
        this._buffer.create(QQ), this._alignBuffer()
      }
      update(QQ) {
        this._buffer.update(QQ), this._alignBuffer()
      }
      updateDirectly(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(QQ, FQ, void 0, wQ), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(QQ, FQ) {
        (0, oQ.j)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, QQ, this.normalized, ((QQ, wQ) => {
          for (let LQ = 0; LQ < this._size; LQ++) FQ(QQ[LQ], wQ + LQ)
        }))
      }
      _alignBuffer() {}
    }

    function mQ(QQ) {
      switch (QQ) {
        case vQ.UVKind:
        case vQ.UV2Kind:
        case vQ.UV3Kind:
        case vQ.UV4Kind:
        case vQ.UV5Kind:
        case vQ.UV6Kind:
          return 2;
        case vQ.NormalKind:
        case vQ.PositionKind:
          return 3;
        case vQ.ColorKind:
        case vQ.ColorInstanceKind:
        case vQ.MatricesIndicesKind:
        case vQ.MatricesIndicesExtraKind:
        case vQ.MatricesWeightsKind:
        case vQ.MatricesWeightsExtraKind:
        case vQ.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + QQ + "'")
      }
    }

    function uQ(QQ) {
      return QQ instanceof Int8Array ? vQ.BYTE : QQ instanceof Uint8Array ? vQ.UNSIGNED_BYTE : QQ instanceof Int16Array ? vQ.SHORT : QQ instanceof Uint16Array ? vQ.UNSIGNED_SHORT : QQ instanceof Int32Array ? vQ.INT : QQ instanceof Uint32Array ? vQ.UNSIGNED_INT : vQ.FLOAT
    }

    function HQ(QQ) {
      return (0, oQ.q)(QQ)
    }

    function bQ(QQ, FQ, wQ, LQ, qQ, DQ, kQ, vQ) {
      (0, oQ.j)(QQ, FQ, wQ, LQ, qQ, DQ, kQ, ((QQ, FQ) => {
        for (let wQ = 0; wQ < LQ; wQ++) vQ(QQ[wQ], FQ + wQ)
      }))
    }

    function YQ(QQ, FQ, wQ, LQ, qQ, DQ, kQ, vQ) {
      return (0, oQ.n)(QQ, FQ, wQ, LQ, qQ, DQ, kQ, vQ)
    }
    vQ._Counter = 0, vQ.BYTE = 5120, vQ.UNSIGNED_BYTE = 5121, vQ.SHORT = 5122, vQ.UNSIGNED_SHORT = 5123, vQ.INT = 5124, vQ.UNSIGNED_INT = 5125, vQ.FLOAT = 5126, vQ.HALF_FLOAT = 5131, vQ.PositionKind = "position", vQ.NormalKind = "normal", vQ.TangentKind = "tangent", vQ.UVKind = "uv", vQ.UV2Kind = "uv2", vQ.UV3Kind = "uv3", vQ.UV4Kind = "uv4", vQ.UV5Kind = "uv5", vQ.UV6Kind = "uv6", vQ.ColorKind = "color", vQ.ColorInstanceKind = "instanceColor", vQ.MatricesIndicesKind = "matricesIndices", vQ.MatricesWeightsKind = "matricesWeights", vQ.MatricesIndicesExtraKind = "matricesIndicesExtra", vQ.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let xQ = !1;

    function AQ() {
      xQ || (xQ = !0, vQ.DeduceStride = mQ, vQ.GetDataType = uQ, vQ.GetTypeByteLength = HQ, vQ.ForEach = bQ, vQ.GetFloatData = YQ)
    }
  },
  39330: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.MH = 0, this.is32Bits = !1, this.uniqueId = LQ._Counter++
      }
    }
    LQ._Counter = 0
  },
  39552: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ
    });
    var LQ = wQ(36696),
      qQ = wQ(39561);
    class oQ {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || FQ && !this.pickedMesh.isVerticesDataPresent(qQ.h.NormalKind)) return null;
        let wQ, oQ = this.pickedMesh.OLQ();
        0 === oQ?.length && (oQ = null);
        const DQ = LQ.k.Ox[0],
          kQ = LQ.k.Ox[1],
          vQ = LQ.k.Ox[2];
        if (FQ) {
          const QQ = this.pickedMesh.getVerticesData(qQ.h.NormalKind);
          let FQ = oQ ? LQ.p.FromArrayToRef(QQ, 3 * oQ[3 * this.faceId], DQ) : DQ.vQQ(QQ[3 * this.faceId * 3], QQ[3 * this.faceId * 3 + 1], QQ[3 * this.faceId * 3 + 2]),
            mQ = oQ ? LQ.p.FromArrayToRef(QQ, 3 * oQ[3 * this.faceId + 1], kQ) : kQ.vQQ(QQ[3 * (3 * this.faceId + 1)], QQ[3 * (3 * this.faceId + 1) + 1], QQ[3 * (3 * this.faceId + 1) + 2]),
            uQ = oQ ? LQ.p.FromArrayToRef(QQ, 3 * oQ[3 * this.faceId + 2], vQ) : vQ.vQQ(QQ[3 * (3 * this.faceId + 2)], QQ[3 * (3 * this.faceId + 2) + 1], QQ[3 * (3 * this.faceId + 2) + 2]);
          FQ = FQ.scale(this.bu), mQ = mQ.scale(this.bv), uQ = uQ.scale(1 - this.bu - this.bv), wQ = new LQ.p(FQ.x + mQ.x + uQ.x, FQ.y + mQ.y + uQ.y, FQ.z + mQ.z + uQ.z)
        } else {
          const QQ = this.pickedMesh.getVerticesData(qQ.h.PositionKind),
            FQ = oQ ? LQ.p.FromArrayToRef(QQ, 3 * oQ[3 * this.faceId], DQ) : DQ.vQQ(QQ[3 * this.faceId * 3], QQ[3 * this.faceId * 3 + 1], QQ[3 * this.faceId * 3 + 2]),
            mQ = oQ ? LQ.p.FromArrayToRef(QQ, 3 * oQ[3 * this.faceId + 1], kQ) : kQ.vQQ(QQ[3 * (3 * this.faceId + 1)], QQ[3 * (3 * this.faceId + 1) + 1], QQ[3 * (3 * this.faceId + 1) + 2]),
            uQ = oQ ? LQ.p.FromArrayToRef(QQ, 3 * oQ[3 * this.faceId + 2], vQ) : vQ.vQQ(QQ[3 * (3 * this.faceId + 2)], QQ[3 * (3 * this.faceId + 2) + 1], QQ[3 * (3 * this.faceId + 2) + 2]),
            HQ = FQ.subtract(mQ),
            bQ = uQ.subtract(mQ);
          wQ = LQ.p.Cross(HQ, bQ)
        }
        const mQ = (QQ, FQ) => {
          if (-1 !== this.thinInstanceIndex) {
            const wQ = QQ._thinInstanceDataStorage.matrixData,
              qQ = this.thinInstanceIndex << 4;
            if (wQ && wQ.length > qQ) {
              const QQ = LQ.k.Matrix[0];
              LQ.c.FromArrayToRef(wQ, qQ, QQ), LQ.p.TransformNormalToRef(FQ, QQ, FQ)
            }
          }
          let wQ = QQ.getWorldMatrix();
          QQ.nonUniformScaling && (LQ.k.Matrix[0].Qs(wQ), wQ = LQ.k.Matrix[0], wQ.setTranslationFromFloats(0, 0, 0), wQ.invert(), wQ.transposeToRef(LQ.k.Matrix[1]), wQ = LQ.k.Matrix[1]), LQ.p.TransformNormalToRef(FQ, wQ, FQ)
        };
        if (QQ && mQ(this.pickedMesh, wQ), this.ray) {
          const FQ = LQ.k.Ox[0].Qs(wQ);
          QQ || mQ(this.pickedMesh, FQ), LQ.p.Dot(FQ, this.ray.direction) > 0 && wQ.negateInPlace()
        }
        return wQ.normalize(), wQ
      }
      getTextureCoordinates() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qQ.h.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(QQ)) return null;
        const FQ = this.pickedMesh.OLQ();
        if (!FQ) return null;
        const wQ = this.pickedMesh.getVerticesData(QQ);
        if (!wQ) return null;
        let oQ = LQ.n.FromArray(wQ, 2 * FQ[3 * this.faceId]),
          DQ = LQ.n.FromArray(wQ, 2 * FQ[3 * this.faceId + 1]),
          kQ = LQ.n.FromArray(wQ, 2 * FQ[3 * this.faceId + 2]);
        return oQ = oQ.scale(this.bu), DQ = DQ.scale(this.bv), kQ = kQ.scale(1 - this.bu - this.bv), new LQ.n(oQ.x + DQ.x + kQ.x, oQ.y + DQ.y + kQ.y)
      }
    }
  },
  39376: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ
    });
    var LQ = wQ(39240);
    let qQ = !1;

    function oQ() {
      qQ || (qQ = !0, LQ.ThinEngine.prototype.updateDynamicIndexBuffer = function(QQ, FQ) {
        let wQ;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(QQ), wQ = QQ.is32Bits ? FQ instanceof Uint32Array ? FQ : new Uint32Array(FQ) : FQ instanceof Uint16Array ? FQ : new Uint16Array(FQ), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, wQ, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, LQ.ThinEngine.prototype.updateDynamicVertexBuffer = function(QQ, FQ, wQ, LQ) {
        this.bindArrayBuffer(QQ), void 0 === wQ && (wQ = 0);
        const qQ = FQ.byteLength || FQ.length;
        void 0 === LQ || LQ >= qQ && 0 === wQ ? FQ instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, wQ, new Float32Array(FQ)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, wQ, FQ) : FQ instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, wQ, new Float32Array(FQ).subarray(0, LQ / 4)) : (FQ = ArrayBuffer.isView(FQ) ? new Uint8Array(FQ.buffer, FQ.byteOffset, LQ) : new Uint8Array(FQ, 0, LQ), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, wQ, FQ)), this._resetVertexBufferBinding()
      })
    }
  },
  39341: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ
    });
    class LQ {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          FQ = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = FQ, !QQ && (QQ = FQ.createTexture(), !QQ)) throw new Error("Unable to create webGL texture");
        this.set(QQ)
      }
      setUsage() {}
      set(QQ) {
        this._webGLTexture = QQ
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(QQ) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(QQ)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const QQ of this._MSAARenderBuffers) this._context.deleteRenderbuffer(QQ);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[QQ] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39295: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => MQ
    });
    var LQ = wQ(36722),
      qQ = wQ(39243),
      oQ = wQ(36720),
      DQ = wQ(38203),
      kQ = wQ(36717),
      vQ = wQ(39303);
    class mQ {
      constructor() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, QQ && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(QQ) {
        this._zOffset !== QQ && (this._zOffset = QQ, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(QQ) {
        this._zOffsetUnits !== QQ && (this._zOffsetUnits = QQ, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(QQ) {
        this._cullFace !== QQ && (this._cullFace = QQ, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(QQ) {
        this._cull !== QQ && (this._cull = QQ, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(QQ) {
        this._depthFunc !== QQ && (this._depthFunc = QQ, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(QQ) {
        this._depthMask !== QQ && (this._depthMask = QQ, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(QQ) {
        this._depthTest !== QQ && (this._depthTest = QQ, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(QQ) {
        this._frontFace !== QQ && (this._frontFace = QQ, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(QQ) {
        this.isDirty && (this._isCullDirty && (this.cull ? QQ.enable(QQ.CULL_FACE) : QQ.disable(QQ.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (QQ.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (QQ.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? QQ.enable(QQ.DEPTH_TEST) : QQ.disable(QQ.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (QQ.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (QQ.enable(QQ.POLYGON_OFFSET_FILL), QQ.polygonOffset(this.zOffset, this.zOffsetUnits)) : QQ.disable(QQ.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (QQ.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class uQ {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(QQ) {
        this._func !== QQ && (this._func = QQ, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(QQ) {
        this._backFunc !== QQ && (this._backFunc = QQ, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(QQ) {
        this._funcRef !== QQ && (this._funcRef = QQ, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(QQ) {
        this._funcMask !== QQ && (this._funcMask = QQ, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(QQ) {
        this._opStencilFail !== QQ && (this._opStencilFail = QQ, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(QQ) {
        this._opDepthFail !== QQ && (this._opDepthFail = QQ, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(QQ) {
        this._opStencilDepthPass !== QQ && (this._opStencilDepthPass = QQ, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(QQ) {
        this._backOpStencilFail !== QQ && (this._backOpStencilFail = QQ, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(QQ) {
        this._backOpDepthFail !== QQ && (this._backOpDepthFail = QQ, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(QQ) {
        this._backOpStencilDepthPass !== QQ && (this._backOpStencilDepthPass = QQ, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(QQ) {
        this._mask !== QQ && (this._mask = QQ, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(QQ) {
        this._enabled !== QQ && (this._enabled = QQ, this._isStencilTestDirty = !0)
      }
      constructor() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, QQ && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(QQ) {
        if (!QQ) return;
        const FQ = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = FQ ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = FQ ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = FQ ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = FQ ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = FQ ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = FQ ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = FQ ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = FQ ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = FQ ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = FQ ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = FQ ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = FQ ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? QQ.enable(QQ.STENCIL_TEST) : QQ.disable(QQ.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (QQ.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (QQ.stencilFuncSeparate(QQ.FRONT, this.func, this.funcRef, this.funcMask), QQ.stencilFuncSeparate(QQ.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (QQ.stencilOpSeparate(QQ.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), QQ.stencilOpSeparate(QQ.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class HQ {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = HQ.ALWAYS, this.opStencilFail = HQ.KEEP, this.opDepthFail = HQ.KEEP, this.opStencilDepthPass = HQ.REPLACE, this.backFunc = HQ.ALWAYS, this.backOpStencilFail = HQ.KEEP, this.backOpDepthFail = HQ.KEEP, this.backOpStencilDepthPass = HQ.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(QQ) {
        this.func = QQ
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(QQ) {
        this.backFunc = QQ
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(QQ) {
        this.funcRef = QQ
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(QQ) {
        this.funcMask = QQ
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(QQ) {
        this.opStencilFail = QQ
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(QQ) {
        this.opDepthFail = QQ
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(QQ) {
        this.opStencilDepthPass = QQ
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(QQ) {
        this.backOpStencilFail = QQ
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(QQ) {
        this.backOpDepthFail = QQ
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(QQ) {
        this.backOpStencilDepthPass = QQ
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(QQ) {
        this.mask = QQ
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(QQ) {
        this.enabled = QQ
      }
    }
    HQ.ALWAYS = 519, HQ.KEEP = 7680, HQ.REPLACE = 7681;
    var bQ = wQ(39309),
      YQ = wQ(39277),
      xQ = wQ(39226),
      AQ = wQ(39264),
      tQ = wQ(39274);

    function eQ(QQ, FQ) {
      if (FQ) {
        const {
          requestAnimationFrame: wQ
        } = FQ;
        if ("function" === typeof wQ) return wQ(QQ)
      }
      if ((0, AQ.g)()) {
        const {
          requestAnimationFrame: wQ
        } = FQ || window;
        if ("function" === typeof wQ) return wQ(QQ)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(QQ);
      return setTimeout(QQ, 16)
    }
    class MQ {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(QQ) {
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
      get SLQ() {
        return this._useReverseDepthBuffer
      }
      set SLQ(QQ) {
        QQ !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = QQ, this._depthCullingState.depthFunc = QQ ? 518 : 515)
      }
      setColorWrite(QQ) {
        QQ !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = QQ)
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
      _getGlobalDefines(QQ) {
        if (QQ) return this.isNDCHalfZRange ? QQ.IS_NDC_HALF_ZRANGE = "" : delete QQ.IS_NDC_HALF_ZRANGE, this.SLQ ? QQ.USE_REVERSE_DEPTHBUFFER = "" : delete QQ.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? QQ.USE_EXACT_SRGB_CONVERSIONS = "" : delete QQ.USE_EXACT_SRGB_CONVERSIONS);
        {
          let QQ = "";
          return this.isNDCHalfZRange && (QQ += "#define IS_NDC_HALF_ZRANGE"), this.SLQ && (QQ && (QQ += "\n"), QQ += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (QQ && (QQ += "\n"), QQ += "#define USE_EXACT_SRGB_CONVERSIONS"), QQ
        }
      }
      _rebuildInternalTextures() {
        const QQ = this._internalTexturesCache.slice();
        for (const FQ of QQ) FQ._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const QQ = this._renderTargetWrapperCache.slice();
        for (const FQ of QQ) FQ.textures?.some((QQ => 15 === QQ.source)) || FQ._rebuild()
      }
      _rebuildEffects() {
        for (const QQ in this._compiledEffects) {
          const FQ = this._compiledEffects[QQ];
          FQ._pipelineContext = null, FQ._prepareEffect()
        }
        qQ.d.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        DQ.c.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(QQ) {
        setTimeout((() => {
          this._clearEmptyResources();
          const FQ = this._depthCullingState.depthTest,
            wQ = this._depthCullingState.depthFunc,
            LQ = this._depthCullingState.depthMask,
            qQ = this._stencilState.stencilTest;
          QQ(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = FQ, this._depthCullingState.depthFunc = wQ, this._depthCullingState.depthMask = LQ, this._stencilState.stencilTest = qQ, this._flagContextRestored()
        }), 0)
      }
      get vW() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(QQ) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(QQ) {}
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
          const QQ = new Uint8Array(4),
            FQ = [QQ, QQ, QQ, QQ, QQ, QQ];
          this._emptyCubeTexture = this.createRawCubeTexture(FQ, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(QQ) {
        this._framebufferDimensionsObject = QQ
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(QQ) {
        if (!QQ) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const FQ = this._activeRenderLoops.indexOf(QQ);
        FQ >= 0 && (this._activeRenderLoops.splice(FQ, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: QQ
            } = this.customAnimationFrameRequester;
            QQ && QQ(this.customAnimationFrameRequester.sx), delete this.customAnimationFrameRequester.sx
          }
        } else if (0 !== this._frameHandler) {
          const QQ = this._frameHandler;
          if (this._frameHandler = 0, (0, AQ.g)()) {
            const {
              cancelAnimationFrame: FQ
            } = this.getHostWindow() || window;
            if ("function" === typeof FQ) return FQ(QQ)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(QQ);
          return clearTimeout(QQ)
        }
      }
      eC() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      pC() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(QQ) {
        this._maxFPS = QQ, void 0 !== QQ && (this._minFrameTime = QQ <= 0 ? Number.MAX_VALUE : 1e3 / QQ)
      }
      _isOverFrameTime(QQ) {
        if (!QQ || void 0 === this._maxFPS) return !1;
        const FQ = QQ - this._lastFrameTime;
        return this._lastFrameTime = QQ, this._renderAccumulator += FQ, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(QQ) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(QQ)) {
          let QQ = !0;
          (this.vW || !this.renderEvenInBackground && this._windowIsBackground) && (QQ = !1), QQ && (this.eC(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.pC())
        }
      }
      _renderLoop(QQ) {
        this._processFrame(QQ), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let QQ = 0; QQ < this._activeRenderLoops.length; QQ++) {
          (0, this._activeRenderLoops[QQ])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(QQ, FQ) {
        return eQ(QQ, FQ)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.sx = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.sx) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(QQ) {
        -1 === this._activeRenderLoops.indexOf(QQ) && (this._activeRenderLoops.push(QQ), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(QQ) {
        this._depthCullingState.depthTest = QQ
      }
      setZOffset(QQ) {
        this._depthCullingState.zOffset = this.SLQ ? -QQ : QQ
      }
      getZOffset() {
        const QQ = this._depthCullingState.zOffset;
        return this.SLQ ? -QQ : QQ
      }
      setZOffsetUnits(QQ) {
        this._depthCullingState.zOffsetUnits = this.SLQ ? -QQ : QQ
      }
      getZOffsetUnits() {
        const QQ = this._depthCullingState.zOffsetUnits;
        return this.SLQ ? -QQ : QQ
      }
      getHostWindow() {
        return (0, AQ.g)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(QQ) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const QQ of this.scenes) QQ._rebuildTextures();
        for (const QQ of this._virtualScenes) QQ._rebuildTextures()
      }
      _releaseRenderTargetWrapper(QQ) {
        const FQ = this._renderTargetWrapperCache.indexOf(QQ); - 1 !== FQ && this._renderTargetWrapperCache.splice(FQ, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(QQ, FQ, wQ) {
        const LQ = FQ || this.getRenderWidth(),
          qQ = wQ || this.getRenderHeight(),
          oQ = QQ.x || 0,
          DQ = QQ.y || 0;
        this._cachedViewport = QQ, this._viewport(oQ * LQ, DQ * qQ, LQ * QQ.width, qQ * QQ.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(QQ) {
        return new Path2D(QQ)
      }
      get description() {
        let QQ = this.name + this.version;
        return this._caps.parallelShaderCompile && (QQ += " - Parallel shader compilation"), QQ
      }
      _createTextureBase(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          kQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          vQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          mQ = arguments.length > 7 ? arguments[7] : void 0,
          uQ = arguments.length > 8 ? arguments[8] : void 0,
          HQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          bQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          YQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          AQ = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          tQ = arguments.length > 13 ? arguments[13] : void 0,
          eQ = arguments.length > 14 ? arguments[14] : void 0,
          GQ = arguments.length > 15 ? arguments[15] : void 0;
        const pQ = "data:" === (QQ = QQ || "").substring(0, 5),
          cQ = "blob:" === QQ.substring(0, 5),
          CQ = pQ && -1 !== QQ.indexOf(";base64,"),
          SQ = bQ || new xQ.d(this, 1);
        SQ !== bQ && (SQ.label = QQ.substring(0, 60));
        const iQ = QQ;
        !this._transformTextureUrl || CQ || bQ || HQ || (QQ = this._transformTextureUrl(QQ)), iQ !== QQ && (SQ._originalUrl = iQ);
        const WQ = QQ.lastIndexOf(".");
        let RQ = AQ || (WQ > -1 ? QQ.substring(WQ).toLowerCase() : "");
        RQ.indexOf("?") > -1 && (RQ = RQ.split("?")[0]);
        const OQ = MQ.GetCompatibleTextureLoader(RQ, tQ);
        LQ && LQ.addPendingData(SQ), SQ.url = QQ, SQ.generateMipMaps = !FQ, SQ.samplingMode = qQ, SQ.invertY = wQ, SQ._useSRGBBuffer = this._getUseSRGBBuffer(!!GQ, FQ), this._doNotHandleContextLost || (SQ._buffer = HQ);
        let sQ = null;
        kQ && !bQ && (sQ = SQ.onLoadedObservable.add(kQ)), bQ || this._internalTexturesCache.push(SQ);
        const rQ = (wQ, bQ) => {
          LQ && LQ.removePendingData(SQ), QQ === iQ ? (sQ && SQ.onLoadedObservable.remove(sQ), oQ.d.UseFallbackTexture && QQ !== oQ.d.FallbackTexture && this._createTextureBase(oQ.d.FallbackTexture, FQ, SQ.invertY, LQ, qQ, null, vQ, mQ, uQ, HQ, SQ), wQ = (wQ || "Unknown error") + (oQ.d.UseFallbackTexture ? " - Fallback texture was used" : ""), SQ.onErrorObservable.notifyObservers({
            message: wQ,
            exception: bQ
          }), vQ && vQ(wQ, bQ)) : (DQ.c.Warn(`Failed to load ${QQ}, falling back to ${iQ}`), this._createTextureBase(iQ, FQ, SQ.invertY, LQ, qQ, kQ, vQ, mQ, uQ, HQ, SQ, YQ, AQ, tQ, eQ, GQ))
        };
        if (OQ) {
          const FQ = async QQ => {
            (await OQ).loadData(QQ, SQ, ((QQ, FQ, wQ, oQ, DQ, kQ) => {
              kQ ? rQ("TextureLoader failed to load data") : mQ(SQ, RQ, LQ, {
                width: QQ,
                height: FQ
              }, SQ.invertY, !wQ, oQ, (() => (DQ(), !1)), qQ)
            }), eQ)
          };
          if (HQ) {
            const QQ = async QQ => {
              try {
                await FQ(QQ)
              } catch (wQ) {
                rQ("Failed to parse texture data", wQ)
              }
            };
            HQ instanceof ArrayBuffer ? QQ(new Uint8Array(HQ)) : ArrayBuffer.isView(HQ) ? QQ(HQ) : vQ && vQ("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(QQ, (async QQ => {
            try {
              await FQ(new Uint8Array(QQ))
            } catch (wQ) {
              rQ("Failed to parse texture data", wQ)
            }
          }), void 0, LQ ? LQ.offlineProvider : void 0, !0, ((QQ, FQ) => {
            rQ("Unable to load " + (QQ && QQ.responseURL, FQ))
          }))
        } else {
          const wQ = QQ => {
            cQ && !this._doNotHandleContextLost && (SQ._buffer = QQ), mQ(SQ, RQ, LQ, QQ, SQ.invertY, FQ, !1, uQ, qQ)
          };
          !pQ || CQ ? HQ && ("string" === typeof HQ.decoding || HQ.close) ? wQ(HQ) : MQ._FileToolsLoadImage(QQ || "", wQ, rQ, LQ ? LQ.offlineProvider : null, tQ, SQ.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof HQ || HQ instanceof ArrayBuffer || ArrayBuffer.isView(HQ) || HQ instanceof Blob ? MQ._FileToolsLoadImage(HQ, wQ, rQ, LQ ? LQ.offlineProvider : null, tQ, SQ.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : HQ && wQ(HQ)
        }
        return SQ
      }
      _rebuildBuffers() {
        for (const QQ of this._uniformBuffers) QQ._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, AQ.c)() ? document : null
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
        for (const QQ in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, QQ) && (this._boundTexturesCache[QQ] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(QQ) {
        this._name = QQ
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
      setHardwareScalingLevel(QQ) {
        this._hardwareScalingLevel = QQ, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(QQ) {
        this._doNotHandleContextLost = QQ
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(QQ, FQ, wQ) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new mQ, this._stencilStateComposer = new uQ, this._stencilState = new HQ, this._alphaState = new bQ.e(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new LQ.e, this.onCanvasFocusObservable = new LQ.e, this.onNewSceneAddedObservable = new LQ.e, this.onResizeObservable = new LQ.e, this.onCanvasPointerOutObservable = new LQ.e, this.onEffectErrorObservable = new LQ.e, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new LQ.e, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = QQ => this._renderLoop(QQ), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new LQ.e, this.onAfterShaderCompilationObservable = new LQ.e, this.onBeginFrameObservable = new LQ.e, this.onEndFrameObservable = new LQ.e, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new LQ.e, this.onContextRestoredObservable = new LQ.e, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.zN = new LQ.e, this.onReleaseEffectsObservable = new LQ.e, oQ.d.Instances.push(this), this.startTime = vQ.e.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, kQ.e.SetMatrixPrecision(!!FQ.useLargeWorldRendering || !!FQ.useHighPrecisionMatrix), (0, AQ.f)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), FQ.antialias = QQ ?? FQ.antialias, FQ.deterministicLockstep = FQ.deterministicLockstep ?? !1, FQ.lockstepMaxSteps = FQ.lockstepMaxSteps ?? 4, FQ.timeStep = FQ.timeStep ?? 1 / 60, FQ.stencil = FQ.stencil ?? !0, this._audioContext = FQ.audioEngineOptions?.audioContext ?? null, this._audioDestination = FQ.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = FQ.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!FQ.doNotHandleContextLost, this._isStencilEnable = !!FQ.stencil, this.useExactSrgbConversions = FQ.useExactSrgbConversions ?? !1, this.canvasTabIndex = FQ.canvasTabIndex ?? this.canvasTabIndex;
        const qQ = (0, AQ.g)() && window.devicePixelRatio || 1,
          DQ = FQ.limitDeviceRatio || qQ;
        wQ = wQ || FQ.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = wQ, this._hardwareScalingLevel = wQ ? 1 / Math.min(DQ, qQ) : 1, this._lastDevicePixelRatio = qQ, this._creationOptions = FQ
      }
      resize() {
        let QQ, FQ, wQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const QQ = (0, AQ.g)() && window.devicePixelRatio || 1,
            FQ = this._lastDevicePixelRatio / QQ;
          this._lastDevicePixelRatio = QQ, this._hardwareScalingLevel *= FQ
        }
        if ((0, AQ.g)() && (0, AQ.c)())
          if (this._renderingCanvas) {
            const wQ = this._renderingCanvas.getBoundingClientRect?.();
            QQ = this._renderingCanvas.clientWidth || wQ?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, FQ = this._renderingCanvas.clientHeight || wQ?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else QQ = window.innerWidth, FQ = window.innerHeight;
        else QQ = this._renderingCanvas ? this._renderingCanvas.width : 100, FQ = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(QQ / this._hardwareScalingLevel, FQ / this._hardwareScalingLevel, wQ)
      }
      setSize(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (QQ |= 0, FQ |= 0, !wQ && this._renderingCanvas.width === QQ && this._renderingCanvas.height === FQ) return !1;
        if (this._renderingCanvas.width = QQ, this._renderingCanvas.height = FQ, this.scenes) {
          for (let QQ = 0; QQ < this.scenes.length; QQ++) {
            const FQ = this.scenes[QQ];
            for (let QQ = 0; QQ < FQ.cameras.length; QQ++) {
              FQ.cameras[QQ]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ) {
        throw (0, YQ.k)("engine.rawTexture")
      }
      createRawCubeTexture(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
        throw (0, YQ.k)("engine.rawTexture")
      }
      createRawTexture3D(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ) {
        throw (0, YQ.k)("engine.rawTexture")
      }
      createRawTexture2DArray(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ) {
        throw (0, YQ.k)("engine.rawTexture")
      }
      _sharedInit(QQ) {
        this._renderingCanvas = QQ
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const QQ = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== QQ.indexOf("Mobile") || -1 !== QQ.indexOf("Mac") && (0, AQ.c)() && "ontouchend" in document
        }, this._checkForMobile(), (0, AQ.g)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(QQ) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(QQ, !1)
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
      _createImageBitmapFromSource(QQ, FQ) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(QQ, FQ) {
        return createImageBitmap(QQ, FQ)
      }
      resizeImageBitmap(QQ, FQ, wQ) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(QQ) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(QQ, FQ) {
        if ("undefined" === typeof document) return new OffscreenCanvas(QQ, FQ);
        const wQ = document.createElement("canvas");
        return wQ.width = QQ, wQ.height = FQ, wQ
      }
      createCanvas(QQ, FQ) {
        return MQ._CreateCanvas(QQ, FQ)
      }
      static _FileToolsLoadImage(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        if (!tQ.e.loadImage) throw (0, YQ.k)("FileTools");
        return tQ.e.loadImage(QQ, FQ, wQ, LQ, qQ, oQ, DQ)
      }
      _loadFile(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = (0, tQ.k)(QQ, FQ, wQ, LQ, qQ, oQ);
        return this._activeRequests.push(DQ), DQ.onCompleteObservable.add((() => {
          const QQ = this._activeRequests.indexOf(DQ); - 1 !== QQ && this._activeRequests.splice(QQ, 1)
        })), DQ
      }
      static _FileToolsLoadFile(QQ, FQ, wQ, LQ, qQ, oQ) {
        if (tQ.e.loadFile) return tQ.e.loadFile(QQ, FQ, wQ, LQ, qQ, oQ);
        throw (0, YQ.k)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), qQ.d.ResetCache();
        for (const FQ of this._activeRequests) FQ.abort();
        this._boundRenderFunction = null, this.zN.notifyObservers(this), this.zN.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, AQ.g)() && window.removeEventListener("resize", this._checkForMobile);
        const QQ = oQ.d.Instances.indexOf(this);
        QQ >= 0 && oQ.d.Instances.splice(QQ, 1), oQ.d.Instances.length || (oQ.d.OnEnginesDisposedObservable.notifyObservers(this), oQ.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(QQ) {
        throw (0, YQ.k)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(QQ, FQ) {
        for (let wQ = 0; wQ < oQ.d.Instances.length; wQ++) {
          const LQ = oQ.d.Instances[wQ];
          for (let wQ = 0; wQ < LQ.scenes.length; wQ++) LQ.scenes[wQ].markAllMaterialsAsDirty(QQ, FQ)
        }
      }
      static GetCompatibleTextureLoader(QQ, FQ) {
        return null
      }
    }
    MQ._RenderPassIdCounter = 0, MQ._RescalePostProcessFactory = null, MQ.CollisionsEpsilon = .001, MQ.QueueNewFrame = eQ
  },
  39251: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? LQ.ShadersRepository : LQ.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? LQ.ShadersStore : LQ.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? LQ.IncludesShadersStore : LQ.IncludesShadersStoreWGSL
      }
    }
    LQ.ShadersRepository = "src/Shaders/", LQ.ShadersStore = {}, LQ.IncludesShadersStore = {}, LQ.ShadersRepositoryWGSL = "src/ShadersWGSL/", LQ.ShadersStoreWGSL = {}, LQ.IncludesShadersStoreWGSL = {}
  },
  39269: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => bQ,
      d: () => GQ,
      h: () => xQ,
      j: () => YQ,
      n: () => AQ,
      o: () => MQ,
      s: () => HQ,
      u: () => mQ,
      y: () => uQ,
      B: () => vQ,
      D: () => kQ
    });
    class LQ {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(QQ) {
        QQ && this.program && QQ(this.program)
      }
      setEngine(QQ) {
        this.engine = QQ
      }
      _fillEffectInformation(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
        const vQ = this.engine;
        if (vQ.supportsUniformBuffers)
          for (const uQ in FQ) QQ.bindUniformBlock(uQ, FQ[uQ]);
        let mQ;
        for (this.engine.getUniforms(this, wQ).forEach(((QQ, FQ) => {
            LQ[wQ[FQ]] = QQ
          })), this._uniforms = LQ, mQ = 0; mQ < qQ.length; mQ++) {
          null == QQ.getUniform(qQ[mQ]) && (qQ.splice(mQ, 1), mQ--)
        }
        qQ.forEach(((QQ, FQ) => {
          oQ[QQ] = FQ
        }));
        for (const uQ of vQ.getAttributes(this, DQ)) kQ.push(uQ)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(QQ, FQ) {
        const wQ = this._valueCache[QQ],
          LQ = FQ.updateFlag;
        if (void 0 !== wQ && wQ === LQ) return !1;
        const qQ = FQ.RLQ();
        let oQ = this._matrixValueCache[QQ];
        if (void 0 !== wQ && null !== wQ && void 0 !== oQ) {
          let FQ = !0;
          for (let QQ = 15; QQ >= 0; QQ--)
            if (oQ[QQ] !== qQ[QQ]) {
              FQ = !1;
              break
            } if (FQ) return this._valueCache[QQ] = LQ, !1
        }
        return void 0 === oQ && (oQ = this._matrixValueCache[QQ] = new Float32Array(16)), oQ.set(qQ), this._valueCache[QQ] = LQ, !0
      }
      _cacheFloat2(QQ, FQ, wQ) {
        let LQ = this._valueCache[QQ];
        if (!LQ || 2 !== LQ.length) return LQ = [FQ, wQ], this._valueCache[QQ] = LQ, !0;
        let qQ = !1;
        return LQ[0] !== FQ && (LQ[0] = FQ, qQ = !0), LQ[1] !== wQ && (LQ[1] = wQ, qQ = !0), qQ
      }
      _cacheFloat3(QQ, FQ, wQ, LQ) {
        let qQ = this._valueCache[QQ];
        if (!qQ || 3 !== qQ.length) return qQ = [FQ, wQ, LQ], this._valueCache[QQ] = qQ, !0;
        let oQ = !1;
        return qQ[0] !== FQ && (qQ[0] = FQ, oQ = !0), qQ[1] !== wQ && (qQ[1] = wQ, oQ = !0), qQ[2] !== LQ && (qQ[2] = LQ, oQ = !0), oQ
      }
      _cacheFloat4(QQ, FQ, wQ, LQ, qQ) {
        let oQ = this._valueCache[QQ];
        if (!oQ || 4 !== oQ.length) return oQ = [FQ, wQ, LQ, qQ], this._valueCache[QQ] = oQ, !0;
        let DQ = !1;
        return oQ[0] !== FQ && (oQ[0] = FQ, DQ = !0), oQ[1] !== wQ && (oQ[1] = wQ, DQ = !0), oQ[2] !== LQ && (oQ[2] = LQ, DQ = !0), oQ[3] !== qQ && (oQ[3] = qQ, DQ = !0), DQ
      }
      setInt(QQ, FQ) {
        const wQ = this._valueCache[QQ];
        void 0 !== wQ && wQ === FQ || this.engine.setInt(this._uniforms[QQ], FQ) && (this._valueCache[QQ] = FQ)
      }
      setInt2(QQ, FQ, wQ) {
        this._cacheFloat2(QQ, FQ, wQ) && (this.engine.setInt2(this._uniforms[QQ], FQ, wQ) || (this._valueCache[QQ] = null))
      }
      setInt3(QQ, FQ, wQ, LQ) {
        this._cacheFloat3(QQ, FQ, wQ, LQ) && (this.engine.setInt3(this._uniforms[QQ], FQ, wQ, LQ) || (this._valueCache[QQ] = null))
      }
      setInt4(QQ, FQ, wQ, LQ, qQ) {
        this._cacheFloat4(QQ, FQ, wQ, LQ, qQ) && (this.engine.setInt4(this._uniforms[QQ], FQ, wQ, LQ, qQ) || (this._valueCache[QQ] = null))
      }
      setIntArray(QQ, FQ) {
        this._valueCache[QQ] = null, this.engine.setIntArray(this._uniforms[QQ], FQ)
      }
      setIntArray2(QQ, FQ) {
        this._valueCache[QQ] = null, this.engine.setIntArray2(this._uniforms[QQ], FQ)
      }
      setIntArray3(QQ, FQ) {
        this._valueCache[QQ] = null, this.engine.setIntArray3(this._uniforms[QQ], FQ)
      }
      setIntArray4(QQ, FQ) {
        this._valueCache[QQ] = null, this.engine.setIntArray4(this._uniforms[QQ], FQ)
      }
      setUInt(QQ, FQ) {
        const wQ = this._valueCache[QQ];
        void 0 !== wQ && wQ === FQ || this.engine.setUInt(this._uniforms[QQ], FQ) && (this._valueCache[QQ] = FQ)
      }
      setUInt2(QQ, FQ, wQ) {
        this._cacheFloat2(QQ, FQ, wQ) && (this.engine.setUInt2(this._uniforms[QQ], FQ, wQ) || (this._valueCache[QQ] = null))
      }
      setUInt3(QQ, FQ, wQ, LQ) {
        this._cacheFloat3(QQ, FQ, wQ, LQ) && (this.engine.setUInt3(this._uniforms[QQ], FQ, wQ, LQ) || (this._valueCache[QQ] = null))
      }
      setUInt4(QQ, FQ, wQ, LQ, qQ) {
        this._cacheFloat4(QQ, FQ, wQ, LQ, qQ) && (this.engine.setUInt4(this._uniforms[QQ], FQ, wQ, LQ, qQ) || (this._valueCache[QQ] = null))
      }
      setUIntArray(QQ, FQ) {
        this._valueCache[QQ] = null, this.engine.setUIntArray(this._uniforms[QQ], FQ)
      }
      setUIntArray2(QQ, FQ) {
        this._valueCache[QQ] = null, this.engine.setUIntArray2(this._uniforms[QQ], FQ)
      }
      setUIntArray3(QQ, FQ) {
        this._valueCache[QQ] = null, this.engine.setUIntArray3(this._uniforms[QQ], FQ)
      }
      setUIntArray4(QQ, FQ) {
        this._valueCache[QQ] = null, this.engine.setUIntArray4(this._uniforms[QQ], FQ)
      }
      setArray(QQ, FQ) {
        this._valueCache[QQ] = null, this.engine.setArray(this._uniforms[QQ], FQ)
      }
      setArray2(QQ, FQ) {
        this._valueCache[QQ] = null, this.engine.setArray2(this._uniforms[QQ], FQ)
      }
      setArray3(QQ, FQ) {
        this._valueCache[QQ] = null, this.engine.setArray3(this._uniforms[QQ], FQ)
      }
      setArray4(QQ, FQ) {
        this._valueCache[QQ] = null, this.engine.setArray4(this._uniforms[QQ], FQ)
      }
      setMatrices(QQ, FQ) {
        FQ && (this._valueCache[QQ] = null, this.engine.setMatrices(this._uniforms[QQ], FQ))
      }
      setMatrix(QQ, FQ) {
        this._cacheMatrix(QQ, FQ) && (this.engine.setMatrices(this._uniforms[QQ], FQ.RLQ()) || (this._valueCache[QQ] = null))
      }
      setMatrix3x3(QQ, FQ) {
        this._valueCache[QQ] = null, this.engine.setMatrix3x3(this._uniforms[QQ], FQ)
      }
      setMatrix2x2(QQ, FQ) {
        this._valueCache[QQ] = null, this.engine.setMatrix2x2(this._uniforms[QQ], FQ)
      }
      setFloat(QQ, FQ) {
        const wQ = this._valueCache[QQ];
        void 0 !== wQ && wQ === FQ || this.engine.setFloat(this._uniforms[QQ], FQ) && (this._valueCache[QQ] = FQ)
      }
      setVector2(QQ, FQ) {
        this._cacheFloat2(QQ, FQ.x, FQ.y) && (this.engine.setFloat2(this._uniforms[QQ], FQ.x, FQ.y) || (this._valueCache[QQ] = null))
      }
      setFloat2(QQ, FQ, wQ) {
        this._cacheFloat2(QQ, FQ, wQ) && (this.engine.setFloat2(this._uniforms[QQ], FQ, wQ) || (this._valueCache[QQ] = null))
      }
      setVector3(QQ, FQ) {
        this._cacheFloat3(QQ, FQ.x, FQ.y, FQ.z) && (this.engine.setFloat3(this._uniforms[QQ], FQ.x, FQ.y, FQ.z) || (this._valueCache[QQ] = null))
      }
      setFloat3(QQ, FQ, wQ, LQ) {
        this._cacheFloat3(QQ, FQ, wQ, LQ) && (this.engine.setFloat3(this._uniforms[QQ], FQ, wQ, LQ) || (this._valueCache[QQ] = null))
      }
      setVector4(QQ, FQ) {
        this._cacheFloat4(QQ, FQ.x, FQ.y, FQ.z, FQ.w) && (this.engine.setFloat4(this._uniforms[QQ], FQ.x, FQ.y, FQ.z, FQ.w) || (this._valueCache[QQ] = null))
      }
      setQuaternion(QQ, FQ) {
        this._cacheFloat4(QQ, FQ.x, FQ.y, FQ.z, FQ.w) && (this.engine.setFloat4(this._uniforms[QQ], FQ.x, FQ.y, FQ.z, FQ.w) || (this._valueCache[QQ] = null))
      }
      setFloat4(QQ, FQ, wQ, LQ, qQ) {
        this._cacheFloat4(QQ, FQ, wQ, LQ, qQ) && (this.engine.setFloat4(this._uniforms[QQ], FQ, wQ, LQ, qQ) || (this._valueCache[QQ] = null))
      }
      setColor3(QQ, FQ) {
        this._cacheFloat3(QQ, FQ.r, FQ.g, FQ.b) && (this.engine.setFloat3(this._uniforms[QQ], FQ.r, FQ.g, FQ.b) || (this._valueCache[QQ] = null))
      }
      setColor4(QQ, FQ, wQ) {
        this._cacheFloat4(QQ, FQ.r, FQ.g, FQ.b, wQ) && (this.engine.setFloat4(this._uniforms[QQ], FQ.r, FQ.g, FQ.b, wQ) || (this._valueCache[QQ] = null))
      }
      setDirectColor4(QQ, FQ) {
        this._cacheFloat4(QQ, FQ.r, FQ.g, FQ.b, FQ.a) && (this.engine.setFloat4(this._uniforms[QQ], FQ.r, FQ.g, FQ.b, FQ.a) || (this._valueCache[QQ] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var qQ = wQ(39274);
    const oQ = new WeakMap,
      DQ = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function kQ(QQ) {
      let FQ = oQ.get(QQ);
      if (!FQ) {
        if (!QQ) return DQ;
        FQ = {
          _webGLVersion: QQ.TEXTURE_BINDING_3D ? 2 : 1,
          _context: QQ,
          parallelShaderCompile: QQ.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, oQ.set(QQ, FQ)
      }
      return FQ
    }

    function vQ(QQ) {
      oQ.delete(QQ)
    }

    function mQ(QQ, FQ, wQ, LQ, qQ, oQ) {
      const DQ = kQ(LQ);
      oQ || (oQ = DQ._createShaderProgramInjection ?? bQ);
      return oQ(QQ, eQ(FQ, "vertex", LQ, DQ._contextWasLost), eQ(wQ, "fragment", LQ, DQ._contextWasLost), LQ, qQ, DQ.validateShaderPrograms)
    }

    function uQ(QQ, FQ, wQ, LQ, qQ) {
      let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        DQ = arguments.length > 6 ? arguments[6] : void 0;
      const vQ = kQ(qQ);
      DQ || (DQ = vQ._createShaderProgramInjection ?? bQ);
      const mQ = vQ._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return DQ(QQ, tQ(FQ, "vertex", LQ, mQ, qQ, vQ._contextWasLost), tQ(wQ, "fragment", LQ, mQ, qQ, vQ._contextWasLost), qQ, oQ, vQ.validateShaderPrograms)
    }

    function HQ(QQ, FQ) {
      const wQ = new LQ,
        qQ = kQ(QQ);
      return qQ.parallelShaderCompile && !qQ.disableParallelShaderCompile && (wQ.isParallelCompiled = !0), wQ.context = qQ._context, wQ
    }

    function bQ(QQ, FQ, wQ, LQ) {
      let qQ = arguments.length > 5 ? arguments[5] : void 0;
      const oQ = LQ.createProgram();
      if (QQ.program = oQ, !oQ) throw new Error("Unable to create program");
      return LQ.attachShader(oQ, FQ), LQ.attachShader(oQ, wQ), LQ.linkProgram(oQ), QQ.context = LQ, QQ.vertexShader = FQ, QQ.fragmentShader = wQ, QQ.isParallelCompiled || xQ(QQ, LQ, qQ), oQ
    }

    function YQ(QQ, FQ, wQ) {
      const LQ = QQ;
      if (LQ._isDisposed) return !1;
      const qQ = kQ(FQ);
      return !!(qQ && qQ.parallelShaderCompile && qQ.parallelShaderCompile.COMPLETION_STATUS_KHR && LQ.program && FQ.getProgramParameter(LQ.program, qQ.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (xQ(LQ, FQ, wQ), !0)
    }

    function xQ(QQ, FQ, wQ) {
      const LQ = QQ.context,
        qQ = QQ.vertexShader,
        oQ = QQ.fragmentShader,
        DQ = QQ.program;
      if (!LQ.getProgramParameter(DQ, LQ.LINK_STATUS)) {
        if (!FQ.getShaderParameter(qQ, FQ.COMPILE_STATUS)) {
          const wQ = FQ.getShaderInfoLog(qQ);
          if (wQ) throw QQ.vertexCompilationError = wQ, new Error("VERTEX SHADER " + wQ)
        }
        if (!FQ.getShaderParameter(oQ, FQ.COMPILE_STATUS)) {
          const wQ = FQ.getShaderInfoLog(oQ);
          if (wQ) throw QQ.fragmentCompilationError = wQ, new Error("FRAGMENT SHADER " + wQ)
        }
        const wQ = LQ.getProgramInfoLog(DQ);
        if (wQ) throw QQ.programLinkError = wQ, new Error(wQ)
      }
      if (wQ) {
        LQ.validateProgram(DQ);
        if (!LQ.getProgramParameter(DQ, LQ.VALIDATE_STATUS)) {
          const FQ = LQ.getProgramInfoLog(DQ);
          if (FQ) throw QQ.programValidationError = FQ, new Error(FQ)
        }
      }
      LQ.deleteShader(qQ), LQ.deleteShader(oQ), QQ.vertexShader = void 0, QQ.fragmentShader = void 0, QQ.onCompiled && (QQ.onCompiled(), QQ.onCompiled = void 0)
    }

    function AQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, vQ, HQ) {
      let bQ = arguments.length > 10 ? arguments[10] : void 0,
        YQ = arguments.length > 11 ? arguments[11] : void 0,
        xQ = arguments.length > 12 ? arguments[12] : void 0;
      const AQ = kQ(QQ.context);
      YQ || (YQ = AQ.createRawShaderProgramInjection ?? mQ), xQ || (xQ = AQ.createShaderProgramInjection ?? uQ);
      const tQ = QQ;
      tQ.program = LQ ? YQ(tQ, FQ, wQ, tQ.context, HQ) : xQ(tQ, FQ, wQ, vQ, tQ.context, HQ), tQ.program.__SPECTOR_rebuildProgram = DQ, bQ()
    }

    function tQ(QQ, FQ, wQ, LQ, oQ, DQ) {
      return eQ((0, qQ.g)(QQ, wQ, LQ), FQ, oQ, DQ)
    }

    function eQ(QQ, FQ, wQ, LQ) {
      const qQ = wQ.createShader("vertex" === FQ ? wQ.VERTEX_SHADER : wQ.FRAGMENT_SHADER);
      if (!qQ) {
        let QQ, qQ = wQ.NO_ERROR;
        for (;
          (QQ = wQ.getError()) !== wQ.NO_ERROR;) qQ = QQ;
        throw new Error(`Something went wrong while creating a gl ${FQ} shader object. gl error=${qQ}, gl isContextLost=${wQ.isContextLost()}, _contextWasLost=${LQ}`)
      }
      return wQ.shaderSource(qQ, QQ), wQ.compileShader(qQ), qQ
    }

    function MQ(QQ, FQ) {
      FQ.useProgram(QQ)
    }

    function GQ(QQ, FQ) {
      const wQ = QQ;
      if (!wQ.isParallelCompiled) return void FQ(QQ);
      const LQ = wQ.onCompiled;
      wQ.onCompiled = () => {
        LQ?.(), FQ(QQ)
      }
    }
  },
  39240: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      ThinEngine: () => cQ
    });
    var LQ = wQ(39243),
      qQ = wQ(39269),
      oQ = wQ(39295),
      DQ = wQ(39317),
      kQ = wQ(38203),
      vQ = wQ(39264);
    class mQ {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(QQ, FQ, wQ, LQ, qQ) {
        if (qQ.drawBuffersExtensionDisabled) {
          const FQ = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          QQ = QQ.replace(FQ, "")
        }
        return QQ
      }
    }
    const uQ = /(flat\s)?\s*varying\s*.*/;
    class HQ {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(QQ) {
        return QQ.replace("attribute", "in")
      }
      varyingCheck(QQ, FQ) {
        return uQ.test(QQ)
      }
      varyingProcessor(QQ, FQ) {
        return QQ.replace("varying", FQ ? "in" : "out")
      }
      postProcessor(QQ, FQ, wQ) {
        const LQ = -1 !== QQ.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (QQ = (QQ = QQ.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), wQ) {
          const wQ = -1 !== QQ.search(/layout *\(location *= *0\) *out/g),
            qQ = -1 !== FQ.indexOf("#define DUAL_SOURCE_BLENDING"),
            oQ = qQ ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          qQ && (QQ = "#extension GL_EXT_blend_func_extended : require\n" + QQ), QQ = (QQ = (QQ = (QQ = (QQ = (QQ = (QQ = QQ.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (LQ || wQ ? "" : oQ) + "void main(")
        } else {
          FQ.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (QQ = "invariant gl_Position;\n" + QQ);
          if (-1 !== FQ.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + QQ
        }
        return QQ
      }
    }
    var bQ = wQ(39321),
      YQ = wQ(39333),
      xQ = wQ(39341),
      AQ = wQ(39226),
      tQ = wQ(39274),
      eQ = wQ(39258),
      MQ = wQ(39346),
      GQ = wQ(39309);
    class pQ {}
    class cQ extends oQ.e {
      get name() {
        return this._name
      }
      set name(QQ) {
        this._name = QQ
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return LQ.d.ShadersRepository
      }
      static set ShadersRepository(QQ) {
        LQ.d.ShadersRepository = QQ
      }
      get supportsUniformBuffers() {
        return this.oA > 1 && !this.disableUniformBuffers
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
      constructor(QQ, FQ, wQ, LQ) {
        if (wQ = wQ || {}, super(FQ ?? wQ.antialias, wQ, LQ), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !QQ) return;
        let oQ;
        if (QQ.getContext) {
          if (oQ = QQ, void 0 === wQ.preserveDrawingBuffer && (wQ.preserveDrawingBuffer = !1), void 0 === wQ.xrCompatible && (wQ.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const QQ = navigator.userAgent;
            for (const FQ of cQ.ExceptionList) {
              const LQ = FQ.key,
                qQ = FQ.targets;
              if (new RegExp(LQ).test(QQ)) {
                if (FQ.capture && FQ.captureConstraint) {
                  const wQ = FQ.capture,
                    LQ = FQ.captureConstraint,
                    qQ = new RegExp(wQ).exec(QQ);
                  if (qQ && qQ.length > 0) {
                    if (parseInt(qQ[qQ.length - 1]) >= LQ) continue
                  }
                }
                for (const QQ of qQ) switch (QQ) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    wQ.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, qQ.B)(this._gl)
            } : (this._onContextLost = QQ => {
              QQ.preventDefault(), this._contextWasLost = !0, (0, qQ.B)(this._gl), kQ.c.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, oQ.addEventListener("webglcontextrestored", this._onContextRestored, !1), wQ.powerPreference = wQ.powerPreference || "high-performance"), oQ.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (wQ.xrCompatible = !1), !wQ.disableWebGL2Support) try {
            this._gl = oQ.getContext("webgl2", wQ) || oQ.getContext("experimental-webgl2", wQ), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (uQ) {}
          if (!this._gl) {
            if (!oQ) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = oQ.getContext("webgl", wQ) || oQ.getContext("experimental-webgl", wQ)
            } catch (uQ) {
              throw new Error("WebGL not supported", {
                cause: uQ
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = QQ, oQ = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const FQ = this._gl.getContextAttributes();
          FQ && (wQ.stencil = FQ.stencil)
        }
        this._sharedInit(oQ), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== wQ.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = wQ.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let qQ = 0; qQ < this._caps.maxVertexAttribs; qQ++) this._currentBufferPointers[qQ] = new pQ;
        this._shaderProcessor = this.oA > 1 ? new HQ : new mQ;
        const DQ = `Babylon.js v${cQ.Version}`;
        kQ.c.Log(DQ + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", DQ);
        const vQ = (0, qQ.D)(this._gl);
        vQ.validateShaderPrograms = this.validateShaderPrograms, vQ.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(QQ) {
        return null
      }
      areAllEffectsReady() {
        for (const QQ in this._compiledEffects) {
          if (!this._compiledEffects[QQ].isReady()) return !1
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
        const QQ = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != QQ && (this._glRenderer = this._gl.getParameter(QQ.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(QQ.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const FQ = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!FQ, this._alphaState = new GQ.e(this._caps.blendParametersPerTarget), FQ && (this._gl.blendEquationSeparateIndexed = FQ.blendEquationSeparateiOES.bind(FQ), this._gl.blendEquationIndexed = FQ.blendEquationiOES.bind(FQ), this._gl.blendFuncSeparateIndexed = FQ.blendFuncSeparateiOES.bind(FQ), this._gl.blendFuncIndexed = FQ.blendFunciOES.bind(FQ), this._gl.colorMaskIndexed = FQ.colorMaskiOES.bind(FQ), this._gl.disableIndexed = FQ.disableiOES.bind(FQ), this._gl.enableIndexed = FQ.enableiOES.bind(FQ)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const QQ = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== QQ) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = QQ.drawBuffersWEBGL.bind(QQ), this._caps.maxDrawBuffers = this._gl.getParameter(QQ.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let FQ = 0; FQ < 16; FQ++) this._gl["COLOR_ATTACHMENT" + FQ + "_WEBGL"] = QQ["COLOR_ATTACHMENT" + FQ + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const QQ = this._gl.getExtension("WEBGL_depth_texture");
          null != QQ && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = QQ.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const QQ = this._gl.getExtension("OES_vertex_array_object");
          null != QQ && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = QQ.createVertexArrayOES.bind(QQ), this._gl.bindVertexArray = QQ.bindVertexArrayOES.bind(QQ), this._gl.deleteVertexArray = QQ.deleteVertexArrayOES.bind(QQ))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const QQ = this._gl.getExtension("ANGLE_instanced_arrays");
          null != QQ ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = QQ.drawArraysInstancedANGLE.bind(QQ), this._gl.drawElementsInstanced = QQ.drawElementsInstancedANGLE.bind(QQ), this._gl.vertexAttribDivisor = QQ.vertexAttribDivisorANGLE.bind(QQ)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const QQ = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            FQ = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (QQ && FQ && (this._caps.highPrecisionShaderSupported = 0 !== QQ.precision && 0 !== FQ.precision, this._caps.shaderFloatPrecision = Math.min(QQ.precision, FQ.precision)), !this._shouldUseHighPrecisionShader) {
            const QQ = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              FQ = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            QQ && FQ && (this._caps.shaderFloatPrecision = Math.min(QQ.precision, FQ.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const QQ = this._gl.getExtension("EXT_blend_minmax");
          null != QQ && (this._caps.blendMinMax = !0, this._gl.MAX = QQ.MAX_EXT, this._gl.MIN = QQ.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const QQ = this._gl.getExtension("EXT_sRGB");
            null != QQ && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: QQ.SRGB_EXT,
              SRGB8: QQ.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: QQ.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const QQ = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== QQ && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && QQ)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let wQ = 0; wQ < this._maxSimultaneousTextures; wQ++) this._nextFreeTextureSlots.push(wQ);
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
      get oA() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const QQ = this._workingCanvas.getContext("2d");
        QQ && (this._workingContext = QQ)
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
        const QQ = this.getGlInfo();
        return QQ && QQ.renderer ? QQ.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const oQ = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = oQ;
        let DQ = 0;
        if (FQ && QQ) {
          let FQ = !0;
          if (this._currentRenderTarget) {
            const wQ = this._currentRenderTarget.texture?.format;
            if (void 0 !== wQ && (0, MQ.g)(wQ)) {
              const wQ = this._currentRenderTarget.texture?.type;
              void 0 !== wQ && (0, MQ.j)(wQ) ? (cQ._TempClearColorUint32[0] = 255 * QQ.r, cQ._TempClearColorUint32[1] = 255 * QQ.g, cQ._TempClearColorUint32[2] = 255 * QQ.b, cQ._TempClearColorUint32[3] = 255 * QQ.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, cQ._TempClearColorUint32), FQ = !1) : (cQ._TempClearColorInt32[0] = 255 * QQ.r, cQ._TempClearColorInt32[1] = 255 * QQ.g, cQ._TempClearColorInt32[2] = 255 * QQ.b, cQ._TempClearColorInt32[3] = 255 * QQ.a, this._gl.clearBufferiv(this._gl.COLOR, 0, cQ._TempClearColorInt32), FQ = !1)
            }
          }
          FQ && (this._gl.clearColor(QQ.r, QQ.g, QQ.b, void 0 !== QQ.a ? QQ.a : 1), DQ |= this._gl.COLOR_BUFFER_BIT)
        }
        wQ && (this.SLQ ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), DQ |= this._gl.DEPTH_BUFFER_BIT), LQ && (this._gl.clearStencil(qQ), DQ |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(DQ)
      }
      _clearColorAttachment(QQ, FQ, wQ, LQ) {
        if ((0, MQ.g)(wQ)) {
          const wQ = (0, MQ.j)(LQ),
            qQ = wQ ? cQ._TempClearColorUint32 : cQ._TempClearColorInt32;
          return qQ[0] = FQ.r, qQ[1] = FQ.g, qQ[2] = FQ.b, qQ[3] = FQ.a, void(wQ ? this._gl.clearBufferuiv(this._gl.COLOR, QQ, qQ) : this._gl.clearBufferiv(this._gl.COLOR, QQ, qQ))
        }
        cQ._TempClearColorFloat32[0] = FQ.r, cQ._TempClearColorFloat32[1] = FQ.g, cQ._TempClearColorFloat32[2] = FQ.b, cQ._TempClearColorFloat32[3] = FQ.a, this._gl.clearBufferfv(this._gl.COLOR, QQ, cQ._TempClearColorFloat32)
      }
      _viewport(QQ, FQ, wQ, LQ) {
        QQ === this._viewportCached.x && FQ === this._viewportCached.y && wQ === this._viewportCached.z && LQ === this._viewportCached.w || (this._viewportCached.x = QQ, this._viewportCached.y = FQ, this._viewportCached.z = wQ, this._viewportCached.w = LQ, this._gl.viewport(QQ, FQ, wQ, LQ))
      }
      pC() {
        super.pC(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          DQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const vQ = QQ;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = QQ, this._integerMRTAttachmentsMask = !QQ.isMulti && QQ.texture && (0, MQ.g)(QQ.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(vQ._framebuffer);
        const mQ = this._gl;
        QQ.isMulti || (QQ.is2DArray || QQ.is3D ? (mQ.framebufferTextureLayer(mQ.FRAMEBUFFER, mQ.COLOR_ATTACHMENT0, QQ.texture._hardwareTexture?.underlyingResource, oQ, DQ), vQ._currentLOD = oQ) : QQ.isCube ? mQ.framebufferTexture2D(mQ.FRAMEBUFFER, mQ.COLOR_ATTACHMENT0, mQ.TEXTURE_CUBE_MAP_POSITIVE_X + FQ, QQ.texture._hardwareTexture?.underlyingResource, oQ) : vQ._currentLOD !== oQ && (mQ.framebufferTexture2D(mQ.FRAMEBUFFER, mQ.COLOR_ATTACHMENT0, mQ.TEXTURE_2D, QQ.texture._hardwareTexture?.underlyingResource, oQ), vQ._currentLOD = oQ));
        const uQ = QQ._depthStencilTexture;
        if (uQ) {
          QQ.is3D && (QQ.texture.width === uQ.width && QQ.texture.height === uQ.height && QQ.texture.depth === uQ.depth || kQ.c.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const wQ = QQ._depthStencilTextureWithStencil ? mQ.DEPTH_STENCIL_ATTACHMENT : mQ.DEPTH_ATTACHMENT;
          QQ.is2DArray || QQ.is3D ? mQ.framebufferTextureLayer(mQ.FRAMEBUFFER, wQ, uQ._hardwareTexture?.underlyingResource, oQ, DQ) : QQ.isCube ? mQ.framebufferTexture2D(mQ.FRAMEBUFFER, wQ, mQ.TEXTURE_CUBE_MAP_POSITIVE_X + FQ, uQ._hardwareTexture?.underlyingResource, oQ) : mQ.framebufferTexture2D(mQ.FRAMEBUFFER, wQ, mQ.TEXTURE_2D, uQ._hardwareTexture?.underlyingResource, oQ)
        }
        vQ._MSAAFramebuffer && this._bindUnboundFramebuffer(vQ._MSAAFramebuffer), this._cachedViewport && !qQ ? this.setViewport(this._cachedViewport, wQ, LQ) : (wQ || (wQ = QQ.width, oQ && (wQ /= Math.pow(2, oQ))), LQ || (LQ = QQ.height, oQ && (LQ /= Math.pow(2, oQ))), this._viewport(0, 0, wQ, LQ)), this.wipeCaches()
      }
      setStateCullFaceType(QQ, FQ) {
        const wQ = this.cullBackFaces ?? QQ ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== wQ || FQ) && (this._depthCullingState.cullFace = wQ)
      }
      setState(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          oQ = arguments.length > 5 ? arguments[5] : void 0,
          DQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== QQ || wQ) && (this._depthCullingState.cull = QQ), this.setStateCullFaceType(qQ, wQ), this.setZOffset(FQ), this.setZOffsetUnits(DQ);
        const kQ = LQ ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== kQ || wQ) && (this._depthCullingState.frontFace = kQ), this._stencilStateComposer.stencilMaterial = oQ
      }
      _resolveAndGenerateMipMapsFramebuffer(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        QQ.disableAutomaticMSAAResolve || (QQ.isMulti ? this.resolveMultiFramebuffer(QQ) : this.resolveFramebuffer(QQ)), FQ || (QQ.isMulti ? this.generateMipMapsMultiFramebuffer(QQ) : this.generateMipMapsFramebuffer(QQ))
      }
      _bindUnboundFramebuffer(QQ) {
        this._currentFramebuffer !== QQ && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, QQ), this._currentFramebuffer = QQ)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(QQ) {
        const FQ = this._getTextureTarget(QQ);
        this._bindTextureDirectly(FQ, QQ, !0), this._gl.generateMipmap(FQ), this._bindTextureDirectly(FQ, null)
      }
      unBindFramebuffer(QQ, FQ, wQ) {
        const LQ = QQ;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(QQ, FQ), wQ && (LQ._MSAAFramebuffer && this._bindUnboundFramebuffer(LQ._framebuffer), wQ()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(QQ) {
        QQ.isMulti || !QQ.texture?.generateMipMaps || QQ.isCube || this.generateMipmaps(QQ.texture)
      }
      resolveFramebuffer(QQ) {
        const FQ = QQ,
          wQ = this._gl;
        if (!FQ._MSAAFramebuffer || FQ.isMulti) return;
        let LQ = FQ.resolveMSAAColors ? wQ.COLOR_BUFFER_BIT : 0;
        LQ |= FQ._generateDepthBuffer && FQ.resolveMSAADepth ? wQ.DEPTH_BUFFER_BIT : 0, LQ |= FQ._generateStencilBuffer && FQ.resolveMSAAStencil ? wQ.STENCIL_BUFFER_BIT : 0, wQ.bindFramebuffer(wQ.READ_FRAMEBUFFER, FQ._MSAAFramebuffer), wQ.bindFramebuffer(wQ.DRAW_FRAMEBUFFER, FQ._framebuffer), wQ.blitFramebuffer(0, 0, QQ.width, QQ.height, 0, 0, QQ.width, QQ.height, LQ, wQ.NEAREST)
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
      createVertexBuffer(QQ, FQ, wQ) {
        return this._createVertexBuffer(QQ, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(QQ, FQ) {
        const wQ = this._gl.createBuffer();
        if (!wQ) throw new Error("Unable to create vertex buffer");
        const LQ = new bQ.c(wQ);
        return this.bindArrayBuffer(LQ), "number" !== typeof QQ ? QQ instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(QQ), FQ), LQ.MH = 4 * QQ.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, QQ, FQ), LQ.MH = QQ.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(QQ), FQ), LQ.MH = QQ), this._resetVertexBufferBinding(), LQ.references = 1, LQ
      }
      createDynamicVertexBuffer(QQ, FQ) {
        return this._createVertexBuffer(QQ, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(QQ, FQ, wQ) {
        const LQ = this._gl.createBuffer(),
          qQ = new bQ.c(LQ);
        if (!LQ) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(qQ);
        const oQ = this._normalizeIndexData(QQ);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, oQ, FQ ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), qQ.references = 1, qQ.is32Bits = 4 === oQ.BYTES_PER_ELEMENT, qQ
      }
      _normalizeIndexData(QQ) {
        if (2 === QQ.BYTES_PER_ELEMENT) return QQ;
        if (this._caps.uintIndices) {
          if (QQ instanceof Uint32Array) return QQ;
          for (let FQ = 0; FQ < QQ.length; FQ++)
            if (QQ[FQ] >= 65535) return new Uint32Array(QQ);
          return new Uint16Array(QQ)
        }
        return new Uint16Array(QQ)
      }
      bindArrayBuffer(QQ) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(QQ, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(QQ, FQ, wQ) {
        const LQ = QQ.program,
          qQ = this._gl.getUniformBlockIndex(LQ, FQ);
        this._gl.uniformBlockBinding(LQ, qQ, wQ)
      }
      bindIndexBuffer(QQ) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(QQ, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(QQ, FQ) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[FQ] !== QQ) && (this._gl.bindBuffer(FQ, QQ ? QQ.underlyingResource : null), this._currentBoundBuffer[FQ] = QQ)
      }
      updateArrayBuffer(QQ) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, QQ)
      }
      _vertexAttribPointer(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        const kQ = this._currentBufferPointers[FQ];
        if (!kQ) return;
        let vQ = !1;
        kQ.active ? (kQ.buffer !== QQ && (kQ.buffer = QQ, vQ = !0), kQ.size !== wQ && (kQ.size = wQ, vQ = !0), kQ.type !== LQ && (kQ.type = LQ, vQ = !0), kQ.normalized !== qQ && (kQ.normalized = qQ, vQ = !0), kQ.stride !== oQ && (kQ.stride = oQ, vQ = !0), kQ.offset !== DQ && (kQ.offset = DQ, vQ = !0)) : (vQ = !0, kQ.active = !0, kQ.index = FQ, kQ.size = wQ, kQ.type = LQ, kQ.normalized = qQ, kQ.stride = oQ, kQ.offset = DQ, kQ.buffer = QQ), (vQ || this._vaoRecordInProgress) && (this.bindArrayBuffer(QQ), LQ === this._gl.UNSIGNED_INT || LQ === this._gl.INT ? this._gl.vertexAttribIPointer(FQ, wQ, LQ, oQ, DQ) : this._gl.vertexAttribPointer(FQ, wQ, LQ, qQ, oQ, DQ))
      }
      _bindIndexBufferWithCache(QQ) {
        null != QQ && this._cachedIndexBuffer !== QQ && (this._cachedIndexBuffer = QQ, this.bindIndexBuffer(QQ), this._uintIndicesCurrentlySet = QQ.is32Bits)
      }
      _bindVertexBuffersAttributes(QQ, FQ, wQ) {
        const LQ = FQ.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let qQ = 0; qQ < LQ.length; qQ++) {
          const oQ = FQ.getAttributeLocation(qQ);
          if (oQ >= 0) {
            const FQ = LQ[qQ];
            let DQ = null;
            if (wQ && (DQ = wQ[FQ]), DQ || (DQ = QQ[FQ]), !DQ) continue;
            this._gl.enableVertexAttribArray(oQ), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[oQ] = !0);
            const kQ = DQ.getBuffer();
            kQ && (this._vertexAttribPointer(kQ, oQ, DQ.getSize(), DQ.type, DQ.normalized, DQ.byteStride, DQ.byteOffset), DQ.getIsInstanced() && (this._gl.vertexAttribDivisor(oQ, DQ.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(oQ), this._currentInstanceBuffers.push(kQ))))
          }
        }
      }
      recordVertexArrayObject(QQ, FQ, wQ, LQ) {
        const qQ = this._gl.createVertexArray();
        if (!qQ) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(qQ), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(QQ, wQ, LQ), this.bindIndexBuffer(FQ), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), qQ
      }
      bindVertexArrayObject(QQ, FQ) {
        this._cachedVertexArrayObject !== QQ && (this._cachedVertexArrayObject = QQ, this._gl.bindVertexArray(QQ), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != FQ && FQ.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(QQ, FQ, wQ, LQ, qQ) {
        if (this._cachedVertexBuffers !== QQ || this._cachedEffectForVertexBuffers !== qQ) {
          this._cachedVertexBuffers = QQ, this._cachedEffectForVertexBuffers = qQ;
          const FQ = qQ.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let oQ = 0;
          for (let DQ = 0; DQ < FQ; DQ++)
            if (DQ < wQ.length) {
              const FQ = qQ.getAttributeLocation(DQ);
              FQ >= 0 && (this._gl.enableVertexAttribArray(FQ), this._vertexAttribArraysEnabled[FQ] = !0, this._vertexAttribPointer(QQ, FQ, wQ[DQ], this._gl.FLOAT, !1, LQ, oQ)), oQ += 4 * wQ[DQ]
            }
        }
        this._bindIndexBufferWithCache(FQ)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(QQ, FQ, wQ, LQ) {
        this._cachedVertexBuffers === QQ && this._cachedEffectForVertexBuffers === wQ || (this._cachedVertexBuffers = QQ, this._cachedEffectForVertexBuffers = wQ, this._bindVertexBuffersAttributes(QQ, wQ, LQ)), this._bindIndexBufferWithCache(FQ)
      }
      unbindInstanceAttributes() {
        let QQ;
        for (let FQ = 0, wQ = this._currentInstanceLocations.length; FQ < wQ; FQ++) {
          const wQ = this._currentInstanceBuffers[FQ];
          QQ != wQ && wQ.references && (QQ = wQ, this.bindArrayBuffer(wQ));
          const LQ = this._currentInstanceLocations[FQ];
          this._gl.vertexAttribDivisor(LQ, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(QQ) {
        this._gl.deleteVertexArray(QQ)
      }
      _releaseBuffer(QQ) {
        return QQ.references--, 0 === QQ.references && (this._deleteBuffer(QQ), !0)
      }
      _deleteBuffer(QQ) {
        this._gl.deleteBuffer(QQ.underlyingResource)
      }
      updateAndBindInstancesBuffer(QQ, FQ, wQ) {
        if (this.bindArrayBuffer(QQ), FQ && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, FQ), void 0 !== wQ[0].index) this.bindInstancesBuffer(QQ, wQ, !0);
        else
          for (let LQ = 0; LQ < 4; LQ++) {
            const FQ = wQ[LQ];
            this._vertexAttribArraysEnabled[FQ] || (this._gl.enableVertexAttribArray(FQ), this._vertexAttribArraysEnabled[FQ] = !0), this._vertexAttribPointer(QQ, FQ, 4, this._gl.FLOAT, !1, 64, 16 * LQ), this._gl.vertexAttribDivisor(FQ, 1), this._currentInstanceLocations.push(FQ), this._currentInstanceBuffers.push(QQ)
          }
      }
      bindInstancesBuffer(QQ, FQ) {
        let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(QQ);
        let LQ = 0;
        if (wQ)
          for (let qQ = 0; qQ < FQ.length; qQ++) {
            LQ += 4 * FQ[qQ].attributeSize
          }
        for (let qQ = 0; qQ < FQ.length; qQ++) {
          const wQ = FQ[qQ];
          void 0 === wQ.index && (wQ.index = this._currentEffect.getAttributeLocationByName(wQ.attributeName)), wQ.index < 0 || (this._vertexAttribArraysEnabled[wQ.index] || (this._gl.enableVertexAttribArray(wQ.index), this._vertexAttribArraysEnabled[wQ.index] = !0), this._vertexAttribPointer(QQ, wQ.index, wQ.attributeSize, wQ.attributeType || this._gl.FLOAT, wQ.normalized || !1, LQ, wQ.offset), this._gl.vertexAttribDivisor(wQ.index, void 0 === wQ.divisor ? 1 : wQ.divisor), this._currentInstanceLocations.push(wQ.index), this._currentInstanceBuffers.push(QQ))
        }
      }
      disableInstanceAttributeByName(QQ) {
        if (!this._currentEffect) return;
        const FQ = this._currentEffect.getAttributeLocationByName(QQ);
        this.disableInstanceAttribute(FQ)
      }
      disableInstanceAttribute(QQ) {
        let FQ, wQ = !1;
        for (; - 1 !== (FQ = this._currentInstanceLocations.indexOf(QQ));) this._currentInstanceLocations.splice(FQ, 1), this._currentInstanceBuffers.splice(FQ, 1), wQ = !0;
        wQ && (this._gl.vertexAttribDivisor(QQ, 0), this.disableAttributeByIndex(QQ))
      }
      disableAttributeByIndex(QQ) {
        this._gl.disableVertexAttribArray(QQ), this._vertexAttribArraysEnabled[QQ] = !1, this._currentBufferPointers[QQ].active = !1
      }
      draw(QQ, FQ, wQ, LQ) {
        this.drawElementsType(QQ ? 0 : 1, FQ, wQ, LQ)
      }
      drawPointClouds(QQ, FQ, wQ) {
        this.drawArraysType(2, QQ, FQ, wQ)
      }
      drawUnIndexed(QQ, FQ, wQ, LQ) {
        this.drawArraysType(QQ ? 0 : 1, FQ, wQ, LQ)
      }
      drawElementsType(QQ, FQ, wQ, LQ) {
        this.applyStates(), this._reportDrawCall();
        const qQ = this._drawMode(QQ),
          oQ = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          DQ = this._uintIndicesCurrentlySet ? 4 : 2;
        LQ ? this._gl.drawElementsInstanced(qQ, wQ, oQ, FQ * DQ, LQ) : this._gl.drawElements(qQ, wQ, oQ, FQ * DQ)
      }
      drawArraysType(QQ, FQ, wQ, LQ) {
        this.applyStates(), this._reportDrawCall();
        const qQ = this._drawMode(QQ);
        LQ ? this._gl.drawArraysInstanced(qQ, FQ, wQ, LQ) : this._gl.drawArrays(qQ, FQ, wQ)
      }
      _drawMode(QQ) {
        switch (QQ) {
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
      _releaseEffect(QQ) {
        this._compiledEffects[QQ._key] && delete this._compiledEffects[QQ._key];
        const FQ = QQ.getPipelineContext();
        FQ && this._deletePipelineContext(FQ)
      }
      _deletePipelineContext(QQ) {
        const FQ = QQ;
        FQ && FQ.program && (FQ.program.__SPECTOR_rebuildProgram = null, (0, eQ.m)(FQ), this._gl && (this._currentProgram === FQ.program && this._setProgram(null), this._gl.deleteProgram(FQ.program)))
      }
      _getGlobalDefines(QQ) {
        return (0, tQ.j)(QQ, this.isNDCHalfZRange, this.SLQ, this.useExactSrgbConversions)
      }
      createEffect(QQ, FQ, wQ, oQ, DQ, kQ, vQ, mQ, uQ) {
        let HQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          bQ = arguments.length > 10 ? arguments[10] : void 0;
        const YQ = "string" === typeof QQ ? QQ : QQ.vertexToken || QQ.vertexSource || QQ.vertexElement || QQ.vertex,
          xQ = "string" === typeof QQ ? QQ : QQ.fragmentToken || QQ.fragmentSource || QQ.fragmentElement || QQ.fragment,
          AQ = this._getGlobalDefines(),
          tQ = void 0 !== FQ.attributes;
        let eQ = DQ ?? FQ.defines ?? "";
        AQ && (eQ += AQ);
        const MQ = YQ + "+" + xQ + "@" + eQ;
        if (this._compiledEffects[MQ]) {
          const QQ = this._compiledEffects[MQ];
          return vQ && QQ.isReady() && vQ(QQ), QQ._refCount++, QQ
        }
        this._gl && (0, qQ.D)(this._gl);
        const GQ = new LQ.d(QQ, FQ, tQ ? this : wQ, oQ, this, DQ, kQ, vQ, mQ, uQ, MQ, FQ.shaderLanguage ?? HQ, FQ.extraInitializationsAsync ?? bQ);
        return this._compiledEffects[MQ] = GQ, GQ
      }
      _getShaderSource(QQ) {
        return this._gl.getShaderSource(QQ)
      }
      createRawShaderProgram(QQ, FQ, wQ, LQ) {
        let oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const DQ = (0, qQ.D)(this._gl);
        return DQ._contextWasLost = this._contextWasLost, DQ.validateShaderPrograms = this.validateShaderPrograms, (0, qQ.u)(QQ, FQ, wQ, LQ || this._gl, oQ)
      }
      createShaderProgram(QQ, FQ, wQ, LQ, oQ) {
        let DQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const kQ = (0, qQ.D)(this._gl);
        return kQ._contextWasLost = this._contextWasLost, kQ.validateShaderPrograms = this.validateShaderPrograms, (0, qQ.y)(QQ, FQ, wQ, LQ, oQ || this._gl, DQ)
      }
      inlineShaderCode(QQ) {
        return QQ
      }
      createPipelineContext(QQ) {
        if (this._gl) {
          (0, qQ.D)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const FQ = (0, qQ.s)(this._gl, QQ);
        return FQ.engine = this, FQ
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(QQ) {
        return (0, qQ.h)(QQ, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(QQ, FQ, wQ, LQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ) {
        const bQ = (0, qQ.D)(this._gl);
        return bQ._contextWasLost = this._contextWasLost, bQ.validateShaderPrograms = this.validateShaderPrograms, bQ._createShaderProgramInjection = this._createShaderProgram.bind(this), bQ.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), bQ.createShaderProgramInjection = this.createShaderProgram.bind(this), bQ.loadFileInjection = this._loadFile.bind(this), (0, qQ.n)(QQ, FQ, wQ, LQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ)
      }
      _createShaderProgram(QQ, FQ, wQ, LQ) {
        let oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, qQ.b)(QQ, FQ, wQ, LQ, oQ)
      }
      _isRenderingStateCompiled(QQ) {
        return !this._isDisposed && (0, qQ.j)(QQ, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(QQ, FQ) {
        (0, qQ.d)(QQ, FQ)
      }
      getUniforms(QQ, FQ) {
        const wQ = new Array,
          LQ = QQ;
        for (let qQ = 0; qQ < FQ.length; qQ++) wQ.push(this._gl.getUniformLocation(LQ.program, FQ[qQ]));
        return wQ
      }
      getAttributes(QQ, FQ) {
        const wQ = [],
          LQ = QQ;
        for (let oQ = 0; oQ < FQ.length; oQ++) try {
          wQ.push(this._gl.getAttribLocation(LQ.program, FQ[oQ]))
        } catch (qQ) {
          wQ.push(-1)
        }
        return wQ
      }
      enableEffect(QQ) {
        (QQ = null !== QQ && (0, DQ.d)(QQ) ? QQ.effect : QQ) && QQ !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(QQ), this._currentEffect = QQ, QQ.onBind && QQ.onBind(QQ), QQ._onBindObservable && QQ._onBindObservable.notifyObservers(QQ))
      }
      setInt(QQ, FQ) {
        return !!QQ && (this._gl.uniform1i(QQ, FQ), !0)
      }
      setInt2(QQ, FQ, wQ) {
        return !!QQ && (this._gl.uniform2i(QQ, FQ, wQ), !0)
      }
      setInt3(QQ, FQ, wQ, LQ) {
        return !!QQ && (this._gl.uniform3i(QQ, FQ, wQ, LQ), !0)
      }
      setInt4(QQ, FQ, wQ, LQ, qQ) {
        return !!QQ && (this._gl.uniform4i(QQ, FQ, wQ, LQ, qQ), !0)
      }
      setIntArray(QQ, FQ) {
        return !!QQ && (this._gl.uniform1iv(QQ, FQ), !0)
      }
      setIntArray2(QQ, FQ) {
        return !(!QQ || FQ.length % 2 !== 0) && (this._gl.uniform2iv(QQ, FQ), !0)
      }
      setIntArray3(QQ, FQ) {
        return !(!QQ || FQ.length % 3 !== 0) && (this._gl.uniform3iv(QQ, FQ), !0)
      }
      setIntArray4(QQ, FQ) {
        return !(!QQ || FQ.length % 4 !== 0) && (this._gl.uniform4iv(QQ, FQ), !0)
      }
      setUInt(QQ, FQ) {
        return !!QQ && (this._gl.uniform1ui(QQ, FQ), !0)
      }
      setUInt2(QQ, FQ, wQ) {
        return !!QQ && (this._gl.uniform2ui(QQ, FQ, wQ), !0)
      }
      setUInt3(QQ, FQ, wQ, LQ) {
        return !!QQ && (this._gl.uniform3ui(QQ, FQ, wQ, LQ), !0)
      }
      setUInt4(QQ, FQ, wQ, LQ, qQ) {
        return !!QQ && (this._gl.uniform4ui(QQ, FQ, wQ, LQ, qQ), !0)
      }
      setUIntArray(QQ, FQ) {
        return !!QQ && (this._gl.uniform1uiv(QQ, FQ), !0)
      }
      setUIntArray2(QQ, FQ) {
        return !(!QQ || FQ.length % 2 !== 0) && (this._gl.uniform2uiv(QQ, FQ), !0)
      }
      setUIntArray3(QQ, FQ) {
        return !(!QQ || FQ.length % 3 !== 0) && (this._gl.uniform3uiv(QQ, FQ), !0)
      }
      setUIntArray4(QQ, FQ) {
        return !(!QQ || FQ.length % 4 !== 0) && (this._gl.uniform4uiv(QQ, FQ), !0)
      }
      setArray(QQ, FQ) {
        return !!QQ && (!(FQ.length < 1) && (this._gl.uniform1fv(QQ, FQ), !0))
      }
      setArray2(QQ, FQ) {
        return !(!QQ || FQ.length % 2 !== 0) && (this._gl.uniform2fv(QQ, FQ), !0)
      }
      setArray3(QQ, FQ) {
        return !(!QQ || FQ.length % 3 !== 0) && (this._gl.uniform3fv(QQ, FQ), !0)
      }
      setArray4(QQ, FQ) {
        return !(!QQ || FQ.length % 4 !== 0) && (this._gl.uniform4fv(QQ, FQ), !0)
      }
      setMatrices(QQ, FQ) {
        return !!QQ && (this._gl.uniformMatrix4fv(QQ, !1, FQ), !0)
      }
      setMatrix3x3(QQ, FQ) {
        return !!QQ && (this._gl.uniformMatrix3fv(QQ, !1, FQ), !0)
      }
      setMatrix2x2(QQ, FQ) {
        return !!QQ && (this._gl.uniformMatrix2fv(QQ, !1, FQ), !0)
      }
      setFloat(QQ, FQ) {
        return !!QQ && (this._gl.uniform1f(QQ, FQ), !0)
      }
      setFloat2(QQ, FQ, wQ) {
        return !!QQ && (this._gl.uniform2f(QQ, FQ, wQ), !0)
      }
      setFloat3(QQ, FQ, wQ, LQ) {
        return !!QQ && (this._gl.uniform3f(QQ, FQ, wQ, LQ), !0)
      }
      setFloat4(QQ, FQ, wQ, LQ, qQ) {
        return !!QQ && (this._gl.uniform4f(QQ, FQ, wQ, LQ, qQ), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const QQ = this._colorWrite;
          this._gl.colorMask(QQ, QQ, QQ, QQ)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(QQ) {
        this.preventCacheWipeBetweenFrames && !QQ || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), QQ && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(QQ, FQ) {
        const wQ = this._gl;
        let LQ = wQ.NEAREST,
          qQ = wQ.NEAREST,
          oQ = !1;
        switch (QQ) {
          case 11:
            LQ = wQ.LINEAR, qQ = FQ ? wQ.LINEAR_MIPMAP_NEAREST : wQ.LINEAR;
            break;
          case 3:
            LQ = wQ.LINEAR, oQ = !0, qQ = FQ ? wQ.LINEAR_MIPMAP_LINEAR : wQ.LINEAR;
            break;
          case 8:
            oQ = !0, LQ = wQ.NEAREST, qQ = FQ ? wQ.NEAREST_MIPMAP_LINEAR : wQ.NEAREST;
            break;
          case 4:
            LQ = wQ.NEAREST, qQ = FQ ? wQ.NEAREST_MIPMAP_NEAREST : wQ.NEAREST;
            break;
          case 5:
            LQ = wQ.NEAREST, qQ = FQ ? wQ.LINEAR_MIPMAP_NEAREST : wQ.LINEAR;
            break;
          case 6:
            oQ = !0, LQ = wQ.NEAREST, qQ = FQ ? wQ.LINEAR_MIPMAP_LINEAR : wQ.LINEAR;
            break;
          case 7:
            LQ = wQ.NEAREST, qQ = wQ.LINEAR;
            break;
          case 1:
            LQ = wQ.NEAREST, qQ = wQ.NEAREST;
            break;
          case 9:
            LQ = wQ.LINEAR, qQ = FQ ? wQ.NEAREST_MIPMAP_NEAREST : wQ.NEAREST;
            break;
          case 10:
            oQ = !0, LQ = wQ.LINEAR, qQ = FQ ? wQ.NEAREST_MIPMAP_LINEAR : wQ.NEAREST;
            break;
          case 2:
            LQ = wQ.LINEAR, qQ = wQ.LINEAR;
            break;
          case 12:
            LQ = wQ.LINEAR, qQ = wQ.NEAREST
        }
        return {
          min: qQ,
          mag: LQ,
          hasMipMaps: oQ
        }
      }
      _createTexture() {
        const QQ = this._gl.createTexture();
        if (!QQ) throw new Error("Unable to create texture");
        return QQ
      }
      _createHardwareTexture() {
        return new xQ.b(this._createTexture(), this._gl)
      }
      _createInternalTexture(QQ, FQ) {
        let wQ, LQ, qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          oQ = !1,
          DQ = 0,
          vQ = 3,
          mQ = 5,
          uQ = !1,
          HQ = 1,
          bQ = !1,
          YQ = 0,
          xQ = !1;
        void 0 !== FQ && "object" === typeof FQ ? (wQ = !!FQ.generateMipMaps, oQ = !!FQ.createMipMaps, DQ = void 0 === FQ.type ? 0 : FQ.type, vQ = void 0 === FQ.samplingMode ? 3 : FQ.samplingMode, mQ = void 0 === FQ.format ? 5 : FQ.format, uQ = void 0 !== FQ.useSRGBBuffer && FQ.useSRGBBuffer, HQ = FQ.samples ?? 1, LQ = FQ.label, bQ = !!FQ.createMSAATexture, YQ = FQ.comparisonFunction || 0, xQ = !!FQ.isCube) : wQ = !!FQ, uQ && (uQ = this._caps.supportSRGBBuffers && (this.oA > 1 || this.isWebGPU)), (1 !== DQ || this._caps.textureFloatLinearFiltering) && (2 !== DQ || this._caps.textureHalfFloatLinearFiltering) || (vQ = 1), 1 !== DQ || this._caps.textureFloat || (DQ = 0, kQ.c.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const tQ = (0, MQ.e)(mQ),
          eQ = (0, MQ.c)(mQ),
          GQ = this._gl,
          pQ = new AQ.d(this, qQ),
          cQ = QQ.width || QQ,
          CQ = QQ.height || QQ,
          SQ = QQ.depth || 0,
          iQ = QQ.layers || 0,
          WQ = this._getSamplingParameters(vQ, (wQ || oQ) && !tQ),
          RQ = 0 !== iQ ? GQ.TEXTURE_2D_ARRAY : 0 !== SQ ? GQ.TEXTURE_3D : xQ ? GQ.TEXTURE_CUBE_MAP : GQ.TEXTURE_2D,
          OQ = tQ ? this._getInternalFormatFromDepthTextureFormat(mQ, !0, eQ) : this._getRGBABufferInternalSizedFormat(DQ, mQ, uQ),
          sQ = tQ ? eQ ? GQ.DEPTH_STENCIL : GQ.DEPTH_COMPONENT : this._getInternalFormat(mQ),
          rQ = tQ ? this._getWebGLTextureTypeFromDepthTextureFormat(mQ) : this._getWebGLTextureType(DQ);
        if (this._bindTextureDirectly(RQ, pQ), 0 !== iQ) pQ.is2DArray = !0, GQ.texImage3D(RQ, 0, OQ, cQ, CQ, iQ, 0, sQ, rQ, null);
        else if (0 !== SQ) pQ.is3D = !0, GQ.texImage3D(RQ, 0, OQ, cQ, CQ, SQ, 0, sQ, rQ, null);
        else if (xQ) {
          pQ.isCube = !0;
          for (let QQ = 0; QQ < 6; QQ++) GQ.texImage2D(GQ.TEXTURE_CUBE_MAP_POSITIVE_X + QQ, 0, OQ, cQ, CQ, 0, sQ, rQ, null)
        } else GQ.texImage2D(RQ, 0, OQ, cQ, CQ, 0, sQ, rQ, null);
        if (GQ.texParameteri(RQ, GQ.TEXTURE_MAG_FILTER, WQ.mag), GQ.texParameteri(RQ, GQ.TEXTURE_MIN_FILTER, WQ.min), GQ.texParameteri(RQ, GQ.TEXTURE_WRAP_S, GQ.CLAMP_TO_EDGE), GQ.texParameteri(RQ, GQ.TEXTURE_WRAP_T, GQ.CLAMP_TO_EDGE), tQ && this.oA > 1 && (0 === YQ ? (GQ.texParameteri(RQ, GQ.TEXTURE_COMPARE_FUNC, 515), GQ.texParameteri(RQ, GQ.TEXTURE_COMPARE_MODE, GQ.NONE)) : (GQ.texParameteri(RQ, GQ.TEXTURE_COMPARE_FUNC, YQ), GQ.texParameteri(RQ, GQ.TEXTURE_COMPARE_MODE, GQ.COMPARE_REF_TO_TEXTURE))), (wQ || oQ) && this._gl.generateMipmap(RQ), this._bindTextureDirectly(RQ, null), pQ._useSRGBBuffer = uQ, pQ.baseWidth = cQ, pQ.baseHeight = CQ, pQ.width = cQ, pQ.height = CQ, pQ.depth = iQ || SQ, pQ.isReady = !0, pQ.samples = HQ, pQ.generateMipMaps = wQ, pQ.samplingMode = vQ, pQ.type = DQ, pQ.format = mQ, pQ.label = LQ, pQ.comparisonFunction = YQ, this._internalTexturesCache.push(pQ), bQ) {
          let QQ;
          if (QQ = (0, MQ.e)(pQ.format) ? this._setupFramebufferDepthAttachments((0, MQ.c)(pQ.format), 19 !== pQ.format, pQ.width, pQ.height, HQ, pQ.format, !0) : this._createRenderBuffer(pQ.width, pQ.height, HQ, -1, this._getRGBABufferInternalSizedFormat(pQ.type, pQ.format, pQ._useSRGBBuffer), -1), !QQ) throw new Error("Unable to create render buffer");
          pQ._autoMSAAManagement = !0;
          let FQ = pQ._hardwareTexture;
          FQ || (FQ = pQ._hardwareTexture = this._createHardwareTexture()), FQ.addMSAARenderBuffer(QQ)
        }
        return pQ
      }
      _getUseSRGBBuffer(QQ, FQ) {
        return QQ && this._caps.supportSRGBBuffers && (this.oA > 1 || FQ)
      }
      createTexture(QQ, FQ, wQ, LQ) {
        var qQ = this;
        let oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          DQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          kQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          vQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          mQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          uQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          HQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          bQ = arguments.length > 11 ? arguments[11] : void 0,
          YQ = arguments.length > 12 ? arguments[12] : void 0,
          xQ = arguments.length > 13 ? arguments[13] : void 0,
          tQ = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(QQ, FQ, wQ, LQ, oQ, DQ, kQ, (function() {
          for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
          return qQ._prepareWebGLTexture(...FQ, uQ)
        }), ((QQ, FQ, wQ, qQ, oQ, DQ) => {
          const kQ = this._gl,
            vQ = wQ.width === QQ && wQ.height === FQ;
          oQ._creationFlags = xQ ?? 0;
          const mQ = this._getTexImageParametersForCreateTexture(oQ.format, oQ._useSRGBBuffer);
          if (vQ) return kQ.texImage2D(kQ.TEXTURE_2D, 0, mQ.internalFormat, mQ.format, mQ.type, wQ), !1;
          const uQ = this._caps.maxTextureSize;
          if (wQ.width > uQ || wQ.height > uQ || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = QQ, this._workingCanvas.height = FQ, this._workingContext.drawImage(wQ, 0, 0, wQ.width, wQ.height, 0, 0, QQ, FQ), kQ.texImage2D(kQ.TEXTURE_2D, 0, mQ.internalFormat, mQ.format, mQ.type, this._workingCanvas), oQ.width = QQ, oQ.height = FQ, !1);
          {
            const QQ = new AQ.d(this, 2);
            this._bindTextureDirectly(kQ.TEXTURE_2D, QQ, !0), kQ.texImage2D(kQ.TEXTURE_2D, 0, mQ.internalFormat, mQ.format, mQ.type, wQ), this._rescaleTexture(QQ, oQ, LQ, mQ.format, (() => {
              this._releaseTexture(QQ), this._bindTextureDirectly(kQ.TEXTURE_2D, oQ, !0), DQ()
            }))
          }
          return !0
        }), vQ, mQ, uQ, HQ, bQ, YQ, tQ)
      }
      _getTexImageParametersForCreateTexture(QQ, FQ) {
        let wQ, LQ;
        return 1 === this.oA ? (wQ = this._getInternalFormat(QQ, FQ), LQ = wQ) : (wQ = this._getInternalFormat(QQ, !1), LQ = this._getRGBABufferInternalSizedFormat(0, QQ, FQ)), {
          internalFormat: LQ,
          format: wQ,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(QQ, FQ, wQ, LQ, qQ) {}
      _unpackFlipY(QQ) {
        this._unpackFlipYCached !== QQ && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, QQ ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = QQ))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(QQ) {
        return QQ.isCube ? this._gl.TEXTURE_CUBE_MAP : QQ.is3D ? this._gl.TEXTURE_3D : QQ.is2DArray || QQ.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const LQ = this._getTextureTarget(FQ),
          qQ = this._getSamplingParameters(QQ, FQ.useMipMaps || wQ);
        this._setTextureParameterInteger(LQ, this._gl.TEXTURE_MAG_FILTER, qQ.mag, FQ), this._setTextureParameterInteger(LQ, this._gl.TEXTURE_MIN_FILTER, qQ.min), wQ && qQ.hasMipMaps && (FQ.generateMipMaps = !0, this._gl.generateMipmap(LQ)), this._bindTextureDirectly(LQ, null), FQ.samplingMode = QQ
      }
      updateTextureDimensions(QQ, FQ, wQ) {}
      updateTextureWrappingMode(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const qQ = this._getTextureTarget(QQ);
        null !== FQ && (this._setTextureParameterInteger(qQ, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(FQ), QQ), QQ._cachedWrapU = FQ), null !== wQ && (this._setTextureParameterInteger(qQ, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(wQ), QQ), QQ._cachedWrapV = wQ), (QQ.is2DArray || QQ.is3D) && null !== LQ && (this._setTextureParameterInteger(qQ, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(LQ), QQ), QQ._cachedWrapR = LQ), this._bindTextureDirectly(qQ, null)
      }
      _uploadCompressedDataToTextureDirectly(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          DQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const kQ = this._gl;
        let vQ = kQ.TEXTURE_2D;
        if (QQ.isCube && (vQ = kQ.TEXTURE_CUBE_MAP_POSITIVE_X + oQ), QQ._useSRGBBuffer) switch (FQ) {
          case 37492:
          case 36196:
            this._caps.etc2 ? FQ = kQ.COMPRESSED_SRGB8_ETC2 : QQ._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? FQ = kQ.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : QQ._useSRGBBuffer = !1;
            break;
          case 36492:
            FQ = kQ.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            FQ = kQ.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            FQ = kQ.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            FQ = kQ.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            FQ = kQ.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            FQ = kQ.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            FQ = kQ.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            FQ = kQ.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            FQ = kQ.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            FQ = kQ.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            FQ = kQ.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            FQ = kQ.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            FQ = kQ.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            FQ = kQ.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            FQ = kQ.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? FQ = kQ.COMPRESSED_SRGB_S3TC_DXT1_EXT : QQ._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? FQ = kQ.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : QQ._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? FQ = kQ.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : QQ._useSRGBBuffer = !1;
            break;
          default:
            QQ._useSRGBBuffer = !1
        }
        if (QQ.generateMipMaps) {
          const oQ = QQ._hardwareTexture;
          oQ.memoryAllocated || (kQ.texStorage2D(QQ.isCube ? kQ.TEXTURE_CUBE_MAP : kQ.TEXTURE_2D, Math.floor(Math.log2(Math.max(wQ, LQ))) + 1, FQ, QQ.width, QQ.height), oQ.memoryAllocated = !0), this._gl.compressedTexSubImage2D(vQ, DQ, 0, 0, wQ, LQ, FQ, qQ)
        } else this._gl.compressedTexImage2D(vQ, DQ, FQ, wQ, LQ, 0, qQ)
      }
      _uploadDataToTextureDirectly(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const DQ = this._gl,
          kQ = this._getWebGLTextureType(QQ.type),
          vQ = this._getInternalFormat(QQ.format),
          mQ = void 0 === qQ ? this._getRGBABufferInternalSizedFormat(QQ.type, QQ.format, QQ._useSRGBBuffer) : this._getInternalFormat(qQ, QQ._useSRGBBuffer);
        this._unpackFlipY(QQ.invertY);
        let uQ = DQ.TEXTURE_2D;
        QQ.isCube && (uQ = DQ.TEXTURE_CUBE_MAP_POSITIVE_X + wQ);
        const HQ = Math.round(Math.log(QQ.width) * Math.LOG2E),
          bQ = Math.round(Math.log(QQ.height) * Math.LOG2E),
          YQ = oQ ? QQ.width : Math.pow(2, Math.max(HQ - LQ, 0)),
          xQ = oQ ? QQ.height : Math.pow(2, Math.max(bQ - LQ, 0));
        DQ.texImage2D(uQ, LQ, mQ, YQ, xQ, 0, vQ, kQ, FQ)
      }
      updateTextureData(QQ, FQ, wQ, LQ, qQ, oQ) {
        let DQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          kQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          vQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const mQ = this._gl,
          uQ = this._getWebGLTextureType(QQ.type),
          HQ = this._getInternalFormat(QQ.format);
        this._unpackFlipY(QQ.invertY);
        let bQ = mQ.TEXTURE_2D,
          YQ = mQ.TEXTURE_2D;
        QQ.isCube && (YQ = mQ.TEXTURE_CUBE_MAP_POSITIVE_X + DQ, bQ = mQ.TEXTURE_CUBE_MAP), this._bindTextureDirectly(bQ, QQ, !0), mQ.texSubImage2D(YQ, kQ, wQ, LQ, qQ, oQ, HQ, uQ, FQ), vQ && this._gl.generateMipmap(YQ), this._bindTextureDirectly(bQ, null)
      }
      _uploadArrayBufferViewToTexture(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const qQ = this._gl,
          oQ = QQ.isCube ? qQ.TEXTURE_CUBE_MAP : qQ.TEXTURE_2D;
        this._bindTextureDirectly(oQ, QQ, !0), this._uploadDataToTextureDirectly(QQ, FQ, wQ, LQ), this._bindTextureDirectly(oQ, null, !0)
      }
      _prepareWebGLTextureContinuation(QQ, FQ, wQ, LQ, qQ) {
        const oQ = this._gl;
        if (!oQ) return;
        const DQ = this._getSamplingParameters(qQ, !wQ);
        oQ.texParameteri(oQ.TEXTURE_2D, oQ.TEXTURE_MAG_FILTER, DQ.mag), oQ.texParameteri(oQ.TEXTURE_2D, oQ.TEXTURE_MIN_FILTER, DQ.min), wQ || LQ || oQ.generateMipmap(oQ.TEXTURE_2D), this._bindTextureDirectly(oQ.TEXTURE_2D, null), FQ && FQ.removePendingData(QQ), QQ.onLoadedObservable.notifyObservers(QQ), QQ.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) {
        const uQ = this.getCaps().maxTextureSize,
          HQ = Math.min(uQ, this.needPOTTextures ? (0, YQ.e)(LQ.width, uQ) : LQ.width),
          bQ = Math.min(uQ, this.needPOTTextures ? (0, YQ.e)(LQ.height, uQ) : LQ.height),
          xQ = this._gl;
        xQ && (QQ._hardwareTexture ? (this._bindTextureDirectly(xQ.TEXTURE_2D, QQ, !0), this._unpackFlipY(void 0 === qQ || !!qQ), QQ.baseWidth = LQ.width, QQ.baseHeight = LQ.height, QQ.width = HQ, QQ.height = bQ, QQ.isReady = !0, QQ.type = -1 !== QQ.type ? QQ.type : 0, QQ.format = -1 !== QQ.format ? QQ.format : mQ ?? (".jpg" !== FQ || QQ._useSRGBBuffer ? 5 : 4), kQ(HQ, bQ, LQ, FQ, QQ, (() => {
          this._prepareWebGLTextureContinuation(QQ, wQ, oQ, DQ, vQ)
        })) || this._prepareWebGLTextureContinuation(QQ, wQ, oQ, DQ, vQ)) : wQ && wQ.removePendingData(QQ))
      }
      _getInternalFormatFromDepthTextureFormat(QQ, FQ, wQ) {
        const LQ = this._gl;
        if (!FQ) return LQ.STENCIL_INDEX8;
        let qQ = wQ ? LQ.DEPTH_STENCIL : LQ.DEPTH_COMPONENT;
        return this.oA > 1 ? 15 === QQ ? qQ = LQ.DEPTH_COMPONENT16 : 16 === QQ ? qQ = LQ.DEPTH_COMPONENT24 : 17 === QQ || 13 === QQ ? qQ = wQ ? LQ.DEPTH24_STENCIL8 : LQ.DEPTH_COMPONENT24 : 14 === QQ ? qQ = LQ.DEPTH_COMPONENT32F : 18 === QQ && (qQ = wQ ? LQ.DEPTH32F_STENCIL8 : LQ.DEPTH_COMPONENT32F) : qQ = LQ.DEPTH_COMPONENT16, qQ
      }
      _getWebGLTextureTypeFromDepthTextureFormat(QQ) {
        const FQ = this._gl;
        let wQ = FQ.UNSIGNED_INT;
        return 15 === QQ ? wQ = FQ.UNSIGNED_SHORT : 17 === QQ || 13 === QQ ? wQ = FQ.UNSIGNED_INT_24_8 : 14 === QQ ? wQ = FQ.FLOAT : 18 === QQ ? wQ = FQ.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === QQ && (wQ = FQ.UNSIGNED_BYTE), wQ
      }
      _setupFramebufferDepthAttachments(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          oQ = arguments.length > 5 ? arguments[5] : void 0,
          DQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const kQ = this._gl;
        oQ = oQ ?? (QQ ? 13 : 14);
        const vQ = this._getInternalFormatFromDepthTextureFormat(oQ, FQ, QQ);
        return QQ && FQ ? this._createRenderBuffer(wQ, LQ, qQ, kQ.DEPTH_STENCIL, vQ, DQ ? -1 : kQ.DEPTH_STENCIL_ATTACHMENT) : FQ ? this._createRenderBuffer(wQ, LQ, qQ, vQ, vQ, DQ ? -1 : kQ.DEPTH_ATTACHMENT) : QQ ? this._createRenderBuffer(wQ, LQ, qQ, vQ, vQ, DQ ? -1 : kQ.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(QQ, FQ, wQ, LQ, qQ, oQ) {
        let DQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const kQ = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(kQ, QQ, FQ, wQ, LQ, qQ, oQ, DQ)
      }
      _updateRenderBuffer(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        let kQ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const vQ = this._gl;
        return vQ.bindRenderbuffer(vQ.RENDERBUFFER, QQ), LQ > 1 && vQ.renderbufferStorageMultisample ? vQ.renderbufferStorageMultisample(vQ.RENDERBUFFER, LQ, oQ, FQ, wQ) : vQ.renderbufferStorage(vQ.RENDERBUFFER, qQ, FQ, wQ), -1 !== DQ && vQ.framebufferRenderbuffer(vQ.FRAMEBUFFER, DQ, vQ.RENDERBUFFER, QQ), kQ && vQ.bindRenderbuffer(vQ.RENDERBUFFER, null), QQ
      }
      _releaseTexture(QQ) {
        this._deleteTexture(QQ._hardwareTexture), this.unbindAllTextures();
        const FQ = this._internalTexturesCache.indexOf(QQ); - 1 !== FQ && this._internalTexturesCache.splice(FQ, 1), QQ._lodTextureHigh && QQ._lodTextureHigh.dispose(), QQ._lodTextureMid && QQ._lodTextureMid.dispose(), QQ._lodTextureLow && QQ._lodTextureLow.dispose(), QQ._irradianceTexture && QQ._irradianceTexture.dispose()
      }
      _deleteTexture(QQ) {
        QQ?.release()
      }
      _setProgram(QQ) {
        this._currentProgram !== QQ && ((0, qQ.o)(QQ, this._gl), this._currentProgram = QQ)
      }
      bindSamplers(QQ) {
        const FQ = QQ.getPipelineContext();
        this._setProgram(FQ.program);
        const wQ = QQ.getSamplers();
        for (let LQ = 0; LQ < wQ.length; LQ++) {
          const FQ = QQ.getUniform(wQ[LQ]);
          FQ && (this._boundUniforms[LQ] = FQ)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qQ = !1;
        const oQ = FQ && FQ._associatedChannel > -1;
        wQ && oQ && (this._activeChannel = FQ._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== FQ || LQ) {
          if (this._activateCurrentTexture(), FQ && FQ.isMultiview) throw kQ.c.Error(["_bindTextureDirectly called with a multiview texture!", QQ, FQ]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(QQ, FQ?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = FQ, FQ && (FQ._associatedChannel = this._activeChannel)
        } else wQ && (qQ = !0, this._activateCurrentTexture());
        return oQ && !wQ && this._bindSamplerUniformToChannel(FQ._associatedChannel, this._activeChannel), qQ
      }
      _bindTexture(QQ, FQ, wQ) {
        if (void 0 === QQ) return;
        FQ && (FQ._associatedChannel = QQ), this._activeChannel = QQ;
        const LQ = FQ ? this._getTextureTarget(FQ) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(LQ, FQ)
      }
      unbindAllTextures() {
        for (let QQ = 0; QQ < this._maxSimultaneousTextures; QQ++) this._activeChannel = QQ, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.oA > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(QQ, FQ, wQ, LQ) {
        void 0 !== QQ && (FQ && (this._boundUniforms[QQ] = FQ), this._setTexture(QQ, wQ))
      }
      _bindSamplerUniformToChannel(QQ, FQ) {
        const wQ = this._boundUniforms[QQ];
        wQ && wQ._currentState !== FQ && (this._gl.uniform1i(wQ, FQ), wQ._currentState = FQ)
      }
      _getTextureWrapMode(QQ) {
        switch (QQ) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(QQ, FQ) {
        let wQ, LQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!FQ) return null != this._boundTexturesCache[QQ] && (this._activeChannel = QQ, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.oA > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (FQ.video) {
          this._activeChannel = QQ;
          const wQ = FQ.getInternalTexture();
          wQ && (wQ._associatedChannel = QQ), FQ.update()
        } else if (4 === FQ.delayLoadState) return FQ.delayLoad(), !1;
        wQ = qQ ? FQ.depthStencilTexture : FQ.isReady() ? FQ.getInternalTexture() : FQ.isCube ? this.emptyCubeTexture : FQ.is3D ? this.emptyTexture3D : FQ.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !LQ && wQ && (wQ._associatedChannel = QQ);
        let oQ = !0;
        this._boundTexturesCache[QQ] === wQ && (LQ || this._bindSamplerUniformToChannel(wQ._associatedChannel, QQ), oQ = !1), this._activeChannel = QQ;
        const DQ = this._getTextureTarget(wQ);
        if (oQ && this._bindTextureDirectly(DQ, wQ, LQ), wQ && !wQ.isMultiview) {
          if (wQ.isCube && wQ._cachedCoordinatesMode !== FQ.coordinatesMode) {
            wQ._cachedCoordinatesMode = FQ.coordinatesMode;
            const QQ = 3 !== FQ.coordinatesMode && 5 !== FQ.coordinatesMode ? 1 : 0;
            FQ.wrapU = QQ, FQ.wrapV = QQ
          }
          wQ._cachedWrapU !== FQ.wrapU && (wQ._cachedWrapU = FQ.wrapU, this._setTextureParameterInteger(DQ, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(FQ.wrapU), wQ)), wQ._cachedWrapV !== FQ.wrapV && (wQ._cachedWrapV = FQ.wrapV, this._setTextureParameterInteger(DQ, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(FQ.wrapV), wQ)), wQ.is3D && wQ._cachedWrapR !== FQ.wrapR && (wQ._cachedWrapR = FQ.wrapR, this._setTextureParameterInteger(DQ, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(FQ.wrapR), wQ)), this._setAnisotropicLevel(DQ, wQ, FQ.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(QQ, FQ, wQ, LQ) {
        if (void 0 !== QQ && FQ) {
          this._textureUnits && this._textureUnits.length === wQ.length || (this._textureUnits = new Int32Array(wQ.length));
          for (let FQ = 0; FQ < wQ.length; FQ++) {
            const LQ = wQ[FQ].getInternalTexture();
            LQ ? (this._textureUnits[FQ] = QQ + FQ, LQ._associatedChannel = QQ + FQ) : this._textureUnits[FQ] = -1
          }
          this._gl.uniform1iv(FQ, this._textureUnits);
          for (let QQ = 0; QQ < wQ.length; QQ++) this._setTexture(this._textureUnits[QQ], wQ[QQ], !0)
        }
      }
      _setAnisotropicLevel(QQ, FQ, wQ) {
        const LQ = this._caps.textureAnisotropicFilterExtension;
        11 !== FQ.samplingMode && 3 !== FQ.samplingMode && 2 !== FQ.samplingMode && (wQ = 1), LQ && FQ._cachedAnisotropicFilteringLevel !== wQ && (this._setTextureParameterFloat(QQ, LQ.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(wQ, this._caps.maxAnisotropy), FQ), FQ._cachedAnisotropicFilteringLevel = wQ)
      }
      _setTextureParameterFloat(QQ, FQ, wQ, LQ) {
        this._bindTextureDirectly(QQ, LQ, !0, !0), this._gl.texParameterf(QQ, FQ, wQ)
      }
      _setTextureParameterInteger(QQ, FQ, wQ, LQ) {
        LQ && this._bindTextureDirectly(QQ, LQ, !0, !0), this._gl.texParameteri(QQ, FQ, wQ)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let QQ = 0; QQ < this._caps.maxVertexAttribs; QQ++) this.disableAttributeByIndex(QQ)
        } else
          for (let QQ = 0, FQ = this._vertexAttribArraysEnabled.length; QQ < FQ; QQ++) QQ >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[QQ] || this.disableAttributeByIndex(QQ)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, vQ.g)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, qQ.B)(this._gl)
      }
      attachContextLostEvent(QQ) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", QQ, !1)
      }
      attachContextRestoredEvent(QQ) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", QQ, !1)
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
      _canRenderToFramebuffer(QQ) {
        const FQ = this._gl;
        for (; FQ.getError() !== FQ.NO_ERROR;);
        let wQ = !0;
        const LQ = FQ.createTexture();
        FQ.bindTexture(FQ.TEXTURE_2D, LQ), FQ.texImage2D(FQ.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(QQ), 1, 1, 0, FQ.RGBA, this._getWebGLTextureType(QQ), null), FQ.texParameteri(FQ.TEXTURE_2D, FQ.TEXTURE_MIN_FILTER, FQ.NEAREST), FQ.texParameteri(FQ.TEXTURE_2D, FQ.TEXTURE_MAG_FILTER, FQ.NEAREST);
        const qQ = FQ.createFramebuffer();
        FQ.bindFramebuffer(FQ.FRAMEBUFFER, qQ), FQ.framebufferTexture2D(FQ.FRAMEBUFFER, FQ.COLOR_ATTACHMENT0, FQ.TEXTURE_2D, LQ, 0);
        const oQ = FQ.checkFramebufferStatus(FQ.FRAMEBUFFER);
        if (wQ = wQ && oQ === FQ.FRAMEBUFFER_COMPLETE, wQ = wQ && FQ.getError() === FQ.NO_ERROR, wQ && (FQ.clear(FQ.COLOR_BUFFER_BIT), wQ = wQ && FQ.getError() === FQ.NO_ERROR), wQ) {
          FQ.bindFramebuffer(FQ.FRAMEBUFFER, null);
          const QQ = FQ.RGBA,
            LQ = FQ.UNSIGNED_BYTE,
            qQ = new Uint8Array(4);
          FQ.readPixels(0, 0, 1, 1, QQ, LQ, qQ), wQ = wQ && FQ.getError() === FQ.NO_ERROR
        }
        for (FQ.deleteTexture(LQ), FQ.deleteFramebuffer(qQ), FQ.bindFramebuffer(FQ.FRAMEBUFFER, null); !wQ && FQ.getError() !== FQ.NO_ERROR;);
        return wQ
      }
      _getWebGLTextureType(QQ) {
        if (1 === this._webGLVersion) {
          switch (QQ) {
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
        switch (QQ) {
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
      _getInternalFormat(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = FQ ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (QQ) {
          case 0:
            wQ = this._gl.ALPHA;
            break;
          case 1:
            wQ = this._gl.LUMINANCE;
            break;
          case 2:
            wQ = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            wQ = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            wQ = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            wQ = FQ ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            wQ = FQ ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (QQ) {
          case 8:
            wQ = this._gl.RED_INTEGER;
            break;
          case 9:
            wQ = this._gl.RG_INTEGER;
            break;
          case 10:
            wQ = this._gl.RGB_INTEGER;
            break;
          case 11:
            wQ = this._gl.RGBA_INTEGER
        }
        return wQ
      }
      _getRGBABufferInternalSizedFormat(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== FQ) switch (FQ) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return wQ ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (QQ) {
          case 3:
            switch (FQ) {
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
            switch (FQ) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return wQ ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return wQ ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (FQ) {
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
            switch (FQ) {
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
            switch (FQ) {
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
            switch (FQ) {
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
            switch (FQ) {
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
            switch (FQ) {
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
            switch (FQ) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return wQ ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(QQ, FQ, wQ, LQ) {
        let qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          oQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          DQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const vQ = qQ ? 4 : 3,
          mQ = qQ ? this._gl.RGBA : this._gl.RGB,
          uQ = wQ * LQ * vQ;
        if (DQ) {
          if (DQ.length < uQ) return kQ.c.Error(`Data buffer is too small to store the read pixels (${DQ.length} should be more than ${uQ})`), Promise.resolve(DQ)
        } else DQ = new Uint8Array(uQ);
        return oQ && this.flushFramebuffer(), this._gl.readPixels(QQ, FQ, wQ, LQ, mQ, this._gl.UNSIGNED_BYTE, DQ), Promise.resolve(DQ)
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
          const QQ = oQ.e._CreateCanvas(1, 1),
            FQ = QQ.getContext("webgl") || QQ.getContext("experimental-webgl");
          this._IsSupported = null != FQ && !!globalThis.WebGLRenderingContext
        } catch (QQ) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const QQ = oQ.e._CreateCanvas(1, 1),
            FQ = QQ.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || QQ.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !FQ
        } catch (QQ) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    cQ._TempClearColorUint32 = new Uint32Array(4), cQ._TempClearColorInt32 = new Int32Array(4), cQ._TempClearColorFloat32 = new Float32Array(4), cQ.ExceptionList = [{
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
    }], cQ._ConcatenateShader = tQ.g, cQ._IsSupported = null, cQ._HasMajorPerformanceCaveat = null
  },
  39610: (QQ, FQ, wQ) => {
    var LQ;
    wQ.d(FQ, {
        c: () => qQ
      }),
      function(QQ) {
        QQ[QQ.PointerMove = 0] = "PointerMove", QQ[QQ.PointerDown = 1] = "PointerDown", QQ[QQ.PointerUp = 2] = "PointerUp"
      }(LQ || (LQ = {}));
    class qQ {}
    qQ.DOM_DELTA_PIXEL = 0, qQ.DOM_DELTA_LINE = 1, qQ.DOM_DELTA_PAGE = 2
  },
  39601: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ,
      g: () => oQ,
      k: () => qQ
    });
    class LQ {}
    LQ.KEYDOWN = 1, LQ.KEYUP = 2;
    class qQ {
      constructor(QQ, FQ) {
        this.type = QQ, this.event = FQ
      }
    }
    class oQ extends qQ {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(QQ) {
        this.skipOnKeyboardObservable = QQ
      }
      constructor(QQ, FQ) {
        super(QQ, FQ), this.type = QQ, this.event = FQ, this.skipOnKeyboardObservable = !1
      }
    }
  },
  39595: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ,
      i: () => DQ,
      j: () => kQ
    });
    var LQ = wQ(36696);
    class qQ {}
    qQ.POINTERDOWN = 1, qQ.POINTERUP = 2, qQ.POINTERMOVE = 4, qQ.POINTERWHEEL = 8, qQ.POINTERPICK = 16, qQ.POINTERTAP = 32, qQ.POINTERDOUBLETAP = 64;
    class oQ {
      constructor(QQ, FQ) {
        this.type = QQ, this.event = FQ
      }
    }
    class DQ extends oQ {
      constructor(QQ, FQ, wQ, qQ) {
        super(QQ, FQ), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new LQ.n(wQ, qQ)
      }
    }
    class kQ extends oQ {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(QQ, FQ), this._pickInfo = wQ, this._inputManager = LQ
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  39623: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      static CompareLightsPriority(QQ, FQ) {
        return QQ.shadowEnabled !== FQ.shadowEnabled ? (FQ.shadowEnabled ? 1 : 0) - (QQ.shadowEnabled ? 1 : 0) : FQ.renderPriority - QQ.renderPriority
      }
    }
    LQ.FALLOFF_DEFAULT = 0, LQ.FALLOFF_PHYSICAL = 1, LQ.FALLOFF_GLTF = 2, LQ.FALLOFF_STANDARD = 3, LQ.LIGHTMAP_DEFAULT = 0, LQ.LIGHTMAP_SPECULAR = 1, LQ.LIGHTMAP_SHADOWSONLY = 2, LQ.INTENSITYMODE_AUTOMATIC = 0, LQ.INTENSITYMODE_LUMINOUSPOWER = 1, LQ.INTENSITYMODE_LUMINOUSINTENSITY = 2, LQ.INTENSITYMODE_ILLUMINANCE = 3, LQ.INTENSITYMODE_LUMINANCE = 4, LQ.LIGHTTYPEID_POINTLIGHT = 0, LQ.LIGHTTYPEID_DIRECTIONALLIGHT = 1, LQ.LIGHTTYPEID_SPOTLIGHT = 2, LQ.LIGHTTYPEID_HEMISPHERICLIGHT = 3, LQ.LIGHTTYPEID_RECT_AREALIGHT = 4, LQ.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39226: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => DQ
    });
    var LQ, qQ = wQ(36722),
      oQ = wQ(39233);
    ! function(QQ) {
      QQ[QQ.Unknown = 0] = "Unknown", QQ[QQ.Url = 1] = "Url", QQ[QQ.Temp = 2] = "Temp", QQ[QQ.Raw = 3] = "Raw", QQ[QQ.Dynamic = 4] = "Dynamic", QQ[QQ.RenderTarget = 5] = "RenderTarget", QQ[QQ.MultiRenderTarget = 6] = "MultiRenderTarget", QQ[QQ.Cube = 7] = "Cube", QQ[QQ.CubeRaw = 8] = "CubeRaw", QQ[QQ.CubePrefiltered = 9] = "CubePrefiltered", QQ[QQ.Raw3D = 10] = "Raw3D", QQ[QQ.Raw2DArray = 11] = "Raw2DArray", QQ[QQ.DepthStencil = 12] = "DepthStencil", QQ[QQ.CubeRawRGBD = 13] = "CubeRawRGBD", QQ[QQ.Depth = 14] = "Depth", QQ[QQ.External = 15] = "External"
    }(LQ || (LQ = {}));
    class DQ extends oQ.b {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(QQ) {
        this._useMipMaps = QQ
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(QQ) {
        this._uniqueId = QQ
      }
      Wx() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new qQ.e, this.onErrorObservable = new qQ.e, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = QQ, this._source = FQ, this._uniqueId = DQ._Counter++, wQ || (this._hardwareTexture = QQ._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, QQ, FQ, wQ), this.width = QQ, this.height = FQ, this.depth = wQ, this.baseWidth = QQ, this.baseHeight = FQ, this.baseDepth = wQ, this._size = QQ * FQ * wQ
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const QQ = this.onRebuildCallback(this),
            FQ = FQ => {
              FQ._swapAndDie(this, !1), this.isReady = QQ.isReady
            };
          return void(QQ.isAsync ? QQ.proxy.then(FQ) : FQ(QQ.proxy))
        }
        let QQ;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(QQ = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (QQ => {
              QQ._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (QQ = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), QQ._swapAndDie(this, !1), this._bufferViewArray)
              for (let QQ = 0; QQ < this._bufferViewArray.length; QQ++) {
                const FQ = this._bufferViewArray[QQ];
                FQ && this._engine.updateRawTexture(this, FQ, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, QQ)
              }
            this.isReady = !0;
            break;
          case 10:
            QQ = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), QQ._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (QQ = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), QQ._swapAndDie(this, !1), this._bufferViewArray)
              for (let QQ = 0; QQ < this._bufferViewArray.length; QQ++) {
                const FQ = this._bufferViewArray[QQ];
                FQ && this._engine.updateRawTexture2DArray(this, FQ, this.format, this.invertY, this._compression, this.type, QQ)
              }
            this.isReady = !0;
            break;
          case 4:
            QQ = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), QQ._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(QQ = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              QQ._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            QQ = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), QQ._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return QQ = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (QQ => {
              QQ && QQ._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(QQ._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(QQ._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), QQ._hardwareTexture = this._hardwareTexture, QQ._setUniqueId(DQ._Counter++), FQ && (QQ._isRGBD = this._isRGBD), this._lodTextureHigh && (QQ._lodTextureHigh && QQ._lodTextureHigh.dispose(), QQ._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (QQ._lodTextureMid && QQ._lodTextureMid.dispose(), QQ._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (QQ._lodTextureLow && QQ._lodTextureLow.dispose(), QQ._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (QQ._irradianceTexture && QQ._irradianceTexture.dispose(), QQ._irradianceTexture = this._irradianceTexture);
        const wQ = this._engine.getLoadedTexturesCache();
        let LQ = wQ.indexOf(this); - 1 !== LQ && wQ.splice(LQ, 1), LQ = wQ.indexOf(QQ), -1 === LQ && wQ.push(QQ)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    DQ._Counter = 0
  },
  39346: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return 13 === QQ || 14 === QQ || 15 === QQ || 16 === QQ || 17 === QQ || 18 === QQ || 19 === QQ
    }

    function qQ(QQ) {
      return 8 === QQ || 9 === QQ || 10 === QQ || 11 === QQ
    }

    function oQ(QQ) {
      return 0 === QQ || 5 === QQ || 7 === QQ || 11 === QQ
    }

    function DQ(QQ) {
      return 13 === QQ || 17 === QQ || 18 === QQ || 19 === QQ
    }
    wQ.d(FQ, {
      c: () => DQ,
      e: () => LQ,
      g: () => qQ,
      j: () => oQ
    })
  },
  39233: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ
    });
    class LQ {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(QQ) {
        this._cachedWrapU = QQ
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(QQ) {
        this._cachedWrapV = QQ
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(QQ) {
        this._cachedWrapR = QQ
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(QQ) {
        this._cachedAnisotropicFilteringLevel = QQ
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(QQ) {
        this._comparisonFunction = QQ
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(QQ) {
        this._useMipMaps = QQ
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = QQ, this._cachedWrapV = FQ, this._cachedWrapR = wQ, this._cachedAnisotropicFilteringLevel = LQ, this.samplingMode = qQ, this._comparisonFunction = oQ, this
      }
      compareSampler(QQ) {
        return this._cachedWrapU === QQ._cachedWrapU && this._cachedWrapV === QQ._cachedWrapV && this._cachedWrapR === QQ._cachedWrapR && this._cachedAnisotropicFilteringLevel === QQ._cachedAnisotropicFilteringLevel && this.samplingMode === QQ.samplingMode && this._comparisonFunction === QQ._comparisonFunction && this._useMipMaps === QQ._useMipMaps
      }
    }
  },
  39535: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      QQ.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    wQ.d(FQ, {
      b: () => LQ
    })
  },
  39317: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return void 0 === QQ.getPipelineContext
    }
    wQ.d(FQ, {
      d: () => LQ
    })
  },
  39748: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ
    });
    var LQ = wQ(39289);
    class qQ {
      static GetEffect(QQ) {
        return void 0 === QQ.getPipelineContext ? QQ.effect : QQ
      }
      constructor(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = QQ.createDrawContext(), FQ && (this.materialContext = QQ.createMaterialContext())
      }
      setEffect(QQ, FQ) {
        let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        wQ || this.effect === QQ || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = QQ, void 0 !== FQ && (this.defines = FQ), wQ && this.drawContext?.reset()
      }
      dispose() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const FQ = this.effect;
          QQ ? FQ.dispose() : LQ.d.SetImmediate((() => {
            FQ.Wx().onEndFrameObservable.addOnce((() => {
              FQ.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39258: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => HQ,
      f: () => YQ,
      j: () => mQ,
      m: () => uQ
    });
    var LQ = wQ(39264),
      qQ = wQ(39269),
      oQ = wQ(39251),
      DQ = wQ(38203),
      kQ = wQ(39282),
      vQ = wQ(39274);

    function mQ(QQ, FQ) {
      return (0, qQ.D)(FQ).cachedPipelines[QQ]
    }

    function uQ(QQ) {
      const FQ = QQ._name,
        wQ = QQ.context;
      if (FQ && wQ) {
        const QQ = (0, qQ.D)(wQ),
          LQ = QQ.cachedPipelines[FQ];
        LQ?.dispose(), delete QQ.cachedPipelines[FQ]
      }
    }

    function HQ(QQ, FQ, wQ, qQ, oQ, DQ, vQ) {
      let mQ, uQ;
      const HQ = (0, LQ.g)() ? DQ?.getHostDocument() : null;
      mQ = "string" === typeof FQ ? FQ : "string" === typeof FQ.vertexSource ? "source:" + FQ.vertexSource : "string" === typeof FQ.vertexElement ? HQ?.getElementById(FQ.vertexElement) || FQ.vertexElement : FQ.vertex || FQ, uQ = "string" === typeof FQ ? FQ : "string" === typeof FQ.fragmentSource ? "source:" + FQ.fragmentSource : "string" === typeof FQ.fragmentElement ? HQ?.getElementById(FQ.fragmentElement) || FQ.fragmentElement : FQ.fragment || FQ;
      const YQ = [void 0, void 0],
        xQ = () => {
          if (YQ[0] && YQ[1]) {
            const [LQ, mQ] = YQ;
            (0, kQ.f)(QQ), (0, kQ.i)(LQ, QQ, ((LQ, uQ) => {
              vQ && (vQ._vertexSourceCodeBeforeMigration = uQ), wQ && (LQ = wQ("vertex", LQ)), QQ.isFragment = !0, (0, kQ.i)(mQ, QQ, ((DQ, mQ) => {
                vQ && (vQ._fragmentSourceCodeBeforeMigration = mQ), wQ && (DQ = wQ("fragment", DQ));
                const uQ = (0, kQ.c)(LQ, DQ, QQ);
                QQ = null;
                const HQ = function(QQ, FQ, wQ, LQ) {
                  if (wQ) {
                    return {
                      vertexSourceCode: (1 === LQ ? "//" : "") + "#define SHADER_NAME vertex:" + (wQ.vertexElement || wQ.vertex || wQ.spectorName || wQ) + "\n" + QQ,
                      fragmentSourceCode: (1 === LQ ? "//" : "") + "#define SHADER_NAME fragment:" + (wQ.fragmentElement || wQ.fragment || wQ.spectorName || wQ) + "\n" + FQ
                    }
                  }
                  return {
                    vertexSourceCode: QQ,
                    fragmentSourceCode: FQ
                  }
                }(uQ.vertexCode, uQ.fragmentCode, FQ, oQ);
                qQ?.(HQ.vertexSourceCode, HQ.fragmentSourceCode)
              }), DQ)
            }), DQ)
          }
        };
      bQ(mQ, "Vertex", "", (QQ => {
        vQ && (vQ._rawVertexSourceCode = QQ), YQ[0] = QQ, xQ()
      }), oQ), bQ(uQ, "Fragment", "Pixel", (QQ => {
        vQ && (vQ._rawFragmentSourceCode = QQ), YQ[1] = QQ, xQ()
      }), oQ)
    }

    function bQ(QQ, FQ, wQ, qQ, DQ, kQ) {
      if ("undefined" !== typeof HTMLElement && QQ instanceof HTMLElement) {
        return void qQ((0, LQ.b)(QQ))
      }
      if ("source:" === QQ.substring(0, 7)) return void qQ(QQ.substring(7));
      if ("base64:" === QQ.substring(0, 7)) {
        return void qQ(window.atob(QQ.substring(7)))
      }
      const mQ = oQ.c.GetShadersStore(DQ);
      if (mQ[QQ + FQ + "Shader"]) return void qQ(mQ[QQ + FQ + "Shader"]);
      if (wQ && mQ[QQ + wQ + "Shader"]) return void qQ(mQ[QQ + wQ + "Shader"]);
      let uQ;
      if (uQ = "." === QQ[0] || "/" === QQ[0] || QQ.indexOf("http") > -1 ? QQ : oQ.c.GetShadersRepository(DQ) + QQ, !(kQ = kQ || vQ.k)) throw new Error("loadFileInjection is not defined");
      kQ(uQ + "." + FQ.toLowerCase() + ".fx", qQ)
    }
    const YQ = (QQ, FQ, wQ, LQ) => {
      try {
        const oQ = QQ.context ? (0, qQ.D)(QQ.context) : null;
        oQ && (oQ.disableParallelShaderCompile = QQ.disableParallelCompilation);
        const DQ = QQ.existingPipelineContext || FQ(QQ.shaderProcessingContext);
        return DQ._name = QQ.name, QQ.name && oQ && (oQ.cachedPipelines[QQ.name] = DQ), wQ(DQ, QQ.vertex, QQ.fragment, !!QQ.createAsRaw, "", "", QQ.rebuildRebind, QQ.defines, QQ.transformFeedbackVaryings, "", (() => {
          LQ(DQ, (() => {
            QQ.onRenderingStateCompiled?.(DQ)
          }))
        })), DQ
      } catch (oQ) {
        throw DQ.c.Error("Error compiling effect"), oQ
      }
    }
  },
  39243: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => vQ
    });
    var LQ = wQ(36722),
      qQ = wQ(38203),
      oQ = wQ(39251),
      DQ = wQ(39258),
      kQ = wQ(39289);
    class vQ {
      static get ShadersRepository() {
        return oQ.c.ShadersRepository
      }
      static set ShadersRepository(QQ) {
        oQ.c.ShadersRepository = QQ
      }
      get vW() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new LQ.e), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(QQ, FQ, wQ) {
        let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          oQ = arguments.length > 4 ? arguments[4] : void 0,
          kQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          mQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          uQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          HQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          bQ = arguments.length > 9 ? arguments[9] : void 0,
          YQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          xQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          AQ = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new LQ.e, this.onErrorObservable = new LQ.e, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = QQ, this._key = YQ;
        const tQ = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let eQ;
        if (FQ.attributes) {
          const QQ = FQ;
          if (this._engine = wQ, this._attributesNames = QQ.attributes, this._uniformsNames = QQ.uniformsNames.concat(QQ.samplers), this._samplerList = QQ.samplers.slice(), this.defines = QQ.defines, this.onError = QQ.onError, this.onCompiled = QQ.onCompiled, this._fallbacks = QQ.fallbacks, this._indexParameters = QQ.indexParameters, this._transformFeedbackVaryings = QQ.transformFeedbackVaryings || null, this._multiTarget = !!QQ.multiTarget, this._shaderLanguage = QQ.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!QQ.disableParallelShaderCompilation, QQ.uniformBuffersNames) {
            this._uniformBuffersNamesList = QQ.uniformBuffersNames.slice();
            for (let FQ = 0; FQ < QQ.uniformBuffersNames.length; FQ++) this._uniformBuffersNames[QQ.uniformBuffersNames[FQ]] = FQ
          }
          this._processFinalCode = QQ.processFinalCode ?? null, this._processCodeAfterIncludes = QQ.processCodeAfterIncludes ?? void 0, AQ = QQ.extraInitializationsAsync, eQ = QQ.existingPipelineContext
        } else this._engine = oQ, this.defines = null == kQ ? "" : kQ, this._uniformsNames = wQ.concat(qQ), this._samplerList = qQ ? qQ.slice() : [], this._attributesNames = FQ, this._uniformBuffersNamesList = [], this._shaderLanguage = xQ, this.onError = HQ, this.onCompiled = uQ, this._indexParameters = bQ, this._fallbacks = mQ;
        "WEBGL2" === this._engine.shaderPlatformName && (eQ = (0, DQ.j)(tQ, this._engine._gl) ?? eQ), this._attributeLocationByName = {}, this.uniqueId = vQ._UniqueIdSeed++, eQ ? (this._pipelineContext = eQ, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, AQ).catch((QQ => {
          const FQ = QQ?.message ?? String(QQ),
            wQ = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${FQ}`);
          QQ && "string" === typeof QQ.stack && (wQ.stack = `${wQ.message}\nCaused by: ${QQ.stack}`), this._processCompilationErrors(wQ)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.vW || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          LQ = arguments.length > 3 ? arguments[3] : void 0;
        LQ && await LQ(), this._processingContext = wQ || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const qQ = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: QQ ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: oQ.c.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: oQ.c.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          SLQ: this._engine.SLQ,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, DQ.e)(qQ, this.name, this._processFinalCode, ((QQ, wQ) => {
          this._vertexSourceCode = QQ, this._fragmentSourceCode = wQ, this._prepareEffect(FQ)
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
        return !!this._engine.vW || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      Wx() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(QQ) {
        return this._attributes[QQ]
      }
      getAttributeLocationByName(QQ) {
        return this._attributeLocationByName[QQ]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(QQ) {
        return this._uniformsNames.indexOf(QQ)
      }
      getUniform(QQ) {
        return this._uniforms[QQ]
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
        return await new Promise((QQ => {
          this.executeWhenCompiled(QQ)
        }))
      }
      executeWhenCompiled(QQ) {
        this.isReady() ? QQ(this) : (this.onCompileObservable.add((FQ => {
          QQ(FQ)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(QQ) {
        (0, kQ.e)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (FQ => {
          this._processCompilationErrors(FQ, QQ)
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
            SLQ: this._engine.SLQ,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(QQ, FQ, wQ, LQ) {
        this._isReady = !1, this._vertexSourceCodeOverride = QQ, this._fragmentSourceCodeOverride = FQ, this.onError = (QQ, FQ) => {
          LQ && LQ(FQ)
        }, this.onCompiled = () => {
          const QQ = this.Wx().scenes;
          if (QQ)
            for (let FQ = 0; FQ < QQ.length; FQ++) QQ[FQ].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(wQ)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(QQ) {
        if (this._pipelineContext = QQ, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let FQ = 0; FQ < this._attributesNames.length; FQ++) {
            const QQ = this._attributesNames[FQ];
            this._attributeLocationByName[QQ] = this._attributes[FQ]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), vQ.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const FQ = this._pipelineContext;
        this._isReady = !1;
        try {
          const wQ = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            LQ = wQ ? null : this.defines,
            qQ = wQ ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            oQ = wQ ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            kQ = this._engine;
          this._pipelineContext = (0, DQ.f)({
            existingPipelineContext: QQ ? FQ : null,
            vertex: qQ,
            fragment: oQ,
            context: "WEBGL2" === kQ.shaderPlatformName || "WEBGL1" === kQ.shaderPlatformName ? kQ._gl : void 0,
            rebuildRebind: (QQ, FQ, wQ, LQ) => this._rebuildProgram(QQ, FQ, wQ, LQ),
            defines: LQ,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: wQ,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: wQ => {
              FQ && !QQ && this._engine._deletePipelineContext(FQ), wQ && this._onRenderingStateCompiled(wQ)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(FQ)
        } catch (wQ) {
          this._processCompilationErrors(wQ, FQ)
        }
      }
      _getShaderCodeAndErrorLine(QQ, FQ, wQ) {
        const LQ = wQ ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let qQ = null;
        if (FQ && QQ) {
          const oQ = FQ.match(LQ);
          if (oQ && 2 === oQ.length) {
            const FQ = parseInt(oQ[1]),
              LQ = QQ.split("\n", -1);
            LQ.length >= FQ && (qQ = `Offending line [${FQ}] in ${wQ?"fragment":"vertex"} code: ${LQ[FQ-1]}`)
          }
        }
        return [QQ, qQ]
      }
      _processCompilationErrors(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof QQ?.stack ? QQ.stack : QQ?.message ?? String(QQ);
        const wQ = this._attributesNames,
          LQ = this._fallbacks;
        if (qQ.c.Error("Unable to compile effect:"), qQ.c.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), qQ.c.Error(`Attributes: ${wQ.join(" ")}`), qQ.c.Error("Defines:\n" + this.defines), vQ.LogShaderCodeOnCompilationError) {
          let QQ, FQ = null,
            wQ = null;
          this._pipelineContext?._getVertexShaderCode() && ([QQ, FQ] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), QQ && (qQ.c.Error("Vertex code:"), qQ.c.Error(QQ))), this._pipelineContext?._getFragmentShaderCode() && ([QQ, wQ] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), QQ && (qQ.c.Error("Fragment code:"), qQ.c.Error(QQ))), FQ && qQ.c.Error(FQ), wQ && qQ.c.Error(wQ)
        }
        qQ.c.Error("Error: " + this._compilationError);
        const oQ = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        FQ && (this._pipelineContext = FQ, this._isReady = !0, oQ()), LQ ? (this._pipelineContext = null, LQ.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, qQ.c.Error("Trying next fallback."), this.defines = LQ.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, oQ(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, FQ || oQ())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(QQ, FQ) {
        this._engine._bindTexture(this._samplers[QQ], FQ, QQ)
      }
      setTexture(QQ, FQ) {
        this._engine.setTexture(this._samplers[QQ], this._uniforms[QQ], FQ, QQ)
      }
      setTextureArray(QQ, FQ) {
        const wQ = QQ + "Ex";
        if (-1 === this._samplerList.indexOf(wQ + "0")) {
          const LQ = this._samplerList.indexOf(QQ);
          for (let QQ = 1; QQ < FQ.length; QQ++) {
            const FQ = wQ + (QQ - 1).toString();
            this._samplerList.splice(LQ + QQ, 0, FQ)
          }
          let qQ = 0;
          for (const QQ of this._samplerList) this._samplers[QQ] = qQ, qQ += 1
        }
        this._engine.setTextureArray(this._samplers[QQ], this._uniforms[QQ], FQ, QQ)
      }
      bindUniformBuffer(QQ, FQ) {
        const wQ = this._uniformBuffersNames[FQ];
        void 0 === wQ || vQ._BaseCache[wQ] === QQ && this._engine._features.useUBOBindingCache || (vQ._BaseCache[wQ] = QQ, this._engine.bindUniformBufferBase(QQ, wQ, FQ))
      }
      bindUniformBlock(QQ, FQ) {
        this._engine.bindUniformBlock(this._pipelineContext, QQ, FQ)
      }
      setInt(QQ, FQ) {
        return this._pipelineContext.setInt(QQ, FQ), this
      }
      setInt2(QQ, FQ, wQ) {
        return this._pipelineContext.setInt2(QQ, FQ, wQ), this
      }
      setInt3(QQ, FQ, wQ, LQ) {
        return this._pipelineContext.setInt3(QQ, FQ, wQ, LQ), this
      }
      setInt4(QQ, FQ, wQ, LQ, qQ) {
        return this._pipelineContext.setInt4(QQ, FQ, wQ, LQ, qQ), this
      }
      setIntArray(QQ, FQ) {
        return this._pipelineContext.setIntArray(QQ, FQ), this
      }
      setIntArray2(QQ, FQ) {
        return this._pipelineContext.setIntArray2(QQ, FQ), this
      }
      setIntArray3(QQ, FQ) {
        return this._pipelineContext.setIntArray3(QQ, FQ), this
      }
      setIntArray4(QQ, FQ) {
        return this._pipelineContext.setIntArray4(QQ, FQ), this
      }
      setUInt(QQ, FQ) {
        return this._pipelineContext.setUInt(QQ, FQ), this
      }
      setUInt2(QQ, FQ, wQ) {
        return this._pipelineContext.setUInt2(QQ, FQ, wQ), this
      }
      setUInt3(QQ, FQ, wQ, LQ) {
        return this._pipelineContext.setUInt3(QQ, FQ, wQ, LQ), this
      }
      setUInt4(QQ, FQ, wQ, LQ, qQ) {
        return this._pipelineContext.setUInt4(QQ, FQ, wQ, LQ, qQ), this
      }
      setUIntArray(QQ, FQ) {
        return this._pipelineContext.setUIntArray(QQ, FQ), this
      }
      setUIntArray2(QQ, FQ) {
        return this._pipelineContext.setUIntArray2(QQ, FQ), this
      }
      setUIntArray3(QQ, FQ) {
        return this._pipelineContext.setUIntArray3(QQ, FQ), this
      }
      setUIntArray4(QQ, FQ) {
        return this._pipelineContext.setUIntArray4(QQ, FQ), this
      }
      setFloatArray(QQ, FQ) {
        return this._pipelineContext.setArray(QQ, FQ), this
      }
      setFloatArray2(QQ, FQ) {
        return this._pipelineContext.setArray2(QQ, FQ), this
      }
      setFloatArray3(QQ, FQ) {
        return this._pipelineContext.setArray3(QQ, FQ), this
      }
      setFloatArray4(QQ, FQ) {
        return this._pipelineContext.setArray4(QQ, FQ), this
      }
      setArray(QQ, FQ) {
        return this._pipelineContext.setArray(QQ, FQ), this
      }
      setArray2(QQ, FQ) {
        return this._pipelineContext.setArray2(QQ, FQ), this
      }
      setArray3(QQ, FQ) {
        return this._pipelineContext.setArray3(QQ, FQ), this
      }
      setArray4(QQ, FQ) {
        return this._pipelineContext.setArray4(QQ, FQ), this
      }
      setMatrices(QQ, FQ) {
        return this._pipelineContext.setMatrices(QQ, FQ), this
      }
      setMatrix(QQ, FQ) {
        return this._pipelineContext.setMatrix(QQ, FQ), this
      }
      setMatrix3x3(QQ, FQ) {
        return this._pipelineContext.setMatrix3x3(QQ, FQ), this
      }
      setMatrix2x2(QQ, FQ) {
        return this._pipelineContext.setMatrix2x2(QQ, FQ), this
      }
      setFloat(QQ, FQ) {
        return this._pipelineContext.setFloat(QQ, FQ), this
      }
      setBool(QQ, FQ) {
        return this._pipelineContext.setInt(QQ, FQ ? 1 : 0), this
      }
      setVector2(QQ, FQ) {
        return this._pipelineContext.setVector2(QQ, FQ), this
      }
      setFloat2(QQ, FQ, wQ) {
        return this._pipelineContext.setFloat2(QQ, FQ, wQ), this
      }
      setVector3(QQ, FQ) {
        return this._pipelineContext.setVector3(QQ, FQ), this
      }
      setFloat3(QQ, FQ, wQ, LQ) {
        return this._pipelineContext.setFloat3(QQ, FQ, wQ, LQ), this
      }
      setVector4(QQ, FQ) {
        return this._pipelineContext.setVector4(QQ, FQ), this
      }
      setQuaternion(QQ, FQ) {
        return this._pipelineContext.setQuaternion(QQ, FQ), this
      }
      setFloat4(QQ, FQ, wQ, LQ, qQ) {
        return this._pipelineContext.setFloat4(QQ, FQ, wQ, LQ, qQ), this
      }
      setColor3(QQ, FQ) {
        return this._pipelineContext.setColor3(QQ, FQ), this
      }
      setColor4(QQ, FQ, wQ) {
        return this._pipelineContext.setColor4(QQ, FQ, wQ), this
      }
      setDirectColor4(QQ, FQ) {
        return this._pipelineContext.setDirectColor4(QQ, FQ), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (vQ.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, DQ.m)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        FQ && (oQ.c.GetShadersStore(LQ)[`${QQ}PixelShader`] = FQ), wQ && (oQ.c.GetShadersStore(LQ)[`${QQ}VertexShader`] = wQ)
      }
      static ResetCache() {
        vQ._BaseCache = {}
      }
    }
    vQ.LogShaderCodeOnCompilationError = !0, vQ.PersistentMode = !1, vQ.AutomaticallyClearCodeCache = !1, vQ._UniqueIdSeed = 0, vQ._BaseCache = {}, vQ.ShadersStore = oQ.c.ShadersStore, vQ.IncludesShadersStore = oQ.c.IncludesShadersStore
  },
  39571: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => uQ,
      e: () => SQ,
      g: () => CQ
    });
    var LQ = wQ(39243),
      qQ = wQ(36696),
      oQ = wQ(36732),
      DQ = wQ(39550);
    const kQ = new qQ.c,
      vQ = new qQ.c,
      mQ = new qQ.c,
      uQ = {
        iN: () => {},
        eyeAtCamera: !0
      };

    function HQ(QQ, FQ, wQ) {
      const LQ = wQ.RLQ(),
        qQ = FQ.RLQ();
      for (let oQ = 0; oQ < 16; oQ++) LQ[oQ] = qQ[oQ];
      return LQ[12] -= QQ.x, LQ[13] -= QQ.y, LQ[14] -= QQ.z, wQ.markAsUpdated(), wQ
    }

    function bQ(QQ, FQ, wQ) {
      return (0, oQ.i)(FQ, vQ), HQ(QQ, vQ, mQ), (0, oQ.i)(mQ, wQ), wQ
    }

    function YQ(QQ, FQ, wQ) {
      if (!uQ.eyeAtCamera) return bQ(QQ, FQ, wQ);
      const LQ = wQ.RLQ(),
        qQ = FQ.RLQ();
      for (let oQ = 0; oQ < 16; oQ++) LQ[oQ] = qQ[oQ];
      return LQ[12] = 0, LQ[13] = 0, LQ[14] = 0, wQ.markAsUpdated(), wQ
    }

    function xQ(QQ, FQ, wQ, LQ) {
      return (0, oQ.o)(YQ(QQ, FQ, LQ), wQ, LQ), LQ
    }

    function AQ(QQ, FQ, wQ, LQ) {
      return (0, oQ.i)(wQ, vQ), (0, oQ.o)(FQ, vQ, mQ), HQ(QQ, mQ, vQ), YQ(QQ, wQ, mQ), (0, oQ.o)(vQ, mQ, LQ), LQ
    }

    function tQ(QQ, FQ, wQ, LQ, qQ, DQ) {
      return (0, oQ.i)(wQ, vQ), (0, oQ.o)(FQ, vQ, mQ), HQ(QQ, mQ, vQ), xQ(QQ, LQ, qQ, mQ), (0, oQ.o)(vQ, mQ, DQ), DQ
    }

    function eQ(QQ, FQ) {
      const wQ = uQ.iN();
      if (!wQ || kQ === FQ) return FQ;
      kQ.updateFlag = FQ.updateFlag;
      const LQ = wQ.floatingOriginOffset;
      switch (QQ) {
        case "world":
          return HQ(LQ, FQ, kQ);
        case "view":
          return YQ(LQ, FQ, kQ);
        case "worldView":
          return AQ(LQ, FQ, wQ.getViewMatrix(), kQ);
        case "viewProjection":
          return xQ(LQ, wQ.getViewMatrix(), wQ.getProjectionMatrix(), kQ);
        case "worldViewProjection":
          return tQ(LQ, FQ, wQ.getTransformMatrix(), wQ.getViewMatrix(), wQ.getProjectionMatrix(), kQ);
        default:
          if (QQ.startsWith("u_")) {
            const qQ = QQ.toLowerCase();
            if (qQ.startsWith("u_worldviewprojection")) return tQ(LQ, FQ, wQ.getTransformMatrix(), wQ.getViewMatrix(), wQ.getProjectionMatrix(), kQ);
            if (qQ.startsWith("u_viewprojection")) return xQ(LQ, wQ.getViewMatrix(), wQ.getProjectionMatrix(), kQ);
            if (qQ.startsWith("u_worldview")) return AQ(LQ, FQ, wQ.getViewMatrix(), kQ);
            if (qQ.startsWith("u_world")) return HQ(LQ, FQ, kQ);
            if (qQ.startsWith("u_view")) return YQ(LQ, FQ, kQ)
          }
          return FQ
      }
    }
    const MQ = DQ.d,
      GQ = LQ.d,
      pQ = MQ.prototype._updateMatrixForUniform,
      cQ = LQ.d.prototype.setMatrix;

    function CQ() {
      LQ.d.prototype.setMatrix = cQ, GQ._setMatrixOverride = void 0, MQ.prototype._updateMatrixForUniform = pQ, MQ.prototype._updateMatrixForUniformOverride = void 0
    }

    function SQ() {
      GQ.prototype._setMatrixOverride = cQ, GQ.prototype.setMatrix = function(QQ, FQ) {
        return this._setMatrixOverride(QQ, eQ(QQ, FQ)), this
      }, MQ.prototype._updateMatrixForUniformOverride = pQ, MQ.prototype._updateMatrixForUniform = function(QQ, FQ) {
        this._updateMatrixForUniformOverride(QQ, eQ(QQ, FQ))
      }
    }
  },
  39542: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => oQ,
      e: () => qQ
    });
    var LQ = wQ(39535);

    function qQ(QQ, FQ) {
      FQ.WHITEBALANCE && QQ.push("whiteBalanceMatrix"), FQ.EXPOSURE && QQ.push("exposureLinear"), FQ.CONTRAST && QQ.push("contrast"), FQ.COLORGRADING && QQ.push("colorTransformSettings"), (FQ.VIGNETTE || FQ.DITHER) && QQ.push("vInverseScreenSize"), FQ.VIGNETTE && (QQ.push("vignetteSettings1"), QQ.push("vignetteSettings2")), FQ.COLORCURVES && (0, LQ.b)(QQ), FQ.DITHER && QQ.push("ditherIntensity")
    }

    function oQ(QQ, FQ) {
      FQ.COLORGRADING && QQ.push("txColorTransform")
    }
  },
  39527: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => sQ,
      h: () => UQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(36722),
      DQ = wQ(36873),
      kQ = wQ(36729),
      vQ = wQ(36696);
    const mQ = [
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
      uQ = 1e6 / mQ[mQ.length - 1][0],
      HQ = 150;

    function bQ(QQ, FQ) {
      const wQ = Number.isNaN(QQ) ? uQ : Math.max(QQ, uQ),
        LQ = (0, kQ.Clamp)(1e6 / wQ, mQ[0][0], mQ[mQ.length - 1][0]);
      let qQ = 0,
        oQ = mQ.length - 1;
      for (; oQ - qQ > 1;) {
        const QQ = qQ + oQ >> 1;
        mQ[QQ][0] <= LQ ? qQ = QQ : oQ = QQ
      }
      const DQ = qQ,
        [bQ, YQ, xQ, AQ] = mQ[DQ],
        [tQ, eQ, MQ, GQ] = mQ[DQ + 1],
        pQ = (LQ - bQ) / (tQ - bQ),
        cQ = vQ.n.Lerp(new vQ.n(YQ, xQ), new vQ.n(eQ, MQ), pQ),
        CQ = vQ.n.Normalize(new vQ.n(1, AQ)),
        SQ = vQ.n.Normalize(new vQ.n(1, GQ)),
        iQ = vQ.n.Normalize(vQ.n.Lerp(CQ, SQ, pQ)),
        WQ = (0, kQ.Clamp)(FQ, -150, HQ);
      cQ.gLQ(iQ.scale(WQ / 3e3));
      const RQ = 2 * cQ.x - 8 * cQ.y + 4,
        OQ = 3 * cQ.x / RQ,
        sQ = 2 * cQ.y / RQ;
      return new vQ.p(OQ / sQ, 1, (1 - OQ - sQ) / sQ)
    }
    const YQ = vQ.c.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      xQ = vQ.c.Invert(YQ);

    function AQ(QQ, FQ) {
      const wQ = FQ > 0 ? QQ / FQ : 10;
      return (0, kQ.Clamp)(wQ, .1, 10)
    }

    function tQ(QQ, FQ) {
      const wQ = vQ.p.TransformNormal(QQ, YQ),
        LQ = vQ.p.TransformNormal(FQ, YQ),
        qQ = vQ.c.FromArray([AQ(LQ.x, wQ.x), 0, 0, 0, 0, AQ(LQ.y, wQ.y), 0, 0, 0, 0, AQ(LQ.z, wQ.z), 0, 0, 0, 0, 1]);
      return YQ.multiply(qQ).multiply(xQ)
    }
    const eQ = new vQ.p(.95047, 1, 1.08883),
      MQ = vQ.c.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(tQ(eQ, bQ(6500, 0))),
      GQ = vQ.c.Invert(MQ),
      pQ = vQ.p.TransformNormal(new vQ.p(1, 1, 1), MQ);
    var cQ = wQ(39426),
      CQ = wQ(39535);
    let SQ = (() => {
      var QQ;
      let FQ, wQ, oQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ = [],
        eQ = [],
        MQ = [],
        GQ = [],
        pQ = [],
        SQ = [],
        iQ = [],
        WQ = [],
        RQ = [],
        OQ = [],
        sQ = [],
        rQ = [],
        IQ = [],
        UQ = [],
        NQ = [],
        TQ = [],
        KQ = [],
        zQ = [],
        lQ = [],
        jQ = [],
        aQ = [],
        XQ = [],
        fQ = [],
        VQ = [];
      return QQ = class {
        constructor() {
          this._dirty = !0, this._tempColor = new DQ.e(0, 0, 0, 0), this._globalCurve = new DQ.e(0, 0, 0, 0), this._highlightsCurve = new DQ.e(0, 0, 0, 0), this._midtonesCurve = new DQ.e(0, 0, 0, 0), this._shadowsCurve = new DQ.e(0, 0, 0, 0), this._positiveCurve = new DQ.e(0, 0, 0, 0), this._negativeCurve = new DQ.e(0, 0, 0, 0), this._globalHue = (0, LQ.l)(this, tQ, 30), this._globalDensity = ((0, LQ.l)(this, eQ), (0, LQ.l)(this, MQ, 0)), this._globalSaturation = ((0, LQ.l)(this, GQ), (0, LQ.l)(this, pQ, 0)), this._globalExposure = ((0, LQ.l)(this, SQ), (0, LQ.l)(this, iQ, 0)), this._highlightsHue = ((0, LQ.l)(this, WQ), (0, LQ.l)(this, RQ, 30)), this._highlightsDensity = ((0, LQ.l)(this, OQ), (0, LQ.l)(this, sQ, 0)), this._highlightsSaturation = ((0, LQ.l)(this, rQ), (0, LQ.l)(this, IQ, 0)), this._highlightsExposure = ((0, LQ.l)(this, UQ), (0, LQ.l)(this, NQ, 0)), this._midtonesHue = ((0, LQ.l)(this, TQ), (0, LQ.l)(this, KQ, 30)), this._midtonesDensity = ((0, LQ.l)(this, zQ), (0, LQ.l)(this, lQ, 0)), this._midtonesSaturation = ((0, LQ.l)(this, jQ), (0, LQ.l)(this, aQ, 0)), this._midtonesExposure = ((0, LQ.l)(this, XQ), (0, LQ.l)(this, fQ, 0)), this._shadowsHue = ((0, LQ.l)(this, VQ), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(QQ) {
          this._globalHue = QQ, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(QQ) {
          this._globalDensity = QQ, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(QQ) {
          this._globalSaturation = QQ, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(QQ) {
          this._globalExposure = QQ, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(QQ) {
          this._highlightsHue = QQ, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(QQ) {
          this._highlightsDensity = QQ, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(QQ) {
          this._highlightsSaturation = QQ, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(QQ) {
          this._highlightsExposure = QQ, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(QQ) {
          this._midtonesHue = QQ, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(QQ) {
          this._midtonesDensity = QQ, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(QQ) {
          this._midtonesSaturation = QQ, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(QQ) {
          this._midtonesExposure = QQ, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(QQ) {
          this._shadowsHue = QQ, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(QQ) {
          this._shadowsDensity = QQ, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(QQ) {
          this._shadowsSaturation = QQ, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(QQ) {
          this._shadowsExposure = QQ, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(FQ, wQ, LQ, qQ, oQ) {
          null != FQ && (FQ = QQ._Clamp(FQ, 0, 360), wQ = QQ._Clamp(wQ, -100, 100), LQ = QQ._Clamp(LQ, -100, 100), qQ = QQ._Clamp(qQ, -100, 100), wQ = QQ._ApplyColorGradingSliderNonlinear(wQ), wQ *= .5, qQ = QQ._ApplyColorGradingSliderNonlinear(qQ), wQ < 0 && (wQ *= -1, FQ = (FQ + 180) % 360), QQ._FromHSBToRef(FQ, wQ, 50 + .25 * qQ, oQ), oQ.scaleToRef(2, oQ), oQ.a = 1 + .01 * LQ)
        }
        static _ApplyColorGradingSliderNonlinear(QQ) {
          QQ /= 100;
          let FQ = Math.abs(QQ);
          return FQ = Math.pow(FQ, 2), QQ < 0 && (FQ *= -1), FQ *= 100, FQ
        }
        static _FromHSBToRef(FQ, wQ, LQ, qQ) {
          let oQ = QQ._Clamp(FQ, 0, 360);
          const DQ = QQ._Clamp(wQ / 100, 0, 1),
            kQ = QQ._Clamp(LQ / 100, 0, 1);
          if (0 === DQ) qQ.r = kQ, qQ.g = kQ, qQ.b = kQ;
          else {
            oQ /= 60;
            const QQ = Math.floor(oQ),
              FQ = oQ - QQ,
              wQ = kQ * (1 - DQ),
              LQ = kQ * (1 - DQ * FQ),
              vQ = kQ * (1 - DQ * (1 - FQ));
            switch (QQ) {
              case 0:
                qQ.r = kQ, qQ.g = vQ, qQ.b = wQ;
                break;
              case 1:
                qQ.r = LQ, qQ.g = kQ, qQ.b = wQ;
                break;
              case 2:
                qQ.r = wQ, qQ.g = kQ, qQ.b = vQ;
                break;
              case 3:
                qQ.r = wQ, qQ.g = LQ, qQ.b = kQ;
                break;
              case 4:
                qQ.r = vQ, qQ.g = wQ, qQ.b = kQ;
                break;
              default:
                qQ.r = kQ, qQ.g = wQ, qQ.b = LQ
            }
          }
          qQ.a = 1
        }
        static _Clamp(QQ, FQ, wQ) {
          return Math.min(Math.max(QQ, FQ), wQ)
        }
        clone() {
          return cQ.c.Clone((() => new QQ), this)
        }
        serialize() {
          return cQ.c.Serialize(this)
        }
        _bind(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), QQ && (QQ.setFloat4(FQ, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), QQ.setFloat4(wQ, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), QQ.setFloat4(LQ, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const DQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        FQ = [(0, qQ.I)()], wQ = [(0, qQ.I)()], oQ = [(0, qQ.I)()], kQ = [(0, qQ.I)()], vQ = [(0, qQ.I)()], mQ = [(0, qQ.I)()], uQ = [(0, qQ.I)()], HQ = [(0, qQ.I)()], bQ = [(0, qQ.I)()], YQ = [(0, qQ.I)()], xQ = [(0, qQ.I)()], AQ = [(0, qQ.I)()], (0, LQ.i)(null, null, FQ, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_globalHue" in QQ,
            get: QQ => QQ._globalHue,
            set: (QQ, FQ) => {
              QQ._globalHue = FQ
            }
          },
          metadata: DQ
        }, tQ, eQ), (0, LQ.i)(null, null, wQ, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_globalDensity" in QQ,
            get: QQ => QQ._globalDensity,
            set: (QQ, FQ) => {
              QQ._globalDensity = FQ
            }
          },
          metadata: DQ
        }, MQ, GQ), (0, LQ.i)(null, null, oQ, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_globalSaturation" in QQ,
            get: QQ => QQ._globalSaturation,
            set: (QQ, FQ) => {
              QQ._globalSaturation = FQ
            }
          },
          metadata: DQ
        }, pQ, SQ), (0, LQ.i)(null, null, kQ, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_globalExposure" in QQ,
            get: QQ => QQ._globalExposure,
            set: (QQ, FQ) => {
              QQ._globalExposure = FQ
            }
          },
          metadata: DQ
        }, iQ, WQ), (0, LQ.i)(null, null, vQ, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_highlightsHue" in QQ,
            get: QQ => QQ._highlightsHue,
            set: (QQ, FQ) => {
              QQ._highlightsHue = FQ
            }
          },
          metadata: DQ
        }, RQ, OQ), (0, LQ.i)(null, null, mQ, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_highlightsDensity" in QQ,
            get: QQ => QQ._highlightsDensity,
            set: (QQ, FQ) => {
              QQ._highlightsDensity = FQ
            }
          },
          metadata: DQ
        }, sQ, rQ), (0, LQ.i)(null, null, uQ, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_highlightsSaturation" in QQ,
            get: QQ => QQ._highlightsSaturation,
            set: (QQ, FQ) => {
              QQ._highlightsSaturation = FQ
            }
          },
          metadata: DQ
        }, IQ, UQ), (0, LQ.i)(null, null, HQ, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_highlightsExposure" in QQ,
            get: QQ => QQ._highlightsExposure,
            set: (QQ, FQ) => {
              QQ._highlightsExposure = FQ
            }
          },
          metadata: DQ
        }, NQ, TQ), (0, LQ.i)(null, null, bQ, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_midtonesHue" in QQ,
            get: QQ => QQ._midtonesHue,
            set: (QQ, FQ) => {
              QQ._midtonesHue = FQ
            }
          },
          metadata: DQ
        }, KQ, zQ), (0, LQ.i)(null, null, YQ, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_midtonesDensity" in QQ,
            get: QQ => QQ._midtonesDensity,
            set: (QQ, FQ) => {
              QQ._midtonesDensity = FQ
            }
          },
          metadata: DQ
        }, lQ, jQ), (0, LQ.i)(null, null, xQ, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_midtonesSaturation" in QQ,
            get: QQ => QQ._midtonesSaturation,
            set: (QQ, FQ) => {
              QQ._midtonesSaturation = FQ
            }
          },
          metadata: DQ
        }, aQ, XQ), (0, LQ.i)(null, null, AQ, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_midtonesExposure" in QQ,
            get: QQ => QQ._midtonesExposure,
            set: (QQ, FQ) => {
              QQ._midtonesExposure = FQ
            }
          },
          metadata: DQ
        }, fQ, VQ), DQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: DQ
        })
      })(), QQ.PrepareUniforms = CQ.b, QQ
    })();

    function iQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      QQ._bind(FQ, wQ, LQ, qQ)
    }
    var WQ = wQ(39333),
      RQ = wQ(39542),
      OQ = wQ(36741);
    let sQ = (() => {
        var QQ;
        let FQ, wQ, mQ, YQ, xQ, AQ, eQ, CQ, OQ, sQ, rQ, IQ, UQ, NQ, TQ, KQ, zQ, lQ, jQ, aQ, XQ, fQ, VQ, hQ, JQ, EQ, nQ, gQ, PQ = [],
          ZQ = [],
          yQ = [],
          BQ = [],
          dQ = [],
          QF = [],
          FF = [],
          wF = [],
          LF = [],
          qF = [],
          oF = [],
          DF = [],
          kF = [],
          vF = [],
          mF = [],
          uF = [],
          HF = [],
          bF = [],
          YF = [],
          xF = [],
          AF = [],
          tF = [],
          eF = [],
          MF = [],
          GF = [],
          pF = [],
          cF = [],
          CF = [],
          SF = [],
          iF = [],
          WF = [],
          RF = [],
          OF = [],
          sF = [],
          rF = [],
          IF = [],
          UF = [],
          NF = [],
          TF = [],
          KF = [],
          zF = [],
          lF = [],
          jF = [],
          aF = [],
          XF = [],
          fF = [],
          VF = [],
          hF = [],
          JF = [],
          EF = [],
          nF = [],
          gF = [],
          PF = [],
          ZF = [],
          yF = [],
          BF = [];
        return QQ = class {
          constructor() {
            this.colorCurves = (0, LQ.l)(this, PQ, new SQ), this._colorCurvesEnabled = ((0, LQ.l)(this, ZQ), (0, LQ.l)(this, yQ, !1)), this._colorGradingTexture = ((0, LQ.l)(this, BQ), (0, LQ.l)(this, dQ, void 0)), this._colorGradingEnabled = ((0, LQ.l)(this, QF), (0, LQ.l)(this, FF, !1)), this._colorGradingWithGreenDepth = ((0, LQ.l)(this, wF), (0, LQ.l)(this, LF, !0)), this._colorGradingBGR = ((0, LQ.l)(this, qF), (0, LQ.l)(this, oF, !0)), this._exposure = ((0, LQ.l)(this, DF), (0, LQ.l)(this, kF, 1)), this._toneMappingEnabled = ((0, LQ.l)(this, vF), (0, LQ.l)(this, mF, !1)), this._toneMappingType = ((0, LQ.l)(this, uF), (0, LQ.l)(this, HF, QQ.TONEMAPPING_STANDARD)), this._contrast = ((0, LQ.l)(this, bF), (0, LQ.l)(this, YF, 1)), this._whiteBalanceEnabled = ((0, LQ.l)(this, xF), (0, LQ.l)(this, AF, !1)), this._temperature = ((0, LQ.l)(this, tF), (0, LQ.l)(this, eF, 6500)), this._tint = ((0, LQ.l)(this, MF), (0, LQ.l)(this, GF, 0)), this._whiteBalanceMatrix = ((0, LQ.l)(this, pF), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, LQ.l)(this, cF, 0), this.vignetteCenterX = ((0, LQ.l)(this, CF), (0, LQ.l)(this, SF, 0)), this.vignetteCenterY = ((0, LQ.l)(this, iF), (0, LQ.l)(this, WF, 0)), this.vignetteWeight = ((0, LQ.l)(this, RF), (0, LQ.l)(this, OF, 1.5)), this.vignetteColor = ((0, LQ.l)(this, sF), (0, LQ.l)(this, rF, new DQ.e(0, 0, 0, 0))), this.vignetteCameraFov = ((0, LQ.l)(this, IF), (0, LQ.l)(this, UF, .5)), this._vignetteBlendMode = ((0, LQ.l)(this, NF), (0, LQ.l)(this, TF, QQ.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, LQ.l)(this, KF), (0, LQ.l)(this, zF, !1)), this._ditheringEnabled = ((0, LQ.l)(this, lF), (0, LQ.l)(this, jF, !1)), this._ditheringIntensity = ((0, LQ.l)(this, aF), (0, LQ.l)(this, XF, 1 / 255)), this._skipFinalColorClamp = ((0, LQ.l)(this, fF), (0, LQ.l)(this, VF, !1)), this._applyByPostProcess = ((0, LQ.l)(this, hF), (0, LQ.l)(this, JF, !1)), this._isEnabled = ((0, LQ.l)(this, EF), (0, LQ.l)(this, nF, !0)), this.outputTextureWidth = ((0, LQ.l)(this, gF), (0, LQ.l)(this, PF, 0)), this.outputTextureHeight = ((0, LQ.l)(this, ZF), (0, LQ.l)(this, yF, 0)), this.onUpdateParameters = ((0, LQ.l)(this, BF), new oQ.e)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(QQ) {
            this._colorCurvesEnabled !== QQ && (this._colorCurvesEnabled = QQ, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(QQ) {
            this._colorGradingTexture !== QQ && (this._colorGradingTexture = QQ, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(QQ) {
            this._colorGradingEnabled !== QQ && (this._colorGradingEnabled = QQ, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(QQ) {
            this._colorGradingWithGreenDepth !== QQ && (this._colorGradingWithGreenDepth = QQ, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(QQ) {
            this._colorGradingBGR !== QQ && (this._colorGradingBGR = QQ, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(QQ) {
            this._exposure !== QQ && (this._exposure = QQ, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(QQ) {
            this._toneMappingEnabled !== QQ && (this._toneMappingEnabled = QQ, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(QQ) {
            this._toneMappingType !== QQ && (this._toneMappingType = QQ, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(QQ) {
            this._contrast !== QQ && (this._contrast = QQ, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(QQ) {
            this._whiteBalanceEnabled !== QQ && (this._whiteBalanceEnabled = QQ, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(QQ) {
            QQ = Number.isNaN(QQ) ? uQ : Math.max(QQ, uQ), this._temperature !== QQ && (this._temperature = QQ, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(QQ) {
            QQ = (0, kQ.Clamp)(QQ, -150, HQ), this._tint !== QQ && (this._tint = QQ, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(QQ, FQ) {
              const wQ = tQ(bQ(QQ, FQ), pQ),
                LQ = MQ.multiply(wQ).multiply(GQ);
              return vQ.c.GetAsMatrix3x3(LQ)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(QQ) {
            this.vignetteCenterY = QQ
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(QQ) {
            this.vignetteCenterX = QQ
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(QQ) {
            this._vignetteBlendMode !== QQ && (this._vignetteBlendMode = QQ, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(QQ) {
            this._vignetteEnabled !== QQ && (this._vignetteEnabled = QQ, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(QQ) {
            this._ditheringEnabled !== QQ && (this._ditheringEnabled = QQ, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(QQ) {
            this._ditheringIntensity !== QQ && (this._ditheringIntensity = QQ, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(QQ) {
            this._skipFinalColorClamp !== QQ && (this._skipFinalColorClamp = QQ, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(QQ) {
            this._applyByPostProcess !== QQ && (this._applyByPostProcess = QQ, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(QQ) {
            this._isEnabled !== QQ && (this._isEnabled = QQ, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(FQ) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return FQ.WHITEBALANCE = !1, FQ.VIGNETTE = !1, FQ.TONEMAPPING = 0, FQ.CONTRAST = !1, FQ.EXPOSURE = !1, FQ.COLORCURVES = !1, FQ.COLORGRADING = !1, FQ.COLORGRADING3D = !1, FQ.DITHER = !1, FQ.IMAGEPROCESSING = !1, FQ.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(FQ.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (FQ.WHITEBALANCE = this._whiteBalanceEnabled, FQ.VIGNETTE = this.vignetteEnabled, FQ.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === QQ._VIGNETTEMODE_MULTIPLY, FQ.VIGNETTEBLENDMODEOPAQUE = !FQ.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case QQ.TONEMAPPING_KHR_PBR_NEUTRAL:
                FQ.TONEMAPPING = 3;
                break;
              case QQ.TONEMAPPING_ACES:
                FQ.TONEMAPPING = 2;
                break;
              default:
                FQ.TONEMAPPING = 1
            } else FQ.TONEMAPPING = 0;
            FQ.CONTRAST = 1 !== this.contrast, FQ.EXPOSURE = 1 !== this.exposure, FQ.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, FQ.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, FQ.COLORGRADING ? FQ.COLORGRADING3D = this.colorGradingTexture.is3D : FQ.COLORGRADING3D = !1, FQ.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, FQ.SAMPLER3DBGRMAP = this.colorGradingBGR, FQ.DITHER = this._ditheringEnabled, FQ.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, FQ.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, FQ.IMAGEPROCESSING = FQ.WHITEBALANCE || FQ.VIGNETTE || !!FQ.TONEMAPPING || FQ.CONTRAST || FQ.EXPOSURE || FQ.COLORCURVES || FQ.COLORGRADING || FQ.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(QQ, FQ) {
            if (this._whiteBalanceEnabled && QQ.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && iQ(this.colorCurves, QQ), this._vignetteEnabled || this._ditheringEnabled) {
              const wQ = 1 / (this.outputTextureWidth || QQ.Wx().getRenderWidth()),
                LQ = 1 / (this.outputTextureHeight || QQ.Wx().getRenderHeight());
              if (QQ.setFloat2("vInverseScreenSize", wQ, LQ), this._ditheringEnabled && QQ.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const qQ = null != FQ ? FQ : LQ / wQ;
                let oQ = Math.tan(.5 * this.vignetteCameraFov),
                  DQ = oQ * qQ;
                const kQ = Math.sqrt(DQ * oQ);
                DQ = (0, WQ.h)(DQ, kQ, this.vignetteStretch), oQ = (0, WQ.h)(oQ, kQ, this.vignetteStretch), QQ.setFloat4("vignetteSettings1", DQ, oQ, -DQ * this.vignetteCenterX, -oQ * this.vignetteCenterY);
                const vQ = -2 * this.vignetteWeight;
                QQ.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, vQ)
              }
            }
            if (QQ.setFloat("exposureLinear", this.exposure), QQ.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              QQ.setTexture("txColorTransform", this.colorGradingTexture);
              const FQ = this.colorGradingTexture.getSize().height;
              QQ.setFloat4("colorTransformSettings", (FQ - 1) / FQ, .5 / FQ, FQ, this.colorGradingTexture.level)
            }
          }
          clone() {
            return cQ.c.Clone((() => new QQ), this)
          }
          serialize() {
            return cQ.c.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const oQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          FQ = [(0, qQ.l)()], wQ = [(0, qQ.I)()], mQ = [(0, qQ.z)("colorGradingTexture")], YQ = [(0, qQ.I)()], xQ = [(0, qQ.I)()], AQ = [(0, qQ.I)()], eQ = [(0, qQ.I)()], CQ = [(0, qQ.I)()], OQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], rQ = [(0, qQ.I)()], IQ = [(0, qQ.I)()], UQ = [(0, qQ.I)()], NQ = [(0, qQ.I)()], TQ = [(0, qQ.I)()], KQ = [(0, qQ.I)()], zQ = [(0, qQ.I)()], lQ = [(0, qQ.n)()], jQ = [(0, qQ.I)()], aQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], fQ = [(0, qQ.I)()], VQ = [(0, qQ.I)()], hQ = [(0, qQ.I)()], JQ = [(0, qQ.I)()], EQ = [(0, qQ.I)()], nQ = [(0, qQ.I)()], gQ = [(0, qQ.I)()], (0, LQ.i)(null, null, FQ, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: QQ => "colorCurves" in QQ,
              get: QQ => QQ.colorCurves,
              set: (QQ, FQ) => {
                QQ.colorCurves = FQ
              }
            },
            metadata: oQ
          }, PQ, ZQ), (0, LQ.i)(null, null, wQ, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_colorCurvesEnabled" in QQ,
              get: QQ => QQ._colorCurvesEnabled,
              set: (QQ, FQ) => {
                QQ._colorCurvesEnabled = FQ
              }
            },
            metadata: oQ
          }, yQ, BQ), (0, LQ.i)(null, null, mQ, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_colorGradingTexture" in QQ,
              get: QQ => QQ._colorGradingTexture,
              set: (QQ, FQ) => {
                QQ._colorGradingTexture = FQ
              }
            },
            metadata: oQ
          }, dQ, QF), (0, LQ.i)(null, null, YQ, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_colorGradingEnabled" in QQ,
              get: QQ => QQ._colorGradingEnabled,
              set: (QQ, FQ) => {
                QQ._colorGradingEnabled = FQ
              }
            },
            metadata: oQ
          }, FF, wF), (0, LQ.i)(null, null, xQ, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_colorGradingWithGreenDepth" in QQ,
              get: QQ => QQ._colorGradingWithGreenDepth,
              set: (QQ, FQ) => {
                QQ._colorGradingWithGreenDepth = FQ
              }
            },
            metadata: oQ
          }, LF, qF), (0, LQ.i)(null, null, AQ, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_colorGradingBGR" in QQ,
              get: QQ => QQ._colorGradingBGR,
              set: (QQ, FQ) => {
                QQ._colorGradingBGR = FQ
              }
            },
            metadata: oQ
          }, oF, DF), (0, LQ.i)(null, null, eQ, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_exposure" in QQ,
              get: QQ => QQ._exposure,
              set: (QQ, FQ) => {
                QQ._exposure = FQ
              }
            },
            metadata: oQ
          }, kF, vF), (0, LQ.i)(null, null, CQ, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_toneMappingEnabled" in QQ,
              get: QQ => QQ._toneMappingEnabled,
              set: (QQ, FQ) => {
                QQ._toneMappingEnabled = FQ
              }
            },
            metadata: oQ
          }, mF, uF), (0, LQ.i)(null, null, OQ, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_toneMappingType" in QQ,
              get: QQ => QQ._toneMappingType,
              set: (QQ, FQ) => {
                QQ._toneMappingType = FQ
              }
            },
            metadata: oQ
          }, HF, bF), (0, LQ.i)(null, null, sQ, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_contrast" in QQ,
              get: QQ => QQ._contrast,
              set: (QQ, FQ) => {
                QQ._contrast = FQ
              }
            },
            metadata: oQ
          }, YF, xF), (0, LQ.i)(null, null, rQ, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_whiteBalanceEnabled" in QQ,
              get: QQ => QQ._whiteBalanceEnabled,
              set: (QQ, FQ) => {
                QQ._whiteBalanceEnabled = FQ
              }
            },
            metadata: oQ
          }, AF, tF), (0, LQ.i)(null, null, IQ, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_temperature" in QQ,
              get: QQ => QQ._temperature,
              set: (QQ, FQ) => {
                QQ._temperature = FQ
              }
            },
            metadata: oQ
          }, eF, MF), (0, LQ.i)(null, null, UQ, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_tint" in QQ,
              get: QQ => QQ._tint,
              set: (QQ, FQ) => {
                QQ._tint = FQ
              }
            },
            metadata: oQ
          }, GF, pF), (0, LQ.i)(null, null, NQ, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vignetteStretch" in QQ,
              get: QQ => QQ.vignetteStretch,
              set: (QQ, FQ) => {
                QQ.vignetteStretch = FQ
              }
            },
            metadata: oQ
          }, cF, CF), (0, LQ.i)(null, null, TQ, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vignetteCenterX" in QQ,
              get: QQ => QQ.vignetteCenterX,
              set: (QQ, FQ) => {
                QQ.vignetteCenterX = FQ
              }
            },
            metadata: oQ
          }, SF, iF), (0, LQ.i)(null, null, KQ, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vignetteCenterY" in QQ,
              get: QQ => QQ.vignetteCenterY,
              set: (QQ, FQ) => {
                QQ.vignetteCenterY = FQ
              }
            },
            metadata: oQ
          }, WF, RF), (0, LQ.i)(null, null, zQ, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vignetteWeight" in QQ,
              get: QQ => QQ.vignetteWeight,
              set: (QQ, FQ) => {
                QQ.vignetteWeight = FQ
              }
            },
            metadata: oQ
          }, OF, sF), (0, LQ.i)(null, null, lQ, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vignetteColor" in QQ,
              get: QQ => QQ.vignetteColor,
              set: (QQ, FQ) => {
                QQ.vignetteColor = FQ
              }
            },
            metadata: oQ
          }, rF, IF), (0, LQ.i)(null, null, jQ, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vignetteCameraFov" in QQ,
              get: QQ => QQ.vignetteCameraFov,
              set: (QQ, FQ) => {
                QQ.vignetteCameraFov = FQ
              }
            },
            metadata: oQ
          }, UF, NF), (0, LQ.i)(null, null, aQ, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_vignetteBlendMode" in QQ,
              get: QQ => QQ._vignetteBlendMode,
              set: (QQ, FQ) => {
                QQ._vignetteBlendMode = FQ
              }
            },
            metadata: oQ
          }, TF, KF), (0, LQ.i)(null, null, XQ, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_vignetteEnabled" in QQ,
              get: QQ => QQ._vignetteEnabled,
              set: (QQ, FQ) => {
                QQ._vignetteEnabled = FQ
              }
            },
            metadata: oQ
          }, zF, lF), (0, LQ.i)(null, null, fQ, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_ditheringEnabled" in QQ,
              get: QQ => QQ._ditheringEnabled,
              set: (QQ, FQ) => {
                QQ._ditheringEnabled = FQ
              }
            },
            metadata: oQ
          }, jF, aF), (0, LQ.i)(null, null, VQ, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_ditheringIntensity" in QQ,
              get: QQ => QQ._ditheringIntensity,
              set: (QQ, FQ) => {
                QQ._ditheringIntensity = FQ
              }
            },
            metadata: oQ
          }, XF, fF), (0, LQ.i)(null, null, hQ, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_skipFinalColorClamp" in QQ,
              get: QQ => QQ._skipFinalColorClamp,
              set: (QQ, FQ) => {
                QQ._skipFinalColorClamp = FQ
              }
            },
            metadata: oQ
          }, VF, hF), (0, LQ.i)(null, null, JQ, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_applyByPostProcess" in QQ,
              get: QQ => QQ._applyByPostProcess,
              set: (QQ, FQ) => {
                QQ._applyByPostProcess = FQ
              }
            },
            metadata: oQ
          }, JF, EF), (0, LQ.i)(null, null, EQ, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_isEnabled" in QQ,
              get: QQ => QQ._isEnabled,
              set: (QQ, FQ) => {
                QQ._isEnabled = FQ
              }
            },
            metadata: oQ
          }, nF, gF), (0, LQ.i)(null, null, nQ, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: QQ => "outputTextureWidth" in QQ,
              get: QQ => QQ.outputTextureWidth,
              set: (QQ, FQ) => {
                QQ.outputTextureWidth = FQ
              }
            },
            metadata: oQ
          }, PF, ZF), (0, LQ.i)(null, null, gQ, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "outputTextureHeight" in QQ,
              get: QQ => QQ.outputTextureHeight,
              set: (QQ, FQ) => {
                QQ.outputTextureHeight = FQ
              }
            },
            metadata: oQ
          }, yF, BF), oQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oQ
          })
        })(), QQ.TONEMAPPING_STANDARD = 0, QQ.TONEMAPPING_ACES = 1, QQ.TONEMAPPING_KHR_PBR_NEUTRAL = 2, QQ.PrepareUniforms = RQ.e, QQ.PrepareSamplers = RQ.c, QQ._VIGNETTEMODE_MULTIPLY = 0, QQ._VIGNETTEMODE_OPAQUE = 1, QQ
      })(),
      rQ = !1;

    function IQ(QQ) {
      const FQ = cQ.c.Parse((() => new sQ), QQ, null, null);
      return void 0 !== QQ.vignetteCentreX && (FQ.vignetteCenterX = QQ.vignetteCentreX), void 0 !== QQ.vignetteCentreY && (FQ.vignetteCenterY = QQ.vignetteCentreY), FQ
    }

    function UQ() {
      rQ || (rQ = !0, sQ.Parse = IQ, cQ.c._ImageProcessingConfigurationParser = IQ, (0, OQ.e)("BABYLON.ImageProcessingConfiguration", sQ))
    }
  },
  39550: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ
    });
    var LQ = wQ(38203),
      qQ = wQ(39505);
    class oQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          oQ = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = QQ, this._noUBO = !QQ.supportsUniformBuffers || qQ, this._dynamic = wQ, this._name = LQ ?? "no-name", this._data = FQ || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === oQ && this._engine._features.trackUbosInFrame || !0 === oQ) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.Y5 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.Y5 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(QQ) {
        let FQ;
        if (FQ = QQ <= 2 ? QQ : 4, this._uniformLocationPointer % FQ !== 0) {
          const QQ = this._uniformLocationPointer;
          this._uniformLocationPointer += FQ - this._uniformLocationPointer % FQ;
          const wQ = this._uniformLocationPointer - QQ;
          for (let FQ = 0; FQ < wQ; FQ++) this._data.push(0)
        }
      }
      addUniform(QQ, FQ) {
        let wQ, LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (LQ > 0 && "number" === typeof FQ && (this._uniformArraySizes[QQ] = {
            strideSize: FQ,
            arraySize: LQ
          }), void 0 === this._uniformLocations[QQ] && (this._uniformNames.push(QQ), !this._noUBO)) {
          if (LQ > 0) {
            if (FQ instanceof Array) throw "addUniform should not be use with Array in UBO: " + QQ;
            if (this._fillAlignment(4), 16 == FQ) FQ *= LQ;
            else {
              FQ = FQ * LQ + (4 - FQ) * LQ
            }
            wQ = [];
            for (let QQ = 0; QQ < FQ; QQ++) wQ.push(0)
          } else {
            if (FQ instanceof Array) wQ = FQ, FQ = wQ.length;
            else {
              wQ = [];
              for (let QQ = 0; QQ < FQ; QQ++) wQ.push(0)
            }
            this._fillAlignment(FQ)
          }
          this._uniformSizes[QQ] = FQ, this._uniformLocations[QQ] = this._uniformLocationPointer, this._uniformLocationPointer += FQ;
          for (let QQ = 0; QQ < FQ; QQ++) this._data.push(wQ[QQ]);
          this._needSync = !0
        }
      }
      addMatrix(QQ, FQ) {
        this.addUniform(QQ, Array.prototype.slice.call(FQ.RLQ()))
      }
      addFloat2(QQ, FQ, wQ) {
        const LQ = [FQ, wQ];
        this.addUniform(QQ, LQ)
      }
      addFloat3(QQ, FQ, wQ, LQ) {
        const qQ = [FQ, wQ, LQ];
        this.addUniform(QQ, qQ)
      }
      addColor3(QQ, FQ) {
        const wQ = [FQ.r, FQ.g, FQ.b];
        this.addUniform(QQ, wQ)
      }
      addColor4(QQ, FQ, wQ) {
        const LQ = [FQ.r, FQ.g, FQ.b, wQ];
        this.addUniform(QQ, LQ)
      }
      addVector3(QQ, FQ) {
        const wQ = [FQ.x, FQ.y, FQ.z];
        this.addUniform(QQ, wQ)
      }
      addMatrix3x3(QQ) {
        this.addUniform(QQ, 12)
      }
      addMatrix2x2(QQ) {
        this.addUniform(QQ, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const QQ = [];
        let FQ = 0;
        for (const wQ in this._uniformLocations)
          if (QQ.push(wQ), 10 === ++FQ) break;
        return QQ.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const QQ of this._ownerListsBySlot.values()) this._removeOwnerBacklink(QQ);
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
      set name(QQ) {
        this._name = QQ
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(QQ, FQ) {
        for (let wQ = 0; wQ < QQ.length; ++wQ)
          if (QQ[wQ] !== FQ[wQ]) return !1;
        return !0
      }
      _copyBuffer(QQ, FQ) {
        for (let wQ = 0; wQ < QQ.length; ++wQ) FQ[wQ] = QQ[wQ]
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
      _updateOwnerKeyed(QQ) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let FQ = this._slotByOwner.get(QQ);
        if (void 0 === FQ && (FQ = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(QQ, FQ), this._ownerCount++, QQ._uniformBuffersWithOwnedSlot || (QQ._uniformBuffersWithOwnedSlot = []), QQ._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(FQ, QQ._uniformBuffersWithOwnedSlot)), this._slotGeneration[FQ] === this._dataGeneration) return this._bufferIndex = FQ, this._buffer = this._buffers[FQ][0], this.bindUniformBuffer(), this._slotFrameId[FQ] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const wQ = this._buffers[FQ][1];
        this._slotFrameId[FQ] === this._currentFrameId && wQ && !this._buffersEqual(this._bufferData, wQ) && (FQ = this._takeFreeSlot(!1)), this._bufferIndex = FQ, this._buffer = this._buffers[FQ][0], this.bindUniformBuffer();
        const LQ = this._buffers[FQ][1];
        LQ && this._buffersEqual(this._bufferData, LQ) || (LQ && this._copyBuffer(this._bufferData, LQ), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[FQ] = this._currentFrameId, this._slotGeneration[FQ] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(QQ) {
        for (let wQ = 0; wQ < this._freeSlots.length; ++wQ) {
          const FQ = this._freeSlots[wQ];
          if (this._slotFrameId[FQ] !== this._currentFrameId) return QQ && (this._freeSlots[wQ] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), FQ
        }
        this._rebuild();
        const FQ = this._buffers.length - 1;
        return QQ || this._freeSlots.push(FQ), FQ
      }
      _releaseOwnerSlot(QQ) {
        const FQ = this._slotByOwner?.get(QQ);
        if (void 0 === FQ) return;
        this._slotByOwner.delete(QQ);
        const wQ = this._ownerListsBySlot.get(FQ);
        wQ && (this._removeOwnerBacklink(wQ), this._ownerListsBySlot.delete(FQ)), this._ownerCount--, this._freeSlots.push(FQ)
      }
      _removeOwnerBacklink(QQ) {
        const FQ = QQ.indexOf(this); - 1 !== FQ && (QQ[FQ] = QQ[QQ.length - 1], QQ.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(QQ, FQ, wQ) {
        this._checkNewFrame();
        let qQ = this._uniformLocations[QQ];
        if (void 0 === qQ) {
          if (this._buffer) return void LQ.c.Error("Cannot add an uniform after UBO has been created. uniformName=" + QQ);
          this.addUniform(QQ, wQ), qQ = this._uniformLocations[QQ]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let QQ = 0; QQ < wQ; QQ++) this._bufferData[qQ + QQ] = FQ[QQ];
          this._dataGeneration++
        } else {
          let QQ = !1;
          for (let LQ = 0; LQ < wQ; LQ++)(16 === wQ && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[qQ + LQ] !== Math.fround(FQ[LQ])) && (QQ = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[qQ + LQ] = FQ[LQ]);
          this._needSync = this._needSync || QQ, QQ && this._dataGeneration++
        }
      }
      updateUniformArray(QQ, FQ, wQ) {
        this._checkNewFrame();
        const oQ = this._uniformLocations[QQ];
        if (void 0 === oQ) return void LQ.c.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const DQ = this._uniformArraySizes[QQ];
        if (this._dynamic) {
          for (let QQ = 0; QQ < wQ; QQ++) this._bufferData[oQ + QQ] = FQ[QQ];
          this._dataGeneration++
        } else {
          let QQ = !1,
            LQ = 0,
            kQ = 0;
          for (let vQ = 0; vQ < wQ; vQ++)
            if (this._bufferData[oQ + 4 * kQ + LQ] !== qQ.g.FloatRound(FQ[vQ]) && (QQ = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[oQ + 4 * kQ + LQ] = FQ[vQ]), LQ++, LQ === DQ.strideSize) {
              for (; LQ < 4; LQ++) this._bufferData[oQ + 4 * kQ + LQ] = 0;
              LQ = 0, kQ++
            } this._needSync = this._needSync || QQ, QQ && this._dataGeneration++
        }
      }
      _cacheMatrix(QQ, FQ) {
        this._checkNewFrame();
        const wQ = this._valueCache[QQ],
          LQ = FQ.updateFlag;
        return (void 0 === wQ || wQ !== LQ) && (this._valueCache[QQ] = LQ, !0)
      }
      _updateMatrix3x3ForUniform(QQ, FQ) {
        for (let wQ = 0; wQ < 3; wQ++) oQ._TempBuffer[4 * wQ] = FQ[3 * wQ], oQ._TempBuffer[4 * wQ + 1] = FQ[3 * wQ + 1], oQ._TempBuffer[4 * wQ + 2] = FQ[3 * wQ + 2], oQ._TempBuffer[4 * wQ + 3] = 0;
        this.updateUniform(QQ, oQ._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(QQ, FQ) {
        this._currentEffect.setMatrix3x3(QQ, FQ)
      }
      _updateMatrix2x2ForEffect(QQ, FQ) {
        this._currentEffect.setMatrix2x2(QQ, FQ)
      }
      _updateMatrix2x2ForUniform(QQ, FQ) {
        for (let wQ = 0; wQ < 2; wQ++) oQ._TempBuffer[4 * wQ] = FQ[2 * wQ], oQ._TempBuffer[4 * wQ + 1] = FQ[2 * wQ + 1], oQ._TempBuffer[4 * wQ + 2] = 0, oQ._TempBuffer[4 * wQ + 3] = 0;
        this.updateUniform(QQ, oQ._TempBuffer, 8)
      }
      _updateFloatForEffect(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(QQ + wQ, FQ)
      }
      _updateFloatForUniform(QQ, FQ) {
        oQ._TempBuffer[0] = FQ, this.updateUniform(QQ, oQ._TempBuffer, 1)
      }
      _updateFloat2ForEffect(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(QQ + LQ, FQ, wQ)
      }
      _updateFloat2ForUniform(QQ, FQ, wQ) {
        oQ._TempBuffer[0] = FQ, oQ._TempBuffer[1] = wQ, this.updateUniform(QQ, oQ._TempBuffer, 2)
      }
      _updateFloat3ForEffect(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(QQ + qQ, FQ, wQ, LQ)
      }
      _updateFloat3ForUniform(QQ, FQ, wQ, LQ) {
        oQ._TempBuffer[0] = FQ, oQ._TempBuffer[1] = wQ, oQ._TempBuffer[2] = LQ, this.updateUniform(QQ, oQ._TempBuffer, 3)
      }
      _updateFloat4ForEffect(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(QQ + oQ, FQ, wQ, LQ, qQ)
      }
      _updateFloat4ForUniform(QQ, FQ, wQ, LQ, qQ) {
        oQ._TempBuffer[0] = FQ, oQ._TempBuffer[1] = wQ, oQ._TempBuffer[2] = LQ, oQ._TempBuffer[3] = qQ, this.updateUniform(QQ, oQ._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[QQ]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(QQ + wQ, FQ);
            break;
          case 3:
            this._currentEffect.setFloatArray3(QQ + wQ, FQ);
            break;
          case 4:
            this._currentEffect.setFloatArray4(QQ + wQ, FQ);
            break;
          default:
            this._currentEffect.setFloatArray(QQ + wQ, FQ)
        }
      }
      _updateFloatArrayForUniform(QQ, FQ) {
        this.updateUniformArray(QQ, FQ, FQ.length)
      }
      _updateArrayForEffect(QQ, FQ) {
        this._currentEffect.setArray(QQ, FQ)
      }
      _updateArrayForUniform(QQ, FQ) {
        this.updateUniformArray(QQ, FQ, FQ.length)
      }
      _updateIntArrayForEffect(QQ, FQ) {
        this._currentEffect.setIntArray(QQ, FQ)
      }
      _updateIntArrayForUniform(QQ, FQ) {
        oQ._TempBufferInt32View.set(FQ), this.updateUniformArray(QQ, oQ._TempBuffer, FQ.length)
      }
      _updateUIntArrayForEffect(QQ, FQ) {
        this._currentEffect.setUIntArray(QQ, FQ)
      }
      _updateUIntArrayForUniform(QQ, FQ) {
        oQ._TempBufferUInt32View.set(FQ), this.updateUniformArray(QQ, oQ._TempBuffer, FQ.length)
      }
      _updateMatrixForEffect(QQ, FQ) {
        this._currentEffect.setMatrix(QQ, FQ)
      }
      _updateMatrixForUniform(QQ, FQ) {
        this._cacheMatrix(QQ, FQ) && this.updateUniform(QQ, FQ.RLQ(), 16)
      }
      _updateMatricesForEffect(QQ, FQ) {
        this._currentEffect.setMatrices(QQ, FQ)
      }
      _updateMatricesForUniform(QQ, FQ) {
        this.updateUniform(QQ, FQ, FQ.length)
      }
      _updateVector3ForEffect(QQ, FQ) {
        this._currentEffect.setVector3(QQ, FQ)
      }
      _updateVector3ForUniform(QQ, FQ) {
        oQ._TempBuffer[0] = FQ.x, oQ._TempBuffer[1] = FQ.y, oQ._TempBuffer[2] = FQ.z, this.updateUniform(QQ, oQ._TempBuffer, 3)
      }
      _updateVector4ForEffect(QQ, FQ) {
        this._currentEffect.setVector4(QQ, FQ)
      }
      _updateVector4ForUniform(QQ, FQ) {
        oQ._TempBuffer[0] = FQ.x, oQ._TempBuffer[1] = FQ.y, oQ._TempBuffer[2] = FQ.z, oQ._TempBuffer[3] = FQ.w, this.updateUniform(QQ, oQ._TempBuffer, 4)
      }
      _updateColor3ForEffect(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(QQ + wQ, FQ)
      }
      _updateColor3ForUniform(QQ, FQ) {
        oQ._TempBuffer[0] = FQ.r, oQ._TempBuffer[1] = FQ.g, oQ._TempBuffer[2] = FQ.b, this.updateUniform(QQ, oQ._TempBuffer, 3)
      }
      _updateColor4ForEffect(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(QQ + LQ, FQ, wQ)
      }
      _updateDirectColor4ForEffect(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(QQ + wQ, FQ)
      }
      _updateColor4ForUniform(QQ, FQ, wQ) {
        oQ._TempBuffer[0] = FQ.r, oQ._TempBuffer[1] = FQ.g, oQ._TempBuffer[2] = FQ.b, oQ._TempBuffer[3] = wQ, this.updateUniform(QQ, oQ._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(QQ, FQ) {
        oQ._TempBuffer[0] = FQ.r, oQ._TempBuffer[1] = FQ.g, oQ._TempBuffer[2] = FQ.b, oQ._TempBuffer[3] = FQ.a, this.updateUniform(QQ, oQ._TempBuffer, 4)
      }
      _updateIntForEffect(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(QQ + wQ, FQ)
      }
      _updateIntForUniform(QQ, FQ) {
        oQ._TempBufferInt32View[0] = FQ, this.updateUniform(QQ, oQ._TempBuffer, 1)
      }
      _updateInt2ForEffect(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(QQ + LQ, FQ, wQ)
      }
      _updateInt2ForUniform(QQ, FQ, wQ) {
        oQ._TempBufferInt32View[0] = FQ, oQ._TempBufferInt32View[1] = wQ, this.updateUniform(QQ, oQ._TempBuffer, 2)
      }
      _updateInt3ForEffect(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(QQ + qQ, FQ, wQ, LQ)
      }
      _updateInt3ForUniform(QQ, FQ, wQ, LQ) {
        oQ._TempBufferInt32View[0] = FQ, oQ._TempBufferInt32View[1] = wQ, oQ._TempBufferInt32View[2] = LQ, this.updateUniform(QQ, oQ._TempBuffer, 3)
      }
      _updateInt4ForEffect(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(QQ + oQ, FQ, wQ, LQ, qQ)
      }
      _updateInt4ForUniform(QQ, FQ, wQ, LQ, qQ) {
        oQ._TempBufferInt32View[0] = FQ, oQ._TempBufferInt32View[1] = wQ, oQ._TempBufferInt32View[2] = LQ, oQ._TempBufferInt32View[3] = qQ, this.updateUniform(QQ, oQ._TempBuffer, 4)
      }
      _updateUIntForEffect(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(QQ + wQ, FQ)
      }
      _updateUIntForUniform(QQ, FQ) {
        oQ._TempBufferUInt32View[0] = FQ, this.updateUniform(QQ, oQ._TempBuffer, 1)
      }
      _updateUInt2ForEffect(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(QQ + LQ, FQ, wQ)
      }
      _updateUInt2ForUniform(QQ, FQ, wQ) {
        oQ._TempBufferUInt32View[0] = FQ, oQ._TempBufferUInt32View[1] = wQ, this.updateUniform(QQ, oQ._TempBuffer, 2)
      }
      _updateUInt3ForEffect(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(QQ + qQ, FQ, wQ, LQ)
      }
      _updateUInt3ForUniform(QQ, FQ, wQ, LQ) {
        oQ._TempBufferUInt32View[0] = FQ, oQ._TempBufferUInt32View[1] = wQ, oQ._TempBufferUInt32View[2] = LQ, this.updateUniform(QQ, oQ._TempBuffer, 3)
      }
      _updateUInt4ForEffect(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(QQ + oQ, FQ, wQ, LQ, qQ)
      }
      _updateUInt4ForUniform(QQ, FQ, wQ, LQ, qQ) {
        oQ._TempBufferUInt32View[0] = FQ, oQ._TempBufferUInt32View[1] = wQ, oQ._TempBufferUInt32View[2] = LQ, oQ._TempBufferUInt32View[3] = qQ, this.updateUniform(QQ, oQ._TempBuffer, 4)
      }
      setTexture(QQ, FQ) {
        this._currentEffect.setTexture(QQ, FQ)
      }
      setTextureArray(QQ, FQ) {
        this._currentEffect.setTextureArray(QQ, FQ)
      }
      bindTexture(QQ, FQ) {
        this._currentEffect._bindTexture(QQ, FQ)
      }
      updateUniformDirectly(QQ, FQ) {
        this.updateUniform(QQ, FQ, FQ.length), this.update()
      }
      bindToEffect(QQ, FQ) {
        this._currentEffect = QQ, this._currentEffectName = FQ
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(QQ) {
        if (!this._buffers) return this._buffer === QQ;
        for (let FQ = 0; FQ < this._buffers.length; ++FQ) {
          if (this._buffers[FQ][0] === QQ) return this._bufferIndex = FQ, this._buffer = QQ, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[FQ][1] && (this._bufferData.set(this._buffers[FQ][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(QQ) {
        return void 0 !== this._uniformLocations[QQ]
      }
      dispose() {
        if (this._noUBO) return;
        const QQ = this._engine._uniformBuffers,
          FQ = QQ.indexOf(this);
        if (-1 !== FQ && (QQ[FQ] = QQ[QQ.length - 1], QQ.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let QQ = 0; QQ < this._buffers.length; ++QQ) {
            const FQ = this._buffers[QQ][0];
            this._engine._releaseBuffer(FQ)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    oQ._MAX_UNIFORM_SIZE = 256, oQ._TempBuffer = new Float32Array(oQ._MAX_UNIFORM_SIZE), oQ._TempBufferInt32View = new Int32Array(oQ._TempBuffer.buffer), oQ._TempBufferUInt32View = new Uint32Array(oQ._TempBuffer.buffer)
  },
  39321: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ
    });
    var LQ = wQ(39330);
    class qQ extends LQ.c {
      constructor(QQ) {
        super(), this._buffer = QQ
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39413: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => vQ,
      g: () => mQ
    });
    const LQ = "__bjs_serializable__",
      qQ = new WeakMap;

    function oQ(QQ, FQ) {
      return Object.prototype.hasOwnProperty.call(QQ, FQ)
    }
    const DQ = function() {
      let QQ = Symbol.metadata;
      return QQ || (QQ = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: QQ
      })), QQ
    }();

    function kQ(QQ) {
      return "function" === typeof QQ ? QQ : QQ?.constructor
    }

    function vQ(QQ) {
      if (!QQ) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(DQ)}) polyfill must run before decorated classes are evaluated.`);
      return oQ(QQ, LQ) || (QQ[LQ] = {}), QQ[LQ]
    }

    function mQ(QQ) {
      const FQ = kQ(QQ),
        wQ = FQ ? FQ[DQ] : void 0;
      if (!wQ) return {};
      const vQ = qQ.get(wQ);
      if (vQ) return vQ;
      const mQ = {},
        uQ = [];
      let HQ = wQ;
      for (; HQ;) uQ.push(HQ), HQ = Object.getPrototypeOf(HQ);
      for (const qQ of uQ)
        if (oQ(qQ, LQ)) {
          const QQ = qQ[LQ];
          for (const FQ in QQ) mQ[FQ] = QQ[FQ]
        } return qQ.set(wQ, mQ), mQ
    }
  },
  39409: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      C: () => uQ,
      F: () => HQ,
      I: () => DQ,
      c: () => GQ,
      e: () => oQ,
      i: () => MQ,
      l: () => YQ,
      m: () => vQ,
      n: () => xQ,
      o: () => mQ,
      s: () => tQ,
      w: () => bQ,
      y: () => AQ,
      z: () => kQ
    });
    var LQ = wQ(39413);

    function qQ(QQ, FQ) {
      return (wQ, qQ) => {
        if (!qQ.metadata) return;
        const oQ = String(qQ.name),
          DQ = (0, LQ.d)(qQ.metadata);
        DQ[oQ] || (DQ[oQ] = {
          type: QQ,
          sourceName: FQ
        })
      }
    }

    function oQ(QQ) {
      return function(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (wQ, LQ) => {
          const qQ = FQ || "_" + String(LQ.name);
          return {
            init(QQ) {
              return void 0 === QQ && qQ in this || (this[qQ] = QQ), QQ
            },
            get() {
              return this[qQ]
            },
            set(FQ) {
              "function" === typeof this[qQ]?.equals && this[qQ].equals(FQ) || this[qQ] !== FQ && (this[qQ] = FQ, this[QQ]())
            }
          }
        }
      }(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function DQ(QQ) {
      return qQ(0, QQ)
    }

    function kQ(QQ) {
      return qQ(1, QQ)
    }

    function vQ(QQ) {
      return qQ(2, QQ)
    }

    function mQ(QQ) {
      return qQ(3, QQ)
    }

    function uQ(QQ) {
      return qQ(4, QQ)
    }

    function HQ(QQ) {
      return qQ(5, QQ)
    }

    function bQ(QQ) {
      return qQ(6, QQ)
    }

    function YQ(QQ) {
      return qQ(7, QQ)
    }

    function xQ(QQ) {
      return qQ(8, QQ)
    }

    function AQ(QQ) {
      return qQ(10, QQ)
    }

    function tQ(QQ) {
      return qQ(12, QQ)
    }

    function eQ(QQ, FQ, wQ) {
      const LQ = String(FQ.name);
      let qQ = null;
      const oQ = function() {
        if (null === qQ) {
          qQ = QQ, "undefined" !== typeof _native && _native[LQ] && (qQ = wQ(_native[LQ], QQ));
          const DQ = this && (FQ.static ? this : Object.getPrototypeOf(this));
          DQ?.[LQ] === oQ && (DQ[LQ] = qQ)
        }
        for (var DQ = arguments.length, kQ = new Array(DQ), vQ = 0; vQ < DQ; vQ++) kQ[vQ] = arguments[vQ];
        return qQ.apply(this, kQ)
      };
      return oQ
    }

    function MQ(QQ, FQ) {
      return eQ(QQ, FQ, (QQ => QQ))
    }

    function GQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (wQ, LQ) => {
        const qQ = FQ || "_" + String(LQ.name);
        return {
          get() {
            return this[qQ]?.value
          },
          set(FQ) {
            "function" === typeof this[qQ]?.value?.equals && this[qQ].value.equals(FQ) || this[qQ].value !== FQ && (this[qQ].value = FQ, this[QQ]())
          }
        }
      }
    }
    MQ.filter = function(QQ) {
      return (FQ, wQ) => eQ(FQ, wQ, ((FQ, wQ) => function() {
        for (var LQ = arguments.length, qQ = new Array(LQ), oQ = 0; oQ < LQ; oQ++) qQ[oQ] = arguments[oQ];
        return QQ(...qQ) ? FQ(...qQ) : wQ.apply(this, qQ)
      }))
    }
  },
  39426: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => mQ
    });
    var LQ = wQ(39277),
      qQ = wQ(39432),
      oQ = wQ(36873),
      DQ = wQ(36696),
      kQ = wQ(39413);
    const vQ = function(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const oQ = QQ();
      qQ.c && qQ.c.HasTags(FQ) && qQ.c.AddTagsTo(oQ, qQ.c.GetTags(FQ, !0));
      const DQ = (0, kQ.g)(oQ),
        vQ = {};
      for (const qQ in DQ) {
        const QQ = DQ[qQ],
          kQ = FQ[qQ],
          uQ = QQ.type;
        if (void 0 !== kQ && null !== kQ && ("uniqueId" !== qQ || mQ.AllowLoadingUniqueId)) switch (uQ) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof kQ.slice ? oQ[qQ] = kQ.slice() : oQ[qQ] = kQ;
            break;
          case 1:
            LQ.cloneTexturesOnlyOnce && vQ[kQ.uniqueId] ? oQ[qQ] = vQ[kQ.uniqueId] : (oQ[qQ] = wQ || kQ.isRenderTarget ? kQ : kQ.clone(), vQ[kQ.uniqueId] = oQ[qQ]);
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
            oQ[qQ] = wQ ? kQ : kQ.clone()
        }
      }
      return oQ
    };
    class mQ {
      static AppendSerializedAnimations(QQ, FQ) {
        if (QQ.animations) {
          FQ.animations = [];
          for (let wQ = 0; wQ < QQ.animations.length; wQ++) {
            const LQ = QQ.animations[wQ];
            FQ.animations.push(LQ.serialize())
          }
        }
      }
      static Serialize(QQ, FQ) {
        FQ || (FQ = {}), qQ.c && (FQ.tags = qQ.c.GetTags(QQ));
        const wQ = (0, kQ.g)(QQ);
        for (const LQ in wQ) {
          const qQ = wQ[LQ],
            oQ = qQ.sourceName || LQ,
            DQ = qQ.type,
            kQ = QQ[LQ];
          if (void 0 !== kQ && null !== kQ && ("uniqueId" !== LQ || mQ.AllowLoadingUniqueId)) switch (DQ) {
            case 0:
              Array.isArray(kQ) ? FQ[oQ] = kQ.slice() : FQ[oQ] = kQ;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              FQ[oQ] = kQ.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              FQ[oQ] = kQ.RLQ();
              break;
            case 6:
            case 11:
              FQ[oQ] = kQ.id
          }
        }
        return FQ
      }
      static ParseProperties(QQ, FQ, wQ, LQ) {
        LQ || (LQ = "");
        const qQ = (0, kQ.g)(FQ);
        for (const kQ in qQ) {
          const vQ = qQ[kQ],
            uQ = QQ[vQ.sourceName || kQ],
            HQ = vQ.type;
          if (void 0 !== uQ && null !== uQ && ("uniqueId" !== kQ || mQ.AllowLoadingUniqueId)) {
            const QQ = FQ;
            switch (HQ) {
              case 0:
                QQ[kQ] = uQ;
                break;
              case 1:
                wQ && (QQ[kQ] = mQ._TextureParser(uQ, wQ, LQ));
                break;
              case 2:
                QQ[kQ] = oQ.b.FromArray(uQ);
                break;
              case 3:
                QQ[kQ] = mQ._FresnelParametersParser(uQ);
                break;
              case 4:
                QQ[kQ] = DQ.n.FromArray(uQ);
                break;
              case 5:
                QQ[kQ] = DQ.p.FromArray(uQ);
                break;
              case 6:
                wQ && (QQ[kQ] = wQ.getLastMeshById(uQ));
                break;
              case 7:
                QQ[kQ] = mQ._ColorCurvesParser(uQ);
                break;
              case 8:
                QQ[kQ] = oQ.e.FromArray(uQ);
                break;
              case 9:
                QQ[kQ] = mQ._ImageProcessingConfigurationParser(uQ);
                break;
              case 10:
                QQ[kQ] = DQ.e.FromArray(uQ);
                break;
              case 11:
                wQ && (QQ[kQ] = wQ.getCameraById(uQ));
                break;
              case 12:
                QQ[kQ] = DQ.c.FromArray(uQ);
                break;
              case 13:
                QQ[kQ] = DQ.t.FromArray(uQ)
            }
          }
        }
      }
      static Parse(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const oQ = QQ();
        return qQ.c && qQ.c.AddTagsTo(oQ, FQ.tags), mQ.ParseProperties(FQ, oQ, wQ, LQ), oQ
      }
      static Clone(QQ, FQ) {
        return vQ(QQ, FQ, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(QQ, FQ) {
        return vQ(QQ, FQ, !0)
      }
    }
    mQ.AllowLoadingUniqueId = !1, mQ._ImageProcessingConfigurationParser = QQ => {
      throw (0, LQ.k)("ImageProcessingConfiguration")
    }, mQ._FresnelParametersParser = QQ => {
      throw (0, LQ.k)("FresnelParameters")
    }, mQ._ColorCurvesParser = QQ => {
      throw (0, LQ.k)("ColorCurves")
    }, mQ._TextureParser = (QQ, FQ, wQ) => {
      throw (0, LQ.k)("Texture")
    }
  },
  39352: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => qQ
    });
    var LQ = wQ(39303);
    class qQ {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = qQ.Enabled, this._lastSecValueCount++
      }
      addCount(QQ, FQ) {
        qQ.Enabled && (this._current += QQ, this._hasCurrentValue = !0, FQ && this._fetchResult())
      }
      beginMonitoring() {
        qQ.Enabled && (this._startMonitoringTime = LQ.e.Now)
      }
      endMonitoring() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!qQ.Enabled) return;
        QQ && this.fetchNewFrame();
        const FQ = LQ.e.Now;
        this._current = FQ - this._startMonitoringTime, this._hasCurrentValue = !0, QQ && this._fetchResult()
      }
      pC() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const QQ = LQ.e.Now;
        QQ - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = QQ, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    qQ.Enabled = !0
  },
  39518: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => qQ,
      d: () => LQ
    });
    class LQ {
      constructor(QQ) {
        this.length = 0, this.data = new Array(QQ), this._id = LQ._GlobalId++
      }
      push(QQ) {
        this.data[this.length++] = QQ, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(QQ) {
        for (let FQ = 0; FQ < this.length; FQ++) QQ(this.data[FQ])
      }
      sort(QQ) {
        this.data.sort(QQ)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(QQ) {
        if (0 !== QQ.length) {
          this.length + QQ.length > this.data.length && (this.data.length = 2 * (this.length + QQ.length));
          for (let FQ = 0; FQ < QQ.length; FQ++) this.data[this.length++] = (QQ.data || QQ)[FQ]
        }
      }
      indexOf(QQ) {
        const FQ = this.data.indexOf(QQ);
        return FQ >= this.length ? -1 : FQ
      }
      contains(QQ) {
        return -1 !== this.indexOf(QQ)
      }
    }
    LQ._GlobalId = 0;
    class qQ extends LQ {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(QQ) {
        super.push(QQ), QQ.__smartArrayFlags || (QQ.__smartArrayFlags = {}), QQ.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(QQ) {
        return (!QQ.__smartArrayFlags || QQ.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(QQ), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(QQ) {
        if (0 !== QQ.length) {
          this.length + QQ.length > this.data.length && (this.data.length = 2 * (this.length + QQ.length));
          for (let FQ = 0; FQ < QQ.length; FQ++) {
            const wQ = (QQ.data || QQ)[FQ];
            this.pushNoDuplicate(wQ)
          }
        }
      }
    }
  },
  39432: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ
    });
    class LQ {
      static Eval(QQ, FQ) {
        return "true" === (QQ = QQ.match(/\([^()]*\)/g) ? QQ.replace(/\([^()]*\)/g, (QQ => (QQ = QQ.slice(1, QQ.length - 1), LQ._HandleParenthesisContent(QQ, FQ)))) : LQ._HandleParenthesisContent(QQ, FQ)) || "false" !== QQ && LQ.Eval(QQ, FQ)
      }
      static _HandleParenthesisContent(QQ, FQ) {
        let wQ;
        FQ = FQ || (QQ => "true" === QQ);
        const qQ = QQ.split("||");
        for (const oQ in qQ)
          if (Object.prototype.hasOwnProperty.call(qQ, oQ)) {
            let QQ = LQ._SimplifyNegation(qQ[oQ].trim());
            const DQ = QQ.split("&&");
            if (DQ.length > 1)
              for (let qQ = 0; qQ < DQ.length; ++qQ) {
                const oQ = LQ._SimplifyNegation(DQ[qQ].trim());
                if (wQ = "true" !== oQ && "false" !== oQ ? "!" === oQ[0] ? !FQ(oQ.substring(1)) : FQ(oQ) : "true" === oQ, !wQ) {
                  QQ = "false";
                  break
                }
              }
            if (wQ || "true" === QQ) {
              wQ = !0;
              break
            }
            wQ = "true" !== QQ && "false" !== QQ ? "!" === QQ[0] ? !FQ(QQ.substring(1)) : FQ(QQ) : "true" === QQ
          } return wQ ? "true" : "false"
      }
      static _SimplifyNegation(QQ) {
        return "!true" === (QQ = (QQ = QQ.replace(/^[\s!]+/, (QQ => (QQ = QQ.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? QQ = "false" : "!false" === QQ && (QQ = "true"), QQ
      }
    }
    class qQ {
      static EnableFor(QQ) {
        QQ._tags = QQ._tags || {}, QQ.hasTags = () => qQ.HasTags(QQ), QQ.addTags = FQ => qQ.AddTagsTo(QQ, FQ), QQ.removeTags = FQ => qQ.RemoveTagsFrom(QQ, FQ), QQ.matchesTagsQuery = FQ => qQ.MatchesQuery(QQ, FQ)
      }
      static DisableFor(QQ) {
        delete QQ._tags, delete QQ.hasTags, delete QQ.addTags, delete QQ.removeTags, delete QQ.matchesTagsQuery
      }
      static HasTags(QQ) {
        if (!QQ._tags) return !1;
        const FQ = QQ._tags;
        for (const wQ in FQ)
          if (Object.prototype.hasOwnProperty.call(FQ, wQ)) return !0;
        return !1
      }
      static GetTags(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!QQ._tags) return null;
        if (FQ) {
          const FQ = [];
          for (const wQ in QQ._tags) Object.prototype.hasOwnProperty.call(QQ._tags, wQ) && !0 === QQ._tags[wQ] && FQ.push(wQ);
          return FQ.join(" ")
        }
        return QQ._tags
      }
      static AddTagsTo(QQ, FQ) {
        if (!FQ) return;
        if ("string" !== typeof FQ) return;
        const wQ = FQ.split(" ");
        for (const LQ of wQ) qQ._AddTagTo(QQ, LQ)
      }
      static _AddTagTo(QQ, FQ) {
        "" !== (FQ = FQ.trim()) && "true" !== FQ && "false" !== FQ && (FQ.match(/[\s]/) || FQ.match(/^([!]|([|]|[&]){2})/) || (qQ.EnableFor(QQ), QQ._tags[FQ] = !0))
      }
      static RemoveTagsFrom(QQ, FQ) {
        if (!qQ.HasTags(QQ)) return;
        const wQ = FQ.split(" ");
        for (const LQ in wQ) qQ._RemoveTagFrom(QQ, wQ[LQ])
      }
      static _RemoveTagFrom(QQ, FQ) {
        delete QQ._tags[FQ]
      }
      static MatchesQuery(QQ, FQ) {
        return void 0 === FQ || ("" === FQ ? qQ.HasTags(QQ) : LQ.Eval(FQ, (FQ => qQ.HasTags(QQ) && QQ._tags[FQ])))
      }
    }
  },
  39566: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => oQ
    });
    var LQ = wQ(39561),
      qQ = wQ(36722);
    class oQ {
      constructor(QQ) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new qQ.e, this._scene = QQ
      }
      _prepareBuffers() {
        if (this._vertexBuffers[LQ.h.PositionKind]) return;
        const QQ = [];
        QQ.push(1, 1), QQ.push(-1, 1), QQ.push(-1, -1), QQ.push(1, -1), this._vertexBuffers[LQ.h.PositionKind] = new LQ.h(this._scene.Wx(), QQ, LQ.h.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const QQ = [];
        QQ.push(0), QQ.push(1), QQ.push(2), QQ.push(0), QQ.push(2), QQ.push(3), this._indexBuffer = this._scene.Wx().createIndexBuffer(QQ)
      }
      _getActivePostProcesses(QQ) {
        const FQ = this._activePostProcesses;
        FQ.length = 0;
        for (let wQ = 0; wQ < QQ.length; wQ++) {
          const LQ = QQ[wQ];
          LQ && FQ.push(LQ)
        }
        return FQ
      }
      _rebuild() {
        const QQ = this._vertexBuffers[LQ.h.PositionKind];
        QQ && (QQ._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const wQ = this._scene.activeCamera;
        return !!wQ && (FQ = FQ || this._getActivePostProcesses(wQ._postProcesses), !(!FQ || 0 === FQ.length || !this._scene.postProcessesEnabled) && (FQ[0].activate(wQ, QQ, null !== FQ && void 0 !== FQ), !0))
      }
      directRender(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          oQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          DQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : QQ.length;
        const kQ = this._scene.Wx();
        for (let vQ = 0; vQ < DQ; vQ++) {
          vQ < QQ.length - 1 ? QQ[vQ + 1].activate(this._scene.activeCamera || this._scene, FQ?.texture) : (FQ ? kQ.bindFramebuffer(FQ, LQ, void 0, void 0, wQ, qQ) : oQ || kQ.restoreDefaultFramebuffer(), kQ._debugInsertMarker?.(`post process ${QQ[vQ].name} output`));
          const DQ = QQ[vQ],
            mQ = DQ.apply();
          mQ && (DQ.onBeforeRenderObservable.notifyObservers(mQ), this._prepareBuffers(), kQ.bindBuffers(this._vertexBuffers, this._indexBuffer, mQ), kQ.drawElementsType(0, 0, 6), DQ.onAfterRenderObservable.notifyObservers(mQ))
        }
        kQ.setDepthBuffer(!0), kQ.setDepthWrite(!0)
      }
      _finalizeFrame(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const oQ = this._scene.activeCamera;
        if (!oQ) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (LQ = LQ || this._getActivePostProcesses(oQ._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const DQ = this._scene.Wx();
        for (let kQ = 0, vQ = LQ.length; kQ < vQ; kQ++) {
          const mQ = LQ[kQ];
          if (kQ < vQ - 1 ? mQ._outputTexture = LQ[kQ + 1].activate(oQ, FQ?.texture) : (FQ ? (DQ.bindFramebuffer(FQ, wQ, void 0, void 0, qQ), mQ._outputTexture = FQ) : (DQ.restoreDefaultFramebuffer(), mQ._outputTexture = null), DQ._debugInsertMarker?.(`post process ${LQ[kQ].name} output`)), QQ) break;
          const uQ = mQ.apply();
          uQ && (mQ.onBeforeRenderObservable.notifyObservers(uQ), this._prepareBuffers(), DQ.bindBuffers(this._vertexBuffers, this._indexBuffer, uQ), DQ.drawElementsType(0, 0, 6), mQ.onAfterRenderObservable.notifyObservers(uQ))
        }
        DQ.setDepthBuffer(!0), DQ.setDepthWrite(!0), DQ.setAlphaMode(0)
      }
      dispose() {
        const QQ = this._vertexBuffers[LQ.h.PositionKind];
        QQ && (QQ.dispose(), this._vertexBuffers[LQ.h.PositionKind] = null), this._indexBuffer && (this._scene.Wx()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  39582: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ
    });
    var LQ = wQ(39518),
      qQ = wQ(36696);
    class oQ {
      set opaqueSortCompareFn(QQ) {
        this._opaqueSortCompareFn = QQ || oQ.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(QQ) {
        this._alphaTestSortCompareFn = QQ || oQ.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(QQ) {
        this._transparentSortCompareFn = QQ || oQ.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          oQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = QQ, this._opaqueSubMeshes = new LQ.d(256), this._transparentSubMeshes = new LQ.d(256), this._alphaTestSubMeshes = new LQ.d(256), this._depthOnlySubMeshes = new LQ.d(256), this._particleSystems = new LQ.d(256), this._spriteManagers = new LQ.d(256), this._empty = !0, this._edgesRenderers = new LQ.b(16), this.disableDepthPrePass = !1, this._scene = FQ, this.opaqueSortCompareFn = wQ, this.alphaTestSortCompareFn = qQ, this.transparentSortCompareFn = oQ
      }
      render(QQ, FQ, wQ, LQ) {
        let qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          oQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          DQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          kQ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          vQ = arguments.length > 8 ? arguments[8] : void 0;
        if (QQ) return void QQ(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const mQ = this._scene.Wx();
        qQ && 0 !== this._depthOnlySubMeshes.length && (mQ.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), mQ.setColorWrite(!0)), oQ && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), DQ && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const uQ = mQ.getStencilBuffer();
        if (mQ.setStencilBuffer(!1), FQ && this._renderSprites(), wQ && this._renderParticles(LQ), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), kQ && (vQ || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (mQ.setStencilBuffer(uQ), vQ) vQ(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const QQ = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            QQ.length && this._renderTransparent(QQ)
          } else this._renderTransparent(this._transparentSubMeshes);
          mQ.setAlphaMode(0)
        }
        if (mQ.setStencilBuffer(!1), oQ && this._edgesRenderers.length) {
          for (let QQ = 0; QQ < this._edgesRenderers.length; QQ++) this._edgesRenderers.data[QQ].render();
          mQ.setAlphaMode(0)
        }
        mQ.setStencilBuffer(uQ)
      }
      _renderOpaqueSorted(QQ) {
        oQ._RenderSorted(QQ, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(QQ) {
        oQ._RenderSorted(QQ, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(QQ) {
        oQ._RenderSorted(QQ, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(QQ, FQ, wQ, LQ, DQ) {
        let kQ, vQ = 0;
        const mQ = wQ ? wQ.globalPosition : oQ._ZeroVector;
        if (LQ && FQ !== oQ.PainterSortCompare)
          for (; vQ < QQ.length; vQ++) kQ = QQ.data[vQ], kQ._alphaIndex = kQ.getMesh().alphaIndex, kQ._distanceToCamera = qQ.p.Distance(kQ.sK().BLQ.centerWorld, mQ);
        const uQ = QQ.length === QQ.data.length ? QQ.data : QQ.data.slice(0, QQ.length);
        FQ && uQ.sort(FQ);
        const HQ = uQ[0].getMesh().iN();
        for (vQ = 0; vQ < uQ.length; vQ++) {
          if (kQ = uQ[vQ], HQ._activeMeshesFrozenButKeepClipping && !kQ.isInFrustum(HQ._frustumPlanes)) continue;
          let QQ = !1;
          if (LQ) {
            const FQ = kQ.Ux();
            if (FQ && FQ.needDepthPrePass && !DQ) {
              QQ = !0;
              const wQ = FQ.iN().Wx();
              wQ.setColorWrite(!1), wQ.setAlphaMode(0), kQ.render(!1), wQ.setColorWrite(!0)
            }
          }
          const FQ = kQ._renderingMesh;
          !QQ && FQ._renderRunFollower(kQ, LQ) || kQ.render(LQ)
        }
      }
      static defaultTransparentSortCompare(QQ, FQ) {
        return QQ._alphaIndex > FQ._alphaIndex ? 1 : QQ._alphaIndex < FQ._alphaIndex ? -1 : oQ.backToFrontSortCompare(QQ, FQ)
      }
      static backToFrontSortCompare(QQ, FQ) {
        return QQ._distanceToCamera < FQ._distanceToCamera ? 1 : QQ._distanceToCamera > FQ._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(QQ, FQ) {
        return QQ._distanceToCamera < FQ._distanceToCamera ? -1 : QQ._distanceToCamera > FQ._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(QQ, FQ) {
        const wQ = QQ.getMesh(),
          LQ = FQ.getMesh();
        return wQ.material && LQ.material ? wQ.material.uniqueId - LQ.material.uniqueId : wQ.uniqueId - LQ.uniqueId
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
      dispatch(QQ, FQ, wQ) {
        void 0 === FQ && (FQ = QQ.getMesh()), void 0 === wQ && (wQ = QQ.Ux()), null !== wQ && void 0 !== wQ && (wQ.needAlphaBlendingForMesh(FQ) ? this._transparentSubMeshes.push(QQ) : wQ.needAlphaTestingForMesh(FQ) ? (wQ.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(QQ), this._alphaTestSubMeshes.push(QQ)) : (wQ.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(QQ), this._opaqueSubMeshes.push(QQ)), FQ._renderingGroup = this, FQ._edgesRenderer && FQ.isEnabled() && FQ.isVisible && FQ._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(FQ._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(QQ) {
        this._spriteManagers.push(QQ), this._empty = !1
      }
      dispatchParticles(QQ) {
        this._particleSystems.push(QQ), this._empty = !1
      }
      _renderParticles(QQ) {
        if (0 === this._particleSystems.length) return;
        const FQ = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let wQ = 0; wQ < this._particleSystems.length; wQ++) {
          const LQ = this._particleSystems.data[wQ];
          if (0 === (FQ && FQ.layerMask & LQ.layerMask)) continue;
          const qQ = LQ.emitter;
          qQ.position && QQ && -1 === QQ.indexOf(qQ) || this._scene._activeParticles.addCount(LQ.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const QQ = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let FQ = 0; FQ < this._spriteManagers.length; FQ++) {
          const wQ = this._spriteManagers.data[FQ];
          0 !== (QQ && QQ.layerMask & wQ.layerMask) && wQ.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    oQ._ZeroVector = qQ.p.Zero()
  },
  39574: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => oQ
    });
    var LQ = wQ(39582);
    class qQ {}
    class oQ {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(QQ) {
        this._disableDepthPrePass = QQ;
        for (const FQ of this._renderingGroups) FQ.disableDepthPrePass = QQ
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(QQ) {
        QQ !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = QQ, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const QQ of this._scene.meshes)
          if (QQ.lC)
            for (const FQ of QQ.lC) FQ._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const QQ of this._scene.spriteManagers) QQ._wasDispatched = !1;
        for (const QQ of this._scene.fC) QQ._wasDispatched = !1
      }
      constructor(QQ) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new qQ, this._maintainStateBetweenFrames = !1, this._scene = QQ;
        for (let FQ = oQ.MIN_RENDERINGGROUPS; FQ < oQ.MAX_RENDERINGGROUPS; FQ++) this._autoClearDepthStencil[FQ] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(QQ) {
        const FQ = QQ || 0;
        return this._prepareRenderingGroup(FQ), this._renderingGroups[FQ]
      }
      _clearDepthStencilBuffer() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.Wx().clear(null, !1, QQ, FQ), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(QQ, FQ, wQ, LQ) {
        let qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          DQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          kQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          vQ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          mQ = arguments.length > 8 ? arguments[8] : void 0,
          uQ = arguments.length > 9 ? arguments[9] : void 0;
        const HQ = this._renderingGroupInfo;
        HQ.lA = this._scene, HQ.camera = this._scene.activeCamera, HQ.renderingManager = this;
        const bQ = uQ ?? this._scene.spriteManagers;
        if (bQ && LQ)
          for (let oQ = 0; oQ < bQ.length; oQ++) {
            const QQ = bQ[oQ];
            this.dispatchSprites(QQ)
          }
        for (let YQ = oQ.MIN_RENDERINGGROUPS; YQ < oQ.MAX_RENDERINGGROUPS; YQ++) {
          this._depthStencilBufferAlreadyCleaned = YQ === oQ.MIN_RENDERINGGROUPS;
          const uQ = this._renderingGroups[YQ];
          if (!uQ || uQ._empty) continue;
          const bQ = 1 << YQ;
          if (HQ.renderingGroupId = YQ, this._scene.onBeforeRenderingGroupObservable.notifyObservers(HQ, bQ), oQ.AUTOCLEAR) {
            const QQ = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(YQ) : this._autoClearDepthStencil[YQ];
            QQ && QQ.autoClear && this._clearDepthStencilBuffer(QQ.depth, QQ.stencil)
          }
          for (let QQ = 0, FQ = this._scene._beforeRenderingGroupDrawStage; QQ < FQ.length; QQ++) {
            FQ[QQ].action(YQ)
          }
          uQ.render(QQ, LQ, wQ, FQ, qQ, DQ, kQ, vQ, mQ);
          for (let QQ = 0, FQ = this._scene._afterRenderingGroupDrawStage; QQ < FQ.length; QQ++) {
            FQ[QQ].action(YQ)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(HQ, bQ)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let QQ = oQ.MIN_RENDERINGGROUPS; QQ < oQ.MAX_RENDERINGGROUPS; QQ++) {
            const FQ = this._renderingGroups[QQ];
            FQ && FQ.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let QQ = oQ.MIN_RENDERINGGROUPS; QQ < oQ.MAX_RENDERINGGROUPS; QQ++) {
            const FQ = this._renderingGroups[QQ];
            FQ && FQ.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let QQ = oQ.MIN_RENDERINGGROUPS; QQ < oQ.MAX_RENDERINGGROUPS; QQ++) {
          const FQ = this._renderingGroups[QQ];
          FQ && FQ.dispose()
        }
      }
      _prepareRenderingGroup(QQ) {
        void 0 === this._renderingGroups[QQ] && (this._renderingGroups[QQ] = new LQ.e(QQ, this._scene, this._customOpaqueSortCompareFn[QQ], this._customAlphaTestSortCompareFn[QQ], this._customTransparentSortCompareFn[QQ]), this._renderingGroups[QQ].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(QQ) {
        this.maintainStateBetweenFrames && QQ._wasDispatched || (QQ._wasDispatched = !0, this.getRenderingGroup(QQ.renderingGroupId).dispatchSprites(QQ))
      }
      dispatchParticles(QQ) {
        this.maintainStateBetweenFrames && QQ._wasDispatched || (QQ._wasDispatched = !0, this.getRenderingGroup(QQ.renderingGroupId).dispatchParticles(QQ))
      }
      dispatch(QQ, FQ, wQ) {
        void 0 === FQ && (FQ = QQ.getMesh()), this.maintainStateBetweenFrames && QQ._wasDispatched || (QQ._wasDispatched = !0, this.getRenderingGroup(FQ.renderingGroupId).dispatch(QQ, FQ, wQ))
      }
      setRenderingOrder(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[QQ] = FQ, this._customAlphaTestSortCompareFn[QQ] = wQ, this._customTransparentSortCompareFn[QQ] = LQ, this._renderingGroups[QQ]) {
          const FQ = this._renderingGroups[QQ];
          FQ.opaqueSortCompareFn = this._customOpaqueSortCompareFn[QQ], FQ.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[QQ], FQ.transparentSortCompareFn = this._customTransparentSortCompareFn[QQ]
        }
      }
      setRenderingAutoClearDepthStencil(QQ, FQ) {
        let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[QQ] = {
          autoClear: FQ,
          depth: wQ,
          stencil: LQ
        }
      }
      getAutoClearDepthStencilSetup(QQ) {
        return this._autoClearDepthStencil[QQ]
      }
    }
    oQ.MAX_RENDERINGGROUPS = 4, oQ.MIN_RENDERINGGROUPS = 0, oQ.AUTOCLEAR = !0
  },
  39309: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ
    });
    class LQ {
      constructor(QQ) {
        this._supportBlendParametersPerTarget = QQ, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(QQ) {
        this.setAlphaBlend(QQ)
      }
      setAlphaBlend(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[FQ] !== QQ && (QQ ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[FQ] = QQ, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(QQ, FQ, wQ, LQ) {
        this._blendConstants[0] === QQ && this._blendConstants[1] === FQ && this._blendConstants[2] === wQ && this._blendConstants[3] === LQ || (this._blendConstants[0] = QQ, this._blendConstants[1] = FQ, this._blendConstants[2] = wQ, this._blendConstants[3] = LQ, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(QQ, FQ, wQ, LQ) {
        const qQ = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[qQ + 0] === QQ && this._blendFunctionParameters[qQ + 1] === FQ && this._blendFunctionParameters[qQ + 2] === wQ && this._blendFunctionParameters[qQ + 3] === LQ || (this._blendFunctionParameters[qQ + 0] = QQ, this._blendFunctionParameters[qQ + 1] = FQ, this._blendFunctionParameters[qQ + 2] = wQ, this._blendFunctionParameters[qQ + 3] = LQ, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(QQ, FQ) {
        const wQ = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[wQ + 0] === QQ && this._blendEquationParameters[wQ + 1] === FQ || (this._blendEquationParameters[wQ + 0] = QQ, this._blendEquationParameters[wQ + 1] = FQ, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== FQ && (this._numTargets = FQ, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== wQ && (this._blendDisabledTargetsMask = wQ, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (QQ.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === FQ || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (FQ > 1 && 0 !== wQ && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & wQ) ? QQ.enable(QQ.BLEND) : QQ.disable(QQ.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (QQ.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (QQ.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const LQ = QQ;
        if (this._isAlphaBlendDirty) {
          for (let qQ = 0; qQ < FQ; qQ++) {
            const FQ = qQ < this._numTargetEnabled ? qQ : 0;
            this._alphaBlend[FQ] && 0 === (wQ & 1 << qQ) ? LQ.enableIndexed(QQ.BLEND, qQ) : LQ.disableIndexed(QQ.BLEND, qQ)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let QQ = 0; QQ < FQ; QQ++) {
            const FQ = QQ < this._numTargetEnabled ? 4 * QQ : 0;
            LQ.blendFuncSeparateIndexed(QQ, this._blendFunctionParameters[FQ + 0], this._blendFunctionParameters[FQ + 1], this._blendFunctionParameters[FQ + 2], this._blendFunctionParameters[FQ + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let QQ = 0; QQ < FQ; QQ++) {
            const FQ = QQ < this._numTargetEnabled ? 2 * QQ : 0;
            LQ.blendEquationSeparateIndexed(QQ, this._blendEquationParameters[FQ + 0], this._blendEquationParameters[FQ + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(QQ, FQ) {
        let wQ = 32774;
        switch (QQ) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, FQ);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, FQ);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, FQ);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, FQ);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, FQ);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, FQ);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, FQ);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, FQ);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, FQ);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, FQ);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, FQ);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, FQ);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, FQ);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, FQ);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, FQ);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, FQ);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, FQ), wQ = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, FQ), wQ = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, FQ);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, FQ)
        }
        this.setAlphaEquationParameters(wQ, wQ, FQ)
      }
    }
  },
  39617: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {}
    LQ._IsPickingAvailable = !1
  },
  39496: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => kw,
      e: () => ow
    });
    var LQ = wQ(39505),
      qQ = wQ(39289),
      oQ = wQ(39303),
      DQ = wQ(36722),
      kQ = wQ(39518);
    class vQ {
      constructor() {
        this._count = 0, this._data = {}
      }
      Qs(QQ) {
        this.clear(), QQ.forEach(((QQ, FQ) => this.add(QQ, FQ)))
      }
      get(QQ) {
        const FQ = this._data[QQ];
        if (void 0 !== FQ) return FQ
      }
      getOrAddWithFactory(QQ, FQ) {
        let wQ = this.get(QQ);
        return void 0 !== wQ || (wQ = FQ(QQ), wQ && this.add(QQ, wQ)), wQ
      }
      getOrAdd(QQ, FQ) {
        const wQ = this.get(QQ);
        return void 0 !== wQ ? wQ : (this.add(QQ, FQ), FQ)
      }
      contains(QQ) {
        return void 0 !== this._data[QQ]
      }
      add(QQ, FQ) {
        return void 0 === this._data[QQ] && (this._data[QQ] = FQ, ++this._count, !0)
      }
      set(QQ, FQ) {
        return void 0 !== this._data[QQ] && (this._data[QQ] = FQ, !0)
      }
      getAndRemove(QQ) {
        const FQ = this.get(QQ);
        return void 0 !== FQ ? (delete this._data[QQ], --this._count, FQ) : null
      }
      remove(QQ) {
        return !!this.contains(QQ) && (delete this._data[QQ], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(QQ) {
        for (const FQ in this._data) {
          QQ(FQ, this._data[FQ])
        }
      }
      first(QQ) {
        for (const FQ in this._data) {
          const wQ = QQ(FQ, this._data[FQ]);
          if (wQ) return wQ
        }
        return null
      }
    }
    var mQ = wQ(39432),
      uQ = wQ(36696),
      HQ = wQ(39527),
      bQ = wQ(39550),
      YQ = wQ(39552);
    class xQ {
      constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
        this.source = QQ, this.pointerX = FQ, this.pointerY = wQ, this.meshUnderPointer = LQ, this.sourceEvent = qQ, this.additionalData = oQ
      }
      static CreateNew(QQ, FQ, wQ) {
        const LQ = QQ.iN();
        return new xQ(QQ, LQ.pointerX, LQ.pointerY, LQ.meshUnderPointer || QQ, FQ, wQ)
      }
      static CreateNewFromSprite(QQ, FQ, wQ, LQ) {
        return new xQ(QQ, FQ.pointerX, FQ.pointerY, FQ.meshUnderPointer, wQ, LQ)
      }
      static CreateNewFromScene(QQ, FQ) {
        return new xQ(null, QQ.pointerX, QQ.pointerY, QQ.meshUnderPointer, FQ)
      }
      static CreateNewFromPrimitive(QQ, FQ, wQ, LQ) {
        return new xQ(QQ, FQ.x, FQ.y, null, wQ, LQ)
      }
    }
    var AQ = wQ(39566),
      tQ = wQ(39571),
      eQ = wQ(39574),
      MQ = wQ(39589),
      GQ = wQ(39264),
      pQ = wQ(36720),
      cQ = wQ(39277),
      CQ = wQ(39595);
    class SQ {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const QQ in SQ.Triggers)
          if (Object.prototype.hasOwnProperty.call(SQ.Triggers, QQ)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const QQ in SQ.Triggers)
          if (Object.prototype.hasOwnProperty.call(SQ.Triggers, QQ)) {
            const FQ = parseInt(QQ);
            if (FQ >= 1 && FQ <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(QQ) {
        for (const FQ in SQ.Triggers)
          if (Object.prototype.hasOwnProperty.call(SQ.Triggers, FQ)) {
            if (parseInt(FQ) === QQ) return !0
          } return !1
      }
    }
    SQ.Triggers = {};
    var iQ, WQ, RQ, OQ, sQ, rQ, IQ, UQ = wQ(39601);
    ! function(QQ) {
      QQ[QQ.Generic = 0] = "Generic", QQ[QQ.Keyboard = 1] = "Keyboard", QQ[QQ.Mouse = 2] = "Mouse", QQ[QQ.Touch = 3] = "Touch", QQ[QQ.DualShock = 4] = "DualShock", QQ[QQ.Xbox = 5] = "Xbox", QQ[QQ.Switch = 6] = "Switch", QQ[QQ.DualSense = 7] = "DualSense"
    }(iQ || (iQ = {})),
    function(QQ) {
      QQ[QQ.Horizontal = 0] = "Horizontal", QQ[QQ.Vertical = 1] = "Vertical", QQ[QQ.LeftClick = 2] = "LeftClick", QQ[QQ.MiddleClick = 3] = "MiddleClick", QQ[QQ.RightClick = 4] = "RightClick", QQ[QQ.BrowserBack = 5] = "BrowserBack", QQ[QQ.BrowserForward = 6] = "BrowserForward", QQ[QQ.MouseWheelX = 7] = "MouseWheelX", QQ[QQ.MouseWheelY = 8] = "MouseWheelY", QQ[QQ.MouseWheelZ = 9] = "MouseWheelZ", QQ[QQ.Move = 12] = "Move"
    }(WQ || (WQ = {})),
    function(QQ) {
      QQ[QQ.Horizontal = 0] = "Horizontal", QQ[QQ.Vertical = 1] = "Vertical", QQ[QQ.LeftClick = 2] = "LeftClick", QQ[QQ.MiddleClick = 3] = "MiddleClick", QQ[QQ.RightClick = 4] = "RightClick", QQ[QQ.BrowserBack = 5] = "BrowserBack", QQ[QQ.BrowserForward = 6] = "BrowserForward", QQ[QQ.MouseWheelX = 7] = "MouseWheelX", QQ[QQ.MouseWheelY = 8] = "MouseWheelY", QQ[QQ.MouseWheelZ = 9] = "MouseWheelZ", QQ[QQ.DeltaHorizontal = 10] = "DeltaHorizontal", QQ[QQ.DeltaVertical = 11] = "DeltaVertical"
    }(RQ || (RQ = {})),
    function(QQ) {
      QQ[QQ.Cross = 0] = "Cross", QQ[QQ.Circle = 1] = "Circle", QQ[QQ.Square = 2] = "Square", QQ[QQ.Triangle = 3] = "Triangle", QQ[QQ.L1 = 4] = "L1", QQ[QQ.R1 = 5] = "R1", QQ[QQ.L2 = 6] = "L2", QQ[QQ.R2 = 7] = "R2", QQ[QQ.Share = 8] = "Share", QQ[QQ.Options = 9] = "Options", QQ[QQ.L3 = 10] = "L3", QQ[QQ.R3 = 11] = "R3", QQ[QQ.DPadUp = 12] = "DPadUp", QQ[QQ.DPadDown = 13] = "DPadDown", QQ[QQ.DPadLeft = 14] = "DPadLeft", QQ[QQ.DPadRight = 15] = "DPadRight", QQ[QQ.Home = 16] = "Home", QQ[QQ.TouchPad = 17] = "TouchPad", QQ[QQ.LStickXAxis = 18] = "LStickXAxis", QQ[QQ.LStickYAxis = 19] = "LStickYAxis", QQ[QQ.RStickXAxis = 20] = "RStickXAxis", QQ[QQ.RStickYAxis = 21] = "RStickYAxis"
    }(OQ || (OQ = {})),
    function(QQ) {
      QQ[QQ.Cross = 0] = "Cross", QQ[QQ.Circle = 1] = "Circle", QQ[QQ.Square = 2] = "Square", QQ[QQ.Triangle = 3] = "Triangle", QQ[QQ.L1 = 4] = "L1", QQ[QQ.R1 = 5] = "R1", QQ[QQ.L2 = 6] = "L2", QQ[QQ.R2 = 7] = "R2", QQ[QQ.Create = 8] = "Create", QQ[QQ.Options = 9] = "Options", QQ[QQ.L3 = 10] = "L3", QQ[QQ.R3 = 11] = "R3", QQ[QQ.DPadUp = 12] = "DPadUp", QQ[QQ.DPadDown = 13] = "DPadDown", QQ[QQ.DPadLeft = 14] = "DPadLeft", QQ[QQ.DPadRight = 15] = "DPadRight", QQ[QQ.Home = 16] = "Home", QQ[QQ.TouchPad = 17] = "TouchPad", QQ[QQ.LStickXAxis = 18] = "LStickXAxis", QQ[QQ.LStickYAxis = 19] = "LStickYAxis", QQ[QQ.RStickXAxis = 20] = "RStickXAxis", QQ[QQ.RStickYAxis = 21] = "RStickYAxis"
    }(sQ || (sQ = {})),
    function(QQ) {
      QQ[QQ.A = 0] = "A", QQ[QQ.B = 1] = "B", QQ[QQ.X = 2] = "X", QQ[QQ.Y = 3] = "Y", QQ[QQ.LB = 4] = "LB", QQ[QQ.RB = 5] = "RB", QQ[QQ.LT = 6] = "LT", QQ[QQ.RT = 7] = "RT", QQ[QQ.Back = 8] = "Back", QQ[QQ.Start = 9] = "Start", QQ[QQ.LS = 10] = "LS", QQ[QQ.RS = 11] = "RS", QQ[QQ.DPadUp = 12] = "DPadUp", QQ[QQ.DPadDown = 13] = "DPadDown", QQ[QQ.DPadLeft = 14] = "DPadLeft", QQ[QQ.DPadRight = 15] = "DPadRight", QQ[QQ.Home = 16] = "Home", QQ[QQ.LStickXAxis = 17] = "LStickXAxis", QQ[QQ.LStickYAxis = 18] = "LStickYAxis", QQ[QQ.RStickXAxis = 19] = "RStickXAxis", QQ[QQ.RStickYAxis = 20] = "RStickYAxis"
    }(rQ || (rQ = {})),
    function(QQ) {
      QQ[QQ.B = 0] = "B", QQ[QQ.A = 1] = "A", QQ[QQ.Y = 2] = "Y", QQ[QQ.X = 3] = "X", QQ[QQ.L = 4] = "L", QQ[QQ.R = 5] = "R", QQ[QQ.ZL = 6] = "ZL", QQ[QQ.ZR = 7] = "ZR", QQ[QQ.Minus = 8] = "Minus", QQ[QQ.Plus = 9] = "Plus", QQ[QQ.LS = 10] = "LS", QQ[QQ.RS = 11] = "RS", QQ[QQ.DPadUp = 12] = "DPadUp", QQ[QQ.DPadDown = 13] = "DPadDown", QQ[QQ.DPadLeft = 14] = "DPadLeft", QQ[QQ.DPadRight = 15] = "DPadRight", QQ[QQ.Home = 16] = "Home", QQ[QQ.Capture = 17] = "Capture", QQ[QQ.LStickXAxis = 18] = "LStickXAxis", QQ[QQ.LStickYAxis = 19] = "LStickYAxis", QQ[QQ.RStickXAxis = 20] = "RStickXAxis", QQ[QQ.RStickYAxis = 21] = "RStickYAxis"
    }(IQ || (IQ = {}));
    var NQ = wQ(39610);
    class TQ {
      static CreateDeviceEvent(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        switch (QQ) {
          case iQ.Keyboard:
            return this._CreateKeyboardEvent(wQ, LQ, qQ, oQ);
          case iQ.Mouse:
            if (wQ === WQ.MouseWheelX || wQ === WQ.MouseWheelY || wQ === WQ.MouseWheelZ) return this._CreateWheelEvent(QQ, FQ, wQ, LQ, qQ, oQ);
          case iQ.Touch:
            return this._CreatePointerEvent(QQ, FQ, wQ, LQ, qQ, oQ, DQ);
          default:
            throw `Unable to generate event for device ${iQ[QQ]}`
        }
      }
      static _CreatePointerEvent(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        const kQ = this._CreateMouseEvent(QQ, FQ, wQ, LQ, qQ, oQ);
        QQ === iQ.Mouse ? (kQ.deviceType = iQ.Mouse, kQ.pointerId = 1, kQ.pointerType = "mouse") : (kQ.deviceType = iQ.Touch, kQ.pointerId = DQ ?? FQ, kQ.pointerType = "touch");
        let vQ = 0;
        return vQ += qQ.pollInput(QQ, FQ, WQ.LeftClick), vQ += 2 * qQ.pollInput(QQ, FQ, WQ.RightClick), vQ += 4 * qQ.pollInput(QQ, FQ, WQ.MiddleClick), kQ.buttons = vQ, wQ === WQ.Move ? kQ.type = "pointermove" : wQ >= WQ.LeftClick && wQ <= WQ.RightClick && (kQ.type = 1 === LQ ? "pointerdown" : "pointerup", kQ.button = wQ - 2), kQ
      }
      static _CreateWheelEvent(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = this._CreateMouseEvent(QQ, FQ, wQ, LQ, qQ, oQ);
        switch (DQ.pointerId = 1, DQ.type = "wheel", DQ.deltaMode = NQ.c.DOM_DELTA_PIXEL, DQ.deltaX = 0, DQ.deltaY = 0, DQ.deltaZ = 0, wQ) {
          case WQ.MouseWheelX:
            DQ.deltaX = LQ;
            break;
          case WQ.MouseWheelY:
            DQ.deltaY = LQ;
            break;
          case WQ.MouseWheelZ:
            DQ.deltaZ = LQ
        }
        return DQ
      }
      static _CreateMouseEvent(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = this._CreateEvent(oQ),
          kQ = qQ.pollInput(QQ, FQ, WQ.Horizontal),
          vQ = qQ.pollInput(QQ, FQ, WQ.Vertical);
        return oQ ? (DQ.movementX = 0, DQ.movementY = 0, DQ.offsetX = DQ.movementX - oQ.getBoundingClientRect().x, DQ.offsetY = DQ.movementY - oQ.getBoundingClientRect().y) : (DQ.movementX = qQ.pollInput(QQ, FQ, 10), DQ.movementY = qQ.pollInput(QQ, FQ, 11), DQ.offsetX = 0, DQ.offsetY = 0), this._CheckNonCharacterKeys(DQ, qQ), DQ.clientX = kQ, DQ.clientY = vQ, DQ.x = kQ, DQ.y = vQ, DQ.deviceType = QQ, DQ.deviceSlot = FQ, DQ.inputIndex = wQ, DQ
      }
      static _CreateKeyboardEvent(QQ, FQ, wQ, LQ) {
        const qQ = this._CreateEvent(LQ);
        return this._CheckNonCharacterKeys(qQ, wQ), qQ.deviceType = iQ.Keyboard, qQ.deviceSlot = 0, qQ.inputIndex = QQ, qQ.type = 1 === FQ ? "keydown" : "keyup", qQ.key = String.fromCharCode(QQ), qQ.keyCode = QQ, qQ
      }
      static _CheckNonCharacterKeys(QQ, FQ) {
        const wQ = FQ.isDeviceAvailable(iQ.Keyboard),
          LQ = wQ && 1 === FQ.pollInput(iQ.Keyboard, 0, 18),
          qQ = wQ && 1 === FQ.pollInput(iQ.Keyboard, 0, 17),
          oQ = wQ && (1 === FQ.pollInput(iQ.Keyboard, 0, 91) || 1 === FQ.pollInput(iQ.Keyboard, 0, 92) || 1 === FQ.pollInput(iQ.Keyboard, 0, 93)),
          DQ = wQ && 1 === FQ.pollInput(iQ.Keyboard, 0, 16);
        QQ.altKey = LQ, QQ.ctrlKey = qQ, QQ.metaKey = oQ, QQ.shiftKey = DQ
      }
      static _CreateEvent(QQ) {
        const FQ = {
          preventDefault: () => {}
        };
        return FQ.target = QQ, FQ
      }
    }
    class KQ {
      constructor(QQ, FQ, wQ) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(QQ, FQ, ((QQ, FQ, LQ, qQ) => {
          const oQ = TQ.CreateDeviceEvent(QQ, FQ, LQ, qQ, this);
          wQ(QQ, FQ, oQ)
        })) : this._createDummyNativeInput()
      }
      pollInput(QQ, FQ, wQ) {
        return this._nativeInput.pollInput(QQ, FQ, wQ)
      }
      isDeviceAvailable(QQ) {
        return QQ === iQ.Mouse || QQ === iQ.Touch
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
    const zQ = Object.keys(WQ).length / 2;
    class lQ {
      constructor(QQ, FQ, wQ, qQ) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = LQ.g.IsSafari(), this._usingMacOs = (0, GQ.f)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = QQ => {}, this._keyboardUpEvent = QQ => {}, this._keyboardBlurEvent = QQ => {}, this._pointerMoveEvent = QQ => {}, this._pointerDownEvent = QQ => {}, this._pointerUpEvent = QQ => {}, this._pointerCancelEvent = QQ => {}, this._pointerCancelTouch = QQ => {}, this._pointerLeaveEvent = QQ => {}, this._pointerWheelEvent = QQ => {}, this._pointerBlurEvent = QQ => {}, this._pointerMacOsChromeOutEvent = QQ => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, GQ.f)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, GQ.f)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = QQ => {}, this._gamepadDisconnectedEvent = QQ => {}, this._eventPrefix = LQ.g.GetPointerPrefix(QQ), this._engine = QQ, this._onDeviceConnected = FQ, this._onDeviceDisconnected = wQ, this._onInputChanged = qQ, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(QQ, FQ, wQ) {
        const qQ = this._inputs[QQ][FQ];
        if (!qQ) throw `Unable to find device ${iQ[QQ]}`;
        QQ >= iQ.DualShock && QQ <= iQ.DualSense && this._updateDevice(QQ, FQ, wQ);
        const oQ = qQ[wQ];
        if (void 0 === oQ) throw `Unable to find input ${wQ} for device ${iQ[QQ]} in slot ${FQ}`;
        return wQ === WQ.Move && LQ.g.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), oQ
      }
      isDeviceAvailable(QQ) {
        return void 0 !== this._inputs[QQ]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const QQ = this?._engine.getInputElement();
        if (QQ && (!this._eventsAttached || this._elementToAttachTo !== QQ)) {
          if (this._disableEvents(), this._inputs)
            for (const QQ of this._inputs)
              if (QQ)
                for (const FQ in QQ) {
                  const wQ = QQ[+FQ];
                  if (wQ)
                    for (let QQ = 0; QQ < wQ.length; QQ++) wQ[QQ] = 0
                }
          this._elementToAttachTo = QQ, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const QQ = navigator.getGamepads();
          for (const FQ of QQ) FQ && this._addGamePad(FQ)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(iQ.Mouse, 0, 0, 0)
      }
      _addGamePad(QQ) {
        const FQ = this._getGamepadDeviceType(QQ.id),
          wQ = QQ.index;
        this._gamepads = this._gamepads || new Array(QQ.index + 1), this._registerDevice(FQ, wQ, QQ.buttons.length + QQ.axes.length), this._gamepads[wQ] = FQ
      }
      _addPointerDevice(QQ, FQ, wQ, LQ) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(QQ, FQ, zQ);
        const qQ = this._inputs[QQ][FQ];
        qQ[0] = wQ, qQ[1] = LQ
      }
      _registerDevice(QQ, FQ, wQ) {
        if (void 0 === FQ) throw `Unable to register device ${iQ[QQ]} to undefined slot.`;
        if (this._inputs[QQ] || (this._inputs[QQ] = {}), !this._inputs[QQ][FQ]) {
          const LQ = new Array(wQ);
          LQ.fill(0), this._inputs[QQ][FQ] = LQ, this._onDeviceConnected(QQ, FQ)
        }
      }
      _unregisterDevice(QQ, FQ) {
        this._inputs[QQ][FQ] && (delete this._inputs[QQ][FQ], this._onDeviceDisconnected(QQ, FQ))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = QQ => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(iQ.Keyboard, 0, 255));
          const FQ = this._inputs[iQ.Keyboard][0];
          if (FQ) {
            FQ[QQ.keyCode] = 1;
            const wQ = QQ;
            wQ.inputIndex = QQ.keyCode, this._usingMacOs && QQ.metaKey && "Meta" !== QQ.key && (this._metaKeys.includes(QQ.keyCode) || this._metaKeys.push(QQ.keyCode)), this._onInputChanged(iQ.Keyboard, 0, wQ)
          }
        }, this._keyboardUpEvent = QQ => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(iQ.Keyboard, 0, 255));
          const FQ = this._inputs[iQ.Keyboard][0];
          if (FQ) {
            FQ[QQ.keyCode] = 0;
            const wQ = QQ;
            if (wQ.inputIndex = QQ.keyCode, this._usingMacOs && "Meta" === QQ.key && this._metaKeys.length > 0) {
              for (const QQ of this._metaKeys) {
                const wQ = TQ.CreateDeviceEvent(iQ.Keyboard, 0, QQ, 0, this, this._elementToAttachTo);
                FQ[QQ] = 0, this._onInputChanged(iQ.Keyboard, 0, wQ)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(iQ.Keyboard, 0, wQ)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const QQ = this._inputs[iQ.Keyboard][0];
            for (let FQ = 0; FQ < QQ.length; FQ++)
              if (0 !== QQ[FQ]) {
                QQ[FQ] = 0;
                const wQ = TQ.CreateDeviceEvent(iQ.Keyboard, 0, FQ, 0, this, this._elementToAttachTo);
                this._onInputChanged(iQ.Keyboard, 0, wQ)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, GQ.f)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let LQ = 0; LQ < this._maxTouchPoints; LQ++) this._activeTouchIds[LQ] = -1;
        this._pointerMoveEvent = QQ => {
          const FQ = this._getPointerType(QQ);
          let wQ = FQ === iQ.Mouse ? 0 : this._activeTouchIds.indexOf(QQ.pointerId);
          if (FQ === iQ.Touch && -1 === wQ) {
            if (0 === QQ.buttons) return;
            const qQ = this._activeTouchIds.indexOf(-1);
            if (!(qQ >= 0)) return void LQ.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            wQ = qQ, this._activeTouchIds[qQ] = QQ.pointerId, this._onDeviceConnected(FQ, wQ)
          }
          this._inputs[FQ] || (this._inputs[FQ] = {}), this._inputs[FQ][wQ] || this._addPointerDevice(FQ, wQ, QQ.clientX, QQ.clientY);
          const qQ = this._inputs[FQ][wQ];
          if (qQ) {
            const LQ = QQ;
            LQ.inputIndex = WQ.Move, qQ[WQ.Horizontal] = QQ.clientX, qQ[WQ.Vertical] = QQ.clientY, FQ === iQ.Touch && 0 === qQ[WQ.LeftClick] && (qQ[WQ.LeftClick] = 1), void 0 === QQ.pointerId && (QQ.pointerId = this._mouseId), this._onInputChanged(FQ, wQ, LQ), this._usingSafari || -1 === QQ.button || (LQ.inputIndex = QQ.button + 2, qQ[QQ.button + 2] = qQ[QQ.button + 2] ? 0 : 1, this._onInputChanged(FQ, wQ, LQ))
          }
        }, this._pointerDownEvent = QQ => {
          const FQ = this._getPointerType(QQ);
          let wQ = FQ === iQ.Mouse ? 0 : QQ.pointerId;
          if (FQ === iQ.Touch) {
            let FQ = this._activeTouchIds.indexOf(QQ.pointerId);
            if (-1 === FQ && (FQ = this._activeTouchIds.indexOf(-1)), !(FQ >= 0)) return void LQ.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            wQ = FQ, this._activeTouchIds[FQ] = QQ.pointerId
          }
          this._inputs[FQ] || (this._inputs[FQ] = {}), this._inputs[FQ][wQ] ? FQ === iQ.Touch && this._onDeviceConnected(FQ, wQ) : this._addPointerDevice(FQ, wQ, QQ.clientX, QQ.clientY);
          const qQ = this._inputs[FQ][wQ];
          if (qQ) {
            const LQ = qQ[WQ.Horizontal],
              DQ = qQ[WQ.Vertical];
            if (FQ === iQ.Mouse) {
              if (void 0 === QQ.pointerId && (QQ.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (oQ) {}
            } else if (QQ.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(QQ.pointerId)
            } catch (oQ) {}
            qQ[WQ.Horizontal] = QQ.clientX, qQ[WQ.Vertical] = QQ.clientY, qQ[QQ.button + 2] = 1;
            const kQ = QQ;
            kQ.inputIndex = QQ.button + 2, this._onInputChanged(FQ, wQ, kQ), LQ === QQ.clientX && DQ === QQ.clientY || (kQ.inputIndex = WQ.Move, this._onInputChanged(FQ, wQ, kQ))
          }
        }, this._pointerUpEvent = QQ => {
          const FQ = this._getPointerType(QQ),
            wQ = FQ === iQ.Mouse ? 0 : this._activeTouchIds.indexOf(QQ.pointerId);
          if (FQ === iQ.Touch) {
            if (-1 === wQ) return;
            this._activeTouchIds[wQ] = -1
          }
          const LQ = this._inputs[FQ]?.[wQ];
          let qQ = QQ.button,
            oQ = LQ && 0 !== LQ[qQ + 2];
          if (!oQ && this._isUsingFirefox && this._usingMacOs && LQ && (qQ = 2 === qQ ? 0 : 2, oQ = 0 !== LQ[qQ + 2]), oQ) {
            const oQ = LQ[WQ.Horizontal],
              DQ = LQ[WQ.Vertical];
            LQ[WQ.Horizontal] = QQ.clientX, LQ[WQ.Vertical] = QQ.clientY, LQ[qQ + 2] = 0;
            const kQ = QQ;
            void 0 === QQ.pointerId && (QQ.pointerId = this._mouseId), oQ === QQ.clientX && DQ === QQ.clientY || (kQ.inputIndex = WQ.Move, this._onInputChanged(FQ, wQ, kQ)), kQ.inputIndex = qQ + 2, FQ === iQ.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : QQ.pointerId && this._elementToAttachTo.hasPointerCapture?.(QQ.pointerId) && this._elementToAttachTo.releasePointerCapture(QQ.pointerId), this._onInputChanged(FQ, wQ, kQ), FQ === iQ.Touch && this._onDeviceDisconnected(FQ, wQ)
          }
        }, this._pointerCancelTouch = QQ => {
          const FQ = this._activeTouchIds.indexOf(QQ);
          if (-1 === FQ) return;
          this._elementToAttachTo.hasPointerCapture?.(QQ) && this._elementToAttachTo.releasePointerCapture(QQ), this._inputs[iQ.Touch][FQ][WQ.LeftClick] = 0;
          const wQ = TQ.CreateDeviceEvent(iQ.Touch, FQ, WQ.LeftClick, 0, this, this._elementToAttachTo, QQ);
          this._onInputChanged(iQ.Touch, FQ, wQ), this._activeTouchIds[FQ] = -1, this._onDeviceDisconnected(iQ.Touch, FQ)
        }, this._pointerCancelEvent = QQ => {
          if ("mouse" === QQ.pointerType) {
            const QQ = this._inputs[iQ.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let FQ = WQ.LeftClick; FQ <= WQ.BrowserForward; FQ++)
              if (1 === QQ[FQ]) {
                QQ[FQ] = 0;
                const wQ = TQ.CreateDeviceEvent(iQ.Mouse, 0, FQ, 0, this, this._elementToAttachTo);
                this._onInputChanged(iQ.Mouse, 0, wQ)
              }
          } else this._pointerCancelTouch(QQ.pointerId)
        }, this._pointerLeaveEvent = QQ => {
          "pen" === QQ.pointerType && this._pointerCancelTouch(QQ.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let QQ = !1;
        const FQ = function() {};
        try {
          const wQ = Object.defineProperty({}, "passive", {
            get: function() {
              QQ = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", FQ, wQ), this._elementToAttachTo.removeEventListener("test", FQ, wQ)
        } catch (wQ) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(iQ.Mouse)) {
            const QQ = this._inputs[iQ.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let FQ = WQ.LeftClick; FQ <= WQ.BrowserForward; FQ++)
              if (1 === QQ[FQ]) {
                QQ[FQ] = 0;
                const wQ = TQ.CreateDeviceEvent(iQ.Mouse, 0, FQ, 0, this, this._elementToAttachTo);
                this._onInputChanged(iQ.Mouse, 0, wQ)
              }
          }
          if (this.isDeviceAvailable(iQ.Touch)) {
            const QQ = this._inputs[iQ.Touch];
            for (let FQ = 0; FQ < this._activeTouchIds.length; FQ++) {
              const wQ = this._activeTouchIds[FQ];
              if (this._elementToAttachTo.hasPointerCapture?.(wQ) && this._elementToAttachTo.releasePointerCapture(wQ), -1 !== wQ && 1 === QQ[FQ]?.[WQ.LeftClick]) {
                QQ[FQ][WQ.LeftClick] = 0;
                const LQ = TQ.CreateDeviceEvent(iQ.Touch, FQ, WQ.LeftClick, 0, this, this._elementToAttachTo, wQ);
                this._onInputChanged(iQ.Touch, FQ, LQ), this._activeTouchIds[FQ] = -1, this._onDeviceDisconnected(iQ.Touch, FQ)
              }
            }
          }
        }, this._pointerWheelEvent = QQ => {
          const FQ = iQ.Mouse;
          this._inputs[FQ] || (this._inputs[FQ] = []), this._inputs[FQ][0] || (this._pointerActive = !0, this._registerDevice(FQ, 0, zQ));
          const wQ = this._inputs[FQ][0];
          if (wQ) {
            wQ[WQ.MouseWheelX] = QQ.deltaX || 0, wQ[WQ.MouseWheelY] = QQ.deltaY || QQ.wheelDelta || 0, wQ[WQ.MouseWheelZ] = QQ.deltaZ || 0;
            const LQ = QQ;
            void 0 === QQ.pointerId && (QQ.pointerId = this._mouseId), 0 !== wQ[WQ.MouseWheelX] && (LQ.inputIndex = WQ.MouseWheelX, this._onInputChanged(FQ, 0, LQ)), 0 !== wQ[WQ.MouseWheelY] && (LQ.inputIndex = WQ.MouseWheelY, this._onInputChanged(FQ, 0, LQ)), 0 !== wQ[WQ.MouseWheelZ] && (LQ.inputIndex = WQ.MouseWheelZ, this._onInputChanged(FQ, 0, LQ))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = QQ => {
          QQ.buttons > 1 && this._pointerCancelEvent(QQ)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!QQ && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(iQ.Mouse)) {
            const QQ = this._inputs[iQ.Mouse][0];
            QQ[WQ.MouseWheelX] = 0, QQ[WQ.MouseWheelY] = 0, QQ[WQ.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = QQ => {
          this._addGamePad(QQ.gamepad)
        }, this._gamepadDisconnectedEvent = QQ => {
          if (this._gamepads) {
            const FQ = this._getGamepadDeviceType(QQ.gamepad.id),
              wQ = QQ.gamepad.index;
            this._unregisterDevice(FQ, wQ), delete this._gamepads[wQ]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(QQ, FQ, wQ) {
        const LQ = navigator.getGamepads()[FQ];
        if (LQ && QQ === this._gamepads[FQ]) {
          const qQ = this._inputs[QQ][FQ];
          wQ >= LQ.buttons.length ? qQ[wQ] = LQ.axes[wQ - LQ.buttons.length].valueOf() : qQ[wQ] = LQ.buttons[wQ].value
        }
      }
      _getGamepadDeviceType(QQ) {
        return -1 !== QQ.indexOf("054c") ? -1 !== QQ.indexOf("0ce6") ? iQ.DualSense : iQ.DualShock : -1 !== QQ.indexOf("Xbox One") || -1 !== QQ.search("Xbox 360") || -1 !== QQ.search("xinput") || -1 !== QQ.indexOf("045e") && -1 === QQ.indexOf("Surface Dock") ? iQ.Xbox : -1 !== QQ.indexOf("057e") ? iQ.Switch : iQ.Generic
      }
      _getPointerType(QQ) {
        let FQ = iQ.Mouse;
        return ("touch" === QQ.pointerType || "pen" === QQ.pointerType || QQ.touches) && (FQ = iQ.Touch), FQ
      }
    }
    class jQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = FQ, this.deviceSlot = wQ, this.onInputChangedObservable = new DQ.e, this._deviceInputSystem = QQ
      }
      getInput(QQ) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, QQ)
      }
    }
    class aQ {
      constructor(QQ) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = QQ => {
          for (let FQ = 0; FQ < this._devices.length; FQ++) {
            const wQ = this._devices[FQ];
            for (const LQ in wQ) {
              const wQ = +LQ;
              QQ._addDevice(new jQ(this._deviceInputSystem, FQ, wQ))
            }
          }
          this._registeredManagers.push(QQ)
        }, this.unregisterManager = QQ => {
          const FQ = this._registeredManagers.indexOf(QQ);
          FQ > -1 && this._registeredManagers.splice(FQ, 1)
        };
        const FQ = Object.keys(iQ).length / 2;
        this._devices = new Array(FQ);
        const wQ = (QQ, FQ) => {
            this._devices[QQ] || (this._devices[QQ] = new Array), this._devices[QQ][FQ] || (this._devices[QQ][FQ] = FQ);
            for (const wQ of this._registeredManagers) {
              const LQ = new jQ(this._deviceInputSystem, QQ, FQ);
              wQ._addDevice(LQ)
            }
          },
          LQ = (QQ, FQ) => {
            this._devices[QQ]?.[FQ] && delete this._devices[QQ][FQ];
            for (const wQ of this._registeredManagers) wQ._removeDevice(QQ, FQ)
          },
          qQ = (QQ, FQ, wQ) => {
            if (wQ)
              for (const LQ of this._registeredManagers) LQ._onInputChanged(QQ, FQ, wQ)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new KQ(wQ, LQ, qQ) : this._deviceInputSystem = new lQ(QQ, wQ, LQ, qQ)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class XQ {
      getDeviceSource(QQ, FQ) {
        if (void 0 === FQ) {
          if (void 0 === this._firstDevice[QQ]) return null;
          FQ = this._firstDevice[QQ]
        }
        return this._devices[QQ] && void 0 !== this._devices[QQ][FQ] ? this._devices[QQ][FQ] : null
      }
      getDeviceSources(QQ) {
        return this._devices[QQ] ? this._devices[QQ].filter((QQ => !!QQ)) : []
      }
      constructor(QQ) {
        const FQ = Object.keys(iQ).length / 2;
        this._devices = new Array(FQ), this._firstDevice = new Array(FQ), this._engine = QQ, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new aQ(QQ)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new DQ.e((QQ => {
          for (const FQ of this._devices)
            if (FQ)
              for (const wQ of FQ) wQ && this.onDeviceConnectedObservable.notifyObserver(QQ, wQ)
        })), this.onDeviceDisconnectedObservable = new DQ.e, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = QQ.zN.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.zN.remove(this._onDisposeObserver)
      }
      _addDevice(QQ) {
        this._devices[QQ.deviceType] || (this._devices[QQ.deviceType] = []), this._devices[QQ.deviceType][QQ.deviceSlot] || (this._devices[QQ.deviceType][QQ.deviceSlot] = QQ, this._updateFirstDevices(QQ.deviceType)), this.onDeviceConnectedObservable.notifyObservers(QQ)
      }
      _removeDevice(QQ, FQ) {
        const wQ = this._devices[QQ]?.[FQ];
        this.onDeviceDisconnectedObservable.notifyObservers(wQ), this._devices[QQ]?.[FQ] && delete this._devices[QQ][FQ], this._updateFirstDevices(QQ)
      }
      _onInputChanged(QQ, FQ, wQ) {
        this._devices[QQ]?.[FQ]?.onInputChangedObservable.notifyObservers(wQ)
      }
      _updateFirstDevices(QQ) {
        switch (QQ) {
          case iQ.Keyboard:
          case iQ.Mouse:
            this._firstDevice[QQ] = 0;
            break;
          case iQ.Touch:
          case iQ.DualSense:
          case iQ.DualShock:
          case iQ.Xbox:
          case iQ.Switch:
          case iQ.Generic: {
            delete this._firstDevice[QQ];
            const FQ = this._devices[QQ];
            if (FQ)
              for (let wQ = 0; wQ < FQ.length; wQ++)
                if (FQ[wQ]) {
                  this._firstDevice[QQ] = wQ;
                  break
                } break
          }
        }
      }
    }
    var fQ = wQ(39617);
    class VQ {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get zu() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(QQ) {
        this._singleClick = QQ
      }
      set zu(QQ) {
        this._doubleClick = QQ
      }
      set hasSwiped(QQ) {
        this._hasSwiped = QQ
      }
      set ignore(QQ) {
        this._ignore = QQ
      }
    }
    class hQ {
      constructor(QQ) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new uQ.n(0, 0), this._previousStartingPointerPosition = new uQ.n(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = QQ || pQ.d.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(QQ) {
        return this._meshUnderPointerId[QQ] || null
      }
      get unTranslatedPointer() {
        return new uQ.n(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(QQ) {
        this._pointerX = QQ
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(QQ) {
        this._pointerY = QQ
      }
      _updatePointerPosition(QQ) {
        const FQ = this._scene.Wx().getInputElementClientRect();
        FQ && (this._pointerX = QQ.clientX - FQ.left, this._pointerY = QQ.clientY - FQ.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(QQ, FQ) {
        const wQ = this._scene,
          LQ = wQ.Wx(),
          qQ = LQ.getInputElement();
        qQ && (qQ.tabIndex = LQ.canvasTabIndex, wQ.doNotHandleCursors || (qQ.style.cursor = wQ.defaultCursor)), this._setCursorAndPointerOverMesh(QQ, FQ, wQ);
        for (const kQ of wQ._pointerMoveStage) {
          QQ = QQ || this._pickMove(FQ);
          const wQ = !!QQ?.pickedMesh;
          QQ = kQ.action(this._unTranslatedPointerX, this._unTranslatedPointerY, QQ, wQ, qQ)
        }
        const oQ = FQ.inputIndex >= WQ.MouseWheelX && FQ.inputIndex <= WQ.MouseWheelZ ? CQ.e.POINTERWHEEL : CQ.e.POINTERMOVE;
        let DQ;
        wQ.onPointerMove && (QQ = QQ || this._pickMove(FQ), wQ.onPointerMove(FQ, QQ, oQ)), QQ ? (DQ = new CQ.j(oQ, FQ, QQ), this._setRayOnPointerInfo(QQ, FQ)) : (DQ = new CQ.j(oQ, FQ, null, this), this._movePointerInfo = DQ), wQ.onPointerObservable.hasObservers() && wQ.onPointerObservable.notifyObservers(DQ, oQ)
      }
      _setRayOnPointerInfo(QQ, FQ) {
        const wQ = this._scene;
        QQ && fQ.c._IsPickingAvailable && (QQ.ray || (QQ.ray = wQ.createPickingRay(FQ.offsetX, FQ.offsetY, uQ.c.Identity(), wQ.activeCamera)))
      }
      _addCameraPointerObserver(QQ, FQ) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(QQ, FQ)
      }
      _removeCameraPointerObserver(QQ) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(QQ)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(QQ, FQ, wQ) {
        const LQ = this._scene,
          qQ = new CQ.i(wQ, FQ, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return QQ && (qQ.originalPickingInfo = QQ, qQ.ray = QQ.ray, "xr-near" === FQ.pointerType && QQ.originMesh && (qQ.nearInteractionPickingInfo = QQ)), LQ.onPrePointerObservable.notifyObservers(qQ, wQ), !!qQ.skipOnPointerObservable
      }
      _pickMove(QQ) {
        const FQ = this._scene,
          wQ = FQ.Vb(this._unTranslatedPointerX, this._unTranslatedPointerY, FQ.pointerMovePredicate, FQ.pointerMoveFastCheck, FQ.cameraToUseForPointers, FQ.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(wQ, QQ, FQ), wQ
      }
      _updateMeshUnderPointer() {
        const QQ = this._scene;
        if (!QQ.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || QQ.skipPointerMovePicking || !QQ.cameraToUseForPointers && !QQ.activeCamera) return;
        this._ensurePointerMovePredicate();
        const FQ = this._pointerX,
          wQ = this._pointerY,
          LQ = this._unTranslatedPointerX,
          qQ = this._unTranslatedPointerY;
        for (const oQ of this._latestPointerMoveEvents.values()) this._pointerX = oQ.pointerX, this._pointerY = oQ.pointerY, this._unTranslatedPointerX = oQ.unTranslatedPointerX, this._unTranslatedPointerY = oQ.unTranslatedPointerY, this._pickMove(oQ.event);
        this._pointerX = FQ, this._pointerY = wQ, this._unTranslatedPointerX = LQ, this._unTranslatedPointerY = qQ
      }
      _ensurePointerMovePredicate() {
        const QQ = this._scene;
        QQ.pointerMovePredicate || (QQ.pointerMovePredicate = FQ => (FQ._isPointerMovePickable ?? FQ.aA) && FQ.isVisible && FQ.isReady() && FQ.isEnabled() && (FQ.enablePointerMoveEvents || QQ.constantlyUpdateMeshUnderPointer || null !== FQ._getActionManagerForTrigger()) && (!QQ.cameraToUseForPointers || 0 !== (QQ.cameraToUseForPointers.layerMask & FQ.layerMask)))
      }
      _setCursorAndPointerOverMesh(QQ, FQ, wQ) {
        const LQ = wQ.Wx().getInputElement();
        if (QQ?.pickedMesh) {
          if (this.setPointerOverMesh(QQ.pickedMesh, FQ.pointerId, QQ, FQ), !wQ.doNotHandleCursors && LQ && this._pointerOverMesh) {
            const QQ = this._pointerOverMesh._getActionManagerForTrigger();
            QQ && QQ.hasPointerTriggers && (LQ.style.cursor = QQ.hoverCursor || wQ.hoverCursor)
          }
        } else this.setPointerOverMesh(null, FQ.pointerId, QQ, FQ)
      }
      simulatePointerMove(QQ, FQ) {
        const wQ = new PointerEvent("pointermove", FQ);
        wQ.inputIndex = WQ.Move, this._checkPrePointerObservable(QQ, wQ, CQ.e.POINTERMOVE) || this._processPointerMove(QQ, wQ)
      }
      simulatePointerDown(QQ, FQ) {
        const wQ = new PointerEvent("pointerdown", FQ);
        wQ.inputIndex = wQ.button + 2, this._checkPrePointerObservable(QQ, wQ, CQ.e.POINTERDOWN) || this._processPointerDown(QQ, wQ)
      }
      _processPointerDown(QQ, FQ) {
        const wQ = this._scene;
        if (QQ?.pickedMesh) {
          this._pickedDownMesh = QQ.pickedMesh;
          const LQ = QQ.pickedMesh._getActionManagerForTrigger();
          if (LQ) {
            if (LQ.hasPickTriggers) switch (LQ.processTrigger(5, new xQ(QQ.pickedMesh, wQ.pointerX, wQ.pointerY, QQ.pickedMesh, FQ, QQ)), FQ.button) {
              case 0:
                LQ.processTrigger(2, new xQ(QQ.pickedMesh, wQ.pointerX, wQ.pointerY, QQ.pickedMesh, FQ, QQ));
                break;
              case 1:
                LQ.processTrigger(4, new xQ(QQ.pickedMesh, wQ.pointerX, wQ.pointerY, QQ.pickedMesh, FQ, QQ));
                break;
              case 2:
                LQ.processTrigger(3, new xQ(QQ.pickedMesh, wQ.pointerX, wQ.pointerY, QQ.pickedMesh, FQ, QQ))
            }
            LQ.hasSpecificTrigger(8) && window.setTimeout((() => {
              const QQ = wQ.Vb(this._unTranslatedPointerX, this._unTranslatedPointerY, (QQ => QQ.aA && QQ.isVisible && QQ.isReady() && QQ.actionManager && QQ.actionManager.hasSpecificTrigger(8) && QQ === this._pickedDownMesh), !1, wQ.cameraToUseForPointers);
              QQ?.pickedMesh && LQ && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > hQ.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, LQ.processTrigger(8, xQ.CreateNew(QQ.pickedMesh, FQ)))
            }), hQ.LongPressDelay)
          }
        } else
          for (const oQ of wQ._pointerDownStage) QQ = oQ.action(this._unTranslatedPointerX, this._unTranslatedPointerY, QQ, FQ, !1);
        let LQ;
        const qQ = CQ.e.POINTERDOWN;
        QQ ? (wQ.onPointerDown && wQ.onPointerDown(FQ, QQ, qQ), LQ = new CQ.j(qQ, FQ, QQ), this._setRayOnPointerInfo(QQ, FQ)) : LQ = new CQ.j(qQ, FQ, null, this), wQ.onPointerObservable.hasObservers() && wQ.onPointerObservable.notifyObservers(LQ, qQ)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(QQ, FQ, wQ) {
        const LQ = new PointerEvent("pointerup", FQ);
        LQ.inputIndex = WQ.Move;
        const qQ = new VQ;
        wQ ? qQ.zu = !0 : qQ.singleClick = !0, this._checkPrePointerObservable(QQ, LQ, CQ.e.POINTERUP) || this._processPointerUp(QQ, LQ, qQ)
      }
      _processPointerUp(QQ, FQ, wQ) {
        const LQ = this._scene;
        if (QQ?.pickedMesh) {
          if (this._pickedUpMesh = QQ.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (LQ.onPointerPick && LQ.onPointerPick(FQ, QQ), wQ.singleClick && !wQ.ignore && LQ.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const wQ = CQ.e.POINTERPICK,
              qQ = new CQ.j(wQ, FQ, QQ);
            this._setRayOnPointerInfo(QQ, FQ), LQ.onPointerObservable.notifyObservers(qQ, wQ)
          }
          const qQ = QQ.pickedMesh._getActionManagerForTrigger();
          if (qQ && !wQ.ignore) {
            qQ.processTrigger(7, xQ.CreateNew(QQ.pickedMesh, FQ, QQ)), !wQ.hasSwiped && wQ.singleClick && qQ.processTrigger(1, xQ.CreateNew(QQ.pickedMesh, FQ, QQ));
            const LQ = QQ.pickedMesh._getActionManagerForTrigger(6);
            wQ.zu && LQ && LQ.processTrigger(6, xQ.CreateNew(QQ.pickedMesh, FQ, QQ))
          }
        } else if (!wQ.ignore)
          for (const qQ of LQ._pointerUpStage) QQ = qQ.action(this._unTranslatedPointerX, this._unTranslatedPointerY, QQ, FQ, wQ.zu);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const QQ = this._pickedDownMesh._getActionManagerForTrigger(16);
          QQ && QQ.processTrigger(16, xQ.CreateNew(this._pickedDownMesh, FQ))
        }
        if (!wQ.ignore) {
          const qQ = new CQ.j(CQ.e.POINTERUP, FQ, QQ);
          if (this._setRayOnPointerInfo(QQ, FQ), LQ.onPointerObservable.notifyObservers(qQ, CQ.e.POINTERUP), LQ.onPointerUp && LQ.onPointerUp(FQ, QQ, CQ.e.POINTERUP), !wQ.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let qQ = 0;
            if (wQ.singleClick ? qQ = CQ.e.POINTERTAP : wQ.zu && (qQ = CQ.e.POINTERDOUBLETAP), qQ) {
              const wQ = new CQ.j(qQ, FQ, QQ);
              LQ.onPointerObservable.hasObservers() && LQ.onPointerObservable.hasSpecificMask(qQ) && LQ.onPointerObservable.notifyObservers(wQ, qQ)
            }
          }
        }
      }
      isPointerCaptured() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[QQ]
      }
      attachControl() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const qQ = this._scene,
          oQ = qQ.Wx();
        LQ || (LQ = oQ.getInputElement()), this._alreadyAttached && this.detachControl(), LQ && (this._alreadyAttachedTo = LQ), this._deviceSourceManager = new XQ(oQ), this._initActionManager = QQ => {
          if (!this._meshPickProceed) {
            const FQ = qQ.skipPointerUpPicking || 0 === qQ._registeredActions && !this._checkForPicking() && !qQ.onPointerUp ? null : qQ.Vb(this._unTranslatedPointerX, this._unTranslatedPointerY, qQ.pointerUpPredicate, qQ.pointerUpFastCheck, qQ.cameraToUseForPointers, qQ.pointerUpTrianglePredicate);
            this._currentPickResult = FQ, FQ && (QQ = FQ.hit && FQ.pickedMesh ? FQ.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return QQ
        }, this._delayedSimpleClick = (QQ, FQ, wQ) => {
          if ((Date.now() - this._previousStartingPointerTime > hQ.DoubleClickDelay && !this._doubleClickOccured || QQ !== this._previousButtonPressed) && (this._doubleClickOccured = !1, FQ.singleClick = !0, FQ.ignore = !1, this._delayedClicks[QQ])) {
            const FQ = this._delayedClicks[QQ].evt,
              wQ = CQ.e.POINTERTAP,
              LQ = new CQ.j(wQ, FQ, this._currentPickResult);
            qQ.onPointerObservable.hasObservers() && qQ.onPointerObservable.hasSpecificMask(wQ) && qQ.onPointerObservable.notifyObservers(LQ, wQ), this._delayedClicks[QQ] = null
          }
        }, this._initClickEvent = (QQ, FQ, wQ, LQ) => {
          const qQ = new VQ;
          this._currentPickResult = null;
          let oQ = null,
            DQ = QQ.hasSpecificMask(CQ.e.POINTERPICK) || FQ.hasSpecificMask(CQ.e.POINTERPICK) || QQ.hasSpecificMask(CQ.e.POINTERTAP) || FQ.hasSpecificMask(CQ.e.POINTERTAP) || QQ.hasSpecificMask(CQ.e.POINTERDOUBLETAP) || FQ.hasSpecificMask(CQ.e.POINTERDOUBLETAP);
          !DQ && SQ && (oQ = this._initActionManager(oQ, qQ), oQ && (DQ = oQ.hasPickTriggers));
          let kQ = !1;
          if (DQ = DQ && !this._isMultiTouchGesture, DQ) {
            const DQ = wQ.button;
            if (qQ.hasSwiped = this._isPointerSwiping(), !qQ.hasSwiped) {
              let vQ = !hQ.ExclusiveDoubleClickMode;
              if (vQ || (vQ = !QQ.hasSpecificMask(CQ.e.POINTERDOUBLETAP) && !FQ.hasSpecificMask(CQ.e.POINTERDOUBLETAP), vQ && !SQ.HasSpecificTrigger(6) && (oQ = this._initActionManager(oQ, qQ), oQ && (vQ = !oQ.hasSpecificTrigger(6)))), vQ)(Date.now() - this._previousStartingPointerTime > hQ.DoubleClickDelay || DQ !== this._previousButtonPressed) && (qQ.singleClick = !0, LQ(qQ, this._currentPickResult), kQ = !0);
              else {
                const QQ = {
                  evt: wQ,
                  clickInfo: qQ,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, DQ, qQ, LQ), hQ.DoubleClickDelay)
                };
                this._delayedClicks[DQ] = QQ
              }
              let mQ = QQ.hasSpecificMask(CQ.e.POINTERDOUBLETAP) || FQ.hasSpecificMask(CQ.e.POINTERDOUBLETAP);
              !mQ && SQ.HasSpecificTrigger(6) && (oQ = this._initActionManager(oQ, qQ), oQ && (mQ = oQ.hasSpecificTrigger(6))), mQ && (DQ === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < hQ.DoubleClickDelay && !this._doubleClickOccured ? (qQ.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = DQ, hQ.ExclusiveDoubleClickMode ? (this._delayedClicks[DQ] && (clearTimeout(this._delayedClicks[DQ]?.timeoutId), this._delayedClicks[DQ] = null), LQ(qQ, this._previousPickResult)) : LQ(qQ, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, qQ.zu = !0, qQ.ignore = !1, hQ.ExclusiveDoubleClickMode && this._delayedClicks[DQ] && (clearTimeout(this._delayedClicks[DQ]?.timeoutId), this._delayedClicks[DQ] = null), LQ(qQ, this._currentPickResult)), kQ = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = DQ))
            }
          }
          kQ || LQ(qQ, this._currentPickResult)
        }, this._onPointerMove = QQ => {
          if (this._updatePointerPosition(QQ), this._latestPointerMoveEvents.set(QQ.pointerId, {
              event: QQ,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > hQ.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > hQ.DragMovementThreshold), oQ.isPointerLock && oQ._verifyPointerLock(), this._checkPrePointerObservable(null, QQ, QQ.inputIndex >= WQ.MouseWheelX && QQ.inputIndex <= WQ.MouseWheelZ ? CQ.e.POINTERWHEEL : CQ.e.POINTERMOVE)) return;
          if (!qQ.cameraToUseForPointers && !qQ.activeCamera) return;
          if (qQ.skipPointerMovePicking) return void this._processPointerMove(new YQ.d, QQ);
          this._ensurePointerMovePredicate();
          const FQ = qQ._registeredActions > 0 || qQ.constantlyUpdateMeshUnderPointer ? this._pickMove(QQ) : null;
          this._processPointerMove(FQ, QQ)
        }, this._onPointerDown = QQ => {
          const FQ = this._activePointerIds.indexOf(-1);
          if (-1 === FQ ? this._activePointerIds.push(QQ.pointerId) : this._activePointerIds[FQ] = QQ.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, hQ.ExclusiveDoubleClickMode)
            for (let LQ = 0; LQ < this._delayedClicks.length; LQ++)
              if (this._delayedClicks[LQ])
                if (QQ.button === LQ) clearTimeout(this._delayedClicks[LQ]?.timeoutId);
                else {
                  const QQ = this._delayedClicks[LQ].clickInfo;
                  this._doubleClickOccured = !1, QQ.singleClick = !0, QQ.ignore = !1;
                  const FQ = this._delayedClicks[LQ].evt,
                    wQ = CQ.e.POINTERTAP,
                    oQ = new CQ.j(wQ, FQ, this._currentPickResult);
                  qQ.onPointerObservable.hasObservers() && qQ.onPointerObservable.hasSpecificMask(wQ) && qQ.onPointerObservable.notifyObservers(oQ, wQ), this._delayedClicks[LQ] = null
                } if (this._updatePointerPosition(QQ), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = QQ.button), qQ.preventDefaultOnPointerDown && LQ && (QQ.preventDefault(), LQ.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, QQ, CQ.e.POINTERDOWN)) return;
          if (!qQ.cameraToUseForPointers && !qQ.activeCamera) return;
          let wQ;
          this._pointerCaptures[QQ.pointerId] = !0, qQ.pointerDownPredicate || (qQ.pointerDownPredicate = QQ => QQ.aA && QQ.isVisible && QQ.isReady() && QQ.isEnabled() && (!qQ.cameraToUseForPointers || 0 !== (qQ.cameraToUseForPointers.layerMask & QQ.layerMask))), this._pickedDownMesh = null, wQ = qQ.skipPointerDownPicking || 0 === qQ._registeredActions && !this._checkForPicking() && !qQ.onPointerDown ? new YQ.d : qQ.Vb(this._unTranslatedPointerX, this._unTranslatedPointerY, qQ.pointerDownPredicate, qQ.pointerDownFastCheck, qQ.cameraToUseForPointers, qQ.pointerDownTrianglePredicate), this._processPointerDown(wQ, QQ)
        }, this._onPointerUp = QQ => {
          const FQ = this._activePointerIds.indexOf(QQ.pointerId); - 1 !== FQ && (this._activePointerIds[FQ] = -1, this._activePointerIdsCount--, "touch" === QQ.pointerType && this._latestPointerMoveEvents.delete(QQ.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(QQ), qQ.preventDefaultOnPointerUp && LQ && (QQ.preventDefault(), LQ.focus()), this._initClickEvent(qQ.onPrePointerObservable, qQ.onPointerObservable, QQ, ((FQ, wQ) => {
            if (qQ.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !FQ.ignore)) {
              if (this._checkPrePointerObservable(null, QQ, CQ.e.POINTERUP)) return this._swipeButtonPressed === QQ.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === QQ.buttons && (this._pointerCaptures[QQ.pointerId] = !1));
              FQ.hasSwiped || (FQ.singleClick && qQ.onPrePointerObservable.hasSpecificMask(CQ.e.POINTERTAP) && this._checkPrePointerObservable(null, QQ, CQ.e.POINTERTAP) && (this._skipPointerTap = !0), FQ.zu && qQ.onPrePointerObservable.hasSpecificMask(CQ.e.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, QQ, CQ.e.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[QQ.pointerId] ? (0 === QQ.buttons && (this._pointerCaptures[QQ.pointerId] = !1), (qQ.cameraToUseForPointers || qQ.activeCamera) && (qQ.pointerUpPredicate || (qQ.pointerUpPredicate = QQ => QQ.aA && QQ.isVisible && QQ.isReady() && QQ.isEnabled() && (!qQ.cameraToUseForPointers || 0 !== (qQ.cameraToUseForPointers.layerMask & QQ.layerMask))), !this._meshPickProceed && (SQ && SQ.HasTriggers || this._checkForPicking() || qQ.onPointerUp) && this._initActionManager(null, FQ), wQ || (wQ = this._currentPickResult), this._processPointerUp(wQ, QQ, FQ), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === QQ.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === QQ.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = QQ => {
          const FQ = UQ.e.KEYDOWN;
          if (qQ.onPreKeyboardObservable.hasObservers()) {
            const wQ = new UQ.g(FQ, QQ);
            if (qQ.onPreKeyboardObservable.notifyObservers(wQ, FQ), wQ.skipOnKeyboardObservable) return
          }
          if (qQ.onKeyboardObservable.hasObservers()) {
            const wQ = new UQ.k(FQ, QQ);
            qQ.onKeyboardObservable.notifyObservers(wQ, FQ)
          }
          qQ.actionManager && qQ.actionManager.processTrigger(14, xQ.CreateNewFromScene(qQ, QQ))
        }, this._onKeyUp = QQ => {
          const FQ = UQ.e.KEYUP;
          if (qQ.onPreKeyboardObservable.hasObservers()) {
            const wQ = new UQ.g(FQ, QQ);
            if (qQ.onPreKeyboardObservable.notifyObservers(wQ, FQ), wQ.skipOnKeyboardObservable) return
          }
          if (qQ.onKeyboardObservable.hasObservers()) {
            const wQ = new UQ.k(FQ, QQ);
            qQ.onKeyboardObservable.notifyObservers(wQ, FQ)
          }
          qQ.actionManager && qQ.actionManager.processTrigger(15, xQ.CreateNewFromScene(qQ, QQ))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((LQ => {
          LQ.deviceType === iQ.Mouse ? LQ.onInputChangedObservable.add((qQ => {
            this._originMouseEvent = qQ, qQ.inputIndex === WQ.LeftClick || qQ.inputIndex === WQ.MiddleClick || qQ.inputIndex === WQ.RightClick || qQ.inputIndex === WQ.BrowserBack || qQ.inputIndex === WQ.BrowserForward ? FQ && 1 === LQ.getInput(qQ.inputIndex) ? this._onPointerDown(qQ) : QQ && 0 === LQ.getInput(qQ.inputIndex) && this._onPointerUp(qQ) : wQ && (qQ.inputIndex === WQ.Move ? this._onPointerMove(qQ) : qQ.inputIndex !== WQ.MouseWheelX && qQ.inputIndex !== WQ.MouseWheelY && qQ.inputIndex !== WQ.MouseWheelZ || this._onPointerMove(qQ))
          })) : LQ.deviceType === iQ.Touch ? LQ.onInputChangedObservable.add((qQ => {
            qQ.inputIndex === WQ.LeftClick && (FQ && 1 === LQ.getInput(qQ.inputIndex) ? (this._onPointerDown(qQ), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : QQ && 0 === LQ.getInput(qQ.inputIndex) && (this._onPointerUp(qQ), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), wQ && qQ.inputIndex === WQ.Move && this._onPointerMove(qQ)
          })) : LQ.deviceType === iQ.Keyboard && LQ.onInputChangedObservable.add((QQ => {
            "keydown" === QQ.type ? this._onKeyDown(QQ) : "keyup" === QQ.type && this._onKeyUp(QQ)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[FQ] === QQ && (!QQ || !QQ._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const qQ = this._meshUnderPointerId[FQ];
        let oQ;
        qQ && (oQ = qQ._getActionManagerForTrigger(10), oQ && oQ.processTrigger(10, new xQ(qQ, this._pointerX, this._pointerY, QQ, LQ, {
          pointerId: FQ
        }))), QQ ? (this._meshUnderPointerId[FQ] = QQ, this._pointerOverMesh = QQ, oQ = QQ._getActionManagerForTrigger(9), oQ && oQ.processTrigger(9, new xQ(QQ, this._pointerX, this._pointerY, QQ, LQ, {
          pointerId: FQ,
          pickResult: wQ
        }))) : (delete this._meshUnderPointerId[FQ], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: QQ,
          pointerId: FQ
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(QQ) {
        this._pointerOverMesh === QQ && (this._pointerOverMesh = null), this._pickedDownMesh === QQ && (this._pickedDownMesh = null), this._pickedUpMesh === QQ && (this._pickedUpMesh = null);
        for (const FQ in this._meshUnderPointerId) this._meshUnderPointerId[FQ] === QQ && delete this._meshUnderPointerId[FQ]
      }
    }
    hQ.DragMovementThreshold = 10, hQ.LongPressDelay = 500, hQ.DoubleClickDelay = 300, hQ.ExclusiveDoubleClickMode = !1;
    var JQ = wQ(39352),
      EQ = wQ(36873),
      nQ = wQ(37320);
    class gQ {
      static get UniqueId() {
        const QQ = this._UniqueIdCounter;
        return this._UniqueIdCounter++, QQ
      }
    }
    gQ._UniqueIdCounter = 1;
    var PQ = wQ(39448),
      ZQ = wQ(39623),
      yQ = wQ(36709);
    class BQ {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var dQ, QF, FF, wF, LF, qF, oF, DF, kF, vF, mF, uF, HF, bF, YF, xF, AF, tF, eF, MF, GF, pF, cF, CF, SF, iF, WF, RF, OF, sF, rF, IF, UF, NF, TF, KF, zF, lF, jF, aF, XF, fF, VF, hF, JF, EF, nF, gF, PF, ZF, yF, BF, dF, Qw = wQ(38203),
      Fw = wQ(36741);
    const ww = new uQ.t,
      Lw = new uQ.t;
    var qw;
    ! function(QQ) {
      QQ[QQ.BackwardCompatible = 0] = "BackwardCompatible", QQ[QQ.Intermediate = 1] = "Intermediate", QQ[QQ.Aggressive = 2] = "Aggressive"
    }(qw || (qw = {}));
    class ow {
      static DefaultMaterialFactory(QQ) {
        throw (0, cQ.k)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, cQ.k)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(QQ) {
        QQ !== this._clearColor && (this._clearColor = QQ, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(QQ) {
        if (QQ !== this._performancePriority) {
          switch (this._performancePriority = QQ, QQ) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(QQ)
        }
      }
      set forceWireframe(QQ) {
        this._forceWireframe !== QQ && (this._forceWireframe = QQ, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(QQ) {
        this._skipFrustumClipping !== QQ && (this._skipFrustumClipping = QQ)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(QQ) {
        this._forcePointsCloud !== QQ && (this._forcePointsCloud = QQ, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(QQ) {
        this._environmentTexture !== QQ && (this._environmentTexture = QQ, this.onEnvironmentTextureChangedObservable.notifyObservers(QQ), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let QQ = [];
        QQ = QQ.concat(this.meshes), QQ = QQ.concat(this.lights), QQ = QQ.concat(this.cameras), QQ = QQ.concat(this.transformNodes);
        for (const FQ of this.skeletons) QQ = QQ.concat(FQ.bones);
        return QQ
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(QQ) {
        this._animationPropertiesOverride = QQ
      }
      set onDispose(QQ) {
        this._onDisposeObserver && this.zN.remove(this._onDisposeObserver), this._onDisposeObserver = this.zN.add(QQ)
      }
      set beforeRender(QQ) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), QQ && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(QQ))
      }
      set afterRender(QQ) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), QQ && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(QQ))
      }
      set beforeCameraRender(QQ) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(QQ)
      }
      set afterCameraRender(QQ) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(QQ)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(QQ) {
        this._pointerPickingConfiguration.pointerDownPredicate = QQ
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(QQ) {
        this._pointerPickingConfiguration.pointerUpPredicate = QQ
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(QQ) {
        this._pointerPickingConfiguration.pointerMovePredicate = QQ
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(QQ) {
        this._pointerPickingConfiguration.pointerDownFastCheck = QQ
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(QQ) {
        this._pointerPickingConfiguration.pointerUpFastCheck = QQ
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(QQ) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = QQ
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(QQ) {
        this._pointerPickingConfiguration.skipPointerMovePicking = QQ
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(QQ) {
        this._pointerPickingConfiguration.skipPointerDownPicking = QQ
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(QQ) {
        this._pointerPickingConfiguration.skipPointerUpPicking = QQ
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return hQ.DragMovementThreshold
      }
      static set DragMovementThreshold(QQ) {
        hQ.DragMovementThreshold = QQ
      }
      static get LongPressDelay() {
        return hQ.LongPressDelay
      }
      static set LongPressDelay(QQ) {
        hQ.LongPressDelay = QQ
      }
      static get DoubleClickDelay() {
        return hQ.DoubleClickDelay
      }
      static set DoubleClickDelay(QQ) {
        hQ.DoubleClickDelay = QQ
      }
      static get ExclusiveDoubleClickMode() {
        return hQ.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(QQ) {
        hQ.ExclusiveDoubleClickMode = QQ
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? uQ.p.ZeroReadOnly
      }
      bindEyePosition(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const LQ = this._eyePosition,
          qQ = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          oQ = this.floatingOriginOffset,
          DQ = ww.set(LQ.x, LQ.y, LQ.z, qQ ? -1 : 1),
          kQ = DQ.subtractFromFloatsToRef(oQ.x, oQ.y, oQ.z, 0, Lw);
        return QQ && (wQ ? QQ.setFloat3(FQ, kQ.x, kQ.y, kQ.z) : QQ.setVector4(FQ, kQ)), DQ
      }
      finalizeSceneUbo() {
        const QQ = this.getSceneUniformBuffer(),
          FQ = this.bindEyePosition(null),
          wQ = this.floatingOriginOffset;
        return QQ.updateFloat4("vEyePosition", FQ.x - wQ.x, FQ.y - wQ.y, FQ.z - wQ.z, FQ.w), QQ.update(), QQ
      }
      set useRightHandedSystem(QQ) {
        this._useRightHandedSystem !== QQ && (this._useRightHandedSystem = QQ, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(QQ) {
        this._currentStepId = QQ
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(QQ) {
        this._fogEnabled !== QQ && (this._fogEnabled = QQ, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(QQ) {
        this._fogMode !== QQ && (this._fogMode = QQ, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(QQ) {
        this._shadowsEnabled !== QQ && (this._shadowsEnabled = QQ, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(QQ) {
        this._lightsEnabled !== QQ && (this._lightsEnabled = QQ, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(QQ) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), QQ && (this._unObserveActiveCameras = (0, yQ.h)(QQ, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = QQ
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(QQ) {
        QQ !== this._activeCamera && (this._activeCamera = QQ, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return ow.DefaultMaterialFactory !== ow._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = ow.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(QQ) {
        this._defaultMaterial = QQ
      }
      set texturesEnabled(QQ) {
        this._texturesEnabled !== QQ && (this._texturesEnabled = QQ, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(QQ) {
        if (this._frameGraph) return this._frameGraph = QQ, void(QQ || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = QQ, QQ && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(QQ) {
        this._skeletonsEnabled !== QQ && (this._skeletonsEnabled = QQ, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = ow.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const QQ of this._transientComponents) QQ.register();
          this._transientComponents.length = 0
        }
      }
      HLQ(QQ) {
        this._components.push(QQ), this._transientComponents.push(QQ);
        const FQ = QQ;
        FQ.addFromContainer && FQ.serialize && this._serializableComponents.push(FQ)
      }
      _getComponent(QQ) {
        for (const FQ of this._components)
          if (FQ.name === QQ) return FQ;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(QQ, FQ) {
        this._inputManager = new hQ(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new EQ.e(.2, .2, .3, 1), this.onClearColorChangedObservable = new DQ.e, this.ambientColor = new EQ.b(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new DQ.e, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.fC = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.zN = new DQ.e, this._onDisposeObserver = null, this.onBeforeRenderObservable = new DQ.e, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new DQ.e, this.onAfterRenderCameraObservable = new DQ.e, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new DQ.e, this.onAfterAnimationsObservable = new DQ.e, this.onBeforeDrawPhaseObservable = new DQ.e, this.onAfterDrawPhaseObservable = new DQ.e, this.onReadyObservable = new DQ.e, this.onBeforeCameraRenderObservable = new DQ.e, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new DQ.e, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new DQ.e, this.onAfterActiveMeshesEvaluationObservable = new DQ.e, this.onBeforeParticlesRenderingObservable = new DQ.e, this.onAfterParticlesRenderingObservable = new DQ.e, this.onDataLoadedObservable = new DQ.e, this.onNewCameraAddedObservable = new DQ.e, this.onCameraRemovedObservable = new DQ.e, this.onNewLightAddedObservable = new DQ.e, this.onLightRemovedObservable = new DQ.e, this.onNewGeometryAddedObservable = new DQ.e, this.onGeometryRemovedObservable = new DQ.e, this.onNewTransformNodeAddedObservable = new DQ.e, this.onTransformNodeRemovedObservable = new DQ.e, this.onNewMeshAddedObservable = new DQ.e, this.onMeshRemovedObservable = new DQ.e, this.onNewSkeletonAddedObservable = new DQ.e, this.onSkeletonRemovedObservable = new DQ.e, this.onNewParticleSystemAddedObservable = new DQ.e, this.onParticleSystemRemovedObservable = new DQ.e, this.onNewAnimationGroupAddedObservable = new DQ.e, this.onAnimationGroupRemovedObservable = new DQ.e, this.onNewMaterialAddedObservable = new DQ.e, this.onNewMultiMaterialAddedObservable = new DQ.e, this.onMaterialRemovedObservable = new DQ.e, this.onMultiMaterialRemovedObservable = new DQ.e, this.onNewTextureAddedObservable = new DQ.e, this.onTextureRemovedObservable = new DQ.e, this.onNewFrameGraphAddedObservable = new DQ.e, this.onFrameGraphRemovedObservable = new DQ.e, this.onNewObjectRendererAddedObservable = new DQ.e, this.onObjectRendererRemovedObservable = new DQ.e, this.onNewPostProcessAddedObservable = new DQ.e, this.onPostProcessRemovedObservable = new DQ.e, this.onNewEffectLayerAddedObservable = new DQ.e, this.onEffectLayerRemovedObservable = new DQ.e, this.onBeforeRenderTargetsRenderObservable = new DQ.e, this.onAfterRenderTargetsRenderObservable = new DQ.e, this.onBeforeStepObservable = new DQ.e, this.onAfterStepObservable = new DQ.e, this.onActiveCameraChanged = new DQ.e, this.onActiveCamerasChanged = new DQ.e, this.onBeforeRenderingGroupObservable = new DQ.e, this.onAfterRenderingGroupObservable = new DQ.e, this.onMeshImportedObservable = new DQ.e, this.onAnimationFileImportedObservable = new DQ.e, this.onEnvironmentTextureChangedObservable = new DQ.e, this.onMeshUnderPointerUpdatedObservable = new DQ.e, this._registeredForLateAnimationBindings = new kQ.b(256), this._pointerPickingConfiguration = new BQ, this.onPrePointerObservable = new DQ.e, this.onPointerObservable = new DQ.e, this.onPreKeyboardObservable = new DQ.e, this.onKeyboardObservable = new DQ.e, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = ow.FOGMODE_NONE, this.fogColor = new EQ.b(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.vV = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new uQ.p(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new kQ.b(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new JQ.e, this._activeIndices = new JQ.e, this._activeParticles = new JQ.e, this._activeBones = new JQ.e, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new kQ.d(256), this._processedMaterials = new kQ.d(256), this._renderTargets = new kQ.b(256), this._materialsRenderTargets = new kQ.b(256), this._activeParticleSystems = new kQ.d(256), this._activeSkeletons = new kQ.b(32), this._softwareSkinnedMeshes = new kQ.b(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = uQ.c.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = MQ.d.Create(), this._beforeClearStage = MQ.d.Create(), this._beforeRenderTargetClearStage = MQ.d.Create(), this._gatherRenderTargetsStage = MQ.d.Create(), this._gatherActiveCameraRenderTargetsStage = MQ.d.Create(), this._isReadyForMeshStage = MQ.d.Create(), this._beforeEvaluateActiveMeshStage = MQ.d.Create(), this._evaluateSubMeshStage = MQ.d.Create(), this._preActiveMeshStage = MQ.d.Create(), this._cameraDrawRenderTargetStage = MQ.d.Create(), this._beforeCameraDrawStage = MQ.d.Create(), this._beforeRenderTargetDrawStage = MQ.d.Create(), this._beforeRenderingGroupDrawStage = MQ.d.Create(), this._beforeRenderingMeshStage = MQ.d.Create(), this._afterRenderingMeshStage = MQ.d.Create(), this._afterRenderingGroupDrawStage = MQ.d.Create(), this._afterCameraDrawStage = MQ.d.Create(), this._afterCameraPostProcessStage = MQ.d.Create(), this._afterRenderTargetDrawStage = MQ.d.Create(), this._afterRenderTargetPostProcessStage = MQ.d.Create(), this._afterRenderStage = MQ.d.Create(), this._pointerMoveStage = MQ.d.Create(), this._pointerDownStage = MQ.d.Create(), this._pointerUpStage = MQ.d.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new DQ.e, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const wQ = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...FQ
        };
        this.defaultCameraLayerMask = wQ.defaultCameraLayerMask, this.defaultRenderableLayerMask = wQ.defaultRenderableLayerMask, QQ = this._engine = QQ || pQ.d.LastCreatedEngine, wQ.virtual ? QQ._virtualScenes.push(this) : (pQ.d._LastCreatedScene = this, QQ.scenes.push(this)), (QQ.getCreationOptions().useLargeWorldRendering || FQ?.useFloatingOrigin) && ((0, tQ.e)(), this._floatingOriginScene = this, tQ.c.iN = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new eQ.e(this), AQ.d && (this.postProcessManager = new AQ.d(this)), (0, GQ.g)() && this.attachControl(), this._createUbo(), HQ.e && (this._imageProcessingConfiguration = new HQ.e), this.setDefaultCandidateProviders(), wQ.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = wQ.useMaterialMeshMap, this.useClonedMeshMap = wQ.useClonedMeshMap, FQ && FQ.virtual || QQ.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(QQ) {
        return this._defaultSubMeshCandidates.data = QQ.lC, this._defaultSubMeshCandidates.length = QQ.lC.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = QQ => this._getDefaultSubMeshCandidates(QQ), this.getIntersectingSubMeshCandidates = (QQ, FQ) => this._getDefaultSubMeshCandidates(QQ), this.getCollidingSubMeshCandidates = (QQ, FQ) => this._getDefaultSubMeshCandidates(QQ)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(QQ) {
        this._inputManager.pointerX = QQ
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(QQ) {
        this._inputManager.pointerY = QQ
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
      isCachedMaterialInvalid(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== FQ || this._cachedMaterial !== QQ || this._cachedVisibility !== wQ
      }
      Wx() {
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
      simulatePointerMove(QQ, FQ) {
        return this._inputManager.simulatePointerMove(QQ, FQ), this
      }
      simulatePointerDown(QQ, FQ) {
        return this._inputManager.simulatePointerDown(QQ, FQ), this
      }
      simulatePointerUp(QQ, FQ, wQ) {
        return this._inputManager.simulatePointerUp(QQ, FQ, wQ), this
      }
      isPointerCaptured() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(QQ)
      }
      attachControl() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(QQ, FQ, wQ)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let QQ, FQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const wQ = this.Wx(),
          LQ = wQ.currentRenderPassId;
        wQ.currentRenderPassId = this.activeCamera?.renderPassId ?? LQ;
        let qQ = !0;
        for (this._pendingData.length > 0 && (qQ = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && qQ && (qQ = this.depthPeelingRenderer.isReady()), FQ && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), QQ = 0; QQ < this.meshes.length; QQ++) {
          const LQ = this.meshes[QQ];
          if (!LQ.lC || 0 === LQ.lC.length) continue;
          if (!LQ.isReady(!0)) {
            qQ = !1;
            continue
          }
          const oQ = LQ.hasThinInstances || "InstancedMesh" === LQ.getClassName() || "InstancedLinesMesh" === LQ.getClassName() || wQ.getCaps().instancedArrays && LQ.instances.length > 0;
          for (let QQ = 0, FQ = this._isReadyForMeshStage; QQ < FQ.length; QQ++) {
            FQ[QQ].action(LQ, oQ) || (qQ = !1)
          }
          if (!FQ) continue;
          const DQ = LQ.material || this.defaultMaterial;
          if (DQ)
            if (DQ._storeEffectOnSubMeshes)
              for (const QQ of LQ.lC) {
                const FQ = QQ.Ux();
                FQ && FQ.hasRenderTargetTextures && null != FQ.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(FQ) && (this._processedMaterials.push(FQ), this._materialsRenderTargets.concatWithNoDuplicate(FQ.getRenderTargetTextures()))
              } else DQ.hasRenderTargetTextures && null != DQ.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(DQ) && (this._processedMaterials.push(DQ), this._materialsRenderTargets.concatWithNoDuplicate(DQ.getRenderTargetTextures()))
        }
        if (FQ) {
          for (QQ = 0; QQ < this._materialsRenderTargets.length; ++QQ) {
            this._materialsRenderTargets.data[QQ].isReadyForRendering() || (qQ = !1)
          }
          for (QQ = 0; QQ < this.customRenderTargets.length; ++QQ) {
            this.customRenderTargets[QQ].isReadyForRendering() || (qQ = !1)
          }
        }
        for (QQ = 0; QQ < this.geometries.length; QQ++) {
          2 === this.geometries[QQ].delayLoadState && (qQ = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const oQ of this.activeCameras) oQ.isReady(!0) || (qQ = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (qQ = !1));
        for (const oQ of this.fC) oQ.isReady() || (qQ = !1);
        if (this.proceduralTexturesEnabled)
          for (const oQ of this.proceduralTextures) oQ.isReady() || (qQ = !1);
        if (this.layers)
          for (const oQ of this.layers) oQ.isReady() || (qQ = !1);
        if (this.effectLayers)
          for (const oQ of this.effectLayers) oQ.isLayerReady() || (qQ = !1);
        for (const oQ of this._isReadyChecks) oQ.isReady() || (qQ = !1);
        return wQ.areAllEffectsReady() || (qQ = !1), wQ.currentRenderPassId = LQ, qQ
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(QQ) {
        this.onBeforeRenderObservable.add(QQ)
      }
      unregisterBeforeRender(QQ) {
        this.onBeforeRenderObservable.removeCallback(QQ)
      }
      registerAfterRender(QQ) {
        this.onAfterRenderObservable.add(QQ)
      }
      unregisterAfterRender(QQ) {
        this.onAfterRenderObservable.removeCallback(QQ)
      }
      _executeOnceBeforeRender(QQ) {
        const FQ = () => {
          QQ(), setTimeout((() => {
            this.unregisterBeforeRender(FQ)
          }))
        };
        this.registerBeforeRender(FQ)
      }
      executeOnceBeforeRender(QQ, FQ) {
        void 0 !== FQ ? setTimeout((() => {
          this._executeOnceBeforeRender(QQ)
        }), FQ) : this._executeOnceBeforeRender(QQ)
      }
      addPendingData(QQ) {
        this._pendingData.push(QQ)
      }
      removePendingData(QQ) {
        const FQ = this.isLoading,
          wQ = this._pendingData.indexOf(QQ); - 1 !== wQ && this._pendingData.splice(wQ, 1), FQ && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(QQ) {
        -1 === this._isReadyChecks.indexOf(QQ) && this._isReadyChecks.push(QQ)
      }
      removeIsReadyCheck(QQ) {
        const FQ = this._isReadyChecks.indexOf(QQ); - 1 !== FQ && this._isReadyChecks.splice(FQ, 1)
      }
      executeWhenReady(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(QQ), null === this._executeWhenReadyTimeoutId && this._checkIsReady(FQ)
      }
      async whenReadyAsync() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((FQ => {
          this.executeWhenReady((() => {
            FQ()
          }), QQ)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = oQ.e.Now;
        else if (this.onReadyTimeoutDuration > 0 && oQ.e.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(QQ)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(QQ)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = oQ.e.Now
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
      setTransformMatrix(QQ, FQ, wQ, LQ) {
        this._multiviewSceneUboIsActive = !!(wQ && LQ && this._multiviewSceneUbo), this._viewUpdateFlag === QQ.updateFlag && this._projectionUpdateFlag === FQ.updateFlag || (this._viewUpdateFlag = QQ.updateFlag, this._projectionUpdateFlag = FQ.updateFlag, this._viewMatrix = QQ, this._projectionMatrix = FQ, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new uQ.c), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? nQ.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = nQ.c.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(wQ, LQ) : this._sceneUbo.useUbo && (this._sceneUbo.Y5("viewProjection", this._transformMatrix), this._sceneUbo.Y5("view", this._viewMatrix), this._sceneUbo.Y5("projection", this._projectionMatrix), this._sceneUbo.Y5("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(QQ, FQ) {
        const wQ = "boolean" === typeof FQ ? FQ : FQ?.trackUBOsInFrame,
          LQ = new bQ.d(this._engine, void 0, !1, QQ ?? "lA", void 0, wQ);
        return LQ.addUniform("viewProjection", 16), LQ.addUniform("view", 16), LQ.addUniform("projection", 16), LQ.addUniform("vEyePosition", 4), LQ.addUniform("inverseProjection", 16), LQ
      }
      setSceneUniformBuffer(QQ) {
        this._sceneUbo = QQ, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : uQ.p.ZeroReadOnly
      }
      getUniqueId() {
        return gQ.UniqueId
      }
      sLQ(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(QQ), QQ._resyncLightSources(), QQ.parent || QQ._addToSceneRootNodes(), qQ.d.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(QQ)
          })), FQ)) {
          const FQ = QQ.getChildMeshes();
          for (const QQ of FQ) this.sLQ(QQ)
        }
      }
      yN(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const wQ = this.meshes.indexOf(QQ);
        if (-1 !== wQ && (this.meshes.splice(wQ, 1), QQ.parent || QQ._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(QQ), this.onMeshRemovedObservable.notifyObservers(QQ), FQ) {
          const FQ = QQ.getChildMeshes();
          for (const QQ of FQ) this.yN(QQ)
        }
        return wQ
      }
      addTransformNode(QQ) {
        this._blockEntityCollection || QQ.iN() === this && -1 !== QQ._indexInSceneTransformNodesArray || (QQ._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(QQ), QQ.parent || QQ._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(QQ))
      }
      removeTransformNode(QQ) {
        const FQ = QQ._indexInSceneTransformNodesArray;
        if (-1 !== FQ) {
          if (FQ !== this.transformNodes.length - 1) {
            const QQ = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[FQ] = QQ, QQ._indexInSceneTransformNodesArray = FQ
          }
          QQ._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), QQ.parent || QQ._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(QQ), FQ
      }
      removeSkeleton(QQ) {
        const FQ = this.skeletons.indexOf(QQ);
        return -1 !== FQ && (this.skeletons.splice(FQ, 1), this.onSkeletonRemovedObservable.notifyObservers(QQ), this._executeActiveContainerCleanup(this._activeSkeletons)), FQ
      }
      removeMorphTargetManager(QQ) {
        const FQ = this.morphTargetManagers.indexOf(QQ);
        return -1 !== FQ && this.morphTargetManagers.splice(FQ, 1), FQ
      }
      removeLight(QQ) {
        const FQ = this.lights.indexOf(QQ);
        if (-1 !== FQ) {
          for (const FQ of this.meshes) FQ._removeLightSource(QQ, !1);
          this.lights.splice(FQ, 1), this.sortLightsByPriority(), QQ.parent || QQ._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(QQ)
        }
        return FQ
      }
      removeCamera(QQ) {
        const FQ = this.cameras.indexOf(QQ);
        if (-1 !== FQ && (this.cameras.splice(FQ, 1), QQ.parent || QQ._removeFromSceneRootNodes()), this.activeCameras) {
          const FQ = this.activeCameras.indexOf(QQ); - 1 !== FQ && this.activeCameras.splice(FQ, 1)
        }
        return this.activeCamera === QQ && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(QQ), FQ
      }
      removeParticleSystem(QQ) {
        const FQ = this.fC.indexOf(QQ);
        return -1 !== FQ && (this.fC.splice(FQ, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(QQ), FQ
      }
      removeAnimation(QQ) {
        const FQ = this.animations.indexOf(QQ);
        return -1 !== FQ && this.animations.splice(FQ, 1), FQ
      }
      stopAnimation(QQ, FQ, wQ) {}
      removeAnimationGroup(QQ) {
        const FQ = this.animationGroups.indexOf(QQ);
        return -1 !== FQ && this.animationGroups.splice(FQ, 1), this.onAnimationGroupRemovedObservable.notifyObservers(QQ), FQ
      }
      removeMultiMaterial(QQ) {
        const FQ = this.multiMaterials.indexOf(QQ);
        return -1 !== FQ && this.multiMaterials.splice(FQ, 1), this.onMultiMaterialRemovedObservable.notifyObservers(QQ), FQ
      }
      removeMaterial(QQ) {
        const FQ = QQ._indexInSceneMaterialArray;
        if (-1 !== FQ && FQ < this.materials.length) {
          if (FQ !== this.materials.length - 1) {
            const QQ = this.materials[this.materials.length - 1];
            this.materials[FQ] = QQ, QQ._indexInSceneMaterialArray = FQ
          }
          QQ._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(QQ), FQ
      }
      removeActionManager(QQ) {
        const FQ = this.actionManagers.indexOf(QQ);
        return -1 !== FQ && this.actionManagers.splice(FQ, 1), FQ
      }
      removeTexture(QQ) {
        const FQ = this.textures.indexOf(QQ);
        return -1 !== FQ && this.textures.splice(FQ, 1), this.onTextureRemovedObservable.notifyObservers(QQ), FQ
      }
      removeFrameGraph(QQ) {
        const FQ = this.frameGraphs.indexOf(QQ);
        return -1 !== FQ && this.frameGraphs.splice(FQ, 1), this.onFrameGraphRemovedObservable.notifyObservers(QQ), FQ
      }
      removeObjectRenderer(QQ) {
        const FQ = this.objectRenderers.indexOf(QQ);
        return -1 !== FQ && this.objectRenderers.splice(FQ, 1), this.onObjectRendererRemovedObservable.notifyObservers(QQ), FQ
      }
      removePostProcess(QQ) {
        const FQ = this.postProcesses.indexOf(QQ);
        return -1 !== FQ && this.postProcesses.splice(FQ, 1), this.onPostProcessRemovedObservable.notifyObservers(QQ), FQ
      }
      removeEffectLayer(QQ) {
        const FQ = this.effectLayers.indexOf(QQ);
        return -1 !== FQ && this.effectLayers.splice(FQ, 1), this.onEffectLayerRemovedObservable.notifyObservers(QQ), FQ
      }
      addLight(QQ) {
        if (!this._blockEntityCollection) {
          this.lights.push(QQ), this.sortLightsByPriority(), QQ.parent || QQ._addToSceneRootNodes();
          for (const FQ of this.meshes) - 1 === FQ.lightSources.indexOf(QQ) && (FQ.lightSources.push(QQ), FQ._resyncLightSources());
          qQ.d.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(QQ)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(ZQ.c.CompareLightsPriority)
      }
      addCamera(QQ) {
        this._blockEntityCollection || (this.cameras.push(QQ), qQ.d.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(QQ)
        })), QQ.parent || QQ._addToSceneRootNodes())
      }
      addSkeleton(QQ) {
        this._blockEntityCollection || (this.skeletons.push(QQ), qQ.d.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(QQ)
        })))
      }
      addParticleSystem(QQ) {
        this._blockEntityCollection || (this.fC.push(QQ), qQ.d.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(QQ)
        })))
      }
      addAnimation(QQ) {
        this._blockEntityCollection || this.animations.push(QQ)
      }
      addAnimationGroup(QQ) {
        this._blockEntityCollection || (this.animationGroups.push(QQ), qQ.d.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(QQ)
        })))
      }
      addMultiMaterial(QQ) {
        this._blockEntityCollection || (this.multiMaterials.push(QQ), qQ.d.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(QQ)
        })))
      }
      addMaterial(QQ) {
        this._blockEntityCollection || QQ.iN() === this && -1 !== QQ._indexInSceneMaterialArray || (QQ._indexInSceneMaterialArray = this.materials.length, this.materials.push(QQ), qQ.d.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(QQ)
        })))
      }
      addMorphTargetManager(QQ) {
        this._blockEntityCollection || this.morphTargetManagers.push(QQ)
      }
      addGeometry(QQ) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[QQ.uniqueId] = this.geometries.length), this.geometries.push(QQ))
      }
      addActionManager(QQ) {
        this.actionManagers.push(QQ)
      }
      addTexture(QQ) {
        this._blockEntityCollection || (this.textures.push(QQ), this.onNewTextureAddedObservable.notifyObservers(QQ))
      }
      addFrameGraph(QQ) {
        this.frameGraphs.push(QQ), qQ.d.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(QQ)
        }))
      }
      addObjectRenderer(QQ) {
        this.objectRenderers.push(QQ), qQ.d.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(QQ)
        }))
      }
      addPostProcess(QQ) {
        this._blockEntityCollection || (this.postProcesses.push(QQ), qQ.d.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(QQ)
        })))
      }
      addEffectLayer(QQ) {
        this._blockEntityCollection || (this.effectLayers.push(QQ), qQ.d.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(QQ)
        })))
      }
      switchActiveCamera(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = QQ, FQ && QQ.attachControl())
      }
      setActiveCameraById(QQ) {
        const FQ = this.getCameraById(QQ);
        return FQ ? (this.activeCamera = FQ, FQ) : null
      }
      setActiveCameraByName(QQ) {
        const FQ = this.getCameraByName(QQ);
        return FQ ? (this.activeCamera = FQ, FQ) : null
      }
      getAnimationGroupByName(QQ) {
        for (let FQ = 0; FQ < this.animationGroups.length; FQ++)
          if (this.animationGroups[FQ].name === QQ) return this.animationGroups[FQ];
        return null
      }
      _getMaterial(QQ, FQ) {
        for (let wQ = 0; wQ < this.materials.length; wQ++) {
          const QQ = this.materials[wQ];
          if (FQ(QQ)) return QQ
        }
        if (QQ)
          for (let wQ = 0; wQ < this.multiMaterials.length; wQ++) {
            const QQ = this.multiMaterials[wQ];
            if (FQ(QQ)) return QQ
          }
        return null
      }
      getMaterialByUniqueID(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(QQ, FQ)
      }
      getMaterialByUniqueId(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(FQ, (FQ => FQ.uniqueId === QQ))
      }
      getMaterialById(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(FQ, (FQ => FQ.id === QQ))
      }
      getMaterialByName(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(FQ, (FQ => FQ.name === QQ))
      }
      getLastMaterialById(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let wQ = this.materials.length - 1; wQ >= 0; wQ--)
          if (this.materials[wQ].id === QQ) return this.materials[wQ];
        if (FQ)
          for (let wQ = this.multiMaterials.length - 1; wQ >= 0; wQ--)
            if (this.multiMaterials[wQ].id === QQ) return this.multiMaterials[wQ];
        return null
      }
      getTextureByUniqueId(QQ) {
        for (let FQ = 0; FQ < this.textures.length; FQ++)
          if (this.textures[FQ].uniqueId === QQ) return this.textures[FQ];
        return null
      }
      getTextureByName(QQ) {
        for (let FQ = 0; FQ < this.textures.length; FQ++)
          if (this.textures[FQ].name === QQ) return this.textures[FQ];
        return null
      }
      getCameraById(QQ) {
        for (let FQ = 0; FQ < this.cameras.length; FQ++)
          if (this.cameras[FQ].id === QQ) return this.cameras[FQ];
        return null
      }
      getCameraByUniqueId(QQ) {
        for (let FQ = 0; FQ < this.cameras.length; FQ++)
          if (this.cameras[FQ].uniqueId === QQ) return this.cameras[FQ];
        return null
      }
      getCameraByName(QQ) {
        for (let FQ = 0; FQ < this.cameras.length; FQ++)
          if (this.cameras[FQ].name === QQ) return this.cameras[FQ];
        return null
      }
      getBoneById(QQ) {
        for (let FQ = 0; FQ < this.skeletons.length; FQ++) {
          const wQ = this.skeletons[FQ];
          for (let FQ = 0; FQ < wQ.bones.length; FQ++)
            if (wQ.bones[FQ].id === QQ) return wQ.bones[FQ]
        }
        return null
      }
      getBoneByName(QQ) {
        for (let FQ = 0; FQ < this.skeletons.length; FQ++) {
          const wQ = this.skeletons[FQ];
          for (let FQ = 0; FQ < wQ.bones.length; FQ++)
            if (wQ.bones[FQ].name === QQ) return wQ.bones[FQ]
        }
        return null
      }
      getLightByName(QQ) {
        for (let FQ = 0; FQ < this.lights.length; FQ++)
          if (this.lights[FQ].name === QQ) return this.lights[FQ];
        return null
      }
      getLightById(QQ) {
        for (let FQ = 0; FQ < this.lights.length; FQ++)
          if (this.lights[FQ].id === QQ) return this.lights[FQ];
        return null
      }
      getLightByUniqueId(QQ) {
        for (let FQ = 0; FQ < this.lights.length; FQ++)
          if (this.lights[FQ].uniqueId === QQ) return this.lights[FQ];
        return null
      }
      getParticleSystemById(QQ) {
        for (let FQ = 0; FQ < this.fC.length; FQ++)
          if (this.fC[FQ].id === QQ) return this.fC[FQ];
        return null
      }
      getGeometryById(QQ) {
        for (let FQ = 0; FQ < this.geometries.length; FQ++)
          if (this.geometries[FQ].id === QQ) return this.geometries[FQ];
        return null
      }
      _getGeometryByUniqueId(QQ) {
        if (this._geometriesByUniqueId) {
          const FQ = this._geometriesByUniqueId[QQ];
          if (void 0 !== FQ) return this.geometries[FQ]
        } else
          for (let FQ = 0; FQ < this.geometries.length; FQ++)
            if (this.geometries[FQ].uniqueId === QQ) return this.geometries[FQ];
        return null
      }
      getFrameGraphByName(QQ) {
        for (let FQ = 0; FQ < this.frameGraphs.length; FQ++)
          if (this.frameGraphs[FQ].name === QQ) return this.frameGraphs[FQ];
        return null
      }
      pushGeometry(QQ, FQ) {
        return !(!FQ && this._getGeometryByUniqueId(QQ.uniqueId)) && (this.addGeometry(QQ), qQ.d.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(QQ)
        })), !0)
      }
      removeGeometry(QQ) {
        let FQ;
        if (this._geometriesByUniqueId) {
          if (FQ = this._geometriesByUniqueId[QQ.uniqueId], void 0 === FQ) return !1
        } else if (FQ = this.geometries.indexOf(QQ), FQ < 0) return !1;
        if (FQ !== this.geometries.length - 1) {
          const QQ = this.geometries[this.geometries.length - 1];
          QQ && (this.geometries[FQ] = QQ, this._geometriesByUniqueId && (this._geometriesByUniqueId[QQ.uniqueId] = FQ))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[QQ.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(QQ), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(QQ) {
        for (let FQ = 0; FQ < this.meshes.length; FQ++)
          if (this.meshes[FQ].id === QQ) return this.meshes[FQ];
        return null
      }
      getMeshesById(QQ) {
        return this.meshes.filter((function(FQ) {
          return FQ.id === QQ
        }))
      }
      getTransformNodeById(QQ) {
        for (let FQ = 0; FQ < this.transformNodes.length; FQ++)
          if (this.transformNodes[FQ].id === QQ) return this.transformNodes[FQ];
        return null
      }
      getTransformNodeByUniqueId(QQ) {
        for (let FQ = 0; FQ < this.transformNodes.length; FQ++)
          if (this.transformNodes[FQ].uniqueId === QQ) return this.transformNodes[FQ];
        return null
      }
      getTransformNodesById(QQ) {
        return this.transformNodes.filter((function(FQ) {
          return FQ.id === QQ
        }))
      }
      getMeshByUniqueId(QQ) {
        for (let FQ = 0; FQ < this.meshes.length; FQ++)
          if (this.meshes[FQ].uniqueId === QQ) return this.meshes[FQ];
        return null
      }
      getLastMeshById(QQ) {
        for (let FQ = this.meshes.length - 1; FQ >= 0; FQ--)
          if (this.meshes[FQ].id === QQ) return this.meshes[FQ];
        return null
      }
      getLastTransformNodeById(QQ) {
        for (let FQ = this.transformNodes.length - 1; FQ >= 0; FQ--)
          if (this.transformNodes[FQ].id === QQ) return this.transformNodes[FQ];
        return null
      }
      getLastEntryById(QQ) {
        let FQ;
        for (FQ = this.meshes.length - 1; FQ >= 0; FQ--)
          if (this.meshes[FQ].id === QQ) return this.meshes[FQ];
        for (FQ = this.transformNodes.length - 1; FQ >= 0; FQ--)
          if (this.transformNodes[FQ].id === QQ) return this.transformNodes[FQ];
        for (FQ = this.cameras.length - 1; FQ >= 0; FQ--)
          if (this.cameras[FQ].id === QQ) return this.cameras[FQ];
        for (FQ = this.lights.length - 1; FQ >= 0; FQ--)
          if (this.lights[FQ].id === QQ) return this.lights[FQ];
        for (FQ = this.skeletons.length - 1; FQ >= 0; FQ--) {
          const wQ = this.skeletons[FQ];
          for (let FQ = wQ.bones.length - 1; FQ >= 0; FQ--)
            if (wQ.bones[FQ].id === QQ) return wQ.bones[FQ]
        }
        return null
      }
      getNodeById(QQ) {
        const FQ = this.getMeshById(QQ);
        if (FQ) return FQ;
        const wQ = this.getTransformNodeById(QQ);
        if (wQ) return wQ;
        const LQ = this.getLightById(QQ);
        if (LQ) return LQ;
        const qQ = this.getCameraById(QQ);
        if (qQ) return qQ;
        const oQ = this.getBoneById(QQ);
        return oQ || null
      }
      getNodeByName(QQ) {
        const FQ = this.getMeshByName(QQ);
        if (FQ) return FQ;
        const wQ = this.getTransformNodeByName(QQ);
        if (wQ) return wQ;
        const LQ = this.getLightByName(QQ);
        if (LQ) return LQ;
        const qQ = this.getCameraByName(QQ);
        if (qQ) return qQ;
        const oQ = this.getBoneByName(QQ);
        return oQ || null
      }
      getMeshByName(QQ) {
        for (let FQ = 0; FQ < this.meshes.length; FQ++)
          if (this.meshes[FQ].name === QQ) return this.meshes[FQ];
        return null
      }
      getTransformNodeByName(QQ) {
        for (let FQ = 0; FQ < this.transformNodes.length; FQ++)
          if (this.transformNodes[FQ].name === QQ) return this.transformNodes[FQ];
        return null
      }
      getLastSkeletonById(QQ) {
        for (let FQ = this.skeletons.length - 1; FQ >= 0; FQ--)
          if (this.skeletons[FQ].id === QQ) return this.skeletons[FQ];
        return null
      }
      getSkeletonByUniqueId(QQ) {
        for (let FQ = 0; FQ < this.skeletons.length; FQ++)
          if (this.skeletons[FQ].uniqueId === QQ) return this.skeletons[FQ];
        return null
      }
      getSkeletonById(QQ) {
        for (let FQ = 0; FQ < this.skeletons.length; FQ++)
          if (this.skeletons[FQ].id === QQ) return this.skeletons[FQ];
        return null
      }
      getSkeletonByName(QQ) {
        for (let FQ = 0; FQ < this.skeletons.length; FQ++)
          if (this.skeletons[FQ].name === QQ) return this.skeletons[FQ];
        return null
      }
      getMorphTargetManagerById(QQ) {
        for (let FQ = 0; FQ < this.morphTargetManagers.length; FQ++)
          if (this.morphTargetManagers[FQ].uniqueId === QQ) return this.morphTargetManagers[FQ];
        return null
      }
      getMorphTargetById(QQ) {
        for (let FQ = 0; FQ < this.morphTargetManagers.length; ++FQ) {
          const wQ = this.morphTargetManagers[FQ];
          for (let FQ = 0; FQ < wQ.numTargets; ++FQ) {
            const LQ = wQ.getTarget(FQ);
            if (LQ.id === QQ) return LQ
          }
        }
        return null
      }
      getMorphTargetByName(QQ) {
        for (let FQ = 0; FQ < this.morphTargetManagers.length; ++FQ) {
          const wQ = this.morphTargetManagers[FQ];
          for (let FQ = 0; FQ < wQ.numTargets; ++FQ) {
            const LQ = wQ.getTarget(FQ);
            if (LQ.name === QQ) return LQ
          }
        }
        return null
      }
      getPostProcessByName(QQ) {
        for (let FQ = 0; FQ < this.postProcesses.length; ++FQ) {
          const wQ = this.postProcesses[FQ];
          if (wQ.name === QQ) return wQ
        }
        return null
      }
      isActiveMesh(QQ) {
        return -1 !== this._activeMeshes.indexOf(QQ)
      }
      get uid() {
        return this._uid || (this._uid = LQ.g.RandomId()), this._uid
      }
      addExternalData(QQ, FQ) {
        return this._externalData || (this._externalData = new vQ), this._externalData.add(QQ, FQ)
      }
      getExternalData(QQ) {
        return this._externalData ? this._externalData.get(QQ) : null
      }
      getOrAddExternalDataWithFactory(QQ, FQ) {
        return this._externalData || (this._externalData = new vQ), this._externalData.getOrAddWithFactory(QQ, FQ)
      }
      removeExternalData(QQ) {
        return this._externalData.remove(QQ)
      }
      _evaluateSubMesh(QQ, FQ, wQ, LQ) {
        if (LQ || QQ.isInFrustum(this._frustumPlanes)) {
          for (let LQ = 0, qQ = this._evaluateSubMeshStage; LQ < qQ.length; LQ++) {
            qQ[LQ].action(FQ, QQ)
          }
          const wQ = QQ.Ux();
          null !== wQ && void 0 !== wQ && (wQ.hasRenderTargetTextures && null != wQ.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(wQ) && (this._processedMaterials.push(wQ), this._materialsRenderTargets.concatWithNoDuplicate(wQ.getRenderTargetTextures())), this._renderingManager.dispatch(QQ, FQ, wQ))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(QQ) {
        this._preventFreeActiveMeshesAndRenderingGroups !== QQ && (QQ && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = QQ)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let QQ = 0; QQ < this.activeCameras.length; QQ++) {
            const FQ = this.activeCameras[QQ];
            FQ && FQ._activeMeshes && FQ._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let QQ = 0; QQ < this.textures.length; QQ++) {
            const FQ = this.textures[QQ];
            FQ && FQ.renderList && FQ.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          FQ = arguments.length > 1 ? arguments[1] : void 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          oQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const DQ = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const QQ of DQ) QQ.objectRenderer._freezeActiveMeshes(LQ);
          return this._freezeActiveMeshesCancel = (0, qQ.e)((() => {
            let QQ = !0,
              FQ = !0;
            for (const wQ of DQ) QQ && (QQ = wQ.objectRenderer._isFrozen), FQ && (FQ = null !== wQ.objectRenderer._freezeActiveMeshesCancel);
            if (QQ) return !0;
            if (!FQ) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = oQ, this._skipEvaluateActiveMeshesCompletely = QQ, FQ?.()
          }), ((QQ, FQ) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), FQ) {
              const FQ = "Scene: Timeout while waiting for meshes to be frozen.";
              wQ ? wQ(FQ) : (Qw.c.Error(FQ), QQ && Qw.c.Error(QQ))
            } else {
              const FQ = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              wQ ? wQ(FQ) : (Qw.c.Error(FQ), QQ && (Qw.c.Error(QQ), QQ.stack && Qw.c.Error(QQ.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = oQ, this._skipEvaluateActiveMeshesCompletely = QQ, LQ)
              for (let QQ = 0; QQ < this._activeMeshes.length; QQ++) this._activeMeshes.data[QQ]._freeze();
            FQ && FQ()
          } else wQ && wQ("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let QQ = 0; QQ < this.meshes.length; QQ++) {
          const FQ = this.meshes[QQ];
          FQ._internalAbstractMeshDataInfo && (FQ._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const QQ = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const FQ of QQ) FQ.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let QQ = 0; QQ < this._activeMeshes.length; QQ++) this._activeMeshes.data[QQ]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(QQ) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => QQ.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const QQ = this._activeMeshes.length;
            for (let FQ = 0; FQ < QQ; FQ++) {
              this._activeMeshes.data[FQ].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const QQ = this._activeParticleSystems.length;
            for (let FQ = 0; FQ < QQ; FQ++) this._activeParticleSystems.data[FQ].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let qQ = 0, oQ = this._beforeEvaluateActiveMeshStage; qQ < oQ.length; qQ++) {
          oQ[qQ].action()
        }
        const QQ = this.getActiveMeshCandidates(),
          FQ = QQ.length,
          wQ = JQ.e.Enabled,
          LQ = this.customLODSelector;
        for (let qQ = 0; qQ < FQ; qQ++) {
          const FQ = QQ.data[qQ],
            oQ = !LQ && !FQ.lN && !FQ._internalMeshDataInfo?._LODLevels.length;
          let DQ, kQ;
          if ((oQ || (DQ = FQ._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), DQ ? DQ[1] = -1 : (DQ = [FQ, -1], FQ._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, DQ))), !FQ.isBlocked) && (wQ && this._totalVertices.addCount(FQ.getTotalVertices(), !1), FQ.isReady() && FQ.isEnabled() && !FQ.ck.hasAZeroComponent)) {
            if (FQ.computeWorldMatrix(), FQ.actionManager && FQ.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(FQ), oQ) kQ = FQ;
            else if (kQ = LQ ? LQ(FQ, this.activeCamera) : FQ.getLOD(this.activeCamera), DQ[0] = kQ, DQ[1] = this._frameId, void 0 === kQ || null === kQ) continue;
            if (kQ !== FQ && 0 !== kQ.billboardMode && kQ.computeWorldMatrix(), FQ._preActivate(), FQ.isVisible && FQ.visibility > 0 && 0 !== (FQ.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || FQ.Rx || FQ.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(FQ), this.activeCamera._activeMeshes.push(FQ), kQ !== FQ && kQ._activate(this._renderId, !1);
              for (let QQ = 0, wQ = this._preActiveMeshStage; QQ < wQ.length; QQ++) {
                wQ[QQ].action(FQ)
              }
              FQ._activate(this._renderId, !1) && (FQ.lN ? FQ._internalAbstractMeshDataInfo._actAsRegularMesh && (kQ = FQ) : kQ._internalAbstractMeshDataInfo._onlyForInstances = !1, kQ._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(FQ, kQ)), FQ._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let QQ = 0; QQ < this.fC.length; QQ++) {
            const FQ = this.fC[QQ];
            if (!FQ.isStarted() || !FQ.emitter) continue;
            const wQ = FQ.emitter;
            wQ.position && !wQ.isEnabled() || (this._activeParticleSystems.push(FQ), FQ.animate(), this._renderingManager.dispatchParticles(FQ))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(QQ) {
        this._skeletonsEnabled && QQ.skeleton && (this._activeSkeletons.pushNoDuplicate(QQ.skeleton) && (QQ.skeleton.prepare(), this._activeBones.addCount(QQ.skeleton.bones.length, !1)), QQ.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(QQ) && this.frameGraph && QQ.applySkeleton(QQ.skeleton))
      }
      _activeMesh(QQ, FQ) {
        this._prepareSkeleton(FQ);
        let wQ = QQ.pqQ || QQ.lN || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || FQ.Rx;
        if (FQ && FQ.lC && FQ.lC.length > 0) {
          const LQ = this.getActiveSubMeshCandidates(FQ),
            qQ = LQ.length;
          wQ = wQ || 1 === qQ;
          for (let oQ = 0; oQ < qQ; oQ++) {
            const qQ = LQ.data[oQ];
            this._evaluateSubMesh(qQ, FQ, QQ, wQ)
          }
        }
      }
      updateTransformMatrix(QQ) {
        const FQ = this.activeCamera;
        if (FQ)
          if (FQ._renderingMultiview) {
            const wQ = FQ._rigCameras[0],
              LQ = FQ._rigCameras[1];
            this.setTransformMatrix(wQ.getViewMatrix(), wQ.getProjectionMatrix(QQ), LQ.getViewMatrix(), LQ.getProjectionMatrix(QQ))
          } else this.setTransformMatrix(FQ.getViewMatrix(), FQ.getProjectionMatrix(QQ))
      }
      _bindFrameBuffer(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (QQ && QQ._multiviewTexture ? QQ._multiviewTexture._bindFrameBuffer() : QQ && QQ.outputRenderTarget ? QQ.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), FQ && this._clearFrameBuffer(QQ)
      }
      _clearFrameBuffer(QQ) {
        if (QQ && QQ._multiviewTexture);
        else if (QQ && QQ.outputRenderTarget && !QQ._renderingMultiview) {
          const FQ = QQ.outputRenderTarget;
          FQ.onClearObservable.hasObservers() ? FQ.onClearObservable.notifyObservers(this._engine) : FQ.skipInitialClear || QQ.isRightCamera || (this.autoClear && this._engine.clear(FQ.clearColor || this._clearColor, !FQ._cleared, !0, !0), FQ._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(QQ, FQ) {
        let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (QQ && QQ._skipRendering) return;
        const qQ = this._engine;
        if (this._activeCamera = QQ, !this.activeCamera) throw new Error("Active camera not set");
        if (qQ.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && wQ) {
          let FQ = !0;
          QQ._renderingMultiview && QQ.outputRenderTarget && (FQ = QQ.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, QQ.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), QQ._renderingMultiview && QQ.outputRenderTarget && (QQ.outputRenderTarget.skipInitialClear = FQ)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = QQ.outputRenderTarget?.renderPassId ?? QQ.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let LQ = 0; LQ < this._softwareSkinnedMeshes.length; LQ++) {
          const QQ = this._softwareSkinnedMeshes.data[LQ];
          QQ.applySkeleton(QQ.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), QQ.customRenderTargets && QQ.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(QQ.customRenderTargets), FQ && FQ.customRenderTargets && FQ.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(FQ.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let LQ = 0, kQ = this._gatherActiveCameraRenderTargetsStage; LQ < kQ.length; LQ++) {
          kQ[LQ].action(this._renderTargets)
        }
        let oQ = !1;
        if (this.renderTargetsEnabled) {
          let QQ;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            LQ.g.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const FQ = this.getBoundingBoxRenderer?.();
            for (let wQ = 0; wQ < this._renderTargets.length; wQ++) {
              const LQ = this._renderTargets.data[wQ];
              if (LQ._shouldRender()) {
                this._renderId++;
                const wQ = LQ.activeCamera && LQ.activeCamera !== this.activeCamera;
                FQ && !QQ && (QQ = FQ.renderList.length > 0 ? FQ.renderList.data.slice() : [], QQ.length = FQ.renderList.length), LQ.render(wQ, this.dumpNextRenderTargets), oQ = !0
              }
            }
            FQ && QQ && (FQ.renderList.data = QQ, FQ.renderList.length = QQ.length), LQ.g.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const FQ = this.getBoundingBoxRenderer?.();
            FQ && !QQ && (QQ = FQ.renderList.length > 0 ? FQ.renderList.data.slice() : [], QQ.length = FQ.renderList.length);
            for (let QQ = 0, wQ = this._cameraDrawRenderTargetStage; QQ < wQ.length; QQ++) {
              oQ = wQ[QQ].action(this.activeCamera) || oQ
            }
            FQ && QQ && (FQ.renderList.data = QQ, FQ.renderList.length = QQ.length)
          }
          this._intermediateRendering = !1
        }
        oQ && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || QQ._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let LQ = 0, kQ = this._beforeCameraDrawStage; LQ < kQ.length; LQ++) {
          kQ[LQ].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const DQ = qQ.snapshotRendering && 1 === qQ.snapshotRenderingMode;
        DQ && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !DQ), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let LQ = 0, kQ = this._afterCameraDrawStage; LQ < kQ.length; LQ++) {
          kQ[LQ].action(this.activeCamera)
        }
        if (this.postProcessManager && !QQ._multiviewTexture) {
          const FQ = QQ.outputRenderTarget ? QQ.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(QQ.isIntermediate, FQ)
        }
        for (let LQ = 0, kQ = this._afterCameraPostProcessStage; LQ < kQ.length; LQ++) {
          kQ[LQ].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === QQ.cameraRigMode || QQ._renderingMultiview) return QQ._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(QQ, void 0, FQ), void this.onAfterRenderCameraObservable.notifyObservers(QQ);
        if (QQ._useMultiviewToSingleView) this._renderMultiviewToSingleView(QQ);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(QQ);
          for (let FQ = 0; FQ < QQ._rigCameras.length; FQ++) this._renderForCamera(QQ._rigCameras[FQ], QQ)
        }
        this._activeCamera = QQ, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(QQ)
      }
      _checkIntersections() {
        for (let QQ = 0; QQ < this._meshesForIntersections.length; QQ++) {
          const FQ = this._meshesForIntersections.data[QQ];
          if (FQ.actionManager)
            for (let QQ = 0; FQ.actionManager && QQ < FQ.actionManager.actions.length; QQ++) {
              const wQ = FQ.actionManager.actions[QQ];
              if (12 === wQ.trigger || 13 === wQ.trigger) {
                const QQ = wQ.getTriggerParameter(),
                  LQ = QQ.mesh ? QQ.mesh : QQ,
                  qQ = LQ.YqQ(FQ, QQ.usePreciseIntersection),
                  oQ = FQ._intersectionsInProgress.indexOf(LQ);
                qQ && -1 === oQ ? 12 === wQ.trigger ? (wQ._executeCurrent(xQ.CreateNew(FQ, void 0, LQ)), FQ._intersectionsInProgress.push(LQ)) : 13 === wQ.trigger && FQ._intersectionsInProgress.push(LQ) : !qQ && oQ > -1 && (13 === wQ.trigger && wQ._executeCurrent(xQ.CreateNew(FQ, void 0, LQ)), FQ.actionManager.hasSpecificTrigger(13, (QQ => {
                  const FQ = QQ.mesh ? QQ.mesh : QQ;
                  return LQ === FQ
                })) && 13 !== wQ.trigger || FQ._intersectionsInProgress.splice(oQ, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(QQ) {}
      _animate(QQ) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let QQ = Math.max(ow.MinDeltaTime, Math.min(this._engine.getDeltaTime(), ow.MaxDeltaTime)) + this._timeAccumulator;
          const FQ = this._engine.getTimeStep(),
            wQ = 1e3 / FQ / 1e3;
          let LQ = 0;
          const qQ = this._engine.getLockstepMaxSteps();
          let oQ = Math.floor(QQ / FQ);
          for (oQ = Math.min(oQ, qQ); QQ > 0 && LQ < oQ;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = FQ * wQ, this._animate(FQ), this.onAfterAnimationsObservable.notifyObservers(this), this.vV && this._advancePhysicsEngineStep(FQ), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, LQ++, QQ -= FQ;
          this._timeAccumulator = QQ < 0 ? 0 : QQ
        } else {
          const QQ = this.useConstantAnimationDeltaTime ? 16 : Math.max(ow.MinDeltaTime, Math.min(this._engine.getDeltaTime(), ow.MaxDeltaTime));
          this._animationRatio = .06 * QQ, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.vV && this._advancePhysicsEngineStep(QQ)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(QQ) {
        if (QQ?.outputRenderTarget && !QQ?.isRigCamera && (QQ.outputRenderTarget._cleared = !1), QQ?.rigCameras?.length)
          for (let FQ = 0; FQ < QQ.rigCameras.length; ++FQ) {
            const wQ = QQ.rigCameras[FQ].outputRenderTarget;
            wQ && (wQ._cleared = !1)
          }
      }
      resetDrawCache(QQ) {
        if (this.meshes)
          for (const FQ of this.meshes) FQ.resetDrawCache(QQ)
      }
      _renderWithFrameGraph() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          FQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, QQ)
          for (const wQ of this.cameras)
            if (wQ.update(), 0 !== wQ.cameraRigMode)
              for (let QQ = 0; QQ < wQ._rigCameras.length; QQ++) wQ._rigCameras[QQ].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(FQ)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(QQ) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const FQ = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), LQ.g.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let QQ = 0; QQ < this._renderTargets.length; QQ++) {
            const wQ = this._renderTargets.data[QQ],
              LQ = wQ.activeCamera || FQ;
            this._renderRenderTarget(wQ, LQ, !0, this.dumpNextRenderTargets)
          }
          LQ.g.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let wQ = 0, LQ = this._beforeClearStage; wQ < LQ.length; wQ++) {
          LQ[wQ].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const FQ = this.getActiveMeshCandidates(),
            wQ = FQ.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let QQ = 0; QQ < wQ; QQ++) {
                const wQ = FQ.data[QQ];
                wQ._internalAbstractMeshDataInfo._wasActiveLastFrame && wQ.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const QQ = this._activeParticleSystems.length;
              for (let FQ = 0; FQ < QQ; FQ++) this._activeParticleSystems.data[FQ].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let LQ = 0; LQ < wQ; LQ++) {
              const wQ = FQ.data[LQ];
              wQ._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, wQ.isBlocked || (this._totalVertices.addCount(wQ.getTotalVertices(), !1), wQ.isReady() && wQ.isEnabled() && !wQ.ck.hasAZeroComponent && (wQ.computeWorldMatrix(QQ), wQ.actionManager && wQ.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(wQ)))
            }
            if (this.particlesEnabled)
              for (let QQ = 0; QQ < this.fC.length; QQ++) {
                const FQ = this.fC[QQ];
                if (!FQ.isStarted() || !FQ.emitter) continue;
                const wQ = FQ.emitter;
                wQ.position && !wQ.isEnabled() || (this._activeParticleSystems.push(FQ), FQ.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, QQ._shouldRender()) {
          if (this._renderId++, this.activeCamera = FQ, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), QQ.render(wQ, LQ)
        }
        this._intermediateRendering = !1
      }
      render() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.vW) return;
        const wQ = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(QQ, FQ)
        } finally {
          this._renderingMeshEvaluationDepth = wQ
        }
      }
      _renderFrame(QQ, FQ) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), tQ.c.iN = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const wQ of this.activeCameras) this._checkCameraRenderTarget(wQ);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), FQ || this.animate();
        for (let wQ = 0, LQ = this._beforeCameraUpdateStage; wQ < LQ.length; wQ++) {
          LQ[wQ].action()
        }
        if (QQ)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let wQ = 0; wQ < this.activeCameras.length; wQ++) {
              const QQ = this.activeCameras[wQ];
              if (QQ.update(), 0 !== QQ.cameraRigMode)
                for (let FQ = 0; FQ < QQ._rigCameras.length; FQ++) QQ._rigCameras[FQ].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let wQ = 0; wQ < this.activeCamera._rigCameras.length; wQ++) this.activeCamera._rigCameras[wQ].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(QQ, FQ);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const QQ = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            LQ.g.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let FQ = 0; FQ < this.customRenderTargets.length; FQ++) {
              const wQ = this.customRenderTargets[FQ],
                LQ = wQ.activeCamera || this.activeCamera;
              this._renderRenderTarget(wQ, LQ, QQ !== LQ, this.dumpNextRenderTargets)
            }
            LQ.g.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = QQ?.renderPassId ?? 0, this.activeCamera = QQ, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let FQ = 0, wQ = this._beforeClearStage; FQ < wQ.length; FQ++) {
            wQ[FQ].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let FQ = 0, wQ = this._gatherRenderTargetsStage; FQ < wQ.length; FQ++) {
            wQ[FQ].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let FQ = 0; FQ < this.activeCameras.length; FQ++) this._processSubCameras(this.activeCameras[FQ], FQ > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let wQ = 0, LQ = this._afterRenderStage; wQ < LQ.length; wQ++) {
          LQ[wQ].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let QQ = 0; QQ < this._toBeDisposed.length; QQ++) {
            const FQ = this._toBeDisposed[QQ];
            FQ && FQ.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let QQ = 0; QQ < this.materials.length; QQ++) this.materials[QQ].freeze()
      }
      unfreezeMaterials() {
        for (let QQ = 0; QQ < this.materials.length; QQ++) this.materials[QQ].unfreeze()
      }
      dispose() {
        if (this.vW) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, cQ.b)(this.stopAllAnimations)) {
          for (const QQ of this._activeAnimatables) QQ.onAnimationEndObservable.clear(), QQ.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const QQ = this._activeRequests.slice();
        for (const oQ of QQ) oQ.abort();
        this._activeRequests.length = 0;
        try {
          this.zN.notifyObservers(this)
        } catch (qQ) {
          Qw.c.Error("An error occurred while calling onDisposeObservable!", qQ)
        }
        this.detachControl();
        const FQ = this._engine.getInputElement?.();
        if (FQ)
          for (let oQ = 0; oQ < this.cameras.length; oQ++) this.cameras[oQ].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (QQ => QQ.dispose(!0))), this._disposeList(this.transformNodes, (QQ => QQ.dispose(!0)));
        const wQ = this.cameras;
        this._disposeList(wQ), this._disposeList(this.fC), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let LQ = this._engine.scenes.indexOf(this);
        if (LQ > -1 && this._engine.scenes.splice(LQ, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, tQ.g)(), pQ.d._LastCreatedScene === this) {
          pQ.d._LastCreatedScene = null;
          let QQ = pQ.d.Instances.length - 1;
          for (; QQ >= 0;) {
            const FQ = pQ.d.Instances[QQ];
            if (FQ.scenes.length > 0) {
              pQ.d._LastCreatedScene = FQ.scenes[this._engine.scenes.length - 1];
              break
            }
            QQ--
          }
        }
        LQ = this._engine._virtualScenes.indexOf(this), LQ > -1 && this._engine._virtualScenes.splice(LQ, 1), this._engine.wipeCaches(!0), this.zN.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(QQ, FQ) {
        const wQ = QQ.slice(0);
        FQ = FQ ?? (QQ => QQ.dispose());
        for (const LQ of wQ) FQ(LQ);
        QQ.length = 0
      }
      get vW() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let QQ = 0; QQ < this.meshes.length; QQ++) {
          const FQ = this.meshes[QQ].geometry;
          FQ && FQ.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const QQ of this.textures) {
          QQ._buffer && (QQ._buffer = null)
        }
      }
      getWorldExtends(QQ) {
        const FQ = new uQ.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          wQ = new uQ.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        QQ = QQ || (() => !0);
        const LQ = this.meshes.filter(QQ);
        for (const qQ of LQ) {
          if (qQ.computeWorldMatrix(!0), !qQ.lC || 0 === qQ.lC.length || qQ.infiniteDistance) continue;
          const QQ = qQ.sK(),
            LQ = QQ.boundingBox.minimumWorld,
            oQ = QQ.boundingBox.maximumWorld;
          uQ.p.CheckExtends(LQ, FQ, wQ), uQ.p.CheckExtends(oQ, FQ, wQ)
        }
        return FQ.x === Number.MAX_VALUE ? {
          min: uQ.p.Zero(),
          max: uQ.p.Zero()
        } : {
          min: FQ,
          max: wQ
        }
      }
      createPickingRay(QQ, FQ, wQ, LQ) {
        throw (0, cQ.k)("Ray")
      }
      createPickingRayToRef(QQ, FQ, wQ, LQ, qQ) {
        throw (0, cQ.k)("Ray")
      }
      createPickingRayInCameraSpace(QQ, FQ, wQ) {
        throw (0, cQ.k)("Ray")
      }
      createPickingRayInCameraSpaceToRef(QQ, FQ, wQ, LQ) {
        throw (0, cQ.k)("Ray")
      }
      Vb(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = (0, cQ.k)("Ray", !0);
        return DQ && Qw.c.Warn(DQ), new YQ.d
      }
      pickWithBoundingInfo(QQ, FQ, wQ, LQ, qQ) {
        const oQ = (0, cQ.k)("Ray", !0);
        return oQ && Qw.c.Warn(oQ), new YQ.d
      }
      pickWithRay(QQ, FQ, wQ, LQ) {
        throw (0, cQ.k)("Ray")
      }
      multiPick(QQ, FQ, wQ, LQ, qQ) {
        throw (0, cQ.k)("Ray")
      }
      multiPickWithRay(QQ, FQ, wQ) {
        throw (0, cQ.k)("Ray")
      }
      setPointerOverMesh(QQ, FQ, wQ) {
        this._inputManager.setPointerOverMesh(QQ, FQ, wQ)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const QQ of this.geometries) QQ._rebuild();
        for (const QQ of this.meshes) QQ._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const QQ of this._components) QQ.rebuild();
        for (const QQ of this.fC) QQ.rebuild();
        if (this.spriteManagers)
          for (const QQ of this.spriteManagers) QQ.rebuild()
      }
      _rebuildTextures() {
        for (const QQ of this.textures) QQ._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(QQ, FQ, wQ) {
        if (void 0 === FQ) return QQ;
        const LQ = [];
        for (const qQ in QQ) {
          const oQ = QQ[qQ];
          mQ.c && mQ.c.MatchesQuery(oQ, FQ) && (!wQ || wQ(oQ)) && LQ.push(oQ)
        }
        return LQ
      }
      getMeshesByTags(QQ, FQ) {
        return this._getByTags(this.meshes, QQ, FQ)
      }
      getCamerasByTags(QQ, FQ) {
        return this._getByTags(this.cameras, QQ, FQ)
      }
      getLightsByTags(QQ, FQ) {
        return this._getByTags(this.lights, QQ, FQ)
      }
      getMaterialByTags(QQ, FQ) {
        return this._getByTags(this.materials, QQ, FQ).concat(this._getByTags(this.multiMaterials, QQ, FQ))
      }
      getTransformNodesByTags(QQ, FQ) {
        return this._getByTags(this.transformNodes, QQ, FQ)
      }
      setRenderingOrder(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(QQ, FQ, wQ, LQ)
      }
      setRenderingAutoClearDepthStencil(QQ, FQ) {
        let wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(QQ, FQ, wQ, LQ)
      }
      getAutoClearDepthStencilSetup(QQ) {
        return this._renderingManager.getAutoClearDepthStencilSetup(QQ)
      }
      _forceBlockMaterialDirtyMechanism(QQ) {
        this._blockMaterialDirtyMechanism = QQ
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(QQ) {
        this._blockMaterialDirtyMechanism !== QQ && (this._blockMaterialDirtyMechanism = QQ, QQ || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(QQ, FQ) {
        if (!this._blockMaterialDirtyMechanism)
          for (const wQ of this.materials) FQ && !FQ(wQ) || wQ.dFQ(QQ)
      }
      _loadFile(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        const kQ = (0, PQ.m)(QQ, FQ, wQ, LQ ? this.offlineProvider : void 0, qQ, oQ, DQ);
        return this._activeRequests.push(kQ), kQ.onCompleteObservable.add((QQ => {
          this._activeRequests.splice(this._activeRequests.indexOf(QQ), 1)
        })), kQ
      }
      async _loadFileAsync(QQ, FQ, wQ, LQ, qQ) {
        return await new Promise(((oQ, DQ) => {
          this._loadFile(QQ, (QQ => {
            oQ(QQ)
          }), FQ, wQ, LQ, ((QQ, FQ) => {
            DQ(FQ)
          }), qQ)
        }))
      }
      async _loadDelayedFileAsync(QQ, FQ, wQ) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const LQ = `${QQ}|${FQ?"binary":"string"}`;
        let qQ = this._delayedFileRequests.get(LQ);
        if (!qQ) {
          qQ = FQ ? this._loadFileAsync(QQ, void 0, wQ, !0) : this._loadFileAsync(QQ, void 0, wQ, !1);
          const oQ = qQ;
          (async () => {
            try {
              await oQ
            } catch {}
            this._delayedFileRequests?.delete(LQ)
          })(), this._delayedFileRequests.set(LQ, qQ)
        }
        return await qQ
      }
      _requestFile(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        const kQ = (0, PQ.u)(QQ, FQ, wQ, LQ ? this.offlineProvider : void 0, qQ, oQ, DQ);
        return this._activeRequests.push(kQ), kQ.onCompleteObservable.add((QQ => {
          this._activeRequests.splice(this._activeRequests.indexOf(QQ), 1)
        })), kQ
      }
      async _requestFileAsync(QQ, FQ, wQ, LQ, qQ) {
        return await new Promise(((oQ, DQ) => {
          this._requestFile(QQ, (QQ => {
            oQ(QQ)
          }), FQ, wQ, LQ, (QQ => {
            DQ(QQ)
          }), qQ)
        }))
      }
      _readFile(QQ, FQ, wQ, LQ, qQ) {
        const oQ = (0, PQ.r)(QQ, FQ, wQ, LQ, qQ);
        return this._activeRequests.push(oQ), oQ.onCompleteObservable.add((QQ => {
          this._activeRequests.splice(this._activeRequests.indexOf(QQ), 1)
        })), oQ
      }
      async _readFileAsync(QQ, FQ, wQ) {
        return await new Promise(((LQ, qQ) => {
          this._readFile(QQ, (QQ => {
            LQ(QQ)
          }), FQ, wQ, (QQ => {
            qQ(QQ)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, cQ.k)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(QQ) {
        return this.setActiveCameraById(QQ)
      }
      getMaterialByID(QQ) {
        return this.getMaterialById(QQ)
      }
      getLastMaterialByID(QQ) {
        return this.getLastMaterialById(QQ)
      }
      getTextureByUniqueID(QQ) {
        return this.getTextureByUniqueId(QQ)
      }
      getCameraByID(QQ) {
        return this.getCameraById(QQ)
      }
      getCameraByUniqueID(QQ) {
        return this.getCameraByUniqueId(QQ)
      }
      getBoneByID(QQ) {
        return this.getBoneById(QQ)
      }
      getLightByID(QQ) {
        return this.getLightById(QQ)
      }
      getLightByUniqueID(QQ) {
        return this.getLightByUniqueId(QQ)
      }
      getParticleSystemByID(QQ) {
        return this.getParticleSystemById(QQ)
      }
      getGeometryByID(QQ) {
        return this.getGeometryById(QQ)
      }
      getMeshByID(QQ) {
        return this.getMeshById(QQ)
      }
      getMeshByUniqueID(QQ) {
        return this.getMeshByUniqueId(QQ)
      }
      getLastMeshByID(QQ) {
        return this.getLastMeshById(QQ)
      }
      getMeshesByID(QQ) {
        return this.getMeshesById(QQ)
      }
      getTransformNodeByID(QQ) {
        return this.getTransformNodeById(QQ)
      }
      getTransformNodeByUniqueID(QQ) {
        return this.getTransformNodeByUniqueId(QQ)
      }
      getTransformNodesByID(QQ) {
        return this.getTransformNodesById(QQ)
      }
      getNodeByID(QQ) {
        return this.getNodeById(QQ)
      }
      getLastEntryByID(QQ) {
        return this.getLastEntryById(QQ)
      }
      getLastSkeletonByID(QQ) {
        return this.getLastSkeletonById(QQ)
      }
    }
    ow.FOGMODE_NONE = 0, ow.FOGMODE_EXP = 1, ow.FOGMODE_EXP2 = 2, ow.FOGMODE_LINEAR = 3, ow.MinDeltaTime = 1, ow.MaxDeltaTime = 1e3, ow._OriginalDefaultMaterialFactory = ow.DefaultMaterialFactory;
    let Dw = !1;

    function kw() {
      Dw || (Dw = !0, (0, Fw.e)("BABYLON.Scene", ow))
    }(dQ = ow.prototype).sortActiveAnimatables ?? (dQ.sortActiveAnimatables = (0, cQ.g)("Scene", "sortActiveAnimatables")), (QF = ow.prototype).beginWeightedAnimation ?? (QF.beginWeightedAnimation = (0, cQ.g)("Scene", "beginWeightedAnimation")), (FF = ow.prototype).beginAnimation ?? (FF.beginAnimation = (0, cQ.g)("Scene", "beginAnimation")), (wF = ow.prototype).beginHierarchyAnimation ?? (wF.beginHierarchyAnimation = (0, cQ.g)("Scene", "beginHierarchyAnimation")), (LF = ow.prototype).beginDirectAnimation ?? (LF.beginDirectAnimation = (0, cQ.g)("Scene", "beginDirectAnimation")), (qF = ow.prototype).beginDirectHierarchyAnimation ?? (qF.beginDirectHierarchyAnimation = (0, cQ.g)("Scene", "beginDirectHierarchyAnimation")), (oF = ow.prototype).getAnimatableByTarget ?? (oF.getAnimatableByTarget = (0, cQ.g)("Scene", "getAnimatableByTarget")), (DF = ow.prototype).getAllAnimatablesByTarget ?? (DF.getAllAnimatablesByTarget = (0, cQ.g)("Scene", "getAllAnimatablesByTarget")), (kF = ow.prototype).stopAllAnimations ?? (kF.stopAllAnimations = (0, cQ.g)("Scene", "stopAllAnimations")), (vF = ow.prototype).getSoundByName ?? (vF.getSoundByName = (0, cQ.g)("Scene", "getSoundByName")), (mF = ow.prototype).createOrUpdateSelectionOctree ?? (mF.createOrUpdateSelectionOctree = (0, cQ.g)("Scene", "createOrUpdateSelectionOctree")), (uF = ow.prototype).createDefaultLight ?? (uF.createDefaultLight = (0, cQ.g)("Scene", "createDefaultLight")), (HF = ow.prototype).createDefaultCamera ?? (HF.createDefaultCamera = (0, cQ.g)("Scene", "createDefaultCamera")), (bF = ow.prototype).createDefaultCameraOrLight ?? (bF.createDefaultCameraOrLight = (0, cQ.g)("Scene", "createDefaultCameraOrLight")), (YF = ow.prototype).createDefaultSkybox ?? (YF.createDefaultSkybox = (0, cQ.g)("Scene", "createDefaultSkybox")), (xF = ow.prototype).createDefaultEnvironment ?? (xF.createDefaultEnvironment = (0, cQ.g)("Scene", "createDefaultEnvironment")), (AF = ow.prototype).createDefaultVRExperience ?? (AF.createDefaultVRExperience = (0, cQ.g)("Scene", "createDefaultVRExperience")), (tF = ow.prototype).createDefaultXRExperienceAsync ?? (tF.createDefaultXRExperienceAsync = (0, cQ.g)("Scene", "createDefaultXRExperienceAsync")), (eF = ow.prototype).getGlowLayerByName ?? (eF.getGlowLayerByName = (0, cQ.g)("Scene", "getGlowLayerByName")), (MF = ow.prototype).getHighlightLayerByName ?? (MF.getHighlightLayerByName = (0, cQ.g)("Scene", "getHighlightLayerByName")), (GF = ow.prototype).getSelectionOutlineLayerByName ?? (GF.getSelectionOutlineLayerByName = (0, cQ.g)("Scene", "getSelectionOutlineLayerByName")), (pF = ow.prototype).removeLensFlareSystem ?? (pF.removeLensFlareSystem = (0, cQ.g)("Scene", "removeLensFlareSystem")), (cF = ow.prototype).addLensFlareSystem ?? (cF.addLensFlareSystem = (0, cQ.g)("Scene", "addLensFlareSystem")), (CF = ow.prototype).getLensFlareSystemByName ?? (CF.getLensFlareSystemByName = (0, cQ.g)("Scene", "getLensFlareSystemByName")), (SF = ow.prototype).getLensFlareSystemByID ?? (SF.getLensFlareSystemByID = (0, cQ.g)("Scene", "getLensFlareSystemByID")), (iF = ow.prototype).getLensFlareSystemById ?? (iF.getLensFlareSystemById = (0, cQ.g)("Scene", "getLensFlareSystemById")), (WF = ow.prototype).getPhysicsEngine ?? (WF.getPhysicsEngine = (0, cQ.g)("Scene", "getPhysicsEngine")), (RF = ow.prototype).enablePhysics ?? (RF.enablePhysics = (0, cQ.g)("Scene", "enablePhysics")), (OF = ow.prototype).disablePhysicsEngine ?? (OF.disablePhysicsEngine = (0, cQ.g)("Scene", "disablePhysicsEngine")), (sF = ow.prototype).isPhysicsEnabled ?? (sF.isPhysicsEnabled = (0, cQ.g)("Scene", "isPhysicsEnabled")), (rF = ow.prototype).deleteCompoundImpostor ?? (rF.deleteCompoundImpostor = (0, cQ.g)("Scene", "deleteCompoundImpostor")), (IF = ow.prototype).removeReflectionProbe ?? (IF.removeReflectionProbe = (0, cQ.g)("Scene", "removeReflectionProbe")), (UF = ow.prototype).addReflectionProbe ?? (UF.addReflectionProbe = (0, cQ.g)("Scene", "addReflectionProbe")), (NF = ow.prototype).getBoundingBoxRenderer ?? (NF.getBoundingBoxRenderer = (0, cQ.g)("Scene", "getBoundingBoxRenderer")), (TF = ow.prototype).enableDepthRenderer ?? (TF.enableDepthRenderer = (0, cQ.g)("Scene", "enableDepthRenderer")), (KF = ow.prototype).disableDepthRenderer ?? (KF.disableDepthRenderer = (0, cQ.g)("Scene", "disableDepthRenderer")), (zF = ow.prototype).enableFluidRenderer ?? (zF.enableFluidRenderer = (0, cQ.g)("Scene", "enableFluidRenderer")), (lF = ow.prototype).disableFluidRenderer ?? (lF.disableFluidRenderer = (0, cQ.g)("Scene", "disableFluidRenderer")), (jF = ow.prototype).enableGeometryBufferRenderer ?? (jF.enableGeometryBufferRenderer = (0, cQ.g)("Scene", "enableGeometryBufferRenderer")), (aF = ow.prototype).disableGeometryBufferRenderer ?? (aF.disableGeometryBufferRenderer = (0, cQ.g)("Scene", "disableGeometryBufferRenderer")), (XF = ow.prototype).enableIblCdfGenerator ?? (XF.enableIblCdfGenerator = (0, cQ.g)("Scene", "enableIblCdfGenerator")), (fF = ow.prototype).disableIblCdfGenerator ?? (fF.disableIblCdfGenerator = (0, cQ.g)("Scene", "disableIblCdfGenerator")), (VF = ow.prototype).getOutlineRenderer ?? (VF.getOutlineRenderer = (0, cQ.g)("Scene", "getOutlineRenderer")), (hF = ow.prototype).enablePrePassRenderer ?? (hF.enablePrePassRenderer = (0, cQ.g)("Scene", "enablePrePassRenderer")), (JF = ow.prototype).disablePrePassRenderer ?? (JF.disablePrePassRenderer = (0, cQ.g)("Scene", "disablePrePassRenderer")), (EF = ow.prototype).enableSubSurfaceForPrePass ?? (EF.enableSubSurfaceForPrePass = (0, cQ.g)("Scene", "enableSubSurfaceForPrePass")), (nF = ow.prototype).disableSubSurfaceForPrePass ?? (nF.disableSubSurfaceForPrePass = (0, cQ.g)("Scene", "disableSubSurfaceForPrePass")), (gF = ow.prototype).pickSprite ?? (gF.pickSprite = (0, cQ.g)("Scene", "pickSprite")), (PF = ow.prototype).pickSpriteWithRay ?? (PF.pickSpriteWithRay = (0, cQ.g)("Scene", "pickSpriteWithRay")), (ZF = ow.prototype).multiPickSprite ?? (ZF.multiPickSprite = (0, cQ.g)("Scene", "multiPickSprite")), (yF = ow.prototype).multiPickSpriteWithRay ?? (yF.multiPickSpriteWithRay = (0, cQ.g)("Scene", "multiPickSpriteWithRay")), (BF = ow.prototype).setPointerOverSprite ?? (BF.setPointerOverSprite = (0, cQ.g)("Scene", "setPointerOverSprite")), (dF = ow.prototype).getPointerOverSprite ?? (dF.getPointerOverSprite = (0, cQ.g)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(ow.prototype, "mainSoundTrack") || Object.defineProperty(ow.prototype, "mainSoundTrack", (0, cQ.e)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(ow.prototype, "soundTracks") || Object.defineProperty(ow.prototype, "soundTracks", (0, cQ.e)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(ow.prototype, "audioEnabled") || Object.defineProperty(ow.prototype, "audioEnabled", (0, cQ.e)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(ow.prototype, "headphone") || Object.defineProperty(ow.prototype, "headphone", (0, cQ.e)("Scene", "headphone")), Object.getOwnPropertyDescriptor(ow.prototype, "audioListenerPositionProvider") || Object.defineProperty(ow.prototype, "audioListenerPositionProvider", (0, cQ.e)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(ow.prototype, "audioListenerRotationProvider") || Object.defineProperty(ow.prototype, "audioListenerRotationProvider", (0, cQ.e)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(ow.prototype, "audioPositioningRefreshRate") || Object.defineProperty(ow.prototype, "audioPositioningRefreshRate", (0, cQ.e)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(ow.prototype, "selectionOctree") || Object.defineProperty(ow.prototype, "selectionOctree", (0, cQ.e)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(ow.prototype, "debugLayer") || Object.defineProperty(ow.prototype, "debugLayer", (0, cQ.e)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(ow.prototype, "gamepadManager") || Object.defineProperty(ow.prototype, "gamepadManager", (0, cQ.e)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(ow.prototype, "simplificationQueue") || Object.defineProperty(ow.prototype, "simplificationQueue", (0, cQ.e)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(ow.prototype, "onBeforePhysicsObservable") || Object.defineProperty(ow.prototype, "onBeforePhysicsObservable", (0, cQ.e)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(ow.prototype, "onAfterPhysicsObservable") || Object.defineProperty(ow.prototype, "onAfterPhysicsObservable", (0, cQ.e)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(ow.prototype, "reflectionProbes") || Object.defineProperty(ow.prototype, "reflectionProbes", (0, cQ.e)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(ow.prototype, "forceShowBoundingBoxes") || Object.defineProperty(ow.prototype, "forceShowBoundingBoxes", (0, cQ.e)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(ow.prototype, "depthPeelingRenderer") || Object.defineProperty(ow.prototype, "depthPeelingRenderer", (0, cQ.e)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(ow.prototype, "useOrderIndependentTransparency") || Object.defineProperty(ow.prototype, "useOrderIndependentTransparency", (0, cQ.e)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(ow.prototype, "fluidRenderer") || Object.defineProperty(ow.prototype, "fluidRenderer", (0, cQ.e)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(ow.prototype, "geometryBufferRenderer") || Object.defineProperty(ow.prototype, "geometryBufferRenderer", (0, cQ.e)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(ow.prototype, "iblCdfGenerator") || Object.defineProperty(ow.prototype, "iblCdfGenerator", (0, cQ.e)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(ow.prototype, "prePassRenderer") || Object.defineProperty(ow.prototype, "prePassRenderer", (0, cQ.e)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(ow.prototype, "subSurfaceConfiguration") || Object.defineProperty(ow.prototype, "subSurfaceConfiguration", (0, cQ.e)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(ow.prototype, "spriteManagers") || Object.defineProperty(ow.prototype, "spriteManagers", (0, cQ.e)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(ow.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(ow.prototype, "onBeforeSpritesRenderingObservable", (0, cQ.e)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(ow.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(ow.prototype, "onAfterSpritesRenderingObservable", (0, cQ.e)("Scene", "onAfterSpritesRenderingObservable"))
  },
  39589: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ,
      d: () => qQ
    });
    class LQ {}
    LQ.NAME_EFFECTLAYER = "EffectLayer", LQ.NAME_LAYER = "Layer", LQ.NAME_LENSFLARESYSTEM = "LensFlareSystem", LQ.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", LQ.NAME_PARTICLESYSTEM = "ParticleSystem", LQ.NAME_GAMEPAD = "Gamepad", LQ.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", LQ.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", LQ.NAME_PREPASSRENDERER = "PrePassRenderer", LQ.NAME_DEPTHRENDERER = "DepthRenderer", LQ.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", LQ.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", LQ.NAME_SPRITE = "Sprite", LQ.NAME_SUBSURFACE = "SubSurface", LQ.NAME_OUTLINERENDERER = "Outline", LQ.NAME_PROCEDURALTEXTURE = "ProceduralTexture", LQ.NAME_SHADOWGENERATOR = "ShadowGenerator", LQ.NAME_OCTREE = "lLQ", LQ.NAME_PHYSICSENGINE = "PhysicsEngine", LQ.NAME_AUDIO = "Audio", LQ.NAME_FLUIDRENDERER = "FluidRenderer", LQ.NAME_IBLCDFGENERATOR = "iblCDFGenerator", LQ.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", LQ.STEP_ISREADYFORMESH_EFFECTLAYER = 0, LQ.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, LQ.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, LQ.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, LQ.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, LQ.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, LQ.STEP_BEFORECAMERADRAW_PREPASS = 0, LQ.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, LQ.STEP_BEFORECAMERADRAW_LAYER = 2, LQ.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, LQ.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, LQ.STEP_BEFORERENDERINGMESH_PREPASS = 0, LQ.STEP_BEFORERENDERINGMESH_OUTLINE = 1, LQ.STEP_AFTERRENDERINGMESH_PREPASS = 0, LQ.STEP_AFTERRENDERINGMESH_OUTLINE = 1, LQ.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, LQ.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, LQ.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, LQ.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, LQ.STEP_BEFORECLEAR_PREPASS = 1, LQ.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, LQ.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, LQ.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, LQ.STEP_AFTERCAMERADRAW_PREPASS = 0, LQ.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, LQ.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, LQ.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, LQ.STEP_AFTERCAMERADRAW_LAYER = 4, LQ.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, LQ.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, LQ.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, LQ.STEP_AFTERRENDER_AUDIO = 0, LQ.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, LQ.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, LQ.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, LQ.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, LQ.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, LQ.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, LQ.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, LQ.STEP_POINTERMOVE_SPRITE = 0, LQ.STEP_POINTERDOWN_SPRITE = 0, LQ.STEP_POINTERUP_SPRITE = 0;
    class qQ extends Array {
      constructor(QQ) {
        super(...QQ)
      }
      static Create() {
        return Object.create(qQ.prototype)
      }
      registerStep(QQ, FQ, wQ) {
        let LQ, qQ = 0;
        for (; qQ < this.length; qQ++) {
          if (LQ = this[qQ].index, QQ < LQ) break
        }
        this.splice(qQ, 0, {
          index: QQ,
          component: FQ,
          action: wQ.bind(FQ)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39402: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => DQ,
      f: () => kQ,
      i: () => LQ,
      l: () => qQ,
      m: () => oQ
    });

    function LQ(QQ, FQ, wQ, LQ, qQ, oQ) {
      function DQ(QQ) {
        if (void 0 !== QQ && "function" !== typeof QQ) throw new TypeError("Function expected");
        return QQ
      }
      for (var kQ, vQ = LQ.kind, mQ = "getter" === vQ ? "get" : "setter" === vQ ? "set" : "value", uQ = !FQ && QQ ? LQ.static ? QQ : QQ.prototype : null, HQ = FQ || (uQ ? Object.getOwnPropertyDescriptor(uQ, LQ.name) : {}), bQ = !1, YQ = wQ.length - 1; YQ >= 0; YQ--) {
        var xQ = {};
        for (var AQ in LQ) xQ[AQ] = "access" === AQ ? {} : LQ[AQ];
        for (var AQ in LQ.access) xQ.access[AQ] = LQ.access[AQ];
        xQ.addInitializer = function(QQ) {
          if (bQ) throw new TypeError("Cannot add initializers after decoration has completed");
          oQ.push(DQ(QQ || null))
        };
        var tQ = (0, wQ[YQ])("accessor" === vQ ? {
          get: HQ.get,
          set: HQ.set
        } : HQ[mQ], xQ);
        if ("accessor" === vQ) {
          if (void 0 === tQ) continue;
          if (null === tQ || "object" !== typeof tQ) throw new TypeError("Object expected");
          (kQ = DQ(tQ.get)) && (HQ.get = kQ), (kQ = DQ(tQ.set)) && (HQ.set = kQ), (kQ = DQ(tQ.init)) && qQ.unshift(kQ)
        } else(kQ = DQ(tQ)) && ("field" === vQ ? qQ.unshift(kQ) : HQ[mQ] = kQ)
      }
      uQ && Object.defineProperty(uQ, LQ.name, HQ), bQ = !0
    }

    function qQ(QQ, FQ, wQ) {
      for (var LQ = arguments.length > 2, qQ = 0; qQ < FQ.length; qQ++) wQ = LQ ? FQ[qQ].call(QQ, wQ) : FQ[qQ].call(QQ);
      return LQ ? wQ : void 0
    }

    function oQ(QQ, FQ, wQ) {
      return "symbol" === typeof FQ && (FQ = FQ.description ? "[".concat(FQ.description, "]") : ""), Object.defineProperty(QQ, "name", {
        configurable: !0,
        value: wQ ? "".concat(wQ, " ", FQ) : FQ
      })
    }
    Object.create;
    Object.create;

    function DQ(QQ, FQ, wQ, LQ) {
      if ("a" === wQ && !LQ) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof FQ ? QQ !== FQ || !LQ : !FQ.has(QQ)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === wQ ? LQ : "a" === wQ ? LQ.call(QQ) : LQ ? LQ.value : FQ.get(QQ)
    }

    function kQ(QQ, FQ, wQ, LQ, qQ) {
      if ("m" === LQ) throw new TypeError("Private method is not writable");
      if ("a" === LQ && !qQ) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof FQ ? QQ !== FQ || !qQ : !FQ.has(QQ)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === LQ ? qQ.call(QQ, wQ) : qQ ? qQ.value = wQ : FQ.set(QQ, wQ), wQ
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);