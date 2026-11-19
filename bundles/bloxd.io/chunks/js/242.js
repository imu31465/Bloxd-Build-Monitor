export const id = 242;
export const ids = [242];
export const modules = {
  39286: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => bD,
      g: () => ZD,
      j: () => wD,
      k: () => QD
    });
    var ID = cD(39076),
      pD = cD(38048),
      iD = cD(39213),
      fD = cD(39131);
    class bD {
      get jCD() {
        return this._isDisposed
      }
      constructor(DD, CD, cD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          iD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          bD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          QD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          wD = arguments.length > 7 ? arguments[7] : void 0,
          SD = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, fD.b)(), DD && DD.hq ? this._engine = DD.hq().DZ() : this._engine = DD, this._updatable = cD, this._instanced = bD, this._divisor = wD || 1, this._label = SD, CD instanceof ID.e ? (this._data = null, this._buffer = CD) : (this._data = CD, this._buffer = null), this.byteStride = QD ? pD : pD * Float32Array.BYTES_PER_ELEMENT, iD || this.create()
      }
      createVertexBuffer(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          fD = arguments.length > 6 ? arguments[6] : void 0;
        const bD = iD ? CD : CD * Float32Array.BYTES_PER_ELEMENT,
          wD = ID ? iD ? ID : ID * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new QD(this._engine, this, DD, this._updatable, !0, wD, void 0 === pD ? this._instanced : pD, bD, cD, void 0, void 0, !0, this._divisor || fD)
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
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !DD && this._buffer || (DD = DD || this._data, DD && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, DD), this._data = DD) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(DD, this._label), this._data = DD) : this._buffer = this._engine.createVertexBuffer(DD, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.LB > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.LB, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.LB, void 0, this._label));
          pD.e.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(DD) {
        this.create(DD)
      }
      updateDirectly(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, DD, ID ? CD : CD * Float32Array.BYTES_PER_ELEMENT, cD ? cD * this.byteStride : void 0), this._data = 0 === CD && void 0 === cD ? DD : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class QD {
      get jCD() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(DD) {
        const CD = 0 != DD;
        this._instanceDivisor = DD, CD !== this._instanced && (this._instanced = CD, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const DD = this.getData();
        return DD ? Array.isArray(DD) ? DD.length / (this.byteStride / 4) - this.byteOffset / 4 : (DD.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(DD, CD, cD, ID, pD, fD, BD, yD, MD, tD) {
        let ZD, oD = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          vD = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          ND = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          gD = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = DD, "object" === typeof ID && null !== ID ? (ZD = ID.updatable ?? !1, pD = ID.postponeInternalCreation, fD = ID.stride, BD = ID.instanced, yD = ID.offset, MD = ID.size, tD = ID.type, oD = ID.normalized ?? !1, vD = ID.useBytes ?? !1, ND = ID.divisor ?? 1, gD = ID.takeBufferOwnership ?? !1, this._label = ID.label) : ZD = !!ID, CD instanceof bD ? (this._buffer = CD, this._ownsBuffer = gD) : (this._buffer = new bD(DD, CD, ZD, fD, pD, BD, vD, ND, this._label), this._ownsBuffer = !0), this.uniqueId = QD._Counter++, this._kind = cD, void 0 === tD) {
          const DD = this.getData();
          this.type = DD ? SD(DD) : QD.FLOAT
        } else this.type = tD;
        const XD = (0, iD.r)(this.type);
        vD ? (this._size = MD || (fD ? fD / XD : wD(cD)), this.byteStride = fD || this._buffer.byteStride || this._size * XD, this.byteOffset = yD || 0) : (this._size = MD || fD || wD(cD), this.byteStride = fD ? fD * XD : this._buffer.byteStride || this._size * XD, this.byteOffset = (yD || 0) * XD), this.normalized = oD, this._instanced = void 0 !== BD && BD, this._instanceDivisor = BD ? ND : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(DD) {
        switch (DD) {
          case QD.BYTE:
            return 0;
          case QD.UNSIGNED_BYTE:
            return 1;
          case QD.SHORT:
            return 2;
          case QD.UNSIGNED_SHORT:
            return 3;
          case QD.INT:
            return 4;
          case QD.UNSIGNED_INT:
            return 5;
          case QD.FLOAT:
            return 6;
          case QD.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${DD}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (QD._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(DD, CD) {
        const cD = this.getData();
        return cD ? (0, iD.o)(cD, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, DD, CD) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, iD.r)(this.type)
      }
      nCD() {
        return this.byteOffset / (0, iD.r)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, iD.r)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(DD) {
        this._buffer.create(DD), this._alignBuffer()
      }
      update(DD) {
        this._buffer.update(DD), this._alignBuffer()
      }
      updateDirectly(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(DD, CD, void 0, cD), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(DD, CD) {
        (0, iD.j)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, DD, this.normalized, ((DD, cD) => {
          for (let ID = 0; ID < this._size; ID++) CD(DD[ID], cD + ID)
        }))
      }
      _alignBuffer() {}
    }

    function wD(DD) {
      switch (DD) {
        case QD.UVKind:
        case QD.UV2Kind:
        case QD.UV3Kind:
        case QD.UV4Kind:
        case QD.UV5Kind:
        case QD.UV6Kind:
          return 2;
        case QD.NormalKind:
        case QD.PositionKind:
          return 3;
        case QD.ColorKind:
        case QD.ColorInstanceKind:
        case QD.MatricesIndicesKind:
        case QD.MatricesIndicesExtraKind:
        case QD.MatricesWeightsKind:
        case QD.MatricesWeightsExtraKind:
        case QD.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + DD + "'")
      }
    }

    function SD(DD) {
      return DD instanceof Int8Array ? QD.BYTE : DD instanceof Uint8Array ? QD.UNSIGNED_BYTE : DD instanceof Int16Array ? QD.SHORT : DD instanceof Uint16Array ? QD.UNSIGNED_SHORT : DD instanceof Int32Array ? QD.INT : DD instanceof Uint32Array ? QD.UNSIGNED_INT : QD.FLOAT
    }

    function BD(DD) {
      return (0, iD.r)(DD)
    }

    function yD(DD, CD, cD, ID, pD, fD, bD, QD) {
      (0, iD.j)(DD, CD, cD, ID, pD, fD, bD, ((DD, CD) => {
        for (let cD = 0; cD < ID; cD++) QD(DD[cD], CD + cD)
      }))
    }

    function MD(DD, CD, cD, ID, pD, fD, bD, QD) {
      return (0, iD.o)(DD, CD, cD, ID, pD, fD, bD, QD)
    }
    QD._Counter = 0, QD.BYTE = 5120, QD.UNSIGNED_BYTE = 5121, QD.SHORT = 5122, QD.UNSIGNED_SHORT = 5123, QD.INT = 5124, QD.UNSIGNED_INT = 5125, QD.FLOAT = 5126, QD.HALF_FLOAT = 5131, QD.PositionKind = "position", QD.NormalKind = "normal", QD.TangentKind = "tangent", QD.UVKind = "uv", QD.UV2Kind = "uv2", QD.UV3Kind = "uv3", QD.UV4Kind = "uv4", QD.UV5Kind = "uv5", QD.UV6Kind = "uv6", QD.ColorKind = "color", QD.ColorInstanceKind = "instanceColor", QD.MatricesIndicesKind = "matricesIndices", QD.MatricesWeightsKind = "matricesWeights", QD.MatricesIndicesExtraKind = "matricesIndicesExtra", QD.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let tD = !1;

    function ZD() {
      tD || (tD = !0, QD.DeduceStride = wD, QD.GetDataType = SD, QD.GetTypeByteLength = BD, QD.ForEach = yD, QD.GetFloatData = MD)
    }
  },
  39076: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.LB = 0, this.is32Bits = !1, this.uniqueId = ID._Counter++
      }
    }
    ID._Counter = 0
  },
  39284: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD
    });
    var ID = cD(36446),
      pD = cD(39286);
    class iD {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || CD && !this.pickedMesh.isVerticesDataPresent(pD.k.NormalKind)) return null;
        let cD, iD = this.pickedMesh.ncD();
        0 === iD?.length && (iD = null);
        const fD = ID.l.cZ[0],
          bD = ID.l.cZ[1],
          QD = ID.l.cZ[2];
        if (CD) {
          const DD = this.pickedMesh.getVerticesData(pD.k.NormalKind);
          let CD = iD ? ID.p.FromArrayToRef(DD, 3 * iD[3 * this.faceId], fD) : fD.K4(DD[3 * this.faceId * 3], DD[3 * this.faceId * 3 + 1], DD[3 * this.faceId * 3 + 2]),
            wD = iD ? ID.p.FromArrayToRef(DD, 3 * iD[3 * this.faceId + 1], bD) : bD.K4(DD[3 * (3 * this.faceId + 1)], DD[3 * (3 * this.faceId + 1) + 1], DD[3 * (3 * this.faceId + 1) + 2]),
            SD = iD ? ID.p.FromArrayToRef(DD, 3 * iD[3 * this.faceId + 2], QD) : QD.K4(DD[3 * (3 * this.faceId + 2)], DD[3 * (3 * this.faceId + 2) + 1], DD[3 * (3 * this.faceId + 2) + 2]);
          CD = CD.scale(this.bu), wD = wD.scale(this.bv), SD = SD.scale(1 - this.bu - this.bv), cD = new ID.p(CD.x + wD.x + SD.x, CD.y + wD.y + SD.y, CD.z + wD.z + SD.z)
        } else {
          const DD = this.pickedMesh.getVerticesData(pD.k.PositionKind),
            CD = iD ? ID.p.FromArrayToRef(DD, 3 * iD[3 * this.faceId], fD) : fD.K4(DD[3 * this.faceId * 3], DD[3 * this.faceId * 3 + 1], DD[3 * this.faceId * 3 + 2]),
            wD = iD ? ID.p.FromArrayToRef(DD, 3 * iD[3 * this.faceId + 1], bD) : bD.K4(DD[3 * (3 * this.faceId + 1)], DD[3 * (3 * this.faceId + 1) + 1], DD[3 * (3 * this.faceId + 1) + 2]),
            SD = iD ? ID.p.FromArrayToRef(DD, 3 * iD[3 * this.faceId + 2], QD) : QD.K4(DD[3 * (3 * this.faceId + 2)], DD[3 * (3 * this.faceId + 2) + 1], DD[3 * (3 * this.faceId + 2) + 2]),
            BD = CD.subtract(wD),
            yD = SD.subtract(wD);
          cD = ID.p.Cross(BD, yD)
        }
        const wD = (DD, CD) => {
          if (-1 !== this.thinInstanceIndex) {
            const cD = DD._thinInstanceDataStorage.matrixData,
              pD = this.thinInstanceIndex << 4;
            if (cD && cD.length > pD) {
              const DD = ID.l.Matrix[0];
              ID.d.FromArrayToRef(cD, pD, DD), ID.p.TransformNormalToRef(CD, DD, CD)
            }
          }
          let cD = DD.getWorldMatrix();
          DD.nonUniformScaling && (ID.l.Matrix[0].YCD(cD), cD = ID.l.Matrix[0], cD.setTranslationFromFloats(0, 0, 0), cD.invert(), cD.transposeToRef(ID.l.Matrix[1]), cD = ID.l.Matrix[1]), ID.p.TransformNormalToRef(CD, cD, CD)
        };
        if (DD && wD(this.pickedMesh, cD), this.ray) {
          const CD = ID.l.cZ[0].YCD(cD);
          DD || wD(this.pickedMesh, CD), ID.p.Dot(CD, this.ray.direction) > 0 && cD.negateInPlace()
        }
        return cD.normalize(), cD
      }
      getTextureCoordinates() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pD.k.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(DD)) return null;
        const CD = this.pickedMesh.ncD();
        if (!CD) return null;
        const cD = this.pickedMesh.getVerticesData(DD);
        if (!cD) return null;
        let iD = ID.n.FromArray(cD, 2 * CD[3 * this.faceId]),
          fD = ID.n.FromArray(cD, 2 * CD[3 * this.faceId + 1]),
          bD = ID.n.FromArray(cD, 2 * CD[3 * this.faceId + 2]);
        return iD = iD.scale(this.bu), fD = fD.scale(this.bv), bD = bD.scale(1 - this.bu - this.bv), new ID.n(iD.x + fD.x + bD.x, iD.y + fD.y + bD.y)
      }
    }
  },
  39131: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD
    });
    var ID = cD(38991);
    let pD = !1;

    function iD() {
      pD || (pD = !0, ID.ThinEngine.prototype.updateDynamicIndexBuffer = function(DD, CD) {
        let cD;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(DD), cD = DD.is32Bits ? CD instanceof Uint32Array ? CD : new Uint32Array(CD) : CD instanceof Uint16Array ? CD : new Uint16Array(CD), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, cD, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, ID.ThinEngine.prototype.updateDynamicVertexBuffer = function(DD, CD, cD, ID) {
        this.bindArrayBuffer(DD), void 0 === cD && (cD = 0);
        const pD = CD.byteLength || CD.length;
        void 0 === ID || ID >= pD && 0 === cD ? CD instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, cD, new Float32Array(CD)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, cD, CD) : CD instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, cD, new Float32Array(CD).subarray(0, ID / 4)) : (CD = ArrayBuffer.isView(CD) ? new Uint8Array(CD.buffer, CD.byteOffset, ID) : new Uint8Array(CD, 0, ID), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, cD, CD)), this._resetVertexBufferBinding()
      })
    }
  },
  39091: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          CD = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = CD, !DD && (DD = CD.createTexture(), !DD)) throw new Error("Unable to create webGL texture");
        this.set(DD)
      }
      setUsage() {}
      set(DD) {
        this._webGLTexture = DD
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(DD) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(DD)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const DD of this._MSAARenderBuffers) this._context.deleteRenderbuffer(DD);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[DD] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  39046: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ND
    });
    var ID = cD(36473),
      pD = cD(38996),
      iD = cD(36464),
      fD = cD(38048),
      bD = cD(36455),
      QD = cD(39054);
    class wD {
      constructor() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, DD && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(DD) {
        this._zOffset !== DD && (this._zOffset = DD, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(DD) {
        this._zOffsetUnits !== DD && (this._zOffsetUnits = DD, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(DD) {
        this._cullFace !== DD && (this._cullFace = DD, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(DD) {
        this._cull !== DD && (this._cull = DD, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(DD) {
        this._depthFunc !== DD && (this._depthFunc = DD, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(DD) {
        this._depthMask !== DD && (this._depthMask = DD, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(DD) {
        this._depthTest !== DD && (this._depthTest = DD, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(DD) {
        this._frontFace !== DD && (this._frontFace = DD, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(DD) {
        this.isDirty && (this._isCullDirty && (this.cull ? DD.enable(DD.CULL_FACE) : DD.disable(DD.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (DD.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (DD.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? DD.enable(DD.DEPTH_TEST) : DD.disable(DD.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (DD.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (DD.enable(DD.POLYGON_OFFSET_FILL), DD.polygonOffset(this.zOffset, this.zOffsetUnits)) : DD.disable(DD.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (DD.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class SD {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(DD) {
        this._func !== DD && (this._func = DD, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(DD) {
        this._backFunc !== DD && (this._backFunc = DD, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(DD) {
        this._funcRef !== DD && (this._funcRef = DD, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(DD) {
        this._funcMask !== DD && (this._funcMask = DD, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(DD) {
        this._opStencilFail !== DD && (this._opStencilFail = DD, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(DD) {
        this._opDepthFail !== DD && (this._opDepthFail = DD, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(DD) {
        this._opStencilDepthPass !== DD && (this._opStencilDepthPass = DD, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(DD) {
        this._backOpStencilFail !== DD && (this._backOpStencilFail = DD, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(DD) {
        this._backOpDepthFail !== DD && (this._backOpDepthFail = DD, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(DD) {
        this._backOpStencilDepthPass !== DD && (this._backOpStencilDepthPass = DD, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(DD) {
        this._mask !== DD && (this._mask = DD, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(DD) {
        this._enabled !== DD && (this._enabled = DD, this._isStencilTestDirty = !0)
      }
      constructor() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, DD && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(DD) {
        if (!DD) return;
        const CD = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = CD ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = CD ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = CD ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = CD ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = CD ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = CD ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = CD ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = CD ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = CD ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = CD ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = CD ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = CD ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? DD.enable(DD.STENCIL_TEST) : DD.disable(DD.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (DD.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (DD.stencilFuncSeparate(DD.FRONT, this.func, this.funcRef, this.funcMask), DD.stencilFuncSeparate(DD.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (DD.stencilOpSeparate(DD.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), DD.stencilOpSeparate(DD.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class BD {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = BD.ALWAYS, this.opStencilFail = BD.KEEP, this.opDepthFail = BD.KEEP, this.opStencilDepthPass = BD.REPLACE, this.backFunc = BD.ALWAYS, this.backOpStencilFail = BD.KEEP, this.backOpDepthFail = BD.KEEP, this.backOpStencilDepthPass = BD.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(DD) {
        this.func = DD
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(DD) {
        this.backFunc = DD
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(DD) {
        this.funcRef = DD
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(DD) {
        this.funcMask = DD
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(DD) {
        this.opStencilFail = DD
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(DD) {
        this.opDepthFail = DD
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(DD) {
        this.opStencilDepthPass = DD
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(DD) {
        this.backOpStencilFail = DD
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(DD) {
        this.backOpDepthFail = DD
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(DD) {
        this.backOpStencilDepthPass = DD
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(DD) {
        this.mask = DD
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(DD) {
        this.enabled = DD
      }
    }
    BD.ALWAYS = 519, BD.KEEP = 7680, BD.REPLACE = 7681;
    var yD = cD(39056),
      MD = cD(39027),
      tD = cD(38979),
      ZD = cD(39010),
      oD = cD(39023);

    function vD(DD, CD) {
      if (CD) {
        const {
          requestAnimationFrame: cD
        } = CD;
        if ("function" === typeof cD) return cD(DD)
      }
      if ((0, ZD.m)()) {
        const {
          requestAnimationFrame: cD
        } = CD || window;
        if ("function" === typeof cD) return cD(DD)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(DD);
      return setTimeout(DD, 16)
    }
    class ND {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(DD) {
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
      get vcD() {
        return this._useReverseDepthBuffer
      }
      set vcD(DD) {
        DD !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = DD, this._depthCullingState.depthFunc = DD ? 518 : 515)
      }
      setColorWrite(DD) {
        DD !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = DD)
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
      _getGlobalDefines(DD) {
        if (DD) return this.isNDCHalfZRange ? DD.IS_NDC_HALF_ZRANGE = "" : delete DD.IS_NDC_HALF_ZRANGE, this.vcD ? DD.USE_REVERSE_DEPTHBUFFER = "" : delete DD.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? DD.USE_EXACT_SRGB_CONVERSIONS = "" : delete DD.USE_EXACT_SRGB_CONVERSIONS);
        {
          let DD = "";
          return this.isNDCHalfZRange && (DD += "#define IS_NDC_HALF_ZRANGE"), this.vcD && (DD && (DD += "\n"), DD += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (DD && (DD += "\n"), DD += "#define USE_EXACT_SRGB_CONVERSIONS"), DD
        }
      }
      _rebuildInternalTextures() {
        const DD = this._internalTexturesCache.slice();
        for (const CD of DD) CD._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const DD = this._renderTargetWrapperCache.slice();
        for (const CD of DD) CD.textures?.some((DD => 15 === DD.source)) || CD._rebuild()
      }
      _rebuildEffects() {
        for (const DD in this._compiledEffects) {
          const CD = this._compiledEffects[DD];
          CD._pipelineContext = null, CD._prepareEffect()
        }
        pD.b.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        fD.e.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(DD) {
        setTimeout((() => {
          this._clearEmptyResources();
          const CD = this._depthCullingState.depthTest,
            cD = this._depthCullingState.depthFunc,
            ID = this._depthCullingState.depthMask,
            pD = this._stencilState.stencilTest;
          DD(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = CD, this._depthCullingState.depthFunc = cD, this._depthCullingState.depthMask = ID, this._stencilState.stencilTest = pD, this._flagContextRestored()
        }), 0)
      }
      get jCD() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(DD) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(DD) {}
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
          const DD = new Uint8Array(4),
            CD = [DD, DD, DD, DD, DD, DD];
          this._emptyCubeTexture = this.createRawCubeTexture(CD, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(DD) {
        this._framebufferDimensionsObject = DD
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(DD) {
        if (!DD) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const CD = this._activeRenderLoops.indexOf(DD);
        CD >= 0 && (this._activeRenderLoops.splice(CD, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: DD
            } = this.customAnimationFrameRequester;
            DD && DD(this.customAnimationFrameRequester.IZ), delete this.customAnimationFrameRequester.IZ
          }
        } else if (0 !== this._frameHandler) {
          const DD = this._frameHandler;
          if (this._frameHandler = 0, (0, ZD.m)()) {
            const {
              cancelAnimationFrame: CD
            } = this.getHostWindow() || window;
            if ("function" === typeof CD) return CD(DD)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(DD);
          return clearTimeout(DD)
        }
      }
      Wm() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      Am() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(DD) {
        this._maxFPS = DD, void 0 !== DD && (this._minFrameTime = DD <= 0 ? Number.MAX_VALUE : 1e3 / DD)
      }
      _isOverFrameTime(DD) {
        if (!DD || void 0 === this._maxFPS) return !1;
        const CD = DD - this._lastFrameTime;
        return this._lastFrameTime = DD, this._renderAccumulator += CD, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(DD) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(DD)) {
          let DD = !0;
          (this.jCD || !this.renderEvenInBackground && this._windowIsBackground) && (DD = !1), DD && (this.Wm(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.Am())
        }
      }
      _renderLoop(DD) {
        this._processFrame(DD), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let DD = 0; DD < this._activeRenderLoops.length; DD++) {
          (0, this._activeRenderLoops[DD])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(DD, CD) {
        return vD(DD, CD)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.IZ = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.IZ) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(DD) {
        -1 === this._activeRenderLoops.indexOf(DD) && (this._activeRenderLoops.push(DD), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(DD) {
        this._depthCullingState.depthTest = DD
      }
      setZOffset(DD) {
        this._depthCullingState.zOffset = this.vcD ? -DD : DD
      }
      getZOffset() {
        const DD = this._depthCullingState.zOffset;
        return this.vcD ? -DD : DD
      }
      setZOffsetUnits(DD) {
        this._depthCullingState.zOffsetUnits = this.vcD ? -DD : DD
      }
      getZOffsetUnits() {
        const DD = this._depthCullingState.zOffsetUnits;
        return this.vcD ? -DD : DD
      }
      getHostWindow() {
        return (0, ZD.m)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(DD) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const DD of this.scenes) DD._rebuildTextures();
        for (const DD of this._virtualScenes) DD._rebuildTextures()
      }
      _releaseRenderTargetWrapper(DD) {
        const CD = this._renderTargetWrapperCache.indexOf(DD); - 1 !== CD && this._renderTargetWrapperCache.splice(CD, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(DD, CD, cD) {
        const ID = CD || this.getRenderWidth(),
          pD = cD || this.getRenderHeight(),
          iD = DD.x || 0,
          fD = DD.y || 0;
        this._cachedViewport = DD, this._viewport(iD * ID, fD * pD, ID * DD.width, pD * DD.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(DD) {
        return new Path2D(DD)
      }
      get description() {
        let DD = this.name + this.version;
        return this._caps.parallelShaderCompile && (DD += " - Parallel shader compilation"), DD
      }
      _createTextureBase(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          bD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          QD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          wD = arguments.length > 7 ? arguments[7] : void 0,
          SD = arguments.length > 8 ? arguments[8] : void 0,
          BD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          yD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          MD = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          ZD = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          oD = arguments.length > 13 ? arguments[13] : void 0,
          vD = arguments.length > 14 ? arguments[14] : void 0,
          gD = arguments.length > 15 ? arguments[15] : void 0;
        const XD = "data:" === (DD = DD || "").substring(0, 5),
          mD = "blob:" === DD.substring(0, 5),
          nD = XD && -1 !== DD.indexOf(";base64,"),
          OD = yD || new tD.c(this, 1);
        OD !== yD && (OD.label = DD.substring(0, 60));
        const PD = DD;
        !this._transformTextureUrl || nD || yD || BD || (DD = this._transformTextureUrl(DD)), PD !== DD && (OD._originalUrl = PD);
        const HD = DD.lastIndexOf(".");
        let UD = ZD || (HD > -1 ? DD.substring(HD).toLowerCase() : "");
        UD.indexOf("?") > -1 && (UD = UD.split("?")[0]);
        const xD = ND.GetCompatibleTextureLoader(UD, oD);
        ID && ID.addPendingData(OD), OD.url = DD, OD.generateMipMaps = !CD, OD.samplingMode = pD, OD.invertY = cD, OD._useSRGBBuffer = this._getUseSRGBBuffer(!!gD, CD), this._doNotHandleContextLost || (OD._buffer = BD);
        let qD = null;
        bD && !yD && (qD = OD.onLoadedObservable.add(bD)), yD || this._internalTexturesCache.push(OD);
        const JD = (cD, yD) => {
          ID && ID.removePendingData(OD), DD === PD ? (qD && OD.onLoadedObservable.remove(qD), iD.b.UseFallbackTexture && DD !== iD.b.FallbackTexture && this._createTextureBase(iD.b.FallbackTexture, CD, OD.invertY, ID, pD, null, QD, wD, SD, BD, OD), cD = (cD || "Unknown error") + (iD.b.UseFallbackTexture ? " - Fallback texture was used" : ""), OD.onErrorObservable.notifyObservers({
            message: cD,
            exception: yD
          }), QD && QD(cD, yD)) : (fD.e.Warn(`Failed to load ${DD}, falling back to ${PD}`), this._createTextureBase(PD, CD, OD.invertY, ID, pD, bD, QD, wD, SD, BD, OD, MD, ZD, oD, vD, gD))
        };
        if (xD) {
          const CD = async DD => {
            (await xD).loadData(DD, OD, ((DD, CD, cD, iD, fD, bD) => {
              bD ? JD("TextureLoader failed to load data") : wD(OD, UD, ID, {
                width: DD,
                height: CD
              }, OD.invertY, !cD, iD, (() => (fD(), !1)), pD)
            }), vD)
          };
          if (BD) {
            const DD = async DD => {
              try {
                await CD(DD)
              } catch (cD) {
                JD("Failed to parse texture data", cD)
              }
            };
            BD instanceof ArrayBuffer ? DD(new Uint8Array(BD)) : ArrayBuffer.isView(BD) ? DD(BD) : QD && QD("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(DD, (async DD => {
            try {
              await CD(new Uint8Array(DD))
            } catch (cD) {
              JD("Failed to parse texture data", cD)
            }
          }), void 0, ID ? ID.offlineProvider : void 0, !0, ((DD, CD) => {
            JD("Unable to load " + (DD && DD.responseURL, CD))
          }))
        } else {
          const cD = DD => {
            mD && !this._doNotHandleContextLost && (OD._buffer = DD), wD(OD, UD, ID, DD, OD.invertY, CD, !1, SD, pD)
          };
          !XD || nD ? BD && ("string" === typeof BD.decoding || BD.close) ? cD(BD) : ND._FileToolsLoadImage(DD || "", cD, JD, ID ? ID.offlineProvider : null, oD, OD.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof BD || BD instanceof ArrayBuffer || ArrayBuffer.isView(BD) || BD instanceof Blob ? ND._FileToolsLoadImage(BD, cD, JD, ID ? ID.offlineProvider : null, oD, OD.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : BD && cD(BD)
        }
        return OD
      }
      _rebuildBuffers() {
        for (const DD of this._uniformBuffers) DD._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, ZD.e)() ? document : null
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
        for (const DD in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, DD) && (this._boundTexturesCache[DD] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(DD) {
        this._name = DD
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
      setHardwareScalingLevel(DD) {
        this._hardwareScalingLevel = DD, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(DD) {
        this._doNotHandleContextLost = DD
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(DD, CD, cD) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new wD, this._stencilStateComposer = new SD, this._stencilState = new BD, this._alphaState = new yD.d(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new ID.c, this.onCanvasFocusObservable = new ID.c, this.onNewSceneAddedObservable = new ID.c, this.onResizeObservable = new ID.c, this.onCanvasPointerOutObservable = new ID.c, this.onEffectErrorObservable = new ID.c, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new ID.c, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = DD => this._renderLoop(DD), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new ID.c, this.onAfterShaderCompilationObservable = new ID.c, this.onBeginFrameObservable = new ID.c, this.onEndFrameObservable = new ID.c, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new ID.c, this.onContextRestoredObservable = new ID.c, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.Aq = new ID.c, this.onReleaseEffectsObservable = new ID.c, iD.b.Instances.push(this), this.startTime = QD.b.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, bD.e.SetMatrixPrecision(!!CD.useLargeWorldRendering || !!CD.useHighPrecisionMatrix), (0, ZD.i)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), CD.antialias = DD ?? CD.antialias, CD.deterministicLockstep = CD.deterministicLockstep ?? !1, CD.lockstepMaxSteps = CD.lockstepMaxSteps ?? 4, CD.timeStep = CD.timeStep ?? 1 / 60, CD.stencil = CD.stencil ?? !0, this._audioContext = CD.audioEngineOptions?.audioContext ?? null, this._audioDestination = CD.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = CD.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!CD.doNotHandleContextLost, this._isStencilEnable = !!CD.stencil, this.useExactSrgbConversions = CD.useExactSrgbConversions ?? !1, this.canvasTabIndex = CD.canvasTabIndex ?? this.canvasTabIndex;
        const pD = (0, ZD.m)() && window.devicePixelRatio || 1,
          fD = CD.limitDeviceRatio || pD;
        cD = cD || CD.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = cD, this._hardwareScalingLevel = cD ? 1 / Math.min(fD, pD) : 1, this._lastDevicePixelRatio = pD, this._creationOptions = CD
      }
      resize() {
        let DD, CD, cD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const DD = (0, ZD.m)() && window.devicePixelRatio || 1,
            CD = this._lastDevicePixelRatio / DD;
          this._lastDevicePixelRatio = DD, this._hardwareScalingLevel *= CD
        }
        if ((0, ZD.m)() && (0, ZD.e)())
          if (this._renderingCanvas) {
            const cD = this._renderingCanvas.getBoundingClientRect?.();
            DD = this._renderingCanvas.clientWidth || cD?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, CD = this._renderingCanvas.clientHeight || cD?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else DD = window.innerWidth, CD = window.innerHeight;
        else DD = this._renderingCanvas ? this._renderingCanvas.width : 100, CD = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(DD / this._hardwareScalingLevel, CD / this._hardwareScalingLevel, cD)
      }
      setSize(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (DD |= 0, CD |= 0, !cD && this._renderingCanvas.width === DD && this._renderingCanvas.height === CD) return !1;
        if (this._renderingCanvas.width = DD, this._renderingCanvas.height = CD, this.scenes) {
          for (let DD = 0; DD < this.scenes.length; DD++) {
            const CD = this.scenes[DD];
            for (let DD = 0; DD < CD.cameras.length; DD++) {
              CD.cameras[DD]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD, BD) {
        throw (0, MD.m)("engine.rawTexture")
      }
      createRawCubeTexture(DD, CD, cD, ID, pD, iD, fD, bD) {
        throw (0, MD.m)("engine.rawTexture")
      }
      createRawTexture3D(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD) {
        throw (0, MD.m)("engine.rawTexture")
      }
      createRawTexture2DArray(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD, BD) {
        throw (0, MD.m)("engine.rawTexture")
      }
      _sharedInit(DD) {
        this._renderingCanvas = DD
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const DD = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== DD.indexOf("Mobile") || -1 !== DD.indexOf("Mac") && (0, ZD.e)() && "ontouchend" in document
        }, this._checkForMobile(), (0, ZD.m)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(DD) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(DD, !1)
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
      _createImageBitmapFromSource(DD, CD) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(DD, CD) {
        return createImageBitmap(DD, CD)
      }
      resizeImageBitmap(DD, CD, cD) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(DD) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(DD, CD) {
        if ("undefined" === typeof document) return new OffscreenCanvas(DD, CD);
        const cD = document.createElement("canvas");
        return cD.width = DD, cD.height = CD, cD
      }
      createCanvas(DD, CD) {
        return ND._CreateCanvas(DD, CD)
      }
      static _FileToolsLoadImage(DD, CD, cD, ID, pD, iD, fD) {
        if (!oD.d.loadImage) throw (0, MD.m)("FileTools");
        return oD.d.loadImage(DD, CD, cD, ID, pD, iD, fD)
      }
      _loadFile(DD, CD, cD, ID, pD, iD) {
        const fD = (0, oD.n)(DD, CD, cD, ID, pD, iD);
        return this._activeRequests.push(fD), fD.onCompleteObservable.add((() => {
          const DD = this._activeRequests.indexOf(fD); - 1 !== DD && this._activeRequests.splice(DD, 1)
        })), fD
      }
      static _FileToolsLoadFile(DD, CD, cD, ID, pD, iD) {
        if (oD.d.loadFile) return oD.d.loadFile(DD, CD, cD, ID, pD, iD);
        throw (0, MD.m)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), pD.b.ResetCache();
        for (const CD of this._activeRequests) CD.abort();
        this._boundRenderFunction = null, this.Aq.notifyObservers(this), this.Aq.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, ZD.m)() && window.removeEventListener("resize", this._checkForMobile);
        const DD = iD.b.Instances.indexOf(this);
        DD >= 0 && iD.b.Instances.splice(DD, 1), iD.b.Instances.length || (iD.b.OnEnginesDisposedObservable.notifyObservers(this), iD.b.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(DD) {
        throw (0, MD.m)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(DD, CD) {
        for (let cD = 0; cD < iD.b.Instances.length; cD++) {
          const ID = iD.b.Instances[cD];
          for (let cD = 0; cD < ID.scenes.length; cD++) ID.scenes[cD].markAllMaterialsAsDirty(DD, CD)
        }
      }
      static GetCompatibleTextureLoader(DD, CD) {
        return null
      }
    }
    ND._RenderPassIdCounter = 0, ND._RescalePostProcessFactory = null, ND.CollisionsEpsilon = .001, ND.QueueNewFrame = vD
  },
  39003: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ID.ShadersRepository : ID.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ID.ShadersStore : ID.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? ID.IncludesShadersStore : ID.IncludesShadersStoreWGSL
      }
    }
    ID.ShadersRepository = "src/Shaders/", ID.ShadersStore = {}, ID.IncludesShadersStore = {}, ID.ShadersRepositoryWGSL = "src/ShadersWGSL/", ID.ShadersStoreWGSL = {}, ID.IncludesShadersStoreWGSL = {}
  },
  39014: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => yD,
      f: () => gD,
      g: () => tD,
      k: () => MD,
      o: () => ZD,
      p: () => ND,
      r: () => BD,
      s: () => wD,
      w: () => SD,
      x: () => QD,
      A: () => bD
    });
    class ID {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(DD) {
        DD && this.program && DD(this.program)
      }
      setEngine(DD) {
        this.engine = DD
      }
      _fillEffectInformation(DD, CD, cD, ID, pD, iD, fD, bD) {
        const QD = this.engine;
        if (QD.supportsUniformBuffers)
          for (const SD in CD) DD.bindUniformBlock(SD, CD[SD]);
        let wD;
        for (this.engine.getUniforms(this, cD).forEach(((DD, CD) => {
            ID[cD[CD]] = DD
          })), this._uniforms = ID, wD = 0; wD < pD.length; wD++) {
          null == DD.getUniform(pD[wD]) && (pD.splice(wD, 1), wD--)
        }
        pD.forEach(((DD, CD) => {
          iD[DD] = CD
        }));
        for (const SD of QD.getAttributes(this, fD)) bD.push(SD)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(DD, CD) {
        const cD = this._valueCache[DD],
          ID = CD.updateFlag;
        if (void 0 !== cD && cD === ID) return !1;
        const pD = CD.XcD();
        let iD = this._matrixValueCache[DD];
        if (void 0 !== cD && null !== cD && void 0 !== iD) {
          let CD = !0;
          for (let DD = 15; DD >= 0; DD--)
            if (iD[DD] !== pD[DD]) {
              CD = !1;
              break
            } if (CD) return this._valueCache[DD] = ID, !1
        }
        return void 0 === iD && (iD = this._matrixValueCache[DD] = new Float32Array(16)), iD.set(pD), this._valueCache[DD] = ID, !0
      }
      _cacheFloat2(DD, CD, cD) {
        let ID = this._valueCache[DD];
        if (!ID || 2 !== ID.length) return ID = [CD, cD], this._valueCache[DD] = ID, !0;
        let pD = !1;
        return ID[0] !== CD && (ID[0] = CD, pD = !0), ID[1] !== cD && (ID[1] = cD, pD = !0), pD
      }
      _cacheFloat3(DD, CD, cD, ID) {
        let pD = this._valueCache[DD];
        if (!pD || 3 !== pD.length) return pD = [CD, cD, ID], this._valueCache[DD] = pD, !0;
        let iD = !1;
        return pD[0] !== CD && (pD[0] = CD, iD = !0), pD[1] !== cD && (pD[1] = cD, iD = !0), pD[2] !== ID && (pD[2] = ID, iD = !0), iD
      }
      _cacheFloat4(DD, CD, cD, ID, pD) {
        let iD = this._valueCache[DD];
        if (!iD || 4 !== iD.length) return iD = [CD, cD, ID, pD], this._valueCache[DD] = iD, !0;
        let fD = !1;
        return iD[0] !== CD && (iD[0] = CD, fD = !0), iD[1] !== cD && (iD[1] = cD, fD = !0), iD[2] !== ID && (iD[2] = ID, fD = !0), iD[3] !== pD && (iD[3] = pD, fD = !0), fD
      }
      setInt(DD, CD) {
        const cD = this._valueCache[DD];
        void 0 !== cD && cD === CD || this.engine.setInt(this._uniforms[DD], CD) && (this._valueCache[DD] = CD)
      }
      setInt2(DD, CD, cD) {
        this._cacheFloat2(DD, CD, cD) && (this.engine.setInt2(this._uniforms[DD], CD, cD) || (this._valueCache[DD] = null))
      }
      setInt3(DD, CD, cD, ID) {
        this._cacheFloat3(DD, CD, cD, ID) && (this.engine.setInt3(this._uniforms[DD], CD, cD, ID) || (this._valueCache[DD] = null))
      }
      setInt4(DD, CD, cD, ID, pD) {
        this._cacheFloat4(DD, CD, cD, ID, pD) && (this.engine.setInt4(this._uniforms[DD], CD, cD, ID, pD) || (this._valueCache[DD] = null))
      }
      setIntArray(DD, CD) {
        this._valueCache[DD] = null, this.engine.setIntArray(this._uniforms[DD], CD)
      }
      setIntArray2(DD, CD) {
        this._valueCache[DD] = null, this.engine.setIntArray2(this._uniforms[DD], CD)
      }
      setIntArray3(DD, CD) {
        this._valueCache[DD] = null, this.engine.setIntArray3(this._uniforms[DD], CD)
      }
      setIntArray4(DD, CD) {
        this._valueCache[DD] = null, this.engine.setIntArray4(this._uniforms[DD], CD)
      }
      setUInt(DD, CD) {
        const cD = this._valueCache[DD];
        void 0 !== cD && cD === CD || this.engine.setUInt(this._uniforms[DD], CD) && (this._valueCache[DD] = CD)
      }
      setUInt2(DD, CD, cD) {
        this._cacheFloat2(DD, CD, cD) && (this.engine.setUInt2(this._uniforms[DD], CD, cD) || (this._valueCache[DD] = null))
      }
      setUInt3(DD, CD, cD, ID) {
        this._cacheFloat3(DD, CD, cD, ID) && (this.engine.setUInt3(this._uniforms[DD], CD, cD, ID) || (this._valueCache[DD] = null))
      }
      setUInt4(DD, CD, cD, ID, pD) {
        this._cacheFloat4(DD, CD, cD, ID, pD) && (this.engine.setUInt4(this._uniforms[DD], CD, cD, ID, pD) || (this._valueCache[DD] = null))
      }
      setUIntArray(DD, CD) {
        this._valueCache[DD] = null, this.engine.setUIntArray(this._uniforms[DD], CD)
      }
      setUIntArray2(DD, CD) {
        this._valueCache[DD] = null, this.engine.setUIntArray2(this._uniforms[DD], CD)
      }
      setUIntArray3(DD, CD) {
        this._valueCache[DD] = null, this.engine.setUIntArray3(this._uniforms[DD], CD)
      }
      setUIntArray4(DD, CD) {
        this._valueCache[DD] = null, this.engine.setUIntArray4(this._uniforms[DD], CD)
      }
      setArray(DD, CD) {
        this._valueCache[DD] = null, this.engine.setArray(this._uniforms[DD], CD)
      }
      setArray2(DD, CD) {
        this._valueCache[DD] = null, this.engine.setArray2(this._uniforms[DD], CD)
      }
      setArray3(DD, CD) {
        this._valueCache[DD] = null, this.engine.setArray3(this._uniforms[DD], CD)
      }
      setArray4(DD, CD) {
        this._valueCache[DD] = null, this.engine.setArray4(this._uniforms[DD], CD)
      }
      setMatrices(DD, CD) {
        CD && (this._valueCache[DD] = null, this.engine.setMatrices(this._uniforms[DD], CD))
      }
      setMatrix(DD, CD) {
        this._cacheMatrix(DD, CD) && (this.engine.setMatrices(this._uniforms[DD], CD.XcD()) || (this._valueCache[DD] = null))
      }
      setMatrix3x3(DD, CD) {
        this._valueCache[DD] = null, this.engine.setMatrix3x3(this._uniforms[DD], CD)
      }
      setMatrix2x2(DD, CD) {
        this._valueCache[DD] = null, this.engine.setMatrix2x2(this._uniforms[DD], CD)
      }
      setFloat(DD, CD) {
        const cD = this._valueCache[DD];
        void 0 !== cD && cD === CD || this.engine.setFloat(this._uniforms[DD], CD) && (this._valueCache[DD] = CD)
      }
      setVector2(DD, CD) {
        this._cacheFloat2(DD, CD.x, CD.y) && (this.engine.setFloat2(this._uniforms[DD], CD.x, CD.y) || (this._valueCache[DD] = null))
      }
      setFloat2(DD, CD, cD) {
        this._cacheFloat2(DD, CD, cD) && (this.engine.setFloat2(this._uniforms[DD], CD, cD) || (this._valueCache[DD] = null))
      }
      setVector3(DD, CD) {
        this._cacheFloat3(DD, CD.x, CD.y, CD.z) && (this.engine.setFloat3(this._uniforms[DD], CD.x, CD.y, CD.z) || (this._valueCache[DD] = null))
      }
      setFloat3(DD, CD, cD, ID) {
        this._cacheFloat3(DD, CD, cD, ID) && (this.engine.setFloat3(this._uniforms[DD], CD, cD, ID) || (this._valueCache[DD] = null))
      }
      setVector4(DD, CD) {
        this._cacheFloat4(DD, CD.x, CD.y, CD.z, CD.w) && (this.engine.setFloat4(this._uniforms[DD], CD.x, CD.y, CD.z, CD.w) || (this._valueCache[DD] = null))
      }
      setQuaternion(DD, CD) {
        this._cacheFloat4(DD, CD.x, CD.y, CD.z, CD.w) && (this.engine.setFloat4(this._uniforms[DD], CD.x, CD.y, CD.z, CD.w) || (this._valueCache[DD] = null))
      }
      setFloat4(DD, CD, cD, ID, pD) {
        this._cacheFloat4(DD, CD, cD, ID, pD) && (this.engine.setFloat4(this._uniforms[DD], CD, cD, ID, pD) || (this._valueCache[DD] = null))
      }
      setColor3(DD, CD) {
        this._cacheFloat3(DD, CD.r, CD.g, CD.b) && (this.engine.setFloat3(this._uniforms[DD], CD.r, CD.g, CD.b) || (this._valueCache[DD] = null))
      }
      setColor4(DD, CD, cD) {
        this._cacheFloat4(DD, CD.r, CD.g, CD.b, cD) && (this.engine.setFloat4(this._uniforms[DD], CD.r, CD.g, CD.b, cD) || (this._valueCache[DD] = null))
      }
      setDirectColor4(DD, CD) {
        this._cacheFloat4(DD, CD.r, CD.g, CD.b, CD.a) && (this.engine.setFloat4(this._uniforms[DD], CD.r, CD.g, CD.b, CD.a) || (this._valueCache[DD] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var pD = cD(39023);
    const iD = new WeakMap,
      fD = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function bD(DD) {
      let CD = iD.get(DD);
      if (!CD) {
        if (!DD) return fD;
        CD = {
          _webGLVersion: DD.TEXTURE_BINDING_3D ? 2 : 1,
          _context: DD,
          parallelShaderCompile: DD.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, iD.set(DD, CD)
      }
      return CD
    }

    function QD(DD) {
      iD.delete(DD)
    }

    function wD(DD, CD, cD, ID, pD, iD) {
      const fD = bD(ID);
      iD || (iD = fD._createShaderProgramInjection ?? yD);
      return iD(DD, vD(CD, "vertex", ID, fD._contextWasLost), vD(cD, "fragment", ID, fD._contextWasLost), ID, pD, fD.validateShaderPrograms)
    }

    function SD(DD, CD, cD, ID, pD) {
      let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        fD = arguments.length > 6 ? arguments[6] : void 0;
      const QD = bD(pD);
      fD || (fD = QD._createShaderProgramInjection ?? yD);
      const wD = QD._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return fD(DD, oD(CD, "vertex", ID, wD, pD, QD._contextWasLost), oD(cD, "fragment", ID, wD, pD, QD._contextWasLost), pD, iD, QD.validateShaderPrograms)
    }

    function BD(DD, CD) {
      const cD = new ID,
        pD = bD(DD);
      return pD.parallelShaderCompile && !pD.disableParallelShaderCompile && (cD.isParallelCompiled = !0), cD.context = pD._context, cD
    }

    function yD(DD, CD, cD, ID) {
      let pD = arguments.length > 5 ? arguments[5] : void 0;
      const iD = ID.createProgram();
      if (DD.program = iD, !iD) throw new Error("Unable to create program");
      return ID.attachShader(iD, CD), ID.attachShader(iD, cD), ID.linkProgram(iD), DD.context = ID, DD.vertexShader = CD, DD.fragmentShader = cD, DD.isParallelCompiled || tD(DD, ID, pD), iD
    }

    function MD(DD, CD, cD) {
      const ID = DD;
      if (ID._isDisposed) return !1;
      const pD = bD(CD);
      return !!(pD && pD.parallelShaderCompile && pD.parallelShaderCompile.COMPLETION_STATUS_KHR && ID.program && CD.getProgramParameter(ID.program, pD.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (tD(ID, CD, cD), !0)
    }

    function tD(DD, CD, cD) {
      const ID = DD.context,
        pD = DD.vertexShader,
        iD = DD.fragmentShader,
        fD = DD.program;
      if (!ID.getProgramParameter(fD, ID.LINK_STATUS)) {
        if (!CD.getShaderParameter(pD, CD.COMPILE_STATUS)) {
          const cD = CD.getShaderInfoLog(pD);
          if (cD) throw DD.vertexCompilationError = cD, new Error("VERTEX SHADER " + cD)
        }
        if (!CD.getShaderParameter(iD, CD.COMPILE_STATUS)) {
          const cD = CD.getShaderInfoLog(iD);
          if (cD) throw DD.fragmentCompilationError = cD, new Error("FRAGMENT SHADER " + cD)
        }
        const cD = ID.getProgramInfoLog(fD);
        if (cD) throw DD.programLinkError = cD, new Error(cD)
      }
      if (cD) {
        ID.validateProgram(fD);
        if (!ID.getProgramParameter(fD, ID.VALIDATE_STATUS)) {
          const CD = ID.getProgramInfoLog(fD);
          if (CD) throw DD.programValidationError = CD, new Error(CD)
        }
      }
      ID.deleteShader(pD), ID.deleteShader(iD), DD.vertexShader = void 0, DD.fragmentShader = void 0, DD.onCompiled && (DD.onCompiled(), DD.onCompiled = void 0)
    }

    function ZD(DD, CD, cD, ID, pD, iD, fD, QD, BD) {
      let yD = arguments.length > 10 ? arguments[10] : void 0,
        MD = arguments.length > 11 ? arguments[11] : void 0,
        tD = arguments.length > 12 ? arguments[12] : void 0;
      const ZD = bD(DD.context);
      MD || (MD = ZD.createRawShaderProgramInjection ?? wD), tD || (tD = ZD.createShaderProgramInjection ?? SD);
      const oD = DD;
      oD.program = ID ? MD(oD, CD, cD, oD.context, BD) : tD(oD, CD, cD, QD, oD.context, BD), oD.program.__SPECTOR_rebuildProgram = fD, yD()
    }

    function oD(DD, CD, cD, ID, iD, fD) {
      return vD((0, pD.h)(DD, cD, ID), CD, iD, fD)
    }

    function vD(DD, CD, cD, ID) {
      const pD = cD.createShader("vertex" === CD ? cD.VERTEX_SHADER : cD.FRAGMENT_SHADER);
      if (!pD) {
        let DD, pD = cD.NO_ERROR;
        for (;
          (DD = cD.getError()) !== cD.NO_ERROR;) pD = DD;
        throw new Error(`Something went wrong while creating a gl ${CD} shader object. gl error=${pD}, gl isContextLost=${cD.isContextLost()}, _contextWasLost=${ID}`)
      }
      return cD.shaderSource(pD, DD), cD.compileShader(pD), pD
    }

    function ND(DD, CD) {
      CD.useProgram(DD)
    }

    function gD(DD, CD) {
      const cD = DD;
      if (!cD.isParallelCompiled) return void CD(DD);
      const ID = cD.onCompiled;
      cD.onCompiled = () => {
        ID?.(), CD(DD)
      }
    }
  },
  38991: (DD, CD, cD) => {
    cD.d(CD, {
      ThinEngine: () => mD
    });
    var ID = cD(38996),
      pD = cD(39014),
      iD = cD(39046),
      fD = cD(39062),
      bD = cD(38048),
      QD = cD(39010);
    class wD {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(DD, CD, cD, ID, pD) {
        if (pD.drawBuffersExtensionDisabled) {
          const CD = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          DD = DD.replace(CD, "")
        }
        return DD
      }
    }
    const SD = /(flat\s)?\s*varying\s*.*/;
    class BD {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(DD) {
        return DD.replace("attribute", "in")
      }
      varyingCheck(DD, CD) {
        return SD.test(DD)
      }
      varyingProcessor(DD, CD) {
        return DD.replace("varying", CD ? "in" : "out")
      }
      postProcessor(DD, CD, cD) {
        const ID = -1 !== DD.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (DD = (DD = DD.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), cD) {
          const cD = -1 !== DD.search(/layout *\(location *= *0\) *out/g),
            pD = -1 !== CD.indexOf("#define DUAL_SOURCE_BLENDING"),
            iD = pD ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          pD && (DD = "#extension GL_EXT_blend_func_extended : require\n" + DD), DD = (DD = (DD = (DD = (DD = (DD = (DD = DD.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (ID || cD ? "" : iD) + "void main(")
        } else {
          CD.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (DD = "invariant gl_Position;\n" + DD);
          if (-1 !== CD.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + DD
        }
        return DD
      }
    }
    var yD = cD(39071),
      MD = cD(39084),
      tD = cD(39091),
      ZD = cD(38979),
      oD = cD(39023),
      vD = cD(39008),
      ND = cD(39097),
      gD = cD(39056);
    class XD {}
    class mD extends iD.e {
      get name() {
        return this._name
      }
      set name(DD) {
        this._name = DD
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return ID.b.ShadersRepository
      }
      static set ShadersRepository(DD) {
        ID.b.ShadersRepository = DD
      }
      get supportsUniformBuffers() {
        return this.JZ > 1 && !this.disableUniformBuffers
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
      constructor(DD, CD, cD, ID) {
        if (cD = cD || {}, super(CD ?? cD.antialias, cD, ID), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !DD) return;
        let iD;
        if (DD.getContext) {
          if (iD = DD, void 0 === cD.preserveDrawingBuffer && (cD.preserveDrawingBuffer = !1), void 0 === cD.xrCompatible && (cD.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const DD = navigator.userAgent;
            for (const CD of mD.ExceptionList) {
              const ID = CD.key,
                pD = CD.targets;
              if (new RegExp(ID).test(DD)) {
                if (CD.capture && CD.captureConstraint) {
                  const cD = CD.capture,
                    ID = CD.captureConstraint,
                    pD = new RegExp(cD).exec(DD);
                  if (pD && pD.length > 0) {
                    if (parseInt(pD[pD.length - 1]) >= ID) continue
                  }
                }
                for (const DD of pD) switch (DD) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    cD.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, pD.x)(this._gl)
            } : (this._onContextLost = DD => {
              DD.preventDefault(), this._contextWasLost = !0, (0, pD.x)(this._gl), bD.e.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, iD.addEventListener("webglcontextrestored", this._onContextRestored, !1), cD.powerPreference = cD.powerPreference || "high-performance"), iD.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (cD.xrCompatible = !1), !cD.disableWebGL2Support) try {
            this._gl = iD.getContext("webgl2", cD) || iD.getContext("experimental-webgl2", cD), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (SD) {}
          if (!this._gl) {
            if (!iD) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = iD.getContext("webgl", cD) || iD.getContext("experimental-webgl", cD)
            } catch (SD) {
              throw new Error("WebGL not supported", {
                cause: SD
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = DD, iD = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const CD = this._gl.getContextAttributes();
          CD && (cD.stencil = CD.stencil)
        }
        this._sharedInit(iD), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== cD.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = cD.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let pD = 0; pD < this._caps.maxVertexAttribs; pD++) this._currentBufferPointers[pD] = new XD;
        this._shaderProcessor = this.JZ > 1 ? new BD : new wD;
        const fD = `Babylon.js v${mD.Version}`;
        bD.e.Log(fD + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", fD);
        const QD = (0, pD.A)(this._gl);
        QD.validateShaderPrograms = this.validateShaderPrograms, QD.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(DD) {
        return null
      }
      areAllEffectsReady() {
        for (const DD in this._compiledEffects) {
          if (!this._compiledEffects[DD].isReady()) return !1
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
        const DD = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != DD && (this._glRenderer = this._gl.getParameter(DD.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(DD.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const CD = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!CD, this._alphaState = new gD.d(this._caps.blendParametersPerTarget), CD && (this._gl.blendEquationSeparateIndexed = CD.blendEquationSeparateiOES.bind(CD), this._gl.blendEquationIndexed = CD.blendEquationiOES.bind(CD), this._gl.blendFuncSeparateIndexed = CD.blendFuncSeparateiOES.bind(CD), this._gl.blendFuncIndexed = CD.blendFunciOES.bind(CD), this._gl.colorMaskIndexed = CD.colorMaskiOES.bind(CD), this._gl.disableIndexed = CD.disableiOES.bind(CD), this._gl.enableIndexed = CD.enableiOES.bind(CD)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const DD = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== DD) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = DD.drawBuffersWEBGL.bind(DD), this._caps.maxDrawBuffers = this._gl.getParameter(DD.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let CD = 0; CD < 16; CD++) this._gl["COLOR_ATTACHMENT" + CD + "_WEBGL"] = DD["COLOR_ATTACHMENT" + CD + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const DD = this._gl.getExtension("WEBGL_depth_texture");
          null != DD && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = DD.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const DD = this._gl.getExtension("OES_vertex_array_object");
          null != DD && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = DD.createVertexArrayOES.bind(DD), this._gl.bindVertexArray = DD.bindVertexArrayOES.bind(DD), this._gl.deleteVertexArray = DD.deleteVertexArrayOES.bind(DD))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const DD = this._gl.getExtension("ANGLE_instanced_arrays");
          null != DD ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = DD.drawArraysInstancedANGLE.bind(DD), this._gl.drawElementsInstanced = DD.drawElementsInstancedANGLE.bind(DD), this._gl.vertexAttribDivisor = DD.vertexAttribDivisorANGLE.bind(DD)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const DD = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            CD = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (DD && CD && (this._caps.highPrecisionShaderSupported = 0 !== DD.precision && 0 !== CD.precision, this._caps.shaderFloatPrecision = Math.min(DD.precision, CD.precision)), !this._shouldUseHighPrecisionShader) {
            const DD = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              CD = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            DD && CD && (this._caps.shaderFloatPrecision = Math.min(DD.precision, CD.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const DD = this._gl.getExtension("EXT_blend_minmax");
          null != DD && (this._caps.blendMinMax = !0, this._gl.MAX = DD.MAX_EXT, this._gl.MIN = DD.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const DD = this._gl.getExtension("EXT_sRGB");
            null != DD && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: DD.SRGB_EXT,
              SRGB8: DD.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: DD.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const DD = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== DD && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && DD)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let cD = 0; cD < this._maxSimultaneousTextures; cD++) this._nextFreeTextureSlots.push(cD);
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
      get JZ() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const DD = this._workingCanvas.getContext("2d");
        DD && (this._workingContext = DD)
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
        const DD = this.getGlInfo();
        return DD && DD.renderer ? DD.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const iD = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = iD;
        let fD = 0;
        if (CD && DD) {
          let CD = !0;
          if (this._currentRenderTarget) {
            const cD = this._currentRenderTarget.texture?.format;
            if (void 0 !== cD && (0, ND.i)(cD)) {
              const cD = this._currentRenderTarget.texture?.type;
              void 0 !== cD && (0, ND.k)(cD) ? (mD._TempClearColorUint32[0] = 255 * DD.r, mD._TempClearColorUint32[1] = 255 * DD.g, mD._TempClearColorUint32[2] = 255 * DD.b, mD._TempClearColorUint32[3] = 255 * DD.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, mD._TempClearColorUint32), CD = !1) : (mD._TempClearColorInt32[0] = 255 * DD.r, mD._TempClearColorInt32[1] = 255 * DD.g, mD._TempClearColorInt32[2] = 255 * DD.b, mD._TempClearColorInt32[3] = 255 * DD.a, this._gl.clearBufferiv(this._gl.COLOR, 0, mD._TempClearColorInt32), CD = !1)
            }
          }
          CD && (this._gl.clearColor(DD.r, DD.g, DD.b, void 0 !== DD.a ? DD.a : 1), fD |= this._gl.COLOR_BUFFER_BIT)
        }
        cD && (this.vcD ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), fD |= this._gl.DEPTH_BUFFER_BIT), ID && (this._gl.clearStencil(pD), fD |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(fD)
      }
      _clearColorAttachment(DD, CD, cD, ID) {
        if ((0, ND.i)(cD)) {
          const cD = (0, ND.k)(ID),
            pD = cD ? mD._TempClearColorUint32 : mD._TempClearColorInt32;
          return pD[0] = CD.r, pD[1] = CD.g, pD[2] = CD.b, pD[3] = CD.a, void(cD ? this._gl.clearBufferuiv(this._gl.COLOR, DD, pD) : this._gl.clearBufferiv(this._gl.COLOR, DD, pD))
        }
        mD._TempClearColorFloat32[0] = CD.r, mD._TempClearColorFloat32[1] = CD.g, mD._TempClearColorFloat32[2] = CD.b, mD._TempClearColorFloat32[3] = CD.a, this._gl.clearBufferfv(this._gl.COLOR, DD, mD._TempClearColorFloat32)
      }
      _viewport(DD, CD, cD, ID) {
        DD === this._viewportCached.x && CD === this._viewportCached.y && cD === this._viewportCached.z && ID === this._viewportCached.w || (this._viewportCached.x = DD, this._viewportCached.y = CD, this._viewportCached.z = cD, this._viewportCached.w = ID, this._gl.viewport(DD, CD, cD, ID))
      }
      Am() {
        super.Am(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = arguments.length > 3 ? arguments[3] : void 0,
          pD = arguments.length > 4 ? arguments[4] : void 0,
          iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          fD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const QD = DD;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = DD, this._integerMRTAttachmentsMask = !DD.isMulti && DD.texture && (0, ND.i)(DD.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(QD._framebuffer);
        const wD = this._gl;
        DD.isMulti || (DD.is2DArray || DD.is3D ? (wD.framebufferTextureLayer(wD.FRAMEBUFFER, wD.COLOR_ATTACHMENT0, DD.texture._hardwareTexture?.underlyingResource, iD, fD), QD._currentLOD = iD) : DD.isCube ? wD.framebufferTexture2D(wD.FRAMEBUFFER, wD.COLOR_ATTACHMENT0, wD.TEXTURE_CUBE_MAP_POSITIVE_X + CD, DD.texture._hardwareTexture?.underlyingResource, iD) : QD._currentLOD !== iD && (wD.framebufferTexture2D(wD.FRAMEBUFFER, wD.COLOR_ATTACHMENT0, wD.TEXTURE_2D, DD.texture._hardwareTexture?.underlyingResource, iD), QD._currentLOD = iD));
        const SD = DD._depthStencilTexture;
        if (SD) {
          DD.is3D && (DD.texture.width === SD.width && DD.texture.height === SD.height && DD.texture.depth === SD.depth || bD.e.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const cD = DD._depthStencilTextureWithStencil ? wD.DEPTH_STENCIL_ATTACHMENT : wD.DEPTH_ATTACHMENT;
          DD.is2DArray || DD.is3D ? wD.framebufferTextureLayer(wD.FRAMEBUFFER, cD, SD._hardwareTexture?.underlyingResource, iD, fD) : DD.isCube ? wD.framebufferTexture2D(wD.FRAMEBUFFER, cD, wD.TEXTURE_CUBE_MAP_POSITIVE_X + CD, SD._hardwareTexture?.underlyingResource, iD) : wD.framebufferTexture2D(wD.FRAMEBUFFER, cD, wD.TEXTURE_2D, SD._hardwareTexture?.underlyingResource, iD)
        }
        QD._MSAAFramebuffer && this._bindUnboundFramebuffer(QD._MSAAFramebuffer), this._cachedViewport && !pD ? this.setViewport(this._cachedViewport, cD, ID) : (cD || (cD = DD.width, iD && (cD /= Math.pow(2, iD))), ID || (ID = DD.height, iD && (ID /= Math.pow(2, iD))), this._viewport(0, 0, cD, ID)), this.wipeCaches()
      }
      setStateCullFaceType(DD, CD) {
        const cD = this.cullBackFaces ?? DD ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== cD || CD) && (this._depthCullingState.cullFace = cD)
      }
      setState(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          pD = arguments.length > 4 ? arguments[4] : void 0,
          iD = arguments.length > 5 ? arguments[5] : void 0,
          fD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== DD || cD) && (this._depthCullingState.cull = DD), this.setStateCullFaceType(pD, cD), this.setZOffset(CD), this.setZOffsetUnits(fD);
        const bD = ID ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== bD || cD) && (this._depthCullingState.frontFace = bD), this._stencilStateComposer.stencilMaterial = iD
      }
      _resolveAndGenerateMipMapsFramebuffer(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        DD.disableAutomaticMSAAResolve || (DD.isMulti ? this.resolveMultiFramebuffer(DD) : this.resolveFramebuffer(DD)), CD || (DD.isMulti ? this.generateMipMapsMultiFramebuffer(DD) : this.generateMipMapsFramebuffer(DD))
      }
      _bindUnboundFramebuffer(DD) {
        this._currentFramebuffer !== DD && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, DD), this._currentFramebuffer = DD)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(DD) {
        const CD = this._getTextureTarget(DD);
        this._bindTextureDirectly(CD, DD, !0), this._gl.generateMipmap(CD), this._bindTextureDirectly(CD, null)
      }
      unBindFramebuffer(DD, CD, cD) {
        const ID = DD;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(DD, CD), cD && (ID._MSAAFramebuffer && this._bindUnboundFramebuffer(ID._framebuffer), cD()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(DD) {
        DD.isMulti || !DD.texture?.generateMipMaps || DD.isCube || this.generateMipmaps(DD.texture)
      }
      resolveFramebuffer(DD) {
        const CD = DD,
          cD = this._gl;
        if (!CD._MSAAFramebuffer || CD.isMulti) return;
        let ID = CD.resolveMSAAColors ? cD.COLOR_BUFFER_BIT : 0;
        ID |= CD._generateDepthBuffer && CD.resolveMSAADepth ? cD.DEPTH_BUFFER_BIT : 0, ID |= CD._generateStencilBuffer && CD.resolveMSAAStencil ? cD.STENCIL_BUFFER_BIT : 0, cD.bindFramebuffer(cD.READ_FRAMEBUFFER, CD._MSAAFramebuffer), cD.bindFramebuffer(cD.DRAW_FRAMEBUFFER, CD._framebuffer), cD.blitFramebuffer(0, 0, DD.width, DD.height, 0, 0, DD.width, DD.height, ID, cD.NEAREST)
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
      createVertexBuffer(DD, CD, cD) {
        return this._createVertexBuffer(DD, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(DD, CD) {
        const cD = this._gl.createBuffer();
        if (!cD) throw new Error("Unable to create vertex buffer");
        const ID = new yD.b(cD);
        return this.bindArrayBuffer(ID), "number" !== typeof DD ? DD instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(DD), CD), ID.LB = 4 * DD.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, DD, CD), ID.LB = DD.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(DD), CD), ID.LB = DD), this._resetVertexBufferBinding(), ID.references = 1, ID
      }
      createDynamicVertexBuffer(DD, CD) {
        return this._createVertexBuffer(DD, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(DD, CD, cD) {
        const ID = this._gl.createBuffer(),
          pD = new yD.b(ID);
        if (!ID) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(pD);
        const iD = this._normalizeIndexData(DD);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, iD, CD ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), pD.references = 1, pD.is32Bits = 4 === iD.BYTES_PER_ELEMENT, pD
      }
      _normalizeIndexData(DD) {
        if (2 === DD.BYTES_PER_ELEMENT) return DD;
        if (this._caps.uintIndices) {
          if (DD instanceof Uint32Array) return DD;
          for (let CD = 0; CD < DD.length; CD++)
            if (DD[CD] >= 65535) return new Uint32Array(DD);
          return new Uint16Array(DD)
        }
        return new Uint16Array(DD)
      }
      bindArrayBuffer(DD) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(DD, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(DD, CD, cD) {
        const ID = DD.program,
          pD = this._gl.getUniformBlockIndex(ID, CD);
        this._gl.uniformBlockBinding(ID, pD, cD)
      }
      bindIndexBuffer(DD) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(DD, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(DD, CD) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[CD] !== DD) && (this._gl.bindBuffer(CD, DD ? DD.underlyingResource : null), this._currentBoundBuffer[CD] = DD)
      }
      updateArrayBuffer(DD) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, DD)
      }
      _vertexAttribPointer(DD, CD, cD, ID, pD, iD, fD) {
        const bD = this._currentBufferPointers[CD];
        if (!bD) return;
        let QD = !1;
        bD.active ? (bD.buffer !== DD && (bD.buffer = DD, QD = !0), bD.size !== cD && (bD.size = cD, QD = !0), bD.type !== ID && (bD.type = ID, QD = !0), bD.normalized !== pD && (bD.normalized = pD, QD = !0), bD.stride !== iD && (bD.stride = iD, QD = !0), bD.offset !== fD && (bD.offset = fD, QD = !0)) : (QD = !0, bD.active = !0, bD.index = CD, bD.size = cD, bD.type = ID, bD.normalized = pD, bD.stride = iD, bD.offset = fD, bD.buffer = DD), (QD || this._vaoRecordInProgress) && (this.bindArrayBuffer(DD), ID === this._gl.UNSIGNED_INT || ID === this._gl.INT ? this._gl.vertexAttribIPointer(CD, cD, ID, iD, fD) : this._gl.vertexAttribPointer(CD, cD, ID, pD, iD, fD))
      }
      _bindIndexBufferWithCache(DD) {
        null != DD && this._cachedIndexBuffer !== DD && (this._cachedIndexBuffer = DD, this.bindIndexBuffer(DD), this._uintIndicesCurrentlySet = DD.is32Bits)
      }
      _bindVertexBuffersAttributes(DD, CD, cD) {
        const ID = CD.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let pD = 0; pD < ID.length; pD++) {
          const iD = CD.getAttributeLocation(pD);
          if (iD >= 0) {
            const CD = ID[pD];
            let fD = null;
            if (cD && (fD = cD[CD]), fD || (fD = DD[CD]), !fD) continue;
            this._gl.enableVertexAttribArray(iD), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[iD] = !0);
            const bD = fD.getBuffer();
            bD && (this._vertexAttribPointer(bD, iD, fD.getSize(), fD.type, fD.normalized, fD.byteStride, fD.byteOffset), fD.getIsInstanced() && (this._gl.vertexAttribDivisor(iD, fD.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(iD), this._currentInstanceBuffers.push(bD))))
          }
        }
      }
      recordVertexArrayObject(DD, CD, cD, ID) {
        const pD = this._gl.createVertexArray();
        if (!pD) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(pD), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(DD, cD, ID), this.bindIndexBuffer(CD), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), pD
      }
      bindVertexArrayObject(DD, CD) {
        this._cachedVertexArrayObject !== DD && (this._cachedVertexArrayObject = DD, this._gl.bindVertexArray(DD), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != CD && CD.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(DD, CD, cD, ID, pD) {
        if (this._cachedVertexBuffers !== DD || this._cachedEffectForVertexBuffers !== pD) {
          this._cachedVertexBuffers = DD, this._cachedEffectForVertexBuffers = pD;
          const CD = pD.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let iD = 0;
          for (let fD = 0; fD < CD; fD++)
            if (fD < cD.length) {
              const CD = pD.getAttributeLocation(fD);
              CD >= 0 && (this._gl.enableVertexAttribArray(CD), this._vertexAttribArraysEnabled[CD] = !0, this._vertexAttribPointer(DD, CD, cD[fD], this._gl.FLOAT, !1, ID, iD)), iD += 4 * cD[fD]
            }
        }
        this._bindIndexBufferWithCache(CD)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(DD, CD, cD, ID) {
        this._cachedVertexBuffers === DD && this._cachedEffectForVertexBuffers === cD || (this._cachedVertexBuffers = DD, this._cachedEffectForVertexBuffers = cD, this._bindVertexBuffersAttributes(DD, cD, ID)), this._bindIndexBufferWithCache(CD)
      }
      unbindInstanceAttributes() {
        let DD;
        for (let CD = 0, cD = this._currentInstanceLocations.length; CD < cD; CD++) {
          const cD = this._currentInstanceBuffers[CD];
          DD != cD && cD.references && (DD = cD, this.bindArrayBuffer(cD));
          const ID = this._currentInstanceLocations[CD];
          this._gl.vertexAttribDivisor(ID, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(DD) {
        this._gl.deleteVertexArray(DD)
      }
      _releaseBuffer(DD) {
        return DD.references--, 0 === DD.references && (this._deleteBuffer(DD), !0)
      }
      _deleteBuffer(DD) {
        this._gl.deleteBuffer(DD.underlyingResource)
      }
      updateAndBindInstancesBuffer(DD, CD, cD) {
        if (this.bindArrayBuffer(DD), CD && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, CD), void 0 !== cD[0].index) this.bindInstancesBuffer(DD, cD, !0);
        else
          for (let ID = 0; ID < 4; ID++) {
            const CD = cD[ID];
            this._vertexAttribArraysEnabled[CD] || (this._gl.enableVertexAttribArray(CD), this._vertexAttribArraysEnabled[CD] = !0), this._vertexAttribPointer(DD, CD, 4, this._gl.FLOAT, !1, 64, 16 * ID), this._gl.vertexAttribDivisor(CD, 1), this._currentInstanceLocations.push(CD), this._currentInstanceBuffers.push(DD)
          }
      }
      bindInstancesBuffer(DD, CD) {
        let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(DD);
        let ID = 0;
        if (cD)
          for (let pD = 0; pD < CD.length; pD++) {
            ID += 4 * CD[pD].attributeSize
          }
        for (let pD = 0; pD < CD.length; pD++) {
          const cD = CD[pD];
          void 0 === cD.index && (cD.index = this._currentEffect.getAttributeLocationByName(cD.attributeName)), cD.index < 0 || (this._vertexAttribArraysEnabled[cD.index] || (this._gl.enableVertexAttribArray(cD.index), this._vertexAttribArraysEnabled[cD.index] = !0), this._vertexAttribPointer(DD, cD.index, cD.attributeSize, cD.attributeType || this._gl.FLOAT, cD.normalized || !1, ID, cD.offset), this._gl.vertexAttribDivisor(cD.index, void 0 === cD.divisor ? 1 : cD.divisor), this._currentInstanceLocations.push(cD.index), this._currentInstanceBuffers.push(DD))
        }
      }
      disableInstanceAttributeByName(DD) {
        if (!this._currentEffect) return;
        const CD = this._currentEffect.getAttributeLocationByName(DD);
        this.disableInstanceAttribute(CD)
      }
      disableInstanceAttribute(DD) {
        let CD, cD = !1;
        for (; - 1 !== (CD = this._currentInstanceLocations.indexOf(DD));) this._currentInstanceLocations.splice(CD, 1), this._currentInstanceBuffers.splice(CD, 1), cD = !0;
        cD && (this._gl.vertexAttribDivisor(DD, 0), this.disableAttributeByIndex(DD))
      }
      disableAttributeByIndex(DD) {
        this._gl.disableVertexAttribArray(DD), this._vertexAttribArraysEnabled[DD] = !1, this._currentBufferPointers[DD].active = !1
      }
      draw(DD, CD, cD, ID) {
        this.drawElementsType(DD ? 0 : 1, CD, cD, ID)
      }
      drawPointClouds(DD, CD, cD) {
        this.drawArraysType(2, DD, CD, cD)
      }
      drawUnIndexed(DD, CD, cD, ID) {
        this.drawArraysType(DD ? 0 : 1, CD, cD, ID)
      }
      drawElementsType(DD, CD, cD, ID) {
        this.applyStates(), this._reportDrawCall();
        const pD = this._drawMode(DD),
          iD = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          fD = this._uintIndicesCurrentlySet ? 4 : 2;
        ID ? this._gl.drawElementsInstanced(pD, cD, iD, CD * fD, ID) : this._gl.drawElements(pD, cD, iD, CD * fD)
      }
      drawArraysType(DD, CD, cD, ID) {
        this.applyStates(), this._reportDrawCall();
        const pD = this._drawMode(DD);
        ID ? this._gl.drawArraysInstanced(pD, CD, cD, ID) : this._gl.drawArrays(pD, CD, cD)
      }
      _drawMode(DD) {
        switch (DD) {
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
      _releaseEffect(DD) {
        this._compiledEffects[DD._key] && delete this._compiledEffects[DD._key];
        const CD = DD.getPipelineContext();
        CD && this._deletePipelineContext(CD)
      }
      _deletePipelineContext(DD) {
        const CD = DD;
        CD && CD.program && (CD.program.__SPECTOR_rebuildProgram = null, (0, vD.k)(CD), this._gl && (this._currentProgram === CD.program && this._setProgram(null), this._gl.deleteProgram(CD.program)))
      }
      _getGlobalDefines(DD) {
        return (0, oD.l)(DD, this.isNDCHalfZRange, this.vcD, this.useExactSrgbConversions)
      }
      createEffect(DD, CD, cD, iD, fD, bD, QD, wD, SD) {
        let BD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          yD = arguments.length > 10 ? arguments[10] : void 0;
        const MD = "string" === typeof DD ? DD : DD.vertexToken || DD.vertexSource || DD.vertexElement || DD.vertex,
          tD = "string" === typeof DD ? DD : DD.fragmentToken || DD.fragmentSource || DD.fragmentElement || DD.fragment,
          ZD = this._getGlobalDefines(),
          oD = void 0 !== CD.attributes;
        let vD = fD ?? CD.defines ?? "";
        ZD && (vD += ZD);
        const ND = MD + "+" + tD + "@" + vD;
        if (this._compiledEffects[ND]) {
          const DD = this._compiledEffects[ND];
          return QD && DD.isReady() && QD(DD), DD._refCount++, DD
        }
        this._gl && (0, pD.A)(this._gl);
        const gD = new ID.b(DD, CD, oD ? this : cD, iD, this, fD, bD, QD, wD, SD, ND, CD.shaderLanguage ?? BD, CD.extraInitializationsAsync ?? yD);
        return this._compiledEffects[ND] = gD, gD
      }
      _getShaderSource(DD) {
        return this._gl.getShaderSource(DD)
      }
      createRawShaderProgram(DD, CD, cD, ID) {
        let iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const fD = (0, pD.A)(this._gl);
        return fD._contextWasLost = this._contextWasLost, fD.validateShaderPrograms = this.validateShaderPrograms, (0, pD.s)(DD, CD, cD, ID || this._gl, iD)
      }
      createShaderProgram(DD, CD, cD, ID, iD) {
        let fD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const bD = (0, pD.A)(this._gl);
        return bD._contextWasLost = this._contextWasLost, bD.validateShaderPrograms = this.validateShaderPrograms, (0, pD.w)(DD, CD, cD, ID, iD || this._gl, fD)
      }
      inlineShaderCode(DD) {
        return DD
      }
      createPipelineContext(DD) {
        if (this._gl) {
          (0, pD.A)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const CD = (0, pD.r)(this._gl, DD);
        return CD.engine = this, CD
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(DD) {
        return (0, pD.g)(DD, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(DD, CD, cD, ID, iD, fD, bD, QD, wD, SD, BD) {
        const yD = (0, pD.A)(this._gl);
        return yD._contextWasLost = this._contextWasLost, yD.validateShaderPrograms = this.validateShaderPrograms, yD._createShaderProgramInjection = this._createShaderProgram.bind(this), yD.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), yD.createShaderProgramInjection = this.createShaderProgram.bind(this), yD.loadFileInjection = this._loadFile.bind(this), (0, pD.o)(DD, CD, cD, ID, iD, fD, bD, QD, wD, SD, BD)
      }
      _createShaderProgram(DD, CD, cD, ID) {
        let iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, pD.d)(DD, CD, cD, ID, iD)
      }
      _isRenderingStateCompiled(DD) {
        return !this._isDisposed && (0, pD.k)(DD, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(DD, CD) {
        (0, pD.f)(DD, CD)
      }
      getUniforms(DD, CD) {
        const cD = new Array,
          ID = DD;
        for (let pD = 0; pD < CD.length; pD++) cD.push(this._gl.getUniformLocation(ID.program, CD[pD]));
        return cD
      }
      getAttributes(DD, CD) {
        const cD = [],
          ID = DD;
        for (let iD = 0; iD < CD.length; iD++) try {
          cD.push(this._gl.getAttribLocation(ID.program, CD[iD]))
        } catch (pD) {
          cD.push(-1)
        }
        return cD
      }
      enableEffect(DD) {
        (DD = null !== DD && (0, fD.e)(DD) ? DD.effect : DD) && DD !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(DD), this._currentEffect = DD, DD.onBind && DD.onBind(DD), DD._onBindObservable && DD._onBindObservable.notifyObservers(DD))
      }
      setInt(DD, CD) {
        return !!DD && (this._gl.uniform1i(DD, CD), !0)
      }
      setInt2(DD, CD, cD) {
        return !!DD && (this._gl.uniform2i(DD, CD, cD), !0)
      }
      setInt3(DD, CD, cD, ID) {
        return !!DD && (this._gl.uniform3i(DD, CD, cD, ID), !0)
      }
      setInt4(DD, CD, cD, ID, pD) {
        return !!DD && (this._gl.uniform4i(DD, CD, cD, ID, pD), !0)
      }
      setIntArray(DD, CD) {
        return !!DD && (this._gl.uniform1iv(DD, CD), !0)
      }
      setIntArray2(DD, CD) {
        return !(!DD || CD.length % 2 !== 0) && (this._gl.uniform2iv(DD, CD), !0)
      }
      setIntArray3(DD, CD) {
        return !(!DD || CD.length % 3 !== 0) && (this._gl.uniform3iv(DD, CD), !0)
      }
      setIntArray4(DD, CD) {
        return !(!DD || CD.length % 4 !== 0) && (this._gl.uniform4iv(DD, CD), !0)
      }
      setUInt(DD, CD) {
        return !!DD && (this._gl.uniform1ui(DD, CD), !0)
      }
      setUInt2(DD, CD, cD) {
        return !!DD && (this._gl.uniform2ui(DD, CD, cD), !0)
      }
      setUInt3(DD, CD, cD, ID) {
        return !!DD && (this._gl.uniform3ui(DD, CD, cD, ID), !0)
      }
      setUInt4(DD, CD, cD, ID, pD) {
        return !!DD && (this._gl.uniform4ui(DD, CD, cD, ID, pD), !0)
      }
      setUIntArray(DD, CD) {
        return !!DD && (this._gl.uniform1uiv(DD, CD), !0)
      }
      setUIntArray2(DD, CD) {
        return !(!DD || CD.length % 2 !== 0) && (this._gl.uniform2uiv(DD, CD), !0)
      }
      setUIntArray3(DD, CD) {
        return !(!DD || CD.length % 3 !== 0) && (this._gl.uniform3uiv(DD, CD), !0)
      }
      setUIntArray4(DD, CD) {
        return !(!DD || CD.length % 4 !== 0) && (this._gl.uniform4uiv(DD, CD), !0)
      }
      setArray(DD, CD) {
        return !!DD && (!(CD.length < 1) && (this._gl.uniform1fv(DD, CD), !0))
      }
      setArray2(DD, CD) {
        return !(!DD || CD.length % 2 !== 0) && (this._gl.uniform2fv(DD, CD), !0)
      }
      setArray3(DD, CD) {
        return !(!DD || CD.length % 3 !== 0) && (this._gl.uniform3fv(DD, CD), !0)
      }
      setArray4(DD, CD) {
        return !(!DD || CD.length % 4 !== 0) && (this._gl.uniform4fv(DD, CD), !0)
      }
      setMatrices(DD, CD) {
        return !!DD && (this._gl.uniformMatrix4fv(DD, !1, CD), !0)
      }
      setMatrix3x3(DD, CD) {
        return !!DD && (this._gl.uniformMatrix3fv(DD, !1, CD), !0)
      }
      setMatrix2x2(DD, CD) {
        return !!DD && (this._gl.uniformMatrix2fv(DD, !1, CD), !0)
      }
      setFloat(DD, CD) {
        return !!DD && (this._gl.uniform1f(DD, CD), !0)
      }
      setFloat2(DD, CD, cD) {
        return !!DD && (this._gl.uniform2f(DD, CD, cD), !0)
      }
      setFloat3(DD, CD, cD, ID) {
        return !!DD && (this._gl.uniform3f(DD, CD, cD, ID), !0)
      }
      setFloat4(DD, CD, cD, ID, pD) {
        return !!DD && (this._gl.uniform4f(DD, CD, cD, ID, pD), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const DD = this._colorWrite;
          this._gl.colorMask(DD, DD, DD, DD)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(DD) {
        this.preventCacheWipeBetweenFrames && !DD || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), DD && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(DD, CD) {
        const cD = this._gl;
        let ID = cD.NEAREST,
          pD = cD.NEAREST,
          iD = !1;
        switch (DD) {
          case 11:
            ID = cD.LINEAR, pD = CD ? cD.LINEAR_MIPMAP_NEAREST : cD.LINEAR;
            break;
          case 3:
            ID = cD.LINEAR, iD = !0, pD = CD ? cD.LINEAR_MIPMAP_LINEAR : cD.LINEAR;
            break;
          case 8:
            iD = !0, ID = cD.NEAREST, pD = CD ? cD.NEAREST_MIPMAP_LINEAR : cD.NEAREST;
            break;
          case 4:
            ID = cD.NEAREST, pD = CD ? cD.NEAREST_MIPMAP_NEAREST : cD.NEAREST;
            break;
          case 5:
            ID = cD.NEAREST, pD = CD ? cD.LINEAR_MIPMAP_NEAREST : cD.LINEAR;
            break;
          case 6:
            iD = !0, ID = cD.NEAREST, pD = CD ? cD.LINEAR_MIPMAP_LINEAR : cD.LINEAR;
            break;
          case 7:
            ID = cD.NEAREST, pD = cD.LINEAR;
            break;
          case 1:
            ID = cD.NEAREST, pD = cD.NEAREST;
            break;
          case 9:
            ID = cD.LINEAR, pD = CD ? cD.NEAREST_MIPMAP_NEAREST : cD.NEAREST;
            break;
          case 10:
            iD = !0, ID = cD.LINEAR, pD = CD ? cD.NEAREST_MIPMAP_LINEAR : cD.NEAREST;
            break;
          case 2:
            ID = cD.LINEAR, pD = cD.LINEAR;
            break;
          case 12:
            ID = cD.LINEAR, pD = cD.NEAREST
        }
        return {
          min: pD,
          mag: ID,
          hasMipMaps: iD
        }
      }
      _createTexture() {
        const DD = this._gl.createTexture();
        if (!DD) throw new Error("Unable to create texture");
        return DD
      }
      _createHardwareTexture() {
        return new tD.e(this._createTexture(), this._gl)
      }
      _createInternalTexture(DD, CD) {
        let cD, ID, pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          iD = !1,
          fD = 0,
          QD = 3,
          wD = 5,
          SD = !1,
          BD = 1,
          yD = !1,
          MD = 0,
          tD = !1;
        void 0 !== CD && "object" === typeof CD ? (cD = !!CD.generateMipMaps, iD = !!CD.createMipMaps, fD = void 0 === CD.type ? 0 : CD.type, QD = void 0 === CD.samplingMode ? 3 : CD.samplingMode, wD = void 0 === CD.format ? 5 : CD.format, SD = void 0 !== CD.useSRGBBuffer && CD.useSRGBBuffer, BD = CD.samples ?? 1, ID = CD.label, yD = !!CD.createMSAATexture, MD = CD.comparisonFunction || 0, tD = !!CD.isCube) : cD = !!CD, SD && (SD = this._caps.supportSRGBBuffers && (this.JZ > 1 || this.isWebGPU)), (1 !== fD || this._caps.textureFloatLinearFiltering) && (2 !== fD || this._caps.textureHalfFloatLinearFiltering) || (QD = 1), 1 !== fD || this._caps.textureFloat || (fD = 0, bD.e.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const oD = (0, ND.g)(wD),
          vD = (0, ND.c)(wD),
          gD = this._gl,
          XD = new ZD.c(this, pD),
          mD = DD.width || DD,
          nD = DD.height || DD,
          OD = DD.depth || 0,
          PD = DD.layers || 0,
          HD = this._getSamplingParameters(QD, (cD || iD) && !oD),
          UD = 0 !== PD ? gD.TEXTURE_2D_ARRAY : 0 !== OD ? gD.TEXTURE_3D : tD ? gD.TEXTURE_CUBE_MAP : gD.TEXTURE_2D,
          xD = oD ? this._getInternalFormatFromDepthTextureFormat(wD, !0, vD) : this._getRGBABufferInternalSizedFormat(fD, wD, SD),
          qD = oD ? vD ? gD.DEPTH_STENCIL : gD.DEPTH_COMPONENT : this._getInternalFormat(wD),
          JD = oD ? this._getWebGLTextureTypeFromDepthTextureFormat(wD) : this._getWebGLTextureType(fD);
        if (this._bindTextureDirectly(UD, XD), 0 !== PD) XD.is2DArray = !0, gD.texImage3D(UD, 0, xD, mD, nD, PD, 0, qD, JD, null);
        else if (0 !== OD) XD.is3D = !0, gD.texImage3D(UD, 0, xD, mD, nD, OD, 0, qD, JD, null);
        else if (tD) {
          XD.isCube = !0;
          for (let DD = 0; DD < 6; DD++) gD.texImage2D(gD.TEXTURE_CUBE_MAP_POSITIVE_X + DD, 0, xD, mD, nD, 0, qD, JD, null)
        } else gD.texImage2D(UD, 0, xD, mD, nD, 0, qD, JD, null);
        if (gD.texParameteri(UD, gD.TEXTURE_MAG_FILTER, HD.mag), gD.texParameteri(UD, gD.TEXTURE_MIN_FILTER, HD.min), gD.texParameteri(UD, gD.TEXTURE_WRAP_S, gD.CLAMP_TO_EDGE), gD.texParameteri(UD, gD.TEXTURE_WRAP_T, gD.CLAMP_TO_EDGE), oD && this.JZ > 1 && (0 === MD ? (gD.texParameteri(UD, gD.TEXTURE_COMPARE_FUNC, 515), gD.texParameteri(UD, gD.TEXTURE_COMPARE_MODE, gD.NONE)) : (gD.texParameteri(UD, gD.TEXTURE_COMPARE_FUNC, MD), gD.texParameteri(UD, gD.TEXTURE_COMPARE_MODE, gD.COMPARE_REF_TO_TEXTURE))), (cD || iD) && this._gl.generateMipmap(UD), this._bindTextureDirectly(UD, null), XD._useSRGBBuffer = SD, XD.baseWidth = mD, XD.baseHeight = nD, XD.width = mD, XD.height = nD, XD.depth = PD || OD, XD.isReady = !0, XD.samples = BD, XD.generateMipMaps = cD, XD.samplingMode = QD, XD.type = fD, XD.format = wD, XD.label = ID, XD.comparisonFunction = MD, this._internalTexturesCache.push(XD), yD) {
          let DD;
          if (DD = (0, ND.g)(XD.format) ? this._setupFramebufferDepthAttachments((0, ND.c)(XD.format), 19 !== XD.format, XD.width, XD.height, BD, XD.format, !0) : this._createRenderBuffer(XD.width, XD.height, BD, -1, this._getRGBABufferInternalSizedFormat(XD.type, XD.format, XD._useSRGBBuffer), -1), !DD) throw new Error("Unable to create render buffer");
          XD._autoMSAAManagement = !0;
          let CD = XD._hardwareTexture;
          CD || (CD = XD._hardwareTexture = this._createHardwareTexture()), CD.addMSAARenderBuffer(DD)
        }
        return XD
      }
      _getUseSRGBBuffer(DD, CD) {
        return DD && this._caps.supportSRGBBuffers && (this.JZ > 1 || CD)
      }
      createTexture(DD, CD, cD, ID) {
        var pD = this;
        let iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          fD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          bD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          QD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          wD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          SD = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          BD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          yD = arguments.length > 11 ? arguments[11] : void 0,
          MD = arguments.length > 12 ? arguments[12] : void 0,
          tD = arguments.length > 13 ? arguments[13] : void 0,
          oD = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(DD, CD, cD, ID, iD, fD, bD, (function() {
          for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
          return pD._prepareWebGLTexture(...CD, SD)
        }), ((DD, CD, cD, pD, iD, fD) => {
          const bD = this._gl,
            QD = cD.width === DD && cD.height === CD;
          iD._creationFlags = tD ?? 0;
          const wD = this._getTexImageParametersForCreateTexture(iD.format, iD._useSRGBBuffer);
          if (QD) return bD.texImage2D(bD.TEXTURE_2D, 0, wD.internalFormat, wD.format, wD.type, cD), !1;
          const SD = this._caps.maxTextureSize;
          if (cD.width > SD || cD.height > SD || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = DD, this._workingCanvas.height = CD, this._workingContext.drawImage(cD, 0, 0, cD.width, cD.height, 0, 0, DD, CD), bD.texImage2D(bD.TEXTURE_2D, 0, wD.internalFormat, wD.format, wD.type, this._workingCanvas), iD.width = DD, iD.height = CD, !1);
          {
            const DD = new ZD.c(this, 2);
            this._bindTextureDirectly(bD.TEXTURE_2D, DD, !0), bD.texImage2D(bD.TEXTURE_2D, 0, wD.internalFormat, wD.format, wD.type, cD), this._rescaleTexture(DD, iD, ID, wD.format, (() => {
              this._releaseTexture(DD), this._bindTextureDirectly(bD.TEXTURE_2D, iD, !0), fD()
            }))
          }
          return !0
        }), QD, wD, SD, BD, yD, MD, oD)
      }
      _getTexImageParametersForCreateTexture(DD, CD) {
        let cD, ID;
        return 1 === this.JZ ? (cD = this._getInternalFormat(DD, CD), ID = cD) : (cD = this._getInternalFormat(DD, !1), ID = this._getRGBABufferInternalSizedFormat(0, DD, CD)), {
          internalFormat: ID,
          format: cD,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(DD, CD, cD, ID, pD) {}
      _unpackFlipY(DD) {
        this._unpackFlipYCached !== DD && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, DD ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = DD))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(DD) {
        return DD.isCube ? this._gl.TEXTURE_CUBE_MAP : DD.is3D ? this._gl.TEXTURE_3D : DD.is2DArray || DD.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ID = this._getTextureTarget(CD),
          pD = this._getSamplingParameters(DD, CD.useMipMaps || cD);
        this._setTextureParameterInteger(ID, this._gl.TEXTURE_MAG_FILTER, pD.mag, CD), this._setTextureParameterInteger(ID, this._gl.TEXTURE_MIN_FILTER, pD.min), cD && pD.hasMipMaps && (CD.generateMipMaps = !0, this._gl.generateMipmap(ID)), this._bindTextureDirectly(ID, null), CD.samplingMode = DD
      }
      updateTextureDimensions(DD, CD, cD) {}
      updateTextureWrappingMode(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const pD = this._getTextureTarget(DD);
        null !== CD && (this._setTextureParameterInteger(pD, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(CD), DD), DD._cachedWrapU = CD), null !== cD && (this._setTextureParameterInteger(pD, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(cD), DD), DD._cachedWrapV = cD), (DD.is2DArray || DD.is3D) && null !== ID && (this._setTextureParameterInteger(pD, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(ID), DD), DD._cachedWrapR = ID), this._bindTextureDirectly(pD, null)
      }
      _uploadCompressedDataToTextureDirectly(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          fD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const bD = this._gl;
        let QD = bD.TEXTURE_2D;
        if (DD.isCube && (QD = bD.TEXTURE_CUBE_MAP_POSITIVE_X + iD), DD._useSRGBBuffer) switch (CD) {
          case 37492:
          case 36196:
            this._caps.etc2 ? CD = bD.COMPRESSED_SRGB8_ETC2 : DD._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? CD = bD.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : DD._useSRGBBuffer = !1;
            break;
          case 36492:
            CD = bD.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            CD = bD.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            CD = bD.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            CD = bD.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            CD = bD.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            CD = bD.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            CD = bD.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            CD = bD.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            CD = bD.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            CD = bD.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            CD = bD.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            CD = bD.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            CD = bD.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            CD = bD.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            CD = bD.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? CD = bD.COMPRESSED_SRGB_S3TC_DXT1_EXT : DD._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? CD = bD.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : DD._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? CD = bD.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : DD._useSRGBBuffer = !1;
            break;
          default:
            DD._useSRGBBuffer = !1
        }
        if (DD.generateMipMaps) {
          const iD = DD._hardwareTexture;
          iD.memoryAllocated || (bD.texStorage2D(DD.isCube ? bD.TEXTURE_CUBE_MAP : bD.TEXTURE_2D, Math.floor(Math.log2(Math.max(cD, ID))) + 1, CD, DD.width, DD.height), iD.memoryAllocated = !0), this._gl.compressedTexSubImage2D(QD, fD, 0, 0, cD, ID, CD, pD)
        } else this._gl.compressedTexImage2D(QD, fD, CD, cD, ID, 0, pD)
      }
      _uploadDataToTextureDirectly(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pD = arguments.length > 4 ? arguments[4] : void 0,
          iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const fD = this._gl,
          bD = this._getWebGLTextureType(DD.type),
          QD = this._getInternalFormat(DD.format),
          wD = void 0 === pD ? this._getRGBABufferInternalSizedFormat(DD.type, DD.format, DD._useSRGBBuffer) : this._getInternalFormat(pD, DD._useSRGBBuffer);
        this._unpackFlipY(DD.invertY);
        let SD = fD.TEXTURE_2D;
        DD.isCube && (SD = fD.TEXTURE_CUBE_MAP_POSITIVE_X + cD);
        const BD = Math.round(Math.log(DD.width) * Math.LOG2E),
          yD = Math.round(Math.log(DD.height) * Math.LOG2E),
          MD = iD ? DD.width : Math.pow(2, Math.max(BD - ID, 0)),
          tD = iD ? DD.height : Math.pow(2, Math.max(yD - ID, 0));
        fD.texImage2D(SD, ID, wD, MD, tD, 0, QD, bD, CD)
      }
      updateTextureData(DD, CD, cD, ID, pD, iD) {
        let fD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          bD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          QD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const wD = this._gl,
          SD = this._getWebGLTextureType(DD.type),
          BD = this._getInternalFormat(DD.format);
        this._unpackFlipY(DD.invertY);
        let yD = wD.TEXTURE_2D,
          MD = wD.TEXTURE_2D;
        DD.isCube && (MD = wD.TEXTURE_CUBE_MAP_POSITIVE_X + fD, yD = wD.TEXTURE_CUBE_MAP), this._bindTextureDirectly(yD, DD, !0), wD.texSubImage2D(MD, bD, cD, ID, pD, iD, BD, SD, CD), QD && this._gl.generateMipmap(MD), this._bindTextureDirectly(yD, null)
      }
      _uploadArrayBufferViewToTexture(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const pD = this._gl,
          iD = DD.isCube ? pD.TEXTURE_CUBE_MAP : pD.TEXTURE_2D;
        this._bindTextureDirectly(iD, DD, !0), this._uploadDataToTextureDirectly(DD, CD, cD, ID), this._bindTextureDirectly(iD, null, !0)
      }
      _prepareWebGLTextureContinuation(DD, CD, cD, ID, pD) {
        const iD = this._gl;
        if (!iD) return;
        const fD = this._getSamplingParameters(pD, !cD);
        iD.texParameteri(iD.TEXTURE_2D, iD.TEXTURE_MAG_FILTER, fD.mag), iD.texParameteri(iD.TEXTURE_2D, iD.TEXTURE_MIN_FILTER, fD.min), cD || ID || iD.generateMipmap(iD.TEXTURE_2D), this._bindTextureDirectly(iD.TEXTURE_2D, null), CD && CD.removePendingData(DD), DD.onLoadedObservable.notifyObservers(DD), DD.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD) {
        const SD = this.getCaps().maxTextureSize,
          BD = Math.min(SD, this.needPOTTextures ? (0, MD.e)(ID.width, SD) : ID.width),
          yD = Math.min(SD, this.needPOTTextures ? (0, MD.e)(ID.height, SD) : ID.height),
          tD = this._gl;
        tD && (DD._hardwareTexture ? (this._bindTextureDirectly(tD.TEXTURE_2D, DD, !0), this._unpackFlipY(void 0 === pD || !!pD), DD.baseWidth = ID.width, DD.baseHeight = ID.height, DD.width = BD, DD.height = yD, DD.isReady = !0, DD.type = -1 !== DD.type ? DD.type : 0, DD.format = -1 !== DD.format ? DD.format : wD ?? (".jpg" !== CD || DD._useSRGBBuffer ? 5 : 4), bD(BD, yD, ID, CD, DD, (() => {
          this._prepareWebGLTextureContinuation(DD, cD, iD, fD, QD)
        })) || this._prepareWebGLTextureContinuation(DD, cD, iD, fD, QD)) : cD && cD.removePendingData(DD))
      }
      _getInternalFormatFromDepthTextureFormat(DD, CD, cD) {
        const ID = this._gl;
        if (!CD) return ID.STENCIL_INDEX8;
        let pD = cD ? ID.DEPTH_STENCIL : ID.DEPTH_COMPONENT;
        return this.JZ > 1 ? 15 === DD ? pD = ID.DEPTH_COMPONENT16 : 16 === DD ? pD = ID.DEPTH_COMPONENT24 : 17 === DD || 13 === DD ? pD = cD ? ID.DEPTH24_STENCIL8 : ID.DEPTH_COMPONENT24 : 14 === DD ? pD = ID.DEPTH_COMPONENT32F : 18 === DD && (pD = cD ? ID.DEPTH32F_STENCIL8 : ID.DEPTH_COMPONENT32F) : pD = ID.DEPTH_COMPONENT16, pD
      }
      _getWebGLTextureTypeFromDepthTextureFormat(DD) {
        const CD = this._gl;
        let cD = CD.UNSIGNED_INT;
        return 15 === DD ? cD = CD.UNSIGNED_SHORT : 17 === DD || 13 === DD ? cD = CD.UNSIGNED_INT_24_8 : 14 === DD ? cD = CD.FLOAT : 18 === DD ? cD = CD.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === DD && (cD = CD.UNSIGNED_BYTE), cD
      }
      _setupFramebufferDepthAttachments(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          iD = arguments.length > 5 ? arguments[5] : void 0,
          fD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const bD = this._gl;
        iD = iD ?? (DD ? 13 : 14);
        const QD = this._getInternalFormatFromDepthTextureFormat(iD, CD, DD);
        return DD && CD ? this._createRenderBuffer(cD, ID, pD, bD.DEPTH_STENCIL, QD, fD ? -1 : bD.DEPTH_STENCIL_ATTACHMENT) : CD ? this._createRenderBuffer(cD, ID, pD, QD, QD, fD ? -1 : bD.DEPTH_ATTACHMENT) : DD ? this._createRenderBuffer(cD, ID, pD, QD, QD, fD ? -1 : bD.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(DD, CD, cD, ID, pD, iD) {
        let fD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const bD = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(bD, DD, CD, cD, ID, pD, iD, fD)
      }
      _updateRenderBuffer(DD, CD, cD, ID, pD, iD, fD) {
        let bD = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const QD = this._gl;
        return QD.bindRenderbuffer(QD.RENDERBUFFER, DD), ID > 1 && QD.renderbufferStorageMultisample ? QD.renderbufferStorageMultisample(QD.RENDERBUFFER, ID, iD, CD, cD) : QD.renderbufferStorage(QD.RENDERBUFFER, pD, CD, cD), -1 !== fD && QD.framebufferRenderbuffer(QD.FRAMEBUFFER, fD, QD.RENDERBUFFER, DD), bD && QD.bindRenderbuffer(QD.RENDERBUFFER, null), DD
      }
      _releaseTexture(DD) {
        this._deleteTexture(DD._hardwareTexture), this.unbindAllTextures();
        const CD = this._internalTexturesCache.indexOf(DD); - 1 !== CD && this._internalTexturesCache.splice(CD, 1), DD._lodTextureHigh && DD._lodTextureHigh.dispose(), DD._lodTextureMid && DD._lodTextureMid.dispose(), DD._lodTextureLow && DD._lodTextureLow.dispose(), DD._irradianceTexture && DD._irradianceTexture.dispose()
      }
      _deleteTexture(DD) {
        DD?.release()
      }
      _setProgram(DD) {
        this._currentProgram !== DD && ((0, pD.p)(DD, this._gl), this._currentProgram = DD)
      }
      bindSamplers(DD) {
        const CD = DD.getPipelineContext();
        this._setProgram(CD.program);
        const cD = DD.getSamplers();
        for (let ID = 0; ID < cD.length; ID++) {
          const CD = DD.getUniform(cD[ID]);
          CD && (this._boundUniforms[ID] = CD)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          pD = !1;
        const iD = CD && CD._associatedChannel > -1;
        cD && iD && (this._activeChannel = CD._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== CD || ID) {
          if (this._activateCurrentTexture(), CD && CD.isMultiview) throw bD.e.Error(["_bindTextureDirectly called with a multiview texture!", DD, CD]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(DD, CD?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = CD, CD && (CD._associatedChannel = this._activeChannel)
        } else cD && (pD = !0, this._activateCurrentTexture());
        return iD && !cD && this._bindSamplerUniformToChannel(CD._associatedChannel, this._activeChannel), pD
      }
      _bindTexture(DD, CD, cD) {
        if (void 0 === DD) return;
        CD && (CD._associatedChannel = DD), this._activeChannel = DD;
        const ID = CD ? this._getTextureTarget(CD) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(ID, CD)
      }
      unbindAllTextures() {
        for (let DD = 0; DD < this._maxSimultaneousTextures; DD++) this._activeChannel = DD, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.JZ > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(DD, CD, cD, ID) {
        void 0 !== DD && (CD && (this._boundUniforms[DD] = CD), this._setTexture(DD, cD))
      }
      _bindSamplerUniformToChannel(DD, CD) {
        const cD = this._boundUniforms[DD];
        cD && cD._currentState !== CD && (this._gl.uniform1i(cD, CD), cD._currentState = CD)
      }
      _getTextureWrapMode(DD) {
        switch (DD) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(DD, CD) {
        let cD, ID = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!CD) return null != this._boundTexturesCache[DD] && (this._activeChannel = DD, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.JZ > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (CD.video) {
          this._activeChannel = DD;
          const cD = CD.getInternalTexture();
          cD && (cD._associatedChannel = DD), CD.update()
        } else if (4 === CD.delayLoadState) return CD.delayLoad(), !1;
        cD = pD ? CD.depthStencilTexture : CD.isReady() ? CD.getInternalTexture() : CD.isCube ? this.emptyCubeTexture : CD.is3D ? this.emptyTexture3D : CD.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !ID && cD && (cD._associatedChannel = DD);
        let iD = !0;
        this._boundTexturesCache[DD] === cD && (ID || this._bindSamplerUniformToChannel(cD._associatedChannel, DD), iD = !1), this._activeChannel = DD;
        const fD = this._getTextureTarget(cD);
        if (iD && this._bindTextureDirectly(fD, cD, ID), cD && !cD.isMultiview) {
          if (cD.isCube && cD._cachedCoordinatesMode !== CD.coordinatesMode) {
            cD._cachedCoordinatesMode = CD.coordinatesMode;
            const DD = 3 !== CD.coordinatesMode && 5 !== CD.coordinatesMode ? 1 : 0;
            CD.wrapU = DD, CD.wrapV = DD
          }
          cD._cachedWrapU !== CD.wrapU && (cD._cachedWrapU = CD.wrapU, this._setTextureParameterInteger(fD, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(CD.wrapU), cD)), cD._cachedWrapV !== CD.wrapV && (cD._cachedWrapV = CD.wrapV, this._setTextureParameterInteger(fD, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(CD.wrapV), cD)), cD.is3D && cD._cachedWrapR !== CD.wrapR && (cD._cachedWrapR = CD.wrapR, this._setTextureParameterInteger(fD, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(CD.wrapR), cD)), this._setAnisotropicLevel(fD, cD, CD.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(DD, CD, cD, ID) {
        if (void 0 !== DD && CD) {
          this._textureUnits && this._textureUnits.length === cD.length || (this._textureUnits = new Int32Array(cD.length));
          for (let CD = 0; CD < cD.length; CD++) {
            const ID = cD[CD].getInternalTexture();
            ID ? (this._textureUnits[CD] = DD + CD, ID._associatedChannel = DD + CD) : this._textureUnits[CD] = -1
          }
          this._gl.uniform1iv(CD, this._textureUnits);
          for (let DD = 0; DD < cD.length; DD++) this._setTexture(this._textureUnits[DD], cD[DD], !0)
        }
      }
      _setAnisotropicLevel(DD, CD, cD) {
        const ID = this._caps.textureAnisotropicFilterExtension;
        11 !== CD.samplingMode && 3 !== CD.samplingMode && 2 !== CD.samplingMode && (cD = 1), ID && CD._cachedAnisotropicFilteringLevel !== cD && (this._setTextureParameterFloat(DD, ID.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(cD, this._caps.maxAnisotropy), CD), CD._cachedAnisotropicFilteringLevel = cD)
      }
      _setTextureParameterFloat(DD, CD, cD, ID) {
        this._bindTextureDirectly(DD, ID, !0, !0), this._gl.texParameterf(DD, CD, cD)
      }
      _setTextureParameterInteger(DD, CD, cD, ID) {
        ID && this._bindTextureDirectly(DD, ID, !0, !0), this._gl.texParameteri(DD, CD, cD)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let DD = 0; DD < this._caps.maxVertexAttribs; DD++) this.disableAttributeByIndex(DD)
        } else
          for (let DD = 0, CD = this._vertexAttribArraysEnabled.length; DD < CD; DD++) DD >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[DD] || this.disableAttributeByIndex(DD)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, QD.m)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, pD.x)(this._gl)
      }
      attachContextLostEvent(DD) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", DD, !1)
      }
      attachContextRestoredEvent(DD) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", DD, !1)
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
      _canRenderToFramebuffer(DD) {
        const CD = this._gl;
        for (; CD.getError() !== CD.NO_ERROR;);
        let cD = !0;
        const ID = CD.createTexture();
        CD.bindTexture(CD.TEXTURE_2D, ID), CD.texImage2D(CD.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(DD), 1, 1, 0, CD.RGBA, this._getWebGLTextureType(DD), null), CD.texParameteri(CD.TEXTURE_2D, CD.TEXTURE_MIN_FILTER, CD.NEAREST), CD.texParameteri(CD.TEXTURE_2D, CD.TEXTURE_MAG_FILTER, CD.NEAREST);
        const pD = CD.createFramebuffer();
        CD.bindFramebuffer(CD.FRAMEBUFFER, pD), CD.framebufferTexture2D(CD.FRAMEBUFFER, CD.COLOR_ATTACHMENT0, CD.TEXTURE_2D, ID, 0);
        const iD = CD.checkFramebufferStatus(CD.FRAMEBUFFER);
        if (cD = cD && iD === CD.FRAMEBUFFER_COMPLETE, cD = cD && CD.getError() === CD.NO_ERROR, cD && (CD.clear(CD.COLOR_BUFFER_BIT), cD = cD && CD.getError() === CD.NO_ERROR), cD) {
          CD.bindFramebuffer(CD.FRAMEBUFFER, null);
          const DD = CD.RGBA,
            ID = CD.UNSIGNED_BYTE,
            pD = new Uint8Array(4);
          CD.readPixels(0, 0, 1, 1, DD, ID, pD), cD = cD && CD.getError() === CD.NO_ERROR
        }
        for (CD.deleteTexture(ID), CD.deleteFramebuffer(pD), CD.bindFramebuffer(CD.FRAMEBUFFER, null); !cD && CD.getError() !== CD.NO_ERROR;);
        return cD
      }
      _getWebGLTextureType(DD) {
        if (1 === this._webGLVersion) {
          switch (DD) {
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
        switch (DD) {
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
      _getInternalFormat(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = CD ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (DD) {
          case 0:
            cD = this._gl.ALPHA;
            break;
          case 1:
            cD = this._gl.LUMINANCE;
            break;
          case 2:
            cD = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            cD = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            cD = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            cD = CD ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            cD = CD ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (DD) {
          case 8:
            cD = this._gl.RED_INTEGER;
            break;
          case 9:
            cD = this._gl.RG_INTEGER;
            break;
          case 10:
            cD = this._gl.RGB_INTEGER;
            break;
          case 11:
            cD = this._gl.RGBA_INTEGER
        }
        return cD
      }
      _getRGBABufferInternalSizedFormat(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== CD) switch (CD) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return cD ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (DD) {
          case 3:
            switch (CD) {
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
            switch (CD) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return cD ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return cD ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (CD) {
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
            switch (CD) {
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
            switch (CD) {
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
            switch (CD) {
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
            switch (CD) {
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
            switch (CD) {
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
            switch (CD) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return cD ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(DD, CD, cD, ID) {
        let pD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          iD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          fD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const QD = pD ? 4 : 3,
          wD = pD ? this._gl.RGBA : this._gl.RGB,
          SD = cD * ID * QD;
        if (fD) {
          if (fD.length < SD) return bD.e.Error(`Data buffer is too small to store the read pixels (${fD.length} should be more than ${SD})`), Promise.resolve(fD)
        } else fD = new Uint8Array(SD);
        return iD && this.flushFramebuffer(), this._gl.readPixels(DD, CD, cD, ID, wD, this._gl.UNSIGNED_BYTE, fD), Promise.resolve(fD)
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
          const DD = iD.e._CreateCanvas(1, 1),
            CD = DD.getContext("webgl") || DD.getContext("experimental-webgl");
          this._IsSupported = null != CD && !!globalThis.WebGLRenderingContext
        } catch (DD) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const DD = iD.e._CreateCanvas(1, 1),
            CD = DD.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || DD.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !CD
        } catch (DD) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    mD._TempClearColorUint32 = new Uint32Array(4), mD._TempClearColorInt32 = new Int32Array(4), mD._TempClearColorFloat32 = new Float32Array(4), mD.ExceptionList = [{
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
    }], mD._ConcatenateShader = oD.h, mD._IsSupported = null, mD._HasMajorPerformanceCaveat = null
  },
  39334: (DD, CD, cD) => {
    var ID;
    cD.d(CD, {
        c: () => pD
      }),
      function(DD) {
        DD[DD.PointerMove = 0] = "PointerMove", DD[DD.PointerDown = 1] = "PointerDown", DD[DD.PointerUp = 2] = "PointerUp"
      }(ID || (ID = {}));
    class pD {}
    pD.DOM_DELTA_PIXEL = 0, pD.DOM_DELTA_LINE = 1, pD.DOM_DELTA_PAGE = 2
  },
  39328: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID,
      d: () => iD,
      e: () => pD
    });
    class ID {}
    ID.KEYDOWN = 1, ID.KEYUP = 2;
    class pD {
      constructor(DD, CD) {
        this.type = DD, this.event = CD
      }
    }
    class iD extends pD {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(DD) {
        this.skipOnKeyboardObservable = DD
      }
      constructor(DD, CD) {
        super(DD, CD), this.type = DD, this.event = CD, this.skipOnKeyboardObservable = !1
      }
    }
  },
  39319: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD,
      d: () => fD,
      e: () => bD
    });
    var ID = cD(36446);
    class pD {}
    pD.POINTERDOWN = 1, pD.POINTERUP = 2, pD.POINTERMOVE = 4, pD.POINTERWHEEL = 8, pD.POINTERPICK = 16, pD.POINTERTAP = 32, pD.POINTERDOUBLETAP = 64;
    class iD {
      constructor(DD, CD) {
        this.type = DD, this.event = CD
      }
    }
    class fD extends iD {
      constructor(DD, CD, cD, pD) {
        super(DD, CD), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new ID.n(cD, pD)
      }
    }
    class bD extends iD {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(DD, CD), this._pickInfo = cD, this._inputManager = ID
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  39344: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID
    });
    class ID {
      static CompareLightsPriority(DD, CD) {
        return DD.shadowEnabled !== CD.shadowEnabled ? (CD.shadowEnabled ? 1 : 0) - (DD.shadowEnabled ? 1 : 0) : CD.renderPriority - DD.renderPriority
      }
    }
    ID.FALLOFF_DEFAULT = 0, ID.FALLOFF_PHYSICAL = 1, ID.FALLOFF_GLTF = 2, ID.FALLOFF_STANDARD = 3, ID.LIGHTMAP_DEFAULT = 0, ID.LIGHTMAP_SPECULAR = 1, ID.LIGHTMAP_SHADOWSONLY = 2, ID.INTENSITYMODE_AUTOMATIC = 0, ID.INTENSITYMODE_LUMINOUSPOWER = 1, ID.INTENSITYMODE_LUMINOUSINTENSITY = 2, ID.INTENSITYMODE_ILLUMINANCE = 3, ID.INTENSITYMODE_LUMINANCE = 4, ID.LIGHTTYPEID_POINTLIGHT = 0, ID.LIGHTTYPEID_DIRECTIONALLIGHT = 1, ID.LIGHTTYPEID_SPOTLIGHT = 2, ID.LIGHTTYPEID_HEMISPHERICLIGHT = 3, ID.LIGHTTYPEID_RECT_AREALIGHT = 4, ID.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  38979: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD
    });
    var ID, pD = cD(36473),
      iD = cD(38982);
    ! function(DD) {
      DD[DD.Unknown = 0] = "Unknown", DD[DD.Url = 1] = "Url", DD[DD.Temp = 2] = "Temp", DD[DD.Raw = 3] = "Raw", DD[DD.Dynamic = 4] = "Dynamic", DD[DD.RenderTarget = 5] = "RenderTarget", DD[DD.MultiRenderTarget = 6] = "MultiRenderTarget", DD[DD.Cube = 7] = "Cube", DD[DD.CubeRaw = 8] = "CubeRaw", DD[DD.CubePrefiltered = 9] = "CubePrefiltered", DD[DD.Raw3D = 10] = "Raw3D", DD[DD.Raw2DArray = 11] = "Raw2DArray", DD[DD.DepthStencil = 12] = "DepthStencil", DD[DD.CubeRawRGBD = 13] = "CubeRawRGBD", DD[DD.Depth = 14] = "Depth", DD[DD.External = 15] = "External"
    }(ID || (ID = {}));
    class fD extends iD.b {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(DD) {
        this._useMipMaps = DD
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(DD) {
        this._uniqueId = DD
      }
      DZ() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new pD.c, this.onErrorObservable = new pD.c, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = DD, this._source = CD, this._uniqueId = fD._Counter++, cD || (this._hardwareTexture = DD._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, DD, CD, cD), this.width = DD, this.height = CD, this.depth = cD, this.baseWidth = DD, this.baseHeight = CD, this.baseDepth = cD, this._size = DD * CD * cD
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const DD = this.onRebuildCallback(this),
            CD = CD => {
              CD._swapAndDie(this, !1), this.isReady = DD.isReady
            };
          return void(DD.isAsync ? DD.proxy.then(CD) : CD(DD.proxy))
        }
        let DD;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(DD = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (DD => {
              DD._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (DD = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), DD._swapAndDie(this, !1), this._bufferViewArray)
              for (let DD = 0; DD < this._bufferViewArray.length; DD++) {
                const CD = this._bufferViewArray[DD];
                CD && this._engine.updateRawTexture(this, CD, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, DD)
              }
            this.isReady = !0;
            break;
          case 10:
            DD = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), DD._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (DD = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), DD._swapAndDie(this, !1), this._bufferViewArray)
              for (let DD = 0; DD < this._bufferViewArray.length; DD++) {
                const CD = this._bufferViewArray[DD];
                CD && this._engine.updateRawTexture2DArray(this, CD, this.format, this.invertY, this._compression, this.type, DD)
              }
            this.isReady = !0;
            break;
          case 4:
            DD = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), DD._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(DD = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              DD._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            DD = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), DD._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return DD = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (DD => {
              DD && DD._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(DD._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(DD._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), DD._hardwareTexture = this._hardwareTexture, DD._setUniqueId(fD._Counter++), CD && (DD._isRGBD = this._isRGBD), this._lodTextureHigh && (DD._lodTextureHigh && DD._lodTextureHigh.dispose(), DD._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (DD._lodTextureMid && DD._lodTextureMid.dispose(), DD._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (DD._lodTextureLow && DD._lodTextureLow.dispose(), DD._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (DD._irradianceTexture && DD._irradianceTexture.dispose(), DD._irradianceTexture = this._irradianceTexture);
        const cD = this._engine.getLoadedTexturesCache();
        let ID = cD.indexOf(this); - 1 !== ID && cD.splice(ID, 1), ID = cD.indexOf(DD), -1 === ID && cD.push(DD)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    fD._Counter = 0
  },
  39097: (DD, CD, cD) => {
    function ID(DD) {
      return 13 === DD || 14 === DD || 15 === DD || 16 === DD || 17 === DD || 18 === DD || 19 === DD
    }

    function pD(DD) {
      return 8 === DD || 9 === DD || 10 === DD || 11 === DD
    }

    function iD(DD) {
      return 0 === DD || 5 === DD || 7 === DD || 11 === DD
    }

    function fD(DD) {
      return 13 === DD || 17 === DD || 18 === DD || 19 === DD
    }
    cD.d(CD, {
      c: () => fD,
      g: () => ID,
      i: () => pD,
      k: () => iD
    })
  },
  38982: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => ID
    });
    class ID {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(DD) {
        this._cachedWrapU = DD
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(DD) {
        this._cachedWrapV = DD
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(DD) {
        this._cachedWrapR = DD
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(DD) {
        this._cachedAnisotropicFilteringLevel = DD
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(DD) {
        this._comparisonFunction = DD
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(DD) {
        this._useMipMaps = DD
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = DD, this._cachedWrapV = CD, this._cachedWrapR = cD, this._cachedAnisotropicFilteringLevel = ID, this.samplingMode = pD, this._comparisonFunction = iD, this
      }
      compareSampler(DD) {
        return this._cachedWrapU === DD._cachedWrapU && this._cachedWrapV === DD._cachedWrapV && this._cachedWrapR === DD._cachedWrapR && this._cachedAnisotropicFilteringLevel === DD._cachedAnisotropicFilteringLevel && this.samplingMode === DD.samplingMode && this._comparisonFunction === DD._comparisonFunction && this._useMipMaps === DD._useMipMaps
      }
    }
  },
  39265: (DD, CD, cD) => {
    function ID(DD) {
      DD.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    cD.d(CD, {
      e: () => ID
    })
  },
  39062: (DD, CD, cD) => {
    function ID(DD) {
      return void 0 === DD.getPipelineContext
    }
    cD.d(CD, {
      e: () => ID
    })
  },
  39456: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    var ID = cD(39039);
    class pD {
      static GetEffect(DD) {
        return void 0 === DD.getPipelineContext ? DD.effect : DD
      }
      constructor(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = DD.createDrawContext(), CD && (this.materialContext = DD.createMaterialContext())
      }
      setEffect(DD, CD) {
        let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        cD || this.effect === DD || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = DD, void 0 !== CD && (this.defines = CD), cD && this.drawContext?.reset()
      }
      dispose() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const CD = this.effect;
          DD ? CD.dispose() : ID.d.SetImmediate((() => {
            CD.DZ().onEndFrameObservable.addOnce((() => {
              CD.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  39008: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => BD,
      d: () => MD,
      h: () => wD,
      k: () => SD
    });
    var ID = cD(39010),
      pD = cD(39014),
      iD = cD(39003),
      fD = cD(38048),
      bD = cD(39035),
      QD = cD(39023);

    function wD(DD, CD) {
      return (0, pD.A)(CD).cachedPipelines[DD]
    }

    function SD(DD) {
      const CD = DD._name,
        cD = DD.context;
      if (CD && cD) {
        const DD = (0, pD.A)(cD),
          ID = DD.cachedPipelines[CD];
        ID?.dispose(), delete DD.cachedPipelines[CD]
      }
    }

    function BD(DD, CD, cD, pD, iD, fD, QD) {
      let wD, SD;
      const BD = (0, ID.m)() ? fD?.getHostDocument() : null;
      wD = "string" === typeof CD ? CD : "string" === typeof CD.vertexSource ? "source:" + CD.vertexSource : "string" === typeof CD.vertexElement ? BD?.getElementById(CD.vertexElement) || CD.vertexElement : CD.vertex || CD, SD = "string" === typeof CD ? CD : "string" === typeof CD.fragmentSource ? "source:" + CD.fragmentSource : "string" === typeof CD.fragmentElement ? BD?.getElementById(CD.fragmentElement) || CD.fragmentElement : CD.fragment || CD;
      const MD = [void 0, void 0],
        tD = () => {
          if (MD[0] && MD[1]) {
            const [ID, wD] = MD;
            (0, bD.c)(DD), (0, bD.k)(ID, DD, ((ID, SD) => {
              QD && (QD._vertexSourceCodeBeforeMigration = SD), cD && (ID = cD("vertex", ID)), DD.isFragment = !0, (0, bD.k)(wD, DD, ((fD, wD) => {
                QD && (QD._fragmentSourceCodeBeforeMigration = wD), cD && (fD = cD("fragment", fD));
                const SD = (0, bD.b)(ID, fD, DD);
                DD = null;
                const BD = function(DD, CD, cD, ID) {
                  if (cD) {
                    return {
                      vertexSourceCode: (1 === ID ? "//" : "") + "#define SHADER_NAME vertex:" + (cD.vertexElement || cD.vertex || cD.spectorName || cD) + "\n" + DD,
                      fragmentSourceCode: (1 === ID ? "//" : "") + "#define SHADER_NAME fragment:" + (cD.fragmentElement || cD.fragment || cD.spectorName || cD) + "\n" + CD
                    }
                  }
                  return {
                    vertexSourceCode: DD,
                    fragmentSourceCode: CD
                  }
                }(SD.vertexCode, SD.fragmentCode, CD, iD);
                pD?.(BD.vertexSourceCode, BD.fragmentSourceCode)
              }), fD)
            }), fD)
          }
        };
      yD(wD, "Vertex", "", (DD => {
        QD && (QD._rawVertexSourceCode = DD), MD[0] = DD, tD()
      }), iD), yD(SD, "Fragment", "Pixel", (DD => {
        QD && (QD._rawFragmentSourceCode = DD), MD[1] = DD, tD()
      }), iD)
    }

    function yD(DD, CD, cD, pD, fD, bD) {
      if ("undefined" !== typeof HTMLElement && DD instanceof HTMLElement) {
        return void pD((0, ID.c)(DD))
      }
      if ("source:" === DD.substring(0, 7)) return void pD(DD.substring(7));
      if ("base64:" === DD.substring(0, 7)) {
        return void pD(window.atob(DD.substring(7)))
      }
      const wD = iD.e.GetShadersStore(fD);
      if (wD[DD + CD + "Shader"]) return void pD(wD[DD + CD + "Shader"]);
      if (cD && wD[DD + cD + "Shader"]) return void pD(wD[DD + cD + "Shader"]);
      let SD;
      if (SD = "." === DD[0] || "/" === DD[0] || DD.indexOf("http") > -1 ? DD : iD.e.GetShadersRepository(fD) + DD, !(bD = bD || QD.n)) throw new Error("loadFileInjection is not defined");
      bD(SD + "." + CD.toLowerCase() + ".fx", pD)
    }
    const MD = (DD, CD, cD, ID) => {
      try {
        const iD = DD.context ? (0, pD.A)(DD.context) : null;
        iD && (iD.disableParallelShaderCompile = DD.disableParallelCompilation);
        const fD = DD.existingPipelineContext || CD(DD.shaderProcessingContext);
        return fD._name = DD.name, DD.name && iD && (iD.cachedPipelines[DD.name] = fD), cD(fD, DD.vertex, DD.fragment, !!DD.createAsRaw, "", "", DD.rebuildRebind, DD.defines, DD.transformFeedbackVaryings, "", (() => {
          ID(fD, (() => {
            DD.onRenderingStateCompiled?.(fD)
          }))
        })), fD
      } catch (iD) {
        throw fD.e.Error("Error compiling effect"), iD
      }
    }
  },
  38996: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => QD
    });
    var ID = cD(36473),
      pD = cD(38048),
      iD = cD(39003),
      fD = cD(39008),
      bD = cD(39039);
    class QD {
      static get ShadersRepository() {
        return iD.e.ShadersRepository
      }
      static set ShadersRepository(DD) {
        iD.e.ShadersRepository = DD
      }
      get jCD() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new ID.c), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(DD, CD, cD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          iD = arguments.length > 4 ? arguments[4] : void 0,
          bD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          wD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          SD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          BD = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          yD = arguments.length > 9 ? arguments[9] : void 0,
          MD = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          tD = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          ZD = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new ID.c, this.onErrorObservable = new ID.c, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = DD, this._key = MD;
        const oD = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let vD;
        if (CD.attributes) {
          const DD = CD;
          if (this._engine = cD, this._attributesNames = DD.attributes, this._uniformsNames = DD.uniformsNames.concat(DD.samplers), this._samplerList = DD.samplers.slice(), this.defines = DD.defines, this.onError = DD.onError, this.onCompiled = DD.onCompiled, this._fallbacks = DD.fallbacks, this._indexParameters = DD.indexParameters, this._transformFeedbackVaryings = DD.transformFeedbackVaryings || null, this._multiTarget = !!DD.multiTarget, this._shaderLanguage = DD.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!DD.disableParallelShaderCompilation, DD.uniformBuffersNames) {
            this._uniformBuffersNamesList = DD.uniformBuffersNames.slice();
            for (let CD = 0; CD < DD.uniformBuffersNames.length; CD++) this._uniformBuffersNames[DD.uniformBuffersNames[CD]] = CD
          }
          this._processFinalCode = DD.processFinalCode ?? null, this._processCodeAfterIncludes = DD.processCodeAfterIncludes ?? void 0, ZD = DD.extraInitializationsAsync, vD = DD.existingPipelineContext
        } else this._engine = iD, this.defines = null == bD ? "" : bD, this._uniformsNames = cD.concat(pD), this._samplerList = pD ? pD.slice() : [], this._attributesNames = CD, this._uniformBuffersNamesList = [], this._shaderLanguage = tD, this.onError = BD, this.onCompiled = SD, this._indexParameters = yD, this._fallbacks = wD;
        "WEBGL2" === this._engine.shaderPlatformName && (vD = (0, fD.h)(oD, this._engine._gl) ?? vD), this._attributeLocationByName = {}, this.uniqueId = QD._UniqueIdSeed++, vD ? (this._pipelineContext = vD, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, ZD).catch((DD => {
          const CD = DD?.message ?? String(DD),
            cD = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${CD}`);
          DD && "string" === typeof DD.stack && (cD.stack = `${cD.message}\nCaused by: ${DD.stack}`), this._processCompilationErrors(cD)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.jCD || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ID = arguments.length > 3 ? arguments[3] : void 0;
        ID && await ID(), this._processingContext = cD || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const pD = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: DD ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: iD.e.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: iD.e.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          vcD: this._engine.vcD,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, fD.b)(pD, this.name, this._processFinalCode, ((DD, cD) => {
          this._vertexSourceCode = DD, this._fragmentSourceCode = cD, this._prepareEffect(CD)
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
        return !!this._engine.jCD || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      DZ() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(DD) {
        return this._attributes[DD]
      }
      getAttributeLocationByName(DD) {
        return this._attributeLocationByName[DD]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(DD) {
        return this._uniformsNames.indexOf(DD)
      }
      getUniform(DD) {
        return this._uniforms[DD]
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
        return await new Promise((DD => {
          this.executeWhenCompiled(DD)
        }))
      }
      executeWhenCompiled(DD) {
        this.isReady() ? DD(this) : (this.onCompileObservable.add((CD => {
          DD(CD)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(DD) {
        (0, bD.e)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (CD => {
          this._processCompilationErrors(CD, DD)
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
            vcD: this._engine.vcD,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(DD, CD, cD, ID) {
        this._isReady = !1, this._vertexSourceCodeOverride = DD, this._fragmentSourceCodeOverride = CD, this.onError = (DD, CD) => {
          ID && ID(CD)
        }, this.onCompiled = () => {
          const DD = this.DZ().scenes;
          if (DD)
            for (let CD = 0; CD < DD.length; CD++) DD[CD].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(cD)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(DD) {
        if (this._pipelineContext = DD, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let CD = 0; CD < this._attributesNames.length; CD++) {
            const DD = this._attributesNames[CD];
            this._attributeLocationByName[DD] = this._attributes[CD]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), QD.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const CD = this._pipelineContext;
        this._isReady = !1;
        try {
          const cD = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            ID = cD ? null : this.defines,
            pD = cD ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            iD = cD ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            bD = this._engine;
          this._pipelineContext = (0, fD.d)({
            existingPipelineContext: DD ? CD : null,
            vertex: pD,
            fragment: iD,
            context: "WEBGL2" === bD.shaderPlatformName || "WEBGL1" === bD.shaderPlatformName ? bD._gl : void 0,
            rebuildRebind: (DD, CD, cD, ID) => this._rebuildProgram(DD, CD, cD, ID),
            defines: ID,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: cD,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: cD => {
              CD && !DD && this._engine._deletePipelineContext(CD), cD && this._onRenderingStateCompiled(cD)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(CD)
        } catch (cD) {
          this._processCompilationErrors(cD, CD)
        }
      }
      _getShaderCodeAndErrorLine(DD, CD, cD) {
        const ID = cD ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let pD = null;
        if (CD && DD) {
          const iD = CD.match(ID);
          if (iD && 2 === iD.length) {
            const CD = parseInt(iD[1]),
              ID = DD.split("\n", -1);
            ID.length >= CD && (pD = `Offending line [${CD}] in ${cD?"fragment":"vertex"} code: ${ID[CD-1]}`)
          }
        }
        return [DD, pD]
      }
      _processCompilationErrors(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof DD?.stack ? DD.stack : DD?.message ?? String(DD);
        const cD = this._attributesNames,
          ID = this._fallbacks;
        if (pD.e.Error("Unable to compile effect:"), pD.e.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), pD.e.Error(`Attributes: ${cD.join(" ")}`), pD.e.Error("Defines:\n" + this.defines), QD.LogShaderCodeOnCompilationError) {
          let DD, CD = null,
            cD = null;
          this._pipelineContext?._getVertexShaderCode() && ([DD, CD] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), DD && (pD.e.Error("Vertex code:"), pD.e.Error(DD))), this._pipelineContext?._getFragmentShaderCode() && ([DD, cD] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), DD && (pD.e.Error("Fragment code:"), pD.e.Error(DD))), CD && pD.e.Error(CD), cD && pD.e.Error(cD)
        }
        pD.e.Error("Error: " + this._compilationError);
        const iD = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        CD && (this._pipelineContext = CD, this._isReady = !0, iD()), ID ? (this._pipelineContext = null, ID.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, pD.e.Error("Trying next fallback."), this.defines = ID.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, iD(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, CD || iD())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(DD, CD) {
        this._engine._bindTexture(this._samplers[DD], CD, DD)
      }
      setTexture(DD, CD) {
        this._engine.setTexture(this._samplers[DD], this._uniforms[DD], CD, DD)
      }
      setTextureArray(DD, CD) {
        const cD = DD + "Ex";
        if (-1 === this._samplerList.indexOf(cD + "0")) {
          const ID = this._samplerList.indexOf(DD);
          for (let DD = 1; DD < CD.length; DD++) {
            const CD = cD + (DD - 1).toString();
            this._samplerList.splice(ID + DD, 0, CD)
          }
          let pD = 0;
          for (const DD of this._samplerList) this._samplers[DD] = pD, pD += 1
        }
        this._engine.setTextureArray(this._samplers[DD], this._uniforms[DD], CD, DD)
      }
      bindUniformBuffer(DD, CD) {
        const cD = this._uniformBuffersNames[CD];
        void 0 === cD || QD._BaseCache[cD] === DD && this._engine._features.useUBOBindingCache || (QD._BaseCache[cD] = DD, this._engine.bindUniformBufferBase(DD, cD, CD))
      }
      bindUniformBlock(DD, CD) {
        this._engine.bindUniformBlock(this._pipelineContext, DD, CD)
      }
      setInt(DD, CD) {
        return this._pipelineContext.setInt(DD, CD), this
      }
      setInt2(DD, CD, cD) {
        return this._pipelineContext.setInt2(DD, CD, cD), this
      }
      setInt3(DD, CD, cD, ID) {
        return this._pipelineContext.setInt3(DD, CD, cD, ID), this
      }
      setInt4(DD, CD, cD, ID, pD) {
        return this._pipelineContext.setInt4(DD, CD, cD, ID, pD), this
      }
      setIntArray(DD, CD) {
        return this._pipelineContext.setIntArray(DD, CD), this
      }
      setIntArray2(DD, CD) {
        return this._pipelineContext.setIntArray2(DD, CD), this
      }
      setIntArray3(DD, CD) {
        return this._pipelineContext.setIntArray3(DD, CD), this
      }
      setIntArray4(DD, CD) {
        return this._pipelineContext.setIntArray4(DD, CD), this
      }
      setUInt(DD, CD) {
        return this._pipelineContext.setUInt(DD, CD), this
      }
      setUInt2(DD, CD, cD) {
        return this._pipelineContext.setUInt2(DD, CD, cD), this
      }
      setUInt3(DD, CD, cD, ID) {
        return this._pipelineContext.setUInt3(DD, CD, cD, ID), this
      }
      setUInt4(DD, CD, cD, ID, pD) {
        return this._pipelineContext.setUInt4(DD, CD, cD, ID, pD), this
      }
      setUIntArray(DD, CD) {
        return this._pipelineContext.setUIntArray(DD, CD), this
      }
      setUIntArray2(DD, CD) {
        return this._pipelineContext.setUIntArray2(DD, CD), this
      }
      setUIntArray3(DD, CD) {
        return this._pipelineContext.setUIntArray3(DD, CD), this
      }
      setUIntArray4(DD, CD) {
        return this._pipelineContext.setUIntArray4(DD, CD), this
      }
      setFloatArray(DD, CD) {
        return this._pipelineContext.setArray(DD, CD), this
      }
      setFloatArray2(DD, CD) {
        return this._pipelineContext.setArray2(DD, CD), this
      }
      setFloatArray3(DD, CD) {
        return this._pipelineContext.setArray3(DD, CD), this
      }
      setFloatArray4(DD, CD) {
        return this._pipelineContext.setArray4(DD, CD), this
      }
      setArray(DD, CD) {
        return this._pipelineContext.setArray(DD, CD), this
      }
      setArray2(DD, CD) {
        return this._pipelineContext.setArray2(DD, CD), this
      }
      setArray3(DD, CD) {
        return this._pipelineContext.setArray3(DD, CD), this
      }
      setArray4(DD, CD) {
        return this._pipelineContext.setArray4(DD, CD), this
      }
      setMatrices(DD, CD) {
        return this._pipelineContext.setMatrices(DD, CD), this
      }
      setMatrix(DD, CD) {
        return this._pipelineContext.setMatrix(DD, CD), this
      }
      setMatrix3x3(DD, CD) {
        return this._pipelineContext.setMatrix3x3(DD, CD), this
      }
      setMatrix2x2(DD, CD) {
        return this._pipelineContext.setMatrix2x2(DD, CD), this
      }
      setFloat(DD, CD) {
        return this._pipelineContext.setFloat(DD, CD), this
      }
      setBool(DD, CD) {
        return this._pipelineContext.setInt(DD, CD ? 1 : 0), this
      }
      setVector2(DD, CD) {
        return this._pipelineContext.setVector2(DD, CD), this
      }
      setFloat2(DD, CD, cD) {
        return this._pipelineContext.setFloat2(DD, CD, cD), this
      }
      setVector3(DD, CD) {
        return this._pipelineContext.setVector3(DD, CD), this
      }
      setFloat3(DD, CD, cD, ID) {
        return this._pipelineContext.setFloat3(DD, CD, cD, ID), this
      }
      setVector4(DD, CD) {
        return this._pipelineContext.setVector4(DD, CD), this
      }
      setQuaternion(DD, CD) {
        return this._pipelineContext.setQuaternion(DD, CD), this
      }
      setFloat4(DD, CD, cD, ID, pD) {
        return this._pipelineContext.setFloat4(DD, CD, cD, ID, pD), this
      }
      setColor3(DD, CD) {
        return this._pipelineContext.setColor3(DD, CD), this
      }
      setColor4(DD, CD, cD) {
        return this._pipelineContext.setColor4(DD, CD, cD), this
      }
      setDirectColor4(DD, CD) {
        return this._pipelineContext.setDirectColor4(DD, CD), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (QD.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, fD.k)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        CD && (iD.e.GetShadersStore(ID)[`${DD}PixelShader`] = CD), cD && (iD.e.GetShadersStore(ID)[`${DD}VertexShader`] = cD)
      }
      static ResetCache() {
        QD._BaseCache = {}
      }
    }
    QD.LogShaderCodeOnCompilationError = !0, QD.PersistentMode = !1, QD.AutomaticallyClearCodeCache = !1, QD._UniqueIdSeed = 0, QD._BaseCache = {}, QD.ShadersStore = iD.e.ShadersStore, QD.IncludesShadersStore = iD.e.IncludesShadersStore
  },
  39296: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => SD,
      d: () => OD,
      e: () => nD
    });
    var ID = cD(38996),
      pD = cD(36446),
      iD = cD(36481),
      fD = cD(39281);
    const bD = new pD.d,
      QD = new pD.d,
      wD = new pD.d,
      SD = {
        hq: () => {},
        eyeAtCamera: !0
      };

    function BD(DD, CD, cD) {
      const ID = cD.XcD(),
        pD = CD.XcD();
      for (let iD = 0; iD < 16; iD++) ID[iD] = pD[iD];
      return ID[12] -= DD.x, ID[13] -= DD.y, ID[14] -= DD.z, cD.markAsUpdated(), cD
    }

    function yD(DD, CD, cD) {
      return (0, iD.g)(CD, QD), BD(DD, QD, wD), (0, iD.g)(wD, cD), cD
    }

    function MD(DD, CD, cD) {
      if (!SD.eyeAtCamera) return yD(DD, CD, cD);
      const ID = cD.XcD(),
        pD = CD.XcD();
      for (let iD = 0; iD < 16; iD++) ID[iD] = pD[iD];
      return ID[12] = 0, ID[13] = 0, ID[14] = 0, cD.markAsUpdated(), cD
    }

    function tD(DD, CD, cD, ID) {
      return (0, iD.n)(MD(DD, CD, ID), cD, ID), ID
    }

    function ZD(DD, CD, cD, ID) {
      return (0, iD.g)(cD, QD), (0, iD.n)(CD, QD, wD), BD(DD, wD, QD), MD(DD, cD, wD), (0, iD.n)(QD, wD, ID), ID
    }

    function oD(DD, CD, cD, ID, pD, fD) {
      return (0, iD.g)(cD, QD), (0, iD.n)(CD, QD, wD), BD(DD, wD, QD), tD(DD, ID, pD, wD), (0, iD.n)(QD, wD, fD), fD
    }

    function vD(DD, CD) {
      const cD = SD.hq();
      if (!cD || bD === CD) return CD;
      bD.updateFlag = CD.updateFlag;
      const ID = cD.floatingOriginOffset;
      switch (DD) {
        case "world":
          return BD(ID, CD, bD);
        case "view":
          return MD(ID, CD, bD);
        case "worldView":
          return ZD(ID, CD, cD.getViewMatrix(), bD);
        case "viewProjection":
          return tD(ID, cD.getViewMatrix(), cD.getProjectionMatrix(), bD);
        case "worldViewProjection":
          return oD(ID, CD, cD.getTransformMatrix(), cD.getViewMatrix(), cD.getProjectionMatrix(), bD);
        default:
          if (DD.startsWith("u_")) {
            const pD = DD.toLowerCase();
            if (pD.startsWith("u_worldviewprojection")) return oD(ID, CD, cD.getTransformMatrix(), cD.getViewMatrix(), cD.getProjectionMatrix(), bD);
            if (pD.startsWith("u_viewprojection")) return tD(ID, cD.getViewMatrix(), cD.getProjectionMatrix(), bD);
            if (pD.startsWith("u_worldview")) return ZD(ID, CD, cD.getViewMatrix(), bD);
            if (pD.startsWith("u_world")) return BD(ID, CD, bD);
            if (pD.startsWith("u_view")) return MD(ID, CD, bD)
          }
          return CD
      }
    }
    const ND = fD.b,
      gD = ID.b,
      XD = ND.prototype._updateMatrixForUniform,
      mD = ID.b.prototype.setMatrix;

    function nD() {
      ID.b.prototype.setMatrix = mD, gD._setMatrixOverride = void 0, ND.prototype._updateMatrixForUniform = XD, ND.prototype._updateMatrixForUniformOverride = void 0
    }

    function OD() {
      gD.prototype._setMatrixOverride = mD, gD.prototype.setMatrix = function(DD, CD) {
        return this._setMatrixOverride(DD, vD(DD, CD)), this
      }, ND.prototype._updateMatrixForUniformOverride = XD, ND.prototype._updateMatrixForUniform = function(DD, CD) {
        this._updateMatrixForUniformOverride(DD, vD(DD, CD))
      }
    }
  },
  39272: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      f: () => pD
    });
    var ID = cD(39265);

    function pD(DD, CD) {
      CD.WHITEBALANCE && DD.push("whiteBalanceMatrix"), CD.EXPOSURE && DD.push("exposureLinear"), CD.CONTRAST && DD.push("contrast"), CD.COLORGRADING && DD.push("colorTransformSettings"), (CD.VIGNETTE || CD.DITHER) && DD.push("vInverseScreenSize"), CD.VIGNETTE && (DD.push("vignetteSettings1"), DD.push("vignetteSettings2")), CD.COLORCURVES && (0, ID.e)(DD), CD.DITHER && DD.push("ditherIntensity")
    }

    function iD(DD, CD) {
      CD.COLORGRADING && DD.push("txColorTransform")
    }
  },
  39259: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => qD,
      d: () => aD
    });
    var ID = cD(39154),
      pD = cD(39156),
      iD = cD(36473),
      fD = cD(36622),
      bD = cD(36479),
      QD = cD(36446);
    const wD = [
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
      SD = 1e6 / wD[wD.length - 1][0],
      BD = 150;

    function yD(DD, CD) {
      const cD = Number.isNaN(DD) ? SD : Math.max(DD, SD),
        ID = (0, bD.Clamp)(1e6 / cD, wD[0][0], wD[wD.length - 1][0]);
      let pD = 0,
        iD = wD.length - 1;
      for (; iD - pD > 1;) {
        const DD = pD + iD >> 1;
        wD[DD][0] <= ID ? pD = DD : iD = DD
      }
      const fD = pD,
        [yD, MD, tD, ZD] = wD[fD],
        [oD, vD, ND, gD] = wD[fD + 1],
        XD = (ID - yD) / (oD - yD),
        mD = QD.n.Lerp(new QD.n(MD, tD), new QD.n(vD, ND), XD),
        nD = QD.n.Normalize(new QD.n(1, ZD)),
        OD = QD.n.Normalize(new QD.n(1, gD)),
        PD = QD.n.Normalize(QD.n.Lerp(nD, OD, XD)),
        HD = (0, bD.Clamp)(CD, -150, BD);
      mD.EcD(PD.scale(HD / 3e3));
      const UD = 2 * mD.x - 8 * mD.y + 4,
        xD = 3 * mD.x / UD,
        qD = 2 * mD.y / UD;
      return new QD.p(xD / qD, 1, (1 - xD - qD) / qD)
    }
    const MD = QD.d.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      tD = QD.d.Invert(MD);

    function ZD(DD, CD) {
      const cD = CD > 0 ? DD / CD : 10;
      return (0, bD.Clamp)(cD, .1, 10)
    }

    function oD(DD, CD) {
      const cD = QD.p.TransformNormal(DD, MD),
        ID = QD.p.TransformNormal(CD, MD),
        pD = QD.d.FromArray([ZD(ID.x, cD.x), 0, 0, 0, 0, ZD(ID.y, cD.y), 0, 0, 0, 0, ZD(ID.z, cD.z), 0, 0, 0, 0, 1]);
      return MD.multiply(pD).multiply(tD)
    }
    const vD = new QD.p(.95047, 1, 1.08883),
      ND = QD.d.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(oD(vD, yD(6500, 0))),
      gD = QD.d.Invert(ND),
      XD = QD.p.TransformNormal(new QD.p(1, 1, 1), ND);
    var mD = cD(39174),
      nD = cD(39265);
    let OD = (() => {
      var DD;
      let CD, cD, iD, bD, QD, wD, SD, BD, yD, MD, tD, ZD, oD = [],
        vD = [],
        ND = [],
        gD = [],
        XD = [],
        OD = [],
        PD = [],
        HD = [],
        UD = [],
        xD = [],
        qD = [],
        JD = [],
        KD = [],
        aD = [],
        VD = [],
        zD = [],
        jD = [],
        lD = [],
        LD = [],
        TD = [],
        GD = [],
        RD = [],
        kD = [],
        dD = [];
      return DD = class {
        constructor() {
          this._dirty = !0, this._tempColor = new fD.e(0, 0, 0, 0), this._globalCurve = new fD.e(0, 0, 0, 0), this._highlightsCurve = new fD.e(0, 0, 0, 0), this._midtonesCurve = new fD.e(0, 0, 0, 0), this._shadowsCurve = new fD.e(0, 0, 0, 0), this._positiveCurve = new fD.e(0, 0, 0, 0), this._negativeCurve = new fD.e(0, 0, 0, 0), this._globalHue = (0, ID.m)(this, oD, 30), this._globalDensity = ((0, ID.m)(this, vD), (0, ID.m)(this, ND, 0)), this._globalSaturation = ((0, ID.m)(this, gD), (0, ID.m)(this, XD, 0)), this._globalExposure = ((0, ID.m)(this, OD), (0, ID.m)(this, PD, 0)), this._highlightsHue = ((0, ID.m)(this, HD), (0, ID.m)(this, UD, 30)), this._highlightsDensity = ((0, ID.m)(this, xD), (0, ID.m)(this, qD, 0)), this._highlightsSaturation = ((0, ID.m)(this, JD), (0, ID.m)(this, KD, 0)), this._highlightsExposure = ((0, ID.m)(this, aD), (0, ID.m)(this, VD, 0)), this._midtonesHue = ((0, ID.m)(this, zD), (0, ID.m)(this, jD, 30)), this._midtonesDensity = ((0, ID.m)(this, lD), (0, ID.m)(this, LD, 0)), this._midtonesSaturation = ((0, ID.m)(this, TD), (0, ID.m)(this, GD, 0)), this._midtonesExposure = ((0, ID.m)(this, RD), (0, ID.m)(this, kD, 0)), this._shadowsHue = ((0, ID.m)(this, dD), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(DD) {
          this._globalHue = DD, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(DD) {
          this._globalDensity = DD, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(DD) {
          this._globalSaturation = DD, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(DD) {
          this._globalExposure = DD, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(DD) {
          this._highlightsHue = DD, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(DD) {
          this._highlightsDensity = DD, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(DD) {
          this._highlightsSaturation = DD, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(DD) {
          this._highlightsExposure = DD, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(DD) {
          this._midtonesHue = DD, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(DD) {
          this._midtonesDensity = DD, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(DD) {
          this._midtonesSaturation = DD, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(DD) {
          this._midtonesExposure = DD, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(DD) {
          this._shadowsHue = DD, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(DD) {
          this._shadowsDensity = DD, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(DD) {
          this._shadowsSaturation = DD, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(DD) {
          this._shadowsExposure = DD, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(CD, cD, ID, pD, iD) {
          null != CD && (CD = DD._Clamp(CD, 0, 360), cD = DD._Clamp(cD, -100, 100), ID = DD._Clamp(ID, -100, 100), pD = DD._Clamp(pD, -100, 100), cD = DD._ApplyColorGradingSliderNonlinear(cD), cD *= .5, pD = DD._ApplyColorGradingSliderNonlinear(pD), cD < 0 && (cD *= -1, CD = (CD + 180) % 360), DD._FromHSBToRef(CD, cD, 50 + .25 * pD, iD), iD.scaleToRef(2, iD), iD.a = 1 + .01 * ID)
        }
        static _ApplyColorGradingSliderNonlinear(DD) {
          DD /= 100;
          let CD = Math.abs(DD);
          return CD = Math.pow(CD, 2), DD < 0 && (CD *= -1), CD *= 100, CD
        }
        static _FromHSBToRef(CD, cD, ID, pD) {
          let iD = DD._Clamp(CD, 0, 360);
          const fD = DD._Clamp(cD / 100, 0, 1),
            bD = DD._Clamp(ID / 100, 0, 1);
          if (0 === fD) pD.r = bD, pD.g = bD, pD.b = bD;
          else {
            iD /= 60;
            const DD = Math.floor(iD),
              CD = iD - DD,
              cD = bD * (1 - fD),
              ID = bD * (1 - fD * CD),
              QD = bD * (1 - fD * (1 - CD));
            switch (DD) {
              case 0:
                pD.r = bD, pD.g = QD, pD.b = cD;
                break;
              case 1:
                pD.r = ID, pD.g = bD, pD.b = cD;
                break;
              case 2:
                pD.r = cD, pD.g = bD, pD.b = QD;
                break;
              case 3:
                pD.r = cD, pD.g = ID, pD.b = bD;
                break;
              case 4:
                pD.r = QD, pD.g = cD, pD.b = bD;
                break;
              default:
                pD.r = bD, pD.g = cD, pD.b = ID
            }
          }
          pD.a = 1
        }
        static _Clamp(DD, CD, cD) {
          return Math.min(Math.max(DD, CD), cD)
        }
        clone() {
          return mD.d.Clone((() => new DD), this)
        }
        serialize() {
          return mD.d.Serialize(this)
        }
        _bind(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), DD && (DD.setFloat4(CD, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), DD.setFloat4(cD, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), DD.setFloat4(ID, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const fD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        CD = [(0, pD.G)()], cD = [(0, pD.G)()], iD = [(0, pD.G)()], bD = [(0, pD.G)()], QD = [(0, pD.G)()], wD = [(0, pD.G)()], SD = [(0, pD.G)()], BD = [(0, pD.G)()], yD = [(0, pD.G)()], MD = [(0, pD.G)()], tD = [(0, pD.G)()], ZD = [(0, pD.G)()], (0, ID.k)(null, null, CD, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: DD => "_globalHue" in DD,
            get: DD => DD._globalHue,
            set: (DD, CD) => {
              DD._globalHue = CD
            }
          },
          metadata: fD
        }, oD, vD), (0, ID.k)(null, null, cD, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "_globalDensity" in DD,
            get: DD => DD._globalDensity,
            set: (DD, CD) => {
              DD._globalDensity = CD
            }
          },
          metadata: fD
        }, ND, gD), (0, ID.k)(null, null, iD, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: DD => "_globalSaturation" in DD,
            get: DD => DD._globalSaturation,
            set: (DD, CD) => {
              DD._globalSaturation = CD
            }
          },
          metadata: fD
        }, XD, OD), (0, ID.k)(null, null, bD, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: DD => "_globalExposure" in DD,
            get: DD => DD._globalExposure,
            set: (DD, CD) => {
              DD._globalExposure = CD
            }
          },
          metadata: fD
        }, PD, HD), (0, ID.k)(null, null, QD, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: DD => "_highlightsHue" in DD,
            get: DD => DD._highlightsHue,
            set: (DD, CD) => {
              DD._highlightsHue = CD
            }
          },
          metadata: fD
        }, UD, xD), (0, ID.k)(null, null, wD, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "_highlightsDensity" in DD,
            get: DD => DD._highlightsDensity,
            set: (DD, CD) => {
              DD._highlightsDensity = CD
            }
          },
          metadata: fD
        }, qD, JD), (0, ID.k)(null, null, SD, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: DD => "_highlightsSaturation" in DD,
            get: DD => DD._highlightsSaturation,
            set: (DD, CD) => {
              DD._highlightsSaturation = CD
            }
          },
          metadata: fD
        }, KD, aD), (0, ID.k)(null, null, BD, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: DD => "_highlightsExposure" in DD,
            get: DD => DD._highlightsExposure,
            set: (DD, CD) => {
              DD._highlightsExposure = CD
            }
          },
          metadata: fD
        }, VD, zD), (0, ID.k)(null, null, yD, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: DD => "_midtonesHue" in DD,
            get: DD => DD._midtonesHue,
            set: (DD, CD) => {
              DD._midtonesHue = CD
            }
          },
          metadata: fD
        }, jD, lD), (0, ID.k)(null, null, MD, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: DD => "_midtonesDensity" in DD,
            get: DD => DD._midtonesDensity,
            set: (DD, CD) => {
              DD._midtonesDensity = CD
            }
          },
          metadata: fD
        }, LD, TD), (0, ID.k)(null, null, tD, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: DD => "_midtonesSaturation" in DD,
            get: DD => DD._midtonesSaturation,
            set: (DD, CD) => {
              DD._midtonesSaturation = CD
            }
          },
          metadata: fD
        }, GD, RD), (0, ID.k)(null, null, ZD, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: DD => "_midtonesExposure" in DD,
            get: DD => DD._midtonesExposure,
            set: (DD, CD) => {
              DD._midtonesExposure = CD
            }
          },
          metadata: fD
        }, kD, dD), fD && Object.defineProperty(DD, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: fD
        })
      })(), DD.PrepareUniforms = nD.e, DD
    })();

    function PD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      DD._bind(CD, cD, ID, pD)
    }
    var HD = cD(39084),
      UD = cD(39272),
      xD = cD(36488);
    let qD = (() => {
        var DD;
        let CD, cD, wD, MD, tD, ZD, vD, nD, xD, qD, JD, KD, aD, VD, zD, jD, lD, LD, TD, GD, RD, kD, dD, YD, WD, sD, ED, eD, uD = [],
          hD = [],
          rD = [],
          AD = [],
          FD = [],
          DC = [],
          CC = [],
          cC = [],
          IC = [],
          pC = [],
          iC = [],
          fC = [],
          bC = [],
          QC = [],
          wC = [],
          SC = [],
          BC = [],
          yC = [],
          MC = [],
          tC = [],
          ZC = [],
          oC = [],
          vC = [],
          NC = [],
          gC = [],
          XC = [],
          mC = [],
          nC = [],
          OC = [],
          PC = [],
          HC = [],
          UC = [],
          xC = [],
          qC = [],
          JC = [],
          KC = [],
          aC = [],
          VC = [],
          zC = [],
          jC = [],
          lC = [],
          LC = [],
          TC = [],
          GC = [],
          RC = [],
          kC = [],
          dC = [],
          YC = [],
          WC = [],
          sC = [],
          EC = [],
          eC = [],
          uC = [],
          hC = [],
          rC = [],
          AC = [];
        return DD = class {
          constructor() {
            this.colorCurves = (0, ID.m)(this, uD, new OD), this._colorCurvesEnabled = ((0, ID.m)(this, hD), (0, ID.m)(this, rD, !1)), this._colorGradingTexture = ((0, ID.m)(this, AD), (0, ID.m)(this, FD, void 0)), this._colorGradingEnabled = ((0, ID.m)(this, DC), (0, ID.m)(this, CC, !1)), this._colorGradingWithGreenDepth = ((0, ID.m)(this, cC), (0, ID.m)(this, IC, !0)), this._colorGradingBGR = ((0, ID.m)(this, pC), (0, ID.m)(this, iC, !0)), this._exposure = ((0, ID.m)(this, fC), (0, ID.m)(this, bC, 1)), this._toneMappingEnabled = ((0, ID.m)(this, QC), (0, ID.m)(this, wC, !1)), this._toneMappingType = ((0, ID.m)(this, SC), (0, ID.m)(this, BC, DD.TONEMAPPING_STANDARD)), this._contrast = ((0, ID.m)(this, yC), (0, ID.m)(this, MC, 1)), this._whiteBalanceEnabled = ((0, ID.m)(this, tC), (0, ID.m)(this, ZC, !1)), this._temperature = ((0, ID.m)(this, oC), (0, ID.m)(this, vC, 6500)), this._tint = ((0, ID.m)(this, NC), (0, ID.m)(this, gC, 0)), this._whiteBalanceMatrix = ((0, ID.m)(this, XC), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, ID.m)(this, mC, 0), this.vignetteCenterX = ((0, ID.m)(this, nC), (0, ID.m)(this, OC, 0)), this.vignetteCenterY = ((0, ID.m)(this, PC), (0, ID.m)(this, HC, 0)), this.vignetteWeight = ((0, ID.m)(this, UC), (0, ID.m)(this, xC, 1.5)), this.vignetteColor = ((0, ID.m)(this, qC), (0, ID.m)(this, JC, new fD.e(0, 0, 0, 0))), this.vignetteCameraFov = ((0, ID.m)(this, KC), (0, ID.m)(this, aC, .5)), this._vignetteBlendMode = ((0, ID.m)(this, VC), (0, ID.m)(this, zC, DD.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, ID.m)(this, jC), (0, ID.m)(this, lC, !1)), this._ditheringEnabled = ((0, ID.m)(this, LC), (0, ID.m)(this, TC, !1)), this._ditheringIntensity = ((0, ID.m)(this, GC), (0, ID.m)(this, RC, 1 / 255)), this._skipFinalColorClamp = ((0, ID.m)(this, kC), (0, ID.m)(this, dC, !1)), this._applyByPostProcess = ((0, ID.m)(this, YC), (0, ID.m)(this, WC, !1)), this._isEnabled = ((0, ID.m)(this, sC), (0, ID.m)(this, EC, !0)), this.outputTextureWidth = ((0, ID.m)(this, eC), (0, ID.m)(this, uC, 0)), this.outputTextureHeight = ((0, ID.m)(this, hC), (0, ID.m)(this, rC, 0)), this.onUpdateParameters = ((0, ID.m)(this, AC), new iD.c)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(DD) {
            this._colorCurvesEnabled !== DD && (this._colorCurvesEnabled = DD, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(DD) {
            this._colorGradingTexture !== DD && (this._colorGradingTexture = DD, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(DD) {
            this._colorGradingEnabled !== DD && (this._colorGradingEnabled = DD, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(DD) {
            this._colorGradingWithGreenDepth !== DD && (this._colorGradingWithGreenDepth = DD, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(DD) {
            this._colorGradingBGR !== DD && (this._colorGradingBGR = DD, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(DD) {
            this._exposure !== DD && (this._exposure = DD, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(DD) {
            this._toneMappingEnabled !== DD && (this._toneMappingEnabled = DD, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(DD) {
            this._toneMappingType !== DD && (this._toneMappingType = DD, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(DD) {
            this._contrast !== DD && (this._contrast = DD, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(DD) {
            this._whiteBalanceEnabled !== DD && (this._whiteBalanceEnabled = DD, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(DD) {
            DD = Number.isNaN(DD) ? SD : Math.max(DD, SD), this._temperature !== DD && (this._temperature = DD, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(DD) {
            DD = (0, bD.Clamp)(DD, -150, BD), this._tint !== DD && (this._tint = DD, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(DD, CD) {
              const cD = oD(yD(DD, CD), XD),
                ID = ND.multiply(cD).multiply(gD);
              return QD.d.GetAsMatrix3x3(ID)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(DD) {
            this.vignetteCenterY = DD
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(DD) {
            this.vignetteCenterX = DD
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(DD) {
            this._vignetteBlendMode !== DD && (this._vignetteBlendMode = DD, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(DD) {
            this._vignetteEnabled !== DD && (this._vignetteEnabled = DD, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(DD) {
            this._ditheringEnabled !== DD && (this._ditheringEnabled = DD, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(DD) {
            this._ditheringIntensity !== DD && (this._ditheringIntensity = DD, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(DD) {
            this._skipFinalColorClamp !== DD && (this._skipFinalColorClamp = DD, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(DD) {
            this._applyByPostProcess !== DD && (this._applyByPostProcess = DD, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(DD) {
            this._isEnabled !== DD && (this._isEnabled = DD, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(CD) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return CD.WHITEBALANCE = !1, CD.VIGNETTE = !1, CD.TONEMAPPING = 0, CD.CONTRAST = !1, CD.EXPOSURE = !1, CD.COLORCURVES = !1, CD.COLORGRADING = !1, CD.COLORGRADING3D = !1, CD.DITHER = !1, CD.IMAGEPROCESSING = !1, CD.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(CD.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (CD.WHITEBALANCE = this._whiteBalanceEnabled, CD.VIGNETTE = this.vignetteEnabled, CD.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === DD._VIGNETTEMODE_MULTIPLY, CD.VIGNETTEBLENDMODEOPAQUE = !CD.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case DD.TONEMAPPING_KHR_PBR_NEUTRAL:
                CD.TONEMAPPING = 3;
                break;
              case DD.TONEMAPPING_ACES:
                CD.TONEMAPPING = 2;
                break;
              default:
                CD.TONEMAPPING = 1
            } else CD.TONEMAPPING = 0;
            CD.CONTRAST = 1 !== this.contrast, CD.EXPOSURE = 1 !== this.exposure, CD.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, CD.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, CD.COLORGRADING ? CD.COLORGRADING3D = this.colorGradingTexture.is3D : CD.COLORGRADING3D = !1, CD.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, CD.SAMPLER3DBGRMAP = this.colorGradingBGR, CD.DITHER = this._ditheringEnabled, CD.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, CD.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, CD.IMAGEPROCESSING = CD.WHITEBALANCE || CD.VIGNETTE || !!CD.TONEMAPPING || CD.CONTRAST || CD.EXPOSURE || CD.COLORCURVES || CD.COLORGRADING || CD.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(DD, CD) {
            if (this._whiteBalanceEnabled && DD.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && PD(this.colorCurves, DD), this._vignetteEnabled || this._ditheringEnabled) {
              const cD = 1 / (this.outputTextureWidth || DD.DZ().getRenderWidth()),
                ID = 1 / (this.outputTextureHeight || DD.DZ().getRenderHeight());
              if (DD.setFloat2("vInverseScreenSize", cD, ID), this._ditheringEnabled && DD.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const pD = null != CD ? CD : ID / cD;
                let iD = Math.tan(.5 * this.vignetteCameraFov),
                  fD = iD * pD;
                const bD = Math.sqrt(fD * iD);
                fD = (0, HD.k)(fD, bD, this.vignetteStretch), iD = (0, HD.k)(iD, bD, this.vignetteStretch), DD.setFloat4("vignetteSettings1", fD, iD, -fD * this.vignetteCenterX, -iD * this.vignetteCenterY);
                const QD = -2 * this.vignetteWeight;
                DD.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, QD)
              }
            }
            if (DD.setFloat("exposureLinear", this.exposure), DD.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              DD.setTexture("txColorTransform", this.colorGradingTexture);
              const CD = this.colorGradingTexture.getSize().height;
              DD.setFloat4("colorTransformSettings", (CD - 1) / CD, .5 / CD, CD, this.colorGradingTexture.level)
            }
          }
          clone() {
            return mD.d.Clone((() => new DD), this)
          }
          serialize() {
            return mD.d.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const iD = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          CD = [(0, pD.j)()], cD = [(0, pD.G)()], wD = [(0, pD.w)("colorGradingTexture")], MD = [(0, pD.G)()], tD = [(0, pD.G)()], ZD = [(0, pD.G)()], vD = [(0, pD.G)()], nD = [(0, pD.G)()], xD = [(0, pD.G)()], qD = [(0, pD.G)()], JD = [(0, pD.G)()], KD = [(0, pD.G)()], aD = [(0, pD.G)()], VD = [(0, pD.G)()], zD = [(0, pD.G)()], jD = [(0, pD.G)()], lD = [(0, pD.G)()], LD = [(0, pD.m)()], TD = [(0, pD.G)()], GD = [(0, pD.G)()], RD = [(0, pD.G)()], kD = [(0, pD.G)()], dD = [(0, pD.G)()], YD = [(0, pD.G)()], WD = [(0, pD.G)()], sD = [(0, pD.G)()], ED = [(0, pD.G)()], eD = [(0, pD.G)()], (0, ID.k)(null, null, CD, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: DD => "colorCurves" in DD,
              get: DD => DD.colorCurves,
              set: (DD, CD) => {
                DD.colorCurves = CD
              }
            },
            metadata: iD
          }, uD, hD), (0, ID.k)(null, null, cD, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: DD => "_colorCurvesEnabled" in DD,
              get: DD => DD._colorCurvesEnabled,
              set: (DD, CD) => {
                DD._colorCurvesEnabled = CD
              }
            },
            metadata: iD
          }, rD, AD), (0, ID.k)(null, null, wD, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: DD => "_colorGradingTexture" in DD,
              get: DD => DD._colorGradingTexture,
              set: (DD, CD) => {
                DD._colorGradingTexture = CD
              }
            },
            metadata: iD
          }, FD, DC), (0, ID.k)(null, null, MD, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: DD => "_colorGradingEnabled" in DD,
              get: DD => DD._colorGradingEnabled,
              set: (DD, CD) => {
                DD._colorGradingEnabled = CD
              }
            },
            metadata: iD
          }, CC, cC), (0, ID.k)(null, null, tD, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: DD => "_colorGradingWithGreenDepth" in DD,
              get: DD => DD._colorGradingWithGreenDepth,
              set: (DD, CD) => {
                DD._colorGradingWithGreenDepth = CD
              }
            },
            metadata: iD
          }, IC, pC), (0, ID.k)(null, null, ZD, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: DD => "_colorGradingBGR" in DD,
              get: DD => DD._colorGradingBGR,
              set: (DD, CD) => {
                DD._colorGradingBGR = CD
              }
            },
            metadata: iD
          }, iC, fC), (0, ID.k)(null, null, vD, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: DD => "_exposure" in DD,
              get: DD => DD._exposure,
              set: (DD, CD) => {
                DD._exposure = CD
              }
            },
            metadata: iD
          }, bC, QC), (0, ID.k)(null, null, nD, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: DD => "_toneMappingEnabled" in DD,
              get: DD => DD._toneMappingEnabled,
              set: (DD, CD) => {
                DD._toneMappingEnabled = CD
              }
            },
            metadata: iD
          }, wC, SC), (0, ID.k)(null, null, xD, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: DD => "_toneMappingType" in DD,
              get: DD => DD._toneMappingType,
              set: (DD, CD) => {
                DD._toneMappingType = CD
              }
            },
            metadata: iD
          }, BC, yC), (0, ID.k)(null, null, qD, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: DD => "_contrast" in DD,
              get: DD => DD._contrast,
              set: (DD, CD) => {
                DD._contrast = CD
              }
            },
            metadata: iD
          }, MC, tC), (0, ID.k)(null, null, JD, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: DD => "_whiteBalanceEnabled" in DD,
              get: DD => DD._whiteBalanceEnabled,
              set: (DD, CD) => {
                DD._whiteBalanceEnabled = CD
              }
            },
            metadata: iD
          }, ZC, oC), (0, ID.k)(null, null, KD, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: DD => "_temperature" in DD,
              get: DD => DD._temperature,
              set: (DD, CD) => {
                DD._temperature = CD
              }
            },
            metadata: iD
          }, vC, NC), (0, ID.k)(null, null, aD, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: DD => "_tint" in DD,
              get: DD => DD._tint,
              set: (DD, CD) => {
                DD._tint = CD
              }
            },
            metadata: iD
          }, gC, XC), (0, ID.k)(null, null, VD, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: DD => "vignetteStretch" in DD,
              get: DD => DD.vignetteStretch,
              set: (DD, CD) => {
                DD.vignetteStretch = CD
              }
            },
            metadata: iD
          }, mC, nC), (0, ID.k)(null, null, zD, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: DD => "vignetteCenterX" in DD,
              get: DD => DD.vignetteCenterX,
              set: (DD, CD) => {
                DD.vignetteCenterX = CD
              }
            },
            metadata: iD
          }, OC, PC), (0, ID.k)(null, null, jD, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: DD => "vignetteCenterY" in DD,
              get: DD => DD.vignetteCenterY,
              set: (DD, CD) => {
                DD.vignetteCenterY = CD
              }
            },
            metadata: iD
          }, HC, UC), (0, ID.k)(null, null, lD, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "vignetteWeight" in DD,
              get: DD => DD.vignetteWeight,
              set: (DD, CD) => {
                DD.vignetteWeight = CD
              }
            },
            metadata: iD
          }, xC, qC), (0, ID.k)(null, null, LD, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: DD => "vignetteColor" in DD,
              get: DD => DD.vignetteColor,
              set: (DD, CD) => {
                DD.vignetteColor = CD
              }
            },
            metadata: iD
          }, JC, KC), (0, ID.k)(null, null, TD, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: DD => "vignetteCameraFov" in DD,
              get: DD => DD.vignetteCameraFov,
              set: (DD, CD) => {
                DD.vignetteCameraFov = CD
              }
            },
            metadata: iD
          }, aC, VC), (0, ID.k)(null, null, GD, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: DD => "_vignetteBlendMode" in DD,
              get: DD => DD._vignetteBlendMode,
              set: (DD, CD) => {
                DD._vignetteBlendMode = CD
              }
            },
            metadata: iD
          }, zC, jC), (0, ID.k)(null, null, RD, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: DD => "_vignetteEnabled" in DD,
              get: DD => DD._vignetteEnabled,
              set: (DD, CD) => {
                DD._vignetteEnabled = CD
              }
            },
            metadata: iD
          }, lC, LC), (0, ID.k)(null, null, kD, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: DD => "_ditheringEnabled" in DD,
              get: DD => DD._ditheringEnabled,
              set: (DD, CD) => {
                DD._ditheringEnabled = CD
              }
            },
            metadata: iD
          }, TC, GC), (0, ID.k)(null, null, dD, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: DD => "_ditheringIntensity" in DD,
              get: DD => DD._ditheringIntensity,
              set: (DD, CD) => {
                DD._ditheringIntensity = CD
              }
            },
            metadata: iD
          }, RC, kC), (0, ID.k)(null, null, YD, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: DD => "_skipFinalColorClamp" in DD,
              get: DD => DD._skipFinalColorClamp,
              set: (DD, CD) => {
                DD._skipFinalColorClamp = CD
              }
            },
            metadata: iD
          }, dC, YC), (0, ID.k)(null, null, WD, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: DD => "_applyByPostProcess" in DD,
              get: DD => DD._applyByPostProcess,
              set: (DD, CD) => {
                DD._applyByPostProcess = CD
              }
            },
            metadata: iD
          }, WC, sC), (0, ID.k)(null, null, sD, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: DD => "_isEnabled" in DD,
              get: DD => DD._isEnabled,
              set: (DD, CD) => {
                DD._isEnabled = CD
              }
            },
            metadata: iD
          }, EC, eC), (0, ID.k)(null, null, ED, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: DD => "outputTextureWidth" in DD,
              get: DD => DD.outputTextureWidth,
              set: (DD, CD) => {
                DD.outputTextureWidth = CD
              }
            },
            metadata: iD
          }, uC, hC), (0, ID.k)(null, null, eD, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: DD => "outputTextureHeight" in DD,
              get: DD => DD.outputTextureHeight,
              set: (DD, CD) => {
                DD.outputTextureHeight = CD
              }
            },
            metadata: iD
          }, rC, AC), iD && Object.defineProperty(DD, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iD
          })
        })(), DD.TONEMAPPING_STANDARD = 0, DD.TONEMAPPING_ACES = 1, DD.TONEMAPPING_KHR_PBR_NEUTRAL = 2, DD.PrepareUniforms = UD.f, DD.PrepareSamplers = UD.c, DD._VIGNETTEMODE_MULTIPLY = 0, DD._VIGNETTEMODE_OPAQUE = 1, DD
      })(),
      JD = !1;

    function KD(DD) {
      const CD = mD.d.Parse((() => new qD), DD, null, null);
      return void 0 !== DD.vignetteCentreX && (CD.vignetteCenterX = DD.vignetteCentreX), void 0 !== DD.vignetteCentreY && (CD.vignetteCenterY = DD.vignetteCentreY), CD
    }

    function aD() {
      JD || (JD = !0, qD.Parse = KD, mD.d._ImageProcessingConfigurationParser = KD, (0, xD.d)("BABYLON.ImageProcessingConfiguration", qD))
    }
  },
  39281: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD
    });
    var ID = cD(38048),
      pD = cD(39245);
    class iD {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = arguments.length > 3 ? arguments[3] : void 0,
          pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          iD = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = DD, this._noUBO = !DD.supportsUniformBuffers || pD, this._dynamic = cD, this._name = ID ?? "no-name", this._data = CD || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === iD && this._engine._features.trackUbosInFrame || !0 === iD) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.o5 = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.o5 = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(DD) {
        let CD;
        if (CD = DD <= 2 ? DD : 4, this._uniformLocationPointer % CD !== 0) {
          const DD = this._uniformLocationPointer;
          this._uniformLocationPointer += CD - this._uniformLocationPointer % CD;
          const cD = this._uniformLocationPointer - DD;
          for (let CD = 0; CD < cD; CD++) this._data.push(0)
        }
      }
      addUniform(DD, CD) {
        let cD, ID = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (ID > 0 && "number" === typeof CD && (this._uniformArraySizes[DD] = {
            strideSize: CD,
            arraySize: ID
          }), void 0 === this._uniformLocations[DD] && (this._uniformNames.push(DD), !this._noUBO)) {
          if (ID > 0) {
            if (CD instanceof Array) throw "addUniform should not be use with Array in UBO: " + DD;
            if (this._fillAlignment(4), 16 == CD) CD *= ID;
            else {
              CD = CD * ID + (4 - CD) * ID
            }
            cD = [];
            for (let DD = 0; DD < CD; DD++) cD.push(0)
          } else {
            if (CD instanceof Array) cD = CD, CD = cD.length;
            else {
              cD = [];
              for (let DD = 0; DD < CD; DD++) cD.push(0)
            }
            this._fillAlignment(CD)
          }
          this._uniformSizes[DD] = CD, this._uniformLocations[DD] = this._uniformLocationPointer, this._uniformLocationPointer += CD;
          for (let DD = 0; DD < CD; DD++) this._data.push(cD[DD]);
          this._needSync = !0
        }
      }
      addMatrix(DD, CD) {
        this.addUniform(DD, Array.prototype.slice.call(CD.XcD()))
      }
      addFloat2(DD, CD, cD) {
        const ID = [CD, cD];
        this.addUniform(DD, ID)
      }
      addFloat3(DD, CD, cD, ID) {
        const pD = [CD, cD, ID];
        this.addUniform(DD, pD)
      }
      addColor3(DD, CD) {
        const cD = [CD.r, CD.g, CD.b];
        this.addUniform(DD, cD)
      }
      addColor4(DD, CD, cD) {
        const ID = [CD.r, CD.g, CD.b, cD];
        this.addUniform(DD, ID)
      }
      addVector3(DD, CD) {
        const cD = [CD.x, CD.y, CD.z];
        this.addUniform(DD, cD)
      }
      addMatrix3x3(DD) {
        this.addUniform(DD, 12)
      }
      addMatrix2x2(DD) {
        this.addUniform(DD, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const DD = [];
        let CD = 0;
        for (const cD in this._uniformLocations)
          if (DD.push(cD), 10 === ++CD) break;
        return DD.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const DD of this._ownerListsBySlot.values()) this._removeOwnerBacklink(DD);
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
      set name(DD) {
        this._name = DD
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(DD, CD) {
        for (let cD = 0; cD < DD.length; ++cD)
          if (DD[cD] !== CD[cD]) return !1;
        return !0
      }
      _copyBuffer(DD, CD) {
        for (let cD = 0; cD < DD.length; ++cD) CD[cD] = DD[cD]
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
      _updateOwnerKeyed(DD) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let CD = this._slotByOwner.get(DD);
        if (void 0 === CD && (CD = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(DD, CD), this._ownerCount++, DD._uniformBuffersWithOwnedSlot || (DD._uniformBuffersWithOwnedSlot = []), DD._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(CD, DD._uniformBuffersWithOwnedSlot)), this._slotGeneration[CD] === this._dataGeneration) return this._bufferIndex = CD, this._buffer = this._buffers[CD][0], this.bindUniformBuffer(), this._slotFrameId[CD] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const cD = this._buffers[CD][1];
        this._slotFrameId[CD] === this._currentFrameId && cD && !this._buffersEqual(this._bufferData, cD) && (CD = this._takeFreeSlot(!1)), this._bufferIndex = CD, this._buffer = this._buffers[CD][0], this.bindUniformBuffer();
        const ID = this._buffers[CD][1];
        ID && this._buffersEqual(this._bufferData, ID) || (ID && this._copyBuffer(this._bufferData, ID), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[CD] = this._currentFrameId, this._slotGeneration[CD] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(DD) {
        for (let cD = 0; cD < this._freeSlots.length; ++cD) {
          const CD = this._freeSlots[cD];
          if (this._slotFrameId[CD] !== this._currentFrameId) return DD && (this._freeSlots[cD] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), CD
        }
        this._rebuild();
        const CD = this._buffers.length - 1;
        return DD || this._freeSlots.push(CD), CD
      }
      _releaseOwnerSlot(DD) {
        const CD = this._slotByOwner?.get(DD);
        if (void 0 === CD) return;
        this._slotByOwner.delete(DD);
        const cD = this._ownerListsBySlot.get(CD);
        cD && (this._removeOwnerBacklink(cD), this._ownerListsBySlot.delete(CD)), this._ownerCount--, this._freeSlots.push(CD)
      }
      _removeOwnerBacklink(DD) {
        const CD = DD.indexOf(this); - 1 !== CD && (DD[CD] = DD[DD.length - 1], DD.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(DD, CD, cD) {
        this._checkNewFrame();
        let pD = this._uniformLocations[DD];
        if (void 0 === pD) {
          if (this._buffer) return void ID.e.Error("Cannot add an uniform after UBO has been created. uniformName=" + DD);
          this.addUniform(DD, cD), pD = this._uniformLocations[DD]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let DD = 0; DD < cD; DD++) this._bufferData[pD + DD] = CD[DD];
          this._dataGeneration++
        } else {
          let DD = !1;
          for (let ID = 0; ID < cD; ID++)(16 === cD && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[pD + ID] !== Math.fround(CD[ID])) && (DD = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[pD + ID] = CD[ID]);
          this._needSync = this._needSync || DD, DD && this._dataGeneration++
        }
      }
      updateUniformArray(DD, CD, cD) {
        this._checkNewFrame();
        const iD = this._uniformLocations[DD];
        if (void 0 === iD) return void ID.e.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const fD = this._uniformArraySizes[DD];
        if (this._dynamic) {
          for (let DD = 0; DD < cD; DD++) this._bufferData[iD + DD] = CD[DD];
          this._dataGeneration++
        } else {
          let DD = !1,
            ID = 0,
            bD = 0;
          for (let QD = 0; QD < cD; QD++)
            if (this._bufferData[iD + 4 * bD + ID] !== pD.g.FloatRound(CD[QD]) && (DD = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[iD + 4 * bD + ID] = CD[QD]), ID++, ID === fD.strideSize) {
              for (; ID < 4; ID++) this._bufferData[iD + 4 * bD + ID] = 0;
              ID = 0, bD++
            } this._needSync = this._needSync || DD, DD && this._dataGeneration++
        }
      }
      _cacheMatrix(DD, CD) {
        this._checkNewFrame();
        const cD = this._valueCache[DD],
          ID = CD.updateFlag;
        return (void 0 === cD || cD !== ID) && (this._valueCache[DD] = ID, !0)
      }
      _updateMatrix3x3ForUniform(DD, CD) {
        for (let cD = 0; cD < 3; cD++) iD._TempBuffer[4 * cD] = CD[3 * cD], iD._TempBuffer[4 * cD + 1] = CD[3 * cD + 1], iD._TempBuffer[4 * cD + 2] = CD[3 * cD + 2], iD._TempBuffer[4 * cD + 3] = 0;
        this.updateUniform(DD, iD._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(DD, CD) {
        this._currentEffect.setMatrix3x3(DD, CD)
      }
      _updateMatrix2x2ForEffect(DD, CD) {
        this._currentEffect.setMatrix2x2(DD, CD)
      }
      _updateMatrix2x2ForUniform(DD, CD) {
        for (let cD = 0; cD < 2; cD++) iD._TempBuffer[4 * cD] = CD[2 * cD], iD._TempBuffer[4 * cD + 1] = CD[2 * cD + 1], iD._TempBuffer[4 * cD + 2] = 0, iD._TempBuffer[4 * cD + 3] = 0;
        this.updateUniform(DD, iD._TempBuffer, 8)
      }
      _updateFloatForEffect(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(DD + cD, CD)
      }
      _updateFloatForUniform(DD, CD) {
        iD._TempBuffer[0] = CD, this.updateUniform(DD, iD._TempBuffer, 1)
      }
      _updateFloat2ForEffect(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(DD + ID, CD, cD)
      }
      _updateFloat2ForUniform(DD, CD, cD) {
        iD._TempBuffer[0] = CD, iD._TempBuffer[1] = cD, this.updateUniform(DD, iD._TempBuffer, 2)
      }
      _updateFloat3ForEffect(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(DD + pD, CD, cD, ID)
      }
      _updateFloat3ForUniform(DD, CD, cD, ID) {
        iD._TempBuffer[0] = CD, iD._TempBuffer[1] = cD, iD._TempBuffer[2] = ID, this.updateUniform(DD, iD._TempBuffer, 3)
      }
      _updateFloat4ForEffect(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(DD + iD, CD, cD, ID, pD)
      }
      _updateFloat4ForUniform(DD, CD, cD, ID, pD) {
        iD._TempBuffer[0] = CD, iD._TempBuffer[1] = cD, iD._TempBuffer[2] = ID, iD._TempBuffer[3] = pD, this.updateUniform(DD, iD._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[DD]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(DD + cD, CD);
            break;
          case 3:
            this._currentEffect.setFloatArray3(DD + cD, CD);
            break;
          case 4:
            this._currentEffect.setFloatArray4(DD + cD, CD);
            break;
          default:
            this._currentEffect.setFloatArray(DD + cD, CD)
        }
      }
      _updateFloatArrayForUniform(DD, CD) {
        this.updateUniformArray(DD, CD, CD.length)
      }
      _updateArrayForEffect(DD, CD) {
        this._currentEffect.setArray(DD, CD)
      }
      _updateArrayForUniform(DD, CD) {
        this.updateUniformArray(DD, CD, CD.length)
      }
      _updateIntArrayForEffect(DD, CD) {
        this._currentEffect.setIntArray(DD, CD)
      }
      _updateIntArrayForUniform(DD, CD) {
        iD._TempBufferInt32View.set(CD), this.updateUniformArray(DD, iD._TempBuffer, CD.length)
      }
      _updateUIntArrayForEffect(DD, CD) {
        this._currentEffect.setUIntArray(DD, CD)
      }
      _updateUIntArrayForUniform(DD, CD) {
        iD._TempBufferUInt32View.set(CD), this.updateUniformArray(DD, iD._TempBuffer, CD.length)
      }
      _updateMatrixForEffect(DD, CD) {
        this._currentEffect.setMatrix(DD, CD)
      }
      _updateMatrixForUniform(DD, CD) {
        this._cacheMatrix(DD, CD) && this.updateUniform(DD, CD.XcD(), 16)
      }
      _updateMatricesForEffect(DD, CD) {
        this._currentEffect.setMatrices(DD, CD)
      }
      _updateMatricesForUniform(DD, CD) {
        this.updateUniform(DD, CD, CD.length)
      }
      _updateVector3ForEffect(DD, CD) {
        this._currentEffect.setVector3(DD, CD)
      }
      _updateVector3ForUniform(DD, CD) {
        iD._TempBuffer[0] = CD.x, iD._TempBuffer[1] = CD.y, iD._TempBuffer[2] = CD.z, this.updateUniform(DD, iD._TempBuffer, 3)
      }
      _updateVector4ForEffect(DD, CD) {
        this._currentEffect.setVector4(DD, CD)
      }
      _updateVector4ForUniform(DD, CD) {
        iD._TempBuffer[0] = CD.x, iD._TempBuffer[1] = CD.y, iD._TempBuffer[2] = CD.z, iD._TempBuffer[3] = CD.w, this.updateUniform(DD, iD._TempBuffer, 4)
      }
      _updateColor3ForEffect(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(DD + cD, CD)
      }
      _updateColor3ForUniform(DD, CD) {
        iD._TempBuffer[0] = CD.r, iD._TempBuffer[1] = CD.g, iD._TempBuffer[2] = CD.b, this.updateUniform(DD, iD._TempBuffer, 3)
      }
      _updateColor4ForEffect(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(DD + ID, CD, cD)
      }
      _updateDirectColor4ForEffect(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(DD + cD, CD)
      }
      _updateColor4ForUniform(DD, CD, cD) {
        iD._TempBuffer[0] = CD.r, iD._TempBuffer[1] = CD.g, iD._TempBuffer[2] = CD.b, iD._TempBuffer[3] = cD, this.updateUniform(DD, iD._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(DD, CD) {
        iD._TempBuffer[0] = CD.r, iD._TempBuffer[1] = CD.g, iD._TempBuffer[2] = CD.b, iD._TempBuffer[3] = CD.a, this.updateUniform(DD, iD._TempBuffer, 4)
      }
      _updateIntForEffect(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(DD + cD, CD)
      }
      _updateIntForUniform(DD, CD) {
        iD._TempBufferInt32View[0] = CD, this.updateUniform(DD, iD._TempBuffer, 1)
      }
      _updateInt2ForEffect(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(DD + ID, CD, cD)
      }
      _updateInt2ForUniform(DD, CD, cD) {
        iD._TempBufferInt32View[0] = CD, iD._TempBufferInt32View[1] = cD, this.updateUniform(DD, iD._TempBuffer, 2)
      }
      _updateInt3ForEffect(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(DD + pD, CD, cD, ID)
      }
      _updateInt3ForUniform(DD, CD, cD, ID) {
        iD._TempBufferInt32View[0] = CD, iD._TempBufferInt32View[1] = cD, iD._TempBufferInt32View[2] = ID, this.updateUniform(DD, iD._TempBuffer, 3)
      }
      _updateInt4ForEffect(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(DD + iD, CD, cD, ID, pD)
      }
      _updateInt4ForUniform(DD, CD, cD, ID, pD) {
        iD._TempBufferInt32View[0] = CD, iD._TempBufferInt32View[1] = cD, iD._TempBufferInt32View[2] = ID, iD._TempBufferInt32View[3] = pD, this.updateUniform(DD, iD._TempBuffer, 4)
      }
      _updateUIntForEffect(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(DD + cD, CD)
      }
      _updateUIntForUniform(DD, CD) {
        iD._TempBufferUInt32View[0] = CD, this.updateUniform(DD, iD._TempBuffer, 1)
      }
      _updateUInt2ForEffect(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(DD + ID, CD, cD)
      }
      _updateUInt2ForUniform(DD, CD, cD) {
        iD._TempBufferUInt32View[0] = CD, iD._TempBufferUInt32View[1] = cD, this.updateUniform(DD, iD._TempBuffer, 2)
      }
      _updateUInt3ForEffect(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(DD + pD, CD, cD, ID)
      }
      _updateUInt3ForUniform(DD, CD, cD, ID) {
        iD._TempBufferUInt32View[0] = CD, iD._TempBufferUInt32View[1] = cD, iD._TempBufferUInt32View[2] = ID, this.updateUniform(DD, iD._TempBuffer, 3)
      }
      _updateUInt4ForEffect(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(DD + iD, CD, cD, ID, pD)
      }
      _updateUInt4ForUniform(DD, CD, cD, ID, pD) {
        iD._TempBufferUInt32View[0] = CD, iD._TempBufferUInt32View[1] = cD, iD._TempBufferUInt32View[2] = ID, iD._TempBufferUInt32View[3] = pD, this.updateUniform(DD, iD._TempBuffer, 4)
      }
      setTexture(DD, CD) {
        this._currentEffect.setTexture(DD, CD)
      }
      setTextureArray(DD, CD) {
        this._currentEffect.setTextureArray(DD, CD)
      }
      bindTexture(DD, CD) {
        this._currentEffect._bindTexture(DD, CD)
      }
      updateUniformDirectly(DD, CD) {
        this.updateUniform(DD, CD, CD.length), this.update()
      }
      bindToEffect(DD, CD) {
        this._currentEffect = DD, this._currentEffectName = CD
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(DD) {
        if (!this._buffers) return this._buffer === DD;
        for (let CD = 0; CD < this._buffers.length; ++CD) {
          if (this._buffers[CD][0] === DD) return this._bufferIndex = CD, this._buffer = DD, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[CD][1] && (this._bufferData.set(this._buffers[CD][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(DD) {
        return void 0 !== this._uniformLocations[DD]
      }
      dispose() {
        if (this._noUBO) return;
        const DD = this._engine._uniformBuffers,
          CD = DD.indexOf(this);
        if (-1 !== CD && (DD[CD] = DD[DD.length - 1], DD.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let DD = 0; DD < this._buffers.length; ++DD) {
            const CD = this._buffers[DD][0];
            this._engine._releaseBuffer(CD)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    iD._MAX_UNIFORM_SIZE = 256, iD._TempBuffer = new Float32Array(iD._MAX_UNIFORM_SIZE), iD._TempBufferInt32View = new Int32Array(iD._TempBuffer.buffer), iD._TempBufferUInt32View = new Uint32Array(iD._TempBuffer.buffer)
  },
  39071: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD
    });
    var ID = cD(39076);
    class pD extends ID.e {
      constructor(DD) {
        super(), this._buffer = DD
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  39161: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => QD,
      f: () => wD
    });
    const ID = "__bjs_serializable__",
      pD = new WeakMap;

    function iD(DD, CD) {
      return Object.prototype.hasOwnProperty.call(DD, CD)
    }
    const fD = function() {
      let DD = Symbol.metadata;
      return DD || (DD = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: DD
      })), DD
    }();

    function bD(DD) {
      return "function" === typeof DD ? DD : DD?.constructor
    }

    function QD(DD) {
      if (!DD) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(fD)}) polyfill must run before decorated classes are evaluated.`);
      return iD(DD, ID) || (DD[ID] = {}), DD[ID]
    }

    function wD(DD) {
      const CD = bD(DD),
        cD = CD ? CD[fD] : void 0;
      if (!cD) return {};
      const QD = pD.get(cD);
      if (QD) return QD;
      const wD = {},
        SD = [];
      let BD = cD;
      for (; BD;) SD.push(BD), BD = Object.getPrototypeOf(BD);
      for (const pD of SD)
        if (iD(pD, ID)) {
          const DD = pD[ID];
          for (const CD in DD) wD[CD] = DD[CD]
        } return pD.set(cD, wD), wD
    }
  },
  39156: (DD, CD, cD) => {
    cD.d(CD, {
      C: () => BD,
      G: () => fD,
      b: () => gD,
      c: () => iD,
      g: () => ND,
      j: () => MD,
      l: () => QD,
      m: () => tD,
      o: () => wD,
      p: () => oD,
      s: () => yD,
      t: () => ZD,
      w: () => bD,
      y: () => SD
    });
    var ID = cD(39161);

    function pD(DD, CD) {
      return (cD, pD) => {
        if (!pD.metadata) return;
        const iD = String(pD.name),
          fD = (0, ID.c)(pD.metadata);
        fD[iD] || (fD[iD] = {
          type: DD,
          sourceName: CD
        })
      }
    }

    function iD(DD) {
      return function(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (cD, ID) => {
          const pD = CD || "_" + String(ID.name);
          return {
            init(DD) {
              return void 0 === DD && pD in this || (this[pD] = DD), DD
            },
            get() {
              return this[pD]
            },
            set(CD) {
              "function" === typeof this[pD]?.equals && this[pD].equals(CD) || this[pD] !== CD && (this[pD] = CD, this[DD]())
            }
          }
        }
      }(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function fD(DD) {
      return pD(0, DD)
    }

    function bD(DD) {
      return pD(1, DD)
    }

    function QD(DD) {
      return pD(2, DD)
    }

    function wD(DD) {
      return pD(3, DD)
    }

    function SD(DD) {
      return pD(4, DD)
    }

    function BD(DD) {
      return pD(5, DD)
    }

    function yD(DD) {
      return pD(6, DD)
    }

    function MD(DD) {
      return pD(7, DD)
    }

    function tD(DD) {
      return pD(8, DD)
    }

    function ZD(DD) {
      return pD(10, DD)
    }

    function oD(DD) {
      return pD(12, DD)
    }

    function vD(DD, CD, cD) {
      const ID = String(CD.name);
      let pD = null;
      const iD = function() {
        if (null === pD) {
          pD = DD, "undefined" !== typeof _native && _native[ID] && (pD = cD(_native[ID], DD));
          const fD = this && (CD.static ? this : Object.getPrototypeOf(this));
          fD?.[ID] === iD && (fD[ID] = pD)
        }
        for (var fD = arguments.length, bD = new Array(fD), QD = 0; QD < fD; QD++) bD[QD] = arguments[QD];
        return pD.apply(this, bD)
      };
      return iD
    }

    function ND(DD, CD) {
      return vD(DD, CD, (DD => DD))
    }

    function gD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (cD, ID) => {
        const pD = CD || "_" + String(ID.name);
        return {
          get() {
            return this[pD]?.value
          },
          set(CD) {
            "function" === typeof this[pD]?.value?.equals && this[pD].value.equals(CD) || this[pD].value !== CD && (this[pD].value = CD, this[DD]())
          }
        }
      }
    }
    ND.filter = function(DD) {
      return (CD, cD) => vD(CD, cD, ((CD, cD) => function() {
        for (var ID = arguments.length, pD = new Array(ID), iD = 0; iD < ID; iD++) pD[iD] = arguments[iD];
        return DD(...pD) ? CD(...pD) : cD.apply(this, pD)
      }))
    }
  },
  39174: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => wD
    });
    var ID = cD(39027),
      pD = cD(39176),
      iD = cD(36622),
      fD = cD(36446),
      bD = cD(39161);
    const QD = function(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const iD = DD();
      pD.c && pD.c.HasTags(CD) && pD.c.AddTagsTo(iD, pD.c.GetTags(CD, !0));
      const fD = (0, bD.f)(iD),
        QD = {};
      for (const pD in fD) {
        const DD = fD[pD],
          bD = CD[pD],
          SD = DD.type;
        if (void 0 !== bD && null !== bD && ("uniqueId" !== pD || wD.AllowLoadingUniqueId)) switch (SD) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof bD.slice ? iD[pD] = bD.slice() : iD[pD] = bD;
            break;
          case 1:
            ID.cloneTexturesOnlyOnce && QD[bD.uniqueId] ? iD[pD] = QD[bD.uniqueId] : (iD[pD] = cD || bD.isRenderTarget ? bD : bD.clone(), QD[bD.uniqueId] = iD[pD]);
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
            iD[pD] = cD ? bD : bD.clone()
        }
      }
      return iD
    };
    class wD {
      static AppendSerializedAnimations(DD, CD) {
        if (DD.animations) {
          CD.animations = [];
          for (let cD = 0; cD < DD.animations.length; cD++) {
            const ID = DD.animations[cD];
            CD.animations.push(ID.serialize())
          }
        }
      }
      static Serialize(DD, CD) {
        CD || (CD = {}), pD.c && (CD.tags = pD.c.GetTags(DD));
        const cD = (0, bD.f)(DD);
        for (const ID in cD) {
          const pD = cD[ID],
            iD = pD.sourceName || ID,
            fD = pD.type,
            bD = DD[ID];
          if (void 0 !== bD && null !== bD && ("uniqueId" !== ID || wD.AllowLoadingUniqueId)) switch (fD) {
            case 0:
              Array.isArray(bD) ? CD[iD] = bD.slice() : CD[iD] = bD;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              CD[iD] = bD.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              CD[iD] = bD.XcD();
              break;
            case 6:
            case 11:
              CD[iD] = bD.id
          }
        }
        return CD
      }
      static ParseProperties(DD, CD, cD, ID) {
        ID || (ID = "");
        const pD = (0, bD.f)(CD);
        for (const bD in pD) {
          const QD = pD[bD],
            SD = DD[QD.sourceName || bD],
            BD = QD.type;
          if (void 0 !== SD && null !== SD && ("uniqueId" !== bD || wD.AllowLoadingUniqueId)) {
            const DD = CD;
            switch (BD) {
              case 0:
                DD[bD] = SD;
                break;
              case 1:
                cD && (DD[bD] = wD._TextureParser(SD, cD, ID));
                break;
              case 2:
                DD[bD] = iD.d.FromArray(SD);
                break;
              case 3:
                DD[bD] = wD._FresnelParametersParser(SD);
                break;
              case 4:
                DD[bD] = fD.n.FromArray(SD);
                break;
              case 5:
                DD[bD] = fD.p.FromArray(SD);
                break;
              case 6:
                cD && (DD[bD] = cD.getLastMeshById(SD));
                break;
              case 7:
                DD[bD] = wD._ColorCurvesParser(SD);
                break;
              case 8:
                DD[bD] = iD.e.FromArray(SD);
                break;
              case 9:
                DD[bD] = wD._ImageProcessingConfigurationParser(SD);
                break;
              case 10:
                DD[bD] = fD.h.FromArray(SD);
                break;
              case 11:
                cD && (DD[bD] = cD.getCameraById(SD));
                break;
              case 12:
                DD[bD] = fD.d.FromArray(SD);
                break;
              case 13:
                DD[bD] = fD.s.FromArray(SD)
            }
          }
        }
      }
      static Parse(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const iD = DD();
        return pD.c && pD.c.AddTagsTo(iD, CD.tags), wD.ParseProperties(CD, iD, cD, ID), iD
      }
      static Clone(DD, CD) {
        return QD(DD, CD, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(DD, CD) {
        return QD(DD, CD, !0)
      }
    }
    wD.AllowLoadingUniqueId = !1, wD._ImageProcessingConfigurationParser = DD => {
      throw (0, ID.m)("ImageProcessingConfiguration")
    }, wD._FresnelParametersParser = DD => {
      throw (0, ID.m)("FresnelParameters")
    }, wD._ColorCurvesParser = DD => {
      throw (0, ID.m)("ColorCurves")
    }, wD._TextureParser = (DD, CD, cD) => {
      throw (0, ID.m)("Texture")
    }
  },
  39104: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    var ID = cD(39054);
    class pD {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = pD.Enabled, this._lastSecValueCount++
      }
      addCount(DD, CD) {
        pD.Enabled && (this._current += DD, this._hasCurrentValue = !0, CD && this._fetchResult())
      }
      beginMonitoring() {
        pD.Enabled && (this._startMonitoringTime = ID.b.Now)
      }
      endMonitoring() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!pD.Enabled) return;
        DD && this.fetchNewFrame();
        const CD = ID.b.Now;
        this._current = CD - this._startMonitoringTime, this._hasCurrentValue = !0, DD && this._fetchResult()
      }
      Am() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const DD = ID.b.Now;
        DD - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = DD, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    pD.Enabled = !0
  },
  39257: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => pD,
      f: () => ID
    });
    class ID {
      constructor(DD) {
        this.length = 0, this.data = new Array(DD), this._id = ID._GlobalId++
      }
      push(DD) {
        this.data[this.length++] = DD, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(DD) {
        for (let CD = 0; CD < this.length; CD++) DD(this.data[CD])
      }
      sort(DD) {
        this.data.sort(DD)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(DD) {
        if (0 !== DD.length) {
          this.length + DD.length > this.data.length && (this.data.length = 2 * (this.length + DD.length));
          for (let CD = 0; CD < DD.length; CD++) this.data[this.length++] = (DD.data || DD)[CD]
        }
      }
      indexOf(DD) {
        const CD = this.data.indexOf(DD);
        return CD >= this.length ? -1 : CD
      }
      contains(DD) {
        return -1 !== this.indexOf(DD)
      }
    }
    ID._GlobalId = 0;
    class pD extends ID {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(DD) {
        super.push(DD), DD.__smartArrayFlags || (DD.__smartArrayFlags = {}), DD.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(DD) {
        return (!DD.__smartArrayFlags || DD.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(DD), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(DD) {
        if (0 !== DD.length) {
          this.length + DD.length > this.data.length && (this.data.length = 2 * (this.length + DD.length));
          for (let CD = 0; CD < DD.length; CD++) {
            const cD = (DD.data || DD)[CD];
            this.pushNoDuplicate(cD)
          }
        }
      }
    }
  },
  39176: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    class ID {
      static Eval(DD, CD) {
        return "true" === (DD = DD.match(/\([^()]*\)/g) ? DD.replace(/\([^()]*\)/g, (DD => (DD = DD.slice(1, DD.length - 1), ID._HandleParenthesisContent(DD, CD)))) : ID._HandleParenthesisContent(DD, CD)) || "false" !== DD && ID.Eval(DD, CD)
      }
      static _HandleParenthesisContent(DD, CD) {
        let cD;
        CD = CD || (DD => "true" === DD);
        const pD = DD.split("||");
        for (const iD in pD)
          if (Object.prototype.hasOwnProperty.call(pD, iD)) {
            let DD = ID._SimplifyNegation(pD[iD].trim());
            const fD = DD.split("&&");
            if (fD.length > 1)
              for (let pD = 0; pD < fD.length; ++pD) {
                const iD = ID._SimplifyNegation(fD[pD].trim());
                if (cD = "true" !== iD && "false" !== iD ? "!" === iD[0] ? !CD(iD.substring(1)) : CD(iD) : "true" === iD, !cD) {
                  DD = "false";
                  break
                }
              }
            if (cD || "true" === DD) {
              cD = !0;
              break
            }
            cD = "true" !== DD && "false" !== DD ? "!" === DD[0] ? !CD(DD.substring(1)) : CD(DD) : "true" === DD
          } return cD ? "true" : "false"
      }
      static _SimplifyNegation(DD) {
        return "!true" === (DD = (DD = DD.replace(/^[\s!]+/, (DD => (DD = DD.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? DD = "false" : "!false" === DD && (DD = "true"), DD
      }
    }
    class pD {
      static EnableFor(DD) {
        DD._tags = DD._tags || {}, DD.hasTags = () => pD.HasTags(DD), DD.addTags = CD => pD.AddTagsTo(DD, CD), DD.removeTags = CD => pD.RemoveTagsFrom(DD, CD), DD.matchesTagsQuery = CD => pD.MatchesQuery(DD, CD)
      }
      static DisableFor(DD) {
        delete DD._tags, delete DD.hasTags, delete DD.addTags, delete DD.removeTags, delete DD.matchesTagsQuery
      }
      static HasTags(DD) {
        if (!DD._tags) return !1;
        const CD = DD._tags;
        for (const cD in CD)
          if (Object.prototype.hasOwnProperty.call(CD, cD)) return !0;
        return !1
      }
      static GetTags(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!DD._tags) return null;
        if (CD) {
          const CD = [];
          for (const cD in DD._tags) Object.prototype.hasOwnProperty.call(DD._tags, cD) && !0 === DD._tags[cD] && CD.push(cD);
          return CD.join(" ")
        }
        return DD._tags
      }
      static AddTagsTo(DD, CD) {
        if (!CD) return;
        if ("string" !== typeof CD) return;
        const cD = CD.split(" ");
        for (const ID of cD) pD._AddTagTo(DD, ID)
      }
      static _AddTagTo(DD, CD) {
        "" !== (CD = CD.trim()) && "true" !== CD && "false" !== CD && (CD.match(/[\s]/) || CD.match(/^([!]|([|]|[&]){2})/) || (pD.EnableFor(DD), DD._tags[CD] = !0))
      }
      static RemoveTagsFrom(DD, CD) {
        if (!pD.HasTags(DD)) return;
        const cD = CD.split(" ");
        for (const ID in cD) pD._RemoveTagFrom(DD, cD[ID])
      }
      static _RemoveTagFrom(DD, CD) {
        delete DD._tags[CD]
      }
      static MatchesQuery(DD, CD) {
        return void 0 === CD || ("" === CD ? pD.HasTags(DD) : ID.Eval(CD, (CD => pD.HasTags(DD) && DD._tags[CD])))
      }
    }
  },
  39294: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD
    });
    var ID = cD(39286),
      pD = cD(36473);
    class iD {
      constructor(DD) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new pD.c, this._scene = DD
      }
      _prepareBuffers() {
        if (this._vertexBuffers[ID.k.PositionKind]) return;
        const DD = [];
        DD.push(1, 1), DD.push(-1, 1), DD.push(-1, -1), DD.push(1, -1), this._vertexBuffers[ID.k.PositionKind] = new ID.k(this._scene.DZ(), DD, ID.k.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const DD = [];
        DD.push(0), DD.push(1), DD.push(2), DD.push(0), DD.push(2), DD.push(3), this._indexBuffer = this._scene.DZ().createIndexBuffer(DD)
      }
      _getActivePostProcesses(DD) {
        const CD = this._activePostProcesses;
        CD.length = 0;
        for (let cD = 0; cD < DD.length; cD++) {
          const ID = DD[cD];
          ID && CD.push(ID)
        }
        return CD
      }
      _rebuild() {
        const DD = this._vertexBuffers[ID.k.PositionKind];
        DD && (DD._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const cD = this._scene.activeCamera;
        return !!cD && (CD = CD || this._getActivePostProcesses(cD._postProcesses), !(!CD || 0 === CD.length || !this._scene.postProcessesEnabled) && (CD[0].activate(cD, DD, null !== CD && void 0 !== CD), !0))
      }
      directRender(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          iD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          fD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : DD.length;
        const bD = this._scene.DZ();
        for (let QD = 0; QD < fD; QD++) {
          QD < DD.length - 1 ? DD[QD + 1].activate(this._scene.activeCamera || this._scene, CD?.texture) : (CD ? bD.bindFramebuffer(CD, ID, void 0, void 0, cD, pD) : iD || bD.restoreDefaultFramebuffer(), bD._debugInsertMarker?.(`post process ${DD[QD].name} output`));
          const fD = DD[QD],
            wD = fD.apply();
          wD && (fD.onBeforeRenderObservable.notifyObservers(wD), this._prepareBuffers(), bD.bindBuffers(this._vertexBuffers, this._indexBuffer, wD), bD.drawElementsType(0, 0, 6), fD.onAfterRenderObservable.notifyObservers(wD))
        }
        bD.setDepthBuffer(!0), bD.setDepthWrite(!0)
      }
      _finalizeFrame(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const iD = this._scene.activeCamera;
        if (!iD) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (ID = ID || this._getActivePostProcesses(iD._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const fD = this._scene.DZ();
        for (let bD = 0, QD = ID.length; bD < QD; bD++) {
          const wD = ID[bD];
          if (bD < QD - 1 ? wD._outputTexture = ID[bD + 1].activate(iD, CD?.texture) : (CD ? (fD.bindFramebuffer(CD, cD, void 0, void 0, pD), wD._outputTexture = CD) : (fD.restoreDefaultFramebuffer(), wD._outputTexture = null), fD._debugInsertMarker?.(`post process ${ID[bD].name} output`)), DD) break;
          const SD = wD.apply();
          SD && (wD.onBeforeRenderObservable.notifyObservers(SD), this._prepareBuffers(), fD.bindBuffers(this._vertexBuffers, this._indexBuffer, SD), fD.drawElementsType(0, 0, 6), wD.onAfterRenderObservable.notifyObservers(SD))
        }
        fD.setDepthBuffer(!0), fD.setDepthWrite(!0), fD.setAlphaMode(0)
      }
      dispose() {
        const DD = this._vertexBuffers[ID.k.PositionKind];
        DD && (DD.dispose(), this._vertexBuffers[ID.k.PositionKind] = null), this._indexBuffer && (this._scene.DZ()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  39308: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD
    });
    var ID = cD(39257),
      pD = cD(36446);
    class iD {
      set opaqueSortCompareFn(DD) {
        this._opaqueSortCompareFn = DD || iD.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(DD) {
        this._alphaTestSortCompareFn = DD || iD.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(DD) {
        this._transparentSortCompareFn = DD || iD.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          iD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = DD, this._opaqueSubMeshes = new ID.f(256), this._transparentSubMeshes = new ID.f(256), this._alphaTestSubMeshes = new ID.f(256), this._depthOnlySubMeshes = new ID.f(256), this._particleSystems = new ID.f(256), this._spriteManagers = new ID.f(256), this._empty = !0, this._edgesRenderers = new ID.e(16), this.disableDepthPrePass = !1, this._scene = CD, this.opaqueSortCompareFn = cD, this.alphaTestSortCompareFn = pD, this.transparentSortCompareFn = iD
      }
      render(DD, CD, cD, ID) {
        let pD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          iD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          fD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          bD = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          QD = arguments.length > 8 ? arguments[8] : void 0;
        if (DD) return void DD(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const wD = this._scene.DZ();
        pD && 0 !== this._depthOnlySubMeshes.length && (wD.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), wD.setColorWrite(!0)), iD && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), fD && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const SD = wD.getStencilBuffer();
        if (wD.setStencilBuffer(!1), CD && this._renderSprites(), cD && this._renderParticles(ID), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), bD && (QD || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (wD.setStencilBuffer(SD), QD) QD(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const DD = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            DD.length && this._renderTransparent(DD)
          } else this._renderTransparent(this._transparentSubMeshes);
          wD.setAlphaMode(0)
        }
        if (wD.setStencilBuffer(!1), iD && this._edgesRenderers.length) {
          for (let DD = 0; DD < this._edgesRenderers.length; DD++) this._edgesRenderers.data[DD].render();
          wD.setAlphaMode(0)
        }
        wD.setStencilBuffer(SD)
      }
      _renderOpaqueSorted(DD) {
        iD._RenderSorted(DD, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(DD) {
        iD._RenderSorted(DD, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(DD) {
        iD._RenderSorted(DD, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(DD, CD, cD, ID, fD) {
        let bD, QD = 0;
        const wD = cD ? cD.globalPosition : iD._ZeroVector;
        if (ID && CD !== iD.PainterSortCompare)
          for (; QD < DD.length; QD++) bD = DD.data[QD], bD._alphaIndex = bD.getMesh().alphaIndex, bD._distanceToCamera = pD.p.Distance(bD.VJ().rcD.centerWorld, wD);
        const SD = DD.length === DD.data.length ? DD.data : DD.data.slice(0, DD.length);
        CD && SD.sort(CD);
        const BD = SD[0].getMesh().hq();
        for (QD = 0; QD < SD.length; QD++) {
          if (bD = SD[QD], BD._activeMeshesFrozenButKeepClipping && !bD.isInFrustum(BD._frustumPlanes)) continue;
          let DD = !1;
          if (ID) {
            const CD = bD.iZ();
            if (CD && CD.needDepthPrePass && !fD) {
              DD = !0;
              const cD = CD.hq().DZ();
              cD.setColorWrite(!1), cD.setAlphaMode(0), bD.render(!1), cD.setColorWrite(!0)
            }
          }
          const CD = bD._renderingMesh;
          !DD && CD._renderRunFollower(bD, ID) || bD.render(ID)
        }
      }
      static defaultTransparentSortCompare(DD, CD) {
        return DD._alphaIndex > CD._alphaIndex ? 1 : DD._alphaIndex < CD._alphaIndex ? -1 : iD.backToFrontSortCompare(DD, CD)
      }
      static backToFrontSortCompare(DD, CD) {
        return DD._distanceToCamera < CD._distanceToCamera ? 1 : DD._distanceToCamera > CD._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(DD, CD) {
        return DD._distanceToCamera < CD._distanceToCamera ? -1 : DD._distanceToCamera > CD._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(DD, CD) {
        const cD = DD.getMesh(),
          ID = CD.getMesh();
        return cD.material && ID.material ? cD.material.uniqueId - ID.material.uniqueId : cD.uniqueId - ID.uniqueId
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
      dispatch(DD, CD, cD) {
        void 0 === CD && (CD = DD.getMesh()), void 0 === cD && (cD = DD.iZ()), null !== cD && void 0 !== cD && (cD.needAlphaBlendingForMesh(CD) ? this._transparentSubMeshes.push(DD) : cD.needAlphaTestingForMesh(CD) ? (cD.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(DD), this._alphaTestSubMeshes.push(DD)) : (cD.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(DD), this._opaqueSubMeshes.push(DD)), CD._renderingGroup = this, CD._edgesRenderer && CD.isEnabled() && CD.isVisible && CD._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(CD._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(DD) {
        this._spriteManagers.push(DD), this._empty = !1
      }
      dispatchParticles(DD) {
        this._particleSystems.push(DD), this._empty = !1
      }
      _renderParticles(DD) {
        if (0 === this._particleSystems.length) return;
        const CD = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let cD = 0; cD < this._particleSystems.length; cD++) {
          const ID = this._particleSystems.data[cD];
          if (0 === (CD && CD.layerMask & ID.layerMask)) continue;
          const pD = ID.emitter;
          pD.position && DD && -1 === DD.indexOf(pD) || this._scene._activeParticles.addCount(ID.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const DD = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let CD = 0; CD < this._spriteManagers.length; CD++) {
          const cD = this._spriteManagers.data[CD];
          0 !== (DD && DD.layerMask & cD.layerMask) && cD.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    iD._ZeroVector = pD.p.Zero()
  },
  39303: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD
    });
    var ID = cD(39308);
    class pD {}
    class iD {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(DD) {
        this._disableDepthPrePass = DD;
        for (const CD of this._renderingGroups) CD.disableDepthPrePass = DD
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(DD) {
        DD !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = DD, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const DD of this._scene.meshes)
          if (DD.IH)
            for (const CD of DD.IH) CD._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const DD of this._scene.spriteManagers) DD._wasDispatched = !1;
        for (const DD of this._scene.iH) DD._wasDispatched = !1
      }
      constructor(DD) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new pD, this._maintainStateBetweenFrames = !1, this._scene = DD;
        for (let CD = iD.MIN_RENDERINGGROUPS; CD < iD.MAX_RENDERINGGROUPS; CD++) this._autoClearDepthStencil[CD] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(DD) {
        const CD = DD || 0;
        return this._prepareRenderingGroup(CD), this._renderingGroups[CD]
      }
      _clearDepthStencilBuffer() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.DZ().clear(null, !1, DD, CD), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(DD, CD, cD, ID) {
        let pD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          fD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          bD = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          QD = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          wD = arguments.length > 8 ? arguments[8] : void 0,
          SD = arguments.length > 9 ? arguments[9] : void 0;
        const BD = this._renderingGroupInfo;
        BD.wo = this._scene, BD.camera = this._scene.activeCamera, BD.renderingManager = this;
        const yD = SD ?? this._scene.spriteManagers;
        if (yD && ID)
          for (let iD = 0; iD < yD.length; iD++) {
            const DD = yD[iD];
            this.dispatchSprites(DD)
          }
        for (let MD = iD.MIN_RENDERINGGROUPS; MD < iD.MAX_RENDERINGGROUPS; MD++) {
          this._depthStencilBufferAlreadyCleaned = MD === iD.MIN_RENDERINGGROUPS;
          const SD = this._renderingGroups[MD];
          if (!SD || SD._empty) continue;
          const yD = 1 << MD;
          if (BD.renderingGroupId = MD, this._scene.onBeforeRenderingGroupObservable.notifyObservers(BD, yD), iD.AUTOCLEAR) {
            const DD = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(MD) : this._autoClearDepthStencil[MD];
            DD && DD.autoClear && this._clearDepthStencilBuffer(DD.depth, DD.stencil)
          }
          for (let DD = 0, CD = this._scene._beforeRenderingGroupDrawStage; DD < CD.length; DD++) {
            CD[DD].action(MD)
          }
          SD.render(DD, ID, cD, CD, pD, fD, bD, QD, wD);
          for (let DD = 0, CD = this._scene._afterRenderingGroupDrawStage; DD < CD.length; DD++) {
            CD[DD].action(MD)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(BD, yD)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let DD = iD.MIN_RENDERINGGROUPS; DD < iD.MAX_RENDERINGGROUPS; DD++) {
            const CD = this._renderingGroups[DD];
            CD && CD.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let DD = iD.MIN_RENDERINGGROUPS; DD < iD.MAX_RENDERINGGROUPS; DD++) {
            const CD = this._renderingGroups[DD];
            CD && CD.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let DD = iD.MIN_RENDERINGGROUPS; DD < iD.MAX_RENDERINGGROUPS; DD++) {
          const CD = this._renderingGroups[DD];
          CD && CD.dispose()
        }
      }
      _prepareRenderingGroup(DD) {
        void 0 === this._renderingGroups[DD] && (this._renderingGroups[DD] = new ID.b(DD, this._scene, this._customOpaqueSortCompareFn[DD], this._customAlphaTestSortCompareFn[DD], this._customTransparentSortCompareFn[DD]), this._renderingGroups[DD].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(DD) {
        this.maintainStateBetweenFrames && DD._wasDispatched || (DD._wasDispatched = !0, this.getRenderingGroup(DD.renderingGroupId).dispatchSprites(DD))
      }
      dispatchParticles(DD) {
        this.maintainStateBetweenFrames && DD._wasDispatched || (DD._wasDispatched = !0, this.getRenderingGroup(DD.renderingGroupId).dispatchParticles(DD))
      }
      dispatch(DD, CD, cD) {
        void 0 === CD && (CD = DD.getMesh()), this.maintainStateBetweenFrames && DD._wasDispatched || (DD._wasDispatched = !0, this.getRenderingGroup(CD.renderingGroupId).dispatch(DD, CD, cD))
      }
      setRenderingOrder(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[DD] = CD, this._customAlphaTestSortCompareFn[DD] = cD, this._customTransparentSortCompareFn[DD] = ID, this._renderingGroups[DD]) {
          const CD = this._renderingGroups[DD];
          CD.opaqueSortCompareFn = this._customOpaqueSortCompareFn[DD], CD.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[DD], CD.transparentSortCompareFn = this._customTransparentSortCompareFn[DD]
        }
      }
      setRenderingAutoClearDepthStencil(DD, CD) {
        let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          ID = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[DD] = {
          autoClear: CD,
          depth: cD,
          stencil: ID
        }
      }
      getAutoClearDepthStencilSetup(DD) {
        return this._autoClearDepthStencil[DD]
      }
    }
    iD.MAX_RENDERINGGROUPS = 4, iD.MIN_RENDERINGGROUPS = 0, iD.AUTOCLEAR = !0
  },
  39056: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID
    });
    class ID {
      constructor(DD) {
        this._supportBlendParametersPerTarget = DD, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(DD) {
        this.setAlphaBlend(DD)
      }
      setAlphaBlend(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[CD] !== DD && (DD ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[CD] = DD, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(DD, CD, cD, ID) {
        this._blendConstants[0] === DD && this._blendConstants[1] === CD && this._blendConstants[2] === cD && this._blendConstants[3] === ID || (this._blendConstants[0] = DD, this._blendConstants[1] = CD, this._blendConstants[2] = cD, this._blendConstants[3] = ID, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(DD, CD, cD, ID) {
        const pD = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[pD + 0] === DD && this._blendFunctionParameters[pD + 1] === CD && this._blendFunctionParameters[pD + 2] === cD && this._blendFunctionParameters[pD + 3] === ID || (this._blendFunctionParameters[pD + 0] = DD, this._blendFunctionParameters[pD + 1] = CD, this._blendFunctionParameters[pD + 2] = cD, this._blendFunctionParameters[pD + 3] = ID, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(DD, CD) {
        const cD = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[cD + 0] === DD && this._blendEquationParameters[cD + 1] === CD || (this._blendEquationParameters[cD + 0] = DD, this._blendEquationParameters[cD + 1] = CD, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== CD && (this._numTargets = CD, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== cD && (this._blendDisabledTargetsMask = cD, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (DD.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === CD || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (CD > 1 && 0 !== cD && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & cD) ? DD.enable(DD.BLEND) : DD.disable(DD.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (DD.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (DD.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const ID = DD;
        if (this._isAlphaBlendDirty) {
          for (let pD = 0; pD < CD; pD++) {
            const CD = pD < this._numTargetEnabled ? pD : 0;
            this._alphaBlend[CD] && 0 === (cD & 1 << pD) ? ID.enableIndexed(DD.BLEND, pD) : ID.disableIndexed(DD.BLEND, pD)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let DD = 0; DD < CD; DD++) {
            const CD = DD < this._numTargetEnabled ? 4 * DD : 0;
            ID.blendFuncSeparateIndexed(DD, this._blendFunctionParameters[CD + 0], this._blendFunctionParameters[CD + 1], this._blendFunctionParameters[CD + 2], this._blendFunctionParameters[CD + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let DD = 0; DD < CD; DD++) {
            const CD = DD < this._numTargetEnabled ? 2 * DD : 0;
            ID.blendEquationSeparateIndexed(DD, this._blendEquationParameters[CD + 0], this._blendEquationParameters[CD + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(DD, CD) {
        let cD = 32774;
        switch (DD) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, CD);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, CD);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, CD);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, CD);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, CD);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, CD);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, CD);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, CD);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, CD);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, CD);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, CD);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, CD);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, CD);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, CD);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, CD);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, CD);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, CD), cD = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, CD), cD = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, CD);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, CD)
        }
        this.setAlphaEquationParameters(cD, cD, CD)
      }
    }
  },
  39339: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ID
    });
    class ID {}
    ID._IsPickingAvailable = !1
  },
  39239: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => bc,
      e: () => ic
    });
    var ID = cD(39245),
      pD = cD(39039),
      iD = cD(39054),
      fD = cD(36473),
      bD = cD(39257);
    class QD {
      constructor() {
        this._count = 0, this._data = {}
      }
      YCD(DD) {
        this.clear(), DD.forEach(((DD, CD) => this.add(DD, CD)))
      }
      get(DD) {
        const CD = this._data[DD];
        if (void 0 !== CD) return CD
      }
      getOrAddWithFactory(DD, CD) {
        let cD = this.get(DD);
        return void 0 !== cD || (cD = CD(DD), cD && this.add(DD, cD)), cD
      }
      getOrAdd(DD, CD) {
        const cD = this.get(DD);
        return void 0 !== cD ? cD : (this.add(DD, CD), CD)
      }
      contains(DD) {
        return void 0 !== this._data[DD]
      }
      add(DD, CD) {
        return void 0 === this._data[DD] && (this._data[DD] = CD, ++this._count, !0)
      }
      set(DD, CD) {
        return void 0 !== this._data[DD] && (this._data[DD] = CD, !0)
      }
      getAndRemove(DD) {
        const CD = this.get(DD);
        return void 0 !== CD ? (delete this._data[DD], --this._count, CD) : null
      }
      remove(DD) {
        return !!this.contains(DD) && (delete this._data[DD], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(DD) {
        for (const CD in this._data) {
          DD(CD, this._data[CD])
        }
      }
      first(DD) {
        for (const CD in this._data) {
          const cD = DD(CD, this._data[CD]);
          if (cD) return cD
        }
        return null
      }
    }
    var wD = cD(39176),
      SD = cD(36446),
      BD = cD(39259),
      yD = cD(39281),
      MD = cD(39284);
    class tD {
      constructor(DD, CD, cD, ID, pD, iD) {
        this.source = DD, this.pointerX = CD, this.pointerY = cD, this.meshUnderPointer = ID, this.sourceEvent = pD, this.additionalData = iD
      }
      static CreateNew(DD, CD, cD) {
        const ID = DD.hq();
        return new tD(DD, ID.pointerX, ID.pointerY, ID.meshUnderPointer || DD, CD, cD)
      }
      static CreateNewFromSprite(DD, CD, cD, ID) {
        return new tD(DD, CD.pointerX, CD.pointerY, CD.meshUnderPointer, cD, ID)
      }
      static CreateNewFromScene(DD, CD) {
        return new tD(null, DD.pointerX, DD.pointerY, DD.meshUnderPointer, CD)
      }
      static CreateNewFromPrimitive(DD, CD, cD, ID) {
        return new tD(DD, CD.x, CD.y, null, cD, ID)
      }
    }
    var ZD = cD(39294),
      oD = cD(39296),
      vD = cD(39303),
      ND = cD(39315),
      gD = cD(39010),
      XD = cD(36464),
      mD = cD(39027),
      nD = cD(39319);
    class OD {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const DD in OD.Triggers)
          if (Object.prototype.hasOwnProperty.call(OD.Triggers, DD)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const DD in OD.Triggers)
          if (Object.prototype.hasOwnProperty.call(OD.Triggers, DD)) {
            const CD = parseInt(DD);
            if (CD >= 1 && CD <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(DD) {
        for (const CD in OD.Triggers)
          if (Object.prototype.hasOwnProperty.call(OD.Triggers, CD)) {
            if (parseInt(CD) === DD) return !0
          } return !1
      }
    }
    OD.Triggers = {};
    var PD, HD, UD, xD, qD, JD, KD, aD = cD(39328);
    ! function(DD) {
      DD[DD.Generic = 0] = "Generic", DD[DD.Keyboard = 1] = "Keyboard", DD[DD.Mouse = 2] = "Mouse", DD[DD.Touch = 3] = "Touch", DD[DD.DualShock = 4] = "DualShock", DD[DD.Xbox = 5] = "Xbox", DD[DD.Switch = 6] = "Switch", DD[DD.DualSense = 7] = "DualSense"
    }(PD || (PD = {})),
    function(DD) {
      DD[DD.Horizontal = 0] = "Horizontal", DD[DD.Vertical = 1] = "Vertical", DD[DD.LeftClick = 2] = "LeftClick", DD[DD.MiddleClick = 3] = "MiddleClick", DD[DD.RightClick = 4] = "RightClick", DD[DD.BrowserBack = 5] = "BrowserBack", DD[DD.BrowserForward = 6] = "BrowserForward", DD[DD.MouseWheelX = 7] = "MouseWheelX", DD[DD.MouseWheelY = 8] = "MouseWheelY", DD[DD.MouseWheelZ = 9] = "MouseWheelZ", DD[DD.Move = 12] = "Move"
    }(HD || (HD = {})),
    function(DD) {
      DD[DD.Horizontal = 0] = "Horizontal", DD[DD.Vertical = 1] = "Vertical", DD[DD.LeftClick = 2] = "LeftClick", DD[DD.MiddleClick = 3] = "MiddleClick", DD[DD.RightClick = 4] = "RightClick", DD[DD.BrowserBack = 5] = "BrowserBack", DD[DD.BrowserForward = 6] = "BrowserForward", DD[DD.MouseWheelX = 7] = "MouseWheelX", DD[DD.MouseWheelY = 8] = "MouseWheelY", DD[DD.MouseWheelZ = 9] = "MouseWheelZ", DD[DD.DeltaHorizontal = 10] = "DeltaHorizontal", DD[DD.DeltaVertical = 11] = "DeltaVertical"
    }(UD || (UD = {})),
    function(DD) {
      DD[DD.Cross = 0] = "Cross", DD[DD.Circle = 1] = "Circle", DD[DD.Square = 2] = "Square", DD[DD.Triangle = 3] = "Triangle", DD[DD.L1 = 4] = "L1", DD[DD.R1 = 5] = "R1", DD[DD.L2 = 6] = "L2", DD[DD.R2 = 7] = "R2", DD[DD.Share = 8] = "Share", DD[DD.Options = 9] = "Options", DD[DD.L3 = 10] = "L3", DD[DD.R3 = 11] = "R3", DD[DD.DPadUp = 12] = "DPadUp", DD[DD.DPadDown = 13] = "DPadDown", DD[DD.DPadLeft = 14] = "DPadLeft", DD[DD.DPadRight = 15] = "DPadRight", DD[DD.Home = 16] = "Home", DD[DD.TouchPad = 17] = "TouchPad", DD[DD.LStickXAxis = 18] = "LStickXAxis", DD[DD.LStickYAxis = 19] = "LStickYAxis", DD[DD.RStickXAxis = 20] = "RStickXAxis", DD[DD.RStickYAxis = 21] = "RStickYAxis"
    }(xD || (xD = {})),
    function(DD) {
      DD[DD.Cross = 0] = "Cross", DD[DD.Circle = 1] = "Circle", DD[DD.Square = 2] = "Square", DD[DD.Triangle = 3] = "Triangle", DD[DD.L1 = 4] = "L1", DD[DD.R1 = 5] = "R1", DD[DD.L2 = 6] = "L2", DD[DD.R2 = 7] = "R2", DD[DD.Create = 8] = "Create", DD[DD.Options = 9] = "Options", DD[DD.L3 = 10] = "L3", DD[DD.R3 = 11] = "R3", DD[DD.DPadUp = 12] = "DPadUp", DD[DD.DPadDown = 13] = "DPadDown", DD[DD.DPadLeft = 14] = "DPadLeft", DD[DD.DPadRight = 15] = "DPadRight", DD[DD.Home = 16] = "Home", DD[DD.TouchPad = 17] = "TouchPad", DD[DD.LStickXAxis = 18] = "LStickXAxis", DD[DD.LStickYAxis = 19] = "LStickYAxis", DD[DD.RStickXAxis = 20] = "RStickXAxis", DD[DD.RStickYAxis = 21] = "RStickYAxis"
    }(qD || (qD = {})),
    function(DD) {
      DD[DD.A = 0] = "A", DD[DD.B = 1] = "B", DD[DD.X = 2] = "X", DD[DD.Y = 3] = "Y", DD[DD.LB = 4] = "LB", DD[DD.RB = 5] = "RB", DD[DD.LT = 6] = "LT", DD[DD.RT = 7] = "RT", DD[DD.Back = 8] = "Back", DD[DD.Start = 9] = "Start", DD[DD.LS = 10] = "LS", DD[DD.RS = 11] = "RS", DD[DD.DPadUp = 12] = "DPadUp", DD[DD.DPadDown = 13] = "DPadDown", DD[DD.DPadLeft = 14] = "DPadLeft", DD[DD.DPadRight = 15] = "DPadRight", DD[DD.Home = 16] = "Home", DD[DD.LStickXAxis = 17] = "LStickXAxis", DD[DD.LStickYAxis = 18] = "LStickYAxis", DD[DD.RStickXAxis = 19] = "RStickXAxis", DD[DD.RStickYAxis = 20] = "RStickYAxis"
    }(JD || (JD = {})),
    function(DD) {
      DD[DD.B = 0] = "B", DD[DD.A = 1] = "A", DD[DD.Y = 2] = "Y", DD[DD.X = 3] = "X", DD[DD.L = 4] = "L", DD[DD.R = 5] = "R", DD[DD.ZL = 6] = "ZL", DD[DD.ZR = 7] = "ZR", DD[DD.Minus = 8] = "Minus", DD[DD.Plus = 9] = "Plus", DD[DD.LS = 10] = "LS", DD[DD.RS = 11] = "RS", DD[DD.DPadUp = 12] = "DPadUp", DD[DD.DPadDown = 13] = "DPadDown", DD[DD.DPadLeft = 14] = "DPadLeft", DD[DD.DPadRight = 15] = "DPadRight", DD[DD.Home = 16] = "Home", DD[DD.Capture = 17] = "Capture", DD[DD.LStickXAxis = 18] = "LStickXAxis", DD[DD.LStickYAxis = 19] = "LStickYAxis", DD[DD.RStickXAxis = 20] = "RStickXAxis", DD[DD.RStickYAxis = 21] = "RStickYAxis"
    }(KD || (KD = {}));
    var VD = cD(39334);
    class zD {
      static CreateDeviceEvent(DD, CD, cD, ID, pD, iD, fD) {
        switch (DD) {
          case PD.Keyboard:
            return this._CreateKeyboardEvent(cD, ID, pD, iD);
          case PD.Mouse:
            if (cD === HD.MouseWheelX || cD === HD.MouseWheelY || cD === HD.MouseWheelZ) return this._CreateWheelEvent(DD, CD, cD, ID, pD, iD);
          case PD.Touch:
            return this._CreatePointerEvent(DD, CD, cD, ID, pD, iD, fD);
          default:
            throw `Unable to generate event for device ${PD[DD]}`
        }
      }
      static _CreatePointerEvent(DD, CD, cD, ID, pD, iD, fD) {
        const bD = this._CreateMouseEvent(DD, CD, cD, ID, pD, iD);
        DD === PD.Mouse ? (bD.deviceType = PD.Mouse, bD.pointerId = 1, bD.pointerType = "mouse") : (bD.deviceType = PD.Touch, bD.pointerId = fD ?? CD, bD.pointerType = "touch");
        let QD = 0;
        return QD += pD.pollInput(DD, CD, HD.LeftClick), QD += 2 * pD.pollInput(DD, CD, HD.RightClick), QD += 4 * pD.pollInput(DD, CD, HD.MiddleClick), bD.buttons = QD, cD === HD.Move ? bD.type = "pointermove" : cD >= HD.LeftClick && cD <= HD.RightClick && (bD.type = 1 === ID ? "pointerdown" : "pointerup", bD.button = cD - 2), bD
      }
      static _CreateWheelEvent(DD, CD, cD, ID, pD, iD) {
        const fD = this._CreateMouseEvent(DD, CD, cD, ID, pD, iD);
        switch (fD.pointerId = 1, fD.type = "wheel", fD.deltaMode = VD.c.DOM_DELTA_PIXEL, fD.deltaX = 0, fD.deltaY = 0, fD.deltaZ = 0, cD) {
          case HD.MouseWheelX:
            fD.deltaX = ID;
            break;
          case HD.MouseWheelY:
            fD.deltaY = ID;
            break;
          case HD.MouseWheelZ:
            fD.deltaZ = ID
        }
        return fD
      }
      static _CreateMouseEvent(DD, CD, cD, ID, pD, iD) {
        const fD = this._CreateEvent(iD),
          bD = pD.pollInput(DD, CD, HD.Horizontal),
          QD = pD.pollInput(DD, CD, HD.Vertical);
        return iD ? (fD.movementX = 0, fD.movementY = 0, fD.offsetX = fD.movementX - iD.getBoundingClientRect().x, fD.offsetY = fD.movementY - iD.getBoundingClientRect().y) : (fD.movementX = pD.pollInput(DD, CD, 10), fD.movementY = pD.pollInput(DD, CD, 11), fD.offsetX = 0, fD.offsetY = 0), this._CheckNonCharacterKeys(fD, pD), fD.clientX = bD, fD.clientY = QD, fD.x = bD, fD.y = QD, fD.deviceType = DD, fD.deviceSlot = CD, fD.inputIndex = cD, fD
      }
      static _CreateKeyboardEvent(DD, CD, cD, ID) {
        const pD = this._CreateEvent(ID);
        return this._CheckNonCharacterKeys(pD, cD), pD.deviceType = PD.Keyboard, pD.deviceSlot = 0, pD.inputIndex = DD, pD.type = 1 === CD ? "keydown" : "keyup", pD.key = String.fromCharCode(DD), pD.keyCode = DD, pD
      }
      static _CheckNonCharacterKeys(DD, CD) {
        const cD = CD.isDeviceAvailable(PD.Keyboard),
          ID = cD && 1 === CD.pollInput(PD.Keyboard, 0, 18),
          pD = cD && 1 === CD.pollInput(PD.Keyboard, 0, 17),
          iD = cD && (1 === CD.pollInput(PD.Keyboard, 0, 91) || 1 === CD.pollInput(PD.Keyboard, 0, 92) || 1 === CD.pollInput(PD.Keyboard, 0, 93)),
          fD = cD && 1 === CD.pollInput(PD.Keyboard, 0, 16);
        DD.altKey = ID, DD.ctrlKey = pD, DD.metaKey = iD, DD.shiftKey = fD
      }
      static _CreateEvent(DD) {
        const CD = {
          preventDefault: () => {}
        };
        return CD.target = DD, CD
      }
    }
    class jD {
      constructor(DD, CD, cD) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(DD, CD, ((DD, CD, ID, pD) => {
          const iD = zD.CreateDeviceEvent(DD, CD, ID, pD, this);
          cD(DD, CD, iD)
        })) : this._createDummyNativeInput()
      }
      pollInput(DD, CD, cD) {
        return this._nativeInput.pollInput(DD, CD, cD)
      }
      isDeviceAvailable(DD) {
        return DD === PD.Mouse || DD === PD.Touch
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
    const lD = Object.keys(HD).length / 2;
    class LD {
      constructor(DD, CD, cD, pD) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = ID.g.IsSafari(), this._usingMacOs = (0, gD.i)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = DD => {}, this._keyboardUpEvent = DD => {}, this._keyboardBlurEvent = DD => {}, this._pointerMoveEvent = DD => {}, this._pointerDownEvent = DD => {}, this._pointerUpEvent = DD => {}, this._pointerCancelEvent = DD => {}, this._pointerCancelTouch = DD => {}, this._pointerLeaveEvent = DD => {}, this._pointerWheelEvent = DD => {}, this._pointerBlurEvent = DD => {}, this._pointerMacOsChromeOutEvent = DD => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, gD.i)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, gD.i)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = DD => {}, this._gamepadDisconnectedEvent = DD => {}, this._eventPrefix = ID.g.GetPointerPrefix(DD), this._engine = DD, this._onDeviceConnected = CD, this._onDeviceDisconnected = cD, this._onInputChanged = pD, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(DD, CD, cD) {
        const pD = this._inputs[DD][CD];
        if (!pD) throw `Unable to find device ${PD[DD]}`;
        DD >= PD.DualShock && DD <= PD.DualSense && this._updateDevice(DD, CD, cD);
        const iD = pD[cD];
        if (void 0 === iD) throw `Unable to find input ${cD} for device ${PD[DD]} in slot ${CD}`;
        return cD === HD.Move && ID.g.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), iD
      }
      isDeviceAvailable(DD) {
        return void 0 !== this._inputs[DD]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const DD = this?._engine.getInputElement();
        if (DD && (!this._eventsAttached || this._elementToAttachTo !== DD)) {
          if (this._disableEvents(), this._inputs)
            for (const DD of this._inputs)
              if (DD)
                for (const CD in DD) {
                  const cD = DD[+CD];
                  if (cD)
                    for (let DD = 0; DD < cD.length; DD++) cD[DD] = 0
                }
          this._elementToAttachTo = DD, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const DD = navigator.getGamepads();
          for (const CD of DD) CD && this._addGamePad(CD)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(PD.Mouse, 0, 0, 0)
      }
      _addGamePad(DD) {
        const CD = this._getGamepadDeviceType(DD.id),
          cD = DD.index;
        this._gamepads = this._gamepads || new Array(DD.index + 1), this._registerDevice(CD, cD, DD.buttons.length + DD.axes.length), this._gamepads[cD] = CD
      }
      _addPointerDevice(DD, CD, cD, ID) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(DD, CD, lD);
        const pD = this._inputs[DD][CD];
        pD[0] = cD, pD[1] = ID
      }
      _registerDevice(DD, CD, cD) {
        if (void 0 === CD) throw `Unable to register device ${PD[DD]} to undefined slot.`;
        if (this._inputs[DD] || (this._inputs[DD] = {}), !this._inputs[DD][CD]) {
          const ID = new Array(cD);
          ID.fill(0), this._inputs[DD][CD] = ID, this._onDeviceConnected(DD, CD)
        }
      }
      _unregisterDevice(DD, CD) {
        this._inputs[DD][CD] && (delete this._inputs[DD][CD], this._onDeviceDisconnected(DD, CD))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = DD => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(PD.Keyboard, 0, 255));
          const CD = this._inputs[PD.Keyboard][0];
          if (CD) {
            CD[DD.keyCode] = 1;
            const cD = DD;
            cD.inputIndex = DD.keyCode, this._usingMacOs && DD.metaKey && "Meta" !== DD.key && (this._metaKeys.includes(DD.keyCode) || this._metaKeys.push(DD.keyCode)), this._onInputChanged(PD.Keyboard, 0, cD)
          }
        }, this._keyboardUpEvent = DD => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(PD.Keyboard, 0, 255));
          const CD = this._inputs[PD.Keyboard][0];
          if (CD) {
            CD[DD.keyCode] = 0;
            const cD = DD;
            if (cD.inputIndex = DD.keyCode, this._usingMacOs && "Meta" === DD.key && this._metaKeys.length > 0) {
              for (const DD of this._metaKeys) {
                const cD = zD.CreateDeviceEvent(PD.Keyboard, 0, DD, 0, this, this._elementToAttachTo);
                CD[DD] = 0, this._onInputChanged(PD.Keyboard, 0, cD)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(PD.Keyboard, 0, cD)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const DD = this._inputs[PD.Keyboard][0];
            for (let CD = 0; CD < DD.length; CD++)
              if (0 !== DD[CD]) {
                DD[CD] = 0;
                const cD = zD.CreateDeviceEvent(PD.Keyboard, 0, CD, 0, this, this._elementToAttachTo);
                this._onInputChanged(PD.Keyboard, 0, cD)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, gD.i)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let ID = 0; ID < this._maxTouchPoints; ID++) this._activeTouchIds[ID] = -1;
        this._pointerMoveEvent = DD => {
          const CD = this._getPointerType(DD);
          let cD = CD === PD.Mouse ? 0 : this._activeTouchIds.indexOf(DD.pointerId);
          if (CD === PD.Touch && -1 === cD) {
            if (0 === DD.buttons) return;
            const pD = this._activeTouchIds.indexOf(-1);
            if (!(pD >= 0)) return void ID.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            cD = pD, this._activeTouchIds[pD] = DD.pointerId, this._onDeviceConnected(CD, cD)
          }
          this._inputs[CD] || (this._inputs[CD] = {}), this._inputs[CD][cD] || this._addPointerDevice(CD, cD, DD.clientX, DD.clientY);
          const pD = this._inputs[CD][cD];
          if (pD) {
            const ID = DD;
            ID.inputIndex = HD.Move, pD[HD.Horizontal] = DD.clientX, pD[HD.Vertical] = DD.clientY, CD === PD.Touch && 0 === pD[HD.LeftClick] && (pD[HD.LeftClick] = 1), void 0 === DD.pointerId && (DD.pointerId = this._mouseId), this._onInputChanged(CD, cD, ID), this._usingSafari || -1 === DD.button || (ID.inputIndex = DD.button + 2, pD[DD.button + 2] = pD[DD.button + 2] ? 0 : 1, this._onInputChanged(CD, cD, ID))
          }
        }, this._pointerDownEvent = DD => {
          const CD = this._getPointerType(DD);
          let cD = CD === PD.Mouse ? 0 : DD.pointerId;
          if (CD === PD.Touch) {
            let CD = this._activeTouchIds.indexOf(DD.pointerId);
            if (-1 === CD && (CD = this._activeTouchIds.indexOf(-1)), !(CD >= 0)) return void ID.g.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            cD = CD, this._activeTouchIds[CD] = DD.pointerId
          }
          this._inputs[CD] || (this._inputs[CD] = {}), this._inputs[CD][cD] ? CD === PD.Touch && this._onDeviceConnected(CD, cD) : this._addPointerDevice(CD, cD, DD.clientX, DD.clientY);
          const pD = this._inputs[CD][cD];
          if (pD) {
            const ID = pD[HD.Horizontal],
              fD = pD[HD.Vertical];
            if (CD === PD.Mouse) {
              if (void 0 === DD.pointerId && (DD.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (iD) {}
            } else if (DD.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(DD.pointerId)
            } catch (iD) {}
            pD[HD.Horizontal] = DD.clientX, pD[HD.Vertical] = DD.clientY, pD[DD.button + 2] = 1;
            const bD = DD;
            bD.inputIndex = DD.button + 2, this._onInputChanged(CD, cD, bD), ID === DD.clientX && fD === DD.clientY || (bD.inputIndex = HD.Move, this._onInputChanged(CD, cD, bD))
          }
        }, this._pointerUpEvent = DD => {
          const CD = this._getPointerType(DD),
            cD = CD === PD.Mouse ? 0 : this._activeTouchIds.indexOf(DD.pointerId);
          if (CD === PD.Touch) {
            if (-1 === cD) return;
            this._activeTouchIds[cD] = -1
          }
          const ID = this._inputs[CD]?.[cD];
          let pD = DD.button,
            iD = ID && 0 !== ID[pD + 2];
          if (!iD && this._isUsingFirefox && this._usingMacOs && ID && (pD = 2 === pD ? 0 : 2, iD = 0 !== ID[pD + 2]), iD) {
            const iD = ID[HD.Horizontal],
              fD = ID[HD.Vertical];
            ID[HD.Horizontal] = DD.clientX, ID[HD.Vertical] = DD.clientY, ID[pD + 2] = 0;
            const bD = DD;
            void 0 === DD.pointerId && (DD.pointerId = this._mouseId), iD === DD.clientX && fD === DD.clientY || (bD.inputIndex = HD.Move, this._onInputChanged(CD, cD, bD)), bD.inputIndex = pD + 2, CD === PD.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : DD.pointerId && this._elementToAttachTo.hasPointerCapture?.(DD.pointerId) && this._elementToAttachTo.releasePointerCapture(DD.pointerId), this._onInputChanged(CD, cD, bD), CD === PD.Touch && this._onDeviceDisconnected(CD, cD)
          }
        }, this._pointerCancelTouch = DD => {
          const CD = this._activeTouchIds.indexOf(DD);
          if (-1 === CD) return;
          this._elementToAttachTo.hasPointerCapture?.(DD) && this._elementToAttachTo.releasePointerCapture(DD), this._inputs[PD.Touch][CD][HD.LeftClick] = 0;
          const cD = zD.CreateDeviceEvent(PD.Touch, CD, HD.LeftClick, 0, this, this._elementToAttachTo, DD);
          this._onInputChanged(PD.Touch, CD, cD), this._activeTouchIds[CD] = -1, this._onDeviceDisconnected(PD.Touch, CD)
        }, this._pointerCancelEvent = DD => {
          if ("mouse" === DD.pointerType) {
            const DD = this._inputs[PD.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let CD = HD.LeftClick; CD <= HD.BrowserForward; CD++)
              if (1 === DD[CD]) {
                DD[CD] = 0;
                const cD = zD.CreateDeviceEvent(PD.Mouse, 0, CD, 0, this, this._elementToAttachTo);
                this._onInputChanged(PD.Mouse, 0, cD)
              }
          } else this._pointerCancelTouch(DD.pointerId)
        }, this._pointerLeaveEvent = DD => {
          "pen" === DD.pointerType && this._pointerCancelTouch(DD.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let DD = !1;
        const CD = function() {};
        try {
          const cD = Object.defineProperty({}, "passive", {
            get: function() {
              DD = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", CD, cD), this._elementToAttachTo.removeEventListener("test", CD, cD)
        } catch (cD) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(PD.Mouse)) {
            const DD = this._inputs[PD.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let CD = HD.LeftClick; CD <= HD.BrowserForward; CD++)
              if (1 === DD[CD]) {
                DD[CD] = 0;
                const cD = zD.CreateDeviceEvent(PD.Mouse, 0, CD, 0, this, this._elementToAttachTo);
                this._onInputChanged(PD.Mouse, 0, cD)
              }
          }
          if (this.isDeviceAvailable(PD.Touch)) {
            const DD = this._inputs[PD.Touch];
            for (let CD = 0; CD < this._activeTouchIds.length; CD++) {
              const cD = this._activeTouchIds[CD];
              if (this._elementToAttachTo.hasPointerCapture?.(cD) && this._elementToAttachTo.releasePointerCapture(cD), -1 !== cD && 1 === DD[CD]?.[HD.LeftClick]) {
                DD[CD][HD.LeftClick] = 0;
                const ID = zD.CreateDeviceEvent(PD.Touch, CD, HD.LeftClick, 0, this, this._elementToAttachTo, cD);
                this._onInputChanged(PD.Touch, CD, ID), this._activeTouchIds[CD] = -1, this._onDeviceDisconnected(PD.Touch, CD)
              }
            }
          }
        }, this._pointerWheelEvent = DD => {
          const CD = PD.Mouse;
          this._inputs[CD] || (this._inputs[CD] = []), this._inputs[CD][0] || (this._pointerActive = !0, this._registerDevice(CD, 0, lD));
          const cD = this._inputs[CD][0];
          if (cD) {
            cD[HD.MouseWheelX] = DD.deltaX || 0, cD[HD.MouseWheelY] = DD.deltaY || DD.wheelDelta || 0, cD[HD.MouseWheelZ] = DD.deltaZ || 0;
            const ID = DD;
            void 0 === DD.pointerId && (DD.pointerId = this._mouseId), 0 !== cD[HD.MouseWheelX] && (ID.inputIndex = HD.MouseWheelX, this._onInputChanged(CD, 0, ID)), 0 !== cD[HD.MouseWheelY] && (ID.inputIndex = HD.MouseWheelY, this._onInputChanged(CD, 0, ID)), 0 !== cD[HD.MouseWheelZ] && (ID.inputIndex = HD.MouseWheelZ, this._onInputChanged(CD, 0, ID))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = DD => {
          DD.buttons > 1 && this._pointerCancelEvent(DD)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "leave", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!DD && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(PD.Mouse)) {
            const DD = this._inputs[PD.Mouse][0];
            DD[HD.MouseWheelX] = 0, DD[HD.MouseWheelY] = 0, DD[HD.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = DD => {
          this._addGamePad(DD.gamepad)
        }, this._gamepadDisconnectedEvent = DD => {
          if (this._gamepads) {
            const CD = this._getGamepadDeviceType(DD.gamepad.id),
              cD = DD.gamepad.index;
            this._unregisterDevice(CD, cD), delete this._gamepads[cD]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(DD, CD, cD) {
        const ID = navigator.getGamepads()[CD];
        if (ID && DD === this._gamepads[CD]) {
          const pD = this._inputs[DD][CD];
          cD >= ID.buttons.length ? pD[cD] = ID.axes[cD - ID.buttons.length].valueOf() : pD[cD] = ID.buttons[cD].value
        }
      }
      _getGamepadDeviceType(DD) {
        return -1 !== DD.indexOf("054c") ? -1 !== DD.indexOf("0ce6") ? PD.DualSense : PD.DualShock : -1 !== DD.indexOf("Xbox One") || -1 !== DD.search("Xbox 360") || -1 !== DD.search("xinput") || -1 !== DD.indexOf("045e") && -1 === DD.indexOf("Surface Dock") ? PD.Xbox : -1 !== DD.indexOf("057e") ? PD.Switch : PD.Generic
      }
      _getPointerType(DD) {
        let CD = PD.Mouse;
        return ("touch" === DD.pointerType || "pen" === DD.pointerType || DD.touches) && (CD = PD.Touch), CD
      }
    }
    class TD {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = CD, this.deviceSlot = cD, this.onInputChangedObservable = new fD.c, this._deviceInputSystem = DD
      }
      getInput(DD) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, DD)
      }
    }
    class GD {
      constructor(DD) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = DD => {
          for (let CD = 0; CD < this._devices.length; CD++) {
            const cD = this._devices[CD];
            for (const ID in cD) {
              const cD = +ID;
              DD._addDevice(new TD(this._deviceInputSystem, CD, cD))
            }
          }
          this._registeredManagers.push(DD)
        }, this.unregisterManager = DD => {
          const CD = this._registeredManagers.indexOf(DD);
          CD > -1 && this._registeredManagers.splice(CD, 1)
        };
        const CD = Object.keys(PD).length / 2;
        this._devices = new Array(CD);
        const cD = (DD, CD) => {
            this._devices[DD] || (this._devices[DD] = new Array), this._devices[DD][CD] || (this._devices[DD][CD] = CD);
            for (const cD of this._registeredManagers) {
              const ID = new TD(this._deviceInputSystem, DD, CD);
              cD._addDevice(ID)
            }
          },
          ID = (DD, CD) => {
            this._devices[DD]?.[CD] && delete this._devices[DD][CD];
            for (const cD of this._registeredManagers) cD._removeDevice(DD, CD)
          },
          pD = (DD, CD, cD) => {
            if (cD)
              for (const ID of this._registeredManagers) ID._onInputChanged(DD, CD, cD)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new jD(cD, ID, pD) : this._deviceInputSystem = new LD(DD, cD, ID, pD)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class RD {
      getDeviceSource(DD, CD) {
        if (void 0 === CD) {
          if (void 0 === this._firstDevice[DD]) return null;
          CD = this._firstDevice[DD]
        }
        return this._devices[DD] && void 0 !== this._devices[DD][CD] ? this._devices[DD][CD] : null
      }
      getDeviceSources(DD) {
        return this._devices[DD] ? this._devices[DD].filter((DD => !!DD)) : []
      }
      constructor(DD) {
        const CD = Object.keys(PD).length / 2;
        this._devices = new Array(CD), this._firstDevice = new Array(CD), this._engine = DD, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new GD(DD)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new fD.c((DD => {
          for (const CD of this._devices)
            if (CD)
              for (const cD of CD) cD && this.onDeviceConnectedObservable.notifyObserver(DD, cD)
        })), this.onDeviceDisconnectedObservable = new fD.c, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = DD.Aq.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.Aq.remove(this._onDisposeObserver)
      }
      _addDevice(DD) {
        this._devices[DD.deviceType] || (this._devices[DD.deviceType] = []), this._devices[DD.deviceType][DD.deviceSlot] || (this._devices[DD.deviceType][DD.deviceSlot] = DD, this._updateFirstDevices(DD.deviceType)), this.onDeviceConnectedObservable.notifyObservers(DD)
      }
      _removeDevice(DD, CD) {
        const cD = this._devices[DD]?.[CD];
        this.onDeviceDisconnectedObservable.notifyObservers(cD), this._devices[DD]?.[CD] && delete this._devices[DD][CD], this._updateFirstDevices(DD)
      }
      _onInputChanged(DD, CD, cD) {
        this._devices[DD]?.[CD]?.onInputChangedObservable.notifyObservers(cD)
      }
      _updateFirstDevices(DD) {
        switch (DD) {
          case PD.Keyboard:
          case PD.Mouse:
            this._firstDevice[DD] = 0;
            break;
          case PD.Touch:
          case PD.DualSense:
          case PD.DualShock:
          case PD.Xbox:
          case PD.Switch:
          case PD.Generic: {
            delete this._firstDevice[DD];
            const CD = this._devices[DD];
            if (CD)
              for (let cD = 0; cD < CD.length; cD++)
                if (CD[cD]) {
                  this._firstDevice[DD] = cD;
                  break
                } break
          }
        }
      }
    }
    var kD = cD(39339);
    class dD {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get lS() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(DD) {
        this._singleClick = DD
      }
      set lS(DD) {
        this._doubleClick = DD
      }
      set hasSwiped(DD) {
        this._hasSwiped = DD
      }
      set ignore(DD) {
        this._ignore = DD
      }
    }
    class YD {
      constructor(DD) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new SD.n(0, 0), this._previousStartingPointerPosition = new SD.n(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = DD || XD.b.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(DD) {
        return this._meshUnderPointerId[DD] || null
      }
      get unTranslatedPointer() {
        return new SD.n(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(DD) {
        this._pointerX = DD
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(DD) {
        this._pointerY = DD
      }
      _updatePointerPosition(DD) {
        const CD = this._scene.DZ().getInputElementClientRect();
        CD && (this._pointerX = DD.clientX - CD.left, this._pointerY = DD.clientY - CD.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(DD, CD) {
        const cD = this._scene,
          ID = cD.DZ(),
          pD = ID.getInputElement();
        pD && (pD.tabIndex = ID.canvasTabIndex, cD.doNotHandleCursors || (pD.style.cursor = cD.defaultCursor)), this._setCursorAndPointerOverMesh(DD, CD, cD);
        for (const bD of cD._pointerMoveStage) {
          DD = DD || this._pickMove(CD);
          const cD = !!DD?.pickedMesh;
          DD = bD.action(this._unTranslatedPointerX, this._unTranslatedPointerY, DD, cD, pD)
        }
        const iD = CD.inputIndex >= HD.MouseWheelX && CD.inputIndex <= HD.MouseWheelZ ? nD.c.POINTERWHEEL : nD.c.POINTERMOVE;
        let fD;
        cD.onPointerMove && (DD = DD || this._pickMove(CD), cD.onPointerMove(CD, DD, iD)), DD ? (fD = new nD.e(iD, CD, DD), this._setRayOnPointerInfo(DD, CD)) : (fD = new nD.e(iD, CD, null, this), this._movePointerInfo = fD), cD.onPointerObservable.hasObservers() && cD.onPointerObservable.notifyObservers(fD, iD)
      }
      _setRayOnPointerInfo(DD, CD) {
        const cD = this._scene;
        DD && kD.d._IsPickingAvailable && (DD.ray || (DD.ray = cD.createPickingRay(CD.offsetX, CD.offsetY, SD.d.Identity(), cD.activeCamera)))
      }
      _addCameraPointerObserver(DD, CD) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(DD, CD)
      }
      _removeCameraPointerObserver(DD) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(DD)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(DD, CD, cD) {
        const ID = this._scene,
          pD = new nD.d(cD, CD, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return DD && (pD.originalPickingInfo = DD, pD.ray = DD.ray, "xr-near" === CD.pointerType && DD.originMesh && (pD.nearInteractionPickingInfo = DD)), ID.onPrePointerObservable.notifyObservers(pD, cD), !!pD.skipOnPointerObservable
      }
      _pickMove(DD) {
        const CD = this._scene,
          cD = CD.MM(this._unTranslatedPointerX, this._unTranslatedPointerY, CD.pointerMovePredicate, CD.pointerMoveFastCheck, CD.cameraToUseForPointers, CD.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(cD, DD, CD), cD
      }
      _updateMeshUnderPointer() {
        const DD = this._scene;
        if (!DD.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || DD.skipPointerMovePicking || !DD.cameraToUseForPointers && !DD.activeCamera) return;
        this._ensurePointerMovePredicate();
        const CD = this._pointerX,
          cD = this._pointerY,
          ID = this._unTranslatedPointerX,
          pD = this._unTranslatedPointerY;
        for (const iD of this._latestPointerMoveEvents.values()) this._pointerX = iD.pointerX, this._pointerY = iD.pointerY, this._unTranslatedPointerX = iD.unTranslatedPointerX, this._unTranslatedPointerY = iD.unTranslatedPointerY, this._pickMove(iD.event);
        this._pointerX = CD, this._pointerY = cD, this._unTranslatedPointerX = ID, this._unTranslatedPointerY = pD
      }
      _ensurePointerMovePredicate() {
        const DD = this._scene;
        DD.pointerMovePredicate || (DD.pointerMovePredicate = CD => (CD._isPointerMovePickable ?? CD.yo) && CD.isVisible && CD.isReady() && CD.isEnabled() && (CD.enablePointerMoveEvents || DD.constantlyUpdateMeshUnderPointer || null !== CD._getActionManagerForTrigger()) && (!DD.cameraToUseForPointers || 0 !== (DD.cameraToUseForPointers.layerMask & CD.layerMask)))
      }
      _setCursorAndPointerOverMesh(DD, CD, cD) {
        const ID = cD.DZ().getInputElement();
        if (DD?.pickedMesh) {
          if (this.setPointerOverMesh(DD.pickedMesh, CD.pointerId, DD, CD), !cD.doNotHandleCursors && ID && this._pointerOverMesh) {
            const DD = this._pointerOverMesh._getActionManagerForTrigger();
            DD && DD.hasPointerTriggers && (ID.style.cursor = DD.hoverCursor || cD.hoverCursor)
          }
        } else this.setPointerOverMesh(null, CD.pointerId, DD, CD)
      }
      simulatePointerMove(DD, CD) {
        const cD = new PointerEvent("pointermove", CD);
        cD.inputIndex = HD.Move, this._checkPrePointerObservable(DD, cD, nD.c.POINTERMOVE) || this._processPointerMove(DD, cD)
      }
      simulatePointerDown(DD, CD) {
        const cD = new PointerEvent("pointerdown", CD);
        cD.inputIndex = cD.button + 2, this._checkPrePointerObservable(DD, cD, nD.c.POINTERDOWN) || this._processPointerDown(DD, cD)
      }
      _processPointerDown(DD, CD) {
        const cD = this._scene;
        if (DD?.pickedMesh) {
          this._pickedDownMesh = DD.pickedMesh;
          const ID = DD.pickedMesh._getActionManagerForTrigger();
          if (ID) {
            if (ID.hasPickTriggers) switch (ID.processTrigger(5, new tD(DD.pickedMesh, cD.pointerX, cD.pointerY, DD.pickedMesh, CD, DD)), CD.button) {
              case 0:
                ID.processTrigger(2, new tD(DD.pickedMesh, cD.pointerX, cD.pointerY, DD.pickedMesh, CD, DD));
                break;
              case 1:
                ID.processTrigger(4, new tD(DD.pickedMesh, cD.pointerX, cD.pointerY, DD.pickedMesh, CD, DD));
                break;
              case 2:
                ID.processTrigger(3, new tD(DD.pickedMesh, cD.pointerX, cD.pointerY, DD.pickedMesh, CD, DD))
            }
            ID.hasSpecificTrigger(8) && window.setTimeout((() => {
              const DD = cD.MM(this._unTranslatedPointerX, this._unTranslatedPointerY, (DD => DD.yo && DD.isVisible && DD.isReady() && DD.actionManager && DD.actionManager.hasSpecificTrigger(8) && DD === this._pickedDownMesh), !1, cD.cameraToUseForPointers);
              DD?.pickedMesh && ID && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > YD.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, ID.processTrigger(8, tD.CreateNew(DD.pickedMesh, CD)))
            }), YD.LongPressDelay)
          }
        } else
          for (const iD of cD._pointerDownStage) DD = iD.action(this._unTranslatedPointerX, this._unTranslatedPointerY, DD, CD, !1);
        let ID;
        const pD = nD.c.POINTERDOWN;
        DD ? (cD.onPointerDown && cD.onPointerDown(CD, DD, pD), ID = new nD.e(pD, CD, DD), this._setRayOnPointerInfo(DD, CD)) : ID = new nD.e(pD, CD, null, this), cD.onPointerObservable.hasObservers() && cD.onPointerObservable.notifyObservers(ID, pD)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(DD, CD, cD) {
        const ID = new PointerEvent("pointerup", CD);
        ID.inputIndex = HD.Move;
        const pD = new dD;
        cD ? pD.lS = !0 : pD.singleClick = !0, this._checkPrePointerObservable(DD, ID, nD.c.POINTERUP) || this._processPointerUp(DD, ID, pD)
      }
      _processPointerUp(DD, CD, cD) {
        const ID = this._scene;
        if (DD?.pickedMesh) {
          if (this._pickedUpMesh = DD.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (ID.onPointerPick && ID.onPointerPick(CD, DD), cD.singleClick && !cD.ignore && ID.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const cD = nD.c.POINTERPICK,
              pD = new nD.e(cD, CD, DD);
            this._setRayOnPointerInfo(DD, CD), ID.onPointerObservable.notifyObservers(pD, cD)
          }
          const pD = DD.pickedMesh._getActionManagerForTrigger();
          if (pD && !cD.ignore) {
            pD.processTrigger(7, tD.CreateNew(DD.pickedMesh, CD, DD)), !cD.hasSwiped && cD.singleClick && pD.processTrigger(1, tD.CreateNew(DD.pickedMesh, CD, DD));
            const ID = DD.pickedMesh._getActionManagerForTrigger(6);
            cD.lS && ID && ID.processTrigger(6, tD.CreateNew(DD.pickedMesh, CD, DD))
          }
        } else if (!cD.ignore)
          for (const pD of ID._pointerUpStage) DD = pD.action(this._unTranslatedPointerX, this._unTranslatedPointerY, DD, CD, cD.lS);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const DD = this._pickedDownMesh._getActionManagerForTrigger(16);
          DD && DD.processTrigger(16, tD.CreateNew(this._pickedDownMesh, CD))
        }
        if (!cD.ignore) {
          const pD = new nD.e(nD.c.POINTERUP, CD, DD);
          if (this._setRayOnPointerInfo(DD, CD), ID.onPointerObservable.notifyObservers(pD, nD.c.POINTERUP), ID.onPointerUp && ID.onPointerUp(CD, DD, nD.c.POINTERUP), !cD.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let pD = 0;
            if (cD.singleClick ? pD = nD.c.POINTERTAP : cD.lS && (pD = nD.c.POINTERDOUBLETAP), pD) {
              const cD = new nD.e(pD, CD, DD);
              ID.onPointerObservable.hasObservers() && ID.onPointerObservable.hasSpecificMask(pD) && ID.onPointerObservable.notifyObservers(cD, pD)
            }
          }
        }
      }
      isPointerCaptured() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[DD]
      }
      attachControl() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const pD = this._scene,
          iD = pD.DZ();
        ID || (ID = iD.getInputElement()), this._alreadyAttached && this.detachControl(), ID && (this._alreadyAttachedTo = ID), this._deviceSourceManager = new RD(iD), this._initActionManager = DD => {
          if (!this._meshPickProceed) {
            const CD = pD.skipPointerUpPicking || 0 === pD._registeredActions && !this._checkForPicking() && !pD.onPointerUp ? null : pD.MM(this._unTranslatedPointerX, this._unTranslatedPointerY, pD.pointerUpPredicate, pD.pointerUpFastCheck, pD.cameraToUseForPointers, pD.pointerUpTrianglePredicate);
            this._currentPickResult = CD, CD && (DD = CD.hit && CD.pickedMesh ? CD.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return DD
        }, this._delayedSimpleClick = (DD, CD, cD) => {
          if ((Date.now() - this._previousStartingPointerTime > YD.DoubleClickDelay && !this._doubleClickOccured || DD !== this._previousButtonPressed) && (this._doubleClickOccured = !1, CD.singleClick = !0, CD.ignore = !1, this._delayedClicks[DD])) {
            const CD = this._delayedClicks[DD].evt,
              cD = nD.c.POINTERTAP,
              ID = new nD.e(cD, CD, this._currentPickResult);
            pD.onPointerObservable.hasObservers() && pD.onPointerObservable.hasSpecificMask(cD) && pD.onPointerObservable.notifyObservers(ID, cD), this._delayedClicks[DD] = null
          }
        }, this._initClickEvent = (DD, CD, cD, ID) => {
          const pD = new dD;
          this._currentPickResult = null;
          let iD = null,
            fD = DD.hasSpecificMask(nD.c.POINTERPICK) || CD.hasSpecificMask(nD.c.POINTERPICK) || DD.hasSpecificMask(nD.c.POINTERTAP) || CD.hasSpecificMask(nD.c.POINTERTAP) || DD.hasSpecificMask(nD.c.POINTERDOUBLETAP) || CD.hasSpecificMask(nD.c.POINTERDOUBLETAP);
          !fD && OD && (iD = this._initActionManager(iD, pD), iD && (fD = iD.hasPickTriggers));
          let bD = !1;
          if (fD = fD && !this._isMultiTouchGesture, fD) {
            const fD = cD.button;
            if (pD.hasSwiped = this._isPointerSwiping(), !pD.hasSwiped) {
              let QD = !YD.ExclusiveDoubleClickMode;
              if (QD || (QD = !DD.hasSpecificMask(nD.c.POINTERDOUBLETAP) && !CD.hasSpecificMask(nD.c.POINTERDOUBLETAP), QD && !OD.HasSpecificTrigger(6) && (iD = this._initActionManager(iD, pD), iD && (QD = !iD.hasSpecificTrigger(6)))), QD)(Date.now() - this._previousStartingPointerTime > YD.DoubleClickDelay || fD !== this._previousButtonPressed) && (pD.singleClick = !0, ID(pD, this._currentPickResult), bD = !0);
              else {
                const DD = {
                  evt: cD,
                  clickInfo: pD,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, fD, pD, ID), YD.DoubleClickDelay)
                };
                this._delayedClicks[fD] = DD
              }
              let wD = DD.hasSpecificMask(nD.c.POINTERDOUBLETAP) || CD.hasSpecificMask(nD.c.POINTERDOUBLETAP);
              !wD && OD.HasSpecificTrigger(6) && (iD = this._initActionManager(iD, pD), iD && (wD = iD.hasSpecificTrigger(6))), wD && (fD === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < YD.DoubleClickDelay && !this._doubleClickOccured ? (pD.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = fD, YD.ExclusiveDoubleClickMode ? (this._delayedClicks[fD] && (clearTimeout(this._delayedClicks[fD]?.timeoutId), this._delayedClicks[fD] = null), ID(pD, this._previousPickResult)) : ID(pD, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, pD.lS = !0, pD.ignore = !1, YD.ExclusiveDoubleClickMode && this._delayedClicks[fD] && (clearTimeout(this._delayedClicks[fD]?.timeoutId), this._delayedClicks[fD] = null), ID(pD, this._currentPickResult)), bD = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = fD))
            }
          }
          bD || ID(pD, this._currentPickResult)
        }, this._onPointerMove = DD => {
          if (this._updatePointerPosition(DD), this._latestPointerMoveEvents.set(DD.pointerId, {
              event: DD,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > YD.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > YD.DragMovementThreshold), iD.isPointerLock && iD._verifyPointerLock(), this._checkPrePointerObservable(null, DD, DD.inputIndex >= HD.MouseWheelX && DD.inputIndex <= HD.MouseWheelZ ? nD.c.POINTERWHEEL : nD.c.POINTERMOVE)) return;
          if (!pD.cameraToUseForPointers && !pD.activeCamera) return;
          if (pD.skipPointerMovePicking) return void this._processPointerMove(new MD.c, DD);
          this._ensurePointerMovePredicate();
          const CD = pD._registeredActions > 0 || pD.constantlyUpdateMeshUnderPointer ? this._pickMove(DD) : null;
          this._processPointerMove(CD, DD)
        }, this._onPointerDown = DD => {
          const CD = this._activePointerIds.indexOf(-1);
          if (-1 === CD ? this._activePointerIds.push(DD.pointerId) : this._activePointerIds[CD] = DD.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, YD.ExclusiveDoubleClickMode)
            for (let ID = 0; ID < this._delayedClicks.length; ID++)
              if (this._delayedClicks[ID])
                if (DD.button === ID) clearTimeout(this._delayedClicks[ID]?.timeoutId);
                else {
                  const DD = this._delayedClicks[ID].clickInfo;
                  this._doubleClickOccured = !1, DD.singleClick = !0, DD.ignore = !1;
                  const CD = this._delayedClicks[ID].evt,
                    cD = nD.c.POINTERTAP,
                    iD = new nD.e(cD, CD, this._currentPickResult);
                  pD.onPointerObservable.hasObservers() && pD.onPointerObservable.hasSpecificMask(cD) && pD.onPointerObservable.notifyObservers(iD, cD), this._delayedClicks[ID] = null
                } if (this._updatePointerPosition(DD), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = DD.button), pD.preventDefaultOnPointerDown && ID && (DD.preventDefault(), ID.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, DD, nD.c.POINTERDOWN)) return;
          if (!pD.cameraToUseForPointers && !pD.activeCamera) return;
          let cD;
          this._pointerCaptures[DD.pointerId] = !0, pD.pointerDownPredicate || (pD.pointerDownPredicate = DD => DD.yo && DD.isVisible && DD.isReady() && DD.isEnabled() && (!pD.cameraToUseForPointers || 0 !== (pD.cameraToUseForPointers.layerMask & DD.layerMask))), this._pickedDownMesh = null, cD = pD.skipPointerDownPicking || 0 === pD._registeredActions && !this._checkForPicking() && !pD.onPointerDown ? new MD.c : pD.MM(this._unTranslatedPointerX, this._unTranslatedPointerY, pD.pointerDownPredicate, pD.pointerDownFastCheck, pD.cameraToUseForPointers, pD.pointerDownTrianglePredicate), this._processPointerDown(cD, DD)
        }, this._onPointerUp = DD => {
          const CD = this._activePointerIds.indexOf(DD.pointerId); - 1 !== CD && (this._activePointerIds[CD] = -1, this._activePointerIdsCount--, "touch" === DD.pointerType && this._latestPointerMoveEvents.delete(DD.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(DD), pD.preventDefaultOnPointerUp && ID && (DD.preventDefault(), ID.focus()), this._initClickEvent(pD.onPrePointerObservable, pD.onPointerObservable, DD, ((CD, cD) => {
            if (pD.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !CD.ignore)) {
              if (this._checkPrePointerObservable(null, DD, nD.c.POINTERUP)) return this._swipeButtonPressed === DD.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === DD.buttons && (this._pointerCaptures[DD.pointerId] = !1));
              CD.hasSwiped || (CD.singleClick && pD.onPrePointerObservable.hasSpecificMask(nD.c.POINTERTAP) && this._checkPrePointerObservable(null, DD, nD.c.POINTERTAP) && (this._skipPointerTap = !0), CD.lS && pD.onPrePointerObservable.hasSpecificMask(nD.c.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, DD, nD.c.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[DD.pointerId] ? (0 === DD.buttons && (this._pointerCaptures[DD.pointerId] = !1), (pD.cameraToUseForPointers || pD.activeCamera) && (pD.pointerUpPredicate || (pD.pointerUpPredicate = DD => DD.yo && DD.isVisible && DD.isReady() && DD.isEnabled() && (!pD.cameraToUseForPointers || 0 !== (pD.cameraToUseForPointers.layerMask & DD.layerMask))), !this._meshPickProceed && (OD && OD.HasTriggers || this._checkForPicking() || pD.onPointerUp) && this._initActionManager(null, CD), cD || (cD = this._currentPickResult), this._processPointerUp(cD, DD, CD), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === DD.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === DD.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = DD => {
          const CD = aD.c.KEYDOWN;
          if (pD.onPreKeyboardObservable.hasObservers()) {
            const cD = new aD.d(CD, DD);
            if (pD.onPreKeyboardObservable.notifyObservers(cD, CD), cD.skipOnKeyboardObservable) return
          }
          if (pD.onKeyboardObservable.hasObservers()) {
            const cD = new aD.e(CD, DD);
            pD.onKeyboardObservable.notifyObservers(cD, CD)
          }
          pD.actionManager && pD.actionManager.processTrigger(14, tD.CreateNewFromScene(pD, DD))
        }, this._onKeyUp = DD => {
          const CD = aD.c.KEYUP;
          if (pD.onPreKeyboardObservable.hasObservers()) {
            const cD = new aD.d(CD, DD);
            if (pD.onPreKeyboardObservable.notifyObservers(cD, CD), cD.skipOnKeyboardObservable) return
          }
          if (pD.onKeyboardObservable.hasObservers()) {
            const cD = new aD.e(CD, DD);
            pD.onKeyboardObservable.notifyObservers(cD, CD)
          }
          pD.actionManager && pD.actionManager.processTrigger(15, tD.CreateNewFromScene(pD, DD))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((ID => {
          ID.deviceType === PD.Mouse ? ID.onInputChangedObservable.add((pD => {
            this._originMouseEvent = pD, pD.inputIndex === HD.LeftClick || pD.inputIndex === HD.MiddleClick || pD.inputIndex === HD.RightClick || pD.inputIndex === HD.BrowserBack || pD.inputIndex === HD.BrowserForward ? CD && 1 === ID.getInput(pD.inputIndex) ? this._onPointerDown(pD) : DD && 0 === ID.getInput(pD.inputIndex) && this._onPointerUp(pD) : cD && (pD.inputIndex === HD.Move ? this._onPointerMove(pD) : pD.inputIndex !== HD.MouseWheelX && pD.inputIndex !== HD.MouseWheelY && pD.inputIndex !== HD.MouseWheelZ || this._onPointerMove(pD))
          })) : ID.deviceType === PD.Touch ? ID.onInputChangedObservable.add((pD => {
            pD.inputIndex === HD.LeftClick && (CD && 1 === ID.getInput(pD.inputIndex) ? (this._onPointerDown(pD), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : DD && 0 === ID.getInput(pD.inputIndex) && (this._onPointerUp(pD), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), cD && pD.inputIndex === HD.Move && this._onPointerMove(pD)
          })) : ID.deviceType === PD.Keyboard && ID.onInputChangedObservable.add((DD => {
            "keydown" === DD.type ? this._onKeyDown(DD) : "keyup" === DD.type && this._onKeyUp(DD)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[CD] === DD && (!DD || !DD._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const pD = this._meshUnderPointerId[CD];
        let iD;
        pD && (iD = pD._getActionManagerForTrigger(10), iD && iD.processTrigger(10, new tD(pD, this._pointerX, this._pointerY, DD, ID, {
          pointerId: CD
        }))), DD ? (this._meshUnderPointerId[CD] = DD, this._pointerOverMesh = DD, iD = DD._getActionManagerForTrigger(9), iD && iD.processTrigger(9, new tD(DD, this._pointerX, this._pointerY, DD, ID, {
          pointerId: CD,
          pickResult: cD
        }))) : (delete this._meshUnderPointerId[CD], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: DD,
          pointerId: CD
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(DD) {
        this._pointerOverMesh === DD && (this._pointerOverMesh = null), this._pickedDownMesh === DD && (this._pickedDownMesh = null), this._pickedUpMesh === DD && (this._pickedUpMesh = null);
        for (const CD in this._meshUnderPointerId) this._meshUnderPointerId[CD] === DD && delete this._meshUnderPointerId[CD]
      }
    }
    YD.DragMovementThreshold = 10, YD.LongPressDelay = 500, YD.DoubleClickDelay = 300, YD.ExclusiveDoubleClickMode = !1;
    var WD = cD(39104),
      sD = cD(36622),
      ED = cD(37159);
    class eD {
      static get UniqueId() {
        const DD = this._UniqueIdCounter;
        return this._UniqueIdCounter++, DD
      }
    }
    eD._UniqueIdCounter = 1;
    var uD = cD(39193),
      hD = cD(39344),
      rD = cD(36452);
    class AD {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var FD, DC, CC, cC, IC, pC, iC, fC, bC, QC, wC, SC, BC, yC, MC, tC, ZC, oC, vC, NC, gC, XC, mC, nC, OC, PC, HC, UC, xC, qC, JC, KC, aC, VC, zC, jC, lC, LC, TC, GC, RC, kC, dC, YC, WC, sC, EC, eC, uC, hC, rC, AC, FC, Dc = cD(38048),
      Cc = cD(36488);
    const cc = new SD.s,
      Ic = new SD.s;
    var pc;
    ! function(DD) {
      DD[DD.BackwardCompatible = 0] = "BackwardCompatible", DD[DD.Intermediate = 1] = "Intermediate", DD[DD.Aggressive = 2] = "Aggressive"
    }(pc || (pc = {}));
    class ic {
      static DefaultMaterialFactory(DD) {
        throw (0, mD.m)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, mD.m)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(DD) {
        DD !== this._clearColor && (this._clearColor = DD, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(DD) {
        if (DD !== this._performancePriority) {
          switch (this._performancePriority = DD, DD) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(DD)
        }
      }
      set forceWireframe(DD) {
        this._forceWireframe !== DD && (this._forceWireframe = DD, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(DD) {
        this._skipFrustumClipping !== DD && (this._skipFrustumClipping = DD)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(DD) {
        this._forcePointsCloud !== DD && (this._forcePointsCloud = DD, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(DD) {
        this._environmentTexture !== DD && (this._environmentTexture = DD, this.onEnvironmentTextureChangedObservable.notifyObservers(DD), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let DD = [];
        DD = DD.concat(this.meshes), DD = DD.concat(this.lights), DD = DD.concat(this.cameras), DD = DD.concat(this.transformNodes);
        for (const CD of this.skeletons) DD = DD.concat(CD.bones);
        return DD
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(DD) {
        this._animationPropertiesOverride = DD
      }
      set onDispose(DD) {
        this._onDisposeObserver && this.Aq.remove(this._onDisposeObserver), this._onDisposeObserver = this.Aq.add(DD)
      }
      set beforeRender(DD) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), DD && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(DD))
      }
      set afterRender(DD) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), DD && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(DD))
      }
      set beforeCameraRender(DD) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(DD)
      }
      set afterCameraRender(DD) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(DD)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(DD) {
        this._pointerPickingConfiguration.pointerDownPredicate = DD
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(DD) {
        this._pointerPickingConfiguration.pointerUpPredicate = DD
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(DD) {
        this._pointerPickingConfiguration.pointerMovePredicate = DD
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(DD) {
        this._pointerPickingConfiguration.pointerDownFastCheck = DD
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(DD) {
        this._pointerPickingConfiguration.pointerUpFastCheck = DD
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(DD) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = DD
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(DD) {
        this._pointerPickingConfiguration.skipPointerMovePicking = DD
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(DD) {
        this._pointerPickingConfiguration.skipPointerDownPicking = DD
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(DD) {
        this._pointerPickingConfiguration.skipPointerUpPicking = DD
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return YD.DragMovementThreshold
      }
      static set DragMovementThreshold(DD) {
        YD.DragMovementThreshold = DD
      }
      static get LongPressDelay() {
        return YD.LongPressDelay
      }
      static set LongPressDelay(DD) {
        YD.LongPressDelay = DD
      }
      static get DoubleClickDelay() {
        return YD.DoubleClickDelay
      }
      static set DoubleClickDelay(DD) {
        YD.DoubleClickDelay = DD
      }
      static get ExclusiveDoubleClickMode() {
        return YD.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(DD) {
        YD.ExclusiveDoubleClickMode = DD
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? SD.p.ZeroReadOnly
      }
      bindEyePosition(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ID = this._eyePosition,
          pD = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          iD = this.floatingOriginOffset,
          fD = cc.set(ID.x, ID.y, ID.z, pD ? -1 : 1),
          bD = fD.subtractFromFloatsToRef(iD.x, iD.y, iD.z, 0, Ic);
        return DD && (cD ? DD.setFloat3(CD, bD.x, bD.y, bD.z) : DD.setVector4(CD, bD)), fD
      }
      finalizeSceneUbo() {
        const DD = this.getSceneUniformBuffer(),
          CD = this.bindEyePosition(null),
          cD = this.floatingOriginOffset;
        return DD.updateFloat4("vEyePosition", CD.x - cD.x, CD.y - cD.y, CD.z - cD.z, CD.w), DD.update(), DD
      }
      set useRightHandedSystem(DD) {
        this._useRightHandedSystem !== DD && (this._useRightHandedSystem = DD, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(DD) {
        this._currentStepId = DD
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(DD) {
        this._fogEnabled !== DD && (this._fogEnabled = DD, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(DD) {
        this._fogMode !== DD && (this._fogMode = DD, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(DD) {
        this._shadowsEnabled !== DD && (this._shadowsEnabled = DD, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(DD) {
        this._lightsEnabled !== DD && (this._lightsEnabled = DD, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(DD) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), DD && (this._unObserveActiveCameras = (0, rD.f)(DD, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = DD
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(DD) {
        DD !== this._activeCamera && (this._activeCamera = DD, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return ic.DefaultMaterialFactory !== ic._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = ic.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(DD) {
        this._defaultMaterial = DD
      }
      set texturesEnabled(DD) {
        this._texturesEnabled !== DD && (this._texturesEnabled = DD, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(DD) {
        if (this._frameGraph) return this._frameGraph = DD, void(DD || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = DD, DD && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(DD) {
        this._skeletonsEnabled !== DD && (this._skeletonsEnabled = DD, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = ic.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const DD of this._transientComponents) DD.register();
          this._transientComponents.length = 0
        }
      }
      fcD(DD) {
        this._components.push(DD), this._transientComponents.push(DD);
        const CD = DD;
        CD.addFromContainer && CD.serialize && this._serializableComponents.push(CD)
      }
      _getComponent(DD) {
        for (const CD of this._components)
          if (CD.name === DD) return CD;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(DD, CD) {
        this._inputManager = new YD(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new sD.e(.2, .2, .3, 1), this.onClearColorChangedObservable = new fD.c, this.ambientColor = new sD.d(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new fD.c, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.iH = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.Aq = new fD.c, this._onDisposeObserver = null, this.onBeforeRenderObservable = new fD.c, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new fD.c, this.onAfterRenderCameraObservable = new fD.c, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new fD.c, this.onAfterAnimationsObservable = new fD.c, this.onBeforeDrawPhaseObservable = new fD.c, this.onAfterDrawPhaseObservable = new fD.c, this.onReadyObservable = new fD.c, this.onBeforeCameraRenderObservable = new fD.c, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new fD.c, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new fD.c, this.onAfterActiveMeshesEvaluationObservable = new fD.c, this.onBeforeParticlesRenderingObservable = new fD.c, this.onAfterParticlesRenderingObservable = new fD.c, this.onDataLoadedObservable = new fD.c, this.onNewCameraAddedObservable = new fD.c, this.onCameraRemovedObservable = new fD.c, this.onNewLightAddedObservable = new fD.c, this.onLightRemovedObservable = new fD.c, this.onNewGeometryAddedObservable = new fD.c, this.onGeometryRemovedObservable = new fD.c, this.onNewTransformNodeAddedObservable = new fD.c, this.onTransformNodeRemovedObservable = new fD.c, this.onNewMeshAddedObservable = new fD.c, this.onMeshRemovedObservable = new fD.c, this.onNewSkeletonAddedObservable = new fD.c, this.onSkeletonRemovedObservable = new fD.c, this.onNewParticleSystemAddedObservable = new fD.c, this.onParticleSystemRemovedObservable = new fD.c, this.onNewAnimationGroupAddedObservable = new fD.c, this.onAnimationGroupRemovedObservable = new fD.c, this.onNewMaterialAddedObservable = new fD.c, this.onNewMultiMaterialAddedObservable = new fD.c, this.onMaterialRemovedObservable = new fD.c, this.onMultiMaterialRemovedObservable = new fD.c, this.onNewTextureAddedObservable = new fD.c, this.onTextureRemovedObservable = new fD.c, this.onNewFrameGraphAddedObservable = new fD.c, this.onFrameGraphRemovedObservable = new fD.c, this.onNewObjectRendererAddedObservable = new fD.c, this.onObjectRendererRemovedObservable = new fD.c, this.onNewPostProcessAddedObservable = new fD.c, this.onPostProcessRemovedObservable = new fD.c, this.onNewEffectLayerAddedObservable = new fD.c, this.onEffectLayerRemovedObservable = new fD.c, this.onBeforeRenderTargetsRenderObservable = new fD.c, this.onAfterRenderTargetsRenderObservable = new fD.c, this.onBeforeStepObservable = new fD.c, this.onAfterStepObservable = new fD.c, this.onActiveCameraChanged = new fD.c, this.onActiveCamerasChanged = new fD.c, this.onBeforeRenderingGroupObservable = new fD.c, this.onAfterRenderingGroupObservable = new fD.c, this.onMeshImportedObservable = new fD.c, this.onAnimationFileImportedObservable = new fD.c, this.onEnvironmentTextureChangedObservable = new fD.c, this.onMeshUnderPointerUpdatedObservable = new fD.c, this._registeredForLateAnimationBindings = new bD.e(256), this._pointerPickingConfiguration = new AD, this.onPrePointerObservable = new fD.c, this.onPointerObservable = new fD.c, this.onPreKeyboardObservable = new fD.c, this.onKeyboardObservable = new fD.c, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = ic.FOGMODE_NONE, this.fogColor = new sD.d(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.mV = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new SD.p(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new bD.e(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new WD.c, this._activeIndices = new WD.c, this._activeParticles = new WD.c, this._activeBones = new WD.c, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new bD.f(256), this._processedMaterials = new bD.f(256), this._renderTargets = new bD.e(256), this._materialsRenderTargets = new bD.e(256), this._activeParticleSystems = new bD.f(256), this._activeSkeletons = new bD.e(32), this._softwareSkinnedMeshes = new bD.e(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = SD.d.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = ND.f.Create(), this._beforeClearStage = ND.f.Create(), this._beforeRenderTargetClearStage = ND.f.Create(), this._gatherRenderTargetsStage = ND.f.Create(), this._gatherActiveCameraRenderTargetsStage = ND.f.Create(), this._isReadyForMeshStage = ND.f.Create(), this._beforeEvaluateActiveMeshStage = ND.f.Create(), this._evaluateSubMeshStage = ND.f.Create(), this._preActiveMeshStage = ND.f.Create(), this._cameraDrawRenderTargetStage = ND.f.Create(), this._beforeCameraDrawStage = ND.f.Create(), this._beforeRenderTargetDrawStage = ND.f.Create(), this._beforeRenderingGroupDrawStage = ND.f.Create(), this._beforeRenderingMeshStage = ND.f.Create(), this._afterRenderingMeshStage = ND.f.Create(), this._afterRenderingGroupDrawStage = ND.f.Create(), this._afterCameraDrawStage = ND.f.Create(), this._afterCameraPostProcessStage = ND.f.Create(), this._afterRenderTargetDrawStage = ND.f.Create(), this._afterRenderTargetPostProcessStage = ND.f.Create(), this._afterRenderStage = ND.f.Create(), this._pointerMoveStage = ND.f.Create(), this._pointerDownStage = ND.f.Create(), this._pointerUpStage = ND.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new fD.c, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const cD = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...CD
        };
        this.defaultCameraLayerMask = cD.defaultCameraLayerMask, this.defaultRenderableLayerMask = cD.defaultRenderableLayerMask, DD = this._engine = DD || XD.b.LastCreatedEngine, cD.virtual ? DD._virtualScenes.push(this) : (XD.b._LastCreatedScene = this, DD.scenes.push(this)), (DD.getCreationOptions().useLargeWorldRendering || CD?.useFloatingOrigin) && ((0, oD.d)(), this._floatingOriginScene = this, oD.b.hq = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new vD.b(this), ZD.b && (this.postProcessManager = new ZD.b(this)), (0, gD.m)() && this.attachControl(), this._createUbo(), BD.c && (this._imageProcessingConfiguration = new BD.c), this.setDefaultCandidateProviders(), cD.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = cD.useMaterialMeshMap, this.useClonedMeshMap = cD.useClonedMeshMap, CD && CD.virtual || DD.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(DD) {
        return this._defaultSubMeshCandidates.data = DD.IH, this._defaultSubMeshCandidates.length = DD.IH.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = DD => this._getDefaultSubMeshCandidates(DD), this.getIntersectingSubMeshCandidates = (DD, CD) => this._getDefaultSubMeshCandidates(DD), this.getCollidingSubMeshCandidates = (DD, CD) => this._getDefaultSubMeshCandidates(DD)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(DD) {
        this._inputManager.pointerX = DD
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(DD) {
        this._inputManager.pointerY = DD
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
      isCachedMaterialInvalid(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== CD || this._cachedMaterial !== DD || this._cachedVisibility !== cD
      }
      DZ() {
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
      simulatePointerMove(DD, CD) {
        return this._inputManager.simulatePointerMove(DD, CD), this
      }
      simulatePointerDown(DD, CD) {
        return this._inputManager.simulatePointerDown(DD, CD), this
      }
      simulatePointerUp(DD, CD, cD) {
        return this._inputManager.simulatePointerUp(DD, CD, cD), this
      }
      isPointerCaptured() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(DD)
      }
      attachControl() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(DD, CD, cD)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let DD, CD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const cD = this.DZ(),
          ID = cD.currentRenderPassId;
        cD.currentRenderPassId = this.activeCamera?.renderPassId ?? ID;
        let pD = !0;
        for (this._pendingData.length > 0 && (pD = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && pD && (pD = this.depthPeelingRenderer.isReady()), CD && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), DD = 0; DD < this.meshes.length; DD++) {
          const ID = this.meshes[DD];
          if (!ID.IH || 0 === ID.IH.length) continue;
          if (!ID.isReady(!0)) {
            pD = !1;
            continue
          }
          const iD = ID.hasThinInstances || "InstancedMesh" === ID.getClassName() || "InstancedLinesMesh" === ID.getClassName() || cD.getCaps().instancedArrays && ID.instances.length > 0;
          for (let DD = 0, CD = this._isReadyForMeshStage; DD < CD.length; DD++) {
            CD[DD].action(ID, iD) || (pD = !1)
          }
          if (!CD) continue;
          const fD = ID.material || this.defaultMaterial;
          if (fD)
            if (fD._storeEffectOnSubMeshes)
              for (const DD of ID.IH) {
                const CD = DD.iZ();
                CD && CD.hasRenderTargetTextures && null != CD.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(CD) && (this._processedMaterials.push(CD), this._materialsRenderTargets.concatWithNoDuplicate(CD.getRenderTargetTextures()))
              } else fD.hasRenderTargetTextures && null != fD.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(fD) && (this._processedMaterials.push(fD), this._materialsRenderTargets.concatWithNoDuplicate(fD.getRenderTargetTextures()))
        }
        if (CD) {
          for (DD = 0; DD < this._materialsRenderTargets.length; ++DD) {
            this._materialsRenderTargets.data[DD].isReadyForRendering() || (pD = !1)
          }
          for (DD = 0; DD < this.customRenderTargets.length; ++DD) {
            this.customRenderTargets[DD].isReadyForRendering() || (pD = !1)
          }
        }
        for (DD = 0; DD < this.geometries.length; DD++) {
          2 === this.geometries[DD].delayLoadState && (pD = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const iD of this.activeCameras) iD.isReady(!0) || (pD = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (pD = !1));
        for (const iD of this.iH) iD.isReady() || (pD = !1);
        if (this.proceduralTexturesEnabled)
          for (const iD of this.proceduralTextures) iD.isReady() || (pD = !1);
        if (this.layers)
          for (const iD of this.layers) iD.isReady() || (pD = !1);
        if (this.effectLayers)
          for (const iD of this.effectLayers) iD.isLayerReady() || (pD = !1);
        for (const iD of this._isReadyChecks) iD.isReady() || (pD = !1);
        return cD.areAllEffectsReady() || (pD = !1), cD.currentRenderPassId = ID, pD
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(DD) {
        this.onBeforeRenderObservable.add(DD)
      }
      unregisterBeforeRender(DD) {
        this.onBeforeRenderObservable.removeCallback(DD)
      }
      registerAfterRender(DD) {
        this.onAfterRenderObservable.add(DD)
      }
      unregisterAfterRender(DD) {
        this.onAfterRenderObservable.removeCallback(DD)
      }
      _executeOnceBeforeRender(DD) {
        const CD = () => {
          DD(), setTimeout((() => {
            this.unregisterBeforeRender(CD)
          }))
        };
        this.registerBeforeRender(CD)
      }
      executeOnceBeforeRender(DD, CD) {
        void 0 !== CD ? setTimeout((() => {
          this._executeOnceBeforeRender(DD)
        }), CD) : this._executeOnceBeforeRender(DD)
      }
      addPendingData(DD) {
        this._pendingData.push(DD)
      }
      removePendingData(DD) {
        const CD = this.isLoading,
          cD = this._pendingData.indexOf(DD); - 1 !== cD && this._pendingData.splice(cD, 1), CD && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(DD) {
        -1 === this._isReadyChecks.indexOf(DD) && this._isReadyChecks.push(DD)
      }
      removeIsReadyCheck(DD) {
        const CD = this._isReadyChecks.indexOf(DD); - 1 !== CD && this._isReadyChecks.splice(CD, 1)
      }
      executeWhenReady(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(DD), null === this._executeWhenReadyTimeoutId && this._checkIsReady(CD)
      }
      async whenReadyAsync() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((CD => {
          this.executeWhenReady((() => {
            CD()
          }), DD)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = iD.b.Now;
        else if (this.onReadyTimeoutDuration > 0 && iD.b.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(DD)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(DD)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = iD.b.Now
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
      setTransformMatrix(DD, CD, cD, ID) {
        this._multiviewSceneUboIsActive = !!(cD && ID && this._multiviewSceneUbo), this._viewUpdateFlag === DD.updateFlag && this._projectionUpdateFlag === CD.updateFlag || (this._viewUpdateFlag = DD.updateFlag, this._projectionUpdateFlag = CD.updateFlag, this._viewMatrix = DD, this._projectionMatrix = CD, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new SD.d), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? ED.c.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = ED.c.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(cD, ID) : this._sceneUbo.useUbo && (this._sceneUbo.o5("viewProjection", this._transformMatrix), this._sceneUbo.o5("view", this._viewMatrix), this._sceneUbo.o5("projection", this._projectionMatrix), this._sceneUbo.o5("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(DD, CD) {
        const cD = "boolean" === typeof CD ? CD : CD?.trackUBOsInFrame,
          ID = new yD.b(this._engine, void 0, !1, DD ?? "wo", void 0, cD);
        return ID.addUniform("viewProjection", 16), ID.addUniform("view", 16), ID.addUniform("projection", 16), ID.addUniform("vEyePosition", 4), ID.addUniform("inverseProjection", 16), ID
      }
      setSceneUniformBuffer(DD) {
        this._sceneUbo = DD, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : SD.p.ZeroReadOnly
      }
      getUniqueId() {
        return eD.UniqueId
      }
      HcD(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(DD), DD._resyncLightSources(), DD.parent || DD._addToSceneRootNodes(), pD.d.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(DD)
          })), CD)) {
          const CD = DD.getChildMeshes();
          for (const DD of CD) this.HcD(DD)
        }
      }
      MJ(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const cD = this.meshes.indexOf(DD);
        if (-1 !== cD && (this.meshes.splice(cD, 1), DD.parent || DD._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(DD), this.onMeshRemovedObservable.notifyObservers(DD), CD) {
          const CD = DD.getChildMeshes();
          for (const DD of CD) this.MJ(DD)
        }
        return cD
      }
      addTransformNode(DD) {
        this._blockEntityCollection || DD.hq() === this && -1 !== DD._indexInSceneTransformNodesArray || (DD._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(DD), DD.parent || DD._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(DD))
      }
      removeTransformNode(DD) {
        const CD = DD._indexInSceneTransformNodesArray;
        if (-1 !== CD) {
          if (CD !== this.transformNodes.length - 1) {
            const DD = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[CD] = DD, DD._indexInSceneTransformNodesArray = CD
          }
          DD._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), DD.parent || DD._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(DD), CD
      }
      removeSkeleton(DD) {
        const CD = this.skeletons.indexOf(DD);
        return -1 !== CD && (this.skeletons.splice(CD, 1), this.onSkeletonRemovedObservable.notifyObservers(DD), this._executeActiveContainerCleanup(this._activeSkeletons)), CD
      }
      removeMorphTargetManager(DD) {
        const CD = this.morphTargetManagers.indexOf(DD);
        return -1 !== CD && this.morphTargetManagers.splice(CD, 1), CD
      }
      removeLight(DD) {
        const CD = this.lights.indexOf(DD);
        if (-1 !== CD) {
          for (const CD of this.meshes) CD._removeLightSource(DD, !1);
          this.lights.splice(CD, 1), this.sortLightsByPriority(), DD.parent || DD._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(DD)
        }
        return CD
      }
      removeCamera(DD) {
        const CD = this.cameras.indexOf(DD);
        if (-1 !== CD && (this.cameras.splice(CD, 1), DD.parent || DD._removeFromSceneRootNodes()), this.activeCameras) {
          const CD = this.activeCameras.indexOf(DD); - 1 !== CD && this.activeCameras.splice(CD, 1)
        }
        return this.activeCamera === DD && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(DD), CD
      }
      removeParticleSystem(DD) {
        const CD = this.iH.indexOf(DD);
        return -1 !== CD && (this.iH.splice(CD, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(DD), CD
      }
      removeAnimation(DD) {
        const CD = this.animations.indexOf(DD);
        return -1 !== CD && this.animations.splice(CD, 1), CD
      }
      stopAnimation(DD, CD, cD) {}
      removeAnimationGroup(DD) {
        const CD = this.animationGroups.indexOf(DD);
        return -1 !== CD && this.animationGroups.splice(CD, 1), this.onAnimationGroupRemovedObservable.notifyObservers(DD), CD
      }
      removeMultiMaterial(DD) {
        const CD = this.multiMaterials.indexOf(DD);
        return -1 !== CD && this.multiMaterials.splice(CD, 1), this.onMultiMaterialRemovedObservable.notifyObservers(DD), CD
      }
      removeMaterial(DD) {
        const CD = DD._indexInSceneMaterialArray;
        if (-1 !== CD && CD < this.materials.length) {
          if (CD !== this.materials.length - 1) {
            const DD = this.materials[this.materials.length - 1];
            this.materials[CD] = DD, DD._indexInSceneMaterialArray = CD
          }
          DD._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(DD), CD
      }
      removeActionManager(DD) {
        const CD = this.actionManagers.indexOf(DD);
        return -1 !== CD && this.actionManagers.splice(CD, 1), CD
      }
      removeTexture(DD) {
        const CD = this.textures.indexOf(DD);
        return -1 !== CD && this.textures.splice(CD, 1), this.onTextureRemovedObservable.notifyObservers(DD), CD
      }
      removeFrameGraph(DD) {
        const CD = this.frameGraphs.indexOf(DD);
        return -1 !== CD && this.frameGraphs.splice(CD, 1), this.onFrameGraphRemovedObservable.notifyObservers(DD), CD
      }
      removeObjectRenderer(DD) {
        const CD = this.objectRenderers.indexOf(DD);
        return -1 !== CD && this.objectRenderers.splice(CD, 1), this.onObjectRendererRemovedObservable.notifyObservers(DD), CD
      }
      removePostProcess(DD) {
        const CD = this.postProcesses.indexOf(DD);
        return -1 !== CD && this.postProcesses.splice(CD, 1), this.onPostProcessRemovedObservable.notifyObservers(DD), CD
      }
      removeEffectLayer(DD) {
        const CD = this.effectLayers.indexOf(DD);
        return -1 !== CD && this.effectLayers.splice(CD, 1), this.onEffectLayerRemovedObservable.notifyObservers(DD), CD
      }
      addLight(DD) {
        if (!this._blockEntityCollection) {
          this.lights.push(DD), this.sortLightsByPriority(), DD.parent || DD._addToSceneRootNodes();
          for (const CD of this.meshes) - 1 === CD.lightSources.indexOf(DD) && (CD.lightSources.push(DD), CD._resyncLightSources());
          pD.d.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(DD)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(hD.d.CompareLightsPriority)
      }
      addCamera(DD) {
        this._blockEntityCollection || (this.cameras.push(DD), pD.d.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(DD)
        })), DD.parent || DD._addToSceneRootNodes())
      }
      addSkeleton(DD) {
        this._blockEntityCollection || (this.skeletons.push(DD), pD.d.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(DD)
        })))
      }
      addParticleSystem(DD) {
        this._blockEntityCollection || (this.iH.push(DD), pD.d.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(DD)
        })))
      }
      addAnimation(DD) {
        this._blockEntityCollection || this.animations.push(DD)
      }
      addAnimationGroup(DD) {
        this._blockEntityCollection || (this.animationGroups.push(DD), pD.d.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(DD)
        })))
      }
      addMultiMaterial(DD) {
        this._blockEntityCollection || (this.multiMaterials.push(DD), pD.d.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(DD)
        })))
      }
      addMaterial(DD) {
        this._blockEntityCollection || DD.hq() === this && -1 !== DD._indexInSceneMaterialArray || (DD._indexInSceneMaterialArray = this.materials.length, this.materials.push(DD), pD.d.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(DD)
        })))
      }
      addMorphTargetManager(DD) {
        this._blockEntityCollection || this.morphTargetManagers.push(DD)
      }
      addGeometry(DD) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[DD.uniqueId] = this.geometries.length), this.geometries.push(DD))
      }
      addActionManager(DD) {
        this.actionManagers.push(DD)
      }
      addTexture(DD) {
        this._blockEntityCollection || (this.textures.push(DD), this.onNewTextureAddedObservable.notifyObservers(DD))
      }
      addFrameGraph(DD) {
        this.frameGraphs.push(DD), pD.d.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(DD)
        }))
      }
      addObjectRenderer(DD) {
        this.objectRenderers.push(DD), pD.d.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(DD)
        }))
      }
      addPostProcess(DD) {
        this._blockEntityCollection || (this.postProcesses.push(DD), pD.d.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(DD)
        })))
      }
      addEffectLayer(DD) {
        this._blockEntityCollection || (this.effectLayers.push(DD), pD.d.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(DD)
        })))
      }
      switchActiveCamera(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = DD, CD && DD.attachControl())
      }
      setActiveCameraById(DD) {
        const CD = this.getCameraById(DD);
        return CD ? (this.activeCamera = CD, CD) : null
      }
      setActiveCameraByName(DD) {
        const CD = this.getCameraByName(DD);
        return CD ? (this.activeCamera = CD, CD) : null
      }
      getAnimationGroupByName(DD) {
        for (let CD = 0; CD < this.animationGroups.length; CD++)
          if (this.animationGroups[CD].name === DD) return this.animationGroups[CD];
        return null
      }
      _getMaterial(DD, CD) {
        for (let cD = 0; cD < this.materials.length; cD++) {
          const DD = this.materials[cD];
          if (CD(DD)) return DD
        }
        if (DD)
          for (let cD = 0; cD < this.multiMaterials.length; cD++) {
            const DD = this.multiMaterials[cD];
            if (CD(DD)) return DD
          }
        return null
      }
      getMaterialByUniqueID(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(DD, CD)
      }
      getMaterialByUniqueId(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(CD, (CD => CD.uniqueId === DD))
      }
      getMaterialById(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(CD, (CD => CD.id === DD))
      }
      getMaterialByName(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(CD, (CD => CD.name === DD))
      }
      getLastMaterialById(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let cD = this.materials.length - 1; cD >= 0; cD--)
          if (this.materials[cD].id === DD) return this.materials[cD];
        if (CD)
          for (let cD = this.multiMaterials.length - 1; cD >= 0; cD--)
            if (this.multiMaterials[cD].id === DD) return this.multiMaterials[cD];
        return null
      }
      getTextureByUniqueId(DD) {
        for (let CD = 0; CD < this.textures.length; CD++)
          if (this.textures[CD].uniqueId === DD) return this.textures[CD];
        return null
      }
      getTextureByName(DD) {
        for (let CD = 0; CD < this.textures.length; CD++)
          if (this.textures[CD].name === DD) return this.textures[CD];
        return null
      }
      getCameraById(DD) {
        for (let CD = 0; CD < this.cameras.length; CD++)
          if (this.cameras[CD].id === DD) return this.cameras[CD];
        return null
      }
      getCameraByUniqueId(DD) {
        for (let CD = 0; CD < this.cameras.length; CD++)
          if (this.cameras[CD].uniqueId === DD) return this.cameras[CD];
        return null
      }
      getCameraByName(DD) {
        for (let CD = 0; CD < this.cameras.length; CD++)
          if (this.cameras[CD].name === DD) return this.cameras[CD];
        return null
      }
      getBoneById(DD) {
        for (let CD = 0; CD < this.skeletons.length; CD++) {
          const cD = this.skeletons[CD];
          for (let CD = 0; CD < cD.bones.length; CD++)
            if (cD.bones[CD].id === DD) return cD.bones[CD]
        }
        return null
      }
      getBoneByName(DD) {
        for (let CD = 0; CD < this.skeletons.length; CD++) {
          const cD = this.skeletons[CD];
          for (let CD = 0; CD < cD.bones.length; CD++)
            if (cD.bones[CD].name === DD) return cD.bones[CD]
        }
        return null
      }
      getLightByName(DD) {
        for (let CD = 0; CD < this.lights.length; CD++)
          if (this.lights[CD].name === DD) return this.lights[CD];
        return null
      }
      getLightById(DD) {
        for (let CD = 0; CD < this.lights.length; CD++)
          if (this.lights[CD].id === DD) return this.lights[CD];
        return null
      }
      getLightByUniqueId(DD) {
        for (let CD = 0; CD < this.lights.length; CD++)
          if (this.lights[CD].uniqueId === DD) return this.lights[CD];
        return null
      }
      getParticleSystemById(DD) {
        for (let CD = 0; CD < this.iH.length; CD++)
          if (this.iH[CD].id === DD) return this.iH[CD];
        return null
      }
      getGeometryById(DD) {
        for (let CD = 0; CD < this.geometries.length; CD++)
          if (this.geometries[CD].id === DD) return this.geometries[CD];
        return null
      }
      _getGeometryByUniqueId(DD) {
        if (this._geometriesByUniqueId) {
          const CD = this._geometriesByUniqueId[DD];
          if (void 0 !== CD) return this.geometries[CD]
        } else
          for (let CD = 0; CD < this.geometries.length; CD++)
            if (this.geometries[CD].uniqueId === DD) return this.geometries[CD];
        return null
      }
      getFrameGraphByName(DD) {
        for (let CD = 0; CD < this.frameGraphs.length; CD++)
          if (this.frameGraphs[CD].name === DD) return this.frameGraphs[CD];
        return null
      }
      pushGeometry(DD, CD) {
        return !(!CD && this._getGeometryByUniqueId(DD.uniqueId)) && (this.addGeometry(DD), pD.d.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(DD)
        })), !0)
      }
      removeGeometry(DD) {
        let CD;
        if (this._geometriesByUniqueId) {
          if (CD = this._geometriesByUniqueId[DD.uniqueId], void 0 === CD) return !1
        } else if (CD = this.geometries.indexOf(DD), CD < 0) return !1;
        if (CD !== this.geometries.length - 1) {
          const DD = this.geometries[this.geometries.length - 1];
          DD && (this.geometries[CD] = DD, this._geometriesByUniqueId && (this._geometriesByUniqueId[DD.uniqueId] = CD))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[DD.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(DD), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(DD) {
        for (let CD = 0; CD < this.meshes.length; CD++)
          if (this.meshes[CD].id === DD) return this.meshes[CD];
        return null
      }
      getMeshesById(DD) {
        return this.meshes.filter((function(CD) {
          return CD.id === DD
        }))
      }
      getTransformNodeById(DD) {
        for (let CD = 0; CD < this.transformNodes.length; CD++)
          if (this.transformNodes[CD].id === DD) return this.transformNodes[CD];
        return null
      }
      getTransformNodeByUniqueId(DD) {
        for (let CD = 0; CD < this.transformNodes.length; CD++)
          if (this.transformNodes[CD].uniqueId === DD) return this.transformNodes[CD];
        return null
      }
      getTransformNodesById(DD) {
        return this.transformNodes.filter((function(CD) {
          return CD.id === DD
        }))
      }
      getMeshByUniqueId(DD) {
        for (let CD = 0; CD < this.meshes.length; CD++)
          if (this.meshes[CD].uniqueId === DD) return this.meshes[CD];
        return null
      }
      getLastMeshById(DD) {
        for (let CD = this.meshes.length - 1; CD >= 0; CD--)
          if (this.meshes[CD].id === DD) return this.meshes[CD];
        return null
      }
      getLastTransformNodeById(DD) {
        for (let CD = this.transformNodes.length - 1; CD >= 0; CD--)
          if (this.transformNodes[CD].id === DD) return this.transformNodes[CD];
        return null
      }
      getLastEntryById(DD) {
        let CD;
        for (CD = this.meshes.length - 1; CD >= 0; CD--)
          if (this.meshes[CD].id === DD) return this.meshes[CD];
        for (CD = this.transformNodes.length - 1; CD >= 0; CD--)
          if (this.transformNodes[CD].id === DD) return this.transformNodes[CD];
        for (CD = this.cameras.length - 1; CD >= 0; CD--)
          if (this.cameras[CD].id === DD) return this.cameras[CD];
        for (CD = this.lights.length - 1; CD >= 0; CD--)
          if (this.lights[CD].id === DD) return this.lights[CD];
        for (CD = this.skeletons.length - 1; CD >= 0; CD--) {
          const cD = this.skeletons[CD];
          for (let CD = cD.bones.length - 1; CD >= 0; CD--)
            if (cD.bones[CD].id === DD) return cD.bones[CD]
        }
        return null
      }
      getNodeById(DD) {
        const CD = this.getMeshById(DD);
        if (CD) return CD;
        const cD = this.getTransformNodeById(DD);
        if (cD) return cD;
        const ID = this.getLightById(DD);
        if (ID) return ID;
        const pD = this.getCameraById(DD);
        if (pD) return pD;
        const iD = this.getBoneById(DD);
        return iD || null
      }
      getNodeByName(DD) {
        const CD = this.getMeshByName(DD);
        if (CD) return CD;
        const cD = this.getTransformNodeByName(DD);
        if (cD) return cD;
        const ID = this.getLightByName(DD);
        if (ID) return ID;
        const pD = this.getCameraByName(DD);
        if (pD) return pD;
        const iD = this.getBoneByName(DD);
        return iD || null
      }
      getMeshByName(DD) {
        for (let CD = 0; CD < this.meshes.length; CD++)
          if (this.meshes[CD].name === DD) return this.meshes[CD];
        return null
      }
      getTransformNodeByName(DD) {
        for (let CD = 0; CD < this.transformNodes.length; CD++)
          if (this.transformNodes[CD].name === DD) return this.transformNodes[CD];
        return null
      }
      getLastSkeletonById(DD) {
        for (let CD = this.skeletons.length - 1; CD >= 0; CD--)
          if (this.skeletons[CD].id === DD) return this.skeletons[CD];
        return null
      }
      getSkeletonByUniqueId(DD) {
        for (let CD = 0; CD < this.skeletons.length; CD++)
          if (this.skeletons[CD].uniqueId === DD) return this.skeletons[CD];
        return null
      }
      getSkeletonById(DD) {
        for (let CD = 0; CD < this.skeletons.length; CD++)
          if (this.skeletons[CD].id === DD) return this.skeletons[CD];
        return null
      }
      getSkeletonByName(DD) {
        for (let CD = 0; CD < this.skeletons.length; CD++)
          if (this.skeletons[CD].name === DD) return this.skeletons[CD];
        return null
      }
      getMorphTargetManagerById(DD) {
        for (let CD = 0; CD < this.morphTargetManagers.length; CD++)
          if (this.morphTargetManagers[CD].uniqueId === DD) return this.morphTargetManagers[CD];
        return null
      }
      getMorphTargetById(DD) {
        for (let CD = 0; CD < this.morphTargetManagers.length; ++CD) {
          const cD = this.morphTargetManagers[CD];
          for (let CD = 0; CD < cD.numTargets; ++CD) {
            const ID = cD.getTarget(CD);
            if (ID.id === DD) return ID
          }
        }
        return null
      }
      getMorphTargetByName(DD) {
        for (let CD = 0; CD < this.morphTargetManagers.length; ++CD) {
          const cD = this.morphTargetManagers[CD];
          for (let CD = 0; CD < cD.numTargets; ++CD) {
            const ID = cD.getTarget(CD);
            if (ID.name === DD) return ID
          }
        }
        return null
      }
      getPostProcessByName(DD) {
        for (let CD = 0; CD < this.postProcesses.length; ++CD) {
          const cD = this.postProcesses[CD];
          if (cD.name === DD) return cD
        }
        return null
      }
      isActiveMesh(DD) {
        return -1 !== this._activeMeshes.indexOf(DD)
      }
      get uid() {
        return this._uid || (this._uid = ID.g.RandomId()), this._uid
      }
      addExternalData(DD, CD) {
        return this._externalData || (this._externalData = new QD), this._externalData.add(DD, CD)
      }
      getExternalData(DD) {
        return this._externalData ? this._externalData.get(DD) : null
      }
      getOrAddExternalDataWithFactory(DD, CD) {
        return this._externalData || (this._externalData = new QD), this._externalData.getOrAddWithFactory(DD, CD)
      }
      removeExternalData(DD) {
        return this._externalData.remove(DD)
      }
      _evaluateSubMesh(DD, CD, cD, ID) {
        if (ID || DD.isInFrustum(this._frustumPlanes)) {
          for (let ID = 0, pD = this._evaluateSubMeshStage; ID < pD.length; ID++) {
            pD[ID].action(CD, DD)
          }
          const cD = DD.iZ();
          null !== cD && void 0 !== cD && (cD.hasRenderTargetTextures && null != cD.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(cD) && (this._processedMaterials.push(cD), this._materialsRenderTargets.concatWithNoDuplicate(cD.getRenderTargetTextures())), this._renderingManager.dispatch(DD, CD, cD))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(DD) {
        this._preventFreeActiveMeshesAndRenderingGroups !== DD && (DD && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = DD)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let DD = 0; DD < this.activeCameras.length; DD++) {
            const CD = this.activeCameras[DD];
            CD && CD._activeMeshes && CD._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let DD = 0; DD < this.textures.length; DD++) {
            const CD = this.textures[DD];
            CD && CD.renderList && CD.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          CD = arguments.length > 1 ? arguments[1] : void 0,
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          iD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const fD = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const DD of fD) DD.objectRenderer._freezeActiveMeshes(ID);
          return this._freezeActiveMeshesCancel = (0, pD.e)((() => {
            let DD = !0,
              CD = !0;
            for (const cD of fD) DD && (DD = cD.objectRenderer._isFrozen), CD && (CD = null !== cD.objectRenderer._freezeActiveMeshesCancel);
            if (DD) return !0;
            if (!CD) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = iD, this._skipEvaluateActiveMeshesCompletely = DD, CD?.()
          }), ((DD, CD) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), CD) {
              const CD = "Scene: Timeout while waiting for meshes to be frozen.";
              cD ? cD(CD) : (Dc.e.Error(CD), DD && Dc.e.Error(DD))
            } else {
              const CD = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              cD ? cD(CD) : (Dc.e.Error(CD), DD && (Dc.e.Error(DD), DD.stack && Dc.e.Error(DD.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = iD, this._skipEvaluateActiveMeshesCompletely = DD, ID)
              for (let DD = 0; DD < this._activeMeshes.length; DD++) this._activeMeshes.data[DD]._freeze();
            CD && CD()
          } else cD && cD("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let DD = 0; DD < this.meshes.length; DD++) {
          const CD = this.meshes[DD];
          CD._internalAbstractMeshDataInfo && (CD._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const DD = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const CD of DD) CD.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let DD = 0; DD < this._activeMeshes.length; DD++) this._activeMeshes.data[DD]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(DD) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => DD.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const DD = this._activeMeshes.length;
            for (let CD = 0; CD < DD; CD++) {
              this._activeMeshes.data[CD].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const DD = this._activeParticleSystems.length;
            for (let CD = 0; CD < DD; CD++) this._activeParticleSystems.data[CD].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let pD = 0, iD = this._beforeEvaluateActiveMeshStage; pD < iD.length; pD++) {
          iD[pD].action()
        }
        const DD = this.getActiveMeshCandidates(),
          CD = DD.length,
          cD = WD.c.Enabled,
          ID = this.customLODSelector;
        for (let pD = 0; pD < CD; pD++) {
          const CD = DD.data[pD],
            iD = !ID && !CD.Fq && !CD._internalMeshDataInfo?._LODLevels.length;
          let fD, bD;
          if ((iD || (fD = CD._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), fD ? fD[1] = -1 : (fD = [CD, -1], CD._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, fD))), !CD.isBlocked) && (cD && this._totalVertices.addCount(CD.getTotalVertices(), !1), CD.isReady() && CD.isEnabled() && !CD.ci.hasAZeroComponent)) {
            if (CD.computeWorldMatrix(), CD.actionManager && CD.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(CD), iD) bD = CD;
            else if (bD = ID ? ID(CD, this.activeCamera) : CD.getLOD(this.activeCamera), fD[0] = bD, fD[1] = this._frameId, void 0 === bD || null === bD) continue;
            if (bD !== CD && 0 !== bD.billboardMode && bD.computeWorldMatrix(), CD._preActivate(), CD.isVisible && CD.visibility > 0 && 0 !== (CD.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || CD.CZ || CD.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(CD), this.activeCamera._activeMeshes.push(CD), bD !== CD && bD._activate(this._renderId, !1);
              for (let DD = 0, cD = this._preActiveMeshStage; DD < cD.length; DD++) {
                cD[DD].action(CD)
              }
              CD._activate(this._renderId, !1) && (CD.Fq ? CD._internalAbstractMeshDataInfo._actAsRegularMesh && (bD = CD) : bD._internalAbstractMeshDataInfo._onlyForInstances = !1, bD._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(CD, bD)), CD._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let DD = 0; DD < this.iH.length; DD++) {
            const CD = this.iH[DD];
            if (!CD.isStarted() || !CD.emitter) continue;
            const cD = CD.emitter;
            cD.position && !cD.isEnabled() || (this._activeParticleSystems.push(CD), CD.animate(), this._renderingManager.dispatchParticles(CD))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(DD) {
        this._skeletonsEnabled && DD.skeleton && (this._activeSkeletons.pushNoDuplicate(DD.skeleton) && (DD.skeleton.prepare(), this._activeBones.addCount(DD.skeleton.bones.length, !1)), DD.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(DD) && this.frameGraph && DD.applySkeleton(DD.skeleton))
      }
      _activeMesh(DD, CD) {
        this._prepareSkeleton(CD);
        let cD = DD.nID || DD.Fq || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || CD.CZ;
        if (CD && CD.IH && CD.IH.length > 0) {
          const ID = this.getActiveSubMeshCandidates(CD),
            pD = ID.length;
          cD = cD || 1 === pD;
          for (let iD = 0; iD < pD; iD++) {
            const pD = ID.data[iD];
            this._evaluateSubMesh(pD, CD, DD, cD)
          }
        }
      }
      updateTransformMatrix(DD) {
        const CD = this.activeCamera;
        if (CD)
          if (CD._renderingMultiview) {
            const cD = CD._rigCameras[0],
              ID = CD._rigCameras[1];
            this.setTransformMatrix(cD.getViewMatrix(), cD.getProjectionMatrix(DD), ID.getViewMatrix(), ID.getProjectionMatrix(DD))
          } else this.setTransformMatrix(CD.getViewMatrix(), CD.getProjectionMatrix(DD))
      }
      _bindFrameBuffer(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (DD && DD._multiviewTexture ? DD._multiviewTexture._bindFrameBuffer() : DD && DD.outputRenderTarget ? DD.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), CD && this._clearFrameBuffer(DD)
      }
      _clearFrameBuffer(DD) {
        if (DD && DD._multiviewTexture);
        else if (DD && DD.outputRenderTarget && !DD._renderingMultiview) {
          const CD = DD.outputRenderTarget;
          CD.onClearObservable.hasObservers() ? CD.onClearObservable.notifyObservers(this._engine) : CD.skipInitialClear || DD.isRightCamera || (this.autoClear && this._engine.clear(CD.clearColor || this._clearColor, !CD._cleared, !0, !0), CD._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(DD, CD) {
        let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (DD && DD._skipRendering) return;
        const pD = this._engine;
        if (this._activeCamera = DD, !this.activeCamera) throw new Error("Active camera not set");
        if (pD.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && cD) {
          let CD = !0;
          DD._renderingMultiview && DD.outputRenderTarget && (CD = DD.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, DD.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), DD._renderingMultiview && DD.outputRenderTarget && (DD.outputRenderTarget.skipInitialClear = CD)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = DD.outputRenderTarget?.renderPassId ?? DD.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let ID = 0; ID < this._softwareSkinnedMeshes.length; ID++) {
          const DD = this._softwareSkinnedMeshes.data[ID];
          DD.applySkeleton(DD.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), DD.customRenderTargets && DD.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(DD.customRenderTargets), CD && CD.customRenderTargets && CD.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(CD.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let ID = 0, bD = this._gatherActiveCameraRenderTargetsStage; ID < bD.length; ID++) {
          bD[ID].action(this._renderTargets)
        }
        let iD = !1;
        if (this.renderTargetsEnabled) {
          let DD;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            ID.g.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const CD = this.getBoundingBoxRenderer?.();
            for (let cD = 0; cD < this._renderTargets.length; cD++) {
              const ID = this._renderTargets.data[cD];
              if (ID._shouldRender()) {
                this._renderId++;
                const cD = ID.activeCamera && ID.activeCamera !== this.activeCamera;
                CD && !DD && (DD = CD.renderList.length > 0 ? CD.renderList.data.slice() : [], DD.length = CD.renderList.length), ID.render(cD, this.dumpNextRenderTargets), iD = !0
              }
            }
            CD && DD && (CD.renderList.data = DD, CD.renderList.length = DD.length), ID.g.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const CD = this.getBoundingBoxRenderer?.();
            CD && !DD && (DD = CD.renderList.length > 0 ? CD.renderList.data.slice() : [], DD.length = CD.renderList.length);
            for (let DD = 0, cD = this._cameraDrawRenderTargetStage; DD < cD.length; DD++) {
              iD = cD[DD].action(this.activeCamera) || iD
            }
            CD && DD && (CD.renderList.data = DD, CD.renderList.length = DD.length)
          }
          this._intermediateRendering = !1
        }
        iD && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || DD._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let ID = 0, bD = this._beforeCameraDrawStage; ID < bD.length; ID++) {
          bD[ID].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const fD = pD.snapshotRendering && 1 === pD.snapshotRenderingMode;
        fD && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !fD), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let ID = 0, bD = this._afterCameraDrawStage; ID < bD.length; ID++) {
          bD[ID].action(this.activeCamera)
        }
        if (this.postProcessManager && !DD._multiviewTexture) {
          const CD = DD.outputRenderTarget ? DD.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(DD.isIntermediate, CD)
        }
        for (let ID = 0, bD = this._afterCameraPostProcessStage; ID < bD.length; ID++) {
          bD[ID].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === DD.cameraRigMode || DD._renderingMultiview) return DD._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(DD, void 0, CD), void this.onAfterRenderCameraObservable.notifyObservers(DD);
        if (DD._useMultiviewToSingleView) this._renderMultiviewToSingleView(DD);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(DD);
          for (let CD = 0; CD < DD._rigCameras.length; CD++) this._renderForCamera(DD._rigCameras[CD], DD)
        }
        this._activeCamera = DD, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(DD)
      }
      _checkIntersections() {
        for (let DD = 0; DD < this._meshesForIntersections.length; DD++) {
          const CD = this._meshesForIntersections.data[DD];
          if (CD.actionManager)
            for (let DD = 0; CD.actionManager && DD < CD.actionManager.actions.length; DD++) {
              const cD = CD.actionManager.actions[DD];
              if (12 === cD.trigger || 13 === cD.trigger) {
                const DD = cD.getTriggerParameter(),
                  ID = DD.mesh ? DD.mesh : DD,
                  pD = ID.ZID(CD, DD.usePreciseIntersection),
                  iD = CD._intersectionsInProgress.indexOf(ID);
                pD && -1 === iD ? 12 === cD.trigger ? (cD._executeCurrent(tD.CreateNew(CD, void 0, ID)), CD._intersectionsInProgress.push(ID)) : 13 === cD.trigger && CD._intersectionsInProgress.push(ID) : !pD && iD > -1 && (13 === cD.trigger && cD._executeCurrent(tD.CreateNew(CD, void 0, ID)), CD.actionManager.hasSpecificTrigger(13, (DD => {
                  const CD = DD.mesh ? DD.mesh : DD;
                  return ID === CD
                })) && 13 !== cD.trigger || CD._intersectionsInProgress.splice(iD, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(DD) {}
      _animate(DD) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let DD = Math.max(ic.MinDeltaTime, Math.min(this._engine.getDeltaTime(), ic.MaxDeltaTime)) + this._timeAccumulator;
          const CD = this._engine.getTimeStep(),
            cD = 1e3 / CD / 1e3;
          let ID = 0;
          const pD = this._engine.getLockstepMaxSteps();
          let iD = Math.floor(DD / CD);
          for (iD = Math.min(iD, pD); DD > 0 && ID < iD;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = CD * cD, this._animate(CD), this.onAfterAnimationsObservable.notifyObservers(this), this.mV && this._advancePhysicsEngineStep(CD), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, ID++, DD -= CD;
          this._timeAccumulator = DD < 0 ? 0 : DD
        } else {
          const DD = this.useConstantAnimationDeltaTime ? 16 : Math.max(ic.MinDeltaTime, Math.min(this._engine.getDeltaTime(), ic.MaxDeltaTime));
          this._animationRatio = .06 * DD, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.mV && this._advancePhysicsEngineStep(DD)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(DD) {
        if (DD?.outputRenderTarget && !DD?.isRigCamera && (DD.outputRenderTarget._cleared = !1), DD?.rigCameras?.length)
          for (let CD = 0; CD < DD.rigCameras.length; ++CD) {
            const cD = DD.rigCameras[CD].outputRenderTarget;
            cD && (cD._cleared = !1)
          }
      }
      resetDrawCache(DD) {
        if (this.meshes)
          for (const CD of this.meshes) CD.resetDrawCache(DD)
      }
      _renderWithFrameGraph() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          CD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, DD)
          for (const cD of this.cameras)
            if (cD.update(), 0 !== cD.cameraRigMode)
              for (let DD = 0; DD < cD._rigCameras.length; DD++) cD._rigCameras[DD].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(CD)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(DD) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const CD = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), ID.g.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let DD = 0; DD < this._renderTargets.length; DD++) {
            const cD = this._renderTargets.data[DD],
              ID = cD.activeCamera || CD;
            this._renderRenderTarget(cD, ID, !0, this.dumpNextRenderTargets)
          }
          ID.g.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let cD = 0, ID = this._beforeClearStage; cD < ID.length; cD++) {
          ID[cD].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const CD = this.getActiveMeshCandidates(),
            cD = CD.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let DD = 0; DD < cD; DD++) {
                const cD = CD.data[DD];
                cD._internalAbstractMeshDataInfo._wasActiveLastFrame && cD.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const DD = this._activeParticleSystems.length;
              for (let CD = 0; CD < DD; CD++) this._activeParticleSystems.data[CD].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let ID = 0; ID < cD; ID++) {
              const cD = CD.data[ID];
              cD._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, cD.isBlocked || (this._totalVertices.addCount(cD.getTotalVertices(), !1), cD.isReady() && cD.isEnabled() && !cD.ci.hasAZeroComponent && (cD.computeWorldMatrix(DD), cD.actionManager && cD.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(cD)))
            }
            if (this.particlesEnabled)
              for (let DD = 0; DD < this.iH.length; DD++) {
                const CD = this.iH[DD];
                if (!CD.isStarted() || !CD.emitter) continue;
                const cD = CD.emitter;
                cD.position && !cD.isEnabled() || (this._activeParticleSystems.push(CD), CD.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, DD._shouldRender()) {
          if (this._renderId++, this.activeCamera = CD, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), DD.render(cD, ID)
        }
        this._intermediateRendering = !1
      }
      render() {
        let DD = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.jCD) return;
        const cD = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(DD, CD)
        } finally {
          this._renderingMeshEvaluationDepth = cD
        }
      }
      _renderFrame(DD, CD) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), oD.b.hq = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const cD of this.activeCameras) this._checkCameraRenderTarget(cD);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), CD || this.animate();
        for (let cD = 0, ID = this._beforeCameraUpdateStage; cD < ID.length; cD++) {
          ID[cD].action()
        }
        if (DD)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let cD = 0; cD < this.activeCameras.length; cD++) {
              const DD = this.activeCameras[cD];
              if (DD.update(), 0 !== DD.cameraRigMode)
                for (let CD = 0; CD < DD._rigCameras.length; CD++) DD._rigCameras[CD].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let cD = 0; cD < this.activeCamera._rigCameras.length; cD++) this.activeCamera._rigCameras[cD].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(DD, CD);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const DD = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            ID.g.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let CD = 0; CD < this.customRenderTargets.length; CD++) {
              const cD = this.customRenderTargets[CD],
                ID = cD.activeCamera || this.activeCamera;
              this._renderRenderTarget(cD, ID, DD !== ID, this.dumpNextRenderTargets)
            }
            ID.g.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = DD?.renderPassId ?? 0, this.activeCamera = DD, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let CD = 0, cD = this._beforeClearStage; CD < cD.length; CD++) {
            cD[CD].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let CD = 0, cD = this._gatherRenderTargetsStage; CD < cD.length; CD++) {
            cD[CD].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let CD = 0; CD < this.activeCameras.length; CD++) this._processSubCameras(this.activeCameras[CD], CD > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let cD = 0, ID = this._afterRenderStage; cD < ID.length; cD++) {
          ID[cD].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let DD = 0; DD < this._toBeDisposed.length; DD++) {
            const CD = this._toBeDisposed[DD];
            CD && CD.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let DD = 0; DD < this.materials.length; DD++) this.materials[DD].freeze()
      }
      unfreezeMaterials() {
        for (let DD = 0; DD < this.materials.length; DD++) this.materials[DD].unfreeze()
      }
      dispose() {
        if (this.jCD) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, mD.d)(this.stopAllAnimations)) {
          for (const DD of this._activeAnimatables) DD.onAnimationEndObservable.clear(), DD.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const DD = this._activeRequests.slice();
        for (const iD of DD) iD.abort();
        this._activeRequests.length = 0;
        try {
          this.Aq.notifyObservers(this)
        } catch (pD) {
          Dc.e.Error("An error occurred while calling onDisposeObservable!", pD)
        }
        this.detachControl();
        const CD = this._engine.getInputElement?.();
        if (CD)
          for (let iD = 0; iD < this.cameras.length; iD++) this.cameras[iD].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (DD => DD.dispose(!0))), this._disposeList(this.transformNodes, (DD => DD.dispose(!0)));
        const cD = this.cameras;
        this._disposeList(cD), this._disposeList(this.iH), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let ID = this._engine.scenes.indexOf(this);
        if (ID > -1 && this._engine.scenes.splice(ID, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, oD.e)(), XD.b._LastCreatedScene === this) {
          XD.b._LastCreatedScene = null;
          let DD = XD.b.Instances.length - 1;
          for (; DD >= 0;) {
            const CD = XD.b.Instances[DD];
            if (CD.scenes.length > 0) {
              XD.b._LastCreatedScene = CD.scenes[this._engine.scenes.length - 1];
              break
            }
            DD--
          }
        }
        ID = this._engine._virtualScenes.indexOf(this), ID > -1 && this._engine._virtualScenes.splice(ID, 1), this._engine.wipeCaches(!0), this.Aq.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(DD, CD) {
        const cD = DD.slice(0);
        CD = CD ?? (DD => DD.dispose());
        for (const ID of cD) CD(ID);
        DD.length = 0
      }
      get jCD() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let DD = 0; DD < this.meshes.length; DD++) {
          const CD = this.meshes[DD].geometry;
          CD && CD.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const DD of this.textures) {
          DD._buffer && (DD._buffer = null)
        }
      }
      getWorldExtends(DD) {
        const CD = new SD.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          cD = new SD.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        DD = DD || (() => !0);
        const ID = this.meshes.filter(DD);
        for (const pD of ID) {
          if (pD.computeWorldMatrix(!0), !pD.IH || 0 === pD.IH.length || pD.infiniteDistance) continue;
          const DD = pD.VJ(),
            ID = DD.boundingBox.minimumWorld,
            iD = DD.boundingBox.maximumWorld;
          SD.p.CheckExtends(ID, CD, cD), SD.p.CheckExtends(iD, CD, cD)
        }
        return CD.x === Number.MAX_VALUE ? {
          min: SD.p.Zero(),
          max: SD.p.Zero()
        } : {
          min: CD,
          max: cD
        }
      }
      createPickingRay(DD, CD, cD, ID) {
        throw (0, mD.m)("Ray")
      }
      createPickingRayToRef(DD, CD, cD, ID, pD) {
        throw (0, mD.m)("Ray")
      }
      createPickingRayInCameraSpace(DD, CD, cD) {
        throw (0, mD.m)("Ray")
      }
      createPickingRayInCameraSpaceToRef(DD, CD, cD, ID) {
        throw (0, mD.m)("Ray")
      }
      MM(DD, CD, cD, ID, pD, iD) {
        const fD = (0, mD.m)("Ray", !0);
        return fD && Dc.e.Warn(fD), new MD.c
      }
      pickWithBoundingInfo(DD, CD, cD, ID, pD) {
        const iD = (0, mD.m)("Ray", !0);
        return iD && Dc.e.Warn(iD), new MD.c
      }
      pickWithRay(DD, CD, cD, ID) {
        throw (0, mD.m)("Ray")
      }
      multiPick(DD, CD, cD, ID, pD) {
        throw (0, mD.m)("Ray")
      }
      multiPickWithRay(DD, CD, cD) {
        throw (0, mD.m)("Ray")
      }
      setPointerOverMesh(DD, CD, cD) {
        this._inputManager.setPointerOverMesh(DD, CD, cD)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const DD of this.geometries) DD._rebuild();
        for (const DD of this.meshes) DD._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const DD of this._components) DD.rebuild();
        for (const DD of this.iH) DD.rebuild();
        if (this.spriteManagers)
          for (const DD of this.spriteManagers) DD.rebuild()
      }
      _rebuildTextures() {
        for (const DD of this.textures) DD._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(DD, CD, cD) {
        if (void 0 === CD) return DD;
        const ID = [];
        for (const pD in DD) {
          const iD = DD[pD];
          wD.c && wD.c.MatchesQuery(iD, CD) && (!cD || cD(iD)) && ID.push(iD)
        }
        return ID
      }
      getMeshesByTags(DD, CD) {
        return this._getByTags(this.meshes, DD, CD)
      }
      getCamerasByTags(DD, CD) {
        return this._getByTags(this.cameras, DD, CD)
      }
      getLightsByTags(DD, CD) {
        return this._getByTags(this.lights, DD, CD)
      }
      getMaterialByTags(DD, CD) {
        return this._getByTags(this.materials, DD, CD).concat(this._getByTags(this.multiMaterials, DD, CD))
      }
      getTransformNodesByTags(DD, CD) {
        return this._getByTags(this.transformNodes, DD, CD)
      }
      setRenderingOrder(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(DD, CD, cD, ID)
      }
      setRenderingAutoClearDepthStencil(DD, CD) {
        let cD = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          ID = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(DD, CD, cD, ID)
      }
      getAutoClearDepthStencilSetup(DD) {
        return this._renderingManager.getAutoClearDepthStencilSetup(DD)
      }
      _forceBlockMaterialDirtyMechanism(DD) {
        this._blockMaterialDirtyMechanism = DD
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(DD) {
        this._blockMaterialDirtyMechanism !== DD && (this._blockMaterialDirtyMechanism = DD, DD || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(DD, CD) {
        if (!this._blockMaterialDirtyMechanism)
          for (const cD of this.materials) CD && !CD(cD) || cD.sDD(DD)
      }
      _loadFile(DD, CD, cD, ID, pD, iD, fD) {
        const bD = (0, uD.n)(DD, CD, cD, ID ? this.offlineProvider : void 0, pD, iD, fD);
        return this._activeRequests.push(bD), bD.onCompleteObservable.add((DD => {
          this._activeRequests.splice(this._activeRequests.indexOf(DD), 1)
        })), bD
      }
      async _loadFileAsync(DD, CD, cD, ID, pD) {
        return await new Promise(((iD, fD) => {
          this._loadFile(DD, (DD => {
            iD(DD)
          }), CD, cD, ID, ((DD, CD) => {
            fD(CD)
          }), pD)
        }))
      }
      async _loadDelayedFileAsync(DD, CD, cD) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const ID = `${DD}|${CD?"binary":"string"}`;
        let pD = this._delayedFileRequests.get(ID);
        if (!pD) {
          pD = CD ? this._loadFileAsync(DD, void 0, cD, !0) : this._loadFileAsync(DD, void 0, cD, !1);
          const iD = pD;
          (async () => {
            try {
              await iD
            } catch {}
            this._delayedFileRequests?.delete(ID)
          })(), this._delayedFileRequests.set(ID, pD)
        }
        return await pD
      }
      _requestFile(DD, CD, cD, ID, pD, iD, fD) {
        const bD = (0, uD.u)(DD, CD, cD, ID ? this.offlineProvider : void 0, pD, iD, fD);
        return this._activeRequests.push(bD), bD.onCompleteObservable.add((DD => {
          this._activeRequests.splice(this._activeRequests.indexOf(DD), 1)
        })), bD
      }
      async _requestFileAsync(DD, CD, cD, ID, pD) {
        return await new Promise(((iD, fD) => {
          this._requestFile(DD, (DD => {
            iD(DD)
          }), CD, cD, ID, (DD => {
            fD(DD)
          }), pD)
        }))
      }
      _readFile(DD, CD, cD, ID, pD) {
        const iD = (0, uD.s)(DD, CD, cD, ID, pD);
        return this._activeRequests.push(iD), iD.onCompleteObservable.add((DD => {
          this._activeRequests.splice(this._activeRequests.indexOf(DD), 1)
        })), iD
      }
      async _readFileAsync(DD, CD, cD) {
        return await new Promise(((ID, pD) => {
          this._readFile(DD, (DD => {
            ID(DD)
          }), CD, cD, (DD => {
            pD(DD)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, mD.m)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(DD) {
        return this.setActiveCameraById(DD)
      }
      getMaterialByID(DD) {
        return this.getMaterialById(DD)
      }
      getLastMaterialByID(DD) {
        return this.getLastMaterialById(DD)
      }
      getTextureByUniqueID(DD) {
        return this.getTextureByUniqueId(DD)
      }
      getCameraByID(DD) {
        return this.getCameraById(DD)
      }
      getCameraByUniqueID(DD) {
        return this.getCameraByUniqueId(DD)
      }
      getBoneByID(DD) {
        return this.getBoneById(DD)
      }
      getLightByID(DD) {
        return this.getLightById(DD)
      }
      getLightByUniqueID(DD) {
        return this.getLightByUniqueId(DD)
      }
      getParticleSystemByID(DD) {
        return this.getParticleSystemById(DD)
      }
      getGeometryByID(DD) {
        return this.getGeometryById(DD)
      }
      getMeshByID(DD) {
        return this.getMeshById(DD)
      }
      getMeshByUniqueID(DD) {
        return this.getMeshByUniqueId(DD)
      }
      getLastMeshByID(DD) {
        return this.getLastMeshById(DD)
      }
      getMeshesByID(DD) {
        return this.getMeshesById(DD)
      }
      getTransformNodeByID(DD) {
        return this.getTransformNodeById(DD)
      }
      getTransformNodeByUniqueID(DD) {
        return this.getTransformNodeByUniqueId(DD)
      }
      getTransformNodesByID(DD) {
        return this.getTransformNodesById(DD)
      }
      getNodeByID(DD) {
        return this.getNodeById(DD)
      }
      getLastEntryByID(DD) {
        return this.getLastEntryById(DD)
      }
      getLastSkeletonByID(DD) {
        return this.getLastSkeletonById(DD)
      }
    }
    ic.FOGMODE_NONE = 0, ic.FOGMODE_EXP = 1, ic.FOGMODE_EXP2 = 2, ic.FOGMODE_LINEAR = 3, ic.MinDeltaTime = 1, ic.MaxDeltaTime = 1e3, ic._OriginalDefaultMaterialFactory = ic.DefaultMaterialFactory;
    let fc = !1;

    function bc() {
      fc || (fc = !0, (0, Cc.d)("BABYLON.Scene", ic))
    }(FD = ic.prototype).sortActiveAnimatables ?? (FD.sortActiveAnimatables = (0, mD.j)("Scene", "sortActiveAnimatables")), (DC = ic.prototype).beginWeightedAnimation ?? (DC.beginWeightedAnimation = (0, mD.j)("Scene", "beginWeightedAnimation")), (CC = ic.prototype).beginAnimation ?? (CC.beginAnimation = (0, mD.j)("Scene", "beginAnimation")), (cC = ic.prototype).beginHierarchyAnimation ?? (cC.beginHierarchyAnimation = (0, mD.j)("Scene", "beginHierarchyAnimation")), (IC = ic.prototype).beginDirectAnimation ?? (IC.beginDirectAnimation = (0, mD.j)("Scene", "beginDirectAnimation")), (pC = ic.prototype).beginDirectHierarchyAnimation ?? (pC.beginDirectHierarchyAnimation = (0, mD.j)("Scene", "beginDirectHierarchyAnimation")), (iC = ic.prototype).getAnimatableByTarget ?? (iC.getAnimatableByTarget = (0, mD.j)("Scene", "getAnimatableByTarget")), (fC = ic.prototype).getAllAnimatablesByTarget ?? (fC.getAllAnimatablesByTarget = (0, mD.j)("Scene", "getAllAnimatablesByTarget")), (bC = ic.prototype).stopAllAnimations ?? (bC.stopAllAnimations = (0, mD.j)("Scene", "stopAllAnimations")), (QC = ic.prototype).getSoundByName ?? (QC.getSoundByName = (0, mD.j)("Scene", "getSoundByName")), (wC = ic.prototype).createOrUpdateSelectionOctree ?? (wC.createOrUpdateSelectionOctree = (0, mD.j)("Scene", "createOrUpdateSelectionOctree")), (SC = ic.prototype).createDefaultLight ?? (SC.createDefaultLight = (0, mD.j)("Scene", "createDefaultLight")), (BC = ic.prototype).createDefaultCamera ?? (BC.createDefaultCamera = (0, mD.j)("Scene", "createDefaultCamera")), (yC = ic.prototype).createDefaultCameraOrLight ?? (yC.createDefaultCameraOrLight = (0, mD.j)("Scene", "createDefaultCameraOrLight")), (MC = ic.prototype).createDefaultSkybox ?? (MC.createDefaultSkybox = (0, mD.j)("Scene", "createDefaultSkybox")), (tC = ic.prototype).createDefaultEnvironment ?? (tC.createDefaultEnvironment = (0, mD.j)("Scene", "createDefaultEnvironment")), (ZC = ic.prototype).createDefaultVRExperience ?? (ZC.createDefaultVRExperience = (0, mD.j)("Scene", "createDefaultVRExperience")), (oC = ic.prototype).createDefaultXRExperienceAsync ?? (oC.createDefaultXRExperienceAsync = (0, mD.j)("Scene", "createDefaultXRExperienceAsync")), (vC = ic.prototype).getGlowLayerByName ?? (vC.getGlowLayerByName = (0, mD.j)("Scene", "getGlowLayerByName")), (NC = ic.prototype).getHighlightLayerByName ?? (NC.getHighlightLayerByName = (0, mD.j)("Scene", "getHighlightLayerByName")), (gC = ic.prototype).getSelectionOutlineLayerByName ?? (gC.getSelectionOutlineLayerByName = (0, mD.j)("Scene", "getSelectionOutlineLayerByName")), (XC = ic.prototype).removeLensFlareSystem ?? (XC.removeLensFlareSystem = (0, mD.j)("Scene", "removeLensFlareSystem")), (mC = ic.prototype).addLensFlareSystem ?? (mC.addLensFlareSystem = (0, mD.j)("Scene", "addLensFlareSystem")), (nC = ic.prototype).getLensFlareSystemByName ?? (nC.getLensFlareSystemByName = (0, mD.j)("Scene", "getLensFlareSystemByName")), (OC = ic.prototype).getLensFlareSystemByID ?? (OC.getLensFlareSystemByID = (0, mD.j)("Scene", "getLensFlareSystemByID")), (PC = ic.prototype).getLensFlareSystemById ?? (PC.getLensFlareSystemById = (0, mD.j)("Scene", "getLensFlareSystemById")), (HC = ic.prototype).getPhysicsEngine ?? (HC.getPhysicsEngine = (0, mD.j)("Scene", "getPhysicsEngine")), (UC = ic.prototype).enablePhysics ?? (UC.enablePhysics = (0, mD.j)("Scene", "enablePhysics")), (xC = ic.prototype).disablePhysicsEngine ?? (xC.disablePhysicsEngine = (0, mD.j)("Scene", "disablePhysicsEngine")), (qC = ic.prototype).isPhysicsEnabled ?? (qC.isPhysicsEnabled = (0, mD.j)("Scene", "isPhysicsEnabled")), (JC = ic.prototype).deleteCompoundImpostor ?? (JC.deleteCompoundImpostor = (0, mD.j)("Scene", "deleteCompoundImpostor")), (KC = ic.prototype).removeReflectionProbe ?? (KC.removeReflectionProbe = (0, mD.j)("Scene", "removeReflectionProbe")), (aC = ic.prototype).addReflectionProbe ?? (aC.addReflectionProbe = (0, mD.j)("Scene", "addReflectionProbe")), (VC = ic.prototype).getBoundingBoxRenderer ?? (VC.getBoundingBoxRenderer = (0, mD.j)("Scene", "getBoundingBoxRenderer")), (zC = ic.prototype).enableDepthRenderer ?? (zC.enableDepthRenderer = (0, mD.j)("Scene", "enableDepthRenderer")), (jC = ic.prototype).disableDepthRenderer ?? (jC.disableDepthRenderer = (0, mD.j)("Scene", "disableDepthRenderer")), (lC = ic.prototype).enableFluidRenderer ?? (lC.enableFluidRenderer = (0, mD.j)("Scene", "enableFluidRenderer")), (LC = ic.prototype).disableFluidRenderer ?? (LC.disableFluidRenderer = (0, mD.j)("Scene", "disableFluidRenderer")), (TC = ic.prototype).enableGeometryBufferRenderer ?? (TC.enableGeometryBufferRenderer = (0, mD.j)("Scene", "enableGeometryBufferRenderer")), (GC = ic.prototype).disableGeometryBufferRenderer ?? (GC.disableGeometryBufferRenderer = (0, mD.j)("Scene", "disableGeometryBufferRenderer")), (RC = ic.prototype).enableIblCdfGenerator ?? (RC.enableIblCdfGenerator = (0, mD.j)("Scene", "enableIblCdfGenerator")), (kC = ic.prototype).disableIblCdfGenerator ?? (kC.disableIblCdfGenerator = (0, mD.j)("Scene", "disableIblCdfGenerator")), (dC = ic.prototype).getOutlineRenderer ?? (dC.getOutlineRenderer = (0, mD.j)("Scene", "getOutlineRenderer")), (YC = ic.prototype).enablePrePassRenderer ?? (YC.enablePrePassRenderer = (0, mD.j)("Scene", "enablePrePassRenderer")), (WC = ic.prototype).disablePrePassRenderer ?? (WC.disablePrePassRenderer = (0, mD.j)("Scene", "disablePrePassRenderer")), (sC = ic.prototype).enableSubSurfaceForPrePass ?? (sC.enableSubSurfaceForPrePass = (0, mD.j)("Scene", "enableSubSurfaceForPrePass")), (EC = ic.prototype).disableSubSurfaceForPrePass ?? (EC.disableSubSurfaceForPrePass = (0, mD.j)("Scene", "disableSubSurfaceForPrePass")), (eC = ic.prototype).pickSprite ?? (eC.pickSprite = (0, mD.j)("Scene", "pickSprite")), (uC = ic.prototype).pickSpriteWithRay ?? (uC.pickSpriteWithRay = (0, mD.j)("Scene", "pickSpriteWithRay")), (hC = ic.prototype).multiPickSprite ?? (hC.multiPickSprite = (0, mD.j)("Scene", "multiPickSprite")), (rC = ic.prototype).multiPickSpriteWithRay ?? (rC.multiPickSpriteWithRay = (0, mD.j)("Scene", "multiPickSpriteWithRay")), (AC = ic.prototype).setPointerOverSprite ?? (AC.setPointerOverSprite = (0, mD.j)("Scene", "setPointerOverSprite")), (FC = ic.prototype).getPointerOverSprite ?? (FC.getPointerOverSprite = (0, mD.j)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(ic.prototype, "mainSoundTrack") || Object.defineProperty(ic.prototype, "mainSoundTrack", (0, mD.g)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(ic.prototype, "soundTracks") || Object.defineProperty(ic.prototype, "soundTracks", (0, mD.g)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(ic.prototype, "audioEnabled") || Object.defineProperty(ic.prototype, "audioEnabled", (0, mD.g)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(ic.prototype, "headphone") || Object.defineProperty(ic.prototype, "headphone", (0, mD.g)("Scene", "headphone")), Object.getOwnPropertyDescriptor(ic.prototype, "audioListenerPositionProvider") || Object.defineProperty(ic.prototype, "audioListenerPositionProvider", (0, mD.g)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(ic.prototype, "audioListenerRotationProvider") || Object.defineProperty(ic.prototype, "audioListenerRotationProvider", (0, mD.g)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(ic.prototype, "audioPositioningRefreshRate") || Object.defineProperty(ic.prototype, "audioPositioningRefreshRate", (0, mD.g)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(ic.prototype, "selectionOctree") || Object.defineProperty(ic.prototype, "selectionOctree", (0, mD.g)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(ic.prototype, "debugLayer") || Object.defineProperty(ic.prototype, "debugLayer", (0, mD.g)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(ic.prototype, "gamepadManager") || Object.defineProperty(ic.prototype, "gamepadManager", (0, mD.g)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(ic.prototype, "simplificationQueue") || Object.defineProperty(ic.prototype, "simplificationQueue", (0, mD.g)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(ic.prototype, "onBeforePhysicsObservable") || Object.defineProperty(ic.prototype, "onBeforePhysicsObservable", (0, mD.g)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(ic.prototype, "onAfterPhysicsObservable") || Object.defineProperty(ic.prototype, "onAfterPhysicsObservable", (0, mD.g)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(ic.prototype, "reflectionProbes") || Object.defineProperty(ic.prototype, "reflectionProbes", (0, mD.g)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(ic.prototype, "forceShowBoundingBoxes") || Object.defineProperty(ic.prototype, "forceShowBoundingBoxes", (0, mD.g)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(ic.prototype, "depthPeelingRenderer") || Object.defineProperty(ic.prototype, "depthPeelingRenderer", (0, mD.g)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(ic.prototype, "useOrderIndependentTransparency") || Object.defineProperty(ic.prototype, "useOrderIndependentTransparency", (0, mD.g)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(ic.prototype, "fluidRenderer") || Object.defineProperty(ic.prototype, "fluidRenderer", (0, mD.g)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(ic.prototype, "geometryBufferRenderer") || Object.defineProperty(ic.prototype, "geometryBufferRenderer", (0, mD.g)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(ic.prototype, "iblCdfGenerator") || Object.defineProperty(ic.prototype, "iblCdfGenerator", (0, mD.g)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(ic.prototype, "prePassRenderer") || Object.defineProperty(ic.prototype, "prePassRenderer", (0, mD.g)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(ic.prototype, "subSurfaceConfiguration") || Object.defineProperty(ic.prototype, "subSurfaceConfiguration", (0, mD.g)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(ic.prototype, "spriteManagers") || Object.defineProperty(ic.prototype, "spriteManagers", (0, mD.g)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(ic.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(ic.prototype, "onBeforeSpritesRenderingObservable", (0, mD.g)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(ic.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(ic.prototype, "onAfterSpritesRenderingObservable", (0, mD.g)("Scene", "onAfterSpritesRenderingObservable"))
  },
  39315: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => ID,
      f: () => pD
    });
    class ID {}
    ID.NAME_EFFECTLAYER = "EffectLayer", ID.NAME_LAYER = "Layer", ID.NAME_LENSFLARESYSTEM = "LensFlareSystem", ID.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", ID.NAME_PARTICLESYSTEM = "ParticleSystem", ID.NAME_GAMEPAD = "Gamepad", ID.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", ID.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", ID.NAME_PREPASSRENDERER = "PrePassRenderer", ID.NAME_DEPTHRENDERER = "DepthRenderer", ID.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", ID.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", ID.NAME_SPRITE = "Sprite", ID.NAME_SUBSURFACE = "SubSurface", ID.NAME_OUTLINERENDERER = "Outline", ID.NAME_PROCEDURALTEXTURE = "ProceduralTexture", ID.NAME_SHADOWGENERATOR = "ShadowGenerator", ID.NAME_OCTREE = "jcD", ID.NAME_PHYSICSENGINE = "PhysicsEngine", ID.NAME_AUDIO = "Audio", ID.NAME_FLUIDRENDERER = "FluidRenderer", ID.NAME_IBLCDFGENERATOR = "iblCDFGenerator", ID.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", ID.STEP_ISREADYFORMESH_EFFECTLAYER = 0, ID.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, ID.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, ID.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, ID.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, ID.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, ID.STEP_BEFORECAMERADRAW_PREPASS = 0, ID.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, ID.STEP_BEFORECAMERADRAW_LAYER = 2, ID.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, ID.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, ID.STEP_BEFORERENDERINGMESH_PREPASS = 0, ID.STEP_BEFORERENDERINGMESH_OUTLINE = 1, ID.STEP_AFTERRENDERINGMESH_PREPASS = 0, ID.STEP_AFTERRENDERINGMESH_OUTLINE = 1, ID.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, ID.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, ID.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, ID.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, ID.STEP_BEFORECLEAR_PREPASS = 1, ID.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, ID.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, ID.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, ID.STEP_AFTERCAMERADRAW_PREPASS = 0, ID.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, ID.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, ID.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, ID.STEP_AFTERCAMERADRAW_LAYER = 4, ID.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, ID.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, ID.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, ID.STEP_AFTERRENDER_AUDIO = 0, ID.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, ID.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, ID.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, ID.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, ID.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, ID.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, ID.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, ID.STEP_POINTERMOVE_SPRITE = 0, ID.STEP_POINTERDOWN_SPRITE = 0, ID.STEP_POINTERUP_SPRITE = 0;
    class pD extends Array {
      constructor(DD) {
        super(...DD)
      }
      static Create() {
        return Object.create(pD.prototype)
      }
      registerStep(DD, CD, cD) {
        let ID, pD = 0;
        for (; pD < this.length; pD++) {
          if (ID = this[pD].index, DD < ID) break
        }
        this.splice(pD, 0, {
          index: DD,
          component: CD,
          action: cD.bind(CD)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  39154: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fD,
      g: () => bD,
      k: () => ID,
      m: () => pD,
      o: () => iD
    });

    function ID(DD, CD, cD, ID, pD, iD) {
      function fD(DD) {
        if (void 0 !== DD && "function" !== typeof DD) throw new TypeError("Function expected");
        return DD
      }
      for (var bD, QD = ID.kind, wD = "getter" === QD ? "get" : "setter" === QD ? "set" : "value", SD = !CD && DD ? ID.static ? DD : DD.prototype : null, BD = CD || (SD ? Object.getOwnPropertyDescriptor(SD, ID.name) : {}), yD = !1, MD = cD.length - 1; MD >= 0; MD--) {
        var tD = {};
        for (var ZD in ID) tD[ZD] = "access" === ZD ? {} : ID[ZD];
        for (var ZD in ID.access) tD.access[ZD] = ID.access[ZD];
        tD.addInitializer = function(DD) {
          if (yD) throw new TypeError("Cannot add initializers after decoration has completed");
          iD.push(fD(DD || null))
        };
        var oD = (0, cD[MD])("accessor" === QD ? {
          get: BD.get,
          set: BD.set
        } : BD[wD], tD);
        if ("accessor" === QD) {
          if (void 0 === oD) continue;
          if (null === oD || "object" !== typeof oD) throw new TypeError("Object expected");
          (bD = fD(oD.get)) && (BD.get = bD), (bD = fD(oD.set)) && (BD.set = bD), (bD = fD(oD.init)) && pD.unshift(bD)
        } else(bD = fD(oD)) && ("field" === QD ? pD.unshift(bD) : BD[wD] = bD)
      }
      SD && Object.defineProperty(SD, ID.name, BD), yD = !0
    }

    function pD(DD, CD, cD) {
      for (var ID = arguments.length > 2, pD = 0; pD < CD.length; pD++) cD = ID ? CD[pD].call(DD, cD) : CD[pD].call(DD);
      return ID ? cD : void 0
    }

    function iD(DD, CD, cD) {
      return "symbol" === typeof CD && (CD = CD.description ? "[".concat(CD.description, "]") : ""), Object.defineProperty(DD, "name", {
        configurable: !0,
        value: cD ? "".concat(cD, " ", CD) : CD
      })
    }
    Object.create;
    Object.create;

    function fD(DD, CD, cD, ID) {
      if ("a" === cD && !ID) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof CD ? DD !== CD || !ID : !CD.has(DD)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === cD ? ID : "a" === cD ? ID.call(DD) : ID ? ID.value : CD.get(DD)
    }

    function bD(DD, CD, cD, ID, pD) {
      if ("m" === ID) throw new TypeError("Private method is not writable");
      if ("a" === ID && !pD) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof CD ? DD !== CD || !pD : !CD.has(DD)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === ID ? pD.call(DD, cD) : pD ? pD.value = cD : CD.set(DD, cD), cD
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);