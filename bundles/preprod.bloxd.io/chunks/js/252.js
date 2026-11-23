export const id = 252;
export const ids = [252];
export const modules = {
  39959: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => fC,
      e: () => SC,
      i: () => qC,
      k: () => oC
    });
    var QC = ZC(39742),
      wC = ZC(38507),
      bC = ZC(39882),
      nC = ZC(39783);
    class fC {
      get GJ() {
        return this._isDisposed
      }
      constructor(CC, zC, ZC) {
        let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          bC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          fC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          oC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          qC = arguments.length > 7 ? arguments[7] : void 0,
          FC = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, nC.e)(), CC && CC.Km ? this._engine = CC.Km().mg() : this._engine = CC, this._updatable = ZC, this._instanced = fC, this._divisor = qC || 1, this._label = FC, zC instanceof QC.d ? (this._data = null, this._buffer = zC) : (this._data = zC, this._buffer = null), this.byteStride = oC ? wC : wC * Float32Array.BYTES_PER_ELEMENT, bC || this.create()
      }
      createVertexBuffer(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          nC = arguments.length > 6 ? arguments[6] : void 0;
        const fC = bC ? zC : zC * Float32Array.BYTES_PER_ELEMENT,
          qC = QC ? bC ? QC : QC * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new oC(this._engine, this, CC, this._updatable, !0, qC, void 0 === wC ? this._instanced : wC, fC, ZC, void 0, void 0, !0, this._divisor || nC)
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
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !CC && this._buffer || (CC = CC || this._data, CC && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, CC), this._data = CC) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(CC, this._label), this._data = CC) : this._buffer = this._engine.createVertexBuffer(CC, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.HW > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.HW, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.HW, void 0, this._label));
          wC.c.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(CC) {
        this.create(CC)
      }
      updateDirectly(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, CC, QC ? zC : zC * Float32Array.BYTES_PER_ELEMENT, ZC ? ZC * this.byteStride : void 0), this._data = 0 === zC && void 0 === ZC ? CC : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class oC {
      get GJ() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(CC) {
        const zC = 0 != CC;
        this._instanceDivisor = CC, zC !== this._instanced && (this._instanced = zC, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const CC = this.getData();
        return CC ? Array.isArray(CC) ? CC.length / (this.byteStride / 4) - this.byteOffset / 4 : (CC.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(CC, zC, ZC, QC, wC, nC, WC, NC, MC, gC) {
        let SC, pC = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          PC = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          GC = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          RC = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = CC, "object" === typeof QC && null !== QC ? (SC = QC.updatable ?? !1, wC = QC.postponeInternalCreation, nC = QC.stride, WC = QC.instanced, NC = QC.offset, MC = QC.size, gC = QC.type, pC = QC.normalized ?? !1, PC = QC.useBytes ?? !1, GC = QC.divisor ?? 1, RC = QC.takeBufferOwnership ?? !1, this._label = QC.label) : SC = !!QC, zC instanceof fC ? (this._buffer = zC, this._ownsBuffer = RC) : (this._buffer = new fC(CC, zC, SC, nC, wC, WC, PC, GC, this._label), this._ownsBuffer = !0), this.uniqueId = oC._Counter++, this._kind = ZC, void 0 === gC) {
          const CC = this.getData();
          this.type = CC ? FC(CC) : oC.FLOAT
        } else this.type = gC;
        const AC = (0, bC.m)(this.type);
        PC ? (this._size = MC || (nC ? nC / AC : qC(ZC)), this.byteStride = nC || this._buffer.byteStride || this._size * AC, this.byteOffset = NC || 0) : (this._size = MC || nC || qC(ZC), this.byteStride = nC ? nC * AC : this._buffer.byteStride || this._size * AC, this.byteOffset = (NC || 0) * AC), this.normalized = pC, this._instanced = void 0 !== WC && WC, this._instanceDivisor = WC ? GC : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(CC) {
        switch (CC) {
          case oC.BYTE:
            return 0;
          case oC.UNSIGNED_BYTE:
            return 1;
          case oC.SHORT:
            return 2;
          case oC.UNSIGNED_SHORT:
            return 3;
          case oC.INT:
            return 4;
          case oC.UNSIGNED_INT:
            return 5;
          case oC.FLOAT:
            return 6;
          case oC.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${CC}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (oC._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(CC, zC) {
        const ZC = this.getData();
        return ZC ? (0, bC.k)(ZC, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, CC, zC) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, bC.m)(this.type)
      }
      ZZC() {
        return this.byteOffset / (0, bC.m)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, bC.m)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(CC) {
        this._buffer.create(CC), this._alignBuffer()
      }
      update(CC) {
        this._buffer.update(CC), this._alignBuffer()
      }
      updateDirectly(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(CC, zC, void 0, ZC), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(CC, zC) {
        (0, bC.h)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, CC, this.normalized, ((CC, ZC) => {
          for (let QC = 0; QC < this._size; QC++) zC(CC[QC], ZC + QC)
        }))
      }
      _alignBuffer() {}
    }

    function qC(CC) {
      switch (CC) {
        case oC.UVKind:
        case oC.UV2Kind:
        case oC.UV3Kind:
        case oC.UV4Kind:
        case oC.UV5Kind:
        case oC.UV6Kind:
          return 2;
        case oC.NormalKind:
        case oC.PositionKind:
          return 3;
        case oC.ColorKind:
        case oC.ColorInstanceKind:
        case oC.MatricesIndicesKind:
        case oC.MatricesIndicesExtraKind:
        case oC.MatricesWeightsKind:
        case oC.MatricesWeightsExtraKind:
        case oC.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + CC + "'")
      }
    }

    function FC(CC) {
      return CC instanceof Int8Array ? oC.BYTE : CC instanceof Uint8Array ? oC.UNSIGNED_BYTE : CC instanceof Int16Array ? oC.SHORT : CC instanceof Uint16Array ? oC.UNSIGNED_SHORT : CC instanceof Int32Array ? oC.INT : CC instanceof Uint32Array ? oC.UNSIGNED_INT : oC.FLOAT
    }

    function WC(CC) {
      return (0, bC.m)(CC)
    }

    function NC(CC, zC, ZC, QC, wC, nC, fC, oC) {
      (0, bC.h)(CC, zC, ZC, QC, wC, nC, fC, ((CC, zC) => {
        for (let ZC = 0; ZC < QC; ZC++) oC(CC[ZC], zC + ZC)
      }))
    }

    function MC(CC, zC, ZC, QC, wC, nC, fC, oC) {
      return (0, bC.k)(CC, zC, ZC, QC, wC, nC, fC, oC)
    }
    oC._Counter = 0, oC.BYTE = 5120, oC.UNSIGNED_BYTE = 5121, oC.SHORT = 5122, oC.UNSIGNED_SHORT = 5123, oC.INT = 5124, oC.UNSIGNED_INT = 5125, oC.FLOAT = 5126, oC.HALF_FLOAT = 5131, oC.PositionKind = "position", oC.NormalKind = "normal", oC.TangentKind = "tangent", oC.UVKind = "uv", oC.UV2Kind = "uv2", oC.UV3Kind = "uv3", oC.UV4Kind = "uv4", oC.UV5Kind = "uv5", oC.UV6Kind = "uv6", oC.ColorKind = "color", oC.ColorInstanceKind = "instanceColor", oC.MatricesIndicesKind = "matricesIndices", oC.MatricesWeightsKind = "matricesWeights", oC.MatricesIndicesExtraKind = "matricesIndicesExtra", oC.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let gC = !1;

    function SC() {
      gC || (gC = !0, oC.DeduceStride = qC, oC.GetDataType = FC, oC.GetTypeByteLength = WC, oC.ForEach = NC, oC.GetFloatData = MC)
    }
  },
  39742: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    class QC {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.HW = 0, this.is32Bits = !1, this.uniqueId = QC._Counter++
      }
    }
    QC._Counter = 0
  },
  39953: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC
    });
    var QC = ZC(36963),
      wC = ZC(39959);
    class bC {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || zC && !this.pickedMesh.isVerticesDataPresent(wC.k.NormalKind)) return null;
        let ZC, bC = this.pickedMesh.CQC();
        0 === bC?.length && (bC = null);
        const nC = QC.j.Eg[0],
          fC = QC.j.Eg[1],
          oC = QC.j.Eg[2];
        if (zC) {
          const CC = this.pickedMesh.getVerticesData(wC.k.NormalKind);
          let zC = bC ? QC.r.FromArrayToRef(CC, 3 * bC[3 * this.faceId], nC) : nC.L_(CC[3 * this.faceId * 3], CC[3 * this.faceId * 3 + 1], CC[3 * this.faceId * 3 + 2]),
            qC = bC ? QC.r.FromArrayToRef(CC, 3 * bC[3 * this.faceId + 1], fC) : fC.L_(CC[3 * (3 * this.faceId + 1)], CC[3 * (3 * this.faceId + 1) + 1], CC[3 * (3 * this.faceId + 1) + 2]),
            FC = bC ? QC.r.FromArrayToRef(CC, 3 * bC[3 * this.faceId + 2], oC) : oC.L_(CC[3 * (3 * this.faceId + 2)], CC[3 * (3 * this.faceId + 2) + 1], CC[3 * (3 * this.faceId + 2) + 2]);
          zC = zC.scale(this.bu), qC = qC.scale(this.bv), FC = FC.scale(1 - this.bu - this.bv), ZC = new QC.r(zC.x + qC.x + FC.x, zC.y + qC.y + FC.y, zC.z + qC.z + FC.z)
        } else {
          const CC = this.pickedMesh.getVerticesData(wC.k.PositionKind),
            zC = bC ? QC.r.FromArrayToRef(CC, 3 * bC[3 * this.faceId], nC) : nC.L_(CC[3 * this.faceId * 3], CC[3 * this.faceId * 3 + 1], CC[3 * this.faceId * 3 + 2]),
            qC = bC ? QC.r.FromArrayToRef(CC, 3 * bC[3 * this.faceId + 1], fC) : fC.L_(CC[3 * (3 * this.faceId + 1)], CC[3 * (3 * this.faceId + 1) + 1], CC[3 * (3 * this.faceId + 1) + 2]),
            FC = bC ? QC.r.FromArrayToRef(CC, 3 * bC[3 * this.faceId + 2], oC) : oC.L_(CC[3 * (3 * this.faceId + 2)], CC[3 * (3 * this.faceId + 2) + 1], CC[3 * (3 * this.faceId + 2) + 2]),
            WC = zC.subtract(qC),
            NC = FC.subtract(qC);
          ZC = QC.r.Cross(WC, NC)
        }
        const qC = (CC, zC) => {
          if (-1 !== this.thinInstanceIndex) {
            const ZC = CC._thinInstanceDataStorage.matrixData,
              wC = this.thinInstanceIndex << 4;
            if (ZC && ZC.length > wC) {
              const CC = QC.j.Matrix[0];
              QC.b.FromArrayToRef(ZC, wC, CC), QC.r.TransformNormalToRef(zC, CC, zC)
            }
          }
          let ZC = CC.getWorldMatrix();
          CC.nonUniformScaling && (QC.j.Matrix[0].Av(ZC), ZC = QC.j.Matrix[0], ZC.setTranslationFromFloats(0, 0, 0), ZC.invert(), ZC.transposeToRef(QC.j.Matrix[1]), ZC = QC.j.Matrix[1]), QC.r.TransformNormalToRef(zC, ZC, zC)
        };
        if (CC && qC(this.pickedMesh, ZC), this.ray) {
          const zC = QC.j.Eg[0].Av(ZC);
          CC || qC(this.pickedMesh, zC), QC.r.Dot(zC, this.ray.direction) > 0 && ZC.negateInPlace()
        }
        return ZC.normalize(), ZC
      }
      getTextureCoordinates() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wC.k.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(CC)) return null;
        const zC = this.pickedMesh.CQC();
        if (!zC) return null;
        const ZC = this.pickedMesh.getVerticesData(CC);
        if (!ZC) return null;
        let bC = QC.n.FromArray(ZC, 2 * zC[3 * this.faceId]),
          nC = QC.n.FromArray(ZC, 2 * zC[3 * this.faceId + 1]),
          fC = QC.n.FromArray(ZC, 2 * zC[3 * this.faceId + 2]);
        return bC = bC.scale(this.bu), nC = nC.scale(this.bv), fC = fC.scale(1 - this.bu - this.bv), new QC.n(bC.x + nC.x + fC.x, bC.y + nC.y + fC.y)
      }
    }
  },
  39783: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(39663);
    let wC = !1;

    function bC() {
      wC || (wC = !0, QC.ThinEngine.prototype.updateDynamicIndexBuffer = function(CC, zC) {
        let ZC;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(CC), ZC = CC.is32Bits ? zC instanceof Uint32Array ? zC : new Uint32Array(zC) : zC instanceof Uint16Array ? zC : new Uint16Array(zC), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, ZC, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, QC.ThinEngine.prototype.updateDynamicVertexBuffer = function(CC, zC, ZC, QC) {
        this.bindArrayBuffer(CC), void 0 === ZC && (ZC = 0);
        const wC = zC.byteLength || zC.length;
        void 0 === QC || QC >= wC && 0 === ZC ? zC instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZC, new Float32Array(zC)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZC, zC) : zC instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZC, new Float32Array(zC).subarray(0, QC / 4)) : (zC = ArrayBuffer.isView(zC) ? new Uint8Array(zC.buffer, zC.byteOffset, QC) : new Uint8Array(zC, 0, QC), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, ZC, zC)), this._resetVertexBufferBinding()
      })
    }
  },
  39756: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    class QC {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zC = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = zC, !CC && (CC = zC.createTexture(), !CC)) throw new Error("Unable to create webGL texture");
        this.set(CC)
      }
      setUsage() {}
      set(CC) {
        this._webGLTexture = CC
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(CC) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(CC)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const CC of this._MSAARenderBuffers) this._context.deleteRenderbuffer(CC);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[CC] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39721: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => GC
    });
    var QC = ZC(36987),
      wC = ZC(39666),
      bC = ZC(36985),
      nC = ZC(38507),
      fC = ZC(36977),
      oC = ZC(39730);
    class qC {
      constructor() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, CC && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(CC) {
        this._zOffset !== CC && (this._zOffset = CC, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(CC) {
        this._zOffsetUnits !== CC && (this._zOffsetUnits = CC, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(CC) {
        this._cullFace !== CC && (this._cullFace = CC, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(CC) {
        this._cull !== CC && (this._cull = CC, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(CC) {
        this._depthFunc !== CC && (this._depthFunc = CC, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(CC) {
        this._depthMask !== CC && (this._depthMask = CC, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(CC) {
        this._depthTest !== CC && (this._depthTest = CC, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(CC) {
        this._frontFace !== CC && (this._frontFace = CC, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(CC) {
        this.isDirty && (this._isCullDirty && (this.cull ? CC.enable(CC.CULL_FACE) : CC.disable(CC.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (CC.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (CC.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? CC.enable(CC.DEPTH_TEST) : CC.disable(CC.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (CC.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (CC.enable(CC.POLYGON_OFFSET_FILL), CC.polygonOffset(this.zOffset, this.zOffsetUnits)) : CC.disable(CC.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (CC.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class FC {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(CC) {
        this._func !== CC && (this._func = CC, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(CC) {
        this._backFunc !== CC && (this._backFunc = CC, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(CC) {
        this._funcRef !== CC && (this._funcRef = CC, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(CC) {
        this._funcMask !== CC && (this._funcMask = CC, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(CC) {
        this._opStencilFail !== CC && (this._opStencilFail = CC, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(CC) {
        this._opDepthFail !== CC && (this._opDepthFail = CC, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(CC) {
        this._opStencilDepthPass !== CC && (this._opStencilDepthPass = CC, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(CC) {
        this._backOpStencilFail !== CC && (this._backOpStencilFail = CC, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(CC) {
        this._backOpDepthFail !== CC && (this._backOpDepthFail = CC, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(CC) {
        this._backOpStencilDepthPass !== CC && (this._backOpStencilDepthPass = CC, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(CC) {
        this._mask !== CC && (this._mask = CC, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(CC) {
        this._enabled !== CC && (this._enabled = CC, this._isStencilTestDirty = !0)
      }
      constructor() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, CC && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(CC) {
        if (!CC) return;
        const zC = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = zC ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = zC ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = zC ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = zC ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = zC ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = zC ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = zC ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = zC ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = zC ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = zC ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = zC ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = zC ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? CC.enable(CC.STENCIL_TEST) : CC.disable(CC.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (CC.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (CC.stencilFuncSeparate(CC.FRONT, this.func, this.funcRef, this.funcMask), CC.stencilFuncSeparate(CC.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (CC.stencilOpSeparate(CC.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), CC.stencilOpSeparate(CC.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class WC {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = WC.ALWAYS, this.opStencilFail = WC.KEEP, this.opDepthFail = WC.KEEP, this.opStencilDepthPass = WC.REPLACE, this.backFunc = WC.ALWAYS, this.backOpStencilFail = WC.KEEP, this.backOpDepthFail = WC.KEEP, this.backOpStencilDepthPass = WC.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(CC) {
        this.func = CC
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(CC) {
        this.backFunc = CC
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(CC) {
        this.funcRef = CC
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(CC) {
        this.funcMask = CC
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(CC) {
        this.opStencilFail = CC
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(CC) {
        this.opDepthFail = CC
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(CC) {
        this.opStencilDepthPass = CC
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(CC) {
        this.backOpStencilFail = CC
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(CC) {
        this.backOpDepthFail = CC
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(CC) {
        this.backOpStencilDepthPass = CC
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(CC) {
        this.mask = CC
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(CC) {
        this.enabled = CC
      }
    }
    WC.ALWAYS = 519, WC.KEEP = 7680, WC.REPLACE = 7681;
    var NC = ZC(39735),
      MC = ZC(39694),
      gC = ZC(39650),
      SC = ZC(39680),
      pC = ZC(39692);

    function PC(CC, zC) {
      if (zC) {
        const {
          requestAnimationFrame: ZC
        } = zC;
        if ("function" === typeof ZC) return ZC(CC)
      }
      if ((0, SC.k)()) {
        const {
          requestAnimationFrame: ZC
        } = zC || window;
        if ("function" === typeof ZC) return ZC(CC)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(CC);
      return setTimeout(CC, 16)
    }
    class GC {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(CC) {
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
      get BZC() {
        return this._useReverseDepthBuffer
      }
      set BZC(CC) {
        CC !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = CC, this._depthCullingState.depthFunc = CC ? 518 : 515)
      }
      setColorWrite(CC) {
        CC !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = CC)
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
      _getGlobalDefines(CC) {
        if (CC) return this.isNDCHalfZRange ? CC.IS_NDC_HALF_ZRANGE = "" : delete CC.IS_NDC_HALF_ZRANGE, this.BZC ? CC.USE_REVERSE_DEPTHBUFFER = "" : delete CC.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? CC.USE_EXACT_SRGB_CONVERSIONS = "" : delete CC.USE_EXACT_SRGB_CONVERSIONS);
        {
          let CC = "";
          return this.isNDCHalfZRange && (CC += "#define IS_NDC_HALF_ZRANGE"), this.BZC && (CC && (CC += "\n"), CC += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (CC && (CC += "\n"), CC += "#define USE_EXACT_SRGB_CONVERSIONS"), CC
        }
      }
      _rebuildInternalTextures() {
        const CC = this._internalTexturesCache.slice();
        for (const zC of CC) zC._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const CC = this._renderTargetWrapperCache.slice();
        for (const zC of CC) zC.textures?.some((CC => 15 === CC.source)) || zC._rebuild()
      }
      _rebuildEffects() {
        for (const CC in this._compiledEffects) {
          const zC = this._compiledEffects[CC];
          zC._pipelineContext = null, zC._prepareEffect()
        }
        wC.b.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        nC.c.Warn(this.name + " context successfully restored."), this.Yg.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(CC) {
        setTimeout((() => {
          this._clearEmptyResources();
          const zC = this._depthCullingState.depthTest,
            ZC = this._depthCullingState.depthFunc,
            QC = this._depthCullingState.depthMask,
            wC = this._stencilState.stencilTest;
          CC(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = zC, this._depthCullingState.depthFunc = ZC, this._depthCullingState.depthMask = QC, this._stencilState.stencilTest = wC, this._flagContextRestored()
        }), 0)
      }
      get GJ() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(CC) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(CC) {}
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
          const CC = new Uint8Array(4),
            zC = [CC, CC, CC, CC, CC, CC];
          this._emptyCubeTexture = this.createRawCubeTexture(zC, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(CC) {
        this._framebufferDimensionsObject = CC
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(CC) {
        if (!CC) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const zC = this._activeRenderLoops.indexOf(CC);
        zC >= 0 && (this._activeRenderLoops.splice(zC, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: CC
            } = this.customAnimationFrameRequester;
            CC && CC(this.customAnimationFrameRequester.lg), delete this.customAnimationFrameRequester.lg
          }
        } else if (0 !== this._frameHandler) {
          const CC = this._frameHandler;
          if (this._frameHandler = 0, (0, SC.k)()) {
            const {
              cancelAnimationFrame: zC
            } = this.getHostWindow() || window;
            if ("function" === typeof zC) return zC(CC)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(CC);
          return clearTimeout(CC)
        }
      }
      jR() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      yR() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(CC) {
        this._maxFPS = CC, void 0 !== CC && (this._minFrameTime = CC <= 0 ? Number.MAX_VALUE : 1e3 / CC)
      }
      _isOverFrameTime(CC) {
        if (!CC || void 0 === this._maxFPS) return !1;
        const zC = CC - this._lastFrameTime;
        return this._lastFrameTime = CC, this._renderAccumulator += zC, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(CC) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(CC)) {
          let CC = !0;
          (this.GJ || !this.renderEvenInBackground && this._windowIsBackground) && (CC = !1), CC && (this.jR(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.yR())
        }
      }
      _renderLoop(CC) {
        this._processFrame(CC), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let CC = 0; CC < this._activeRenderLoops.length; CC++) {
          (0, this._activeRenderLoops[CC])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(CC, zC) {
        return PC(CC, zC)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.lg = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.lg) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(CC) {
        -1 === this._activeRenderLoops.indexOf(CC) && (this._activeRenderLoops.push(CC), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(CC) {
        this._depthCullingState.depthTest = CC
      }
      setZOffset(CC) {
        this._depthCullingState.zOffset = this.BZC ? -CC : CC
      }
      getZOffset() {
        const CC = this._depthCullingState.zOffset;
        return this.BZC ? -CC : CC
      }
      setZOffsetUnits(CC) {
        this._depthCullingState.zOffsetUnits = this.BZC ? -CC : CC
      }
      getZOffsetUnits() {
        const CC = this._depthCullingState.zOffsetUnits;
        return this.BZC ? -CC : CC
      }
      getHostWindow() {
        return (0, SC.k)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(CC) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const CC of this.scenes) CC._rebuildTextures();
        for (const CC of this._virtualScenes) CC._rebuildTextures()
      }
      _releaseRenderTargetWrapper(CC) {
        const zC = this._renderTargetWrapperCache.indexOf(CC); - 1 !== zC && this._renderTargetWrapperCache.splice(zC, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(CC, zC, ZC) {
        const QC = zC || this.getRenderWidth(),
          wC = ZC || this.getRenderHeight(),
          bC = CC.x || 0,
          nC = CC.y || 0;
        this._cachedViewport = CC, this._viewport(bC * QC, nC * wC, QC * CC.width, wC * CC.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(CC) {
        return new Path2D(CC)
      }
      get description() {
        let CC = this.name + this.version;
        return this._caps.parallelShaderCompile && (CC += " - Parallel shader compilation"), CC
      }
      _createTextureBase(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          fC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          oC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          qC = arguments.length > 7 ? arguments[7] : void 0,
          FC = arguments.length > 8 ? arguments[8] : void 0,
          WC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          NC = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          MC = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          SC = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          pC = arguments.length > 13 ? arguments[13] : void 0,
          PC = arguments.length > 14 ? arguments[14] : void 0,
          RC = arguments.length > 15 ? arguments[15] : void 0;
        const AC = "data:" === (CC = CC || "").substring(0, 5),
          xC = "blob:" === CC.substring(0, 5),
          JC = AC && -1 !== CC.indexOf(";base64,"),
          IC = NC || new gC.c(this, 1);
        IC !== NC && (IC.label = CC.substring(0, 60));
        const iC = CC;
        !this._transformTextureUrl || JC || NC || WC || (CC = this._transformTextureUrl(CC)), iC !== CC && (IC._originalUrl = iC);
        const vC = CC.lastIndexOf(".");
        let eC = SC || (vC > -1 ? CC.substring(vC).toLowerCase() : "");
        eC.indexOf("?") > -1 && (eC = eC.split("?")[0]);
        const hC = GC.GetCompatibleTextureLoader(eC, pC);
        QC && QC.addPendingData(IC), IC.url = CC, IC.generateMipMaps = !zC, IC.samplingMode = wC, IC.invertY = ZC, IC._useSRGBBuffer = this._getUseSRGBBuffer(!!RC, zC), this._doNotHandleContextLost || (IC._buffer = WC);
        let KC = null;
        fC && !NC && (KC = IC.onLoadedObservable.add(fC)), NC || this._internalTexturesCache.push(IC);
        const YC = (ZC, NC) => {
          QC && QC.removePendingData(IC), CC === iC ? (KC && IC.onLoadedObservable.remove(KC), bC.c.UseFallbackTexture && CC !== bC.c.FallbackTexture && this._createTextureBase(bC.c.FallbackTexture, zC, IC.invertY, QC, wC, null, oC, qC, FC, WC, IC), ZC = (ZC || "Unknown error") + (bC.c.UseFallbackTexture ? " - Fallback texture was used" : ""), IC.onErrorObservable.notifyObservers({
            message: ZC,
            exception: NC
          }), oC && oC(ZC, NC)) : (nC.c.Warn(`Failed to load ${CC}, falling back to ${iC}`), this._createTextureBase(iC, zC, IC.invertY, QC, wC, fC, oC, qC, FC, WC, IC, MC, SC, pC, PC, RC))
        };
        if (hC) {
          const zC = async CC => {
            (await hC).loadData(CC, IC, ((CC, zC, ZC, bC, nC, fC) => {
              fC ? YC("TextureLoader failed to load data") : qC(IC, eC, QC, {
                width: CC,
                height: zC
              }, IC.invertY, !ZC, bC, (() => (nC(), !1)), wC)
            }), PC)
          };
          if (WC) {
            const CC = async CC => {
              try {
                await zC(CC)
              } catch (ZC) {
                YC("Failed to parse texture data", ZC)
              }
            };
            WC instanceof ArrayBuffer ? CC(new Uint8Array(WC)) : ArrayBuffer.isView(WC) ? CC(WC) : oC && oC("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(CC, (async CC => {
            try {
              await zC(new Uint8Array(CC))
            } catch (ZC) {
              YC("Failed to parse texture data", ZC)
            }
          }), void 0, QC ? QC.offlineProvider : void 0, !0, ((CC, zC) => {
            YC("Unable to load " + (CC && CC.responseURL, zC))
          }))
        } else {
          const ZC = CC => {
            xC && !this._doNotHandleContextLost && (IC._buffer = CC), qC(IC, eC, QC, CC, IC.invertY, zC, !1, FC, wC)
          };
          !AC || JC ? WC && ("string" === typeof WC.decoding || WC.close) ? ZC(WC) : GC._FileToolsLoadImage(CC || "", ZC, YC, QC ? QC.offlineProvider : null, pC, IC.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof WC || WC instanceof ArrayBuffer || ArrayBuffer.isView(WC) || WC instanceof Blob ? GC._FileToolsLoadImage(WC, ZC, YC, QC ? QC.offlineProvider : null, pC, IC.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : WC && ZC(WC)
        }
        return IC
      }
      _rebuildBuffers() {
        for (const CC of this._uniformBuffers) CC._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, SC.f)() ? document : null
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
        for (const CC in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, CC) && (this._boundTexturesCache[CC] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(CC) {
        this._name = CC
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
      setHardwareScalingLevel(CC) {
        this._hardwareScalingLevel = CC, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(CC) {
        this._doNotHandleContextLost = CC
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(CC, zC, ZC) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new qC, this._stencilStateComposer = new FC, this._stencilState = new WC, this._alphaState = new NC.d(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new QC.d, this.onCanvasFocusObservable = new QC.d, this.onNewSceneAddedObservable = new QC.d, this.onResizeObservable = new QC.d, this.onCanvasPointerOutObservable = new QC.d, this.onEffectErrorObservable = new QC.d, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new QC.d, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = CC => this._renderLoop(CC), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new QC.d, this.onAfterShaderCompilationObservable = new QC.d, this.onBeginFrameObservable = new QC.d, this.onEndFrameObservable = new QC.d, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new QC.d, this.Yg = new QC.d, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.Tm = new QC.d, this.onReleaseEffectsObservable = new QC.d, bC.c.Instances.push(this), this.startTime = oC.b.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, fC.c.SetMatrixPrecision(!!zC.useLargeWorldRendering || !!zC.useHighPrecisionMatrix), (0, SC.h)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), zC.antialias = CC ?? zC.antialias, zC.deterministicLockstep = zC.deterministicLockstep ?? !1, zC.lockstepMaxSteps = zC.lockstepMaxSteps ?? 4, zC.timeStep = zC.timeStep ?? 1 / 60, zC.stencil = zC.stencil ?? !0, this._audioContext = zC.audioEngineOptions?.audioContext ?? null, this._audioDestination = zC.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = zC.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!zC.doNotHandleContextLost, this._isStencilEnable = !!zC.stencil, this.useExactSrgbConversions = zC.useExactSrgbConversions ?? !1, this.canvasTabIndex = zC.canvasTabIndex ?? this.canvasTabIndex;
        const wC = (0, SC.k)() && window.devicePixelRatio || 1,
          nC = zC.limitDeviceRatio || wC;
        ZC = ZC || zC.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = ZC, this._hardwareScalingLevel = ZC ? 1 / Math.min(nC, wC) : 1, this._lastDevicePixelRatio = wC, this._creationOptions = zC
      }
      resize() {
        let CC, zC, ZC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const CC = (0, SC.k)() && window.devicePixelRatio || 1,
            zC = this._lastDevicePixelRatio / CC;
          this._lastDevicePixelRatio = CC, this._hardwareScalingLevel *= zC
        }
        if ((0, SC.k)() && (0, SC.f)())
          if (this._renderingCanvas) {
            const ZC = this._renderingCanvas.getBoundingClientRect?.();
            CC = this._renderingCanvas.clientWidth || ZC?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, zC = this._renderingCanvas.clientHeight || ZC?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else CC = window.innerWidth, zC = window.innerHeight;
        else CC = this._renderingCanvas ? this._renderingCanvas.width : 100, zC = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(CC / this._hardwareScalingLevel, zC / this._hardwareScalingLevel, ZC)
      }
      setSize(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (CC |= 0, zC |= 0, !ZC && this._renderingCanvas.width === CC && this._renderingCanvas.height === zC) return !1;
        if (this._renderingCanvas.width = CC, this._renderingCanvas.height = zC, this.scenes) {
          for (let CC = 0; CC < this.scenes.length; CC++) {
            const zC = this.scenes[CC];
            for (let CC = 0; CC < zC.cameras.length; CC++) {
              zC.cameras[CC]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC) {
        throw (0, MC.i)("engine.rawTexture")
      }
      createRawCubeTexture(CC, zC, ZC, QC, wC, bC, nC, fC) {
        throw (0, MC.i)("engine.rawTexture")
      }
      createRawTexture3D(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
        throw (0, MC.i)("engine.rawTexture")
      }
      createRawTexture2DArray(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC) {
        throw (0, MC.i)("engine.rawTexture")
      }
      _sharedInit(CC) {
        this._renderingCanvas = CC
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const CC = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== CC.indexOf("Mobile") || -1 !== CC.indexOf("Mac") && (0, SC.f)() && "ontouchend" in document
        }, this._checkForMobile(), (0, SC.k)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(CC) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(CC, !1)
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
      _createImageBitmapFromSource(CC, zC) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(CC, zC) {
        return createImageBitmap(CC, zC)
      }
      resizeImageBitmap(CC, zC, ZC) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(CC) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(CC, zC) {
        if ("undefined" === typeof document) return new OffscreenCanvas(CC, zC);
        const ZC = document.createElement("canvas");
        return ZC.width = CC, ZC.height = zC, ZC
      }
      createCanvas(CC, zC) {
        return GC._CreateCanvas(CC, zC)
      }
      static _FileToolsLoadImage(CC, zC, ZC, QC, wC, bC, nC) {
        if (!pC.e.loadImage) throw (0, MC.i)("FileTools");
        return pC.e.loadImage(CC, zC, ZC, QC, wC, bC, nC)
      }
      _loadFile(CC, zC, ZC, QC, wC, bC) {
        const nC = (0, pC.n)(CC, zC, ZC, QC, wC, bC);
        return this._activeRequests.push(nC), nC.onCompleteObservable.add((() => {
          const CC = this._activeRequests.indexOf(nC); - 1 !== CC && this._activeRequests.splice(CC, 1)
        })), nC
      }
      static _FileToolsLoadFile(CC, zC, ZC, QC, wC, bC) {
        if (pC.e.loadFile) return pC.e.loadFile(CC, zC, ZC, QC, wC, bC);
        throw (0, MC.i)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), wC.b.ResetCache();
        for (const zC of this._activeRequests) zC.abort();
        this._boundRenderFunction = null, this.Tm.notifyObservers(this), this.Tm.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, SC.k)() && window.removeEventListener("resize", this._checkForMobile);
        const CC = bC.c.Instances.indexOf(this);
        CC >= 0 && bC.c.Instances.splice(CC, 1), bC.c.Instances.length || (bC.c.OnEnginesDisposedObservable.notifyObservers(this), bC.c.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(CC) {
        throw (0, MC.i)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(CC, zC) {
        for (let ZC = 0; ZC < bC.c.Instances.length; ZC++) {
          const QC = bC.c.Instances[ZC];
          for (let ZC = 0; ZC < QC.scenes.length; ZC++) QC.scenes[ZC].markAllMaterialsAsDirty(CC, zC)
        }
      }
      static GetCompatibleTextureLoader(CC, zC) {
        return null
      }
    }
    GC._RenderPassIdCounter = 0, GC._RescalePostProcessFactory = null, GC.CollisionsEpsilon = .001, GC.QueueNewFrame = PC
  },
  39674: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC
    });
    class QC {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersRepository : QC.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.ShadersStore : QC.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? QC.IncludesShadersStore : QC.IncludesShadersStoreWGSL
      }
    }
    QC.ShadersRepository = "src/Shaders/", QC.ShadersStore = {}, QC.IncludesShadersStore = {}, QC.ShadersRepositoryWGSL = "src/ShadersWGSL/", QC.ShadersStoreWGSL = {}, QC.IncludesShadersStoreWGSL = {}
  },
  39684: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => NC,
      h: () => RC,
      j: () => gC,
      l: () => MC,
      o: () => SC,
      s: () => GC,
      t: () => WC,
      v: () => qC,
      w: () => FC,
      y: () => oC,
      z: () => fC
    });
    class QC {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(CC) {
        CC && this.program && CC(this.program)
      }
      setEngine(CC) {
        this.engine = CC
      }
      _fillEffectInformation(CC, zC, ZC, QC, wC, bC, nC, fC) {
        const oC = this.engine;
        if (oC.supportsUniformBuffers)
          for (const FC in zC) CC.bindUniformBlock(FC, zC[FC]);
        let qC;
        for (this.engine.getUniforms(this, ZC).forEach(((CC, zC) => {
            QC[ZC[zC]] = CC
          })), this._uniforms = QC, qC = 0; qC < wC.length; qC++) {
          null == CC.getUniform(wC[qC]) && (wC.splice(qC, 1), qC--)
        }
        wC.forEach(((CC, zC) => {
          bC[CC] = zC
        }));
        for (const FC of oC.getAttributes(this, nC)) fC.push(FC)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(CC, zC) {
        const ZC = this._valueCache[CC],
          QC = zC.updateFlag;
        if (void 0 !== ZC && ZC === QC) return !1;
        const wC = zC.VZC();
        let bC = this._matrixValueCache[CC];
        if (void 0 !== ZC && null !== ZC && void 0 !== bC) {
          let zC = !0;
          for (let CC = 15; CC >= 0; CC--)
            if (bC[CC] !== wC[CC]) {
              zC = !1;
              break
            } if (zC) return this._valueCache[CC] = QC, !1
        }
        return void 0 === bC && (bC = this._matrixValueCache[CC] = new Float32Array(16)), bC.set(wC), this._valueCache[CC] = QC, !0
      }
      _cacheFloat2(CC, zC, ZC) {
        let QC = this._valueCache[CC];
        if (!QC || 2 !== QC.length) return QC = [zC, ZC], this._valueCache[CC] = QC, !0;
        let wC = !1;
        return QC[0] !== zC && (QC[0] = zC, wC = !0), QC[1] !== ZC && (QC[1] = ZC, wC = !0), wC
      }
      _cacheFloat3(CC, zC, ZC, QC) {
        let wC = this._valueCache[CC];
        if (!wC || 3 !== wC.length) return wC = [zC, ZC, QC], this._valueCache[CC] = wC, !0;
        let bC = !1;
        return wC[0] !== zC && (wC[0] = zC, bC = !0), wC[1] !== ZC && (wC[1] = ZC, bC = !0), wC[2] !== QC && (wC[2] = QC, bC = !0), bC
      }
      _cacheFloat4(CC, zC, ZC, QC, wC) {
        let bC = this._valueCache[CC];
        if (!bC || 4 !== bC.length) return bC = [zC, ZC, QC, wC], this._valueCache[CC] = bC, !0;
        let nC = !1;
        return bC[0] !== zC && (bC[0] = zC, nC = !0), bC[1] !== ZC && (bC[1] = ZC, nC = !0), bC[2] !== QC && (bC[2] = QC, nC = !0), bC[3] !== wC && (bC[3] = wC, nC = !0), nC
      }
      setInt(CC, zC) {
        const ZC = this._valueCache[CC];
        void 0 !== ZC && ZC === zC || this.engine.setInt(this._uniforms[CC], zC) && (this._valueCache[CC] = zC)
      }
      setInt2(CC, zC, ZC) {
        this._cacheFloat2(CC, zC, ZC) && (this.engine.setInt2(this._uniforms[CC], zC, ZC) || (this._valueCache[CC] = null))
      }
      setInt3(CC, zC, ZC, QC) {
        this._cacheFloat3(CC, zC, ZC, QC) && (this.engine.setInt3(this._uniforms[CC], zC, ZC, QC) || (this._valueCache[CC] = null))
      }
      setInt4(CC, zC, ZC, QC, wC) {
        this._cacheFloat4(CC, zC, ZC, QC, wC) && (this.engine.setInt4(this._uniforms[CC], zC, ZC, QC, wC) || (this._valueCache[CC] = null))
      }
      setIntArray(CC, zC) {
        this._valueCache[CC] = null, this.engine.setIntArray(this._uniforms[CC], zC)
      }
      setIntArray2(CC, zC) {
        this._valueCache[CC] = null, this.engine.setIntArray2(this._uniforms[CC], zC)
      }
      setIntArray3(CC, zC) {
        this._valueCache[CC] = null, this.engine.setIntArray3(this._uniforms[CC], zC)
      }
      setIntArray4(CC, zC) {
        this._valueCache[CC] = null, this.engine.setIntArray4(this._uniforms[CC], zC)
      }
      setUInt(CC, zC) {
        const ZC = this._valueCache[CC];
        void 0 !== ZC && ZC === zC || this.engine.setUInt(this._uniforms[CC], zC) && (this._valueCache[CC] = zC)
      }
      setUInt2(CC, zC, ZC) {
        this._cacheFloat2(CC, zC, ZC) && (this.engine.setUInt2(this._uniforms[CC], zC, ZC) || (this._valueCache[CC] = null))
      }
      setUInt3(CC, zC, ZC, QC) {
        this._cacheFloat3(CC, zC, ZC, QC) && (this.engine.setUInt3(this._uniforms[CC], zC, ZC, QC) || (this._valueCache[CC] = null))
      }
      setUInt4(CC, zC, ZC, QC, wC) {
        this._cacheFloat4(CC, zC, ZC, QC, wC) && (this.engine.setUInt4(this._uniforms[CC], zC, ZC, QC, wC) || (this._valueCache[CC] = null))
      }
      setUIntArray(CC, zC) {
        this._valueCache[CC] = null, this.engine.setUIntArray(this._uniforms[CC], zC)
      }
      setUIntArray2(CC, zC) {
        this._valueCache[CC] = null, this.engine.setUIntArray2(this._uniforms[CC], zC)
      }
      setUIntArray3(CC, zC) {
        this._valueCache[CC] = null, this.engine.setUIntArray3(this._uniforms[CC], zC)
      }
      setUIntArray4(CC, zC) {
        this._valueCache[CC] = null, this.engine.setUIntArray4(this._uniforms[CC], zC)
      }
      setArray(CC, zC) {
        this._valueCache[CC] = null, this.engine.setArray(this._uniforms[CC], zC)
      }
      setArray2(CC, zC) {
        this._valueCache[CC] = null, this.engine.setArray2(this._uniforms[CC], zC)
      }
      setArray3(CC, zC) {
        this._valueCache[CC] = null, this.engine.setArray3(this._uniforms[CC], zC)
      }
      setArray4(CC, zC) {
        this._valueCache[CC] = null, this.engine.setArray4(this._uniforms[CC], zC)
      }
      setMatrices(CC, zC) {
        zC && (this._valueCache[CC] = null, this.engine.setMatrices(this._uniforms[CC], zC))
      }
      setMatrix(CC, zC) {
        this._cacheMatrix(CC, zC) && (this.engine.setMatrices(this._uniforms[CC], zC.VZC()) || (this._valueCache[CC] = null))
      }
      setMatrix3x3(CC, zC) {
        this._valueCache[CC] = null, this.engine.setMatrix3x3(this._uniforms[CC], zC)
      }
      setMatrix2x2(CC, zC) {
        this._valueCache[CC] = null, this.engine.setMatrix2x2(this._uniforms[CC], zC)
      }
      setFloat(CC, zC) {
        const ZC = this._valueCache[CC];
        void 0 !== ZC && ZC === zC || this.engine.setFloat(this._uniforms[CC], zC) && (this._valueCache[CC] = zC)
      }
      setVector2(CC, zC) {
        this._cacheFloat2(CC, zC.x, zC.y) && (this.engine.setFloat2(this._uniforms[CC], zC.x, zC.y) || (this._valueCache[CC] = null))
      }
      setFloat2(CC, zC, ZC) {
        this._cacheFloat2(CC, zC, ZC) && (this.engine.setFloat2(this._uniforms[CC], zC, ZC) || (this._valueCache[CC] = null))
      }
      setVector3(CC, zC) {
        this._cacheFloat3(CC, zC.x, zC.y, zC.z) && (this.engine.setFloat3(this._uniforms[CC], zC.x, zC.y, zC.z) || (this._valueCache[CC] = null))
      }
      setFloat3(CC, zC, ZC, QC) {
        this._cacheFloat3(CC, zC, ZC, QC) && (this.engine.setFloat3(this._uniforms[CC], zC, ZC, QC) || (this._valueCache[CC] = null))
      }
      setVector4(CC, zC) {
        this._cacheFloat4(CC, zC.x, zC.y, zC.z, zC.w) && (this.engine.setFloat4(this._uniforms[CC], zC.x, zC.y, zC.z, zC.w) || (this._valueCache[CC] = null))
      }
      setQuaternion(CC, zC) {
        this._cacheFloat4(CC, zC.x, zC.y, zC.z, zC.w) && (this.engine.setFloat4(this._uniforms[CC], zC.x, zC.y, zC.z, zC.w) || (this._valueCache[CC] = null))
      }
      setFloat4(CC, zC, ZC, QC, wC) {
        this._cacheFloat4(CC, zC, ZC, QC, wC) && (this.engine.setFloat4(this._uniforms[CC], zC, ZC, QC, wC) || (this._valueCache[CC] = null))
      }
      setColor3(CC, zC) {
        this._cacheFloat3(CC, zC.r, zC.g, zC.b) && (this.engine.setFloat3(this._uniforms[CC], zC.r, zC.g, zC.b) || (this._valueCache[CC] = null))
      }
      setColor4(CC, zC, ZC) {
        this._cacheFloat4(CC, zC.r, zC.g, zC.b, ZC) && (this.engine.setFloat4(this._uniforms[CC], zC.r, zC.g, zC.b, ZC) || (this._valueCache[CC] = null))
      }
      setDirectColor4(CC, zC) {
        this._cacheFloat4(CC, zC.r, zC.g, zC.b, zC.a) && (this.engine.setFloat4(this._uniforms[CC], zC.r, zC.g, zC.b, zC.a) || (this._valueCache[CC] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var wC = ZC(39692);
    const bC = new WeakMap,
      nC = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function fC(CC) {
      let zC = bC.get(CC);
      if (!zC) {
        if (!CC) return nC;
        zC = {
          _webGLVersion: CC.TEXTURE_BINDING_3D ? 2 : 1,
          _context: CC,
          parallelShaderCompile: CC.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, bC.set(CC, zC)
      }
      return zC
    }

    function oC(CC) {
      bC.delete(CC)
    }

    function qC(CC, zC, ZC, QC, wC, bC) {
      const nC = fC(QC);
      bC || (bC = nC._createShaderProgramInjection ?? NC);
      return bC(CC, PC(zC, "vertex", QC, nC._contextWasLost), PC(ZC, "fragment", QC, nC._contextWasLost), QC, wC, nC.validateShaderPrograms)
    }

    function FC(CC, zC, ZC, QC, wC) {
      let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        nC = arguments.length > 6 ? arguments[6] : void 0;
      const oC = fC(wC);
      nC || (nC = oC._createShaderProgramInjection ?? NC);
      const qC = oC._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return nC(CC, pC(zC, "vertex", QC, qC, wC, oC._contextWasLost), pC(ZC, "fragment", QC, qC, wC, oC._contextWasLost), wC, bC, oC.validateShaderPrograms)
    }

    function WC(CC, zC) {
      const ZC = new QC,
        wC = fC(CC);
      return wC.parallelShaderCompile && !wC.disableParallelShaderCompile && (ZC.isParallelCompiled = !0), ZC.context = wC._context, ZC
    }

    function NC(CC, zC, ZC, QC) {
      let wC = arguments.length > 5 ? arguments[5] : void 0;
      const bC = QC.createProgram();
      if (CC.program = bC, !bC) throw new Error("Unable to create program");
      return QC.attachShader(bC, zC), QC.attachShader(bC, ZC), QC.linkProgram(bC), CC.context = QC, CC.vertexShader = zC, CC.fragmentShader = ZC, CC.isParallelCompiled || gC(CC, QC, wC), bC
    }

    function MC(CC, zC, ZC) {
      const QC = CC;
      if (QC._isDisposed) return !1;
      const wC = fC(zC);
      return !!(wC && wC.parallelShaderCompile && wC.parallelShaderCompile.COMPLETION_STATUS_KHR && QC.program && zC.getProgramParameter(QC.program, wC.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (gC(QC, zC, ZC), !0)
    }

    function gC(CC, zC, ZC) {
      const QC = CC.context,
        wC = CC.vertexShader,
        bC = CC.fragmentShader,
        nC = CC.program;
      if (!QC.getProgramParameter(nC, QC.LINK_STATUS)) {
        if (!zC.getShaderParameter(wC, zC.COMPILE_STATUS)) {
          const ZC = zC.getShaderInfoLog(wC);
          if (ZC) throw CC.vertexCompilationError = ZC, new Error("VERTEX SHADER " + ZC)
        }
        if (!zC.getShaderParameter(bC, zC.COMPILE_STATUS)) {
          const ZC = zC.getShaderInfoLog(bC);
          if (ZC) throw CC.fragmentCompilationError = ZC, new Error("FRAGMENT SHADER " + ZC)
        }
        const ZC = QC.getProgramInfoLog(nC);
        if (ZC) throw CC.programLinkError = ZC, new Error(ZC)
      }
      if (ZC) {
        QC.validateProgram(nC);
        if (!QC.getProgramParameter(nC, QC.VALIDATE_STATUS)) {
          const zC = QC.getProgramInfoLog(nC);
          if (zC) throw CC.programValidationError = zC, new Error(zC)
        }
      }
      QC.deleteShader(wC), QC.deleteShader(bC), CC.vertexShader = void 0, CC.fragmentShader = void 0, CC.onCompiled && (CC.onCompiled(), CC.onCompiled = void 0)
    }

    function SC(CC, zC, ZC, QC, wC, bC, nC, oC, WC) {
      let NC = arguments.length > 10 ? arguments[10] : void 0,
        MC = arguments.length > 11 ? arguments[11] : void 0,
        gC = arguments.length > 12 ? arguments[12] : void 0;
      const SC = fC(CC.context);
      MC || (MC = SC.createRawShaderProgramInjection ?? qC), gC || (gC = SC.createShaderProgramInjection ?? FC);
      const pC = CC;
      pC.program = QC ? MC(pC, zC, ZC, pC.context, WC) : gC(pC, zC, ZC, oC, pC.context, WC), pC.program.__SPECTOR_rebuildProgram = nC, NC()
    }

    function pC(CC, zC, ZC, QC, bC, nC) {
      return PC((0, wC.h)(CC, ZC, QC), zC, bC, nC)
    }

    function PC(CC, zC, ZC, QC) {
      const wC = ZC.createShader("vertex" === zC ? ZC.VERTEX_SHADER : ZC.FRAGMENT_SHADER);
      if (!wC) {
        let CC, wC = ZC.NO_ERROR;
        for (;
          (CC = ZC.getError()) !== ZC.NO_ERROR;) wC = CC;
        throw new Error(`Something went wrong while creating a gl ${zC} shader object. gl error=${wC}, gl isContextLost=${ZC.isContextLost()}, _contextWasLost=${QC}`)
      }
      return ZC.shaderSource(wC, CC), ZC.compileShader(wC), wC
    }

    function GC(CC, zC) {
      zC.useProgram(CC)
    }

    function RC(CC, zC) {
      const ZC = CC;
      if (!ZC.isParallelCompiled) return void zC(CC);
      const QC = ZC.onCompiled;
      ZC.onCompiled = () => {
        QC?.(), zC(CC)
      }
    }
  },
  39663: (CC, zC, ZC) => {
    ZC.d(zC, {
      ThinEngine: () => xC
    });
    var QC = ZC(39666),
      wC = ZC(39684),
      bC = ZC(39721),
      nC = ZC(39738),
      fC = ZC(38507),
      oC = ZC(39680);
    class qC {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(CC, zC, ZC, QC, wC) {
        if (wC.drawBuffersExtensionDisabled) {
          const zC = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          CC = CC.replace(zC, "")
        }
        return CC
      }
    }
    const FC = /(flat\s)?\s*varying\s*.*/;
    class WC {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(CC) {
        return CC.replace("attribute", "in")
      }
      varyingCheck(CC, zC) {
        return FC.test(CC)
      }
      varyingProcessor(CC, zC) {
        return CC.replace("varying", zC ? "in" : "out")
      }
      postProcessor(CC, zC, ZC) {
        const QC = -1 !== CC.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (CC = (CC = CC.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), ZC) {
          const ZC = -1 !== CC.search(/layout *\(location *= *0\) *out/g),
            wC = -1 !== zC.indexOf("#define DUAL_SOURCE_BLENDING"),
            bC = wC ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          wC && (CC = "#extension GL_EXT_blend_func_extended : require\n" + CC), CC = (CC = (CC = (CC = (CC = (CC = (CC = CC.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (QC || ZC ? "" : bC) + "void main(")
        } else {
          zC.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (CC = "invariant gl_Position;\n" + CC);
          if (-1 !== zC.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + CC
        }
        return CC
      }
    }
    var NC = ZC(39740),
      MC = ZC(39747),
      gC = ZC(39756),
      SC = ZC(39650),
      pC = ZC(39692),
      PC = ZC(39676),
      GC = ZC(39758),
      RC = ZC(39735);
    class AC {}
    class xC extends bC.b {
      get name() {
        return this._name
      }
      set name(CC) {
        this._name = CC
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return QC.b.ShadersRepository
      }
      static set ShadersRepository(CC) {
        QC.b.ShadersRepository = CC
      }
      get supportsUniformBuffers() {
        return this.fS > 1 && !this.disableUniformBuffers
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
      constructor(CC, zC, ZC, QC) {
        if (ZC = ZC || {}, super(zC ?? ZC.antialias, ZC, QC), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !CC) return;
        let bC;
        if (CC.getContext) {
          if (bC = CC, void 0 === ZC.preserveDrawingBuffer && (ZC.preserveDrawingBuffer = !1), void 0 === ZC.xrCompatible && (ZC.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const CC = navigator.userAgent;
            for (const zC of xC.ExceptionList) {
              const QC = zC.key,
                wC = zC.targets;
              if (new RegExp(QC).test(CC)) {
                if (zC.capture && zC.captureConstraint) {
                  const ZC = zC.capture,
                    QC = zC.captureConstraint,
                    wC = new RegExp(ZC).exec(CC);
                  if (wC && wC.length > 0) {
                    if (parseInt(wC[wC.length - 1]) >= QC) continue
                  }
                }
                for (const CC of wC) switch (CC) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    ZC.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, wC.y)(this._gl)
            } : (this._onContextLost = CC => {
              CC.preventDefault(), this._contextWasLost = !0, (0, wC.y)(this._gl), fC.c.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, bC.addEventListener("webglcontextrestored", this._onContextRestored, !1), ZC.powerPreference = ZC.powerPreference || "high-performance"), bC.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (ZC.xrCompatible = !1), !ZC.disableWebGL2Support) try {
            this._gl = bC.getContext("webgl2", ZC) || bC.getContext("experimental-webgl2", ZC), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (FC) {}
          if (!this._gl) {
            if (!bC) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = bC.getContext("webgl", ZC) || bC.getContext("experimental-webgl", ZC)
            } catch (FC) {
              throw new Error("WebGL not supported", {
                cause: FC
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = CC, bC = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const zC = this._gl.getContextAttributes();
          zC && (ZC.stencil = zC.stencil)
        }
        this._sharedInit(bC), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== ZC.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = ZC.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let wC = 0; wC < this._caps.maxVertexAttribs; wC++) this._currentBufferPointers[wC] = new AC;
        this._shaderProcessor = this.fS > 1 ? new WC : new qC;
        const nC = `Babylon.js v${xC.Version}`;
        fC.c.Log(nC + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", nC);
        const oC = (0, wC.z)(this._gl);
        oC.validateShaderPrograms = this.validateShaderPrograms, oC.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(CC) {
        return null
      }
      areAllEffectsReady() {
        for (const CC in this._compiledEffects) {
          if (!this._compiledEffects[CC].isReady()) return !1
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
        const CC = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != CC && (this._glRenderer = this._gl.getParameter(CC.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(CC.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const zC = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!zC, this._alphaState = new RC.d(this._caps.blendParametersPerTarget), zC && (this._gl.blendEquationSeparateIndexed = zC.blendEquationSeparateiOES.bind(zC), this._gl.blendEquationIndexed = zC.blendEquationiOES.bind(zC), this._gl.blendFuncSeparateIndexed = zC.blendFuncSeparateiOES.bind(zC), this._gl.blendFuncIndexed = zC.blendFunciOES.bind(zC), this._gl.colorMaskIndexed = zC.colorMaskiOES.bind(zC), this._gl.disableIndexed = zC.disableiOES.bind(zC), this._gl.enableIndexed = zC.enableiOES.bind(zC)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const CC = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== CC) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = CC.drawBuffersWEBGL.bind(CC), this._caps.maxDrawBuffers = this._gl.getParameter(CC.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let zC = 0; zC < 16; zC++) this._gl["COLOR_ATTACHMENT" + zC + "_WEBGL"] = CC["COLOR_ATTACHMENT" + zC + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const CC = this._gl.getExtension("WEBGL_depth_texture");
          null != CC && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = CC.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const CC = this._gl.getExtension("OES_vertex_array_object");
          null != CC && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = CC.createVertexArrayOES.bind(CC), this._gl.bindVertexArray = CC.bindVertexArrayOES.bind(CC), this._gl.deleteVertexArray = CC.deleteVertexArrayOES.bind(CC))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const CC = this._gl.getExtension("ANGLE_instanced_arrays");
          null != CC ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = CC.drawArraysInstancedANGLE.bind(CC), this._gl.drawElementsInstanced = CC.drawElementsInstancedANGLE.bind(CC), this._gl.vertexAttribDivisor = CC.vertexAttribDivisorANGLE.bind(CC)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const CC = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            zC = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (CC && zC && (this._caps.highPrecisionShaderSupported = 0 !== CC.precision && 0 !== zC.precision, this._caps.shaderFloatPrecision = Math.min(CC.precision, zC.precision)), !this._shouldUseHighPrecisionShader) {
            const CC = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              zC = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            CC && zC && (this._caps.shaderFloatPrecision = Math.min(CC.precision, zC.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const CC = this._gl.getExtension("EXT_blend_minmax");
          null != CC && (this._caps.blendMinMax = !0, this._gl.MAX = CC.MAX_EXT, this._gl.MIN = CC.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const CC = this._gl.getExtension("EXT_sRGB");
            null != CC && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: CC.SRGB_EXT,
              SRGB8: CC.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: CC.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const CC = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== CC && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && CC)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let ZC = 0; ZC < this._maxSimultaneousTextures; ZC++) this._nextFreeTextureSlots.push(ZC);
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
      get fS() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const CC = this._workingCanvas.getContext("2d");
        CC && (this._workingContext = CC)
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
        const CC = this.getGlInfo();
        return CC && CC.renderer ? CC.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const bC = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = bC;
        let nC = 0;
        if (zC && CC) {
          let zC = !0;
          if (this._currentRenderTarget) {
            const ZC = this._currentRenderTarget.texture?.format;
            if (void 0 !== ZC && (0, GC.l)(ZC)) {
              const ZC = this._currentRenderTarget.texture?.type;
              void 0 !== ZC && (0, GC.n)(ZC) ? (xC._TempClearColorUint32[0] = 255 * CC.r, xC._TempClearColorUint32[1] = 255 * CC.g, xC._TempClearColorUint32[2] = 255 * CC.b, xC._TempClearColorUint32[3] = 255 * CC.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, xC._TempClearColorUint32), zC = !1) : (xC._TempClearColorInt32[0] = 255 * CC.r, xC._TempClearColorInt32[1] = 255 * CC.g, xC._TempClearColorInt32[2] = 255 * CC.b, xC._TempClearColorInt32[3] = 255 * CC.a, this._gl.clearBufferiv(this._gl.COLOR, 0, xC._TempClearColorInt32), zC = !1)
            }
          }
          zC && (this._gl.clearColor(CC.r, CC.g, CC.b, void 0 !== CC.a ? CC.a : 1), nC |= this._gl.COLOR_BUFFER_BIT)
        }
        ZC && (this.BZC ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), nC |= this._gl.DEPTH_BUFFER_BIT), QC && (this._gl.clearStencil(wC), nC |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(nC)
      }
      _clearColorAttachment(CC, zC, ZC, QC) {
        if ((0, GC.l)(ZC)) {
          const ZC = (0, GC.n)(QC),
            wC = ZC ? xC._TempClearColorUint32 : xC._TempClearColorInt32;
          return wC[0] = zC.r, wC[1] = zC.g, wC[2] = zC.b, wC[3] = zC.a, void(ZC ? this._gl.clearBufferuiv(this._gl.COLOR, CC, wC) : this._gl.clearBufferiv(this._gl.COLOR, CC, wC))
        }
        xC._TempClearColorFloat32[0] = zC.r, xC._TempClearColorFloat32[1] = zC.g, xC._TempClearColorFloat32[2] = zC.b, xC._TempClearColorFloat32[3] = zC.a, this._gl.clearBufferfv(this._gl.COLOR, CC, xC._TempClearColorFloat32)
      }
      _viewport(CC, zC, ZC, QC) {
        CC === this._viewportCached.x && zC === this._viewportCached.y && ZC === this._viewportCached.z && QC === this._viewportCached.w || (this._viewportCached.x = CC, this._viewportCached.y = zC, this._viewportCached.z = ZC, this._viewportCached.w = QC, this._gl.viewport(CC, zC, ZC, QC))
      }
      yR() {
        super.yR(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = arguments.length > 3 ? arguments[3] : void 0,
          wC = arguments.length > 4 ? arguments[4] : void 0,
          bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const oC = CC;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = CC, this._integerMRTAttachmentsMask = !CC.isMulti && CC.texture && (0, GC.l)(CC.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(oC._framebuffer);
        const qC = this._gl;
        CC.isMulti || (CC.is2DArray || CC.is3D ? (qC.framebufferTextureLayer(qC.FRAMEBUFFER, qC.COLOR_ATTACHMENT0, CC.texture._hardwareTexture?.underlyingResource, bC, nC), oC._currentLOD = bC) : CC.isCube ? qC.framebufferTexture2D(qC.FRAMEBUFFER, qC.COLOR_ATTACHMENT0, qC.TEXTURE_CUBE_MAP_POSITIVE_X + zC, CC.texture._hardwareTexture?.underlyingResource, bC) : oC._currentLOD !== bC && (qC.framebufferTexture2D(qC.FRAMEBUFFER, qC.COLOR_ATTACHMENT0, qC.TEXTURE_2D, CC.texture._hardwareTexture?.underlyingResource, bC), oC._currentLOD = bC));
        const FC = CC._depthStencilTexture;
        if (FC) {
          CC.is3D && (CC.texture.width === FC.width && CC.texture.height === FC.height && CC.texture.depth === FC.depth || fC.c.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const ZC = CC._depthStencilTextureWithStencil ? qC.DEPTH_STENCIL_ATTACHMENT : qC.DEPTH_ATTACHMENT;
          CC.is2DArray || CC.is3D ? qC.framebufferTextureLayer(qC.FRAMEBUFFER, ZC, FC._hardwareTexture?.underlyingResource, bC, nC) : CC.isCube ? qC.framebufferTexture2D(qC.FRAMEBUFFER, ZC, qC.TEXTURE_CUBE_MAP_POSITIVE_X + zC, FC._hardwareTexture?.underlyingResource, bC) : qC.framebufferTexture2D(qC.FRAMEBUFFER, ZC, qC.TEXTURE_2D, FC._hardwareTexture?.underlyingResource, bC)
        }
        oC._MSAAFramebuffer && this._bindUnboundFramebuffer(oC._MSAAFramebuffer), this._cachedViewport && !wC ? this.setViewport(this._cachedViewport, ZC, QC) : (ZC || (ZC = CC.width, bC && (ZC /= Math.pow(2, bC))), QC || (QC = CC.height, bC && (QC /= Math.pow(2, bC))), this._viewport(0, 0, ZC, QC)), this.wipeCaches()
      }
      setStateCullFaceType(CC, zC) {
        const ZC = this.cullBackFaces ?? CC ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== ZC || zC) && (this._depthCullingState.cullFace = ZC)
      }
      setState(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          wC = arguments.length > 4 ? arguments[4] : void 0,
          bC = arguments.length > 5 ? arguments[5] : void 0,
          nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== CC || ZC) && (this._depthCullingState.cull = CC), this.setStateCullFaceType(wC, ZC), this.setZOffset(zC), this.setZOffsetUnits(nC);
        const fC = QC ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== fC || ZC) && (this._depthCullingState.frontFace = fC), this._stencilStateComposer.stencilMaterial = bC
      }
      _resolveAndGenerateMipMapsFramebuffer(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        CC.disableAutomaticMSAAResolve || (CC.isMulti ? this.resolveMultiFramebuffer(CC) : this.resolveFramebuffer(CC)), zC || (CC.isMulti ? this.generateMipMapsMultiFramebuffer(CC) : this.generateMipMapsFramebuffer(CC))
      }
      _bindUnboundFramebuffer(CC) {
        this._currentFramebuffer !== CC && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, CC), this._currentFramebuffer = CC)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(CC) {
        const zC = this._getTextureTarget(CC);
        this._bindTextureDirectly(zC, CC, !0), this._gl.generateMipmap(zC), this._bindTextureDirectly(zC, null)
      }
      unBindFramebuffer(CC, zC, ZC) {
        const QC = CC;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(CC, zC), ZC && (QC._MSAAFramebuffer && this._bindUnboundFramebuffer(QC._framebuffer), ZC()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(CC) {
        CC.isMulti || !CC.texture?.generateMipMaps || CC.isCube || this.generateMipmaps(CC.texture)
      }
      resolveFramebuffer(CC) {
        const zC = CC,
          ZC = this._gl;
        if (!zC._MSAAFramebuffer || zC.isMulti) return;
        let QC = zC.resolveMSAAColors ? ZC.COLOR_BUFFER_BIT : 0;
        QC |= zC._generateDepthBuffer && zC.resolveMSAADepth ? ZC.DEPTH_BUFFER_BIT : 0, QC |= zC._generateStencilBuffer && zC.resolveMSAAStencil ? ZC.STENCIL_BUFFER_BIT : 0, ZC.bindFramebuffer(ZC.READ_FRAMEBUFFER, zC._MSAAFramebuffer), ZC.bindFramebuffer(ZC.DRAW_FRAMEBUFFER, zC._framebuffer), ZC.blitFramebuffer(0, 0, CC.width, CC.height, 0, 0, CC.width, CC.height, QC, ZC.NEAREST)
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
      createVertexBuffer(CC, zC, ZC) {
        return this._createVertexBuffer(CC, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(CC, zC) {
        const ZC = this._gl.createBuffer();
        if (!ZC) throw new Error("Unable to create vertex buffer");
        const QC = new NC.c(ZC);
        return this.bindArrayBuffer(QC), "number" !== typeof CC ? CC instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(CC), zC), QC.HW = 4 * CC.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, CC, zC), QC.HW = CC.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(CC), zC), QC.HW = CC), this._resetVertexBufferBinding(), QC.references = 1, QC
      }
      createDynamicVertexBuffer(CC, zC) {
        return this._createVertexBuffer(CC, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(CC, zC, ZC) {
        const QC = this._gl.createBuffer(),
          wC = new NC.c(QC);
        if (!QC) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(wC);
        const bC = this._normalizeIndexData(CC);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, bC, zC ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), wC.references = 1, wC.is32Bits = 4 === bC.BYTES_PER_ELEMENT, wC
      }
      _normalizeIndexData(CC) {
        if (2 === CC.BYTES_PER_ELEMENT) return CC;
        if (this._caps.uintIndices) {
          if (CC instanceof Uint32Array) return CC;
          for (let zC = 0; zC < CC.length; zC++)
            if (CC[zC] >= 65535) return new Uint32Array(CC);
          return new Uint16Array(CC)
        }
        return new Uint16Array(CC)
      }
      bindArrayBuffer(CC) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(CC, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(CC, zC, ZC) {
        const QC = CC.program,
          wC = this._gl.getUniformBlockIndex(QC, zC);
        this._gl.uniformBlockBinding(QC, wC, ZC)
      }
      bindIndexBuffer(CC) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(CC, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(CC, zC) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[zC] !== CC) && (this._gl.bindBuffer(zC, CC ? CC.underlyingResource : null), this._currentBoundBuffer[zC] = CC)
      }
      updateArrayBuffer(CC) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, CC)
      }
      _vertexAttribPointer(CC, zC, ZC, QC, wC, bC, nC) {
        const fC = this._currentBufferPointers[zC];
        if (!fC) return;
        let oC = !1;
        fC.active ? (fC.buffer !== CC && (fC.buffer = CC, oC = !0), fC.size !== ZC && (fC.size = ZC, oC = !0), fC.type !== QC && (fC.type = QC, oC = !0), fC.normalized !== wC && (fC.normalized = wC, oC = !0), fC.stride !== bC && (fC.stride = bC, oC = !0), fC.offset !== nC && (fC.offset = nC, oC = !0)) : (oC = !0, fC.active = !0, fC.index = zC, fC.size = ZC, fC.type = QC, fC.normalized = wC, fC.stride = bC, fC.offset = nC, fC.buffer = CC), (oC || this._vaoRecordInProgress) && (this.bindArrayBuffer(CC), QC === this._gl.UNSIGNED_INT || QC === this._gl.INT ? this._gl.vertexAttribIPointer(zC, ZC, QC, bC, nC) : this._gl.vertexAttribPointer(zC, ZC, QC, wC, bC, nC))
      }
      _bindIndexBufferWithCache(CC) {
        null != CC && this._cachedIndexBuffer !== CC && (this._cachedIndexBuffer = CC, this.bindIndexBuffer(CC), this._uintIndicesCurrentlySet = CC.is32Bits)
      }
      _bindVertexBuffersAttributes(CC, zC, ZC) {
        const QC = zC.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let wC = 0; wC < QC.length; wC++) {
          const bC = zC.getAttributeLocation(wC);
          if (bC >= 0) {
            const zC = QC[wC];
            let nC = null;
            if (ZC && (nC = ZC[zC]), nC || (nC = CC[zC]), !nC) continue;
            this._gl.enableVertexAttribArray(bC), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[bC] = !0);
            const fC = nC.getBuffer();
            fC && (this._vertexAttribPointer(fC, bC, nC.getSize(), nC.type, nC.normalized, nC.byteStride, nC.byteOffset), nC.getIsInstanced() && (this._gl.vertexAttribDivisor(bC, nC.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(bC), this._currentInstanceBuffers.push(fC))))
          }
        }
      }
      recordVertexArrayObject(CC, zC, ZC, QC) {
        const wC = this._gl.createVertexArray();
        if (!wC) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(wC), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(CC, ZC, QC), this.bindIndexBuffer(zC), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), wC
      }
      bindVertexArrayObject(CC, zC) {
        this._cachedVertexArrayObject !== CC && (this._cachedVertexArrayObject = CC, this._gl.bindVertexArray(CC), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != zC && zC.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(CC, zC, ZC, QC, wC) {
        if (this._cachedVertexBuffers !== CC || this._cachedEffectForVertexBuffers !== wC) {
          this._cachedVertexBuffers = CC, this._cachedEffectForVertexBuffers = wC;
          const zC = wC.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let bC = 0;
          for (let nC = 0; nC < zC; nC++)
            if (nC < ZC.length) {
              const zC = wC.getAttributeLocation(nC);
              zC >= 0 && (this._gl.enableVertexAttribArray(zC), this._vertexAttribArraysEnabled[zC] = !0, this._vertexAttribPointer(CC, zC, ZC[nC], this._gl.FLOAT, !1, QC, bC)), bC += 4 * ZC[nC]
            }
        }
        this._bindIndexBufferWithCache(zC)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(CC, zC, ZC, QC) {
        this._cachedVertexBuffers === CC && this._cachedEffectForVertexBuffers === ZC || (this._cachedVertexBuffers = CC, this._cachedEffectForVertexBuffers = ZC, this._bindVertexBuffersAttributes(CC, ZC, QC)), this._bindIndexBufferWithCache(zC)
      }
      unbindInstanceAttributes() {
        let CC;
        for (let zC = 0, ZC = this._currentInstanceLocations.length; zC < ZC; zC++) {
          const ZC = this._currentInstanceBuffers[zC];
          CC != ZC && ZC.references && (CC = ZC, this.bindArrayBuffer(ZC));
          const QC = this._currentInstanceLocations[zC];
          this._gl.vertexAttribDivisor(QC, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(CC) {
        this._gl.deleteVertexArray(CC)
      }
      _releaseBuffer(CC) {
        return CC.references--, 0 === CC.references && (this._deleteBuffer(CC), !0)
      }
      _deleteBuffer(CC) {
        this._gl.deleteBuffer(CC.underlyingResource)
      }
      updateAndBindInstancesBuffer(CC, zC, ZC) {
        if (this.bindArrayBuffer(CC), zC && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, zC), void 0 !== ZC[0].index) this.bindInstancesBuffer(CC, ZC, !0);
        else
          for (let QC = 0; QC < 4; QC++) {
            const zC = ZC[QC];
            this._vertexAttribArraysEnabled[zC] || (this._gl.enableVertexAttribArray(zC), this._vertexAttribArraysEnabled[zC] = !0), this._vertexAttribPointer(CC, zC, 4, this._gl.FLOAT, !1, 64, 16 * QC), this._gl.vertexAttribDivisor(zC, 1), this._currentInstanceLocations.push(zC), this._currentInstanceBuffers.push(CC)
          }
      }
      bindInstancesBuffer(CC, zC) {
        let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(CC);
        let QC = 0;
        if (ZC)
          for (let wC = 0; wC < zC.length; wC++) {
            QC += 4 * zC[wC].attributeSize
          }
        for (let wC = 0; wC < zC.length; wC++) {
          const ZC = zC[wC];
          void 0 === ZC.index && (ZC.index = this._currentEffect.getAttributeLocationByName(ZC.attributeName)), ZC.index < 0 || (this._vertexAttribArraysEnabled[ZC.index] || (this._gl.enableVertexAttribArray(ZC.index), this._vertexAttribArraysEnabled[ZC.index] = !0), this._vertexAttribPointer(CC, ZC.index, ZC.attributeSize, ZC.attributeType || this._gl.FLOAT, ZC.normalized || !1, QC, ZC.offset), this._gl.vertexAttribDivisor(ZC.index, void 0 === ZC.divisor ? 1 : ZC.divisor), this._currentInstanceLocations.push(ZC.index), this._currentInstanceBuffers.push(CC))
        }
      }
      disableInstanceAttributeByName(CC) {
        if (!this._currentEffect) return;
        const zC = this._currentEffect.getAttributeLocationByName(CC);
        this.disableInstanceAttribute(zC)
      }
      disableInstanceAttribute(CC) {
        let zC, ZC = !1;
        for (; - 1 !== (zC = this._currentInstanceLocations.indexOf(CC));) this._currentInstanceLocations.splice(zC, 1), this._currentInstanceBuffers.splice(zC, 1), ZC = !0;
        ZC && (this._gl.vertexAttribDivisor(CC, 0), this.disableAttributeByIndex(CC))
      }
      disableAttributeByIndex(CC) {
        this._gl.disableVertexAttribArray(CC), this._vertexAttribArraysEnabled[CC] = !1, this._currentBufferPointers[CC].active = !1
      }
      draw(CC, zC, ZC, QC) {
        this.drawElementsType(CC ? 0 : 1, zC, ZC, QC)
      }
      drawPointClouds(CC, zC, ZC) {
        this.drawArraysType(2, CC, zC, ZC)
      }
      drawUnIndexed(CC, zC, ZC, QC) {
        this.drawArraysType(CC ? 0 : 1, zC, ZC, QC)
      }
      drawElementsType(CC, zC, ZC, QC) {
        this.applyStates(), this._reportDrawCall();
        const wC = this._drawMode(CC),
          bC = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          nC = this._uintIndicesCurrentlySet ? 4 : 2;
        QC ? this._gl.drawElementsInstanced(wC, ZC, bC, zC * nC, QC) : this._gl.drawElements(wC, ZC, bC, zC * nC)
      }
      drawArraysType(CC, zC, ZC, QC) {
        this.applyStates(), this._reportDrawCall();
        const wC = this._drawMode(CC);
        QC ? this._gl.drawArraysInstanced(wC, zC, ZC, QC) : this._gl.drawArrays(wC, zC, ZC)
      }
      _drawMode(CC) {
        switch (CC) {
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
      _releaseEffect(CC) {
        this._compiledEffects[CC._key] && delete this._compiledEffects[CC._key];
        const zC = CC.getPipelineContext();
        zC && this._deletePipelineContext(zC)
      }
      _deletePipelineContext(CC) {
        const zC = CC;
        zC && zC.program && (zC.program.__SPECTOR_rebuildProgram = null, (0, PC.p)(zC), this._gl && (this._currentProgram === zC.program && this._setProgram(null), this._gl.deleteProgram(zC.program)))
      }
      _getGlobalDefines(CC) {
        return (0, pC.l)(CC, this.isNDCHalfZRange, this.BZC, this.useExactSrgbConversions)
      }
      createEffect(CC, zC, ZC, bC, nC, fC, oC, qC, FC) {
        let WC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          NC = arguments.length > 10 ? arguments[10] : void 0;
        const MC = "string" === typeof CC ? CC : CC.vertexToken || CC.vertexSource || CC.vertexElement || CC.vertex,
          gC = "string" === typeof CC ? CC : CC.fragmentToken || CC.fragmentSource || CC.fragmentElement || CC.fragment,
          SC = this._getGlobalDefines(),
          pC = void 0 !== zC.attributes;
        let PC = nC ?? zC.defines ?? "";
        SC && (PC += SC);
        const GC = MC + "+" + gC + "@" + PC;
        if (this._compiledEffects[GC]) {
          const CC = this._compiledEffects[GC];
          return oC && CC.isReady() && oC(CC), CC._refCount++, CC
        }
        this._gl && (0, wC.z)(this._gl);
        const RC = new QC.b(CC, zC, pC ? this : ZC, bC, this, nC, fC, oC, qC, FC, GC, zC.shaderLanguage ?? WC, zC.extraInitializationsAsync ?? NC);
        return this._compiledEffects[GC] = RC, RC
      }
      _getShaderSource(CC) {
        return this._gl.getShaderSource(CC)
      }
      createRawShaderProgram(CC, zC, ZC, QC) {
        let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const nC = (0, wC.z)(this._gl);
        return nC._contextWasLost = this._contextWasLost, nC.validateShaderPrograms = this.validateShaderPrograms, (0, wC.v)(CC, zC, ZC, QC || this._gl, bC)
      }
      createShaderProgram(CC, zC, ZC, QC, bC) {
        let nC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const fC = (0, wC.z)(this._gl);
        return fC._contextWasLost = this._contextWasLost, fC.validateShaderPrograms = this.validateShaderPrograms, (0, wC.w)(CC, zC, ZC, QC, bC || this._gl, nC)
      }
      inlineShaderCode(CC) {
        return CC
      }
      createPipelineContext(CC) {
        if (this._gl) {
          (0, wC.z)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const zC = (0, wC.t)(this._gl, CC);
        return zC.engine = this, zC
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(CC) {
        return (0, wC.j)(CC, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(CC, zC, ZC, QC, bC, nC, fC, oC, qC, FC, WC) {
        const NC = (0, wC.z)(this._gl);
        return NC._contextWasLost = this._contextWasLost, NC.validateShaderPrograms = this.validateShaderPrograms, NC._createShaderProgramInjection = this._createShaderProgram.bind(this), NC.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), NC.createShaderProgramInjection = this.createShaderProgram.bind(this), NC.loadFileInjection = this._loadFile.bind(this), (0, wC.o)(CC, zC, ZC, QC, bC, nC, fC, oC, qC, FC, WC)
      }
      _createShaderProgram(CC, zC, ZC, QC) {
        let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, wC.d)(CC, zC, ZC, QC, bC)
      }
      _isRenderingStateCompiled(CC) {
        return !this._isDisposed && (0, wC.l)(CC, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(CC, zC) {
        (0, wC.h)(CC, zC)
      }
      getUniforms(CC, zC) {
        const ZC = new Array,
          QC = CC;
        for (let wC = 0; wC < zC.length; wC++) ZC.push(this._gl.getUniformLocation(QC.program, zC[wC]));
        return ZC
      }
      getAttributes(CC, zC) {
        const ZC = [],
          QC = CC;
        for (let bC = 0; bC < zC.length; bC++) try {
          ZC.push(this._gl.getAttribLocation(QC.program, zC[bC]))
        } catch (wC) {
          ZC.push(-1)
        }
        return ZC
      }
      enableEffect(CC) {
        (CC = null !== CC && (0, nC.c)(CC) ? CC.effect : CC) && CC !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(CC), this._currentEffect = CC, CC.onBind && CC.onBind(CC), CC._onBindObservable && CC._onBindObservable.notifyObservers(CC))
      }
      setInt(CC, zC) {
        return !!CC && (this._gl.uniform1i(CC, zC), !0)
      }
      setInt2(CC, zC, ZC) {
        return !!CC && (this._gl.uniform2i(CC, zC, ZC), !0)
      }
      setInt3(CC, zC, ZC, QC) {
        return !!CC && (this._gl.uniform3i(CC, zC, ZC, QC), !0)
      }
      setInt4(CC, zC, ZC, QC, wC) {
        return !!CC && (this._gl.uniform4i(CC, zC, ZC, QC, wC), !0)
      }
      setIntArray(CC, zC) {
        return !!CC && (this._gl.uniform1iv(CC, zC), !0)
      }
      setIntArray2(CC, zC) {
        return !(!CC || zC.length % 2 !== 0) && (this._gl.uniform2iv(CC, zC), !0)
      }
      setIntArray3(CC, zC) {
        return !(!CC || zC.length % 3 !== 0) && (this._gl.uniform3iv(CC, zC), !0)
      }
      setIntArray4(CC, zC) {
        return !(!CC || zC.length % 4 !== 0) && (this._gl.uniform4iv(CC, zC), !0)
      }
      setUInt(CC, zC) {
        return !!CC && (this._gl.uniform1ui(CC, zC), !0)
      }
      setUInt2(CC, zC, ZC) {
        return !!CC && (this._gl.uniform2ui(CC, zC, ZC), !0)
      }
      setUInt3(CC, zC, ZC, QC) {
        return !!CC && (this._gl.uniform3ui(CC, zC, ZC, QC), !0)
      }
      setUInt4(CC, zC, ZC, QC, wC) {
        return !!CC && (this._gl.uniform4ui(CC, zC, ZC, QC, wC), !0)
      }
      setUIntArray(CC, zC) {
        return !!CC && (this._gl.uniform1uiv(CC, zC), !0)
      }
      setUIntArray2(CC, zC) {
        return !(!CC || zC.length % 2 !== 0) && (this._gl.uniform2uiv(CC, zC), !0)
      }
      setUIntArray3(CC, zC) {
        return !(!CC || zC.length % 3 !== 0) && (this._gl.uniform3uiv(CC, zC), !0)
      }
      setUIntArray4(CC, zC) {
        return !(!CC || zC.length % 4 !== 0) && (this._gl.uniform4uiv(CC, zC), !0)
      }
      setArray(CC, zC) {
        return !!CC && (!(zC.length < 1) && (this._gl.uniform1fv(CC, zC), !0))
      }
      setArray2(CC, zC) {
        return !(!CC || zC.length % 2 !== 0) && (this._gl.uniform2fv(CC, zC), !0)
      }
      setArray3(CC, zC) {
        return !(!CC || zC.length % 3 !== 0) && (this._gl.uniform3fv(CC, zC), !0)
      }
      setArray4(CC, zC) {
        return !(!CC || zC.length % 4 !== 0) && (this._gl.uniform4fv(CC, zC), !0)
      }
      setMatrices(CC, zC) {
        return !!CC && (this._gl.uniformMatrix4fv(CC, !1, zC), !0)
      }
      setMatrix3x3(CC, zC) {
        return !!CC && (this._gl.uniformMatrix3fv(CC, !1, zC), !0)
      }
      setMatrix2x2(CC, zC) {
        return !!CC && (this._gl.uniformMatrix2fv(CC, !1, zC), !0)
      }
      setFloat(CC, zC) {
        return !!CC && (this._gl.uniform1f(CC, zC), !0)
      }
      setFloat2(CC, zC, ZC) {
        return !!CC && (this._gl.uniform2f(CC, zC, ZC), !0)
      }
      setFloat3(CC, zC, ZC, QC) {
        return !!CC && (this._gl.uniform3f(CC, zC, ZC, QC), !0)
      }
      setFloat4(CC, zC, ZC, QC, wC) {
        return !!CC && (this._gl.uniform4f(CC, zC, ZC, QC, wC), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const CC = this._colorWrite;
          this._gl.colorMask(CC, CC, CC, CC)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(CC) {
        this.preventCacheWipeBetweenFrames && !CC || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), CC && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(CC, zC) {
        const ZC = this._gl;
        let QC = ZC.NEAREST,
          wC = ZC.NEAREST,
          bC = !1;
        switch (CC) {
          case 11:
            QC = ZC.LINEAR, wC = zC ? ZC.LINEAR_MIPMAP_NEAREST : ZC.LINEAR;
            break;
          case 3:
            QC = ZC.LINEAR, bC = !0, wC = zC ? ZC.LINEAR_MIPMAP_LINEAR : ZC.LINEAR;
            break;
          case 8:
            bC = !0, QC = ZC.NEAREST, wC = zC ? ZC.NEAREST_MIPMAP_LINEAR : ZC.NEAREST;
            break;
          case 4:
            QC = ZC.NEAREST, wC = zC ? ZC.NEAREST_MIPMAP_NEAREST : ZC.NEAREST;
            break;
          case 5:
            QC = ZC.NEAREST, wC = zC ? ZC.LINEAR_MIPMAP_NEAREST : ZC.LINEAR;
            break;
          case 6:
            bC = !0, QC = ZC.NEAREST, wC = zC ? ZC.LINEAR_MIPMAP_LINEAR : ZC.LINEAR;
            break;
          case 7:
            QC = ZC.NEAREST, wC = ZC.LINEAR;
            break;
          case 1:
            QC = ZC.NEAREST, wC = ZC.NEAREST;
            break;
          case 9:
            QC = ZC.LINEAR, wC = zC ? ZC.NEAREST_MIPMAP_NEAREST : ZC.NEAREST;
            break;
          case 10:
            bC = !0, QC = ZC.LINEAR, wC = zC ? ZC.NEAREST_MIPMAP_LINEAR : ZC.NEAREST;
            break;
          case 2:
            QC = ZC.LINEAR, wC = ZC.LINEAR;
            break;
          case 12:
            QC = ZC.LINEAR, wC = ZC.NEAREST
        }
        return {
          min: wC,
          mag: QC,
          hasMipMaps: bC
        }
      }
      _createTexture() {
        const CC = this._gl.createTexture();
        if (!CC) throw new Error("Unable to create texture");
        return CC
      }
      _createHardwareTexture() {
        return new gC.d(this._createTexture(), this._gl)
      }
      _createInternalTexture(CC, zC) {
        let ZC, QC, wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          bC = !1,
          nC = 0,
          oC = 3,
          qC = 5,
          FC = !1,
          WC = 1,
          NC = !1,
          MC = 0,
          gC = !1;
        void 0 !== zC && "object" === typeof zC ? (ZC = !!zC.generateMipMaps, bC = !!zC.createMipMaps, nC = void 0 === zC.type ? 0 : zC.type, oC = void 0 === zC.samplingMode ? 3 : zC.samplingMode, qC = void 0 === zC.format ? 5 : zC.format, FC = void 0 !== zC.useSRGBBuffer && zC.useSRGBBuffer, WC = zC.samples ?? 1, QC = zC.label, NC = !!zC.createMSAATexture, MC = zC.comparisonFunction || 0, gC = !!zC.isCube) : ZC = !!zC, FC && (FC = this._caps.supportSRGBBuffers && (this.fS > 1 || this.isWebGPU)), (1 !== nC || this._caps.textureFloatLinearFiltering) && (2 !== nC || this._caps.textureHalfFloatLinearFiltering) || (oC = 1), 1 !== nC || this._caps.textureFloat || (nC = 0, fC.c.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const pC = (0, GC.i)(qC),
          PC = (0, GC.e)(qC),
          RC = this._gl,
          AC = new SC.c(this, wC),
          xC = CC.width || CC,
          JC = CC.height || CC,
          IC = CC.depth || 0,
          iC = CC.layers || 0,
          vC = this._getSamplingParameters(oC, (ZC || bC) && !pC),
          eC = 0 !== iC ? RC.TEXTURE_2D_ARRAY : 0 !== IC ? RC.TEXTURE_3D : gC ? RC.TEXTURE_CUBE_MAP : RC.TEXTURE_2D,
          hC = pC ? this._getInternalFormatFromDepthTextureFormat(qC, !0, PC) : this._getRGBABufferInternalSizedFormat(nC, qC, FC),
          KC = pC ? PC ? RC.DEPTH_STENCIL : RC.DEPTH_COMPONENT : this._getInternalFormat(qC),
          YC = pC ? this._getWebGLTextureTypeFromDepthTextureFormat(qC) : this._getWebGLTextureType(nC);
        if (this._bindTextureDirectly(eC, AC), 0 !== iC) AC.is2DArray = !0, RC.texImage3D(eC, 0, hC, xC, JC, iC, 0, KC, YC, null);
        else if (0 !== IC) AC.is3D = !0, RC.texImage3D(eC, 0, hC, xC, JC, IC, 0, KC, YC, null);
        else if (gC) {
          AC.isCube = !0;
          for (let CC = 0; CC < 6; CC++) RC.texImage2D(RC.TEXTURE_CUBE_MAP_POSITIVE_X + CC, 0, hC, xC, JC, 0, KC, YC, null)
        } else RC.texImage2D(eC, 0, hC, xC, JC, 0, KC, YC, null);
        if (RC.texParameteri(eC, RC.TEXTURE_MAG_FILTER, vC.mag), RC.texParameteri(eC, RC.TEXTURE_MIN_FILTER, vC.min), RC.texParameteri(eC, RC.TEXTURE_WRAP_S, RC.CLAMP_TO_EDGE), RC.texParameteri(eC, RC.TEXTURE_WRAP_T, RC.CLAMP_TO_EDGE), pC && this.fS > 1 && (0 === MC ? (RC.texParameteri(eC, RC.TEXTURE_COMPARE_FUNC, 515), RC.texParameteri(eC, RC.TEXTURE_COMPARE_MODE, RC.NONE)) : (RC.texParameteri(eC, RC.TEXTURE_COMPARE_FUNC, MC), RC.texParameteri(eC, RC.TEXTURE_COMPARE_MODE, RC.COMPARE_REF_TO_TEXTURE))), (ZC || bC) && this._gl.generateMipmap(eC), this._bindTextureDirectly(eC, null), AC._useSRGBBuffer = FC, AC.baseWidth = xC, AC.baseHeight = JC, AC.width = xC, AC.height = JC, AC.depth = iC || IC, AC.isReady = !0, AC.samples = WC, AC.generateMipMaps = ZC, AC.samplingMode = oC, AC.type = nC, AC.format = qC, AC.label = QC, AC.comparisonFunction = MC, this._internalTexturesCache.push(AC), NC) {
          let CC;
          if (CC = (0, GC.i)(AC.format) ? this._setupFramebufferDepthAttachments((0, GC.e)(AC.format), 19 !== AC.format, AC.width, AC.height, WC, AC.format, !0) : this._createRenderBuffer(AC.width, AC.height, WC, -1, this._getRGBABufferInternalSizedFormat(AC.type, AC.format, AC._useSRGBBuffer), -1), !CC) throw new Error("Unable to create render buffer");
          AC._autoMSAAManagement = !0;
          let zC = AC._hardwareTexture;
          zC || (zC = AC._hardwareTexture = this._createHardwareTexture()), zC.addMSAARenderBuffer(CC)
        }
        return AC
      }
      _getUseSRGBBuffer(CC, zC) {
        return CC && this._caps.supportSRGBBuffers && (this.fS > 1 || zC)
      }
      createTexture(CC, zC, ZC, QC) {
        var wC = this;
        let bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          nC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          fC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          oC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          qC = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          FC = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          WC = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          NC = arguments.length > 11 ? arguments[11] : void 0,
          MC = arguments.length > 12 ? arguments[12] : void 0,
          gC = arguments.length > 13 ? arguments[13] : void 0,
          pC = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(CC, zC, ZC, QC, bC, nC, fC, (function() {
          for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
          return wC._prepareWebGLTexture(...zC, FC)
        }), ((CC, zC, ZC, wC, bC, nC) => {
          const fC = this._gl,
            oC = ZC.width === CC && ZC.height === zC;
          bC._creationFlags = gC ?? 0;
          const qC = this._getTexImageParametersForCreateTexture(bC.format, bC._useSRGBBuffer);
          if (oC) return fC.texImage2D(fC.TEXTURE_2D, 0, qC.internalFormat, qC.format, qC.type, ZC), !1;
          const FC = this._caps.maxTextureSize;
          if (ZC.width > FC || ZC.height > FC || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = CC, this._workingCanvas.height = zC, this._workingContext.drawImage(ZC, 0, 0, ZC.width, ZC.height, 0, 0, CC, zC), fC.texImage2D(fC.TEXTURE_2D, 0, qC.internalFormat, qC.format, qC.type, this._workingCanvas), bC.width = CC, bC.height = zC, !1);
          {
            const CC = new SC.c(this, 2);
            this._bindTextureDirectly(fC.TEXTURE_2D, CC, !0), fC.texImage2D(fC.TEXTURE_2D, 0, qC.internalFormat, qC.format, qC.type, ZC), this._rescaleTexture(CC, bC, QC, qC.format, (() => {
              this._releaseTexture(CC), this._bindTextureDirectly(fC.TEXTURE_2D, bC, !0), nC()
            }))
          }
          return !0
        }), oC, qC, FC, WC, NC, MC, pC)
      }
      _getTexImageParametersForCreateTexture(CC, zC) {
        let ZC, QC;
        return 1 === this.fS ? (ZC = this._getInternalFormat(CC, zC), QC = ZC) : (ZC = this._getInternalFormat(CC, !1), QC = this._getRGBABufferInternalSizedFormat(0, CC, zC)), {
          internalFormat: QC,
          format: ZC,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(CC, zC, ZC, QC, wC) {}
      _unpackFlipY(CC) {
        this._unpackFlipYCached !== CC && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, CC ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = CC))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(CC) {
        return CC.isCube ? this._gl.TEXTURE_CUBE_MAP : CC.is3D ? this._gl.TEXTURE_3D : CC.is2DArray || CC.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QC = this._getTextureTarget(zC),
          wC = this._getSamplingParameters(CC, zC.useMipMaps || ZC);
        this._setTextureParameterInteger(QC, this._gl.TEXTURE_MAG_FILTER, wC.mag, zC), this._setTextureParameterInteger(QC, this._gl.TEXTURE_MIN_FILTER, wC.min), ZC && wC.hasMipMaps && (zC.generateMipMaps = !0, this._gl.generateMipmap(QC)), this._bindTextureDirectly(QC, null), zC.samplingMode = CC
      }
      updateTextureDimensions(CC, zC, ZC) {}
      updateTextureWrappingMode(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const wC = this._getTextureTarget(CC);
        null !== zC && (this._setTextureParameterInteger(wC, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(zC), CC), CC._cachedWrapU = zC), null !== ZC && (this._setTextureParameterInteger(wC, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(ZC), CC), CC._cachedWrapV = ZC), (CC.is2DArray || CC.is3D) && null !== QC && (this._setTextureParameterInteger(wC, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(QC), CC), CC._cachedWrapR = QC), this._bindTextureDirectly(wC, null)
      }
      _uploadCompressedDataToTextureDirectly(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const fC = this._gl;
        let oC = fC.TEXTURE_2D;
        if (CC.isCube && (oC = fC.TEXTURE_CUBE_MAP_POSITIVE_X + bC), CC._useSRGBBuffer) switch (zC) {
          case 37492:
          case 36196:
            this._caps.etc2 ? zC = fC.COMPRESSED_SRGB8_ETC2 : CC._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? zC = fC.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : CC._useSRGBBuffer = !1;
            break;
          case 36492:
            zC = fC.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            zC = fC.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            zC = fC.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            zC = fC.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            zC = fC.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            zC = fC.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            zC = fC.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            zC = fC.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            zC = fC.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            zC = fC.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            zC = fC.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            zC = fC.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            zC = fC.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            zC = fC.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            zC = fC.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? zC = fC.COMPRESSED_SRGB_S3TC_DXT1_EXT : CC._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? zC = fC.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : CC._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? zC = fC.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : CC._useSRGBBuffer = !1;
            break;
          default:
            CC._useSRGBBuffer = !1
        }
        if (CC.generateMipMaps) {
          const bC = CC._hardwareTexture;
          bC.memoryAllocated || (fC.texStorage2D(CC.isCube ? fC.TEXTURE_CUBE_MAP : fC.TEXTURE_2D, Math.floor(Math.log2(Math.max(ZC, QC))) + 1, zC, CC.width, CC.height), bC.memoryAllocated = !0), this._gl.compressedTexSubImage2D(oC, nC, 0, 0, ZC, QC, zC, wC)
        } else this._gl.compressedTexImage2D(oC, nC, zC, ZC, QC, 0, wC)
      }
      _uploadDataToTextureDirectly(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          wC = arguments.length > 4 ? arguments[4] : void 0,
          bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const nC = this._gl,
          fC = this._getWebGLTextureType(CC.type),
          oC = this._getInternalFormat(CC.format),
          qC = void 0 === wC ? this._getRGBABufferInternalSizedFormat(CC.type, CC.format, CC._useSRGBBuffer) : this._getInternalFormat(wC, CC._useSRGBBuffer);
        this._unpackFlipY(CC.invertY);
        let FC = nC.TEXTURE_2D;
        CC.isCube && (FC = nC.TEXTURE_CUBE_MAP_POSITIVE_X + ZC);
        const WC = Math.round(Math.log(CC.width) * Math.LOG2E),
          NC = Math.round(Math.log(CC.height) * Math.LOG2E),
          MC = bC ? CC.width : Math.pow(2, Math.max(WC - QC, 0)),
          gC = bC ? CC.height : Math.pow(2, Math.max(NC - QC, 0));
        nC.texImage2D(FC, QC, qC, MC, gC, 0, oC, fC, zC)
      }
      updateTextureData(CC, zC, ZC, QC, wC, bC) {
        let nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          oC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const qC = this._gl,
          FC = this._getWebGLTextureType(CC.type),
          WC = this._getInternalFormat(CC.format);
        this._unpackFlipY(CC.invertY);
        let NC = qC.TEXTURE_2D,
          MC = qC.TEXTURE_2D;
        CC.isCube && (MC = qC.TEXTURE_CUBE_MAP_POSITIVE_X + nC, NC = qC.TEXTURE_CUBE_MAP), this._bindTextureDirectly(NC, CC, !0), qC.texSubImage2D(MC, fC, ZC, QC, wC, bC, WC, FC, zC), oC && this._gl.generateMipmap(MC), this._bindTextureDirectly(NC, null)
      }
      _uploadArrayBufferViewToTexture(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const wC = this._gl,
          bC = CC.isCube ? wC.TEXTURE_CUBE_MAP : wC.TEXTURE_2D;
        this._bindTextureDirectly(bC, CC, !0), this._uploadDataToTextureDirectly(CC, zC, ZC, QC), this._bindTextureDirectly(bC, null, !0)
      }
      _prepareWebGLTextureContinuation(CC, zC, ZC, QC, wC) {
        const bC = this._gl;
        if (!bC) return;
        const nC = this._getSamplingParameters(wC, !ZC);
        bC.texParameteri(bC.TEXTURE_2D, bC.TEXTURE_MAG_FILTER, nC.mag), bC.texParameteri(bC.TEXTURE_2D, bC.TEXTURE_MIN_FILTER, nC.min), ZC || QC || bC.generateMipmap(bC.TEXTURE_2D), this._bindTextureDirectly(bC.TEXTURE_2D, null), zC && zC.removePendingData(CC), CC.onLoadedObservable.notifyObservers(CC), CC.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
        const FC = this.getCaps().maxTextureSize,
          WC = Math.min(FC, this.needPOTTextures ? (0, MC.e)(QC.width, FC) : QC.width),
          NC = Math.min(FC, this.needPOTTextures ? (0, MC.e)(QC.height, FC) : QC.height),
          gC = this._gl;
        gC && (CC._hardwareTexture ? (this._bindTextureDirectly(gC.TEXTURE_2D, CC, !0), this._unpackFlipY(void 0 === wC || !!wC), CC.baseWidth = QC.width, CC.baseHeight = QC.height, CC.width = WC, CC.height = NC, CC.isReady = !0, CC.type = -1 !== CC.type ? CC.type : 0, CC.format = -1 !== CC.format ? CC.format : qC ?? (".jpg" !== zC || CC._useSRGBBuffer ? 5 : 4), fC(WC, NC, QC, zC, CC, (() => {
          this._prepareWebGLTextureContinuation(CC, ZC, bC, nC, oC)
        })) || this._prepareWebGLTextureContinuation(CC, ZC, bC, nC, oC)) : ZC && ZC.removePendingData(CC))
      }
      _getInternalFormatFromDepthTextureFormat(CC, zC, ZC) {
        const QC = this._gl;
        if (!zC) return QC.STENCIL_INDEX8;
        let wC = ZC ? QC.DEPTH_STENCIL : QC.DEPTH_COMPONENT;
        return this.fS > 1 ? 15 === CC ? wC = QC.DEPTH_COMPONENT16 : 16 === CC ? wC = QC.DEPTH_COMPONENT24 : 17 === CC || 13 === CC ? wC = ZC ? QC.DEPTH24_STENCIL8 : QC.DEPTH_COMPONENT24 : 14 === CC ? wC = QC.DEPTH_COMPONENT32F : 18 === CC && (wC = ZC ? QC.DEPTH32F_STENCIL8 : QC.DEPTH_COMPONENT32F) : wC = QC.DEPTH_COMPONENT16, wC
      }
      _getWebGLTextureTypeFromDepthTextureFormat(CC) {
        const zC = this._gl;
        let ZC = zC.UNSIGNED_INT;
        return 15 === CC ? ZC = zC.UNSIGNED_SHORT : 17 === CC || 13 === CC ? ZC = zC.UNSIGNED_INT_24_8 : 14 === CC ? ZC = zC.FLOAT : 18 === CC ? ZC = zC.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === CC && (ZC = zC.UNSIGNED_BYTE), ZC
      }
      _setupFramebufferDepthAttachments(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          bC = arguments.length > 5 ? arguments[5] : void 0,
          nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const fC = this._gl;
        bC = bC ?? (CC ? 13 : 14);
        const oC = this._getInternalFormatFromDepthTextureFormat(bC, zC, CC);
        return CC && zC ? this._createRenderBuffer(ZC, QC, wC, fC.DEPTH_STENCIL, oC, nC ? -1 : fC.DEPTH_STENCIL_ATTACHMENT) : zC ? this._createRenderBuffer(ZC, QC, wC, oC, oC, nC ? -1 : fC.DEPTH_ATTACHMENT) : CC ? this._createRenderBuffer(ZC, QC, wC, oC, oC, nC ? -1 : fC.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(CC, zC, ZC, QC, wC, bC) {
        let nC = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const fC = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(fC, CC, zC, ZC, QC, wC, bC, nC)
      }
      _updateRenderBuffer(CC, zC, ZC, QC, wC, bC, nC) {
        let fC = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const oC = this._gl;
        return oC.bindRenderbuffer(oC.RENDERBUFFER, CC), QC > 1 && oC.renderbufferStorageMultisample ? oC.renderbufferStorageMultisample(oC.RENDERBUFFER, QC, bC, zC, ZC) : oC.renderbufferStorage(oC.RENDERBUFFER, wC, zC, ZC), -1 !== nC && oC.framebufferRenderbuffer(oC.FRAMEBUFFER, nC, oC.RENDERBUFFER, CC), fC && oC.bindRenderbuffer(oC.RENDERBUFFER, null), CC
      }
      _releaseTexture(CC) {
        this._deleteTexture(CC._hardwareTexture), this.unbindAllTextures();
        const zC = this._internalTexturesCache.indexOf(CC); - 1 !== zC && this._internalTexturesCache.splice(zC, 1), CC._lodTextureHigh && CC._lodTextureHigh.dispose(), CC._lodTextureMid && CC._lodTextureMid.dispose(), CC._lodTextureLow && CC._lodTextureLow.dispose(), CC._irradianceTexture && CC._irradianceTexture.dispose()
      }
      _deleteTexture(CC) {
        CC?.release()
      }
      _setProgram(CC) {
        this._currentProgram !== CC && ((0, wC.s)(CC, this._gl), this._currentProgram = CC)
      }
      bindSamplers(CC) {
        const zC = CC.getPipelineContext();
        this._setProgram(zC.program);
        const ZC = CC.getSamplers();
        for (let QC = 0; QC < ZC.length; QC++) {
          const zC = CC.getUniform(ZC[QC]);
          zC && (this._boundUniforms[QC] = zC)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          wC = !1;
        const bC = zC && zC._associatedChannel > -1;
        ZC && bC && (this._activeChannel = zC._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== zC || QC) {
          if (this._activateCurrentTexture(), zC && zC.isMultiview) throw fC.c.Error(["_bindTextureDirectly called with a multiview texture!", CC, zC]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(CC, zC?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = zC, zC && (zC._associatedChannel = this._activeChannel)
        } else ZC && (wC = !0, this._activateCurrentTexture());
        return bC && !ZC && this._bindSamplerUniformToChannel(zC._associatedChannel, this._activeChannel), wC
      }
      _bindTexture(CC, zC, ZC) {
        if (void 0 === CC) return;
        zC && (zC._associatedChannel = CC), this._activeChannel = CC;
        const QC = zC ? this._getTextureTarget(zC) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(QC, zC)
      }
      unbindAllTextures() {
        for (let CC = 0; CC < this._maxSimultaneousTextures; CC++) this._activeChannel = CC, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.fS > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(CC, zC, ZC, QC) {
        void 0 !== CC && (zC && (this._boundUniforms[CC] = zC), this._setTexture(CC, ZC))
      }
      _bindSamplerUniformToChannel(CC, zC) {
        const ZC = this._boundUniforms[CC];
        ZC && ZC._currentState !== zC && (this._gl.uniform1i(ZC, zC), ZC._currentState = zC)
      }
      _getTextureWrapMode(CC) {
        switch (CC) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(CC, zC) {
        let ZC, QC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!zC) return null != this._boundTexturesCache[CC] && (this._activeChannel = CC, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.fS > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (zC.video) {
          this._activeChannel = CC;
          const ZC = zC.getInternalTexture();
          ZC && (ZC._associatedChannel = CC), zC.update()
        } else if (4 === zC.delayLoadState) return zC.delayLoad(), !1;
        ZC = wC ? zC.depthStencilTexture : zC.isReady() ? zC.getInternalTexture() : zC.isCube ? this.emptyCubeTexture : zC.is3D ? this.emptyTexture3D : zC.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !QC && ZC && (ZC._associatedChannel = CC);
        let bC = !0;
        this._boundTexturesCache[CC] === ZC && (QC || this._bindSamplerUniformToChannel(ZC._associatedChannel, CC), bC = !1), this._activeChannel = CC;
        const nC = this._getTextureTarget(ZC);
        if (bC && this._bindTextureDirectly(nC, ZC, QC), ZC && !ZC.isMultiview) {
          if (ZC.isCube && ZC._cachedCoordinatesMode !== zC.coordinatesMode) {
            ZC._cachedCoordinatesMode = zC.coordinatesMode;
            const CC = 3 !== zC.coordinatesMode && 5 !== zC.coordinatesMode ? 1 : 0;
            zC.wrapU = CC, zC.wrapV = CC
          }
          ZC._cachedWrapU !== zC.wrapU && (ZC._cachedWrapU = zC.wrapU, this._setTextureParameterInteger(nC, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(zC.wrapU), ZC)), ZC._cachedWrapV !== zC.wrapV && (ZC._cachedWrapV = zC.wrapV, this._setTextureParameterInteger(nC, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(zC.wrapV), ZC)), ZC.is3D && ZC._cachedWrapR !== zC.wrapR && (ZC._cachedWrapR = zC.wrapR, this._setTextureParameterInteger(nC, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(zC.wrapR), ZC)), this._setAnisotropicLevel(nC, ZC, zC.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(CC, zC, ZC, QC) {
        if (void 0 !== CC && zC) {
          this._textureUnits && this._textureUnits.length === ZC.length || (this._textureUnits = new Int32Array(ZC.length));
          for (let zC = 0; zC < ZC.length; zC++) {
            const QC = ZC[zC].getInternalTexture();
            QC ? (this._textureUnits[zC] = CC + zC, QC._associatedChannel = CC + zC) : this._textureUnits[zC] = -1
          }
          this._gl.uniform1iv(zC, this._textureUnits);
          for (let CC = 0; CC < ZC.length; CC++) this._setTexture(this._textureUnits[CC], ZC[CC], !0)
        }
      }
      _setAnisotropicLevel(CC, zC, ZC) {
        const QC = this._caps.textureAnisotropicFilterExtension;
        11 !== zC.samplingMode && 3 !== zC.samplingMode && 2 !== zC.samplingMode && (ZC = 1), QC && zC._cachedAnisotropicFilteringLevel !== ZC && (this._setTextureParameterFloat(CC, QC.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(ZC, this._caps.maxAnisotropy), zC), zC._cachedAnisotropicFilteringLevel = ZC)
      }
      _setTextureParameterFloat(CC, zC, ZC, QC) {
        this._bindTextureDirectly(CC, QC, !0, !0), this._gl.texParameterf(CC, zC, ZC)
      }
      _setTextureParameterInteger(CC, zC, ZC, QC) {
        QC && this._bindTextureDirectly(CC, QC, !0, !0), this._gl.texParameteri(CC, zC, ZC)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let CC = 0; CC < this._caps.maxVertexAttribs; CC++) this.disableAttributeByIndex(CC)
        } else
          for (let CC = 0, zC = this._vertexAttribArraysEnabled.length; CC < zC; CC++) CC >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[CC] || this.disableAttributeByIndex(CC)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, oC.k)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, wC.y)(this._gl)
      }
      attachContextLostEvent(CC) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", CC, !1)
      }
      attachContextRestoredEvent(CC) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", CC, !1)
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
      _canRenderToFramebuffer(CC) {
        const zC = this._gl;
        for (; zC.getError() !== zC.NO_ERROR;);
        let ZC = !0;
        const QC = zC.createTexture();
        zC.bindTexture(zC.TEXTURE_2D, QC), zC.texImage2D(zC.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(CC), 1, 1, 0, zC.RGBA, this._getWebGLTextureType(CC), null), zC.texParameteri(zC.TEXTURE_2D, zC.TEXTURE_MIN_FILTER, zC.NEAREST), zC.texParameteri(zC.TEXTURE_2D, zC.TEXTURE_MAG_FILTER, zC.NEAREST);
        const wC = zC.createFramebuffer();
        zC.bindFramebuffer(zC.FRAMEBUFFER, wC), zC.framebufferTexture2D(zC.FRAMEBUFFER, zC.COLOR_ATTACHMENT0, zC.TEXTURE_2D, QC, 0);
        const bC = zC.checkFramebufferStatus(zC.FRAMEBUFFER);
        if (ZC = ZC && bC === zC.FRAMEBUFFER_COMPLETE, ZC = ZC && zC.getError() === zC.NO_ERROR, ZC && (zC.clear(zC.COLOR_BUFFER_BIT), ZC = ZC && zC.getError() === zC.NO_ERROR), ZC) {
          zC.bindFramebuffer(zC.FRAMEBUFFER, null);
          const CC = zC.RGBA,
            QC = zC.UNSIGNED_BYTE,
            wC = new Uint8Array(4);
          zC.readPixels(0, 0, 1, 1, CC, QC, wC), ZC = ZC && zC.getError() === zC.NO_ERROR
        }
        for (zC.deleteTexture(QC), zC.deleteFramebuffer(wC), zC.bindFramebuffer(zC.FRAMEBUFFER, null); !ZC && zC.getError() !== zC.NO_ERROR;);
        return ZC
      }
      _getWebGLTextureType(CC) {
        if (1 === this._webGLVersion) {
          switch (CC) {
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
        switch (CC) {
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
      _getInternalFormat(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = zC ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (CC) {
          case 0:
            ZC = this._gl.ALPHA;
            break;
          case 1:
            ZC = this._gl.LUMINANCE;
            break;
          case 2:
            ZC = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            ZC = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            ZC = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            ZC = zC ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            ZC = zC ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (CC) {
          case 8:
            ZC = this._gl.RED_INTEGER;
            break;
          case 9:
            ZC = this._gl.RG_INTEGER;
            break;
          case 10:
            ZC = this._gl.RGB_INTEGER;
            break;
          case 11:
            ZC = this._gl.RGBA_INTEGER
        }
        return ZC
      }
      _getRGBABufferInternalSizedFormat(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== zC) switch (zC) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return ZC ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (CC) {
          case 3:
            switch (zC) {
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
            switch (zC) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return ZC ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return ZC ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (zC) {
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
            switch (zC) {
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
            switch (zC) {
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
            switch (zC) {
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
            switch (zC) {
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
            switch (zC) {
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
            switch (zC) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return ZC ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(CC, zC, ZC, QC) {
        let wC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const oC = wC ? 4 : 3,
          qC = wC ? this._gl.RGBA : this._gl.RGB,
          FC = ZC * QC * oC;
        if (nC) {
          if (nC.length < FC) return fC.c.Error(`Data buffer is too small to store the read pixels (${nC.length} should be more than ${FC})`), Promise.resolve(nC)
        } else nC = new Uint8Array(FC);
        return bC && this.flushFramebuffer(), this._gl.readPixels(CC, zC, ZC, QC, qC, this._gl.UNSIGNED_BYTE, nC), Promise.resolve(nC)
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
          const CC = bC.b._CreateCanvas(1, 1),
            zC = CC.getContext("webgl") || CC.getContext("experimental-webgl");
          this._IsSupported = null != zC && !!globalThis.WebGLRenderingContext
        } catch (CC) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const CC = bC.b._CreateCanvas(1, 1),
            zC = CC.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || CC.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !zC
        } catch (CC) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    xC._TempClearColorUint32 = new Uint32Array(4), xC._TempClearColorInt32 = new Int32Array(4), xC._TempClearColorFloat32 = new Float32Array(4), xC.ExceptionList = [{
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
    }], xC._ConcatenateShader = pC.h, xC._IsSupported = null, xC._HasMajorPerformanceCaveat = null
  },
  40010: (CC, zC, ZC) => {
    var QC;
    ZC.d(zC, {
        d: () => wC
      }),
      function(CC) {
        CC[CC.PointerMove = 0] = "PointerMove", CC[CC.PointerDown = 1] = "PointerDown", CC[CC.PointerUp = 2] = "PointerUp"
      }(QC || (QC = {}));
    class wC {}
    wC.DOM_DELTA_PIXEL = 0, wC.DOM_DELTA_LINE = 1, wC.DOM_DELTA_PAGE = 2
  },
  40001: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC,
      g: () => bC,
      h: () => wC
    });
    class QC {}
    QC.KEYDOWN = 1, QC.KEYUP = 2;
    class wC {
      constructor(CC, zC) {
        this.type = CC, this.event = zC
      }
    }
    class bC extends wC {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(CC) {
        this.skipOnKeyboardObservable = CC
      }
      constructor(CC, zC) {
        super(CC, zC), this.type = CC, this.event = zC, this.skipOnKeyboardObservable = !1
      }
    }
  },
  39993: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC,
      f: () => nC,
      h: () => fC
    });
    var QC = ZC(36963);
    class wC {}
    wC.POINTERDOWN = 1, wC.POINTERUP = 2, wC.POINTERMOVE = 4, wC.POINTERWHEEL = 8, wC.POINTERPICK = 16, wC.POINTERTAP = 32, wC.POINTERDOUBLETAP = 64;
    class bC {
      constructor(CC, zC) {
        this.type = CC, this.event = zC
      }
    }
    class nC extends bC {
      constructor(CC, zC, ZC, wC) {
        super(CC, zC), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new QC.n(ZC, wC)
      }
    }
    class fC extends bC {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(CC, zC), this._pickInfo = ZC, this._inputManager = QC
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  40022: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    class QC {
      static CompareLightsPriority(CC, zC) {
        return CC.shadowEnabled !== zC.shadowEnabled ? (zC.shadowEnabled ? 1 : 0) - (CC.shadowEnabled ? 1 : 0) : zC.renderPriority - CC.renderPriority
      }
    }
    QC.FALLOFF_DEFAULT = 0, QC.FALLOFF_PHYSICAL = 1, QC.FALLOFF_GLTF = 2, QC.FALLOFF_STANDARD = 3, QC.LIGHTMAP_DEFAULT = 0, QC.LIGHTMAP_SPECULAR = 1, QC.LIGHTMAP_SHADOWSONLY = 2, QC.INTENSITYMODE_AUTOMATIC = 0, QC.INTENSITYMODE_LUMINOUSPOWER = 1, QC.INTENSITYMODE_LUMINOUSINTENSITY = 2, QC.INTENSITYMODE_ILLUMINANCE = 3, QC.INTENSITYMODE_LUMINANCE = 4, QC.LIGHTTYPEID_POINTLIGHT = 0, QC.LIGHTTYPEID_DIRECTIONALLIGHT = 1, QC.LIGHTTYPEID_SPOTLIGHT = 2, QC.LIGHTTYPEID_HEMISPHERICLIGHT = 3, QC.LIGHTTYPEID_RECT_AREALIGHT = 4, QC.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  39650: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC
    });
    var QC, wC = ZC(36987),
      bC = ZC(39657);
    ! function(CC) {
      CC[CC.Unknown = 0] = "Unknown", CC[CC.Url = 1] = "Url", CC[CC.Temp = 2] = "Temp", CC[CC.Raw = 3] = "Raw", CC[CC.Dynamic = 4] = "Dynamic", CC[CC.RenderTarget = 5] = "RenderTarget", CC[CC.MultiRenderTarget = 6] = "MultiRenderTarget", CC[CC.Cube = 7] = "Cube", CC[CC.CubeRaw = 8] = "CubeRaw", CC[CC.CubePrefiltered = 9] = "CubePrefiltered", CC[CC.Raw3D = 10] = "Raw3D", CC[CC.Raw2DArray = 11] = "Raw2DArray", CC[CC.DepthStencil = 12] = "DepthStencil", CC[CC.CubeRawRGBD = 13] = "CubeRawRGBD", CC[CC.Depth = 14] = "Depth", CC[CC.External = 15] = "External"
    }(QC || (QC = {}));
    class nC extends bC.b {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(CC) {
        this._useMipMaps = CC
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(CC) {
        this._uniqueId = CC
      }
      mg() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new wC.d, this.onErrorObservable = new wC.d, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = CC, this._source = zC, this._uniqueId = nC._Counter++, ZC || (this._hardwareTexture = CC._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, CC, zC, ZC), this.width = CC, this.height = zC, this.depth = ZC, this.baseWidth = CC, this.baseHeight = zC, this.baseDepth = ZC, this._size = CC * zC * ZC
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const CC = this.onRebuildCallback(this),
            zC = zC => {
              zC._swapAndDie(this, !1), this.isReady = CC.isReady
            };
          return void(CC.isAsync ? CC.proxy.then(zC) : zC(CC.proxy))
        }
        let CC;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(CC = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (CC => {
              CC._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (CC = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), CC._swapAndDie(this, !1), this._bufferViewArray)
              for (let CC = 0; CC < this._bufferViewArray.length; CC++) {
                const zC = this._bufferViewArray[CC];
                zC && this._engine.updateRawTexture(this, zC, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, CC)
              }
            this.isReady = !0;
            break;
          case 10:
            CC = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), CC._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (CC = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), CC._swapAndDie(this, !1), this._bufferViewArray)
              for (let CC = 0; CC < this._bufferViewArray.length; CC++) {
                const zC = this._bufferViewArray[CC];
                zC && this._engine.updateRawTexture2DArray(this, zC, this.format, this.invertY, this._compression, this.type, CC)
              }
            this.isReady = !0;
            break;
          case 4:
            CC = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), CC._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(CC = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              CC._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            CC = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), CC._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return CC = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (CC => {
              CC && CC._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(CC._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(CC._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), CC._hardwareTexture = this._hardwareTexture, CC._setUniqueId(nC._Counter++), zC && (CC._isRGBD = this._isRGBD), this._lodTextureHigh && (CC._lodTextureHigh && CC._lodTextureHigh.dispose(), CC._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (CC._lodTextureMid && CC._lodTextureMid.dispose(), CC._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (CC._lodTextureLow && CC._lodTextureLow.dispose(), CC._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (CC._irradianceTexture && CC._irradianceTexture.dispose(), CC._irradianceTexture = this._irradianceTexture);
        const ZC = this._engine.getLoadedTexturesCache();
        let QC = ZC.indexOf(this); - 1 !== QC && ZC.splice(QC, 1), QC = ZC.indexOf(CC), -1 === QC && ZC.push(CC)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    nC._Counter = 0
  },
  39758: (CC, zC, ZC) => {
    function QC(CC) {
      return 13 === CC || 14 === CC || 15 === CC || 16 === CC || 17 === CC || 18 === CC || 19 === CC
    }

    function wC(CC) {
      return 8 === CC || 9 === CC || 10 === CC || 11 === CC
    }

    function bC(CC) {
      return 0 === CC || 5 === CC || 7 === CC || 11 === CC
    }

    function nC(CC) {
      return 13 === CC || 17 === CC || 18 === CC || 19 === CC
    }
    ZC.d(zC, {
      e: () => nC,
      i: () => QC,
      l: () => wC,
      n: () => bC
    })
  },
  39657: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC
    });
    class QC {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(CC) {
        this._cachedWrapU = CC
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(CC) {
        this._cachedWrapV = CC
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(CC) {
        this._cachedWrapR = CC
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(CC) {
        this._cachedAnisotropicFilteringLevel = CC
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(CC) {
        this._comparisonFunction = CC
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(CC) {
        this._useMipMaps = CC
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = CC, this._cachedWrapV = zC, this._cachedWrapR = ZC, this._cachedAnisotropicFilteringLevel = QC, this.samplingMode = wC, this._comparisonFunction = bC, this
      }
      compareSampler(CC) {
        return this._cachedWrapU === CC._cachedWrapU && this._cachedWrapV === CC._cachedWrapV && this._cachedWrapR === CC._cachedWrapR && this._cachedAnisotropicFilteringLevel === CC._cachedAnisotropicFilteringLevel && this.samplingMode === CC.samplingMode && this._comparisonFunction === CC._comparisonFunction && this._useMipMaps === CC._useMipMaps
      }
    }
  },
  39938: (CC, zC, ZC) => {
    function QC(CC) {
      CC.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  39738: (CC, zC, ZC) => {
    function QC(CC) {
      return void 0 === CC.getPipelineContext
    }
    ZC.d(zC, {
      c: () => QC
    })
  },
  40148: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC
    });
    var QC = ZC(39712);
    class wC {
      static GetEffect(CC) {
        return void 0 === CC.getPipelineContext ? CC.effect : CC
      }
      constructor(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = CC.createDrawContext(), zC && (this.materialContext = CC.createMaterialContext())
      }
      setEffect(CC, zC) {
        let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        ZC || this.effect === CC || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = CC, void 0 !== zC && (this.defines = zC), ZC && this.drawContext?.reset()
      }
      dispose() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const zC = this.effect;
          CC ? zC.dispose() : QC.d.SetImmediate((() => {
            zC.mg().onEndFrameObservable.addOnce((() => {
              zC.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39676: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => WC,
      h: () => MC,
      l: () => qC,
      p: () => FC
    });
    var QC = ZC(39680),
      wC = ZC(39684),
      bC = ZC(39674),
      nC = ZC(38507),
      fC = ZC(39703),
      oC = ZC(39692);

    function qC(CC, zC) {
      return (0, wC.z)(zC).cachedPipelines[CC]
    }

    function FC(CC) {
      const zC = CC._name,
        ZC = CC.context;
      if (zC && ZC) {
        const CC = (0, wC.z)(ZC),
          QC = CC.cachedPipelines[zC];
        QC?.dispose(), delete CC.cachedPipelines[zC]
      }
    }

    function WC(CC, zC, ZC, wC, bC, nC, oC) {
      let qC, FC;
      const WC = (0, QC.k)() ? nC?.getHostDocument() : null;
      qC = "string" === typeof zC ? zC : "string" === typeof zC.vertexSource ? "source:" + zC.vertexSource : "string" === typeof zC.vertexElement ? WC?.getElementById(zC.vertexElement) || zC.vertexElement : zC.vertex || zC, FC = "string" === typeof zC ? zC : "string" === typeof zC.fragmentSource ? "source:" + zC.fragmentSource : "string" === typeof zC.fragmentElement ? WC?.getElementById(zC.fragmentElement) || zC.fragmentElement : zC.fragment || zC;
      const MC = [void 0, void 0],
        gC = () => {
          if (MC[0] && MC[1]) {
            const [QC, qC] = MC;
            (0, fC.f)(CC), (0, fC.n)(QC, CC, ((QC, FC) => {
              oC && (oC._vertexSourceCodeBeforeMigration = FC), ZC && (QC = ZC("vertex", QC)), CC.isFragment = !0, (0, fC.n)(qC, CC, ((nC, qC) => {
                oC && (oC._fragmentSourceCodeBeforeMigration = qC), ZC && (nC = ZC("fragment", nC));
                const FC = (0, fC.e)(QC, nC, CC);
                CC = null;
                const WC = function(CC, zC, ZC, QC) {
                  if (ZC) {
                    return {
                      vertexSourceCode: (1 === QC ? "//" : "") + "#define SHADER_NAME vertex:" + (ZC.vertexElement || ZC.vertex || ZC.spectorName || ZC) + "\n" + CC,
                      fragmentSourceCode: (1 === QC ? "//" : "") + "#define SHADER_NAME fragment:" + (ZC.fragmentElement || ZC.fragment || ZC.spectorName || ZC) + "\n" + zC
                    }
                  }
                  return {
                    vertexSourceCode: CC,
                    fragmentSourceCode: zC
                  }
                }(FC.vertexCode, FC.fragmentCode, zC, bC);
                wC?.(WC.vertexSourceCode, WC.fragmentSourceCode)
              }), nC)
            }), nC)
          }
        };
      NC(qC, "Vertex", "", (CC => {
        oC && (oC._rawVertexSourceCode = CC), MC[0] = CC, gC()
      }), bC), NC(FC, "Fragment", "Pixel", (CC => {
        oC && (oC._rawFragmentSourceCode = CC), MC[1] = CC, gC()
      }), bC)
    }

    function NC(CC, zC, ZC, wC, nC, fC) {
      if ("undefined" !== typeof HTMLElement && CC instanceof HTMLElement) {
        return void wC((0, QC.e)(CC))
      }
      if ("source:" === CC.substring(0, 7)) return void wC(CC.substring(7));
      if ("base64:" === CC.substring(0, 7)) {
        return void wC(window.atob(CC.substring(7)))
      }
      const qC = bC.b.GetShadersStore(nC);
      if (qC[CC + zC + "Shader"]) return void wC(qC[CC + zC + "Shader"]);
      if (ZC && qC[CC + ZC + "Shader"]) return void wC(qC[CC + ZC + "Shader"]);
      let FC;
      if (FC = "." === CC[0] || "/" === CC[0] || CC.indexOf("http") > -1 ? CC : bC.b.GetShadersRepository(nC) + CC, !(fC = fC || oC.n)) throw new Error("loadFileInjection is not defined");
      fC(FC + "." + zC.toLowerCase() + ".fx", wC)
    }
    const MC = (CC, zC, ZC, QC) => {
      try {
        const bC = CC.context ? (0, wC.z)(CC.context) : null;
        bC && (bC.disableParallelShaderCompile = CC.disableParallelCompilation);
        const nC = CC.existingPipelineContext || zC(CC.shaderProcessingContext);
        return nC._name = CC.name, CC.name && bC && (bC.cachedPipelines[CC.name] = nC), ZC(nC, CC.vertex, CC.fragment, !!CC.createAsRaw, "", "", CC.rebuildRebind, CC.defines, CC.transformFeedbackVaryings, "", (() => {
          QC(nC, (() => {
            CC.onRenderingStateCompiled?.(nC)
          }))
        })), nC
      } catch (bC) {
        throw nC.c.Error("Error compiling effect"), bC
      }
    }
  },
  39666: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => oC
    });
    var QC = ZC(36987),
      wC = ZC(38507),
      bC = ZC(39674),
      nC = ZC(39676),
      fC = ZC(39712);
    class oC {
      static get ShadersRepository() {
        return bC.b.ShadersRepository
      }
      static set ShadersRepository(CC) {
        bC.b.ShadersRepository = CC
      }
      get GJ() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new QC.d), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(CC, zC, ZC) {
        let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          bC = arguments.length > 4 ? arguments[4] : void 0,
          fC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          qC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          FC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          WC = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          NC = arguments.length > 9 ? arguments[9] : void 0,
          MC = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          gC = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          SC = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new QC.d, this.onErrorObservable = new QC.d, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = CC, this._key = MC;
        const pC = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let PC;
        if (zC.attributes) {
          const CC = zC;
          if (this._engine = ZC, this._attributesNames = CC.attributes, this._uniformsNames = CC.uniformsNames.concat(CC.samplers), this._samplerList = CC.samplers.slice(), this.defines = CC.defines, this.onError = CC.onError, this.onCompiled = CC.onCompiled, this._fallbacks = CC.fallbacks, this._indexParameters = CC.indexParameters, this._transformFeedbackVaryings = CC.transformFeedbackVaryings || null, this._multiTarget = !!CC.multiTarget, this._shaderLanguage = CC.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!CC.disableParallelShaderCompilation, CC.uniformBuffersNames) {
            this._uniformBuffersNamesList = CC.uniformBuffersNames.slice();
            for (let zC = 0; zC < CC.uniformBuffersNames.length; zC++) this._uniformBuffersNames[CC.uniformBuffersNames[zC]] = zC
          }
          this._processFinalCode = CC.processFinalCode ?? null, this._processCodeAfterIncludes = CC.processCodeAfterIncludes ?? void 0, SC = CC.extraInitializationsAsync, PC = CC.existingPipelineContext
        } else this._engine = bC, this.defines = null == fC ? "" : fC, this._uniformsNames = ZC.concat(wC), this._samplerList = wC ? wC.slice() : [], this._attributesNames = zC, this._uniformBuffersNamesList = [], this._shaderLanguage = gC, this.onError = WC, this.onCompiled = FC, this._indexParameters = NC, this._fallbacks = qC;
        "WEBGL2" === this._engine.shaderPlatformName && (PC = (0, nC.l)(pC, this._engine._gl) ?? PC), this._attributeLocationByName = {}, this.uniqueId = oC._UniqueIdSeed++, PC ? (this._pipelineContext = PC, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, SC).catch((CC => {
          const zC = CC?.message ?? String(CC),
            ZC = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${zC}`);
          CC && "string" === typeof CC.stack && (ZC.stack = `${ZC.message}\nCaused by: ${CC.stack}`), this._processCompilationErrors(ZC)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.GJ || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QC = arguments.length > 3 ? arguments[3] : void 0;
        QC && await QC(), this._processingContext = ZC || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const wC = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: CC ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: bC.b.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: bC.b.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          BZC: this._engine.BZC,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, nC.e)(wC, this.name, this._processFinalCode, ((CC, ZC) => {
          this._vertexSourceCode = CC, this._fragmentSourceCode = ZC, this._prepareEffect(zC)
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
        return !!this._engine.GJ || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      mg() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(CC) {
        return this._attributes[CC]
      }
      getAttributeLocationByName(CC) {
        return this._attributeLocationByName[CC]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(CC) {
        return this._uniformsNames.indexOf(CC)
      }
      getUniform(CC) {
        return this._uniforms[CC]
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
        return await new Promise((CC => {
          this.executeWhenCompiled(CC)
        }))
      }
      executeWhenCompiled(CC) {
        this.isReady() ? CC(this) : (this.onCompileObservable.add((zC => {
          CC(zC)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(CC) {
        (0, fC.g)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (zC => {
          this._processCompilationErrors(zC, CC)
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
            BZC: this._engine.BZC,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(CC, zC, ZC, QC) {
        this._isReady = !1, this._vertexSourceCodeOverride = CC, this._fragmentSourceCodeOverride = zC, this.onError = (CC, zC) => {
          QC && QC(zC)
        }, this.onCompiled = () => {
          const CC = this.mg().scenes;
          if (CC)
            for (let zC = 0; zC < CC.length; zC++) CC[zC].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(ZC)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(CC) {
        if (this._pipelineContext = CC, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let zC = 0; zC < this._attributesNames.length; zC++) {
            const CC = this._attributesNames[zC];
            this._attributeLocationByName[CC] = this._attributes[zC]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), oC.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zC = this._pipelineContext;
        this._isReady = !1;
        try {
          const ZC = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            QC = ZC ? null : this.defines,
            wC = ZC ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            bC = ZC ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            fC = this._engine;
          this._pipelineContext = (0, nC.h)({
            existingPipelineContext: CC ? zC : null,
            vertex: wC,
            fragment: bC,
            context: "WEBGL2" === fC.shaderPlatformName || "WEBGL1" === fC.shaderPlatformName ? fC._gl : void 0,
            rebuildRebind: (CC, zC, ZC, QC) => this._rebuildProgram(CC, zC, ZC, QC),
            defines: QC,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: ZC,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: ZC => {
              zC && !CC && this._engine._deletePipelineContext(zC), ZC && this._onRenderingStateCompiled(ZC)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(zC)
        } catch (ZC) {
          this._processCompilationErrors(ZC, zC)
        }
      }
      _getShaderCodeAndErrorLine(CC, zC, ZC) {
        const QC = ZC ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let wC = null;
        if (zC && CC) {
          const bC = zC.match(QC);
          if (bC && 2 === bC.length) {
            const zC = parseInt(bC[1]),
              QC = CC.split("\n", -1);
            QC.length >= zC && (wC = `Offending line [${zC}] in ${ZC?"fragment":"vertex"} code: ${QC[zC-1]}`)
          }
        }
        return [CC, wC]
      }
      _processCompilationErrors(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof CC?.stack ? CC.stack : CC?.message ?? String(CC);
        const ZC = this._attributesNames,
          QC = this._fallbacks;
        if (wC.c.Error("Unable to compile effect:"), wC.c.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), wC.c.Error(`Attributes: ${ZC.join(" ")}`), wC.c.Error("Defines:\n" + this.defines), oC.LogShaderCodeOnCompilationError) {
          let CC, zC = null,
            ZC = null;
          this._pipelineContext?._getVertexShaderCode() && ([CC, zC] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), CC && (wC.c.Error("Vertex code:"), wC.c.Error(CC))), this._pipelineContext?._getFragmentShaderCode() && ([CC, ZC] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), CC && (wC.c.Error("Fragment code:"), wC.c.Error(CC))), zC && wC.c.Error(zC), ZC && wC.c.Error(ZC)
        }
        wC.c.Error("Error: " + this._compilationError);
        const bC = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        zC && (this._pipelineContext = zC, this._isReady = !0, bC()), QC ? (this._pipelineContext = null, QC.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, wC.c.Error("Trying next fallback."), this.defines = QC.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, bC(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, zC || bC())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(CC, zC) {
        this._engine._bindTexture(this._samplers[CC], zC, CC)
      }
      setTexture(CC, zC) {
        this._engine.setTexture(this._samplers[CC], this._uniforms[CC], zC, CC)
      }
      setTextureArray(CC, zC) {
        const ZC = CC + "Ex";
        if (-1 === this._samplerList.indexOf(ZC + "0")) {
          const QC = this._samplerList.indexOf(CC);
          for (let CC = 1; CC < zC.length; CC++) {
            const zC = ZC + (CC - 1).toString();
            this._samplerList.splice(QC + CC, 0, zC)
          }
          let wC = 0;
          for (const CC of this._samplerList) this._samplers[CC] = wC, wC += 1
        }
        this._engine.setTextureArray(this._samplers[CC], this._uniforms[CC], zC, CC)
      }
      bindUniformBuffer(CC, zC) {
        const ZC = this._uniformBuffersNames[zC];
        void 0 === ZC || oC._BaseCache[ZC] === CC && this._engine._features.useUBOBindingCache || (oC._BaseCache[ZC] = CC, this._engine.bindUniformBufferBase(CC, ZC, zC))
      }
      bindUniformBlock(CC, zC) {
        this._engine.bindUniformBlock(this._pipelineContext, CC, zC)
      }
      setInt(CC, zC) {
        return this._pipelineContext.setInt(CC, zC), this
      }
      setInt2(CC, zC, ZC) {
        return this._pipelineContext.setInt2(CC, zC, ZC), this
      }
      setInt3(CC, zC, ZC, QC) {
        return this._pipelineContext.setInt3(CC, zC, ZC, QC), this
      }
      setInt4(CC, zC, ZC, QC, wC) {
        return this._pipelineContext.setInt4(CC, zC, ZC, QC, wC), this
      }
      setIntArray(CC, zC) {
        return this._pipelineContext.setIntArray(CC, zC), this
      }
      setIntArray2(CC, zC) {
        return this._pipelineContext.setIntArray2(CC, zC), this
      }
      setIntArray3(CC, zC) {
        return this._pipelineContext.setIntArray3(CC, zC), this
      }
      setIntArray4(CC, zC) {
        return this._pipelineContext.setIntArray4(CC, zC), this
      }
      setUInt(CC, zC) {
        return this._pipelineContext.setUInt(CC, zC), this
      }
      setUInt2(CC, zC, ZC) {
        return this._pipelineContext.setUInt2(CC, zC, ZC), this
      }
      setUInt3(CC, zC, ZC, QC) {
        return this._pipelineContext.setUInt3(CC, zC, ZC, QC), this
      }
      setUInt4(CC, zC, ZC, QC, wC) {
        return this._pipelineContext.setUInt4(CC, zC, ZC, QC, wC), this
      }
      setUIntArray(CC, zC) {
        return this._pipelineContext.setUIntArray(CC, zC), this
      }
      setUIntArray2(CC, zC) {
        return this._pipelineContext.setUIntArray2(CC, zC), this
      }
      setUIntArray3(CC, zC) {
        return this._pipelineContext.setUIntArray3(CC, zC), this
      }
      setUIntArray4(CC, zC) {
        return this._pipelineContext.setUIntArray4(CC, zC), this
      }
      setFloatArray(CC, zC) {
        return this._pipelineContext.setArray(CC, zC), this
      }
      setFloatArray2(CC, zC) {
        return this._pipelineContext.setArray2(CC, zC), this
      }
      setFloatArray3(CC, zC) {
        return this._pipelineContext.setArray3(CC, zC), this
      }
      setFloatArray4(CC, zC) {
        return this._pipelineContext.setArray4(CC, zC), this
      }
      setArray(CC, zC) {
        return this._pipelineContext.setArray(CC, zC), this
      }
      setArray2(CC, zC) {
        return this._pipelineContext.setArray2(CC, zC), this
      }
      setArray3(CC, zC) {
        return this._pipelineContext.setArray3(CC, zC), this
      }
      setArray4(CC, zC) {
        return this._pipelineContext.setArray4(CC, zC), this
      }
      setMatrices(CC, zC) {
        return this._pipelineContext.setMatrices(CC, zC), this
      }
      setMatrix(CC, zC) {
        return this._pipelineContext.setMatrix(CC, zC), this
      }
      setMatrix3x3(CC, zC) {
        return this._pipelineContext.setMatrix3x3(CC, zC), this
      }
      setMatrix2x2(CC, zC) {
        return this._pipelineContext.setMatrix2x2(CC, zC), this
      }
      setFloat(CC, zC) {
        return this._pipelineContext.setFloat(CC, zC), this
      }
      setBool(CC, zC) {
        return this._pipelineContext.setInt(CC, zC ? 1 : 0), this
      }
      setVector2(CC, zC) {
        return this._pipelineContext.setVector2(CC, zC), this
      }
      setFloat2(CC, zC, ZC) {
        return this._pipelineContext.setFloat2(CC, zC, ZC), this
      }
      setVector3(CC, zC) {
        return this._pipelineContext.setVector3(CC, zC), this
      }
      setFloat3(CC, zC, ZC, QC) {
        return this._pipelineContext.setFloat3(CC, zC, ZC, QC), this
      }
      setVector4(CC, zC) {
        return this._pipelineContext.setVector4(CC, zC), this
      }
      setQuaternion(CC, zC) {
        return this._pipelineContext.setQuaternion(CC, zC), this
      }
      setFloat4(CC, zC, ZC, QC, wC) {
        return this._pipelineContext.setFloat4(CC, zC, ZC, QC, wC), this
      }
      setColor3(CC, zC) {
        return this._pipelineContext.setColor3(CC, zC), this
      }
      setColor4(CC, zC, ZC) {
        return this._pipelineContext.setColor4(CC, zC, ZC), this
      }
      setDirectColor4(CC, zC) {
        return this._pipelineContext.setDirectColor4(CC, zC), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (oC.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, nC.p)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        zC && (bC.b.GetShadersStore(QC)[`${CC}PixelShader`] = zC), ZC && (bC.b.GetShadersStore(QC)[`${CC}VertexShader`] = ZC)
      }
      static ResetCache() {
        oC._BaseCache = {}
      }
    }
    oC.LogShaderCodeOnCompilationError = !0, oC.PersistentMode = !1, oC.AutomaticallyClearCodeCache = !1, oC._UniqueIdSeed = 0, oC._BaseCache = {}, oC.ShadersStore = bC.b.ShadersStore, oC.IncludesShadersStore = bC.b.IncludesShadersStore
  },
  39969: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => FC,
      c: () => IC,
      g: () => JC
    });
    var QC = ZC(39666),
      wC = ZC(36963),
      bC = ZC(36996),
      nC = ZC(39950);
    const fC = new wC.b,
      oC = new wC.b,
      qC = new wC.b,
      FC = {
        Km: () => {},
        eyeAtCamera: !0
      };

    function WC(CC, zC, ZC) {
      const QC = ZC.VZC(),
        wC = zC.VZC();
      for (let bC = 0; bC < 16; bC++) QC[bC] = wC[bC];
      return QC[12] -= CC.x, QC[13] -= CC.y, QC[14] -= CC.z, ZC.markAsUpdated(), ZC
    }

    function NC(CC, zC, ZC) {
      return (0, bC.l)(zC, oC), WC(CC, oC, qC), (0, bC.l)(qC, ZC), ZC
    }

    function MC(CC, zC, ZC) {
      if (!FC.eyeAtCamera) return NC(CC, zC, ZC);
      const QC = ZC.VZC(),
        wC = zC.VZC();
      for (let bC = 0; bC < 16; bC++) QC[bC] = wC[bC];
      return QC[12] = 0, QC[13] = 0, QC[14] = 0, ZC.markAsUpdated(), ZC
    }

    function gC(CC, zC, ZC, QC) {
      return (0, bC.q)(MC(CC, zC, QC), ZC, QC), QC
    }

    function SC(CC, zC, ZC, QC) {
      return (0, bC.l)(ZC, oC), (0, bC.q)(zC, oC, qC), WC(CC, qC, oC), MC(CC, ZC, qC), (0, bC.q)(oC, qC, QC), QC
    }

    function pC(CC, zC, ZC, QC, wC, nC) {
      return (0, bC.l)(ZC, oC), (0, bC.q)(zC, oC, qC), WC(CC, qC, oC), gC(CC, QC, wC, qC), (0, bC.q)(oC, qC, nC), nC
    }

    function PC(CC, zC) {
      const ZC = FC.Km();
      if (!ZC || fC === zC) return zC;
      fC.updateFlag = zC.updateFlag;
      const QC = ZC.floatingOriginOffset;
      switch (CC) {
        case "world":
          return WC(QC, zC, fC);
        case "view":
          return MC(QC, zC, fC);
        case "worldView":
          return SC(QC, zC, ZC.getViewMatrix(), fC);
        case "viewProjection":
          return gC(QC, ZC.getViewMatrix(), ZC.getProjectionMatrix(), fC);
        case "worldViewProjection":
          return pC(QC, zC, ZC.getTransformMatrix(), ZC.getViewMatrix(), ZC.getProjectionMatrix(), fC);
        default:
          if (CC.startsWith("u_")) {
            const wC = CC.toLowerCase();
            if (wC.startsWith("u_worldviewprojection")) return pC(QC, zC, ZC.getTransformMatrix(), ZC.getViewMatrix(), ZC.getProjectionMatrix(), fC);
            if (wC.startsWith("u_viewprojection")) return gC(QC, ZC.getViewMatrix(), ZC.getProjectionMatrix(), fC);
            if (wC.startsWith("u_worldview")) return SC(QC, zC, ZC.getViewMatrix(), fC);
            if (wC.startsWith("u_world")) return WC(QC, zC, fC);
            if (wC.startsWith("u_view")) return MC(QC, zC, fC)
          }
          return zC
      }
    }
    const GC = nC.c,
      RC = QC.b,
      AC = GC.prototype._updateMatrixForUniform,
      xC = QC.b.prototype.setMatrix;

    function JC() {
      QC.b.prototype.setMatrix = xC, RC._setMatrixOverride = void 0, GC.prototype._updateMatrixForUniform = AC, GC.prototype._updateMatrixForUniformOverride = void 0
    }

    function IC() {
      RC.prototype._setMatrixOverride = xC, RC.prototype.setMatrix = function(CC, zC) {
        return this._setMatrixOverride(CC, PC(CC, zC)), this
      }, GC.prototype._updateMatrixForUniformOverride = AC, GC.prototype._updateMatrixForUniform = function(CC, zC) {
        this._updateMatrixForUniformOverride(CC, PC(CC, zC))
      }
    }
  },
  39944: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => bC,
      d: () => wC
    });
    var QC = ZC(39938);

    function wC(CC, zC) {
      zC.WHITEBALANCE && CC.push("whiteBalanceMatrix"), zC.EXPOSURE && CC.push("exposureLinear"), zC.CONTRAST && CC.push("contrast"), zC.COLORGRADING && CC.push("colorTransformSettings"), (zC.VIGNETTE || zC.DITHER) && CC.push("vInverseScreenSize"), zC.VIGNETTE && (CC.push("vignetteSettings1"), CC.push("vignetteSettings2")), zC.COLORCURVES && (0, QC.b)(CC), zC.DITHER && CC.push("ditherIntensity")
    }

    function bC(CC, zC) {
      zC.COLORGRADING && CC.push("txColorTransform")
    }
  },
  39932: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => KC,
      f: () => mC
    });
    var QC = ZC(39811),
      wC = ZC(39818),
      bC = ZC(36987),
      nC = ZC(37142),
      fC = ZC(36991),
      oC = ZC(36963);
    const qC = [
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
      FC = 1e6 / qC[qC.length - 1][0],
      WC = 150;

    function NC(CC, zC) {
      const ZC = Number.isNaN(CC) ? FC : Math.max(CC, FC),
        QC = (0, fC.Clamp)(1e6 / ZC, qC[0][0], qC[qC.length - 1][0]);
      let wC = 0,
        bC = qC.length - 1;
      for (; bC - wC > 1;) {
        const CC = wC + bC >> 1;
        qC[CC][0] <= QC ? wC = CC : bC = CC
      }
      const nC = wC,
        [NC, MC, gC, SC] = qC[nC],
        [pC, PC, GC, RC] = qC[nC + 1],
        AC = (QC - NC) / (pC - NC),
        xC = oC.n.Lerp(new oC.n(MC, gC), new oC.n(PC, GC), AC),
        JC = oC.n.Normalize(new oC.n(1, SC)),
        IC = oC.n.Normalize(new oC.n(1, RC)),
        iC = oC.n.Normalize(oC.n.Lerp(JC, IC, AC)),
        vC = (0, fC.Clamp)(zC, -150, WC);
      xC.RQC(iC.scale(vC / 3e3));
      const eC = 2 * xC.x - 8 * xC.y + 4,
        hC = 3 * xC.x / eC,
        KC = 2 * xC.y / eC;
      return new oC.r(hC / KC, 1, (1 - hC - KC) / KC)
    }
    const MC = oC.b.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      gC = oC.b.Invert(MC);

    function SC(CC, zC) {
      const ZC = zC > 0 ? CC / zC : 10;
      return (0, fC.Clamp)(ZC, .1, 10)
    }

    function pC(CC, zC) {
      const ZC = oC.r.TransformNormal(CC, MC),
        QC = oC.r.TransformNormal(zC, MC),
        wC = oC.b.FromArray([SC(QC.x, ZC.x), 0, 0, 0, 0, SC(QC.y, ZC.y), 0, 0, 0, 0, SC(QC.z, ZC.z), 0, 0, 0, 0, 1]);
      return MC.multiply(wC).multiply(gC)
    }
    const PC = new oC.r(.95047, 1, 1.08883),
      GC = oC.b.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(pC(PC, NC(6500, 0))),
      RC = oC.b.Invert(GC),
      AC = oC.r.TransformNormal(new oC.r(1, 1, 1), GC);
    var xC = ZC(39842),
      JC = ZC(39938);
    let IC = (() => {
      var CC;
      let zC, ZC, bC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC = [],
        PC = [],
        GC = [],
        RC = [],
        AC = [],
        IC = [],
        iC = [],
        vC = [],
        eC = [],
        hC = [],
        KC = [],
        YC = [],
        dC = [],
        mC = [],
        HC = [],
        EC = [],
        lC = [],
        XC = [],
        cC = [],
        uC = [],
        rC = [],
        sC = [],
        TC = [],
        aC = [];
      return CC = class {
        constructor() {
          this._dirty = !0, this._tempColor = new nC.g(0, 0, 0, 0), this._globalCurve = new nC.g(0, 0, 0, 0), this._highlightsCurve = new nC.g(0, 0, 0, 0), this._midtonesCurve = new nC.g(0, 0, 0, 0), this._shadowsCurve = new nC.g(0, 0, 0, 0), this._positiveCurve = new nC.g(0, 0, 0, 0), this._negativeCurve = new nC.g(0, 0, 0, 0), this._globalHue = (0, QC.n)(this, pC, 30), this._globalDensity = ((0, QC.n)(this, PC), (0, QC.n)(this, GC, 0)), this._globalSaturation = ((0, QC.n)(this, RC), (0, QC.n)(this, AC, 0)), this._globalExposure = ((0, QC.n)(this, IC), (0, QC.n)(this, iC, 0)), this._highlightsHue = ((0, QC.n)(this, vC), (0, QC.n)(this, eC, 30)), this._highlightsDensity = ((0, QC.n)(this, hC), (0, QC.n)(this, KC, 0)), this._highlightsSaturation = ((0, QC.n)(this, YC), (0, QC.n)(this, dC, 0)), this._highlightsExposure = ((0, QC.n)(this, mC), (0, QC.n)(this, HC, 0)), this._midtonesHue = ((0, QC.n)(this, EC), (0, QC.n)(this, lC, 30)), this._midtonesDensity = ((0, QC.n)(this, XC), (0, QC.n)(this, cC, 0)), this._midtonesSaturation = ((0, QC.n)(this, uC), (0, QC.n)(this, rC, 0)), this._midtonesExposure = ((0, QC.n)(this, sC), (0, QC.n)(this, TC, 0)), this._shadowsHue = ((0, QC.n)(this, aC), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(CC) {
          this._globalHue = CC, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(CC) {
          this._globalDensity = CC, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(CC) {
          this._globalSaturation = CC, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(CC) {
          this._globalExposure = CC, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(CC) {
          this._highlightsHue = CC, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(CC) {
          this._highlightsDensity = CC, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(CC) {
          this._highlightsSaturation = CC, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(CC) {
          this._highlightsExposure = CC, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(CC) {
          this._midtonesHue = CC, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(CC) {
          this._midtonesDensity = CC, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(CC) {
          this._midtonesSaturation = CC, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(CC) {
          this._midtonesExposure = CC, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(CC) {
          this._shadowsHue = CC, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(CC) {
          this._shadowsDensity = CC, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(CC) {
          this._shadowsSaturation = CC, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(CC) {
          this._shadowsExposure = CC, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(zC, ZC, QC, wC, bC) {
          null != zC && (zC = CC._Clamp(zC, 0, 360), ZC = CC._Clamp(ZC, -100, 100), QC = CC._Clamp(QC, -100, 100), wC = CC._Clamp(wC, -100, 100), ZC = CC._ApplyColorGradingSliderNonlinear(ZC), ZC *= .5, wC = CC._ApplyColorGradingSliderNonlinear(wC), ZC < 0 && (ZC *= -1, zC = (zC + 180) % 360), CC._FromHSBToRef(zC, ZC, 50 + .25 * wC, bC), bC.scaleToRef(2, bC), bC.a = 1 + .01 * QC)
        }
        static _ApplyColorGradingSliderNonlinear(CC) {
          CC /= 100;
          let zC = Math.abs(CC);
          return zC = Math.pow(zC, 2), CC < 0 && (zC *= -1), zC *= 100, zC
        }
        static _FromHSBToRef(zC, ZC, QC, wC) {
          let bC = CC._Clamp(zC, 0, 360);
          const nC = CC._Clamp(ZC / 100, 0, 1),
            fC = CC._Clamp(QC / 100, 0, 1);
          if (0 === nC) wC.r = fC, wC.g = fC, wC.b = fC;
          else {
            bC /= 60;
            const CC = Math.floor(bC),
              zC = bC - CC,
              ZC = fC * (1 - nC),
              QC = fC * (1 - nC * zC),
              oC = fC * (1 - nC * (1 - zC));
            switch (CC) {
              case 0:
                wC.r = fC, wC.g = oC, wC.b = ZC;
                break;
              case 1:
                wC.r = QC, wC.g = fC, wC.b = ZC;
                break;
              case 2:
                wC.r = ZC, wC.g = fC, wC.b = oC;
                break;
              case 3:
                wC.r = ZC, wC.g = QC, wC.b = fC;
                break;
              case 4:
                wC.r = oC, wC.g = ZC, wC.b = fC;
                break;
              default:
                wC.r = fC, wC.g = ZC, wC.b = QC
            }
          }
          wC.a = 1
        }
        static _Clamp(CC, zC, ZC) {
          return Math.min(Math.max(CC, zC), ZC)
        }
        clone() {
          return xC.d.Clone((() => new CC), this)
        }
        serialize() {
          return xC.d.Serialize(this)
        }
        _bind(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), CC && (CC.setFloat4(zC, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), CC.setFloat4(ZC, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), CC.setFloat4(QC, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const nC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        zC = [(0, wC.M)()], ZC = [(0, wC.M)()], bC = [(0, wC.M)()], fC = [(0, wC.M)()], oC = [(0, wC.M)()], qC = [(0, wC.M)()], FC = [(0, wC.M)()], WC = [(0, wC.M)()], NC = [(0, wC.M)()], MC = [(0, wC.M)()], gC = [(0, wC.M)()], SC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: CC => "_globalHue" in CC,
            get: CC => CC._globalHue,
            set: (CC, zC) => {
              CC._globalHue = zC
            }
          },
          metadata: nC
        }, pC, PC), (0, QC.j)(null, null, ZC, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: CC => "_globalDensity" in CC,
            get: CC => CC._globalDensity,
            set: (CC, zC) => {
              CC._globalDensity = zC
            }
          },
          metadata: nC
        }, GC, RC), (0, QC.j)(null, null, bC, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: CC => "_globalSaturation" in CC,
            get: CC => CC._globalSaturation,
            set: (CC, zC) => {
              CC._globalSaturation = zC
            }
          },
          metadata: nC
        }, AC, IC), (0, QC.j)(null, null, fC, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: CC => "_globalExposure" in CC,
            get: CC => CC._globalExposure,
            set: (CC, zC) => {
              CC._globalExposure = zC
            }
          },
          metadata: nC
        }, iC, vC), (0, QC.j)(null, null, oC, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: CC => "_highlightsHue" in CC,
            get: CC => CC._highlightsHue,
            set: (CC, zC) => {
              CC._highlightsHue = zC
            }
          },
          metadata: nC
        }, eC, hC), (0, QC.j)(null, null, qC, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: CC => "_highlightsDensity" in CC,
            get: CC => CC._highlightsDensity,
            set: (CC, zC) => {
              CC._highlightsDensity = zC
            }
          },
          metadata: nC
        }, KC, YC), (0, QC.j)(null, null, FC, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: CC => "_highlightsSaturation" in CC,
            get: CC => CC._highlightsSaturation,
            set: (CC, zC) => {
              CC._highlightsSaturation = zC
            }
          },
          metadata: nC
        }, dC, mC), (0, QC.j)(null, null, WC, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: CC => "_highlightsExposure" in CC,
            get: CC => CC._highlightsExposure,
            set: (CC, zC) => {
              CC._highlightsExposure = zC
            }
          },
          metadata: nC
        }, HC, EC), (0, QC.j)(null, null, NC, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: CC => "_midtonesHue" in CC,
            get: CC => CC._midtonesHue,
            set: (CC, zC) => {
              CC._midtonesHue = zC
            }
          },
          metadata: nC
        }, lC, XC), (0, QC.j)(null, null, MC, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: CC => "_midtonesDensity" in CC,
            get: CC => CC._midtonesDensity,
            set: (CC, zC) => {
              CC._midtonesDensity = zC
            }
          },
          metadata: nC
        }, cC, uC), (0, QC.j)(null, null, gC, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: CC => "_midtonesSaturation" in CC,
            get: CC => CC._midtonesSaturation,
            set: (CC, zC) => {
              CC._midtonesSaturation = zC
            }
          },
          metadata: nC
        }, rC, sC), (0, QC.j)(null, null, SC, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: CC => "_midtonesExposure" in CC,
            get: CC => CC._midtonesExposure,
            set: (CC, zC) => {
              CC._midtonesExposure = zC
            }
          },
          metadata: nC
        }, TC, aC), nC && Object.defineProperty(CC, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nC
        })
      })(), CC.PrepareUniforms = JC.b, CC
    })();

    function iC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      CC._bind(zC, ZC, QC, wC)
    }
    var vC = ZC(39747),
      eC = ZC(39944),
      hC = ZC(37002);
    let KC = (() => {
        var CC;
        let zC, ZC, qC, MC, gC, SC, PC, JC, hC, KC, YC, dC, mC, HC, EC, lC, XC, cC, uC, rC, sC, TC, aC, tC, DC, jC, yC, LC, UC = [],
          BC = [],
          OC = [],
          kC = [],
          VC = [],
          Cz = [],
          zz = [],
          Zz = [],
          Qz = [],
          wz = [],
          bz = [],
          nz = [],
          fz = [],
          oz = [],
          qz = [],
          Fz = [],
          Wz = [],
          Nz = [],
          Mz = [],
          gz = [],
          Sz = [],
          pz = [],
          Pz = [],
          Gz = [],
          Rz = [],
          Az = [],
          xz = [],
          Jz = [],
          Iz = [],
          iz = [],
          vz = [],
          ez = [],
          hz = [],
          Kz = [],
          Yz = [],
          dz = [],
          mz = [],
          Hz = [],
          Ez = [],
          lz = [],
          Xz = [],
          cz = [],
          uz = [],
          rz = [],
          sz = [],
          Tz = [],
          az = [],
          tz = [],
          Dz = [],
          jz = [],
          yz = [],
          Lz = [],
          Uz = [],
          Bz = [],
          Oz = [],
          kz = [];
        return CC = class {
          constructor() {
            this.colorCurves = (0, QC.n)(this, UC, new IC), this._colorCurvesEnabled = ((0, QC.n)(this, BC), (0, QC.n)(this, OC, !1)), this._colorGradingTexture = ((0, QC.n)(this, kC), (0, QC.n)(this, VC, void 0)), this._colorGradingEnabled = ((0, QC.n)(this, Cz), (0, QC.n)(this, zz, !1)), this._colorGradingWithGreenDepth = ((0, QC.n)(this, Zz), (0, QC.n)(this, Qz, !0)), this._colorGradingBGR = ((0, QC.n)(this, wz), (0, QC.n)(this, bz, !0)), this._exposure = ((0, QC.n)(this, nz), (0, QC.n)(this, fz, 1)), this._toneMappingEnabled = ((0, QC.n)(this, oz), (0, QC.n)(this, qz, !1)), this._toneMappingType = ((0, QC.n)(this, Fz), (0, QC.n)(this, Wz, CC.TONEMAPPING_STANDARD)), this._contrast = ((0, QC.n)(this, Nz), (0, QC.n)(this, Mz, 1)), this._whiteBalanceEnabled = ((0, QC.n)(this, gz), (0, QC.n)(this, Sz, !1)), this._temperature = ((0, QC.n)(this, pz), (0, QC.n)(this, Pz, 6500)), this._tint = ((0, QC.n)(this, Gz), (0, QC.n)(this, Rz, 0)), this._whiteBalanceMatrix = ((0, QC.n)(this, Az), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, QC.n)(this, xz, 0), this.vignetteCenterX = ((0, QC.n)(this, Jz), (0, QC.n)(this, Iz, 0)), this.vignetteCenterY = ((0, QC.n)(this, iz), (0, QC.n)(this, vz, 0)), this.vignetteWeight = ((0, QC.n)(this, ez), (0, QC.n)(this, hz, 1.5)), this.vignetteColor = ((0, QC.n)(this, Kz), (0, QC.n)(this, Yz, new nC.g(0, 0, 0, 0))), this.vignetteCameraFov = ((0, QC.n)(this, dz), (0, QC.n)(this, mz, .5)), this._vignetteBlendMode = ((0, QC.n)(this, Hz), (0, QC.n)(this, Ez, CC.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, QC.n)(this, lz), (0, QC.n)(this, Xz, !1)), this._ditheringEnabled = ((0, QC.n)(this, cz), (0, QC.n)(this, uz, !1)), this._ditheringIntensity = ((0, QC.n)(this, rz), (0, QC.n)(this, sz, 1 / 255)), this._skipFinalColorClamp = ((0, QC.n)(this, Tz), (0, QC.n)(this, az, !1)), this._applyByPostProcess = ((0, QC.n)(this, tz), (0, QC.n)(this, Dz, !1)), this._isEnabled = ((0, QC.n)(this, jz), (0, QC.n)(this, yz, !0)), this.outputTextureWidth = ((0, QC.n)(this, Lz), (0, QC.n)(this, Uz, 0)), this.outputTextureHeight = ((0, QC.n)(this, Bz), (0, QC.n)(this, Oz, 0)), this.onUpdateParameters = ((0, QC.n)(this, kz), new bC.d)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(CC) {
            this._colorCurvesEnabled !== CC && (this._colorCurvesEnabled = CC, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(CC) {
            this._colorGradingTexture !== CC && (this._colorGradingTexture = CC, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(CC) {
            this._colorGradingEnabled !== CC && (this._colorGradingEnabled = CC, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(CC) {
            this._colorGradingWithGreenDepth !== CC && (this._colorGradingWithGreenDepth = CC, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(CC) {
            this._colorGradingBGR !== CC && (this._colorGradingBGR = CC, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(CC) {
            this._exposure !== CC && (this._exposure = CC, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(CC) {
            this._toneMappingEnabled !== CC && (this._toneMappingEnabled = CC, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(CC) {
            this._toneMappingType !== CC && (this._toneMappingType = CC, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(CC) {
            this._contrast !== CC && (this._contrast = CC, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(CC) {
            this._whiteBalanceEnabled !== CC && (this._whiteBalanceEnabled = CC, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(CC) {
            CC = Number.isNaN(CC) ? FC : Math.max(CC, FC), this._temperature !== CC && (this._temperature = CC, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(CC) {
            CC = (0, fC.Clamp)(CC, -150, WC), this._tint !== CC && (this._tint = CC, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(CC, zC) {
              const ZC = pC(NC(CC, zC), AC),
                QC = GC.multiply(ZC).multiply(RC);
              return oC.b.GetAsMatrix3x3(QC)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(CC) {
            this.vignetteCenterY = CC
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(CC) {
            this.vignetteCenterX = CC
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(CC) {
            this._vignetteBlendMode !== CC && (this._vignetteBlendMode = CC, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(CC) {
            this._vignetteEnabled !== CC && (this._vignetteEnabled = CC, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(CC) {
            this._ditheringEnabled !== CC && (this._ditheringEnabled = CC, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(CC) {
            this._ditheringIntensity !== CC && (this._ditheringIntensity = CC, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(CC) {
            this._skipFinalColorClamp !== CC && (this._skipFinalColorClamp = CC, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(CC) {
            this._applyByPostProcess !== CC && (this._applyByPostProcess = CC, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(CC) {
            this._isEnabled !== CC && (this._isEnabled = CC, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(zC) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return zC.WHITEBALANCE = !1, zC.VIGNETTE = !1, zC.TONEMAPPING = 0, zC.CONTRAST = !1, zC.EXPOSURE = !1, zC.COLORCURVES = !1, zC.COLORGRADING = !1, zC.COLORGRADING3D = !1, zC.DITHER = !1, zC.IMAGEPROCESSING = !1, zC.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(zC.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (zC.WHITEBALANCE = this._whiteBalanceEnabled, zC.VIGNETTE = this.vignetteEnabled, zC.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === CC._VIGNETTEMODE_MULTIPLY, zC.VIGNETTEBLENDMODEOPAQUE = !zC.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case CC.TONEMAPPING_KHR_PBR_NEUTRAL:
                zC.TONEMAPPING = 3;
                break;
              case CC.TONEMAPPING_ACES:
                zC.TONEMAPPING = 2;
                break;
              default:
                zC.TONEMAPPING = 1
            } else zC.TONEMAPPING = 0;
            zC.CONTRAST = 1 !== this.contrast, zC.EXPOSURE = 1 !== this.exposure, zC.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, zC.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, zC.COLORGRADING ? zC.COLORGRADING3D = this.colorGradingTexture.is3D : zC.COLORGRADING3D = !1, zC.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, zC.SAMPLER3DBGRMAP = this.colorGradingBGR, zC.DITHER = this._ditheringEnabled, zC.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, zC.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, zC.IMAGEPROCESSING = zC.WHITEBALANCE || zC.VIGNETTE || !!zC.TONEMAPPING || zC.CONTRAST || zC.EXPOSURE || zC.COLORCURVES || zC.COLORGRADING || zC.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(CC, zC) {
            if (this._whiteBalanceEnabled && CC.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && iC(this.colorCurves, CC), this._vignetteEnabled || this._ditheringEnabled) {
              const ZC = 1 / (this.outputTextureWidth || CC.mg().getRenderWidth()),
                QC = 1 / (this.outputTextureHeight || CC.mg().getRenderHeight());
              if (CC.setFloat2("vInverseScreenSize", ZC, QC), this._ditheringEnabled && CC.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const wC = null != zC ? zC : QC / ZC;
                let bC = Math.tan(.5 * this.vignetteCameraFov),
                  nC = bC * wC;
                const fC = Math.sqrt(nC * bC);
                nC = (0, vC.i)(nC, fC, this.vignetteStretch), bC = (0, vC.i)(bC, fC, this.vignetteStretch), CC.setFloat4("vignetteSettings1", nC, bC, -nC * this.vignetteCenterX, -bC * this.vignetteCenterY);
                const oC = -2 * this.vignetteWeight;
                CC.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, oC)
              }
            }
            if (CC.setFloat("exposureLinear", this.exposure), CC.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              CC.setTexture("txColorTransform", this.colorGradingTexture);
              const zC = this.colorGradingTexture.getSize().height;
              CC.setFloat4("colorTransformSettings", (zC - 1) / zC, .5 / zC, zC, this.colorGradingTexture.level)
            }
          }
          clone() {
            return xC.d.Clone((() => new CC), this)
          }
          serialize() {
            return xC.d.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const bC = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          zC = [(0, wC.l)()], ZC = [(0, wC.M)()], qC = [(0, wC.B)("colorGradingTexture")], MC = [(0, wC.M)()], gC = [(0, wC.M)()], SC = [(0, wC.M)()], PC = [(0, wC.M)()], JC = [(0, wC.M)()], hC = [(0, wC.M)()], KC = [(0, wC.M)()], YC = [(0, wC.M)()], dC = [(0, wC.M)()], mC = [(0, wC.M)()], HC = [(0, wC.M)()], EC = [(0, wC.M)()], lC = [(0, wC.M)()], XC = [(0, wC.M)()], cC = [(0, wC.q)()], uC = [(0, wC.M)()], rC = [(0, wC.M)()], sC = [(0, wC.M)()], TC = [(0, wC.M)()], aC = [(0, wC.M)()], tC = [(0, wC.M)()], DC = [(0, wC.M)()], jC = [(0, wC.M)()], yC = [(0, wC.M)()], LC = [(0, wC.M)()], (0, QC.j)(null, null, zC, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: CC => "colorCurves" in CC,
              get: CC => CC.colorCurves,
              set: (CC, zC) => {
                CC.colorCurves = zC
              }
            },
            metadata: bC
          }, UC, BC), (0, QC.j)(null, null, ZC, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: CC => "_colorCurvesEnabled" in CC,
              get: CC => CC._colorCurvesEnabled,
              set: (CC, zC) => {
                CC._colorCurvesEnabled = zC
              }
            },
            metadata: bC
          }, OC, kC), (0, QC.j)(null, null, qC, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: CC => "_colorGradingTexture" in CC,
              get: CC => CC._colorGradingTexture,
              set: (CC, zC) => {
                CC._colorGradingTexture = zC
              }
            },
            metadata: bC
          }, VC, Cz), (0, QC.j)(null, null, MC, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: CC => "_colorGradingEnabled" in CC,
              get: CC => CC._colorGradingEnabled,
              set: (CC, zC) => {
                CC._colorGradingEnabled = zC
              }
            },
            metadata: bC
          }, zz, Zz), (0, QC.j)(null, null, gC, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: CC => "_colorGradingWithGreenDepth" in CC,
              get: CC => CC._colorGradingWithGreenDepth,
              set: (CC, zC) => {
                CC._colorGradingWithGreenDepth = zC
              }
            },
            metadata: bC
          }, Qz, wz), (0, QC.j)(null, null, SC, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: CC => "_colorGradingBGR" in CC,
              get: CC => CC._colorGradingBGR,
              set: (CC, zC) => {
                CC._colorGradingBGR = zC
              }
            },
            metadata: bC
          }, bz, nz), (0, QC.j)(null, null, PC, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: CC => "_exposure" in CC,
              get: CC => CC._exposure,
              set: (CC, zC) => {
                CC._exposure = zC
              }
            },
            metadata: bC
          }, fz, oz), (0, QC.j)(null, null, JC, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: CC => "_toneMappingEnabled" in CC,
              get: CC => CC._toneMappingEnabled,
              set: (CC, zC) => {
                CC._toneMappingEnabled = zC
              }
            },
            metadata: bC
          }, qz, Fz), (0, QC.j)(null, null, hC, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: CC => "_toneMappingType" in CC,
              get: CC => CC._toneMappingType,
              set: (CC, zC) => {
                CC._toneMappingType = zC
              }
            },
            metadata: bC
          }, Wz, Nz), (0, QC.j)(null, null, KC, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: CC => "_contrast" in CC,
              get: CC => CC._contrast,
              set: (CC, zC) => {
                CC._contrast = zC
              }
            },
            metadata: bC
          }, Mz, gz), (0, QC.j)(null, null, YC, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: CC => "_whiteBalanceEnabled" in CC,
              get: CC => CC._whiteBalanceEnabled,
              set: (CC, zC) => {
                CC._whiteBalanceEnabled = zC
              }
            },
            metadata: bC
          }, Sz, pz), (0, QC.j)(null, null, dC, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: CC => "_temperature" in CC,
              get: CC => CC._temperature,
              set: (CC, zC) => {
                CC._temperature = zC
              }
            },
            metadata: bC
          }, Pz, Gz), (0, QC.j)(null, null, mC, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: CC => "_tint" in CC,
              get: CC => CC._tint,
              set: (CC, zC) => {
                CC._tint = zC
              }
            },
            metadata: bC
          }, Rz, Az), (0, QC.j)(null, null, HC, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: CC => "vignetteStretch" in CC,
              get: CC => CC.vignetteStretch,
              set: (CC, zC) => {
                CC.vignetteStretch = zC
              }
            },
            metadata: bC
          }, xz, Jz), (0, QC.j)(null, null, EC, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: CC => "vignetteCenterX" in CC,
              get: CC => CC.vignetteCenterX,
              set: (CC, zC) => {
                CC.vignetteCenterX = zC
              }
            },
            metadata: bC
          }, Iz, iz), (0, QC.j)(null, null, lC, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: CC => "vignetteCenterY" in CC,
              get: CC => CC.vignetteCenterY,
              set: (CC, zC) => {
                CC.vignetteCenterY = zC
              }
            },
            metadata: bC
          }, vz, ez), (0, QC.j)(null, null, XC, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: CC => "vignetteWeight" in CC,
              get: CC => CC.vignetteWeight,
              set: (CC, zC) => {
                CC.vignetteWeight = zC
              }
            },
            metadata: bC
          }, hz, Kz), (0, QC.j)(null, null, cC, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: CC => "vignetteColor" in CC,
              get: CC => CC.vignetteColor,
              set: (CC, zC) => {
                CC.vignetteColor = zC
              }
            },
            metadata: bC
          }, Yz, dz), (0, QC.j)(null, null, uC, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: CC => "vignetteCameraFov" in CC,
              get: CC => CC.vignetteCameraFov,
              set: (CC, zC) => {
                CC.vignetteCameraFov = zC
              }
            },
            metadata: bC
          }, mz, Hz), (0, QC.j)(null, null, rC, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: CC => "_vignetteBlendMode" in CC,
              get: CC => CC._vignetteBlendMode,
              set: (CC, zC) => {
                CC._vignetteBlendMode = zC
              }
            },
            metadata: bC
          }, Ez, lz), (0, QC.j)(null, null, sC, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: CC => "_vignetteEnabled" in CC,
              get: CC => CC._vignetteEnabled,
              set: (CC, zC) => {
                CC._vignetteEnabled = zC
              }
            },
            metadata: bC
          }, Xz, cz), (0, QC.j)(null, null, TC, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: CC => "_ditheringEnabled" in CC,
              get: CC => CC._ditheringEnabled,
              set: (CC, zC) => {
                CC._ditheringEnabled = zC
              }
            },
            metadata: bC
          }, uz, rz), (0, QC.j)(null, null, aC, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: CC => "_ditheringIntensity" in CC,
              get: CC => CC._ditheringIntensity,
              set: (CC, zC) => {
                CC._ditheringIntensity = zC
              }
            },
            metadata: bC
          }, sz, Tz), (0, QC.j)(null, null, tC, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: CC => "_skipFinalColorClamp" in CC,
              get: CC => CC._skipFinalColorClamp,
              set: (CC, zC) => {
                CC._skipFinalColorClamp = zC
              }
            },
            metadata: bC
          }, az, tz), (0, QC.j)(null, null, DC, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: CC => "_applyByPostProcess" in CC,
              get: CC => CC._applyByPostProcess,
              set: (CC, zC) => {
                CC._applyByPostProcess = zC
              }
            },
            metadata: bC
          }, Dz, jz), (0, QC.j)(null, null, jC, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: CC => "_isEnabled" in CC,
              get: CC => CC._isEnabled,
              set: (CC, zC) => {
                CC._isEnabled = zC
              }
            },
            metadata: bC
          }, yz, Lz), (0, QC.j)(null, null, yC, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: CC => "outputTextureWidth" in CC,
              get: CC => CC.outputTextureWidth,
              set: (CC, zC) => {
                CC.outputTextureWidth = zC
              }
            },
            metadata: bC
          }, Uz, Bz), (0, QC.j)(null, null, LC, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: CC => "outputTextureHeight" in CC,
              get: CC => CC.outputTextureHeight,
              set: (CC, zC) => {
                CC.outputTextureHeight = zC
              }
            },
            metadata: bC
          }, Oz, kz), bC && Object.defineProperty(CC, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: bC
          })
        })(), CC.TONEMAPPING_STANDARD = 0, CC.TONEMAPPING_ACES = 1, CC.TONEMAPPING_KHR_PBR_NEUTRAL = 2, CC.PrepareUniforms = eC.d, CC.PrepareSamplers = eC.b, CC._VIGNETTEMODE_MULTIPLY = 0, CC._VIGNETTEMODE_OPAQUE = 1, CC
      })(),
      YC = !1;

    function dC(CC) {
      const zC = xC.d.Parse((() => new KC), CC, null, null);
      return void 0 !== CC.vignetteCentreX && (zC.vignetteCenterX = CC.vignetteCentreX), void 0 !== CC.vignetteCentreY && (zC.vignetteCenterY = CC.vignetteCentreY), zC
    }

    function mC() {
      YC || (YC = !0, KC.Parse = dC, xC.d._ImageProcessingConfigurationParser = dC, (0, hC.d)("BABYLON.ImageProcessingConfiguration", KC))
    }
  },
  39950: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC
    });
    var QC = ZC(38507),
      wC = ZC(39913);
    class bC {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = arguments.length > 3 ? arguments[3] : void 0,
          wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          bC = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = CC, this._noUBO = !CC.supportsUniformBuffers || wC, this._dynamic = ZC, this._name = QC ?? "no-name", this._data = zC || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === bC && this._engine._features.trackUbosInFrame || !0 === bC) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.x_ = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.x_ = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(CC) {
        let zC;
        if (zC = CC <= 2 ? CC : 4, this._uniformLocationPointer % zC !== 0) {
          const CC = this._uniformLocationPointer;
          this._uniformLocationPointer += zC - this._uniformLocationPointer % zC;
          const ZC = this._uniformLocationPointer - CC;
          for (let zC = 0; zC < ZC; zC++) this._data.push(0)
        }
      }
      addUniform(CC, zC) {
        let ZC, QC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (QC > 0 && "number" === typeof zC && (this._uniformArraySizes[CC] = {
            strideSize: zC,
            arraySize: QC
          }), void 0 === this._uniformLocations[CC] && (this._uniformNames.push(CC), !this._noUBO)) {
          if (QC > 0) {
            if (zC instanceof Array) throw "addUniform should not be use with Array in UBO: " + CC;
            if (this._fillAlignment(4), 16 == zC) zC *= QC;
            else {
              zC = zC * QC + (4 - zC) * QC
            }
            ZC = [];
            for (let CC = 0; CC < zC; CC++) ZC.push(0)
          } else {
            if (zC instanceof Array) ZC = zC, zC = ZC.length;
            else {
              ZC = [];
              for (let CC = 0; CC < zC; CC++) ZC.push(0)
            }
            this._fillAlignment(zC)
          }
          this._uniformSizes[CC] = zC, this._uniformLocations[CC] = this._uniformLocationPointer, this._uniformLocationPointer += zC;
          for (let CC = 0; CC < zC; CC++) this._data.push(ZC[CC]);
          this._needSync = !0
        }
      }
      addMatrix(CC, zC) {
        this.addUniform(CC, Array.prototype.slice.call(zC.VZC()))
      }
      addFloat2(CC, zC, ZC) {
        const QC = [zC, ZC];
        this.addUniform(CC, QC)
      }
      addFloat3(CC, zC, ZC, QC) {
        const wC = [zC, ZC, QC];
        this.addUniform(CC, wC)
      }
      addColor3(CC, zC) {
        const ZC = [zC.r, zC.g, zC.b];
        this.addUniform(CC, ZC)
      }
      addColor4(CC, zC, ZC) {
        const QC = [zC.r, zC.g, zC.b, ZC];
        this.addUniform(CC, QC)
      }
      addVector3(CC, zC) {
        const ZC = [zC.x, zC.y, zC.z];
        this.addUniform(CC, ZC)
      }
      addMatrix3x3(CC) {
        this.addUniform(CC, 12)
      }
      addMatrix2x2(CC) {
        this.addUniform(CC, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const CC = [];
        let zC = 0;
        for (const ZC in this._uniformLocations)
          if (CC.push(ZC), 10 === ++zC) break;
        return CC.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const CC of this._ownerListsBySlot.values()) this._removeOwnerBacklink(CC);
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
      set name(CC) {
        this._name = CC
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(CC, zC) {
        for (let ZC = 0; ZC < CC.length; ++ZC)
          if (CC[ZC] !== zC[ZC]) return !1;
        return !0
      }
      _copyBuffer(CC, zC) {
        for (let ZC = 0; ZC < CC.length; ++ZC) zC[ZC] = CC[ZC]
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
      _updateOwnerKeyed(CC) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let zC = this._slotByOwner.get(CC);
        if (void 0 === zC && (zC = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(CC, zC), this._ownerCount++, CC._uniformBuffersWithOwnedSlot || (CC._uniformBuffersWithOwnedSlot = []), CC._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(zC, CC._uniformBuffersWithOwnedSlot)), this._slotGeneration[zC] === this._dataGeneration) return this._bufferIndex = zC, this._buffer = this._buffers[zC][0], this.bindUniformBuffer(), this._slotFrameId[zC] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const ZC = this._buffers[zC][1];
        this._slotFrameId[zC] === this._currentFrameId && ZC && !this._buffersEqual(this._bufferData, ZC) && (zC = this._takeFreeSlot(!1)), this._bufferIndex = zC, this._buffer = this._buffers[zC][0], this.bindUniformBuffer();
        const QC = this._buffers[zC][1];
        QC && this._buffersEqual(this._bufferData, QC) || (QC && this._copyBuffer(this._bufferData, QC), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[zC] = this._currentFrameId, this._slotGeneration[zC] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(CC) {
        for (let ZC = 0; ZC < this._freeSlots.length; ++ZC) {
          const zC = this._freeSlots[ZC];
          if (this._slotFrameId[zC] !== this._currentFrameId) return CC && (this._freeSlots[ZC] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), zC
        }
        this._rebuild();
        const zC = this._buffers.length - 1;
        return CC || this._freeSlots.push(zC), zC
      }
      _releaseOwnerSlot(CC) {
        const zC = this._slotByOwner?.get(CC);
        if (void 0 === zC) return;
        this._slotByOwner.delete(CC);
        const ZC = this._ownerListsBySlot.get(zC);
        ZC && (this._removeOwnerBacklink(ZC), this._ownerListsBySlot.delete(zC)), this._ownerCount--, this._freeSlots.push(zC)
      }
      _removeOwnerBacklink(CC) {
        const zC = CC.indexOf(this); - 1 !== zC && (CC[zC] = CC[CC.length - 1], CC.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(CC, zC, ZC) {
        this._checkNewFrame();
        let wC = this._uniformLocations[CC];
        if (void 0 === wC) {
          if (this._buffer) return void QC.c.Error("Cannot add an uniform after UBO has been created. uniformName=" + CC);
          this.addUniform(CC, ZC), wC = this._uniformLocations[CC]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let CC = 0; CC < ZC; CC++) this._bufferData[wC + CC] = zC[CC];
          this._dataGeneration++
        } else {
          let CC = !1;
          for (let QC = 0; QC < ZC; QC++)(16 === ZC && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[wC + QC] !== Math.fround(zC[QC])) && (CC = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[wC + QC] = zC[QC]);
          this._needSync = this._needSync || CC, CC && this._dataGeneration++
        }
      }
      updateUniformArray(CC, zC, ZC) {
        this._checkNewFrame();
        const bC = this._uniformLocations[CC];
        if (void 0 === bC) return void QC.c.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const nC = this._uniformArraySizes[CC];
        if (this._dynamic) {
          for (let CC = 0; CC < ZC; CC++) this._bufferData[bC + CC] = zC[CC];
          this._dataGeneration++
        } else {
          let CC = !1,
            QC = 0,
            fC = 0;
          for (let oC = 0; oC < ZC; oC++)
            if (this._bufferData[bC + 4 * fC + QC] !== wC.g.FloatRound(zC[oC]) && (CC = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[bC + 4 * fC + QC] = zC[oC]), QC++, QC === nC.strideSize) {
              for (; QC < 4; QC++) this._bufferData[bC + 4 * fC + QC] = 0;
              QC = 0, fC++
            } this._needSync = this._needSync || CC, CC && this._dataGeneration++
        }
      }
      _cacheMatrix(CC, zC) {
        this._checkNewFrame();
        const ZC = this._valueCache[CC],
          QC = zC.updateFlag;
        return (void 0 === ZC || ZC !== QC) && (this._valueCache[CC] = QC, !0)
      }
      _updateMatrix3x3ForUniform(CC, zC) {
        for (let ZC = 0; ZC < 3; ZC++) bC._TempBuffer[4 * ZC] = zC[3 * ZC], bC._TempBuffer[4 * ZC + 1] = zC[3 * ZC + 1], bC._TempBuffer[4 * ZC + 2] = zC[3 * ZC + 2], bC._TempBuffer[4 * ZC + 3] = 0;
        this.updateUniform(CC, bC._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(CC, zC) {
        this._currentEffect.setMatrix3x3(CC, zC)
      }
      _updateMatrix2x2ForEffect(CC, zC) {
        this._currentEffect.setMatrix2x2(CC, zC)
      }
      _updateMatrix2x2ForUniform(CC, zC) {
        for (let ZC = 0; ZC < 2; ZC++) bC._TempBuffer[4 * ZC] = zC[2 * ZC], bC._TempBuffer[4 * ZC + 1] = zC[2 * ZC + 1], bC._TempBuffer[4 * ZC + 2] = 0, bC._TempBuffer[4 * ZC + 3] = 0;
        this.updateUniform(CC, bC._TempBuffer, 8)
      }
      _updateFloatForEffect(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(CC + ZC, zC)
      }
      _updateFloatForUniform(CC, zC) {
        bC._TempBuffer[0] = zC, this.updateUniform(CC, bC._TempBuffer, 1)
      }
      _updateFloat2ForEffect(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(CC + QC, zC, ZC)
      }
      _updateFloat2ForUniform(CC, zC, ZC) {
        bC._TempBuffer[0] = zC, bC._TempBuffer[1] = ZC, this.updateUniform(CC, bC._TempBuffer, 2)
      }
      _updateFloat3ForEffect(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(CC + wC, zC, ZC, QC)
      }
      _updateFloat3ForUniform(CC, zC, ZC, QC) {
        bC._TempBuffer[0] = zC, bC._TempBuffer[1] = ZC, bC._TempBuffer[2] = QC, this.updateUniform(CC, bC._TempBuffer, 3)
      }
      _updateFloat4ForEffect(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(CC + bC, zC, ZC, QC, wC)
      }
      _updateFloat4ForUniform(CC, zC, ZC, QC, wC) {
        bC._TempBuffer[0] = zC, bC._TempBuffer[1] = ZC, bC._TempBuffer[2] = QC, bC._TempBuffer[3] = wC, this.updateUniform(CC, bC._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[CC]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(CC + ZC, zC);
            break;
          case 3:
            this._currentEffect.setFloatArray3(CC + ZC, zC);
            break;
          case 4:
            this._currentEffect.setFloatArray4(CC + ZC, zC);
            break;
          default:
            this._currentEffect.setFloatArray(CC + ZC, zC)
        }
      }
      _updateFloatArrayForUniform(CC, zC) {
        this.updateUniformArray(CC, zC, zC.length)
      }
      _updateArrayForEffect(CC, zC) {
        this._currentEffect.setArray(CC, zC)
      }
      _updateArrayForUniform(CC, zC) {
        this.updateUniformArray(CC, zC, zC.length)
      }
      _updateIntArrayForEffect(CC, zC) {
        this._currentEffect.setIntArray(CC, zC)
      }
      _updateIntArrayForUniform(CC, zC) {
        bC._TempBufferInt32View.set(zC), this.updateUniformArray(CC, bC._TempBuffer, zC.length)
      }
      _updateUIntArrayForEffect(CC, zC) {
        this._currentEffect.setUIntArray(CC, zC)
      }
      _updateUIntArrayForUniform(CC, zC) {
        bC._TempBufferUInt32View.set(zC), this.updateUniformArray(CC, bC._TempBuffer, zC.length)
      }
      _updateMatrixForEffect(CC, zC) {
        this._currentEffect.setMatrix(CC, zC)
      }
      _updateMatrixForUniform(CC, zC) {
        this._cacheMatrix(CC, zC) && this.updateUniform(CC, zC.VZC(), 16)
      }
      _updateMatricesForEffect(CC, zC) {
        this._currentEffect.setMatrices(CC, zC)
      }
      _updateMatricesForUniform(CC, zC) {
        this.updateUniform(CC, zC, zC.length)
      }
      _updateVector3ForEffect(CC, zC) {
        this._currentEffect.setVector3(CC, zC)
      }
      _updateVector3ForUniform(CC, zC) {
        bC._TempBuffer[0] = zC.x, bC._TempBuffer[1] = zC.y, bC._TempBuffer[2] = zC.z, this.updateUniform(CC, bC._TempBuffer, 3)
      }
      _updateVector4ForEffect(CC, zC) {
        this._currentEffect.setVector4(CC, zC)
      }
      _updateVector4ForUniform(CC, zC) {
        bC._TempBuffer[0] = zC.x, bC._TempBuffer[1] = zC.y, bC._TempBuffer[2] = zC.z, bC._TempBuffer[3] = zC.w, this.updateUniform(CC, bC._TempBuffer, 4)
      }
      _updateColor3ForEffect(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(CC + ZC, zC)
      }
      _updateColor3ForUniform(CC, zC) {
        bC._TempBuffer[0] = zC.r, bC._TempBuffer[1] = zC.g, bC._TempBuffer[2] = zC.b, this.updateUniform(CC, bC._TempBuffer, 3)
      }
      _updateColor4ForEffect(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(CC + QC, zC, ZC)
      }
      _updateDirectColor4ForEffect(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(CC + ZC, zC)
      }
      _updateColor4ForUniform(CC, zC, ZC) {
        bC._TempBuffer[0] = zC.r, bC._TempBuffer[1] = zC.g, bC._TempBuffer[2] = zC.b, bC._TempBuffer[3] = ZC, this.updateUniform(CC, bC._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(CC, zC) {
        bC._TempBuffer[0] = zC.r, bC._TempBuffer[1] = zC.g, bC._TempBuffer[2] = zC.b, bC._TempBuffer[3] = zC.a, this.updateUniform(CC, bC._TempBuffer, 4)
      }
      _updateIntForEffect(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(CC + ZC, zC)
      }
      _updateIntForUniform(CC, zC) {
        bC._TempBufferInt32View[0] = zC, this.updateUniform(CC, bC._TempBuffer, 1)
      }
      _updateInt2ForEffect(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(CC + QC, zC, ZC)
      }
      _updateInt2ForUniform(CC, zC, ZC) {
        bC._TempBufferInt32View[0] = zC, bC._TempBufferInt32View[1] = ZC, this.updateUniform(CC, bC._TempBuffer, 2)
      }
      _updateInt3ForEffect(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(CC + wC, zC, ZC, QC)
      }
      _updateInt3ForUniform(CC, zC, ZC, QC) {
        bC._TempBufferInt32View[0] = zC, bC._TempBufferInt32View[1] = ZC, bC._TempBufferInt32View[2] = QC, this.updateUniform(CC, bC._TempBuffer, 3)
      }
      _updateInt4ForEffect(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(CC + bC, zC, ZC, QC, wC)
      }
      _updateInt4ForUniform(CC, zC, ZC, QC, wC) {
        bC._TempBufferInt32View[0] = zC, bC._TempBufferInt32View[1] = ZC, bC._TempBufferInt32View[2] = QC, bC._TempBufferInt32View[3] = wC, this.updateUniform(CC, bC._TempBuffer, 4)
      }
      _updateUIntForEffect(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(CC + ZC, zC)
      }
      _updateUIntForUniform(CC, zC) {
        bC._TempBufferUInt32View[0] = zC, this.updateUniform(CC, bC._TempBuffer, 1)
      }
      _updateUInt2ForEffect(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(CC + QC, zC, ZC)
      }
      _updateUInt2ForUniform(CC, zC, ZC) {
        bC._TempBufferUInt32View[0] = zC, bC._TempBufferUInt32View[1] = ZC, this.updateUniform(CC, bC._TempBuffer, 2)
      }
      _updateUInt3ForEffect(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(CC + wC, zC, ZC, QC)
      }
      _updateUInt3ForUniform(CC, zC, ZC, QC) {
        bC._TempBufferUInt32View[0] = zC, bC._TempBufferUInt32View[1] = ZC, bC._TempBufferUInt32View[2] = QC, this.updateUniform(CC, bC._TempBuffer, 3)
      }
      _updateUInt4ForEffect(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(CC + bC, zC, ZC, QC, wC)
      }
      _updateUInt4ForUniform(CC, zC, ZC, QC, wC) {
        bC._TempBufferUInt32View[0] = zC, bC._TempBufferUInt32View[1] = ZC, bC._TempBufferUInt32View[2] = QC, bC._TempBufferUInt32View[3] = wC, this.updateUniform(CC, bC._TempBuffer, 4)
      }
      setTexture(CC, zC) {
        this._currentEffect.setTexture(CC, zC)
      }
      setTextureArray(CC, zC) {
        this._currentEffect.setTextureArray(CC, zC)
      }
      bindTexture(CC, zC) {
        this._currentEffect._bindTexture(CC, zC)
      }
      updateUniformDirectly(CC, zC) {
        this.updateUniform(CC, zC, zC.length), this.update()
      }
      bindToEffect(CC, zC) {
        this._currentEffect = CC, this._currentEffectName = zC
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(CC) {
        if (!this._buffers) return this._buffer === CC;
        for (let zC = 0; zC < this._buffers.length; ++zC) {
          if (this._buffers[zC][0] === CC) return this._bufferIndex = zC, this._buffer = CC, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[zC][1] && (this._bufferData.set(this._buffers[zC][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(CC) {
        return void 0 !== this._uniformLocations[CC]
      }
      dispose() {
        if (this._noUBO) return;
        const CC = this._engine._uniformBuffers,
          zC = CC.indexOf(this);
        if (-1 !== zC && (CC[zC] = CC[CC.length - 1], CC.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let CC = 0; CC < this._buffers.length; ++CC) {
            const zC = this._buffers[CC][0];
            this._engine._releaseBuffer(zC)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    bC._MAX_UNIFORM_SIZE = 256, bC._TempBuffer = new Float32Array(bC._MAX_UNIFORM_SIZE), bC._TempBufferInt32View = new Int32Array(bC._TempBuffer.buffer), bC._TempBufferUInt32View = new Uint32Array(bC._TempBuffer.buffer)
  },
  39740: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC
    });
    var QC = ZC(39742);
    class wC extends QC.d {
      constructor(CC) {
        super(), this._buffer = CC
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39826: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => oC,
      f: () => qC
    });
    const QC = "__bjs_serializable__",
      wC = new WeakMap;

    function bC(CC, zC) {
      return Object.prototype.hasOwnProperty.call(CC, zC)
    }
    const nC = function() {
      let CC = Symbol.metadata;
      return CC || (CC = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: CC
      })), CC
    }();

    function fC(CC) {
      return "function" === typeof CC ? CC : CC?.constructor
    }

    function oC(CC) {
      if (!CC) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(nC)}) polyfill must run before decorated classes are evaluated.`);
      return bC(CC, QC) || (CC[QC] = {}), CC[QC]
    }

    function qC(CC) {
      const zC = fC(CC),
        ZC = zC ? zC[nC] : void 0;
      if (!ZC) return {};
      const oC = wC.get(ZC);
      if (oC) return oC;
      const qC = {},
        FC = [];
      let WC = ZC;
      for (; WC;) FC.push(WC), WC = Object.getPrototypeOf(WC);
      for (const wC of FC)
        if (bC(wC, QC)) {
          const CC = wC[QC];
          for (const zC in CC) qC[zC] = CC[zC]
        } return wC.set(ZC, qC), qC
    }
  },
  39818: (CC, zC, ZC) => {
    ZC.d(zC, {
      B: () => fC,
      F: () => FC,
      J: () => WC,
      M: () => nC,
      c: () => RC,
      d: () => bC,
      h: () => GC,
      l: () => MC,
      n: () => oC,
      q: () => gC,
      t: () => qC,
      v: () => pC,
      w: () => NC,
      z: () => SC
    });
    var QC = ZC(39826);

    function wC(CC, zC) {
      return (ZC, wC) => {
        if (!wC.metadata) return;
        const bC = String(wC.name),
          nC = (0, QC.e)(wC.metadata);
        nC[bC] || (nC[bC] = {
          type: CC,
          sourceName: zC
        })
      }
    }

    function bC(CC) {
      return function(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (ZC, QC) => {
          const wC = zC || "_" + String(QC.name);
          return {
            init(CC) {
              return void 0 === CC && wC in this || (this[wC] = CC), CC
            },
            get() {
              return this[wC]
            },
            set(zC) {
              "function" === typeof this[wC]?.equals && this[wC].equals(zC) || this[wC] !== zC && (this[wC] = zC, this[CC]())
            }
          }
        }
      }(CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function nC(CC) {
      return wC(0, CC)
    }

    function fC(CC) {
      return wC(1, CC)
    }

    function oC(CC) {
      return wC(2, CC)
    }

    function qC(CC) {
      return wC(3, CC)
    }

    function FC(CC) {
      return wC(4, CC)
    }

    function WC(CC) {
      return wC(5, CC)
    }

    function NC(CC) {
      return wC(6, CC)
    }

    function MC(CC) {
      return wC(7, CC)
    }

    function gC(CC) {
      return wC(8, CC)
    }

    function SC(CC) {
      return wC(10, CC)
    }

    function pC(CC) {
      return wC(12, CC)
    }

    function PC(CC, zC, ZC) {
      const QC = String(zC.name);
      let wC = null;
      const bC = function() {
        if (null === wC) {
          wC = CC, "undefined" !== typeof _native && _native[QC] && (wC = ZC(_native[QC], CC));
          const nC = this && (zC.static ? this : Object.getPrototypeOf(this));
          nC?.[QC] === bC && (nC[QC] = wC)
        }
        for (var nC = arguments.length, fC = new Array(nC), oC = 0; oC < nC; oC++) fC[oC] = arguments[oC];
        return wC.apply(this, fC)
      };
      return bC
    }

    function GC(CC, zC) {
      return PC(CC, zC, (CC => CC))
    }

    function RC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (ZC, QC) => {
        const wC = zC || "_" + String(QC.name);
        return {
          get() {
            return this[wC]?.value
          },
          set(zC) {
            "function" === typeof this[wC]?.value?.equals && this[wC].value.equals(zC) || this[wC].value !== zC && (this[wC].value = zC, this[CC]())
          }
        }
      }
    }
    GC.filter = function(CC) {
      return (zC, ZC) => PC(zC, ZC, ((zC, ZC) => function() {
        for (var QC = arguments.length, wC = new Array(QC), bC = 0; bC < QC; bC++) wC[bC] = arguments[bC];
        return CC(...wC) ? zC(...wC) : ZC.apply(this, wC)
      }))
    }
  },
  39842: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => qC
    });
    var QC = ZC(39694),
      wC = ZC(39851),
      bC = ZC(37142),
      nC = ZC(36963),
      fC = ZC(39826);
    const oC = function(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const bC = CC();
      wC.e && wC.e.HasTags(zC) && wC.e.AddTagsTo(bC, wC.e.GetTags(zC, !0));
      const nC = (0, fC.f)(bC),
        oC = {};
      for (const wC in nC) {
        const CC = nC[wC],
          fC = zC[wC],
          FC = CC.type;
        if (void 0 !== fC && null !== fC && ("uniqueId" !== wC || qC.AllowLoadingUniqueId)) switch (FC) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof fC.slice ? bC[wC] = fC.slice() : bC[wC] = fC;
            break;
          case 1:
            QC.cloneTexturesOnlyOnce && oC[fC.uniqueId] ? bC[wC] = oC[fC.uniqueId] : (bC[wC] = ZC || fC.isRenderTarget ? fC : fC.clone(), oC[fC.uniqueId] = bC[wC]);
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
            bC[wC] = ZC ? fC : fC.clone()
        }
      }
      return bC
    };
    class qC {
      static AppendSerializedAnimations(CC, zC) {
        if (CC.animations) {
          zC.animations = [];
          for (let ZC = 0; ZC < CC.animations.length; ZC++) {
            const QC = CC.animations[ZC];
            zC.animations.push(QC.serialize())
          }
        }
      }
      static Serialize(CC, zC) {
        zC || (zC = {}), wC.e && (zC.tags = wC.e.GetTags(CC));
        const ZC = (0, fC.f)(CC);
        for (const QC in ZC) {
          const wC = ZC[QC],
            bC = wC.sourceName || QC,
            nC = wC.type,
            fC = CC[QC];
          if (void 0 !== fC && null !== fC && ("uniqueId" !== QC || qC.AllowLoadingUniqueId)) switch (nC) {
            case 0:
              Array.isArray(fC) ? zC[bC] = fC.slice() : zC[bC] = fC;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              zC[bC] = fC.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              zC[bC] = fC.VZC();
              break;
            case 6:
            case 11:
              zC[bC] = fC.id
          }
        }
        return zC
      }
      static ParseProperties(CC, zC, ZC, QC) {
        QC || (QC = "");
        const wC = (0, fC.f)(zC);
        for (const fC in wC) {
          const oC = wC[fC],
            FC = CC[oC.sourceName || fC],
            WC = oC.type;
          if (void 0 !== FC && null !== FC && ("uniqueId" !== fC || qC.AllowLoadingUniqueId)) {
            const CC = zC;
            switch (WC) {
              case 0:
                CC[fC] = FC;
                break;
              case 1:
                ZC && (CC[fC] = qC._TextureParser(FC, ZC, QC));
                break;
              case 2:
                CC[fC] = bC.e.FromArray(FC);
                break;
              case 3:
                CC[fC] = qC._FresnelParametersParser(FC);
                break;
              case 4:
                CC[fC] = nC.n.FromArray(FC);
                break;
              case 5:
                CC[fC] = nC.r.FromArray(FC);
                break;
              case 6:
                ZC && (CC[fC] = ZC.getLastMeshById(FC));
                break;
              case 7:
                CC[fC] = qC._ColorCurvesParser(FC);
                break;
              case 8:
                CC[fC] = bC.g.FromArray(FC);
                break;
              case 9:
                CC[fC] = qC._ImageProcessingConfigurationParser(FC);
                break;
              case 10:
                CC[fC] = nC.f.FromArray(FC);
                break;
              case 11:
                ZC && (CC[fC] = ZC.getCameraById(FC));
                break;
              case 12:
                CC[fC] = nC.b.FromArray(FC);
                break;
              case 13:
                CC[fC] = nC.u.FromArray(FC)
            }
          }
        }
      }
      static Parse(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const bC = CC();
        return wC.e && wC.e.AddTagsTo(bC, zC.tags), qC.ParseProperties(zC, bC, ZC, QC), bC
      }
      static Clone(CC, zC) {
        return oC(CC, zC, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(CC, zC) {
        return oC(CC, zC, !0)
      }
    }
    qC.AllowLoadingUniqueId = !1, qC._ImageProcessingConfigurationParser = CC => {
      throw (0, QC.i)("ImageProcessingConfiguration")
    }, qC._FresnelParametersParser = CC => {
      throw (0, QC.i)("FresnelParameters")
    }, qC._ColorCurvesParser = CC => {
      throw (0, QC.i)("ColorCurves")
    }, qC._TextureParser = (CC, zC, ZC) => {
      throw (0, QC.i)("Texture")
    }
  },
  39766: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => wC
    });
    var QC = ZC(39730);
    class wC {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = wC.Enabled, this._lastSecValueCount++
      }
      addCount(CC, zC) {
        wC.Enabled && (this._current += CC, this._hasCurrentValue = !0, zC && this._fetchResult())
      }
      beginMonitoring() {
        wC.Enabled && (this._startMonitoringTime = QC.b.Now)
      }
      endMonitoring() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!wC.Enabled) return;
        CC && this.fetchNewFrame();
        const zC = QC.b.Now;
        this._current = zC - this._startMonitoringTime, this._hasCurrentValue = !0, CC && this._fetchResult()
      }
      yR() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const CC = QC.b.Now;
        CC - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = CC, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    wC.Enabled = !0
  },
  39925: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC,
      i: () => QC
    });
    class QC {
      constructor(CC) {
        this.length = 0, this.data = new Array(CC), this._id = QC._GlobalId++
      }
      push(CC) {
        this.data[this.length++] = CC, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(CC) {
        for (let zC = 0; zC < this.length; zC++) CC(this.data[zC])
      }
      sort(CC) {
        this.data.sort(CC)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(CC) {
        if (0 !== CC.length) {
          this.length + CC.length > this.data.length && (this.data.length = 2 * (this.length + CC.length));
          for (let zC = 0; zC < CC.length; zC++) this.data[this.length++] = (CC.data || CC)[zC]
        }
      }
      indexOf(CC) {
        const zC = this.data.indexOf(CC);
        return zC >= this.length ? -1 : zC
      }
      contains(CC) {
        return -1 !== this.indexOf(CC)
      }
    }
    QC._GlobalId = 0;
    class wC extends QC {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(CC) {
        super.push(CC), CC.__smartArrayFlags || (CC.__smartArrayFlags = {}), CC.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(CC) {
        return (!CC.__smartArrayFlags || CC.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(CC), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(CC) {
        if (0 !== CC.length) {
          this.length + CC.length > this.data.length && (this.data.length = 2 * (this.length + CC.length));
          for (let zC = 0; zC < CC.length; zC++) {
            const ZC = (CC.data || CC)[zC];
            this.pushNoDuplicate(ZC)
          }
        }
      }
    }
  },
  39851: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC
    });
    class QC {
      static Eval(CC, zC) {
        return "true" === (CC = CC.match(/\([^()]*\)/g) ? CC.replace(/\([^()]*\)/g, (CC => (CC = CC.slice(1, CC.length - 1), QC._HandleParenthesisContent(CC, zC)))) : QC._HandleParenthesisContent(CC, zC)) || "false" !== CC && QC.Eval(CC, zC)
      }
      static _HandleParenthesisContent(CC, zC) {
        let ZC;
        zC = zC || (CC => "true" === CC);
        const wC = CC.split("||");
        for (const bC in wC)
          if (Object.prototype.hasOwnProperty.call(wC, bC)) {
            let CC = QC._SimplifyNegation(wC[bC].trim());
            const nC = CC.split("&&");
            if (nC.length > 1)
              for (let wC = 0; wC < nC.length; ++wC) {
                const bC = QC._SimplifyNegation(nC[wC].trim());
                if (ZC = "true" !== bC && "false" !== bC ? "!" === bC[0] ? !zC(bC.substring(1)) : zC(bC) : "true" === bC, !ZC) {
                  CC = "false";
                  break
                }
              }
            if (ZC || "true" === CC) {
              ZC = !0;
              break
            }
            ZC = "true" !== CC && "false" !== CC ? "!" === CC[0] ? !zC(CC.substring(1)) : zC(CC) : "true" === CC
          } return ZC ? "true" : "false"
      }
      static _SimplifyNegation(CC) {
        return "!true" === (CC = (CC = CC.replace(/^[\s!]+/, (CC => (CC = CC.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? CC = "false" : "!false" === CC && (CC = "true"), CC
      }
    }
    class wC {
      static EnableFor(CC) {
        CC._tags = CC._tags || {}, CC.hasTags = () => wC.HasTags(CC), CC.addTags = zC => wC.AddTagsTo(CC, zC), CC.removeTags = zC => wC.RemoveTagsFrom(CC, zC), CC.matchesTagsQuery = zC => wC.MatchesQuery(CC, zC)
      }
      static DisableFor(CC) {
        delete CC._tags, delete CC.hasTags, delete CC.addTags, delete CC.removeTags, delete CC.matchesTagsQuery
      }
      static HasTags(CC) {
        if (!CC._tags) return !1;
        const zC = CC._tags;
        for (const ZC in zC)
          if (Object.prototype.hasOwnProperty.call(zC, ZC)) return !0;
        return !1
      }
      static GetTags(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!CC._tags) return null;
        if (zC) {
          const zC = [];
          for (const ZC in CC._tags) Object.prototype.hasOwnProperty.call(CC._tags, ZC) && !0 === CC._tags[ZC] && zC.push(ZC);
          return zC.join(" ")
        }
        return CC._tags
      }
      static AddTagsTo(CC, zC) {
        if (!zC) return;
        if ("string" !== typeof zC) return;
        const ZC = zC.split(" ");
        for (const QC of ZC) wC._AddTagTo(CC, QC)
      }
      static _AddTagTo(CC, zC) {
        "" !== (zC = zC.trim()) && "true" !== zC && "false" !== zC && (zC.match(/[\s]/) || zC.match(/^([!]|([|]|[&]){2})/) || (wC.EnableFor(CC), CC._tags[zC] = !0))
      }
      static RemoveTagsFrom(CC, zC) {
        if (!wC.HasTags(CC)) return;
        const ZC = zC.split(" ");
        for (const QC in ZC) wC._RemoveTagFrom(CC, ZC[QC])
      }
      static _RemoveTagFrom(CC, zC) {
        delete CC._tags[zC]
      }
      static MatchesQuery(CC, zC) {
        return void 0 === zC || ("" === zC ? wC.HasTags(CC) : QC.Eval(zC, (zC => wC.HasTags(CC) && CC._tags[zC])))
      }
    }
  },
  39962: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(39959),
      wC = ZC(36987);
    class bC {
      constructor(CC) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new wC.d, this._scene = CC
      }
      _prepareBuffers() {
        if (this._vertexBuffers[QC.k.PositionKind]) return;
        const CC = [];
        CC.push(1, 1), CC.push(-1, 1), CC.push(-1, -1), CC.push(1, -1), this._vertexBuffers[QC.k.PositionKind] = new QC.k(this._scene.mg(), CC, QC.k.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const CC = [];
        CC.push(0), CC.push(1), CC.push(2), CC.push(0), CC.push(2), CC.push(3), this._indexBuffer = this._scene.mg().createIndexBuffer(CC)
      }
      _getActivePostProcesses(CC) {
        const zC = this._activePostProcesses;
        zC.length = 0;
        for (let ZC = 0; ZC < CC.length; ZC++) {
          const QC = CC[ZC];
          QC && zC.push(QC)
        }
        return zC
      }
      _rebuild() {
        const CC = this._vertexBuffers[QC.k.PositionKind];
        CC && (CC._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const ZC = this._scene.activeCamera;
        return !!ZC && (zC = zC || this._getActivePostProcesses(ZC._postProcesses), !(!zC || 0 === zC.length || !this._scene.postProcessesEnabled) && (zC[0].activate(ZC, CC, null !== zC && void 0 !== zC), !0))
      }
      directRender(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          bC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : CC.length;
        const fC = this._scene.mg();
        for (let oC = 0; oC < nC; oC++) {
          oC < CC.length - 1 ? CC[oC + 1].activate(this._scene.activeCamera || this._scene, zC?.texture) : (zC ? fC.bindFramebuffer(zC, QC, void 0, void 0, ZC, wC) : bC || fC.restoreDefaultFramebuffer(), fC._debugInsertMarker?.(`post process ${CC[oC].name} output`));
          const nC = CC[oC],
            qC = nC.apply();
          qC && (nC.onBeforeRenderObservable.notifyObservers(qC), this._prepareBuffers(), fC.bindBuffers(this._vertexBuffers, this._indexBuffer, qC), fC.drawElementsType(0, 0, 6), nC.onAfterRenderObservable.notifyObservers(qC))
        }
        fC.setDepthBuffer(!0), fC.setDepthWrite(!0)
      }
      _finalizeFrame(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bC = this._scene.activeCamera;
        if (!bC) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (QC = QC || this._getActivePostProcesses(bC._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const nC = this._scene.mg();
        for (let fC = 0, oC = QC.length; fC < oC; fC++) {
          const qC = QC[fC];
          if (fC < oC - 1 ? qC._outputTexture = QC[fC + 1].activate(bC, zC?.texture) : (zC ? (nC.bindFramebuffer(zC, ZC, void 0, void 0, wC), qC._outputTexture = zC) : (nC.restoreDefaultFramebuffer(), qC._outputTexture = null), nC._debugInsertMarker?.(`post process ${QC[fC].name} output`)), CC) break;
          const FC = qC.apply();
          FC && (qC.onBeforeRenderObservable.notifyObservers(FC), this._prepareBuffers(), nC.bindBuffers(this._vertexBuffers, this._indexBuffer, FC), nC.drawElementsType(0, 0, 6), qC.onAfterRenderObservable.notifyObservers(FC))
        }
        nC.setDepthBuffer(!0), nC.setDepthWrite(!0), nC.setAlphaMode(0)
      }
      dispose() {
        const CC = this._vertexBuffers[QC.k.PositionKind];
        CC && (CC.dispose(), this._vertexBuffers[QC.k.PositionKind] = null), this._indexBuffer && (this._scene.mg()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  39984: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => qC
    });
    var QC = ZC(39925),
      wC = ZC(36963);
    const bC = [],
      nC = [];
    let fC = !1;

    function oC(CC, zC) {
      for (; CC.length < zC;) CC.push(void 0)
    }
    class qC {
      set opaqueSortCompareFn(CC) {
        this._opaqueSortCompareFn = CC || qC.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(CC) {
        this._alphaTestSortCompareFn = CC || qC.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(CC) {
        this._transparentSortCompareFn = CC || qC.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          bC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = CC, this._opaqueSubMeshes = new QC.i(256), this._transparentSubMeshes = new QC.i(256), this._alphaTestSubMeshes = new QC.i(256), this._depthOnlySubMeshes = new QC.i(256), this._particleSystems = new QC.i(256), this._spriteManagers = new QC.i(256), this._empty = !0, this._edgesRenderers = new QC.e(16), this.disableDepthPrePass = !1, this._scene = zC, this.opaqueSortCompareFn = ZC, this.alphaTestSortCompareFn = wC, this.transparentSortCompareFn = bC
      }
      render(CC, zC, ZC, QC) {
        let wC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          nC = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          fC = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          oC = arguments.length > 8 ? arguments[8] : void 0;
        if (CC) return void CC(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const qC = this._scene.mg();
        wC && 0 !== this._depthOnlySubMeshes.length && (qC.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), qC.setColorWrite(!0)), bC && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), nC && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const FC = qC.getStencilBuffer();
        if (qC.setStencilBuffer(!1), zC && this._renderSprites(), ZC && this._renderParticles(QC), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), fC && (oC || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (qC.setStencilBuffer(FC), oC) oC(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const CC = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            CC.length && this._renderTransparent(CC)
          } else this._renderTransparent(this._transparentSubMeshes);
          qC.setAlphaMode(0)
        }
        if (qC.setStencilBuffer(!1), bC && this._edgesRenderers.length) {
          for (let CC = 0; CC < this._edgesRenderers.length; CC++) this._edgesRenderers.data[CC].render();
          qC.setAlphaMode(0)
        }
        qC.setStencilBuffer(FC)
      }
      _renderOpaqueSorted(CC) {
        qC._RenderSorted(CC, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(CC) {
        qC._RenderSorted(CC, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(CC) {
        qC._RenderSorted(CC, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(CC, zC, ZC, QC, bC) {
        let FC, WC = 0;
        const NC = ZC ? ZC.globalPosition : qC._ZeroVector;
        if (QC && zC !== qC.PainterSortCompare)
          for (; WC < CC.length; WC++) FC = CC.data[WC], FC._alphaIndex = FC.getMesh().alphaIndex, FC._distanceToCamera = wC.r.Distance(FC.WE().IQC.centerWorld, NC);
        const MC = CC.length;
        let gC = CC.data;
        const SC = MC !== gC.length && !fC;
        if (SC) {
          for (fC = !0, oC(nC, MC), WC = 0; WC < MC; WC++) nC[WC] = gC[WC];
          gC = nC
        } else MC !== gC.length && (gC = gC.slice(0, MC));
        try {
          zC && qC._StableSort(gC, MC, zC), qC._DrawSorted(gC, MC, QC, bC)
        } finally {
          SC && (nC.fill(void 0, 0, MC), fC = !1)
        }
      }
      static _DrawSorted(CC, zC, ZC, QC) {
        let wC;
        const bC = CC[0].getMesh().Km();
        for (let nC = 0; nC < zC; nC++) {
          if (wC = CC[nC], bC._activeMeshesFrozenButKeepClipping && !wC.isInFrustum(bC._frustumPlanes)) continue;
          let zC = !1;
          if (ZC) {
            const CC = wC.cg();
            if (CC && CC.needDepthPrePass && !QC) {
              zC = !0;
              const ZC = CC.Km().mg();
              ZC.setColorWrite(!1), ZC.setAlphaMode(0), wC.render(!1), ZC.setColorWrite(!0)
            }
          }
          const fC = wC._renderingMesh;
          !zC && fC._renderRunFollower(wC, ZC) || wC.render(ZC)
        }
      }
      static _StableSort(CC, zC, ZC) {
        for (let QC = 0; QC < zC; QC += 16) {
          const wC = Math.min(QC + 16, zC);
          for (let zC = QC + 1; zC < wC; zC++) {
            const wC = CC[zC];
            let bC = QC,
              nC = zC;
            for (; bC < nC;) {
              const zC = bC + nC >>> 1;
              ZC(wC, CC[zC]) < 0 ? nC = zC : bC = zC + 1
            }
            for (let ZC = zC; ZC > bC; ZC--) CC[ZC] = CC[ZC - 1];
            CC[bC] = wC
          }
        }
        if (!(zC <= 16)) {
          oC(bC, zC);
          try {
            let QC = CC,
              wC = bC;
            for (let CC = 16; CC < zC; CC *= 2) {
              for (let nC = 0; nC < zC; nC += 2 * CC) {
                const bC = Math.min(nC + CC, zC),
                  fC = Math.min(nC + 2 * CC, zC);
                let oC = nC,
                  qC = bC,
                  FC = nC;
                if (bC < fC && ZC(QC[bC], QC[bC - 1]) < 0)
                  for (; oC < bC && qC < fC;) wC[FC++] = ZC(QC[qC], QC[oC]) < 0 ? QC[qC++] : QC[oC++];
                for (; oC < bC;) wC[FC++] = QC[oC++];
                for (; qC < fC;) wC[FC++] = QC[qC++]
              }
              const bC = wC;
              wC = QC, QC = bC
            }
            if (QC !== CC)
              for (let ZC = 0; ZC < zC; ZC++) CC[ZC] = QC[ZC]
          } finally {
            bC.fill(void 0, 0, zC)
          }
        }
      }
      static defaultTransparentSortCompare(CC, zC) {
        return CC._alphaIndex > zC._alphaIndex ? 1 : CC._alphaIndex < zC._alphaIndex ? -1 : qC.backToFrontSortCompare(CC, zC)
      }
      static backToFrontSortCompare(CC, zC) {
        return CC._distanceToCamera < zC._distanceToCamera ? 1 : CC._distanceToCamera > zC._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(CC, zC) {
        return CC._distanceToCamera < zC._distanceToCamera ? -1 : CC._distanceToCamera > zC._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(CC, zC) {
        const ZC = CC.getMesh(),
          QC = zC.getMesh();
        return ZC.material && QC.material ? ZC.material.uniqueId - QC.material.uniqueId : ZC.uniqueId - QC.uniqueId
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
      dispatch(CC, zC, ZC) {
        void 0 === zC && (zC = CC.getMesh()), void 0 === ZC && (ZC = CC.cg()), null !== ZC && void 0 !== ZC && (ZC.needAlphaBlendingForMesh(zC) ? this._transparentSubMeshes.push(CC) : ZC.needAlphaTestingForMesh(zC) ? (ZC.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(CC), this._alphaTestSubMeshes.push(CC)) : (ZC.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(CC), this._opaqueSubMeshes.push(CC)), zC._renderingGroup = this, zC._edgesRenderer && zC.isEnabled() && zC.isVisible && zC._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(zC._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(CC) {
        this._spriteManagers.push(CC), this._empty = !1
      }
      dispatchParticles(CC) {
        this._particleSystems.push(CC), this._empty = !1
      }
      _renderParticles(CC) {
        if (0 === this._particleSystems.length) return;
        const zC = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let ZC = 0; ZC < this._particleSystems.length; ZC++) {
          const QC = this._particleSystems.data[ZC];
          if (0 === (zC && zC.layerMask & QC.layerMask)) continue;
          const wC = QC.emitter;
          wC.position && CC && -1 === CC.indexOf(wC) || this._scene._activeParticles.addCount(QC.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const CC = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let zC = 0; zC < this._spriteManagers.length; zC++) {
          const ZC = this._spriteManagers.data[zC];
          0 !== (CC && CC.layerMask & ZC.layerMask) && ZC.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    qC._ZeroVector = wC.r.Zero()
  },
  39978: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => bC
    });
    var QC = ZC(39984);
    class wC {}
    class bC {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(CC) {
        this._disableDepthPrePass = CC;
        for (const zC of this._renderingGroups) zC.disableDepthPrePass = CC
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(CC) {
        CC !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = CC, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const CC of this._scene.meshes)
          if (CC.Zx)
            for (const zC of CC.Zx) zC._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const CC of this._scene.spriteManagers) CC._wasDispatched = !1;
        for (const CC of this._scene.Ix) CC._wasDispatched = !1
      }
      constructor(CC) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new wC, this._maintainStateBetweenFrames = !1, this._scene = CC;
        for (let zC = bC.MIN_RENDERINGGROUPS; zC < bC.MAX_RENDERINGGROUPS; zC++) this._autoClearDepthStencil[zC] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(CC) {
        const zC = CC || 0;
        return this._prepareRenderingGroup(zC), this._renderingGroups[zC]
      }
      _clearDepthStencilBuffer() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.mg().clear(null, !1, CC, zC), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(CC, zC, ZC, QC) {
        let wC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          nC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          fC = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          oC = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          qC = arguments.length > 8 ? arguments[8] : void 0,
          FC = arguments.length > 9 ? arguments[9] : void 0;
        const WC = this._renderingGroupInfo;
        WC.sS = this._scene, WC.camera = this._scene.activeCamera, WC.renderingManager = this;
        const NC = FC ?? this._scene.spriteManagers;
        if (NC && QC)
          for (let bC = 0; bC < NC.length; bC++) {
            const CC = NC[bC];
            this.dispatchSprites(CC)
          }
        for (let MC = bC.MIN_RENDERINGGROUPS; MC < bC.MAX_RENDERINGGROUPS; MC++) {
          this._depthStencilBufferAlreadyCleaned = MC === bC.MIN_RENDERINGGROUPS;
          const FC = this._renderingGroups[MC];
          if (!FC || FC._empty) continue;
          const NC = 1 << MC;
          if (WC.renderingGroupId = MC, this._scene.onBeforeRenderingGroupObservable.notifyObservers(WC, NC), bC.AUTOCLEAR) {
            const CC = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(MC) : this._autoClearDepthStencil[MC];
            CC && CC.autoClear && this._clearDepthStencilBuffer(CC.depth, CC.stencil)
          }
          for (let CC = 0, zC = this._scene._beforeRenderingGroupDrawStage; CC < zC.length; CC++) {
            zC[CC].action(MC)
          }
          FC.render(CC, QC, ZC, zC, wC, nC, fC, oC, qC);
          for (let CC = 0, zC = this._scene._afterRenderingGroupDrawStage; CC < zC.length; CC++) {
            zC[CC].action(MC)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(WC, NC)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let CC = bC.MIN_RENDERINGGROUPS; CC < bC.MAX_RENDERINGGROUPS; CC++) {
            const zC = this._renderingGroups[CC];
            zC && zC.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let CC = bC.MIN_RENDERINGGROUPS; CC < bC.MAX_RENDERINGGROUPS; CC++) {
            const zC = this._renderingGroups[CC];
            zC && zC.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let CC = bC.MIN_RENDERINGGROUPS; CC < bC.MAX_RENDERINGGROUPS; CC++) {
          const zC = this._renderingGroups[CC];
          zC && zC.dispose()
        }
      }
      _prepareRenderingGroup(CC) {
        void 0 === this._renderingGroups[CC] && (this._renderingGroups[CC] = new QC.b(CC, this._scene, this._customOpaqueSortCompareFn[CC], this._customAlphaTestSortCompareFn[CC], this._customTransparentSortCompareFn[CC]), this._renderingGroups[CC].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(CC) {
        this.maintainStateBetweenFrames && CC._wasDispatched || (CC._wasDispatched = !0, this.getRenderingGroup(CC.renderingGroupId).dispatchSprites(CC))
      }
      dispatchParticles(CC) {
        this.maintainStateBetweenFrames && CC._wasDispatched || (CC._wasDispatched = !0, this.getRenderingGroup(CC.renderingGroupId).dispatchParticles(CC))
      }
      dispatch(CC, zC, ZC) {
        void 0 === zC && (zC = CC.getMesh()), this.maintainStateBetweenFrames && CC._wasDispatched || (CC._wasDispatched = !0, this.getRenderingGroup(zC.renderingGroupId).dispatch(CC, zC, ZC))
      }
      setRenderingOrder(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[CC] = zC, this._customAlphaTestSortCompareFn[CC] = ZC, this._customTransparentSortCompareFn[CC] = QC, this._renderingGroups[CC]) {
          const zC = this._renderingGroups[CC];
          zC.opaqueSortCompareFn = this._customOpaqueSortCompareFn[CC], zC.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[CC], zC.transparentSortCompareFn = this._customTransparentSortCompareFn[CC]
        }
      }
      setRenderingAutoClearDepthStencil(CC, zC) {
        let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[CC] = {
          autoClear: zC,
          depth: ZC,
          stencil: QC
        }
      }
      getAutoClearDepthStencilSetup(CC) {
        return this._autoClearDepthStencil[CC]
      }
    }
    bC.MAX_RENDERINGGROUPS = 4, bC.MIN_RENDERINGGROUPS = 0, bC.AUTOCLEAR = !0
  },
  39735: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    class QC {
      constructor(CC) {
        this._supportBlendParametersPerTarget = CC, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(CC) {
        this.setAlphaBlend(CC)
      }
      setAlphaBlend(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[zC] !== CC && (CC ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[zC] = CC, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(CC, zC, ZC, QC) {
        this._blendConstants[0] === CC && this._blendConstants[1] === zC && this._blendConstants[2] === ZC && this._blendConstants[3] === QC || (this._blendConstants[0] = CC, this._blendConstants[1] = zC, this._blendConstants[2] = ZC, this._blendConstants[3] = QC, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(CC, zC, ZC, QC) {
        const wC = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[wC + 0] === CC && this._blendFunctionParameters[wC + 1] === zC && this._blendFunctionParameters[wC + 2] === ZC && this._blendFunctionParameters[wC + 3] === QC || (this._blendFunctionParameters[wC + 0] = CC, this._blendFunctionParameters[wC + 1] = zC, this._blendFunctionParameters[wC + 2] = ZC, this._blendFunctionParameters[wC + 3] = QC, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(CC, zC) {
        const ZC = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[ZC + 0] === CC && this._blendEquationParameters[ZC + 1] === zC || (this._blendEquationParameters[ZC + 0] = CC, this._blendEquationParameters[ZC + 1] = zC, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== zC && (this._numTargets = zC, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== ZC && (this._blendDisabledTargetsMask = ZC, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (CC.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === zC || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (zC > 1 && 0 !== ZC && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & ZC) ? CC.enable(CC.BLEND) : CC.disable(CC.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (CC.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (CC.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const QC = CC;
        if (this._isAlphaBlendDirty) {
          for (let wC = 0; wC < zC; wC++) {
            const zC = wC < this._numTargetEnabled ? wC : 0;
            this._alphaBlend[zC] && 0 === (ZC & 1 << wC) ? QC.enableIndexed(CC.BLEND, wC) : QC.disableIndexed(CC.BLEND, wC)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let CC = 0; CC < zC; CC++) {
            const zC = CC < this._numTargetEnabled ? 4 * CC : 0;
            QC.blendFuncSeparateIndexed(CC, this._blendFunctionParameters[zC + 0], this._blendFunctionParameters[zC + 1], this._blendFunctionParameters[zC + 2], this._blendFunctionParameters[zC + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let CC = 0; CC < zC; CC++) {
            const zC = CC < this._numTargetEnabled ? 2 * CC : 0;
            QC.blendEquationSeparateIndexed(CC, this._blendEquationParameters[zC + 0], this._blendEquationParameters[zC + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(CC, zC) {
        let ZC = 32774;
        switch (CC) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, zC);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, zC);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, zC);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, zC);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, zC);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, zC);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, zC);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, zC);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, zC);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, zC);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, zC);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, zC);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, zC);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, zC);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, zC);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, zC);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, zC), ZC = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, zC), ZC = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, zC);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, zC)
        }
        this.setAlphaEquationParameters(ZC, ZC, zC)
      }
    }
  },
  40013: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    class QC {}
    QC._IsPickingAvailable = !1
  },
  39910: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => fZ,
      g: () => bZ
    });
    var QC = ZC(39913),
      wC = ZC(39712),
      bC = ZC(39730),
      nC = ZC(36987),
      fC = ZC(39925);
    class oC {
      constructor() {
        this._count = 0, this._data = {}
      }
      Av(CC) {
        this.clear(), CC.forEach(((CC, zC) => this.add(CC, zC)))
      }
      get(CC) {
        const zC = this._data[CC];
        if (void 0 !== zC) return zC
      }
      getOrAddWithFactory(CC, zC) {
        let ZC = this.get(CC);
        return void 0 !== ZC || (ZC = zC(CC), ZC && this.add(CC, ZC)), ZC
      }
      getOrAdd(CC, zC) {
        const ZC = this.get(CC);
        return void 0 !== ZC ? ZC : (this.add(CC, zC), zC)
      }
      contains(CC) {
        return void 0 !== this._data[CC]
      }
      add(CC, zC) {
        return void 0 === this._data[CC] && (this._data[CC] = zC, ++this._count, !0)
      }
      set(CC, zC) {
        return void 0 !== this._data[CC] && (this._data[CC] = zC, !0)
      }
      getAndRemove(CC) {
        const zC = this.get(CC);
        return void 0 !== zC ? (delete this._data[CC], --this._count, zC) : null
      }
      remove(CC) {
        return !!this.contains(CC) && (delete this._data[CC], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(CC) {
        for (const zC in this._data) {
          CC(zC, this._data[zC])
        }
      }
      first(CC) {
        for (const zC in this._data) {
          const ZC = CC(zC, this._data[zC]);
          if (ZC) return ZC
        }
        return null
      }
    }
    var qC = ZC(39851),
      FC = ZC(36963),
      WC = ZC(39932),
      NC = ZC(39950),
      MC = ZC(39953);
    class gC {
      constructor(CC, zC, ZC, QC, wC, bC) {
        this.source = CC, this.pointerX = zC, this.pointerY = ZC, this.meshUnderPointer = QC, this.sourceEvent = wC, this.additionalData = bC
      }
      static CreateNew(CC, zC, ZC) {
        const QC = CC.Km();
        return new gC(CC, QC.pointerX, QC.pointerY, QC.meshUnderPointer || CC, zC, ZC)
      }
      static CreateNewFromSprite(CC, zC, ZC, QC) {
        return new gC(CC, zC.pointerX, zC.pointerY, zC.meshUnderPointer, ZC, QC)
      }
      static CreateNewFromScene(CC, zC) {
        return new gC(null, CC.pointerX, CC.pointerY, CC.meshUnderPointer, zC)
      }
      static CreateNewFromPrimitive(CC, zC, ZC, QC) {
        return new gC(CC, zC.x, zC.y, null, ZC, QC)
      }
    }
    var SC = ZC(39962),
      pC = ZC(39969),
      PC = ZC(39978),
      GC = ZC(39990),
      RC = ZC(39680),
      AC = ZC(36985),
      xC = ZC(39694),
      JC = ZC(39993);
    class IC {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const CC in IC.Triggers)
          if (Object.prototype.hasOwnProperty.call(IC.Triggers, CC)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const CC in IC.Triggers)
          if (Object.prototype.hasOwnProperty.call(IC.Triggers, CC)) {
            const zC = parseInt(CC);
            if (zC >= 1 && zC <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(CC) {
        for (const zC in IC.Triggers)
          if (Object.prototype.hasOwnProperty.call(IC.Triggers, zC)) {
            if (parseInt(zC) === CC) return !0
          } return !1
      }
    }
    IC.Triggers = {};
    var iC, vC, eC, hC, KC, YC, dC, mC = ZC(40001);
    ! function(CC) {
      CC[CC.Generic = 0] = "Generic", CC[CC.Keyboard = 1] = "Keyboard", CC[CC.Mouse = 2] = "Mouse", CC[CC.Touch = 3] = "Touch", CC[CC.DualShock = 4] = "DualShock", CC[CC.Xbox = 5] = "Xbox", CC[CC.Switch = 6] = "Switch", CC[CC.DualSense = 7] = "DualSense"
    }(iC || (iC = {})),
    function(CC) {
      CC[CC.Horizontal = 0] = "Horizontal", CC[CC.Vertical = 1] = "Vertical", CC[CC.LeftClick = 2] = "LeftClick", CC[CC.MiddleClick = 3] = "MiddleClick", CC[CC.RightClick = 4] = "RightClick", CC[CC.BrowserBack = 5] = "BrowserBack", CC[CC.BrowserForward = 6] = "BrowserForward", CC[CC.MouseWheelX = 7] = "MouseWheelX", CC[CC.MouseWheelY = 8] = "MouseWheelY", CC[CC.MouseWheelZ = 9] = "MouseWheelZ", CC[CC.Move = 12] = "Move"
    }(vC || (vC = {})),
    function(CC) {
      CC[CC.Horizontal = 0] = "Horizontal", CC[CC.Vertical = 1] = "Vertical", CC[CC.LeftClick = 2] = "LeftClick", CC[CC.MiddleClick = 3] = "MiddleClick", CC[CC.RightClick = 4] = "RightClick", CC[CC.BrowserBack = 5] = "BrowserBack", CC[CC.BrowserForward = 6] = "BrowserForward", CC[CC.MouseWheelX = 7] = "MouseWheelX", CC[CC.MouseWheelY = 8] = "MouseWheelY", CC[CC.MouseWheelZ = 9] = "MouseWheelZ", CC[CC.DeltaHorizontal = 10] = "DeltaHorizontal", CC[CC.DeltaVertical = 11] = "DeltaVertical"
    }(eC || (eC = {})),
    function(CC) {
      CC[CC.Cross = 0] = "Cross", CC[CC.Circle = 1] = "Circle", CC[CC.Square = 2] = "Square", CC[CC.Triangle = 3] = "Triangle", CC[CC.L1 = 4] = "L1", CC[CC.R1 = 5] = "R1", CC[CC.L2 = 6] = "L2", CC[CC.R2 = 7] = "R2", CC[CC.Share = 8] = "Share", CC[CC.Options = 9] = "Options", CC[CC.L3 = 10] = "L3", CC[CC.R3 = 11] = "R3", CC[CC.DPadUp = 12] = "DPadUp", CC[CC.DPadDown = 13] = "DPadDown", CC[CC.DPadLeft = 14] = "DPadLeft", CC[CC.DPadRight = 15] = "DPadRight", CC[CC.Home = 16] = "Home", CC[CC.TouchPad = 17] = "TouchPad", CC[CC.LStickXAxis = 18] = "LStickXAxis", CC[CC.LStickYAxis = 19] = "LStickYAxis", CC[CC.RStickXAxis = 20] = "RStickXAxis", CC[CC.RStickYAxis = 21] = "RStickYAxis"
    }(hC || (hC = {})),
    function(CC) {
      CC[CC.Cross = 0] = "Cross", CC[CC.Circle = 1] = "Circle", CC[CC.Square = 2] = "Square", CC[CC.Triangle = 3] = "Triangle", CC[CC.L1 = 4] = "L1", CC[CC.R1 = 5] = "R1", CC[CC.L2 = 6] = "L2", CC[CC.R2 = 7] = "R2", CC[CC.Create = 8] = "Create", CC[CC.Options = 9] = "Options", CC[CC.L3 = 10] = "L3", CC[CC.R3 = 11] = "R3", CC[CC.DPadUp = 12] = "DPadUp", CC[CC.DPadDown = 13] = "DPadDown", CC[CC.DPadLeft = 14] = "DPadLeft", CC[CC.DPadRight = 15] = "DPadRight", CC[CC.Home = 16] = "Home", CC[CC.TouchPad = 17] = "TouchPad", CC[CC.LStickXAxis = 18] = "LStickXAxis", CC[CC.LStickYAxis = 19] = "LStickYAxis", CC[CC.RStickXAxis = 20] = "RStickXAxis", CC[CC.RStickYAxis = 21] = "RStickYAxis"
    }(KC || (KC = {})),
    function(CC) {
      CC[CC.A = 0] = "A", CC[CC.B = 1] = "B", CC[CC.X = 2] = "X", CC[CC.Y = 3] = "Y", CC[CC.LB = 4] = "LB", CC[CC.RB = 5] = "RB", CC[CC.LT = 6] = "LT", CC[CC.RT = 7] = "RT", CC[CC.Back = 8] = "Back", CC[CC.Start = 9] = "Start", CC[CC.LS = 10] = "LS", CC[CC.RS = 11] = "RS", CC[CC.DPadUp = 12] = "DPadUp", CC[CC.DPadDown = 13] = "DPadDown", CC[CC.DPadLeft = 14] = "DPadLeft", CC[CC.DPadRight = 15] = "DPadRight", CC[CC.Home = 16] = "Home", CC[CC.LStickXAxis = 17] = "LStickXAxis", CC[CC.LStickYAxis = 18] = "LStickYAxis", CC[CC.RStickXAxis = 19] = "RStickXAxis", CC[CC.RStickYAxis = 20] = "RStickYAxis"
    }(YC || (YC = {})),
    function(CC) {
      CC[CC.B = 0] = "B", CC[CC.A = 1] = "A", CC[CC.Y = 2] = "Y", CC[CC.X = 3] = "X", CC[CC.L = 4] = "L", CC[CC.R = 5] = "R", CC[CC.ZL = 6] = "ZL", CC[CC.ZR = 7] = "ZR", CC[CC.Minus = 8] = "Minus", CC[CC.Plus = 9] = "Plus", CC[CC.LS = 10] = "LS", CC[CC.RS = 11] = "RS", CC[CC.DPadUp = 12] = "DPadUp", CC[CC.DPadDown = 13] = "DPadDown", CC[CC.DPadLeft = 14] = "DPadLeft", CC[CC.DPadRight = 15] = "DPadRight", CC[CC.Home = 16] = "Home", CC[CC.Capture = 17] = "Capture", CC[CC.LStickXAxis = 18] = "LStickXAxis", CC[CC.LStickYAxis = 19] = "LStickYAxis", CC[CC.RStickXAxis = 20] = "RStickXAxis", CC[CC.RStickYAxis = 21] = "RStickYAxis"
    }(dC || (dC = {}));
    var HC = ZC(40010);
    class EC {
      static CreateDeviceEvent(CC, zC, ZC, QC, wC, bC, nC) {
        switch (CC) {
          case iC.Keyboard:
            return this._CreateKeyboardEvent(ZC, QC, wC, bC);
          case iC.Mouse:
            if (ZC === vC.MouseWheelX || ZC === vC.MouseWheelY || ZC === vC.MouseWheelZ) return this._CreateWheelEvent(CC, zC, ZC, QC, wC, bC);
          case iC.Touch:
            return this._CreatePointerEvent(CC, zC, ZC, QC, wC, bC, nC);
          default:
            throw `Unable to generate event for device ${iC[CC]}`
        }
      }
      static _CreatePointerEvent(CC, zC, ZC, QC, wC, bC, nC) {
        const fC = this._CreateMouseEvent(CC, zC, ZC, QC, wC, bC);
        CC === iC.Mouse ? (fC.deviceType = iC.Mouse, fC.pointerId = 1, fC.pointerType = "mouse") : (fC.deviceType = iC.Touch, fC.pointerId = nC ?? zC, fC.pointerType = "touch");
        let oC = 0;
        return oC += wC.pollInput(CC, zC, vC.LeftClick), oC += 2 * wC.pollInput(CC, zC, vC.RightClick), oC += 4 * wC.pollInput(CC, zC, vC.MiddleClick), fC.buttons = oC, ZC === vC.Move ? fC.type = "pointermove" : ZC >= vC.LeftClick && ZC <= vC.RightClick && (fC.type = 1 === QC ? "pointerdown" : "pointerup", fC.button = ZC - 2), fC
      }
      static _CreateWheelEvent(CC, zC, ZC, QC, wC, bC) {
        const nC = this._CreateMouseEvent(CC, zC, ZC, QC, wC, bC);
        switch (nC.pointerId = 1, nC.type = "wheel", nC.deltaMode = HC.d.DOM_DELTA_PIXEL, nC.deltaX = 0, nC.deltaY = 0, nC.deltaZ = 0, ZC) {
          case vC.MouseWheelX:
            nC.deltaX = QC;
            break;
          case vC.MouseWheelY:
            nC.deltaY = QC;
            break;
          case vC.MouseWheelZ:
            nC.deltaZ = QC
        }
        return nC
      }
      static _CreateMouseEvent(CC, zC, ZC, QC, wC, bC) {
        const nC = this._CreateEvent(bC),
          fC = wC.pollInput(CC, zC, vC.Horizontal),
          oC = wC.pollInput(CC, zC, vC.Vertical);
        return bC ? (nC.movementX = 0, nC.movementY = 0, nC.offsetX = nC.movementX - bC.getBoundingClientRect().x, nC.offsetY = nC.movementY - bC.getBoundingClientRect().y) : (nC.movementX = wC.pollInput(CC, zC, 10), nC.movementY = wC.pollInput(CC, zC, 11), nC.offsetX = 0, nC.offsetY = 0), this._CheckNonCharacterKeys(nC, wC), nC.clientX = fC, nC.clientY = oC, nC.x = fC, nC.y = oC, nC.deviceType = CC, nC.deviceSlot = zC, nC.inputIndex = ZC, nC
      }
      static _CreateKeyboardEvent(CC, zC, ZC, QC) {
        const wC = this._CreateEvent(QC);
        return this._CheckNonCharacterKeys(wC, ZC), wC.deviceType = iC.Keyboard, wC.deviceSlot = 0, wC.inputIndex = CC, wC.type = 1 === zC ? "keydown" : "keyup", wC.key = String.fromCharCode(CC), wC.keyCode = CC, wC
      }
      static _CheckNonCharacterKeys(CC, zC) {
        const ZC = zC.isDeviceAvailable(iC.Keyboard),
          QC = ZC && 1 === zC.pollInput(iC.Keyboard, 0, 18),
          wC = ZC && 1 === zC.pollInput(iC.Keyboard, 0, 17),
          bC = ZC && (1 === zC.pollInput(iC.Keyboard, 0, 91) || 1 === zC.pollInput(iC.Keyboard, 0, 92) || 1 === zC.pollInput(iC.Keyboard, 0, 93)),
          nC = ZC && 1 === zC.pollInput(iC.Keyboard, 0, 16);
        CC.altKey = QC, CC.ctrlKey = wC, CC.metaKey = bC, CC.shiftKey = nC
      }
      static _CreateEvent(CC) {
        const zC = {
          preventDefault: () => {}
        };
        return zC.target = CC, zC
      }
    }
    class lC {
      constructor(CC, zC, ZC) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(CC, zC, ((CC, zC, QC, wC) => {
          const bC = EC.CreateDeviceEvent(CC, zC, QC, wC, this);
          ZC(CC, zC, bC)
        })) : this._createDummyNativeInput()
      }
      pollInput(CC, zC, ZC) {
        return this._nativeInput.pollInput(CC, zC, ZC)
      }
      isDeviceAvailable(CC) {
        return CC === iC.Mouse || CC === iC.Touch
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
    const XC = Object.keys(vC).length / 2;
    class cC {
      constructor(CC, zC, ZC, wC) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = QC.g.IsSafari(), this._usingMacOs = (0, RC.h)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = CC => {}, this._keyboardUpEvent = CC => {}, this._keyboardBlurEvent = CC => {}, this._pointerMoveEvent = CC => {}, this._pointerDownEvent = CC => {}, this._pointerUpEvent = CC => {}, this._pointerCancelEvent = CC => {}, this._pointerCancelTouch = CC => {}, this._pointerLeaveEvent = CC => {}, this._pointerWheelEvent = CC => {}, this._pointerBlurEvent = CC => {}, this._pointerMacOsChromeOutEvent = CC => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, RC.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, RC.h)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = CC => {}, this._gamepadDisconnectedEvent = CC => {}, this._eventPrefix = QC.g.GetPointerPrefix(CC), this._engine = CC, this._onDeviceConnected = zC, this._onDeviceDisconnected = ZC, this._onInputChanged = wC, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(CC, zC, ZC) {
        const wC = this._inputs[CC][zC];
        if (!wC) throw `Unable to find device ${iC[CC]}`;
        CC >= iC.DualShock && CC <= iC.DualSense && this._updateDevice(CC, zC, ZC);
        const bC = wC[ZC];
        if (void 0 === bC) throw `Unable to find input ${ZC} for device ${iC[CC]} in slot ${zC}`;
        return ZC === vC.Move && QC.g.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), bC
      }
      isDeviceAvailable(CC) {
        return void 0 !== this._inputs[CC]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const CC = this?._engine.getInputElement();
        if (CC && (!this._eventsAttached || this._elementToAttachTo !== CC)) {
          if (this._disableEvents(), this._inputs)
            for (const CC of this._inputs)
              if (CC)
                for (const zC in CC) {
                  const ZC = CC[+zC];
                  if (ZC)
                    for (let CC = 0; CC < ZC.length; CC++) ZC[CC] = 0
                }
          this._elementToAttachTo = CC, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const CC = navigator.getGamepads();
          for (const zC of CC) zC && this._addGamePad(zC)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(iC.Mouse, 0, 0, 0)
      }
      _addGamePad(CC) {
        const zC = this._getGamepadDeviceType(CC.id),
          ZC = CC.index;
        this._gamepads = this._gamepads || new Array(CC.index + 1), this._registerDevice(zC, ZC, CC.buttons.length + CC.axes.length), this._gamepads[ZC] = zC
      }
      _addPointerDevice(CC, zC, ZC, QC) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(CC, zC, XC);
        const wC = this._inputs[CC][zC];
        wC[0] = ZC, wC[1] = QC
      }
      _registerDevice(CC, zC, ZC) {
        if (void 0 === zC) throw `Unable to register device ${iC[CC]} to undefined slot.`;
        if (this._inputs[CC] || (this._inputs[CC] = {}), !this._inputs[CC][zC]) {
          const QC = new Array(ZC);
          QC.fill(0), this._inputs[CC][zC] = QC, this._onDeviceConnected(CC, zC)
        }
      }
      _unregisterDevice(CC, zC) {
        this._inputs[CC][zC] && (delete this._inputs[CC][zC], this._onDeviceDisconnected(CC, zC))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = CC => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(iC.Keyboard, 0, 255));
          const zC = this._inputs[iC.Keyboard][0];
          if (zC) {
            zC[CC.keyCode] = 1;
            const ZC = CC;
            ZC.inputIndex = CC.keyCode, this._usingMacOs && CC.metaKey && "Meta" !== CC.key && (this._metaKeys.includes(CC.keyCode) || this._metaKeys.push(CC.keyCode)), this._onInputChanged(iC.Keyboard, 0, ZC)
          }
        }, this._keyboardUpEvent = CC => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(iC.Keyboard, 0, 255));
          const zC = this._inputs[iC.Keyboard][0];
          if (zC) {
            zC[CC.keyCode] = 0;
            const ZC = CC;
            if (ZC.inputIndex = CC.keyCode, this._usingMacOs && "Meta" === CC.key && this._metaKeys.length > 0) {
              for (const CC of this._metaKeys) {
                const ZC = EC.CreateDeviceEvent(iC.Keyboard, 0, CC, 0, this, this._elementToAttachTo);
                zC[CC] = 0, this._onInputChanged(iC.Keyboard, 0, ZC)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(iC.Keyboard, 0, ZC)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const CC = this._inputs[iC.Keyboard][0];
            for (let zC = 0; zC < CC.length; zC++)
              if (0 !== CC[zC]) {
                CC[zC] = 0;
                const ZC = EC.CreateDeviceEvent(iC.Keyboard, 0, zC, 0, this, this._elementToAttachTo);
                this._onInputChanged(iC.Keyboard, 0, ZC)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, RC.h)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let QC = 0; QC < this._maxTouchPoints; QC++) this._activeTouchIds[QC] = -1;
        this._pointerMoveEvent = CC => {
          const zC = this._getPointerType(CC);
          let ZC = zC === iC.Mouse ? 0 : this._activeTouchIds.indexOf(CC.pointerId);
          if (zC === iC.Touch && -1 === ZC) {
            if (0 === CC.buttons) return;
            const wC = this._activeTouchIds.indexOf(-1);
            if (!(wC >= 0)) return void QC.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            ZC = wC, this._activeTouchIds[wC] = CC.pointerId, this._onDeviceConnected(zC, ZC)
          }
          this._inputs[zC] || (this._inputs[zC] = {}), this._inputs[zC][ZC] || this._addPointerDevice(zC, ZC, CC.clientX, CC.clientY);
          const wC = this._inputs[zC][ZC];
          if (wC) {
            const QC = CC;
            QC.inputIndex = vC.Move, wC[vC.Horizontal] = CC.clientX, wC[vC.Vertical] = CC.clientY, zC === iC.Touch && 0 === wC[vC.LeftClick] && (wC[vC.LeftClick] = 1), void 0 === CC.pointerId && (CC.pointerId = this._mouseId), this._onInputChanged(zC, ZC, QC), this._usingSafari || -1 === CC.button || (QC.inputIndex = CC.button + 2, wC[CC.button + 2] = wC[CC.button + 2] ? 0 : 1, this._onInputChanged(zC, ZC, QC))
          }
        }, this._pointerDownEvent = CC => {
          const zC = this._getPointerType(CC);
          let ZC = zC === iC.Mouse ? 0 : CC.pointerId;
          if (zC === iC.Touch) {
            let zC = this._activeTouchIds.indexOf(CC.pointerId);
            if (-1 === zC && (zC = this._activeTouchIds.indexOf(-1)), !(zC >= 0)) return void QC.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            ZC = zC, this._activeTouchIds[zC] = CC.pointerId
          }
          this._inputs[zC] || (this._inputs[zC] = {}), this._inputs[zC][ZC] ? zC === iC.Touch && this._onDeviceConnected(zC, ZC) : this._addPointerDevice(zC, ZC, CC.clientX, CC.clientY);
          const wC = this._inputs[zC][ZC];
          if (wC) {
            const QC = wC[vC.Horizontal],
              nC = wC[vC.Vertical];
            if (zC === iC.Mouse) {
              if (void 0 === CC.pointerId && (CC.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (bC) {}
            } else if (CC.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(CC.pointerId)
            } catch (bC) {}
            wC[vC.Horizontal] = CC.clientX, wC[vC.Vertical] = CC.clientY, wC[CC.button + 2] = 1;
            const fC = CC;
            fC.inputIndex = CC.button + 2, this._onInputChanged(zC, ZC, fC), QC === CC.clientX && nC === CC.clientY || (fC.inputIndex = vC.Move, this._onInputChanged(zC, ZC, fC))
          }
        }, this._pointerUpEvent = CC => {
          const zC = this._getPointerType(CC),
            ZC = zC === iC.Mouse ? 0 : this._activeTouchIds.indexOf(CC.pointerId);
          if (zC === iC.Touch) {
            if (-1 === ZC) return;
            this._activeTouchIds[ZC] = -1
          }
          const QC = this._inputs[zC]?.[ZC];
          let wC = CC.button,
            bC = QC && 0 !== QC[wC + 2];
          if (!bC && this._isUsingFirefox && this._usingMacOs && QC && (wC = 2 === wC ? 0 : 2, bC = 0 !== QC[wC + 2]), bC) {
            const bC = QC[vC.Horizontal],
              nC = QC[vC.Vertical];
            QC[vC.Horizontal] = CC.clientX, QC[vC.Vertical] = CC.clientY, QC[wC + 2] = 0;
            const fC = CC;
            void 0 === CC.pointerId && (CC.pointerId = this._mouseId), bC === CC.clientX && nC === CC.clientY || (fC.inputIndex = vC.Move, this._onInputChanged(zC, ZC, fC)), fC.inputIndex = wC + 2, zC === iC.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : CC.pointerId && this._elementToAttachTo.hasPointerCapture?.(CC.pointerId) && this._elementToAttachTo.releasePointerCapture(CC.pointerId), this._onInputChanged(zC, ZC, fC), zC === iC.Touch && this._onDeviceDisconnected(zC, ZC)
          }
        }, this._pointerCancelTouch = CC => {
          const zC = this._activeTouchIds.indexOf(CC);
          if (-1 === zC) return;
          this._elementToAttachTo.hasPointerCapture?.(CC) && this._elementToAttachTo.releasePointerCapture(CC), this._inputs[iC.Touch][zC][vC.LeftClick] = 0;
          const ZC = EC.CreateDeviceEvent(iC.Touch, zC, vC.LeftClick, 0, this, this._elementToAttachTo, CC);
          this._onInputChanged(iC.Touch, zC, ZC), this._activeTouchIds[zC] = -1, this._onDeviceDisconnected(iC.Touch, zC)
        }, this._pointerCancelEvent = CC => {
          if ("mouse" === CC.pointerType) {
            const CC = this._inputs[iC.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let zC = vC.LeftClick; zC <= vC.BrowserForward; zC++)
              if (1 === CC[zC]) {
                CC[zC] = 0;
                const ZC = EC.CreateDeviceEvent(iC.Mouse, 0, zC, 0, this, this._elementToAttachTo);
                this._onInputChanged(iC.Mouse, 0, ZC)
              }
          } else this._pointerCancelTouch(CC.pointerId)
        }, this._pointerLeaveEvent = CC => {
          "pen" === CC.pointerType && this._pointerCancelTouch(CC.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let CC = !1;
        const zC = function() {};
        try {
          const ZC = Object.defineProperty({}, "passive", {
            get: function() {
              CC = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", zC, ZC), this._elementToAttachTo.removeEventListener("test", zC, ZC)
        } catch (ZC) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(iC.Mouse)) {
            const CC = this._inputs[iC.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let zC = vC.LeftClick; zC <= vC.BrowserForward; zC++)
              if (1 === CC[zC]) {
                CC[zC] = 0;
                const ZC = EC.CreateDeviceEvent(iC.Mouse, 0, zC, 0, this, this._elementToAttachTo);
                this._onInputChanged(iC.Mouse, 0, ZC)
              }
          }
          if (this.isDeviceAvailable(iC.Touch)) {
            const CC = this._inputs[iC.Touch];
            for (let zC = 0; zC < this._activeTouchIds.length; zC++) {
              const ZC = this._activeTouchIds[zC];
              if (this._elementToAttachTo.hasPointerCapture?.(ZC) && this._elementToAttachTo.releasePointerCapture(ZC), -1 !== ZC && 1 === CC[zC]?.[vC.LeftClick]) {
                CC[zC][vC.LeftClick] = 0;
                const QC = EC.CreateDeviceEvent(iC.Touch, zC, vC.LeftClick, 0, this, this._elementToAttachTo, ZC);
                this._onInputChanged(iC.Touch, zC, QC), this._activeTouchIds[zC] = -1, this._onDeviceDisconnected(iC.Touch, zC)
              }
            }
          }
        }, this._pointerWheelEvent = CC => {
          const zC = iC.Mouse;
          this._inputs[zC] || (this._inputs[zC] = []), this._inputs[zC][0] || (this._pointerActive = !0, this._registerDevice(zC, 0, XC));
          const ZC = this._inputs[zC][0];
          if (ZC) {
            ZC[vC.MouseWheelX] = CC.deltaX || 0, ZC[vC.MouseWheelY] = CC.deltaY || CC.wheelDelta || 0, ZC[vC.MouseWheelZ] = CC.deltaZ || 0;
            const QC = CC;
            void 0 === CC.pointerId && (CC.pointerId = this._mouseId), 0 !== ZC[vC.MouseWheelX] && (QC.inputIndex = vC.MouseWheelX, this._onInputChanged(zC, 0, QC)), 0 !== ZC[vC.MouseWheelY] && (QC.inputIndex = vC.MouseWheelY, this._onInputChanged(zC, 0, QC)), 0 !== ZC[vC.MouseWheelZ] && (QC.inputIndex = vC.MouseWheelZ, this._onInputChanged(zC, 0, QC))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = CC => {
          CC.buttons > 1 && this._pointerCancelEvent(CC)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!CC && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(iC.Mouse)) {
            const CC = this._inputs[iC.Mouse][0];
            CC[vC.MouseWheelX] = 0, CC[vC.MouseWheelY] = 0, CC[vC.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = CC => {
          this._addGamePad(CC.gamepad)
        }, this._gamepadDisconnectedEvent = CC => {
          if (this._gamepads) {
            const zC = this._getGamepadDeviceType(CC.gamepad.id),
              ZC = CC.gamepad.index;
            this._unregisterDevice(zC, ZC), delete this._gamepads[ZC]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(CC, zC, ZC) {
        const QC = navigator.getGamepads()[zC];
        if (QC && CC === this._gamepads[zC]) {
          const wC = this._inputs[CC][zC];
          ZC >= QC.buttons.length ? wC[ZC] = QC.axes[ZC - QC.buttons.length].valueOf() : wC[ZC] = QC.buttons[ZC].value
        }
      }
      _getGamepadDeviceType(CC) {
        return -1 !== CC.indexOf("054c") ? -1 !== CC.indexOf("0ce6") ? iC.DualSense : iC.DualShock : -1 !== CC.indexOf("Xbox One") || -1 !== CC.search("Xbox 360") || -1 !== CC.search("xinput") || -1 !== CC.indexOf("045e") && -1 === CC.indexOf("Surface Dock") ? iC.Xbox : -1 !== CC.indexOf("057e") ? iC.Switch : iC.Generic
      }
      _getPointerType(CC) {
        let zC = iC.Mouse;
        return ("touch" === CC.pointerType || "pen" === CC.pointerType || CC.touches) && (zC = iC.Touch), zC
      }
    }
    class uC {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = zC, this.deviceSlot = ZC, this.onInputChangedObservable = new nC.d, this._deviceInputSystem = CC
      }
      getInput(CC) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, CC)
      }
    }
    class rC {
      constructor(CC) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = CC => {
          for (let zC = 0; zC < this._devices.length; zC++) {
            const ZC = this._devices[zC];
            for (const QC in ZC) {
              const ZC = +QC;
              CC._addDevice(new uC(this._deviceInputSystem, zC, ZC))
            }
          }
          this._registeredManagers.push(CC)
        }, this.unregisterManager = CC => {
          const zC = this._registeredManagers.indexOf(CC);
          zC > -1 && this._registeredManagers.splice(zC, 1)
        };
        const zC = Object.keys(iC).length / 2;
        this._devices = new Array(zC);
        const ZC = (CC, zC) => {
            this._devices[CC] || (this._devices[CC] = new Array), this._devices[CC][zC] || (this._devices[CC][zC] = zC);
            for (const ZC of this._registeredManagers) {
              const QC = new uC(this._deviceInputSystem, CC, zC);
              ZC._addDevice(QC)
            }
          },
          QC = (CC, zC) => {
            this._devices[CC]?.[zC] && delete this._devices[CC][zC];
            for (const ZC of this._registeredManagers) ZC._removeDevice(CC, zC)
          },
          wC = (CC, zC, ZC) => {
            if (ZC)
              for (const QC of this._registeredManagers) QC._onInputChanged(CC, zC, ZC)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new lC(ZC, QC, wC) : this._deviceInputSystem = new cC(CC, ZC, QC, wC)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class sC {
      getDeviceSource(CC, zC) {
        if (void 0 === zC) {
          if (void 0 === this._firstDevice[CC]) return null;
          zC = this._firstDevice[CC]
        }
        return this._devices[CC] && void 0 !== this._devices[CC][zC] ? this._devices[CC][zC] : null
      }
      getDeviceSources(CC) {
        return this._devices[CC] ? this._devices[CC].filter((CC => !!CC)) : []
      }
      constructor(CC) {
        const zC = Object.keys(iC).length / 2;
        this._devices = new Array(zC), this._firstDevice = new Array(zC), this._engine = CC, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new rC(CC)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new nC.d((CC => {
          for (const zC of this._devices)
            if (zC)
              for (const ZC of zC) ZC && this.onDeviceConnectedObservable.notifyObserver(CC, ZC)
        })), this.onDeviceDisconnectedObservable = new nC.d, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = CC.Tm.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.Tm.remove(this._onDisposeObserver)
      }
      _addDevice(CC) {
        this._devices[CC.deviceType] || (this._devices[CC.deviceType] = []), this._devices[CC.deviceType][CC.deviceSlot] || (this._devices[CC.deviceType][CC.deviceSlot] = CC, this._updateFirstDevices(CC.deviceType)), this.onDeviceConnectedObservable.notifyObservers(CC)
      }
      _removeDevice(CC, zC) {
        const ZC = this._devices[CC]?.[zC];
        this.onDeviceDisconnectedObservable.notifyObservers(ZC), this._devices[CC]?.[zC] && delete this._devices[CC][zC], this._updateFirstDevices(CC)
      }
      _onInputChanged(CC, zC, ZC) {
        this._devices[CC]?.[zC]?.onInputChangedObservable.notifyObservers(ZC)
      }
      _updateFirstDevices(CC) {
        switch (CC) {
          case iC.Keyboard:
          case iC.Mouse:
            this._firstDevice[CC] = 0;
            break;
          case iC.Touch:
          case iC.DualSense:
          case iC.DualShock:
          case iC.Xbox:
          case iC.Switch:
          case iC.Generic: {
            delete this._firstDevice[CC];
            const zC = this._devices[CC];
            if (zC)
              for (let ZC = 0; ZC < zC.length; ZC++)
                if (zC[ZC]) {
                  this._firstDevice[CC] = ZC;
                  break
                } break
          }
        }
      }
    }
    var TC = ZC(40013);
    class aC {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get PF() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(CC) {
        this._singleClick = CC
      }
      set PF(CC) {
        this._doubleClick = CC
      }
      set hasSwiped(CC) {
        this._hasSwiped = CC
      }
      set ignore(CC) {
        this._ignore = CC
      }
    }
    class tC {
      constructor(CC) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new FC.n(0, 0), this._previousStartingPointerPosition = new FC.n(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = CC || AC.c.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(CC) {
        return this._meshUnderPointerId[CC] || null
      }
      get unTranslatedPointer() {
        return new FC.n(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(CC) {
        this._pointerX = CC
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(CC) {
        this._pointerY = CC
      }
      _updatePointerPosition(CC) {
        const zC = this._scene.mg().getInputElementClientRect();
        zC && (this._pointerX = CC.clientX - zC.left, this._pointerY = CC.clientY - zC.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(CC, zC) {
        const ZC = this._scene,
          QC = ZC.mg(),
          wC = QC.getInputElement();
        wC && (wC.tabIndex = QC.canvasTabIndex, ZC.doNotHandleCursors || (wC.style.cursor = ZC.defaultCursor)), this._setCursorAndPointerOverMesh(CC, zC, ZC);
        for (const fC of ZC._pointerMoveStage) {
          CC = CC || this._pickMove(zC);
          const ZC = !!CC?.pickedMesh;
          CC = fC.action(this._unTranslatedPointerX, this._unTranslatedPointerY, CC, ZC, wC)
        }
        const bC = zC.inputIndex >= vC.MouseWheelX && zC.inputIndex <= vC.MouseWheelZ ? JC.b.POINTERWHEEL : JC.b.POINTERMOVE;
        let nC;
        ZC.onPointerMove && (CC = CC || this._pickMove(zC), ZC.onPointerMove(zC, CC, bC)), CC ? (nC = new JC.h(bC, zC, CC), this._setRayOnPointerInfo(CC, zC)) : (nC = new JC.h(bC, zC, null, this), this._movePointerInfo = nC), ZC.onPointerObservable.hasObservers() && ZC.onPointerObservable.notifyObservers(nC, bC)
      }
      _setRayOnPointerInfo(CC, zC) {
        const ZC = this._scene;
        CC && TC.c._IsPickingAvailable && (CC.ray || (CC.ray = ZC.createPickingRay(zC.offsetX, zC.offsetY, FC.b.Identity(), ZC.activeCamera)))
      }
      _addCameraPointerObserver(CC, zC) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(CC, zC)
      }
      _removeCameraPointerObserver(CC) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(CC)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(CC, zC, ZC) {
        const QC = this._scene,
          wC = new JC.f(ZC, zC, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return CC && (wC.originalPickingInfo = CC, wC.ray = CC.ray, "xr-near" === zC.pointerType && CC.originMesh && (wC.nearInteractionPickingInfo = CC)), QC.onPrePointerObservable.notifyObservers(wC, ZC), !!wC.skipOnPointerObservable
      }
      _pickMove(CC) {
        const zC = this._scene,
          ZC = zC.CM(this._unTranslatedPointerX, this._unTranslatedPointerY, zC.pointerMovePredicate, zC.pointerMoveFastCheck, zC.cameraToUseForPointers, zC.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(ZC, CC, zC), ZC
      }
      _updateMeshUnderPointer() {
        const CC = this._scene;
        if (!CC.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || CC.skipPointerMovePicking || !CC.cameraToUseForPointers && !CC.activeCamera) return;
        this._ensurePointerMovePredicate();
        const zC = this._pointerX,
          ZC = this._pointerY,
          QC = this._unTranslatedPointerX,
          wC = this._unTranslatedPointerY;
        for (const bC of this._latestPointerMoveEvents.values()) this._pointerX = bC.pointerX, this._pointerY = bC.pointerY, this._unTranslatedPointerX = bC.unTranslatedPointerX, this._unTranslatedPointerY = bC.unTranslatedPointerY, this._pickMove(bC.event);
        this._pointerX = zC, this._pointerY = ZC, this._unTranslatedPointerX = QC, this._unTranslatedPointerY = wC
      }
      _ensurePointerMovePredicate() {
        const CC = this._scene;
        CC.pointerMovePredicate || (CC.pointerMovePredicate = zC => (zC._isPointerMovePickable ?? zC.tS) && zC.isVisible && zC.isReady() && zC.isEnabled() && (zC.enablePointerMoveEvents || CC.constantlyUpdateMeshUnderPointer || null !== zC._getActionManagerForTrigger()) && (!CC.cameraToUseForPointers || 0 !== (CC.cameraToUseForPointers.layerMask & zC.layerMask)))
      }
      _setCursorAndPointerOverMesh(CC, zC, ZC) {
        const QC = ZC.mg().getInputElement();
        if (CC?.pickedMesh) {
          if (this.setPointerOverMesh(CC.pickedMesh, zC.pointerId, CC, zC), !ZC.doNotHandleCursors && QC && this._pointerOverMesh) {
            const CC = this._pointerOverMesh._getActionManagerForTrigger();
            CC && CC.hasPointerTriggers && (QC.style.cursor = CC.hoverCursor || ZC.hoverCursor)
          }
        } else this.setPointerOverMesh(null, zC.pointerId, CC, zC)
      }
      simulatePointerMove(CC, zC) {
        const ZC = new PointerEvent("pointermove", zC);
        ZC.inputIndex = vC.Move, this._checkPrePointerObservable(CC, ZC, JC.b.POINTERMOVE) || this._processPointerMove(CC, ZC)
      }
      simulatePointerDown(CC, zC) {
        const ZC = new PointerEvent("pointerdown", zC);
        ZC.inputIndex = ZC.button + 2, this._checkPrePointerObservable(CC, ZC, JC.b.POINTERDOWN) || this._processPointerDown(CC, ZC)
      }
      _processPointerDown(CC, zC) {
        const ZC = this._scene;
        if (CC?.pickedMesh) {
          this._pickedDownMesh = CC.pickedMesh;
          const QC = CC.pickedMesh._getActionManagerForTrigger();
          if (QC) {
            if (QC.hasPickTriggers) switch (QC.processTrigger(5, new gC(CC.pickedMesh, ZC.pointerX, ZC.pointerY, CC.pickedMesh, zC, CC)), zC.button) {
              case 0:
                QC.processTrigger(2, new gC(CC.pickedMesh, ZC.pointerX, ZC.pointerY, CC.pickedMesh, zC, CC));
                break;
              case 1:
                QC.processTrigger(4, new gC(CC.pickedMesh, ZC.pointerX, ZC.pointerY, CC.pickedMesh, zC, CC));
                break;
              case 2:
                QC.processTrigger(3, new gC(CC.pickedMesh, ZC.pointerX, ZC.pointerY, CC.pickedMesh, zC, CC))
            }
            QC.hasSpecificTrigger(8) && window.setTimeout((() => {
              const CC = ZC.CM(this._unTranslatedPointerX, this._unTranslatedPointerY, (CC => CC.tS && CC.isVisible && CC.isReady() && CC.actionManager && CC.actionManager.hasSpecificTrigger(8) && CC === this._pickedDownMesh), !1, ZC.cameraToUseForPointers);
              CC?.pickedMesh && QC && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > tC.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, QC.processTrigger(8, gC.CreateNew(CC.pickedMesh, zC)))
            }), tC.LongPressDelay)
          }
        } else
          for (const bC of ZC._pointerDownStage) CC = bC.action(this._unTranslatedPointerX, this._unTranslatedPointerY, CC, zC, !1);
        let QC;
        const wC = JC.b.POINTERDOWN;
        CC ? (ZC.onPointerDown && ZC.onPointerDown(zC, CC, wC), QC = new JC.h(wC, zC, CC), this._setRayOnPointerInfo(CC, zC)) : QC = new JC.h(wC, zC, null, this), ZC.onPointerObservable.hasObservers() && ZC.onPointerObservable.notifyObservers(QC, wC)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(CC, zC, ZC) {
        const QC = new PointerEvent("pointerup", zC);
        QC.inputIndex = vC.Move;
        const wC = new aC;
        ZC ? wC.PF = !0 : wC.singleClick = !0, this._checkPrePointerObservable(CC, QC, JC.b.POINTERUP) || this._processPointerUp(CC, QC, wC)
      }
      _processPointerUp(CC, zC, ZC) {
        const QC = this._scene;
        if (CC?.pickedMesh) {
          if (this._pickedUpMesh = CC.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (QC.onPointerPick && QC.onPointerPick(zC, CC), ZC.singleClick && !ZC.ignore && QC.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const ZC = JC.b.POINTERPICK,
              wC = new JC.h(ZC, zC, CC);
            this._setRayOnPointerInfo(CC, zC), QC.onPointerObservable.notifyObservers(wC, ZC)
          }
          const wC = CC.pickedMesh._getActionManagerForTrigger();
          if (wC && !ZC.ignore) {
            wC.processTrigger(7, gC.CreateNew(CC.pickedMesh, zC, CC)), !ZC.hasSwiped && ZC.singleClick && wC.processTrigger(1, gC.CreateNew(CC.pickedMesh, zC, CC));
            const QC = CC.pickedMesh._getActionManagerForTrigger(6);
            ZC.PF && QC && QC.processTrigger(6, gC.CreateNew(CC.pickedMesh, zC, CC))
          }
        } else if (!ZC.ignore)
          for (const wC of QC._pointerUpStage) CC = wC.action(this._unTranslatedPointerX, this._unTranslatedPointerY, CC, zC, ZC.PF);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const CC = this._pickedDownMesh._getActionManagerForTrigger(16);
          CC && CC.processTrigger(16, gC.CreateNew(this._pickedDownMesh, zC))
        }
        if (!ZC.ignore) {
          const wC = new JC.h(JC.b.POINTERUP, zC, CC);
          if (this._setRayOnPointerInfo(CC, zC), QC.onPointerObservable.notifyObservers(wC, JC.b.POINTERUP), QC.onPointerUp && QC.onPointerUp(zC, CC, JC.b.POINTERUP), !ZC.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let wC = 0;
            if (ZC.singleClick ? wC = JC.b.POINTERTAP : ZC.PF && (wC = JC.b.POINTERDOUBLETAP), wC) {
              const ZC = new JC.h(wC, zC, CC);
              QC.onPointerObservable.hasObservers() && QC.onPointerObservable.hasSpecificMask(wC) && QC.onPointerObservable.notifyObservers(ZC, wC)
            }
          }
        }
      }
      isPointerCaptured() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[CC]
      }
      attachControl() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const wC = this._scene,
          bC = wC.mg();
        QC || (QC = bC.getInputElement()), this._alreadyAttached && this.detachControl(), QC && (this._alreadyAttachedTo = QC), this._deviceSourceManager = new sC(bC), this._initActionManager = CC => {
          if (!this._meshPickProceed) {
            const zC = wC.skipPointerUpPicking || 0 === wC._registeredActions && !this._checkForPicking() && !wC.onPointerUp ? null : wC.CM(this._unTranslatedPointerX, this._unTranslatedPointerY, wC.pointerUpPredicate, wC.pointerUpFastCheck, wC.cameraToUseForPointers, wC.pointerUpTrianglePredicate);
            this._currentPickResult = zC, zC && (CC = zC.hit && zC.pickedMesh ? zC.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return CC
        }, this._delayedSimpleClick = (CC, zC, ZC) => {
          if ((Date.now() - this._previousStartingPointerTime > tC.DoubleClickDelay && !this._doubleClickOccured || CC !== this._previousButtonPressed) && (this._doubleClickOccured = !1, zC.singleClick = !0, zC.ignore = !1, this._delayedClicks[CC])) {
            const zC = this._delayedClicks[CC].evt,
              ZC = JC.b.POINTERTAP,
              QC = new JC.h(ZC, zC, this._currentPickResult);
            wC.onPointerObservable.hasObservers() && wC.onPointerObservable.hasSpecificMask(ZC) && wC.onPointerObservable.notifyObservers(QC, ZC), this._delayedClicks[CC] = null
          }
        }, this._initClickEvent = (CC, zC, ZC, QC) => {
          const wC = new aC;
          this._currentPickResult = null;
          let bC = null,
            nC = CC.hasSpecificMask(JC.b.POINTERPICK) || zC.hasSpecificMask(JC.b.POINTERPICK) || CC.hasSpecificMask(JC.b.POINTERTAP) || zC.hasSpecificMask(JC.b.POINTERTAP) || CC.hasSpecificMask(JC.b.POINTERDOUBLETAP) || zC.hasSpecificMask(JC.b.POINTERDOUBLETAP);
          !nC && IC && (bC = this._initActionManager(bC, wC), bC && (nC = bC.hasPickTriggers));
          let fC = !1;
          if (nC = nC && !this._isMultiTouchGesture, nC) {
            const nC = ZC.button;
            if (wC.hasSwiped = this._isPointerSwiping(), !wC.hasSwiped) {
              let oC = !tC.ExclusiveDoubleClickMode;
              if (oC || (oC = !CC.hasSpecificMask(JC.b.POINTERDOUBLETAP) && !zC.hasSpecificMask(JC.b.POINTERDOUBLETAP), oC && !IC.HasSpecificTrigger(6) && (bC = this._initActionManager(bC, wC), bC && (oC = !bC.hasSpecificTrigger(6)))), oC)(Date.now() - this._previousStartingPointerTime > tC.DoubleClickDelay || nC !== this._previousButtonPressed) && (wC.singleClick = !0, QC(wC, this._currentPickResult), fC = !0);
              else {
                const CC = {
                  evt: ZC,
                  clickInfo: wC,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, nC, wC, QC), tC.DoubleClickDelay)
                };
                this._delayedClicks[nC] = CC
              }
              let qC = CC.hasSpecificMask(JC.b.POINTERDOUBLETAP) || zC.hasSpecificMask(JC.b.POINTERDOUBLETAP);
              !qC && IC.HasSpecificTrigger(6) && (bC = this._initActionManager(bC, wC), bC && (qC = bC.hasSpecificTrigger(6))), qC && (nC === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < tC.DoubleClickDelay && !this._doubleClickOccured ? (wC.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = nC, tC.ExclusiveDoubleClickMode ? (this._delayedClicks[nC] && (clearTimeout(this._delayedClicks[nC]?.timeoutId), this._delayedClicks[nC] = null), QC(wC, this._previousPickResult)) : QC(wC, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, wC.PF = !0, wC.ignore = !1, tC.ExclusiveDoubleClickMode && this._delayedClicks[nC] && (clearTimeout(this._delayedClicks[nC]?.timeoutId), this._delayedClicks[nC] = null), QC(wC, this._currentPickResult)), fC = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = nC))
            }
          }
          fC || QC(wC, this._currentPickResult)
        }, this._onPointerMove = CC => {
          if (this._updatePointerPosition(CC), this._latestPointerMoveEvents.set(CC.pointerId, {
              event: CC,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > tC.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > tC.DragMovementThreshold), bC.isPointerLock && bC._verifyPointerLock(), this._checkPrePointerObservable(null, CC, CC.inputIndex >= vC.MouseWheelX && CC.inputIndex <= vC.MouseWheelZ ? JC.b.POINTERWHEEL : JC.b.POINTERMOVE)) return;
          if (!wC.cameraToUseForPointers && !wC.activeCamera) return;
          if (wC.skipPointerMovePicking) return void this._processPointerMove(new MC.c, CC);
          this._ensurePointerMovePredicate();
          const zC = wC._registeredActions > 0 || wC.constantlyUpdateMeshUnderPointer ? this._pickMove(CC) : null;
          this._processPointerMove(zC, CC)
        }, this._onPointerDown = CC => {
          const zC = this._activePointerIds.indexOf(-1);
          if (-1 === zC ? this._activePointerIds.push(CC.pointerId) : this._activePointerIds[zC] = CC.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, tC.ExclusiveDoubleClickMode)
            for (let QC = 0; QC < this._delayedClicks.length; QC++)
              if (this._delayedClicks[QC])
                if (CC.button === QC) clearTimeout(this._delayedClicks[QC]?.timeoutId);
                else {
                  const CC = this._delayedClicks[QC].clickInfo;
                  this._doubleClickOccured = !1, CC.singleClick = !0, CC.ignore = !1;
                  const zC = this._delayedClicks[QC].evt,
                    ZC = JC.b.POINTERTAP,
                    bC = new JC.h(ZC, zC, this._currentPickResult);
                  wC.onPointerObservable.hasObservers() && wC.onPointerObservable.hasSpecificMask(ZC) && wC.onPointerObservable.notifyObservers(bC, ZC), this._delayedClicks[QC] = null
                } if (this._updatePointerPosition(CC), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = CC.button), wC.preventDefaultOnPointerDown && QC && (CC.preventDefault(), QC.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, CC, JC.b.POINTERDOWN)) return;
          if (!wC.cameraToUseForPointers && !wC.activeCamera) return;
          let ZC;
          this._pointerCaptures[CC.pointerId] = !0, wC.pointerDownPredicate || (wC.pointerDownPredicate = CC => CC.tS && CC.isVisible && CC.isReady() && CC.isEnabled() && (!wC.cameraToUseForPointers || 0 !== (wC.cameraToUseForPointers.layerMask & CC.layerMask))), this._pickedDownMesh = null, ZC = wC.skipPointerDownPicking || 0 === wC._registeredActions && !this._checkForPicking() && !wC.onPointerDown ? new MC.c : wC.CM(this._unTranslatedPointerX, this._unTranslatedPointerY, wC.pointerDownPredicate, wC.pointerDownFastCheck, wC.cameraToUseForPointers, wC.pointerDownTrianglePredicate), this._processPointerDown(ZC, CC)
        }, this._onPointerUp = CC => {
          const zC = this._activePointerIds.indexOf(CC.pointerId); - 1 !== zC && (this._activePointerIds[zC] = -1, this._activePointerIdsCount--, "touch" === CC.pointerType && this._latestPointerMoveEvents.delete(CC.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(CC), wC.preventDefaultOnPointerUp && QC && (CC.preventDefault(), QC.focus()), this._initClickEvent(wC.onPrePointerObservable, wC.onPointerObservable, CC, ((zC, ZC) => {
            if (wC.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !zC.ignore)) {
              if (this._checkPrePointerObservable(null, CC, JC.b.POINTERUP)) return this._swipeButtonPressed === CC.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === CC.buttons && (this._pointerCaptures[CC.pointerId] = !1));
              zC.hasSwiped || (zC.singleClick && wC.onPrePointerObservable.hasSpecificMask(JC.b.POINTERTAP) && this._checkPrePointerObservable(null, CC, JC.b.POINTERTAP) && (this._skipPointerTap = !0), zC.PF && wC.onPrePointerObservable.hasSpecificMask(JC.b.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, CC, JC.b.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[CC.pointerId] ? (0 === CC.buttons && (this._pointerCaptures[CC.pointerId] = !1), (wC.cameraToUseForPointers || wC.activeCamera) && (wC.pointerUpPredicate || (wC.pointerUpPredicate = CC => CC.tS && CC.isVisible && CC.isReady() && CC.isEnabled() && (!wC.cameraToUseForPointers || 0 !== (wC.cameraToUseForPointers.layerMask & CC.layerMask))), !this._meshPickProceed && (IC && IC.HasTriggers || this._checkForPicking() || wC.onPointerUp) && this._initActionManager(null, zC), ZC || (ZC = this._currentPickResult), this._processPointerUp(ZC, CC, zC), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === CC.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === CC.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = CC => {
          const zC = mC.c.KEYDOWN;
          if (wC.onPreKeyboardObservable.hasObservers()) {
            const ZC = new mC.g(zC, CC);
            if (wC.onPreKeyboardObservable.notifyObservers(ZC, zC), ZC.skipOnKeyboardObservable) return
          }
          if (wC.onKeyboardObservable.hasObservers()) {
            const ZC = new mC.h(zC, CC);
            wC.onKeyboardObservable.notifyObservers(ZC, zC)
          }
          wC.actionManager && wC.actionManager.processTrigger(14, gC.CreateNewFromScene(wC, CC))
        }, this._onKeyUp = CC => {
          const zC = mC.c.KEYUP;
          if (wC.onPreKeyboardObservable.hasObservers()) {
            const ZC = new mC.g(zC, CC);
            if (wC.onPreKeyboardObservable.notifyObservers(ZC, zC), ZC.skipOnKeyboardObservable) return
          }
          if (wC.onKeyboardObservable.hasObservers()) {
            const ZC = new mC.h(zC, CC);
            wC.onKeyboardObservable.notifyObservers(ZC, zC)
          }
          wC.actionManager && wC.actionManager.processTrigger(15, gC.CreateNewFromScene(wC, CC))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((QC => {
          QC.deviceType === iC.Mouse ? QC.onInputChangedObservable.add((wC => {
            this._originMouseEvent = wC, wC.inputIndex === vC.LeftClick || wC.inputIndex === vC.MiddleClick || wC.inputIndex === vC.RightClick || wC.inputIndex === vC.BrowserBack || wC.inputIndex === vC.BrowserForward ? zC && 1 === QC.getInput(wC.inputIndex) ? this._onPointerDown(wC) : CC && 0 === QC.getInput(wC.inputIndex) && this._onPointerUp(wC) : ZC && (wC.inputIndex === vC.Move ? this._onPointerMove(wC) : wC.inputIndex !== vC.MouseWheelX && wC.inputIndex !== vC.MouseWheelY && wC.inputIndex !== vC.MouseWheelZ || this._onPointerMove(wC))
          })) : QC.deviceType === iC.Touch ? QC.onInputChangedObservable.add((wC => {
            wC.inputIndex === vC.LeftClick && (zC && 1 === QC.getInput(wC.inputIndex) ? (this._onPointerDown(wC), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : CC && 0 === QC.getInput(wC.inputIndex) && (this._onPointerUp(wC), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), ZC && wC.inputIndex === vC.Move && this._onPointerMove(wC)
          })) : QC.deviceType === iC.Keyboard && QC.onInputChangedObservable.add((CC => {
            "keydown" === CC.type ? this._onKeyDown(CC) : "keyup" === CC.type && this._onKeyUp(CC)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[zC] === CC && (!CC || !CC._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const wC = this._meshUnderPointerId[zC];
        let bC;
        wC && (bC = wC._getActionManagerForTrigger(10), bC && bC.processTrigger(10, new gC(wC, this._pointerX, this._pointerY, CC, QC, {
          pointerId: zC
        }))), CC ? (this._meshUnderPointerId[zC] = CC, this._pointerOverMesh = CC, bC = CC._getActionManagerForTrigger(9), bC && bC.processTrigger(9, new gC(CC, this._pointerX, this._pointerY, CC, QC, {
          pointerId: zC,
          pickResult: ZC
        }))) : (delete this._meshUnderPointerId[zC], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: CC,
          pointerId: zC
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(CC) {
        this._pointerOverMesh === CC && (this._pointerOverMesh = null), this._pickedDownMesh === CC && (this._pickedDownMesh = null), this._pickedUpMesh === CC && (this._pickedUpMesh = null);
        for (const zC in this._meshUnderPointerId) this._meshUnderPointerId[zC] === CC && delete this._meshUnderPointerId[zC]
      }
    }
    tC.DragMovementThreshold = 10, tC.LongPressDelay = 500, tC.DoubleClickDelay = 300, tC.ExclusiveDoubleClickMode = !1;
    var DC = ZC(39766),
      jC = ZC(37142),
      yC = ZC(37590);
    class LC {
      static get UniqueId() {
        const CC = this._UniqueIdCounter;
        return this._UniqueIdCounter++, CC
      }
    }
    LC._UniqueIdCounter = 1;
    var UC = ZC(39865),
      BC = ZC(40022),
      OC = ZC(36971);
    class kC {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var VC, Cz, zz, Zz, Qz, wz, bz, nz, fz, oz, qz, Fz, Wz, Nz, Mz, gz, Sz, pz, Pz, Gz, Rz, Az, xz, Jz, Iz, iz, vz, ez, hz, Kz, Yz, dz, mz, Hz, Ez, lz, Xz, cz, uz, rz, sz, Tz, az, tz, Dz, jz, yz, Lz, Uz, Bz, Oz, kz, Vz, CZ = ZC(38507),
      zZ = ZC(37002);
    const ZZ = new FC.u,
      QZ = new FC.u;
    var wZ;
    ! function(CC) {
      CC[CC.BackwardCompatible = 0] = "BackwardCompatible", CC[CC.Intermediate = 1] = "Intermediate", CC[CC.Aggressive = 2] = "Aggressive"
    }(wZ || (wZ = {}));
    class bZ {
      static DefaultMaterialFactory(CC) {
        throw (0, xC.i)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, xC.i)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(CC) {
        CC !== this._clearColor && (this._clearColor = CC, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(CC) {
        if (CC !== this._performancePriority) {
          switch (this._performancePriority = CC, CC) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(CC)
        }
      }
      set forceWireframe(CC) {
        this._forceWireframe !== CC && (this._forceWireframe = CC, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(CC) {
        this._skipFrustumClipping !== CC && (this._skipFrustumClipping = CC)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(CC) {
        this._forcePointsCloud !== CC && (this._forcePointsCloud = CC, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(CC) {
        this._environmentTexture !== CC && (this._environmentTexture = CC, this.onEnvironmentTextureChangedObservable.notifyObservers(CC), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let CC = [];
        CC = CC.concat(this.meshes), CC = CC.concat(this.lights), CC = CC.concat(this.cameras), CC = CC.concat(this.transformNodes);
        for (const zC of this.skeletons) CC = CC.concat(zC.bones);
        return CC
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(CC) {
        this._animationPropertiesOverride = CC
      }
      set onDispose(CC) {
        this._onDisposeObserver && this.Tm.remove(this._onDisposeObserver), this._onDisposeObserver = this.Tm.add(CC)
      }
      set beforeRender(CC) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), CC && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(CC))
      }
      set afterRender(CC) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), CC && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(CC))
      }
      set beforeCameraRender(CC) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(CC)
      }
      set afterCameraRender(CC) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(CC)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(CC) {
        this._pointerPickingConfiguration.pointerDownPredicate = CC
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(CC) {
        this._pointerPickingConfiguration.pointerUpPredicate = CC
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(CC) {
        this._pointerPickingConfiguration.pointerMovePredicate = CC
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(CC) {
        this._pointerPickingConfiguration.pointerDownFastCheck = CC
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(CC) {
        this._pointerPickingConfiguration.pointerUpFastCheck = CC
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(CC) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = CC
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(CC) {
        this._pointerPickingConfiguration.skipPointerMovePicking = CC
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(CC) {
        this._pointerPickingConfiguration.skipPointerDownPicking = CC
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(CC) {
        this._pointerPickingConfiguration.skipPointerUpPicking = CC
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return tC.DragMovementThreshold
      }
      static set DragMovementThreshold(CC) {
        tC.DragMovementThreshold = CC
      }
      static get LongPressDelay() {
        return tC.LongPressDelay
      }
      static set LongPressDelay(CC) {
        tC.LongPressDelay = CC
      }
      static get DoubleClickDelay() {
        return tC.DoubleClickDelay
      }
      static set DoubleClickDelay(CC) {
        tC.DoubleClickDelay = CC
      }
      static get ExclusiveDoubleClickMode() {
        return tC.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(CC) {
        tC.ExclusiveDoubleClickMode = CC
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? FC.r.ZeroReadOnly
      }
      bindEyePosition(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QC = this._eyePosition,
          wC = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          bC = this.floatingOriginOffset,
          nC = ZZ.set(QC.x, QC.y, QC.z, wC ? -1 : 1),
          fC = nC.subtractFromFloatsToRef(bC.x, bC.y, bC.z, 0, QZ);
        return CC && (ZC ? CC.setFloat3(zC, fC.x, fC.y, fC.z) : CC.setVector4(zC, fC)), nC
      }
      finalizeSceneUbo() {
        const CC = this.getSceneUniformBuffer(),
          zC = this.bindEyePosition(null),
          ZC = this.floatingOriginOffset;
        return CC.updateFloat4("vEyePosition", zC.x - ZC.x, zC.y - ZC.y, zC.z - ZC.z, zC.w), CC.update(), CC
      }
      set useRightHandedSystem(CC) {
        this._useRightHandedSystem !== CC && (this._useRightHandedSystem = CC, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(CC) {
        this._currentStepId = CC
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(CC) {
        this._fogEnabled !== CC && (this._fogEnabled = CC, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(CC) {
        this._fogMode !== CC && (this._fogMode = CC, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(CC) {
        this._shadowsEnabled !== CC && (this._shadowsEnabled = CC, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(CC) {
        this._lightsEnabled !== CC && (this._lightsEnabled = CC, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(CC) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), CC && (this._unObserveActiveCameras = (0, OC.i)(CC, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = CC
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(CC) {
        CC !== this._activeCamera && (this._activeCamera = CC, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return bZ.DefaultMaterialFactory !== bZ._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = bZ.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(CC) {
        this._defaultMaterial = CC
      }
      set texturesEnabled(CC) {
        this._texturesEnabled !== CC && (this._texturesEnabled = CC, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(CC) {
        if (this._frameGraph) return this._frameGraph = CC, void(CC || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = CC, CC && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(CC) {
        this._skeletonsEnabled !== CC && (this._skeletonsEnabled = CC, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = bZ.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const CC of this._transientComponents) CC.register();
          this._transientComponents.length = 0
        }
      }
      sZC(CC) {
        this._components.push(CC), this._transientComponents.push(CC);
        const zC = CC;
        zC.addFromContainer && zC.serialize && this._serializableComponents.push(zC)
      }
      _getComponent(CC) {
        for (const zC of this._components)
          if (zC.name === CC) return zC;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(CC, zC) {
        this._inputManager = new tC(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new jC.g(.2, .2, .3, 1), this.onClearColorChangedObservable = new nC.d, this.ambientColor = new jC.e(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new nC.d, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.Ix = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.Tm = new nC.d, this._onDisposeObserver = null, this.onBeforeRenderObservable = new nC.d, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new nC.d, this.onAfterRenderCameraObservable = new nC.d, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new nC.d, this.onAfterAnimationsObservable = new nC.d, this.onBeforeDrawPhaseObservable = new nC.d, this.onAfterDrawPhaseObservable = new nC.d, this.onReadyObservable = new nC.d, this.onBeforeCameraRenderObservable = new nC.d, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new nC.d, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new nC.d, this.onAfterActiveMeshesEvaluationObservable = new nC.d, this.onBeforeParticlesRenderingObservable = new nC.d, this.onAfterParticlesRenderingObservable = new nC.d, this.onDataLoadedObservable = new nC.d, this.onNewCameraAddedObservable = new nC.d, this.onCameraRemovedObservable = new nC.d, this.onNewLightAddedObservable = new nC.d, this.onLightRemovedObservable = new nC.d, this.onNewGeometryAddedObservable = new nC.d, this.onGeometryRemovedObservable = new nC.d, this.onNewTransformNodeAddedObservable = new nC.d, this.onTransformNodeRemovedObservable = new nC.d, this.onNewMeshAddedObservable = new nC.d, this.onMeshRemovedObservable = new nC.d, this.onNewSkeletonAddedObservable = new nC.d, this.onSkeletonRemovedObservable = new nC.d, this.onNewParticleSystemAddedObservable = new nC.d, this.onParticleSystemRemovedObservable = new nC.d, this.onNewAnimationGroupAddedObservable = new nC.d, this.onAnimationGroupRemovedObservable = new nC.d, this.onNewMaterialAddedObservable = new nC.d, this.onNewMultiMaterialAddedObservable = new nC.d, this.onMaterialRemovedObservable = new nC.d, this.onMultiMaterialRemovedObservable = new nC.d, this.onNewTextureAddedObservable = new nC.d, this.onTextureRemovedObservable = new nC.d, this.onNewFrameGraphAddedObservable = new nC.d, this.onFrameGraphRemovedObservable = new nC.d, this.onNewObjectRendererAddedObservable = new nC.d, this.onObjectRendererRemovedObservable = new nC.d, this.onNewPostProcessAddedObservable = new nC.d, this.onPostProcessRemovedObservable = new nC.d, this.onNewEffectLayerAddedObservable = new nC.d, this.onEffectLayerRemovedObservable = new nC.d, this.onBeforeRenderTargetsRenderObservable = new nC.d, this.onAfterRenderTargetsRenderObservable = new nC.d, this.onBeforeStepObservable = new nC.d, this.onAfterStepObservable = new nC.d, this.onActiveCameraChanged = new nC.d, this.onActiveCamerasChanged = new nC.d, this.onBeforeRenderingGroupObservable = new nC.d, this.onAfterRenderingGroupObservable = new nC.d, this.onMeshImportedObservable = new nC.d, this.onAnimationFileImportedObservable = new nC.d, this.onEnvironmentTextureChangedObservable = new nC.d, this.onMeshUnderPointerUpdatedObservable = new nC.d, this._registeredForLateAnimationBindings = new fC.e(256), this._pointerPickingConfiguration = new kC, this.onPrePointerObservable = new nC.d, this.onPointerObservable = new nC.d, this.onPreKeyboardObservable = new nC.d, this.onKeyboardObservable = new nC.d, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = bZ.FOGMODE_NONE, this.fogColor = new jC.e(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.ku = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new FC.r(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new fC.e(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new DC.b, this._activeIndices = new DC.b, this._activeParticles = new DC.b, this._activeBones = new DC.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new fC.i(256), this._processedMaterials = new fC.i(256), this._renderTargets = new fC.e(256), this._materialsRenderTargets = new fC.e(256), this._activeParticleSystems = new fC.i(256), this._activeSkeletons = new fC.e(32), this._softwareSkinnedMeshes = new fC.e(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = FC.b.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = GC.c.Create(), this._beforeClearStage = GC.c.Create(), this._beforeRenderTargetClearStage = GC.c.Create(), this._gatherRenderTargetsStage = GC.c.Create(), this._gatherActiveCameraRenderTargetsStage = GC.c.Create(), this._isReadyForMeshStage = GC.c.Create(), this._beforeEvaluateActiveMeshStage = GC.c.Create(), this._evaluateSubMeshStage = GC.c.Create(), this._preActiveMeshStage = GC.c.Create(), this._cameraDrawRenderTargetStage = GC.c.Create(), this._beforeCameraDrawStage = GC.c.Create(), this._beforeRenderTargetDrawStage = GC.c.Create(), this._beforeRenderingGroupDrawStage = GC.c.Create(), this._beforeRenderingMeshStage = GC.c.Create(), this._afterRenderingMeshStage = GC.c.Create(), this._afterRenderingGroupDrawStage = GC.c.Create(), this._afterCameraDrawStage = GC.c.Create(), this._afterCameraPostProcessStage = GC.c.Create(), this._afterRenderTargetDrawStage = GC.c.Create(), this._afterRenderTargetPostProcessStage = GC.c.Create(), this._afterRenderStage = GC.c.Create(), this._pointerMoveStage = GC.c.Create(), this._pointerDownStage = GC.c.Create(), this._pointerUpStage = GC.c.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new nC.d, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const ZC = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...zC
        };
        this.defaultCameraLayerMask = ZC.defaultCameraLayerMask, this.defaultRenderableLayerMask = ZC.defaultRenderableLayerMask, CC = this._engine = CC || AC.c.LastCreatedEngine, ZC.virtual ? CC._virtualScenes.push(this) : (AC.c._LastCreatedScene = this, CC.scenes.push(this)), (CC.getCreationOptions().useLargeWorldRendering || zC?.useFloatingOrigin) && ((0, pC.c)(), this._floatingOriginScene = this, pC.b.Km = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new PC.b(this), SC.e && (this.postProcessManager = new SC.e(this)), (0, RC.k)() && this.attachControl(), this._createUbo(), WC.e && (this._imageProcessingConfiguration = new WC.e), this.setDefaultCandidateProviders(), ZC.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = ZC.useMaterialMeshMap, this.useClonedMeshMap = ZC.useClonedMeshMap, zC && zC.virtual || CC.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(CC) {
        return this._defaultSubMeshCandidates.data = CC.Zx, this._defaultSubMeshCandidates.length = CC.Zx.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = CC => this._getDefaultSubMeshCandidates(CC), this.getIntersectingSubMeshCandidates = (CC, zC) => this._getDefaultSubMeshCandidates(CC), this.getCollidingSubMeshCandidates = (CC, zC) => this._getDefaultSubMeshCandidates(CC)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(CC) {
        this._inputManager.pointerX = CC
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(CC) {
        this._inputManager.pointerY = CC
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
      isCachedMaterialInvalid(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== zC || this._cachedMaterial !== CC || this._cachedVisibility !== ZC
      }
      mg() {
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
      simulatePointerMove(CC, zC) {
        return this._inputManager.simulatePointerMove(CC, zC), this
      }
      simulatePointerDown(CC, zC) {
        return this._inputManager.simulatePointerDown(CC, zC), this
      }
      simulatePointerUp(CC, zC, ZC) {
        return this._inputManager.simulatePointerUp(CC, zC, ZC), this
      }
      isPointerCaptured() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(CC)
      }
      attachControl() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(CC, zC, ZC)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let CC, zC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const ZC = this.mg(),
          QC = ZC.currentRenderPassId;
        ZC.currentRenderPassId = this.activeCamera?.renderPassId ?? QC;
        let wC = !0;
        for (this._pendingData.length > 0 && (wC = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && wC && (wC = this.depthPeelingRenderer.isReady()), zC && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), CC = 0; CC < this.meshes.length; CC++) {
          const QC = this.meshes[CC];
          if (!QC.Zx || 0 === QC.Zx.length) continue;
          if (!QC.isReady(!0)) {
            wC = !1;
            continue
          }
          const bC = QC.hasThinInstances || "InstancedMesh" === QC.getClassName() || "InstancedLinesMesh" === QC.getClassName() || ZC.getCaps().instancedArrays && QC.instances.length > 0;
          for (let CC = 0, zC = this._isReadyForMeshStage; CC < zC.length; CC++) {
            zC[CC].action(QC, bC) || (wC = !1)
          }
          if (!zC) continue;
          const nC = QC.material || this.defaultMaterial;
          if (nC)
            if (nC._storeEffectOnSubMeshes)
              for (const CC of QC.Zx) {
                const zC = CC.cg();
                zC && zC.hasRenderTargetTextures && null != zC.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(zC) && (this._processedMaterials.push(zC), this._materialsRenderTargets.concatWithNoDuplicate(zC.getRenderTargetTextures()))
              } else nC.hasRenderTargetTextures && null != nC.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(nC) && (this._processedMaterials.push(nC), this._materialsRenderTargets.concatWithNoDuplicate(nC.getRenderTargetTextures()))
        }
        if (zC) {
          for (CC = 0; CC < this._materialsRenderTargets.length; ++CC) {
            this._materialsRenderTargets.data[CC].isReadyForRendering() || (wC = !1)
          }
          for (CC = 0; CC < this.customRenderTargets.length; ++CC) {
            this.customRenderTargets[CC].isReadyForRendering() || (wC = !1)
          }
        }
        for (CC = 0; CC < this.geometries.length; CC++) {
          2 === this.geometries[CC].delayLoadState && (wC = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const bC of this.activeCameras) bC.isReady(!0) || (wC = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (wC = !1));
        for (const bC of this.Ix) bC.isReady() || (wC = !1);
        if (this.proceduralTexturesEnabled)
          for (const bC of this.proceduralTextures) bC.isReady() || (wC = !1);
        if (this.layers)
          for (const bC of this.layers) bC.isReady() || (wC = !1);
        if (this.effectLayers)
          for (const bC of this.effectLayers) bC.isLayerReady() || (wC = !1);
        for (const bC of this._isReadyChecks) bC.isReady() || (wC = !1);
        return ZC.areAllEffectsReady() || (wC = !1), ZC.currentRenderPassId = QC, wC
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(CC) {
        this.onBeforeRenderObservable.add(CC)
      }
      unregisterBeforeRender(CC) {
        this.onBeforeRenderObservable.removeCallback(CC)
      }
      registerAfterRender(CC) {
        this.onAfterRenderObservable.add(CC)
      }
      unregisterAfterRender(CC) {
        this.onAfterRenderObservable.removeCallback(CC)
      }
      _executeOnceBeforeRender(CC) {
        const zC = () => {
          CC(), setTimeout((() => {
            this.unregisterBeforeRender(zC)
          }))
        };
        this.registerBeforeRender(zC)
      }
      executeOnceBeforeRender(CC, zC) {
        void 0 !== zC ? setTimeout((() => {
          this._executeOnceBeforeRender(CC)
        }), zC) : this._executeOnceBeforeRender(CC)
      }
      addPendingData(CC) {
        this._pendingData.push(CC)
      }
      removePendingData(CC) {
        const zC = this.isLoading,
          ZC = this._pendingData.indexOf(CC); - 1 !== ZC && this._pendingData.splice(ZC, 1), zC && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(CC) {
        -1 === this._isReadyChecks.indexOf(CC) && this._isReadyChecks.push(CC)
      }
      removeIsReadyCheck(CC) {
        const zC = this._isReadyChecks.indexOf(CC); - 1 !== zC && this._isReadyChecks.splice(zC, 1)
      }
      executeWhenReady(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(CC), null === this._executeWhenReadyTimeoutId && this._checkIsReady(zC)
      }
      async whenReadyAsync() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((zC => {
          this.executeWhenReady((() => {
            zC()
          }), CC)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = bC.b.Now;
        else if (this.onReadyTimeoutDuration > 0 && bC.b.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(CC)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(CC)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = bC.b.Now
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
      setTransformMatrix(CC, zC, ZC, QC) {
        this._multiviewSceneUboIsActive = !!(ZC && QC && this._multiviewSceneUbo), this._viewUpdateFlag === CC.updateFlag && this._projectionUpdateFlag === zC.updateFlag || (this._viewUpdateFlag = CC.updateFlag, this._projectionUpdateFlag = zC.updateFlag, this._viewMatrix = CC, this._projectionMatrix = zC, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new FC.b), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? yC.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = yC.e.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(ZC, QC) : this._sceneUbo.useUbo && (this._sceneUbo.x_("viewProjection", this._transformMatrix), this._sceneUbo.x_("view", this._viewMatrix), this._sceneUbo.x_("projection", this._projectionMatrix), this._sceneUbo.x_("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(CC, zC) {
        const ZC = "boolean" === typeof zC ? zC : zC?.trackUBOsInFrame,
          QC = new NC.c(this._engine, void 0, !1, CC ?? "sS", void 0, ZC);
        return QC.addUniform("viewProjection", 16), QC.addUniform("view", 16), QC.addUniform("projection", 16), QC.addUniform("vEyePosition", 4), QC.addUniform("inverseProjection", 16), QC
      }
      setSceneUniformBuffer(CC) {
        this._sceneUbo = CC, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : FC.r.ZeroReadOnly
      }
      getUniqueId() {
        return LC.UniqueId
      }
      zQC(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(CC), CC._resyncLightSources(), CC.parent || CC._addToSceneRootNodes(), wC.d.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(CC)
          })), zC)) {
          const zC = CC.getChildMeshes();
          for (const CC of zC) this.zQC(CC)
        }
      }
      IH(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZC = this.meshes.indexOf(CC);
        if (-1 !== ZC && (this.meshes.splice(ZC, 1), CC.parent || CC._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(CC), this.onMeshRemovedObservable.notifyObservers(CC), zC) {
          const zC = CC.getChildMeshes();
          for (const CC of zC) this.IH(CC)
        }
        return ZC
      }
      addTransformNode(CC) {
        this._blockEntityCollection || CC.Km() === this && -1 !== CC._indexInSceneTransformNodesArray || (CC._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(CC), CC.parent || CC._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(CC))
      }
      removeTransformNode(CC) {
        const zC = CC._indexInSceneTransformNodesArray;
        if (-1 !== zC) {
          if (zC !== this.transformNodes.length - 1) {
            const CC = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[zC] = CC, CC._indexInSceneTransformNodesArray = zC
          }
          CC._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), CC.parent || CC._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(CC), zC
      }
      removeSkeleton(CC) {
        const zC = this.skeletons.indexOf(CC);
        return -1 !== zC && (this.skeletons.splice(zC, 1), this.onSkeletonRemovedObservable.notifyObservers(CC), this._executeActiveContainerCleanup(this._activeSkeletons)), zC
      }
      removeMorphTargetManager(CC) {
        const zC = this.morphTargetManagers.indexOf(CC);
        return -1 !== zC && this.morphTargetManagers.splice(zC, 1), zC
      }
      removeLight(CC) {
        const zC = this.lights.indexOf(CC);
        if (-1 !== zC) {
          for (const zC of this.meshes) zC._removeLightSource(CC, !1);
          this.lights.splice(zC, 1), this.sortLightsByPriority(), CC.parent || CC._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(CC)
        }
        return zC
      }
      removeCamera(CC) {
        const zC = this.cameras.indexOf(CC);
        if (-1 !== zC && (this.cameras.splice(zC, 1), CC.parent || CC._removeFromSceneRootNodes()), this.activeCameras) {
          const zC = this.activeCameras.indexOf(CC); - 1 !== zC && this.activeCameras.splice(zC, 1)
        }
        return this.activeCamera === CC && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(CC), zC
      }
      removeParticleSystem(CC) {
        const zC = this.Ix.indexOf(CC);
        return -1 !== zC && (this.Ix.splice(zC, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(CC), zC
      }
      removeAnimation(CC) {
        const zC = this.animations.indexOf(CC);
        return -1 !== zC && this.animations.splice(zC, 1), zC
      }
      stopAnimation(CC, zC, ZC) {}
      removeAnimationGroup(CC) {
        const zC = this.animationGroups.indexOf(CC);
        return -1 !== zC && this.animationGroups.splice(zC, 1), this.onAnimationGroupRemovedObservable.notifyObservers(CC), zC
      }
      removeMultiMaterial(CC) {
        const zC = this.multiMaterials.indexOf(CC);
        return -1 !== zC && this.multiMaterials.splice(zC, 1), this.onMultiMaterialRemovedObservable.notifyObservers(CC), zC
      }
      removeMaterial(CC) {
        const zC = CC._indexInSceneMaterialArray;
        if (-1 !== zC && zC < this.materials.length) {
          if (zC !== this.materials.length - 1) {
            const CC = this.materials[this.materials.length - 1];
            this.materials[zC] = CC, CC._indexInSceneMaterialArray = zC
          }
          CC._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(CC), zC
      }
      removeActionManager(CC) {
        const zC = this.actionManagers.indexOf(CC);
        return -1 !== zC && this.actionManagers.splice(zC, 1), zC
      }
      removeTexture(CC) {
        const zC = this.textures.indexOf(CC);
        return -1 !== zC && this.textures.splice(zC, 1), this.onTextureRemovedObservable.notifyObservers(CC), zC
      }
      removeFrameGraph(CC) {
        const zC = this.frameGraphs.indexOf(CC);
        return -1 !== zC && this.frameGraphs.splice(zC, 1), this.onFrameGraphRemovedObservable.notifyObservers(CC), zC
      }
      removeObjectRenderer(CC) {
        const zC = this.objectRenderers.indexOf(CC);
        return -1 !== zC && this.objectRenderers.splice(zC, 1), this.onObjectRendererRemovedObservable.notifyObservers(CC), zC
      }
      removePostProcess(CC) {
        const zC = this.postProcesses.indexOf(CC);
        return -1 !== zC && this.postProcesses.splice(zC, 1), this.onPostProcessRemovedObservable.notifyObservers(CC), zC
      }
      removeEffectLayer(CC) {
        const zC = this.effectLayers.indexOf(CC);
        return -1 !== zC && this.effectLayers.splice(zC, 1), this.onEffectLayerRemovedObservable.notifyObservers(CC), zC
      }
      addLight(CC) {
        if (!this._blockEntityCollection) {
          this.lights.push(CC), this.sortLightsByPriority(), CC.parent || CC._addToSceneRootNodes();
          for (const zC of this.meshes) - 1 === zC.lightSources.indexOf(CC) && (zC.lightSources.push(CC), zC._resyncLightSources());
          wC.d.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(CC)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(BC.c.CompareLightsPriority)
      }
      addCamera(CC) {
        this._blockEntityCollection || (this.cameras.push(CC), wC.d.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(CC)
        })), CC.parent || CC._addToSceneRootNodes())
      }
      addSkeleton(CC) {
        this._blockEntityCollection || (this.skeletons.push(CC), wC.d.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(CC)
        })))
      }
      addParticleSystem(CC) {
        this._blockEntityCollection || (this.Ix.push(CC), wC.d.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(CC)
        })))
      }
      addAnimation(CC) {
        this._blockEntityCollection || this.animations.push(CC)
      }
      addAnimationGroup(CC) {
        this._blockEntityCollection || (this.animationGroups.push(CC), wC.d.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(CC)
        })))
      }
      addMultiMaterial(CC) {
        this._blockEntityCollection || (this.multiMaterials.push(CC), wC.d.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(CC)
        })))
      }
      addMaterial(CC) {
        this._blockEntityCollection || CC.Km() === this && -1 !== CC._indexInSceneMaterialArray || (CC._indexInSceneMaterialArray = this.materials.length, this.materials.push(CC), wC.d.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(CC)
        })))
      }
      addMorphTargetManager(CC) {
        this._blockEntityCollection || this.morphTargetManagers.push(CC)
      }
      addGeometry(CC) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[CC.uniqueId] = this.geometries.length), this.geometries.push(CC))
      }
      addActionManager(CC) {
        this.actionManagers.push(CC)
      }
      addTexture(CC) {
        this._blockEntityCollection || (this.textures.push(CC), this.onNewTextureAddedObservable.notifyObservers(CC))
      }
      addFrameGraph(CC) {
        this.frameGraphs.push(CC), wC.d.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(CC)
        }))
      }
      addObjectRenderer(CC) {
        this.objectRenderers.push(CC), wC.d.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(CC)
        }))
      }
      addPostProcess(CC) {
        this._blockEntityCollection || (this.postProcesses.push(CC), wC.d.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(CC)
        })))
      }
      addEffectLayer(CC) {
        this._blockEntityCollection || (this.effectLayers.push(CC), wC.d.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(CC)
        })))
      }
      switchActiveCamera(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = CC, zC && CC.attachControl())
      }
      setActiveCameraById(CC) {
        const zC = this.getCameraById(CC);
        return zC ? (this.activeCamera = zC, zC) : null
      }
      setActiveCameraByName(CC) {
        const zC = this.getCameraByName(CC);
        return zC ? (this.activeCamera = zC, zC) : null
      }
      getAnimationGroupByName(CC) {
        for (let zC = 0; zC < this.animationGroups.length; zC++)
          if (this.animationGroups[zC].name === CC) return this.animationGroups[zC];
        return null
      }
      _getMaterial(CC, zC) {
        for (let ZC = 0; ZC < this.materials.length; ZC++) {
          const CC = this.materials[ZC];
          if (zC(CC)) return CC
        }
        if (CC)
          for (let ZC = 0; ZC < this.multiMaterials.length; ZC++) {
            const CC = this.multiMaterials[ZC];
            if (zC(CC)) return CC
          }
        return null
      }
      getMaterialByUniqueID(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(CC, zC)
      }
      getMaterialByUniqueId(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(zC, (zC => zC.uniqueId === CC))
      }
      getMaterialById(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(zC, (zC => zC.id === CC))
      }
      getMaterialByName(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(zC, (zC => zC.name === CC))
      }
      getLastMaterialById(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let ZC = this.materials.length - 1; ZC >= 0; ZC--)
          if (this.materials[ZC].id === CC) return this.materials[ZC];
        if (zC)
          for (let ZC = this.multiMaterials.length - 1; ZC >= 0; ZC--)
            if (this.multiMaterials[ZC].id === CC) return this.multiMaterials[ZC];
        return null
      }
      getTextureByUniqueId(CC) {
        for (let zC = 0; zC < this.textures.length; zC++)
          if (this.textures[zC].uniqueId === CC) return this.textures[zC];
        return null
      }
      getTextureByName(CC) {
        for (let zC = 0; zC < this.textures.length; zC++)
          if (this.textures[zC].name === CC) return this.textures[zC];
        return null
      }
      getCameraById(CC) {
        for (let zC = 0; zC < this.cameras.length; zC++)
          if (this.cameras[zC].id === CC) return this.cameras[zC];
        return null
      }
      getCameraByUniqueId(CC) {
        for (let zC = 0; zC < this.cameras.length; zC++)
          if (this.cameras[zC].uniqueId === CC) return this.cameras[zC];
        return null
      }
      getCameraByName(CC) {
        for (let zC = 0; zC < this.cameras.length; zC++)
          if (this.cameras[zC].name === CC) return this.cameras[zC];
        return null
      }
      getBoneById(CC) {
        for (let zC = 0; zC < this.skeletons.length; zC++) {
          const ZC = this.skeletons[zC];
          for (let zC = 0; zC < ZC.bones.length; zC++)
            if (ZC.bones[zC].id === CC) return ZC.bones[zC]
        }
        return null
      }
      getBoneByName(CC) {
        for (let zC = 0; zC < this.skeletons.length; zC++) {
          const ZC = this.skeletons[zC];
          for (let zC = 0; zC < ZC.bones.length; zC++)
            if (ZC.bones[zC].name === CC) return ZC.bones[zC]
        }
        return null
      }
      getLightByName(CC) {
        for (let zC = 0; zC < this.lights.length; zC++)
          if (this.lights[zC].name === CC) return this.lights[zC];
        return null
      }
      getLightById(CC) {
        for (let zC = 0; zC < this.lights.length; zC++)
          if (this.lights[zC].id === CC) return this.lights[zC];
        return null
      }
      getLightByUniqueId(CC) {
        for (let zC = 0; zC < this.lights.length; zC++)
          if (this.lights[zC].uniqueId === CC) return this.lights[zC];
        return null
      }
      getParticleSystemById(CC) {
        for (let zC = 0; zC < this.Ix.length; zC++)
          if (this.Ix[zC].id === CC) return this.Ix[zC];
        return null
      }
      getGeometryById(CC) {
        for (let zC = 0; zC < this.geometries.length; zC++)
          if (this.geometries[zC].id === CC) return this.geometries[zC];
        return null
      }
      _getGeometryByUniqueId(CC) {
        if (this._geometriesByUniqueId) {
          const zC = this._geometriesByUniqueId[CC];
          if (void 0 !== zC) return this.geometries[zC]
        } else
          for (let zC = 0; zC < this.geometries.length; zC++)
            if (this.geometries[zC].uniqueId === CC) return this.geometries[zC];
        return null
      }
      getFrameGraphByName(CC) {
        for (let zC = 0; zC < this.frameGraphs.length; zC++)
          if (this.frameGraphs[zC].name === CC) return this.frameGraphs[zC];
        return null
      }
      pushGeometry(CC, zC) {
        return !(!zC && this._getGeometryByUniqueId(CC.uniqueId)) && (this.addGeometry(CC), wC.d.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(CC)
        })), !0)
      }
      removeGeometry(CC) {
        let zC;
        if (this._geometriesByUniqueId) {
          if (zC = this._geometriesByUniqueId[CC.uniqueId], void 0 === zC) return !1
        } else if (zC = this.geometries.indexOf(CC), zC < 0) return !1;
        if (zC !== this.geometries.length - 1) {
          const CC = this.geometries[this.geometries.length - 1];
          CC && (this.geometries[zC] = CC, this._geometriesByUniqueId && (this._geometriesByUniqueId[CC.uniqueId] = zC))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[CC.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(CC), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(CC) {
        for (let zC = 0; zC < this.meshes.length; zC++)
          if (this.meshes[zC].id === CC) return this.meshes[zC];
        return null
      }
      getMeshesById(CC) {
        return this.meshes.filter((function(zC) {
          return zC.id === CC
        }))
      }
      getTransformNodeById(CC) {
        for (let zC = 0; zC < this.transformNodes.length; zC++)
          if (this.transformNodes[zC].id === CC) return this.transformNodes[zC];
        return null
      }
      getTransformNodeByUniqueId(CC) {
        for (let zC = 0; zC < this.transformNodes.length; zC++)
          if (this.transformNodes[zC].uniqueId === CC) return this.transformNodes[zC];
        return null
      }
      getTransformNodesById(CC) {
        return this.transformNodes.filter((function(zC) {
          return zC.id === CC
        }))
      }
      getMeshByUniqueId(CC) {
        for (let zC = 0; zC < this.meshes.length; zC++)
          if (this.meshes[zC].uniqueId === CC) return this.meshes[zC];
        return null
      }
      getLastMeshById(CC) {
        for (let zC = this.meshes.length - 1; zC >= 0; zC--)
          if (this.meshes[zC].id === CC) return this.meshes[zC];
        return null
      }
      getLastTransformNodeById(CC) {
        for (let zC = this.transformNodes.length - 1; zC >= 0; zC--)
          if (this.transformNodes[zC].id === CC) return this.transformNodes[zC];
        return null
      }
      getLastEntryById(CC) {
        let zC;
        for (zC = this.meshes.length - 1; zC >= 0; zC--)
          if (this.meshes[zC].id === CC) return this.meshes[zC];
        for (zC = this.transformNodes.length - 1; zC >= 0; zC--)
          if (this.transformNodes[zC].id === CC) return this.transformNodes[zC];
        for (zC = this.cameras.length - 1; zC >= 0; zC--)
          if (this.cameras[zC].id === CC) return this.cameras[zC];
        for (zC = this.lights.length - 1; zC >= 0; zC--)
          if (this.lights[zC].id === CC) return this.lights[zC];
        for (zC = this.skeletons.length - 1; zC >= 0; zC--) {
          const ZC = this.skeletons[zC];
          for (let zC = ZC.bones.length - 1; zC >= 0; zC--)
            if (ZC.bones[zC].id === CC) return ZC.bones[zC]
        }
        return null
      }
      getNodeById(CC) {
        const zC = this.getMeshById(CC);
        if (zC) return zC;
        const ZC = this.getTransformNodeById(CC);
        if (ZC) return ZC;
        const QC = this.getLightById(CC);
        if (QC) return QC;
        const wC = this.getCameraById(CC);
        if (wC) return wC;
        const bC = this.getBoneById(CC);
        return bC || null
      }
      getNodeByName(CC) {
        const zC = this.getMeshByName(CC);
        if (zC) return zC;
        const ZC = this.getTransformNodeByName(CC);
        if (ZC) return ZC;
        const QC = this.getLightByName(CC);
        if (QC) return QC;
        const wC = this.getCameraByName(CC);
        if (wC) return wC;
        const bC = this.getBoneByName(CC);
        return bC || null
      }
      getMeshByName(CC) {
        for (let zC = 0; zC < this.meshes.length; zC++)
          if (this.meshes[zC].name === CC) return this.meshes[zC];
        return null
      }
      getTransformNodeByName(CC) {
        for (let zC = 0; zC < this.transformNodes.length; zC++)
          if (this.transformNodes[zC].name === CC) return this.transformNodes[zC];
        return null
      }
      getLastSkeletonById(CC) {
        for (let zC = this.skeletons.length - 1; zC >= 0; zC--)
          if (this.skeletons[zC].id === CC) return this.skeletons[zC];
        return null
      }
      getSkeletonByUniqueId(CC) {
        for (let zC = 0; zC < this.skeletons.length; zC++)
          if (this.skeletons[zC].uniqueId === CC) return this.skeletons[zC];
        return null
      }
      getSkeletonById(CC) {
        for (let zC = 0; zC < this.skeletons.length; zC++)
          if (this.skeletons[zC].id === CC) return this.skeletons[zC];
        return null
      }
      getSkeletonByName(CC) {
        for (let zC = 0; zC < this.skeletons.length; zC++)
          if (this.skeletons[zC].name === CC) return this.skeletons[zC];
        return null
      }
      getMorphTargetManagerById(CC) {
        for (let zC = 0; zC < this.morphTargetManagers.length; zC++)
          if (this.morphTargetManagers[zC].uniqueId === CC) return this.morphTargetManagers[zC];
        return null
      }
      getMorphTargetById(CC) {
        for (let zC = 0; zC < this.morphTargetManagers.length; ++zC) {
          const ZC = this.morphTargetManagers[zC];
          for (let zC = 0; zC < ZC.numTargets; ++zC) {
            const QC = ZC.getTarget(zC);
            if (QC.id === CC) return QC
          }
        }
        return null
      }
      getMorphTargetByName(CC) {
        for (let zC = 0; zC < this.morphTargetManagers.length; ++zC) {
          const ZC = this.morphTargetManagers[zC];
          for (let zC = 0; zC < ZC.numTargets; ++zC) {
            const QC = ZC.getTarget(zC);
            if (QC.name === CC) return QC
          }
        }
        return null
      }
      getPostProcessByName(CC) {
        for (let zC = 0; zC < this.postProcesses.length; ++zC) {
          const ZC = this.postProcesses[zC];
          if (ZC.name === CC) return ZC
        }
        return null
      }
      isActiveMesh(CC) {
        return -1 !== this._activeMeshes.indexOf(CC)
      }
      get uid() {
        return this._uid || (this._uid = QC.g.RandomId()), this._uid
      }
      addExternalData(CC, zC) {
        return this._externalData || (this._externalData = new oC), this._externalData.add(CC, zC)
      }
      getExternalData(CC) {
        return this._externalData ? this._externalData.get(CC) : null
      }
      getOrAddExternalDataWithFactory(CC, zC) {
        return this._externalData || (this._externalData = new oC), this._externalData.getOrAddWithFactory(CC, zC)
      }
      removeExternalData(CC) {
        return this._externalData.remove(CC)
      }
      _evaluateSubMesh(CC, zC, ZC, QC) {
        if (QC || CC.isInFrustum(this._frustumPlanes)) {
          for (let QC = 0, wC = this._evaluateSubMeshStage; QC < wC.length; QC++) {
            wC[QC].action(zC, CC)
          }
          const ZC = CC.cg();
          null !== ZC && void 0 !== ZC && (ZC.hasRenderTargetTextures && null != ZC.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(ZC) && (this._processedMaterials.push(ZC), this._materialsRenderTargets.concatWithNoDuplicate(ZC.getRenderTargetTextures())), this._renderingManager.dispatch(CC, zC, ZC))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(CC) {
        this._preventFreeActiveMeshesAndRenderingGroups !== CC && (CC && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = CC)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let CC = 0; CC < this.activeCameras.length; CC++) {
            const zC = this.activeCameras[CC];
            zC && zC._activeMeshes && zC._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let CC = 0; CC < this.textures.length; CC++) {
            const zC = this.textures[CC];
            zC && zC.renderList && zC.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zC = arguments.length > 1 ? arguments[1] : void 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          bC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const nC = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const CC of nC) CC.objectRenderer._freezeActiveMeshes(QC);
          return this._freezeActiveMeshesCancel = (0, wC.g)((() => {
            let CC = !0,
              zC = !0;
            for (const ZC of nC) CC && (CC = ZC.objectRenderer._isFrozen), zC && (zC = null !== ZC.objectRenderer._freezeActiveMeshesCancel);
            if (CC) return !0;
            if (!zC) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = bC, this._skipEvaluateActiveMeshesCompletely = CC, zC?.()
          }), ((CC, zC) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), zC) {
              const zC = "Scene: Timeout while waiting for meshes to be frozen.";
              ZC ? ZC(zC) : (CZ.c.Error(zC), CC && CZ.c.Error(CC))
            } else {
              const zC = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              ZC ? ZC(zC) : (CZ.c.Error(zC), CC && (CZ.c.Error(CC), CC.stack && CZ.c.Error(CC.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = bC, this._skipEvaluateActiveMeshesCompletely = CC, QC)
              for (let CC = 0; CC < this._activeMeshes.length; CC++) this._activeMeshes.data[CC]._freeze();
            zC && zC()
          } else ZC && ZC("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let CC = 0; CC < this.meshes.length; CC++) {
          const zC = this.meshes[CC];
          zC._internalAbstractMeshDataInfo && (zC._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const CC = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const zC of CC) zC.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let CC = 0; CC < this._activeMeshes.length; CC++) this._activeMeshes.data[CC]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(CC) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => CC.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const CC = this._activeMeshes.length;
            for (let zC = 0; zC < CC; zC++) {
              this._activeMeshes.data[zC].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const CC = this._activeParticleSystems.length;
            for (let zC = 0; zC < CC; zC++) this._activeParticleSystems.data[zC].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let wC = 0, bC = this._beforeEvaluateActiveMeshStage; wC < bC.length; wC++) {
          bC[wC].action()
        }
        const CC = this.getActiveMeshCandidates(),
          zC = CC.length,
          ZC = DC.b.Enabled,
          QC = this.customLODSelector;
        for (let wC = 0; wC < zC; wC++) {
          const zC = CC.data[wC],
            bC = !QC && !zC.ZH && !zC._internalMeshDataInfo?._LODLevels.length;
          let nC, fC;
          if ((bC || (nC = zC._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), nC ? nC[1] = -1 : (nC = [zC, -1], zC._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, nC))), !zC.isBlocked) && (ZC && this._totalVertices.addCount(zC.getTotalVertices(), !1), zC.isReady() && zC.isEnabled() && !zC.sq.hasAZeroComponent)) {
            if (zC.computeWorldMatrix(), zC.actionManager && zC.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(zC), bC) fC = zC;
            else if (fC = QC ? QC(zC, this.activeCamera) : zC.getLOD(this.activeCamera), nC[0] = fC, nC[1] = this._frameId, void 0 === fC || null === fC) continue;
            if (fC !== zC && 0 !== fC.billboardMode && fC.computeWorldMatrix(), zC._preActivate(), zC.isVisible && zC.visibility > 0 && 0 !== (zC.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || zC.Hg || zC.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(zC), this.activeCamera._activeMeshes.push(zC), fC !== zC && fC._activate(this._renderId, !1);
              for (let CC = 0, ZC = this._preActiveMeshStage; CC < ZC.length; CC++) {
                ZC[CC].action(zC)
              }
              zC._activate(this._renderId, !1) && (zC.ZH ? zC._internalAbstractMeshDataInfo._actAsRegularMesh && (fC = zC) : fC._internalAbstractMeshDataInfo._onlyForInstances = !1, fC._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(zC, fC)), zC._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let CC = 0; CC < this.Ix.length; CC++) {
            const zC = this.Ix[CC];
            if (!zC.isStarted() || !zC.emitter) continue;
            const ZC = zC.emitter;
            ZC.position && !ZC.isEnabled() || (this._activeParticleSystems.push(zC), zC.animate(), this._renderingManager.dispatchParticles(zC))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(CC) {
        this._skeletonsEnabled && CC.skeleton && (this._activeSkeletons.pushNoDuplicate(CC.skeleton) && (CC.skeleton.prepare(), this._activeBones.addCount(CC.skeleton.bones.length, !1)), CC.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(CC) && this.frameGraph && CC.applySkeleton(CC.skeleton))
      }
      _activeMesh(CC, zC) {
        this._prepareSkeleton(zC);
        let ZC = CC.yQC || CC.ZH || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || zC.Hg;
        if (zC && zC.Zx && zC.Zx.length > 0) {
          const QC = this.getActiveSubMeshCandidates(zC),
            wC = QC.length;
          ZC = ZC || 1 === wC;
          for (let bC = 0; bC < wC; bC++) {
            const wC = QC.data[bC];
            this._evaluateSubMesh(wC, zC, CC, ZC)
          }
        }
      }
      updateTransformMatrix(CC) {
        const zC = this.activeCamera;
        if (zC)
          if (zC._renderingMultiview) {
            const ZC = zC._rigCameras[0],
              QC = zC._rigCameras[1];
            this.setTransformMatrix(ZC.getViewMatrix(), ZC.getProjectionMatrix(CC), QC.getViewMatrix(), QC.getProjectionMatrix(CC))
          } else this.setTransformMatrix(zC.getViewMatrix(), zC.getProjectionMatrix(CC))
      }
      _bindFrameBuffer(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (CC && CC._multiviewTexture ? CC._multiviewTexture._bindFrameBuffer() : CC && CC.outputRenderTarget ? CC.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), zC && this._clearFrameBuffer(CC)
      }
      _clearFrameBuffer(CC) {
        if (CC && CC._multiviewTexture);
        else if (CC && CC.outputRenderTarget && !CC._renderingMultiview) {
          const zC = CC.outputRenderTarget;
          zC.onClearObservable.hasObservers() ? zC.onClearObservable.notifyObservers(this._engine) : zC.skipInitialClear || CC.isRightCamera || (this.autoClear && this._engine.clear(zC.clearColor || this._clearColor, !zC._cleared, !0, !0), zC._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(CC, zC) {
        let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (CC && CC._skipRendering) return;
        const wC = this._engine;
        if (this._activeCamera = CC, !this.activeCamera) throw new Error("Active camera not set");
        if (wC.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && ZC) {
          let zC = !0;
          CC._renderingMultiview && CC.outputRenderTarget && (zC = CC.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, CC.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), CC._renderingMultiview && CC.outputRenderTarget && (CC.outputRenderTarget.skipInitialClear = zC)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = CC.outputRenderTarget?.renderPassId ?? CC.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let QC = 0; QC < this._softwareSkinnedMeshes.length; QC++) {
          const CC = this._softwareSkinnedMeshes.data[QC];
          CC.applySkeleton(CC.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), CC.customRenderTargets && CC.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(CC.customRenderTargets), zC && zC.customRenderTargets && zC.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(zC.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let QC = 0, fC = this._gatherActiveCameraRenderTargetsStage; QC < fC.length; QC++) {
          fC[QC].action(this._renderTargets)
        }
        let bC = !1;
        if (this.renderTargetsEnabled) {
          let CC;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            QC.g.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const zC = this.getBoundingBoxRenderer?.();
            for (let ZC = 0; ZC < this._renderTargets.length; ZC++) {
              const QC = this._renderTargets.data[ZC];
              if (QC._shouldRender()) {
                this._renderId++;
                const ZC = QC.activeCamera && QC.activeCamera !== this.activeCamera;
                zC && !CC && (CC = zC.renderList.length > 0 ? zC.renderList.data.slice() : [], CC.length = zC.renderList.length), QC.render(ZC, this.dumpNextRenderTargets), bC = !0
              }
            }
            zC && CC && (zC.renderList.data = CC, zC.renderList.length = CC.length), QC.g.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const zC = this.getBoundingBoxRenderer?.();
            zC && !CC && (CC = zC.renderList.length > 0 ? zC.renderList.data.slice() : [], CC.length = zC.renderList.length);
            for (let CC = 0, ZC = this._cameraDrawRenderTargetStage; CC < ZC.length; CC++) {
              bC = ZC[CC].action(this.activeCamera) || bC
            }
            zC && CC && (zC.renderList.data = CC, zC.renderList.length = CC.length)
          }
          this._intermediateRendering = !1
        }
        bC && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || CC._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let QC = 0, fC = this._beforeCameraDrawStage; QC < fC.length; QC++) {
          fC[QC].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const nC = wC.snapshotRendering && 1 === wC.snapshotRenderingMode;
        nC && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !nC), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let QC = 0, fC = this._afterCameraDrawStage; QC < fC.length; QC++) {
          fC[QC].action(this.activeCamera)
        }
        if (this.postProcessManager && !CC._multiviewTexture) {
          const zC = CC.outputRenderTarget ? CC.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(CC.isIntermediate, zC)
        }
        for (let QC = 0, fC = this._afterCameraPostProcessStage; QC < fC.length; QC++) {
          fC[QC].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === CC.cameraRigMode || CC._renderingMultiview) return CC._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(CC, void 0, zC), void this.onAfterRenderCameraObservable.notifyObservers(CC);
        if (CC._useMultiviewToSingleView) this._renderMultiviewToSingleView(CC);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(CC);
          for (let zC = 0; zC < CC._rigCameras.length; zC++) this._renderForCamera(CC._rigCameras[zC], CC)
        }
        this._activeCamera = CC, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(CC)
      }
      _checkIntersections() {
        for (let CC = 0; CC < this._meshesForIntersections.length; CC++) {
          const zC = this._meshesForIntersections.data[CC];
          if (zC.actionManager)
            for (let CC = 0; zC.actionManager && CC < zC.actionManager.actions.length; CC++) {
              const ZC = zC.actionManager.actions[CC];
              if (12 === ZC.trigger || 13 === ZC.trigger) {
                const CC = ZC.getTriggerParameter(),
                  QC = CC.mesh ? CC.mesh : CC,
                  wC = QC.sQC(zC, CC.usePreciseIntersection),
                  bC = zC._intersectionsInProgress.indexOf(QC);
                wC && -1 === bC ? 12 === ZC.trigger ? (ZC._executeCurrent(gC.CreateNew(zC, void 0, QC)), zC._intersectionsInProgress.push(QC)) : 13 === ZC.trigger && zC._intersectionsInProgress.push(QC) : !wC && bC > -1 && (13 === ZC.trigger && ZC._executeCurrent(gC.CreateNew(zC, void 0, QC)), zC.actionManager.hasSpecificTrigger(13, (CC => {
                  const zC = CC.mesh ? CC.mesh : CC;
                  return QC === zC
                })) && 13 !== ZC.trigger || zC._intersectionsInProgress.splice(bC, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(CC) {}
      _animate(CC) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let CC = Math.max(bZ.MinDeltaTime, Math.min(this._engine.getDeltaTime(), bZ.MaxDeltaTime)) + this._timeAccumulator;
          const zC = this._engine.getTimeStep(),
            ZC = 1e3 / zC / 1e3;
          let QC = 0;
          const wC = this._engine.getLockstepMaxSteps();
          let bC = Math.floor(CC / zC);
          for (bC = Math.min(bC, wC); CC > 0 && QC < bC;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = zC * ZC, this._animate(zC), this.onAfterAnimationsObservable.notifyObservers(this), this.ku && this._advancePhysicsEngineStep(zC), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, QC++, CC -= zC;
          this._timeAccumulator = CC < 0 ? 0 : CC
        } else {
          const CC = this.useConstantAnimationDeltaTime ? 16 : Math.max(bZ.MinDeltaTime, Math.min(this._engine.getDeltaTime(), bZ.MaxDeltaTime));
          this._animationRatio = .06 * CC, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.ku && this._advancePhysicsEngineStep(CC)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(CC) {
        if (CC?.outputRenderTarget && !CC?.isRigCamera && (CC.outputRenderTarget._cleared = !1), CC?.rigCameras?.length)
          for (let zC = 0; zC < CC.rigCameras.length; ++zC) {
            const ZC = CC.rigCameras[zC].outputRenderTarget;
            ZC && (ZC._cleared = !1)
          }
      }
      resetDrawCache(CC) {
        if (this.meshes)
          for (const zC of this.meshes) zC.resetDrawCache(CC)
      }
      _renderWithFrameGraph() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, CC)
          for (const ZC of this.cameras)
            if (ZC.update(), 0 !== ZC.cameraRigMode)
              for (let CC = 0; CC < ZC._rigCameras.length; CC++) ZC._rigCameras[CC].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(zC)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(CC) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const zC = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), QC.g.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let CC = 0; CC < this._renderTargets.length; CC++) {
            const ZC = this._renderTargets.data[CC],
              QC = ZC.activeCamera || zC;
            this._renderRenderTarget(ZC, QC, !0, this.dumpNextRenderTargets)
          }
          QC.g.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let ZC = 0, QC = this._beforeClearStage; ZC < QC.length; ZC++) {
          QC[ZC].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const zC = this.getActiveMeshCandidates(),
            ZC = zC.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let CC = 0; CC < ZC; CC++) {
                const ZC = zC.data[CC];
                ZC._internalAbstractMeshDataInfo._wasActiveLastFrame && ZC.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const CC = this._activeParticleSystems.length;
              for (let zC = 0; zC < CC; zC++) this._activeParticleSystems.data[zC].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let QC = 0; QC < ZC; QC++) {
              const ZC = zC.data[QC];
              ZC._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, ZC.isBlocked || (this._totalVertices.addCount(ZC.getTotalVertices(), !1), ZC.isReady() && ZC.isEnabled() && !ZC.sq.hasAZeroComponent && (ZC.computeWorldMatrix(CC), ZC.actionManager && ZC.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(ZC)))
            }
            if (this.particlesEnabled)
              for (let CC = 0; CC < this.Ix.length; CC++) {
                const zC = this.Ix[CC];
                if (!zC.isStarted() || !zC.emitter) continue;
                const ZC = zC.emitter;
                ZC.position && !ZC.isEnabled() || (this._activeParticleSystems.push(zC), zC.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, CC._shouldRender()) {
          if (this._renderId++, this.activeCamera = zC, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), CC.render(ZC, QC)
        }
        this._intermediateRendering = !1
      }
      render() {
        let CC = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.GJ) return;
        const ZC = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(CC, zC)
        } finally {
          this._renderingMeshEvaluationDepth = ZC
        }
      }
      _renderFrame(CC, zC) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), pC.b.Km = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const ZC of this.activeCameras) this._checkCameraRenderTarget(ZC);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), zC || this.animate();
        for (let ZC = 0, QC = this._beforeCameraUpdateStage; ZC < QC.length; ZC++) {
          QC[ZC].action()
        }
        if (CC)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let ZC = 0; ZC < this.activeCameras.length; ZC++) {
              const CC = this.activeCameras[ZC];
              if (CC.update(), 0 !== CC.cameraRigMode)
                for (let zC = 0; zC < CC._rigCameras.length; zC++) CC._rigCameras[zC].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let ZC = 0; ZC < this.activeCamera._rigCameras.length; ZC++) this.activeCamera._rigCameras[ZC].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(CC, zC);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const CC = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            QC.g.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let zC = 0; zC < this.customRenderTargets.length; zC++) {
              const ZC = this.customRenderTargets[zC],
                QC = ZC.activeCamera || this.activeCamera;
              this._renderRenderTarget(ZC, QC, CC !== QC, this.dumpNextRenderTargets)
            }
            QC.g.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = CC?.renderPassId ?? 0, this.activeCamera = CC, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let zC = 0, ZC = this._beforeClearStage; zC < ZC.length; zC++) {
            ZC[zC].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let zC = 0, ZC = this._gatherRenderTargetsStage; zC < ZC.length; zC++) {
            ZC[zC].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let zC = 0; zC < this.activeCameras.length; zC++) this._processSubCameras(this.activeCameras[zC], zC > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let ZC = 0, QC = this._afterRenderStage; ZC < QC.length; ZC++) {
          QC[ZC].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let CC = 0; CC < this._toBeDisposed.length; CC++) {
            const zC = this._toBeDisposed[CC];
            zC && zC.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let CC = 0; CC < this.materials.length; CC++) this.materials[CC].freeze()
      }
      unfreezeMaterials() {
        for (let CC = 0; CC < this.materials.length; CC++) this.materials[CC].unfreeze()
      }
      dispose() {
        if (this.GJ) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, xC.b)(this.stopAllAnimations)) {
          for (const CC of this._activeAnimatables) CC.onAnimationEndObservable.clear(), CC.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const CC = this._activeRequests.slice();
        for (const bC of CC) bC.abort();
        this._activeRequests.length = 0;
        try {
          this.Tm.notifyObservers(this)
        } catch (wC) {
          CZ.c.Error("An error occurred while calling onDisposeObservable!", wC)
        }
        this.detachControl();
        const zC = this._engine.getInputElement?.();
        if (zC)
          for (let bC = 0; bC < this.cameras.length; bC++) this.cameras[bC].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (CC => CC.dispose(!0))), this._disposeList(this.transformNodes, (CC => CC.dispose(!0)));
        const ZC = this.cameras;
        this._disposeList(ZC), this._disposeList(this.Ix), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let QC = this._engine.scenes.indexOf(this);
        if (QC > -1 && this._engine.scenes.splice(QC, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, pC.g)(), AC.c._LastCreatedScene === this) {
          AC.c._LastCreatedScene = null;
          let CC = AC.c.Instances.length - 1;
          for (; CC >= 0;) {
            const zC = AC.c.Instances[CC];
            if (zC.scenes.length > 0) {
              AC.c._LastCreatedScene = zC.scenes[this._engine.scenes.length - 1];
              break
            }
            CC--
          }
        }
        QC = this._engine._virtualScenes.indexOf(this), QC > -1 && this._engine._virtualScenes.splice(QC, 1), this._engine.wipeCaches(!0), this.Tm.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(CC, zC) {
        const ZC = CC.slice(0);
        zC = zC ?? (CC => CC.dispose());
        for (const QC of ZC) zC(QC);
        CC.length = 0
      }
      get GJ() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let CC = 0; CC < this.meshes.length; CC++) {
          const zC = this.meshes[CC].geometry;
          zC && zC.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const CC of this.textures) {
          CC._buffer && (CC._buffer = null)
        }
      }
      getWorldExtends(CC) {
        const zC = new FC.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          ZC = new FC.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        CC = CC || (() => !0);
        const QC = this.meshes.filter(CC);
        for (const wC of QC) {
          if (wC.computeWorldMatrix(!0), !wC.Zx || 0 === wC.Zx.length || wC.infiniteDistance) continue;
          const CC = wC.WE(),
            QC = CC.boundingBox.minimumWorld,
            bC = CC.boundingBox.maximumWorld;
          FC.r.CheckExtends(QC, zC, ZC), FC.r.CheckExtends(bC, zC, ZC)
        }
        return zC.x === Number.MAX_VALUE ? {
          min: FC.r.Zero(),
          max: FC.r.Zero()
        } : {
          min: zC,
          max: ZC
        }
      }
      createPickingRay(CC, zC, ZC, QC) {
        throw (0, xC.i)("Ray")
      }
      createPickingRayToRef(CC, zC, ZC, QC, wC) {
        throw (0, xC.i)("Ray")
      }
      createPickingRayInCameraSpace(CC, zC, ZC) {
        throw (0, xC.i)("Ray")
      }
      createPickingRayInCameraSpaceToRef(CC, zC, ZC, QC) {
        throw (0, xC.i)("Ray")
      }
      CM(CC, zC, ZC, QC, wC, bC) {
        const nC = (0, xC.i)("Ray", !0);
        return nC && CZ.c.Warn(nC), new MC.c
      }
      pickWithBoundingInfo(CC, zC, ZC, QC, wC) {
        const bC = (0, xC.i)("Ray", !0);
        return bC && CZ.c.Warn(bC), new MC.c
      }
      pickWithRay(CC, zC, ZC, QC) {
        throw (0, xC.i)("Ray")
      }
      multiPick(CC, zC, ZC, QC, wC) {
        throw (0, xC.i)("Ray")
      }
      multiPickWithRay(CC, zC, ZC) {
        throw (0, xC.i)("Ray")
      }
      setPointerOverMesh(CC, zC, ZC) {
        this._inputManager.setPointerOverMesh(CC, zC, ZC)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const CC of this.geometries) CC._rebuild();
        for (const CC of this.meshes) CC._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const CC of this._components) CC.rebuild();
        for (const CC of this.Ix) CC.rebuild();
        if (this.spriteManagers)
          for (const CC of this.spriteManagers) CC.rebuild()
      }
      _rebuildTextures() {
        for (const CC of this.textures) CC._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(CC, zC, ZC) {
        if (void 0 === zC) return CC;
        const QC = [];
        for (const wC in CC) {
          const bC = CC[wC];
          qC.e && qC.e.MatchesQuery(bC, zC) && (!ZC || ZC(bC)) && QC.push(bC)
        }
        return QC
      }
      getMeshesByTags(CC, zC) {
        return this._getByTags(this.meshes, CC, zC)
      }
      getCamerasByTags(CC, zC) {
        return this._getByTags(this.cameras, CC, zC)
      }
      getLightsByTags(CC, zC) {
        return this._getByTags(this.lights, CC, zC)
      }
      getMaterialByTags(CC, zC) {
        return this._getByTags(this.materials, CC, zC).concat(this._getByTags(this.multiMaterials, CC, zC))
      }
      getTransformNodesByTags(CC, zC) {
        return this._getByTags(this.transformNodes, CC, zC)
      }
      setRenderingOrder(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(CC, zC, ZC, QC)
      }
      setRenderingAutoClearDepthStencil(CC, zC) {
        let ZC = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(CC, zC, ZC, QC)
      }
      getAutoClearDepthStencilSetup(CC) {
        return this._renderingManager.getAutoClearDepthStencilSetup(CC)
      }
      _forceBlockMaterialDirtyMechanism(CC) {
        this._blockMaterialDirtyMechanism = CC
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(CC) {
        this._blockMaterialDirtyMechanism !== CC && (this._blockMaterialDirtyMechanism = CC, CC || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(CC, zC) {
        if (!this._blockMaterialDirtyMechanism)
          for (const ZC of this.materials) zC && !zC(ZC) || ZC.YzC(CC)
      }
      _loadFile(CC, zC, ZC, QC, wC, bC, nC) {
        const fC = (0, UC.i)(CC, zC, ZC, QC ? this.offlineProvider : void 0, wC, bC, nC);
        return this._activeRequests.push(fC), fC.onCompleteObservable.add((CC => {
          this._activeRequests.splice(this._activeRequests.indexOf(CC), 1)
        })), fC
      }
      async _loadFileAsync(CC, zC, ZC, QC, wC) {
        return await new Promise(((bC, nC) => {
          this._loadFile(CC, (CC => {
            bC(CC)
          }), zC, ZC, QC, ((CC, zC) => {
            nC(zC)
          }), wC)
        }))
      }
      async _loadDelayedFileAsync(CC, zC, ZC) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const QC = `${CC}|${zC?"binary":"string"}`;
        let wC = this._delayedFileRequests.get(QC);
        if (!wC) {
          wC = zC ? this._loadFileAsync(CC, void 0, ZC, !0) : this._loadFileAsync(CC, void 0, ZC, !1);
          const bC = wC;
          (async () => {
            try {
              await bC
            } catch {}
            this._delayedFileRequests?.delete(QC)
          })(), this._delayedFileRequests.set(QC, wC)
        }
        return await wC
      }
      _requestFile(CC, zC, ZC, QC, wC, bC, nC) {
        const fC = (0, UC.r)(CC, zC, ZC, QC ? this.offlineProvider : void 0, wC, bC, nC);
        return this._activeRequests.push(fC), fC.onCompleteObservable.add((CC => {
          this._activeRequests.splice(this._activeRequests.indexOf(CC), 1)
        })), fC
      }
      async _requestFileAsync(CC, zC, ZC, QC, wC) {
        return await new Promise(((bC, nC) => {
          this._requestFile(CC, (CC => {
            bC(CC)
          }), zC, ZC, QC, (CC => {
            nC(CC)
          }), wC)
        }))
      }
      _readFile(CC, zC, ZC, QC, wC) {
        const bC = (0, UC.o)(CC, zC, ZC, QC, wC);
        return this._activeRequests.push(bC), bC.onCompleteObservable.add((CC => {
          this._activeRequests.splice(this._activeRequests.indexOf(CC), 1)
        })), bC
      }
      async _readFileAsync(CC, zC, ZC) {
        return await new Promise(((QC, wC) => {
          this._readFile(CC, (CC => {
            QC(CC)
          }), zC, ZC, (CC => {
            wC(CC)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, xC.i)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(CC) {
        return this.setActiveCameraById(CC)
      }
      getMaterialByID(CC) {
        return this.getMaterialById(CC)
      }
      getLastMaterialByID(CC) {
        return this.getLastMaterialById(CC)
      }
      getTextureByUniqueID(CC) {
        return this.getTextureByUniqueId(CC)
      }
      getCameraByID(CC) {
        return this.getCameraById(CC)
      }
      getCameraByUniqueID(CC) {
        return this.getCameraByUniqueId(CC)
      }
      getBoneByID(CC) {
        return this.getBoneById(CC)
      }
      getLightByID(CC) {
        return this.getLightById(CC)
      }
      getLightByUniqueID(CC) {
        return this.getLightByUniqueId(CC)
      }
      getParticleSystemByID(CC) {
        return this.getParticleSystemById(CC)
      }
      getGeometryByID(CC) {
        return this.getGeometryById(CC)
      }
      getMeshByID(CC) {
        return this.getMeshById(CC)
      }
      getMeshByUniqueID(CC) {
        return this.getMeshByUniqueId(CC)
      }
      getLastMeshByID(CC) {
        return this.getLastMeshById(CC)
      }
      getMeshesByID(CC) {
        return this.getMeshesById(CC)
      }
      getTransformNodeByID(CC) {
        return this.getTransformNodeById(CC)
      }
      getTransformNodeByUniqueID(CC) {
        return this.getTransformNodeByUniqueId(CC)
      }
      getTransformNodesByID(CC) {
        return this.getTransformNodesById(CC)
      }
      getNodeByID(CC) {
        return this.getNodeById(CC)
      }
      getLastEntryByID(CC) {
        return this.getLastEntryById(CC)
      }
      getLastSkeletonByID(CC) {
        return this.getLastSkeletonById(CC)
      }
    }
    bZ.FOGMODE_NONE = 0, bZ.FOGMODE_EXP = 1, bZ.FOGMODE_EXP2 = 2, bZ.FOGMODE_LINEAR = 3, bZ.MinDeltaTime = 1, bZ.MaxDeltaTime = 1e3, bZ._OriginalDefaultMaterialFactory = bZ.DefaultMaterialFactory;
    let nZ = !1;

    function fZ() {
      nZ || (nZ = !0, (0, zZ.d)("BABYLON.Scene", bZ))
    }(VC = bZ.prototype).sortActiveAnimatables ?? (VC.sortActiveAnimatables = (0, xC.f)("Scene", "sortActiveAnimatables")), (Cz = bZ.prototype).beginWeightedAnimation ?? (Cz.beginWeightedAnimation = (0, xC.f)("Scene", "beginWeightedAnimation")), (zz = bZ.prototype).beginAnimation ?? (zz.beginAnimation = (0, xC.f)("Scene", "beginAnimation")), (Zz = bZ.prototype).beginHierarchyAnimation ?? (Zz.beginHierarchyAnimation = (0, xC.f)("Scene", "beginHierarchyAnimation")), (Qz = bZ.prototype).beginDirectAnimation ?? (Qz.beginDirectAnimation = (0, xC.f)("Scene", "beginDirectAnimation")), (wz = bZ.prototype).beginDirectHierarchyAnimation ?? (wz.beginDirectHierarchyAnimation = (0, xC.f)("Scene", "beginDirectHierarchyAnimation")), (bz = bZ.prototype).getAnimatableByTarget ?? (bz.getAnimatableByTarget = (0, xC.f)("Scene", "getAnimatableByTarget")), (nz = bZ.prototype).getAllAnimatablesByTarget ?? (nz.getAllAnimatablesByTarget = (0, xC.f)("Scene", "getAllAnimatablesByTarget")), (fz = bZ.prototype).stopAllAnimations ?? (fz.stopAllAnimations = (0, xC.f)("Scene", "stopAllAnimations")), (oz = bZ.prototype).getSoundByName ?? (oz.getSoundByName = (0, xC.f)("Scene", "getSoundByName")), (qz = bZ.prototype).createOrUpdateSelectionOctree ?? (qz.createOrUpdateSelectionOctree = (0, xC.f)("Scene", "createOrUpdateSelectionOctree")), (Fz = bZ.prototype).createDefaultLight ?? (Fz.createDefaultLight = (0, xC.f)("Scene", "createDefaultLight")), (Wz = bZ.prototype).createDefaultCamera ?? (Wz.createDefaultCamera = (0, xC.f)("Scene", "createDefaultCamera")), (Nz = bZ.prototype).createDefaultCameraOrLight ?? (Nz.createDefaultCameraOrLight = (0, xC.f)("Scene", "createDefaultCameraOrLight")), (Mz = bZ.prototype).createDefaultSkybox ?? (Mz.createDefaultSkybox = (0, xC.f)("Scene", "createDefaultSkybox")), (gz = bZ.prototype).createDefaultEnvironment ?? (gz.createDefaultEnvironment = (0, xC.f)("Scene", "createDefaultEnvironment")), (Sz = bZ.prototype).createDefaultVRExperience ?? (Sz.createDefaultVRExperience = (0, xC.f)("Scene", "createDefaultVRExperience")), (pz = bZ.prototype).createDefaultXRExperienceAsync ?? (pz.createDefaultXRExperienceAsync = (0, xC.f)("Scene", "createDefaultXRExperienceAsync")), (Pz = bZ.prototype).getGlowLayerByName ?? (Pz.getGlowLayerByName = (0, xC.f)("Scene", "getGlowLayerByName")), (Gz = bZ.prototype).getHighlightLayerByName ?? (Gz.getHighlightLayerByName = (0, xC.f)("Scene", "getHighlightLayerByName")), (Rz = bZ.prototype).getSelectionOutlineLayerByName ?? (Rz.getSelectionOutlineLayerByName = (0, xC.f)("Scene", "getSelectionOutlineLayerByName")), (Az = bZ.prototype).removeLensFlareSystem ?? (Az.removeLensFlareSystem = (0, xC.f)("Scene", "removeLensFlareSystem")), (xz = bZ.prototype).addLensFlareSystem ?? (xz.addLensFlareSystem = (0, xC.f)("Scene", "addLensFlareSystem")), (Jz = bZ.prototype).getLensFlareSystemByName ?? (Jz.getLensFlareSystemByName = (0, xC.f)("Scene", "getLensFlareSystemByName")), (Iz = bZ.prototype).getLensFlareSystemByID ?? (Iz.getLensFlareSystemByID = (0, xC.f)("Scene", "getLensFlareSystemByID")), (iz = bZ.prototype).getLensFlareSystemById ?? (iz.getLensFlareSystemById = (0, xC.f)("Scene", "getLensFlareSystemById")), (vz = bZ.prototype).getPhysicsEngine ?? (vz.getPhysicsEngine = (0, xC.f)("Scene", "getPhysicsEngine")), (ez = bZ.prototype).enablePhysics ?? (ez.enablePhysics = (0, xC.f)("Scene", "enablePhysics")), (hz = bZ.prototype).disablePhysicsEngine ?? (hz.disablePhysicsEngine = (0, xC.f)("Scene", "disablePhysicsEngine")), (Kz = bZ.prototype).isPhysicsEnabled ?? (Kz.isPhysicsEnabled = (0, xC.f)("Scene", "isPhysicsEnabled")), (Yz = bZ.prototype).deleteCompoundImpostor ?? (Yz.deleteCompoundImpostor = (0, xC.f)("Scene", "deleteCompoundImpostor")), (dz = bZ.prototype).removeReflectionProbe ?? (dz.removeReflectionProbe = (0, xC.f)("Scene", "removeReflectionProbe")), (mz = bZ.prototype).addReflectionProbe ?? (mz.addReflectionProbe = (0, xC.f)("Scene", "addReflectionProbe")), (Hz = bZ.prototype).getBoundingBoxRenderer ?? (Hz.getBoundingBoxRenderer = (0, xC.f)("Scene", "getBoundingBoxRenderer")), (Ez = bZ.prototype).enableDepthRenderer ?? (Ez.enableDepthRenderer = (0, xC.f)("Scene", "enableDepthRenderer")), (lz = bZ.prototype).disableDepthRenderer ?? (lz.disableDepthRenderer = (0, xC.f)("Scene", "disableDepthRenderer")), (Xz = bZ.prototype).enableFluidRenderer ?? (Xz.enableFluidRenderer = (0, xC.f)("Scene", "enableFluidRenderer")), (cz = bZ.prototype).disableFluidRenderer ?? (cz.disableFluidRenderer = (0, xC.f)("Scene", "disableFluidRenderer")), (uz = bZ.prototype).enableGeometryBufferRenderer ?? (uz.enableGeometryBufferRenderer = (0, xC.f)("Scene", "enableGeometryBufferRenderer")), (rz = bZ.prototype).disableGeometryBufferRenderer ?? (rz.disableGeometryBufferRenderer = (0, xC.f)("Scene", "disableGeometryBufferRenderer")), (sz = bZ.prototype).enableIblCdfGenerator ?? (sz.enableIblCdfGenerator = (0, xC.f)("Scene", "enableIblCdfGenerator")), (Tz = bZ.prototype).disableIblCdfGenerator ?? (Tz.disableIblCdfGenerator = (0, xC.f)("Scene", "disableIblCdfGenerator")), (az = bZ.prototype).getOutlineRenderer ?? (az.getOutlineRenderer = (0, xC.f)("Scene", "getOutlineRenderer")), (tz = bZ.prototype).enablePrePassRenderer ?? (tz.enablePrePassRenderer = (0, xC.f)("Scene", "enablePrePassRenderer")), (Dz = bZ.prototype).disablePrePassRenderer ?? (Dz.disablePrePassRenderer = (0, xC.f)("Scene", "disablePrePassRenderer")), (jz = bZ.prototype).enableSubSurfaceForPrePass ?? (jz.enableSubSurfaceForPrePass = (0, xC.f)("Scene", "enableSubSurfaceForPrePass")), (yz = bZ.prototype).disableSubSurfaceForPrePass ?? (yz.disableSubSurfaceForPrePass = (0, xC.f)("Scene", "disableSubSurfaceForPrePass")), (Lz = bZ.prototype).pickSprite ?? (Lz.pickSprite = (0, xC.f)("Scene", "pickSprite")), (Uz = bZ.prototype).pickSpriteWithRay ?? (Uz.pickSpriteWithRay = (0, xC.f)("Scene", "pickSpriteWithRay")), (Bz = bZ.prototype).multiPickSprite ?? (Bz.multiPickSprite = (0, xC.f)("Scene", "multiPickSprite")), (Oz = bZ.prototype).multiPickSpriteWithRay ?? (Oz.multiPickSpriteWithRay = (0, xC.f)("Scene", "multiPickSpriteWithRay")), (kz = bZ.prototype).setPointerOverSprite ?? (kz.setPointerOverSprite = (0, xC.f)("Scene", "setPointerOverSprite")), (Vz = bZ.prototype).getPointerOverSprite ?? (Vz.getPointerOverSprite = (0, xC.f)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(bZ.prototype, "mainSoundTrack") || Object.defineProperty(bZ.prototype, "mainSoundTrack", (0, xC.d)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(bZ.prototype, "soundTracks") || Object.defineProperty(bZ.prototype, "soundTracks", (0, xC.d)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(bZ.prototype, "audioEnabled") || Object.defineProperty(bZ.prototype, "audioEnabled", (0, xC.d)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(bZ.prototype, "headphone") || Object.defineProperty(bZ.prototype, "headphone", (0, xC.d)("Scene", "headphone")), Object.getOwnPropertyDescriptor(bZ.prototype, "audioListenerPositionProvider") || Object.defineProperty(bZ.prototype, "audioListenerPositionProvider", (0, xC.d)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(bZ.prototype, "audioListenerRotationProvider") || Object.defineProperty(bZ.prototype, "audioListenerRotationProvider", (0, xC.d)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(bZ.prototype, "audioPositioningRefreshRate") || Object.defineProperty(bZ.prototype, "audioPositioningRefreshRate", (0, xC.d)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(bZ.prototype, "selectionOctree") || Object.defineProperty(bZ.prototype, "selectionOctree", (0, xC.d)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(bZ.prototype, "debugLayer") || Object.defineProperty(bZ.prototype, "debugLayer", (0, xC.d)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(bZ.prototype, "gamepadManager") || Object.defineProperty(bZ.prototype, "gamepadManager", (0, xC.d)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(bZ.prototype, "simplificationQueue") || Object.defineProperty(bZ.prototype, "simplificationQueue", (0, xC.d)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(bZ.prototype, "onBeforePhysicsObservable") || Object.defineProperty(bZ.prototype, "onBeforePhysicsObservable", (0, xC.d)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(bZ.prototype, "onAfterPhysicsObservable") || Object.defineProperty(bZ.prototype, "onAfterPhysicsObservable", (0, xC.d)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(bZ.prototype, "reflectionProbes") || Object.defineProperty(bZ.prototype, "reflectionProbes", (0, xC.d)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(bZ.prototype, "forceShowBoundingBoxes") || Object.defineProperty(bZ.prototype, "forceShowBoundingBoxes", (0, xC.d)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(bZ.prototype, "depthPeelingRenderer") || Object.defineProperty(bZ.prototype, "depthPeelingRenderer", (0, xC.d)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(bZ.prototype, "useOrderIndependentTransparency") || Object.defineProperty(bZ.prototype, "useOrderIndependentTransparency", (0, xC.d)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(bZ.prototype, "fluidRenderer") || Object.defineProperty(bZ.prototype, "fluidRenderer", (0, xC.d)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(bZ.prototype, "geometryBufferRenderer") || Object.defineProperty(bZ.prototype, "geometryBufferRenderer", (0, xC.d)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(bZ.prototype, "iblCdfGenerator") || Object.defineProperty(bZ.prototype, "iblCdfGenerator", (0, xC.d)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(bZ.prototype, "prePassRenderer") || Object.defineProperty(bZ.prototype, "prePassRenderer", (0, xC.d)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(bZ.prototype, "subSurfaceConfiguration") || Object.defineProperty(bZ.prototype, "subSurfaceConfiguration", (0, xC.d)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(bZ.prototype, "spriteManagers") || Object.defineProperty(bZ.prototype, "spriteManagers", (0, xC.d)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(bZ.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(bZ.prototype, "onBeforeSpritesRenderingObservable", (0, xC.d)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(bZ.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(bZ.prototype, "onAfterSpritesRenderingObservable", (0, xC.d)("Scene", "onAfterSpritesRenderingObservable"))
  },
  39990: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => QC,
      c: () => wC
    });
    class QC {}
    QC.NAME_EFFECTLAYER = "EffectLayer", QC.NAME_LAYER = "Layer", QC.NAME_LENSFLARESYSTEM = "LensFlareSystem", QC.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", QC.NAME_PARTICLESYSTEM = "ParticleSystem", QC.NAME_GAMEPAD = "Gamepad", QC.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", QC.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", QC.NAME_PREPASSRENDERER = "PrePassRenderer", QC.NAME_DEPTHRENDERER = "DepthRenderer", QC.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", QC.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", QC.NAME_SPRITE = "Sprite", QC.NAME_SUBSURFACE = "SubSurface", QC.NAME_OUTLINERENDERER = "Outline", QC.NAME_PROCEDURALTEXTURE = "ProceduralTexture", QC.NAME_SHADOWGENERATOR = "ShadowGenerator", QC.NAME_OCTREE = "qQC", QC.NAME_PHYSICSENGINE = "PhysicsEngine", QC.NAME_AUDIO = "Audio", QC.NAME_FLUIDRENDERER = "FluidRenderer", QC.NAME_IBLCDFGENERATOR = "iblCDFGenerator", QC.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", QC.STEP_ISREADYFORMESH_EFFECTLAYER = 0, QC.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, QC.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, QC.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, QC.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, QC.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, QC.STEP_BEFORECAMERADRAW_PREPASS = 0, QC.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, QC.STEP_BEFORECAMERADRAW_LAYER = 2, QC.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, QC.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, QC.STEP_BEFORERENDERINGMESH_PREPASS = 0, QC.STEP_BEFORERENDERINGMESH_OUTLINE = 1, QC.STEP_AFTERRENDERINGMESH_PREPASS = 0, QC.STEP_AFTERRENDERINGMESH_OUTLINE = 1, QC.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, QC.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, QC.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, QC.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, QC.STEP_BEFORECLEAR_PREPASS = 1, QC.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, QC.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, QC.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, QC.STEP_AFTERCAMERADRAW_PREPASS = 0, QC.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, QC.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, QC.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, QC.STEP_AFTERCAMERADRAW_LAYER = 4, QC.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, QC.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, QC.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, QC.STEP_AFTERRENDER_AUDIO = 0, QC.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, QC.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, QC.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, QC.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, QC.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, QC.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, QC.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, QC.STEP_POINTERMOVE_SPRITE = 0, QC.STEP_POINTERDOWN_SPRITE = 0, QC.STEP_POINTERUP_SPRITE = 0;
    class wC extends Array {
      constructor(CC) {
        super(...CC)
      }
      static Create() {
        return Object.create(wC.prototype)
      }
      registerStep(CC, zC, ZC) {
        let QC, wC = 0;
        for (; wC < this.length; wC++) {
          if (QC = this[wC].index, CC < QC) break
        }
        this.splice(wC, 0, {
          index: CC,
          component: zC,
          action: ZC.bind(zC)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39811: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => nC,
      f: () => fC,
      j: () => QC,
      n: () => wC,
      o: () => bC
    });

    function QC(CC, zC, ZC, QC, wC, bC) {
      function nC(CC) {
        if (void 0 !== CC && "function" !== typeof CC) throw new TypeError("Function expected");
        return CC
      }
      for (var fC, oC = QC.kind, qC = "getter" === oC ? "get" : "setter" === oC ? "set" : "value", FC = !zC && CC ? QC.static ? CC : CC.prototype : null, WC = zC || (FC ? Object.getOwnPropertyDescriptor(FC, QC.name) : {}), NC = !1, MC = ZC.length - 1; MC >= 0; MC--) {
        var gC = {};
        for (var SC in QC) gC[SC] = "access" === SC ? {} : QC[SC];
        for (var SC in QC.access) gC.access[SC] = QC.access[SC];
        gC.addInitializer = function(CC) {
          if (NC) throw new TypeError("Cannot add initializers after decoration has completed");
          bC.push(nC(CC || null))
        };
        var pC = (0, ZC[MC])("accessor" === oC ? {
          get: WC.get,
          set: WC.set
        } : WC[qC], gC);
        if ("accessor" === oC) {
          if (void 0 === pC) continue;
          if (null === pC || "object" !== typeof pC) throw new TypeError("Object expected");
          (fC = nC(pC.get)) && (WC.get = fC), (fC = nC(pC.set)) && (WC.set = fC), (fC = nC(pC.init)) && wC.unshift(fC)
        } else(fC = nC(pC)) && ("field" === oC ? wC.unshift(fC) : WC[qC] = fC)
      }
      FC && Object.defineProperty(FC, QC.name, WC), NC = !0
    }

    function wC(CC, zC, ZC) {
      for (var QC = arguments.length > 2, wC = 0; wC < zC.length; wC++) ZC = QC ? zC[wC].call(CC, ZC) : zC[wC].call(CC);
      return QC ? ZC : void 0
    }

    function bC(CC, zC, ZC) {
      return "symbol" === typeof zC && (zC = zC.description ? "[".concat(zC.description, "]") : ""), Object.defineProperty(CC, "name", {
        configurable: !0,
        value: ZC ? "".concat(ZC, " ", zC) : zC
      })
    }
    Object.create;
    Object.create;

    function nC(CC, zC, ZC, QC) {
      if ("a" === ZC && !QC) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof zC ? CC !== zC || !QC : !zC.has(CC)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === ZC ? QC : "a" === ZC ? QC.call(CC) : QC ? QC.value : zC.get(CC)
    }

    function fC(CC, zC, ZC, QC, wC) {
      if ("m" === QC) throw new TypeError("Private method is not writable");
      if ("a" === QC && !wC) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof zC ? CC !== zC || !wC : !zC.has(CC)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === QC ? wC.call(CC, ZC) : wC ? wC.value = ZC : zC.set(CC, ZC), ZC
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);