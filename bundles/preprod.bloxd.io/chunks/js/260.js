export const id = 260;
export const ids = [260];
export const modules = {
  40404: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      e: () => BQ,
      h: () => PQ,
      l: () => FQ
    });
    var wQ = XQ(40199),
      qQ = XQ(38956),
      TQ = XQ(40331),
      zQ = XQ(40240);
    class sQ {
      get rG() {
        return this._isDisposed
      }
      constructor(QQ, WQ, XQ) {
        let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          TQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          sQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          FQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          PQ = arguments.length > 7 ? arguments[7] : void 0,
          gQ = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, zQ.b)(), QQ && QQ.sE ? this._engine = QQ.sE().Uj() : this._engine = QQ, this._updatable = XQ, this._instanced = sQ, this._divisor = PQ || 1, this._label = gQ, WQ instanceof wQ.b ? (this._data = null, this._buffer = WQ) : (this._data = WQ, this._buffer = null), this.byteStride = FQ ? qQ : qQ * Float32Array.BYTES_PER_ELEMENT, TQ || this.create()
      }
      createVertexBuffer(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          zQ = arguments.length > 6 ? arguments[6] : void 0;
        const sQ = TQ ? WQ : WQ * Float32Array.BYTES_PER_ELEMENT,
          PQ = wQ ? TQ ? wQ : wQ * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new FQ(this._engine, this, QQ, this._updatable, !0, PQ, void 0 === qQ ? this._instanced : qQ, sQ, XQ, void 0, void 0, !0, this._divisor || zQ)
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
          if (this._buffer.yJ > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.yJ, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.yJ, void 0, this._label));
          qQ.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(QQ) {
        this.create(QQ)
      }
      updateDirectly(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, QQ, wQ ? WQ : WQ * Float32Array.BYTES_PER_ELEMENT, XQ ? XQ * this.byteStride : void 0), this._data = 0 === WQ && void 0 === XQ ? QQ : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class FQ {
      get rG() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(QQ) {
        const WQ = 0 != QQ;
        this._instanceDivisor = QQ, WQ !== this._instanced && (this._instanced = WQ, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const QQ = this.getData();
        return QQ ? Array.isArray(QQ) ? QQ.length / (this.byteStride / 4) - this.byteOffset / 4 : (QQ.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(QQ, WQ, XQ, wQ, qQ, zQ, JQ, rQ, IQ, jQ) {
        let BQ, yQ = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          VQ = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          DQ = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          pQ = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = QQ, "object" === typeof wQ && null !== wQ ? (BQ = wQ.updatable ?? !1, qQ = wQ.postponeInternalCreation, zQ = wQ.stride, JQ = wQ.instanced, rQ = wQ.offset, IQ = wQ.size, jQ = wQ.type, yQ = wQ.normalized ?? !1, VQ = wQ.useBytes ?? !1, DQ = wQ.divisor ?? 1, pQ = wQ.takeBufferOwnership ?? !1, this._label = wQ.label) : BQ = !!wQ, WQ instanceof sQ ? (this._buffer = WQ, this._ownsBuffer = pQ) : (this._buffer = new sQ(QQ, WQ, BQ, zQ, qQ, JQ, VQ, DQ, this._label), this._ownsBuffer = !0), this.uniqueId = FQ._Counter++, this._kind = XQ, void 0 === jQ) {
          const QQ = this.getData();
          this.type = QQ ? gQ(QQ) : FQ.FLOAT
        } else this.type = jQ;
        const GQ = (0, TQ.t)(this.type);
        VQ ? (this._size = IQ || (zQ ? zQ / GQ : PQ(XQ)), this.byteStride = zQ || this._buffer.byteStride || this._size * GQ, this.byteOffset = rQ || 0) : (this._size = IQ || zQ || PQ(XQ), this.byteStride = zQ ? zQ * GQ : this._buffer.byteStride || this._size * GQ, this.byteOffset = (rQ || 0) * GQ), this.normalized = yQ, this._instanced = void 0 !== JQ && JQ, this._instanceDivisor = JQ ? DQ : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(QQ) {
        switch (QQ) {
          case FQ.BYTE:
            return 0;
          case FQ.UNSIGNED_BYTE:
            return 1;
          case FQ.SHORT:
            return 2;
          case FQ.UNSIGNED_SHORT:
            return 3;
          case FQ.INT:
            return 4;
          case FQ.UNSIGNED_INT:
            return 5;
          case FQ.FLOAT:
            return 6;
          case FQ.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${QQ}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (FQ._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(QQ, WQ) {
        const XQ = this.getData();
        return XQ ? (0, TQ.p)(XQ, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, QQ, WQ) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, TQ.t)(this.type)
      }
      HXQ() {
        return this.byteOffset / (0, TQ.t)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, TQ.t)(this.type) : this._size
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
      updateDirectly(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(QQ, WQ, void 0, XQ), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(QQ, WQ) {
        (0, TQ.j)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, QQ, this.normalized, ((QQ, XQ) => {
          for (let wQ = 0; wQ < this._size; wQ++) WQ(QQ[wQ], XQ + wQ)
        }))
      }
      _alignBuffer() {}
    }

    function PQ(QQ) {
      switch (QQ) {
        case FQ.UVKind:
        case FQ.UV2Kind:
        case FQ.UV3Kind:
        case FQ.UV4Kind:
        case FQ.UV5Kind:
        case FQ.UV6Kind:
          return 2;
        case FQ.NormalKind:
        case FQ.PositionKind:
          return 3;
        case FQ.ColorKind:
        case FQ.ColorInstanceKind:
        case FQ.MatricesIndicesKind:
        case FQ.MatricesIndicesExtraKind:
        case FQ.MatricesWeightsKind:
        case FQ.MatricesWeightsExtraKind:
        case FQ.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + QQ + "'")
      }
    }

    function gQ(QQ) {
      return QQ instanceof Int8Array ? FQ.BYTE : QQ instanceof Uint8Array ? FQ.UNSIGNED_BYTE : QQ instanceof Int16Array ? FQ.SHORT : QQ instanceof Uint16Array ? FQ.UNSIGNED_SHORT : QQ instanceof Int32Array ? FQ.INT : QQ instanceof Uint32Array ? FQ.UNSIGNED_INT : FQ.FLOAT
    }

    function JQ(QQ) {
      return (0, TQ.t)(QQ)
    }

    function rQ(QQ, WQ, XQ, wQ, qQ, zQ, sQ, FQ) {
      (0, TQ.j)(QQ, WQ, XQ, wQ, qQ, zQ, sQ, ((QQ, WQ) => {
        for (let XQ = 0; XQ < wQ; XQ++) FQ(QQ[XQ], WQ + XQ)
      }))
    }

    function IQ(QQ, WQ, XQ, wQ, qQ, zQ, sQ, FQ) {
      return (0, TQ.p)(QQ, WQ, XQ, wQ, qQ, zQ, sQ, FQ)
    }
    FQ._Counter = 0, FQ.BYTE = 5120, FQ.UNSIGNED_BYTE = 5121, FQ.SHORT = 5122, FQ.UNSIGNED_SHORT = 5123, FQ.INT = 5124, FQ.UNSIGNED_INT = 5125, FQ.FLOAT = 5126, FQ.HALF_FLOAT = 5131, FQ.PositionKind = "position", FQ.NormalKind = "normal", FQ.TangentKind = "tangent", FQ.UVKind = "uv", FQ.UV2Kind = "uv2", FQ.UV3Kind = "uv3", FQ.UV4Kind = "uv4", FQ.UV5Kind = "uv5", FQ.UV6Kind = "uv6", FQ.ColorKind = "color", FQ.ColorInstanceKind = "instanceColor", FQ.MatricesIndicesKind = "matricesIndices", FQ.MatricesWeightsKind = "matricesWeights", FQ.MatricesIndicesExtraKind = "matricesIndicesExtra", FQ.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let jQ = !1;

    function BQ() {
      jQ || (jQ = !0, FQ.DeduceStride = PQ, FQ.GetDataType = gQ, FQ.GetTypeByteLength = JQ, FQ.ForEach = rQ, FQ.GetFloatData = IQ)
    }
  },
  40199: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ
    });
    class wQ {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.yJ = 0, this.is32Bits = !1, this.uniqueId = wQ._Counter++
      }
    }
    wQ._Counter = 0
  },
  40402: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ
    });
    var wQ = XQ(37370),
      qQ = XQ(40404);
    class TQ {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || WQ && !this.pickedMesh.isVerticesDataPresent(qQ.l.NormalKind)) return null;
        let XQ, TQ = this.pickedMesh.lwQ();
        0 === TQ?.length && (TQ = null);
        const zQ = wQ.m.vj[0],
          sQ = wQ.m.vj[1],
          FQ = wQ.m.vj[2];
        if (WQ) {
          const QQ = this.pickedMesh.getVerticesData(qQ.l.NormalKind);
          let WQ = TQ ? wQ.s.FromArrayToRef(QQ, 3 * TQ[3 * this.faceId], zQ) : zQ.XQQ(QQ[3 * this.faceId * 3], QQ[3 * this.faceId * 3 + 1], QQ[3 * this.faceId * 3 + 2]),
            PQ = TQ ? wQ.s.FromArrayToRef(QQ, 3 * TQ[3 * this.faceId + 1], sQ) : sQ.XQQ(QQ[3 * (3 * this.faceId + 1)], QQ[3 * (3 * this.faceId + 1) + 1], QQ[3 * (3 * this.faceId + 1) + 2]),
            gQ = TQ ? wQ.s.FromArrayToRef(QQ, 3 * TQ[3 * this.faceId + 2], FQ) : FQ.XQQ(QQ[3 * (3 * this.faceId + 2)], QQ[3 * (3 * this.faceId + 2) + 1], QQ[3 * (3 * this.faceId + 2) + 2]);
          WQ = WQ.scale(this.bu), PQ = PQ.scale(this.bv), gQ = gQ.scale(1 - this.bu - this.bv), XQ = new wQ.s(WQ.x + PQ.x + gQ.x, WQ.y + PQ.y + gQ.y, WQ.z + PQ.z + gQ.z)
        } else {
          const QQ = this.pickedMesh.getVerticesData(qQ.l.PositionKind),
            WQ = TQ ? wQ.s.FromArrayToRef(QQ, 3 * TQ[3 * this.faceId], zQ) : zQ.XQQ(QQ[3 * this.faceId * 3], QQ[3 * this.faceId * 3 + 1], QQ[3 * this.faceId * 3 + 2]),
            PQ = TQ ? wQ.s.FromArrayToRef(QQ, 3 * TQ[3 * this.faceId + 1], sQ) : sQ.XQQ(QQ[3 * (3 * this.faceId + 1)], QQ[3 * (3 * this.faceId + 1) + 1], QQ[3 * (3 * this.faceId + 1) + 2]),
            gQ = TQ ? wQ.s.FromArrayToRef(QQ, 3 * TQ[3 * this.faceId + 2], FQ) : FQ.XQQ(QQ[3 * (3 * this.faceId + 2)], QQ[3 * (3 * this.faceId + 2) + 1], QQ[3 * (3 * this.faceId + 2) + 2]),
            JQ = WQ.subtract(PQ),
            rQ = gQ.subtract(PQ);
          XQ = wQ.s.Cross(JQ, rQ)
        }
        const PQ = (QQ, WQ) => {
          if (-1 !== this.thinInstanceIndex) {
            const XQ = QQ._thinInstanceDataStorage.matrixData,
              qQ = this.thinInstanceIndex << 4;
            if (XQ && XQ.length > qQ) {
              const QQ = wQ.m.Matrix[0];
              wQ.e.FromArrayToRef(XQ, qQ, QQ), wQ.s.TransformNormalToRef(WQ, QQ, WQ)
            }
          }
          let XQ = QQ.getWorldMatrix();
          QQ.nonUniformScaling && (wQ.m.Matrix[0].WH(XQ), XQ = wQ.m.Matrix[0], XQ.setTranslationFromFloats(0, 0, 0), XQ.invert(), XQ.transposeToRef(wQ.m.Matrix[1]), XQ = wQ.m.Matrix[1]), wQ.s.TransformNormalToRef(WQ, XQ, WQ)
        };
        if (QQ && PQ(this.pickedMesh, XQ), this.ray) {
          const WQ = wQ.m.vj[0].WH(XQ);
          QQ || PQ(this.pickedMesh, WQ), wQ.s.Dot(WQ, this.ray.direction) > 0 && XQ.negateInPlace()
        }
        return XQ.normalize(), XQ
      }
      getTextureCoordinates() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qQ.l.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(QQ)) return null;
        const WQ = this.pickedMesh.lwQ();
        if (!WQ) return null;
        const XQ = this.pickedMesh.getVerticesData(QQ);
        if (!XQ) return null;
        let TQ = wQ.q.FromArray(XQ, 2 * WQ[3 * this.faceId]),
          zQ = wQ.q.FromArray(XQ, 2 * WQ[3 * this.faceId + 1]),
          sQ = wQ.q.FromArray(XQ, 2 * WQ[3 * this.faceId + 2]);
        return TQ = TQ.scale(this.bu), zQ = zQ.scale(this.bv), sQ = sQ.scale(1 - this.bu - this.bv), new wQ.q(TQ.x + zQ.x + sQ.x, TQ.y + zQ.y + sQ.y)
      }
    }
  },
  40240: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ
    });
    var wQ = XQ(40117);
    let qQ = !1;

    function TQ() {
      qQ || (qQ = !0, wQ.ThinEngine.prototype.updateDynamicIndexBuffer = function(QQ, WQ) {
        let XQ;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(QQ), XQ = QQ.is32Bits ? WQ instanceof Uint32Array ? WQ : new Uint32Array(WQ) : WQ instanceof Uint16Array ? WQ : new Uint16Array(WQ), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, XQ, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, wQ.ThinEngine.prototype.updateDynamicVertexBuffer = function(QQ, WQ, XQ, wQ) {
        this.bindArrayBuffer(QQ), void 0 === XQ && (XQ = 0);
        const qQ = WQ.byteLength || WQ.length;
        void 0 === wQ || wQ >= qQ && 0 === XQ ? WQ instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, XQ, new Float32Array(WQ)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, XQ, WQ) : WQ instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, XQ, new Float32Array(WQ).subarray(0, wQ / 4)) : (WQ = ArrayBuffer.isView(WQ) ? new Uint8Array(WQ.buffer, WQ.byteOffset, wQ) : new Uint8Array(WQ, 0, wQ), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, XQ, WQ)), this._resetVertexBufferBinding()
      })
    }
  },
  40210: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ
    });
    class wQ {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WQ = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = WQ, !QQ && (QQ = WQ.createTexture(), !QQ)) throw new Error("Unable to create webGL texture");
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
  40170: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => DQ
    });
    var wQ = XQ(37399),
      qQ = XQ(40122),
      TQ = XQ(37392),
      zQ = XQ(38956),
      sQ = XQ(37387),
      FQ = XQ(40178);
    class PQ {
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
    class gQ {
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
        const WQ = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = WQ ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = WQ ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = WQ ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = WQ ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = WQ ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = WQ ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = WQ ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = WQ ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = WQ ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = WQ ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = WQ ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = WQ ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? QQ.enable(QQ.STENCIL_TEST) : QQ.disable(QQ.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (QQ.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (QQ.stencilFuncSeparate(QQ.FRONT, this.func, this.funcRef, this.funcMask), QQ.stencilFuncSeparate(QQ.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (QQ.stencilOpSeparate(QQ.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), QQ.stencilOpSeparate(QQ.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class JQ {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = JQ.ALWAYS, this.opStencilFail = JQ.KEEP, this.opDepthFail = JQ.KEEP, this.opStencilDepthPass = JQ.REPLACE, this.backFunc = JQ.ALWAYS, this.backOpStencilFail = JQ.KEEP, this.backOpDepthFail = JQ.KEEP, this.backOpStencilDepthPass = JQ.REPLACE
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
    JQ.ALWAYS = 519, JQ.KEEP = 7680, JQ.REPLACE = 7681;
    var rQ = XQ(40182),
      IQ = XQ(40153),
      jQ = XQ(40103),
      BQ = XQ(40142),
      yQ = XQ(40150);

    function VQ(QQ, WQ) {
      if (WQ) {
        const {
          requestAnimationFrame: XQ
        } = WQ;
        if ("function" === typeof XQ) return XQ(QQ)
      }
      if ((0, BQ.l)()) {
        const {
          requestAnimationFrame: XQ
        } = WQ || window;
        if ("function" === typeof XQ) return XQ(QQ)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(QQ);
      return setTimeout(QQ, 16)
    }
    class DQ {
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
      get vwQ() {
        return this._useReverseDepthBuffer
      }
      set vwQ(QQ) {
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
        if (QQ) return this.isNDCHalfZRange ? QQ.IS_NDC_HALF_ZRANGE = "" : delete QQ.IS_NDC_HALF_ZRANGE, this.vwQ ? QQ.USE_REVERSE_DEPTHBUFFER = "" : delete QQ.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? QQ.USE_EXACT_SRGB_CONVERSIONS = "" : delete QQ.USE_EXACT_SRGB_CONVERSIONS);
        {
          let QQ = "";
          return this.isNDCHalfZRange && (QQ += "#define IS_NDC_HALF_ZRANGE"), this.vwQ && (QQ && (QQ += "\n"), QQ += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (QQ && (QQ += "\n"), QQ += "#define USE_EXACT_SRGB_CONVERSIONS"), QQ
        }
      }
      _rebuildInternalTextures() {
        const QQ = this._internalTexturesCache.slice();
        for (const WQ of QQ) WQ._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const QQ = this._renderTargetWrapperCache.slice();
        for (const WQ of QQ) WQ.textures?.some((QQ => 15 === QQ.source)) || WQ._rebuild()
      }
      _rebuildEffects() {
        for (const QQ in this._compiledEffects) {
          const WQ = this._compiledEffects[QQ];
          WQ._pipelineContext = null, WQ._prepareEffect()
        }
        qQ.c.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        zQ.b.Warn(this.name + " context successfully restored."), this.Gj.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(QQ) {
        setTimeout((() => {
          this._clearEmptyResources();
          const WQ = this._depthCullingState.depthTest,
            XQ = this._depthCullingState.depthFunc,
            wQ = this._depthCullingState.depthMask,
            qQ = this._stencilState.stencilTest;
          QQ(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = WQ, this._depthCullingState.depthFunc = XQ, this._depthCullingState.depthMask = wQ, this._stencilState.stencilTest = qQ, this._flagContextRestored()
        }), 0)
      }
      get rG() {
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
            WQ = [QQ, QQ, QQ, QQ, QQ, QQ];
          this._emptyCubeTexture = this.createRawCubeTexture(WQ, 1, 5, 0, !1, !1, 1)
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
        const WQ = this._activeRenderLoops.indexOf(QQ);
        WQ >= 0 && (this._activeRenderLoops.splice(WQ, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: QQ
            } = this.customAnimationFrameRequester;
            QQ && QQ(this.customAnimationFrameRequester.Hj), delete this.customAnimationFrameRequester.Hj
          }
        } else if (0 !== this._frameHandler) {
          const QQ = this._frameHandler;
          if (this._frameHandler = 0, (0, BQ.l)()) {
            const {
              cancelAnimationFrame: WQ
            } = this.getHostWindow() || window;
            if ("function" === typeof WQ) return WQ(QQ)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(QQ);
          return clearTimeout(QQ)
        }
      }
      bD() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      dD() {
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
        const WQ = QQ - this._lastFrameTime;
        return this._lastFrameTime = QQ, this._renderAccumulator += WQ, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(QQ) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(QQ)) {
          let QQ = !0;
          (this.rG || !this.renderEvenInBackground && this._windowIsBackground) && (QQ = !1), QQ && (this.bD(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.dD())
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
      _queueNewFrame(QQ, WQ) {
        return VQ(QQ, WQ)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.Hj = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.Hj) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
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
        this._depthCullingState.zOffset = this.vwQ ? -QQ : QQ
      }
      getZOffset() {
        const QQ = this._depthCullingState.zOffset;
        return this.vwQ ? -QQ : QQ
      }
      setZOffsetUnits(QQ) {
        this._depthCullingState.zOffsetUnits = this.vwQ ? -QQ : QQ
      }
      getZOffsetUnits() {
        const QQ = this._depthCullingState.zOffsetUnits;
        return this.vwQ ? -QQ : QQ
      }
      getHostWindow() {
        return (0, BQ.l)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
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
        const WQ = this._renderTargetWrapperCache.indexOf(QQ); - 1 !== WQ && this._renderTargetWrapperCache.splice(WQ, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(QQ, WQ, XQ) {
        const wQ = WQ || this.getRenderWidth(),
          qQ = XQ || this.getRenderHeight(),
          TQ = QQ.x || 0,
          zQ = QQ.y || 0;
        this._cachedViewport = QQ, this._viewport(TQ * wQ, zQ * qQ, wQ * QQ.width, qQ * QQ.height)
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
      _createTextureBase(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          sQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          FQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          PQ = arguments.length > 7 ? arguments[7] : void 0,
          gQ = arguments.length > 8 ? arguments[8] : void 0,
          JQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          rQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          IQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          BQ = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          yQ = arguments.length > 13 ? arguments[13] : void 0,
          VQ = arguments.length > 14 ? arguments[14] : void 0,
          pQ = arguments.length > 15 ? arguments[15] : void 0;
        const GQ = "data:" === (QQ = QQ || "").substring(0, 5),
          UQ = "blob:" === QQ.substring(0, 5),
          bQ = GQ && -1 !== QQ.indexOf(";base64,"),
          vQ = rQ || new jQ.e(this, 1);
        vQ !== rQ && (vQ.label = QQ.substring(0, 60));
        const dQ = QQ;
        !this._transformTextureUrl || bQ || rQ || JQ || (QQ = this._transformTextureUrl(QQ)), dQ !== QQ && (vQ._originalUrl = dQ);
        const HQ = QQ.lastIndexOf(".");
        let aQ = BQ || (HQ > -1 ? QQ.substring(HQ).toLowerCase() : "");
        aQ.indexOf("?") > -1 && (aQ = aQ.split("?")[0]);
        const lQ = DQ.GetCompatibleTextureLoader(aQ, yQ);
        wQ && wQ.addPendingData(vQ), vQ.url = QQ, vQ.generateMipMaps = !WQ, vQ.samplingMode = qQ, vQ.invertY = XQ, vQ._useSRGBBuffer = this._getUseSRGBBuffer(!!pQ, WQ), this._doNotHandleContextLost || (vQ._buffer = JQ);
        let hQ = null;
        sQ && !rQ && (hQ = vQ.onLoadedObservable.add(sQ)), rQ || this._internalTexturesCache.push(vQ);
        const iQ = (XQ, rQ) => {
          wQ && wQ.removePendingData(vQ), QQ === dQ ? (hQ && vQ.onLoadedObservable.remove(hQ), TQ.d.UseFallbackTexture && QQ !== TQ.d.FallbackTexture && this._createTextureBase(TQ.d.FallbackTexture, WQ, vQ.invertY, wQ, qQ, null, FQ, PQ, gQ, JQ, vQ), XQ = (XQ || "Unknown error") + (TQ.d.UseFallbackTexture ? " - Fallback texture was used" : ""), vQ.onErrorObservable.notifyObservers({
            message: XQ,
            exception: rQ
          }), FQ && FQ(XQ, rQ)) : (zQ.b.Warn(`Failed to load ${QQ}, falling back to ${dQ}`), this._createTextureBase(dQ, WQ, vQ.invertY, wQ, qQ, sQ, FQ, PQ, gQ, JQ, vQ, IQ, BQ, yQ, VQ, pQ))
        };
        if (lQ) {
          const WQ = async QQ => {
            (await lQ).loadData(QQ, vQ, ((QQ, WQ, XQ, TQ, zQ, sQ) => {
              sQ ? iQ("TextureLoader failed to load data") : PQ(vQ, aQ, wQ, {
                width: QQ,
                height: WQ
              }, vQ.invertY, !XQ, TQ, (() => (zQ(), !1)), qQ)
            }), VQ)
          };
          if (JQ) {
            const QQ = async QQ => {
              try {
                await WQ(QQ)
              } catch (XQ) {
                iQ("Failed to parse texture data", XQ)
              }
            };
            JQ instanceof ArrayBuffer ? QQ(new Uint8Array(JQ)) : ArrayBuffer.isView(JQ) ? QQ(JQ) : FQ && FQ("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(QQ, (async QQ => {
            try {
              await WQ(new Uint8Array(QQ))
            } catch (XQ) {
              iQ("Failed to parse texture data", XQ)
            }
          }), void 0, wQ ? wQ.offlineProvider : void 0, !0, ((QQ, WQ) => {
            iQ("Unable to load " + (QQ && QQ.responseURL, WQ))
          }))
        } else {
          const XQ = QQ => {
            UQ && !this._doNotHandleContextLost && (vQ._buffer = QQ), PQ(vQ, aQ, wQ, QQ, vQ.invertY, WQ, !1, gQ, qQ)
          };
          !GQ || bQ ? JQ && ("string" === typeof JQ.decoding || JQ.close) ? XQ(JQ) : DQ._FileToolsLoadImage(QQ || "", XQ, iQ, wQ ? wQ.offlineProvider : null, yQ, vQ.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof JQ || JQ instanceof ArrayBuffer || ArrayBuffer.isView(JQ) || JQ instanceof Blob ? DQ._FileToolsLoadImage(JQ, XQ, iQ, wQ ? wQ.offlineProvider : null, yQ, vQ.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : JQ && XQ(JQ)
        }
        return vQ
      }
      _rebuildBuffers() {
        for (const QQ of this._uniformBuffers) QQ._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, BQ.f)() ? document : null
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
      constructor(QQ, WQ, XQ) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new PQ, this._stencilStateComposer = new gQ, this._stencilState = new JQ, this._alphaState = new rQ.d(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new wQ.b, this.onCanvasFocusObservable = new wQ.b, this.onNewSceneAddedObservable = new wQ.b, this.onResizeObservable = new wQ.b, this.onCanvasPointerOutObservable = new wQ.b, this.onEffectErrorObservable = new wQ.b, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new wQ.b, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = QQ => this._renderLoop(QQ), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new wQ.b, this.onAfterShaderCompilationObservable = new wQ.b, this.onBeginFrameObservable = new wQ.b, this.onEndFrameObservable = new wQ.b, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new wQ.b, this.Gj = new wQ.b, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.yE = new wQ.b, this.onReleaseEffectsObservable = new wQ.b, TQ.d.Instances.push(this), this.startTime = FQ.e.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, sQ.e.SetMatrixPrecision(!!WQ.useLargeWorldRendering || !!WQ.useHighPrecisionMatrix), (0, BQ.h)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), WQ.antialias = QQ ?? WQ.antialias, WQ.deterministicLockstep = WQ.deterministicLockstep ?? !1, WQ.lockstepMaxSteps = WQ.lockstepMaxSteps ?? 4, WQ.timeStep = WQ.timeStep ?? 1 / 60, WQ.stencil = WQ.stencil ?? !0, this._audioContext = WQ.audioEngineOptions?.audioContext ?? null, this._audioDestination = WQ.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = WQ.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!WQ.doNotHandleContextLost, this._isStencilEnable = !!WQ.stencil, this.useExactSrgbConversions = WQ.useExactSrgbConversions ?? !1, this.canvasTabIndex = WQ.canvasTabIndex ?? this.canvasTabIndex;
        const qQ = (0, BQ.l)() && window.devicePixelRatio || 1,
          zQ = WQ.limitDeviceRatio || qQ;
        XQ = XQ || WQ.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = XQ, this._hardwareScalingLevel = XQ ? 1 / Math.min(zQ, qQ) : 1, this._lastDevicePixelRatio = qQ, this._creationOptions = WQ
      }
      resize() {
        let QQ, WQ, XQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const QQ = (0, BQ.l)() && window.devicePixelRatio || 1,
            WQ = this._lastDevicePixelRatio / QQ;
          this._lastDevicePixelRatio = QQ, this._hardwareScalingLevel *= WQ
        }
        if ((0, BQ.l)() && (0, BQ.f)())
          if (this._renderingCanvas) {
            const XQ = this._renderingCanvas.getBoundingClientRect?.();
            QQ = this._renderingCanvas.clientWidth || XQ?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, WQ = this._renderingCanvas.clientHeight || XQ?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else QQ = window.innerWidth, WQ = window.innerHeight;
        else QQ = this._renderingCanvas ? this._renderingCanvas.width : 100, WQ = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(QQ / this._hardwareScalingLevel, WQ / this._hardwareScalingLevel, XQ)
      }
      setSize(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (QQ |= 0, WQ |= 0, !XQ && this._renderingCanvas.width === QQ && this._renderingCanvas.height === WQ) return !1;
        if (this._renderingCanvas.width = QQ, this._renderingCanvas.height = WQ, this.scenes) {
          for (let QQ = 0; QQ < this.scenes.length; QQ++) {
            const WQ = this.scenes[QQ];
            for (let QQ = 0; QQ < WQ.cameras.length; QQ++) {
              WQ.cameras[QQ]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ) {
        throw (0, IQ.i)("engine.rawTexture")
      }
      createRawCubeTexture(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
        throw (0, IQ.i)("engine.rawTexture")
      }
      createRawTexture3D(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ) {
        throw (0, IQ.i)("engine.rawTexture")
      }
      createRawTexture2DArray(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ) {
        throw (0, IQ.i)("engine.rawTexture")
      }
      _sharedInit(QQ) {
        this._renderingCanvas = QQ
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const QQ = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== QQ.indexOf("Mobile") || -1 !== QQ.indexOf("Mac") && (0, BQ.f)() && "ontouchend" in document
        }, this._checkForMobile(), (0, BQ.l)() && window.addEventListener("resize", this._checkForMobile))
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
      _createImageBitmapFromSource(QQ, WQ) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(QQ, WQ) {
        return createImageBitmap(QQ, WQ)
      }
      resizeImageBitmap(QQ, WQ, XQ) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(QQ) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(QQ, WQ) {
        if ("undefined" === typeof document) return new OffscreenCanvas(QQ, WQ);
        const XQ = document.createElement("canvas");
        return XQ.width = QQ, XQ.height = WQ, XQ
      }
      createCanvas(QQ, WQ) {
        return DQ._CreateCanvas(QQ, WQ)
      }
      static _FileToolsLoadImage(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        if (!yQ.c.loadImage) throw (0, IQ.i)("FileTools");
        return yQ.c.loadImage(QQ, WQ, XQ, wQ, qQ, TQ, zQ)
      }
      _loadFile(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = (0, yQ.l)(QQ, WQ, XQ, wQ, qQ, TQ);
        return this._activeRequests.push(zQ), zQ.onCompleteObservable.add((() => {
          const QQ = this._activeRequests.indexOf(zQ); - 1 !== QQ && this._activeRequests.splice(QQ, 1)
        })), zQ
      }
      static _FileToolsLoadFile(QQ, WQ, XQ, wQ, qQ, TQ) {
        if (yQ.c.loadFile) return yQ.c.loadFile(QQ, WQ, XQ, wQ, qQ, TQ);
        throw (0, IQ.i)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), qQ.c.ResetCache();
        for (const WQ of this._activeRequests) WQ.abort();
        this._boundRenderFunction = null, this.yE.notifyObservers(this), this.yE.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, BQ.l)() && window.removeEventListener("resize", this._checkForMobile);
        const QQ = TQ.d.Instances.indexOf(this);
        QQ >= 0 && TQ.d.Instances.splice(QQ, 1), TQ.d.Instances.length || (TQ.d.OnEnginesDisposedObservable.notifyObservers(this), TQ.d.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(QQ) {
        throw (0, IQ.i)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(QQ, WQ) {
        for (let XQ = 0; XQ < TQ.d.Instances.length; XQ++) {
          const wQ = TQ.d.Instances[XQ];
          for (let XQ = 0; XQ < wQ.scenes.length; XQ++) wQ.scenes[XQ].markAllMaterialsAsDirty(QQ, WQ)
        }
      }
      static GetCompatibleTextureLoader(QQ, WQ) {
        return null
      }
    }
    DQ._RenderPassIdCounter = 0, DQ._RescalePostProcessFactory = null, DQ.CollisionsEpsilon = .001, DQ.QueueNewFrame = VQ
  },
  40126: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ
    });
    class wQ {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.ShadersRepository : wQ.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.ShadersStore : wQ.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? wQ.IncludesShadersStore : wQ.IncludesShadersStoreWGSL
      }
    }
    wQ.ShadersRepository = "src/Shaders/", wQ.ShadersStore = {}, wQ.IncludesShadersStore = {}, wQ.ShadersRepositoryWGSL = "src/ShadersWGSL/", wQ.ShadersStoreWGSL = {}, wQ.IncludesShadersStoreWGSL = {}
  },
  40148: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => rQ,
      d: () => pQ,
      g: () => jQ,
      k: () => IQ,
      l: () => BQ,
      m: () => DQ,
      q: () => JQ,
      s: () => PQ,
      t: () => gQ,
      u: () => FQ,
      v: () => sQ
    });
    class wQ {
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
      _fillEffectInformation(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
        const FQ = this.engine;
        if (FQ.supportsUniformBuffers)
          for (const gQ in WQ) QQ.bindUniformBlock(gQ, WQ[gQ]);
        let PQ;
        for (this.engine.getUniforms(this, XQ).forEach(((QQ, WQ) => {
            wQ[XQ[WQ]] = QQ
          })), this._uniforms = wQ, PQ = 0; PQ < qQ.length; PQ++) {
          null == QQ.getUniform(qQ[PQ]) && (qQ.splice(PQ, 1), PQ--)
        }
        qQ.forEach(((QQ, WQ) => {
          TQ[QQ] = WQ
        }));
        for (const gQ of FQ.getAttributes(this, zQ)) sQ.push(gQ)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(QQ, WQ) {
        const XQ = this._valueCache[QQ],
          wQ = WQ.updateFlag;
        if (void 0 !== XQ && XQ === wQ) return !1;
        const qQ = WQ.awQ();
        let TQ = this._matrixValueCache[QQ];
        if (void 0 !== XQ && null !== XQ && void 0 !== TQ) {
          let WQ = !0;
          for (let QQ = 15; QQ >= 0; QQ--)
            if (TQ[QQ] !== qQ[QQ]) {
              WQ = !1;
              break
            } if (WQ) return this._valueCache[QQ] = wQ, !1
        }
        return void 0 === TQ && (TQ = this._matrixValueCache[QQ] = new Float32Array(16)), TQ.set(qQ), this._valueCache[QQ] = wQ, !0
      }
      _cacheFloat2(QQ, WQ, XQ) {
        let wQ = this._valueCache[QQ];
        if (!wQ || 2 !== wQ.length) return wQ = [WQ, XQ], this._valueCache[QQ] = wQ, !0;
        let qQ = !1;
        return wQ[0] !== WQ && (wQ[0] = WQ, qQ = !0), wQ[1] !== XQ && (wQ[1] = XQ, qQ = !0), qQ
      }
      _cacheFloat3(QQ, WQ, XQ, wQ) {
        let qQ = this._valueCache[QQ];
        if (!qQ || 3 !== qQ.length) return qQ = [WQ, XQ, wQ], this._valueCache[QQ] = qQ, !0;
        let TQ = !1;
        return qQ[0] !== WQ && (qQ[0] = WQ, TQ = !0), qQ[1] !== XQ && (qQ[1] = XQ, TQ = !0), qQ[2] !== wQ && (qQ[2] = wQ, TQ = !0), TQ
      }
      _cacheFloat4(QQ, WQ, XQ, wQ, qQ) {
        let TQ = this._valueCache[QQ];
        if (!TQ || 4 !== TQ.length) return TQ = [WQ, XQ, wQ, qQ], this._valueCache[QQ] = TQ, !0;
        let zQ = !1;
        return TQ[0] !== WQ && (TQ[0] = WQ, zQ = !0), TQ[1] !== XQ && (TQ[1] = XQ, zQ = !0), TQ[2] !== wQ && (TQ[2] = wQ, zQ = !0), TQ[3] !== qQ && (TQ[3] = qQ, zQ = !0), zQ
      }
      setInt(QQ, WQ) {
        const XQ = this._valueCache[QQ];
        void 0 !== XQ && XQ === WQ || this.engine.setInt(this._uniforms[QQ], WQ) && (this._valueCache[QQ] = WQ)
      }
      setInt2(QQ, WQ, XQ) {
        this._cacheFloat2(QQ, WQ, XQ) && (this.engine.setInt2(this._uniforms[QQ], WQ, XQ) || (this._valueCache[QQ] = null))
      }
      setInt3(QQ, WQ, XQ, wQ) {
        this._cacheFloat3(QQ, WQ, XQ, wQ) && (this.engine.setInt3(this._uniforms[QQ], WQ, XQ, wQ) || (this._valueCache[QQ] = null))
      }
      setInt4(QQ, WQ, XQ, wQ, qQ) {
        this._cacheFloat4(QQ, WQ, XQ, wQ, qQ) && (this.engine.setInt4(this._uniforms[QQ], WQ, XQ, wQ, qQ) || (this._valueCache[QQ] = null))
      }
      setIntArray(QQ, WQ) {
        this._valueCache[QQ] = null, this.engine.setIntArray(this._uniforms[QQ], WQ)
      }
      setIntArray2(QQ, WQ) {
        this._valueCache[QQ] = null, this.engine.setIntArray2(this._uniforms[QQ], WQ)
      }
      setIntArray3(QQ, WQ) {
        this._valueCache[QQ] = null, this.engine.setIntArray3(this._uniforms[QQ], WQ)
      }
      setIntArray4(QQ, WQ) {
        this._valueCache[QQ] = null, this.engine.setIntArray4(this._uniforms[QQ], WQ)
      }
      setUInt(QQ, WQ) {
        const XQ = this._valueCache[QQ];
        void 0 !== XQ && XQ === WQ || this.engine.setUInt(this._uniforms[QQ], WQ) && (this._valueCache[QQ] = WQ)
      }
      setUInt2(QQ, WQ, XQ) {
        this._cacheFloat2(QQ, WQ, XQ) && (this.engine.setUInt2(this._uniforms[QQ], WQ, XQ) || (this._valueCache[QQ] = null))
      }
      setUInt3(QQ, WQ, XQ, wQ) {
        this._cacheFloat3(QQ, WQ, XQ, wQ) && (this.engine.setUInt3(this._uniforms[QQ], WQ, XQ, wQ) || (this._valueCache[QQ] = null))
      }
      setUInt4(QQ, WQ, XQ, wQ, qQ) {
        this._cacheFloat4(QQ, WQ, XQ, wQ, qQ) && (this.engine.setUInt4(this._uniforms[QQ], WQ, XQ, wQ, qQ) || (this._valueCache[QQ] = null))
      }
      setUIntArray(QQ, WQ) {
        this._valueCache[QQ] = null, this.engine.setUIntArray(this._uniforms[QQ], WQ)
      }
      setUIntArray2(QQ, WQ) {
        this._valueCache[QQ] = null, this.engine.setUIntArray2(this._uniforms[QQ], WQ)
      }
      setUIntArray3(QQ, WQ) {
        this._valueCache[QQ] = null, this.engine.setUIntArray3(this._uniforms[QQ], WQ)
      }
      setUIntArray4(QQ, WQ) {
        this._valueCache[QQ] = null, this.engine.setUIntArray4(this._uniforms[QQ], WQ)
      }
      setArray(QQ, WQ) {
        this._valueCache[QQ] = null, this.engine.setArray(this._uniforms[QQ], WQ)
      }
      setArray2(QQ, WQ) {
        this._valueCache[QQ] = null, this.engine.setArray2(this._uniforms[QQ], WQ)
      }
      setArray3(QQ, WQ) {
        this._valueCache[QQ] = null, this.engine.setArray3(this._uniforms[QQ], WQ)
      }
      setArray4(QQ, WQ) {
        this._valueCache[QQ] = null, this.engine.setArray4(this._uniforms[QQ], WQ)
      }
      setMatrices(QQ, WQ) {
        WQ && (this._valueCache[QQ] = null, this.engine.setMatrices(this._uniforms[QQ], WQ))
      }
      setMatrix(QQ, WQ) {
        this._cacheMatrix(QQ, WQ) && (this.engine.setMatrices(this._uniforms[QQ], WQ.awQ()) || (this._valueCache[QQ] = null))
      }
      setMatrix3x3(QQ, WQ) {
        this._valueCache[QQ] = null, this.engine.setMatrix3x3(this._uniforms[QQ], WQ)
      }
      setMatrix2x2(QQ, WQ) {
        this._valueCache[QQ] = null, this.engine.setMatrix2x2(this._uniforms[QQ], WQ)
      }
      setFloat(QQ, WQ) {
        const XQ = this._valueCache[QQ];
        void 0 !== XQ && XQ === WQ || this.engine.setFloat(this._uniforms[QQ], WQ) && (this._valueCache[QQ] = WQ)
      }
      setVector2(QQ, WQ) {
        this._cacheFloat2(QQ, WQ.x, WQ.y) && (this.engine.setFloat2(this._uniforms[QQ], WQ.x, WQ.y) || (this._valueCache[QQ] = null))
      }
      setFloat2(QQ, WQ, XQ) {
        this._cacheFloat2(QQ, WQ, XQ) && (this.engine.setFloat2(this._uniforms[QQ], WQ, XQ) || (this._valueCache[QQ] = null))
      }
      setVector3(QQ, WQ) {
        this._cacheFloat3(QQ, WQ.x, WQ.y, WQ.z) && (this.engine.setFloat3(this._uniforms[QQ], WQ.x, WQ.y, WQ.z) || (this._valueCache[QQ] = null))
      }
      setFloat3(QQ, WQ, XQ, wQ) {
        this._cacheFloat3(QQ, WQ, XQ, wQ) && (this.engine.setFloat3(this._uniforms[QQ], WQ, XQ, wQ) || (this._valueCache[QQ] = null))
      }
      setVector4(QQ, WQ) {
        this._cacheFloat4(QQ, WQ.x, WQ.y, WQ.z, WQ.w) && (this.engine.setFloat4(this._uniforms[QQ], WQ.x, WQ.y, WQ.z, WQ.w) || (this._valueCache[QQ] = null))
      }
      setQuaternion(QQ, WQ) {
        this._cacheFloat4(QQ, WQ.x, WQ.y, WQ.z, WQ.w) && (this.engine.setFloat4(this._uniforms[QQ], WQ.x, WQ.y, WQ.z, WQ.w) || (this._valueCache[QQ] = null))
      }
      setFloat4(QQ, WQ, XQ, wQ, qQ) {
        this._cacheFloat4(QQ, WQ, XQ, wQ, qQ) && (this.engine.setFloat4(this._uniforms[QQ], WQ, XQ, wQ, qQ) || (this._valueCache[QQ] = null))
      }
      setColor3(QQ, WQ) {
        this._cacheFloat3(QQ, WQ.r, WQ.g, WQ.b) && (this.engine.setFloat3(this._uniforms[QQ], WQ.r, WQ.g, WQ.b) || (this._valueCache[QQ] = null))
      }
      setColor4(QQ, WQ, XQ) {
        this._cacheFloat4(QQ, WQ.r, WQ.g, WQ.b, XQ) && (this.engine.setFloat4(this._uniforms[QQ], WQ.r, WQ.g, WQ.b, XQ) || (this._valueCache[QQ] = null))
      }
      setDirectColor4(QQ, WQ) {
        this._cacheFloat4(QQ, WQ.r, WQ.g, WQ.b, WQ.a) && (this.engine.setFloat4(this._uniforms[QQ], WQ.r, WQ.g, WQ.b, WQ.a) || (this._valueCache[QQ] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var qQ = XQ(40150);
    const TQ = new WeakMap,
      zQ = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function sQ(QQ) {
      let WQ = TQ.get(QQ);
      if (!WQ) {
        if (!QQ) return zQ;
        WQ = {
          _webGLVersion: QQ.TEXTURE_BINDING_3D ? 2 : 1,
          _context: QQ,
          parallelShaderCompile: QQ.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, TQ.set(QQ, WQ)
      }
      return WQ
    }

    function FQ(QQ) {
      TQ.delete(QQ)
    }

    function PQ(QQ, WQ, XQ, wQ, qQ, TQ) {
      const zQ = sQ(wQ);
      TQ || (TQ = zQ._createShaderProgramInjection ?? rQ);
      return TQ(QQ, VQ(WQ, "vertex", wQ, zQ._contextWasLost), VQ(XQ, "fragment", wQ, zQ._contextWasLost), wQ, qQ, zQ.validateShaderPrograms)
    }

    function gQ(QQ, WQ, XQ, wQ, qQ) {
      let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        zQ = arguments.length > 6 ? arguments[6] : void 0;
      const FQ = sQ(qQ);
      zQ || (zQ = FQ._createShaderProgramInjection ?? rQ);
      const PQ = FQ._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return zQ(QQ, yQ(WQ, "vertex", wQ, PQ, qQ, FQ._contextWasLost), yQ(XQ, "fragment", wQ, PQ, qQ, FQ._contextWasLost), qQ, TQ, FQ.validateShaderPrograms)
    }

    function JQ(QQ, WQ) {
      const XQ = new wQ,
        qQ = sQ(QQ);
      return qQ.parallelShaderCompile && !qQ.disableParallelShaderCompile && (XQ.isParallelCompiled = !0), XQ.context = qQ._context, XQ
    }

    function rQ(QQ, WQ, XQ, wQ) {
      let qQ = arguments.length > 5 ? arguments[5] : void 0;
      const TQ = wQ.createProgram();
      if (QQ.program = TQ, !TQ) throw new Error("Unable to create program");
      return wQ.attachShader(TQ, WQ), wQ.attachShader(TQ, XQ), wQ.linkProgram(TQ), QQ.context = wQ, QQ.vertexShader = WQ, QQ.fragmentShader = XQ, QQ.isParallelCompiled || jQ(QQ, wQ, qQ), TQ
    }

    function IQ(QQ, WQ, XQ) {
      const wQ = QQ;
      if (wQ._isDisposed) return !1;
      const qQ = sQ(WQ);
      return !!(qQ && qQ.parallelShaderCompile && qQ.parallelShaderCompile.COMPLETION_STATUS_KHR && wQ.program && WQ.getProgramParameter(wQ.program, qQ.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (jQ(wQ, WQ, XQ), !0)
    }

    function jQ(QQ, WQ, XQ) {
      const wQ = QQ.context,
        qQ = QQ.vertexShader,
        TQ = QQ.fragmentShader,
        zQ = QQ.program;
      if (!wQ.getProgramParameter(zQ, wQ.LINK_STATUS)) {
        if (!WQ.getShaderParameter(qQ, WQ.COMPILE_STATUS)) {
          const XQ = WQ.getShaderInfoLog(qQ);
          if (XQ) throw QQ.vertexCompilationError = XQ, new Error("VERTEX SHADER " + XQ)
        }
        if (!WQ.getShaderParameter(TQ, WQ.COMPILE_STATUS)) {
          const XQ = WQ.getShaderInfoLog(TQ);
          if (XQ) throw QQ.fragmentCompilationError = XQ, new Error("FRAGMENT SHADER " + XQ)
        }
        const XQ = wQ.getProgramInfoLog(zQ);
        if (XQ) throw QQ.programLinkError = XQ, new Error(XQ)
      }
      if (XQ) {
        wQ.validateProgram(zQ);
        if (!wQ.getProgramParameter(zQ, wQ.VALIDATE_STATUS)) {
          const WQ = wQ.getProgramInfoLog(zQ);
          if (WQ) throw QQ.programValidationError = WQ, new Error(WQ)
        }
      }
      wQ.deleteShader(qQ), wQ.deleteShader(TQ), QQ.vertexShader = void 0, QQ.fragmentShader = void 0, QQ.onCompiled && (QQ.onCompiled(), QQ.onCompiled = void 0)
    }

    function BQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, FQ, JQ) {
      let rQ = arguments.length > 10 ? arguments[10] : void 0,
        IQ = arguments.length > 11 ? arguments[11] : void 0,
        jQ = arguments.length > 12 ? arguments[12] : void 0;
      const BQ = sQ(QQ.context);
      IQ || (IQ = BQ.createRawShaderProgramInjection ?? PQ), jQ || (jQ = BQ.createShaderProgramInjection ?? gQ);
      const yQ = QQ;
      yQ.program = wQ ? IQ(yQ, WQ, XQ, yQ.context, JQ) : jQ(yQ, WQ, XQ, FQ, yQ.context, JQ), yQ.program.__SPECTOR_rebuildProgram = zQ, rQ()
    }

    function yQ(QQ, WQ, XQ, wQ, TQ, zQ) {
      return VQ((0, qQ.e)(QQ, XQ, wQ), WQ, TQ, zQ)
    }

    function VQ(QQ, WQ, XQ, wQ) {
      const qQ = XQ.createShader("vertex" === WQ ? XQ.VERTEX_SHADER : XQ.FRAGMENT_SHADER);
      if (!qQ) {
        let QQ, qQ = XQ.NO_ERROR;
        for (;
          (QQ = XQ.getError()) !== XQ.NO_ERROR;) qQ = QQ;
        throw new Error(`Something went wrong while creating a gl ${WQ} shader object. gl error=${qQ}, gl isContextLost=${XQ.isContextLost()}, _contextWasLost=${wQ}`)
      }
      return XQ.shaderSource(qQ, QQ), XQ.compileShader(qQ), qQ
    }

    function DQ(QQ, WQ) {
      WQ.useProgram(QQ)
    }

    function pQ(QQ, WQ) {
      const XQ = QQ;
      if (!XQ.isParallelCompiled) return void WQ(QQ);
      const wQ = XQ.onCompiled;
      XQ.onCompiled = () => {
        wQ?.(), WQ(QQ)
      }
    }
  },
  40117: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      ThinEngine: () => UQ
    });
    var wQ = XQ(40122),
      qQ = XQ(40148),
      TQ = XQ(40170),
      zQ = XQ(40188),
      sQ = XQ(38956),
      FQ = XQ(40142);
    class PQ {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(QQ, WQ, XQ, wQ, qQ) {
        if (qQ.drawBuffersExtensionDisabled) {
          const WQ = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          QQ = QQ.replace(WQ, "")
        }
        return QQ
      }
    }
    const gQ = /(flat\s)?\s*varying\s*.*/;
    class JQ {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(QQ) {
        return QQ.replace("attribute", "in")
      }
      varyingCheck(QQ, WQ) {
        return gQ.test(QQ)
      }
      varyingProcessor(QQ, WQ) {
        return QQ.replace("varying", WQ ? "in" : "out")
      }
      postProcessor(QQ, WQ, XQ) {
        const wQ = -1 !== QQ.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (QQ = (QQ = QQ.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), XQ) {
          const XQ = -1 !== QQ.search(/layout *\(location *= *0\) *out/g),
            qQ = -1 !== WQ.indexOf("#define DUAL_SOURCE_BLENDING"),
            TQ = qQ ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          qQ && (QQ = "#extension GL_EXT_blend_func_extended : require\n" + QQ), QQ = (QQ = (QQ = (QQ = (QQ = (QQ = (QQ = QQ.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (wQ || XQ ? "" : TQ) + "void main(")
        } else {
          WQ.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (QQ = "invariant gl_Position;\n" + QQ);
          if (-1 !== WQ.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + QQ
        }
        return QQ
      }
    }
    var rQ = XQ(40193),
      IQ = XQ(40206),
      jQ = XQ(40210),
      BQ = XQ(40103),
      yQ = XQ(40150),
      VQ = XQ(40135),
      DQ = XQ(40212),
      pQ = XQ(40182);
    class GQ {}
    class UQ extends TQ.d {
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
        return wQ.c.ShadersRepository
      }
      static set ShadersRepository(QQ) {
        wQ.c.ShadersRepository = QQ
      }
      get supportsUniformBuffers() {
        return this.Mj > 1 && !this.disableUniformBuffers
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
      constructor(QQ, WQ, XQ, wQ) {
        if (XQ = XQ || {}, super(WQ ?? XQ.antialias, XQ, wQ), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !QQ) return;
        let TQ;
        if (QQ.getContext) {
          if (TQ = QQ, void 0 === XQ.preserveDrawingBuffer && (XQ.preserveDrawingBuffer = !1), void 0 === XQ.xrCompatible && (XQ.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const QQ = navigator.userAgent;
            for (const WQ of UQ.ExceptionList) {
              const wQ = WQ.key,
                qQ = WQ.targets;
              if (new RegExp(wQ).test(QQ)) {
                if (WQ.capture && WQ.captureConstraint) {
                  const XQ = WQ.capture,
                    wQ = WQ.captureConstraint,
                    qQ = new RegExp(XQ).exec(QQ);
                  if (qQ && qQ.length > 0) {
                    if (parseInt(qQ[qQ.length - 1]) >= wQ) continue
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
                    XQ.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, qQ.u)(this._gl)
            } : (this._onContextLost = QQ => {
              QQ.preventDefault(), this._contextWasLost = !0, (0, qQ.u)(this._gl), sQ.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, TQ.addEventListener("webglcontextrestored", this._onContextRestored, !1), XQ.powerPreference = XQ.powerPreference || "high-performance"), TQ.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (XQ.xrCompatible = !1), !XQ.disableWebGL2Support) try {
            this._gl = TQ.getContext("webgl2", XQ) || TQ.getContext("experimental-webgl2", XQ), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (gQ) {}
          if (!this._gl) {
            if (!TQ) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = TQ.getContext("webgl", XQ) || TQ.getContext("experimental-webgl", XQ)
            } catch (gQ) {
              throw new Error("WebGL not supported", {
                cause: gQ
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = QQ, TQ = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const WQ = this._gl.getContextAttributes();
          WQ && (XQ.stencil = WQ.stencil)
        }
        this._sharedInit(TQ), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== XQ.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = XQ.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let qQ = 0; qQ < this._caps.maxVertexAttribs; qQ++) this._currentBufferPointers[qQ] = new GQ;
        this._shaderProcessor = this.Mj > 1 ? new JQ : new PQ;
        const zQ = `Babylon.js v${UQ.Version}`;
        sQ.b.Log(zQ + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", zQ);
        const FQ = (0, qQ.v)(this._gl);
        FQ.validateShaderPrograms = this.validateShaderPrograms, FQ.parallelShaderCompile = this._caps.parallelShaderCompile
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
        const WQ = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!WQ, this._alphaState = new pQ.d(this._caps.blendParametersPerTarget), WQ && (this._gl.blendEquationSeparateIndexed = WQ.blendEquationSeparateiOES.bind(WQ), this._gl.blendEquationIndexed = WQ.blendEquationiOES.bind(WQ), this._gl.blendFuncSeparateIndexed = WQ.blendFuncSeparateiOES.bind(WQ), this._gl.blendFuncIndexed = WQ.blendFunciOES.bind(WQ), this._gl.colorMaskIndexed = WQ.colorMaskiOES.bind(WQ), this._gl.disableIndexed = WQ.disableiOES.bind(WQ), this._gl.enableIndexed = WQ.enableiOES.bind(WQ)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const QQ = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== QQ) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = QQ.drawBuffersWEBGL.bind(QQ), this._caps.maxDrawBuffers = this._gl.getParameter(QQ.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let WQ = 0; WQ < 16; WQ++) this._gl["COLOR_ATTACHMENT" + WQ + "_WEBGL"] = QQ["COLOR_ATTACHMENT" + WQ + "_WEBGL"]
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
            WQ = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (QQ && WQ && (this._caps.highPrecisionShaderSupported = 0 !== QQ.precision && 0 !== WQ.precision, this._caps.shaderFloatPrecision = Math.min(QQ.precision, WQ.precision)), !this._shouldUseHighPrecisionShader) {
            const QQ = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              WQ = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            QQ && WQ && (this._caps.shaderFloatPrecision = Math.min(QQ.precision, WQ.precision))
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
        for (let XQ = 0; XQ < this._maxSimultaneousTextures; XQ++) this._nextFreeTextureSlots.push(XQ);
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
      get Mj() {
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
      clear(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const TQ = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = TQ;
        let zQ = 0;
        if (WQ && QQ) {
          let WQ = !0;
          if (this._currentRenderTarget) {
            const XQ = this._currentRenderTarget.texture?.format;
            if (void 0 !== XQ && (0, DQ.k)(XQ)) {
              const XQ = this._currentRenderTarget.texture?.type;
              void 0 !== XQ && (0, DQ.o)(XQ) ? (UQ._TempClearColorUint32[0] = 255 * QQ.r, UQ._TempClearColorUint32[1] = 255 * QQ.g, UQ._TempClearColorUint32[2] = 255 * QQ.b, UQ._TempClearColorUint32[3] = 255 * QQ.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, UQ._TempClearColorUint32), WQ = !1) : (UQ._TempClearColorInt32[0] = 255 * QQ.r, UQ._TempClearColorInt32[1] = 255 * QQ.g, UQ._TempClearColorInt32[2] = 255 * QQ.b, UQ._TempClearColorInt32[3] = 255 * QQ.a, this._gl.clearBufferiv(this._gl.COLOR, 0, UQ._TempClearColorInt32), WQ = !1)
            }
          }
          WQ && (this._gl.clearColor(QQ.r, QQ.g, QQ.b, void 0 !== QQ.a ? QQ.a : 1), zQ |= this._gl.COLOR_BUFFER_BIT)
        }
        XQ && (this.vwQ ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), zQ |= this._gl.DEPTH_BUFFER_BIT), wQ && (this._gl.clearStencil(qQ), zQ |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(zQ)
      }
      _clearColorAttachment(QQ, WQ, XQ, wQ) {
        if ((0, DQ.k)(XQ)) {
          const XQ = (0, DQ.o)(wQ),
            qQ = XQ ? UQ._TempClearColorUint32 : UQ._TempClearColorInt32;
          return qQ[0] = WQ.r, qQ[1] = WQ.g, qQ[2] = WQ.b, qQ[3] = WQ.a, void(XQ ? this._gl.clearBufferuiv(this._gl.COLOR, QQ, qQ) : this._gl.clearBufferiv(this._gl.COLOR, QQ, qQ))
        }
        UQ._TempClearColorFloat32[0] = WQ.r, UQ._TempClearColorFloat32[1] = WQ.g, UQ._TempClearColorFloat32[2] = WQ.b, UQ._TempClearColorFloat32[3] = WQ.a, this._gl.clearBufferfv(this._gl.COLOR, QQ, UQ._TempClearColorFloat32)
      }
      _viewport(QQ, WQ, XQ, wQ) {
        QQ === this._viewportCached.x && WQ === this._viewportCached.y && XQ === this._viewportCached.z && wQ === this._viewportCached.w || (this._viewportCached.x = QQ, this._viewportCached.y = WQ, this._viewportCached.z = XQ, this._viewportCached.w = wQ, this._gl.viewport(QQ, WQ, XQ, wQ))
      }
      dD() {
        super.dD(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          zQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const FQ = QQ;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = QQ, this._integerMRTAttachmentsMask = !QQ.isMulti && QQ.texture && (0, DQ.k)(QQ.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(FQ._framebuffer);
        const PQ = this._gl;
        QQ.isMulti || (QQ.is2DArray || QQ.is3D ? (PQ.framebufferTextureLayer(PQ.FRAMEBUFFER, PQ.COLOR_ATTACHMENT0, QQ.texture._hardwareTexture?.underlyingResource, TQ, zQ), FQ._currentLOD = TQ) : QQ.isCube ? PQ.framebufferTexture2D(PQ.FRAMEBUFFER, PQ.COLOR_ATTACHMENT0, PQ.TEXTURE_CUBE_MAP_POSITIVE_X + WQ, QQ.texture._hardwareTexture?.underlyingResource, TQ) : FQ._currentLOD !== TQ && (PQ.framebufferTexture2D(PQ.FRAMEBUFFER, PQ.COLOR_ATTACHMENT0, PQ.TEXTURE_2D, QQ.texture._hardwareTexture?.underlyingResource, TQ), FQ._currentLOD = TQ));
        const gQ = QQ._depthStencilTexture;
        if (gQ) {
          QQ.is3D && (QQ.texture.width === gQ.width && QQ.texture.height === gQ.height && QQ.texture.depth === gQ.depth || sQ.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const XQ = QQ._depthStencilTextureWithStencil ? PQ.DEPTH_STENCIL_ATTACHMENT : PQ.DEPTH_ATTACHMENT;
          QQ.is2DArray || QQ.is3D ? PQ.framebufferTextureLayer(PQ.FRAMEBUFFER, XQ, gQ._hardwareTexture?.underlyingResource, TQ, zQ) : QQ.isCube ? PQ.framebufferTexture2D(PQ.FRAMEBUFFER, XQ, PQ.TEXTURE_CUBE_MAP_POSITIVE_X + WQ, gQ._hardwareTexture?.underlyingResource, TQ) : PQ.framebufferTexture2D(PQ.FRAMEBUFFER, XQ, PQ.TEXTURE_2D, gQ._hardwareTexture?.underlyingResource, TQ)
        }
        FQ._MSAAFramebuffer && this._bindUnboundFramebuffer(FQ._MSAAFramebuffer), this._cachedViewport && !qQ ? this.setViewport(this._cachedViewport, XQ, wQ) : (XQ || (XQ = QQ.width, TQ && (XQ /= Math.pow(2, TQ))), wQ || (wQ = QQ.height, TQ && (wQ /= Math.pow(2, TQ))), this._viewport(0, 0, XQ, wQ)), this.wipeCaches()
      }
      setStateCullFaceType(QQ, WQ) {
        const XQ = this.cullBackFaces ?? QQ ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== XQ || WQ) && (this._depthCullingState.cullFace = XQ)
      }
      setState(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          TQ = arguments.length > 5 ? arguments[5] : void 0,
          zQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== QQ || XQ) && (this._depthCullingState.cull = QQ), this.setStateCullFaceType(qQ, XQ), this.setZOffset(WQ), this.setZOffsetUnits(zQ);
        const sQ = wQ ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== sQ || XQ) && (this._depthCullingState.frontFace = sQ), this._stencilStateComposer.stencilMaterial = TQ
      }
      _resolveAndGenerateMipMapsFramebuffer(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        QQ.disableAutomaticMSAAResolve || (QQ.isMulti ? this.resolveMultiFramebuffer(QQ) : this.resolveFramebuffer(QQ)), WQ || (QQ.isMulti ? this.generateMipMapsMultiFramebuffer(QQ) : this.generateMipMapsFramebuffer(QQ))
      }
      _bindUnboundFramebuffer(QQ) {
        this._currentFramebuffer !== QQ && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, QQ), this._currentFramebuffer = QQ)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(QQ) {
        const WQ = this._getTextureTarget(QQ);
        this._bindTextureDirectly(WQ, QQ, !0), this._gl.generateMipmap(WQ), this._bindTextureDirectly(WQ, null)
      }
      unBindFramebuffer(QQ, WQ, XQ) {
        const wQ = QQ;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(QQ, WQ), XQ && (wQ._MSAAFramebuffer && this._bindUnboundFramebuffer(wQ._framebuffer), XQ()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(QQ) {
        QQ.isMulti || !QQ.texture?.generateMipMaps || QQ.isCube || this.generateMipmaps(QQ.texture)
      }
      resolveFramebuffer(QQ) {
        const WQ = QQ,
          XQ = this._gl;
        if (!WQ._MSAAFramebuffer || WQ.isMulti) return;
        let wQ = WQ.resolveMSAAColors ? XQ.COLOR_BUFFER_BIT : 0;
        wQ |= WQ._generateDepthBuffer && WQ.resolveMSAADepth ? XQ.DEPTH_BUFFER_BIT : 0, wQ |= WQ._generateStencilBuffer && WQ.resolveMSAAStencil ? XQ.STENCIL_BUFFER_BIT : 0, XQ.bindFramebuffer(XQ.READ_FRAMEBUFFER, WQ._MSAAFramebuffer), XQ.bindFramebuffer(XQ.DRAW_FRAMEBUFFER, WQ._framebuffer), XQ.blitFramebuffer(0, 0, QQ.width, QQ.height, 0, 0, QQ.width, QQ.height, wQ, XQ.NEAREST)
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
      createVertexBuffer(QQ, WQ, XQ) {
        return this._createVertexBuffer(QQ, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(QQ, WQ) {
        const XQ = this._gl.createBuffer();
        if (!XQ) throw new Error("Unable to create vertex buffer");
        const wQ = new rQ.c(XQ);
        return this.bindArrayBuffer(wQ), "number" !== typeof QQ ? QQ instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(QQ), WQ), wQ.yJ = 4 * QQ.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, QQ, WQ), wQ.yJ = QQ.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(QQ), WQ), wQ.yJ = QQ), this._resetVertexBufferBinding(), wQ.references = 1, wQ
      }
      createDynamicVertexBuffer(QQ, WQ) {
        return this._createVertexBuffer(QQ, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(QQ, WQ, XQ) {
        const wQ = this._gl.createBuffer(),
          qQ = new rQ.c(wQ);
        if (!wQ) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(qQ);
        const TQ = this._normalizeIndexData(QQ);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, TQ, WQ ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), qQ.references = 1, qQ.is32Bits = 4 === TQ.BYTES_PER_ELEMENT, qQ
      }
      _normalizeIndexData(QQ) {
        if (2 === QQ.BYTES_PER_ELEMENT) return QQ;
        if (this._caps.uintIndices) {
          if (QQ instanceof Uint32Array) return QQ;
          for (let WQ = 0; WQ < QQ.length; WQ++)
            if (QQ[WQ] >= 65535) return new Uint32Array(QQ);
          return new Uint16Array(QQ)
        }
        return new Uint16Array(QQ)
      }
      bindArrayBuffer(QQ) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(QQ, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(QQ, WQ, XQ) {
        const wQ = QQ.program,
          qQ = this._gl.getUniformBlockIndex(wQ, WQ);
        this._gl.uniformBlockBinding(wQ, qQ, XQ)
      }
      bindIndexBuffer(QQ) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(QQ, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(QQ, WQ) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[WQ] !== QQ) && (this._gl.bindBuffer(WQ, QQ ? QQ.underlyingResource : null), this._currentBoundBuffer[WQ] = QQ)
      }
      updateArrayBuffer(QQ) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, QQ)
      }
      _vertexAttribPointer(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        const sQ = this._currentBufferPointers[WQ];
        if (!sQ) return;
        let FQ = !1;
        sQ.active ? (sQ.buffer !== QQ && (sQ.buffer = QQ, FQ = !0), sQ.size !== XQ && (sQ.size = XQ, FQ = !0), sQ.type !== wQ && (sQ.type = wQ, FQ = !0), sQ.normalized !== qQ && (sQ.normalized = qQ, FQ = !0), sQ.stride !== TQ && (sQ.stride = TQ, FQ = !0), sQ.offset !== zQ && (sQ.offset = zQ, FQ = !0)) : (FQ = !0, sQ.active = !0, sQ.index = WQ, sQ.size = XQ, sQ.type = wQ, sQ.normalized = qQ, sQ.stride = TQ, sQ.offset = zQ, sQ.buffer = QQ), (FQ || this._vaoRecordInProgress) && (this.bindArrayBuffer(QQ), wQ === this._gl.UNSIGNED_INT || wQ === this._gl.INT ? this._gl.vertexAttribIPointer(WQ, XQ, wQ, TQ, zQ) : this._gl.vertexAttribPointer(WQ, XQ, wQ, qQ, TQ, zQ))
      }
      _bindIndexBufferWithCache(QQ) {
        null != QQ && this._cachedIndexBuffer !== QQ && (this._cachedIndexBuffer = QQ, this.bindIndexBuffer(QQ), this._uintIndicesCurrentlySet = QQ.is32Bits)
      }
      _bindVertexBuffersAttributes(QQ, WQ, XQ) {
        const wQ = WQ.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let qQ = 0; qQ < wQ.length; qQ++) {
          const TQ = WQ.getAttributeLocation(qQ);
          if (TQ >= 0) {
            const WQ = wQ[qQ];
            let zQ = null;
            if (XQ && (zQ = XQ[WQ]), zQ || (zQ = QQ[WQ]), !zQ) continue;
            this._gl.enableVertexAttribArray(TQ), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[TQ] = !0);
            const sQ = zQ.getBuffer();
            sQ && (this._vertexAttribPointer(sQ, TQ, zQ.getSize(), zQ.type, zQ.normalized, zQ.byteStride, zQ.byteOffset), zQ.getIsInstanced() && (this._gl.vertexAttribDivisor(TQ, zQ.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(TQ), this._currentInstanceBuffers.push(sQ))))
          }
        }
      }
      recordVertexArrayObject(QQ, WQ, XQ, wQ) {
        const qQ = this._gl.createVertexArray();
        if (!qQ) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(qQ), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(QQ, XQ, wQ), this.bindIndexBuffer(WQ), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), qQ
      }
      bindVertexArrayObject(QQ, WQ) {
        this._cachedVertexArrayObject !== QQ && (this._cachedVertexArrayObject = QQ, this._gl.bindVertexArray(QQ), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != WQ && WQ.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(QQ, WQ, XQ, wQ, qQ) {
        if (this._cachedVertexBuffers !== QQ || this._cachedEffectForVertexBuffers !== qQ) {
          this._cachedVertexBuffers = QQ, this._cachedEffectForVertexBuffers = qQ;
          const WQ = qQ.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let TQ = 0;
          for (let zQ = 0; zQ < WQ; zQ++)
            if (zQ < XQ.length) {
              const WQ = qQ.getAttributeLocation(zQ);
              WQ >= 0 && (this._gl.enableVertexAttribArray(WQ), this._vertexAttribArraysEnabled[WQ] = !0, this._vertexAttribPointer(QQ, WQ, XQ[zQ], this._gl.FLOAT, !1, wQ, TQ)), TQ += 4 * XQ[zQ]
            }
        }
        this._bindIndexBufferWithCache(WQ)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(QQ, WQ, XQ, wQ) {
        this._cachedVertexBuffers === QQ && this._cachedEffectForVertexBuffers === XQ || (this._cachedVertexBuffers = QQ, this._cachedEffectForVertexBuffers = XQ, this._bindVertexBuffersAttributes(QQ, XQ, wQ)), this._bindIndexBufferWithCache(WQ)
      }
      unbindInstanceAttributes() {
        let QQ;
        for (let WQ = 0, XQ = this._currentInstanceLocations.length; WQ < XQ; WQ++) {
          const XQ = this._currentInstanceBuffers[WQ];
          QQ != XQ && XQ.references && (QQ = XQ, this.bindArrayBuffer(XQ));
          const wQ = this._currentInstanceLocations[WQ];
          this._gl.vertexAttribDivisor(wQ, 0)
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
      updateAndBindInstancesBuffer(QQ, WQ, XQ) {
        if (this.bindArrayBuffer(QQ), WQ && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, WQ), void 0 !== XQ[0].index) this.bindInstancesBuffer(QQ, XQ, !0);
        else
          for (let wQ = 0; wQ < 4; wQ++) {
            const WQ = XQ[wQ];
            this._vertexAttribArraysEnabled[WQ] || (this._gl.enableVertexAttribArray(WQ), this._vertexAttribArraysEnabled[WQ] = !0), this._vertexAttribPointer(QQ, WQ, 4, this._gl.FLOAT, !1, 64, 16 * wQ), this._gl.vertexAttribDivisor(WQ, 1), this._currentInstanceLocations.push(WQ), this._currentInstanceBuffers.push(QQ)
          }
      }
      bindInstancesBuffer(QQ, WQ) {
        let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(QQ);
        let wQ = 0;
        if (XQ)
          for (let qQ = 0; qQ < WQ.length; qQ++) {
            wQ += 4 * WQ[qQ].attributeSize
          }
        for (let qQ = 0; qQ < WQ.length; qQ++) {
          const XQ = WQ[qQ];
          void 0 === XQ.index && (XQ.index = this._currentEffect.getAttributeLocationByName(XQ.attributeName)), XQ.index < 0 || (this._vertexAttribArraysEnabled[XQ.index] || (this._gl.enableVertexAttribArray(XQ.index), this._vertexAttribArraysEnabled[XQ.index] = !0), this._vertexAttribPointer(QQ, XQ.index, XQ.attributeSize, XQ.attributeType || this._gl.FLOAT, XQ.normalized || !1, wQ, XQ.offset), this._gl.vertexAttribDivisor(XQ.index, void 0 === XQ.divisor ? 1 : XQ.divisor), this._currentInstanceLocations.push(XQ.index), this._currentInstanceBuffers.push(QQ))
        }
      }
      disableInstanceAttributeByName(QQ) {
        if (!this._currentEffect) return;
        const WQ = this._currentEffect.getAttributeLocationByName(QQ);
        this.disableInstanceAttribute(WQ)
      }
      disableInstanceAttribute(QQ) {
        let WQ, XQ = !1;
        for (; - 1 !== (WQ = this._currentInstanceLocations.indexOf(QQ));) this._currentInstanceLocations.splice(WQ, 1), this._currentInstanceBuffers.splice(WQ, 1), XQ = !0;
        XQ && (this._gl.vertexAttribDivisor(QQ, 0), this.disableAttributeByIndex(QQ))
      }
      disableAttributeByIndex(QQ) {
        this._gl.disableVertexAttribArray(QQ), this._vertexAttribArraysEnabled[QQ] = !1, this._currentBufferPointers[QQ].active = !1
      }
      draw(QQ, WQ, XQ, wQ) {
        this.drawElementsType(QQ ? 0 : 1, WQ, XQ, wQ)
      }
      drawPointClouds(QQ, WQ, XQ) {
        this.drawArraysType(2, QQ, WQ, XQ)
      }
      drawUnIndexed(QQ, WQ, XQ, wQ) {
        this.drawArraysType(QQ ? 0 : 1, WQ, XQ, wQ)
      }
      drawElementsType(QQ, WQ, XQ, wQ) {
        this.applyStates(), this._reportDrawCall();
        const qQ = this._drawMode(QQ),
          TQ = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          zQ = this._uintIndicesCurrentlySet ? 4 : 2;
        wQ ? this._gl.drawElementsInstanced(qQ, XQ, TQ, WQ * zQ, wQ) : this._gl.drawElements(qQ, XQ, TQ, WQ * zQ)
      }
      drawArraysType(QQ, WQ, XQ, wQ) {
        this.applyStates(), this._reportDrawCall();
        const qQ = this._drawMode(QQ);
        wQ ? this._gl.drawArraysInstanced(qQ, WQ, XQ, wQ) : this._gl.drawArrays(qQ, WQ, XQ)
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
        const WQ = QQ.getPipelineContext();
        WQ && this._deletePipelineContext(WQ)
      }
      _deletePipelineContext(QQ) {
        const WQ = QQ;
        WQ && WQ.program && (WQ.program.__SPECTOR_rebuildProgram = null, (0, VQ.g)(WQ), this._gl && (this._currentProgram === WQ.program && this._setProgram(null), this._gl.deleteProgram(WQ.program)))
      }
      _getGlobalDefines(QQ) {
        return (0, yQ.h)(QQ, this.isNDCHalfZRange, this.vwQ, this.useExactSrgbConversions)
      }
      createEffect(QQ, WQ, XQ, TQ, zQ, sQ, FQ, PQ, gQ) {
        let JQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          rQ = arguments.length > 10 ? arguments[10] : void 0;
        const IQ = "string" === typeof QQ ? QQ : QQ.vertexToken || QQ.vertexSource || QQ.vertexElement || QQ.vertex,
          jQ = "string" === typeof QQ ? QQ : QQ.fragmentToken || QQ.fragmentSource || QQ.fragmentElement || QQ.fragment,
          BQ = this._getGlobalDefines(),
          yQ = void 0 !== WQ.attributes;
        let VQ = zQ ?? WQ.defines ?? "";
        BQ && (VQ += BQ);
        const DQ = IQ + "+" + jQ + "@" + VQ;
        if (this._compiledEffects[DQ]) {
          const QQ = this._compiledEffects[DQ];
          return FQ && QQ.isReady() && FQ(QQ), QQ._refCount++, QQ
        }
        this._gl && (0, qQ.v)(this._gl);
        const pQ = new wQ.c(QQ, WQ, yQ ? this : XQ, TQ, this, zQ, sQ, FQ, PQ, gQ, DQ, WQ.shaderLanguage ?? JQ, WQ.extraInitializationsAsync ?? rQ);
        return this._compiledEffects[DQ] = pQ, pQ
      }
      _getShaderSource(QQ) {
        return this._gl.getShaderSource(QQ)
      }
      createRawShaderProgram(QQ, WQ, XQ, wQ) {
        let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const zQ = (0, qQ.v)(this._gl);
        return zQ._contextWasLost = this._contextWasLost, zQ.validateShaderPrograms = this.validateShaderPrograms, (0, qQ.s)(QQ, WQ, XQ, wQ || this._gl, TQ)
      }
      createShaderProgram(QQ, WQ, XQ, wQ, TQ) {
        let zQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const sQ = (0, qQ.v)(this._gl);
        return sQ._contextWasLost = this._contextWasLost, sQ.validateShaderPrograms = this.validateShaderPrograms, (0, qQ.t)(QQ, WQ, XQ, wQ, TQ || this._gl, zQ)
      }
      inlineShaderCode(QQ) {
        return QQ
      }
      createPipelineContext(QQ) {
        if (this._gl) {
          (0, qQ.v)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const WQ = (0, qQ.q)(this._gl, QQ);
        return WQ.engine = this, WQ
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(QQ) {
        return (0, qQ.g)(QQ, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(QQ, WQ, XQ, wQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ) {
        const rQ = (0, qQ.v)(this._gl);
        return rQ._contextWasLost = this._contextWasLost, rQ.validateShaderPrograms = this.validateShaderPrograms, rQ._createShaderProgramInjection = this._createShaderProgram.bind(this), rQ.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), rQ.createShaderProgramInjection = this.createShaderProgram.bind(this), rQ.loadFileInjection = this._loadFile.bind(this), (0, qQ.l)(QQ, WQ, XQ, wQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ)
      }
      _createShaderProgram(QQ, WQ, XQ, wQ) {
        let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, qQ.c)(QQ, WQ, XQ, wQ, TQ)
      }
      _isRenderingStateCompiled(QQ) {
        return !this._isDisposed && (0, qQ.k)(QQ, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(QQ, WQ) {
        (0, qQ.d)(QQ, WQ)
      }
      getUniforms(QQ, WQ) {
        const XQ = new Array,
          wQ = QQ;
        for (let qQ = 0; qQ < WQ.length; qQ++) XQ.push(this._gl.getUniformLocation(wQ.program, WQ[qQ]));
        return XQ
      }
      getAttributes(QQ, WQ) {
        const XQ = [],
          wQ = QQ;
        for (let TQ = 0; TQ < WQ.length; TQ++) try {
          XQ.push(this._gl.getAttribLocation(wQ.program, WQ[TQ]))
        } catch (qQ) {
          XQ.push(-1)
        }
        return XQ
      }
      enableEffect(QQ) {
        (QQ = null !== QQ && (0, zQ.c)(QQ) ? QQ.effect : QQ) && QQ !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(QQ), this._currentEffect = QQ, QQ.onBind && QQ.onBind(QQ), QQ._onBindObservable && QQ._onBindObservable.notifyObservers(QQ))
      }
      setInt(QQ, WQ) {
        return !!QQ && (this._gl.uniform1i(QQ, WQ), !0)
      }
      setInt2(QQ, WQ, XQ) {
        return !!QQ && (this._gl.uniform2i(QQ, WQ, XQ), !0)
      }
      setInt3(QQ, WQ, XQ, wQ) {
        return !!QQ && (this._gl.uniform3i(QQ, WQ, XQ, wQ), !0)
      }
      setInt4(QQ, WQ, XQ, wQ, qQ) {
        return !!QQ && (this._gl.uniform4i(QQ, WQ, XQ, wQ, qQ), !0)
      }
      setIntArray(QQ, WQ) {
        return !!QQ && (this._gl.uniform1iv(QQ, WQ), !0)
      }
      setIntArray2(QQ, WQ) {
        return !(!QQ || WQ.length % 2 !== 0) && (this._gl.uniform2iv(QQ, WQ), !0)
      }
      setIntArray3(QQ, WQ) {
        return !(!QQ || WQ.length % 3 !== 0) && (this._gl.uniform3iv(QQ, WQ), !0)
      }
      setIntArray4(QQ, WQ) {
        return !(!QQ || WQ.length % 4 !== 0) && (this._gl.uniform4iv(QQ, WQ), !0)
      }
      setUInt(QQ, WQ) {
        return !!QQ && (this._gl.uniform1ui(QQ, WQ), !0)
      }
      setUInt2(QQ, WQ, XQ) {
        return !!QQ && (this._gl.uniform2ui(QQ, WQ, XQ), !0)
      }
      setUInt3(QQ, WQ, XQ, wQ) {
        return !!QQ && (this._gl.uniform3ui(QQ, WQ, XQ, wQ), !0)
      }
      setUInt4(QQ, WQ, XQ, wQ, qQ) {
        return !!QQ && (this._gl.uniform4ui(QQ, WQ, XQ, wQ, qQ), !0)
      }
      setUIntArray(QQ, WQ) {
        return !!QQ && (this._gl.uniform1uiv(QQ, WQ), !0)
      }
      setUIntArray2(QQ, WQ) {
        return !(!QQ || WQ.length % 2 !== 0) && (this._gl.uniform2uiv(QQ, WQ), !0)
      }
      setUIntArray3(QQ, WQ) {
        return !(!QQ || WQ.length % 3 !== 0) && (this._gl.uniform3uiv(QQ, WQ), !0)
      }
      setUIntArray4(QQ, WQ) {
        return !(!QQ || WQ.length % 4 !== 0) && (this._gl.uniform4uiv(QQ, WQ), !0)
      }
      setArray(QQ, WQ) {
        return !!QQ && (!(WQ.length < 1) && (this._gl.uniform1fv(QQ, WQ), !0))
      }
      setArray2(QQ, WQ) {
        return !(!QQ || WQ.length % 2 !== 0) && (this._gl.uniform2fv(QQ, WQ), !0)
      }
      setArray3(QQ, WQ) {
        return !(!QQ || WQ.length % 3 !== 0) && (this._gl.uniform3fv(QQ, WQ), !0)
      }
      setArray4(QQ, WQ) {
        return !(!QQ || WQ.length % 4 !== 0) && (this._gl.uniform4fv(QQ, WQ), !0)
      }
      setMatrices(QQ, WQ) {
        return !!QQ && (this._gl.uniformMatrix4fv(QQ, !1, WQ), !0)
      }
      setMatrix3x3(QQ, WQ) {
        return !!QQ && (this._gl.uniformMatrix3fv(QQ, !1, WQ), !0)
      }
      setMatrix2x2(QQ, WQ) {
        return !!QQ && (this._gl.uniformMatrix2fv(QQ, !1, WQ), !0)
      }
      setFloat(QQ, WQ) {
        return !!QQ && (this._gl.uniform1f(QQ, WQ), !0)
      }
      setFloat2(QQ, WQ, XQ) {
        return !!QQ && (this._gl.uniform2f(QQ, WQ, XQ), !0)
      }
      setFloat3(QQ, WQ, XQ, wQ) {
        return !!QQ && (this._gl.uniform3f(QQ, WQ, XQ, wQ), !0)
      }
      setFloat4(QQ, WQ, XQ, wQ, qQ) {
        return !!QQ && (this._gl.uniform4f(QQ, WQ, XQ, wQ, qQ), !0)
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
      _getSamplingParameters(QQ, WQ) {
        const XQ = this._gl;
        let wQ = XQ.NEAREST,
          qQ = XQ.NEAREST,
          TQ = !1;
        switch (QQ) {
          case 11:
            wQ = XQ.LINEAR, qQ = WQ ? XQ.LINEAR_MIPMAP_NEAREST : XQ.LINEAR;
            break;
          case 3:
            wQ = XQ.LINEAR, TQ = !0, qQ = WQ ? XQ.LINEAR_MIPMAP_LINEAR : XQ.LINEAR;
            break;
          case 8:
            TQ = !0, wQ = XQ.NEAREST, qQ = WQ ? XQ.NEAREST_MIPMAP_LINEAR : XQ.NEAREST;
            break;
          case 4:
            wQ = XQ.NEAREST, qQ = WQ ? XQ.NEAREST_MIPMAP_NEAREST : XQ.NEAREST;
            break;
          case 5:
            wQ = XQ.NEAREST, qQ = WQ ? XQ.LINEAR_MIPMAP_NEAREST : XQ.LINEAR;
            break;
          case 6:
            TQ = !0, wQ = XQ.NEAREST, qQ = WQ ? XQ.LINEAR_MIPMAP_LINEAR : XQ.LINEAR;
            break;
          case 7:
            wQ = XQ.NEAREST, qQ = XQ.LINEAR;
            break;
          case 1:
            wQ = XQ.NEAREST, qQ = XQ.NEAREST;
            break;
          case 9:
            wQ = XQ.LINEAR, qQ = WQ ? XQ.NEAREST_MIPMAP_NEAREST : XQ.NEAREST;
            break;
          case 10:
            TQ = !0, wQ = XQ.LINEAR, qQ = WQ ? XQ.NEAREST_MIPMAP_LINEAR : XQ.NEAREST;
            break;
          case 2:
            wQ = XQ.LINEAR, qQ = XQ.LINEAR;
            break;
          case 12:
            wQ = XQ.LINEAR, qQ = XQ.NEAREST
        }
        return {
          min: qQ,
          mag: wQ,
          hasMipMaps: TQ
        }
      }
      _createTexture() {
        const QQ = this._gl.createTexture();
        if (!QQ) throw new Error("Unable to create texture");
        return QQ
      }
      _createHardwareTexture() {
        return new jQ.d(this._createTexture(), this._gl)
      }
      _createInternalTexture(QQ, WQ) {
        let XQ, wQ, qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          TQ = !1,
          zQ = 0,
          FQ = 3,
          PQ = 5,
          gQ = !1,
          JQ = 1,
          rQ = !1,
          IQ = 0,
          jQ = !1;
        void 0 !== WQ && "object" === typeof WQ ? (XQ = !!WQ.generateMipMaps, TQ = !!WQ.createMipMaps, zQ = void 0 === WQ.type ? 0 : WQ.type, FQ = void 0 === WQ.samplingMode ? 3 : WQ.samplingMode, PQ = void 0 === WQ.format ? 5 : WQ.format, gQ = void 0 !== WQ.useSRGBBuffer && WQ.useSRGBBuffer, JQ = WQ.samples ?? 1, wQ = WQ.label, rQ = !!WQ.createMSAATexture, IQ = WQ.comparisonFunction || 0, jQ = !!WQ.isCube) : XQ = !!WQ, gQ && (gQ = this._caps.supportSRGBBuffers && (this.Mj > 1 || this.isWebGPU)), (1 !== zQ || this._caps.textureFloatLinearFiltering) && (2 !== zQ || this._caps.textureHalfFloatLinearFiltering) || (FQ = 1), 1 !== zQ || this._caps.textureFloat || (zQ = 0, sQ.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const yQ = (0, DQ.g)(PQ),
          VQ = (0, DQ.c)(PQ),
          pQ = this._gl,
          GQ = new BQ.e(this, qQ),
          UQ = QQ.width || QQ,
          bQ = QQ.height || QQ,
          vQ = QQ.depth || 0,
          dQ = QQ.layers || 0,
          HQ = this._getSamplingParameters(FQ, (XQ || TQ) && !yQ),
          aQ = 0 !== dQ ? pQ.TEXTURE_2D_ARRAY : 0 !== vQ ? pQ.TEXTURE_3D : jQ ? pQ.TEXTURE_CUBE_MAP : pQ.TEXTURE_2D,
          lQ = yQ ? this._getInternalFormatFromDepthTextureFormat(PQ, !0, VQ) : this._getRGBABufferInternalSizedFormat(zQ, PQ, gQ),
          hQ = yQ ? VQ ? pQ.DEPTH_STENCIL : pQ.DEPTH_COMPONENT : this._getInternalFormat(PQ),
          iQ = yQ ? this._getWebGLTextureTypeFromDepthTextureFormat(PQ) : this._getWebGLTextureType(zQ);
        if (this._bindTextureDirectly(aQ, GQ), 0 !== dQ) GQ.is2DArray = !0, pQ.texImage3D(aQ, 0, lQ, UQ, bQ, dQ, 0, hQ, iQ, null);
        else if (0 !== vQ) GQ.is3D = !0, pQ.texImage3D(aQ, 0, lQ, UQ, bQ, vQ, 0, hQ, iQ, null);
        else if (jQ) {
          GQ.isCube = !0;
          for (let QQ = 0; QQ < 6; QQ++) pQ.texImage2D(pQ.TEXTURE_CUBE_MAP_POSITIVE_X + QQ, 0, lQ, UQ, bQ, 0, hQ, iQ, null)
        } else pQ.texImage2D(aQ, 0, lQ, UQ, bQ, 0, hQ, iQ, null);
        if (pQ.texParameteri(aQ, pQ.TEXTURE_MAG_FILTER, HQ.mag), pQ.texParameteri(aQ, pQ.TEXTURE_MIN_FILTER, HQ.min), pQ.texParameteri(aQ, pQ.TEXTURE_WRAP_S, pQ.CLAMP_TO_EDGE), pQ.texParameteri(aQ, pQ.TEXTURE_WRAP_T, pQ.CLAMP_TO_EDGE), yQ && this.Mj > 1 && (0 === IQ ? (pQ.texParameteri(aQ, pQ.TEXTURE_COMPARE_FUNC, 515), pQ.texParameteri(aQ, pQ.TEXTURE_COMPARE_MODE, pQ.NONE)) : (pQ.texParameteri(aQ, pQ.TEXTURE_COMPARE_FUNC, IQ), pQ.texParameteri(aQ, pQ.TEXTURE_COMPARE_MODE, pQ.COMPARE_REF_TO_TEXTURE))), (XQ || TQ) && this._gl.generateMipmap(aQ), this._bindTextureDirectly(aQ, null), GQ._useSRGBBuffer = gQ, GQ.baseWidth = UQ, GQ.baseHeight = bQ, GQ.width = UQ, GQ.height = bQ, GQ.depth = dQ || vQ, GQ.isReady = !0, GQ.samples = JQ, GQ.generateMipMaps = XQ, GQ.samplingMode = FQ, GQ.type = zQ, GQ.format = PQ, GQ.label = wQ, GQ.comparisonFunction = IQ, this._internalTexturesCache.push(GQ), rQ) {
          let QQ;
          if (QQ = (0, DQ.g)(GQ.format) ? this._setupFramebufferDepthAttachments((0, DQ.c)(GQ.format), 19 !== GQ.format, GQ.width, GQ.height, JQ, GQ.format, !0) : this._createRenderBuffer(GQ.width, GQ.height, JQ, -1, this._getRGBABufferInternalSizedFormat(GQ.type, GQ.format, GQ._useSRGBBuffer), -1), !QQ) throw new Error("Unable to create render buffer");
          GQ._autoMSAAManagement = !0;
          let WQ = GQ._hardwareTexture;
          WQ || (WQ = GQ._hardwareTexture = this._createHardwareTexture()), WQ.addMSAARenderBuffer(QQ)
        }
        return GQ
      }
      _getUseSRGBBuffer(QQ, WQ) {
        return QQ && this._caps.supportSRGBBuffers && (this.Mj > 1 || WQ)
      }
      createTexture(QQ, WQ, XQ, wQ) {
        var qQ = this;
        let TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          zQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          sQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          FQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          PQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          gQ = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          JQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          rQ = arguments.length > 11 ? arguments[11] : void 0,
          IQ = arguments.length > 12 ? arguments[12] : void 0,
          jQ = arguments.length > 13 ? arguments[13] : void 0,
          yQ = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(QQ, WQ, XQ, wQ, TQ, zQ, sQ, (function() {
          for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
          return qQ._prepareWebGLTexture(...WQ, gQ)
        }), ((QQ, WQ, XQ, qQ, TQ, zQ) => {
          const sQ = this._gl,
            FQ = XQ.width === QQ && XQ.height === WQ;
          TQ._creationFlags = jQ ?? 0;
          const PQ = this._getTexImageParametersForCreateTexture(TQ.format, TQ._useSRGBBuffer);
          if (FQ) return sQ.texImage2D(sQ.TEXTURE_2D, 0, PQ.internalFormat, PQ.format, PQ.type, XQ), !1;
          const gQ = this._caps.maxTextureSize;
          if (XQ.width > gQ || XQ.height > gQ || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = QQ, this._workingCanvas.height = WQ, this._workingContext.drawImage(XQ, 0, 0, XQ.width, XQ.height, 0, 0, QQ, WQ), sQ.texImage2D(sQ.TEXTURE_2D, 0, PQ.internalFormat, PQ.format, PQ.type, this._workingCanvas), TQ.width = QQ, TQ.height = WQ, !1);
          {
            const QQ = new BQ.e(this, 2);
            this._bindTextureDirectly(sQ.TEXTURE_2D, QQ, !0), sQ.texImage2D(sQ.TEXTURE_2D, 0, PQ.internalFormat, PQ.format, PQ.type, XQ), this._rescaleTexture(QQ, TQ, wQ, PQ.format, (() => {
              this._releaseTexture(QQ), this._bindTextureDirectly(sQ.TEXTURE_2D, TQ, !0), zQ()
            }))
          }
          return !0
        }), FQ, PQ, gQ, JQ, rQ, IQ, yQ)
      }
      _getTexImageParametersForCreateTexture(QQ, WQ) {
        let XQ, wQ;
        return 1 === this.Mj ? (XQ = this._getInternalFormat(QQ, WQ), wQ = XQ) : (XQ = this._getInternalFormat(QQ, !1), wQ = this._getRGBABufferInternalSizedFormat(0, QQ, WQ)), {
          internalFormat: wQ,
          format: XQ,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(QQ, WQ, XQ, wQ, qQ) {}
      _unpackFlipY(QQ) {
        this._unpackFlipYCached !== QQ && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, QQ ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = QQ))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(QQ) {
        return QQ.isCube ? this._gl.TEXTURE_CUBE_MAP : QQ.is3D ? this._gl.TEXTURE_3D : QQ.is2DArray || QQ.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wQ = this._getTextureTarget(WQ),
          qQ = this._getSamplingParameters(QQ, WQ.useMipMaps || XQ);
        this._setTextureParameterInteger(wQ, this._gl.TEXTURE_MAG_FILTER, qQ.mag, WQ), this._setTextureParameterInteger(wQ, this._gl.TEXTURE_MIN_FILTER, qQ.min), XQ && qQ.hasMipMaps && (WQ.generateMipMaps = !0, this._gl.generateMipmap(wQ)), this._bindTextureDirectly(wQ, null), WQ.samplingMode = QQ
      }
      updateTextureDimensions(QQ, WQ, XQ) {}
      updateTextureWrappingMode(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const qQ = this._getTextureTarget(QQ);
        null !== WQ && (this._setTextureParameterInteger(qQ, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(WQ), QQ), QQ._cachedWrapU = WQ), null !== XQ && (this._setTextureParameterInteger(qQ, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(XQ), QQ), QQ._cachedWrapV = XQ), (QQ.is2DArray || QQ.is3D) && null !== wQ && (this._setTextureParameterInteger(qQ, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(wQ), QQ), QQ._cachedWrapR = wQ), this._bindTextureDirectly(qQ, null)
      }
      _uploadCompressedDataToTextureDirectly(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          zQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const sQ = this._gl;
        let FQ = sQ.TEXTURE_2D;
        if (QQ.isCube && (FQ = sQ.TEXTURE_CUBE_MAP_POSITIVE_X + TQ), QQ._useSRGBBuffer) switch (WQ) {
          case 37492:
          case 36196:
            this._caps.etc2 ? WQ = sQ.COMPRESSED_SRGB8_ETC2 : QQ._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? WQ = sQ.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : QQ._useSRGBBuffer = !1;
            break;
          case 36492:
            WQ = sQ.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            WQ = sQ.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            WQ = sQ.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            WQ = sQ.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            WQ = sQ.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            WQ = sQ.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            WQ = sQ.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            WQ = sQ.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            WQ = sQ.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            WQ = sQ.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            WQ = sQ.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            WQ = sQ.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            WQ = sQ.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            WQ = sQ.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            WQ = sQ.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? WQ = sQ.COMPRESSED_SRGB_S3TC_DXT1_EXT : QQ._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? WQ = sQ.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : QQ._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? WQ = sQ.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : QQ._useSRGBBuffer = !1;
            break;
          default:
            QQ._useSRGBBuffer = !1
        }
        if (QQ.generateMipMaps) {
          const TQ = QQ._hardwareTexture;
          TQ.memoryAllocated || (sQ.texStorage2D(QQ.isCube ? sQ.TEXTURE_CUBE_MAP : sQ.TEXTURE_2D, Math.floor(Math.log2(Math.max(XQ, wQ))) + 1, WQ, QQ.width, QQ.height), TQ.memoryAllocated = !0), this._gl.compressedTexSubImage2D(FQ, zQ, 0, 0, XQ, wQ, WQ, qQ)
        } else this._gl.compressedTexImage2D(FQ, zQ, WQ, XQ, wQ, 0, qQ)
      }
      _uploadDataToTextureDirectly(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0,
          TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const zQ = this._gl,
          sQ = this._getWebGLTextureType(QQ.type),
          FQ = this._getInternalFormat(QQ.format),
          PQ = void 0 === qQ ? this._getRGBABufferInternalSizedFormat(QQ.type, QQ.format, QQ._useSRGBBuffer) : this._getInternalFormat(qQ, QQ._useSRGBBuffer);
        this._unpackFlipY(QQ.invertY);
        let gQ = zQ.TEXTURE_2D;
        QQ.isCube && (gQ = zQ.TEXTURE_CUBE_MAP_POSITIVE_X + XQ);
        const JQ = Math.round(Math.log(QQ.width) * Math.LOG2E),
          rQ = Math.round(Math.log(QQ.height) * Math.LOG2E),
          IQ = TQ ? QQ.width : Math.pow(2, Math.max(JQ - wQ, 0)),
          jQ = TQ ? QQ.height : Math.pow(2, Math.max(rQ - wQ, 0));
        zQ.texImage2D(gQ, wQ, PQ, IQ, jQ, 0, FQ, sQ, WQ)
      }
      updateTextureData(QQ, WQ, XQ, wQ, qQ, TQ) {
        let zQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          sQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          FQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const PQ = this._gl,
          gQ = this._getWebGLTextureType(QQ.type),
          JQ = this._getInternalFormat(QQ.format);
        this._unpackFlipY(QQ.invertY);
        let rQ = PQ.TEXTURE_2D,
          IQ = PQ.TEXTURE_2D;
        QQ.isCube && (IQ = PQ.TEXTURE_CUBE_MAP_POSITIVE_X + zQ, rQ = PQ.TEXTURE_CUBE_MAP), this._bindTextureDirectly(rQ, QQ, !0), PQ.texSubImage2D(IQ, sQ, XQ, wQ, qQ, TQ, JQ, gQ, WQ), FQ && this._gl.generateMipmap(IQ), this._bindTextureDirectly(rQ, null)
      }
      _uploadArrayBufferViewToTexture(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const qQ = this._gl,
          TQ = QQ.isCube ? qQ.TEXTURE_CUBE_MAP : qQ.TEXTURE_2D;
        this._bindTextureDirectly(TQ, QQ, !0), this._uploadDataToTextureDirectly(QQ, WQ, XQ, wQ), this._bindTextureDirectly(TQ, null, !0)
      }
      _prepareWebGLTextureContinuation(QQ, WQ, XQ, wQ, qQ) {
        const TQ = this._gl;
        if (!TQ) return;
        const zQ = this._getSamplingParameters(qQ, !XQ);
        TQ.texParameteri(TQ.TEXTURE_2D, TQ.TEXTURE_MAG_FILTER, zQ.mag), TQ.texParameteri(TQ.TEXTURE_2D, TQ.TEXTURE_MIN_FILTER, zQ.min), XQ || wQ || TQ.generateMipmap(TQ.TEXTURE_2D), this._bindTextureDirectly(TQ.TEXTURE_2D, null), WQ && WQ.removePendingData(QQ), QQ.onLoadedObservable.notifyObservers(QQ), QQ.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
        const gQ = this.getCaps().maxTextureSize,
          JQ = Math.min(gQ, this.needPOTTextures ? (0, IQ.h)(wQ.width, gQ) : wQ.width),
          rQ = Math.min(gQ, this.needPOTTextures ? (0, IQ.h)(wQ.height, gQ) : wQ.height),
          jQ = this._gl;
        jQ && (QQ._hardwareTexture ? (this._bindTextureDirectly(jQ.TEXTURE_2D, QQ, !0), this._unpackFlipY(void 0 === qQ || !!qQ), QQ.baseWidth = wQ.width, QQ.baseHeight = wQ.height, QQ.width = JQ, QQ.height = rQ, QQ.isReady = !0, QQ.type = -1 !== QQ.type ? QQ.type : 0, QQ.format = -1 !== QQ.format ? QQ.format : PQ ?? (".jpg" !== WQ || QQ._useSRGBBuffer ? 5 : 4), sQ(JQ, rQ, wQ, WQ, QQ, (() => {
          this._prepareWebGLTextureContinuation(QQ, XQ, TQ, zQ, FQ)
        })) || this._prepareWebGLTextureContinuation(QQ, XQ, TQ, zQ, FQ)) : XQ && XQ.removePendingData(QQ))
      }
      _getInternalFormatFromDepthTextureFormat(QQ, WQ, XQ) {
        const wQ = this._gl;
        if (!WQ) return wQ.STENCIL_INDEX8;
        let qQ = XQ ? wQ.DEPTH_STENCIL : wQ.DEPTH_COMPONENT;
        return this.Mj > 1 ? 15 === QQ ? qQ = wQ.DEPTH_COMPONENT16 : 16 === QQ ? qQ = wQ.DEPTH_COMPONENT24 : 17 === QQ || 13 === QQ ? qQ = XQ ? wQ.DEPTH24_STENCIL8 : wQ.DEPTH_COMPONENT24 : 14 === QQ ? qQ = wQ.DEPTH_COMPONENT32F : 18 === QQ && (qQ = XQ ? wQ.DEPTH32F_STENCIL8 : wQ.DEPTH_COMPONENT32F) : qQ = wQ.DEPTH_COMPONENT16, qQ
      }
      _getWebGLTextureTypeFromDepthTextureFormat(QQ) {
        const WQ = this._gl;
        let XQ = WQ.UNSIGNED_INT;
        return 15 === QQ ? XQ = WQ.UNSIGNED_SHORT : 17 === QQ || 13 === QQ ? XQ = WQ.UNSIGNED_INT_24_8 : 14 === QQ ? XQ = WQ.FLOAT : 18 === QQ ? XQ = WQ.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === QQ && (XQ = WQ.UNSIGNED_BYTE), XQ
      }
      _setupFramebufferDepthAttachments(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          TQ = arguments.length > 5 ? arguments[5] : void 0,
          zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const sQ = this._gl;
        TQ = TQ ?? (QQ ? 13 : 14);
        const FQ = this._getInternalFormatFromDepthTextureFormat(TQ, WQ, QQ);
        return QQ && WQ ? this._createRenderBuffer(XQ, wQ, qQ, sQ.DEPTH_STENCIL, FQ, zQ ? -1 : sQ.DEPTH_STENCIL_ATTACHMENT) : WQ ? this._createRenderBuffer(XQ, wQ, qQ, FQ, FQ, zQ ? -1 : sQ.DEPTH_ATTACHMENT) : QQ ? this._createRenderBuffer(XQ, wQ, qQ, FQ, FQ, zQ ? -1 : sQ.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(QQ, WQ, XQ, wQ, qQ, TQ) {
        let zQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const sQ = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(sQ, QQ, WQ, XQ, wQ, qQ, TQ, zQ)
      }
      _updateRenderBuffer(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        let sQ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const FQ = this._gl;
        return FQ.bindRenderbuffer(FQ.RENDERBUFFER, QQ), wQ > 1 && FQ.renderbufferStorageMultisample ? FQ.renderbufferStorageMultisample(FQ.RENDERBUFFER, wQ, TQ, WQ, XQ) : FQ.renderbufferStorage(FQ.RENDERBUFFER, qQ, WQ, XQ), -1 !== zQ && FQ.framebufferRenderbuffer(FQ.FRAMEBUFFER, zQ, FQ.RENDERBUFFER, QQ), sQ && FQ.bindRenderbuffer(FQ.RENDERBUFFER, null), QQ
      }
      _releaseTexture(QQ) {
        this._deleteTexture(QQ._hardwareTexture), this.unbindAllTextures();
        const WQ = this._internalTexturesCache.indexOf(QQ); - 1 !== WQ && this._internalTexturesCache.splice(WQ, 1), QQ._lodTextureHigh && QQ._lodTextureHigh.dispose(), QQ._lodTextureMid && QQ._lodTextureMid.dispose(), QQ._lodTextureLow && QQ._lodTextureLow.dispose(), QQ._irradianceTexture && QQ._irradianceTexture.dispose()
      }
      _deleteTexture(QQ) {
        QQ?.release()
      }
      _setProgram(QQ) {
        this._currentProgram !== QQ && ((0, qQ.m)(QQ, this._gl), this._currentProgram = QQ)
      }
      bindSamplers(QQ) {
        const WQ = QQ.getPipelineContext();
        this._setProgram(WQ.program);
        const XQ = QQ.getSamplers();
        for (let wQ = 0; wQ < XQ.length; wQ++) {
          const WQ = QQ.getUniform(XQ[wQ]);
          WQ && (this._boundUniforms[wQ] = WQ)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          qQ = !1;
        const TQ = WQ && WQ._associatedChannel > -1;
        XQ && TQ && (this._activeChannel = WQ._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== WQ || wQ) {
          if (this._activateCurrentTexture(), WQ && WQ.isMultiview) throw sQ.b.Error(["_bindTextureDirectly called with a multiview texture!", QQ, WQ]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(QQ, WQ?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = WQ, WQ && (WQ._associatedChannel = this._activeChannel)
        } else XQ && (qQ = !0, this._activateCurrentTexture());
        return TQ && !XQ && this._bindSamplerUniformToChannel(WQ._associatedChannel, this._activeChannel), qQ
      }
      _bindTexture(QQ, WQ, XQ) {
        if (void 0 === QQ) return;
        WQ && (WQ._associatedChannel = QQ), this._activeChannel = QQ;
        const wQ = WQ ? this._getTextureTarget(WQ) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(wQ, WQ)
      }
      unbindAllTextures() {
        for (let QQ = 0; QQ < this._maxSimultaneousTextures; QQ++) this._activeChannel = QQ, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Mj > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(QQ, WQ, XQ, wQ) {
        void 0 !== QQ && (WQ && (this._boundUniforms[QQ] = WQ), this._setTexture(QQ, XQ))
      }
      _bindSamplerUniformToChannel(QQ, WQ) {
        const XQ = this._boundUniforms[QQ];
        XQ && XQ._currentState !== WQ && (this._gl.uniform1i(XQ, WQ), XQ._currentState = WQ)
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
      _setTexture(QQ, WQ) {
        let XQ, wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!WQ) return null != this._boundTexturesCache[QQ] && (this._activeChannel = QQ, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Mj > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (WQ.video) {
          this._activeChannel = QQ;
          const XQ = WQ.getInternalTexture();
          XQ && (XQ._associatedChannel = QQ), WQ.update()
        } else if (4 === WQ.delayLoadState) return WQ.delayLoad(), !1;
        XQ = qQ ? WQ.depthStencilTexture : WQ.isReady() ? WQ.getInternalTexture() : WQ.isCube ? this.emptyCubeTexture : WQ.is3D ? this.emptyTexture3D : WQ.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !wQ && XQ && (XQ._associatedChannel = QQ);
        let TQ = !0;
        this._boundTexturesCache[QQ] === XQ && (wQ || this._bindSamplerUniformToChannel(XQ._associatedChannel, QQ), TQ = !1), this._activeChannel = QQ;
        const zQ = this._getTextureTarget(XQ);
        if (TQ && this._bindTextureDirectly(zQ, XQ, wQ), XQ && !XQ.isMultiview) {
          if (XQ.isCube && XQ._cachedCoordinatesMode !== WQ.coordinatesMode) {
            XQ._cachedCoordinatesMode = WQ.coordinatesMode;
            const QQ = 3 !== WQ.coordinatesMode && 5 !== WQ.coordinatesMode ? 1 : 0;
            WQ.wrapU = QQ, WQ.wrapV = QQ
          }
          XQ._cachedWrapU !== WQ.wrapU && (XQ._cachedWrapU = WQ.wrapU, this._setTextureParameterInteger(zQ, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(WQ.wrapU), XQ)), XQ._cachedWrapV !== WQ.wrapV && (XQ._cachedWrapV = WQ.wrapV, this._setTextureParameterInteger(zQ, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(WQ.wrapV), XQ)), XQ.is3D && XQ._cachedWrapR !== WQ.wrapR && (XQ._cachedWrapR = WQ.wrapR, this._setTextureParameterInteger(zQ, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(WQ.wrapR), XQ)), this._setAnisotropicLevel(zQ, XQ, WQ.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(QQ, WQ, XQ, wQ) {
        if (void 0 !== QQ && WQ) {
          this._textureUnits && this._textureUnits.length === XQ.length || (this._textureUnits = new Int32Array(XQ.length));
          for (let WQ = 0; WQ < XQ.length; WQ++) {
            const wQ = XQ[WQ].getInternalTexture();
            wQ ? (this._textureUnits[WQ] = QQ + WQ, wQ._associatedChannel = QQ + WQ) : this._textureUnits[WQ] = -1
          }
          this._gl.uniform1iv(WQ, this._textureUnits);
          for (let QQ = 0; QQ < XQ.length; QQ++) this._setTexture(this._textureUnits[QQ], XQ[QQ], !0)
        }
      }
      _setAnisotropicLevel(QQ, WQ, XQ) {
        const wQ = this._caps.textureAnisotropicFilterExtension;
        11 !== WQ.samplingMode && 3 !== WQ.samplingMode && 2 !== WQ.samplingMode && (XQ = 1), wQ && WQ._cachedAnisotropicFilteringLevel !== XQ && (this._setTextureParameterFloat(QQ, wQ.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(XQ, this._caps.maxAnisotropy), WQ), WQ._cachedAnisotropicFilteringLevel = XQ)
      }
      _setTextureParameterFloat(QQ, WQ, XQ, wQ) {
        this._bindTextureDirectly(QQ, wQ, !0, !0), this._gl.texParameterf(QQ, WQ, XQ)
      }
      _setTextureParameterInteger(QQ, WQ, XQ, wQ) {
        wQ && this._bindTextureDirectly(QQ, wQ, !0, !0), this._gl.texParameteri(QQ, WQ, XQ)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let QQ = 0; QQ < this._caps.maxVertexAttribs; QQ++) this.disableAttributeByIndex(QQ)
        } else
          for (let QQ = 0, WQ = this._vertexAttribArraysEnabled.length; QQ < WQ; QQ++) QQ >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[QQ] || this.disableAttributeByIndex(QQ)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, FQ.l)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, qQ.u)(this._gl)
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
        const WQ = this._gl;
        for (; WQ.getError() !== WQ.NO_ERROR;);
        let XQ = !0;
        const wQ = WQ.createTexture();
        WQ.bindTexture(WQ.TEXTURE_2D, wQ), WQ.texImage2D(WQ.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(QQ), 1, 1, 0, WQ.RGBA, this._getWebGLTextureType(QQ), null), WQ.texParameteri(WQ.TEXTURE_2D, WQ.TEXTURE_MIN_FILTER, WQ.NEAREST), WQ.texParameteri(WQ.TEXTURE_2D, WQ.TEXTURE_MAG_FILTER, WQ.NEAREST);
        const qQ = WQ.createFramebuffer();
        WQ.bindFramebuffer(WQ.FRAMEBUFFER, qQ), WQ.framebufferTexture2D(WQ.FRAMEBUFFER, WQ.COLOR_ATTACHMENT0, WQ.TEXTURE_2D, wQ, 0);
        const TQ = WQ.checkFramebufferStatus(WQ.FRAMEBUFFER);
        if (XQ = XQ && TQ === WQ.FRAMEBUFFER_COMPLETE, XQ = XQ && WQ.getError() === WQ.NO_ERROR, XQ && (WQ.clear(WQ.COLOR_BUFFER_BIT), XQ = XQ && WQ.getError() === WQ.NO_ERROR), XQ) {
          WQ.bindFramebuffer(WQ.FRAMEBUFFER, null);
          const QQ = WQ.RGBA,
            wQ = WQ.UNSIGNED_BYTE,
            qQ = new Uint8Array(4);
          WQ.readPixels(0, 0, 1, 1, QQ, wQ, qQ), XQ = XQ && WQ.getError() === WQ.NO_ERROR
        }
        for (WQ.deleteTexture(wQ), WQ.deleteFramebuffer(qQ), WQ.bindFramebuffer(WQ.FRAMEBUFFER, null); !XQ && WQ.getError() !== WQ.NO_ERROR;);
        return XQ
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
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = WQ ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (QQ) {
          case 0:
            XQ = this._gl.ALPHA;
            break;
          case 1:
            XQ = this._gl.LUMINANCE;
            break;
          case 2:
            XQ = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            XQ = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            XQ = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            XQ = WQ ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            XQ = WQ ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (QQ) {
          case 8:
            XQ = this._gl.RED_INTEGER;
            break;
          case 9:
            XQ = this._gl.RG_INTEGER;
            break;
          case 10:
            XQ = this._gl.RGB_INTEGER;
            break;
          case 11:
            XQ = this._gl.RGBA_INTEGER
        }
        return XQ
      }
      _getRGBABufferInternalSizedFormat(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== WQ) switch (WQ) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return XQ ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (QQ) {
          case 3:
            switch (WQ) {
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
            switch (WQ) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return XQ ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return XQ ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (WQ) {
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
            switch (WQ) {
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
            switch (WQ) {
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
            switch (WQ) {
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
            switch (WQ) {
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
            switch (WQ) {
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
            switch (WQ) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return XQ ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(QQ, WQ, XQ, wQ) {
        let qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          TQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          zQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const FQ = qQ ? 4 : 3,
          PQ = qQ ? this._gl.RGBA : this._gl.RGB,
          gQ = XQ * wQ * FQ;
        if (zQ) {
          if (zQ.length < gQ) return sQ.b.Error(`Data buffer is too small to store the read pixels (${zQ.length} should be more than ${gQ})`), Promise.resolve(zQ)
        } else zQ = new Uint8Array(gQ);
        return TQ && this.flushFramebuffer(), this._gl.readPixels(QQ, WQ, XQ, wQ, PQ, this._gl.UNSIGNED_BYTE, zQ), Promise.resolve(zQ)
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
          const QQ = TQ.d._CreateCanvas(1, 1),
            WQ = QQ.getContext("webgl") || QQ.getContext("experimental-webgl");
          this._IsSupported = null != WQ && !!globalThis.WebGLRenderingContext
        } catch (QQ) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const QQ = TQ.d._CreateCanvas(1, 1),
            WQ = QQ.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || QQ.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !WQ
        } catch (QQ) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    UQ._TempClearColorUint32 = new Uint32Array(4), UQ._TempClearColorInt32 = new Int32Array(4), UQ._TempClearColorFloat32 = new Float32Array(4), UQ.ExceptionList = [{
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
    }], UQ._ConcatenateShader = yQ.e, UQ._IsSupported = null, UQ._HasMajorPerformanceCaveat = null
  },
  40453: (QQ, WQ, XQ) => {
    var wQ;
    XQ.d(WQ, {
        e: () => qQ
      }),
      function(QQ) {
        QQ[QQ.PointerMove = 0] = "PointerMove", QQ[QQ.PointerDown = 1] = "PointerDown", QQ[QQ.PointerUp = 2] = "PointerUp"
      }(wQ || (wQ = {}));
    class qQ {}
    qQ.DOM_DELTA_PIXEL = 0, qQ.DOM_DELTA_LINE = 1, qQ.DOM_DELTA_PAGE = 2
  },
  40445: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ,
      f: () => TQ,
      h: () => qQ
    });
    class wQ {}
    wQ.KEYDOWN = 1, wQ.KEYUP = 2;
    class qQ {
      constructor(QQ, WQ) {
        this.type = QQ, this.event = WQ
      }
    }
    class TQ extends qQ {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(QQ) {
        this.skipOnKeyboardObservable = QQ
      }
      constructor(QQ, WQ) {
        super(QQ, WQ), this.type = QQ, this.event = WQ, this.skipOnKeyboardObservable = !1
      }
    }
  },
  40436: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ,
      f: () => zQ,
      g: () => sQ
    });
    var wQ = XQ(37370);
    class qQ {}
    qQ.POINTERDOWN = 1, qQ.POINTERUP = 2, qQ.POINTERMOVE = 4, qQ.POINTERWHEEL = 8, qQ.POINTERPICK = 16, qQ.POINTERTAP = 32, qQ.POINTERDOUBLETAP = 64;
    class TQ {
      constructor(QQ, WQ) {
        this.type = QQ, this.event = WQ
      }
    }
    class zQ extends TQ {
      constructor(QQ, WQ, XQ, qQ) {
        super(QQ, WQ), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new wQ.q(XQ, qQ)
      }
    }
    class sQ extends TQ {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(QQ, WQ), this._pickInfo = XQ, this._inputManager = wQ
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  40470: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    class wQ {
      static CompareLightsPriority(QQ, WQ) {
        return QQ.shadowEnabled !== WQ.shadowEnabled ? (WQ.shadowEnabled ? 1 : 0) - (QQ.shadowEnabled ? 1 : 0) : WQ.renderPriority - QQ.renderPriority
      }
    }
    wQ.FALLOFF_DEFAULT = 0, wQ.FALLOFF_PHYSICAL = 1, wQ.FALLOFF_GLTF = 2, wQ.FALLOFF_STANDARD = 3, wQ.LIGHTMAP_DEFAULT = 0, wQ.LIGHTMAP_SPECULAR = 1, wQ.LIGHTMAP_SHADOWSONLY = 2, wQ.INTENSITYMODE_AUTOMATIC = 0, wQ.INTENSITYMODE_LUMINOUSPOWER = 1, wQ.INTENSITYMODE_LUMINOUSINTENSITY = 2, wQ.INTENSITYMODE_ILLUMINANCE = 3, wQ.INTENSITYMODE_LUMINANCE = 4, wQ.LIGHTTYPEID_POINTLIGHT = 0, wQ.LIGHTTYPEID_DIRECTIONALLIGHT = 1, wQ.LIGHTTYPEID_SPOTLIGHT = 2, wQ.LIGHTTYPEID_HEMISPHERICLIGHT = 3, wQ.LIGHTTYPEID_RECT_AREALIGHT = 4, wQ.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  40103: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ
    });
    var wQ, qQ = XQ(37399),
      TQ = XQ(40111);
    ! function(QQ) {
      QQ[QQ.Unknown = 0] = "Unknown", QQ[QQ.Url = 1] = "Url", QQ[QQ.Temp = 2] = "Temp", QQ[QQ.Raw = 3] = "Raw", QQ[QQ.Dynamic = 4] = "Dynamic", QQ[QQ.RenderTarget = 5] = "RenderTarget", QQ[QQ.MultiRenderTarget = 6] = "MultiRenderTarget", QQ[QQ.Cube = 7] = "Cube", QQ[QQ.CubeRaw = 8] = "CubeRaw", QQ[QQ.CubePrefiltered = 9] = "CubePrefiltered", QQ[QQ.Raw3D = 10] = "Raw3D", QQ[QQ.Raw2DArray = 11] = "Raw2DArray", QQ[QQ.DepthStencil = 12] = "DepthStencil", QQ[QQ.CubeRawRGBD = 13] = "CubeRawRGBD", QQ[QQ.Depth = 14] = "Depth", QQ[QQ.External = 15] = "External"
    }(wQ || (wQ = {}));
    class zQ extends TQ.b {
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
      Uj() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new qQ.b, this.onErrorObservable = new qQ.b, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = QQ, this._source = WQ, this._uniqueId = zQ._Counter++, XQ || (this._hardwareTexture = QQ._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, QQ, WQ, XQ), this.width = QQ, this.height = WQ, this.depth = XQ, this.baseWidth = QQ, this.baseHeight = WQ, this.baseDepth = XQ, this._size = QQ * WQ * XQ
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const QQ = this.onRebuildCallback(this),
            WQ = WQ => {
              WQ._swapAndDie(this, !1), this.isReady = QQ.isReady
            };
          return void(QQ.isAsync ? QQ.proxy.then(WQ) : WQ(QQ.proxy))
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
                const WQ = this._bufferViewArray[QQ];
                WQ && this._engine.updateRawTexture(this, WQ, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, QQ)
              }
            this.isReady = !0;
            break;
          case 10:
            QQ = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), QQ._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (QQ = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), QQ._swapAndDie(this, !1), this._bufferViewArray)
              for (let QQ = 0; QQ < this._bufferViewArray.length; QQ++) {
                const WQ = this._bufferViewArray[QQ];
                WQ && this._engine.updateRawTexture2DArray(this, WQ, this.format, this.invertY, this._compression, this.type, QQ)
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
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(QQ._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), QQ._hardwareTexture = this._hardwareTexture, QQ._setUniqueId(zQ._Counter++), WQ && (QQ._isRGBD = this._isRGBD), this._lodTextureHigh && (QQ._lodTextureHigh && QQ._lodTextureHigh.dispose(), QQ._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (QQ._lodTextureMid && QQ._lodTextureMid.dispose(), QQ._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (QQ._lodTextureLow && QQ._lodTextureLow.dispose(), QQ._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (QQ._irradianceTexture && QQ._irradianceTexture.dispose(), QQ._irradianceTexture = this._irradianceTexture);
        const XQ = this._engine.getLoadedTexturesCache();
        let wQ = XQ.indexOf(this); - 1 !== wQ && XQ.splice(wQ, 1), wQ = XQ.indexOf(QQ), -1 === wQ && XQ.push(QQ)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    zQ._Counter = 0
  },
  40212: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return 13 === QQ || 14 === QQ || 15 === QQ || 16 === QQ || 17 === QQ || 18 === QQ || 19 === QQ
    }

    function qQ(QQ) {
      return 8 === QQ || 9 === QQ || 10 === QQ || 11 === QQ
    }

    function TQ(QQ) {
      return 0 === QQ || 5 === QQ || 7 === QQ || 11 === QQ
    }

    function zQ(QQ) {
      return 13 === QQ || 17 === QQ || 18 === QQ || 19 === QQ
    }
    XQ.d(WQ, {
      c: () => zQ,
      g: () => wQ,
      k: () => qQ,
      o: () => TQ
    })
  },
  40111: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ
    });
    class wQ {
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
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = QQ, this._cachedWrapV = WQ, this._cachedWrapR = XQ, this._cachedAnisotropicFilteringLevel = wQ, this.samplingMode = qQ, this._comparisonFunction = TQ, this
      }
      compareSampler(QQ) {
        return this._cachedWrapU === QQ._cachedWrapU && this._cachedWrapV === QQ._cachedWrapV && this._cachedWrapR === QQ._cachedWrapR && this._cachedAnisotropicFilteringLevel === QQ._cachedAnisotropicFilteringLevel && this.samplingMode === QQ.samplingMode && this._comparisonFunction === QQ._comparisonFunction && this._useMipMaps === QQ._useMipMaps
      }
    }
  },
  40388: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      QQ.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    XQ.d(WQ, {
      c: () => wQ
    })
  },
  40188: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return void 0 === QQ.getPipelineContext
    }
    XQ.d(WQ, {
      c: () => wQ
    })
  },
  40578: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ
    });
    var wQ = XQ(40164);
    class qQ {
      static GetEffect(QQ) {
        return void 0 === QQ.getPipelineContext ? QQ.effect : QQ
      }
      constructor(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = QQ.createDrawContext(), WQ && (this.materialContext = QQ.createMaterialContext())
      }
      setEffect(QQ, WQ) {
        let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        XQ || this.effect === QQ || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = QQ, void 0 !== WQ && (this.defines = WQ), XQ && this.drawContext?.reset()
      }
      dispose() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const WQ = this.effect;
          QQ ? WQ.dispose() : wQ.b.SetImmediate((() => {
            WQ.Uj().onEndFrameObservable.addOnce((() => {
              WQ.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  40135: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => JQ,
      e: () => IQ,
      f: () => PQ,
      g: () => gQ
    });
    var wQ = XQ(40142),
      qQ = XQ(40148),
      TQ = XQ(40126),
      zQ = XQ(38956),
      sQ = XQ(40158),
      FQ = XQ(40150);

    function PQ(QQ, WQ) {
      return (0, qQ.v)(WQ).cachedPipelines[QQ]
    }

    function gQ(QQ) {
      const WQ = QQ._name,
        XQ = QQ.context;
      if (WQ && XQ) {
        const QQ = (0, qQ.v)(XQ),
          wQ = QQ.cachedPipelines[WQ];
        wQ?.dispose(), delete QQ.cachedPipelines[WQ]
      }
    }

    function JQ(QQ, WQ, XQ, qQ, TQ, zQ, FQ) {
      let PQ, gQ;
      const JQ = (0, wQ.l)() ? zQ?.getHostDocument() : null;
      PQ = "string" === typeof WQ ? WQ : "string" === typeof WQ.vertexSource ? "source:" + WQ.vertexSource : "string" === typeof WQ.vertexElement ? JQ?.getElementById(WQ.vertexElement) || WQ.vertexElement : WQ.vertex || WQ, gQ = "string" === typeof WQ ? WQ : "string" === typeof WQ.fragmentSource ? "source:" + WQ.fragmentSource : "string" === typeof WQ.fragmentElement ? JQ?.getElementById(WQ.fragmentElement) || WQ.fragmentElement : WQ.fragment || WQ;
      const IQ = [void 0, void 0],
        jQ = () => {
          if (IQ[0] && IQ[1]) {
            const [wQ, PQ] = IQ;
            (0, sQ.e)(QQ), (0, sQ.g)(wQ, QQ, ((wQ, gQ) => {
              FQ && (FQ._vertexSourceCodeBeforeMigration = gQ), XQ && (wQ = XQ("vertex", wQ)), QQ.isFragment = !0, (0, sQ.g)(PQ, QQ, ((zQ, PQ) => {
                FQ && (FQ._fragmentSourceCodeBeforeMigration = PQ), XQ && (zQ = XQ("fragment", zQ));
                const gQ = (0, sQ.c)(wQ, zQ, QQ);
                QQ = null;
                const JQ = function(QQ, WQ, XQ, wQ) {
                  if (XQ) {
                    return {
                      vertexSourceCode: (1 === wQ ? "//" : "") + "#define SHADER_NAME vertex:" + (XQ.vertexElement || XQ.vertex || XQ.spectorName || XQ) + "\n" + QQ,
                      fragmentSourceCode: (1 === wQ ? "//" : "") + "#define SHADER_NAME fragment:" + (XQ.fragmentElement || XQ.fragment || XQ.spectorName || XQ) + "\n" + WQ
                    }
                  }
                  return {
                    vertexSourceCode: QQ,
                    fragmentSourceCode: WQ
                  }
                }(gQ.vertexCode, gQ.fragmentCode, WQ, TQ);
                qQ?.(JQ.vertexSourceCode, JQ.fragmentSourceCode)
              }), zQ)
            }), zQ)
          }
        };
      rQ(PQ, "Vertex", "", (QQ => {
        FQ && (FQ._rawVertexSourceCode = QQ), IQ[0] = QQ, jQ()
      }), TQ), rQ(gQ, "Fragment", "Pixel", (QQ => {
        FQ && (FQ._rawFragmentSourceCode = QQ), IQ[1] = QQ, jQ()
      }), TQ)
    }

    function rQ(QQ, WQ, XQ, qQ, zQ, sQ) {
      if ("undefined" !== typeof HTMLElement && QQ instanceof HTMLElement) {
        return void qQ((0, wQ.e)(QQ))
      }
      if ("source:" === QQ.substring(0, 7)) return void qQ(QQ.substring(7));
      if ("base64:" === QQ.substring(0, 7)) {
        return void qQ(window.atob(QQ.substring(7)))
      }
      const PQ = TQ.b.GetShadersStore(zQ);
      if (PQ[QQ + WQ + "Shader"]) return void qQ(PQ[QQ + WQ + "Shader"]);
      if (XQ && PQ[QQ + XQ + "Shader"]) return void qQ(PQ[QQ + XQ + "Shader"]);
      let gQ;
      if (gQ = "." === QQ[0] || "/" === QQ[0] || QQ.indexOf("http") > -1 ? QQ : TQ.b.GetShadersRepository(zQ) + QQ, !(sQ = sQ || FQ.l)) throw new Error("loadFileInjection is not defined");
      sQ(gQ + "." + WQ.toLowerCase() + ".fx", qQ)
    }
    const IQ = (QQ, WQ, XQ, wQ) => {
      try {
        const TQ = QQ.context ? (0, qQ.v)(QQ.context) : null;
        TQ && (TQ.disableParallelShaderCompile = QQ.disableParallelCompilation);
        const zQ = QQ.existingPipelineContext || WQ(QQ.shaderProcessingContext);
        return zQ._name = QQ.name, QQ.name && TQ && (TQ.cachedPipelines[QQ.name] = zQ), XQ(zQ, QQ.vertex, QQ.fragment, !!QQ.createAsRaw, "", "", QQ.rebuildRebind, QQ.defines, QQ.transformFeedbackVaryings, "", (() => {
          wQ(zQ, (() => {
            QQ.onRenderingStateCompiled?.(zQ)
          }))
        })), zQ
      } catch (TQ) {
        throw zQ.b.Error("Error compiling effect"), TQ
      }
    }
  },
  40122: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => FQ
    });
    var wQ = XQ(37399),
      qQ = XQ(38956),
      TQ = XQ(40126),
      zQ = XQ(40135),
      sQ = XQ(40164);
    class FQ {
      static get ShadersRepository() {
        return TQ.b.ShadersRepository
      }
      static set ShadersRepository(QQ) {
        TQ.b.ShadersRepository = QQ
      }
      get rG() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new wQ.b), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(QQ, WQ, XQ) {
        let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          TQ = arguments.length > 4 ? arguments[4] : void 0,
          sQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          PQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          gQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          JQ = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          rQ = arguments.length > 9 ? arguments[9] : void 0,
          IQ = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          jQ = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          BQ = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new wQ.b, this.onErrorObservable = new wQ.b, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = QQ, this._key = IQ;
        const yQ = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let VQ;
        if (WQ.attributes) {
          const QQ = WQ;
          if (this._engine = XQ, this._attributesNames = QQ.attributes, this._uniformsNames = QQ.uniformsNames.concat(QQ.samplers), this._samplerList = QQ.samplers.slice(), this.defines = QQ.defines, this.onError = QQ.onError, this.onCompiled = QQ.onCompiled, this._fallbacks = QQ.fallbacks, this._indexParameters = QQ.indexParameters, this._transformFeedbackVaryings = QQ.transformFeedbackVaryings || null, this._multiTarget = !!QQ.multiTarget, this._shaderLanguage = QQ.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!QQ.disableParallelShaderCompilation, QQ.uniformBuffersNames) {
            this._uniformBuffersNamesList = QQ.uniformBuffersNames.slice();
            for (let WQ = 0; WQ < QQ.uniformBuffersNames.length; WQ++) this._uniformBuffersNames[QQ.uniformBuffersNames[WQ]] = WQ
          }
          this._processFinalCode = QQ.processFinalCode ?? null, this._processCodeAfterIncludes = QQ.processCodeAfterIncludes ?? void 0, BQ = QQ.extraInitializationsAsync, VQ = QQ.existingPipelineContext
        } else this._engine = TQ, this.defines = null == sQ ? "" : sQ, this._uniformsNames = XQ.concat(qQ), this._samplerList = qQ ? qQ.slice() : [], this._attributesNames = WQ, this._uniformBuffersNamesList = [], this._shaderLanguage = jQ, this.onError = JQ, this.onCompiled = gQ, this._indexParameters = rQ, this._fallbacks = PQ;
        "WEBGL2" === this._engine.shaderPlatformName && (VQ = (0, zQ.f)(yQ, this._engine._gl) ?? VQ), this._attributeLocationByName = {}, this.uniqueId = FQ._UniqueIdSeed++, VQ ? (this._pipelineContext = VQ, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, BQ).catch((QQ => {
          const WQ = QQ?.message ?? String(QQ),
            XQ = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${WQ}`);
          QQ && "string" === typeof QQ.stack && (XQ.stack = `${XQ.message}\nCaused by: ${QQ.stack}`), this._processCompilationErrors(XQ)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.rG || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wQ = arguments.length > 3 ? arguments[3] : void 0;
        wQ && await wQ(), this._processingContext = XQ || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const qQ = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: QQ ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: TQ.b.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: TQ.b.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          vwQ: this._engine.vwQ,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, zQ.c)(qQ, this.name, this._processFinalCode, ((QQ, XQ) => {
          this._vertexSourceCode = QQ, this._fragmentSourceCode = XQ, this._prepareEffect(WQ)
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
        return !!this._engine.rG || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      Uj() {
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
        this.isReady() ? QQ(this) : (this.onCompileObservable.add((WQ => {
          QQ(WQ)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(QQ) {
        (0, sQ.e)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (WQ => {
          this._processCompilationErrors(WQ, QQ)
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
            vwQ: this._engine.vwQ,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(QQ, WQ, XQ, wQ) {
        this._isReady = !1, this._vertexSourceCodeOverride = QQ, this._fragmentSourceCodeOverride = WQ, this.onError = (QQ, WQ) => {
          wQ && wQ(WQ)
        }, this.onCompiled = () => {
          const QQ = this.Uj().scenes;
          if (QQ)
            for (let WQ = 0; WQ < QQ.length; WQ++) QQ[WQ].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(XQ)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(QQ) {
        if (this._pipelineContext = QQ, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let WQ = 0; WQ < this._attributesNames.length; WQ++) {
            const QQ = this._attributesNames[WQ];
            this._attributeLocationByName[QQ] = this._attributes[WQ]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), FQ.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WQ = this._pipelineContext;
        this._isReady = !1;
        try {
          const XQ = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            wQ = XQ ? null : this.defines,
            qQ = XQ ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            TQ = XQ ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            sQ = this._engine;
          this._pipelineContext = (0, zQ.e)({
            existingPipelineContext: QQ ? WQ : null,
            vertex: qQ,
            fragment: TQ,
            context: "WEBGL2" === sQ.shaderPlatformName || "WEBGL1" === sQ.shaderPlatformName ? sQ._gl : void 0,
            rebuildRebind: (QQ, WQ, XQ, wQ) => this._rebuildProgram(QQ, WQ, XQ, wQ),
            defines: wQ,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: XQ,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: XQ => {
              WQ && !QQ && this._engine._deletePipelineContext(WQ), XQ && this._onRenderingStateCompiled(XQ)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(WQ)
        } catch (XQ) {
          this._processCompilationErrors(XQ, WQ)
        }
      }
      _getShaderCodeAndErrorLine(QQ, WQ, XQ) {
        const wQ = XQ ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let qQ = null;
        if (WQ && QQ) {
          const TQ = WQ.match(wQ);
          if (TQ && 2 === TQ.length) {
            const WQ = parseInt(TQ[1]),
              wQ = QQ.split("\n", -1);
            wQ.length >= WQ && (qQ = `Offending line [${WQ}] in ${XQ?"fragment":"vertex"} code: ${wQ[WQ-1]}`)
          }
        }
        return [QQ, qQ]
      }
      _processCompilationErrors(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof QQ?.stack ? QQ.stack : QQ?.message ?? String(QQ);
        const XQ = this._attributesNames,
          wQ = this._fallbacks;
        if (qQ.b.Error("Unable to compile effect:"), qQ.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), qQ.b.Error(`Attributes: ${XQ.join(" ")}`), qQ.b.Error("Defines:\n" + this.defines), FQ.LogShaderCodeOnCompilationError) {
          let QQ, WQ = null,
            XQ = null;
          this._pipelineContext?._getVertexShaderCode() && ([QQ, WQ] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), QQ && (qQ.b.Error("Vertex code:"), qQ.b.Error(QQ))), this._pipelineContext?._getFragmentShaderCode() && ([QQ, XQ] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), QQ && (qQ.b.Error("Fragment code:"), qQ.b.Error(QQ))), WQ && qQ.b.Error(WQ), XQ && qQ.b.Error(XQ)
        }
        qQ.b.Error("Error: " + this._compilationError);
        const TQ = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        WQ && (this._pipelineContext = WQ, this._isReady = !0, TQ()), wQ ? (this._pipelineContext = null, wQ.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, qQ.b.Error("Trying next fallback."), this.defines = wQ.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, TQ(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, WQ || TQ())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(QQ, WQ) {
        this._engine._bindTexture(this._samplers[QQ], WQ, QQ)
      }
      setTexture(QQ, WQ) {
        this._engine.setTexture(this._samplers[QQ], this._uniforms[QQ], WQ, QQ)
      }
      setTextureArray(QQ, WQ) {
        const XQ = QQ + "Ex";
        if (-1 === this._samplerList.indexOf(XQ + "0")) {
          const wQ = this._samplerList.indexOf(QQ);
          for (let QQ = 1; QQ < WQ.length; QQ++) {
            const WQ = XQ + (QQ - 1).toString();
            this._samplerList.splice(wQ + QQ, 0, WQ)
          }
          let qQ = 0;
          for (const QQ of this._samplerList) this._samplers[QQ] = qQ, qQ += 1
        }
        this._engine.setTextureArray(this._samplers[QQ], this._uniforms[QQ], WQ, QQ)
      }
      bindUniformBuffer(QQ, WQ) {
        const XQ = this._uniformBuffersNames[WQ];
        void 0 === XQ || FQ._BaseCache[XQ] === QQ && this._engine._features.useUBOBindingCache || (FQ._BaseCache[XQ] = QQ, this._engine.bindUniformBufferBase(QQ, XQ, WQ))
      }
      bindUniformBlock(QQ, WQ) {
        this._engine.bindUniformBlock(this._pipelineContext, QQ, WQ)
      }
      setInt(QQ, WQ) {
        return this._pipelineContext.setInt(QQ, WQ), this
      }
      setInt2(QQ, WQ, XQ) {
        return this._pipelineContext.setInt2(QQ, WQ, XQ), this
      }
      setInt3(QQ, WQ, XQ, wQ) {
        return this._pipelineContext.setInt3(QQ, WQ, XQ, wQ), this
      }
      setInt4(QQ, WQ, XQ, wQ, qQ) {
        return this._pipelineContext.setInt4(QQ, WQ, XQ, wQ, qQ), this
      }
      setIntArray(QQ, WQ) {
        return this._pipelineContext.setIntArray(QQ, WQ), this
      }
      setIntArray2(QQ, WQ) {
        return this._pipelineContext.setIntArray2(QQ, WQ), this
      }
      setIntArray3(QQ, WQ) {
        return this._pipelineContext.setIntArray3(QQ, WQ), this
      }
      setIntArray4(QQ, WQ) {
        return this._pipelineContext.setIntArray4(QQ, WQ), this
      }
      setUInt(QQ, WQ) {
        return this._pipelineContext.setUInt(QQ, WQ), this
      }
      setUInt2(QQ, WQ, XQ) {
        return this._pipelineContext.setUInt2(QQ, WQ, XQ), this
      }
      setUInt3(QQ, WQ, XQ, wQ) {
        return this._pipelineContext.setUInt3(QQ, WQ, XQ, wQ), this
      }
      setUInt4(QQ, WQ, XQ, wQ, qQ) {
        return this._pipelineContext.setUInt4(QQ, WQ, XQ, wQ, qQ), this
      }
      setUIntArray(QQ, WQ) {
        return this._pipelineContext.setUIntArray(QQ, WQ), this
      }
      setUIntArray2(QQ, WQ) {
        return this._pipelineContext.setUIntArray2(QQ, WQ), this
      }
      setUIntArray3(QQ, WQ) {
        return this._pipelineContext.setUIntArray3(QQ, WQ), this
      }
      setUIntArray4(QQ, WQ) {
        return this._pipelineContext.setUIntArray4(QQ, WQ), this
      }
      setFloatArray(QQ, WQ) {
        return this._pipelineContext.setArray(QQ, WQ), this
      }
      setFloatArray2(QQ, WQ) {
        return this._pipelineContext.setArray2(QQ, WQ), this
      }
      setFloatArray3(QQ, WQ) {
        return this._pipelineContext.setArray3(QQ, WQ), this
      }
      setFloatArray4(QQ, WQ) {
        return this._pipelineContext.setArray4(QQ, WQ), this
      }
      setArray(QQ, WQ) {
        return this._pipelineContext.setArray(QQ, WQ), this
      }
      setArray2(QQ, WQ) {
        return this._pipelineContext.setArray2(QQ, WQ), this
      }
      setArray3(QQ, WQ) {
        return this._pipelineContext.setArray3(QQ, WQ), this
      }
      setArray4(QQ, WQ) {
        return this._pipelineContext.setArray4(QQ, WQ), this
      }
      setMatrices(QQ, WQ) {
        return this._pipelineContext.setMatrices(QQ, WQ), this
      }
      setMatrix(QQ, WQ) {
        return this._pipelineContext.setMatrix(QQ, WQ), this
      }
      setMatrix3x3(QQ, WQ) {
        return this._pipelineContext.setMatrix3x3(QQ, WQ), this
      }
      setMatrix2x2(QQ, WQ) {
        return this._pipelineContext.setMatrix2x2(QQ, WQ), this
      }
      setFloat(QQ, WQ) {
        return this._pipelineContext.setFloat(QQ, WQ), this
      }
      setBool(QQ, WQ) {
        return this._pipelineContext.setInt(QQ, WQ ? 1 : 0), this
      }
      setVector2(QQ, WQ) {
        return this._pipelineContext.setVector2(QQ, WQ), this
      }
      setFloat2(QQ, WQ, XQ) {
        return this._pipelineContext.setFloat2(QQ, WQ, XQ), this
      }
      setVector3(QQ, WQ) {
        return this._pipelineContext.setVector3(QQ, WQ), this
      }
      setFloat3(QQ, WQ, XQ, wQ) {
        return this._pipelineContext.setFloat3(QQ, WQ, XQ, wQ), this
      }
      setVector4(QQ, WQ) {
        return this._pipelineContext.setVector4(QQ, WQ), this
      }
      setQuaternion(QQ, WQ) {
        return this._pipelineContext.setQuaternion(QQ, WQ), this
      }
      setFloat4(QQ, WQ, XQ, wQ, qQ) {
        return this._pipelineContext.setFloat4(QQ, WQ, XQ, wQ, qQ), this
      }
      setColor3(QQ, WQ) {
        return this._pipelineContext.setColor3(QQ, WQ), this
      }
      setColor4(QQ, WQ, XQ) {
        return this._pipelineContext.setColor4(QQ, WQ, XQ), this
      }
      setDirectColor4(QQ, WQ) {
        return this._pipelineContext.setDirectColor4(QQ, WQ), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (FQ.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, zQ.g)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        WQ && (TQ.b.GetShadersStore(wQ)[`${QQ}PixelShader`] = WQ), XQ && (TQ.b.GetShadersStore(wQ)[`${QQ}VertexShader`] = XQ)
      }
      static ResetCache() {
        FQ._BaseCache = {}
      }
    }
    FQ.LogShaderCodeOnCompilationError = !0, FQ.PersistentMode = !1, FQ.AutomaticallyClearCodeCache = !1, FQ._UniqueIdSeed = 0, FQ._BaseCache = {}, FQ.ShadersStore = TQ.b.ShadersStore, FQ.IncludesShadersStore = TQ.b.IncludesShadersStore
  },
  40414: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => gQ,
      h: () => vQ,
      l: () => bQ
    });
    var wQ = XQ(40122),
      qQ = XQ(37370),
      TQ = XQ(37412),
      zQ = XQ(40400);
    const sQ = new qQ.e,
      FQ = new qQ.e,
      PQ = new qQ.e,
      gQ = {
        sE: () => {},
        eyeAtCamera: !0
      };

    function JQ(QQ, WQ, XQ) {
      const wQ = XQ.awQ(),
        qQ = WQ.awQ();
      for (let TQ = 0; TQ < 16; TQ++) wQ[TQ] = qQ[TQ];
      return wQ[12] -= QQ.x, wQ[13] -= QQ.y, wQ[14] -= QQ.z, XQ.markAsUpdated(), XQ
    }

    function rQ(QQ, WQ, XQ) {
      return (0, TQ.f)(WQ, FQ), JQ(QQ, FQ, PQ), (0, TQ.f)(PQ, XQ), XQ
    }

    function IQ(QQ, WQ, XQ) {
      if (!gQ.eyeAtCamera) return rQ(QQ, WQ, XQ);
      const wQ = XQ.awQ(),
        qQ = WQ.awQ();
      for (let TQ = 0; TQ < 16; TQ++) wQ[TQ] = qQ[TQ];
      return wQ[12] = 0, wQ[13] = 0, wQ[14] = 0, XQ.markAsUpdated(), XQ
    }

    function jQ(QQ, WQ, XQ, wQ) {
      return (0, TQ.l)(IQ(QQ, WQ, wQ), XQ, wQ), wQ
    }

    function BQ(QQ, WQ, XQ, wQ) {
      return (0, TQ.f)(XQ, FQ), (0, TQ.l)(WQ, FQ, PQ), JQ(QQ, PQ, FQ), IQ(QQ, XQ, PQ), (0, TQ.l)(FQ, PQ, wQ), wQ
    }

    function yQ(QQ, WQ, XQ, wQ, qQ, zQ) {
      return (0, TQ.f)(XQ, FQ), (0, TQ.l)(WQ, FQ, PQ), JQ(QQ, PQ, FQ), jQ(QQ, wQ, qQ, PQ), (0, TQ.l)(FQ, PQ, zQ), zQ
    }

    function VQ(QQ, WQ) {
      const XQ = gQ.sE();
      if (!XQ || sQ === WQ) return WQ;
      sQ.updateFlag = WQ.updateFlag;
      const wQ = XQ.floatingOriginOffset;
      switch (QQ) {
        case "world":
          return JQ(wQ, WQ, sQ);
        case "view":
          return IQ(wQ, WQ, sQ);
        case "worldView":
          return BQ(wQ, WQ, XQ.getViewMatrix(), sQ);
        case "viewProjection":
          return jQ(wQ, XQ.getViewMatrix(), XQ.getProjectionMatrix(), sQ);
        case "worldViewProjection":
          return yQ(wQ, WQ, XQ.getTransformMatrix(), XQ.getViewMatrix(), XQ.getProjectionMatrix(), sQ);
        default:
          if (QQ.startsWith("u_")) {
            const qQ = QQ.toLowerCase();
            if (qQ.startsWith("u_worldviewprojection")) return yQ(wQ, WQ, XQ.getTransformMatrix(), XQ.getViewMatrix(), XQ.getProjectionMatrix(), sQ);
            if (qQ.startsWith("u_viewprojection")) return jQ(wQ, XQ.getViewMatrix(), XQ.getProjectionMatrix(), sQ);
            if (qQ.startsWith("u_worldview")) return BQ(wQ, WQ, XQ.getViewMatrix(), sQ);
            if (qQ.startsWith("u_world")) return JQ(wQ, WQ, sQ);
            if (qQ.startsWith("u_view")) return IQ(wQ, WQ, sQ)
          }
          return WQ
      }
    }
    const DQ = zQ.c,
      pQ = wQ.c,
      GQ = DQ.prototype._updateMatrixForUniform,
      UQ = wQ.c.prototype.setMatrix;

    function bQ() {
      wQ.c.prototype.setMatrix = UQ, pQ._setMatrixOverride = void 0, DQ.prototype._updateMatrixForUniform = GQ, DQ.prototype._updateMatrixForUniformOverride = void 0
    }

    function vQ() {
      pQ.prototype._setMatrixOverride = UQ, pQ.prototype.setMatrix = function(QQ, WQ) {
        return this._setMatrixOverride(QQ, VQ(QQ, WQ)), this
      }, DQ.prototype._updateMatrixForUniformOverride = GQ, DQ.prototype._updateMatrixForUniform = function(QQ, WQ) {
        this._updateMatrixForUniformOverride(QQ, VQ(QQ, WQ))
      }
    }
  },
  40391: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ,
      i: () => qQ
    });
    var wQ = XQ(40388);

    function qQ(QQ, WQ) {
      WQ.WHITEBALANCE && QQ.push("whiteBalanceMatrix"), WQ.EXPOSURE && QQ.push("exposureLinear"), WQ.CONTRAST && QQ.push("contrast"), WQ.COLORGRADING && QQ.push("colorTransformSettings"), (WQ.VIGNETTE || WQ.DITHER) && QQ.push("vInverseScreenSize"), WQ.VIGNETTE && (QQ.push("vignetteSettings1"), QQ.push("vignetteSettings2")), WQ.COLORCURVES && (0, wQ.c)(QQ), WQ.DITHER && QQ.push("ditherIntensity")
    }

    function TQ(QQ, WQ) {
      WQ.COLORGRADING && QQ.push("txColorTransform")
    }
  },
  40379: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => hQ,
      g: () => AQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40268),
      TQ = XQ(37399),
      zQ = XQ(37546),
      sQ = XQ(37404),
      FQ = XQ(37370);
    const PQ = [
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
      gQ = 1e6 / PQ[PQ.length - 1][0],
      JQ = 150;

    function rQ(QQ, WQ) {
      const XQ = Number.isNaN(QQ) ? gQ : Math.max(QQ, gQ),
        wQ = (0, sQ.Clamp)(1e6 / XQ, PQ[0][0], PQ[PQ.length - 1][0]);
      let qQ = 0,
        TQ = PQ.length - 1;
      for (; TQ - qQ > 1;) {
        const QQ = qQ + TQ >> 1;
        PQ[QQ][0] <= wQ ? qQ = QQ : TQ = QQ
      }
      const zQ = qQ,
        [rQ, IQ, jQ, BQ] = PQ[zQ],
        [yQ, VQ, DQ, pQ] = PQ[zQ + 1],
        GQ = (wQ - rQ) / (yQ - rQ),
        UQ = FQ.q.Lerp(new FQ.q(IQ, jQ), new FQ.q(VQ, DQ), GQ),
        bQ = FQ.q.Normalize(new FQ.q(1, BQ)),
        vQ = FQ.q.Normalize(new FQ.q(1, pQ)),
        dQ = FQ.q.Normalize(FQ.q.Lerp(bQ, vQ, GQ)),
        HQ = (0, sQ.Clamp)(WQ, -150, JQ);
      UQ.YwQ(dQ.scale(HQ / 3e3));
      const aQ = 2 * UQ.x - 8 * UQ.y + 4,
        lQ = 3 * UQ.x / aQ,
        hQ = 2 * UQ.y / aQ;
      return new FQ.s(lQ / hQ, 1, (1 - lQ - hQ) / hQ)
    }
    const IQ = FQ.e.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      jQ = FQ.e.Invert(IQ);

    function BQ(QQ, WQ) {
      const XQ = WQ > 0 ? QQ / WQ : 10;
      return (0, sQ.Clamp)(XQ, .1, 10)
    }

    function yQ(QQ, WQ) {
      const XQ = FQ.s.TransformNormal(QQ, IQ),
        wQ = FQ.s.TransformNormal(WQ, IQ),
        qQ = FQ.e.FromArray([BQ(wQ.x, XQ.x), 0, 0, 0, 0, BQ(wQ.y, XQ.y), 0, 0, 0, 0, BQ(wQ.z, XQ.z), 0, 0, 0, 0, 1]);
      return IQ.multiply(qQ).multiply(jQ)
    }
    const VQ = new FQ.s(.95047, 1, 1.08883),
      DQ = FQ.e.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(yQ(VQ, rQ(6500, 0))),
      pQ = FQ.e.Invert(DQ),
      GQ = FQ.s.TransformNormal(new FQ.s(1, 1, 1), DQ);
    var UQ = XQ(40286),
      bQ = XQ(40388);
    let vQ = (() => {
      var QQ;
      let WQ, XQ, TQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ = [],
        VQ = [],
        DQ = [],
        pQ = [],
        GQ = [],
        vQ = [],
        dQ = [],
        HQ = [],
        aQ = [],
        lQ = [],
        hQ = [],
        iQ = [],
        cQ = [],
        AQ = [],
        RQ = [],
        EQ = [],
        CQ = [],
        uQ = [],
        LQ = [],
        kQ = [],
        fQ = [],
        SQ = [],
        tQ = [],
        oQ = [];
      return QQ = class {
        constructor() {
          this._dirty = !0, this._tempColor = new zQ.d(0, 0, 0, 0), this._globalCurve = new zQ.d(0, 0, 0, 0), this._highlightsCurve = new zQ.d(0, 0, 0, 0), this._midtonesCurve = new zQ.d(0, 0, 0, 0), this._shadowsCurve = new zQ.d(0, 0, 0, 0), this._positiveCurve = new zQ.d(0, 0, 0, 0), this._negativeCurve = new zQ.d(0, 0, 0, 0), this._globalHue = (0, wQ.n)(this, yQ, 30), this._globalDensity = ((0, wQ.n)(this, VQ), (0, wQ.n)(this, DQ, 0)), this._globalSaturation = ((0, wQ.n)(this, pQ), (0, wQ.n)(this, GQ, 0)), this._globalExposure = ((0, wQ.n)(this, vQ), (0, wQ.n)(this, dQ, 0)), this._highlightsHue = ((0, wQ.n)(this, HQ), (0, wQ.n)(this, aQ, 30)), this._highlightsDensity = ((0, wQ.n)(this, lQ), (0, wQ.n)(this, hQ, 0)), this._highlightsSaturation = ((0, wQ.n)(this, iQ), (0, wQ.n)(this, cQ, 0)), this._highlightsExposure = ((0, wQ.n)(this, AQ), (0, wQ.n)(this, RQ, 0)), this._midtonesHue = ((0, wQ.n)(this, EQ), (0, wQ.n)(this, CQ, 30)), this._midtonesDensity = ((0, wQ.n)(this, uQ), (0, wQ.n)(this, LQ, 0)), this._midtonesSaturation = ((0, wQ.n)(this, kQ), (0, wQ.n)(this, fQ, 0)), this._midtonesExposure = ((0, wQ.n)(this, SQ), (0, wQ.n)(this, tQ, 0)), this._shadowsHue = ((0, wQ.n)(this, oQ), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
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
        _getColorGradingDataToRef(WQ, XQ, wQ, qQ, TQ) {
          null != WQ && (WQ = QQ._Clamp(WQ, 0, 360), XQ = QQ._Clamp(XQ, -100, 100), wQ = QQ._Clamp(wQ, -100, 100), qQ = QQ._Clamp(qQ, -100, 100), XQ = QQ._ApplyColorGradingSliderNonlinear(XQ), XQ *= .5, qQ = QQ._ApplyColorGradingSliderNonlinear(qQ), XQ < 0 && (XQ *= -1, WQ = (WQ + 180) % 360), QQ._FromHSBToRef(WQ, XQ, 50 + .25 * qQ, TQ), TQ.scaleToRef(2, TQ), TQ.a = 1 + .01 * wQ)
        }
        static _ApplyColorGradingSliderNonlinear(QQ) {
          QQ /= 100;
          let WQ = Math.abs(QQ);
          return WQ = Math.pow(WQ, 2), QQ < 0 && (WQ *= -1), WQ *= 100, WQ
        }
        static _FromHSBToRef(WQ, XQ, wQ, qQ) {
          let TQ = QQ._Clamp(WQ, 0, 360);
          const zQ = QQ._Clamp(XQ / 100, 0, 1),
            sQ = QQ._Clamp(wQ / 100, 0, 1);
          if (0 === zQ) qQ.r = sQ, qQ.g = sQ, qQ.b = sQ;
          else {
            TQ /= 60;
            const QQ = Math.floor(TQ),
              WQ = TQ - QQ,
              XQ = sQ * (1 - zQ),
              wQ = sQ * (1 - zQ * WQ),
              FQ = sQ * (1 - zQ * (1 - WQ));
            switch (QQ) {
              case 0:
                qQ.r = sQ, qQ.g = FQ, qQ.b = XQ;
                break;
              case 1:
                qQ.r = wQ, qQ.g = sQ, qQ.b = XQ;
                break;
              case 2:
                qQ.r = XQ, qQ.g = sQ, qQ.b = FQ;
                break;
              case 3:
                qQ.r = XQ, qQ.g = wQ, qQ.b = sQ;
                break;
              case 4:
                qQ.r = FQ, qQ.g = XQ, qQ.b = sQ;
                break;
              default:
                qQ.r = sQ, qQ.g = XQ, qQ.b = wQ
            }
          }
          qQ.a = 1
        }
        static _Clamp(QQ, WQ, XQ) {
          return Math.min(Math.max(QQ, WQ), XQ)
        }
        clone() {
          return UQ.b.Clone((() => new QQ), this)
        }
        serialize() {
          return UQ.b.Serialize(this)
        }
        _bind(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), QQ && (QQ.setFloat4(WQ, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), QQ.setFloat4(XQ, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), QQ.setFloat4(wQ, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const zQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WQ = [(0, qQ.I)()], XQ = [(0, qQ.I)()], TQ = [(0, qQ.I)()], sQ = [(0, qQ.I)()], FQ = [(0, qQ.I)()], PQ = [(0, qQ.I)()], gQ = [(0, qQ.I)()], JQ = [(0, qQ.I)()], rQ = [(0, qQ.I)()], IQ = [(0, qQ.I)()], jQ = [(0, qQ.I)()], BQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_globalHue" in QQ,
            get: QQ => QQ._globalHue,
            set: (QQ, WQ) => {
              QQ._globalHue = WQ
            }
          },
          metadata: zQ
        }, yQ, VQ), (0, wQ.k)(null, null, XQ, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_globalDensity" in QQ,
            get: QQ => QQ._globalDensity,
            set: (QQ, WQ) => {
              QQ._globalDensity = WQ
            }
          },
          metadata: zQ
        }, DQ, pQ), (0, wQ.k)(null, null, TQ, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_globalSaturation" in QQ,
            get: QQ => QQ._globalSaturation,
            set: (QQ, WQ) => {
              QQ._globalSaturation = WQ
            }
          },
          metadata: zQ
        }, GQ, vQ), (0, wQ.k)(null, null, sQ, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_globalExposure" in QQ,
            get: QQ => QQ._globalExposure,
            set: (QQ, WQ) => {
              QQ._globalExposure = WQ
            }
          },
          metadata: zQ
        }, dQ, HQ), (0, wQ.k)(null, null, FQ, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_highlightsHue" in QQ,
            get: QQ => QQ._highlightsHue,
            set: (QQ, WQ) => {
              QQ._highlightsHue = WQ
            }
          },
          metadata: zQ
        }, aQ, lQ), (0, wQ.k)(null, null, PQ, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_highlightsDensity" in QQ,
            get: QQ => QQ._highlightsDensity,
            set: (QQ, WQ) => {
              QQ._highlightsDensity = WQ
            }
          },
          metadata: zQ
        }, hQ, iQ), (0, wQ.k)(null, null, gQ, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_highlightsSaturation" in QQ,
            get: QQ => QQ._highlightsSaturation,
            set: (QQ, WQ) => {
              QQ._highlightsSaturation = WQ
            }
          },
          metadata: zQ
        }, cQ, AQ), (0, wQ.k)(null, null, JQ, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_highlightsExposure" in QQ,
            get: QQ => QQ._highlightsExposure,
            set: (QQ, WQ) => {
              QQ._highlightsExposure = WQ
            }
          },
          metadata: zQ
        }, RQ, EQ), (0, wQ.k)(null, null, rQ, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_midtonesHue" in QQ,
            get: QQ => QQ._midtonesHue,
            set: (QQ, WQ) => {
              QQ._midtonesHue = WQ
            }
          },
          metadata: zQ
        }, CQ, uQ), (0, wQ.k)(null, null, IQ, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_midtonesDensity" in QQ,
            get: QQ => QQ._midtonesDensity,
            set: (QQ, WQ) => {
              QQ._midtonesDensity = WQ
            }
          },
          metadata: zQ
        }, LQ, kQ), (0, wQ.k)(null, null, jQ, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_midtonesSaturation" in QQ,
            get: QQ => QQ._midtonesSaturation,
            set: (QQ, WQ) => {
              QQ._midtonesSaturation = WQ
            }
          },
          metadata: zQ
        }, fQ, SQ), (0, wQ.k)(null, null, BQ, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_midtonesExposure" in QQ,
            get: QQ => QQ._midtonesExposure,
            set: (QQ, WQ) => {
              QQ._midtonesExposure = WQ
            }
          },
          metadata: zQ
        }, tQ, oQ), zQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: zQ
        })
      })(), QQ.PrepareUniforms = bQ.c, QQ
    })();

    function dQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      QQ._bind(WQ, XQ, wQ, qQ)
    }
    var HQ = XQ(40206),
      aQ = XQ(40391),
      lQ = XQ(37418);
    let hQ = (() => {
        var QQ;
        let WQ, XQ, PQ, IQ, jQ, BQ, VQ, bQ, lQ, hQ, iQ, cQ, AQ, RQ, EQ, CQ, uQ, LQ, kQ, fQ, SQ, tQ, oQ, eQ, nQ, xQ, YQ, NQ, ZQ = [],
          OQ = [],
          KQ = [],
          mQ = [],
          MQ = [],
          QW = [],
          WW = [],
          XW = [],
          wW = [],
          qW = [],
          TW = [],
          zW = [],
          sW = [],
          FW = [],
          PW = [],
          gW = [],
          JW = [],
          rW = [],
          IW = [],
          jW = [],
          BW = [],
          yW = [],
          VW = [],
          DW = [],
          pW = [],
          GW = [],
          UW = [],
          bW = [],
          vW = [],
          dW = [],
          HW = [],
          aW = [],
          lW = [],
          hW = [],
          iW = [],
          cW = [],
          AW = [],
          RW = [],
          EW = [],
          CW = [],
          uW = [],
          LW = [],
          kW = [],
          fW = [],
          SW = [],
          tW = [],
          oW = [],
          eW = [],
          nW = [],
          xW = [],
          YW = [],
          NW = [],
          ZW = [],
          OW = [],
          KW = [],
          mW = [];
        return QQ = class {
          constructor() {
            this.colorCurves = (0, wQ.n)(this, ZQ, new vQ), this._colorCurvesEnabled = ((0, wQ.n)(this, OQ), (0, wQ.n)(this, KQ, !1)), this._colorGradingTexture = ((0, wQ.n)(this, mQ), (0, wQ.n)(this, MQ, void 0)), this._colorGradingEnabled = ((0, wQ.n)(this, QW), (0, wQ.n)(this, WW, !1)), this._colorGradingWithGreenDepth = ((0, wQ.n)(this, XW), (0, wQ.n)(this, wW, !0)), this._colorGradingBGR = ((0, wQ.n)(this, qW), (0, wQ.n)(this, TW, !0)), this._exposure = ((0, wQ.n)(this, zW), (0, wQ.n)(this, sW, 1)), this._toneMappingEnabled = ((0, wQ.n)(this, FW), (0, wQ.n)(this, PW, !1)), this._toneMappingType = ((0, wQ.n)(this, gW), (0, wQ.n)(this, JW, QQ.TONEMAPPING_STANDARD)), this._contrast = ((0, wQ.n)(this, rW), (0, wQ.n)(this, IW, 1)), this._whiteBalanceEnabled = ((0, wQ.n)(this, jW), (0, wQ.n)(this, BW, !1)), this._temperature = ((0, wQ.n)(this, yW), (0, wQ.n)(this, VW, 6500)), this._tint = ((0, wQ.n)(this, DW), (0, wQ.n)(this, pW, 0)), this._whiteBalanceMatrix = ((0, wQ.n)(this, GW), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, wQ.n)(this, UW, 0), this.vignetteCenterX = ((0, wQ.n)(this, bW), (0, wQ.n)(this, vW, 0)), this.vignetteCenterY = ((0, wQ.n)(this, dW), (0, wQ.n)(this, HW, 0)), this.vignetteWeight = ((0, wQ.n)(this, aW), (0, wQ.n)(this, lW, 1.5)), this.vignetteColor = ((0, wQ.n)(this, hW), (0, wQ.n)(this, iW, new zQ.d(0, 0, 0, 0))), this.vignetteCameraFov = ((0, wQ.n)(this, cW), (0, wQ.n)(this, AW, .5)), this._vignetteBlendMode = ((0, wQ.n)(this, RW), (0, wQ.n)(this, EW, QQ.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, wQ.n)(this, CW), (0, wQ.n)(this, uW, !1)), this._ditheringEnabled = ((0, wQ.n)(this, LW), (0, wQ.n)(this, kW, !1)), this._ditheringIntensity = ((0, wQ.n)(this, fW), (0, wQ.n)(this, SW, 1 / 255)), this._skipFinalColorClamp = ((0, wQ.n)(this, tW), (0, wQ.n)(this, oW, !1)), this._applyByPostProcess = ((0, wQ.n)(this, eW), (0, wQ.n)(this, nW, !1)), this._isEnabled = ((0, wQ.n)(this, xW), (0, wQ.n)(this, YW, !0)), this.outputTextureWidth = ((0, wQ.n)(this, NW), (0, wQ.n)(this, ZW, 0)), this.outputTextureHeight = ((0, wQ.n)(this, OW), (0, wQ.n)(this, KW, 0)), this.onUpdateParameters = ((0, wQ.n)(this, mW), new TQ.b)
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
            QQ = Number.isNaN(QQ) ? gQ : Math.max(QQ, gQ), this._temperature !== QQ && (this._temperature = QQ, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(QQ) {
            QQ = (0, sQ.Clamp)(QQ, -150, JQ), this._tint !== QQ && (this._tint = QQ, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(QQ, WQ) {
              const XQ = yQ(rQ(QQ, WQ), GQ),
                wQ = DQ.multiply(XQ).multiply(pQ);
              return FQ.e.GetAsMatrix3x3(wQ)
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
          prepareDefines(WQ) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return WQ.WHITEBALANCE = !1, WQ.VIGNETTE = !1, WQ.TONEMAPPING = 0, WQ.CONTRAST = !1, WQ.EXPOSURE = !1, WQ.COLORCURVES = !1, WQ.COLORGRADING = !1, WQ.COLORGRADING3D = !1, WQ.DITHER = !1, WQ.IMAGEPROCESSING = !1, WQ.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(WQ.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (WQ.WHITEBALANCE = this._whiteBalanceEnabled, WQ.VIGNETTE = this.vignetteEnabled, WQ.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === QQ._VIGNETTEMODE_MULTIPLY, WQ.VIGNETTEBLENDMODEOPAQUE = !WQ.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case QQ.TONEMAPPING_KHR_PBR_NEUTRAL:
                WQ.TONEMAPPING = 3;
                break;
              case QQ.TONEMAPPING_ACES:
                WQ.TONEMAPPING = 2;
                break;
              default:
                WQ.TONEMAPPING = 1
            } else WQ.TONEMAPPING = 0;
            WQ.CONTRAST = 1 !== this.contrast, WQ.EXPOSURE = 1 !== this.exposure, WQ.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, WQ.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, WQ.COLORGRADING ? WQ.COLORGRADING3D = this.colorGradingTexture.is3D : WQ.COLORGRADING3D = !1, WQ.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, WQ.SAMPLER3DBGRMAP = this.colorGradingBGR, WQ.DITHER = this._ditheringEnabled, WQ.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, WQ.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, WQ.IMAGEPROCESSING = WQ.WHITEBALANCE || WQ.VIGNETTE || !!WQ.TONEMAPPING || WQ.CONTRAST || WQ.EXPOSURE || WQ.COLORCURVES || WQ.COLORGRADING || WQ.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(QQ, WQ) {
            if (this._whiteBalanceEnabled && QQ.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && dQ(this.colorCurves, QQ), this._vignetteEnabled || this._ditheringEnabled) {
              const XQ = 1 / (this.outputTextureWidth || QQ.Uj().getRenderWidth()),
                wQ = 1 / (this.outputTextureHeight || QQ.Uj().getRenderHeight());
              if (QQ.setFloat2("vInverseScreenSize", XQ, wQ), this._ditheringEnabled && QQ.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const qQ = null != WQ ? WQ : wQ / XQ;
                let TQ = Math.tan(.5 * this.vignetteCameraFov),
                  zQ = TQ * qQ;
                const sQ = Math.sqrt(zQ * TQ);
                zQ = (0, HQ.n)(zQ, sQ, this.vignetteStretch), TQ = (0, HQ.n)(TQ, sQ, this.vignetteStretch), QQ.setFloat4("vignetteSettings1", zQ, TQ, -zQ * this.vignetteCenterX, -TQ * this.vignetteCenterY);
                const FQ = -2 * this.vignetteWeight;
                QQ.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, FQ)
              }
            }
            if (QQ.setFloat("exposureLinear", this.exposure), QQ.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              QQ.setTexture("txColorTransform", this.colorGradingTexture);
              const WQ = this.colorGradingTexture.getSize().height;
              QQ.setFloat4("colorTransformSettings", (WQ - 1) / WQ, .5 / WQ, WQ, this.colorGradingTexture.level)
            }
          }
          clone() {
            return UQ.b.Clone((() => new QQ), this)
          }
          serialize() {
            return UQ.b.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const TQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          WQ = [(0, qQ.i)()], XQ = [(0, qQ.I)()], PQ = [(0, qQ.z)("colorGradingTexture")], IQ = [(0, qQ.I)()], jQ = [(0, qQ.I)()], BQ = [(0, qQ.I)()], VQ = [(0, qQ.I)()], bQ = [(0, qQ.I)()], lQ = [(0, qQ.I)()], hQ = [(0, qQ.I)()], iQ = [(0, qQ.I)()], cQ = [(0, qQ.I)()], AQ = [(0, qQ.I)()], RQ = [(0, qQ.I)()], EQ = [(0, qQ.I)()], CQ = [(0, qQ.I)()], uQ = [(0, qQ.I)()], LQ = [(0, qQ.p)()], kQ = [(0, qQ.I)()], fQ = [(0, qQ.I)()], SQ = [(0, qQ.I)()], tQ = [(0, qQ.I)()], oQ = [(0, qQ.I)()], eQ = [(0, qQ.I)()], nQ = [(0, qQ.I)()], xQ = [(0, qQ.I)()], YQ = [(0, qQ.I)()], NQ = [(0, qQ.I)()], (0, wQ.k)(null, null, WQ, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: QQ => "colorCurves" in QQ,
              get: QQ => QQ.colorCurves,
              set: (QQ, WQ) => {
                QQ.colorCurves = WQ
              }
            },
            metadata: TQ
          }, ZQ, OQ), (0, wQ.k)(null, null, XQ, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_colorCurvesEnabled" in QQ,
              get: QQ => QQ._colorCurvesEnabled,
              set: (QQ, WQ) => {
                QQ._colorCurvesEnabled = WQ
              }
            },
            metadata: TQ
          }, KQ, mQ), (0, wQ.k)(null, null, PQ, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_colorGradingTexture" in QQ,
              get: QQ => QQ._colorGradingTexture,
              set: (QQ, WQ) => {
                QQ._colorGradingTexture = WQ
              }
            },
            metadata: TQ
          }, MQ, QW), (0, wQ.k)(null, null, IQ, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_colorGradingEnabled" in QQ,
              get: QQ => QQ._colorGradingEnabled,
              set: (QQ, WQ) => {
                QQ._colorGradingEnabled = WQ
              }
            },
            metadata: TQ
          }, WW, XW), (0, wQ.k)(null, null, jQ, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_colorGradingWithGreenDepth" in QQ,
              get: QQ => QQ._colorGradingWithGreenDepth,
              set: (QQ, WQ) => {
                QQ._colorGradingWithGreenDepth = WQ
              }
            },
            metadata: TQ
          }, wW, qW), (0, wQ.k)(null, null, BQ, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_colorGradingBGR" in QQ,
              get: QQ => QQ._colorGradingBGR,
              set: (QQ, WQ) => {
                QQ._colorGradingBGR = WQ
              }
            },
            metadata: TQ
          }, TW, zW), (0, wQ.k)(null, null, VQ, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_exposure" in QQ,
              get: QQ => QQ._exposure,
              set: (QQ, WQ) => {
                QQ._exposure = WQ
              }
            },
            metadata: TQ
          }, sW, FW), (0, wQ.k)(null, null, bQ, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_toneMappingEnabled" in QQ,
              get: QQ => QQ._toneMappingEnabled,
              set: (QQ, WQ) => {
                QQ._toneMappingEnabled = WQ
              }
            },
            metadata: TQ
          }, PW, gW), (0, wQ.k)(null, null, lQ, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_toneMappingType" in QQ,
              get: QQ => QQ._toneMappingType,
              set: (QQ, WQ) => {
                QQ._toneMappingType = WQ
              }
            },
            metadata: TQ
          }, JW, rW), (0, wQ.k)(null, null, hQ, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_contrast" in QQ,
              get: QQ => QQ._contrast,
              set: (QQ, WQ) => {
                QQ._contrast = WQ
              }
            },
            metadata: TQ
          }, IW, jW), (0, wQ.k)(null, null, iQ, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_whiteBalanceEnabled" in QQ,
              get: QQ => QQ._whiteBalanceEnabled,
              set: (QQ, WQ) => {
                QQ._whiteBalanceEnabled = WQ
              }
            },
            metadata: TQ
          }, BW, yW), (0, wQ.k)(null, null, cQ, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_temperature" in QQ,
              get: QQ => QQ._temperature,
              set: (QQ, WQ) => {
                QQ._temperature = WQ
              }
            },
            metadata: TQ
          }, VW, DW), (0, wQ.k)(null, null, AQ, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_tint" in QQ,
              get: QQ => QQ._tint,
              set: (QQ, WQ) => {
                QQ._tint = WQ
              }
            },
            metadata: TQ
          }, pW, GW), (0, wQ.k)(null, null, RQ, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vignetteStretch" in QQ,
              get: QQ => QQ.vignetteStretch,
              set: (QQ, WQ) => {
                QQ.vignetteStretch = WQ
              }
            },
            metadata: TQ
          }, UW, bW), (0, wQ.k)(null, null, EQ, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vignetteCenterX" in QQ,
              get: QQ => QQ.vignetteCenterX,
              set: (QQ, WQ) => {
                QQ.vignetteCenterX = WQ
              }
            },
            metadata: TQ
          }, vW, dW), (0, wQ.k)(null, null, CQ, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vignetteCenterY" in QQ,
              get: QQ => QQ.vignetteCenterY,
              set: (QQ, WQ) => {
                QQ.vignetteCenterY = WQ
              }
            },
            metadata: TQ
          }, HW, aW), (0, wQ.k)(null, null, uQ, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vignetteWeight" in QQ,
              get: QQ => QQ.vignetteWeight,
              set: (QQ, WQ) => {
                QQ.vignetteWeight = WQ
              }
            },
            metadata: TQ
          }, lW, hW), (0, wQ.k)(null, null, LQ, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vignetteColor" in QQ,
              get: QQ => QQ.vignetteColor,
              set: (QQ, WQ) => {
                QQ.vignetteColor = WQ
              }
            },
            metadata: TQ
          }, iW, cW), (0, wQ.k)(null, null, kQ, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: QQ => "vignetteCameraFov" in QQ,
              get: QQ => QQ.vignetteCameraFov,
              set: (QQ, WQ) => {
                QQ.vignetteCameraFov = WQ
              }
            },
            metadata: TQ
          }, AW, RW), (0, wQ.k)(null, null, fQ, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_vignetteBlendMode" in QQ,
              get: QQ => QQ._vignetteBlendMode,
              set: (QQ, WQ) => {
                QQ._vignetteBlendMode = WQ
              }
            },
            metadata: TQ
          }, EW, CW), (0, wQ.k)(null, null, SQ, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_vignetteEnabled" in QQ,
              get: QQ => QQ._vignetteEnabled,
              set: (QQ, WQ) => {
                QQ._vignetteEnabled = WQ
              }
            },
            metadata: TQ
          }, uW, LW), (0, wQ.k)(null, null, tQ, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_ditheringEnabled" in QQ,
              get: QQ => QQ._ditheringEnabled,
              set: (QQ, WQ) => {
                QQ._ditheringEnabled = WQ
              }
            },
            metadata: TQ
          }, kW, fW), (0, wQ.k)(null, null, oQ, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_ditheringIntensity" in QQ,
              get: QQ => QQ._ditheringIntensity,
              set: (QQ, WQ) => {
                QQ._ditheringIntensity = WQ
              }
            },
            metadata: TQ
          }, SW, tW), (0, wQ.k)(null, null, eQ, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_skipFinalColorClamp" in QQ,
              get: QQ => QQ._skipFinalColorClamp,
              set: (QQ, WQ) => {
                QQ._skipFinalColorClamp = WQ
              }
            },
            metadata: TQ
          }, oW, eW), (0, wQ.k)(null, null, nQ, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_applyByPostProcess" in QQ,
              get: QQ => QQ._applyByPostProcess,
              set: (QQ, WQ) => {
                QQ._applyByPostProcess = WQ
              }
            },
            metadata: TQ
          }, nW, xW), (0, wQ.k)(null, null, xQ, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: QQ => "_isEnabled" in QQ,
              get: QQ => QQ._isEnabled,
              set: (QQ, WQ) => {
                QQ._isEnabled = WQ
              }
            },
            metadata: TQ
          }, YW, NW), (0, wQ.k)(null, null, YQ, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: QQ => "outputTextureWidth" in QQ,
              get: QQ => QQ.outputTextureWidth,
              set: (QQ, WQ) => {
                QQ.outputTextureWidth = WQ
              }
            },
            metadata: TQ
          }, ZW, OW), (0, wQ.k)(null, null, NQ, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: QQ => "outputTextureHeight" in QQ,
              get: QQ => QQ.outputTextureHeight,
              set: (QQ, WQ) => {
                QQ.outputTextureHeight = WQ
              }
            },
            metadata: TQ
          }, KW, mW), TQ && Object.defineProperty(QQ, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: TQ
          })
        })(), QQ.TONEMAPPING_STANDARD = 0, QQ.TONEMAPPING_ACES = 1, QQ.TONEMAPPING_KHR_PBR_NEUTRAL = 2, QQ.PrepareUniforms = aQ.i, QQ.PrepareSamplers = aQ.e, QQ._VIGNETTEMODE_MULTIPLY = 0, QQ._VIGNETTEMODE_OPAQUE = 1, QQ
      })(),
      iQ = !1;

    function cQ(QQ) {
      const WQ = UQ.b.Parse((() => new hQ), QQ, null, null);
      return void 0 !== QQ.vignetteCentreX && (WQ.vignetteCenterX = QQ.vignetteCentreX), void 0 !== QQ.vignetteCentreY && (WQ.vignetteCenterY = QQ.vignetteCentreY), WQ
    }

    function AQ() {
      iQ || (iQ = !0, hQ.Parse = cQ, UQ.b._ImageProcessingConfigurationParser = cQ, (0, lQ.d)("BABYLON.ImageProcessingConfiguration", hQ))
    }
  },
  40400: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => TQ
    });
    var wQ = XQ(38956),
      qQ = XQ(40357);
    class TQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          TQ = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = QQ, this._noUBO = !QQ.supportsUniformBuffers || qQ, this._dynamic = XQ, this._name = wQ ?? "no-name", this._data = WQ || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === TQ && this._engine._features.trackUbosInFrame || !0 === TQ) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.N_ = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.N_ = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
        let WQ;
        if (WQ = QQ <= 2 ? QQ : 4, this._uniformLocationPointer % WQ !== 0) {
          const QQ = this._uniformLocationPointer;
          this._uniformLocationPointer += WQ - this._uniformLocationPointer % WQ;
          const XQ = this._uniformLocationPointer - QQ;
          for (let WQ = 0; WQ < XQ; WQ++) this._data.push(0)
        }
      }
      addUniform(QQ, WQ) {
        let XQ, wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (wQ > 0 && "number" === typeof WQ && (this._uniformArraySizes[QQ] = {
            strideSize: WQ,
            arraySize: wQ
          }), void 0 === this._uniformLocations[QQ] && (this._uniformNames.push(QQ), !this._noUBO)) {
          if (wQ > 0) {
            if (WQ instanceof Array) throw "addUniform should not be use with Array in UBO: " + QQ;
            if (this._fillAlignment(4), 16 == WQ) WQ *= wQ;
            else {
              WQ = WQ * wQ + (4 - WQ) * wQ
            }
            XQ = [];
            for (let QQ = 0; QQ < WQ; QQ++) XQ.push(0)
          } else {
            if (WQ instanceof Array) XQ = WQ, WQ = XQ.length;
            else {
              XQ = [];
              for (let QQ = 0; QQ < WQ; QQ++) XQ.push(0)
            }
            this._fillAlignment(WQ)
          }
          this._uniformSizes[QQ] = WQ, this._uniformLocations[QQ] = this._uniformLocationPointer, this._uniformLocationPointer += WQ;
          for (let QQ = 0; QQ < WQ; QQ++) this._data.push(XQ[QQ]);
          this._needSync = !0
        }
      }
      addMatrix(QQ, WQ) {
        this.addUniform(QQ, Array.prototype.slice.call(WQ.awQ()))
      }
      addFloat2(QQ, WQ, XQ) {
        const wQ = [WQ, XQ];
        this.addUniform(QQ, wQ)
      }
      addFloat3(QQ, WQ, XQ, wQ) {
        const qQ = [WQ, XQ, wQ];
        this.addUniform(QQ, qQ)
      }
      addColor3(QQ, WQ) {
        const XQ = [WQ.r, WQ.g, WQ.b];
        this.addUniform(QQ, XQ)
      }
      addColor4(QQ, WQ, XQ) {
        const wQ = [WQ.r, WQ.g, WQ.b, XQ];
        this.addUniform(QQ, wQ)
      }
      addVector3(QQ, WQ) {
        const XQ = [WQ.x, WQ.y, WQ.z];
        this.addUniform(QQ, XQ)
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
        let WQ = 0;
        for (const XQ in this._uniformLocations)
          if (QQ.push(XQ), 10 === ++WQ) break;
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
      _buffersEqual(QQ, WQ) {
        for (let XQ = 0; XQ < QQ.length; ++XQ)
          if (QQ[XQ] !== WQ[XQ]) return !1;
        return !0
      }
      _copyBuffer(QQ, WQ) {
        for (let XQ = 0; XQ < QQ.length; ++XQ) WQ[XQ] = QQ[XQ]
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
        let WQ = this._slotByOwner.get(QQ);
        if (void 0 === WQ && (WQ = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(QQ, WQ), this._ownerCount++, QQ._uniformBuffersWithOwnedSlot || (QQ._uniformBuffersWithOwnedSlot = []), QQ._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(WQ, QQ._uniformBuffersWithOwnedSlot)), this._slotGeneration[WQ] === this._dataGeneration) return this._bufferIndex = WQ, this._buffer = this._buffers[WQ][0], this.bindUniformBuffer(), this._slotFrameId[WQ] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const XQ = this._buffers[WQ][1];
        this._slotFrameId[WQ] === this._currentFrameId && XQ && !this._buffersEqual(this._bufferData, XQ) && (WQ = this._takeFreeSlot(!1)), this._bufferIndex = WQ, this._buffer = this._buffers[WQ][0], this.bindUniformBuffer();
        const wQ = this._buffers[WQ][1];
        wQ && this._buffersEqual(this._bufferData, wQ) || (wQ && this._copyBuffer(this._bufferData, wQ), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[WQ] = this._currentFrameId, this._slotGeneration[WQ] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(QQ) {
        for (let XQ = 0; XQ < this._freeSlots.length; ++XQ) {
          const WQ = this._freeSlots[XQ];
          if (this._slotFrameId[WQ] !== this._currentFrameId) return QQ && (this._freeSlots[XQ] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), WQ
        }
        this._rebuild();
        const WQ = this._buffers.length - 1;
        return QQ || this._freeSlots.push(WQ), WQ
      }
      _releaseOwnerSlot(QQ) {
        const WQ = this._slotByOwner?.get(QQ);
        if (void 0 === WQ) return;
        this._slotByOwner.delete(QQ);
        const XQ = this._ownerListsBySlot.get(WQ);
        XQ && (this._removeOwnerBacklink(XQ), this._ownerListsBySlot.delete(WQ)), this._ownerCount--, this._freeSlots.push(WQ)
      }
      _removeOwnerBacklink(QQ) {
        const WQ = QQ.indexOf(this); - 1 !== WQ && (QQ[WQ] = QQ[QQ.length - 1], QQ.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(QQ, WQ, XQ) {
        this._checkNewFrame();
        let qQ = this._uniformLocations[QQ];
        if (void 0 === qQ) {
          if (this._buffer) return void wQ.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + QQ);
          this.addUniform(QQ, XQ), qQ = this._uniformLocations[QQ]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let QQ = 0; QQ < XQ; QQ++) this._bufferData[qQ + QQ] = WQ[QQ];
          this._dataGeneration++
        } else {
          let QQ = !1;
          for (let wQ = 0; wQ < XQ; wQ++)(16 === XQ && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[qQ + wQ] !== Math.fround(WQ[wQ])) && (QQ = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[qQ + wQ] = WQ[wQ]);
          this._needSync = this._needSync || QQ, QQ && this._dataGeneration++
        }
      }
      updateUniformArray(QQ, WQ, XQ) {
        this._checkNewFrame();
        const TQ = this._uniformLocations[QQ];
        if (void 0 === TQ) return void wQ.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const zQ = this._uniformArraySizes[QQ];
        if (this._dynamic) {
          for (let QQ = 0; QQ < XQ; QQ++) this._bufferData[TQ + QQ] = WQ[QQ];
          this._dataGeneration++
        } else {
          let QQ = !1,
            wQ = 0,
            sQ = 0;
          for (let FQ = 0; FQ < XQ; FQ++)
            if (this._bufferData[TQ + 4 * sQ + wQ] !== qQ.g.FloatRound(WQ[FQ]) && (QQ = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[TQ + 4 * sQ + wQ] = WQ[FQ]), wQ++, wQ === zQ.strideSize) {
              for (; wQ < 4; wQ++) this._bufferData[TQ + 4 * sQ + wQ] = 0;
              wQ = 0, sQ++
            } this._needSync = this._needSync || QQ, QQ && this._dataGeneration++
        }
      }
      _cacheMatrix(QQ, WQ) {
        this._checkNewFrame();
        const XQ = this._valueCache[QQ],
          wQ = WQ.updateFlag;
        return (void 0 === XQ || XQ !== wQ) && (this._valueCache[QQ] = wQ, !0)
      }
      _updateMatrix3x3ForUniform(QQ, WQ) {
        for (let XQ = 0; XQ < 3; XQ++) TQ._TempBuffer[4 * XQ] = WQ[3 * XQ], TQ._TempBuffer[4 * XQ + 1] = WQ[3 * XQ + 1], TQ._TempBuffer[4 * XQ + 2] = WQ[3 * XQ + 2], TQ._TempBuffer[4 * XQ + 3] = 0;
        this.updateUniform(QQ, TQ._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(QQ, WQ) {
        this._currentEffect.setMatrix3x3(QQ, WQ)
      }
      _updateMatrix2x2ForEffect(QQ, WQ) {
        this._currentEffect.setMatrix2x2(QQ, WQ)
      }
      _updateMatrix2x2ForUniform(QQ, WQ) {
        for (let XQ = 0; XQ < 2; XQ++) TQ._TempBuffer[4 * XQ] = WQ[2 * XQ], TQ._TempBuffer[4 * XQ + 1] = WQ[2 * XQ + 1], TQ._TempBuffer[4 * XQ + 2] = 0, TQ._TempBuffer[4 * XQ + 3] = 0;
        this.updateUniform(QQ, TQ._TempBuffer, 8)
      }
      _updateFloatForEffect(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(QQ + XQ, WQ)
      }
      _updateFloatForUniform(QQ, WQ) {
        TQ._TempBuffer[0] = WQ, this.updateUniform(QQ, TQ._TempBuffer, 1)
      }
      _updateFloat2ForEffect(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(QQ + wQ, WQ, XQ)
      }
      _updateFloat2ForUniform(QQ, WQ, XQ) {
        TQ._TempBuffer[0] = WQ, TQ._TempBuffer[1] = XQ, this.updateUniform(QQ, TQ._TempBuffer, 2)
      }
      _updateFloat3ForEffect(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(QQ + qQ, WQ, XQ, wQ)
      }
      _updateFloat3ForUniform(QQ, WQ, XQ, wQ) {
        TQ._TempBuffer[0] = WQ, TQ._TempBuffer[1] = XQ, TQ._TempBuffer[2] = wQ, this.updateUniform(QQ, TQ._TempBuffer, 3)
      }
      _updateFloat4ForEffect(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(QQ + TQ, WQ, XQ, wQ, qQ)
      }
      _updateFloat4ForUniform(QQ, WQ, XQ, wQ, qQ) {
        TQ._TempBuffer[0] = WQ, TQ._TempBuffer[1] = XQ, TQ._TempBuffer[2] = wQ, TQ._TempBuffer[3] = qQ, this.updateUniform(QQ, TQ._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[QQ]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(QQ + XQ, WQ);
            break;
          case 3:
            this._currentEffect.setFloatArray3(QQ + XQ, WQ);
            break;
          case 4:
            this._currentEffect.setFloatArray4(QQ + XQ, WQ);
            break;
          default:
            this._currentEffect.setFloatArray(QQ + XQ, WQ)
        }
      }
      _updateFloatArrayForUniform(QQ, WQ) {
        this.updateUniformArray(QQ, WQ, WQ.length)
      }
      _updateArrayForEffect(QQ, WQ) {
        this._currentEffect.setArray(QQ, WQ)
      }
      _updateArrayForUniform(QQ, WQ) {
        this.updateUniformArray(QQ, WQ, WQ.length)
      }
      _updateIntArrayForEffect(QQ, WQ) {
        this._currentEffect.setIntArray(QQ, WQ)
      }
      _updateIntArrayForUniform(QQ, WQ) {
        TQ._TempBufferInt32View.set(WQ), this.updateUniformArray(QQ, TQ._TempBuffer, WQ.length)
      }
      _updateUIntArrayForEffect(QQ, WQ) {
        this._currentEffect.setUIntArray(QQ, WQ)
      }
      _updateUIntArrayForUniform(QQ, WQ) {
        TQ._TempBufferUInt32View.set(WQ), this.updateUniformArray(QQ, TQ._TempBuffer, WQ.length)
      }
      _updateMatrixForEffect(QQ, WQ) {
        this._currentEffect.setMatrix(QQ, WQ)
      }
      _updateMatrixForUniform(QQ, WQ) {
        this._cacheMatrix(QQ, WQ) && this.updateUniform(QQ, WQ.awQ(), 16)
      }
      _updateMatricesForEffect(QQ, WQ) {
        this._currentEffect.setMatrices(QQ, WQ)
      }
      _updateMatricesForUniform(QQ, WQ) {
        this.updateUniform(QQ, WQ, WQ.length)
      }
      _updateVector3ForEffect(QQ, WQ) {
        this._currentEffect.setVector3(QQ, WQ)
      }
      _updateVector3ForUniform(QQ, WQ) {
        TQ._TempBuffer[0] = WQ.x, TQ._TempBuffer[1] = WQ.y, TQ._TempBuffer[2] = WQ.z, this.updateUniform(QQ, TQ._TempBuffer, 3)
      }
      _updateVector4ForEffect(QQ, WQ) {
        this._currentEffect.setVector4(QQ, WQ)
      }
      _updateVector4ForUniform(QQ, WQ) {
        TQ._TempBuffer[0] = WQ.x, TQ._TempBuffer[1] = WQ.y, TQ._TempBuffer[2] = WQ.z, TQ._TempBuffer[3] = WQ.w, this.updateUniform(QQ, TQ._TempBuffer, 4)
      }
      _updateColor3ForEffect(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(QQ + XQ, WQ)
      }
      _updateColor3ForUniform(QQ, WQ) {
        TQ._TempBuffer[0] = WQ.r, TQ._TempBuffer[1] = WQ.g, TQ._TempBuffer[2] = WQ.b, this.updateUniform(QQ, TQ._TempBuffer, 3)
      }
      _updateColor4ForEffect(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(QQ + wQ, WQ, XQ)
      }
      _updateDirectColor4ForEffect(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(QQ + XQ, WQ)
      }
      _updateColor4ForUniform(QQ, WQ, XQ) {
        TQ._TempBuffer[0] = WQ.r, TQ._TempBuffer[1] = WQ.g, TQ._TempBuffer[2] = WQ.b, TQ._TempBuffer[3] = XQ, this.updateUniform(QQ, TQ._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(QQ, WQ) {
        TQ._TempBuffer[0] = WQ.r, TQ._TempBuffer[1] = WQ.g, TQ._TempBuffer[2] = WQ.b, TQ._TempBuffer[3] = WQ.a, this.updateUniform(QQ, TQ._TempBuffer, 4)
      }
      _updateIntForEffect(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(QQ + XQ, WQ)
      }
      _updateIntForUniform(QQ, WQ) {
        TQ._TempBufferInt32View[0] = WQ, this.updateUniform(QQ, TQ._TempBuffer, 1)
      }
      _updateInt2ForEffect(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(QQ + wQ, WQ, XQ)
      }
      _updateInt2ForUniform(QQ, WQ, XQ) {
        TQ._TempBufferInt32View[0] = WQ, TQ._TempBufferInt32View[1] = XQ, this.updateUniform(QQ, TQ._TempBuffer, 2)
      }
      _updateInt3ForEffect(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(QQ + qQ, WQ, XQ, wQ)
      }
      _updateInt3ForUniform(QQ, WQ, XQ, wQ) {
        TQ._TempBufferInt32View[0] = WQ, TQ._TempBufferInt32View[1] = XQ, TQ._TempBufferInt32View[2] = wQ, this.updateUniform(QQ, TQ._TempBuffer, 3)
      }
      _updateInt4ForEffect(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(QQ + TQ, WQ, XQ, wQ, qQ)
      }
      _updateInt4ForUniform(QQ, WQ, XQ, wQ, qQ) {
        TQ._TempBufferInt32View[0] = WQ, TQ._TempBufferInt32View[1] = XQ, TQ._TempBufferInt32View[2] = wQ, TQ._TempBufferInt32View[3] = qQ, this.updateUniform(QQ, TQ._TempBuffer, 4)
      }
      _updateUIntForEffect(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(QQ + XQ, WQ)
      }
      _updateUIntForUniform(QQ, WQ) {
        TQ._TempBufferUInt32View[0] = WQ, this.updateUniform(QQ, TQ._TempBuffer, 1)
      }
      _updateUInt2ForEffect(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(QQ + wQ, WQ, XQ)
      }
      _updateUInt2ForUniform(QQ, WQ, XQ) {
        TQ._TempBufferUInt32View[0] = WQ, TQ._TempBufferUInt32View[1] = XQ, this.updateUniform(QQ, TQ._TempBuffer, 2)
      }
      _updateUInt3ForEffect(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(QQ + qQ, WQ, XQ, wQ)
      }
      _updateUInt3ForUniform(QQ, WQ, XQ, wQ) {
        TQ._TempBufferUInt32View[0] = WQ, TQ._TempBufferUInt32View[1] = XQ, TQ._TempBufferUInt32View[2] = wQ, this.updateUniform(QQ, TQ._TempBuffer, 3)
      }
      _updateUInt4ForEffect(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(QQ + TQ, WQ, XQ, wQ, qQ)
      }
      _updateUInt4ForUniform(QQ, WQ, XQ, wQ, qQ) {
        TQ._TempBufferUInt32View[0] = WQ, TQ._TempBufferUInt32View[1] = XQ, TQ._TempBufferUInt32View[2] = wQ, TQ._TempBufferUInt32View[3] = qQ, this.updateUniform(QQ, TQ._TempBuffer, 4)
      }
      setTexture(QQ, WQ) {
        this._currentEffect.setTexture(QQ, WQ)
      }
      setTextureArray(QQ, WQ) {
        this._currentEffect.setTextureArray(QQ, WQ)
      }
      bindTexture(QQ, WQ) {
        this._currentEffect._bindTexture(QQ, WQ)
      }
      updateUniformDirectly(QQ, WQ) {
        this.updateUniform(QQ, WQ, WQ.length), this.update()
      }
      bindToEffect(QQ, WQ) {
        this._currentEffect = QQ, this._currentEffectName = WQ
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(QQ) {
        if (!this._buffers) return this._buffer === QQ;
        for (let WQ = 0; WQ < this._buffers.length; ++WQ) {
          if (this._buffers[WQ][0] === QQ) return this._bufferIndex = WQ, this._buffer = QQ, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[WQ][1] && (this._bufferData.set(this._buffers[WQ][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(QQ) {
        return void 0 !== this._uniformLocations[QQ]
      }
      dispose() {
        if (this._noUBO) return;
        const QQ = this._engine._uniformBuffers,
          WQ = QQ.indexOf(this);
        if (-1 !== WQ && (QQ[WQ] = QQ[QQ.length - 1], QQ.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let QQ = 0; QQ < this._buffers.length; ++QQ) {
            const WQ = this._buffers[QQ][0];
            this._engine._releaseBuffer(WQ)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    TQ._MAX_UNIFORM_SIZE = 256, TQ._TempBuffer = new Float32Array(TQ._MAX_UNIFORM_SIZE), TQ._TempBufferInt32View = new Int32Array(TQ._TempBuffer.buffer), TQ._TempBufferUInt32View = new Uint32Array(TQ._TempBuffer.buffer)
  },
  40193: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => qQ
    });
    var wQ = XQ(40199);
    class qQ extends wQ.b {
      constructor(QQ) {
        super(), this._buffer = QQ
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  40272: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => FQ,
      g: () => PQ
    });
    const wQ = "__bjs_serializable__",
      qQ = new WeakMap;

    function TQ(QQ, WQ) {
      return Object.prototype.hasOwnProperty.call(QQ, WQ)
    }
    const zQ = function() {
      let QQ = Symbol.metadata;
      return QQ || (QQ = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: QQ
      })), QQ
    }();

    function sQ(QQ) {
      return "function" === typeof QQ ? QQ : QQ?.constructor
    }

    function FQ(QQ) {
      if (!QQ) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(zQ)}) polyfill must run before decorated classes are evaluated.`);
      return TQ(QQ, wQ) || (QQ[wQ] = {}), QQ[wQ]
    }

    function PQ(QQ) {
      const WQ = sQ(QQ),
        XQ = WQ ? WQ[zQ] : void 0;
      if (!XQ) return {};
      const FQ = qQ.get(XQ);
      if (FQ) return FQ;
      const PQ = {},
        gQ = [];
      let JQ = XQ;
      for (; JQ;) gQ.push(JQ), JQ = Object.getPrototypeOf(JQ);
      for (const qQ of gQ)
        if (TQ(qQ, wQ)) {
          const QQ = qQ[wQ];
          for (const WQ in QQ) PQ[WQ] = QQ[WQ]
        } return qQ.set(XQ, PQ), PQ
    }
  },
  40268: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      D: () => gQ,
      F: () => JQ,
      I: () => zQ,
      b: () => pQ,
      e: () => TQ,
      g: () => DQ,
      i: () => IQ,
      l: () => FQ,
      p: () => jQ,
      r: () => PQ,
      t: () => yQ,
      w: () => rQ,
      x: () => BQ,
      z: () => sQ
    });
    var wQ = XQ(40272);

    function qQ(QQ, WQ) {
      return (XQ, qQ) => {
        if (!qQ.metadata) return;
        const TQ = String(qQ.name),
          zQ = (0, wQ.e)(qQ.metadata);
        zQ[TQ] || (zQ[TQ] = {
          type: QQ,
          sourceName: WQ
        })
      }
    }

    function TQ(QQ) {
      return function(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (XQ, wQ) => {
          const qQ = WQ || "_" + String(wQ.name);
          return {
            init(QQ) {
              return void 0 === QQ && qQ in this || (this[qQ] = QQ), QQ
            },
            get() {
              return this[qQ]
            },
            set(WQ) {
              "function" === typeof this[qQ]?.equals && this[qQ].equals(WQ) || this[qQ] !== WQ && (this[qQ] = WQ, this[QQ]())
            }
          }
        }
      }(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function zQ(QQ) {
      return qQ(0, QQ)
    }

    function sQ(QQ) {
      return qQ(1, QQ)
    }

    function FQ(QQ) {
      return qQ(2, QQ)
    }

    function PQ(QQ) {
      return qQ(3, QQ)
    }

    function gQ(QQ) {
      return qQ(4, QQ)
    }

    function JQ(QQ) {
      return qQ(5, QQ)
    }

    function rQ(QQ) {
      return qQ(6, QQ)
    }

    function IQ(QQ) {
      return qQ(7, QQ)
    }

    function jQ(QQ) {
      return qQ(8, QQ)
    }

    function BQ(QQ) {
      return qQ(10, QQ)
    }

    function yQ(QQ) {
      return qQ(12, QQ)
    }

    function VQ(QQ, WQ, XQ) {
      const wQ = String(WQ.name);
      let qQ = null;
      const TQ = function() {
        if (null === qQ) {
          qQ = QQ, "undefined" !== typeof _native && _native[wQ] && (qQ = XQ(_native[wQ], QQ));
          const zQ = this && (WQ.static ? this : Object.getPrototypeOf(this));
          zQ?.[wQ] === TQ && (zQ[wQ] = qQ)
        }
        for (var zQ = arguments.length, sQ = new Array(zQ), FQ = 0; FQ < zQ; FQ++) sQ[FQ] = arguments[FQ];
        return qQ.apply(this, sQ)
      };
      return TQ
    }

    function DQ(QQ, WQ) {
      return VQ(QQ, WQ, (QQ => QQ))
    }

    function pQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (XQ, wQ) => {
        const qQ = WQ || "_" + String(wQ.name);
        return {
          get() {
            return this[qQ]?.value
          },
          set(WQ) {
            "function" === typeof this[qQ]?.value?.equals && this[qQ].value.equals(WQ) || this[qQ].value !== WQ && (this[qQ].value = WQ, this[QQ]())
          }
        }
      }
    }
    DQ.filter = function(QQ) {
      return (WQ, XQ) => VQ(WQ, XQ, ((WQ, XQ) => function() {
        for (var wQ = arguments.length, qQ = new Array(wQ), TQ = 0; TQ < wQ; TQ++) qQ[TQ] = arguments[TQ];
        return QQ(...qQ) ? WQ(...qQ) : XQ.apply(this, qQ)
      }))
    }
  },
  40286: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => PQ
    });
    var wQ = XQ(40153),
      qQ = XQ(40290),
      TQ = XQ(37546),
      zQ = XQ(37370),
      sQ = XQ(40272);
    const FQ = function(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const TQ = QQ();
      qQ.d && qQ.d.HasTags(WQ) && qQ.d.AddTagsTo(TQ, qQ.d.GetTags(WQ, !0));
      const zQ = (0, sQ.g)(TQ),
        FQ = {};
      for (const qQ in zQ) {
        const QQ = zQ[qQ],
          sQ = WQ[qQ],
          gQ = QQ.type;
        if (void 0 !== sQ && null !== sQ && ("uniqueId" !== qQ || PQ.AllowLoadingUniqueId)) switch (gQ) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof sQ.slice ? TQ[qQ] = sQ.slice() : TQ[qQ] = sQ;
            break;
          case 1:
            wQ.cloneTexturesOnlyOnce && FQ[sQ.uniqueId] ? TQ[qQ] = FQ[sQ.uniqueId] : (TQ[qQ] = XQ || sQ.isRenderTarget ? sQ : sQ.clone(), FQ[sQ.uniqueId] = TQ[qQ]);
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
            TQ[qQ] = XQ ? sQ : sQ.clone()
        }
      }
      return TQ
    };
    class PQ {
      static AppendSerializedAnimations(QQ, WQ) {
        if (QQ.animations) {
          WQ.animations = [];
          for (let XQ = 0; XQ < QQ.animations.length; XQ++) {
            const wQ = QQ.animations[XQ];
            WQ.animations.push(wQ.serialize())
          }
        }
      }
      static Serialize(QQ, WQ) {
        WQ || (WQ = {}), qQ.d && (WQ.tags = qQ.d.GetTags(QQ));
        const XQ = (0, sQ.g)(QQ);
        for (const wQ in XQ) {
          const qQ = XQ[wQ],
            TQ = qQ.sourceName || wQ,
            zQ = qQ.type,
            sQ = QQ[wQ];
          if (void 0 !== sQ && null !== sQ && ("uniqueId" !== wQ || PQ.AllowLoadingUniqueId)) switch (zQ) {
            case 0:
              Array.isArray(sQ) ? WQ[TQ] = sQ.slice() : WQ[TQ] = sQ;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              WQ[TQ] = sQ.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              WQ[TQ] = sQ.awQ();
              break;
            case 6:
            case 11:
              WQ[TQ] = sQ.id
          }
        }
        return WQ
      }
      static ParseProperties(QQ, WQ, XQ, wQ) {
        wQ || (wQ = "");
        const qQ = (0, sQ.g)(WQ);
        for (const sQ in qQ) {
          const FQ = qQ[sQ],
            gQ = QQ[FQ.sourceName || sQ],
            JQ = FQ.type;
          if (void 0 !== gQ && null !== gQ && ("uniqueId" !== sQ || PQ.AllowLoadingUniqueId)) {
            const QQ = WQ;
            switch (JQ) {
              case 0:
                QQ[sQ] = gQ;
                break;
              case 1:
                XQ && (QQ[sQ] = PQ._TextureParser(gQ, XQ, wQ));
                break;
              case 2:
                QQ[sQ] = TQ.b.FromArray(gQ);
                break;
              case 3:
                QQ[sQ] = PQ._FresnelParametersParser(gQ);
                break;
              case 4:
                QQ[sQ] = zQ.q.FromArray(gQ);
                break;
              case 5:
                QQ[sQ] = zQ.s.FromArray(gQ);
                break;
              case 6:
                XQ && (QQ[sQ] = XQ.getLastMeshById(gQ));
                break;
              case 7:
                QQ[sQ] = PQ._ColorCurvesParser(gQ);
                break;
              case 8:
                QQ[sQ] = TQ.d.FromArray(gQ);
                break;
              case 9:
                QQ[sQ] = PQ._ImageProcessingConfigurationParser(gQ);
                break;
              case 10:
                QQ[sQ] = zQ.h.FromArray(gQ);
                break;
              case 11:
                XQ && (QQ[sQ] = XQ.getCameraById(gQ));
                break;
              case 12:
                QQ[sQ] = zQ.e.FromArray(gQ);
                break;
              case 13:
                QQ[sQ] = zQ.w.FromArray(gQ)
            }
          }
        }
      }
      static Parse(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const TQ = QQ();
        return qQ.d && qQ.d.AddTagsTo(TQ, WQ.tags), PQ.ParseProperties(WQ, TQ, XQ, wQ), TQ
      }
      static Clone(QQ, WQ) {
        return FQ(QQ, WQ, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(QQ, WQ) {
        return FQ(QQ, WQ, !0)
      }
    }
    PQ.AllowLoadingUniqueId = !1, PQ._ImageProcessingConfigurationParser = QQ => {
      throw (0, wQ.i)("ImageProcessingConfiguration")
    }, PQ._FresnelParametersParser = QQ => {
      throw (0, wQ.i)("FresnelParameters")
    }, PQ._ColorCurvesParser = QQ => {
      throw (0, wQ.i)("ColorCurves")
    }, PQ._TextureParser = (QQ, WQ, XQ) => {
      throw (0, wQ.i)("Texture")
    }
  },
  40221: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ
    });
    var wQ = XQ(40178);
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
      addCount(QQ, WQ) {
        qQ.Enabled && (this._current += QQ, this._hasCurrentValue = !0, WQ && this._fetchResult())
      }
      beginMonitoring() {
        qQ.Enabled && (this._startMonitoringTime = wQ.e.Now)
      }
      endMonitoring() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!qQ.Enabled) return;
        QQ && this.fetchNewFrame();
        const WQ = wQ.e.Now;
        this._current = WQ - this._startMonitoringTime, this._hasCurrentValue = !0, QQ && this._fetchResult()
      }
      dD() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const QQ = wQ.e.Now;
        QQ - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = QQ, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    qQ.Enabled = !0
  },
  40371: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ,
      e: () => wQ
    });
    class wQ {
      constructor(QQ) {
        this.length = 0, this.data = new Array(QQ), this._id = wQ._GlobalId++
      }
      push(QQ) {
        this.data[this.length++] = QQ, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(QQ) {
        for (let WQ = 0; WQ < this.length; WQ++) QQ(this.data[WQ])
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
          for (let WQ = 0; WQ < QQ.length; WQ++) this.data[this.length++] = (QQ.data || QQ)[WQ]
        }
      }
      indexOf(QQ) {
        const WQ = this.data.indexOf(QQ);
        return WQ >= this.length ? -1 : WQ
      }
      contains(QQ) {
        return -1 !== this.indexOf(QQ)
      }
    }
    wQ._GlobalId = 0;
    class qQ extends wQ {
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
          for (let WQ = 0; WQ < QQ.length; WQ++) {
            const XQ = (QQ.data || QQ)[WQ];
            this.pushNoDuplicate(XQ)
          }
        }
      }
    }
  },
  40290: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ
    });
    class wQ {
      static Eval(QQ, WQ) {
        return "true" === (QQ = QQ.match(/\([^()]*\)/g) ? QQ.replace(/\([^()]*\)/g, (QQ => (QQ = QQ.slice(1, QQ.length - 1), wQ._HandleParenthesisContent(QQ, WQ)))) : wQ._HandleParenthesisContent(QQ, WQ)) || "false" !== QQ && wQ.Eval(QQ, WQ)
      }
      static _HandleParenthesisContent(QQ, WQ) {
        let XQ;
        WQ = WQ || (QQ => "true" === QQ);
        const qQ = QQ.split("||");
        for (const TQ in qQ)
          if (Object.prototype.hasOwnProperty.call(qQ, TQ)) {
            let QQ = wQ._SimplifyNegation(qQ[TQ].trim());
            const zQ = QQ.split("&&");
            if (zQ.length > 1)
              for (let qQ = 0; qQ < zQ.length; ++qQ) {
                const TQ = wQ._SimplifyNegation(zQ[qQ].trim());
                if (XQ = "true" !== TQ && "false" !== TQ ? "!" === TQ[0] ? !WQ(TQ.substring(1)) : WQ(TQ) : "true" === TQ, !XQ) {
                  QQ = "false";
                  break
                }
              }
            if (XQ || "true" === QQ) {
              XQ = !0;
              break
            }
            XQ = "true" !== QQ && "false" !== QQ ? "!" === QQ[0] ? !WQ(QQ.substring(1)) : WQ(QQ) : "true" === QQ
          } return XQ ? "true" : "false"
      }
      static _SimplifyNegation(QQ) {
        return "!true" === (QQ = (QQ = QQ.replace(/^[\s!]+/, (QQ => (QQ = QQ.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? QQ = "false" : "!false" === QQ && (QQ = "true"), QQ
      }
    }
    class qQ {
      static EnableFor(QQ) {
        QQ._tags = QQ._tags || {}, QQ.hasTags = () => qQ.HasTags(QQ), QQ.addTags = WQ => qQ.AddTagsTo(QQ, WQ), QQ.removeTags = WQ => qQ.RemoveTagsFrom(QQ, WQ), QQ.matchesTagsQuery = WQ => qQ.MatchesQuery(QQ, WQ)
      }
      static DisableFor(QQ) {
        delete QQ._tags, delete QQ.hasTags, delete QQ.addTags, delete QQ.removeTags, delete QQ.matchesTagsQuery
      }
      static HasTags(QQ) {
        if (!QQ._tags) return !1;
        const WQ = QQ._tags;
        for (const XQ in WQ)
          if (Object.prototype.hasOwnProperty.call(WQ, XQ)) return !0;
        return !1
      }
      static GetTags(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!QQ._tags) return null;
        if (WQ) {
          const WQ = [];
          for (const XQ in QQ._tags) Object.prototype.hasOwnProperty.call(QQ._tags, XQ) && !0 === QQ._tags[XQ] && WQ.push(XQ);
          return WQ.join(" ")
        }
        return QQ._tags
      }
      static AddTagsTo(QQ, WQ) {
        if (!WQ) return;
        if ("string" !== typeof WQ) return;
        const XQ = WQ.split(" ");
        for (const wQ of XQ) qQ._AddTagTo(QQ, wQ)
      }
      static _AddTagTo(QQ, WQ) {
        "" !== (WQ = WQ.trim()) && "true" !== WQ && "false" !== WQ && (WQ.match(/[\s]/) || WQ.match(/^([!]|([|]|[&]){2})/) || (qQ.EnableFor(QQ), QQ._tags[WQ] = !0))
      }
      static RemoveTagsFrom(QQ, WQ) {
        if (!qQ.HasTags(QQ)) return;
        const XQ = WQ.split(" ");
        for (const wQ in XQ) qQ._RemoveTagFrom(QQ, XQ[wQ])
      }
      static _RemoveTagFrom(QQ, WQ) {
        delete QQ._tags[WQ]
      }
      static MatchesQuery(QQ, WQ) {
        return void 0 === WQ || ("" === WQ ? qQ.HasTags(QQ) : wQ.Eval(WQ, (WQ => qQ.HasTags(QQ) && QQ._tags[WQ])))
      }
    }
  },
  40406: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(40404),
      qQ = XQ(37399);
    class TQ {
      constructor(QQ) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new qQ.b, this._scene = QQ
      }
      _prepareBuffers() {
        if (this._vertexBuffers[wQ.l.PositionKind]) return;
        const QQ = [];
        QQ.push(1, 1), QQ.push(-1, 1), QQ.push(-1, -1), QQ.push(1, -1), this._vertexBuffers[wQ.l.PositionKind] = new wQ.l(this._scene.Uj(), QQ, wQ.l.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const QQ = [];
        QQ.push(0), QQ.push(1), QQ.push(2), QQ.push(0), QQ.push(2), QQ.push(3), this._indexBuffer = this._scene.Uj().createIndexBuffer(QQ)
      }
      _getActivePostProcesses(QQ) {
        const WQ = this._activePostProcesses;
        WQ.length = 0;
        for (let XQ = 0; XQ < QQ.length; XQ++) {
          const wQ = QQ[XQ];
          wQ && WQ.push(wQ)
        }
        return WQ
      }
      _rebuild() {
        const QQ = this._vertexBuffers[wQ.l.PositionKind];
        QQ && (QQ._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const XQ = this._scene.activeCamera;
        return !!XQ && (WQ = WQ || this._getActivePostProcesses(XQ._postProcesses), !(!WQ || 0 === WQ.length || !this._scene.postProcessesEnabled) && (WQ[0].activate(XQ, QQ, null !== WQ && void 0 !== WQ), !0))
      }
      directRender(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          TQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          zQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : QQ.length;
        const sQ = this._scene.Uj();
        for (let FQ = 0; FQ < zQ; FQ++) {
          FQ < QQ.length - 1 ? QQ[FQ + 1].activate(this._scene.activeCamera || this._scene, WQ?.texture) : (WQ ? sQ.bindFramebuffer(WQ, wQ, void 0, void 0, XQ, qQ) : TQ || sQ.restoreDefaultFramebuffer(), sQ._debugInsertMarker?.(`post process ${QQ[FQ].name} output`));
          const zQ = QQ[FQ],
            PQ = zQ.apply();
          PQ && (zQ.onBeforeRenderObservable.notifyObservers(PQ), this._prepareBuffers(), sQ.bindBuffers(this._vertexBuffers, this._indexBuffer, PQ), sQ.drawElementsType(0, 0, 6), zQ.onAfterRenderObservable.notifyObservers(PQ))
        }
        sQ.setDepthBuffer(!0), sQ.setDepthWrite(!0)
      }
      _finalizeFrame(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const TQ = this._scene.activeCamera;
        if (!TQ) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (wQ = wQ || this._getActivePostProcesses(TQ._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const zQ = this._scene.Uj();
        for (let sQ = 0, FQ = wQ.length; sQ < FQ; sQ++) {
          const PQ = wQ[sQ];
          if (sQ < FQ - 1 ? PQ._outputTexture = wQ[sQ + 1].activate(TQ, WQ?.texture) : (WQ ? (zQ.bindFramebuffer(WQ, XQ, void 0, void 0, qQ), PQ._outputTexture = WQ) : (zQ.restoreDefaultFramebuffer(), PQ._outputTexture = null), zQ._debugInsertMarker?.(`post process ${wQ[sQ].name} output`)), QQ) break;
          const gQ = PQ.apply();
          gQ && (PQ.onBeforeRenderObservable.notifyObservers(gQ), this._prepareBuffers(), zQ.bindBuffers(this._vertexBuffers, this._indexBuffer, gQ), zQ.drawElementsType(0, 0, 6), PQ.onAfterRenderObservable.notifyObservers(gQ))
        }
        zQ.setDepthBuffer(!0), zQ.setDepthWrite(!0), zQ.setAlphaMode(0)
      }
      dispose() {
        const QQ = this._vertexBuffers[wQ.l.PositionKind];
        QQ && (QQ.dispose(), this._vertexBuffers[wQ.l.PositionKind] = null), this._indexBuffer && (this._scene.Uj()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  40428: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => PQ
    });
    var wQ = XQ(40371),
      qQ = XQ(37370);
    const TQ = [],
      zQ = [];
    let sQ = !1;

    function FQ(QQ, WQ) {
      for (; QQ.length < WQ;) QQ.push(void 0)
    }
    class PQ {
      set opaqueSortCompareFn(QQ) {
        this._opaqueSortCompareFn = QQ || PQ.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(QQ) {
        this._alphaTestSortCompareFn = QQ || PQ.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(QQ) {
        this._transparentSortCompareFn = QQ || PQ.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          TQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = QQ, this._opaqueSubMeshes = new wQ.e(256), this._transparentSubMeshes = new wQ.e(256), this._alphaTestSubMeshes = new wQ.e(256), this._depthOnlySubMeshes = new wQ.e(256), this._particleSystems = new wQ.e(256), this._spriteManagers = new wQ.e(256), this._empty = !0, this._edgesRenderers = new wQ.d(16), this.disableDepthPrePass = !1, this._scene = WQ, this.opaqueSortCompareFn = XQ, this.alphaTestSortCompareFn = qQ, this.transparentSortCompareFn = TQ
      }
      render(QQ, WQ, XQ, wQ) {
        let qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          TQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          zQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          sQ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          FQ = arguments.length > 8 ? arguments[8] : void 0;
        if (QQ) return void QQ(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const PQ = this._scene.Uj();
        qQ && 0 !== this._depthOnlySubMeshes.length && (PQ.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), PQ.setColorWrite(!0)), TQ && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), zQ && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const gQ = PQ.getStencilBuffer();
        if (PQ.setStencilBuffer(!1), WQ && this._renderSprites(), XQ && this._renderParticles(wQ), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), sQ && (FQ || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (PQ.setStencilBuffer(gQ), FQ) FQ(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const QQ = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            QQ.length && this._renderTransparent(QQ)
          } else this._renderTransparent(this._transparentSubMeshes);
          PQ.setAlphaMode(0)
        }
        if (PQ.setStencilBuffer(!1), TQ && this._edgesRenderers.length) {
          for (let QQ = 0; QQ < this._edgesRenderers.length; QQ++) this._edgesRenderers.data[QQ].render();
          PQ.setAlphaMode(0)
        }
        PQ.setStencilBuffer(gQ)
      }
      _renderOpaqueSorted(QQ) {
        PQ._RenderSorted(QQ, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(QQ) {
        PQ._RenderSorted(QQ, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(QQ) {
        PQ._RenderSorted(QQ, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(QQ, WQ, XQ, wQ, TQ) {
        let gQ, JQ = 0;
        const rQ = XQ ? XQ.globalPosition : PQ._ZeroVector;
        if (wQ && WQ !== PQ.PainterSortCompare)
          for (; JQ < QQ.length; JQ++) gQ = QQ.data[JQ], gQ._alphaIndex = gQ.getMesh().alphaIndex, gQ._distanceToCamera = qQ.s.Distance(gQ.uC().mwQ.centerWorld, rQ);
        const IQ = QQ.length;
        let jQ = QQ.data;
        const BQ = IQ !== jQ.length && !sQ;
        if (BQ) {
          for (sQ = !0, FQ(zQ, IQ), JQ = 0; JQ < IQ; JQ++) zQ[JQ] = jQ[JQ];
          jQ = zQ
        } else IQ !== jQ.length && (jQ = jQ.slice(0, IQ));
        try {
          WQ && PQ._StableSort(jQ, IQ, WQ), PQ._DrawSorted(jQ, IQ, wQ, TQ)
        } finally {
          BQ && (zQ.fill(void 0, 0, IQ), sQ = !1)
        }
      }
      static _DrawSorted(QQ, WQ, XQ, wQ) {
        let qQ;
        const TQ = QQ[0].getMesh().sE();
        for (let zQ = 0; zQ < WQ; zQ++) {
          if (qQ = QQ[zQ], TQ._activeMeshesFrozenButKeepClipping && !qQ.isInFrustum(TQ._frustumPlanes)) continue;
          let WQ = !1;
          if (XQ) {
            const QQ = qQ.lj();
            if (QQ && QQ.needDepthPrePass && !wQ) {
              WQ = !0;
              const XQ = QQ.sE().Uj();
              XQ.setColorWrite(!1), XQ.setAlphaMode(0), qQ.render(!1), XQ.setColorWrite(!0)
            }
          }
          const sQ = qQ._renderingMesh;
          !WQ && sQ._renderRunFollower(qQ, XQ) || qQ.render(XQ)
        }
      }
      static _StableSort(QQ, WQ, XQ) {
        for (let wQ = 0; wQ < WQ; wQ += 16) {
          const qQ = Math.min(wQ + 16, WQ);
          for (let WQ = wQ + 1; WQ < qQ; WQ++) {
            const qQ = QQ[WQ];
            let TQ = wQ,
              zQ = WQ;
            for (; TQ < zQ;) {
              const WQ = TQ + zQ >>> 1;
              XQ(qQ, QQ[WQ]) < 0 ? zQ = WQ : TQ = WQ + 1
            }
            for (let XQ = WQ; XQ > TQ; XQ--) QQ[XQ] = QQ[XQ - 1];
            QQ[TQ] = qQ
          }
        }
        if (!(WQ <= 16)) {
          FQ(TQ, WQ);
          try {
            let wQ = QQ,
              qQ = TQ;
            for (let QQ = 16; QQ < WQ; QQ *= 2) {
              for (let zQ = 0; zQ < WQ; zQ += 2 * QQ) {
                const TQ = Math.min(zQ + QQ, WQ),
                  sQ = Math.min(zQ + 2 * QQ, WQ);
                let FQ = zQ,
                  PQ = TQ,
                  gQ = zQ;
                if (TQ < sQ && XQ(wQ[TQ], wQ[TQ - 1]) < 0)
                  for (; FQ < TQ && PQ < sQ;) qQ[gQ++] = XQ(wQ[PQ], wQ[FQ]) < 0 ? wQ[PQ++] : wQ[FQ++];
                for (; FQ < TQ;) qQ[gQ++] = wQ[FQ++];
                for (; PQ < sQ;) qQ[gQ++] = wQ[PQ++]
              }
              const TQ = qQ;
              qQ = wQ, wQ = TQ
            }
            if (wQ !== QQ)
              for (let XQ = 0; XQ < WQ; XQ++) QQ[XQ] = wQ[XQ]
          } finally {
            TQ.fill(void 0, 0, WQ)
          }
        }
      }
      static defaultTransparentSortCompare(QQ, WQ) {
        return QQ._alphaIndex > WQ._alphaIndex ? 1 : QQ._alphaIndex < WQ._alphaIndex ? -1 : PQ.backToFrontSortCompare(QQ, WQ)
      }
      static backToFrontSortCompare(QQ, WQ) {
        return QQ._distanceToCamera < WQ._distanceToCamera ? 1 : QQ._distanceToCamera > WQ._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(QQ, WQ) {
        return QQ._distanceToCamera < WQ._distanceToCamera ? -1 : QQ._distanceToCamera > WQ._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(QQ, WQ) {
        const XQ = QQ.getMesh(),
          wQ = WQ.getMesh();
        return XQ.material && wQ.material ? XQ.material.uniqueId - wQ.material.uniqueId : XQ.uniqueId - wQ.uniqueId
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
      dispatch(QQ, WQ, XQ) {
        void 0 === WQ && (WQ = QQ.getMesh()), void 0 === XQ && (XQ = QQ.lj()), null !== XQ && void 0 !== XQ && (XQ.needAlphaBlendingForMesh(WQ) ? this._transparentSubMeshes.push(QQ) : XQ.needAlphaTestingForMesh(WQ) ? (XQ.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(QQ), this._alphaTestSubMeshes.push(QQ)) : (XQ.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(QQ), this._opaqueSubMeshes.push(QQ)), WQ._renderingGroup = this, WQ._edgesRenderer && WQ.isEnabled() && WQ.isVisible && WQ._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(WQ._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(QQ) {
        this._spriteManagers.push(QQ), this._empty = !1
      }
      dispatchParticles(QQ) {
        this._particleSystems.push(QQ), this._empty = !1
      }
      _renderParticles(QQ) {
        if (0 === this._particleSystems.length) return;
        const WQ = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let XQ = 0; XQ < this._particleSystems.length; XQ++) {
          const wQ = this._particleSystems.data[XQ];
          if (0 === (WQ && WQ.layerMask & wQ.layerMask)) continue;
          const qQ = wQ.emitter;
          qQ.position && QQ && -1 === QQ.indexOf(qQ) || this._scene._activeParticles.addCount(wQ.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const QQ = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let WQ = 0; WQ < this._spriteManagers.length; WQ++) {
          const XQ = this._spriteManagers.data[WQ];
          0 !== (QQ && QQ.layerMask & XQ.layerMask) && XQ.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    PQ._ZeroVector = qQ.s.Zero()
  },
  40422: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => TQ
    });
    var wQ = XQ(40428);
    class qQ {}
    class TQ {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(QQ) {
        this._disableDepthPrePass = QQ;
        for (const WQ of this._renderingGroups) WQ.disableDepthPrePass = QQ
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(QQ) {
        QQ !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = QQ, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const QQ of this._scene.meshes)
          if (QQ.ZD)
            for (const WQ of QQ.ZD) WQ._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const QQ of this._scene.spriteManagers) QQ._wasDispatched = !1;
        for (const QQ of this._scene.KD) QQ._wasDispatched = !1
      }
      constructor(QQ) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new qQ, this._maintainStateBetweenFrames = !1, this._scene = QQ;
        for (let WQ = TQ.MIN_RENDERINGGROUPS; WQ < TQ.MAX_RENDERINGGROUPS; WQ++) this._autoClearDepthStencil[WQ] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(QQ) {
        const WQ = QQ || 0;
        return this._prepareRenderingGroup(WQ), this._renderingGroups[WQ]
      }
      _clearDepthStencilBuffer() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.Uj().clear(null, !1, QQ, WQ), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(QQ, WQ, XQ, wQ) {
        let qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          zQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          sQ = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          FQ = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          PQ = arguments.length > 8 ? arguments[8] : void 0,
          gQ = arguments.length > 9 ? arguments[9] : void 0;
        const JQ = this._renderingGroupInfo;
        JQ.cB = this._scene, JQ.camera = this._scene.activeCamera, JQ.renderingManager = this;
        const rQ = gQ ?? this._scene.spriteManagers;
        if (rQ && wQ)
          for (let TQ = 0; TQ < rQ.length; TQ++) {
            const QQ = rQ[TQ];
            this.dispatchSprites(QQ)
          }
        for (let IQ = TQ.MIN_RENDERINGGROUPS; IQ < TQ.MAX_RENDERINGGROUPS; IQ++) {
          this._depthStencilBufferAlreadyCleaned = IQ === TQ.MIN_RENDERINGGROUPS;
          const gQ = this._renderingGroups[IQ];
          if (!gQ || gQ._empty) continue;
          const rQ = 1 << IQ;
          if (JQ.renderingGroupId = IQ, this._scene.onBeforeRenderingGroupObservable.notifyObservers(JQ, rQ), TQ.AUTOCLEAR) {
            const QQ = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(IQ) : this._autoClearDepthStencil[IQ];
            QQ && QQ.autoClear && this._clearDepthStencilBuffer(QQ.depth, QQ.stencil)
          }
          for (let QQ = 0, WQ = this._scene._beforeRenderingGroupDrawStage; QQ < WQ.length; QQ++) {
            WQ[QQ].action(IQ)
          }
          gQ.render(QQ, wQ, XQ, WQ, qQ, zQ, sQ, FQ, PQ);
          for (let QQ = 0, WQ = this._scene._afterRenderingGroupDrawStage; QQ < WQ.length; QQ++) {
            WQ[QQ].action(IQ)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(JQ, rQ)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let QQ = TQ.MIN_RENDERINGGROUPS; QQ < TQ.MAX_RENDERINGGROUPS; QQ++) {
            const WQ = this._renderingGroups[QQ];
            WQ && WQ.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let QQ = TQ.MIN_RENDERINGGROUPS; QQ < TQ.MAX_RENDERINGGROUPS; QQ++) {
            const WQ = this._renderingGroups[QQ];
            WQ && WQ.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let QQ = TQ.MIN_RENDERINGGROUPS; QQ < TQ.MAX_RENDERINGGROUPS; QQ++) {
          const WQ = this._renderingGroups[QQ];
          WQ && WQ.dispose()
        }
      }
      _prepareRenderingGroup(QQ) {
        void 0 === this._renderingGroups[QQ] && (this._renderingGroups[QQ] = new wQ.e(QQ, this._scene, this._customOpaqueSortCompareFn[QQ], this._customAlphaTestSortCompareFn[QQ], this._customTransparentSortCompareFn[QQ]), this._renderingGroups[QQ].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(QQ) {
        this.maintainStateBetweenFrames && QQ._wasDispatched || (QQ._wasDispatched = !0, this.getRenderingGroup(QQ.renderingGroupId).dispatchSprites(QQ))
      }
      dispatchParticles(QQ) {
        this.maintainStateBetweenFrames && QQ._wasDispatched || (QQ._wasDispatched = !0, this.getRenderingGroup(QQ.renderingGroupId).dispatchParticles(QQ))
      }
      dispatch(QQ, WQ, XQ) {
        void 0 === WQ && (WQ = QQ.getMesh()), this.maintainStateBetweenFrames && QQ._wasDispatched || (QQ._wasDispatched = !0, this.getRenderingGroup(WQ.renderingGroupId).dispatch(QQ, WQ, XQ))
      }
      setRenderingOrder(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[QQ] = WQ, this._customAlphaTestSortCompareFn[QQ] = XQ, this._customTransparentSortCompareFn[QQ] = wQ, this._renderingGroups[QQ]) {
          const WQ = this._renderingGroups[QQ];
          WQ.opaqueSortCompareFn = this._customOpaqueSortCompareFn[QQ], WQ.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[QQ], WQ.transparentSortCompareFn = this._customTransparentSortCompareFn[QQ]
        }
      }
      setRenderingAutoClearDepthStencil(QQ, WQ) {
        let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[QQ] = {
          autoClear: WQ,
          depth: XQ,
          stencil: wQ
        }
      }
      getAutoClearDepthStencilSetup(QQ) {
        return this._autoClearDepthStencil[QQ]
      }
    }
    TQ.MAX_RENDERINGGROUPS = 4, TQ.MIN_RENDERINGGROUPS = 0, TQ.AUTOCLEAR = !0
  },
  40182: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ
    });
    class wQ {
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
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[WQ] !== QQ && (QQ ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[WQ] = QQ, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(QQ, WQ, XQ, wQ) {
        this._blendConstants[0] === QQ && this._blendConstants[1] === WQ && this._blendConstants[2] === XQ && this._blendConstants[3] === wQ || (this._blendConstants[0] = QQ, this._blendConstants[1] = WQ, this._blendConstants[2] = XQ, this._blendConstants[3] = wQ, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(QQ, WQ, XQ, wQ) {
        const qQ = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[qQ + 0] === QQ && this._blendFunctionParameters[qQ + 1] === WQ && this._blendFunctionParameters[qQ + 2] === XQ && this._blendFunctionParameters[qQ + 3] === wQ || (this._blendFunctionParameters[qQ + 0] = QQ, this._blendFunctionParameters[qQ + 1] = WQ, this._blendFunctionParameters[qQ + 2] = XQ, this._blendFunctionParameters[qQ + 3] = wQ, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(QQ, WQ) {
        const XQ = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[XQ + 0] === QQ && this._blendEquationParameters[XQ + 1] === WQ || (this._blendEquationParameters[XQ + 0] = QQ, this._blendEquationParameters[XQ + 1] = WQ, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== WQ && (this._numTargets = WQ, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== XQ && (this._blendDisabledTargetsMask = XQ, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (QQ.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === WQ || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (WQ > 1 && 0 !== XQ && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & XQ) ? QQ.enable(QQ.BLEND) : QQ.disable(QQ.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (QQ.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (QQ.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const wQ = QQ;
        if (this._isAlphaBlendDirty) {
          for (let qQ = 0; qQ < WQ; qQ++) {
            const WQ = qQ < this._numTargetEnabled ? qQ : 0;
            this._alphaBlend[WQ] && 0 === (XQ & 1 << qQ) ? wQ.enableIndexed(QQ.BLEND, qQ) : wQ.disableIndexed(QQ.BLEND, qQ)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let QQ = 0; QQ < WQ; QQ++) {
            const WQ = QQ < this._numTargetEnabled ? 4 * QQ : 0;
            wQ.blendFuncSeparateIndexed(QQ, this._blendFunctionParameters[WQ + 0], this._blendFunctionParameters[WQ + 1], this._blendFunctionParameters[WQ + 2], this._blendFunctionParameters[WQ + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let QQ = 0; QQ < WQ; QQ++) {
            const WQ = QQ < this._numTargetEnabled ? 2 * QQ : 0;
            wQ.blendEquationSeparateIndexed(QQ, this._blendEquationParameters[WQ + 0], this._blendEquationParameters[WQ + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(QQ, WQ) {
        let XQ = 32774;
        switch (QQ) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, WQ);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, WQ);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, WQ);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, WQ);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, WQ);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, WQ);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, WQ);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, WQ);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, WQ);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, WQ);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, WQ);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, WQ);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, WQ);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, WQ);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, WQ);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, WQ);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, WQ), XQ = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, WQ), XQ = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, WQ);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, WQ)
        }
        this.setAlphaEquationParameters(XQ, XQ, WQ)
      }
    }
  },
  40462: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ
    });
    class wQ {}
    wQ._IsPickingAvailable = !1
  },
  40355: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => sX,
      h: () => TX
    });
    var wQ = XQ(40357),
      qQ = XQ(40164),
      TQ = XQ(40178),
      zQ = XQ(37399),
      sQ = XQ(40371);
    class FQ {
      constructor() {
        this._count = 0, this._data = {}
      }
      WH(QQ) {
        this.clear(), QQ.forEach(((QQ, WQ) => this.add(QQ, WQ)))
      }
      get(QQ) {
        const WQ = this._data[QQ];
        if (void 0 !== WQ) return WQ
      }
      getOrAddWithFactory(QQ, WQ) {
        let XQ = this.get(QQ);
        return void 0 !== XQ || (XQ = WQ(QQ), XQ && this.add(QQ, XQ)), XQ
      }
      getOrAdd(QQ, WQ) {
        const XQ = this.get(QQ);
        return void 0 !== XQ ? XQ : (this.add(QQ, WQ), WQ)
      }
      contains(QQ) {
        return void 0 !== this._data[QQ]
      }
      add(QQ, WQ) {
        return void 0 === this._data[QQ] && (this._data[QQ] = WQ, ++this._count, !0)
      }
      set(QQ, WQ) {
        return void 0 !== this._data[QQ] && (this._data[QQ] = WQ, !0)
      }
      getAndRemove(QQ) {
        const WQ = this.get(QQ);
        return void 0 !== WQ ? (delete this._data[QQ], --this._count, WQ) : null
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
        for (const WQ in this._data) {
          QQ(WQ, this._data[WQ])
        }
      }
      first(QQ) {
        for (const WQ in this._data) {
          const XQ = QQ(WQ, this._data[WQ]);
          if (XQ) return XQ
        }
        return null
      }
    }
    var PQ = XQ(40290),
      gQ = XQ(37370),
      JQ = XQ(40379),
      rQ = XQ(40400),
      IQ = XQ(40402);
    class jQ {
      constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
        this.source = QQ, this.pointerX = WQ, this.pointerY = XQ, this.meshUnderPointer = wQ, this.sourceEvent = qQ, this.additionalData = TQ
      }
      static CreateNew(QQ, WQ, XQ) {
        const wQ = QQ.sE();
        return new jQ(QQ, wQ.pointerX, wQ.pointerY, wQ.meshUnderPointer || QQ, WQ, XQ)
      }
      static CreateNewFromSprite(QQ, WQ, XQ, wQ) {
        return new jQ(QQ, WQ.pointerX, WQ.pointerY, WQ.meshUnderPointer, XQ, wQ)
      }
      static CreateNewFromScene(QQ, WQ) {
        return new jQ(null, QQ.pointerX, QQ.pointerY, QQ.meshUnderPointer, WQ)
      }
      static CreateNewFromPrimitive(QQ, WQ, XQ, wQ) {
        return new jQ(QQ, WQ.x, WQ.y, null, XQ, wQ)
      }
    }
    var BQ = XQ(40406),
      yQ = XQ(40414),
      VQ = XQ(40422),
      DQ = XQ(40432),
      pQ = XQ(40142),
      GQ = XQ(37392),
      UQ = XQ(40153),
      bQ = XQ(40436);
    class vQ {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const QQ in vQ.Triggers)
          if (Object.prototype.hasOwnProperty.call(vQ.Triggers, QQ)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const QQ in vQ.Triggers)
          if (Object.prototype.hasOwnProperty.call(vQ.Triggers, QQ)) {
            const WQ = parseInt(QQ);
            if (WQ >= 1 && WQ <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(QQ) {
        for (const WQ in vQ.Triggers)
          if (Object.prototype.hasOwnProperty.call(vQ.Triggers, WQ)) {
            if (parseInt(WQ) === QQ) return !0
          } return !1
      }
    }
    vQ.Triggers = {};
    var dQ, HQ, aQ, lQ, hQ, iQ, cQ, AQ = XQ(40445);
    ! function(QQ) {
      QQ[QQ.Generic = 0] = "Generic", QQ[QQ.Keyboard = 1] = "Keyboard", QQ[QQ.Mouse = 2] = "Mouse", QQ[QQ.Touch = 3] = "Touch", QQ[QQ.DualShock = 4] = "DualShock", QQ[QQ.Xbox = 5] = "Xbox", QQ[QQ.Switch = 6] = "Switch", QQ[QQ.DualSense = 7] = "DualSense"
    }(dQ || (dQ = {})),
    function(QQ) {
      QQ[QQ.Horizontal = 0] = "Horizontal", QQ[QQ.Vertical = 1] = "Vertical", QQ[QQ.LeftClick = 2] = "LeftClick", QQ[QQ.MiddleClick = 3] = "MiddleClick", QQ[QQ.RightClick = 4] = "RightClick", QQ[QQ.BrowserBack = 5] = "BrowserBack", QQ[QQ.BrowserForward = 6] = "BrowserForward", QQ[QQ.MouseWheelX = 7] = "MouseWheelX", QQ[QQ.MouseWheelY = 8] = "MouseWheelY", QQ[QQ.MouseWheelZ = 9] = "MouseWheelZ", QQ[QQ.Move = 12] = "Move"
    }(HQ || (HQ = {})),
    function(QQ) {
      QQ[QQ.Horizontal = 0] = "Horizontal", QQ[QQ.Vertical = 1] = "Vertical", QQ[QQ.LeftClick = 2] = "LeftClick", QQ[QQ.MiddleClick = 3] = "MiddleClick", QQ[QQ.RightClick = 4] = "RightClick", QQ[QQ.BrowserBack = 5] = "BrowserBack", QQ[QQ.BrowserForward = 6] = "BrowserForward", QQ[QQ.MouseWheelX = 7] = "MouseWheelX", QQ[QQ.MouseWheelY = 8] = "MouseWheelY", QQ[QQ.MouseWheelZ = 9] = "MouseWheelZ", QQ[QQ.DeltaHorizontal = 10] = "DeltaHorizontal", QQ[QQ.DeltaVertical = 11] = "DeltaVertical"
    }(aQ || (aQ = {})),
    function(QQ) {
      QQ[QQ.Cross = 0] = "Cross", QQ[QQ.Circle = 1] = "Circle", QQ[QQ.Square = 2] = "Square", QQ[QQ.Triangle = 3] = "Triangle", QQ[QQ.L1 = 4] = "L1", QQ[QQ.R1 = 5] = "R1", QQ[QQ.L2 = 6] = "L2", QQ[QQ.R2 = 7] = "R2", QQ[QQ.Share = 8] = "Share", QQ[QQ.Options = 9] = "Options", QQ[QQ.L3 = 10] = "L3", QQ[QQ.R3 = 11] = "R3", QQ[QQ.DPadUp = 12] = "DPadUp", QQ[QQ.DPadDown = 13] = "DPadDown", QQ[QQ.DPadLeft = 14] = "DPadLeft", QQ[QQ.DPadRight = 15] = "DPadRight", QQ[QQ.Home = 16] = "Home", QQ[QQ.TouchPad = 17] = "TouchPad", QQ[QQ.LStickXAxis = 18] = "LStickXAxis", QQ[QQ.LStickYAxis = 19] = "LStickYAxis", QQ[QQ.RStickXAxis = 20] = "RStickXAxis", QQ[QQ.RStickYAxis = 21] = "RStickYAxis"
    }(lQ || (lQ = {})),
    function(QQ) {
      QQ[QQ.Cross = 0] = "Cross", QQ[QQ.Circle = 1] = "Circle", QQ[QQ.Square = 2] = "Square", QQ[QQ.Triangle = 3] = "Triangle", QQ[QQ.L1 = 4] = "L1", QQ[QQ.R1 = 5] = "R1", QQ[QQ.L2 = 6] = "L2", QQ[QQ.R2 = 7] = "R2", QQ[QQ.Create = 8] = "Create", QQ[QQ.Options = 9] = "Options", QQ[QQ.L3 = 10] = "L3", QQ[QQ.R3 = 11] = "R3", QQ[QQ.DPadUp = 12] = "DPadUp", QQ[QQ.DPadDown = 13] = "DPadDown", QQ[QQ.DPadLeft = 14] = "DPadLeft", QQ[QQ.DPadRight = 15] = "DPadRight", QQ[QQ.Home = 16] = "Home", QQ[QQ.TouchPad = 17] = "TouchPad", QQ[QQ.LStickXAxis = 18] = "LStickXAxis", QQ[QQ.LStickYAxis = 19] = "LStickYAxis", QQ[QQ.RStickXAxis = 20] = "RStickXAxis", QQ[QQ.RStickYAxis = 21] = "RStickYAxis"
    }(hQ || (hQ = {})),
    function(QQ) {
      QQ[QQ.A = 0] = "A", QQ[QQ.B = 1] = "B", QQ[QQ.X = 2] = "X", QQ[QQ.Y = 3] = "Y", QQ[QQ.LB = 4] = "LB", QQ[QQ.RB = 5] = "RB", QQ[QQ.LT = 6] = "LT", QQ[QQ.RT = 7] = "RT", QQ[QQ.Back = 8] = "Back", QQ[QQ.Start = 9] = "Start", QQ[QQ.LS = 10] = "LS", QQ[QQ.RS = 11] = "RS", QQ[QQ.DPadUp = 12] = "DPadUp", QQ[QQ.DPadDown = 13] = "DPadDown", QQ[QQ.DPadLeft = 14] = "DPadLeft", QQ[QQ.DPadRight = 15] = "DPadRight", QQ[QQ.Home = 16] = "Home", QQ[QQ.LStickXAxis = 17] = "LStickXAxis", QQ[QQ.LStickYAxis = 18] = "LStickYAxis", QQ[QQ.RStickXAxis = 19] = "RStickXAxis", QQ[QQ.RStickYAxis = 20] = "RStickYAxis"
    }(iQ || (iQ = {})),
    function(QQ) {
      QQ[QQ.B = 0] = "B", QQ[QQ.A = 1] = "A", QQ[QQ.Y = 2] = "Y", QQ[QQ.X = 3] = "X", QQ[QQ.L = 4] = "L", QQ[QQ.R = 5] = "R", QQ[QQ.ZL = 6] = "ZL", QQ[QQ.ZR = 7] = "ZR", QQ[QQ.Minus = 8] = "Minus", QQ[QQ.Plus = 9] = "Plus", QQ[QQ.LS = 10] = "LS", QQ[QQ.RS = 11] = "RS", QQ[QQ.DPadUp = 12] = "DPadUp", QQ[QQ.DPadDown = 13] = "DPadDown", QQ[QQ.DPadLeft = 14] = "DPadLeft", QQ[QQ.DPadRight = 15] = "DPadRight", QQ[QQ.Home = 16] = "Home", QQ[QQ.Capture = 17] = "Capture", QQ[QQ.LStickXAxis = 18] = "LStickXAxis", QQ[QQ.LStickYAxis = 19] = "LStickYAxis", QQ[QQ.RStickXAxis = 20] = "RStickXAxis", QQ[QQ.RStickYAxis = 21] = "RStickYAxis"
    }(cQ || (cQ = {}));
    var RQ = XQ(40453);
    class EQ {
      static CreateDeviceEvent(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        switch (QQ) {
          case dQ.Keyboard:
            return this._CreateKeyboardEvent(XQ, wQ, qQ, TQ);
          case dQ.Mouse:
            if (XQ === HQ.MouseWheelX || XQ === HQ.MouseWheelY || XQ === HQ.MouseWheelZ) return this._CreateWheelEvent(QQ, WQ, XQ, wQ, qQ, TQ);
          case dQ.Touch:
            return this._CreatePointerEvent(QQ, WQ, XQ, wQ, qQ, TQ, zQ);
          default:
            throw `Unable to generate event for device ${dQ[QQ]}`
        }
      }
      static _CreatePointerEvent(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        const sQ = this._CreateMouseEvent(QQ, WQ, XQ, wQ, qQ, TQ);
        QQ === dQ.Mouse ? (sQ.deviceType = dQ.Mouse, sQ.pointerId = 1, sQ.pointerType = "mouse") : (sQ.deviceType = dQ.Touch, sQ.pointerId = zQ ?? WQ, sQ.pointerType = "touch");
        let FQ = 0;
        return FQ += qQ.pollInput(QQ, WQ, HQ.LeftClick), FQ += 2 * qQ.pollInput(QQ, WQ, HQ.RightClick), FQ += 4 * qQ.pollInput(QQ, WQ, HQ.MiddleClick), sQ.buttons = FQ, XQ === HQ.Move ? sQ.type = "pointermove" : XQ >= HQ.LeftClick && XQ <= HQ.RightClick && (sQ.type = 1 === wQ ? "pointerdown" : "pointerup", sQ.button = XQ - 2), sQ
      }
      static _CreateWheelEvent(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = this._CreateMouseEvent(QQ, WQ, XQ, wQ, qQ, TQ);
        switch (zQ.pointerId = 1, zQ.type = "wheel", zQ.deltaMode = RQ.e.DOM_DELTA_PIXEL, zQ.deltaX = 0, zQ.deltaY = 0, zQ.deltaZ = 0, XQ) {
          case HQ.MouseWheelX:
            zQ.deltaX = wQ;
            break;
          case HQ.MouseWheelY:
            zQ.deltaY = wQ;
            break;
          case HQ.MouseWheelZ:
            zQ.deltaZ = wQ
        }
        return zQ
      }
      static _CreateMouseEvent(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = this._CreateEvent(TQ),
          sQ = qQ.pollInput(QQ, WQ, HQ.Horizontal),
          FQ = qQ.pollInput(QQ, WQ, HQ.Vertical);
        return TQ ? (zQ.movementX = 0, zQ.movementY = 0, zQ.offsetX = zQ.movementX - TQ.getBoundingClientRect().x, zQ.offsetY = zQ.movementY - TQ.getBoundingClientRect().y) : (zQ.movementX = qQ.pollInput(QQ, WQ, 10), zQ.movementY = qQ.pollInput(QQ, WQ, 11), zQ.offsetX = 0, zQ.offsetY = 0), this._CheckNonCharacterKeys(zQ, qQ), zQ.clientX = sQ, zQ.clientY = FQ, zQ.x = sQ, zQ.y = FQ, zQ.deviceType = QQ, zQ.deviceSlot = WQ, zQ.inputIndex = XQ, zQ
      }
      static _CreateKeyboardEvent(QQ, WQ, XQ, wQ) {
        const qQ = this._CreateEvent(wQ);
        return this._CheckNonCharacterKeys(qQ, XQ), qQ.deviceType = dQ.Keyboard, qQ.deviceSlot = 0, qQ.inputIndex = QQ, qQ.type = 1 === WQ ? "keydown" : "keyup", qQ.key = String.fromCharCode(QQ), qQ.keyCode = QQ, qQ
      }
      static _CheckNonCharacterKeys(QQ, WQ) {
        const XQ = WQ.isDeviceAvailable(dQ.Keyboard),
          wQ = XQ && 1 === WQ.pollInput(dQ.Keyboard, 0, 18),
          qQ = XQ && 1 === WQ.pollInput(dQ.Keyboard, 0, 17),
          TQ = XQ && (1 === WQ.pollInput(dQ.Keyboard, 0, 91) || 1 === WQ.pollInput(dQ.Keyboard, 0, 92) || 1 === WQ.pollInput(dQ.Keyboard, 0, 93)),
          zQ = XQ && 1 === WQ.pollInput(dQ.Keyboard, 0, 16);
        QQ.altKey = wQ, QQ.ctrlKey = qQ, QQ.metaKey = TQ, QQ.shiftKey = zQ
      }
      static _CreateEvent(QQ) {
        const WQ = {
          preventDefault: () => {}
        };
        return WQ.target = QQ, WQ
      }
    }
    class CQ {
      constructor(QQ, WQ, XQ) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(QQ, WQ, ((QQ, WQ, wQ, qQ) => {
          const TQ = EQ.CreateDeviceEvent(QQ, WQ, wQ, qQ, this);
          XQ(QQ, WQ, TQ)
        })) : this._createDummyNativeInput()
      }
      pollInput(QQ, WQ, XQ) {
        return this._nativeInput.pollInput(QQ, WQ, XQ)
      }
      isDeviceAvailable(QQ) {
        return QQ === dQ.Mouse || QQ === dQ.Touch
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
    const uQ = Object.keys(HQ).length / 2;
    class LQ {
      constructor(QQ, WQ, XQ, qQ) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = wQ.g.IsSafari(), this._usingMacOs = (0, pQ.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = QQ => {}, this._keyboardUpEvent = QQ => {}, this._keyboardBlurEvent = QQ => {}, this._pointerMoveEvent = QQ => {}, this._pointerDownEvent = QQ => {}, this._pointerUpEvent = QQ => {}, this._pointerCancelEvent = QQ => {}, this._pointerCancelTouch = QQ => {}, this._pointerLeaveEvent = QQ => {}, this._pointerWheelEvent = QQ => {}, this._pointerBlurEvent = QQ => {}, this._pointerMacOsChromeOutEvent = QQ => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, pQ.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, pQ.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = QQ => {}, this._gamepadDisconnectedEvent = QQ => {}, this._eventPrefix = wQ.g.GetPointerPrefix(QQ), this._engine = QQ, this._onDeviceConnected = WQ, this._onDeviceDisconnected = XQ, this._onInputChanged = qQ, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(QQ, WQ, XQ) {
        const qQ = this._inputs[QQ][WQ];
        if (!qQ) throw `Unable to find device ${dQ[QQ]}`;
        QQ >= dQ.DualShock && QQ <= dQ.DualSense && this._updateDevice(QQ, WQ, XQ);
        const TQ = qQ[XQ];
        if (void 0 === TQ) throw `Unable to find input ${XQ} for device ${dQ[QQ]} in slot ${WQ}`;
        return XQ === HQ.Move && wQ.g.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), TQ
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
                for (const WQ in QQ) {
                  const XQ = QQ[+WQ];
                  if (XQ)
                    for (let QQ = 0; QQ < XQ.length; QQ++) XQ[QQ] = 0
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
          for (const WQ of QQ) WQ && this._addGamePad(WQ)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(dQ.Mouse, 0, 0, 0)
      }
      _addGamePad(QQ) {
        const WQ = this._getGamepadDeviceType(QQ.id),
          XQ = QQ.index;
        this._gamepads = this._gamepads || new Array(QQ.index + 1), this._registerDevice(WQ, XQ, QQ.buttons.length + QQ.axes.length), this._gamepads[XQ] = WQ
      }
      _addPointerDevice(QQ, WQ, XQ, wQ) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(QQ, WQ, uQ);
        const qQ = this._inputs[QQ][WQ];
        qQ[0] = XQ, qQ[1] = wQ
      }
      _registerDevice(QQ, WQ, XQ) {
        if (void 0 === WQ) throw `Unable to register device ${dQ[QQ]} to undefined slot.`;
        if (this._inputs[QQ] || (this._inputs[QQ] = {}), !this._inputs[QQ][WQ]) {
          const wQ = new Array(XQ);
          wQ.fill(0), this._inputs[QQ][WQ] = wQ, this._onDeviceConnected(QQ, WQ)
        }
      }
      _unregisterDevice(QQ, WQ) {
        this._inputs[QQ][WQ] && (delete this._inputs[QQ][WQ], this._onDeviceDisconnected(QQ, WQ))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = QQ => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(dQ.Keyboard, 0, 255));
          const WQ = this._inputs[dQ.Keyboard][0];
          if (WQ) {
            WQ[QQ.keyCode] = 1;
            const XQ = QQ;
            XQ.inputIndex = QQ.keyCode, this._usingMacOs && QQ.metaKey && "Meta" !== QQ.key && (this._metaKeys.includes(QQ.keyCode) || this._metaKeys.push(QQ.keyCode)), this._onInputChanged(dQ.Keyboard, 0, XQ)
          }
        }, this._keyboardUpEvent = QQ => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(dQ.Keyboard, 0, 255));
          const WQ = this._inputs[dQ.Keyboard][0];
          if (WQ) {
            WQ[QQ.keyCode] = 0;
            const XQ = QQ;
            if (XQ.inputIndex = QQ.keyCode, this._usingMacOs && "Meta" === QQ.key && this._metaKeys.length > 0) {
              for (const QQ of this._metaKeys) {
                const XQ = EQ.CreateDeviceEvent(dQ.Keyboard, 0, QQ, 0, this, this._elementToAttachTo);
                WQ[QQ] = 0, this._onInputChanged(dQ.Keyboard, 0, XQ)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(dQ.Keyboard, 0, XQ)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const QQ = this._inputs[dQ.Keyboard][0];
            for (let WQ = 0; WQ < QQ.length; WQ++)
              if (0 !== QQ[WQ]) {
                QQ[WQ] = 0;
                const XQ = EQ.CreateDeviceEvent(dQ.Keyboard, 0, WQ, 0, this, this._elementToAttachTo);
                this._onInputChanged(dQ.Keyboard, 0, XQ)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, pQ.h)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let wQ = 0; wQ < this._maxTouchPoints; wQ++) this._activeTouchIds[wQ] = -1;
        this._pointerMoveEvent = QQ => {
          const WQ = this._getPointerType(QQ);
          let XQ = WQ === dQ.Mouse ? 0 : this._activeTouchIds.indexOf(QQ.pointerId);
          if (WQ === dQ.Touch && -1 === XQ) {
            if (0 === QQ.buttons) return;
            const qQ = this._activeTouchIds.indexOf(-1);
            if (!(qQ >= 0)) return void wQ.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            XQ = qQ, this._activeTouchIds[qQ] = QQ.pointerId, this._onDeviceConnected(WQ, XQ)
          }
          this._inputs[WQ] || (this._inputs[WQ] = {}), this._inputs[WQ][XQ] || this._addPointerDevice(WQ, XQ, QQ.clientX, QQ.clientY);
          const qQ = this._inputs[WQ][XQ];
          if (qQ) {
            const wQ = QQ;
            wQ.inputIndex = HQ.Move, qQ[HQ.Horizontal] = QQ.clientX, qQ[HQ.Vertical] = QQ.clientY, WQ === dQ.Touch && 0 === qQ[HQ.LeftClick] && (qQ[HQ.LeftClick] = 1), void 0 === QQ.pointerId && (QQ.pointerId = this._mouseId), this._onInputChanged(WQ, XQ, wQ), this._usingSafari || -1 === QQ.button || (wQ.inputIndex = QQ.button + 2, qQ[QQ.button + 2] = qQ[QQ.button + 2] ? 0 : 1, this._onInputChanged(WQ, XQ, wQ))
          }
        }, this._pointerDownEvent = QQ => {
          const WQ = this._getPointerType(QQ);
          let XQ = WQ === dQ.Mouse ? 0 : QQ.pointerId;
          if (WQ === dQ.Touch) {
            let WQ = this._activeTouchIds.indexOf(QQ.pointerId);
            if (-1 === WQ && (WQ = this._activeTouchIds.indexOf(-1)), !(WQ >= 0)) return void wQ.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            XQ = WQ, this._activeTouchIds[WQ] = QQ.pointerId
          }
          this._inputs[WQ] || (this._inputs[WQ] = {}), this._inputs[WQ][XQ] ? WQ === dQ.Touch && this._onDeviceConnected(WQ, XQ) : this._addPointerDevice(WQ, XQ, QQ.clientX, QQ.clientY);
          const qQ = this._inputs[WQ][XQ];
          if (qQ) {
            const wQ = qQ[HQ.Horizontal],
              zQ = qQ[HQ.Vertical];
            if (WQ === dQ.Mouse) {
              if (void 0 === QQ.pointerId && (QQ.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (TQ) {}
            } else if (QQ.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(QQ.pointerId)
            } catch (TQ) {}
            qQ[HQ.Horizontal] = QQ.clientX, qQ[HQ.Vertical] = QQ.clientY, qQ[QQ.button + 2] = 1;
            const sQ = QQ;
            sQ.inputIndex = QQ.button + 2, this._onInputChanged(WQ, XQ, sQ), wQ === QQ.clientX && zQ === QQ.clientY || (sQ.inputIndex = HQ.Move, this._onInputChanged(WQ, XQ, sQ))
          }
        }, this._pointerUpEvent = QQ => {
          const WQ = this._getPointerType(QQ),
            XQ = WQ === dQ.Mouse ? 0 : this._activeTouchIds.indexOf(QQ.pointerId);
          if (WQ === dQ.Touch) {
            if (-1 === XQ) return;
            this._activeTouchIds[XQ] = -1
          }
          const wQ = this._inputs[WQ]?.[XQ];
          let qQ = QQ.button,
            TQ = wQ && 0 !== wQ[qQ + 2];
          if (!TQ && this._isUsingFirefox && this._usingMacOs && wQ && (qQ = 2 === qQ ? 0 : 2, TQ = 0 !== wQ[qQ + 2]), TQ) {
            const TQ = wQ[HQ.Horizontal],
              zQ = wQ[HQ.Vertical];
            wQ[HQ.Horizontal] = QQ.clientX, wQ[HQ.Vertical] = QQ.clientY, wQ[qQ + 2] = 0;
            const sQ = QQ;
            void 0 === QQ.pointerId && (QQ.pointerId = this._mouseId), TQ === QQ.clientX && zQ === QQ.clientY || (sQ.inputIndex = HQ.Move, this._onInputChanged(WQ, XQ, sQ)), sQ.inputIndex = qQ + 2, WQ === dQ.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : QQ.pointerId && this._elementToAttachTo.hasPointerCapture?.(QQ.pointerId) && this._elementToAttachTo.releasePointerCapture(QQ.pointerId), this._onInputChanged(WQ, XQ, sQ), WQ === dQ.Touch && this._onDeviceDisconnected(WQ, XQ)
          }
        }, this._pointerCancelTouch = QQ => {
          const WQ = this._activeTouchIds.indexOf(QQ);
          if (-1 === WQ) return;
          this._elementToAttachTo.hasPointerCapture?.(QQ) && this._elementToAttachTo.releasePointerCapture(QQ), this._inputs[dQ.Touch][WQ][HQ.LeftClick] = 0;
          const XQ = EQ.CreateDeviceEvent(dQ.Touch, WQ, HQ.LeftClick, 0, this, this._elementToAttachTo, QQ);
          this._onInputChanged(dQ.Touch, WQ, XQ), this._activeTouchIds[WQ] = -1, this._onDeviceDisconnected(dQ.Touch, WQ)
        }, this._pointerCancelEvent = QQ => {
          if ("mouse" === QQ.pointerType) {
            const QQ = this._inputs[dQ.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let WQ = HQ.LeftClick; WQ <= HQ.BrowserForward; WQ++)
              if (1 === QQ[WQ]) {
                QQ[WQ] = 0;
                const XQ = EQ.CreateDeviceEvent(dQ.Mouse, 0, WQ, 0, this, this._elementToAttachTo);
                this._onInputChanged(dQ.Mouse, 0, XQ)
              }
          } else this._pointerCancelTouch(QQ.pointerId)
        }, this._pointerLeaveEvent = QQ => {
          "pen" === QQ.pointerType && this._pointerCancelTouch(QQ.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let QQ = !1;
        const WQ = function() {};
        try {
          const XQ = Object.defineProperty({}, "passive", {
            get: function() {
              QQ = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", WQ, XQ), this._elementToAttachTo.removeEventListener("test", WQ, XQ)
        } catch (XQ) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(dQ.Mouse)) {
            const QQ = this._inputs[dQ.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let WQ = HQ.LeftClick; WQ <= HQ.BrowserForward; WQ++)
              if (1 === QQ[WQ]) {
                QQ[WQ] = 0;
                const XQ = EQ.CreateDeviceEvent(dQ.Mouse, 0, WQ, 0, this, this._elementToAttachTo);
                this._onInputChanged(dQ.Mouse, 0, XQ)
              }
          }
          if (this.isDeviceAvailable(dQ.Touch)) {
            const QQ = this._inputs[dQ.Touch];
            for (let WQ = 0; WQ < this._activeTouchIds.length; WQ++) {
              const XQ = this._activeTouchIds[WQ];
              if (this._elementToAttachTo.hasPointerCapture?.(XQ) && this._elementToAttachTo.releasePointerCapture(XQ), -1 !== XQ && 1 === QQ[WQ]?.[HQ.LeftClick]) {
                QQ[WQ][HQ.LeftClick] = 0;
                const wQ = EQ.CreateDeviceEvent(dQ.Touch, WQ, HQ.LeftClick, 0, this, this._elementToAttachTo, XQ);
                this._onInputChanged(dQ.Touch, WQ, wQ), this._activeTouchIds[WQ] = -1, this._onDeviceDisconnected(dQ.Touch, WQ)
              }
            }
          }
        }, this._pointerWheelEvent = QQ => {
          const WQ = dQ.Mouse;
          this._inputs[WQ] || (this._inputs[WQ] = []), this._inputs[WQ][0] || (this._pointerActive = !0, this._registerDevice(WQ, 0, uQ));
          const XQ = this._inputs[WQ][0];
          if (XQ) {
            XQ[HQ.MouseWheelX] = QQ.deltaX || 0, XQ[HQ.MouseWheelY] = QQ.deltaY || QQ.wheelDelta || 0, XQ[HQ.MouseWheelZ] = QQ.deltaZ || 0;
            const wQ = QQ;
            void 0 === QQ.pointerId && (QQ.pointerId = this._mouseId), 0 !== XQ[HQ.MouseWheelX] && (wQ.inputIndex = HQ.MouseWheelX, this._onInputChanged(WQ, 0, wQ)), 0 !== XQ[HQ.MouseWheelY] && (wQ.inputIndex = HQ.MouseWheelY, this._onInputChanged(WQ, 0, wQ)), 0 !== XQ[HQ.MouseWheelZ] && (wQ.inputIndex = HQ.MouseWheelZ, this._onInputChanged(WQ, 0, wQ))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = QQ => {
          QQ.buttons > 1 && this._pointerCancelEvent(QQ)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!QQ && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(dQ.Mouse)) {
            const QQ = this._inputs[dQ.Mouse][0];
            QQ[HQ.MouseWheelX] = 0, QQ[HQ.MouseWheelY] = 0, QQ[HQ.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = QQ => {
          this._addGamePad(QQ.gamepad)
        }, this._gamepadDisconnectedEvent = QQ => {
          if (this._gamepads) {
            const WQ = this._getGamepadDeviceType(QQ.gamepad.id),
              XQ = QQ.gamepad.index;
            this._unregisterDevice(WQ, XQ), delete this._gamepads[XQ]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(QQ, WQ, XQ) {
        const wQ = navigator.getGamepads()[WQ];
        if (wQ && QQ === this._gamepads[WQ]) {
          const qQ = this._inputs[QQ][WQ];
          XQ >= wQ.buttons.length ? qQ[XQ] = wQ.axes[XQ - wQ.buttons.length].valueOf() : qQ[XQ] = wQ.buttons[XQ].value
        }
      }
      _getGamepadDeviceType(QQ) {
        return -1 !== QQ.indexOf("054c") ? -1 !== QQ.indexOf("0ce6") ? dQ.DualSense : dQ.DualShock : -1 !== QQ.indexOf("Xbox One") || -1 !== QQ.search("Xbox 360") || -1 !== QQ.search("xinput") || -1 !== QQ.indexOf("045e") && -1 === QQ.indexOf("Surface Dock") ? dQ.Xbox : -1 !== QQ.indexOf("057e") ? dQ.Switch : dQ.Generic
      }
      _getPointerType(QQ) {
        let WQ = dQ.Mouse;
        return ("touch" === QQ.pointerType || "pen" === QQ.pointerType || QQ.touches) && (WQ = dQ.Touch), WQ
      }
    }
    class kQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = WQ, this.deviceSlot = XQ, this.onInputChangedObservable = new zQ.b, this._deviceInputSystem = QQ
      }
      getInput(QQ) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, QQ)
      }
    }
    class fQ {
      constructor(QQ) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = QQ => {
          for (let WQ = 0; WQ < this._devices.length; WQ++) {
            const XQ = this._devices[WQ];
            for (const wQ in XQ) {
              const XQ = +wQ;
              QQ._addDevice(new kQ(this._deviceInputSystem, WQ, XQ))
            }
          }
          this._registeredManagers.push(QQ)
        }, this.unregisterManager = QQ => {
          const WQ = this._registeredManagers.indexOf(QQ);
          WQ > -1 && this._registeredManagers.splice(WQ, 1)
        };
        const WQ = Object.keys(dQ).length / 2;
        this._devices = new Array(WQ);
        const XQ = (QQ, WQ) => {
            this._devices[QQ] || (this._devices[QQ] = new Array), this._devices[QQ][WQ] || (this._devices[QQ][WQ] = WQ);
            for (const XQ of this._registeredManagers) {
              const wQ = new kQ(this._deviceInputSystem, QQ, WQ);
              XQ._addDevice(wQ)
            }
          },
          wQ = (QQ, WQ) => {
            this._devices[QQ]?.[WQ] && delete this._devices[QQ][WQ];
            for (const XQ of this._registeredManagers) XQ._removeDevice(QQ, WQ)
          },
          qQ = (QQ, WQ, XQ) => {
            if (XQ)
              for (const wQ of this._registeredManagers) wQ._onInputChanged(QQ, WQ, XQ)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new CQ(XQ, wQ, qQ) : this._deviceInputSystem = new LQ(QQ, XQ, wQ, qQ)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class SQ {
      getDeviceSource(QQ, WQ) {
        if (void 0 === WQ) {
          if (void 0 === this._firstDevice[QQ]) return null;
          WQ = this._firstDevice[QQ]
        }
        return this._devices[QQ] && void 0 !== this._devices[QQ][WQ] ? this._devices[QQ][WQ] : null
      }
      getDeviceSources(QQ) {
        return this._devices[QQ] ? this._devices[QQ].filter((QQ => !!QQ)) : []
      }
      constructor(QQ) {
        const WQ = Object.keys(dQ).length / 2;
        this._devices = new Array(WQ), this._firstDevice = new Array(WQ), this._engine = QQ, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new fQ(QQ)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new zQ.b((QQ => {
          for (const WQ of this._devices)
            if (WQ)
              for (const XQ of WQ) XQ && this.onDeviceConnectedObservable.notifyObserver(QQ, XQ)
        })), this.onDeviceDisconnectedObservable = new zQ.b, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = QQ.yE.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.yE.remove(this._onDisposeObserver)
      }
      _addDevice(QQ) {
        this._devices[QQ.deviceType] || (this._devices[QQ.deviceType] = []), this._devices[QQ.deviceType][QQ.deviceSlot] || (this._devices[QQ.deviceType][QQ.deviceSlot] = QQ, this._updateFirstDevices(QQ.deviceType)), this.onDeviceConnectedObservable.notifyObservers(QQ)
      }
      _removeDevice(QQ, WQ) {
        const XQ = this._devices[QQ]?.[WQ];
        this.onDeviceDisconnectedObservable.notifyObservers(XQ), this._devices[QQ]?.[WQ] && delete this._devices[QQ][WQ], this._updateFirstDevices(QQ)
      }
      _onInputChanged(QQ, WQ, XQ) {
        this._devices[QQ]?.[WQ]?.onInputChangedObservable.notifyObservers(XQ)
      }
      _updateFirstDevices(QQ) {
        switch (QQ) {
          case dQ.Keyboard:
          case dQ.Mouse:
            this._firstDevice[QQ] = 0;
            break;
          case dQ.Touch:
          case dQ.DualSense:
          case dQ.DualShock:
          case dQ.Xbox:
          case dQ.Switch:
          case dQ.Generic: {
            delete this._firstDevice[QQ];
            const WQ = this._devices[QQ];
            if (WQ)
              for (let XQ = 0; XQ < WQ.length; XQ++)
                if (WQ[XQ]) {
                  this._firstDevice[QQ] = XQ;
                  break
                } break
          }
        }
      }
    }
    var tQ = XQ(40462);
    class oQ {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get fg() {
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
      set fg(QQ) {
        this._doubleClick = QQ
      }
      set hasSwiped(QQ) {
        this._hasSwiped = QQ
      }
      set ignore(QQ) {
        this._ignore = QQ
      }
    }
    class eQ {
      constructor(QQ) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new gQ.q(0, 0), this._previousStartingPointerPosition = new gQ.q(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = QQ || GQ.d.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(QQ) {
        return this._meshUnderPointerId[QQ] || null
      }
      get unTranslatedPointer() {
        return new gQ.q(this._unTranslatedPointerX, this._unTranslatedPointerY)
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
        const WQ = this._scene.Uj().getInputElementClientRect();
        WQ && (this._pointerX = QQ.clientX - WQ.left, this._pointerY = QQ.clientY - WQ.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(QQ, WQ) {
        const XQ = this._scene,
          wQ = XQ.Uj(),
          qQ = wQ.getInputElement();
        qQ && (qQ.tabIndex = wQ.canvasTabIndex, XQ.doNotHandleCursors || (qQ.style.cursor = XQ.defaultCursor)), this._setCursorAndPointerOverMesh(QQ, WQ, XQ);
        for (const sQ of XQ._pointerMoveStage) {
          QQ = QQ || this._pickMove(WQ);
          const XQ = !!QQ?.pickedMesh;
          QQ = sQ.action(this._unTranslatedPointerX, this._unTranslatedPointerY, QQ, XQ, qQ)
        }
        const TQ = WQ.inputIndex >= HQ.MouseWheelX && WQ.inputIndex <= HQ.MouseWheelZ ? bQ.d.POINTERWHEEL : bQ.d.POINTERMOVE;
        let zQ;
        XQ.onPointerMove && (QQ = QQ || this._pickMove(WQ), XQ.onPointerMove(WQ, QQ, TQ)), QQ ? (zQ = new bQ.g(TQ, WQ, QQ), this._setRayOnPointerInfo(QQ, WQ)) : (zQ = new bQ.g(TQ, WQ, null, this), this._movePointerInfo = zQ), XQ.onPointerObservable.hasObservers() && XQ.onPointerObservable.notifyObservers(zQ, TQ)
      }
      _setRayOnPointerInfo(QQ, WQ) {
        const XQ = this._scene;
        QQ && tQ.c._IsPickingAvailable && (QQ.ray || (QQ.ray = XQ.createPickingRay(WQ.offsetX, WQ.offsetY, gQ.e.Identity(), XQ.activeCamera)))
      }
      _addCameraPointerObserver(QQ, WQ) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(QQ, WQ)
      }
      _removeCameraPointerObserver(QQ) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(QQ)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(QQ, WQ, XQ) {
        const wQ = this._scene,
          qQ = new bQ.f(XQ, WQ, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return QQ && (qQ.originalPickingInfo = QQ, qQ.ray = QQ.ray, "xr-near" === WQ.pointerType && QQ.originMesh && (qQ.nearInteractionPickingInfo = QQ)), wQ.onPrePointerObservable.notifyObservers(qQ, XQ), !!qQ.skipOnPointerObservable
      }
      _pickMove(QQ) {
        const WQ = this._scene,
          XQ = WQ.tr(this._unTranslatedPointerX, this._unTranslatedPointerY, WQ.pointerMovePredicate, WQ.pointerMoveFastCheck, WQ.cameraToUseForPointers, WQ.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(XQ, QQ, WQ), XQ
      }
      _updateMeshUnderPointer() {
        const QQ = this._scene;
        if (!QQ.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || QQ.skipPointerMovePicking || !QQ.cameraToUseForPointers && !QQ.activeCamera) return;
        this._ensurePointerMovePredicate();
        const WQ = this._pointerX,
          XQ = this._pointerY,
          wQ = this._unTranslatedPointerX,
          qQ = this._unTranslatedPointerY;
        for (const TQ of this._latestPointerMoveEvents.values()) this._pointerX = TQ.pointerX, this._pointerY = TQ.pointerY, this._unTranslatedPointerX = TQ.unTranslatedPointerX, this._unTranslatedPointerY = TQ.unTranslatedPointerY, this._pickMove(TQ.event);
        this._pointerX = WQ, this._pointerY = XQ, this._unTranslatedPointerX = wQ, this._unTranslatedPointerY = qQ
      }
      _ensurePointerMovePredicate() {
        const QQ = this._scene;
        QQ.pointerMovePredicate || (QQ.pointerMovePredicate = WQ => (WQ._isPointerMovePickable ?? WQ.RB) && WQ.isVisible && WQ.isReady() && WQ.isEnabled() && (WQ.enablePointerMoveEvents || QQ.constantlyUpdateMeshUnderPointer || null !== WQ._getActionManagerForTrigger()) && (!QQ.cameraToUseForPointers || 0 !== (QQ.cameraToUseForPointers.layerMask & WQ.layerMask)))
      }
      _setCursorAndPointerOverMesh(QQ, WQ, XQ) {
        const wQ = XQ.Uj().getInputElement();
        if (QQ?.pickedMesh) {
          if (this.setPointerOverMesh(QQ.pickedMesh, WQ.pointerId, QQ, WQ), !XQ.doNotHandleCursors && wQ && this._pointerOverMesh) {
            const QQ = this._pointerOverMesh._getActionManagerForTrigger();
            QQ && QQ.hasPointerTriggers && (wQ.style.cursor = QQ.hoverCursor || XQ.hoverCursor)
          }
        } else this.setPointerOverMesh(null, WQ.pointerId, QQ, WQ)
      }
      simulatePointerMove(QQ, WQ) {
        const XQ = new PointerEvent("pointermove", WQ);
        XQ.inputIndex = HQ.Move, this._checkPrePointerObservable(QQ, XQ, bQ.d.POINTERMOVE) || this._processPointerMove(QQ, XQ)
      }
      simulatePointerDown(QQ, WQ) {
        const XQ = new PointerEvent("pointerdown", WQ);
        XQ.inputIndex = XQ.button + 2, this._checkPrePointerObservable(QQ, XQ, bQ.d.POINTERDOWN) || this._processPointerDown(QQ, XQ)
      }
      _processPointerDown(QQ, WQ) {
        const XQ = this._scene;
        if (QQ?.pickedMesh) {
          this._pickedDownMesh = QQ.pickedMesh;
          const wQ = QQ.pickedMesh._getActionManagerForTrigger();
          if (wQ) {
            if (wQ.hasPickTriggers) switch (wQ.processTrigger(5, new jQ(QQ.pickedMesh, XQ.pointerX, XQ.pointerY, QQ.pickedMesh, WQ, QQ)), WQ.button) {
              case 0:
                wQ.processTrigger(2, new jQ(QQ.pickedMesh, XQ.pointerX, XQ.pointerY, QQ.pickedMesh, WQ, QQ));
                break;
              case 1:
                wQ.processTrigger(4, new jQ(QQ.pickedMesh, XQ.pointerX, XQ.pointerY, QQ.pickedMesh, WQ, QQ));
                break;
              case 2:
                wQ.processTrigger(3, new jQ(QQ.pickedMesh, XQ.pointerX, XQ.pointerY, QQ.pickedMesh, WQ, QQ))
            }
            wQ.hasSpecificTrigger(8) && window.setTimeout((() => {
              const QQ = XQ.tr(this._unTranslatedPointerX, this._unTranslatedPointerY, (QQ => QQ.RB && QQ.isVisible && QQ.isReady() && QQ.actionManager && QQ.actionManager.hasSpecificTrigger(8) && QQ === this._pickedDownMesh), !1, XQ.cameraToUseForPointers);
              QQ?.pickedMesh && wQ && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > eQ.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, wQ.processTrigger(8, jQ.CreateNew(QQ.pickedMesh, WQ)))
            }), eQ.LongPressDelay)
          }
        } else
          for (const TQ of XQ._pointerDownStage) QQ = TQ.action(this._unTranslatedPointerX, this._unTranslatedPointerY, QQ, WQ, !1);
        let wQ;
        const qQ = bQ.d.POINTERDOWN;
        QQ ? (XQ.onPointerDown && XQ.onPointerDown(WQ, QQ, qQ), wQ = new bQ.g(qQ, WQ, QQ), this._setRayOnPointerInfo(QQ, WQ)) : wQ = new bQ.g(qQ, WQ, null, this), XQ.onPointerObservable.hasObservers() && XQ.onPointerObservable.notifyObservers(wQ, qQ)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(QQ, WQ, XQ) {
        const wQ = new PointerEvent("pointerup", WQ);
        wQ.inputIndex = HQ.Move;
        const qQ = new oQ;
        XQ ? qQ.fg = !0 : qQ.singleClick = !0, this._checkPrePointerObservable(QQ, wQ, bQ.d.POINTERUP) || this._processPointerUp(QQ, wQ, qQ)
      }
      _processPointerUp(QQ, WQ, XQ) {
        const wQ = this._scene;
        if (QQ?.pickedMesh) {
          if (this._pickedUpMesh = QQ.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (wQ.onPointerPick && wQ.onPointerPick(WQ, QQ), XQ.singleClick && !XQ.ignore && wQ.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const XQ = bQ.d.POINTERPICK,
              qQ = new bQ.g(XQ, WQ, QQ);
            this._setRayOnPointerInfo(QQ, WQ), wQ.onPointerObservable.notifyObservers(qQ, XQ)
          }
          const qQ = QQ.pickedMesh._getActionManagerForTrigger();
          if (qQ && !XQ.ignore) {
            qQ.processTrigger(7, jQ.CreateNew(QQ.pickedMesh, WQ, QQ)), !XQ.hasSwiped && XQ.singleClick && qQ.processTrigger(1, jQ.CreateNew(QQ.pickedMesh, WQ, QQ));
            const wQ = QQ.pickedMesh._getActionManagerForTrigger(6);
            XQ.fg && wQ && wQ.processTrigger(6, jQ.CreateNew(QQ.pickedMesh, WQ, QQ))
          }
        } else if (!XQ.ignore)
          for (const qQ of wQ._pointerUpStage) QQ = qQ.action(this._unTranslatedPointerX, this._unTranslatedPointerY, QQ, WQ, XQ.fg);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const QQ = this._pickedDownMesh._getActionManagerForTrigger(16);
          QQ && QQ.processTrigger(16, jQ.CreateNew(this._pickedDownMesh, WQ))
        }
        if (!XQ.ignore) {
          const qQ = new bQ.g(bQ.d.POINTERUP, WQ, QQ);
          if (this._setRayOnPointerInfo(QQ, WQ), wQ.onPointerObservable.notifyObservers(qQ, bQ.d.POINTERUP), wQ.onPointerUp && wQ.onPointerUp(WQ, QQ, bQ.d.POINTERUP), !XQ.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let qQ = 0;
            if (XQ.singleClick ? qQ = bQ.d.POINTERTAP : XQ.fg && (qQ = bQ.d.POINTERDOUBLETAP), qQ) {
              const XQ = new bQ.g(qQ, WQ, QQ);
              wQ.onPointerObservable.hasObservers() && wQ.onPointerObservable.hasSpecificMask(qQ) && wQ.onPointerObservable.notifyObservers(XQ, qQ)
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
          WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const qQ = this._scene,
          TQ = qQ.Uj();
        wQ || (wQ = TQ.getInputElement()), this._alreadyAttached && this.detachControl(), wQ && (this._alreadyAttachedTo = wQ), this._deviceSourceManager = new SQ(TQ), this._initActionManager = QQ => {
          if (!this._meshPickProceed) {
            const WQ = qQ.skipPointerUpPicking || 0 === qQ._registeredActions && !this._checkForPicking() && !qQ.onPointerUp ? null : qQ.tr(this._unTranslatedPointerX, this._unTranslatedPointerY, qQ.pointerUpPredicate, qQ.pointerUpFastCheck, qQ.cameraToUseForPointers, qQ.pointerUpTrianglePredicate);
            this._currentPickResult = WQ, WQ && (QQ = WQ.hit && WQ.pickedMesh ? WQ.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return QQ
        }, this._delayedSimpleClick = (QQ, WQ, XQ) => {
          if ((Date.now() - this._previousStartingPointerTime > eQ.DoubleClickDelay && !this._doubleClickOccured || QQ !== this._previousButtonPressed) && (this._doubleClickOccured = !1, WQ.singleClick = !0, WQ.ignore = !1, this._delayedClicks[QQ])) {
            const WQ = this._delayedClicks[QQ].evt,
              XQ = bQ.d.POINTERTAP,
              wQ = new bQ.g(XQ, WQ, this._currentPickResult);
            qQ.onPointerObservable.hasObservers() && qQ.onPointerObservable.hasSpecificMask(XQ) && qQ.onPointerObservable.notifyObservers(wQ, XQ), this._delayedClicks[QQ] = null
          }
        }, this._initClickEvent = (QQ, WQ, XQ, wQ) => {
          const qQ = new oQ;
          this._currentPickResult = null;
          let TQ = null,
            zQ = QQ.hasSpecificMask(bQ.d.POINTERPICK) || WQ.hasSpecificMask(bQ.d.POINTERPICK) || QQ.hasSpecificMask(bQ.d.POINTERTAP) || WQ.hasSpecificMask(bQ.d.POINTERTAP) || QQ.hasSpecificMask(bQ.d.POINTERDOUBLETAP) || WQ.hasSpecificMask(bQ.d.POINTERDOUBLETAP);
          !zQ && vQ && (TQ = this._initActionManager(TQ, qQ), TQ && (zQ = TQ.hasPickTriggers));
          let sQ = !1;
          if (zQ = zQ && !this._isMultiTouchGesture, zQ) {
            const zQ = XQ.button;
            if (qQ.hasSwiped = this._isPointerSwiping(), !qQ.hasSwiped) {
              let FQ = !eQ.ExclusiveDoubleClickMode;
              if (FQ || (FQ = !QQ.hasSpecificMask(bQ.d.POINTERDOUBLETAP) && !WQ.hasSpecificMask(bQ.d.POINTERDOUBLETAP), FQ && !vQ.HasSpecificTrigger(6) && (TQ = this._initActionManager(TQ, qQ), TQ && (FQ = !TQ.hasSpecificTrigger(6)))), FQ)(Date.now() - this._previousStartingPointerTime > eQ.DoubleClickDelay || zQ !== this._previousButtonPressed) && (qQ.singleClick = !0, wQ(qQ, this._currentPickResult), sQ = !0);
              else {
                const QQ = {
                  evt: XQ,
                  clickInfo: qQ,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, zQ, qQ, wQ), eQ.DoubleClickDelay)
                };
                this._delayedClicks[zQ] = QQ
              }
              let PQ = QQ.hasSpecificMask(bQ.d.POINTERDOUBLETAP) || WQ.hasSpecificMask(bQ.d.POINTERDOUBLETAP);
              !PQ && vQ.HasSpecificTrigger(6) && (TQ = this._initActionManager(TQ, qQ), TQ && (PQ = TQ.hasSpecificTrigger(6))), PQ && (zQ === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < eQ.DoubleClickDelay && !this._doubleClickOccured ? (qQ.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = zQ, eQ.ExclusiveDoubleClickMode ? (this._delayedClicks[zQ] && (clearTimeout(this._delayedClicks[zQ]?.timeoutId), this._delayedClicks[zQ] = null), wQ(qQ, this._previousPickResult)) : wQ(qQ, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, qQ.fg = !0, qQ.ignore = !1, eQ.ExclusiveDoubleClickMode && this._delayedClicks[zQ] && (clearTimeout(this._delayedClicks[zQ]?.timeoutId), this._delayedClicks[zQ] = null), wQ(qQ, this._currentPickResult)), sQ = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = zQ))
            }
          }
          sQ || wQ(qQ, this._currentPickResult)
        }, this._onPointerMove = QQ => {
          if (this._updatePointerPosition(QQ), this._latestPointerMoveEvents.set(QQ.pointerId, {
              event: QQ,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > eQ.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > eQ.DragMovementThreshold), TQ.isPointerLock && TQ._verifyPointerLock(), this._checkPrePointerObservable(null, QQ, QQ.inputIndex >= HQ.MouseWheelX && QQ.inputIndex <= HQ.MouseWheelZ ? bQ.d.POINTERWHEEL : bQ.d.POINTERMOVE)) return;
          if (!qQ.cameraToUseForPointers && !qQ.activeCamera) return;
          if (qQ.skipPointerMovePicking) return void this._processPointerMove(new IQ.b, QQ);
          this._ensurePointerMovePredicate();
          const WQ = qQ._registeredActions > 0 || qQ.constantlyUpdateMeshUnderPointer ? this._pickMove(QQ) : null;
          this._processPointerMove(WQ, QQ)
        }, this._onPointerDown = QQ => {
          const WQ = this._activePointerIds.indexOf(-1);
          if (-1 === WQ ? this._activePointerIds.push(QQ.pointerId) : this._activePointerIds[WQ] = QQ.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, eQ.ExclusiveDoubleClickMode)
            for (let wQ = 0; wQ < this._delayedClicks.length; wQ++)
              if (this._delayedClicks[wQ])
                if (QQ.button === wQ) clearTimeout(this._delayedClicks[wQ]?.timeoutId);
                else {
                  const QQ = this._delayedClicks[wQ].clickInfo;
                  this._doubleClickOccured = !1, QQ.singleClick = !0, QQ.ignore = !1;
                  const WQ = this._delayedClicks[wQ].evt,
                    XQ = bQ.d.POINTERTAP,
                    TQ = new bQ.g(XQ, WQ, this._currentPickResult);
                  qQ.onPointerObservable.hasObservers() && qQ.onPointerObservable.hasSpecificMask(XQ) && qQ.onPointerObservable.notifyObservers(TQ, XQ), this._delayedClicks[wQ] = null
                } if (this._updatePointerPosition(QQ), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = QQ.button), qQ.preventDefaultOnPointerDown && wQ && (QQ.preventDefault(), wQ.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, QQ, bQ.d.POINTERDOWN)) return;
          if (!qQ.cameraToUseForPointers && !qQ.activeCamera) return;
          let XQ;
          this._pointerCaptures[QQ.pointerId] = !0, qQ.pointerDownPredicate || (qQ.pointerDownPredicate = QQ => QQ.RB && QQ.isVisible && QQ.isReady() && QQ.isEnabled() && (!qQ.cameraToUseForPointers || 0 !== (qQ.cameraToUseForPointers.layerMask & QQ.layerMask))), this._pickedDownMesh = null, XQ = qQ.skipPointerDownPicking || 0 === qQ._registeredActions && !this._checkForPicking() && !qQ.onPointerDown ? new IQ.b : qQ.tr(this._unTranslatedPointerX, this._unTranslatedPointerY, qQ.pointerDownPredicate, qQ.pointerDownFastCheck, qQ.cameraToUseForPointers, qQ.pointerDownTrianglePredicate), this._processPointerDown(XQ, QQ)
        }, this._onPointerUp = QQ => {
          const WQ = this._activePointerIds.indexOf(QQ.pointerId); - 1 !== WQ && (this._activePointerIds[WQ] = -1, this._activePointerIdsCount--, "touch" === QQ.pointerType && this._latestPointerMoveEvents.delete(QQ.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(QQ), qQ.preventDefaultOnPointerUp && wQ && (QQ.preventDefault(), wQ.focus()), this._initClickEvent(qQ.onPrePointerObservable, qQ.onPointerObservable, QQ, ((WQ, XQ) => {
            if (qQ.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !WQ.ignore)) {
              if (this._checkPrePointerObservable(null, QQ, bQ.d.POINTERUP)) return this._swipeButtonPressed === QQ.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === QQ.buttons && (this._pointerCaptures[QQ.pointerId] = !1));
              WQ.hasSwiped || (WQ.singleClick && qQ.onPrePointerObservable.hasSpecificMask(bQ.d.POINTERTAP) && this._checkPrePointerObservable(null, QQ, bQ.d.POINTERTAP) && (this._skipPointerTap = !0), WQ.fg && qQ.onPrePointerObservable.hasSpecificMask(bQ.d.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, QQ, bQ.d.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[QQ.pointerId] ? (0 === QQ.buttons && (this._pointerCaptures[QQ.pointerId] = !1), (qQ.cameraToUseForPointers || qQ.activeCamera) && (qQ.pointerUpPredicate || (qQ.pointerUpPredicate = QQ => QQ.RB && QQ.isVisible && QQ.isReady() && QQ.isEnabled() && (!qQ.cameraToUseForPointers || 0 !== (qQ.cameraToUseForPointers.layerMask & QQ.layerMask))), !this._meshPickProceed && (vQ && vQ.HasTriggers || this._checkForPicking() || qQ.onPointerUp) && this._initActionManager(null, WQ), XQ || (XQ = this._currentPickResult), this._processPointerUp(XQ, QQ, WQ), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === QQ.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === QQ.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = QQ => {
          const WQ = AQ.c.KEYDOWN;
          if (qQ.onPreKeyboardObservable.hasObservers()) {
            const XQ = new AQ.f(WQ, QQ);
            if (qQ.onPreKeyboardObservable.notifyObservers(XQ, WQ), XQ.skipOnKeyboardObservable) return
          }
          if (qQ.onKeyboardObservable.hasObservers()) {
            const XQ = new AQ.h(WQ, QQ);
            qQ.onKeyboardObservable.notifyObservers(XQ, WQ)
          }
          qQ.actionManager && qQ.actionManager.processTrigger(14, jQ.CreateNewFromScene(qQ, QQ))
        }, this._onKeyUp = QQ => {
          const WQ = AQ.c.KEYUP;
          if (qQ.onPreKeyboardObservable.hasObservers()) {
            const XQ = new AQ.f(WQ, QQ);
            if (qQ.onPreKeyboardObservable.notifyObservers(XQ, WQ), XQ.skipOnKeyboardObservable) return
          }
          if (qQ.onKeyboardObservable.hasObservers()) {
            const XQ = new AQ.h(WQ, QQ);
            qQ.onKeyboardObservable.notifyObservers(XQ, WQ)
          }
          qQ.actionManager && qQ.actionManager.processTrigger(15, jQ.CreateNewFromScene(qQ, QQ))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((wQ => {
          wQ.deviceType === dQ.Mouse ? wQ.onInputChangedObservable.add((qQ => {
            this._originMouseEvent = qQ, qQ.inputIndex === HQ.LeftClick || qQ.inputIndex === HQ.MiddleClick || qQ.inputIndex === HQ.RightClick || qQ.inputIndex === HQ.BrowserBack || qQ.inputIndex === HQ.BrowserForward ? WQ && 1 === wQ.getInput(qQ.inputIndex) ? this._onPointerDown(qQ) : QQ && 0 === wQ.getInput(qQ.inputIndex) && this._onPointerUp(qQ) : XQ && (qQ.inputIndex === HQ.Move ? this._onPointerMove(qQ) : qQ.inputIndex !== HQ.MouseWheelX && qQ.inputIndex !== HQ.MouseWheelY && qQ.inputIndex !== HQ.MouseWheelZ || this._onPointerMove(qQ))
          })) : wQ.deviceType === dQ.Touch ? wQ.onInputChangedObservable.add((qQ => {
            qQ.inputIndex === HQ.LeftClick && (WQ && 1 === wQ.getInput(qQ.inputIndex) ? (this._onPointerDown(qQ), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : QQ && 0 === wQ.getInput(qQ.inputIndex) && (this._onPointerUp(qQ), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), XQ && qQ.inputIndex === HQ.Move && this._onPointerMove(qQ)
          })) : wQ.deviceType === dQ.Keyboard && wQ.onInputChangedObservable.add((QQ => {
            "keydown" === QQ.type ? this._onKeyDown(QQ) : "keyup" === QQ.type && this._onKeyUp(QQ)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[WQ] === QQ && (!QQ || !QQ._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const qQ = this._meshUnderPointerId[WQ];
        let TQ;
        qQ && (TQ = qQ._getActionManagerForTrigger(10), TQ && TQ.processTrigger(10, new jQ(qQ, this._pointerX, this._pointerY, QQ, wQ, {
          pointerId: WQ
        }))), QQ ? (this._meshUnderPointerId[WQ] = QQ, this._pointerOverMesh = QQ, TQ = QQ._getActionManagerForTrigger(9), TQ && TQ.processTrigger(9, new jQ(QQ, this._pointerX, this._pointerY, QQ, wQ, {
          pointerId: WQ,
          pickResult: XQ
        }))) : (delete this._meshUnderPointerId[WQ], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: QQ,
          pointerId: WQ
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(QQ) {
        this._pointerOverMesh === QQ && (this._pointerOverMesh = null), this._pickedDownMesh === QQ && (this._pickedDownMesh = null), this._pickedUpMesh === QQ && (this._pickedUpMesh = null);
        for (const WQ in this._meshUnderPointerId) this._meshUnderPointerId[WQ] === QQ && delete this._meshUnderPointerId[WQ]
      }
    }
    eQ.DragMovementThreshold = 10, eQ.LongPressDelay = 500, eQ.DoubleClickDelay = 300, eQ.ExclusiveDoubleClickMode = !1;
    var nQ = XQ(40221),
      xQ = XQ(37546),
      YQ = XQ(38041);
    class NQ {
      static get UniqueId() {
        const QQ = this._UniqueIdCounter;
        return this._UniqueIdCounter++, QQ
      }
    }
    NQ._UniqueIdCounter = 1;
    var ZQ = XQ(40307),
      OQ = XQ(40470),
      KQ = XQ(37379);
    class mQ {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var MQ, QW, WW, XW, wW, qW, TW, zW, sW, FW, PW, gW, JW, rW, IW, jW, BW, yW, VW, DW, pW, GW, UW, bW, vW, dW, HW, aW, lW, hW, iW, cW, AW, RW, EW, CW, uW, LW, kW, fW, SW, tW, oW, eW, nW, xW, YW, NW, ZW, OW, KW, mW, MW, QX = XQ(38956),
      WX = XQ(37418);
    const XX = new gQ.w,
      wX = new gQ.w;
    var qX;
    ! function(QQ) {
      QQ[QQ.BackwardCompatible = 0] = "BackwardCompatible", QQ[QQ.Intermediate = 1] = "Intermediate", QQ[QQ.Aggressive = 2] = "Aggressive"
    }(qX || (qX = {}));
    class TX {
      static DefaultMaterialFactory(QQ) {
        throw (0, UQ.i)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, UQ.i)("DefaultCollisionCoordinator")
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
        for (const WQ of this.skeletons) QQ = QQ.concat(WQ.bones);
        return QQ
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(QQ) {
        this._animationPropertiesOverride = QQ
      }
      set onDispose(QQ) {
        this._onDisposeObserver && this.yE.remove(this._onDisposeObserver), this._onDisposeObserver = this.yE.add(QQ)
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
        return eQ.DragMovementThreshold
      }
      static set DragMovementThreshold(QQ) {
        eQ.DragMovementThreshold = QQ
      }
      static get LongPressDelay() {
        return eQ.LongPressDelay
      }
      static set LongPressDelay(QQ) {
        eQ.LongPressDelay = QQ
      }
      static get DoubleClickDelay() {
        return eQ.DoubleClickDelay
      }
      static set DoubleClickDelay(QQ) {
        eQ.DoubleClickDelay = QQ
      }
      static get ExclusiveDoubleClickMode() {
        return eQ.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(QQ) {
        eQ.ExclusiveDoubleClickMode = QQ
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? gQ.s.ZeroReadOnly
      }
      bindEyePosition(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const wQ = this._eyePosition,
          qQ = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          TQ = this.floatingOriginOffset,
          zQ = XX.set(wQ.x, wQ.y, wQ.z, qQ ? -1 : 1),
          sQ = zQ.subtractFromFloatsToRef(TQ.x, TQ.y, TQ.z, 0, wX);
        return QQ && (XQ ? QQ.setFloat3(WQ, sQ.x, sQ.y, sQ.z) : QQ.setVector4(WQ, sQ)), zQ
      }
      finalizeSceneUbo() {
        const QQ = this.getSceneUniformBuffer(),
          WQ = this.bindEyePosition(null),
          XQ = this.floatingOriginOffset;
        return QQ.updateFloat4("vEyePosition", WQ.x - XQ.x, WQ.y - XQ.y, WQ.z - XQ.z, WQ.w), QQ.update(), QQ
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
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), QQ && (this._unObserveActiveCameras = (0, KQ.i)(QQ, (() => {
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
        return TX.DefaultMaterialFactory !== TX._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = TX.DefaultMaterialFactory(this)), this._defaultMaterial
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
        return this._collisionCoordinator || (this._collisionCoordinator = TX.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
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
      rwQ(QQ) {
        this._components.push(QQ), this._transientComponents.push(QQ);
        const WQ = QQ;
        WQ.addFromContainer && WQ.serialize && this._serializableComponents.push(WQ)
      }
      _getComponent(QQ) {
        for (const WQ of this._components)
          if (WQ.name === QQ) return WQ;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(QQ, WQ) {
        this._inputManager = new eQ(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new xQ.d(.2, .2, .3, 1), this.onClearColorChangedObservable = new zQ.b, this.ambientColor = new xQ.b(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new zQ.b, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.KD = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.yE = new zQ.b, this._onDisposeObserver = null, this.onBeforeRenderObservable = new zQ.b, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new zQ.b, this.onAfterRenderCameraObservable = new zQ.b, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new zQ.b, this.onAfterAnimationsObservable = new zQ.b, this.onBeforeDrawPhaseObservable = new zQ.b, this.onAfterDrawPhaseObservable = new zQ.b, this.onReadyObservable = new zQ.b, this.onBeforeCameraRenderObservable = new zQ.b, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new zQ.b, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new zQ.b, this.onAfterActiveMeshesEvaluationObservable = new zQ.b, this.onBeforeParticlesRenderingObservable = new zQ.b, this.onAfterParticlesRenderingObservable = new zQ.b, this.onDataLoadedObservable = new zQ.b, this.onNewCameraAddedObservable = new zQ.b, this.onCameraRemovedObservable = new zQ.b, this.onNewLightAddedObservable = new zQ.b, this.onLightRemovedObservable = new zQ.b, this.onNewGeometryAddedObservable = new zQ.b, this.onGeometryRemovedObservable = new zQ.b, this.onNewTransformNodeAddedObservable = new zQ.b, this.onTransformNodeRemovedObservable = new zQ.b, this.onNewMeshAddedObservable = new zQ.b, this.onMeshRemovedObservable = new zQ.b, this.onNewSkeletonAddedObservable = new zQ.b, this.onSkeletonRemovedObservable = new zQ.b, this.onNewParticleSystemAddedObservable = new zQ.b, this.onParticleSystemRemovedObservable = new zQ.b, this.onNewAnimationGroupAddedObservable = new zQ.b, this.onAnimationGroupRemovedObservable = new zQ.b, this.onNewMaterialAddedObservable = new zQ.b, this.onNewMultiMaterialAddedObservable = new zQ.b, this.onMaterialRemovedObservable = new zQ.b, this.onMultiMaterialRemovedObservable = new zQ.b, this.onNewTextureAddedObservable = new zQ.b, this.onTextureRemovedObservable = new zQ.b, this.onNewFrameGraphAddedObservable = new zQ.b, this.onFrameGraphRemovedObservable = new zQ.b, this.onNewObjectRendererAddedObservable = new zQ.b, this.onObjectRendererRemovedObservable = new zQ.b, this.onNewPostProcessAddedObservable = new zQ.b, this.onPostProcessRemovedObservable = new zQ.b, this.onNewEffectLayerAddedObservable = new zQ.b, this.onEffectLayerRemovedObservable = new zQ.b, this.onBeforeRenderTargetsRenderObservable = new zQ.b, this.onAfterRenderTargetsRenderObservable = new zQ.b, this.onBeforeStepObservable = new zQ.b, this.onAfterStepObservable = new zQ.b, this.onActiveCameraChanged = new zQ.b, this.onActiveCamerasChanged = new zQ.b, this.onBeforeRenderingGroupObservable = new zQ.b, this.onAfterRenderingGroupObservable = new zQ.b, this.onMeshImportedObservable = new zQ.b, this.onAnimationFileImportedObservable = new zQ.b, this.onEnvironmentTextureChangedObservable = new zQ.b, this.onMeshUnderPointerUpdatedObservable = new zQ.b, this._registeredForLateAnimationBindings = new sQ.d(256), this._pointerPickingConfiguration = new mQ, this.onPrePointerObservable = new zQ.b, this.onPointerObservable = new zQ.b, this.onPreKeyboardObservable = new zQ.b, this.onKeyboardObservable = new zQ.b, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = TX.FOGMODE_NONE, this.fogColor = new xQ.b(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.Dk = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new gQ.s(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new sQ.d(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new nQ.d, this._activeIndices = new nQ.d, this._activeParticles = new nQ.d, this._activeBones = new nQ.d, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new sQ.e(256), this._processedMaterials = new sQ.e(256), this._renderTargets = new sQ.d(256), this._materialsRenderTargets = new sQ.d(256), this._activeParticleSystems = new sQ.e(256), this._activeSkeletons = new sQ.d(32), this._softwareSkinnedMeshes = new sQ.d(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = gQ.e.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = DQ.e.Create(), this._beforeClearStage = DQ.e.Create(), this._beforeRenderTargetClearStage = DQ.e.Create(), this._gatherRenderTargetsStage = DQ.e.Create(), this._gatherActiveCameraRenderTargetsStage = DQ.e.Create(), this._isReadyForMeshStage = DQ.e.Create(), this._beforeEvaluateActiveMeshStage = DQ.e.Create(), this._evaluateSubMeshStage = DQ.e.Create(), this._preActiveMeshStage = DQ.e.Create(), this._cameraDrawRenderTargetStage = DQ.e.Create(), this._beforeCameraDrawStage = DQ.e.Create(), this._beforeRenderTargetDrawStage = DQ.e.Create(), this._beforeRenderingGroupDrawStage = DQ.e.Create(), this._beforeRenderingMeshStage = DQ.e.Create(), this._afterRenderingMeshStage = DQ.e.Create(), this._afterRenderingGroupDrawStage = DQ.e.Create(), this._afterCameraDrawStage = DQ.e.Create(), this._afterCameraPostProcessStage = DQ.e.Create(), this._afterRenderTargetDrawStage = DQ.e.Create(), this._afterRenderTargetPostProcessStage = DQ.e.Create(), this._afterRenderStage = DQ.e.Create(), this._pointerMoveStage = DQ.e.Create(), this._pointerDownStage = DQ.e.Create(), this._pointerUpStage = DQ.e.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new zQ.b, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const XQ = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...WQ
        };
        this.defaultCameraLayerMask = XQ.defaultCameraLayerMask, this.defaultRenderableLayerMask = XQ.defaultRenderableLayerMask, QQ = this._engine = QQ || GQ.d.LastCreatedEngine, XQ.virtual ? QQ._virtualScenes.push(this) : (GQ.d._LastCreatedScene = this, QQ.scenes.push(this)), (QQ.getCreationOptions().useLargeWorldRendering || WQ?.useFloatingOrigin) && ((0, yQ.h)(), this._floatingOriginScene = this, yQ.e.sE = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new VQ.e(this), BQ.d && (this.postProcessManager = new BQ.d(this)), (0, pQ.l)() && this.attachControl(), this._createUbo(), JQ.c && (this._imageProcessingConfiguration = new JQ.c), this.setDefaultCandidateProviders(), XQ.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = XQ.useMaterialMeshMap, this.useClonedMeshMap = XQ.useClonedMeshMap, WQ && WQ.virtual || QQ.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(QQ) {
        return this._defaultSubMeshCandidates.data = QQ.ZD, this._defaultSubMeshCandidates.length = QQ.ZD.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = QQ => this._getDefaultSubMeshCandidates(QQ), this.getIntersectingSubMeshCandidates = (QQ, WQ) => this._getDefaultSubMeshCandidates(QQ), this.getCollidingSubMeshCandidates = (QQ, WQ) => this._getDefaultSubMeshCandidates(QQ)
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
      isCachedMaterialInvalid(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== WQ || this._cachedMaterial !== QQ || this._cachedVisibility !== XQ
      }
      Uj() {
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
      simulatePointerMove(QQ, WQ) {
        return this._inputManager.simulatePointerMove(QQ, WQ), this
      }
      simulatePointerDown(QQ, WQ) {
        return this._inputManager.simulatePointerDown(QQ, WQ), this
      }
      simulatePointerUp(QQ, WQ, XQ) {
        return this._inputManager.simulatePointerUp(QQ, WQ, XQ), this
      }
      isPointerCaptured() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(QQ)
      }
      attachControl() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(QQ, WQ, XQ)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let QQ, WQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const XQ = this.Uj(),
          wQ = XQ.currentRenderPassId;
        XQ.currentRenderPassId = this.activeCamera?.renderPassId ?? wQ;
        let qQ = !0;
        for (this._pendingData.length > 0 && (qQ = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && qQ && (qQ = this.depthPeelingRenderer.isReady()), WQ && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), QQ = 0; QQ < this.meshes.length; QQ++) {
          const wQ = this.meshes[QQ];
          if (!wQ.ZD || 0 === wQ.ZD.length) continue;
          if (!wQ.isReady(!0)) {
            qQ = !1;
            continue
          }
          const TQ = wQ.hasThinInstances || "InstancedMesh" === wQ.getClassName() || "InstancedLinesMesh" === wQ.getClassName() || XQ.getCaps().instancedArrays && wQ.instances.length > 0;
          for (let QQ = 0, WQ = this._isReadyForMeshStage; QQ < WQ.length; QQ++) {
            WQ[QQ].action(wQ, TQ) || (qQ = !1)
          }
          if (!WQ) continue;
          const zQ = wQ.material || this.defaultMaterial;
          if (zQ)
            if (zQ._storeEffectOnSubMeshes)
              for (const QQ of wQ.ZD) {
                const WQ = QQ.lj();
                WQ && WQ.hasRenderTargetTextures && null != WQ.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(WQ) && (this._processedMaterials.push(WQ), this._materialsRenderTargets.concatWithNoDuplicate(WQ.getRenderTargetTextures()))
              } else zQ.hasRenderTargetTextures && null != zQ.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(zQ) && (this._processedMaterials.push(zQ), this._materialsRenderTargets.concatWithNoDuplicate(zQ.getRenderTargetTextures()))
        }
        if (WQ) {
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
          for (const TQ of this.activeCameras) TQ.isReady(!0) || (qQ = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (qQ = !1));
        for (const TQ of this.KD) TQ.isReady() || (qQ = !1);
        if (this.proceduralTexturesEnabled)
          for (const TQ of this.proceduralTextures) TQ.isReady() || (qQ = !1);
        if (this.layers)
          for (const TQ of this.layers) TQ.isReady() || (qQ = !1);
        if (this.effectLayers)
          for (const TQ of this.effectLayers) TQ.isLayerReady() || (qQ = !1);
        for (const TQ of this._isReadyChecks) TQ.isReady() || (qQ = !1);
        return XQ.areAllEffectsReady() || (qQ = !1), XQ.currentRenderPassId = wQ, qQ
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
        const WQ = () => {
          QQ(), setTimeout((() => {
            this.unregisterBeforeRender(WQ)
          }))
        };
        this.registerBeforeRender(WQ)
      }
      executeOnceBeforeRender(QQ, WQ) {
        void 0 !== WQ ? setTimeout((() => {
          this._executeOnceBeforeRender(QQ)
        }), WQ) : this._executeOnceBeforeRender(QQ)
      }
      addPendingData(QQ) {
        this._pendingData.push(QQ)
      }
      removePendingData(QQ) {
        const WQ = this.isLoading,
          XQ = this._pendingData.indexOf(QQ); - 1 !== XQ && this._pendingData.splice(XQ, 1), WQ && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
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
        const WQ = this._isReadyChecks.indexOf(QQ); - 1 !== WQ && this._isReadyChecks.splice(WQ, 1)
      }
      executeWhenReady(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(QQ), null === this._executeWhenReadyTimeoutId && this._checkIsReady(WQ)
      }
      async whenReadyAsync() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((WQ => {
          this.executeWhenReady((() => {
            WQ()
          }), QQ)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = TQ.e.Now;
        else if (this.onReadyTimeoutDuration > 0 && TQ.e.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(QQ)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(QQ)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = TQ.e.Now
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
      setTransformMatrix(QQ, WQ, XQ, wQ) {
        this._multiviewSceneUboIsActive = !!(XQ && wQ && this._multiviewSceneUbo), this._viewUpdateFlag === QQ.updateFlag && this._projectionUpdateFlag === WQ.updateFlag || (this._viewUpdateFlag = QQ.updateFlag, this._projectionUpdateFlag = WQ.updateFlag, this._viewMatrix = QQ, this._projectionMatrix = WQ, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new gQ.e), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? YQ.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = YQ.e.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(XQ, wQ) : this._sceneUbo.useUbo && (this._sceneUbo.N_("viewProjection", this._transformMatrix), this._sceneUbo.N_("view", this._viewMatrix), this._sceneUbo.N_("projection", this._projectionMatrix), this._sceneUbo.N_("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(QQ, WQ) {
        const XQ = "boolean" === typeof WQ ? WQ : WQ?.trackUBOsInFrame,
          wQ = new rQ.c(this._engine, void 0, !1, QQ ?? "cB", void 0, XQ);
        return wQ.addUniform("viewProjection", 16), wQ.addUniform("view", 16), wQ.addUniform("projection", 16), wQ.addUniform("vEyePosition", 4), wQ.addUniform("inverseProjection", 16), wQ
      }
      setSceneUniformBuffer(QQ) {
        this._sceneUbo = QQ, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : gQ.s.ZeroReadOnly
      }
      getUniqueId() {
        return NQ.UniqueId
      }
      hwQ(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(QQ), QQ._resyncLightSources(), QQ.parent || QQ._addToSceneRootNodes(), qQ.b.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(QQ)
          })), WQ)) {
          const WQ = QQ.getChildMeshes();
          for (const QQ of WQ) this.hwQ(QQ)
        }
      }
      ZE(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const XQ = this.meshes.indexOf(QQ);
        if (-1 !== XQ && (this.meshes.splice(XQ, 1), QQ.parent || QQ._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(QQ), this.onMeshRemovedObservable.notifyObservers(QQ), WQ) {
          const WQ = QQ.getChildMeshes();
          for (const QQ of WQ) this.ZE(QQ)
        }
        return XQ
      }
      addTransformNode(QQ) {
        this._blockEntityCollection || QQ.sE() === this && -1 !== QQ._indexInSceneTransformNodesArray || (QQ._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(QQ), QQ.parent || QQ._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(QQ))
      }
      removeTransformNode(QQ) {
        const WQ = QQ._indexInSceneTransformNodesArray;
        if (-1 !== WQ) {
          if (WQ !== this.transformNodes.length - 1) {
            const QQ = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[WQ] = QQ, QQ._indexInSceneTransformNodesArray = WQ
          }
          QQ._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), QQ.parent || QQ._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(QQ), WQ
      }
      removeSkeleton(QQ) {
        const WQ = this.skeletons.indexOf(QQ);
        return -1 !== WQ && (this.skeletons.splice(WQ, 1), this.onSkeletonRemovedObservable.notifyObservers(QQ), this._executeActiveContainerCleanup(this._activeSkeletons)), WQ
      }
      removeMorphTargetManager(QQ) {
        const WQ = this.morphTargetManagers.indexOf(QQ);
        return -1 !== WQ && this.morphTargetManagers.splice(WQ, 1), WQ
      }
      removeLight(QQ) {
        const WQ = this.lights.indexOf(QQ);
        if (-1 !== WQ) {
          for (const WQ of this.meshes) WQ._removeLightSource(QQ, !1);
          this.lights.splice(WQ, 1), this.sortLightsByPriority(), QQ.parent || QQ._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(QQ)
        }
        return WQ
      }
      removeCamera(QQ) {
        const WQ = this.cameras.indexOf(QQ);
        if (-1 !== WQ && (this.cameras.splice(WQ, 1), QQ.parent || QQ._removeFromSceneRootNodes()), this.activeCameras) {
          const WQ = this.activeCameras.indexOf(QQ); - 1 !== WQ && this.activeCameras.splice(WQ, 1)
        }
        return this.activeCamera === QQ && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(QQ), WQ
      }
      removeParticleSystem(QQ) {
        const WQ = this.KD.indexOf(QQ);
        return -1 !== WQ && (this.KD.splice(WQ, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(QQ), WQ
      }
      removeAnimation(QQ) {
        const WQ = this.animations.indexOf(QQ);
        return -1 !== WQ && this.animations.splice(WQ, 1), WQ
      }
      stopAnimation(QQ, WQ, XQ) {}
      removeAnimationGroup(QQ) {
        const WQ = this.animationGroups.indexOf(QQ);
        return -1 !== WQ && this.animationGroups.splice(WQ, 1), this.onAnimationGroupRemovedObservable.notifyObservers(QQ), WQ
      }
      removeMultiMaterial(QQ) {
        const WQ = this.multiMaterials.indexOf(QQ);
        return -1 !== WQ && this.multiMaterials.splice(WQ, 1), this.onMultiMaterialRemovedObservable.notifyObservers(QQ), WQ
      }
      removeMaterial(QQ) {
        const WQ = QQ._indexInSceneMaterialArray;
        if (-1 !== WQ && WQ < this.materials.length) {
          if (WQ !== this.materials.length - 1) {
            const QQ = this.materials[this.materials.length - 1];
            this.materials[WQ] = QQ, QQ._indexInSceneMaterialArray = WQ
          }
          QQ._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(QQ), WQ
      }
      removeActionManager(QQ) {
        const WQ = this.actionManagers.indexOf(QQ);
        return -1 !== WQ && this.actionManagers.splice(WQ, 1), WQ
      }
      removeTexture(QQ) {
        const WQ = this.textures.indexOf(QQ);
        return -1 !== WQ && this.textures.splice(WQ, 1), this.onTextureRemovedObservable.notifyObservers(QQ), WQ
      }
      removeFrameGraph(QQ) {
        const WQ = this.frameGraphs.indexOf(QQ);
        return -1 !== WQ && this.frameGraphs.splice(WQ, 1), this.onFrameGraphRemovedObservable.notifyObservers(QQ), WQ
      }
      removeObjectRenderer(QQ) {
        const WQ = this.objectRenderers.indexOf(QQ);
        return -1 !== WQ && this.objectRenderers.splice(WQ, 1), this.onObjectRendererRemovedObservable.notifyObservers(QQ), WQ
      }
      removePostProcess(QQ) {
        const WQ = this.postProcesses.indexOf(QQ);
        return -1 !== WQ && this.postProcesses.splice(WQ, 1), this.onPostProcessRemovedObservable.notifyObservers(QQ), WQ
      }
      removeEffectLayer(QQ) {
        const WQ = this.effectLayers.indexOf(QQ);
        return -1 !== WQ && this.effectLayers.splice(WQ, 1), this.onEffectLayerRemovedObservable.notifyObservers(QQ), WQ
      }
      addLight(QQ) {
        if (!this._blockEntityCollection) {
          this.lights.push(QQ), this.sortLightsByPriority(), QQ.parent || QQ._addToSceneRootNodes();
          for (const WQ of this.meshes) - 1 === WQ.lightSources.indexOf(QQ) && (WQ.lightSources.push(QQ), WQ._resyncLightSources());
          qQ.b.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(QQ)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(OQ.e.CompareLightsPriority)
      }
      addCamera(QQ) {
        this._blockEntityCollection || (this.cameras.push(QQ), qQ.b.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(QQ)
        })), QQ.parent || QQ._addToSceneRootNodes())
      }
      addSkeleton(QQ) {
        this._blockEntityCollection || (this.skeletons.push(QQ), qQ.b.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(QQ)
        })))
      }
      addParticleSystem(QQ) {
        this._blockEntityCollection || (this.KD.push(QQ), qQ.b.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(QQ)
        })))
      }
      addAnimation(QQ) {
        this._blockEntityCollection || this.animations.push(QQ)
      }
      addAnimationGroup(QQ) {
        this._blockEntityCollection || (this.animationGroups.push(QQ), qQ.b.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(QQ)
        })))
      }
      addMultiMaterial(QQ) {
        this._blockEntityCollection || (this.multiMaterials.push(QQ), qQ.b.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(QQ)
        })))
      }
      addMaterial(QQ) {
        this._blockEntityCollection || QQ.sE() === this && -1 !== QQ._indexInSceneMaterialArray || (QQ._indexInSceneMaterialArray = this.materials.length, this.materials.push(QQ), qQ.b.SetImmediate((() => {
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
        this.frameGraphs.push(QQ), qQ.b.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(QQ)
        }))
      }
      addObjectRenderer(QQ) {
        this.objectRenderers.push(QQ), qQ.b.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(QQ)
        }))
      }
      addPostProcess(QQ) {
        this._blockEntityCollection || (this.postProcesses.push(QQ), qQ.b.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(QQ)
        })))
      }
      addEffectLayer(QQ) {
        this._blockEntityCollection || (this.effectLayers.push(QQ), qQ.b.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(QQ)
        })))
      }
      switchActiveCamera(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = QQ, WQ && QQ.attachControl())
      }
      setActiveCameraById(QQ) {
        const WQ = this.getCameraById(QQ);
        return WQ ? (this.activeCamera = WQ, WQ) : null
      }
      setActiveCameraByName(QQ) {
        const WQ = this.getCameraByName(QQ);
        return WQ ? (this.activeCamera = WQ, WQ) : null
      }
      getAnimationGroupByName(QQ) {
        for (let WQ = 0; WQ < this.animationGroups.length; WQ++)
          if (this.animationGroups[WQ].name === QQ) return this.animationGroups[WQ];
        return null
      }
      _getMaterial(QQ, WQ) {
        for (let XQ = 0; XQ < this.materials.length; XQ++) {
          const QQ = this.materials[XQ];
          if (WQ(QQ)) return QQ
        }
        if (QQ)
          for (let XQ = 0; XQ < this.multiMaterials.length; XQ++) {
            const QQ = this.multiMaterials[XQ];
            if (WQ(QQ)) return QQ
          }
        return null
      }
      getMaterialByUniqueID(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(QQ, WQ)
      }
      getMaterialByUniqueId(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(WQ, (WQ => WQ.uniqueId === QQ))
      }
      getMaterialById(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(WQ, (WQ => WQ.id === QQ))
      }
      getMaterialByName(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(WQ, (WQ => WQ.name === QQ))
      }
      getLastMaterialById(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let XQ = this.materials.length - 1; XQ >= 0; XQ--)
          if (this.materials[XQ].id === QQ) return this.materials[XQ];
        if (WQ)
          for (let XQ = this.multiMaterials.length - 1; XQ >= 0; XQ--)
            if (this.multiMaterials[XQ].id === QQ) return this.multiMaterials[XQ];
        return null
      }
      getTextureByUniqueId(QQ) {
        for (let WQ = 0; WQ < this.textures.length; WQ++)
          if (this.textures[WQ].uniqueId === QQ) return this.textures[WQ];
        return null
      }
      getTextureByName(QQ) {
        for (let WQ = 0; WQ < this.textures.length; WQ++)
          if (this.textures[WQ].name === QQ) return this.textures[WQ];
        return null
      }
      getCameraById(QQ) {
        for (let WQ = 0; WQ < this.cameras.length; WQ++)
          if (this.cameras[WQ].id === QQ) return this.cameras[WQ];
        return null
      }
      getCameraByUniqueId(QQ) {
        for (let WQ = 0; WQ < this.cameras.length; WQ++)
          if (this.cameras[WQ].uniqueId === QQ) return this.cameras[WQ];
        return null
      }
      getCameraByName(QQ) {
        for (let WQ = 0; WQ < this.cameras.length; WQ++)
          if (this.cameras[WQ].name === QQ) return this.cameras[WQ];
        return null
      }
      getBoneById(QQ) {
        for (let WQ = 0; WQ < this.skeletons.length; WQ++) {
          const XQ = this.skeletons[WQ];
          for (let WQ = 0; WQ < XQ.bones.length; WQ++)
            if (XQ.bones[WQ].id === QQ) return XQ.bones[WQ]
        }
        return null
      }
      getBoneByName(QQ) {
        for (let WQ = 0; WQ < this.skeletons.length; WQ++) {
          const XQ = this.skeletons[WQ];
          for (let WQ = 0; WQ < XQ.bones.length; WQ++)
            if (XQ.bones[WQ].name === QQ) return XQ.bones[WQ]
        }
        return null
      }
      getLightByName(QQ) {
        for (let WQ = 0; WQ < this.lights.length; WQ++)
          if (this.lights[WQ].name === QQ) return this.lights[WQ];
        return null
      }
      getLightById(QQ) {
        for (let WQ = 0; WQ < this.lights.length; WQ++)
          if (this.lights[WQ].id === QQ) return this.lights[WQ];
        return null
      }
      getLightByUniqueId(QQ) {
        for (let WQ = 0; WQ < this.lights.length; WQ++)
          if (this.lights[WQ].uniqueId === QQ) return this.lights[WQ];
        return null
      }
      getParticleSystemById(QQ) {
        for (let WQ = 0; WQ < this.KD.length; WQ++)
          if (this.KD[WQ].id === QQ) return this.KD[WQ];
        return null
      }
      getGeometryById(QQ) {
        for (let WQ = 0; WQ < this.geometries.length; WQ++)
          if (this.geometries[WQ].id === QQ) return this.geometries[WQ];
        return null
      }
      _getGeometryByUniqueId(QQ) {
        if (this._geometriesByUniqueId) {
          const WQ = this._geometriesByUniqueId[QQ];
          if (void 0 !== WQ) return this.geometries[WQ]
        } else
          for (let WQ = 0; WQ < this.geometries.length; WQ++)
            if (this.geometries[WQ].uniqueId === QQ) return this.geometries[WQ];
        return null
      }
      getFrameGraphByName(QQ) {
        for (let WQ = 0; WQ < this.frameGraphs.length; WQ++)
          if (this.frameGraphs[WQ].name === QQ) return this.frameGraphs[WQ];
        return null
      }
      pushGeometry(QQ, WQ) {
        return !(!WQ && this._getGeometryByUniqueId(QQ.uniqueId)) && (this.addGeometry(QQ), qQ.b.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(QQ)
        })), !0)
      }
      removeGeometry(QQ) {
        let WQ;
        if (this._geometriesByUniqueId) {
          if (WQ = this._geometriesByUniqueId[QQ.uniqueId], void 0 === WQ) return !1
        } else if (WQ = this.geometries.indexOf(QQ), WQ < 0) return !1;
        if (WQ !== this.geometries.length - 1) {
          const QQ = this.geometries[this.geometries.length - 1];
          QQ && (this.geometries[WQ] = QQ, this._geometriesByUniqueId && (this._geometriesByUniqueId[QQ.uniqueId] = WQ))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[QQ.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(QQ), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(QQ) {
        for (let WQ = 0; WQ < this.meshes.length; WQ++)
          if (this.meshes[WQ].id === QQ) return this.meshes[WQ];
        return null
      }
      getMeshesById(QQ) {
        return this.meshes.filter((function(WQ) {
          return WQ.id === QQ
        }))
      }
      getTransformNodeById(QQ) {
        for (let WQ = 0; WQ < this.transformNodes.length; WQ++)
          if (this.transformNodes[WQ].id === QQ) return this.transformNodes[WQ];
        return null
      }
      getTransformNodeByUniqueId(QQ) {
        for (let WQ = 0; WQ < this.transformNodes.length; WQ++)
          if (this.transformNodes[WQ].uniqueId === QQ) return this.transformNodes[WQ];
        return null
      }
      getTransformNodesById(QQ) {
        return this.transformNodes.filter((function(WQ) {
          return WQ.id === QQ
        }))
      }
      getMeshByUniqueId(QQ) {
        for (let WQ = 0; WQ < this.meshes.length; WQ++)
          if (this.meshes[WQ].uniqueId === QQ) return this.meshes[WQ];
        return null
      }
      getLastMeshById(QQ) {
        for (let WQ = this.meshes.length - 1; WQ >= 0; WQ--)
          if (this.meshes[WQ].id === QQ) return this.meshes[WQ];
        return null
      }
      getLastTransformNodeById(QQ) {
        for (let WQ = this.transformNodes.length - 1; WQ >= 0; WQ--)
          if (this.transformNodes[WQ].id === QQ) return this.transformNodes[WQ];
        return null
      }
      getLastEntryById(QQ) {
        let WQ;
        for (WQ = this.meshes.length - 1; WQ >= 0; WQ--)
          if (this.meshes[WQ].id === QQ) return this.meshes[WQ];
        for (WQ = this.transformNodes.length - 1; WQ >= 0; WQ--)
          if (this.transformNodes[WQ].id === QQ) return this.transformNodes[WQ];
        for (WQ = this.cameras.length - 1; WQ >= 0; WQ--)
          if (this.cameras[WQ].id === QQ) return this.cameras[WQ];
        for (WQ = this.lights.length - 1; WQ >= 0; WQ--)
          if (this.lights[WQ].id === QQ) return this.lights[WQ];
        for (WQ = this.skeletons.length - 1; WQ >= 0; WQ--) {
          const XQ = this.skeletons[WQ];
          for (let WQ = XQ.bones.length - 1; WQ >= 0; WQ--)
            if (XQ.bones[WQ].id === QQ) return XQ.bones[WQ]
        }
        return null
      }
      getNodeById(QQ) {
        const WQ = this.getMeshById(QQ);
        if (WQ) return WQ;
        const XQ = this.getTransformNodeById(QQ);
        if (XQ) return XQ;
        const wQ = this.getLightById(QQ);
        if (wQ) return wQ;
        const qQ = this.getCameraById(QQ);
        if (qQ) return qQ;
        const TQ = this.getBoneById(QQ);
        return TQ || null
      }
      getNodeByName(QQ) {
        const WQ = this.getMeshByName(QQ);
        if (WQ) return WQ;
        const XQ = this.getTransformNodeByName(QQ);
        if (XQ) return XQ;
        const wQ = this.getLightByName(QQ);
        if (wQ) return wQ;
        const qQ = this.getCameraByName(QQ);
        if (qQ) return qQ;
        const TQ = this.getBoneByName(QQ);
        return TQ || null
      }
      getMeshByName(QQ) {
        for (let WQ = 0; WQ < this.meshes.length; WQ++)
          if (this.meshes[WQ].name === QQ) return this.meshes[WQ];
        return null
      }
      getTransformNodeByName(QQ) {
        for (let WQ = 0; WQ < this.transformNodes.length; WQ++)
          if (this.transformNodes[WQ].name === QQ) return this.transformNodes[WQ];
        return null
      }
      getLastSkeletonById(QQ) {
        for (let WQ = this.skeletons.length - 1; WQ >= 0; WQ--)
          if (this.skeletons[WQ].id === QQ) return this.skeletons[WQ];
        return null
      }
      getSkeletonByUniqueId(QQ) {
        for (let WQ = 0; WQ < this.skeletons.length; WQ++)
          if (this.skeletons[WQ].uniqueId === QQ) return this.skeletons[WQ];
        return null
      }
      getSkeletonById(QQ) {
        for (let WQ = 0; WQ < this.skeletons.length; WQ++)
          if (this.skeletons[WQ].id === QQ) return this.skeletons[WQ];
        return null
      }
      getSkeletonByName(QQ) {
        for (let WQ = 0; WQ < this.skeletons.length; WQ++)
          if (this.skeletons[WQ].name === QQ) return this.skeletons[WQ];
        return null
      }
      getMorphTargetManagerById(QQ) {
        for (let WQ = 0; WQ < this.morphTargetManagers.length; WQ++)
          if (this.morphTargetManagers[WQ].uniqueId === QQ) return this.morphTargetManagers[WQ];
        return null
      }
      getMorphTargetById(QQ) {
        for (let WQ = 0; WQ < this.morphTargetManagers.length; ++WQ) {
          const XQ = this.morphTargetManagers[WQ];
          for (let WQ = 0; WQ < XQ.numTargets; ++WQ) {
            const wQ = XQ.getTarget(WQ);
            if (wQ.id === QQ) return wQ
          }
        }
        return null
      }
      getMorphTargetByName(QQ) {
        for (let WQ = 0; WQ < this.morphTargetManagers.length; ++WQ) {
          const XQ = this.morphTargetManagers[WQ];
          for (let WQ = 0; WQ < XQ.numTargets; ++WQ) {
            const wQ = XQ.getTarget(WQ);
            if (wQ.name === QQ) return wQ
          }
        }
        return null
      }
      getPostProcessByName(QQ) {
        for (let WQ = 0; WQ < this.postProcesses.length; ++WQ) {
          const XQ = this.postProcesses[WQ];
          if (XQ.name === QQ) return XQ
        }
        return null
      }
      isActiveMesh(QQ) {
        return -1 !== this._activeMeshes.indexOf(QQ)
      }
      get uid() {
        return this._uid || (this._uid = wQ.g.RandomId()), this._uid
      }
      addExternalData(QQ, WQ) {
        return this._externalData || (this._externalData = new FQ), this._externalData.add(QQ, WQ)
      }
      getExternalData(QQ) {
        return this._externalData ? this._externalData.get(QQ) : null
      }
      getOrAddExternalDataWithFactory(QQ, WQ) {
        return this._externalData || (this._externalData = new FQ), this._externalData.getOrAddWithFactory(QQ, WQ)
      }
      removeExternalData(QQ) {
        return this._externalData.remove(QQ)
      }
      _evaluateSubMesh(QQ, WQ, XQ, wQ) {
        if (wQ || QQ.isInFrustum(this._frustumPlanes)) {
          for (let wQ = 0, qQ = this._evaluateSubMeshStage; wQ < qQ.length; wQ++) {
            qQ[wQ].action(WQ, QQ)
          }
          const XQ = QQ.lj();
          null !== XQ && void 0 !== XQ && (XQ.hasRenderTargetTextures && null != XQ.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(XQ) && (this._processedMaterials.push(XQ), this._materialsRenderTargets.concatWithNoDuplicate(XQ.getRenderTargetTextures())), this._renderingManager.dispatch(QQ, WQ, XQ))
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
            const WQ = this.activeCameras[QQ];
            WQ && WQ._activeMeshes && WQ._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let QQ = 0; QQ < this.textures.length; QQ++) {
            const WQ = this.textures[QQ];
            WQ && WQ.renderList && WQ.freeRenderingGroups()
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
          WQ = arguments.length > 1 ? arguments[1] : void 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          TQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const zQ = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const QQ of zQ) QQ.objectRenderer._freezeActiveMeshes(wQ);
          return this._freezeActiveMeshesCancel = (0, qQ.e)((() => {
            let QQ = !0,
              WQ = !0;
            for (const XQ of zQ) QQ && (QQ = XQ.objectRenderer._isFrozen), WQ && (WQ = null !== XQ.objectRenderer._freezeActiveMeshesCancel);
            if (QQ) return !0;
            if (!WQ) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = TQ, this._skipEvaluateActiveMeshesCompletely = QQ, WQ?.()
          }), ((QQ, WQ) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), WQ) {
              const WQ = "Scene: Timeout while waiting for meshes to be frozen.";
              XQ ? XQ(WQ) : (QX.b.Error(WQ), QQ && QX.b.Error(QQ))
            } else {
              const WQ = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              XQ ? XQ(WQ) : (QX.b.Error(WQ), QQ && (QX.b.Error(QQ), QQ.stack && QX.b.Error(QQ.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = TQ, this._skipEvaluateActiveMeshesCompletely = QQ, wQ)
              for (let QQ = 0; QQ < this._activeMeshes.length; QQ++) this._activeMeshes.data[QQ]._freeze();
            WQ && WQ()
          } else XQ && XQ("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let QQ = 0; QQ < this.meshes.length; QQ++) {
          const WQ = this.meshes[QQ];
          WQ._internalAbstractMeshDataInfo && (WQ._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const QQ = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const WQ of QQ) WQ.objectRenderer._unfreezeActiveMeshes()
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
            for (let WQ = 0; WQ < QQ; WQ++) {
              this._activeMeshes.data[WQ].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const QQ = this._activeParticleSystems.length;
            for (let WQ = 0; WQ < QQ; WQ++) this._activeParticleSystems.data[WQ].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let qQ = 0, TQ = this._beforeEvaluateActiveMeshStage; qQ < TQ.length; qQ++) {
          TQ[qQ].action()
        }
        const QQ = this.getActiveMeshCandidates(),
          WQ = QQ.length,
          XQ = nQ.d.Enabled,
          wQ = this.customLODSelector;
        for (let qQ = 0; qQ < WQ; qQ++) {
          const WQ = QQ.data[qQ],
            TQ = !wQ && !WQ.pE && !WQ._internalMeshDataInfo?._LODLevels.length;
          let zQ, sQ;
          if ((TQ || (zQ = WQ._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), zQ ? zQ[1] = -1 : (zQ = [WQ, -1], WQ._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, zQ))), !WQ.isBlocked) && (XQ && this._totalVertices.addCount(WQ.getTotalVertices(), !1), WQ.isReady() && WQ.isEnabled() && !WQ.oB.hasAZeroComponent)) {
            if (WQ.computeWorldMatrix(), WQ.actionManager && WQ.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(WQ), TQ) sQ = WQ;
            else if (sQ = wQ ? wQ(WQ, this.activeCamera) : WQ.getLOD(this.activeCamera), zQ[0] = sQ, zQ[1] = this._frameId, void 0 === sQ || null === sQ) continue;
            if (sQ !== WQ && 0 !== sQ.billboardMode && sQ.computeWorldMatrix(), WQ._preActivate(), WQ.isVisible && WQ.visibility > 0 && 0 !== (WQ.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || WQ.bj || WQ.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(WQ), this.activeCamera._activeMeshes.push(WQ), sQ !== WQ && sQ._activate(this._renderId, !1);
              for (let QQ = 0, XQ = this._preActiveMeshStage; QQ < XQ.length; QQ++) {
                XQ[QQ].action(WQ)
              }
              WQ._activate(this._renderId, !1) && (WQ.pE ? WQ._internalAbstractMeshDataInfo._actAsRegularMesh && (sQ = WQ) : sQ._internalAbstractMeshDataInfo._onlyForInstances = !1, sQ._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(WQ, sQ)), WQ._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let QQ = 0; QQ < this.KD.length; QQ++) {
            const WQ = this.KD[QQ];
            if (!WQ.isStarted() || !WQ.emitter) continue;
            const XQ = WQ.emitter;
            XQ.position && !XQ.isEnabled() || (this._activeParticleSystems.push(WQ), WQ.animate(), this._renderingManager.dispatchParticles(WQ))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(QQ) {
        this._skeletonsEnabled && QQ.skeleton && (this._activeSkeletons.pushNoDuplicate(QQ.skeleton) && (QQ.skeleton.prepare(), this._activeBones.addCount(QQ.skeleton.bones.length, !1)), QQ.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(QQ) && this.frameGraph && QQ.applySkeleton(QQ.skeleton))
      }
      _activeMesh(QQ, WQ) {
        this._prepareSkeleton(WQ);
        let XQ = QQ.UqQ || QQ.pE || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || WQ.bj;
        if (WQ && WQ.ZD && WQ.ZD.length > 0) {
          const wQ = this.getActiveSubMeshCandidates(WQ),
            qQ = wQ.length;
          XQ = XQ || 1 === qQ;
          for (let TQ = 0; TQ < qQ; TQ++) {
            const qQ = wQ.data[TQ];
            this._evaluateSubMesh(qQ, WQ, QQ, XQ)
          }
        }
      }
      updateTransformMatrix(QQ) {
        const WQ = this.activeCamera;
        if (WQ)
          if (WQ._renderingMultiview) {
            const XQ = WQ._rigCameras[0],
              wQ = WQ._rigCameras[1];
            this.setTransformMatrix(XQ.getViewMatrix(), XQ.getProjectionMatrix(QQ), wQ.getViewMatrix(), wQ.getProjectionMatrix(QQ))
          } else this.setTransformMatrix(WQ.getViewMatrix(), WQ.getProjectionMatrix(QQ))
      }
      _bindFrameBuffer(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (QQ && QQ._multiviewTexture ? QQ._multiviewTexture._bindFrameBuffer() : QQ && QQ.outputRenderTarget ? QQ.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), WQ && this._clearFrameBuffer(QQ)
      }
      _clearFrameBuffer(QQ) {
        if (QQ && QQ._multiviewTexture);
        else if (QQ && QQ.outputRenderTarget && !QQ._renderingMultiview) {
          const WQ = QQ.outputRenderTarget;
          WQ.onClearObservable.hasObservers() ? WQ.onClearObservable.notifyObservers(this._engine) : WQ.skipInitialClear || QQ.isRightCamera || (this.autoClear && this._engine.clear(WQ.clearColor || this._clearColor, !WQ._cleared, !0, !0), WQ._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(QQ, WQ) {
        let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (QQ && QQ._skipRendering) return;
        const qQ = this._engine;
        if (this._activeCamera = QQ, !this.activeCamera) throw new Error("Active camera not set");
        if (qQ.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && XQ) {
          let WQ = !0;
          QQ._renderingMultiview && QQ.outputRenderTarget && (WQ = QQ.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, QQ.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), QQ._renderingMultiview && QQ.outputRenderTarget && (QQ.outputRenderTarget.skipInitialClear = WQ)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = QQ.outputRenderTarget?.renderPassId ?? QQ.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let wQ = 0; wQ < this._softwareSkinnedMeshes.length; wQ++) {
          const QQ = this._softwareSkinnedMeshes.data[wQ];
          QQ.applySkeleton(QQ.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), QQ.customRenderTargets && QQ.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(QQ.customRenderTargets), WQ && WQ.customRenderTargets && WQ.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(WQ.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let wQ = 0, sQ = this._gatherActiveCameraRenderTargetsStage; wQ < sQ.length; wQ++) {
          sQ[wQ].action(this._renderTargets)
        }
        let TQ = !1;
        if (this.renderTargetsEnabled) {
          let QQ;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            wQ.g.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const WQ = this.getBoundingBoxRenderer?.();
            for (let XQ = 0; XQ < this._renderTargets.length; XQ++) {
              const wQ = this._renderTargets.data[XQ];
              if (wQ._shouldRender()) {
                this._renderId++;
                const XQ = wQ.activeCamera && wQ.activeCamera !== this.activeCamera;
                WQ && !QQ && (QQ = WQ.renderList.length > 0 ? WQ.renderList.data.slice() : [], QQ.length = WQ.renderList.length), wQ.render(XQ, this.dumpNextRenderTargets), TQ = !0
              }
            }
            WQ && QQ && (WQ.renderList.data = QQ, WQ.renderList.length = QQ.length), wQ.g.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const WQ = this.getBoundingBoxRenderer?.();
            WQ && !QQ && (QQ = WQ.renderList.length > 0 ? WQ.renderList.data.slice() : [], QQ.length = WQ.renderList.length);
            for (let QQ = 0, XQ = this._cameraDrawRenderTargetStage; QQ < XQ.length; QQ++) {
              TQ = XQ[QQ].action(this.activeCamera) || TQ
            }
            WQ && QQ && (WQ.renderList.data = QQ, WQ.renderList.length = QQ.length)
          }
          this._intermediateRendering = !1
        }
        TQ && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || QQ._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let wQ = 0, sQ = this._beforeCameraDrawStage; wQ < sQ.length; wQ++) {
          sQ[wQ].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const zQ = qQ.snapshotRendering && 1 === qQ.snapshotRenderingMode;
        zQ && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !zQ), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let wQ = 0, sQ = this._afterCameraDrawStage; wQ < sQ.length; wQ++) {
          sQ[wQ].action(this.activeCamera)
        }
        if (this.postProcessManager && !QQ._multiviewTexture) {
          const WQ = QQ.outputRenderTarget ? QQ.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(QQ.isIntermediate, WQ)
        }
        for (let wQ = 0, sQ = this._afterCameraPostProcessStage; wQ < sQ.length; wQ++) {
          sQ[wQ].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === QQ.cameraRigMode || QQ._renderingMultiview) return QQ._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(QQ, void 0, WQ), void this.onAfterRenderCameraObservable.notifyObservers(QQ);
        if (QQ._useMultiviewToSingleView) this._renderMultiviewToSingleView(QQ);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(QQ);
          for (let WQ = 0; WQ < QQ._rigCameras.length; WQ++) this._renderForCamera(QQ._rigCameras[WQ], QQ)
        }
        this._activeCamera = QQ, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(QQ)
      }
      _checkIntersections() {
        for (let QQ = 0; QQ < this._meshesForIntersections.length; QQ++) {
          const WQ = this._meshesForIntersections.data[QQ];
          if (WQ.actionManager)
            for (let QQ = 0; WQ.actionManager && QQ < WQ.actionManager.actions.length; QQ++) {
              const XQ = WQ.actionManager.actions[QQ];
              if (12 === XQ.trigger || 13 === XQ.trigger) {
                const QQ = XQ.getTriggerParameter(),
                  wQ = QQ.mesh ? QQ.mesh : QQ,
                  qQ = wQ.BqQ(WQ, QQ.usePreciseIntersection),
                  TQ = WQ._intersectionsInProgress.indexOf(wQ);
                qQ && -1 === TQ ? 12 === XQ.trigger ? (XQ._executeCurrent(jQ.CreateNew(WQ, void 0, wQ)), WQ._intersectionsInProgress.push(wQ)) : 13 === XQ.trigger && WQ._intersectionsInProgress.push(wQ) : !qQ && TQ > -1 && (13 === XQ.trigger && XQ._executeCurrent(jQ.CreateNew(WQ, void 0, wQ)), WQ.actionManager.hasSpecificTrigger(13, (QQ => {
                  const WQ = QQ.mesh ? QQ.mesh : QQ;
                  return wQ === WQ
                })) && 13 !== XQ.trigger || WQ._intersectionsInProgress.splice(TQ, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(QQ) {}
      _animate(QQ) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let QQ = Math.max(TX.MinDeltaTime, Math.min(this._engine.getDeltaTime(), TX.MaxDeltaTime)) + this._timeAccumulator;
          const WQ = this._engine.getTimeStep(),
            XQ = 1e3 / WQ / 1e3;
          let wQ = 0;
          const qQ = this._engine.getLockstepMaxSteps();
          let TQ = Math.floor(QQ / WQ);
          for (TQ = Math.min(TQ, qQ); QQ > 0 && wQ < TQ;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = WQ * XQ, this._animate(WQ), this.onAfterAnimationsObservable.notifyObservers(this), this.Dk && this._advancePhysicsEngineStep(WQ), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, wQ++, QQ -= WQ;
          this._timeAccumulator = QQ < 0 ? 0 : QQ
        } else {
          const QQ = this.useConstantAnimationDeltaTime ? 16 : Math.max(TX.MinDeltaTime, Math.min(this._engine.getDeltaTime(), TX.MaxDeltaTime));
          this._animationRatio = .06 * QQ, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.Dk && this._advancePhysicsEngineStep(QQ)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(QQ) {
        if (QQ?.outputRenderTarget && !QQ?.isRigCamera && (QQ.outputRenderTarget._cleared = !1), QQ?.rigCameras?.length)
          for (let WQ = 0; WQ < QQ.rigCameras.length; ++WQ) {
            const XQ = QQ.rigCameras[WQ].outputRenderTarget;
            XQ && (XQ._cleared = !1)
          }
      }
      resetDrawCache(QQ) {
        if (this.meshes)
          for (const WQ of this.meshes) WQ.resetDrawCache(QQ)
      }
      _renderWithFrameGraph() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          WQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, QQ)
          for (const XQ of this.cameras)
            if (XQ.update(), 0 !== XQ.cameraRigMode)
              for (let QQ = 0; QQ < XQ._rigCameras.length; QQ++) XQ._rigCameras[QQ].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(WQ)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(QQ) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const WQ = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), wQ.g.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let QQ = 0; QQ < this._renderTargets.length; QQ++) {
            const XQ = this._renderTargets.data[QQ],
              wQ = XQ.activeCamera || WQ;
            this._renderRenderTarget(XQ, wQ, !0, this.dumpNextRenderTargets)
          }
          wQ.g.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let XQ = 0, wQ = this._beforeClearStage; XQ < wQ.length; XQ++) {
          wQ[XQ].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const WQ = this.getActiveMeshCandidates(),
            XQ = WQ.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let QQ = 0; QQ < XQ; QQ++) {
                const XQ = WQ.data[QQ];
                XQ._internalAbstractMeshDataInfo._wasActiveLastFrame && XQ.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const QQ = this._activeParticleSystems.length;
              for (let WQ = 0; WQ < QQ; WQ++) this._activeParticleSystems.data[WQ].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let wQ = 0; wQ < XQ; wQ++) {
              const XQ = WQ.data[wQ];
              XQ._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, XQ.isBlocked || (this._totalVertices.addCount(XQ.getTotalVertices(), !1), XQ.isReady() && XQ.isEnabled() && !XQ.oB.hasAZeroComponent && (XQ.computeWorldMatrix(QQ), XQ.actionManager && XQ.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(XQ)))
            }
            if (this.particlesEnabled)
              for (let QQ = 0; QQ < this.KD.length; QQ++) {
                const WQ = this.KD[QQ];
                if (!WQ.isStarted() || !WQ.emitter) continue;
                const XQ = WQ.emitter;
                XQ.position && !XQ.isEnabled() || (this._activeParticleSystems.push(WQ), WQ.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, QQ._shouldRender()) {
          if (this._renderId++, this.activeCamera = WQ, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), QQ.render(XQ, wQ)
        }
        this._intermediateRendering = !1
      }
      render() {
        let QQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.rG) return;
        const XQ = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(QQ, WQ)
        } finally {
          this._renderingMeshEvaluationDepth = XQ
        }
      }
      _renderFrame(QQ, WQ) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), yQ.e.sE = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const XQ of this.activeCameras) this._checkCameraRenderTarget(XQ);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), WQ || this.animate();
        for (let XQ = 0, wQ = this._beforeCameraUpdateStage; XQ < wQ.length; XQ++) {
          wQ[XQ].action()
        }
        if (QQ)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let XQ = 0; XQ < this.activeCameras.length; XQ++) {
              const QQ = this.activeCameras[XQ];
              if (QQ.update(), 0 !== QQ.cameraRigMode)
                for (let WQ = 0; WQ < QQ._rigCameras.length; WQ++) QQ._rigCameras[WQ].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let XQ = 0; XQ < this.activeCamera._rigCameras.length; XQ++) this.activeCamera._rigCameras[XQ].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(QQ, WQ);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const QQ = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            wQ.g.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let WQ = 0; WQ < this.customRenderTargets.length; WQ++) {
              const XQ = this.customRenderTargets[WQ],
                wQ = XQ.activeCamera || this.activeCamera;
              this._renderRenderTarget(XQ, wQ, QQ !== wQ, this.dumpNextRenderTargets)
            }
            wQ.g.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = QQ?.renderPassId ?? 0, this.activeCamera = QQ, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let WQ = 0, XQ = this._beforeClearStage; WQ < XQ.length; WQ++) {
            XQ[WQ].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let WQ = 0, XQ = this._gatherRenderTargetsStage; WQ < XQ.length; WQ++) {
            XQ[WQ].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let WQ = 0; WQ < this.activeCameras.length; WQ++) this._processSubCameras(this.activeCameras[WQ], WQ > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let XQ = 0, wQ = this._afterRenderStage; XQ < wQ.length; XQ++) {
          wQ[XQ].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let QQ = 0; QQ < this._toBeDisposed.length; QQ++) {
            const WQ = this._toBeDisposed[QQ];
            WQ && WQ.dispose()
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
        if (this.rG) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, UQ.d)(this.stopAllAnimations)) {
          for (const QQ of this._activeAnimatables) QQ.onAnimationEndObservable.clear(), QQ.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const QQ = this._activeRequests.slice();
        for (const TQ of QQ) TQ.abort();
        this._activeRequests.length = 0;
        try {
          this.yE.notifyObservers(this)
        } catch (qQ) {
          QX.b.Error("An error occurred while calling onDisposeObservable!", qQ)
        }
        this.detachControl();
        const WQ = this._engine.getInputElement?.();
        if (WQ)
          for (let TQ = 0; TQ < this.cameras.length; TQ++) this.cameras[TQ].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (QQ => QQ.dispose(!0))), this._disposeList(this.transformNodes, (QQ => QQ.dispose(!0)));
        const XQ = this.cameras;
        this._disposeList(XQ), this._disposeList(this.KD), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let wQ = this._engine.scenes.indexOf(this);
        if (wQ > -1 && this._engine.scenes.splice(wQ, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, yQ.l)(), GQ.d._LastCreatedScene === this) {
          GQ.d._LastCreatedScene = null;
          let QQ = GQ.d.Instances.length - 1;
          for (; QQ >= 0;) {
            const WQ = GQ.d.Instances[QQ];
            if (WQ.scenes.length > 0) {
              GQ.d._LastCreatedScene = WQ.scenes[this._engine.scenes.length - 1];
              break
            }
            QQ--
          }
        }
        wQ = this._engine._virtualScenes.indexOf(this), wQ > -1 && this._engine._virtualScenes.splice(wQ, 1), this._engine.wipeCaches(!0), this.yE.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(QQ, WQ) {
        const XQ = QQ.slice(0);
        WQ = WQ ?? (QQ => QQ.dispose());
        for (const wQ of XQ) WQ(wQ);
        QQ.length = 0
      }
      get rG() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let QQ = 0; QQ < this.meshes.length; QQ++) {
          const WQ = this.meshes[QQ].geometry;
          WQ && WQ.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const QQ of this.textures) {
          QQ._buffer && (QQ._buffer = null)
        }
      }
      getWorldExtends(QQ) {
        const WQ = new gQ.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          XQ = new gQ.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        QQ = QQ || (() => !0);
        const wQ = this.meshes.filter(QQ);
        for (const qQ of wQ) {
          if (qQ.computeWorldMatrix(!0), !qQ.ZD || 0 === qQ.ZD.length || qQ.infiniteDistance) continue;
          const QQ = qQ.uC(),
            wQ = QQ.boundingBox.minimumWorld,
            TQ = QQ.boundingBox.maximumWorld;
          gQ.s.CheckExtends(wQ, WQ, XQ), gQ.s.CheckExtends(TQ, WQ, XQ)
        }
        return WQ.x === Number.MAX_VALUE ? {
          min: gQ.s.Zero(),
          max: gQ.s.Zero()
        } : {
          min: WQ,
          max: XQ
        }
      }
      createPickingRay(QQ, WQ, XQ, wQ) {
        throw (0, UQ.i)("Ray")
      }
      createPickingRayToRef(QQ, WQ, XQ, wQ, qQ) {
        throw (0, UQ.i)("Ray")
      }
      createPickingRayInCameraSpace(QQ, WQ, XQ) {
        throw (0, UQ.i)("Ray")
      }
      createPickingRayInCameraSpaceToRef(QQ, WQ, XQ, wQ) {
        throw (0, UQ.i)("Ray")
      }
      tr(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = (0, UQ.i)("Ray", !0);
        return zQ && QX.b.Warn(zQ), new IQ.b
      }
      pickWithBoundingInfo(QQ, WQ, XQ, wQ, qQ) {
        const TQ = (0, UQ.i)("Ray", !0);
        return TQ && QX.b.Warn(TQ), new IQ.b
      }
      pickWithRay(QQ, WQ, XQ, wQ) {
        throw (0, UQ.i)("Ray")
      }
      multiPick(QQ, WQ, XQ, wQ, qQ) {
        throw (0, UQ.i)("Ray")
      }
      multiPickWithRay(QQ, WQ, XQ) {
        throw (0, UQ.i)("Ray")
      }
      setPointerOverMesh(QQ, WQ, XQ) {
        this._inputManager.setPointerOverMesh(QQ, WQ, XQ)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const QQ of this.geometries) QQ._rebuild();
        for (const QQ of this.meshes) QQ._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const QQ of this._components) QQ.rebuild();
        for (const QQ of this.KD) QQ.rebuild();
        if (this.spriteManagers)
          for (const QQ of this.spriteManagers) QQ.rebuild()
      }
      _rebuildTextures() {
        for (const QQ of this.textures) QQ._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(QQ, WQ, XQ) {
        if (void 0 === WQ) return QQ;
        const wQ = [];
        for (const qQ in QQ) {
          const TQ = QQ[qQ];
          PQ.d && PQ.d.MatchesQuery(TQ, WQ) && (!XQ || XQ(TQ)) && wQ.push(TQ)
        }
        return wQ
      }
      getMeshesByTags(QQ, WQ) {
        return this._getByTags(this.meshes, QQ, WQ)
      }
      getCamerasByTags(QQ, WQ) {
        return this._getByTags(this.cameras, QQ, WQ)
      }
      getLightsByTags(QQ, WQ) {
        return this._getByTags(this.lights, QQ, WQ)
      }
      getMaterialByTags(QQ, WQ) {
        return this._getByTags(this.materials, QQ, WQ).concat(this._getByTags(this.multiMaterials, QQ, WQ))
      }
      getTransformNodesByTags(QQ, WQ) {
        return this._getByTags(this.transformNodes, QQ, WQ)
      }
      setRenderingOrder(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(QQ, WQ, XQ, wQ)
      }
      setRenderingAutoClearDepthStencil(QQ, WQ) {
        let XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(QQ, WQ, XQ, wQ)
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
      markAllMaterialsAsDirty(QQ, WQ) {
        if (!this._blockMaterialDirtyMechanism)
          for (const XQ of this.materials) WQ && !WQ(XQ) || XQ.KWQ(QQ)
      }
      _loadFile(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        const sQ = (0, ZQ.n)(QQ, WQ, XQ, wQ ? this.offlineProvider : void 0, qQ, TQ, zQ);
        return this._activeRequests.push(sQ), sQ.onCompleteObservable.add((QQ => {
          this._activeRequests.splice(this._activeRequests.indexOf(QQ), 1)
        })), sQ
      }
      async _loadFileAsync(QQ, WQ, XQ, wQ, qQ) {
        return await new Promise(((TQ, zQ) => {
          this._loadFile(QQ, (QQ => {
            TQ(QQ)
          }), WQ, XQ, wQ, ((QQ, WQ) => {
            zQ(WQ)
          }), qQ)
        }))
      }
      async _loadDelayedFileAsync(QQ, WQ, XQ) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const wQ = `${QQ}|${WQ?"binary":"string"}`;
        let qQ = this._delayedFileRequests.get(wQ);
        if (!qQ) {
          qQ = WQ ? this._loadFileAsync(QQ, void 0, XQ, !0) : this._loadFileAsync(QQ, void 0, XQ, !1);
          const TQ = qQ;
          (async () => {
            try {
              await TQ
            } catch {}
            this._delayedFileRequests?.delete(wQ)
          })(), this._delayedFileRequests.set(wQ, qQ)
        }
        return await qQ
      }
      _requestFile(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        const sQ = (0, ZQ.A)(QQ, WQ, XQ, wQ ? this.offlineProvider : void 0, qQ, TQ, zQ);
        return this._activeRequests.push(sQ), sQ.onCompleteObservable.add((QQ => {
          this._activeRequests.splice(this._activeRequests.indexOf(QQ), 1)
        })), sQ
      }
      async _requestFileAsync(QQ, WQ, XQ, wQ, qQ) {
        return await new Promise(((TQ, zQ) => {
          this._requestFile(QQ, (QQ => {
            TQ(QQ)
          }), WQ, XQ, wQ, (QQ => {
            zQ(QQ)
          }), qQ)
        }))
      }
      _readFile(QQ, WQ, XQ, wQ, qQ) {
        const TQ = (0, ZQ.u)(QQ, WQ, XQ, wQ, qQ);
        return this._activeRequests.push(TQ), TQ.onCompleteObservable.add((QQ => {
          this._activeRequests.splice(this._activeRequests.indexOf(QQ), 1)
        })), TQ
      }
      async _readFileAsync(QQ, WQ, XQ) {
        return await new Promise(((wQ, qQ) => {
          this._readFile(QQ, (QQ => {
            wQ(QQ)
          }), WQ, XQ, (QQ => {
            qQ(QQ)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, UQ.i)("performanceViewerSceneExtension")
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
    TX.FOGMODE_NONE = 0, TX.FOGMODE_EXP = 1, TX.FOGMODE_EXP2 = 2, TX.FOGMODE_LINEAR = 3, TX.MinDeltaTime = 1, TX.MaxDeltaTime = 1e3, TX._OriginalDefaultMaterialFactory = TX.DefaultMaterialFactory;
    let zX = !1;

    function sX() {
      zX || (zX = !0, (0, WX.d)("BABYLON.Scene", TX))
    }(MQ = TX.prototype).sortActiveAnimatables ?? (MQ.sortActiveAnimatables = (0, UQ.h)("Scene", "sortActiveAnimatables")), (QW = TX.prototype).beginWeightedAnimation ?? (QW.beginWeightedAnimation = (0, UQ.h)("Scene", "beginWeightedAnimation")), (WW = TX.prototype).beginAnimation ?? (WW.beginAnimation = (0, UQ.h)("Scene", "beginAnimation")), (XW = TX.prototype).beginHierarchyAnimation ?? (XW.beginHierarchyAnimation = (0, UQ.h)("Scene", "beginHierarchyAnimation")), (wW = TX.prototype).beginDirectAnimation ?? (wW.beginDirectAnimation = (0, UQ.h)("Scene", "beginDirectAnimation")), (qW = TX.prototype).beginDirectHierarchyAnimation ?? (qW.beginDirectHierarchyAnimation = (0, UQ.h)("Scene", "beginDirectHierarchyAnimation")), (TW = TX.prototype).getAnimatableByTarget ?? (TW.getAnimatableByTarget = (0, UQ.h)("Scene", "getAnimatableByTarget")), (zW = TX.prototype).getAllAnimatablesByTarget ?? (zW.getAllAnimatablesByTarget = (0, UQ.h)("Scene", "getAllAnimatablesByTarget")), (sW = TX.prototype).stopAllAnimations ?? (sW.stopAllAnimations = (0, UQ.h)("Scene", "stopAllAnimations")), (FW = TX.prototype).getSoundByName ?? (FW.getSoundByName = (0, UQ.h)("Scene", "getSoundByName")), (PW = TX.prototype).createOrUpdateSelectionOctree ?? (PW.createOrUpdateSelectionOctree = (0, UQ.h)("Scene", "createOrUpdateSelectionOctree")), (gW = TX.prototype).createDefaultLight ?? (gW.createDefaultLight = (0, UQ.h)("Scene", "createDefaultLight")), (JW = TX.prototype).createDefaultCamera ?? (JW.createDefaultCamera = (0, UQ.h)("Scene", "createDefaultCamera")), (rW = TX.prototype).createDefaultCameraOrLight ?? (rW.createDefaultCameraOrLight = (0, UQ.h)("Scene", "createDefaultCameraOrLight")), (IW = TX.prototype).createDefaultSkybox ?? (IW.createDefaultSkybox = (0, UQ.h)("Scene", "createDefaultSkybox")), (jW = TX.prototype).createDefaultEnvironment ?? (jW.createDefaultEnvironment = (0, UQ.h)("Scene", "createDefaultEnvironment")), (BW = TX.prototype).createDefaultVRExperience ?? (BW.createDefaultVRExperience = (0, UQ.h)("Scene", "createDefaultVRExperience")), (yW = TX.prototype).createDefaultXRExperienceAsync ?? (yW.createDefaultXRExperienceAsync = (0, UQ.h)("Scene", "createDefaultXRExperienceAsync")), (VW = TX.prototype).getGlowLayerByName ?? (VW.getGlowLayerByName = (0, UQ.h)("Scene", "getGlowLayerByName")), (DW = TX.prototype).getHighlightLayerByName ?? (DW.getHighlightLayerByName = (0, UQ.h)("Scene", "getHighlightLayerByName")), (pW = TX.prototype).getSelectionOutlineLayerByName ?? (pW.getSelectionOutlineLayerByName = (0, UQ.h)("Scene", "getSelectionOutlineLayerByName")), (GW = TX.prototype).removeLensFlareSystem ?? (GW.removeLensFlareSystem = (0, UQ.h)("Scene", "removeLensFlareSystem")), (UW = TX.prototype).addLensFlareSystem ?? (UW.addLensFlareSystem = (0, UQ.h)("Scene", "addLensFlareSystem")), (bW = TX.prototype).getLensFlareSystemByName ?? (bW.getLensFlareSystemByName = (0, UQ.h)("Scene", "getLensFlareSystemByName")), (vW = TX.prototype).getLensFlareSystemByID ?? (vW.getLensFlareSystemByID = (0, UQ.h)("Scene", "getLensFlareSystemByID")), (dW = TX.prototype).getLensFlareSystemById ?? (dW.getLensFlareSystemById = (0, UQ.h)("Scene", "getLensFlareSystemById")), (HW = TX.prototype).getPhysicsEngine ?? (HW.getPhysicsEngine = (0, UQ.h)("Scene", "getPhysicsEngine")), (aW = TX.prototype).enablePhysics ?? (aW.enablePhysics = (0, UQ.h)("Scene", "enablePhysics")), (lW = TX.prototype).disablePhysicsEngine ?? (lW.disablePhysicsEngine = (0, UQ.h)("Scene", "disablePhysicsEngine")), (hW = TX.prototype).isPhysicsEnabled ?? (hW.isPhysicsEnabled = (0, UQ.h)("Scene", "isPhysicsEnabled")), (iW = TX.prototype).deleteCompoundImpostor ?? (iW.deleteCompoundImpostor = (0, UQ.h)("Scene", "deleteCompoundImpostor")), (cW = TX.prototype).removeReflectionProbe ?? (cW.removeReflectionProbe = (0, UQ.h)("Scene", "removeReflectionProbe")), (AW = TX.prototype).addReflectionProbe ?? (AW.addReflectionProbe = (0, UQ.h)("Scene", "addReflectionProbe")), (RW = TX.prototype).getBoundingBoxRenderer ?? (RW.getBoundingBoxRenderer = (0, UQ.h)("Scene", "getBoundingBoxRenderer")), (EW = TX.prototype).enableDepthRenderer ?? (EW.enableDepthRenderer = (0, UQ.h)("Scene", "enableDepthRenderer")), (CW = TX.prototype).disableDepthRenderer ?? (CW.disableDepthRenderer = (0, UQ.h)("Scene", "disableDepthRenderer")), (uW = TX.prototype).enableFluidRenderer ?? (uW.enableFluidRenderer = (0, UQ.h)("Scene", "enableFluidRenderer")), (LW = TX.prototype).disableFluidRenderer ?? (LW.disableFluidRenderer = (0, UQ.h)("Scene", "disableFluidRenderer")), (kW = TX.prototype).enableGeometryBufferRenderer ?? (kW.enableGeometryBufferRenderer = (0, UQ.h)("Scene", "enableGeometryBufferRenderer")), (fW = TX.prototype).disableGeometryBufferRenderer ?? (fW.disableGeometryBufferRenderer = (0, UQ.h)("Scene", "disableGeometryBufferRenderer")), (SW = TX.prototype).enableIblCdfGenerator ?? (SW.enableIblCdfGenerator = (0, UQ.h)("Scene", "enableIblCdfGenerator")), (tW = TX.prototype).disableIblCdfGenerator ?? (tW.disableIblCdfGenerator = (0, UQ.h)("Scene", "disableIblCdfGenerator")), (oW = TX.prototype).getOutlineRenderer ?? (oW.getOutlineRenderer = (0, UQ.h)("Scene", "getOutlineRenderer")), (eW = TX.prototype).enablePrePassRenderer ?? (eW.enablePrePassRenderer = (0, UQ.h)("Scene", "enablePrePassRenderer")), (nW = TX.prototype).disablePrePassRenderer ?? (nW.disablePrePassRenderer = (0, UQ.h)("Scene", "disablePrePassRenderer")), (xW = TX.prototype).enableSubSurfaceForPrePass ?? (xW.enableSubSurfaceForPrePass = (0, UQ.h)("Scene", "enableSubSurfaceForPrePass")), (YW = TX.prototype).disableSubSurfaceForPrePass ?? (YW.disableSubSurfaceForPrePass = (0, UQ.h)("Scene", "disableSubSurfaceForPrePass")), (NW = TX.prototype).pickSprite ?? (NW.pickSprite = (0, UQ.h)("Scene", "pickSprite")), (ZW = TX.prototype).pickSpriteWithRay ?? (ZW.pickSpriteWithRay = (0, UQ.h)("Scene", "pickSpriteWithRay")), (OW = TX.prototype).multiPickSprite ?? (OW.multiPickSprite = (0, UQ.h)("Scene", "multiPickSprite")), (KW = TX.prototype).multiPickSpriteWithRay ?? (KW.multiPickSpriteWithRay = (0, UQ.h)("Scene", "multiPickSpriteWithRay")), (mW = TX.prototype).setPointerOverSprite ?? (mW.setPointerOverSprite = (0, UQ.h)("Scene", "setPointerOverSprite")), (MW = TX.prototype).getPointerOverSprite ?? (MW.getPointerOverSprite = (0, UQ.h)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(TX.prototype, "mainSoundTrack") || Object.defineProperty(TX.prototype, "mainSoundTrack", (0, UQ.g)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(TX.prototype, "soundTracks") || Object.defineProperty(TX.prototype, "soundTracks", (0, UQ.g)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(TX.prototype, "audioEnabled") || Object.defineProperty(TX.prototype, "audioEnabled", (0, UQ.g)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(TX.prototype, "headphone") || Object.defineProperty(TX.prototype, "headphone", (0, UQ.g)("Scene", "headphone")), Object.getOwnPropertyDescriptor(TX.prototype, "audioListenerPositionProvider") || Object.defineProperty(TX.prototype, "audioListenerPositionProvider", (0, UQ.g)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(TX.prototype, "audioListenerRotationProvider") || Object.defineProperty(TX.prototype, "audioListenerRotationProvider", (0, UQ.g)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(TX.prototype, "audioPositioningRefreshRate") || Object.defineProperty(TX.prototype, "audioPositioningRefreshRate", (0, UQ.g)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(TX.prototype, "selectionOctree") || Object.defineProperty(TX.prototype, "selectionOctree", (0, UQ.g)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(TX.prototype, "debugLayer") || Object.defineProperty(TX.prototype, "debugLayer", (0, UQ.g)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(TX.prototype, "gamepadManager") || Object.defineProperty(TX.prototype, "gamepadManager", (0, UQ.g)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(TX.prototype, "simplificationQueue") || Object.defineProperty(TX.prototype, "simplificationQueue", (0, UQ.g)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(TX.prototype, "onBeforePhysicsObservable") || Object.defineProperty(TX.prototype, "onBeforePhysicsObservable", (0, UQ.g)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(TX.prototype, "onAfterPhysicsObservable") || Object.defineProperty(TX.prototype, "onAfterPhysicsObservable", (0, UQ.g)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(TX.prototype, "reflectionProbes") || Object.defineProperty(TX.prototype, "reflectionProbes", (0, UQ.g)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(TX.prototype, "forceShowBoundingBoxes") || Object.defineProperty(TX.prototype, "forceShowBoundingBoxes", (0, UQ.g)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(TX.prototype, "depthPeelingRenderer") || Object.defineProperty(TX.prototype, "depthPeelingRenderer", (0, UQ.g)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(TX.prototype, "useOrderIndependentTransparency") || Object.defineProperty(TX.prototype, "useOrderIndependentTransparency", (0, UQ.g)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(TX.prototype, "fluidRenderer") || Object.defineProperty(TX.prototype, "fluidRenderer", (0, UQ.g)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(TX.prototype, "geometryBufferRenderer") || Object.defineProperty(TX.prototype, "geometryBufferRenderer", (0, UQ.g)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(TX.prototype, "iblCdfGenerator") || Object.defineProperty(TX.prototype, "iblCdfGenerator", (0, UQ.g)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(TX.prototype, "prePassRenderer") || Object.defineProperty(TX.prototype, "prePassRenderer", (0, UQ.g)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(TX.prototype, "subSurfaceConfiguration") || Object.defineProperty(TX.prototype, "subSurfaceConfiguration", (0, UQ.g)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(TX.prototype, "spriteManagers") || Object.defineProperty(TX.prototype, "spriteManagers", (0, UQ.g)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(TX.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(TX.prototype, "onBeforeSpritesRenderingObservable", (0, UQ.g)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(TX.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(TX.prototype, "onAfterSpritesRenderingObservable", (0, UQ.g)("Scene", "onAfterSpritesRenderingObservable"))
  },
  40432: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => wQ,
      e: () => qQ
    });
    class wQ {}
    wQ.NAME_EFFECTLAYER = "EffectLayer", wQ.NAME_LAYER = "Layer", wQ.NAME_LENSFLARESYSTEM = "LensFlareSystem", wQ.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", wQ.NAME_PARTICLESYSTEM = "ParticleSystem", wQ.NAME_GAMEPAD = "Gamepad", wQ.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", wQ.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", wQ.NAME_PREPASSRENDERER = "PrePassRenderer", wQ.NAME_DEPTHRENDERER = "DepthRenderer", wQ.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", wQ.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", wQ.NAME_SPRITE = "Sprite", wQ.NAME_SUBSURFACE = "SubSurface", wQ.NAME_OUTLINERENDERER = "Outline", wQ.NAME_PROCEDURALTEXTURE = "ProceduralTexture", wQ.NAME_SHADOWGENERATOR = "ShadowGenerator", wQ.NAME_OCTREE = "LwQ", wQ.NAME_PHYSICSENGINE = "PhysicsEngine", wQ.NAME_AUDIO = "Audio", wQ.NAME_FLUIDRENDERER = "FluidRenderer", wQ.NAME_IBLCDFGENERATOR = "iblCDFGenerator", wQ.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", wQ.STEP_ISREADYFORMESH_EFFECTLAYER = 0, wQ.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, wQ.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, wQ.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, wQ.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, wQ.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, wQ.STEP_BEFORECAMERADRAW_PREPASS = 0, wQ.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, wQ.STEP_BEFORECAMERADRAW_LAYER = 2, wQ.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, wQ.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, wQ.STEP_BEFORERENDERINGMESH_PREPASS = 0, wQ.STEP_BEFORERENDERINGMESH_OUTLINE = 1, wQ.STEP_AFTERRENDERINGMESH_PREPASS = 0, wQ.STEP_AFTERRENDERINGMESH_OUTLINE = 1, wQ.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, wQ.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, wQ.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, wQ.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, wQ.STEP_BEFORECLEAR_PREPASS = 1, wQ.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, wQ.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, wQ.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, wQ.STEP_AFTERCAMERADRAW_PREPASS = 0, wQ.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, wQ.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, wQ.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, wQ.STEP_AFTERCAMERADRAW_LAYER = 4, wQ.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, wQ.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, wQ.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, wQ.STEP_AFTERRENDER_AUDIO = 0, wQ.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, wQ.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, wQ.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, wQ.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, wQ.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, wQ.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, wQ.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, wQ.STEP_POINTERMOVE_SPRITE = 0, wQ.STEP_POINTERDOWN_SPRITE = 0, wQ.STEP_POINTERUP_SPRITE = 0;
    class qQ extends Array {
      constructor(QQ) {
        super(...QQ)
      }
      static Create() {
        return Object.create(qQ.prototype)
      }
      registerStep(QQ, WQ, XQ) {
        let wQ, qQ = 0;
        for (; qQ < this.length; qQ++) {
          if (wQ = this[qQ].index, QQ < wQ) break
        }
        this.splice(qQ, 0, {
          index: QQ,
          component: WQ,
          action: XQ.bind(WQ)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  40260: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => zQ,
      h: () => sQ,
      k: () => wQ,
      n: () => qQ,
      p: () => TQ
    });

    function wQ(QQ, WQ, XQ, wQ, qQ, TQ) {
      function zQ(QQ) {
        if (void 0 !== QQ && "function" !== typeof QQ) throw new TypeError("Function expected");
        return QQ
      }
      for (var sQ, FQ = wQ.kind, PQ = "getter" === FQ ? "get" : "setter" === FQ ? "set" : "value", gQ = !WQ && QQ ? wQ.static ? QQ : QQ.prototype : null, JQ = WQ || (gQ ? Object.getOwnPropertyDescriptor(gQ, wQ.name) : {}), rQ = !1, IQ = XQ.length - 1; IQ >= 0; IQ--) {
        var jQ = {};
        for (var BQ in wQ) jQ[BQ] = "access" === BQ ? {} : wQ[BQ];
        for (var BQ in wQ.access) jQ.access[BQ] = wQ.access[BQ];
        jQ.addInitializer = function(QQ) {
          if (rQ) throw new TypeError("Cannot add initializers after decoration has completed");
          TQ.push(zQ(QQ || null))
        };
        var yQ = (0, XQ[IQ])("accessor" === FQ ? {
          get: JQ.get,
          set: JQ.set
        } : JQ[PQ], jQ);
        if ("accessor" === FQ) {
          if (void 0 === yQ) continue;
          if (null === yQ || "object" !== typeof yQ) throw new TypeError("Object expected");
          (sQ = zQ(yQ.get)) && (JQ.get = sQ), (sQ = zQ(yQ.set)) && (JQ.set = sQ), (sQ = zQ(yQ.init)) && qQ.unshift(sQ)
        } else(sQ = zQ(yQ)) && ("field" === FQ ? qQ.unshift(sQ) : JQ[PQ] = sQ)
      }
      gQ && Object.defineProperty(gQ, wQ.name, JQ), rQ = !0
    }

    function qQ(QQ, WQ, XQ) {
      for (var wQ = arguments.length > 2, qQ = 0; qQ < WQ.length; qQ++) XQ = wQ ? WQ[qQ].call(QQ, XQ) : WQ[qQ].call(QQ);
      return wQ ? XQ : void 0
    }

    function TQ(QQ, WQ, XQ) {
      return "symbol" === typeof WQ && (WQ = WQ.description ? "[".concat(WQ.description, "]") : ""), Object.defineProperty(QQ, "name", {
        configurable: !0,
        value: XQ ? "".concat(XQ, " ", WQ) : WQ
      })
    }
    Object.create;
    Object.create;

    function zQ(QQ, WQ, XQ, wQ) {
      if ("a" === XQ && !wQ) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof WQ ? QQ !== WQ || !wQ : !WQ.has(QQ)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === XQ ? wQ : "a" === XQ ? wQ.call(QQ) : wQ ? wQ.value : WQ.get(QQ)
    }

    function sQ(QQ, WQ, XQ, wQ, qQ) {
      if ("m" === wQ) throw new TypeError("Private method is not writable");
      if ("a" === wQ && !qQ) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof WQ ? QQ !== WQ || !qQ : !WQ.has(QQ)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === wQ ? qQ.call(QQ, XQ) : qQ ? qQ.value = XQ : WQ.set(QQ, XQ), XQ
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);