export const id = 222;
export const ids = [222];
export const modules = {
  38109: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => bW,
      g: () => rW,
      h: () => PF,
      k: () => dF
    });
    var CF = SF(37893),
      AF = SF(37076),
      uF = SF(38031),
      hF = SF(37935);
    class bW {
      get ZdF() {
        return this._isDisposed
      }
      constructor(FF, WF, SF) {
        let AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          uF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          bW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          dF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          PF = arguments.length > 7 ? arguments[7] : void 0,
          RF = arguments.length > 8 ? arguments[8] : void 0;
        this._isAlreadyOwned = !1, this._isDisposed = !1, (0, hF.c)(), FF && FF.OWF ? this._engine = FF.OWF().sC() : this._engine = FF, this._updatable = SF, this._instanced = bW, this._divisor = PF || 1, this._label = RF, WF instanceof CF.d ? (this._data = null, this._buffer = WF) : (this._data = WF, this._buffer = null), this.byteStride = dF ? AF : AF * Float32Array.BYTES_PER_ELEMENT, uF || this.create()
      }
      createVertexBuffer(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          hF = arguments.length > 6 ? arguments[6] : void 0;
        const bW = uF ? WF : WF * Float32Array.BYTES_PER_ELEMENT,
          PF = CF ? uF ? CF : CF * Float32Array.BYTES_PER_ELEMENT : this.byteStride;
        return new dF(this._engine, this, FF, this._updatable, !0, PF, void 0 === AF ? this._instanced : AF, bW, SF, void 0, void 0, !0, this._divisor || hF)
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
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        !FF && this._buffer || (FF = FF || this._data, FF && (this._buffer ? this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, FF), this._data = FF) : this._updatable ? (this._buffer = this._engine.createDynamicVertexBuffer(FF, this._label), this._data = FF) : this._buffer = this._engine.createVertexBuffer(FF, void 0, this._label)))
      }
      _rebuild() {
        if (this._data) this._buffer = null, this.create(this._data);
        else {
          if (!this._buffer) return;
          if (this._buffer.ZF > 0) return void(this._updatable ? this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.ZF, this._label) : this._buffer = this._engine.createVertexBuffer(this._buffer.ZF, void 0, this._label));
          AF.b.Warn(`Missing data for buffer "${this._label}" ${this._buffer?"(uniqueId: "+this._buffer.uniqueId+")":""}. Buffer reconstruction failed.`), this._buffer = null
        }
      }
      update(FF) {
        this.create(FF)
      }
      updateDirectly(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._buffer && this._updatable && (this._engine.updateDynamicVertexBuffer(this._buffer, FF, CF ? WF : WF * Float32Array.BYTES_PER_ELEMENT, SF ? SF * this.byteStride : void 0), this._data = 0 === WF && void 0 === SF ? FF : null)
      }
      _increaseReferences() {
        this._buffer && (this._isAlreadyOwned ? this._buffer.references++ : this._isAlreadyOwned = !0)
      }
      dispose() {
        this._buffer && this._engine._releaseBuffer(this._buffer) && (this._isDisposed = !0, this._data = null, this._buffer = null)
      }
    }
    class dF {
      get ZdF() {
        return this._isDisposed
      }
      get instanceDivisor() {
        return this._instanceDivisor
      }
      set instanceDivisor(FF) {
        const WF = 0 != FF;
        this._instanceDivisor = FF, WF !== this._instanced && (this._instanced = WF, this._computeHashCode())
      }
      get _maxVerticesCount() {
        const FF = this.getData();
        return FF ? Array.isArray(FF) ? FF.length / (this.byteStride / 4) - this.byteOffset / 4 : (FF.byteLength - this.byteOffset) / this.byteStride : 0
      }
      constructor(FF, WF, SF, CF, AF, hF, iW, eF, EF, QF) {
        let rW, gW = arguments.length > 10 && void 0 !== arguments[10] && arguments[10],
          tW = arguments.length > 11 && void 0 !== arguments[11] && arguments[11],
          TF = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : 1,
          aW = arguments.length > 13 && void 0 !== arguments[13] && arguments[13];
        if (this._isDisposed = !1, this.engine = FF, "object" === typeof CF && null !== CF ? (rW = CF.updatable ?? !1, AF = CF.postponeInternalCreation, hF = CF.stride, iW = CF.instanced, eF = CF.offset, EF = CF.size, QF = CF.type, gW = CF.normalized ?? !1, tW = CF.useBytes ?? !1, TF = CF.divisor ?? 1, aW = CF.takeBufferOwnership ?? !1, this._label = CF.label) : rW = !!CF, WF instanceof bW ? (this._buffer = WF, this._ownsBuffer = aW) : (this._buffer = new bW(FF, WF, rW, hF, AF, iW, tW, TF, this._label), this._ownsBuffer = !0), this.uniqueId = dF._Counter++, this._kind = SF, void 0 === QF) {
          const FF = this.getData();
          this.type = FF ? RF(FF) : dF.FLOAT
        } else this.type = QF;
        const kW = (0, uF.t)(this.type);
        tW ? (this._size = EF || (hF ? hF / kW : PF(SF)), this.byteStride = hF || this._buffer.byteStride || this._size * kW, this.byteOffset = eF || 0) : (this._size = EF || hF || PF(SF), this.byteStride = hF ? hF * kW : this._buffer.byteStride || this._size * kW, this.byteOffset = (eF || 0) * kW), this.normalized = gW, this._instanced = void 0 !== iW && iW, this._instanceDivisor = iW ? TF : 0, this._alignBuffer(), this._computeHashCode()
      }
      static _GetTypeHashIndex(FF) {
        switch (FF) {
          case dF.BYTE:
            return 0;
          case dF.UNSIGNED_BYTE:
            return 1;
          case dF.SHORT:
            return 2;
          case dF.UNSIGNED_SHORT:
            return 3;
          case dF.INT:
            return 4;
          case dF.UNSIGNED_INT:
            return 5;
          case dF.FLOAT:
            return 6;
          case dF.HALF_FLOAT:
            return 7;
          default:
            throw new Error(`Invalid vertex buffer type '${FF}'`)
        }
      }
      _computeHashCode() {
        this.hashCode = (dF._GetTypeHashIndex(this.type) | 0) + ((this.normalized ? 1 : 0) << 3) + (this._size - 1 << 4) + ((this._instanced ? 1 : 0) << 6) + (this.byteStride << 12)
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
      getFloatData(FF, WF) {
        const SF = this.getData();
        return SF ? (0, uF.r)(SF, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, FF, WF) : null
      }
      getBuffer() {
        return this._buffer.getBuffer()
      }
      getWrapperBuffer() {
        return this._buffer
      }
      getStrideSize() {
        return this.byteStride / (0, uF.t)(this.type)
      }
      TdF() {
        return this.byteOffset / (0, uF.t)(this.type)
      }
      getSize() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? this._size * (0, uF.t)(this.type) : this._size
      }
      getIsInstanced() {
        return this._instanced
      }
      getInstanceDivisor() {
        return this._instanceDivisor
      }
      create(FF) {
        this._buffer.create(FF), this._alignBuffer()
      }
      update(FF) {
        this._buffer.update(FF), this._alignBuffer()
      }
      updateDirectly(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this._buffer.updateDirectly(FF, WF, void 0, SF), this._alignBuffer()
      }
      dispose() {
        this._ownsBuffer && this._buffer.dispose(), this._isDisposed = !0
      }
      forEach(FF, WF) {
        (0, uF.m)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, FF, this.normalized, ((FF, SF) => {
          for (let CF = 0; CF < this._size; CF++) WF(FF[CF], SF + CF)
        }))
      }
      _alignBuffer() {}
    }

    function PF(FF) {
      switch (FF) {
        case dF.UVKind:
        case dF.UV2Kind:
        case dF.UV3Kind:
        case dF.UV4Kind:
        case dF.UV5Kind:
        case dF.UV6Kind:
          return 2;
        case dF.NormalKind:
        case dF.PositionKind:
          return 3;
        case dF.ColorKind:
        case dF.ColorInstanceKind:
        case dF.MatricesIndicesKind:
        case dF.MatricesIndicesExtraKind:
        case dF.MatricesWeightsKind:
        case dF.MatricesWeightsExtraKind:
        case dF.TangentKind:
          return 4;
        default:
          throw new Error("Invalid kind '" + FF + "'")
      }
    }

    function RF(FF) {
      return FF instanceof Int8Array ? dF.BYTE : FF instanceof Uint8Array ? dF.UNSIGNED_BYTE : FF instanceof Int16Array ? dF.SHORT : FF instanceof Uint16Array ? dF.UNSIGNED_SHORT : FF instanceof Int32Array ? dF.INT : FF instanceof Uint32Array ? dF.UNSIGNED_INT : dF.FLOAT
    }

    function iW(FF) {
      return (0, uF.t)(FF)
    }

    function eF(FF, WF, SF, CF, AF, hF, bW, dF) {
      (0, uF.m)(FF, WF, SF, CF, AF, hF, bW, ((FF, WF) => {
        for (let SF = 0; SF < CF; SF++) dF(FF[SF], WF + SF)
      }))
    }

    function EF(FF, WF, SF, CF, AF, hF, bW, dF) {
      return (0, uF.r)(FF, WF, SF, CF, AF, hF, bW, dF)
    }
    dF._Counter = 0, dF.BYTE = 5120, dF.UNSIGNED_BYTE = 5121, dF.SHORT = 5122, dF.UNSIGNED_SHORT = 5123, dF.INT = 5124, dF.UNSIGNED_INT = 5125, dF.FLOAT = 5126, dF.HALF_FLOAT = 5131, dF.PositionKind = "position", dF.NormalKind = "normal", dF.TangentKind = "tangent", dF.UVKind = "uv", dF.UV2Kind = "uv2", dF.UV3Kind = "uv3", dF.UV4Kind = "uv4", dF.UV5Kind = "uv5", dF.UV6Kind = "uv6", dF.ColorKind = "color", dF.ColorInstanceKind = "instanceColor", dF.MatricesIndicesKind = "matricesIndices", dF.MatricesWeightsKind = "matricesWeights", dF.MatricesIndicesExtraKind = "matricesIndicesExtra", dF.MatricesWeightsExtraKind = "matricesWeightsExtra";
    let QF = !1;

    function rW() {
      QF || (QF = !0, dF.DeduceStride = PF, dF.GetDataType = RF, dF.GetTypeByteLength = iW, dF.ForEach = eF, dF.GetFloatData = EF)
    }
  },
  37893: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF
    });
    class CF {
      get underlyingResource() {
        return null
      }
      constructor() {
        this.references = 0, this.ZF = 0, this.is32Bits = !1, this.uniqueId = CF._Counter++
      }
    }
    CF._Counter = 0
  },
  38100: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => uF
    });
    var CF = SF(35623),
      AF = SF(38109);
    class uF {
      constructor() {
        this.hit = !1, this.distance = 0, this.pickedPoint = null, this.pickedMesh = null, this.bu = 0, this.bv = 0, this.faceId = -1, this.subMeshFaceId = -1, this.subMeshId = 0, this.pickedSprite = null, this.thinInstanceIndex = -1, this.ray = null, this.originMesh = null, this.aimTransform = null, this.gripTransform = null
      }
      getNormal() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!this.pickedMesh || WF && !this.pickedMesh.isVerticesDataPresent(AF.k.NormalKind)) return null;
        let SF, uF = this.pickedMesh.yEF();
        0 === uF?.length && (uF = null);
        const hF = CF.j.HC[0],
          bW = CF.j.HC[1],
          dF = CF.j.HC[2];
        if (WF) {
          const FF = this.pickedMesh.getVerticesData(AF.k.NormalKind);
          let WF = uF ? CF.r.FromArrayToRef(FF, 3 * uF[3 * this.faceId], hF) : hF.FhF(FF[3 * this.faceId * 3], FF[3 * this.faceId * 3 + 1], FF[3 * this.faceId * 3 + 2]),
            PF = uF ? CF.r.FromArrayToRef(FF, 3 * uF[3 * this.faceId + 1], bW) : bW.FhF(FF[3 * (3 * this.faceId + 1)], FF[3 * (3 * this.faceId + 1) + 1], FF[3 * (3 * this.faceId + 1) + 2]),
            RF = uF ? CF.r.FromArrayToRef(FF, 3 * uF[3 * this.faceId + 2], dF) : dF.FhF(FF[3 * (3 * this.faceId + 2)], FF[3 * (3 * this.faceId + 2) + 1], FF[3 * (3 * this.faceId + 2) + 2]);
          WF = WF.scale(this.bu), PF = PF.scale(this.bv), RF = RF.scale(1 - this.bu - this.bv), SF = new CF.r(WF.x + PF.x + RF.x, WF.y + PF.y + RF.y, WF.z + PF.z + RF.z)
        } else {
          const FF = this.pickedMesh.getVerticesData(AF.k.PositionKind),
            WF = uF ? CF.r.FromArrayToRef(FF, 3 * uF[3 * this.faceId], hF) : hF.FhF(FF[3 * this.faceId * 3], FF[3 * this.faceId * 3 + 1], FF[3 * this.faceId * 3 + 2]),
            PF = uF ? CF.r.FromArrayToRef(FF, 3 * uF[3 * this.faceId + 1], bW) : bW.FhF(FF[3 * (3 * this.faceId + 1)], FF[3 * (3 * this.faceId + 1) + 1], FF[3 * (3 * this.faceId + 1) + 2]),
            RF = uF ? CF.r.FromArrayToRef(FF, 3 * uF[3 * this.faceId + 2], dF) : dF.FhF(FF[3 * (3 * this.faceId + 2)], FF[3 * (3 * this.faceId + 2) + 1], FF[3 * (3 * this.faceId + 2) + 2]),
            iW = WF.subtract(PF),
            eF = RF.subtract(PF);
          SF = CF.r.Cross(iW, eF)
        }
        const PF = (FF, WF) => {
          if (-1 !== this.thinInstanceIndex) {
            const SF = FF._thinInstanceDataStorage.matrixData,
              AF = this.thinInstanceIndex << 4;
            if (SF && SF.length > AF) {
              const FF = CF.j.Matrix[0];
              CF.b.FromArrayToRef(SF, AF, FF), CF.r.TransformNormalToRef(WF, FF, WF)
            }
          }
          let SF = FF.getWorldMatrix();
          FF.nonUniformScaling && (CF.j.Matrix[0].fdF(SF), SF = CF.j.Matrix[0], SF.setTranslationFromFloats(0, 0, 0), SF.invert(), SF.transposeToRef(CF.j.Matrix[1]), SF = CF.j.Matrix[1]), CF.r.TransformNormalToRef(WF, SF, WF)
        };
        if (FF && PF(this.pickedMesh, SF), this.ray) {
          const WF = CF.j.HC[0].fdF(SF);
          FF || PF(this.pickedMesh, WF), CF.r.Dot(WF, this.ray.direction) > 0 && SF.negateInPlace()
        }
        return SF.normalize(), SF
      }
      getTextureCoordinates() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : AF.k.UVKind;
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(FF)) return null;
        const WF = this.pickedMesh.yEF();
        if (!WF) return null;
        const SF = this.pickedMesh.getVerticesData(FF);
        if (!SF) return null;
        let uF = CF.n.FromArray(SF, 2 * WF[3 * this.faceId]),
          hF = CF.n.FromArray(SF, 2 * WF[3 * this.faceId + 1]),
          bW = CF.n.FromArray(SF, 2 * WF[3 * this.faceId + 2]);
        return uF = uF.scale(this.bu), hF = hF.scale(this.bv), bW = bW.scale(1 - this.bu - this.bv), new CF.n(uF.x + hF.x + bW.x, uF.y + hF.y + bW.y)
      }
    }
  },
  37935: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF
    });
    var CF = SF(37809);
    let AF = !1;

    function uF() {
      AF || (AF = !0, CF.ThinEngine.prototype.updateDynamicIndexBuffer = function(FF, WF) {
        let SF;
        this._currentBoundBuffer[this._gl.ELEMENT_ARRAY_BUFFER] = null, this.bindIndexBuffer(FF), SF = FF.is32Bits ? WF instanceof Uint32Array ? WF : new Uint32Array(WF) : WF instanceof Uint16Array ? WF : new Uint16Array(WF), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, SF, this._gl.DYNAMIC_DRAW), this._resetIndexBufferBinding()
      }, CF.ThinEngine.prototype.updateDynamicVertexBuffer = function(FF, WF, SF, CF) {
        this.bindArrayBuffer(FF), void 0 === SF && (SF = 0);
        const AF = WF.byteLength || WF.length;
        void 0 === CF || CF >= AF && 0 === SF ? WF instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, SF, new Float32Array(WF)) : this._gl.bufferSubData(this._gl.ARRAY_BUFFER, SF, WF) : WF instanceof Array ? this._gl.bufferSubData(this._gl.ARRAY_BUFFER, SF, new Float32Array(WF).subarray(0, CF / 4)) : (WF = ArrayBuffer.isView(WF) ? new Uint8Array(WF.buffer, WF.byteOffset, CF) : new Uint8Array(WF, 0, CF), this._gl.bufferSubData(this._gl.ARRAY_BUFFER, SF, WF)), this._resetVertexBufferBinding()
      })
    }
  },
  37905: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF
    });
    class CF {
      get underlyingResource() {
        return this._webGLTexture
      }
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WF = arguments.length > 1 ? arguments[1] : void 0;
        if (this._MSAARenderBuffers = null, this._context = WF, !FF && (FF = WF.createTexture(), !FF)) throw new Error("Unable to create webGL texture");
        this.set(FF)
      }
      setUsage() {}
      set(FF) {
        this._webGLTexture = FF
      }
      reset() {
        this._webGLTexture = null, this._MSAARenderBuffers = null
      }
      addMSAARenderBuffer(FF) {
        this._MSAARenderBuffers || (this._MSAARenderBuffers = []), this._MSAARenderBuffers.push(FF)
      }
      releaseMSAARenderBuffers() {
        if (this._MSAARenderBuffers) {
          for (const FF of this._MSAARenderBuffers) this._context.deleteRenderbuffer(FF);
          this._MSAARenderBuffers = null
        }
      }
      getMSAARenderBuffer() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._MSAARenderBuffers?.[FF] ?? null
      }
      release() {
        this.releaseMSAARenderBuffers(), this._webGLTexture && this._context.deleteTexture(this._webGLTexture), this.reset()
      }
    }
  },
  37867: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => TF
    });
    var CF = SF(35647),
      AF = SF(37816),
      uF = SF(35639),
      hF = SF(37076),
      bW = SF(35634),
      dF = SF(37873);
    class PF {
      constructor() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isDepthTestDirty = !1, this._isDepthMaskDirty = !1, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !1, this._isFrontFaceDirty = !1, FF && this.reset()
      }
      get isDirty() {
        return this._isDepthFuncDirty || this._isDepthTestDirty || this._isDepthMaskDirty || this._isCullFaceDirty || this._isCullDirty || this._isZOffsetDirty || this._isFrontFaceDirty
      }
      get zOffset() {
        return this._zOffset
      }
      set zOffset(FF) {
        this._zOffset !== FF && (this._zOffset = FF, this._isZOffsetDirty = !0)
      }
      get zOffsetUnits() {
        return this._zOffsetUnits
      }
      set zOffsetUnits(FF) {
        this._zOffsetUnits !== FF && (this._zOffsetUnits = FF, this._isZOffsetDirty = !0)
      }
      get cullFace() {
        return this._cullFace
      }
      set cullFace(FF) {
        this._cullFace !== FF && (this._cullFace = FF, this._isCullFaceDirty = !0)
      }
      get cull() {
        return this._cull
      }
      set cull(FF) {
        this._cull !== FF && (this._cull = FF, this._isCullDirty = !0)
      }
      get depthFunc() {
        return this._depthFunc
      }
      set depthFunc(FF) {
        this._depthFunc !== FF && (this._depthFunc = FF, this._isDepthFuncDirty = !0)
      }
      get depthMask() {
        return this._depthMask
      }
      set depthMask(FF) {
        this._depthMask !== FF && (this._depthMask = FF, this._isDepthMaskDirty = !0)
      }
      get depthTest() {
        return this._depthTest
      }
      set depthTest(FF) {
        this._depthTest !== FF && (this._depthTest = FF, this._isDepthTestDirty = !0)
      }
      get frontFace() {
        return this._frontFace
      }
      set frontFace(FF) {
        this._frontFace !== FF && (this._frontFace = FF, this._isFrontFaceDirty = !0)
      }
      reset() {
        this._depthMask = !0, this._depthTest = !0, this._depthFunc = null, this._cullFace = null, this._cull = null, this._zOffset = 0, this._zOffsetUnits = 0, this._frontFace = null, this._isDepthTestDirty = !0, this._isDepthMaskDirty = !0, this._isDepthFuncDirty = !1, this._isCullFaceDirty = !1, this._isCullDirty = !1, this._isZOffsetDirty = !0, this._isFrontFaceDirty = !1
      }
      apply(FF) {
        this.isDirty && (this._isCullDirty && (this.cull ? FF.enable(FF.CULL_FACE) : FF.disable(FF.CULL_FACE), this._isCullDirty = !1), this._isCullFaceDirty && (FF.cullFace(this.cullFace), this._isCullFaceDirty = !1), this._isDepthMaskDirty && (FF.depthMask(this.depthMask), this._isDepthMaskDirty = !1), this._isDepthTestDirty && (this.depthTest ? FF.enable(FF.DEPTH_TEST) : FF.disable(FF.DEPTH_TEST), this._isDepthTestDirty = !1), this._isDepthFuncDirty && (FF.depthFunc(this.depthFunc), this._isDepthFuncDirty = !1), this._isZOffsetDirty && (this.zOffset || this.zOffsetUnits ? (FF.enable(FF.POLYGON_OFFSET_FILL), FF.polygonOffset(this.zOffset, this.zOffsetUnits)) : FF.disable(FF.POLYGON_OFFSET_FILL), this._isZOffsetDirty = !1), this._isFrontFaceDirty && (FF.frontFace(this.frontFace), this._isFrontFaceDirty = !1))
      }
    }
    class RF {
      get isDirty() {
        return this._isStencilTestDirty || this._isStencilMaskDirty || this._isStencilFuncDirty || this._isStencilOpDirty
      }
      get func() {
        return this._func
      }
      set func(FF) {
        this._func !== FF && (this._func = FF, this._isStencilFuncDirty = !0)
      }
      get backFunc() {
        return this._func
      }
      set backFunc(FF) {
        this._backFunc !== FF && (this._backFunc = FF, this._isStencilFuncDirty = !0)
      }
      get funcRef() {
        return this._funcRef
      }
      set funcRef(FF) {
        this._funcRef !== FF && (this._funcRef = FF, this._isStencilFuncDirty = !0)
      }
      get funcMask() {
        return this._funcMask
      }
      set funcMask(FF) {
        this._funcMask !== FF && (this._funcMask = FF, this._isStencilFuncDirty = !0)
      }
      get opStencilFail() {
        return this._opStencilFail
      }
      set opStencilFail(FF) {
        this._opStencilFail !== FF && (this._opStencilFail = FF, this._isStencilOpDirty = !0)
      }
      get opDepthFail() {
        return this._opDepthFail
      }
      set opDepthFail(FF) {
        this._opDepthFail !== FF && (this._opDepthFail = FF, this._isStencilOpDirty = !0)
      }
      get opStencilDepthPass() {
        return this._opStencilDepthPass
      }
      set opStencilDepthPass(FF) {
        this._opStencilDepthPass !== FF && (this._opStencilDepthPass = FF, this._isStencilOpDirty = !0)
      }
      get backOpStencilFail() {
        return this._backOpStencilFail
      }
      set backOpStencilFail(FF) {
        this._backOpStencilFail !== FF && (this._backOpStencilFail = FF, this._isStencilOpDirty = !0)
      }
      get backOpDepthFail() {
        return this._backOpDepthFail
      }
      set backOpDepthFail(FF) {
        this._backOpDepthFail !== FF && (this._backOpDepthFail = FF, this._isStencilOpDirty = !0)
      }
      get backOpStencilDepthPass() {
        return this._backOpStencilDepthPass
      }
      set backOpStencilDepthPass(FF) {
        this._backOpStencilDepthPass !== FF && (this._backOpStencilDepthPass = FF, this._isStencilOpDirty = !0)
      }
      get mask() {
        return this._mask
      }
      set mask(FF) {
        this._mask !== FF && (this._mask = FF, this._isStencilMaskDirty = !0)
      }
      get enabled() {
        return this._enabled
      }
      set enabled(FF) {
        this._enabled !== FF && (this._enabled = FF, this._isStencilTestDirty = !0)
      }
      constructor() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        this._isStencilTestDirty = !1, this._isStencilMaskDirty = !1, this._isStencilFuncDirty = !1, this._isStencilOpDirty = !1, this.useStencilGlobalOnly = !1, FF && this.reset()
      }
      reset() {
        this.stencilMaterial = void 0, this.stencilGlobal?.reset(), this._isStencilTestDirty = !0, this._isStencilMaskDirty = !0, this._isStencilFuncDirty = !0, this._isStencilOpDirty = !0
      }
      apply(FF) {
        if (!FF) return;
        const WF = !this.useStencilGlobalOnly && !!this.stencilMaterial?.enabled;
        this.enabled = WF ? this.stencilMaterial.enabled : this.stencilGlobal.enabled, this.func = WF ? this.stencilMaterial.func : this.stencilGlobal.func, this.backFunc = WF ? this.stencilMaterial.backFunc : this.stencilGlobal.backFunc, this.funcRef = WF ? this.stencilMaterial.funcRef : this.stencilGlobal.funcRef, this.funcMask = WF ? this.stencilMaterial.funcMask : this.stencilGlobal.funcMask, this.opStencilFail = WF ? this.stencilMaterial.opStencilFail : this.stencilGlobal.opStencilFail, this.opDepthFail = WF ? this.stencilMaterial.opDepthFail : this.stencilGlobal.opDepthFail, this.opStencilDepthPass = WF ? this.stencilMaterial.opStencilDepthPass : this.stencilGlobal.opStencilDepthPass, this.backOpStencilFail = WF ? this.stencilMaterial.backOpStencilFail : this.stencilGlobal.backOpStencilFail, this.backOpDepthFail = WF ? this.stencilMaterial.backOpDepthFail : this.stencilGlobal.backOpDepthFail, this.backOpStencilDepthPass = WF ? this.stencilMaterial.backOpStencilDepthPass : this.stencilGlobal.backOpStencilDepthPass, this.mask = WF ? this.stencilMaterial.mask : this.stencilGlobal.mask, this.isDirty && (this._isStencilTestDirty && (this.enabled ? FF.enable(FF.STENCIL_TEST) : FF.disable(FF.STENCIL_TEST), this._isStencilTestDirty = !1), this._isStencilMaskDirty && (FF.stencilMask(this.mask), this._isStencilMaskDirty = !1), this._isStencilFuncDirty && (FF.stencilFuncSeparate(FF.FRONT, this.func, this.funcRef, this.funcMask), FF.stencilFuncSeparate(FF.BACK, this.backFunc, this.funcRef, this.funcMask), this._isStencilFuncDirty = !1), this._isStencilOpDirty && (FF.stencilOpSeparate(FF.FRONT, this.opStencilFail, this.opDepthFail, this.opStencilDepthPass), FF.stencilOpSeparate(FF.BACK, this.backOpStencilFail, this.backOpDepthFail, this.backOpStencilDepthPass), this._isStencilOpDirty = !1))
      }
    }
    class iW {
      constructor() {
        this.reset()
      }
      reset() {
        this.enabled = !1, this.mask = 255, this.funcRef = 1, this.funcMask = 255, this.func = iW.ALWAYS, this.opStencilFail = iW.KEEP, this.opDepthFail = iW.KEEP, this.opStencilDepthPass = iW.REPLACE, this.backFunc = iW.ALWAYS, this.backOpStencilFail = iW.KEEP, this.backOpDepthFail = iW.KEEP, this.backOpStencilDepthPass = iW.REPLACE
      }
      get stencilFunc() {
        return this.func
      }
      set stencilFunc(FF) {
        this.func = FF
      }
      get stencilBackFunc() {
        return this.backFunc
      }
      set stencilBackFunc(FF) {
        this.backFunc = FF
      }
      get stencilFuncRef() {
        return this.funcRef
      }
      set stencilFuncRef(FF) {
        this.funcRef = FF
      }
      get stencilFuncMask() {
        return this.funcMask
      }
      set stencilFuncMask(FF) {
        this.funcMask = FF
      }
      get stencilOpStencilFail() {
        return this.opStencilFail
      }
      set stencilOpStencilFail(FF) {
        this.opStencilFail = FF
      }
      get stencilOpDepthFail() {
        return this.opDepthFail
      }
      set stencilOpDepthFail(FF) {
        this.opDepthFail = FF
      }
      get stencilOpStencilDepthPass() {
        return this.opStencilDepthPass
      }
      set stencilOpStencilDepthPass(FF) {
        this.opStencilDepthPass = FF
      }
      get stencilBackOpStencilFail() {
        return this.backOpStencilFail
      }
      set stencilBackOpStencilFail(FF) {
        this.backOpStencilFail = FF
      }
      get stencilBackOpDepthFail() {
        return this.backOpDepthFail
      }
      set stencilBackOpDepthFail(FF) {
        this.backOpDepthFail = FF
      }
      get stencilBackOpStencilDepthPass() {
        return this.backOpStencilDepthPass
      }
      set stencilBackOpStencilDepthPass(FF) {
        this.backOpStencilDepthPass = FF
      }
      get stencilMask() {
        return this.mask
      }
      set stencilMask(FF) {
        this.mask = FF
      }
      get stencilTest() {
        return this.enabled
      }
      set stencilTest(FF) {
        this.enabled = FF
      }
    }
    iW.ALWAYS = 519, iW.KEEP = 7680, iW.REPLACE = 7681;
    var eF = SF(37879),
      EF = SF(37855),
      QF = SF(37796),
      rW = SF(37835),
      gW = SF(37851);

    function tW(FF, WF) {
      if (WF) {
        const {
          requestAnimationFrame: SF
        } = WF;
        if ("function" === typeof SF) return SF(FF)
      }
      if ((0, rW.m)()) {
        const {
          requestAnimationFrame: SF
        } = WF || window;
        if ("function" === typeof SF) return SF(FF)
      } else if ("function" === typeof requestAnimationFrame) return requestAnimationFrame(FF);
      return setTimeout(FF, 16)
    }
    class TF {
      get frameId() {
        return this._frameId
      }
      get isWebGPU() {
        return this._isWebGPU
      }
      _getShaderProcessor(FF) {
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
      get QPF() {
        return this._useReverseDepthBuffer
      }
      set QPF(FF) {
        FF !== this._useReverseDepthBuffer && (this._useReverseDepthBuffer = FF, this._depthCullingState.depthFunc = FF ? 518 : 515)
      }
      setColorWrite(FF) {
        FF !== this._colorWrite && (this._colorWriteChanged = !0, this._colorWrite = FF)
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
      _getGlobalDefines(FF) {
        if (FF) return this.isNDCHalfZRange ? FF.IS_NDC_HALF_ZRANGE = "" : delete FF.IS_NDC_HALF_ZRANGE, this.QPF ? FF.USE_REVERSE_DEPTHBUFFER = "" : delete FF.USE_REVERSE_DEPTHBUFFER, void(this.useExactSrgbConversions ? FF.USE_EXACT_SRGB_CONVERSIONS = "" : delete FF.USE_EXACT_SRGB_CONVERSIONS);
        {
          let FF = "";
          return this.isNDCHalfZRange && (FF += "#define IS_NDC_HALF_ZRANGE"), this.QPF && (FF && (FF += "\n"), FF += "#define USE_REVERSE_DEPTHBUFFER"), this.useExactSrgbConversions && (FF && (FF += "\n"), FF += "#define USE_EXACT_SRGB_CONVERSIONS"), FF
        }
      }
      _rebuildInternalTextures() {
        const FF = this._internalTexturesCache.slice();
        for (const WF of FF) WF._rebuild()
      }
      _rebuildRenderTargetWrappers() {
        const FF = this._renderTargetWrapperCache.slice();
        for (const WF of FF) WF.textures?.some((FF => 15 === FF.source)) || WF._rebuild()
      }
      _rebuildEffects() {
        for (const FF in this._compiledEffects) {
          const WF = this._compiledEffects[FF];
          WF._pipelineContext = null, WF._prepareEffect()
        }
        AF.c.ResetCache()
      }
      _rebuildGraphicsResources() {
        this.wipeCaches(!0), this._rebuildEffects(), this._rebuildComputeEffects?.(), this._rebuildBuffers(), this._rebuildInternalTextures(), this._rebuildTextures(), this._rebuildRenderTargetWrappers(), this.wipeCaches(!0)
      }
      _flagContextRestored() {
        hF.b.Warn(this.name + " context successfully restored."), this.onContextRestoredObservable.notifyObservers(this), this._contextWasLost = !1
      }
      _restoreEngineAfterContextLost(FF) {
        setTimeout((() => {
          this._clearEmptyResources();
          const WF = this._depthCullingState.depthTest,
            SF = this._depthCullingState.depthFunc,
            CF = this._depthCullingState.depthMask,
            AF = this._stencilState.stencilTest;
          FF(), this._rebuildGraphicsResources(), this._depthCullingState.depthTest = WF, this._depthCullingState.depthFunc = SF, this._depthCullingState.depthMask = CF, this._stencilState.stencilTest = AF, this._flagContextRestored()
        }), 0)
      }
      get ZdF() {
        return this._isDisposed
      }
      get snapshotRendering() {
        return !1
      }
      set snapshotRendering(FF) {}
      get snapshotRenderingMode() {
        return 0
      }
      set snapshotRenderingMode(FF) {}
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
          const FF = new Uint8Array(4),
            WF = [FF, FF, FF, FF, FF, FF];
          this._emptyCubeTexture = this.createRawCubeTexture(WF, 1, 5, 0, !1, !1, 1)
        }
        return this._emptyCubeTexture
      }
      set framebufferDimensionsObject(FF) {
        this._framebufferDimensionsObject = FF
      }
      get activeRenderLoops() {
        return this._activeRenderLoops
      }
      stopRenderLoop(FF) {
        if (!FF) return this._activeRenderLoops.length = 0, void this._cancelFrame();
        const WF = this._activeRenderLoops.indexOf(FF);
        WF >= 0 && (this._activeRenderLoops.splice(WF, 1), 0 == this._activeRenderLoops.length && this._cancelFrame())
      }
      _cancelFrame() {
        if (this.customAnimationFrameRequester) {
          if (0 !== this._frameHandler) {
            this._frameHandler = 0;
            const {
              cancelAnimationFrame: FF
            } = this.customAnimationFrameRequester;
            FF && FF(this.customAnimationFrameRequester.KC), delete this.customAnimationFrameRequester.KC
          }
        } else if (0 !== this._frameHandler) {
          const FF = this._frameHandler;
          if (this._frameHandler = 0, (0, rW.m)()) {
            const {
              cancelAnimationFrame: WF
            } = this.getHostWindow() || window;
            if ("function" === typeof WF) return WF(FF)
          } else if ("function" === typeof cancelAnimationFrame) return cancelAnimationFrame(FF);
          return clearTimeout(FF)
        }
      }
      HL() {
        this.onBeginFrameObservable.notifyObservers(this)
      }
      wL() {
        this._frameId++, this.onEndFrameObservable.notifyObservers(this)
      }
      get maxFPS() {
        return this._maxFPS
      }
      set maxFPS(FF) {
        this._maxFPS = FF, void 0 !== FF && (this._minFrameTime = FF <= 0 ? Number.MAX_VALUE : 1e3 / FF)
      }
      _isOverFrameTime(FF) {
        if (!FF || void 0 === this._maxFPS) return !1;
        const WF = FF - this._lastFrameTime;
        return this._lastFrameTime = FF, this._renderAccumulator += WF, this._renderAccumulator < this._minFrameTime || (this._renderAccumulator -= this._minFrameTime, this._renderAccumulator > this._minFrameTime && (this._renderAccumulator = this._minFrameTime), !1)
      }
      _processFrame(FF) {
        if (this._frameHandler = 0, !this._contextWasLost && !this._isOverFrameTime(FF)) {
          let FF = !0;
          (this.ZdF || !this.renderEvenInBackground && this._windowIsBackground) && (FF = !1), FF && (this.HL(), this.skipFrameRender || this._renderViews() || this._renderFrame(), this.wL())
        }
      }
      _renderLoop(FF) {
        this._processFrame(FF), this._activeRenderLoops.length > 0 && 0 === this._frameHandler && this._queueNewFrameForRenderLoop()
      }
      _renderFrame() {
        for (let FF = 0; FF < this._activeRenderLoops.length; FF++) {
          (0, this._activeRenderLoops[FF])()
        }
      }
      _renderViews() {
        return !1
      }
      _queueNewFrame(FF, WF) {
        return tW(FF, WF)
      }
      _queueNewFrameForRenderLoop() {
        this.customAnimationFrameRequester ? (this.customAnimationFrameRequester.KC = this._queueNewFrame(this.customAnimationFrameRequester.renderFunction || this._boundRenderFunction, this.customAnimationFrameRequester), this._frameHandler = this.customAnimationFrameRequester.KC) : this._frameHandler = this._queueNewFrame(this._boundRenderFunction, this.getHostWindow())
      }
      runRenderLoop(FF) {
        -1 === this._activeRenderLoops.indexOf(FF) && (this._activeRenderLoops.push(FF), 1 === this._activeRenderLoops.length && 0 === this._frameHandler && this._queueNewFrameForRenderLoop())
      }
      getDepthBuffer() {
        return this._depthCullingState.depthTest
      }
      setDepthBuffer(FF) {
        this._depthCullingState.depthTest = FF
      }
      setZOffset(FF) {
        this._depthCullingState.zOffset = this.QPF ? -FF : FF
      }
      getZOffset() {
        const FF = this._depthCullingState.zOffset;
        return this.QPF ? -FF : FF
      }
      setZOffsetUnits(FF) {
        this._depthCullingState.zOffsetUnits = this.QPF ? -FF : FF
      }
      getZOffsetUnits() {
        const FF = this._depthCullingState.zOffsetUnits;
        return this.QPF ? -FF : FF
      }
      getHostWindow() {
        return (0, rW.m)() ? this._renderingCanvas && this._renderingCanvas.ownerDocument && this._renderingCanvas.ownerDocument.defaultView ? this._renderingCanvas.ownerDocument.defaultView : window : null
      }
      get compatibilityMode() {
        return this._compatibilityMode
      }
      set compatibilityMode(FF) {
        this._compatibilityMode = !0
      }
      _rebuildTextures() {
        for (const FF of this.scenes) FF._rebuildTextures();
        for (const FF of this._virtualScenes) FF._rebuildTextures()
      }
      _releaseRenderTargetWrapper(FF) {
        const WF = this._renderTargetWrapperCache.indexOf(FF); - 1 !== WF && this._renderTargetWrapperCache.splice(WF, 1)
      }
      get currentViewport() {
        return this._cachedViewport
      }
      setViewport(FF, WF, SF) {
        const CF = WF || this.getRenderWidth(),
          AF = SF || this.getRenderHeight(),
          uF = FF.x || 0,
          hF = FF.y || 0;
        this._cachedViewport = FF, this._viewport(uF * CF, hF * AF, CF * FF.width, AF * FF.height)
      }
      createCanvasImage() {
        return document.createElement("img")
      }
      createCanvasPath2D(FF) {
        return new Path2D(FF)
      }
      get description() {
        let FF = this.name + this.version;
        return this._caps.parallelShaderCompile && (FF += " - Parallel shader compilation"), FF
      }
      _createTextureBase(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          bW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          dF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          PF = arguments.length > 7 ? arguments[7] : void 0,
          RF = arguments.length > 8 ? arguments[8] : void 0,
          iW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          eF = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          EF = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
          rW = arguments.length > 12 && void 0 !== arguments[12] ? arguments[12] : null,
          gW = arguments.length > 13 ? arguments[13] : void 0,
          tW = arguments.length > 14 ? arguments[14] : void 0,
          aW = arguments.length > 15 ? arguments[15] : void 0;
        const kW = "data:" === (FF = FF || "").substring(0, 5),
          qW = "blob:" === FF.substring(0, 5),
          VF = kW && -1 !== FF.indexOf(";base64,"),
          NF = eF || new QF.b(this, 1);
        NF !== eF && (NF.label = FF.substring(0, 60));
        const DF = FF;
        !this._transformTextureUrl || VF || eF || iW || (FF = this._transformTextureUrl(FF)), DF !== FF && (NF._originalUrl = DF);
        const LF = FF.lastIndexOf(".");
        let mW = rW || (LF > -1 ? FF.substring(LF).toLowerCase() : "");
        mW.indexOf("?") > -1 && (mW = mW.split("?")[0]);
        const OF = TF.GetCompatibleTextureLoader(mW, gW);
        CF && CF.addPendingData(NF), NF.url = FF, NF.generateMipMaps = !WF, NF.samplingMode = AF, NF.invertY = SF, NF._useSRGBBuffer = this._getUseSRGBBuffer(!!aW, WF), this._doNotHandleContextLost || (NF._buffer = iW);
        let xW = null;
        bW && !eF && (xW = NF.onLoadedObservable.add(bW)), eF || this._internalTexturesCache.push(NF);
        const ZF = (SF, eF) => {
          CF && CF.removePendingData(NF), FF === DF ? (xW && NF.onLoadedObservable.remove(xW), uF.e.UseFallbackTexture && FF !== uF.e.FallbackTexture && this._createTextureBase(uF.e.FallbackTexture, WF, NF.invertY, CF, AF, null, dF, PF, RF, iW, NF), SF = (SF || "Unknown error") + (uF.e.UseFallbackTexture ? " - Fallback texture was used" : ""), NF.onErrorObservable.notifyObservers({
            message: SF,
            exception: eF
          }), dF && dF(SF, eF)) : (hF.b.Warn(`Failed to load ${FF}, falling back to ${DF}`), this._createTextureBase(DF, WF, NF.invertY, CF, AF, bW, dF, PF, RF, iW, NF, EF, rW, gW, tW, aW))
        };
        if (OF) {
          const WF = async FF => {
            (await OF).loadData(FF, NF, ((FF, WF, SF, uF, hF, bW) => {
              bW ? ZF("TextureLoader failed to load data") : PF(NF, mW, CF, {
                width: FF,
                height: WF
              }, NF.invertY, !SF, uF, (() => (hF(), !1)), AF)
            }), tW)
          };
          if (iW) {
            const FF = async FF => {
              try {
                await WF(FF)
              } catch (SF) {
                ZF("Failed to parse texture data", SF)
              }
            };
            iW instanceof ArrayBuffer ? FF(new Uint8Array(iW)) : ArrayBuffer.isView(iW) ? FF(iW) : dF && dF("Unable to load: only ArrayBuffer or ArrayBufferView is supported", null)
          } else this._loadFile(FF, (async FF => {
            try {
              await WF(new Uint8Array(FF))
            } catch (SF) {
              ZF("Failed to parse texture data", SF)
            }
          }), void 0, CF ? CF.offlineProvider : void 0, !0, ((FF, WF) => {
            ZF("Unable to load " + (FF && FF.responseURL, WF))
          }))
        } else {
          const SF = FF => {
            qW && !this._doNotHandleContextLost && (NF._buffer = FF), PF(NF, mW, CF, FF, NF.invertY, WF, !1, RF, AF)
          };
          !kW || VF ? iW && ("string" === typeof iW.decoding || iW.close) ? SF(iW) : TF._FileToolsLoadImage(FF || "", SF, ZF, CF ? CF.offlineProvider : null, gW, NF.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : "string" === typeof iW || iW instanceof ArrayBuffer || ArrayBuffer.isView(iW) || iW instanceof Blob ? TF._FileToolsLoadImage(iW, SF, ZF, CF ? CF.offlineProvider : null, gW, NF.invertY && this._features.needsInvertingBitmap ? {
            imageOrientation: "flipY"
          } : void 0, this) : iW && SF(iW)
        }
        return NF
      }
      _rebuildBuffers() {
        for (const FF of this._uniformBuffers) FF._rebuildAfterContextLost()
      }
      get _shouldUseHighPrecisionShader() {
        return !(!this._caps.highPrecisionShaderSupported || !this._highPrecisionShadersAllowed)
      }
      getHostDocument() {
        return this._renderingCanvas && this._renderingCanvas.ownerDocument ? this._renderingCanvas.ownerDocument : (0, rW.h)() ? document : null
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
        for (const FF in this._boundTexturesCache) Object.prototype.hasOwnProperty.call(this._boundTexturesCache, FF) && (this._boundTexturesCache[FF] = null);
        this._currentTextureChannel = -1
      }
      get name() {
        return this._name
      }
      set name(FF) {
        this._name = FF
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
      setHardwareScalingLevel(FF) {
        this._hardwareScalingLevel = FF, this.resize()
      }
      getHardwareScalingLevel() {
        return this._hardwareScalingLevel
      }
      get doNotHandleContextLost() {
        return this._doNotHandleContextLost
      }
      set doNotHandleContextLost(FF) {
        this._doNotHandleContextLost = FF
      }
      get isStencilEnable() {
        return this._isStencilEnable
      }
      getCreationOptions() {
        return this._creationOptions
      }
      constructor(FF, WF, SF) {
        this._colorWrite = !0, this._colorWriteChanged = !0, this._depthCullingState = new PF, this._stencilStateComposer = new RF, this._stencilState = new iW, this._alphaState = new eF.e(!1), this._alphaMode = Array(8).fill(-1), this._alphaEquation = Array(8).fill(-1), this._activeRequests = [], this._badOS = !1, this._badDesktopOS = !1, this._compatibilityMode = !0, this._internalTexturesCache = new Array, this._currentRenderTarget = null, this._boundTexturesCache = {}, this._activeChannel = 0, this._currentTextureChannel = -1, this._viewportCached = {
          x: 0,
          y: 0,
          z: 0,
          w: 0
        }, this._isWebGPU = !1, this._enableGPUDebugMarkers = !1, this.onCanvasBlurObservable = new CF.b, this.onCanvasFocusObservable = new CF.b, this.onNewSceneAddedObservable = new CF.b, this.onResizeObservable = new CF.b, this.onCanvasPointerOutObservable = new CF.b, this.onEffectErrorObservable = new CF.b, this.disablePerformanceMonitorInBackground = !1, this.disableVertexArrayObjects = !1, this._frameId = 0, this.hostInformation = {
          isMobile: !1
        }, this.isFullscreen = !1, this.enableOfflineSupport = !1, this.disableManifestCheck = !1, this.disableContextMenu = !0, this.currentRenderPassId = 0, this.isPointerLock = !1, this.postProcesses = [], this.canvasTabIndex = 1, this._contextWasLost = !1, this._useReverseDepthBuffer = !1, this.isNDCHalfZRange = !1, this.hasOriginBottomLeft = !0, this._renderTargetWrapperCache = new Array, this._compiledEffects = {}, this._isDisposed = !1, this.scenes = [], this._virtualScenes = new Array, this.onBeforeTextureInitObservable = new CF.b, this.renderEvenInBackground = !0, this.preventCacheWipeBetweenFrames = !1, this._frameHandler = 0, this._activeRenderLoops = new Array, this.customAnimationFrameRequester = null, this._windowIsBackground = !1, this._boundRenderFunction = FF => this._renderLoop(FF), this._lastFrameTime = 0, this._renderAccumulator = 0, this.skipFrameRender = !1, this.onBeforeShaderCompilationObservable = new CF.b, this.onAfterShaderCompilationObservable = new CF.b, this.onBeginFrameObservable = new CF.b, this.onEndFrameObservable = new CF.b, this._transformTextureUrl = null, this._uniformBuffers = new Array, this._storageBuffers = new Array, this._highPrecisionShadersAllowed = !0, this.onContextLostObservable = new CF.b, this.onContextRestoredObservable = new CF.b, this._name = "", this.premultipliedAlpha = !0, this.adaptToDeviceRatio = !1, this._lastDevicePixelRatio = 1, this._doNotHandleContextLost = !1, this.cullBackFaces = null, this._renderPassNames = ["main"], this._onReleaseRenderPassObservable = null, this._fps = 60, this._deltaTime = 0, this._deterministicLockstep = !1, this._lockstepMaxSteps = 4, this._timeStep = 1 / 60, this.xSF = new CF.b, this.onReleaseEffectsObservable = new CF.b, uF.e.Instances.push(this), this.startTime = dF.d.Now, this._stencilStateComposer.stencilGlobal = this._stencilState, bW.c.SetMatrixPrecision(!!WF.useLargeWorldRendering || !!WF.useHighPrecisionMatrix), (0, rW.l)() && navigator.userAgent && (this._badOS = /iPad/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent), this._badDesktopOS = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), WF.antialias = FF ?? WF.antialias, WF.deterministicLockstep = WF.deterministicLockstep ?? !1, WF.lockstepMaxSteps = WF.lockstepMaxSteps ?? 4, WF.timeStep = WF.timeStep ?? 1 / 60, WF.stencil = WF.stencil ?? !0, this._audioContext = WF.audioEngineOptions?.audioContext ?? null, this._audioDestination = WF.audioEngineOptions?.audioDestination ?? null, this.premultipliedAlpha = WF.premultipliedAlpha ?? !0, this._doNotHandleContextLost = !!WF.doNotHandleContextLost, this._isStencilEnable = !!WF.stencil, this.useExactSrgbConversions = WF.useExactSrgbConversions ?? !1, this.canvasTabIndex = WF.canvasTabIndex ?? this.canvasTabIndex;
        const AF = (0, rW.m)() && window.devicePixelRatio || 1,
          hF = WF.limitDeviceRatio || AF;
        SF = SF || WF.adaptToDeviceRatio || !1, this.adaptToDeviceRatio = SF, this._hardwareScalingLevel = SF ? 1 / Math.min(hF, AF) : 1, this._lastDevicePixelRatio = AF, this._creationOptions = WF
      }
      resize() {
        let FF, WF, SF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.adaptToDeviceRatio) {
          const FF = (0, rW.m)() && window.devicePixelRatio || 1,
            WF = this._lastDevicePixelRatio / FF;
          this._lastDevicePixelRatio = FF, this._hardwareScalingLevel *= WF
        }
        if ((0, rW.m)() && (0, rW.h)())
          if (this._renderingCanvas) {
            const SF = this._renderingCanvas.getBoundingClientRect?.();
            FF = this._renderingCanvas.clientWidth || SF?.width || this._renderingCanvas.width * this._hardwareScalingLevel || 100, WF = this._renderingCanvas.clientHeight || SF?.height || this._renderingCanvas.height * this._hardwareScalingLevel || 100
          } else FF = window.innerWidth, WF = window.innerHeight;
        else FF = this._renderingCanvas ? this._renderingCanvas.width : 100, WF = this._renderingCanvas ? this._renderingCanvas.height : 100;
        this.setSize(FF / this._hardwareScalingLevel, WF / this._hardwareScalingLevel, SF)
      }
      setSize(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!this._renderingCanvas) return !1;
        if (FF |= 0, WF |= 0, !SF && this._renderingCanvas.width === FF && this._renderingCanvas.height === WF) return !1;
        if (this._renderingCanvas.width = FF, this._renderingCanvas.height = WF, this.scenes) {
          for (let FF = 0; FF < this.scenes.length; FF++) {
            const WF = this.scenes[FF];
            for (let FF = 0; FF < WF.cameras.length; FF++) {
              WF.cameras[FF]._currentRenderId = 0
            }
          }
          this.onResizeObservable.hasObservers() && this.onResizeObservable.notifyObservers(this)
        }
        return !0
      }
      createRawTexture(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF, iW) {
        throw (0, EF.l)("engine.rawTexture")
      }
      createRawCubeTexture(FF, WF, SF, CF, AF, uF, hF, bW) {
        throw (0, EF.l)("engine.rawTexture")
      }
      createRawTexture3D(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF) {
        throw (0, EF.l)("engine.rawTexture")
      }
      createRawTexture2DArray(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF, iW) {
        throw (0, EF.l)("engine.rawTexture")
      }
      _sharedInit(FF) {
        this._renderingCanvas = FF
      }
      _setupMobileChecks() {
        navigator && navigator.userAgent && (this._checkForMobile = () => {
          const FF = navigator.userAgent;
          this.hostInformation.isMobile = -1 !== FF.indexOf("Mobile") || -1 !== FF.indexOf("Mac") && (0, rW.h)() && "ontouchend" in document
        }, this._checkForMobile(), (0, rW.m)() && window.addEventListener("resize", this._checkForMobile))
      }
      createVideoElement(FF) {
        return document.createElement("video")
      }
      _reportDrawCall() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this._drawCalls?.addCount(FF, !1)
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
      _createImageBitmapFromSource(FF, WF) {
        throw new Error("createImageBitmapFromSource is not implemented")
      }
      createImageBitmap(FF, WF) {
        return createImageBitmap(FF, WF)
      }
      resizeImageBitmap(FF, WF, SF) {
        throw new Error("resizeImageBitmap is not implemented")
      }
      getFontOffset(FF) {
        throw new Error("getFontOffset is not implemented")
      }
      static _CreateCanvas(FF, WF) {
        if ("undefined" === typeof document) return new OffscreenCanvas(FF, WF);
        const SF = document.createElement("canvas");
        return SF.width = FF, SF.height = WF, SF
      }
      createCanvas(FF, WF) {
        return TF._CreateCanvas(FF, WF)
      }
      static _FileToolsLoadImage(FF, WF, SF, CF, AF, uF, hF) {
        if (!gW.d.loadImage) throw (0, EF.l)("FileTools");
        return gW.d.loadImage(FF, WF, SF, CF, AF, uF, hF)
      }
      _loadFile(FF, WF, SF, CF, AF, uF) {
        const hF = (0, gW.j)(FF, WF, SF, CF, AF, uF);
        return this._activeRequests.push(hF), hF.onCompleteObservable.add((() => {
          const FF = this._activeRequests.indexOf(hF); - 1 !== FF && this._activeRequests.splice(FF, 1)
        })), hF
      }
      static _FileToolsLoadFile(FF, WF, SF, CF, AF, uF) {
        if (gW.d.loadFile) return gW.d.loadFile(FF, WF, SF, CF, AF, uF);
        throw (0, EF.l)("FileTools")
      }
      dispose() {
        for (this.releaseEffects(), this._isDisposed = !0, this.stopRenderLoop(), this._emptyTexture && (this._releaseTexture(this._emptyTexture), this._emptyTexture = null), this._emptyCubeTexture && (this._releaseTexture(this._emptyCubeTexture), this._emptyCubeTexture = null), this._renderingCanvas = null, this.onBeforeTextureInitObservable && this.onBeforeTextureInitObservable.clear(); this.postProcesses.length;) this.postProcesses[0].dispose();
        for (; this.scenes.length;) this.scenes[0].dispose();
        for (; this._virtualScenes.length;) this._virtualScenes[0].dispose();
        this.releaseComputeEffects?.(), AF.c.ResetCache();
        for (const WF of this._activeRequests) WF.abort();
        this._boundRenderFunction = null, this.xSF.notifyObservers(this), this.xSF.clear(), this.onResizeObservable.clear(), this.onCanvasBlurObservable.clear(), this.onCanvasFocusObservable.clear(), this.onCanvasPointerOutObservable.clear(), this.onNewSceneAddedObservable.clear(), this.onEffectErrorObservable.clear(), (0, rW.m)() && window.removeEventListener("resize", this._checkForMobile);
        const FF = uF.e.Instances.indexOf(this);
        FF >= 0 && uF.e.Instances.splice(FF, 1), uF.e.Instances.length || (uF.e.OnEnginesDisposedObservable.notifyObservers(this), uF.e.OnEnginesDisposedObservable.clear()), this.onBeginFrameObservable.clear(), this.onEndFrameObservable.clear(), this._onReleaseRenderPassObservable?.clear(), this._onReleaseRenderPassObservable = null
      }
      static DefaultLoadingScreenFactory(FF) {
        throw (0, EF.l)("LoadingScreen")
      }
      static MarkAllMaterialsAsDirty(FF, WF) {
        for (let SF = 0; SF < uF.e.Instances.length; SF++) {
          const CF = uF.e.Instances[SF];
          for (let SF = 0; SF < CF.scenes.length; SF++) CF.scenes[SF].markAllMaterialsAsDirty(FF, WF)
        }
      }
      static GetCompatibleTextureLoader(FF, WF) {
        return null
      }
    }
    TF._RenderPassIdCounter = 0, TF._RescalePostProcessFactory = null, TF.CollisionsEpsilon = .001, TF.QueueNewFrame = tW
  },
  37824: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF
    });
    class CF {
      static GetShadersRepository() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? CF.ShadersRepository : CF.ShadersRepositoryWGSL
      }
      static GetShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? CF.ShadersStore : CF.ShadersStoreWGSL
      }
      static GetIncludesShadersStore() {
        return 0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) ? CF.IncludesShadersStore : CF.IncludesShadersStoreWGSL
      }
    }
    CF.ShadersRepository = "src/Shaders/", CF.ShadersStore = {}, CF.IncludesShadersStore = {}, CF.ShadersRepositoryWGSL = "src/ShadersWGSL/", CF.ShadersStoreWGSL = {}, CF.IncludesShadersStoreWGSL = {}
  },
  37843: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => eF,
      h: () => aW,
      j: () => QF,
      n: () => EF,
      o: () => rW,
      p: () => TF,
      r: () => iW,
      s: () => PF,
      t: () => RF,
      x: () => dF,
      z: () => bW
    });
    class CF {
      constructor() {
        this._valueCache = {}, this._matrixValueCache = {}, this.vertexCompilationError = null, this.fragmentCompilationError = null, this.programLinkError = null, this.programValidationError = null, this._isDisposed = !1
      }
      get isAsync() {
        return this.isParallelCompiled
      }
      get isReady() {
        return !!this.program && (!this.isParallelCompiled || this.engine._isRenderingStateCompiled(this))
      }
      _handlesSpectorRebuildCallback(FF) {
        FF && this.program && FF(this.program)
      }
      setEngine(FF) {
        this.engine = FF
      }
      _fillEffectInformation(FF, WF, SF, CF, AF, uF, hF, bW) {
        const dF = this.engine;
        if (dF.supportsUniformBuffers)
          for (const RF in WF) FF.bindUniformBlock(RF, WF[RF]);
        let PF;
        for (this.engine.getUniforms(this, SF).forEach(((FF, WF) => {
            CF[SF[WF]] = FF
          })), this._uniforms = CF, PF = 0; PF < AF.length; PF++) {
          null == FF.getUniform(AF[PF]) && (AF.splice(PF, 1), PF--)
        }
        AF.forEach(((FF, WF) => {
          uF[FF] = WF
        }));
        for (const RF of dF.getAttributes(this, hF)) bW.push(RF)
      }
      dispose() {
        this._uniforms = {}, this._isDisposed = !0
      }
      _cacheMatrix(FF, WF) {
        const SF = this._valueCache[FF],
          CF = WF.updateFlag;
        if (void 0 !== SF && SF === CF) return !1;
        const AF = WF.kRF();
        let uF = this._matrixValueCache[FF];
        if (void 0 !== SF && null !== SF && void 0 !== uF) {
          let WF = !0;
          for (let FF = 15; FF >= 0; FF--)
            if (uF[FF] !== AF[FF]) {
              WF = !1;
              break
            } if (WF) return this._valueCache[FF] = CF, !1
        }
        return void 0 === uF && (uF = this._matrixValueCache[FF] = new Float32Array(16)), uF.set(AF), this._valueCache[FF] = CF, !0
      }
      _cacheFloat2(FF, WF, SF) {
        let CF = this._valueCache[FF];
        if (!CF || 2 !== CF.length) return CF = [WF, SF], this._valueCache[FF] = CF, !0;
        let AF = !1;
        return CF[0] !== WF && (CF[0] = WF, AF = !0), CF[1] !== SF && (CF[1] = SF, AF = !0), AF
      }
      _cacheFloat3(FF, WF, SF, CF) {
        let AF = this._valueCache[FF];
        if (!AF || 3 !== AF.length) return AF = [WF, SF, CF], this._valueCache[FF] = AF, !0;
        let uF = !1;
        return AF[0] !== WF && (AF[0] = WF, uF = !0), AF[1] !== SF && (AF[1] = SF, uF = !0), AF[2] !== CF && (AF[2] = CF, uF = !0), uF
      }
      _cacheFloat4(FF, WF, SF, CF, AF) {
        let uF = this._valueCache[FF];
        if (!uF || 4 !== uF.length) return uF = [WF, SF, CF, AF], this._valueCache[FF] = uF, !0;
        let hF = !1;
        return uF[0] !== WF && (uF[0] = WF, hF = !0), uF[1] !== SF && (uF[1] = SF, hF = !0), uF[2] !== CF && (uF[2] = CF, hF = !0), uF[3] !== AF && (uF[3] = AF, hF = !0), hF
      }
      setInt(FF, WF) {
        const SF = this._valueCache[FF];
        void 0 !== SF && SF === WF || this.engine.setInt(this._uniforms[FF], WF) && (this._valueCache[FF] = WF)
      }
      setInt2(FF, WF, SF) {
        this._cacheFloat2(FF, WF, SF) && (this.engine.setInt2(this._uniforms[FF], WF, SF) || (this._valueCache[FF] = null))
      }
      setInt3(FF, WF, SF, CF) {
        this._cacheFloat3(FF, WF, SF, CF) && (this.engine.setInt3(this._uniforms[FF], WF, SF, CF) || (this._valueCache[FF] = null))
      }
      setInt4(FF, WF, SF, CF, AF) {
        this._cacheFloat4(FF, WF, SF, CF, AF) && (this.engine.setInt4(this._uniforms[FF], WF, SF, CF, AF) || (this._valueCache[FF] = null))
      }
      setIntArray(FF, WF) {
        this._valueCache[FF] = null, this.engine.setIntArray(this._uniforms[FF], WF)
      }
      setIntArray2(FF, WF) {
        this._valueCache[FF] = null, this.engine.setIntArray2(this._uniforms[FF], WF)
      }
      setIntArray3(FF, WF) {
        this._valueCache[FF] = null, this.engine.setIntArray3(this._uniforms[FF], WF)
      }
      setIntArray4(FF, WF) {
        this._valueCache[FF] = null, this.engine.setIntArray4(this._uniforms[FF], WF)
      }
      setUInt(FF, WF) {
        const SF = this._valueCache[FF];
        void 0 !== SF && SF === WF || this.engine.setUInt(this._uniforms[FF], WF) && (this._valueCache[FF] = WF)
      }
      setUInt2(FF, WF, SF) {
        this._cacheFloat2(FF, WF, SF) && (this.engine.setUInt2(this._uniforms[FF], WF, SF) || (this._valueCache[FF] = null))
      }
      setUInt3(FF, WF, SF, CF) {
        this._cacheFloat3(FF, WF, SF, CF) && (this.engine.setUInt3(this._uniforms[FF], WF, SF, CF) || (this._valueCache[FF] = null))
      }
      setUInt4(FF, WF, SF, CF, AF) {
        this._cacheFloat4(FF, WF, SF, CF, AF) && (this.engine.setUInt4(this._uniforms[FF], WF, SF, CF, AF) || (this._valueCache[FF] = null))
      }
      setUIntArray(FF, WF) {
        this._valueCache[FF] = null, this.engine.setUIntArray(this._uniforms[FF], WF)
      }
      setUIntArray2(FF, WF) {
        this._valueCache[FF] = null, this.engine.setUIntArray2(this._uniforms[FF], WF)
      }
      setUIntArray3(FF, WF) {
        this._valueCache[FF] = null, this.engine.setUIntArray3(this._uniforms[FF], WF)
      }
      setUIntArray4(FF, WF) {
        this._valueCache[FF] = null, this.engine.setUIntArray4(this._uniforms[FF], WF)
      }
      setArray(FF, WF) {
        this._valueCache[FF] = null, this.engine.setArray(this._uniforms[FF], WF)
      }
      setArray2(FF, WF) {
        this._valueCache[FF] = null, this.engine.setArray2(this._uniforms[FF], WF)
      }
      setArray3(FF, WF) {
        this._valueCache[FF] = null, this.engine.setArray3(this._uniforms[FF], WF)
      }
      setArray4(FF, WF) {
        this._valueCache[FF] = null, this.engine.setArray4(this._uniforms[FF], WF)
      }
      setMatrices(FF, WF) {
        WF && (this._valueCache[FF] = null, this.engine.setMatrices(this._uniforms[FF], WF))
      }
      setMatrix(FF, WF) {
        this._cacheMatrix(FF, WF) && (this.engine.setMatrices(this._uniforms[FF], WF.kRF()) || (this._valueCache[FF] = null))
      }
      setMatrix3x3(FF, WF) {
        this._valueCache[FF] = null, this.engine.setMatrix3x3(this._uniforms[FF], WF)
      }
      setMatrix2x2(FF, WF) {
        this._valueCache[FF] = null, this.engine.setMatrix2x2(this._uniforms[FF], WF)
      }
      setFloat(FF, WF) {
        const SF = this._valueCache[FF];
        void 0 !== SF && SF === WF || this.engine.setFloat(this._uniforms[FF], WF) && (this._valueCache[FF] = WF)
      }
      setVector2(FF, WF) {
        this._cacheFloat2(FF, WF.x, WF.y) && (this.engine.setFloat2(this._uniforms[FF], WF.x, WF.y) || (this._valueCache[FF] = null))
      }
      setFloat2(FF, WF, SF) {
        this._cacheFloat2(FF, WF, SF) && (this.engine.setFloat2(this._uniforms[FF], WF, SF) || (this._valueCache[FF] = null))
      }
      setVector3(FF, WF) {
        this._cacheFloat3(FF, WF.x, WF.y, WF.z) && (this.engine.setFloat3(this._uniforms[FF], WF.x, WF.y, WF.z) || (this._valueCache[FF] = null))
      }
      setFloat3(FF, WF, SF, CF) {
        this._cacheFloat3(FF, WF, SF, CF) && (this.engine.setFloat3(this._uniforms[FF], WF, SF, CF) || (this._valueCache[FF] = null))
      }
      setVector4(FF, WF) {
        this._cacheFloat4(FF, WF.x, WF.y, WF.z, WF.w) && (this.engine.setFloat4(this._uniforms[FF], WF.x, WF.y, WF.z, WF.w) || (this._valueCache[FF] = null))
      }
      setQuaternion(FF, WF) {
        this._cacheFloat4(FF, WF.x, WF.y, WF.z, WF.w) && (this.engine.setFloat4(this._uniforms[FF], WF.x, WF.y, WF.z, WF.w) || (this._valueCache[FF] = null))
      }
      setFloat4(FF, WF, SF, CF, AF) {
        this._cacheFloat4(FF, WF, SF, CF, AF) && (this.engine.setFloat4(this._uniforms[FF], WF, SF, CF, AF) || (this._valueCache[FF] = null))
      }
      setColor3(FF, WF) {
        this._cacheFloat3(FF, WF.r, WF.g, WF.b) && (this.engine.setFloat3(this._uniforms[FF], WF.r, WF.g, WF.b) || (this._valueCache[FF] = null))
      }
      setColor4(FF, WF, SF) {
        this._cacheFloat4(FF, WF.r, WF.g, WF.b, SF) && (this.engine.setFloat4(this._uniforms[FF], WF.r, WF.g, WF.b, SF) || (this._valueCache[FF] = null))
      }
      setDirectColor4(FF, WF) {
        this._cacheFloat4(FF, WF.r, WF.g, WF.b, WF.a) && (this.engine.setFloat4(this._uniforms[FF], WF.r, WF.g, WF.b, WF.a) || (this._valueCache[FF] = null))
      }
      _getVertexShaderCode() {
        return this.vertexShader ? this.engine._getShaderSource(this.vertexShader) : null
      }
      _getFragmentShaderCode() {
        return this.fragmentShader ? this.engine._getShaderSource(this.fragmentShader) : null
      }
    }
    var AF = SF(37851);
    const uF = new WeakMap,
      hF = {
        _webGLVersion: 2,
        cachedPipelines: {}
      };

    function bW(FF) {
      let WF = uF.get(FF);
      if (!WF) {
        if (!FF) return hF;
        WF = {
          _webGLVersion: FF.TEXTURE_BINDING_3D ? 2 : 1,
          _context: FF,
          parallelShaderCompile: FF.getExtension("KHR_parallel_shader_compile") || void 0,
          cachedPipelines: {}
        }, uF.set(FF, WF)
      }
      return WF
    }

    function dF(FF) {
      uF.delete(FF)
    }

    function PF(FF, WF, SF, CF, AF, uF) {
      const hF = bW(CF);
      uF || (uF = hF._createShaderProgramInjection ?? eF);
      return uF(FF, tW(WF, "vertex", CF, hF._contextWasLost), tW(SF, "fragment", CF, hF._contextWasLost), CF, AF, hF.validateShaderPrograms)
    }

    function RF(FF, WF, SF, CF, AF) {
      let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        hF = arguments.length > 6 ? arguments[6] : void 0;
      const dF = bW(AF);
      hF || (hF = dF._createShaderProgramInjection ?? eF);
      const PF = dF._webGLVersion > 1 ? "#version 300 es\n#define WEBGL2 \n" : "";
      return hF(FF, gW(WF, "vertex", CF, PF, AF, dF._contextWasLost), gW(SF, "fragment", CF, PF, AF, dF._contextWasLost), AF, uF, dF.validateShaderPrograms)
    }

    function iW(FF, WF) {
      const SF = new CF,
        AF = bW(FF);
      return AF.parallelShaderCompile && !AF.disableParallelShaderCompile && (SF.isParallelCompiled = !0), SF.context = AF._context, SF
    }

    function eF(FF, WF, SF, CF) {
      let AF = arguments.length > 5 ? arguments[5] : void 0;
      const uF = CF.createProgram();
      if (FF.program = uF, !uF) throw new Error("Unable to create program");
      return CF.attachShader(uF, WF), CF.attachShader(uF, SF), CF.linkProgram(uF), FF.context = CF, FF.vertexShader = WF, FF.fragmentShader = SF, FF.isParallelCompiled || QF(FF, CF, AF), uF
    }

    function EF(FF, WF, SF) {
      const CF = FF;
      if (CF._isDisposed) return !1;
      const AF = bW(WF);
      return !!(AF && AF.parallelShaderCompile && AF.parallelShaderCompile.COMPLETION_STATUS_KHR && CF.program && WF.getProgramParameter(CF.program, AF.parallelShaderCompile.COMPLETION_STATUS_KHR)) && (QF(CF, WF, SF), !0)
    }

    function QF(FF, WF, SF) {
      const CF = FF.context,
        AF = FF.vertexShader,
        uF = FF.fragmentShader,
        hF = FF.program;
      if (!CF.getProgramParameter(hF, CF.LINK_STATUS)) {
        if (!WF.getShaderParameter(AF, WF.COMPILE_STATUS)) {
          const SF = WF.getShaderInfoLog(AF);
          if (SF) throw FF.vertexCompilationError = SF, new Error("VERTEX SHADER " + SF)
        }
        if (!WF.getShaderParameter(uF, WF.COMPILE_STATUS)) {
          const SF = WF.getShaderInfoLog(uF);
          if (SF) throw FF.fragmentCompilationError = SF, new Error("FRAGMENT SHADER " + SF)
        }
        const SF = CF.getProgramInfoLog(hF);
        if (SF) throw FF.programLinkError = SF, new Error(SF)
      }
      if (SF) {
        CF.validateProgram(hF);
        if (!CF.getProgramParameter(hF, CF.VALIDATE_STATUS)) {
          const WF = CF.getProgramInfoLog(hF);
          if (WF) throw FF.programValidationError = WF, new Error(WF)
        }
      }
      CF.deleteShader(AF), CF.deleteShader(uF), FF.vertexShader = void 0, FF.fragmentShader = void 0, FF.onCompiled && (FF.onCompiled(), FF.onCompiled = void 0)
    }

    function rW(FF, WF, SF, CF, AF, uF, hF, dF, iW) {
      let eF = arguments.length > 10 ? arguments[10] : void 0,
        EF = arguments.length > 11 ? arguments[11] : void 0,
        QF = arguments.length > 12 ? arguments[12] : void 0;
      const rW = bW(FF.context);
      EF || (EF = rW.createRawShaderProgramInjection ?? PF), QF || (QF = rW.createShaderProgramInjection ?? RF);
      const gW = FF;
      gW.program = CF ? EF(gW, WF, SF, gW.context, iW) : QF(gW, WF, SF, dF, gW.context, iW), gW.program.__SPECTOR_rebuildProgram = hF, eF()
    }

    function gW(FF, WF, SF, CF, uF, hF) {
      return tW((0, AF.f)(FF, SF, CF), WF, uF, hF)
    }

    function tW(FF, WF, SF, CF) {
      const AF = SF.createShader("vertex" === WF ? SF.VERTEX_SHADER : SF.FRAGMENT_SHADER);
      if (!AF) {
        let FF, AF = SF.NO_ERROR;
        for (;
          (FF = SF.getError()) !== SF.NO_ERROR;) AF = FF;
        throw new Error(`Something went wrong while creating a gl ${WF} shader object. gl error=${AF}, gl isContextLost=${SF.isContextLost()}, _contextWasLost=${CF}`)
      }
      return SF.shaderSource(AF, FF), SF.compileShader(AF), AF
    }

    function TF(FF, WF) {
      WF.useProgram(FF)
    }

    function aW(FF, WF) {
      const SF = FF;
      if (!SF.isParallelCompiled) return void WF(FF);
      const CF = SF.onCompiled;
      SF.onCompiled = () => {
        CF?.(), WF(FF)
      }
    }
  },
  37809: (FF, WF, SF) => {
    SF.d(WF, {
      ThinEngine: () => qW
    });
    var CF = SF(37816),
      AF = SF(37843),
      uF = SF(37867),
      hF = SF(37886),
      bW = SF(37076),
      dF = SF(37835);
    class PF {
      constructor() {
        this.shaderLanguage = 0
      }
      postProcessor(FF, WF, SF, CF, AF) {
        if (AF.drawBuffersExtensionDisabled) {
          const WF = /#extension.+GL_EXT_draw_buffers.+(enable|require)/g;
          FF = FF.replace(WF, "")
        }
        return FF
      }
    }
    const RF = /(flat\s)?\s*varying\s*.*/;
    class iW {
      constructor() {
        this.shaderLanguage = 0
      }
      attributeProcessor(FF) {
        return FF.replace("attribute", "in")
      }
      varyingCheck(FF, WF) {
        return RF.test(FF)
      }
      varyingProcessor(FF, WF) {
        return FF.replace("varying", WF ? "in" : "out")
      }
      postProcessor(FF, WF, SF) {
        const CF = -1 !== FF.search(/#extension.+GL_EXT_draw_buffers.+require/);
        if (FF = (FF = FF.replace(/#extension.+(GL_OVR_multiview2|GL_OES_standard_derivatives|GL_EXT_shader_texture_lod|GL_EXT_frag_depth|GL_EXT_draw_buffers).+(enable|require)/g, "")).replace(/texture2D\s*\(/g, "texture("), SF) {
          const SF = -1 !== FF.search(/layout *\(location *= *0\) *out/g),
            AF = -1 !== WF.indexOf("#define DUAL_SOURCE_BLENDING"),
            uF = AF ? "layout(location = 0, index = 0) out vec4 glFragColor;\nlayout(location = 0, index = 1) out vec4 glFragColor2;\n" : "layout(location = 0) out vec4 glFragColor;\n";
          AF && (FF = "#extension GL_EXT_blend_func_extended : require\n" + FF), FF = (FF = (FF = (FF = (FF = (FF = (FF = FF.replace(/texture2DLodEXT\s*\(/g, "textureLod(")).replace(/textureCubeLodEXT\s*\(/g, "textureLod(")).replace(/textureCube\s*\(/g, "texture(")).replace(/gl_FragDepthEXT/g, "gl_FragDepth")).replace(/gl_FragColor/g, "glFragColor")).replace(/gl_FragData/g, "glFragData")).replace(/void\s+?main\s*\(/g, (CF || SF ? "" : uF) + "void main(")
        } else {
          WF.indexOf("#define VERTEXOUTPUT_INVARIANT") >= 0 && (FF = "invariant gl_Position;\n" + FF);
          if (-1 !== WF.indexOf("#define MULTIVIEW")) return "#extension GL_OVR_multiview2 : require\nlayout (num_views = 2) in;\n" + FF
        }
        return FF
      }
    }
    var eF = SF(37888),
      EF = SF(37900),
      QF = SF(37905),
      rW = SF(37796),
      gW = SF(37851),
      tW = SF(37826),
      TF = SF(37908),
      aW = SF(37879);
    class kW {}
    class qW extends uF.e {
      get name() {
        return this._name
      }
      set name(FF) {
        this._name = FF
      }
      get version() {
        return this._webGLVersion
      }
      static get ShadersRepository() {
        return CF.c.ShadersRepository
      }
      static set ShadersRepository(FF) {
        CF.c.ShadersRepository = FF
      }
      get supportsUniformBuffers() {
        return this.Im > 1 && !this.disableUniformBuffers
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
      constructor(FF, WF, SF, CF) {
        if (SF = SF || {}, super(WF ?? SF.antialias, SF, CF), this._name = "WebGL", this.forcePOTTextures = !1, this.validateShaderPrograms = !1, this.disableUniformBuffers = !1, this._webGLVersion = 1, this._integerMRTAttachmentsMask = 0, this._vertexAttribArraysEnabled = [], this._uintIndicesCurrentlySet = !1, this._currentBoundBuffer = new Array, this._currentFramebuffer = null, this._dummyFramebuffer = null, this._currentBufferPointers = new Array, this._currentInstanceLocations = new Array, this._currentInstanceBuffers = new Array, this._vaoRecordInProgress = !1, this._mustWipeVertexAttributes = !1, this._nextFreeTextureSlots = new Array, this._maxSimultaneousTextures = 0, this._maxMSAASamplesOverride = null, this._unpackFlipYCached = null, this.enableUnpackFlipYCached = !0, this._boundUniforms = {}, !FF) return;
        let uF;
        if (FF.getContext) {
          if (uF = FF, void 0 === SF.preserveDrawingBuffer && (SF.preserveDrawingBuffer = !1), void 0 === SF.xrCompatible && (SF.xrCompatible = !1), navigator && navigator.userAgent) {
            this._setupMobileChecks();
            const FF = navigator.userAgent;
            for (const WF of qW.ExceptionList) {
              const CF = WF.key,
                AF = WF.targets;
              if (new RegExp(CF).test(FF)) {
                if (WF.capture && WF.captureConstraint) {
                  const SF = WF.capture,
                    CF = WF.captureConstraint,
                    AF = new RegExp(SF).exec(FF);
                  if (AF && AF.length > 0) {
                    if (parseInt(AF[AF.length - 1]) >= CF) continue
                  }
                }
                for (const FF of AF) switch (FF) {
                  case "uniformBuffer":
                    this.disableUniformBuffers = !0;
                    break;
                  case "vao":
                    this.disableVertexArrayObjects = !0;
                    break;
                  case "antialias":
                    SF.antialias = !1;
                    break;
                  case "maxMSAASamples":
                    this._maxMSAASamplesOverride = 1
                }
              }
            }
          }
          if (this._doNotHandleContextLost ? this._onContextLost = () => {
              (0, AF.x)(this._gl)
            } : (this._onContextLost = FF => {
              FF.preventDefault(), this._contextWasLost = !0, (0, AF.x)(this._gl), bW.b.Warn("WebGL context lost."), this.onContextLostObservable.notifyObservers(this)
            }, this._onContextRestored = () => {
              this._restoreEngineAfterContextLost((() => this._initGLContext()))
            }, uF.addEventListener("webglcontextrestored", this._onContextRestored, !1), SF.powerPreference = SF.powerPreference || "high-performance"), uF.addEventListener("webglcontextlost", this._onContextLost, !1), this._badDesktopOS && (SF.xrCompatible = !1), !SF.disableWebGL2Support) try {
            this._gl = uF.getContext("webgl2", SF) || uF.getContext("experimental-webgl2", SF), this._gl && (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2", this._gl.deleteQuery || (this._webGLVersion = 1, this._shaderPlatformName = "WEBGL1"))
          } catch (RF) {}
          if (!this._gl) {
            if (!uF) throw new Error("The provided canvas is null or undefined.");
            try {
              this._gl = uF.getContext("webgl", SF) || uF.getContext("experimental-webgl", SF)
            } catch (RF) {
              throw new Error("WebGL not supported", {
                cause: RF
              })
            }
          }
          if (!this._gl) throw new Error("WebGL not supported")
        } else {
          this._gl = FF, uF = this._gl.canvas, this._gl.renderbufferStorageMultisample ? (this._webGLVersion = 2, this._shaderPlatformName = "WEBGL2") : this._shaderPlatformName = "WEBGL1";
          const WF = this._gl.getContextAttributes();
          WF && (SF.stencil = WF.stencil)
        }
        this._sharedInit(uF), this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), void 0 !== SF.useHighPrecisionFloats && (this._highPrecisionShadersAllowed = SF.useHighPrecisionFloats), this.resize(), this._initGLContext(), this._initFeatures();
        for (let AF = 0; AF < this._caps.maxVertexAttribs; AF++) this._currentBufferPointers[AF] = new kW;
        this._shaderProcessor = this.Im > 1 ? new iW : new PF;
        const hF = `Babylon.js v${qW.Version}`;
        bW.b.Log(hF + ` - ${this.description}`), this._renderingCanvas && this._renderingCanvas.setAttribute && this._renderingCanvas.setAttribute("data-engine", hF);
        const dF = (0, AF.z)(this._gl);
        dF.validateShaderPrograms = this.validateShaderPrograms, dF.parallelShaderCompile = this._caps.parallelShaderCompile
      }
      _clearEmptyResources() {
        this._dummyFramebuffer = null, super._clearEmptyResources()
      }
      _getShaderProcessingContext(FF) {
        return null
      }
      areAllEffectsReady() {
        for (const FF in this._compiledEffects) {
          if (!this._compiledEffects[FF].isReady()) return !1
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
        const FF = this._gl.getExtension("WEBGL_debug_renderer_info");
        null != FF && (this._glRenderer = this._gl.getParameter(FF.UNMASKED_RENDERER_WEBGL), this._glVendor = this._gl.getParameter(FF.UNMASKED_VENDOR_WEBGL)), this._glVendor || (this._glVendor = this._gl.getParameter(this._gl.VENDOR) || "Unknown vendor"), this._glRenderer || (this._glRenderer = this._gl.getParameter(this._gl.RENDERER) || "Unknown renderer"), 36193 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 36193), 34842 !== this._gl.RGBA16F && (this._gl.RGBA16F = 34842), 34836 !== this._gl.RGBA32F && (this._gl.RGBA32F = 34836), 35056 !== this._gl.DEPTH24_STENCIL8 && (this._gl.DEPTH24_STENCIL8 = 35056), this._caps.timerQuery && (1 === this._webGLVersion && (this._gl.getQuery = this._caps.timerQuery.getQueryEXT.bind(this._caps.timerQuery)), this._caps.canUseTimestampForTimerQuery = (this._gl.getQuery(this._caps.timerQuery.TIMESTAMP_EXT, this._caps.timerQuery.QUERY_COUNTER_BITS_EXT) ?? 0) > 0), this._caps.maxAnisotropy = this._caps.textureAnisotropicFilterExtension ? this._gl.getParameter(this._caps.textureAnisotropicFilterExtension.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._caps.textureFloatLinearFiltering = !(!this._caps.textureFloat || !this._gl.getExtension("OES_texture_float_linear")), this._caps.textureFloatRender = !(!this._caps.textureFloat || !this._canRenderToFloatFramebuffer()), this._caps.textureHalfFloatLinearFiltering = !!(this._webGLVersion > 1 || this._caps.textureHalfFloat && this._gl.getExtension("OES_texture_half_float_linear")), this._caps.textureNorm16 && (this._gl.R16_EXT = 33322, this._gl.RG16_EXT = 33324, this._gl.RGB16_EXT = 32852, this._gl.RGBA16_EXT = 32859, this._gl.R16_SNORM_EXT = 36760, this._gl.RG16_SNORM_EXT = 36761, this._gl.RGB16_SNORM_EXT = 36762, this._gl.RGBA16_SNORM_EXT = 36763);
        const WF = this._gl.getExtension("OES_draw_buffers_indexed");
        if (this._caps.blendParametersPerTarget = !!WF, this._alphaState = new aW.e(this._caps.blendParametersPerTarget), WF && (this._gl.blendEquationSeparateIndexed = WF.blendEquationSeparateiOES.bind(WF), this._gl.blendEquationIndexed = WF.blendEquationiOES.bind(WF), this._gl.blendFuncSeparateIndexed = WF.blendFuncSeparateiOES.bind(WF), this._gl.blendFuncIndexed = WF.blendFunciOES.bind(WF), this._gl.colorMaskIndexed = WF.colorMaskiOES.bind(WF), this._gl.disableIndexed = WF.disableiOES.bind(WF), this._gl.enableIndexed = WF.enableiOES.bind(WF)), this._caps.dualSourceBlending = !!this._gl.getExtension("WEBGL_blend_func_extended"), this._caps.astc && (this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR, this._gl.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = this._caps.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR), this._caps.bptc && (this._gl.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = this._caps.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT), this._caps.s3tc_srgb && (this._gl.COMPRESSED_SRGB_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT, this._gl.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = this._caps.s3tc_srgb.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT), this._caps.etc2 && (this._gl.COMPRESSED_SRGB8_ETC2 = this._caps.etc2.COMPRESSED_SRGB8_ETC2, this._gl.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = this._caps.etc2.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC), this._webGLVersion > 1 && 5131 !== this._gl.HALF_FLOAT_OES && (this._gl.HALF_FLOAT_OES = 5131), this._caps.textureHalfFloatRender = this._caps.textureHalfFloat && this._canRenderToHalfFloatFramebuffer(), this._webGLVersion > 1) this._caps.drawBuffersExtension = !0, this._caps.maxMSAASamples = null !== this._maxMSAASamplesOverride ? this._maxMSAASamplesOverride : this._gl.getParameter(this._gl.MAX_SAMPLES), this._caps.maxDrawBuffers = this._gl.getParameter(this._gl.MAX_DRAW_BUFFERS);
        else {
          const FF = this._gl.getExtension("WEBGL_draw_buffers");
          if (null !== FF) {
            this._caps.drawBuffersExtension = !0, this._gl.drawBuffers = FF.drawBuffersWEBGL.bind(FF), this._caps.maxDrawBuffers = this._gl.getParameter(FF.MAX_DRAW_BUFFERS_WEBGL), this._gl.DRAW_FRAMEBUFFER = this._gl.FRAMEBUFFER;
            for (let WF = 0; WF < 16; WF++) this._gl["COLOR_ATTACHMENT" + WF + "_WEBGL"] = FF["COLOR_ATTACHMENT" + WF + "_WEBGL"]
          }
        }
        if (this._webGLVersion > 1) this._caps.depthTextureExtension = !0;
        else {
          const FF = this._gl.getExtension("WEBGL_depth_texture");
          null != FF && (this._caps.depthTextureExtension = !0, this._gl.UNSIGNED_INT_24_8 = FF.UNSIGNED_INT_24_8_WEBGL)
        }
        if (this.disableVertexArrayObjects) this._caps.vertexArrayObject = !1;
        else if (this._webGLVersion > 1) this._caps.vertexArrayObject = !0;
        else {
          const FF = this._gl.getExtension("OES_vertex_array_object");
          null != FF && (this._caps.vertexArrayObject = !0, this._gl.createVertexArray = FF.createVertexArrayOES.bind(FF), this._gl.bindVertexArray = FF.bindVertexArrayOES.bind(FF), this._gl.deleteVertexArray = FF.deleteVertexArrayOES.bind(FF))
        }
        if (this._webGLVersion > 1) this._caps.instancedArrays = !0;
        else {
          const FF = this._gl.getExtension("ANGLE_instanced_arrays");
          null != FF ? (this._caps.instancedArrays = !0, this._gl.drawArraysInstanced = FF.drawArraysInstancedANGLE.bind(FF), this._gl.drawElementsInstanced = FF.drawElementsInstancedANGLE.bind(FF), this._gl.vertexAttribDivisor = FF.vertexAttribDivisorANGLE.bind(FF)) : this._caps.instancedArrays = !1
        }
        if (this._gl.getShaderPrecisionFormat) {
          const FF = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.HIGH_FLOAT),
            WF = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.HIGH_FLOAT);
          if (FF && WF && (this._caps.highPrecisionShaderSupported = 0 !== FF.precision && 0 !== WF.precision, this._caps.shaderFloatPrecision = Math.min(FF.precision, WF.precision)), !this._shouldUseHighPrecisionShader) {
            const FF = this._gl.getShaderPrecisionFormat(this._gl.VERTEX_SHADER, this._gl.MEDIUM_FLOAT),
              WF = this._gl.getShaderPrecisionFormat(this._gl.FRAGMENT_SHADER, this._gl.MEDIUM_FLOAT);
            FF && WF && (this._caps.shaderFloatPrecision = Math.min(FF.precision, WF.precision))
          }
          this._caps.shaderFloatPrecision < 10 && (this._caps.shaderFloatPrecision = 10)
        }
        if (this._webGLVersion > 1) this._caps.blendMinMax = !0;
        else {
          const FF = this._gl.getExtension("EXT_blend_minmax");
          null != FF && (this._caps.blendMinMax = !0, this._gl.MAX = FF.MAX_EXT, this._gl.MIN = FF.MIN_EXT)
        }
        if (!this._caps.supportSRGBBuffers) {
          if (this._webGLVersion > 1) this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
            SRGB: WebGL2RenderingContext.SRGB,
            SRGB8: WebGL2RenderingContext.SRGB8,
            SRGB8_ALPHA8: WebGL2RenderingContext.SRGB8_ALPHA8
          };
          else {
            const FF = this._gl.getExtension("EXT_sRGB");
            null != FF && (this._caps.supportSRGBBuffers = !0, this._glSRGBExtensionValues = {
              SRGB: FF.SRGB_EXT,
              SRGB8: FF.SRGB_ALPHA_EXT,
              SRGB8_ALPHA8: FF.SRGB_ALPHA_EXT
            })
          }
          if (this._creationOptions) {
            const FF = this._creationOptions.forceSRGBBufferSupportState;
            void 0 !== FF && (this._caps.supportSRGBBuffers = this._caps.supportSRGBBuffers && FF)
          }
        }
        this._depthCullingState.depthTest = !0, this._depthCullingState.depthFunc = this._gl.LEQUAL, this._depthCullingState.depthMask = !0, this._maxSimultaneousTextures = this._caps.maxCombinedTexturesImageUnits;
        for (let SF = 0; SF < this._maxSimultaneousTextures; SF++) this._nextFreeTextureSlots.push(SF);
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
      get Im() {
        return this._webGLVersion
      }
      getClassName() {
        return "ThinEngine"
      }
      _prepareWorkingCanvas() {
        if (this._workingCanvas) return;
        this._workingCanvas = this.createCanvas(1, 1);
        const FF = this._workingCanvas.getContext("2d");
        FF && (this._workingContext = FF)
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
        const FF = this.getGlInfo();
        return FF && FF.renderer ? FF.renderer : ""
      }
      getRenderWidth() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.width : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferWidth : this._gl.drawingBufferWidth
      }
      getRenderHeight() {
        return !(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && this._currentRenderTarget ? this._currentRenderTarget.height : this._framebufferDimensionsObject ? this._framebufferDimensionsObject.framebufferHeight : this._gl.drawingBufferHeight
      }
      clear(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const uF = this.stencilStateComposer.useStencilGlobalOnly;
        this.stencilStateComposer.useStencilGlobalOnly = !0, this.applyStates(), this.stencilStateComposer.useStencilGlobalOnly = uF;
        let hF = 0;
        if (WF && FF) {
          let WF = !0;
          if (this._currentRenderTarget) {
            const SF = this._currentRenderTarget.texture?.format;
            if (void 0 !== SF && (0, TF.i)(SF)) {
              const SF = this._currentRenderTarget.texture?.type;
              void 0 !== SF && (0, TF.j)(SF) ? (qW._TempClearColorUint32[0] = 255 * FF.r, qW._TempClearColorUint32[1] = 255 * FF.g, qW._TempClearColorUint32[2] = 255 * FF.b, qW._TempClearColorUint32[3] = 255 * FF.a, this._gl.clearBufferuiv(this._gl.COLOR, 0, qW._TempClearColorUint32), WF = !1) : (qW._TempClearColorInt32[0] = 255 * FF.r, qW._TempClearColorInt32[1] = 255 * FF.g, qW._TempClearColorInt32[2] = 255 * FF.b, qW._TempClearColorInt32[3] = 255 * FF.a, this._gl.clearBufferiv(this._gl.COLOR, 0, qW._TempClearColorInt32), WF = !1)
            }
          }
          WF && (this._gl.clearColor(FF.r, FF.g, FF.b, void 0 !== FF.a ? FF.a : 1), hF |= this._gl.COLOR_BUFFER_BIT)
        }
        SF && (this.QPF ? (this._depthCullingState.depthFunc = this._gl.GEQUAL, this._gl.clearDepth(0)) : this._gl.clearDepth(1), hF |= this._gl.DEPTH_BUFFER_BIT), CF && (this._gl.clearStencil(AF), hF |= this._gl.STENCIL_BUFFER_BIT), this._gl.clear(hF)
      }
      _clearColorAttachment(FF, WF, SF, CF) {
        if ((0, TF.i)(SF)) {
          const SF = (0, TF.j)(CF),
            AF = SF ? qW._TempClearColorUint32 : qW._TempClearColorInt32;
          return AF[0] = WF.r, AF[1] = WF.g, AF[2] = WF.b, AF[3] = WF.a, void(SF ? this._gl.clearBufferuiv(this._gl.COLOR, FF, AF) : this._gl.clearBufferiv(this._gl.COLOR, FF, AF))
        }
        qW._TempClearColorFloat32[0] = WF.r, qW._TempClearColorFloat32[1] = WF.g, qW._TempClearColorFloat32[2] = WF.b, qW._TempClearColorFloat32[3] = WF.a, this._gl.clearBufferfv(this._gl.COLOR, FF, qW._TempClearColorFloat32)
      }
      _viewport(FF, WF, SF, CF) {
        FF === this._viewportCached.x && WF === this._viewportCached.y && SF === this._viewportCached.z && CF === this._viewportCached.w || (this._viewportCached.x = FF, this._viewportCached.y = WF, this._viewportCached.z = SF, this._viewportCached.w = CF, this._gl.viewport(FF, WF, SF, CF))
      }
      wL() {
        super.wL(), this._badOS && this.flushFramebuffer()
      }
      get performanceMonitor() {
        throw new Error("Not Supported by ThinEngine")
      }
      bindFramebuffer(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = arguments.length > 3 ? arguments[3] : void 0,
          AF = arguments.length > 4 ? arguments[4] : void 0,
          uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          hF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const dF = FF;
        this._currentRenderTarget && this._resolveAndGenerateMipMapsFramebuffer(this._currentRenderTarget), this._currentRenderTarget = FF, this._integerMRTAttachmentsMask = !FF.isMulti && FF.texture && (0, TF.i)(FF.texture.format) ? 1 : 0, this._bindUnboundFramebuffer(dF._framebuffer);
        const PF = this._gl;
        FF.isMulti || (FF.is2DArray || FF.is3D ? (PF.framebufferTextureLayer(PF.FRAMEBUFFER, PF.COLOR_ATTACHMENT0, FF.texture._hardwareTexture?.underlyingResource, uF, hF), dF._currentLOD = uF) : FF.isCube ? PF.framebufferTexture2D(PF.FRAMEBUFFER, PF.COLOR_ATTACHMENT0, PF.TEXTURE_CUBE_MAP_POSITIVE_X + WF, FF.texture._hardwareTexture?.underlyingResource, uF) : dF._currentLOD !== uF && (PF.framebufferTexture2D(PF.FRAMEBUFFER, PF.COLOR_ATTACHMENT0, PF.TEXTURE_2D, FF.texture._hardwareTexture?.underlyingResource, uF), dF._currentLOD = uF));
        const RF = FF._depthStencilTexture;
        if (RF) {
          FF.is3D && (FF.texture.width === RF.width && FF.texture.height === RF.height && FF.texture.depth === RF.depth || bW.b.Warn("Depth/Stencil attachment for 3D target must have same dimensions as color attachment"));
          const SF = FF._depthStencilTextureWithStencil ? PF.DEPTH_STENCIL_ATTACHMENT : PF.DEPTH_ATTACHMENT;
          FF.is2DArray || FF.is3D ? PF.framebufferTextureLayer(PF.FRAMEBUFFER, SF, RF._hardwareTexture?.underlyingResource, uF, hF) : FF.isCube ? PF.framebufferTexture2D(PF.FRAMEBUFFER, SF, PF.TEXTURE_CUBE_MAP_POSITIVE_X + WF, RF._hardwareTexture?.underlyingResource, uF) : PF.framebufferTexture2D(PF.FRAMEBUFFER, SF, PF.TEXTURE_2D, RF._hardwareTexture?.underlyingResource, uF)
        }
        dF._MSAAFramebuffer && this._bindUnboundFramebuffer(dF._MSAAFramebuffer), this._cachedViewport && !AF ? this.setViewport(this._cachedViewport, SF, CF) : (SF || (SF = FF.width, uF && (SF /= Math.pow(2, uF))), CF || (CF = FF.height, uF && (CF /= Math.pow(2, uF))), this._viewport(0, 0, SF, CF)), this.wipeCaches()
      }
      setStateCullFaceType(FF, WF) {
        const SF = this.cullBackFaces ?? FF ?? 1 ? this._gl.BACK : this._gl.FRONT;
        (this._depthCullingState.cullFace !== SF || WF) && (this._depthCullingState.cullFace = SF)
      }
      setState(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          AF = arguments.length > 4 ? arguments[4] : void 0,
          uF = arguments.length > 5 ? arguments[5] : void 0,
          hF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        (this._depthCullingState.cull !== FF || SF) && (this._depthCullingState.cull = FF), this.setStateCullFaceType(AF, SF), this.setZOffset(WF), this.setZOffsetUnits(hF);
        const bW = CF ? this._gl.CW : this._gl.CCW;
        (this._depthCullingState.frontFace !== bW || SF) && (this._depthCullingState.frontFace = bW), this._stencilStateComposer.stencilMaterial = uF
      }
      _resolveAndGenerateMipMapsFramebuffer(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        FF.disableAutomaticMSAAResolve || (FF.isMulti ? this.resolveMultiFramebuffer(FF) : this.resolveFramebuffer(FF)), WF || (FF.isMulti ? this.generateMipMapsMultiFramebuffer(FF) : this.generateMipMapsFramebuffer(FF))
      }
      _bindUnboundFramebuffer(FF) {
        this._currentFramebuffer !== FF && (this._gl.bindFramebuffer(this._gl.FRAMEBUFFER, FF), this._currentFramebuffer = FF)
      }
      _currentFrameBufferIsDefaultFrameBuffer() {
        return null === this._currentFramebuffer
      }
      generateMipmaps(FF) {
        const WF = this._getTextureTarget(FF);
        this._bindTextureDirectly(WF, FF, !0), this._gl.generateMipmap(WF), this._bindTextureDirectly(WF, null)
      }
      unBindFramebuffer(FF, WF, SF) {
        const CF = FF;
        this._currentRenderTarget = null, this._integerMRTAttachmentsMask = 0, this._resolveAndGenerateMipMapsFramebuffer(FF, WF), SF && (CF._MSAAFramebuffer && this._bindUnboundFramebuffer(CF._framebuffer), SF()), this._bindUnboundFramebuffer(null)
      }
      generateMipMapsFramebuffer(FF) {
        FF.isMulti || !FF.texture?.generateMipMaps || FF.isCube || this.generateMipmaps(FF.texture)
      }
      resolveFramebuffer(FF) {
        const WF = FF,
          SF = this._gl;
        if (!WF._MSAAFramebuffer || WF.isMulti) return;
        let CF = WF.resolveMSAAColors ? SF.COLOR_BUFFER_BIT : 0;
        CF |= WF._generateDepthBuffer && WF.resolveMSAADepth ? SF.DEPTH_BUFFER_BIT : 0, CF |= WF._generateStencilBuffer && WF.resolveMSAAStencil ? SF.STENCIL_BUFFER_BIT : 0, SF.bindFramebuffer(SF.READ_FRAMEBUFFER, WF._MSAAFramebuffer), SF.bindFramebuffer(SF.DRAW_FRAMEBUFFER, WF._framebuffer), SF.blitFramebuffer(0, 0, FF.width, FF.height, 0, 0, FF.width, FF.height, CF, SF.NEAREST)
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
      createVertexBuffer(FF, WF, SF) {
        return this._createVertexBuffer(FF, this._gl.STATIC_DRAW)
      }
      _createVertexBuffer(FF, WF) {
        const SF = this._gl.createBuffer();
        if (!SF) throw new Error("Unable to create vertex buffer");
        const CF = new eF.e(SF);
        return this.bindArrayBuffer(CF), "number" !== typeof FF ? FF instanceof Array ? (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(FF), WF), CF.ZF = 4 * FF.length) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, FF, WF), CF.ZF = FF.byteLength) : (this._gl.bufferData(this._gl.ARRAY_BUFFER, new Uint8Array(FF), WF), CF.ZF = FF), this._resetVertexBufferBinding(), CF.references = 1, CF
      }
      createDynamicVertexBuffer(FF, WF) {
        return this._createVertexBuffer(FF, this._gl.DYNAMIC_DRAW)
      }
      _resetIndexBufferBinding() {
        this.bindIndexBuffer(null), this._cachedIndexBuffer = null
      }
      createIndexBuffer(FF, WF, SF) {
        const CF = this._gl.createBuffer(),
          AF = new eF.e(CF);
        if (!CF) throw new Error("Unable to create index buffer");
        this.bindIndexBuffer(AF);
        const uF = this._normalizeIndexData(FF);
        return this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, uF, WF ? this._gl.DYNAMIC_DRAW : this._gl.STATIC_DRAW), this._resetIndexBufferBinding(), AF.references = 1, AF.is32Bits = 4 === uF.BYTES_PER_ELEMENT, AF
      }
      _normalizeIndexData(FF) {
        if (2 === FF.BYTES_PER_ELEMENT) return FF;
        if (this._caps.uintIndices) {
          if (FF instanceof Uint32Array) return FF;
          for (let WF = 0; WF < FF.length; WF++)
            if (FF[WF] >= 65535) return new Uint32Array(FF);
          return new Uint16Array(FF)
        }
        return new Uint16Array(FF)
      }
      bindArrayBuffer(FF) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(FF, this._gl.ARRAY_BUFFER)
      }
      bindUniformBlock(FF, WF, SF) {
        const CF = FF.program,
          AF = this._gl.getUniformBlockIndex(CF, WF);
        this._gl.uniformBlockBinding(CF, AF, SF)
      }
      bindIndexBuffer(FF) {
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this._bindBuffer(FF, this._gl.ELEMENT_ARRAY_BUFFER)
      }
      _bindBuffer(FF, WF) {
        (this._vaoRecordInProgress || this._currentBoundBuffer[WF] !== FF) && (this._gl.bindBuffer(WF, FF ? FF.underlyingResource : null), this._currentBoundBuffer[WF] = FF)
      }
      updateArrayBuffer(FF) {
        this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, FF)
      }
      _vertexAttribPointer(FF, WF, SF, CF, AF, uF, hF) {
        const bW = this._currentBufferPointers[WF];
        if (!bW) return;
        let dF = !1;
        bW.active ? (bW.buffer !== FF && (bW.buffer = FF, dF = !0), bW.size !== SF && (bW.size = SF, dF = !0), bW.type !== CF && (bW.type = CF, dF = !0), bW.normalized !== AF && (bW.normalized = AF, dF = !0), bW.stride !== uF && (bW.stride = uF, dF = !0), bW.offset !== hF && (bW.offset = hF, dF = !0)) : (dF = !0, bW.active = !0, bW.index = WF, bW.size = SF, bW.type = CF, bW.normalized = AF, bW.stride = uF, bW.offset = hF, bW.buffer = FF), (dF || this._vaoRecordInProgress) && (this.bindArrayBuffer(FF), CF === this._gl.UNSIGNED_INT || CF === this._gl.INT ? this._gl.vertexAttribIPointer(WF, SF, CF, uF, hF) : this._gl.vertexAttribPointer(WF, SF, CF, AF, uF, hF))
      }
      _bindIndexBufferWithCache(FF) {
        null != FF && this._cachedIndexBuffer !== FF && (this._cachedIndexBuffer = FF, this.bindIndexBuffer(FF), this._uintIndicesCurrentlySet = FF.is32Bits)
      }
      _bindVertexBuffersAttributes(FF, WF, SF) {
        const CF = WF.getAttributesNames();
        this._vaoRecordInProgress || this._unbindVertexArrayObject(), this.unbindAllAttributes();
        for (let AF = 0; AF < CF.length; AF++) {
          const uF = WF.getAttributeLocation(AF);
          if (uF >= 0) {
            const WF = CF[AF];
            let hF = null;
            if (SF && (hF = SF[WF]), hF || (hF = FF[WF]), !hF) continue;
            this._gl.enableVertexAttribArray(uF), this._vaoRecordInProgress || (this._vertexAttribArraysEnabled[uF] = !0);
            const bW = hF.getBuffer();
            bW && (this._vertexAttribPointer(bW, uF, hF.getSize(), hF.type, hF.normalized, hF.byteStride, hF.byteOffset), hF.getIsInstanced() && (this._gl.vertexAttribDivisor(uF, hF.getInstanceDivisor()), this._vaoRecordInProgress || (this._currentInstanceLocations.push(uF), this._currentInstanceBuffers.push(bW))))
          }
        }
      }
      recordVertexArrayObject(FF, WF, SF, CF) {
        const AF = this._gl.createVertexArray();
        if (!AF) throw new Error("Unable to create VAO");
        return this._vaoRecordInProgress = !0, this._gl.bindVertexArray(AF), this._mustWipeVertexAttributes = !0, this._bindVertexBuffersAttributes(FF, SF, CF), this.bindIndexBuffer(WF), this._vaoRecordInProgress = !1, this._gl.bindVertexArray(null), AF
      }
      bindVertexArrayObject(FF, WF) {
        this._cachedVertexArrayObject !== FF && (this._cachedVertexArrayObject = FF, this._gl.bindVertexArray(FF), this._cachedVertexBuffers = null, this._cachedIndexBuffer = null, this._uintIndicesCurrentlySet = null != WF && WF.is32Bits, this._mustWipeVertexAttributes = !0)
      }
      bindBuffersDirectly(FF, WF, SF, CF, AF) {
        if (this._cachedVertexBuffers !== FF || this._cachedEffectForVertexBuffers !== AF) {
          this._cachedVertexBuffers = FF, this._cachedEffectForVertexBuffers = AF;
          const WF = AF.getAttributesCount();
          this._unbindVertexArrayObject(), this.unbindAllAttributes();
          let uF = 0;
          for (let hF = 0; hF < WF; hF++)
            if (hF < SF.length) {
              const WF = AF.getAttributeLocation(hF);
              WF >= 0 && (this._gl.enableVertexAttribArray(WF), this._vertexAttribArraysEnabled[WF] = !0, this._vertexAttribPointer(FF, WF, SF[hF], this._gl.FLOAT, !1, CF, uF)), uF += 4 * SF[hF]
            }
        }
        this._bindIndexBufferWithCache(WF)
      }
      _unbindVertexArrayObject() {
        this._cachedVertexArrayObject && (this._cachedVertexArrayObject = null, this._gl.bindVertexArray(null))
      }
      bindBuffers(FF, WF, SF, CF) {
        this._cachedVertexBuffers === FF && this._cachedEffectForVertexBuffers === SF || (this._cachedVertexBuffers = FF, this._cachedEffectForVertexBuffers = SF, this._bindVertexBuffersAttributes(FF, SF, CF)), this._bindIndexBufferWithCache(WF)
      }
      unbindInstanceAttributes() {
        let FF;
        for (let WF = 0, SF = this._currentInstanceLocations.length; WF < SF; WF++) {
          const SF = this._currentInstanceBuffers[WF];
          FF != SF && SF.references && (FF = SF, this.bindArrayBuffer(SF));
          const CF = this._currentInstanceLocations[WF];
          this._gl.vertexAttribDivisor(CF, 0)
        }
        this._currentInstanceBuffers.length = 0, this._currentInstanceLocations.length = 0
      }
      releaseVertexArrayObject(FF) {
        this._gl.deleteVertexArray(FF)
      }
      _releaseBuffer(FF) {
        return FF.references--, 0 === FF.references && (this._deleteBuffer(FF), !0)
      }
      _deleteBuffer(FF) {
        this._gl.deleteBuffer(FF.underlyingResource)
      }
      updateAndBindInstancesBuffer(FF, WF, SF) {
        if (this.bindArrayBuffer(FF), WF && this._gl.bufferSubData(this._gl.ARRAY_BUFFER, 0, WF), void 0 !== SF[0].index) this.bindInstancesBuffer(FF, SF, !0);
        else
          for (let CF = 0; CF < 4; CF++) {
            const WF = SF[CF];
            this._vertexAttribArraysEnabled[WF] || (this._gl.enableVertexAttribArray(WF), this._vertexAttribArraysEnabled[WF] = !0), this._vertexAttribPointer(FF, WF, 4, this._gl.FLOAT, !1, 64, 16 * CF), this._gl.vertexAttribDivisor(WF, 1), this._currentInstanceLocations.push(WF), this._currentInstanceBuffers.push(FF)
          }
      }
      bindInstancesBuffer(FF, WF) {
        let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.bindArrayBuffer(FF);
        let CF = 0;
        if (SF)
          for (let AF = 0; AF < WF.length; AF++) {
            CF += 4 * WF[AF].attributeSize
          }
        for (let AF = 0; AF < WF.length; AF++) {
          const SF = WF[AF];
          void 0 === SF.index && (SF.index = this._currentEffect.getAttributeLocationByName(SF.attributeName)), SF.index < 0 || (this._vertexAttribArraysEnabled[SF.index] || (this._gl.enableVertexAttribArray(SF.index), this._vertexAttribArraysEnabled[SF.index] = !0), this._vertexAttribPointer(FF, SF.index, SF.attributeSize, SF.attributeType || this._gl.FLOAT, SF.normalized || !1, CF, SF.offset), this._gl.vertexAttribDivisor(SF.index, void 0 === SF.divisor ? 1 : SF.divisor), this._currentInstanceLocations.push(SF.index), this._currentInstanceBuffers.push(FF))
        }
      }
      disableInstanceAttributeByName(FF) {
        if (!this._currentEffect) return;
        const WF = this._currentEffect.getAttributeLocationByName(FF);
        this.disableInstanceAttribute(WF)
      }
      disableInstanceAttribute(FF) {
        let WF, SF = !1;
        for (; - 1 !== (WF = this._currentInstanceLocations.indexOf(FF));) this._currentInstanceLocations.splice(WF, 1), this._currentInstanceBuffers.splice(WF, 1), SF = !0;
        SF && (this._gl.vertexAttribDivisor(FF, 0), this.disableAttributeByIndex(FF))
      }
      disableAttributeByIndex(FF) {
        this._gl.disableVertexAttribArray(FF), this._vertexAttribArraysEnabled[FF] = !1, this._currentBufferPointers[FF].active = !1
      }
      draw(FF, WF, SF, CF) {
        this.drawElementsType(FF ? 0 : 1, WF, SF, CF)
      }
      drawPointClouds(FF, WF, SF) {
        this.drawArraysType(2, FF, WF, SF)
      }
      drawUnIndexed(FF, WF, SF, CF) {
        this.drawArraysType(FF ? 0 : 1, WF, SF, CF)
      }
      drawElementsType(FF, WF, SF, CF) {
        this.applyStates(), this._reportDrawCall();
        const AF = this._drawMode(FF),
          uF = this._uintIndicesCurrentlySet ? this._gl.UNSIGNED_INT : this._gl.UNSIGNED_SHORT,
          hF = this._uintIndicesCurrentlySet ? 4 : 2;
        CF ? this._gl.drawElementsInstanced(AF, SF, uF, WF * hF, CF) : this._gl.drawElements(AF, SF, uF, WF * hF)
      }
      drawArraysType(FF, WF, SF, CF) {
        this.applyStates(), this._reportDrawCall();
        const AF = this._drawMode(FF);
        CF ? this._gl.drawArraysInstanced(AF, WF, SF, CF) : this._gl.drawArrays(AF, WF, SF)
      }
      _drawMode(FF) {
        switch (FF) {
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
      _releaseEffect(FF) {
        this._compiledEffects[FF._key] && delete this._compiledEffects[FF._key];
        const WF = FF.getPipelineContext();
        WF && this._deletePipelineContext(WF)
      }
      _deletePipelineContext(FF) {
        const WF = FF;
        WF && WF.program && (WF.program.__SPECTOR_rebuildProgram = null, (0, tW.j)(WF), this._gl && (this._currentProgram === WF.program && this._setProgram(null), this._gl.deleteProgram(WF.program)))
      }
      _getGlobalDefines(FF) {
        return (0, gW.g)(FF, this.isNDCHalfZRange, this.QPF, this.useExactSrgbConversions)
      }
      createEffect(FF, WF, SF, uF, hF, bW, dF, PF, RF) {
        let iW = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          eF = arguments.length > 10 ? arguments[10] : void 0;
        const EF = "string" === typeof FF ? FF : FF.vertexToken || FF.vertexSource || FF.vertexElement || FF.vertex,
          QF = "string" === typeof FF ? FF : FF.fragmentToken || FF.fragmentSource || FF.fragmentElement || FF.fragment,
          rW = this._getGlobalDefines(),
          gW = void 0 !== WF.attributes;
        let tW = hF ?? WF.defines ?? "";
        rW && (tW += rW);
        const TF = EF + "+" + QF + "@" + tW;
        if (this._compiledEffects[TF]) {
          const FF = this._compiledEffects[TF];
          return dF && FF.isReady() && dF(FF), FF._refCount++, FF
        }
        this._gl && (0, AF.z)(this._gl);
        const aW = new CF.c(FF, WF, gW ? this : SF, uF, this, hF, bW, dF, PF, RF, TF, WF.shaderLanguage ?? iW, WF.extraInitializationsAsync ?? eF);
        return this._compiledEffects[TF] = aW, aW
      }
      _getShaderSource(FF) {
        return this._gl.getShaderSource(FF)
      }
      createRawShaderProgram(FF, WF, SF, CF) {
        let uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const hF = (0, AF.z)(this._gl);
        return hF._contextWasLost = this._contextWasLost, hF.validateShaderPrograms = this.validateShaderPrograms, (0, AF.s)(FF, WF, SF, CF || this._gl, uF)
      }
      createShaderProgram(FF, WF, SF, CF, uF) {
        let hF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        const bW = (0, AF.z)(this._gl);
        return bW._contextWasLost = this._contextWasLost, bW.validateShaderPrograms = this.validateShaderPrograms, (0, AF.t)(FF, WF, SF, CF, uF || this._gl, hF)
      }
      inlineShaderCode(FF) {
        return FF
      }
      createPipelineContext(FF) {
        if (this._gl) {
          (0, AF.z)(this._gl).parallelShaderCompile = this._caps.parallelShaderCompile
        }
        const WF = (0, AF.r)(this._gl, FF);
        return WF.engine = this, WF
      }
      createMaterialContext() {}
      createDrawContext() {}
      _finalizePipelineContext(FF) {
        return (0, AF.j)(FF, this._gl, this.validateShaderPrograms)
      }
      _preparePipelineContextAsync(FF, WF, SF, CF, uF, hF, bW, dF, PF, RF, iW) {
        const eF = (0, AF.z)(this._gl);
        return eF._contextWasLost = this._contextWasLost, eF.validateShaderPrograms = this.validateShaderPrograms, eF._createShaderProgramInjection = this._createShaderProgram.bind(this), eF.createRawShaderProgramInjection = this.createRawShaderProgram.bind(this), eF.createShaderProgramInjection = this.createShaderProgram.bind(this), eF.loadFileInjection = this._loadFile.bind(this), (0, AF.o)(FF, WF, SF, CF, uF, hF, bW, dF, PF, RF, iW)
      }
      _createShaderProgram(FF, WF, SF, CF) {
        let uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        return (0, AF.d)(FF, WF, SF, CF, uF)
      }
      _isRenderingStateCompiled(FF) {
        return !this._isDisposed && (0, AF.n)(FF, this._gl, this.validateShaderPrograms)
      }
      _executeWhenRenderingStateIsCompiled(FF, WF) {
        (0, AF.h)(FF, WF)
      }
      getUniforms(FF, WF) {
        const SF = new Array,
          CF = FF;
        for (let AF = 0; AF < WF.length; AF++) SF.push(this._gl.getUniformLocation(CF.program, WF[AF]));
        return SF
      }
      getAttributes(FF, WF) {
        const SF = [],
          CF = FF;
        for (let uF = 0; uF < WF.length; uF++) try {
          SF.push(this._gl.getAttribLocation(CF.program, WF[uF]))
        } catch (AF) {
          SF.push(-1)
        }
        return SF
      }
      enableEffect(FF) {
        (FF = null !== FF && (0, hF.e)(FF) ? FF.effect : FF) && FF !== this._currentEffect && (this._stencilStateComposer.stencilMaterial = void 0, this.bindSamplers(FF), this._currentEffect = FF, FF.onBind && FF.onBind(FF), FF._onBindObservable && FF._onBindObservable.notifyObservers(FF))
      }
      setInt(FF, WF) {
        return !!FF && (this._gl.uniform1i(FF, WF), !0)
      }
      setInt2(FF, WF, SF) {
        return !!FF && (this._gl.uniform2i(FF, WF, SF), !0)
      }
      setInt3(FF, WF, SF, CF) {
        return !!FF && (this._gl.uniform3i(FF, WF, SF, CF), !0)
      }
      setInt4(FF, WF, SF, CF, AF) {
        return !!FF && (this._gl.uniform4i(FF, WF, SF, CF, AF), !0)
      }
      setIntArray(FF, WF) {
        return !!FF && (this._gl.uniform1iv(FF, WF), !0)
      }
      setIntArray2(FF, WF) {
        return !(!FF || WF.length % 2 !== 0) && (this._gl.uniform2iv(FF, WF), !0)
      }
      setIntArray3(FF, WF) {
        return !(!FF || WF.length % 3 !== 0) && (this._gl.uniform3iv(FF, WF), !0)
      }
      setIntArray4(FF, WF) {
        return !(!FF || WF.length % 4 !== 0) && (this._gl.uniform4iv(FF, WF), !0)
      }
      setUInt(FF, WF) {
        return !!FF && (this._gl.uniform1ui(FF, WF), !0)
      }
      setUInt2(FF, WF, SF) {
        return !!FF && (this._gl.uniform2ui(FF, WF, SF), !0)
      }
      setUInt3(FF, WF, SF, CF) {
        return !!FF && (this._gl.uniform3ui(FF, WF, SF, CF), !0)
      }
      setUInt4(FF, WF, SF, CF, AF) {
        return !!FF && (this._gl.uniform4ui(FF, WF, SF, CF, AF), !0)
      }
      setUIntArray(FF, WF) {
        return !!FF && (this._gl.uniform1uiv(FF, WF), !0)
      }
      setUIntArray2(FF, WF) {
        return !(!FF || WF.length % 2 !== 0) && (this._gl.uniform2uiv(FF, WF), !0)
      }
      setUIntArray3(FF, WF) {
        return !(!FF || WF.length % 3 !== 0) && (this._gl.uniform3uiv(FF, WF), !0)
      }
      setUIntArray4(FF, WF) {
        return !(!FF || WF.length % 4 !== 0) && (this._gl.uniform4uiv(FF, WF), !0)
      }
      setArray(FF, WF) {
        return !!FF && (!(WF.length < 1) && (this._gl.uniform1fv(FF, WF), !0))
      }
      setArray2(FF, WF) {
        return !(!FF || WF.length % 2 !== 0) && (this._gl.uniform2fv(FF, WF), !0)
      }
      setArray3(FF, WF) {
        return !(!FF || WF.length % 3 !== 0) && (this._gl.uniform3fv(FF, WF), !0)
      }
      setArray4(FF, WF) {
        return !(!FF || WF.length % 4 !== 0) && (this._gl.uniform4fv(FF, WF), !0)
      }
      setMatrices(FF, WF) {
        return !!FF && (this._gl.uniformMatrix4fv(FF, !1, WF), !0)
      }
      setMatrix3x3(FF, WF) {
        return !!FF && (this._gl.uniformMatrix3fv(FF, !1, WF), !0)
      }
      setMatrix2x2(FF, WF) {
        return !!FF && (this._gl.uniformMatrix2fv(FF, !1, WF), !0)
      }
      setFloat(FF, WF) {
        return !!FF && (this._gl.uniform1f(FF, WF), !0)
      }
      setFloat2(FF, WF, SF) {
        return !!FF && (this._gl.uniform2f(FF, WF, SF), !0)
      }
      setFloat3(FF, WF, SF, CF) {
        return !!FF && (this._gl.uniform3f(FF, WF, SF, CF), !0)
      }
      setFloat4(FF, WF, SF, CF, AF) {
        return !!FF && (this._gl.uniform4f(FF, WF, SF, CF, AF), !0)
      }
      _applyColorWriteState() {
        if (this._colorWriteChanged) {
          this._colorWriteChanged = !1;
          const FF = this._colorWrite;
          this._gl.colorMask(FF, FF, FF, FF)
        }
      }
      applyStates() {
        this._depthCullingState.apply(this._gl), this._stencilStateComposer.apply(this._gl), this._alphaState.apply(this._gl, this._currentRenderTarget && this._currentRenderTarget.textures ? this._currentRenderTarget.textures.length : 1, this._integerMRTAttachmentsMask), this._applyColorWriteState()
      }
      wipeCaches(FF) {
        this.preventCacheWipeBetweenFrames && !FF || (this._currentEffect = null, this._viewportCached.x = 0, this._viewportCached.y = 0, this._viewportCached.z = 0, this._viewportCached.w = 0, this._unbindVertexArrayObject(), FF && (this._currentProgram = null, this.resetTextureCache(), this._stencilStateComposer.reset(), this._depthCullingState.reset(), this._depthCullingState.depthFunc = this._gl.LEQUAL, this._alphaState.reset(), this._resetAlphaMode(), this._colorWrite = !0, this._colorWriteChanged = !0, this._unpackFlipYCached = null, this._gl.pixelStorei(this._gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, this._gl.NONE), this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), this._mustWipeVertexAttributes = !0, this.unbindAllAttributes()), this._resetVertexBufferBinding(), this._cachedIndexBuffer = null, this._cachedEffectForVertexBuffers = null, this.bindIndexBuffer(null))
      }
      _getSamplingParameters(FF, WF) {
        const SF = this._gl;
        let CF = SF.NEAREST,
          AF = SF.NEAREST,
          uF = !1;
        switch (FF) {
          case 11:
            CF = SF.LINEAR, AF = WF ? SF.LINEAR_MIPMAP_NEAREST : SF.LINEAR;
            break;
          case 3:
            CF = SF.LINEAR, uF = !0, AF = WF ? SF.LINEAR_MIPMAP_LINEAR : SF.LINEAR;
            break;
          case 8:
            uF = !0, CF = SF.NEAREST, AF = WF ? SF.NEAREST_MIPMAP_LINEAR : SF.NEAREST;
            break;
          case 4:
            CF = SF.NEAREST, AF = WF ? SF.NEAREST_MIPMAP_NEAREST : SF.NEAREST;
            break;
          case 5:
            CF = SF.NEAREST, AF = WF ? SF.LINEAR_MIPMAP_NEAREST : SF.LINEAR;
            break;
          case 6:
            uF = !0, CF = SF.NEAREST, AF = WF ? SF.LINEAR_MIPMAP_LINEAR : SF.LINEAR;
            break;
          case 7:
            CF = SF.NEAREST, AF = SF.LINEAR;
            break;
          case 1:
            CF = SF.NEAREST, AF = SF.NEAREST;
            break;
          case 9:
            CF = SF.LINEAR, AF = WF ? SF.NEAREST_MIPMAP_NEAREST : SF.NEAREST;
            break;
          case 10:
            uF = !0, CF = SF.LINEAR, AF = WF ? SF.NEAREST_MIPMAP_LINEAR : SF.NEAREST;
            break;
          case 2:
            CF = SF.LINEAR, AF = SF.LINEAR;
            break;
          case 12:
            CF = SF.LINEAR, AF = SF.NEAREST
        }
        return {
          min: AF,
          mag: CF,
          hasMipMaps: uF
        }
      }
      _createTexture() {
        const FF = this._gl.createTexture();
        if (!FF) throw new Error("Unable to create texture");
        return FF
      }
      _createHardwareTexture() {
        return new QF.d(this._createTexture(), this._gl)
      }
      _createInternalTexture(FF, WF) {
        let SF, CF, AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          uF = !1,
          hF = 0,
          dF = 3,
          PF = 5,
          RF = !1,
          iW = 1,
          eF = !1,
          EF = 0,
          QF = !1;
        void 0 !== WF && "object" === typeof WF ? (SF = !!WF.generateMipMaps, uF = !!WF.createMipMaps, hF = void 0 === WF.type ? 0 : WF.type, dF = void 0 === WF.samplingMode ? 3 : WF.samplingMode, PF = void 0 === WF.format ? 5 : WF.format, RF = void 0 !== WF.useSRGBBuffer && WF.useSRGBBuffer, iW = WF.samples ?? 1, CF = WF.label, eF = !!WF.createMSAATexture, EF = WF.comparisonFunction || 0, QF = !!WF.isCube) : SF = !!WF, RF && (RF = this._caps.supportSRGBBuffers && (this.Im > 1 || this.isWebGPU)), (1 !== hF || this._caps.textureFloatLinearFiltering) && (2 !== hF || this._caps.textureHalfFloatLinearFiltering) || (dF = 1), 1 !== hF || this._caps.textureFloat || (hF = 0, bW.b.Warn("Float textures are not supported. Type forced to TEXTURETYPE_UNSIGNED_BYTE"));
        const gW = (0, TF.e)(PF),
          tW = (0, TF.b)(PF),
          aW = this._gl,
          kW = new rW.b(this, AF),
          qW = FF.width || FF,
          VF = FF.height || FF,
          NF = FF.depth || 0,
          DF = FF.layers || 0,
          LF = this._getSamplingParameters(dF, (SF || uF) && !gW),
          mW = 0 !== DF ? aW.TEXTURE_2D_ARRAY : 0 !== NF ? aW.TEXTURE_3D : QF ? aW.TEXTURE_CUBE_MAP : aW.TEXTURE_2D,
          OF = gW ? this._getInternalFormatFromDepthTextureFormat(PF, !0, tW) : this._getRGBABufferInternalSizedFormat(hF, PF, RF),
          xW = gW ? tW ? aW.DEPTH_STENCIL : aW.DEPTH_COMPONENT : this._getInternalFormat(PF),
          ZF = gW ? this._getWebGLTextureTypeFromDepthTextureFormat(PF) : this._getWebGLTextureType(hF);
        if (this._bindTextureDirectly(mW, kW), 0 !== DF) kW.is2DArray = !0, aW.texImage3D(mW, 0, OF, qW, VF, DF, 0, xW, ZF, null);
        else if (0 !== NF) kW.is3D = !0, aW.texImage3D(mW, 0, OF, qW, VF, NF, 0, xW, ZF, null);
        else if (QF) {
          kW.isCube = !0;
          for (let FF = 0; FF < 6; FF++) aW.texImage2D(aW.TEXTURE_CUBE_MAP_POSITIVE_X + FF, 0, OF, qW, VF, 0, xW, ZF, null)
        } else aW.texImage2D(mW, 0, OF, qW, VF, 0, xW, ZF, null);
        if (aW.texParameteri(mW, aW.TEXTURE_MAG_FILTER, LF.mag), aW.texParameteri(mW, aW.TEXTURE_MIN_FILTER, LF.min), aW.texParameteri(mW, aW.TEXTURE_WRAP_S, aW.CLAMP_TO_EDGE), aW.texParameteri(mW, aW.TEXTURE_WRAP_T, aW.CLAMP_TO_EDGE), gW && this.Im > 1 && (0 === EF ? (aW.texParameteri(mW, aW.TEXTURE_COMPARE_FUNC, 515), aW.texParameteri(mW, aW.TEXTURE_COMPARE_MODE, aW.NONE)) : (aW.texParameteri(mW, aW.TEXTURE_COMPARE_FUNC, EF), aW.texParameteri(mW, aW.TEXTURE_COMPARE_MODE, aW.COMPARE_REF_TO_TEXTURE))), (SF || uF) && this._gl.generateMipmap(mW), this._bindTextureDirectly(mW, null), kW._useSRGBBuffer = RF, kW.baseWidth = qW, kW.baseHeight = VF, kW.width = qW, kW.height = VF, kW.depth = DF || NF, kW.isReady = !0, kW.samples = iW, kW.generateMipMaps = SF, kW.samplingMode = dF, kW.type = hF, kW.format = PF, kW.label = CF, kW.comparisonFunction = EF, this._internalTexturesCache.push(kW), eF) {
          let FF;
          if (FF = (0, TF.e)(kW.format) ? this._setupFramebufferDepthAttachments((0, TF.b)(kW.format), 19 !== kW.format, kW.width, kW.height, iW, kW.format, !0) : this._createRenderBuffer(kW.width, kW.height, iW, -1, this._getRGBABufferInternalSizedFormat(kW.type, kW.format, kW._useSRGBBuffer), -1), !FF) throw new Error("Unable to create render buffer");
          kW._autoMSAAManagement = !0;
          let WF = kW._hardwareTexture;
          WF || (WF = kW._hardwareTexture = this._createHardwareTexture()), WF.addMSAARenderBuffer(FF)
        }
        return kW
      }
      _getUseSRGBBuffer(FF, WF) {
        return FF && this._caps.supportSRGBBuffers && (this.Im > 1 || WF)
      }
      createTexture(FF, WF, SF, CF) {
        var AF = this;
        let uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 3,
          hF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          bW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          dF = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          PF = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          RF = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          iW = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : null,
          eF = arguments.length > 11 ? arguments[11] : void 0,
          EF = arguments.length > 12 ? arguments[12] : void 0,
          QF = arguments.length > 13 ? arguments[13] : void 0,
          gW = arguments.length > 14 ? arguments[14] : void 0;
        return this._createTextureBase(FF, WF, SF, CF, uF, hF, bW, (function() {
          for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
          return AF._prepareWebGLTexture(...WF, RF)
        }), ((FF, WF, SF, AF, uF, hF) => {
          const bW = this._gl,
            dF = SF.width === FF && SF.height === WF;
          uF._creationFlags = QF ?? 0;
          const PF = this._getTexImageParametersForCreateTexture(uF.format, uF._useSRGBBuffer);
          if (dF) return bW.texImage2D(bW.TEXTURE_2D, 0, PF.internalFormat, PF.format, PF.type, SF), !1;
          const RF = this._caps.maxTextureSize;
          if (SF.width > RF || SF.height > RF || !this._supportsHardwareTextureRescaling) return this._prepareWorkingCanvas(), !(!this._workingCanvas || !this._workingContext) && (this._workingCanvas.width = FF, this._workingCanvas.height = WF, this._workingContext.drawImage(SF, 0, 0, SF.width, SF.height, 0, 0, FF, WF), bW.texImage2D(bW.TEXTURE_2D, 0, PF.internalFormat, PF.format, PF.type, this._workingCanvas), uF.width = FF, uF.height = WF, !1);
          {
            const FF = new rW.b(this, 2);
            this._bindTextureDirectly(bW.TEXTURE_2D, FF, !0), bW.texImage2D(bW.TEXTURE_2D, 0, PF.internalFormat, PF.format, PF.type, SF), this._rescaleTexture(FF, uF, CF, PF.format, (() => {
              this._releaseTexture(FF), this._bindTextureDirectly(bW.TEXTURE_2D, uF, !0), hF()
            }))
          }
          return !0
        }), dF, PF, RF, iW, eF, EF, gW)
      }
      _getTexImageParametersForCreateTexture(FF, WF) {
        let SF, CF;
        return 1 === this.Im ? (SF = this._getInternalFormat(FF, WF), CF = SF) : (SF = this._getInternalFormat(FF, !1), CF = this._getRGBABufferInternalSizedFormat(0, FF, WF)), {
          internalFormat: CF,
          format: SF,
          type: this._gl.UNSIGNED_BYTE
        }
      }
      _rescaleTexture(FF, WF, SF, CF, AF) {}
      _unpackFlipY(FF) {
        this._unpackFlipYCached !== FF && (this._gl.pixelStorei(this._gl.UNPACK_FLIP_Y_WEBGL, FF ? 1 : 0), this.enableUnpackFlipYCached && (this._unpackFlipYCached = FF))
      }
      _getUnpackAlignement() {
        return this._gl.getParameter(this._gl.UNPACK_ALIGNMENT)
      }
      _getTextureTarget(FF) {
        return FF.isCube ? this._gl.TEXTURE_CUBE_MAP : FF.is3D ? this._gl.TEXTURE_3D : FF.is2DArray || FF.isMultiview ? this._gl.TEXTURE_2D_ARRAY : this._gl.TEXTURE_2D
      }
      updateTextureSamplingMode(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const CF = this._getTextureTarget(WF),
          AF = this._getSamplingParameters(FF, WF.useMipMaps || SF);
        this._setTextureParameterInteger(CF, this._gl.TEXTURE_MAG_FILTER, AF.mag, WF), this._setTextureParameterInteger(CF, this._gl.TEXTURE_MIN_FILTER, AF.min), SF && AF.hasMipMaps && (WF.generateMipMaps = !0, this._gl.generateMipmap(CF)), this._bindTextureDirectly(CF, null), WF.samplingMode = FF
      }
      updateTextureDimensions(FF, WF, SF) {}
      updateTextureWrappingMode(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const AF = this._getTextureTarget(FF);
        null !== WF && (this._setTextureParameterInteger(AF, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(WF), FF), FF._cachedWrapU = WF), null !== SF && (this._setTextureParameterInteger(AF, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(SF), FF), FF._cachedWrapV = SF), (FF.is2DArray || FF.is3D) && null !== CF && (this._setTextureParameterInteger(AF, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(CF), FF), FF._cachedWrapR = CF), this._bindTextureDirectly(AF, null)
      }
      _uploadCompressedDataToTextureDirectly(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          hF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        const bW = this._gl;
        let dF = bW.TEXTURE_2D;
        if (FF.isCube && (dF = bW.TEXTURE_CUBE_MAP_POSITIVE_X + uF), FF._useSRGBBuffer) switch (WF) {
          case 37492:
          case 36196:
            this._caps.etc2 ? WF = bW.COMPRESSED_SRGB8_ETC2 : FF._useSRGBBuffer = !1;
            break;
          case 37496:
            this._caps.etc2 ? WF = bW.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : FF._useSRGBBuffer = !1;
            break;
          case 36492:
            WF = bW.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT;
            break;
          case 37808:
            WF = bW.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR;
            break;
          case 37809:
            WF = bW.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR;
            break;
          case 37810:
            WF = bW.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR;
            break;
          case 37811:
            WF = bW.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR;
            break;
          case 37812:
            WF = bW.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR;
            break;
          case 37813:
            WF = bW.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR;
            break;
          case 37814:
            WF = bW.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR;
            break;
          case 37815:
            WF = bW.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR;
            break;
          case 37816:
            WF = bW.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR;
            break;
          case 37817:
            WF = bW.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR;
            break;
          case 37818:
            WF = bW.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR;
            break;
          case 37819:
            WF = bW.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR;
            break;
          case 37820:
            WF = bW.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR;
            break;
          case 37821:
            WF = bW.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR;
            break;
          case 33776:
            this._caps.s3tc_srgb ? WF = bW.COMPRESSED_SRGB_S3TC_DXT1_EXT : FF._useSRGBBuffer = !1;
            break;
          case 33777:
            this._caps.s3tc_srgb ? WF = bW.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT : FF._useSRGBBuffer = !1;
            break;
          case 33779:
            this._caps.s3tc_srgb ? WF = bW.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT : FF._useSRGBBuffer = !1;
            break;
          default:
            FF._useSRGBBuffer = !1
        }
        if (FF.generateMipMaps) {
          const uF = FF._hardwareTexture;
          uF.memoryAllocated || (bW.texStorage2D(FF.isCube ? bW.TEXTURE_CUBE_MAP : bW.TEXTURE_2D, Math.floor(Math.log2(Math.max(SF, CF))) + 1, WF, FF.width, FF.height), uF.memoryAllocated = !0), this._gl.compressedTexSubImage2D(dF, hF, 0, 0, SF, CF, WF, AF)
        } else this._gl.compressedTexImage2D(dF, hF, WF, SF, CF, 0, AF)
      }
      _uploadDataToTextureDirectly(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          AF = arguments.length > 4 ? arguments[4] : void 0,
          uF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const hF = this._gl,
          bW = this._getWebGLTextureType(FF.type),
          dF = this._getInternalFormat(FF.format),
          PF = void 0 === AF ? this._getRGBABufferInternalSizedFormat(FF.type, FF.format, FF._useSRGBBuffer) : this._getInternalFormat(AF, FF._useSRGBBuffer);
        this._unpackFlipY(FF.invertY);
        let RF = hF.TEXTURE_2D;
        FF.isCube && (RF = hF.TEXTURE_CUBE_MAP_POSITIVE_X + SF);
        const iW = Math.round(Math.log(FF.width) * Math.LOG2E),
          eF = Math.round(Math.log(FF.height) * Math.LOG2E),
          EF = uF ? FF.width : Math.pow(2, Math.max(iW - CF, 0)),
          QF = uF ? FF.height : Math.pow(2, Math.max(eF - CF, 0));
        hF.texImage2D(RF, CF, PF, EF, QF, 0, dF, bW, WF)
      }
      updateTextureData(FF, WF, SF, CF, AF, uF) {
        let hF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          bW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          dF = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const PF = this._gl,
          RF = this._getWebGLTextureType(FF.type),
          iW = this._getInternalFormat(FF.format);
        this._unpackFlipY(FF.invertY);
        let eF = PF.TEXTURE_2D,
          EF = PF.TEXTURE_2D;
        FF.isCube && (EF = PF.TEXTURE_CUBE_MAP_POSITIVE_X + hF, eF = PF.TEXTURE_CUBE_MAP), this._bindTextureDirectly(eF, FF, !0), PF.texSubImage2D(EF, bW, SF, CF, AF, uF, iW, RF, WF), dF && this._gl.generateMipmap(EF), this._bindTextureDirectly(eF, null)
      }
      _uploadArrayBufferViewToTexture(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const AF = this._gl,
          uF = FF.isCube ? AF.TEXTURE_CUBE_MAP : AF.TEXTURE_2D;
        this._bindTextureDirectly(uF, FF, !0), this._uploadDataToTextureDirectly(FF, WF, SF, CF), this._bindTextureDirectly(uF, null, !0)
      }
      _prepareWebGLTextureContinuation(FF, WF, SF, CF, AF) {
        const uF = this._gl;
        if (!uF) return;
        const hF = this._getSamplingParameters(AF, !SF);
        uF.texParameteri(uF.TEXTURE_2D, uF.TEXTURE_MAG_FILTER, hF.mag), uF.texParameteri(uF.TEXTURE_2D, uF.TEXTURE_MIN_FILTER, hF.min), SF || CF || uF.generateMipmap(uF.TEXTURE_2D), this._bindTextureDirectly(uF.TEXTURE_2D, null), WF && WF.removePendingData(FF), FF.onLoadedObservable.notifyObservers(FF), FF.onLoadedObservable.clear()
      }
      _prepareWebGLTexture(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF) {
        const RF = this.getCaps().maxTextureSize,
          iW = Math.min(RF, this.needPOTTextures ? (0, EF.e)(CF.width, RF) : CF.width),
          eF = Math.min(RF, this.needPOTTextures ? (0, EF.e)(CF.height, RF) : CF.height),
          QF = this._gl;
        QF && (FF._hardwareTexture ? (this._bindTextureDirectly(QF.TEXTURE_2D, FF, !0), this._unpackFlipY(void 0 === AF || !!AF), FF.baseWidth = CF.width, FF.baseHeight = CF.height, FF.width = iW, FF.height = eF, FF.isReady = !0, FF.type = -1 !== FF.type ? FF.type : 0, FF.format = -1 !== FF.format ? FF.format : PF ?? (".jpg" !== WF || FF._useSRGBBuffer ? 5 : 4), bW(iW, eF, CF, WF, FF, (() => {
          this._prepareWebGLTextureContinuation(FF, SF, uF, hF, dF)
        })) || this._prepareWebGLTextureContinuation(FF, SF, uF, hF, dF)) : SF && SF.removePendingData(FF))
      }
      _getInternalFormatFromDepthTextureFormat(FF, WF, SF) {
        const CF = this._gl;
        if (!WF) return CF.STENCIL_INDEX8;
        let AF = SF ? CF.DEPTH_STENCIL : CF.DEPTH_COMPONENT;
        return this.Im > 1 ? 15 === FF ? AF = CF.DEPTH_COMPONENT16 : 16 === FF ? AF = CF.DEPTH_COMPONENT24 : 17 === FF || 13 === FF ? AF = SF ? CF.DEPTH24_STENCIL8 : CF.DEPTH_COMPONENT24 : 14 === FF ? AF = CF.DEPTH_COMPONENT32F : 18 === FF && (AF = SF ? CF.DEPTH32F_STENCIL8 : CF.DEPTH_COMPONENT32F) : AF = CF.DEPTH_COMPONENT16, AF
      }
      _getWebGLTextureTypeFromDepthTextureFormat(FF) {
        const WF = this._gl;
        let SF = WF.UNSIGNED_INT;
        return 15 === FF ? SF = WF.UNSIGNED_SHORT : 17 === FF || 13 === FF ? SF = WF.UNSIGNED_INT_24_8 : 14 === FF ? SF = WF.FLOAT : 18 === FF ? SF = WF.FLOAT_32_UNSIGNED_INT_24_8_REV : 19 === FF && (SF = WF.UNSIGNED_BYTE), SF
      }
      _setupFramebufferDepthAttachments(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
          uF = arguments.length > 5 ? arguments[5] : void 0,
          hF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const bW = this._gl;
        uF = uF ?? (FF ? 13 : 14);
        const dF = this._getInternalFormatFromDepthTextureFormat(uF, WF, FF);
        return FF && WF ? this._createRenderBuffer(SF, CF, AF, bW.DEPTH_STENCIL, dF, hF ? -1 : bW.DEPTH_STENCIL_ATTACHMENT) : WF ? this._createRenderBuffer(SF, CF, AF, dF, dF, hF ? -1 : bW.DEPTH_ATTACHMENT) : FF ? this._createRenderBuffer(SF, CF, AF, dF, dF, hF ? -1 : bW.STENCIL_ATTACHMENT) : null
      }
      _createRenderBuffer(FF, WF, SF, CF, AF, uF) {
        let hF = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
        const bW = this._gl.createRenderbuffer();
        return this._updateRenderBuffer(bW, FF, WF, SF, CF, AF, uF, hF)
      }
      _updateRenderBuffer(FF, WF, SF, CF, AF, uF, hF) {
        let bW = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
        const dF = this._gl;
        return dF.bindRenderbuffer(dF.RENDERBUFFER, FF), CF > 1 && dF.renderbufferStorageMultisample ? dF.renderbufferStorageMultisample(dF.RENDERBUFFER, CF, uF, WF, SF) : dF.renderbufferStorage(dF.RENDERBUFFER, AF, WF, SF), -1 !== hF && dF.framebufferRenderbuffer(dF.FRAMEBUFFER, hF, dF.RENDERBUFFER, FF), bW && dF.bindRenderbuffer(dF.RENDERBUFFER, null), FF
      }
      _releaseTexture(FF) {
        this._deleteTexture(FF._hardwareTexture), this.unbindAllTextures();
        const WF = this._internalTexturesCache.indexOf(FF); - 1 !== WF && this._internalTexturesCache.splice(WF, 1), FF._lodTextureHigh && FF._lodTextureHigh.dispose(), FF._lodTextureMid && FF._lodTextureMid.dispose(), FF._lodTextureLow && FF._lodTextureLow.dispose(), FF._irradianceTexture && FF._irradianceTexture.dispose()
      }
      _deleteTexture(FF) {
        FF?.release()
      }
      _setProgram(FF) {
        this._currentProgram !== FF && ((0, AF.p)(FF, this._gl), this._currentProgram = FF)
      }
      bindSamplers(FF) {
        const WF = FF.getPipelineContext();
        this._setProgram(WF.program);
        const SF = FF.getSamplers();
        for (let CF = 0; CF < SF.length; CF++) {
          const WF = FF.getUniform(SF[CF]);
          WF && (this._boundUniforms[CF] = WF)
        }
        this._currentEffect = null
      }
      _activateCurrentTexture() {
        this._currentTextureChannel !== this._activeChannel && (this._gl.activeTexture(this._gl.TEXTURE0 + this._activeChannel), this._currentTextureChannel = this._activeChannel)
      }
      _bindTextureDirectly(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          AF = !1;
        const uF = WF && WF._associatedChannel > -1;
        SF && uF && (this._activeChannel = WF._associatedChannel);
        if (this._boundTexturesCache[this._activeChannel] !== WF || CF) {
          if (this._activateCurrentTexture(), WF && WF.isMultiview) throw bW.b.Error(["_bindTextureDirectly called with a multiview texture!", FF, WF]), "_bindTextureDirectly called with a multiview texture!";
          this._gl.bindTexture(FF, WF?._hardwareTexture?.underlyingResource ?? null), this._boundTexturesCache[this._activeChannel] = WF, WF && (WF._associatedChannel = this._activeChannel)
        } else SF && (AF = !0, this._activateCurrentTexture());
        return uF && !SF && this._bindSamplerUniformToChannel(WF._associatedChannel, this._activeChannel), AF
      }
      _bindTexture(FF, WF, SF) {
        if (void 0 === FF) return;
        WF && (WF._associatedChannel = FF), this._activeChannel = FF;
        const CF = WF ? this._getTextureTarget(WF) : this._gl.TEXTURE_2D;
        this._bindTextureDirectly(CF, WF)
      }
      unbindAllTextures() {
        for (let FF = 0; FF < this._maxSimultaneousTextures; FF++) this._activeChannel = FF, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Im > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))
      }
      setTexture(FF, WF, SF, CF) {
        void 0 !== FF && (WF && (this._boundUniforms[FF] = WF), this._setTexture(FF, SF))
      }
      _bindSamplerUniformToChannel(FF, WF) {
        const SF = this._boundUniforms[FF];
        SF && SF._currentState !== WF && (this._gl.uniform1i(SF, WF), SF._currentState = WF)
      }
      _getTextureWrapMode(FF) {
        switch (FF) {
          case 1:
            return this._gl.REPEAT;
          case 0:
            return this._gl.CLAMP_TO_EDGE;
          case 2:
            return this._gl.MIRRORED_REPEAT
        }
        return this._gl.REPEAT
      }
      _setTexture(FF, WF) {
        let SF, CF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!WF) return null != this._boundTexturesCache[FF] && (this._activeChannel = FF, this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), this.Im > 1 && (this._bindTextureDirectly(this._gl.TEXTURE_3D, null), this._bindTextureDirectly(this._gl.TEXTURE_2D_ARRAY, null))), !1;
        if (WF.video) {
          this._activeChannel = FF;
          const SF = WF.getInternalTexture();
          SF && (SF._associatedChannel = FF), WF.update()
        } else if (4 === WF.delayLoadState) return WF.delayLoad(), !1;
        SF = AF ? WF.depthStencilTexture : WF.isReady() ? WF.getInternalTexture() : WF.isCube ? this.emptyCubeTexture : WF.is3D ? this.emptyTexture3D : WF.is2DArray ? this.emptyTexture2DArray : this.emptyTexture, !CF && SF && (SF._associatedChannel = FF);
        let uF = !0;
        this._boundTexturesCache[FF] === SF && (CF || this._bindSamplerUniformToChannel(SF._associatedChannel, FF), uF = !1), this._activeChannel = FF;
        const hF = this._getTextureTarget(SF);
        if (uF && this._bindTextureDirectly(hF, SF, CF), SF && !SF.isMultiview) {
          if (SF.isCube && SF._cachedCoordinatesMode !== WF.coordinatesMode) {
            SF._cachedCoordinatesMode = WF.coordinatesMode;
            const FF = 3 !== WF.coordinatesMode && 5 !== WF.coordinatesMode ? 1 : 0;
            WF.wrapU = FF, WF.wrapV = FF
          }
          SF._cachedWrapU !== WF.wrapU && (SF._cachedWrapU = WF.wrapU, this._setTextureParameterInteger(hF, this._gl.TEXTURE_WRAP_S, this._getTextureWrapMode(WF.wrapU), SF)), SF._cachedWrapV !== WF.wrapV && (SF._cachedWrapV = WF.wrapV, this._setTextureParameterInteger(hF, this._gl.TEXTURE_WRAP_T, this._getTextureWrapMode(WF.wrapV), SF)), SF.is3D && SF._cachedWrapR !== WF.wrapR && (SF._cachedWrapR = WF.wrapR, this._setTextureParameterInteger(hF, this._gl.TEXTURE_WRAP_R, this._getTextureWrapMode(WF.wrapR), SF)), this._setAnisotropicLevel(hF, SF, WF.anisotropicFilteringLevel)
        }
        return !0
      }
      setTextureArray(FF, WF, SF, CF) {
        if (void 0 !== FF && WF) {
          this._textureUnits && this._textureUnits.length === SF.length || (this._textureUnits = new Int32Array(SF.length));
          for (let WF = 0; WF < SF.length; WF++) {
            const CF = SF[WF].getInternalTexture();
            CF ? (this._textureUnits[WF] = FF + WF, CF._associatedChannel = FF + WF) : this._textureUnits[WF] = -1
          }
          this._gl.uniform1iv(WF, this._textureUnits);
          for (let FF = 0; FF < SF.length; FF++) this._setTexture(this._textureUnits[FF], SF[FF], !0)
        }
      }
      _setAnisotropicLevel(FF, WF, SF) {
        const CF = this._caps.textureAnisotropicFilterExtension;
        11 !== WF.samplingMode && 3 !== WF.samplingMode && 2 !== WF.samplingMode && (SF = 1), CF && WF._cachedAnisotropicFilteringLevel !== SF && (this._setTextureParameterFloat(FF, CF.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(SF, this._caps.maxAnisotropy), WF), WF._cachedAnisotropicFilteringLevel = SF)
      }
      _setTextureParameterFloat(FF, WF, SF, CF) {
        this._bindTextureDirectly(FF, CF, !0, !0), this._gl.texParameterf(FF, WF, SF)
      }
      _setTextureParameterInteger(FF, WF, SF, CF) {
        CF && this._bindTextureDirectly(FF, CF, !0, !0), this._gl.texParameteri(FF, WF, SF)
      }
      unbindAllAttributes() {
        if (this._mustWipeVertexAttributes) {
          this._mustWipeVertexAttributes = !1;
          for (let FF = 0; FF < this._caps.maxVertexAttribs; FF++) this.disableAttributeByIndex(FF)
        } else
          for (let FF = 0, WF = this._vertexAttribArraysEnabled.length; FF < WF; FF++) FF >= this._caps.maxVertexAttribs || !this._vertexAttribArraysEnabled[FF] || this.disableAttributeByIndex(FF)
      }
      releaseEffects() {
        this._compiledEffects = {}, this.onReleaseEffectsObservable.notifyObservers(this)
      }
      dispose() {
        (0, dF.m)() && this._renderingCanvas && (this._renderingCanvas.removeEventListener("webglcontextlost", this._onContextLost), this._onContextRestored && this._renderingCanvas.removeEventListener("webglcontextrestored", this._onContextRestored)), super.dispose(), this._dummyFramebuffer && this._gl.deleteFramebuffer(this._dummyFramebuffer), this.unbindAllAttributes(), this._boundUniforms = {}, this._workingCanvas = null, this._workingContext = null, this._currentBufferPointers.length = 0, this._currentProgram = null, this._creationOptions.loseContextOnDispose && this._gl.getExtension("WEBGL_lose_context")?.loseContext(), (0, AF.x)(this._gl)
      }
      attachContextLostEvent(FF) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextlost", FF, !1)
      }
      attachContextRestoredEvent(FF) {
        this._renderingCanvas && this._renderingCanvas.addEventListener("webglcontextrestored", FF, !1)
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
      _canRenderToFramebuffer(FF) {
        const WF = this._gl;
        for (; WF.getError() !== WF.NO_ERROR;);
        let SF = !0;
        const CF = WF.createTexture();
        WF.bindTexture(WF.TEXTURE_2D, CF), WF.texImage2D(WF.TEXTURE_2D, 0, this._getRGBABufferInternalSizedFormat(FF), 1, 1, 0, WF.RGBA, this._getWebGLTextureType(FF), null), WF.texParameteri(WF.TEXTURE_2D, WF.TEXTURE_MIN_FILTER, WF.NEAREST), WF.texParameteri(WF.TEXTURE_2D, WF.TEXTURE_MAG_FILTER, WF.NEAREST);
        const AF = WF.createFramebuffer();
        WF.bindFramebuffer(WF.FRAMEBUFFER, AF), WF.framebufferTexture2D(WF.FRAMEBUFFER, WF.COLOR_ATTACHMENT0, WF.TEXTURE_2D, CF, 0);
        const uF = WF.checkFramebufferStatus(WF.FRAMEBUFFER);
        if (SF = SF && uF === WF.FRAMEBUFFER_COMPLETE, SF = SF && WF.getError() === WF.NO_ERROR, SF && (WF.clear(WF.COLOR_BUFFER_BIT), SF = SF && WF.getError() === WF.NO_ERROR), SF) {
          WF.bindFramebuffer(WF.FRAMEBUFFER, null);
          const FF = WF.RGBA,
            CF = WF.UNSIGNED_BYTE,
            AF = new Uint8Array(4);
          WF.readPixels(0, 0, 1, 1, FF, CF, AF), SF = SF && WF.getError() === WF.NO_ERROR
        }
        for (WF.deleteTexture(CF), WF.deleteFramebuffer(AF), WF.bindFramebuffer(WF.FRAMEBUFFER, null); !SF && WF.getError() !== WF.NO_ERROR;);
        return SF
      }
      _getWebGLTextureType(FF) {
        if (1 === this._webGLVersion) {
          switch (FF) {
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
        switch (FF) {
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
      _getInternalFormat(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = WF ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA;
        switch (FF) {
          case 0:
            SF = this._gl.ALPHA;
            break;
          case 1:
            SF = this._gl.LUMINANCE;
            break;
          case 2:
            SF = this._gl.LUMINANCE_ALPHA;
            break;
          case 6:
          case 33322:
          case 36760:
            SF = this._gl.RED;
            break;
          case 7:
          case 33324:
          case 36761:
            SF = this._gl.RG;
            break;
          case 4:
          case 32852:
          case 36762:
            SF = WF ? this._glSRGBExtensionValues.SRGB : this._gl.RGB;
            break;
          case 5:
          case 32859:
          case 36763:
            SF = WF ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA
        }
        if (this._webGLVersion > 1) switch (FF) {
          case 8:
            SF = this._gl.RED_INTEGER;
            break;
          case 9:
            SF = this._gl.RG_INTEGER;
            break;
          case 10:
            SF = this._gl.RGB_INTEGER;
            break;
          case 11:
            SF = this._gl.RGBA_INTEGER
        }
        return SF
      }
      _getRGBABufferInternalSizedFormat(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (1 === this._webGLVersion) {
          if (void 0 !== WF) switch (WF) {
            case 0:
              return this._gl.ALPHA;
            case 1:
              return this._gl.LUMINANCE;
            case 2:
              return this._gl.LUMINANCE_ALPHA;
            case 4:
              return SF ? this._glSRGBExtensionValues.SRGB : this._gl.RGB
          }
          return this._gl.RGBA
        }
        switch (FF) {
          case 3:
            switch (WF) {
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
            switch (WF) {
              case 6:
                return this._gl.R8;
              case 7:
                return this._gl.RG8;
              case 4:
                return SF ? this._glSRGBExtensionValues.SRGB8 : this._gl.RGB8;
              case 5:
                return SF ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8;
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
            switch (WF) {
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
            switch (WF) {
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
            switch (WF) {
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
            switch (WF) {
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
            switch (WF) {
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
            switch (WF) {
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
            switch (WF) {
              case 5:
              default:
                return this._gl.RGB10_A2;
              case 11:
                return this._gl.RGB10_A2UI
            }
        }
        return SF ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : this._gl.RGBA8
      }
      readPixels(FF, WF, SF, CF) {
        let AF = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          uF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          hF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
        const dF = AF ? 4 : 3,
          PF = AF ? this._gl.RGBA : this._gl.RGB,
          RF = SF * CF * dF;
        if (hF) {
          if (hF.length < RF) return bW.b.Error(`Data buffer is too small to store the read pixels (${hF.length} should be more than ${RF})`), Promise.resolve(hF)
        } else hF = new Uint8Array(RF);
        return uF && this.flushFramebuffer(), this._gl.readPixels(FF, WF, SF, CF, PF, this._gl.UNSIGNED_BYTE, hF), Promise.resolve(hF)
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
          const FF = uF.e._CreateCanvas(1, 1),
            WF = FF.getContext("webgl") || FF.getContext("experimental-webgl");
          this._IsSupported = null != WF && !!globalThis.WebGLRenderingContext
        } catch (FF) {
          this._IsSupported = !1
        }
        return this._IsSupported
      }
      static get HasMajorPerformanceCaveat() {
        if (null === this._HasMajorPerformanceCaveat) try {
          const FF = uF.e._CreateCanvas(1, 1),
            WF = FF.getContext("webgl", {
              failIfMajorPerformanceCaveat: !0
            }) || FF.getContext("experimental-webgl", {
              failIfMajorPerformanceCaveat: !0
            });
          this._HasMajorPerformanceCaveat = !WF
        } catch (FF) {
          this._HasMajorPerformanceCaveat = !1
        }
        return this._HasMajorPerformanceCaveat
      }
    }
    qW._TempClearColorUint32 = new Uint32Array(4), qW._TempClearColorInt32 = new Int32Array(4), qW._TempClearColorFloat32 = new Float32Array(4), qW.ExceptionList = [{
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
    }], qW._ConcatenateShader = gW.f, qW._IsSupported = null, qW._HasMajorPerformanceCaveat = null
  },
  38152: (FF, WF, SF) => {
    var CF;
    SF.d(WF, {
        c: () => AF
      }),
      function(FF) {
        FF[FF.PointerMove = 0] = "PointerMove", FF[FF.PointerDown = 1] = "PointerDown", FF[FF.PointerUp = 2] = "PointerUp"
      }(CF || (CF = {}));
    class AF {}
    AF.DOM_DELTA_PIXEL = 0, AF.DOM_DELTA_LINE = 1, AF.DOM_DELTA_PAGE = 2
  },
  38147: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF,
      h: () => uF,
      k: () => AF
    });
    class CF {}
    CF.KEYDOWN = 1, CF.KEYUP = 2;
    class AF {
      constructor(FF, WF) {
        this.type = FF, this.event = WF
      }
    }
    class uF extends AF {
      get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable
      }
      set skipOnPointerObservable(FF) {
        this.skipOnKeyboardObservable = FF
      }
      constructor(FF, WF) {
        super(FF, WF), this.type = FF, this.event = WF, this.skipOnKeyboardObservable = !1
      }
    }
  },
  38145: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => AF,
      e: () => hF,
      f: () => bW
    });
    var CF = SF(35623);
    class AF {}
    AF.POINTERDOWN = 1, AF.POINTERUP = 2, AF.POINTERMOVE = 4, AF.POINTERWHEEL = 8, AF.POINTERPICK = 16, AF.POINTERTAP = 32, AF.POINTERDOUBLETAP = 64;
    class uF {
      constructor(FF, WF) {
        this.type = FF, this.event = WF
      }
    }
    class hF extends uF {
      constructor(FF, WF, SF, AF) {
        super(FF, WF), this.ray = null, this.originalPickingInfo = null, this.skipOnPointerObservable = !1, this.localPosition = new CF.n(SF, AF)
      }
    }
    class bW extends uF {
      get pickInfo() {
        return this._pickInfo || this._generatePickInfo(), this._pickInfo
      }
      constructor(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        super(FF, WF), this._pickInfo = SF, this._inputManager = CF
      }
      _generatePickInfo() {
        this._inputManager && (this._pickInfo = this._inputManager._pickMove(this.event), this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event), this._inputManager = null)
      }
    }
  },
  38166: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF
    });
    class CF {
      static CompareLightsPriority(FF, WF) {
        return FF.shadowEnabled !== WF.shadowEnabled ? (WF.shadowEnabled ? 1 : 0) - (FF.shadowEnabled ? 1 : 0) : WF.renderPriority - FF.renderPriority
      }
    }
    CF.FALLOFF_DEFAULT = 0, CF.FALLOFF_PHYSICAL = 1, CF.FALLOFF_GLTF = 2, CF.FALLOFF_STANDARD = 3, CF.LIGHTMAP_DEFAULT = 0, CF.LIGHTMAP_SPECULAR = 1, CF.LIGHTMAP_SHADOWSONLY = 2, CF.INTENSITYMODE_AUTOMATIC = 0, CF.INTENSITYMODE_LUMINOUSPOWER = 1, CF.INTENSITYMODE_LUMINOUSINTENSITY = 2, CF.INTENSITYMODE_ILLUMINANCE = 3, CF.INTENSITYMODE_LUMINANCE = 4, CF.LIGHTTYPEID_POINTLIGHT = 0, CF.LIGHTTYPEID_DIRECTIONALLIGHT = 1, CF.LIGHTTYPEID_SPOTLIGHT = 2, CF.LIGHTTYPEID_HEMISPHERICLIGHT = 3, CF.LIGHTTYPEID_RECT_AREALIGHT = 4, CF.LIGHTTYPEID_CLUSTERED_CONTAINER = 5
  },
  37796: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF
    });
    var CF, AF = SF(35647),
      uF = SF(37800);
    ! function(FF) {
      FF[FF.Unknown = 0] = "Unknown", FF[FF.Url = 1] = "Url", FF[FF.Temp = 2] = "Temp", FF[FF.Raw = 3] = "Raw", FF[FF.Dynamic = 4] = "Dynamic", FF[FF.RenderTarget = 5] = "RenderTarget", FF[FF.MultiRenderTarget = 6] = "MultiRenderTarget", FF[FF.Cube = 7] = "Cube", FF[FF.CubeRaw = 8] = "CubeRaw", FF[FF.CubePrefiltered = 9] = "CubePrefiltered", FF[FF.Raw3D = 10] = "Raw3D", FF[FF.Raw2DArray = 11] = "Raw2DArray", FF[FF.DepthStencil = 12] = "DepthStencil", FF[FF.CubeRawRGBD = 13] = "CubeRawRGBD", FF[FF.Depth = 14] = "Depth", FF[FF.External = 15] = "External"
    }(CF || (CF = {}));
    class hF extends uF.b {
      get useMipMaps() {
        return null === this._useMipMaps ? this.generateMipMaps : this._useMipMaps
      }
      set useMipMaps(FF) {
        this._useMipMaps = FF
      }
      get uniqueId() {
        return this._uniqueId
      }
      _setUniqueId(FF) {
        this._uniqueId = FF
      }
      sC() {
        return this._engine
      }
      get source() {
        return this._source
      }
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        super(), this.isReady = !1, this.isCube = !1, this.is3D = !1, this.is2DArray = !1, this.isMultiview = !1, this.url = "", this.generateMipMaps = !1, this._useMipMaps = null, this.mipLevelCount = 1, this.samples = 0, this.type = -1, this.format = -1, this.onLoadedObservable = new AF.b, this.onErrorObservable = new AF.b, this.onRebuildCallback = null, this.width = 0, this.height = 0, this.depth = 0, this.baseWidth = 0, this.baseHeight = 0, this.baseDepth = 0, this.invertY = !1, this._invertVScale = !1, this._associatedChannel = -1, this._source = 0, this._buffer = null, this._bufferView = null, this._bufferViewArray = null, this._bufferViewArrayArray = null, this._size = 0, this._extension = "", this._files = null, this._workingCanvas = null, this._workingContext = null, this._cachedCoordinatesMode = null, this._isDisabled = !1, this._compression = null, this._sphericalPolynomial = null, this._sphericalPolynomialPromise = null, this._sphericalPolynomialComputed = !1, this._lodGenerationScale = 0, this._lodGenerationOffset = 0, this._useSRGBBuffer = !1, this._creationFlags = 0, this._lodTextureHigh = null, this._lodTextureMid = null, this._lodTextureLow = null, this._isRGBD = !1, this._linearSpecularLOD = !1, this._irradianceTexture = null, this._hardwareTexture = null, this._maxLodLevel = null, this._references = 1, this._gammaSpace = null, this._premulAlpha = !1, this._dynamicTextureSource = null, this._autoMSAAManagement = !1, this._engine = FF, this._source = WF, this._uniqueId = hF._Counter++, SF || (this._hardwareTexture = FF._createHardwareTexture())
      }
      incrementReferences() {
        this._references++
      }
      updateSize(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        this._engine.updateTextureDimensions(this, FF, WF, SF), this.width = FF, this.height = WF, this.depth = SF, this.baseWidth = FF, this.baseHeight = WF, this.baseDepth = SF, this._size = FF * WF * SF
      }
      _rebuild() {
        if (this.isReady = !1, this._cachedCoordinatesMode = null, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this.onRebuildCallback) {
          const FF = this.onRebuildCallback(this),
            WF = WF => {
              WF._swapAndDie(this, !1), this.isReady = FF.isReady
            };
          return void(FF.isAsync ? FF.proxy.then(WF) : WF(FF.proxy))
        }
        let FF;
        switch (this.source) {
          case 2:
          case 12:
          case 14:
          case 15:
            break;
          case 1:
            return void(FF = this._engine.createTexture(this._originalUrl ?? this.url, !this.generateMipMaps, this.invertY, null, this.samplingMode, (FF => {
              FF._swapAndDie(this, !1), this.isReady = !0
            }), null, this._buffer, void 0, this.format, this._extension, void 0, void 0, void 0, this._useSRGBBuffer));
          case 3:
            if (FF = this._engine.createRawTexture(this._bufferView, this.baseWidth, this.baseHeight, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this._useSRGBBuffer, this.mipLevelCount), FF._swapAndDie(this, !1), this._bufferViewArray)
              for (let FF = 0; FF < this._bufferViewArray.length; FF++) {
                const WF = this._bufferViewArray[FF];
                WF && this._engine.updateRawTexture(this, WF, this.format, this.invertY, this._compression, this.type, this._useSRGBBuffer, FF)
              }
            this.isReady = !0;
            break;
          case 10:
            FF = this._engine.createRawTexture3D(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type), FF._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 11:
            if (FF = this._engine.createRawTexture2DArray(this._bufferView, this.baseWidth, this.baseHeight, this.baseDepth, this.format, this.generateMipMaps, this.invertY, this.samplingMode, this._compression, this.type, this._creationFlags, this.mipLevelCount), FF._swapAndDie(this, !1), this._bufferViewArray)
              for (let FF = 0; FF < this._bufferViewArray.length; FF++) {
                const WF = this._bufferViewArray[FF];
                WF && this._engine.updateRawTexture2DArray(this, WF, this.format, this.invertY, this._compression, this.type, FF)
              }
            this.isReady = !0;
            break;
          case 4:
            FF = this._engine.createDynamicTexture(this.baseWidth, this.baseHeight, this.generateMipMaps, this.samplingMode), FF._swapAndDie(this, !1), this._dynamicTextureSource && this._engine.updateDynamicTexture(this, this._dynamicTextureSource, this.invertY, this._premulAlpha, this.format, !0);
            break;
          case 7:
            return void(FF = this._engine.createCubeTexture(this.url, null, this._files, !this.generateMipMaps, (() => {
              FF._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, !1, 0, 0, null, void 0, this._useSRGBBuffer, ArrayBuffer.isView(this._buffer) ? this._buffer : null));
          case 8:
            FF = this._engine.createRawCubeTexture(this._bufferViewArray, this.width, this._originalFormat ?? this.format, this.type, this.generateMipMaps, this.invertY, this.samplingMode, this._compression), FF._swapAndDie(this, !1), this.isReady = !0;
            break;
          case 13:
            return;
          case 9:
            return FF = this._engine.createPrefilteredCubeTexture(this.url, null, this._lodGenerationScale, this._lodGenerationOffset, (FF => {
              FF && FF._swapAndDie(this, !1), this.isReady = !0
            }), null, this.format, this._extension, void 0, ArrayBuffer.isView(this._buffer) ? this._buffer : null), void(FF._sphericalPolynomial = this._sphericalPolynomial)
        }
      }
      _swapAndDie(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._hardwareTexture?.setUsage(FF._source, this.generateMipMaps, this.is2DArray, this.isCube, this.is3D, this.width, this.height, this.depth), FF._hardwareTexture = this._hardwareTexture, FF._setUniqueId(hF._Counter++), WF && (FF._isRGBD = this._isRGBD), this._lodTextureHigh && (FF._lodTextureHigh && FF._lodTextureHigh.dispose(), FF._lodTextureHigh = this._lodTextureHigh), this._lodTextureMid && (FF._lodTextureMid && FF._lodTextureMid.dispose(), FF._lodTextureMid = this._lodTextureMid), this._lodTextureLow && (FF._lodTextureLow && FF._lodTextureLow.dispose(), FF._lodTextureLow = this._lodTextureLow), this._irradianceTexture && (FF._irradianceTexture && FF._irradianceTexture.dispose(), FF._irradianceTexture = this._irradianceTexture);
        const SF = this._engine.getLoadedTexturesCache();
        let CF = SF.indexOf(this); - 1 !== CF && SF.splice(CF, 1), CF = SF.indexOf(FF), -1 === CF && SF.push(FF)
      }
      dispose() {
        this._references--, 0 === this._references && (this.onLoadedObservable.clear(), this.onErrorObservable.clear(), this._engine._releaseTexture(this), this._hardwareTexture = null, this._dynamicTextureSource = null)
      }
    }
    hF._Counter = 0
  },
  37908: (FF, WF, SF) => {
    function CF(FF) {
      return 13 === FF || 14 === FF || 15 === FF || 16 === FF || 17 === FF || 18 === FF || 19 === FF
    }

    function AF(FF) {
      return 8 === FF || 9 === FF || 10 === FF || 11 === FF
    }

    function uF(FF) {
      return 0 === FF || 5 === FF || 7 === FF || 11 === FF
    }

    function hF(FF) {
      return 13 === FF || 17 === FF || 18 === FF || 19 === FF
    }
    SF.d(WF, {
      b: () => hF,
      e: () => CF,
      i: () => AF,
      j: () => uF
    })
  },
  37800: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF
    });
    class CF {
      get wrapU() {
        return this._cachedWrapU
      }
      set wrapU(FF) {
        this._cachedWrapU = FF
      }
      get wrapV() {
        return this._cachedWrapV
      }
      set wrapV(FF) {
        this._cachedWrapV = FF
      }
      get wrapR() {
        return this._cachedWrapR
      }
      set wrapR(FF) {
        this._cachedWrapR = FF
      }
      get anisotropicFilteringLevel() {
        return this._cachedAnisotropicFilteringLevel
      }
      set anisotropicFilteringLevel(FF) {
        this._cachedAnisotropicFilteringLevel = FF
      }
      get comparisonFunction() {
        return this._comparisonFunction
      }
      set comparisonFunction(FF) {
        this._comparisonFunction = FF
      }
      get useMipMaps() {
        return this._useMipMaps
      }
      set useMipMaps(FF) {
        this._useMipMaps = FF
      }
      constructor() {
        this.samplingMode = -1, this._useMipMaps = !0, this._cachedWrapU = null, this._cachedWrapV = null, this._cachedWrapR = null, this._cachedAnisotropicFilteringLevel = null, this._comparisonFunction = 0
      }
      setParameters() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 2,
          uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        return this._cachedWrapU = FF, this._cachedWrapV = WF, this._cachedWrapR = SF, this._cachedAnisotropicFilteringLevel = CF, this.samplingMode = AF, this._comparisonFunction = uF, this
      }
      compareSampler(FF) {
        return this._cachedWrapU === FF._cachedWrapU && this._cachedWrapV === FF._cachedWrapV && this._cachedWrapR === FF._cachedWrapR && this._cachedAnisotropicFilteringLevel === FF._cachedAnisotropicFilteringLevel && this.samplingMode === FF.samplingMode && this._comparisonFunction === FF._comparisonFunction && this._useMipMaps === FF._useMipMaps
      }
    }
  },
  38093: (FF, WF, SF) => {
    function CF(FF) {
      FF.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative")
    }
    SF.d(WF, {
      d: () => CF
    })
  },
  37886: (FF, WF, SF) => {
    function CF(FF) {
      return void 0 === FF.getPipelineContext
    }
    SF.d(WF, {
      e: () => CF
    })
  },
  38301: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF
    });
    var CF = SF(37860);
    class AF {
      static GetEffect(FF) {
        return void 0 === FF.getPipelineContext ? FF.effect : FF
      }
      constructor(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._wasPreviouslyReady = !1, this._forceRebindOnNextCall = !0, this._wasPreviouslyUsingInstances = null, this.effect = null, this.defines = null, this.drawContext = FF.createDrawContext(), WF && (this.materialContext = FF.createMaterialContext())
      }
      setEffect(FF, WF) {
        let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        SF || this.effect === FF || this.drawContext?._releaseUniformBufferSlots?.(), this.effect = FF, void 0 !== WF && (this.defines = WF), SF && this.drawContext?.reset()
      }
      dispose() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.effect) {
          const WF = this.effect;
          FF ? WF.dispose() : CF.c.SetImmediate((() => {
            WF.sC().onEndFrameObservable.addOnce((() => {
              WF.dispose()
            }))
          })), this.effect = null
        }
        this.drawContext?.dispose()
      }
    }
  },
  37826: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => iW,
      g: () => EF,
      h: () => PF,
      j: () => RF
    });
    var CF = SF(37835),
      AF = SF(37843),
      uF = SF(37824),
      hF = SF(37076),
      bW = SF(37858),
      dF = SF(37851);

    function PF(FF, WF) {
      return (0, AF.z)(WF).cachedPipelines[FF]
    }

    function RF(FF) {
      const WF = FF._name,
        SF = FF.context;
      if (WF && SF) {
        const FF = (0, AF.z)(SF),
          CF = FF.cachedPipelines[WF];
        CF?.dispose(), delete FF.cachedPipelines[WF]
      }
    }

    function iW(FF, WF, SF, AF, uF, hF, dF) {
      let PF, RF;
      const iW = (0, CF.m)() ? hF?.getHostDocument() : null;
      PF = "string" === typeof WF ? WF : "string" === typeof WF.vertexSource ? "source:" + WF.vertexSource : "string" === typeof WF.vertexElement ? iW?.getElementById(WF.vertexElement) || WF.vertexElement : WF.vertex || WF, RF = "string" === typeof WF ? WF : "string" === typeof WF.fragmentSource ? "source:" + WF.fragmentSource : "string" === typeof WF.fragmentElement ? iW?.getElementById(WF.fragmentElement) || WF.fragmentElement : WF.fragment || WF;
      const EF = [void 0, void 0],
        QF = () => {
          if (EF[0] && EF[1]) {
            const [CF, PF] = EF;
            (0, bW.e)(FF), (0, bW.m)(CF, FF, ((CF, RF) => {
              dF && (dF._vertexSourceCodeBeforeMigration = RF), SF && (CF = SF("vertex", CF)), FF.isFragment = !0, (0, bW.m)(PF, FF, ((hF, PF) => {
                dF && (dF._fragmentSourceCodeBeforeMigration = PF), SF && (hF = SF("fragment", hF));
                const RF = (0, bW.b)(CF, hF, FF);
                FF = null;
                const iW = function(FF, WF, SF, CF) {
                  if (SF) {
                    return {
                      vertexSourceCode: (1 === CF ? "//" : "") + "#define SHADER_NAME vertex:" + (SF.vertexElement || SF.vertex || SF.spectorName || SF) + "\n" + FF,
                      fragmentSourceCode: (1 === CF ? "//" : "") + "#define SHADER_NAME fragment:" + (SF.fragmentElement || SF.fragment || SF.spectorName || SF) + "\n" + WF
                    }
                  }
                  return {
                    vertexSourceCode: FF,
                    fragmentSourceCode: WF
                  }
                }(RF.vertexCode, RF.fragmentCode, WF, uF);
                AF?.(iW.vertexSourceCode, iW.fragmentSourceCode)
              }), hF)
            }), hF)
          }
        };
      eF(PF, "Vertex", "", (FF => {
        dF && (dF._rawVertexSourceCode = FF), EF[0] = FF, QF()
      }), uF), eF(RF, "Fragment", "Pixel", (FF => {
        dF && (dF._rawFragmentSourceCode = FF), EF[1] = FF, QF()
      }), uF)
    }

    function eF(FF, WF, SF, AF, hF, bW) {
      if ("undefined" !== typeof HTMLElement && FF instanceof HTMLElement) {
        return void AF((0, CF.d)(FF))
      }
      if ("source:" === FF.substring(0, 7)) return void AF(FF.substring(7));
      if ("base64:" === FF.substring(0, 7)) {
        return void AF(window.atob(FF.substring(7)))
      }
      const PF = uF.c.GetShadersStore(hF);
      if (PF[FF + WF + "Shader"]) return void AF(PF[FF + WF + "Shader"]);
      if (SF && PF[FF + SF + "Shader"]) return void AF(PF[FF + SF + "Shader"]);
      let RF;
      if (RF = "." === FF[0] || "/" === FF[0] || FF.indexOf("http") > -1 ? FF : uF.c.GetShadersRepository(hF) + FF, !(bW = bW || dF.j)) throw new Error("loadFileInjection is not defined");
      bW(RF + "." + WF.toLowerCase() + ".fx", AF)
    }
    const EF = (FF, WF, SF, CF) => {
      try {
        const uF = FF.context ? (0, AF.z)(FF.context) : null;
        uF && (uF.disableParallelShaderCompile = FF.disableParallelCompilation);
        const hF = FF.existingPipelineContext || WF(FF.shaderProcessingContext);
        return hF._name = FF.name, FF.name && uF && (uF.cachedPipelines[FF.name] = hF), SF(hF, FF.vertex, FF.fragment, !!FF.createAsRaw, "", "", FF.rebuildRebind, FF.defines, FF.transformFeedbackVaryings, "", (() => {
          CF(hF, (() => {
            FF.onRenderingStateCompiled?.(hF)
          }))
        })), hF
      } catch (uF) {
        throw hF.b.Error("Error compiling effect"), uF
      }
    }
  },
  37816: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => dF
    });
    var CF = SF(35647),
      AF = SF(37076),
      uF = SF(37824),
      hF = SF(37826),
      bW = SF(37860);
    class dF {
      static get ShadersRepository() {
        return uF.c.ShadersRepository
      }
      static set ShadersRepository(FF) {
        uF.c.ShadersRepository = FF
      }
      get ZdF() {
        return this._isDisposed
      }
      get onBindObservable() {
        return this._onBindObservable || (this._onBindObservable = new CF.b), this._onBindObservable
      }
      get shaderLanguage() {
        return this._shaderLanguage
      }
      constructor(FF, WF, SF) {
        let AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          uF = arguments.length > 4 ? arguments[4] : void 0,
          bW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          PF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null,
          RF = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          iW = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          eF = arguments.length > 9 ? arguments[9] : void 0,
          EF = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : "",
          QF = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : 0,
          rW = arguments.length > 12 ? arguments[12] : void 0;
        this.defines = "", this.onCompiled = null, this.onError = null, this.onBind = null, this.uniqueId = 0, this.onCompileObservable = new CF.b, this.onErrorObservable = new CF.b, this._onBindObservable = null, this._isDisposed = !1, this._refCount = 1, this._bonesComputationForcedToCPU = !1, this._uniformBuffersNames = {}, this._multiTarget = !1, this._samplers = {}, this._isReady = !1, this._compilationError = "", this._allFallbacksProcessed = !1, this._uniforms = {}, this._key = "", this._fallbacks = null, this._vertexSourceCodeOverride = "", this._fragmentSourceCodeOverride = "", this._transformFeedbackVaryings = null, this._disableParallelShaderCompilation = !1, this._pipelineContext = null, this._vertexSourceCode = "", this._fragmentSourceCode = "", this._vertexSourceCodeBeforeMigration = "", this._fragmentSourceCodeBeforeMigration = "", this._rawVertexSourceCode = "", this._rawFragmentSourceCode = "", this._processCodeAfterIncludes = void 0, this._processFinalCode = null, this._onReleaseEffectsObserver = null, this.name = FF, this._key = EF;
        const gW = this._key.replace(/\r/g, "").replace(/\n/g, "|");
        let tW;
        if (WF.attributes) {
          const FF = WF;
          if (this._engine = SF, this._attributesNames = FF.attributes, this._uniformsNames = FF.uniformsNames.concat(FF.samplers), this._samplerList = FF.samplers.slice(), this.defines = FF.defines, this.onError = FF.onError, this.onCompiled = FF.onCompiled, this._fallbacks = FF.fallbacks, this._indexParameters = FF.indexParameters, this._transformFeedbackVaryings = FF.transformFeedbackVaryings || null, this._multiTarget = !!FF.multiTarget, this._shaderLanguage = FF.shaderLanguage ?? 0, this._disableParallelShaderCompilation = !!FF.disableParallelShaderCompilation, FF.uniformBuffersNames) {
            this._uniformBuffersNamesList = FF.uniformBuffersNames.slice();
            for (let WF = 0; WF < FF.uniformBuffersNames.length; WF++) this._uniformBuffersNames[FF.uniformBuffersNames[WF]] = WF
          }
          this._processFinalCode = FF.processFinalCode ?? null, this._processCodeAfterIncludes = FF.processCodeAfterIncludes ?? void 0, rW = FF.extraInitializationsAsync, tW = FF.existingPipelineContext
        } else this._engine = uF, this.defines = null == bW ? "" : bW, this._uniformsNames = SF.concat(AF), this._samplerList = AF ? AF.slice() : [], this._attributesNames = WF, this._uniformBuffersNamesList = [], this._shaderLanguage = QF, this.onError = iW, this.onCompiled = RF, this._indexParameters = eF, this._fallbacks = PF;
        "WEBGL2" === this._engine.shaderPlatformName && (tW = (0, hF.h)(gW, this._engine._gl) ?? tW), this._attributeLocationByName = {}, this.uniqueId = dF._UniqueIdSeed++, tW ? (this._pipelineContext = tW, this._pipelineContext.setEngine(this._engine), this._onRenderingStateCompiled(this._pipelineContext), this._pipelineContext.program && (this._pipelineContext.program.__SPECTOR_rebuildProgram = this._rebuildProgram.bind(this))) : this._processShaderCodeAsync(null, !1, null, rW).catch((FF => {
          const WF = FF?.message ?? String(FF),
            SF = new Error(`Effect async shader preparation failed for "${String(this.name)}": ${WF}`);
          FF && "string" === typeof FF.stack && (SF.stack = `${SF.message}\nCaused by: ${FF.stack}`), this._processCompilationErrors(SF)
        })), this._onReleaseEffectsObserver = this._engine.onReleaseEffectsObservable.addOnce((() => {
          this._onReleaseEffectsObserver = null, this.ZdF || this.dispose(!0)
        }))
      }
      async _processShaderCodeAsync() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          CF = arguments.length > 3 ? arguments[3] : void 0;
        CF && await CF(), this._processingContext = SF || this._engine._getShaderProcessingContext(this._shaderLanguage, !1);
        const AF = {
          defines: this.defines.split("\n"),
          indexParameters: this._indexParameters,
          isFragment: !1,
          shouldUseHighPrecisionShader: this._engine._shouldUseHighPrecisionShader,
          processor: FF ?? this._engine._getShaderProcessor(this._shaderLanguage),
          supportsUniformBuffers: this._engine.supportsUniformBuffers,
          shadersRepository: uF.c.GetShadersRepository(this._shaderLanguage),
          includesShadersStore: uF.c.GetIncludesShadersStore(this._shaderLanguage),
          version: (100 * this._engine.version).toString(),
          platformName: this._engine.shaderPlatformName,
          processingContext: this._processingContext,
          isNDCHalfZRange: this._engine.isNDCHalfZRange,
          QPF: this._engine.QPF,
          processCodeAfterIncludes: this._processCodeAfterIncludes
        };
        (0, hF.d)(AF, this.name, this._processFinalCode, ((FF, SF) => {
          this._vertexSourceCode = FF, this._fragmentSourceCode = SF, this._prepareEffect(WF)
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
        return !!this._engine.ZdF || (!!this._isReady || !!this._pipelineContext && this._pipelineContext.isReady)
      }
      sC() {
        return this._engine
      }
      getPipelineContext() {
        return this._pipelineContext
      }
      getAttributesNames() {
        return this._attributesNames
      }
      getAttributeLocation(FF) {
        return this._attributes[FF]
      }
      getAttributeLocationByName(FF) {
        return this._attributeLocationByName[FF]
      }
      getAttributesCount() {
        return this._attributes.length
      }
      getUniformIndex(FF) {
        return this._uniformsNames.indexOf(FF)
      }
      getUniform(FF) {
        return this._uniforms[FF]
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
        return await new Promise((FF => {
          this.executeWhenCompiled(FF)
        }))
      }
      executeWhenCompiled(FF) {
        this.isReady() ? FF(this) : (this.onCompileObservable.add((WF => {
          FF(WF)
        })), this._pipelineContext && !this._pipelineContext.isAsync || this._checkIsReady(null))
      }
      _checkIsReady(FF) {
        (0, bW.f)((() => this._isReadyInternal() || this._isDisposed), (() => {}), (WF => {
          this._processCompilationErrors(WF, FF)
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
            QPF: this._engine.QPF,
            supportsUniformBuffers: this._engine.supportsUniformBuffers
          },
          extendedCreatePipelineOptions: {
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            createAsRaw: !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride)
          }
        }
      }
      _rebuildProgram(FF, WF, SF, CF) {
        this._isReady = !1, this._vertexSourceCodeOverride = FF, this._fragmentSourceCodeOverride = WF, this.onError = (FF, WF) => {
          CF && CF(WF)
        }, this.onCompiled = () => {
          const FF = this.sC().scenes;
          if (FF)
            for (let WF = 0; WF < FF.length; WF++) FF[WF].markAllMaterialsAsDirty(127);
          this._pipelineContext._handlesSpectorRebuildCallback?.(SF)
        }, this._fallbacks = null, this._prepareEffect()
      }
      _onRenderingStateCompiled(FF) {
        if (this._pipelineContext = FF, this._pipelineContext.setEngine(this._engine), this._attributes = [], this._pipelineContext._fillEffectInformation(this, this._uniformBuffersNames, this._uniformsNames, this._uniforms, this._samplerList, this._samplers, this._attributesNames, this._attributes), this._attributesNames)
          for (let WF = 0; WF < this._attributesNames.length; WF++) {
            const FF = this._attributesNames[WF];
            this._attributeLocationByName[FF] = this._attributes[WF]
          }
        this._engine.bindSamplers(this), this._compilationError = "", this._isReady = !0, this.onCompiled && this.onCompiled(this), this.onCompileObservable.notifyObservers(this), this.onCompileObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh(), dF.AutomaticallyClearCodeCache && this.clearCodeCache()
      }
      _prepareEffect() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WF = this._pipelineContext;
        this._isReady = !1;
        try {
          const SF = !(!this._vertexSourceCodeOverride || !this._fragmentSourceCodeOverride),
            CF = SF ? null : this.defines,
            AF = SF ? this._vertexSourceCodeOverride : this._vertexSourceCode,
            uF = SF ? this._fragmentSourceCodeOverride : this._fragmentSourceCode,
            bW = this._engine;
          this._pipelineContext = (0, hF.g)({
            existingPipelineContext: FF ? WF : null,
            vertex: AF,
            fragment: uF,
            context: "WEBGL2" === bW.shaderPlatformName || "WEBGL1" === bW.shaderPlatformName ? bW._gl : void 0,
            rebuildRebind: (FF, WF, SF, CF) => this._rebuildProgram(FF, WF, SF, CF),
            defines: CF,
            transformFeedbackVaryings: this._transformFeedbackVaryings,
            name: this._key.replace(/\r/g, "").replace(/\n/g, "|"),
            createAsRaw: SF,
            disableParallelCompilation: this._disableParallelShaderCompilation,
            shaderProcessingContext: this._processingContext,
            onRenderingStateCompiled: SF => {
              WF && !FF && this._engine._deletePipelineContext(WF), SF && this._onRenderingStateCompiled(SF)
            }
          }, this._engine.createPipelineContext.bind(this._engine), this._engine._preparePipelineContextAsync.bind(this._engine), this._engine._executeWhenRenderingStateIsCompiled.bind(this._engine)), this._pipelineContext.isAsync && this._checkIsReady(WF)
        } catch (SF) {
          this._processCompilationErrors(SF, WF)
        }
      }
      _getShaderCodeAndErrorLine(FF, WF, SF) {
        const CF = SF ? /FRAGMENT SHADER ERROR: 0:(\d+?):/ : /VERTEX SHADER ERROR: 0:(\d+?):/;
        let AF = null;
        if (WF && FF) {
          const uF = WF.match(CF);
          if (uF && 2 === uF.length) {
            const WF = parseInt(uF[1]),
              CF = FF.split("\n", -1);
            CF.length >= WF && (AF = `Offending line [${WF}] in ${SF?"fragment":"vertex"} code: ${CF[WF-1]}`)
          }
        }
        return [FF, AF]
      }
      _processCompilationErrors(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        this._compilationError = "string" === typeof FF?.stack ? FF.stack : FF?.message ?? String(FF);
        const SF = this._attributesNames,
          CF = this._fallbacks;
        if (AF.b.Error("Unable to compile effect:"), AF.b.Error(`Uniforms: ${this._uniformsNames.join(" ")}`), AF.b.Error(`Attributes: ${SF.join(" ")}`), AF.b.Error("Defines:\n" + this.defines), dF.LogShaderCodeOnCompilationError) {
          let FF, WF = null,
            SF = null;
          this._pipelineContext?._getVertexShaderCode() && ([FF, WF] = this._getShaderCodeAndErrorLine(this._pipelineContext._getVertexShaderCode(), this._compilationError, !1), FF && (AF.b.Error("Vertex code:"), AF.b.Error(FF))), this._pipelineContext?._getFragmentShaderCode() && ([FF, SF] = this._getShaderCodeAndErrorLine(this._pipelineContext?._getFragmentShaderCode(), this._compilationError, !0), FF && (AF.b.Error("Fragment code:"), AF.b.Error(FF))), WF && AF.b.Error(WF), SF && AF.b.Error(SF)
        }
        AF.b.Error("Error: " + this._compilationError);
        const uF = () => {
          this.onError && this.onError(this, this._compilationError), this.onErrorObservable.notifyObservers(this), this._engine.onEffectErrorObservable.notifyObservers({
            effect: this,
            errors: this._compilationError
          })
        };
        WF && (this._pipelineContext = WF, this._isReady = !0, uF()), CF ? (this._pipelineContext = null, CF.hasMoreFallbacks ? (this._allFallbacksProcessed = !1, AF.b.Error("Trying next fallback."), this.defines = CF.reduce(this.defines, this), this._prepareEffect()) : (this._allFallbacksProcessed = !0, uF(), this.onErrorObservable.clear(), this._fallbacks && this._fallbacks.unBindMesh())) : (this._allFallbacksProcessed = !0, WF || uF())
      }
      get isSupported() {
        return "" === this._compilationError
      }
      _bindTexture(FF, WF) {
        this._engine._bindTexture(this._samplers[FF], WF, FF)
      }
      setTexture(FF, WF) {
        this._engine.setTexture(this._samplers[FF], this._uniforms[FF], WF, FF)
      }
      setTextureArray(FF, WF) {
        const SF = FF + "Ex";
        if (-1 === this._samplerList.indexOf(SF + "0")) {
          const CF = this._samplerList.indexOf(FF);
          for (let FF = 1; FF < WF.length; FF++) {
            const WF = SF + (FF - 1).toString();
            this._samplerList.splice(CF + FF, 0, WF)
          }
          let AF = 0;
          for (const FF of this._samplerList) this._samplers[FF] = AF, AF += 1
        }
        this._engine.setTextureArray(this._samplers[FF], this._uniforms[FF], WF, FF)
      }
      bindUniformBuffer(FF, WF) {
        const SF = this._uniformBuffersNames[WF];
        void 0 === SF || dF._BaseCache[SF] === FF && this._engine._features.useUBOBindingCache || (dF._BaseCache[SF] = FF, this._engine.bindUniformBufferBase(FF, SF, WF))
      }
      bindUniformBlock(FF, WF) {
        this._engine.bindUniformBlock(this._pipelineContext, FF, WF)
      }
      setInt(FF, WF) {
        return this._pipelineContext.setInt(FF, WF), this
      }
      setInt2(FF, WF, SF) {
        return this._pipelineContext.setInt2(FF, WF, SF), this
      }
      setInt3(FF, WF, SF, CF) {
        return this._pipelineContext.setInt3(FF, WF, SF, CF), this
      }
      setInt4(FF, WF, SF, CF, AF) {
        return this._pipelineContext.setInt4(FF, WF, SF, CF, AF), this
      }
      setIntArray(FF, WF) {
        return this._pipelineContext.setIntArray(FF, WF), this
      }
      setIntArray2(FF, WF) {
        return this._pipelineContext.setIntArray2(FF, WF), this
      }
      setIntArray3(FF, WF) {
        return this._pipelineContext.setIntArray3(FF, WF), this
      }
      setIntArray4(FF, WF) {
        return this._pipelineContext.setIntArray4(FF, WF), this
      }
      setUInt(FF, WF) {
        return this._pipelineContext.setUInt(FF, WF), this
      }
      setUInt2(FF, WF, SF) {
        return this._pipelineContext.setUInt2(FF, WF, SF), this
      }
      setUInt3(FF, WF, SF, CF) {
        return this._pipelineContext.setUInt3(FF, WF, SF, CF), this
      }
      setUInt4(FF, WF, SF, CF, AF) {
        return this._pipelineContext.setUInt4(FF, WF, SF, CF, AF), this
      }
      setUIntArray(FF, WF) {
        return this._pipelineContext.setUIntArray(FF, WF), this
      }
      setUIntArray2(FF, WF) {
        return this._pipelineContext.setUIntArray2(FF, WF), this
      }
      setUIntArray3(FF, WF) {
        return this._pipelineContext.setUIntArray3(FF, WF), this
      }
      setUIntArray4(FF, WF) {
        return this._pipelineContext.setUIntArray4(FF, WF), this
      }
      setFloatArray(FF, WF) {
        return this._pipelineContext.setArray(FF, WF), this
      }
      setFloatArray2(FF, WF) {
        return this._pipelineContext.setArray2(FF, WF), this
      }
      setFloatArray3(FF, WF) {
        return this._pipelineContext.setArray3(FF, WF), this
      }
      setFloatArray4(FF, WF) {
        return this._pipelineContext.setArray4(FF, WF), this
      }
      setArray(FF, WF) {
        return this._pipelineContext.setArray(FF, WF), this
      }
      setArray2(FF, WF) {
        return this._pipelineContext.setArray2(FF, WF), this
      }
      setArray3(FF, WF) {
        return this._pipelineContext.setArray3(FF, WF), this
      }
      setArray4(FF, WF) {
        return this._pipelineContext.setArray4(FF, WF), this
      }
      setMatrices(FF, WF) {
        return this._pipelineContext.setMatrices(FF, WF), this
      }
      setMatrix(FF, WF) {
        return this._pipelineContext.setMatrix(FF, WF), this
      }
      setMatrix3x3(FF, WF) {
        return this._pipelineContext.setMatrix3x3(FF, WF), this
      }
      setMatrix2x2(FF, WF) {
        return this._pipelineContext.setMatrix2x2(FF, WF), this
      }
      setFloat(FF, WF) {
        return this._pipelineContext.setFloat(FF, WF), this
      }
      setBool(FF, WF) {
        return this._pipelineContext.setInt(FF, WF ? 1 : 0), this
      }
      setVector2(FF, WF) {
        return this._pipelineContext.setVector2(FF, WF), this
      }
      setFloat2(FF, WF, SF) {
        return this._pipelineContext.setFloat2(FF, WF, SF), this
      }
      setVector3(FF, WF) {
        return this._pipelineContext.setVector3(FF, WF), this
      }
      setFloat3(FF, WF, SF, CF) {
        return this._pipelineContext.setFloat3(FF, WF, SF, CF), this
      }
      setVector4(FF, WF) {
        return this._pipelineContext.setVector4(FF, WF), this
      }
      setQuaternion(FF, WF) {
        return this._pipelineContext.setQuaternion(FF, WF), this
      }
      setFloat4(FF, WF, SF, CF, AF) {
        return this._pipelineContext.setFloat4(FF, WF, SF, CF, AF), this
      }
      setColor3(FF, WF) {
        return this._pipelineContext.setColor3(FF, WF), this
      }
      setColor4(FF, WF, SF) {
        return this._pipelineContext.setColor4(FF, WF, SF), this
      }
      setDirectColor4(FF, WF) {
        return this._pipelineContext.setDirectColor4(FF, WF), this
      }
      clearCodeCache() {
        this._vertexSourceCode = "", this._fragmentSourceCode = "", this._fragmentSourceCodeBeforeMigration = "", this._vertexSourceCodeBeforeMigration = ""
      }
      dispose() {
        if (arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) this._refCount = 0;
        else {
          if (dF.PersistentMode) return;
          this._refCount--
        }
        this._refCount > 0 || this._isDisposed || (this._onReleaseEffectsObserver && (this._engine.onReleaseEffectsObservable.remove(this._onReleaseEffectsObserver), this._onReleaseEffectsObserver = null), this._pipelineContext && (0, hF.j)(this._pipelineContext), this._engine._releaseEffect(this), this.clearCodeCache(), this._isDisposed = !0)
      }
      static RegisterShader(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        WF && (uF.c.GetShadersStore(CF)[`${FF}PixelShader`] = WF), SF && (uF.c.GetShadersStore(CF)[`${FF}VertexShader`] = SF)
      }
      static ResetCache() {
        dF._BaseCache = {}
      }
    }
    dF.LogShaderCodeOnCompilationError = !0, dF.PersistentMode = !1, dF.AutomaticallyClearCodeCache = !1, dF._UniqueIdSeed = 0, dF._BaseCache = {}, dF.ShadersStore = uF.c.ShadersStore, dF.IncludesShadersStore = uF.c.IncludesShadersStore
  },
  38116: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => RF,
      h: () => NF,
      i: () => VF
    });
    var CF = SF(37816),
      AF = SF(35623),
      uF = SF(35657),
      hF = SF(38098);
    const bW = new AF.b,
      dF = new AF.b,
      PF = new AF.b,
      RF = {
        OWF: () => {},
        eyeAtCamera: !0
      };

    function iW(FF, WF, SF) {
      const CF = SF.kRF(),
        AF = WF.kRF();
      for (let uF = 0; uF < 16; uF++) CF[uF] = AF[uF];
      return CF[12] -= FF.x, CF[13] -= FF.y, CF[14] -= FF.z, SF.markAsUpdated(), SF
    }

    function eF(FF, WF, SF) {
      return (0, uF.j)(WF, dF), iW(FF, dF, PF), (0, uF.j)(PF, SF), SF
    }

    function EF(FF, WF, SF) {
      if (!RF.eyeAtCamera) return eF(FF, WF, SF);
      const CF = SF.kRF(),
        AF = WF.kRF();
      for (let uF = 0; uF < 16; uF++) CF[uF] = AF[uF];
      return CF[12] = 0, CF[13] = 0, CF[14] = 0, SF.markAsUpdated(), SF
    }

    function QF(FF, WF, SF, CF) {
      return (0, uF.t)(EF(FF, WF, CF), SF, CF), CF
    }

    function rW(FF, WF, SF, CF) {
      return (0, uF.j)(SF, dF), (0, uF.t)(WF, dF, PF), iW(FF, PF, dF), EF(FF, SF, PF), (0, uF.t)(dF, PF, CF), CF
    }

    function gW(FF, WF, SF, CF, AF, hF) {
      return (0, uF.j)(SF, dF), (0, uF.t)(WF, dF, PF), iW(FF, PF, dF), QF(FF, CF, AF, PF), (0, uF.t)(dF, PF, hF), hF
    }

    function tW(FF, WF) {
      const SF = RF.OWF();
      if (!SF || bW === WF) return WF;
      bW.updateFlag = WF.updateFlag;
      const CF = SF.floatingOriginOffset;
      switch (FF) {
        case "world":
          return iW(CF, WF, bW);
        case "view":
          return EF(CF, WF, bW);
        case "worldView":
          return rW(CF, WF, SF.getViewMatrix(), bW);
        case "viewProjection":
          return QF(CF, SF.getViewMatrix(), SF.getProjectionMatrix(), bW);
        case "worldViewProjection":
          return gW(CF, WF, SF.getTransformMatrix(), SF.getViewMatrix(), SF.getProjectionMatrix(), bW);
        default:
          if (FF.startsWith("u_")) {
            const AF = FF.toLowerCase();
            if (AF.startsWith("u_worldviewprojection")) return gW(CF, WF, SF.getTransformMatrix(), SF.getViewMatrix(), SF.getProjectionMatrix(), bW);
            if (AF.startsWith("u_viewprojection")) return QF(CF, SF.getViewMatrix(), SF.getProjectionMatrix(), bW);
            if (AF.startsWith("u_worldview")) return rW(CF, WF, SF.getViewMatrix(), bW);
            if (AF.startsWith("u_world")) return iW(CF, WF, bW);
            if (AF.startsWith("u_view")) return EF(CF, WF, bW)
          }
          return WF
      }
    }
    const TF = hF.c,
      aW = CF.c,
      kW = TF.prototype._updateMatrixForUniform,
      qW = CF.c.prototype.setMatrix;

    function VF() {
      CF.c.prototype.setMatrix = qW, aW._setMatrixOverride = void 0, TF.prototype._updateMatrixForUniform = kW, TF.prototype._updateMatrixForUniformOverride = void 0
    }

    function NF() {
      aW.prototype._setMatrixOverride = qW, aW.prototype.setMatrix = function(FF, WF) {
        return this._setMatrixOverride(FF, tW(FF, WF)), this
      }, TF.prototype._updateMatrixForUniformOverride = kW, TF.prototype._updateMatrixForUniform = function(FF, WF) {
        this._updateMatrixForUniformOverride(FF, tW(FF, WF))
      }
    }
  },
  38095: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF,
      e: () => AF
    });
    var CF = SF(38093);

    function AF(FF, WF) {
      WF.WHITEBALANCE && FF.push("whiteBalanceMatrix"), WF.EXPOSURE && FF.push("exposureLinear"), WF.CONTRAST && FF.push("contrast"), WF.COLORGRADING && FF.push("colorTransformSettings"), (WF.VIGNETTE || WF.DITHER) && FF.push("vInverseScreenSize"), WF.VIGNETTE && (FF.push("vignetteSettings1"), FF.push("vignetteSettings2")), WF.COLORCURVES && (0, CF.d)(FF), WF.DITHER && FF.push("ditherIntensity")
    }

    function uF(FF, WF) {
      WF.COLORGRADING && FF.push("txColorTransform")
    }
  },
  38088: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => xW,
      h: () => YF
    });
    var CF = SF(37972),
      AF = SF(37974),
      uF = SF(35647),
      hF = SF(35678),
      bW = SF(35650),
      dF = SF(35623);
    const PF = [
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
      RF = 1e6 / PF[PF.length - 1][0],
      iW = 150;

    function eF(FF, WF) {
      const SF = Number.isNaN(FF) ? RF : Math.max(FF, RF),
        CF = (0, bW.Clamp)(1e6 / SF, PF[0][0], PF[PF.length - 1][0]);
      let AF = 0,
        uF = PF.length - 1;
      for (; uF - AF > 1;) {
        const FF = AF + uF >> 1;
        PF[FF][0] <= CF ? AF = FF : uF = FF
      }
      const hF = AF,
        [eF, EF, QF, rW] = PF[hF],
        [gW, tW, TF, aW] = PF[hF + 1],
        kW = (CF - eF) / (gW - eF),
        qW = dF.n.Lerp(new dF.n(EF, QF), new dF.n(tW, TF), kW),
        VF = dF.n.Normalize(new dF.n(1, rW)),
        NF = dF.n.Normalize(new dF.n(1, aW)),
        DF = dF.n.Normalize(dF.n.Lerp(VF, NF, kW)),
        LF = (0, bW.Clamp)(WF, -150, iW);
      qW.IPF(DF.scale(LF / 3e3));
      const mW = 2 * qW.x - 8 * qW.y + 4,
        OF = 3 * qW.x / mW,
        xW = 2 * qW.y / mW;
      return new dF.r(OF / xW, 1, (1 - OF - xW) / xW)
    }
    const EF = dF.b.FromArray([.8951, -.7502, .0389, 0, .2664, 1.7135, -.0685, 0, -.1614, .0367, 1.0296, 0, 0, 0, 0, 1]),
      QF = dF.b.Invert(EF);

    function rW(FF, WF) {
      const SF = WF > 0 ? FF / WF : 10;
      return (0, bW.Clamp)(SF, .1, 10)
    }

    function gW(FF, WF) {
      const SF = dF.r.TransformNormal(FF, EF),
        CF = dF.r.TransformNormal(WF, EF),
        AF = dF.b.FromArray([rW(CF.x, SF.x), 0, 0, 0, 0, rW(CF.y, SF.y), 0, 0, 0, 0, rW(CF.z, SF.z), 0, 0, 0, 0, 1]);
      return EF.multiply(AF).multiply(QF)
    }
    const tW = new dF.r(.95047, 1, 1.08883),
      TF = dF.b.FromArray([.4124564, .2126729, .0193339, 0, .3575761, .7151522, .119192, 0, .1804375, .072175, .9503041, 0, 0, 0, 0, 1]).multiply(gW(tW, eF(6500, 0))),
      aW = dF.b.Invert(TF),
      kW = dF.r.TransformNormal(new dF.r(1, 1, 1), TF);
    var qW = SF(37994),
      VF = SF(38093);
    let NF = (() => {
      var FF;
      let WF, SF, uF, bW, dF, PF, RF, iW, eF, EF, QF, rW, gW = [],
        tW = [],
        TF = [],
        aW = [],
        kW = [],
        NF = [],
        DF = [],
        LF = [],
        mW = [],
        OF = [],
        xW = [],
        ZF = [],
        oF = [],
        YF = [],
        MF = [],
        cW = [],
        GF = [],
        zW = [],
        IF = [],
        fF = [],
        yW = [],
        sF = [],
        nF = [],
        HF = [];
      return FF = class {
        constructor() {
          this._dirty = !0, this._tempColor = new hF.i(0, 0, 0, 0), this._globalCurve = new hF.i(0, 0, 0, 0), this._highlightsCurve = new hF.i(0, 0, 0, 0), this._midtonesCurve = new hF.i(0, 0, 0, 0), this._shadowsCurve = new hF.i(0, 0, 0, 0), this._positiveCurve = new hF.i(0, 0, 0, 0), this._negativeCurve = new hF.i(0, 0, 0, 0), this._globalHue = (0, CF.k)(this, gW, 30), this._globalDensity = ((0, CF.k)(this, tW), (0, CF.k)(this, TF, 0)), this._globalSaturation = ((0, CF.k)(this, aW), (0, CF.k)(this, kW, 0)), this._globalExposure = ((0, CF.k)(this, NF), (0, CF.k)(this, DF, 0)), this._highlightsHue = ((0, CF.k)(this, LF), (0, CF.k)(this, mW, 30)), this._highlightsDensity = ((0, CF.k)(this, OF), (0, CF.k)(this, xW, 0)), this._highlightsSaturation = ((0, CF.k)(this, ZF), (0, CF.k)(this, oF, 0)), this._highlightsExposure = ((0, CF.k)(this, YF), (0, CF.k)(this, MF, 0)), this._midtonesHue = ((0, CF.k)(this, cW), (0, CF.k)(this, GF, 30)), this._midtonesDensity = ((0, CF.k)(this, zW), (0, CF.k)(this, IF, 0)), this._midtonesSaturation = ((0, CF.k)(this, fF), (0, CF.k)(this, yW, 0)), this._midtonesExposure = ((0, CF.k)(this, sF), (0, CF.k)(this, nF, 0)), this._shadowsHue = ((0, CF.k)(this, HF), 30), this._shadowsDensity = 0, this._shadowsSaturation = 0, this._shadowsExposure = 0
        }
        get globalHue() {
          return this._globalHue
        }
        set globalHue(FF) {
          this._globalHue = FF, this._dirty = !0
        }
        get globalDensity() {
          return this._globalDensity
        }
        set globalDensity(FF) {
          this._globalDensity = FF, this._dirty = !0
        }
        get globalSaturation() {
          return this._globalSaturation
        }
        set globalSaturation(FF) {
          this._globalSaturation = FF, this._dirty = !0
        }
        get globalExposure() {
          return this._globalExposure
        }
        set globalExposure(FF) {
          this._globalExposure = FF, this._dirty = !0
        }
        get highlightsHue() {
          return this._highlightsHue
        }
        set highlightsHue(FF) {
          this._highlightsHue = FF, this._dirty = !0
        }
        get highlightsDensity() {
          return this._highlightsDensity
        }
        set highlightsDensity(FF) {
          this._highlightsDensity = FF, this._dirty = !0
        }
        get highlightsSaturation() {
          return this._highlightsSaturation
        }
        set highlightsSaturation(FF) {
          this._highlightsSaturation = FF, this._dirty = !0
        }
        get highlightsExposure() {
          return this._highlightsExposure
        }
        set highlightsExposure(FF) {
          this._highlightsExposure = FF, this._dirty = !0
        }
        get midtonesHue() {
          return this._midtonesHue
        }
        set midtonesHue(FF) {
          this._midtonesHue = FF, this._dirty = !0
        }
        get midtonesDensity() {
          return this._midtonesDensity
        }
        set midtonesDensity(FF) {
          this._midtonesDensity = FF, this._dirty = !0
        }
        get midtonesSaturation() {
          return this._midtonesSaturation
        }
        set midtonesSaturation(FF) {
          this._midtonesSaturation = FF, this._dirty = !0
        }
        get midtonesExposure() {
          return this._midtonesExposure
        }
        set midtonesExposure(FF) {
          this._midtonesExposure = FF, this._dirty = !0
        }
        get shadowsHue() {
          return this._shadowsHue
        }
        set shadowsHue(FF) {
          this._shadowsHue = FF, this._dirty = !0
        }
        get shadowsDensity() {
          return this._shadowsDensity
        }
        set shadowsDensity(FF) {
          this._shadowsDensity = FF, this._dirty = !0
        }
        get shadowsSaturation() {
          return this._shadowsSaturation
        }
        set shadowsSaturation(FF) {
          this._shadowsSaturation = FF, this._dirty = !0
        }
        get shadowsExposure() {
          return this._shadowsExposure
        }
        set shadowsExposure(FF) {
          this._shadowsExposure = FF, this._dirty = !0
        }
        getClassName() {
          return "ColorCurves"
        }
        _getColorGradingDataToRef(WF, SF, CF, AF, uF) {
          null != WF && (WF = FF._Clamp(WF, 0, 360), SF = FF._Clamp(SF, -100, 100), CF = FF._Clamp(CF, -100, 100), AF = FF._Clamp(AF, -100, 100), SF = FF._ApplyColorGradingSliderNonlinear(SF), SF *= .5, AF = FF._ApplyColorGradingSliderNonlinear(AF), SF < 0 && (SF *= -1, WF = (WF + 180) % 360), FF._FromHSBToRef(WF, SF, 50 + .25 * AF, uF), uF.scaleToRef(2, uF), uF.a = 1 + .01 * CF)
        }
        static _ApplyColorGradingSliderNonlinear(FF) {
          FF /= 100;
          let WF = Math.abs(FF);
          return WF = Math.pow(WF, 2), FF < 0 && (WF *= -1), WF *= 100, WF
        }
        static _FromHSBToRef(WF, SF, CF, AF) {
          let uF = FF._Clamp(WF, 0, 360);
          const hF = FF._Clamp(SF / 100, 0, 1),
            bW = FF._Clamp(CF / 100, 0, 1);
          if (0 === hF) AF.r = bW, AF.g = bW, AF.b = bW;
          else {
            uF /= 60;
            const FF = Math.floor(uF),
              WF = uF - FF,
              SF = bW * (1 - hF),
              CF = bW * (1 - hF * WF),
              dF = bW * (1 - hF * (1 - WF));
            switch (FF) {
              case 0:
                AF.r = bW, AF.g = dF, AF.b = SF;
                break;
              case 1:
                AF.r = CF, AF.g = bW, AF.b = SF;
                break;
              case 2:
                AF.r = SF, AF.g = bW, AF.b = dF;
                break;
              case 3:
                AF.r = SF, AF.g = CF, AF.b = bW;
                break;
              case 4:
                AF.r = dF, AF.g = SF, AF.b = bW;
                break;
              default:
                AF.r = bW, AF.g = SF, AF.b = CF
            }
          }
          AF.a = 1
        }
        static _Clamp(FF, WF, SF) {
          return Math.min(Math.max(FF, WF), SF)
        }
        clone() {
          return qW.e.Clone((() => new FF), this)
        }
        serialize() {
          return qW.e.Serialize(this)
        }
        _bind(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vCameraColorCurvePositive",
            SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurveNeutral",
            CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNegative";
          this._dirty && (this._dirty = !1, this._getColorGradingDataToRef(this._globalHue, this._globalDensity, this._globalSaturation, this._globalExposure, this._globalCurve), this._getColorGradingDataToRef(this._highlightsHue, this._highlightsDensity, this._highlightsSaturation, this._highlightsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._highlightsCurve), this._getColorGradingDataToRef(this._midtonesHue, this._midtonesDensity, this._midtonesSaturation, this._midtonesExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._midtonesCurve), this._getColorGradingDataToRef(this._shadowsHue, this._shadowsDensity, this._shadowsSaturation, this._shadowsExposure, this._tempColor), this._tempColor.multiplyToRef(this._globalCurve, this._shadowsCurve), this._highlightsCurve.subtractToRef(this._midtonesCurve, this._positiveCurve), this._midtonesCurve.subtractToRef(this._shadowsCurve, this._negativeCurve)), FF && (FF.setFloat4(WF, this._positiveCurve.r, this._positiveCurve.g, this._positiveCurve.b, this._positiveCurve.a), FF.setFloat4(SF, this._midtonesCurve.r, this._midtonesCurve.g, this._midtonesCurve.b, this._midtonesCurve.a), FF.setFloat4(CF, this._negativeCurve.r, this._negativeCurve.g, this._negativeCurve.b, this._negativeCurve.a))
        }
      }, (() => {
        const hF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WF = [(0, AF.H)()], SF = [(0, AF.H)()], uF = [(0, AF.H)()], bW = [(0, AF.H)()], dF = [(0, AF.H)()], PF = [(0, AF.H)()], RF = [(0, AF.H)()], iW = [(0, AF.H)()], eF = [(0, AF.H)()], EF = [(0, AF.H)()], QF = [(0, AF.H)()], rW = [(0, AF.H)()], (0, CF.j)(null, null, WF, {
          kind: "field",
          name: "_globalHue",
          static: !1,
          private: !1,
          access: {
            has: FF => "_globalHue" in FF,
            get: FF => FF._globalHue,
            set: (FF, WF) => {
              FF._globalHue = WF
            }
          },
          metadata: hF
        }, gW, tW), (0, CF.j)(null, null, SF, {
          kind: "field",
          name: "_globalDensity",
          static: !1,
          private: !1,
          access: {
            has: FF => "_globalDensity" in FF,
            get: FF => FF._globalDensity,
            set: (FF, WF) => {
              FF._globalDensity = WF
            }
          },
          metadata: hF
        }, TF, aW), (0, CF.j)(null, null, uF, {
          kind: "field",
          name: "_globalSaturation",
          static: !1,
          private: !1,
          access: {
            has: FF => "_globalSaturation" in FF,
            get: FF => FF._globalSaturation,
            set: (FF, WF) => {
              FF._globalSaturation = WF
            }
          },
          metadata: hF
        }, kW, NF), (0, CF.j)(null, null, bW, {
          kind: "field",
          name: "_globalExposure",
          static: !1,
          private: !1,
          access: {
            has: FF => "_globalExposure" in FF,
            get: FF => FF._globalExposure,
            set: (FF, WF) => {
              FF._globalExposure = WF
            }
          },
          metadata: hF
        }, DF, LF), (0, CF.j)(null, null, dF, {
          kind: "field",
          name: "_highlightsHue",
          static: !1,
          private: !1,
          access: {
            has: FF => "_highlightsHue" in FF,
            get: FF => FF._highlightsHue,
            set: (FF, WF) => {
              FF._highlightsHue = WF
            }
          },
          metadata: hF
        }, mW, OF), (0, CF.j)(null, null, PF, {
          kind: "field",
          name: "_highlightsDensity",
          static: !1,
          private: !1,
          access: {
            has: FF => "_highlightsDensity" in FF,
            get: FF => FF._highlightsDensity,
            set: (FF, WF) => {
              FF._highlightsDensity = WF
            }
          },
          metadata: hF
        }, xW, ZF), (0, CF.j)(null, null, RF, {
          kind: "field",
          name: "_highlightsSaturation",
          static: !1,
          private: !1,
          access: {
            has: FF => "_highlightsSaturation" in FF,
            get: FF => FF._highlightsSaturation,
            set: (FF, WF) => {
              FF._highlightsSaturation = WF
            }
          },
          metadata: hF
        }, oF, YF), (0, CF.j)(null, null, iW, {
          kind: "field",
          name: "_highlightsExposure",
          static: !1,
          private: !1,
          access: {
            has: FF => "_highlightsExposure" in FF,
            get: FF => FF._highlightsExposure,
            set: (FF, WF) => {
              FF._highlightsExposure = WF
            }
          },
          metadata: hF
        }, MF, cW), (0, CF.j)(null, null, eF, {
          kind: "field",
          name: "_midtonesHue",
          static: !1,
          private: !1,
          access: {
            has: FF => "_midtonesHue" in FF,
            get: FF => FF._midtonesHue,
            set: (FF, WF) => {
              FF._midtonesHue = WF
            }
          },
          metadata: hF
        }, GF, zW), (0, CF.j)(null, null, EF, {
          kind: "field",
          name: "_midtonesDensity",
          static: !1,
          private: !1,
          access: {
            has: FF => "_midtonesDensity" in FF,
            get: FF => FF._midtonesDensity,
            set: (FF, WF) => {
              FF._midtonesDensity = WF
            }
          },
          metadata: hF
        }, IF, fF), (0, CF.j)(null, null, QF, {
          kind: "field",
          name: "_midtonesSaturation",
          static: !1,
          private: !1,
          access: {
            has: FF => "_midtonesSaturation" in FF,
            get: FF => FF._midtonesSaturation,
            set: (FF, WF) => {
              FF._midtonesSaturation = WF
            }
          },
          metadata: hF
        }, yW, sF), (0, CF.j)(null, null, rW, {
          kind: "field",
          name: "_midtonesExposure",
          static: !1,
          private: !1,
          access: {
            has: FF => "_midtonesExposure" in FF,
            get: FF => FF._midtonesExposure,
            set: (FF, WF) => {
              FF._midtonesExposure = WF
            }
          },
          metadata: hF
        }, nF, HF), hF && Object.defineProperty(FF, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: hF
        })
      })(), FF.PrepareUniforms = VF.d, FF
    })();

    function DF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "vCameraColorCurvePositive",
        CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "vCameraColorCurveNeutral",
        AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "vCameraColorCurveNegative";
      FF._bind(WF, SF, CF, AF)
    }
    var LF = SF(37900),
      mW = SF(38095),
      OF = SF(35660);
    let xW = (() => {
        var FF;
        let WF, SF, PF, EF, QF, rW, tW, VF, OF, xW, ZF, oF, YF, MF, cW, GF, zW, IF, fF, yW, sF, nF, HF, KF, wF, XF, UF, BF, jW = [],
          vW = [],
          JF = [],
          pF = [],
          lF = [],
          FW = [],
          WW = [],
          SW = [],
          CW = [],
          AW = [],
          uW = [],
          hW = [],
          bS = [],
          dW = [],
          PW = [],
          RW = [],
          iS = [],
          eW = [],
          EW = [],
          QW = [],
          rS = [],
          gS = [],
          tS = [],
          TW = [],
          aS = [],
          kS = [],
          qS = [],
          VW = [],
          NW = [],
          DW = [],
          LW = [],
          mS = [],
          OW = [],
          xS = [],
          ZW = [],
          oW = [],
          YW = [],
          MW = [],
          cS = [],
          GW = [],
          zS = [],
          IW = [],
          fW = [],
          yS = [],
          sW = [],
          nW = [],
          HW = [],
          KW = [],
          wW = [],
          XW = [],
          UW = [],
          BW = [],
          jS = [],
          vS = [],
          JW = [],
          pW = [];
        return FF = class {
          constructor() {
            this.colorCurves = (0, CF.k)(this, jW, new NF), this._colorCurvesEnabled = ((0, CF.k)(this, vW), (0, CF.k)(this, JF, !1)), this._colorGradingTexture = ((0, CF.k)(this, pF), (0, CF.k)(this, lF, void 0)), this._colorGradingEnabled = ((0, CF.k)(this, FW), (0, CF.k)(this, WW, !1)), this._colorGradingWithGreenDepth = ((0, CF.k)(this, SW), (0, CF.k)(this, CW, !0)), this._colorGradingBGR = ((0, CF.k)(this, AW), (0, CF.k)(this, uW, !0)), this._exposure = ((0, CF.k)(this, hW), (0, CF.k)(this, bS, 1)), this._toneMappingEnabled = ((0, CF.k)(this, dW), (0, CF.k)(this, PW, !1)), this._toneMappingType = ((0, CF.k)(this, RW), (0, CF.k)(this, iS, FF.TONEMAPPING_STANDARD)), this._contrast = ((0, CF.k)(this, eW), (0, CF.k)(this, EW, 1)), this._whiteBalanceEnabled = ((0, CF.k)(this, QW), (0, CF.k)(this, rS, !1)), this._temperature = ((0, CF.k)(this, gS), (0, CF.k)(this, tS, 6500)), this._tint = ((0, CF.k)(this, TW), (0, CF.k)(this, aS, 0)), this._whiteBalanceMatrix = ((0, CF.k)(this, kS), null), this._whiteBalanceMatrixTemperature = null, this._whiteBalanceMatrixTint = null, this.vignetteStretch = (0, CF.k)(this, qS, 0), this.vignetteCenterX = ((0, CF.k)(this, VW), (0, CF.k)(this, NW, 0)), this.vignetteCenterY = ((0, CF.k)(this, DW), (0, CF.k)(this, LW, 0)), this.vignetteWeight = ((0, CF.k)(this, mS), (0, CF.k)(this, OW, 1.5)), this.vignetteColor = ((0, CF.k)(this, xS), (0, CF.k)(this, ZW, new hF.i(0, 0, 0, 0))), this.vignetteCameraFov = ((0, CF.k)(this, oW), (0, CF.k)(this, YW, .5)), this._vignetteBlendMode = ((0, CF.k)(this, MW), (0, CF.k)(this, cS, FF.VIGNETTEMODE_MULTIPLY)), this._vignetteEnabled = ((0, CF.k)(this, GW), (0, CF.k)(this, zS, !1)), this._ditheringEnabled = ((0, CF.k)(this, IW), (0, CF.k)(this, fW, !1)), this._ditheringIntensity = ((0, CF.k)(this, yS), (0, CF.k)(this, sW, 1 / 255)), this._skipFinalColorClamp = ((0, CF.k)(this, nW), (0, CF.k)(this, HW, !1)), this._applyByPostProcess = ((0, CF.k)(this, KW), (0, CF.k)(this, wW, !1)), this._isEnabled = ((0, CF.k)(this, XW), (0, CF.k)(this, UW, !0)), this.outputTextureWidth = ((0, CF.k)(this, BW), (0, CF.k)(this, jS, 0)), this.outputTextureHeight = ((0, CF.k)(this, vS), (0, CF.k)(this, JW, 0)), this.onUpdateParameters = ((0, CF.k)(this, pW), new uF.b)
          }
          get colorCurvesEnabled() {
            return this._colorCurvesEnabled
          }
          set colorCurvesEnabled(FF) {
            this._colorCurvesEnabled !== FF && (this._colorCurvesEnabled = FF, this._updateParameters())
          }
          get colorGradingTexture() {
            return this._colorGradingTexture
          }
          set colorGradingTexture(FF) {
            this._colorGradingTexture !== FF && (this._colorGradingTexture = FF, this._updateParameters())
          }
          get colorGradingEnabled() {
            return this._colorGradingEnabled
          }
          set colorGradingEnabled(FF) {
            this._colorGradingEnabled !== FF && (this._colorGradingEnabled = FF, this._updateParameters())
          }
          get colorGradingWithGreenDepth() {
            return this._colorGradingWithGreenDepth
          }
          set colorGradingWithGreenDepth(FF) {
            this._colorGradingWithGreenDepth !== FF && (this._colorGradingWithGreenDepth = FF, this._updateParameters())
          }
          get colorGradingBGR() {
            return this._colorGradingBGR
          }
          set colorGradingBGR(FF) {
            this._colorGradingBGR !== FF && (this._colorGradingBGR = FF, this._updateParameters())
          }
          get exposure() {
            return this._exposure
          }
          set exposure(FF) {
            this._exposure !== FF && (this._exposure = FF, this._updateParameters())
          }
          get toneMappingEnabled() {
            return this._toneMappingEnabled
          }
          set toneMappingEnabled(FF) {
            this._toneMappingEnabled !== FF && (this._toneMappingEnabled = FF, this._updateParameters())
          }
          get toneMappingType() {
            return this._toneMappingType
          }
          set toneMappingType(FF) {
            this._toneMappingType !== FF && (this._toneMappingType = FF, this._updateParameters())
          }
          get contrast() {
            return this._contrast
          }
          set contrast(FF) {
            this._contrast !== FF && (this._contrast = FF, this._updateParameters())
          }
          get whiteBalanceEnabled() {
            return this._whiteBalanceEnabled
          }
          set whiteBalanceEnabled(FF) {
            this._whiteBalanceEnabled !== FF && (this._whiteBalanceEnabled = FF, this._updateParameters())
          }
          get temperature() {
            return this._temperature
          }
          set temperature(FF) {
            FF = Number.isNaN(FF) ? RF : Math.max(FF, RF), this._temperature !== FF && (this._temperature = FF, this._updateParameters())
          }
          get tint() {
            return this._tint
          }
          set tint(FF) {
            FF = (0, bW.Clamp)(FF, -150, iW), this._tint !== FF && (this._tint = FF, this._updateParameters())
          }
          _getWhiteBalanceMatrix() {
            return null !== this._whiteBalanceMatrix && this._whiteBalanceMatrixTemperature === this._temperature && this._whiteBalanceMatrixTint === this._tint || (this._whiteBalanceMatrixTemperature = this._temperature, this._whiteBalanceMatrixTint = this._tint, this._whiteBalanceMatrix = function(FF, WF) {
              const SF = gW(eF(FF, WF), kW),
                CF = TF.multiply(SF).multiply(aW);
              return dF.b.GetAsMatrix3x3(CF)
            }(this._temperature, this._tint)), this._whiteBalanceMatrix
          }
          get vignetteCentreY() {
            return this.vignetteCenterY
          }
          set vignetteCentreY(FF) {
            this.vignetteCenterY = FF
          }
          get vignetteCentreX() {
            return this.vignetteCenterX
          }
          set vignetteCentreX(FF) {
            this.vignetteCenterX = FF
          }
          get vignetteBlendMode() {
            return this._vignetteBlendMode
          }
          set vignetteBlendMode(FF) {
            this._vignetteBlendMode !== FF && (this._vignetteBlendMode = FF, this._updateParameters())
          }
          get vignetteEnabled() {
            return this._vignetteEnabled
          }
          set vignetteEnabled(FF) {
            this._vignetteEnabled !== FF && (this._vignetteEnabled = FF, this._updateParameters())
          }
          get ditheringEnabled() {
            return this._ditheringEnabled
          }
          set ditheringEnabled(FF) {
            this._ditheringEnabled !== FF && (this._ditheringEnabled = FF, this._updateParameters())
          }
          get ditheringIntensity() {
            return this._ditheringIntensity
          }
          set ditheringIntensity(FF) {
            this._ditheringIntensity !== FF && (this._ditheringIntensity = FF, this._updateParameters())
          }
          get skipFinalColorClamp() {
            return this._skipFinalColorClamp
          }
          set skipFinalColorClamp(FF) {
            this._skipFinalColorClamp !== FF && (this._skipFinalColorClamp = FF, this._updateParameters())
          }
          get applyByPostProcess() {
            return this._applyByPostProcess
          }
          set applyByPostProcess(FF) {
            this._applyByPostProcess !== FF && (this._applyByPostProcess = FF, this._updateParameters())
          }
          get isEnabled() {
            return this._isEnabled
          }
          set isEnabled(FF) {
            this._isEnabled !== FF && (this._isEnabled = FF, this._updateParameters())
          }
          _updateParameters() {
            this.onUpdateParameters.notifyObservers(this)
          }
          getClassName() {
            return "ImageProcessingConfiguration"
          }
          prepareDefines(WF) {
            if ((arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) !== this.applyByPostProcess || !this._isEnabled) return WF.WHITEBALANCE = !1, WF.VIGNETTE = !1, WF.TONEMAPPING = 0, WF.CONTRAST = !1, WF.EXPOSURE = !1, WF.COLORCURVES = !1, WF.COLORGRADING = !1, WF.COLORGRADING3D = !1, WF.DITHER = !1, WF.IMAGEPROCESSING = !1, WF.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, void(WF.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled);
            if (WF.WHITEBALANCE = this._whiteBalanceEnabled, WF.VIGNETTE = this.vignetteEnabled, WF.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === FF._VIGNETTEMODE_MULTIPLY, WF.VIGNETTEBLENDMODEOPAQUE = !WF.VIGNETTEBLENDMODEMULTIPLY, this._toneMappingEnabled) switch (this._toneMappingType) {
              case FF.TONEMAPPING_KHR_PBR_NEUTRAL:
                WF.TONEMAPPING = 3;
                break;
              case FF.TONEMAPPING_ACES:
                WF.TONEMAPPING = 2;
                break;
              default:
                WF.TONEMAPPING = 1
            } else WF.TONEMAPPING = 0;
            WF.CONTRAST = 1 !== this.contrast, WF.EXPOSURE = 1 !== this.exposure, WF.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves, WF.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture, WF.COLORGRADING ? WF.COLORGRADING3D = this.colorGradingTexture.is3D : WF.COLORGRADING3D = !1, WF.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth, WF.SAMPLER3DBGRMAP = this.colorGradingBGR, WF.DITHER = this._ditheringEnabled, WF.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess, WF.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp, WF.IMAGEPROCESSING = WF.WHITEBALANCE || WF.VIGNETTE || !!WF.TONEMAPPING || WF.CONTRAST || WF.EXPOSURE || WF.COLORCURVES || WF.COLORGRADING || WF.DITHER
          }
          isReady() {
            return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady()
          }
          bind(FF, WF) {
            if (this._whiteBalanceEnabled && FF.setMatrix3x3("whiteBalanceMatrix", this._getWhiteBalanceMatrix()), this._colorCurvesEnabled && this.colorCurves && DF(this.colorCurves, FF), this._vignetteEnabled || this._ditheringEnabled) {
              const SF = 1 / (this.outputTextureWidth || FF.sC().getRenderWidth()),
                CF = 1 / (this.outputTextureHeight || FF.sC().getRenderHeight());
              if (FF.setFloat2("vInverseScreenSize", SF, CF), this._ditheringEnabled && FF.setFloat("ditherIntensity", .5 * this._ditheringIntensity), this._vignetteEnabled) {
                const AF = null != WF ? WF : CF / SF;
                let uF = Math.tan(.5 * this.vignetteCameraFov),
                  hF = uF * AF;
                const bW = Math.sqrt(hF * uF);
                hF = (0, LF.i)(hF, bW, this.vignetteStretch), uF = (0, LF.i)(uF, bW, this.vignetteStretch), FF.setFloat4("vignetteSettings1", hF, uF, -hF * this.vignetteCenterX, -uF * this.vignetteCenterY);
                const dF = -2 * this.vignetteWeight;
                FF.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, dF)
              }
            }
            if (FF.setFloat("exposureLinear", this.exposure), FF.setFloat("contrast", this.contrast), this.colorGradingTexture) {
              FF.setTexture("txColorTransform", this.colorGradingTexture);
              const WF = this.colorGradingTexture.getSize().height;
              FF.setFloat4("colorTransformSettings", (WF - 1) / WF, .5 / WF, WF, this.colorGradingTexture.level)
            }
          }
          clone() {
            return qW.e.Clone((() => new FF), this)
          }
          serialize() {
            return qW.e.Serialize(this)
          }
          static get VIGNETTEMODE_MULTIPLY() {
            return this._VIGNETTEMODE_MULTIPLY
          }
          static get VIGNETTEMODE_OPAQUE() {
            return this._VIGNETTEMODE_OPAQUE
          }
        }, (() => {
          const uF = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
          WF = [(0, AF.l)()], SF = [(0, AF.H)()], PF = [(0, AF.C)("colorGradingTexture")], EF = [(0, AF.H)()], QF = [(0, AF.H)()], rW = [(0, AF.H)()], tW = [(0, AF.H)()], VF = [(0, AF.H)()], OF = [(0, AF.H)()], xW = [(0, AF.H)()], ZF = [(0, AF.H)()], oF = [(0, AF.H)()], YF = [(0, AF.H)()], MF = [(0, AF.H)()], cW = [(0, AF.H)()], GF = [(0, AF.H)()], zW = [(0, AF.H)()], IF = [(0, AF.s)()], fF = [(0, AF.H)()], yW = [(0, AF.H)()], sF = [(0, AF.H)()], nF = [(0, AF.H)()], HF = [(0, AF.H)()], KF = [(0, AF.H)()], wF = [(0, AF.H)()], XF = [(0, AF.H)()], UF = [(0, AF.H)()], BF = [(0, AF.H)()], (0, CF.j)(null, null, WF, {
            kind: "field",
            name: "colorCurves",
            static: !1,
            private: !1,
            access: {
              has: FF => "colorCurves" in FF,
              get: FF => FF.colorCurves,
              set: (FF, WF) => {
                FF.colorCurves = WF
              }
            },
            metadata: uF
          }, jW, vW), (0, CF.j)(null, null, SF, {
            kind: "field",
            name: "_colorCurvesEnabled",
            static: !1,
            private: !1,
            access: {
              has: FF => "_colorCurvesEnabled" in FF,
              get: FF => FF._colorCurvesEnabled,
              set: (FF, WF) => {
                FF._colorCurvesEnabled = WF
              }
            },
            metadata: uF
          }, JF, pF), (0, CF.j)(null, null, PF, {
            kind: "field",
            name: "_colorGradingTexture",
            static: !1,
            private: !1,
            access: {
              has: FF => "_colorGradingTexture" in FF,
              get: FF => FF._colorGradingTexture,
              set: (FF, WF) => {
                FF._colorGradingTexture = WF
              }
            },
            metadata: uF
          }, lF, FW), (0, CF.j)(null, null, EF, {
            kind: "field",
            name: "_colorGradingEnabled",
            static: !1,
            private: !1,
            access: {
              has: FF => "_colorGradingEnabled" in FF,
              get: FF => FF._colorGradingEnabled,
              set: (FF, WF) => {
                FF._colorGradingEnabled = WF
              }
            },
            metadata: uF
          }, WW, SW), (0, CF.j)(null, null, QF, {
            kind: "field",
            name: "_colorGradingWithGreenDepth",
            static: !1,
            private: !1,
            access: {
              has: FF => "_colorGradingWithGreenDepth" in FF,
              get: FF => FF._colorGradingWithGreenDepth,
              set: (FF, WF) => {
                FF._colorGradingWithGreenDepth = WF
              }
            },
            metadata: uF
          }, CW, AW), (0, CF.j)(null, null, rW, {
            kind: "field",
            name: "_colorGradingBGR",
            static: !1,
            private: !1,
            access: {
              has: FF => "_colorGradingBGR" in FF,
              get: FF => FF._colorGradingBGR,
              set: (FF, WF) => {
                FF._colorGradingBGR = WF
              }
            },
            metadata: uF
          }, uW, hW), (0, CF.j)(null, null, tW, {
            kind: "field",
            name: "_exposure",
            static: !1,
            private: !1,
            access: {
              has: FF => "_exposure" in FF,
              get: FF => FF._exposure,
              set: (FF, WF) => {
                FF._exposure = WF
              }
            },
            metadata: uF
          }, bS, dW), (0, CF.j)(null, null, VF, {
            kind: "field",
            name: "_toneMappingEnabled",
            static: !1,
            private: !1,
            access: {
              has: FF => "_toneMappingEnabled" in FF,
              get: FF => FF._toneMappingEnabled,
              set: (FF, WF) => {
                FF._toneMappingEnabled = WF
              }
            },
            metadata: uF
          }, PW, RW), (0, CF.j)(null, null, OF, {
            kind: "field",
            name: "_toneMappingType",
            static: !1,
            private: !1,
            access: {
              has: FF => "_toneMappingType" in FF,
              get: FF => FF._toneMappingType,
              set: (FF, WF) => {
                FF._toneMappingType = WF
              }
            },
            metadata: uF
          }, iS, eW), (0, CF.j)(null, null, xW, {
            kind: "field",
            name: "_contrast",
            static: !1,
            private: !1,
            access: {
              has: FF => "_contrast" in FF,
              get: FF => FF._contrast,
              set: (FF, WF) => {
                FF._contrast = WF
              }
            },
            metadata: uF
          }, EW, QW), (0, CF.j)(null, null, ZF, {
            kind: "field",
            name: "_whiteBalanceEnabled",
            static: !1,
            private: !1,
            access: {
              has: FF => "_whiteBalanceEnabled" in FF,
              get: FF => FF._whiteBalanceEnabled,
              set: (FF, WF) => {
                FF._whiteBalanceEnabled = WF
              }
            },
            metadata: uF
          }, rS, gS), (0, CF.j)(null, null, oF, {
            kind: "field",
            name: "_temperature",
            static: !1,
            private: !1,
            access: {
              has: FF => "_temperature" in FF,
              get: FF => FF._temperature,
              set: (FF, WF) => {
                FF._temperature = WF
              }
            },
            metadata: uF
          }, tS, TW), (0, CF.j)(null, null, YF, {
            kind: "field",
            name: "_tint",
            static: !1,
            private: !1,
            access: {
              has: FF => "_tint" in FF,
              get: FF => FF._tint,
              set: (FF, WF) => {
                FF._tint = WF
              }
            },
            metadata: uF
          }, aS, kS), (0, CF.j)(null, null, MF, {
            kind: "field",
            name: "vignetteStretch",
            static: !1,
            private: !1,
            access: {
              has: FF => "vignetteStretch" in FF,
              get: FF => FF.vignetteStretch,
              set: (FF, WF) => {
                FF.vignetteStretch = WF
              }
            },
            metadata: uF
          }, qS, VW), (0, CF.j)(null, null, cW, {
            kind: "field",
            name: "vignetteCenterX",
            static: !1,
            private: !1,
            access: {
              has: FF => "vignetteCenterX" in FF,
              get: FF => FF.vignetteCenterX,
              set: (FF, WF) => {
                FF.vignetteCenterX = WF
              }
            },
            metadata: uF
          }, NW, DW), (0, CF.j)(null, null, GF, {
            kind: "field",
            name: "vignetteCenterY",
            static: !1,
            private: !1,
            access: {
              has: FF => "vignetteCenterY" in FF,
              get: FF => FF.vignetteCenterY,
              set: (FF, WF) => {
                FF.vignetteCenterY = WF
              }
            },
            metadata: uF
          }, LW, mS), (0, CF.j)(null, null, zW, {
            kind: "field",
            name: "vignetteWeight",
            static: !1,
            private: !1,
            access: {
              has: FF => "vignetteWeight" in FF,
              get: FF => FF.vignetteWeight,
              set: (FF, WF) => {
                FF.vignetteWeight = WF
              }
            },
            metadata: uF
          }, OW, xS), (0, CF.j)(null, null, IF, {
            kind: "field",
            name: "vignetteColor",
            static: !1,
            private: !1,
            access: {
              has: FF => "vignetteColor" in FF,
              get: FF => FF.vignetteColor,
              set: (FF, WF) => {
                FF.vignetteColor = WF
              }
            },
            metadata: uF
          }, ZW, oW), (0, CF.j)(null, null, fF, {
            kind: "field",
            name: "vignetteCameraFov",
            static: !1,
            private: !1,
            access: {
              has: FF => "vignetteCameraFov" in FF,
              get: FF => FF.vignetteCameraFov,
              set: (FF, WF) => {
                FF.vignetteCameraFov = WF
              }
            },
            metadata: uF
          }, YW, MW), (0, CF.j)(null, null, yW, {
            kind: "field",
            name: "_vignetteBlendMode",
            static: !1,
            private: !1,
            access: {
              has: FF => "_vignetteBlendMode" in FF,
              get: FF => FF._vignetteBlendMode,
              set: (FF, WF) => {
                FF._vignetteBlendMode = WF
              }
            },
            metadata: uF
          }, cS, GW), (0, CF.j)(null, null, sF, {
            kind: "field",
            name: "_vignetteEnabled",
            static: !1,
            private: !1,
            access: {
              has: FF => "_vignetteEnabled" in FF,
              get: FF => FF._vignetteEnabled,
              set: (FF, WF) => {
                FF._vignetteEnabled = WF
              }
            },
            metadata: uF
          }, zS, IW), (0, CF.j)(null, null, nF, {
            kind: "field",
            name: "_ditheringEnabled",
            static: !1,
            private: !1,
            access: {
              has: FF => "_ditheringEnabled" in FF,
              get: FF => FF._ditheringEnabled,
              set: (FF, WF) => {
                FF._ditheringEnabled = WF
              }
            },
            metadata: uF
          }, fW, yS), (0, CF.j)(null, null, HF, {
            kind: "field",
            name: "_ditheringIntensity",
            static: !1,
            private: !1,
            access: {
              has: FF => "_ditheringIntensity" in FF,
              get: FF => FF._ditheringIntensity,
              set: (FF, WF) => {
                FF._ditheringIntensity = WF
              }
            },
            metadata: uF
          }, sW, nW), (0, CF.j)(null, null, KF, {
            kind: "field",
            name: "_skipFinalColorClamp",
            static: !1,
            private: !1,
            access: {
              has: FF => "_skipFinalColorClamp" in FF,
              get: FF => FF._skipFinalColorClamp,
              set: (FF, WF) => {
                FF._skipFinalColorClamp = WF
              }
            },
            metadata: uF
          }, HW, KW), (0, CF.j)(null, null, wF, {
            kind: "field",
            name: "_applyByPostProcess",
            static: !1,
            private: !1,
            access: {
              has: FF => "_applyByPostProcess" in FF,
              get: FF => FF._applyByPostProcess,
              set: (FF, WF) => {
                FF._applyByPostProcess = WF
              }
            },
            metadata: uF
          }, wW, XW), (0, CF.j)(null, null, XF, {
            kind: "field",
            name: "_isEnabled",
            static: !1,
            private: !1,
            access: {
              has: FF => "_isEnabled" in FF,
              get: FF => FF._isEnabled,
              set: (FF, WF) => {
                FF._isEnabled = WF
              }
            },
            metadata: uF
          }, UW, BW), (0, CF.j)(null, null, UF, {
            kind: "field",
            name: "outputTextureWidth",
            static: !1,
            private: !1,
            access: {
              has: FF => "outputTextureWidth" in FF,
              get: FF => FF.outputTextureWidth,
              set: (FF, WF) => {
                FF.outputTextureWidth = WF
              }
            },
            metadata: uF
          }, jS, vS), (0, CF.j)(null, null, BF, {
            kind: "field",
            name: "outputTextureHeight",
            static: !1,
            private: !1,
            access: {
              has: FF => "outputTextureHeight" in FF,
              get: FF => FF.outputTextureHeight,
              set: (FF, WF) => {
                FF.outputTextureHeight = WF
              }
            },
            metadata: uF
          }, JW, pW), uF && Object.defineProperty(FF, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: uF
          })
        })(), FF.TONEMAPPING_STANDARD = 0, FF.TONEMAPPING_ACES = 1, FF.TONEMAPPING_KHR_PBR_NEUTRAL = 2, FF.PrepareUniforms = mW.e, FF.PrepareSamplers = mW.c, FF._VIGNETTEMODE_MULTIPLY = 0, FF._VIGNETTEMODE_OPAQUE = 1, FF
      })(),
      ZF = !1;

    function oF(FF) {
      const WF = qW.e.Parse((() => new xW), FF, null, null);
      return void 0 !== FF.vignetteCentreX && (WF.vignetteCenterX = FF.vignetteCentreX), void 0 !== FF.vignetteCentreY && (WF.vignetteCenterY = FF.vignetteCentreY), WF
    }

    function YF() {
      ZF || (ZF = !0, xW.Parse = oF, qW.e._ImageProcessingConfigurationParser = oF, (0, OF.f)("BABYLON.ImageProcessingConfiguration", xW))
    }
  },
  38098: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF
    });
    var CF = SF(37076),
      AF = SF(38065);
    class uF {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = arguments.length > 3 ? arguments[3] : void 0,
          AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          uF = arguments.length > 5 ? arguments[5] : void 0;
        this._uniformNames = [], this._valueCache = {}, this._engine = FF, this._noUBO = !FF.supportsUniformBuffers || AF, this._dynamic = SF, this._name = CF ?? "no-name", this._data = WF || [], this._uniformLocations = {}, this._uniformSizes = {}, this._uniformArraySizes = {}, this._uniformLocationPointer = 0, this._needSync = !1, this._dataGeneration = 0, this._trackUBOsInFrame = !1, (void 0 === uF && this._engine._features.trackUbosInFrame || !0 === uF) && (this._buffers = [], this._bufferIndex = -1, this._bufferUpdatedLastFrame = !1, this._createBufferOnWrite = !1, this._currentFrameId = 0, this._trackUBOsInFrame = !0, this._resetOwnerSlots()), this._noUBO ? (this.updateMatrix3x3 = this._updateMatrix3x3ForEffect, this.updateMatrix2x2 = this._updateMatrix2x2ForEffect, this.updateFloat = this._updateFloatForEffect, this.updateFloat2 = this._updateFloat2ForEffect, this.updateFloat3 = this._updateFloat3ForEffect, this.updateFloat4 = this._updateFloat4ForEffect, this.updateFloatArray = this._updateFloatArrayForEffect, this.updateArray = this._updateArrayForEffect, this.updateIntArray = this._updateIntArrayForEffect, this.updateUIntArray = this._updateUIntArrayForEffect, this.yhF = this._updateMatrixForEffect, this.updateMatrices = this._updateMatricesForEffect, this.updateVector3 = this._updateVector3ForEffect, this.updateVector4 = this._updateVector4ForEffect, this.updateColor3 = this._updateColor3ForEffect, this.updateColor4 = this._updateColor4ForEffect, this.updateDirectColor4 = this._updateDirectColor4ForEffect, this.updateInt = this._updateIntForEffect, this.updateInt2 = this._updateInt2ForEffect, this.updateInt3 = this._updateInt3ForEffect, this.updateInt4 = this._updateInt4ForEffect, this.updateUInt = this._updateUIntForEffect, this.updateUInt2 = this._updateUInt2ForEffect, this.updateUInt3 = this._updateUInt3ForEffect, this.updateUInt4 = this._updateUInt4ForEffect) : (this._engine._uniformBuffers.push(this), this.updateMatrix3x3 = this._updateMatrix3x3ForUniform, this.updateMatrix2x2 = this._updateMatrix2x2ForUniform, this.updateFloat = this._updateFloatForUniform, this.updateFloat2 = this._updateFloat2ForUniform, this.updateFloat3 = this._updateFloat3ForUniform, this.updateFloat4 = this._updateFloat4ForUniform, this.updateFloatArray = this._updateFloatArrayForUniform, this.updateArray = this._updateArrayForUniform, this.updateIntArray = this._updateIntArrayForUniform, this.updateUIntArray = this._updateUIntArrayForUniform, this.yhF = this._updateMatrixForUniform, this.updateMatrices = this._updateMatricesForUniform, this.updateVector3 = this._updateVector3ForUniform, this.updateVector4 = this._updateVector4ForUniform, this.updateColor3 = this._updateColor3ForUniform, this.updateColor4 = this._updateColor4ForUniform, this.updateDirectColor4 = this._updateDirectColor4ForUniform, this.updateInt = this._updateIntForUniform, this.updateInt2 = this._updateInt2ForUniform, this.updateInt3 = this._updateInt3ForUniform, this.updateInt4 = this._updateInt4ForUniform, this.updateUInt = this._updateUIntForUniform, this.updateUInt2 = this._updateUInt2ForUniform, this.updateUInt3 = this._updateUInt3ForUniform, this.updateUInt4 = this._updateUInt4ForUniform)
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
      _fillAlignment(FF) {
        let WF;
        if (WF = FF <= 2 ? FF : 4, this._uniformLocationPointer % WF !== 0) {
          const FF = this._uniformLocationPointer;
          this._uniformLocationPointer += WF - this._uniformLocationPointer % WF;
          const SF = this._uniformLocationPointer - FF;
          for (let WF = 0; WF < SF; WF++) this._data.push(0)
        }
      }
      addUniform(FF, WF) {
        let SF, CF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (CF > 0 && "number" === typeof WF && (this._uniformArraySizes[FF] = {
            strideSize: WF,
            arraySize: CF
          }), void 0 === this._uniformLocations[FF] && (this._uniformNames.push(FF), !this._noUBO)) {
          if (CF > 0) {
            if (WF instanceof Array) throw "addUniform should not be use with Array in UBO: " + FF;
            if (this._fillAlignment(4), 16 == WF) WF *= CF;
            else {
              WF = WF * CF + (4 - WF) * CF
            }
            SF = [];
            for (let FF = 0; FF < WF; FF++) SF.push(0)
          } else {
            if (WF instanceof Array) SF = WF, WF = SF.length;
            else {
              SF = [];
              for (let FF = 0; FF < WF; FF++) SF.push(0)
            }
            this._fillAlignment(WF)
          }
          this._uniformSizes[FF] = WF, this._uniformLocations[FF] = this._uniformLocationPointer, this._uniformLocationPointer += WF;
          for (let FF = 0; FF < WF; FF++) this._data.push(SF[FF]);
          this._needSync = !0
        }
      }
      addMatrix(FF, WF) {
        this.addUniform(FF, Array.prototype.slice.call(WF.kRF()))
      }
      addFloat2(FF, WF, SF) {
        const CF = [WF, SF];
        this.addUniform(FF, CF)
      }
      addFloat3(FF, WF, SF, CF) {
        const AF = [WF, SF, CF];
        this.addUniform(FF, AF)
      }
      addColor3(FF, WF) {
        const SF = [WF.r, WF.g, WF.b];
        this.addUniform(FF, SF)
      }
      addColor4(FF, WF, SF) {
        const CF = [WF.r, WF.g, WF.b, SF];
        this.addUniform(FF, CF)
      }
      addVector3(FF, WF) {
        const SF = [WF.x, WF.y, WF.z];
        this.addUniform(FF, SF)
      }
      addMatrix3x3(FF) {
        this.addUniform(FF, 12)
      }
      addMatrix2x2(FF) {
        this.addUniform(FF, 8)
      }
      create() {
        this._noUBO || this._buffer || (this._fillAlignment(4), this._bufferData = new Float32Array(this._data), this._dataGeneration++, this._rebuild(), this._needSync = !0)
      }
      _getNamesDebug() {
        const FF = [];
        let WF = 0;
        for (const SF in this._uniformLocations)
          if (FF.push(SF), 10 === ++WF) break;
        return FF.join(",")
      }
      _rebuild() {
        !this._noUBO && this._bufferData && (this._dynamic ? this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()) : this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNamesDebug()), this._trackUBOsInFrame && (this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : void 0]), this._bufferIndex = this._buffers.length - 1, this._createBufferOnWrite = !1))
      }
      _rebuildAfterContextLost() {
        this._trackUBOsInFrame && (this._buffers = [], this._currentFrameId = 0, this._resetOwnerSlots()), this._rebuild()
      }
      _resetOwnerSlots() {
        if (this._ownerListsBySlot)
          for (const FF of this._ownerListsBySlot.values()) this._removeOwnerBacklink(FF);
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
      set name(FF) {
        this._name = FF
      }
      get currentEffect() {
        return this._currentEffect
      }
      _buffersEqual(FF, WF) {
        for (let SF = 0; SF < FF.length; ++SF)
          if (FF[SF] !== WF[SF]) return !1;
        return !0
      }
      _copyBuffer(FF, WF) {
        for (let SF = 0; SF < FF.length; ++SF) WF[SF] = FF[SF]
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
      _updateOwnerKeyed(FF) {
        if (this._noUBO || !this._trackUBOsInFrame) return void this.update();
        this._buffer || this.create(), this._checkNewFrame();
        let WF = this._slotByOwner.get(FF);
        if (void 0 === WF && (WF = 0 === this._ownerCount && 1 === this._buffers.length && 0 === this._freeSlots.length ? 0 : this._takeFreeSlot(!0), this._slotByOwner.set(FF, WF), this._ownerCount++, FF._uniformBuffersWithOwnedSlot || (FF._uniformBuffersWithOwnedSlot = []), FF._uniformBuffersWithOwnedSlot.push(this), this._ownerListsBySlot.set(WF, FF._uniformBuffersWithOwnedSlot)), this._slotGeneration[WF] === this._dataGeneration) return this._bufferIndex = WF, this._buffer = this._buffers[WF][0], this.bindUniformBuffer(), this._slotFrameId[WF] = this._currentFrameId, this._needSync = !1, void(this._createBufferOnWrite = !1);
        const SF = this._buffers[WF][1];
        this._slotFrameId[WF] === this._currentFrameId && SF && !this._buffersEqual(this._bufferData, SF) && (WF = this._takeFreeSlot(!1)), this._bufferIndex = WF, this._buffer = this._buffers[WF][0], this.bindUniformBuffer();
        const CF = this._buffers[WF][1];
        CF && this._buffersEqual(this._bufferData, CF) || (CF && this._copyBuffer(this._bufferData, CF), this._bufferUpdatedLastFrame = !0, this._engine.updateUniformBuffer(this._buffer, this._bufferData)), this._slotFrameId[WF] = this._currentFrameId, this._slotGeneration[WF] = this._dataGeneration, this._needSync = !1, this._createBufferOnWrite = !1
      }
      _takeFreeSlot(FF) {
        for (let SF = 0; SF < this._freeSlots.length; ++SF) {
          const WF = this._freeSlots[SF];
          if (this._slotFrameId[WF] !== this._currentFrameId) return FF && (this._freeSlots[SF] = this._freeSlots[this._freeSlots.length - 1], this._freeSlots.pop()), WF
        }
        this._rebuild();
        const WF = this._buffers.length - 1;
        return FF || this._freeSlots.push(WF), WF
      }
      _releaseOwnerSlot(FF) {
        const WF = this._slotByOwner?.get(FF);
        if (void 0 === WF) return;
        this._slotByOwner.delete(FF);
        const SF = this._ownerListsBySlot.get(WF);
        SF && (this._removeOwnerBacklink(SF), this._ownerListsBySlot.delete(WF)), this._ownerCount--, this._freeSlots.push(WF)
      }
      _removeOwnerBacklink(FF) {
        const WF = FF.indexOf(this); - 1 !== WF && (FF[WF] = FF[FF.length - 1], FF.pop())
      }
      _createNewBuffer() {
        this._bufferIndex + 1 < this._buffers.length ? (this._bufferIndex++, this._buffer = this._buffers[this._bufferIndex][0], this._createBufferOnWrite = !1, this._needSync = !0) : this._rebuild()
      }
      _checkNewFrame() {
        this._trackUBOsInFrame && this._currentFrameId !== this._engine.frameId && (this._currentFrameId = this._engine.frameId, this._createBufferOnWrite = !1, this._buffers && this._buffers.length > 0 ? (1 === this._buffers.length ? this._needSync = !this._bufferUpdatedLastFrame : this._needSync = 0 !== this._bufferIndex, this._bufferIndex = 0, this._buffer = this._buffers[this._bufferIndex][0]) : this._bufferIndex = -1)
      }
      updateUniform(FF, WF, SF) {
        this._checkNewFrame();
        let AF = this._uniformLocations[FF];
        if (void 0 === AF) {
          if (this._buffer) return void CF.b.Error("Cannot add an uniform after UBO has been created. uniformName=" + FF);
          this.addUniform(FF, SF), AF = this._uniformLocations[FF]
        }
        if (this._buffer || this.create(), this._dynamic) {
          for (let FF = 0; FF < SF; FF++) this._bufferData[AF + FF] = WF[FF];
          this._dataGeneration++
        } else {
          let FF = !1;
          for (let CF = 0; CF < SF; CF++)(16 === SF && !this._engine._features.uniformBufferHardCheckMatrix || this._bufferData[AF + CF] !== Math.fround(WF[CF])) && (FF = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[AF + CF] = WF[CF]);
          this._needSync = this._needSync || FF, FF && this._dataGeneration++
        }
      }
      updateUniformArray(FF, WF, SF) {
        this._checkNewFrame();
        const uF = this._uniformLocations[FF];
        if (void 0 === uF) return void CF.b.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
        this._buffer || this.create();
        const hF = this._uniformArraySizes[FF];
        if (this._dynamic) {
          for (let FF = 0; FF < SF; FF++) this._bufferData[uF + FF] = WF[FF];
          this._dataGeneration++
        } else {
          let FF = !1,
            CF = 0,
            bW = 0;
          for (let dF = 0; dF < SF; dF++)
            if (this._bufferData[uF + 4 * bW + CF] !== AF.h.FloatRound(WF[dF]) && (FF = !0, this._createBufferOnWrite && this._createNewBuffer(), this._bufferData[uF + 4 * bW + CF] = WF[dF]), CF++, CF === hF.strideSize) {
              for (; CF < 4; CF++) this._bufferData[uF + 4 * bW + CF] = 0;
              CF = 0, bW++
            } this._needSync = this._needSync || FF, FF && this._dataGeneration++
        }
      }
      _cacheMatrix(FF, WF) {
        this._checkNewFrame();
        const SF = this._valueCache[FF],
          CF = WF.updateFlag;
        return (void 0 === SF || SF !== CF) && (this._valueCache[FF] = CF, !0)
      }
      _updateMatrix3x3ForUniform(FF, WF) {
        for (let SF = 0; SF < 3; SF++) uF._TempBuffer[4 * SF] = WF[3 * SF], uF._TempBuffer[4 * SF + 1] = WF[3 * SF + 1], uF._TempBuffer[4 * SF + 2] = WF[3 * SF + 2], uF._TempBuffer[4 * SF + 3] = 0;
        this.updateUniform(FF, uF._TempBuffer, 12)
      }
      _updateMatrix3x3ForEffect(FF, WF) {
        this._currentEffect.setMatrix3x3(FF, WF)
      }
      _updateMatrix2x2ForEffect(FF, WF) {
        this._currentEffect.setMatrix2x2(FF, WF)
      }
      _updateMatrix2x2ForUniform(FF, WF) {
        for (let SF = 0; SF < 2; SF++) uF._TempBuffer[4 * SF] = WF[2 * SF], uF._TempBuffer[4 * SF + 1] = WF[2 * SF + 1], uF._TempBuffer[4 * SF + 2] = 0, uF._TempBuffer[4 * SF + 3] = 0;
        this.updateUniform(FF, uF._TempBuffer, 8)
      }
      _updateFloatForEffect(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setFloat(FF + SF, WF)
      }
      _updateFloatForUniform(FF, WF) {
        uF._TempBuffer[0] = WF, this.updateUniform(FF, uF._TempBuffer, 1)
      }
      _updateFloat2ForEffect(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setFloat2(FF + CF, WF, SF)
      }
      _updateFloat2ForUniform(FF, WF, SF) {
        uF._TempBuffer[0] = WF, uF._TempBuffer[1] = SF, this.updateUniform(FF, uF._TempBuffer, 2)
      }
      _updateFloat3ForEffect(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setFloat3(FF + AF, WF, SF, CF)
      }
      _updateFloat3ForUniform(FF, WF, SF, CF) {
        uF._TempBuffer[0] = WF, uF._TempBuffer[1] = SF, uF._TempBuffer[2] = CF, this.updateUniform(FF, uF._TempBuffer, 3)
      }
      _updateFloat4ForEffect(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setFloat4(FF + uF, WF, SF, CF, AF)
      }
      _updateFloat4ForUniform(FF, WF, SF, CF, AF) {
        uF._TempBuffer[0] = WF, uF._TempBuffer[1] = SF, uF._TempBuffer[2] = CF, uF._TempBuffer[3] = AF, this.updateUniform(FF, uF._TempBuffer, 4)
      }
      _updateFloatArrayForEffect(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        switch (this._uniformArraySizes[FF]?.strideSize) {
          case 2:
            this._currentEffect.setFloatArray2(FF + SF, WF);
            break;
          case 3:
            this._currentEffect.setFloatArray3(FF + SF, WF);
            break;
          case 4:
            this._currentEffect.setFloatArray4(FF + SF, WF);
            break;
          default:
            this._currentEffect.setFloatArray(FF + SF, WF)
        }
      }
      _updateFloatArrayForUniform(FF, WF) {
        this.updateUniformArray(FF, WF, WF.length)
      }
      _updateArrayForEffect(FF, WF) {
        this._currentEffect.setArray(FF, WF)
      }
      _updateArrayForUniform(FF, WF) {
        this.updateUniformArray(FF, WF, WF.length)
      }
      _updateIntArrayForEffect(FF, WF) {
        this._currentEffect.setIntArray(FF, WF)
      }
      _updateIntArrayForUniform(FF, WF) {
        uF._TempBufferInt32View.set(WF), this.updateUniformArray(FF, uF._TempBuffer, WF.length)
      }
      _updateUIntArrayForEffect(FF, WF) {
        this._currentEffect.setUIntArray(FF, WF)
      }
      _updateUIntArrayForUniform(FF, WF) {
        uF._TempBufferUInt32View.set(WF), this.updateUniformArray(FF, uF._TempBuffer, WF.length)
      }
      _updateMatrixForEffect(FF, WF) {
        this._currentEffect.setMatrix(FF, WF)
      }
      _updateMatrixForUniform(FF, WF) {
        this._cacheMatrix(FF, WF) && this.updateUniform(FF, WF.kRF(), 16)
      }
      _updateMatricesForEffect(FF, WF) {
        this._currentEffect.setMatrices(FF, WF)
      }
      _updateMatricesForUniform(FF, WF) {
        this.updateUniform(FF, WF, WF.length)
      }
      _updateVector3ForEffect(FF, WF) {
        this._currentEffect.setVector3(FF, WF)
      }
      _updateVector3ForUniform(FF, WF) {
        uF._TempBuffer[0] = WF.x, uF._TempBuffer[1] = WF.y, uF._TempBuffer[2] = WF.z, this.updateUniform(FF, uF._TempBuffer, 3)
      }
      _updateVector4ForEffect(FF, WF) {
        this._currentEffect.setVector4(FF, WF)
      }
      _updateVector4ForUniform(FF, WF) {
        uF._TempBuffer[0] = WF.x, uF._TempBuffer[1] = WF.y, uF._TempBuffer[2] = WF.z, uF._TempBuffer[3] = WF.w, this.updateUniform(FF, uF._TempBuffer, 4)
      }
      _updateColor3ForEffect(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setColor3(FF + SF, WF)
      }
      _updateColor3ForUniform(FF, WF) {
        uF._TempBuffer[0] = WF.r, uF._TempBuffer[1] = WF.g, uF._TempBuffer[2] = WF.b, this.updateUniform(FF, uF._TempBuffer, 3)
      }
      _updateColor4ForEffect(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setColor4(FF + CF, WF, SF)
      }
      _updateDirectColor4ForEffect(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setDirectColor4(FF + SF, WF)
      }
      _updateColor4ForUniform(FF, WF, SF) {
        uF._TempBuffer[0] = WF.r, uF._TempBuffer[1] = WF.g, uF._TempBuffer[2] = WF.b, uF._TempBuffer[3] = SF, this.updateUniform(FF, uF._TempBuffer, 4)
      }
      _updateDirectColor4ForUniform(FF, WF) {
        uF._TempBuffer[0] = WF.r, uF._TempBuffer[1] = WF.g, uF._TempBuffer[2] = WF.b, uF._TempBuffer[3] = WF.a, this.updateUniform(FF, uF._TempBuffer, 4)
      }
      _updateIntForEffect(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setInt(FF + SF, WF)
      }
      _updateIntForUniform(FF, WF) {
        uF._TempBufferInt32View[0] = WF, this.updateUniform(FF, uF._TempBuffer, 1)
      }
      _updateInt2ForEffect(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setInt2(FF + CF, WF, SF)
      }
      _updateInt2ForUniform(FF, WF, SF) {
        uF._TempBufferInt32View[0] = WF, uF._TempBufferInt32View[1] = SF, this.updateUniform(FF, uF._TempBuffer, 2)
      }
      _updateInt3ForEffect(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setInt3(FF + AF, WF, SF, CF)
      }
      _updateInt3ForUniform(FF, WF, SF, CF) {
        uF._TempBufferInt32View[0] = WF, uF._TempBufferInt32View[1] = SF, uF._TempBufferInt32View[2] = CF, this.updateUniform(FF, uF._TempBuffer, 3)
      }
      _updateInt4ForEffect(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setInt4(FF + uF, WF, SF, CF, AF)
      }
      _updateInt4ForUniform(FF, WF, SF, CF, AF) {
        uF._TempBufferInt32View[0] = WF, uF._TempBufferInt32View[1] = SF, uF._TempBufferInt32View[2] = CF, uF._TempBufferInt32View[3] = AF, this.updateUniform(FF, uF._TempBuffer, 4)
      }
      _updateUIntForEffect(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        this._currentEffect.setUInt(FF + SF, WF)
      }
      _updateUIntForUniform(FF, WF) {
        uF._TempBufferUInt32View[0] = WF, this.updateUniform(FF, uF._TempBuffer, 1)
      }
      _updateUInt2ForEffect(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        this._currentEffect.setUInt2(FF + CF, WF, SF)
      }
      _updateUInt2ForUniform(FF, WF, SF) {
        uF._TempBufferUInt32View[0] = WF, uF._TempBufferUInt32View[1] = SF, this.updateUniform(FF, uF._TempBuffer, 2)
      }
      _updateUInt3ForEffect(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
        this._currentEffect.setUInt3(FF + AF, WF, SF, CF)
      }
      _updateUInt3ForUniform(FF, WF, SF, CF) {
        uF._TempBufferUInt32View[0] = WF, uF._TempBufferUInt32View[1] = SF, uF._TempBufferUInt32View[2] = CF, this.updateUniform(FF, uF._TempBuffer, 3)
      }
      _updateUInt4ForEffect(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "";
        this._currentEffect.setUInt4(FF + uF, WF, SF, CF, AF)
      }
      _updateUInt4ForUniform(FF, WF, SF, CF, AF) {
        uF._TempBufferUInt32View[0] = WF, uF._TempBufferUInt32View[1] = SF, uF._TempBufferUInt32View[2] = CF, uF._TempBufferUInt32View[3] = AF, this.updateUniform(FF, uF._TempBuffer, 4)
      }
      setTexture(FF, WF) {
        this._currentEffect.setTexture(FF, WF)
      }
      setTextureArray(FF, WF) {
        this._currentEffect.setTextureArray(FF, WF)
      }
      bindTexture(FF, WF) {
        this._currentEffect._bindTexture(FF, WF)
      }
      updateUniformDirectly(FF, WF) {
        this.updateUniform(FF, WF, WF.length), this.update()
      }
      bindToEffect(FF, WF) {
        this._currentEffect = FF, this._currentEffectName = WF
      }
      bindUniformBuffer() {
        !this._noUBO && this._buffer && this._currentEffect && this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName)
      }
      unbindEffect() {
        this._currentEffect = void 0, this._currentEffectName = void 0
      }
      setDataBuffer(FF) {
        if (!this._buffers) return this._buffer === FF;
        for (let WF = 0; WF < this._buffers.length; ++WF) {
          if (this._buffers[WF][0] === FF) return this._bufferIndex = WF, this._buffer = FF, this._createBufferOnWrite = !1, this._currentEffect = void 0, this._buffers.length > 1 && this._buffers[WF][1] && (this._bufferData.set(this._buffers[WF][1]), this._dataGeneration++), this._valueCache = {}, this._currentFrameId = this._engine.frameId, !0
        }
        return !1
      }
      has(FF) {
        return void 0 !== this._uniformLocations[FF]
      }
      dispose() {
        if (this._noUBO) return;
        const FF = this._engine._uniformBuffers,
          WF = FF.indexOf(this);
        if (-1 !== WF && (FF[WF] = FF[FF.length - 1], FF.pop()), this._trackUBOsInFrame && this._buffers) {
          this._resetOwnerSlots();
          for (let FF = 0; FF < this._buffers.length; ++FF) {
            const WF = this._buffers[FF][0];
            this._engine._releaseBuffer(WF)
          }
          this._buffers = [], this._buffer = null, this._bufferIndex = -1
        } else this._buffer && this._engine._releaseBuffer(this._buffer) && (this._buffer = null)
      }
    }
    uF._MAX_UNIFORM_SIZE = 256, uF._TempBuffer = new Float32Array(uF._MAX_UNIFORM_SIZE), uF._TempBufferInt32View = new Int32Array(uF._TempBuffer.buffer), uF._TempBufferUInt32View = new Uint32Array(uF._TempBuffer.buffer)
  },
  37888: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF
    });
    var CF = SF(37893);
    class AF extends CF.d {
      constructor(FF) {
        super(), this._buffer = FF
      }
      get underlyingResource() {
        return this._buffer
      }
    }
  },
  37983: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => dF,
      h: () => PF
    });
    const CF = "__bjs_serializable__",
      AF = new WeakMap;

    function uF(FF, WF) {
      return Object.prototype.hasOwnProperty.call(FF, WF)
    }
    const hF = function() {
      let FF = Symbol.metadata;
      return FF || (FF = Symbol("Symbol.metadata"), Object.defineProperty(Symbol, "metadata", {
        configurable: !0,
        writable: !0,
        value: FF
      })), FF
    }();

    function bW(FF) {
      return "function" === typeof FF ? FF : FF?.constructor
    }

    function dF(FF) {
      if (!FF) throw new Error(`Decorator metadata is unavailable; the Symbol.metadata (${String(hF)}) polyfill must run before decorated classes are evaluated.`);
      return uF(FF, CF) || (FF[CF] = {}), FF[CF]
    }

    function PF(FF) {
      const WF = bW(FF),
        SF = WF ? WF[hF] : void 0;
      if (!SF) return {};
      const dF = AF.get(SF);
      if (dF) return dF;
      const PF = {},
        RF = [];
      let iW = SF;
      for (; iW;) RF.push(iW), iW = Object.getPrototypeOf(iW);
      for (const AF of RF)
        if (uF(AF, CF)) {
          const FF = AF[CF];
          for (const WF in FF) PF[WF] = FF[WF]
        } return AF.set(SF, PF), PF
    }
  },
  37974: (FF, WF, SF) => {
    SF.d(WF, {
      C: () => bW,
      E: () => RF,
      G: () => iW,
      H: () => hF,
      e: () => aW,
      i: () => uF,
      k: () => TF,
      l: () => EF,
      o: () => dF,
      s: () => QF,
      u: () => PF,
      v: () => gW,
      x: () => eF,
      y: () => rW
    });
    var CF = SF(37983);

    function AF(FF, WF) {
      return (SF, AF) => {
        if (!AF.metadata) return;
        const uF = String(AF.name),
          hF = (0, CF.d)(AF.metadata);
        hF[uF] || (hF[uF] = {
          type: FF,
          sourceName: WF
        })
      }
    }

    function uF(FF) {
      return function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (SF, CF) => {
          const AF = WF || "_" + String(CF.name);
          return {
            init(FF) {
              return void 0 === FF && AF in this || (this[AF] = FF), FF
            },
            get() {
              return this[AF]
            },
            set(WF) {
              "function" === typeof this[AF]?.equals && this[AF].equals(WF) || this[AF] !== WF && (this[AF] = WF, this[FF]())
            }
          }
        }
      }(FF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null)
    }

    function hF(FF) {
      return AF(0, FF)
    }

    function bW(FF) {
      return AF(1, FF)
    }

    function dF(FF) {
      return AF(2, FF)
    }

    function PF(FF) {
      return AF(3, FF)
    }

    function RF(FF) {
      return AF(4, FF)
    }

    function iW(FF) {
      return AF(5, FF)
    }

    function eF(FF) {
      return AF(6, FF)
    }

    function EF(FF) {
      return AF(7, FF)
    }

    function QF(FF) {
      return AF(8, FF)
    }

    function rW(FF) {
      return AF(10, FF)
    }

    function gW(FF) {
      return AF(12, FF)
    }

    function tW(FF, WF, SF) {
      const CF = String(WF.name);
      let AF = null;
      const uF = function() {
        if (null === AF) {
          AF = FF, "undefined" !== typeof _native && _native[CF] && (AF = SF(_native[CF], FF));
          const hF = this && (WF.static ? this : Object.getPrototypeOf(this));
          hF?.[CF] === uF && (hF[CF] = AF)
        }
        for (var hF = arguments.length, bW = new Array(hF), dF = 0; dF < hF; dF++) bW[dF] = arguments[dF];
        return AF.apply(this, bW)
      };
      return uF
    }

    function TF(FF, WF) {
      return tW(FF, WF, (FF => FF))
    }

    function aW(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return (SF, CF) => {
        const AF = WF || "_" + String(CF.name);
        return {
          get() {
            return this[AF]?.value
          },
          set(WF) {
            "function" === typeof this[AF]?.value?.equals && this[AF].value.equals(WF) || this[AF].value !== WF && (this[AF].value = WF, this[FF]())
          }
        }
      }
    }
    TF.filter = function(FF) {
      return (WF, SF) => tW(WF, SF, ((WF, SF) => function() {
        for (var CF = arguments.length, AF = new Array(CF), uF = 0; uF < CF; uF++) AF[uF] = arguments[uF];
        return FF(...AF) ? WF(...AF) : SF.apply(this, AF)
      }))
    }
  },
  37994: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => PF
    });
    var CF = SF(37855),
      AF = SF(38e3),
      uF = SF(35678),
      hF = SF(35623),
      bW = SF(37983);
    const dF = function(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const uF = FF();
      AF.d && AF.d.HasTags(WF) && AF.d.AddTagsTo(uF, AF.d.GetTags(WF, !0));
      const hF = (0, bW.h)(uF),
        dF = {};
      for (const AF in hF) {
        const FF = hF[AF],
          bW = WF[AF],
          RF = FF.type;
        if (void 0 !== bW && null !== bW && ("uniqueId" !== AF || PF.AllowLoadingUniqueId)) switch (RF) {
          case 0:
          case 6:
          case 9:
          case 11:
            "function" === typeof bW.slice ? uF[AF] = bW.slice() : uF[AF] = bW;
            break;
          case 1:
            CF.cloneTexturesOnlyOnce && dF[bW.uniqueId] ? uF[AF] = dF[bW.uniqueId] : (uF[AF] = SF || bW.isRenderTarget ? bW : bW.clone(), dF[bW.uniqueId] = uF[AF]);
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
            uF[AF] = SF ? bW : bW.clone()
        }
      }
      return uF
    };
    class PF {
      static AppendSerializedAnimations(FF, WF) {
        if (FF.animations) {
          WF.animations = [];
          for (let SF = 0; SF < FF.animations.length; SF++) {
            const CF = FF.animations[SF];
            WF.animations.push(CF.serialize())
          }
        }
      }
      static Serialize(FF, WF) {
        WF || (WF = {}), AF.d && (WF.tags = AF.d.GetTags(FF));
        const SF = (0, bW.h)(FF);
        for (const CF in SF) {
          const AF = SF[CF],
            uF = AF.sourceName || CF,
            hF = AF.type,
            bW = FF[CF];
          if (void 0 !== bW && null !== bW && ("uniqueId" !== CF || PF.AllowLoadingUniqueId)) switch (hF) {
            case 0:
              Array.isArray(bW) ? WF[uF] = bW.slice() : WF[uF] = bW;
              break;
            case 1:
            case 3:
            case 7:
            case 9:
              WF[uF] = bW.serialize();
              break;
            case 2:
            case 4:
            case 5:
            case 8:
            case 10:
            case 12:
            case 13:
              WF[uF] = bW.kRF();
              break;
            case 6:
            case 11:
              WF[uF] = bW.id
          }
        }
        return WF
      }
      static ParseProperties(FF, WF, SF, CF) {
        CF || (CF = "");
        const AF = (0, bW.h)(WF);
        for (const bW in AF) {
          const dF = AF[bW],
            RF = FF[dF.sourceName || bW],
            iW = dF.type;
          if (void 0 !== RF && null !== RF && ("uniqueId" !== bW || PF.AllowLoadingUniqueId)) {
            const FF = WF;
            switch (iW) {
              case 0:
                FF[bW] = RF;
                break;
              case 1:
                SF && (FF[bW] = PF._TextureParser(RF, SF, CF));
                break;
              case 2:
                FF[bW] = uF.e.FromArray(RF);
                break;
              case 3:
                FF[bW] = PF._FresnelParametersParser(RF);
                break;
              case 4:
                FF[bW] = hF.n.FromArray(RF);
                break;
              case 5:
                FF[bW] = hF.r.FromArray(RF);
                break;
              case 6:
                SF && (FF[bW] = SF.getLastMeshById(RF));
                break;
              case 7:
                FF[bW] = PF._ColorCurvesParser(RF);
                break;
              case 8:
                FF[bW] = uF.i.FromArray(RF);
                break;
              case 9:
                FF[bW] = PF._ImageProcessingConfigurationParser(RF);
                break;
              case 10:
                FF[bW] = hF.e.FromArray(RF);
                break;
              case 11:
                SF && (FF[bW] = SF.getCameraById(RF));
                break;
              case 12:
                FF[bW] = hF.b.FromArray(RF);
                break;
              case 13:
                FF[bW] = hF.v.FromArray(RF)
            }
          }
        }
      }
      static Parse(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const uF = FF();
        return AF.d && AF.d.AddTagsTo(uF, WF.tags), PF.ParseProperties(WF, uF, SF, CF), uF
      }
      static Clone(FF, WF) {
        return dF(FF, WF, !1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
      }
      static Instanciate(FF, WF) {
        return dF(FF, WF, !0)
      }
    }
    PF.AllowLoadingUniqueId = !1, PF._ImageProcessingConfigurationParser = FF => {
      throw (0, CF.l)("ImageProcessingConfiguration")
    }, PF._FresnelParametersParser = FF => {
      throw (0, CF.l)("FresnelParameters")
    }, PF._ColorCurvesParser = FF => {
      throw (0, CF.l)("ColorCurves")
    }, PF._TextureParser = (FF, WF, SF) => {
      throw (0, CF.l)("Texture")
    }
  },
  37911: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => AF
    });
    var CF = SF(37873);
    class AF {
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
        this._totalValueCount++, this._current = 0, this._hasCurrentValue = AF.Enabled, this._lastSecValueCount++
      }
      addCount(FF, WF) {
        AF.Enabled && (this._current += FF, this._hasCurrentValue = !0, WF && this._fetchResult())
      }
      beginMonitoring() {
        AF.Enabled && (this._startMonitoringTime = CF.d.Now)
      }
      endMonitoring() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (!AF.Enabled) return;
        FF && this.fetchNewFrame();
        const WF = CF.d.Now;
        this._current = WF - this._startMonitoringTime, this._hasCurrentValue = !0, FF && this._fetchResult()
      }
      wL() {
        this._fetchResult()
      }
      _fetchResult() {
        if (!this._hasCurrentValue) return;
        this._totalAccumulated += this._current, this._lastSecAccumulated += this._current, this._hasResult ? (this._min = Math.min(this._min, this._current), this._max = Math.max(this._max, this._current)) : (this._min = this._current, this._max = this._current, this._hasResult = !0), this._average = this._totalAccumulated / this._totalValueCount;
        const FF = CF.d.Now;
        FF - this._lastSecTime > 1e3 && (this._lastSecAverage = this._lastSecAccumulated / this._lastSecValueCount, this._lastSecTime = FF, this._lastSecAccumulated = 0, this._lastSecValueCount = 0)
      }
    }
    AF.Enabled = !0
  },
  38081: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => AF,
      f: () => CF
    });
    class CF {
      constructor(FF) {
        this.length = 0, this.data = new Array(FF), this._id = CF._GlobalId++
      }
      push(FF) {
        this.data[this.length++] = FF, this.length > this.data.length && (this.data.length *= 2)
      }
      forEach(FF) {
        for (let WF = 0; WF < this.length; WF++) FF(this.data[WF])
      }
      sort(FF) {
        this.data.sort(FF)
      }
      reset() {
        this.length = 0
      }
      dispose() {
        this.reset(), this.data && (this.data.length = 0)
      }
      concat(FF) {
        if (0 !== FF.length) {
          this.length + FF.length > this.data.length && (this.data.length = 2 * (this.length + FF.length));
          for (let WF = 0; WF < FF.length; WF++) this.data[this.length++] = (FF.data || FF)[WF]
        }
      }
      indexOf(FF) {
        const WF = this.data.indexOf(FF);
        return WF >= this.length ? -1 : WF
      }
      contains(FF) {
        return -1 !== this.indexOf(FF)
      }
    }
    CF._GlobalId = 0;
    class AF extends CF {
      constructor() {
        super(...arguments), this._duplicateId = 0
      }
      push(FF) {
        super.push(FF), FF.__smartArrayFlags || (FF.__smartArrayFlags = {}), FF.__smartArrayFlags[this._id] = this._duplicateId
      }
      pushNoDuplicate(FF) {
        return (!FF.__smartArrayFlags || FF.__smartArrayFlags[this._id] !== this._duplicateId) && (this.push(FF), !0)
      }
      reset() {
        super.reset(), this._duplicateId++
      }
      concatWithNoDuplicate(FF) {
        if (0 !== FF.length) {
          this.length + FF.length > this.data.length && (this.data.length = 2 * (this.length + FF.length));
          for (let WF = 0; WF < FF.length; WF++) {
            const SF = (FF.data || FF)[WF];
            this.pushNoDuplicate(SF)
          }
        }
      }
    }
  },
  38e3: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF
    });
    class CF {
      static Eval(FF, WF) {
        return "true" === (FF = FF.match(/\([^()]*\)/g) ? FF.replace(/\([^()]*\)/g, (FF => (FF = FF.slice(1, FF.length - 1), CF._HandleParenthesisContent(FF, WF)))) : CF._HandleParenthesisContent(FF, WF)) || "false" !== FF && CF.Eval(FF, WF)
      }
      static _HandleParenthesisContent(FF, WF) {
        let SF;
        WF = WF || (FF => "true" === FF);
        const AF = FF.split("||");
        for (const uF in AF)
          if (Object.prototype.hasOwnProperty.call(AF, uF)) {
            let FF = CF._SimplifyNegation(AF[uF].trim());
            const hF = FF.split("&&");
            if (hF.length > 1)
              for (let AF = 0; AF < hF.length; ++AF) {
                const uF = CF._SimplifyNegation(hF[AF].trim());
                if (SF = "true" !== uF && "false" !== uF ? "!" === uF[0] ? !WF(uF.substring(1)) : WF(uF) : "true" === uF, !SF) {
                  FF = "false";
                  break
                }
              }
            if (SF || "true" === FF) {
              SF = !0;
              break
            }
            SF = "true" !== FF && "false" !== FF ? "!" === FF[0] ? !WF(FF.substring(1)) : WF(FF) : "true" === FF
          } return SF ? "true" : "false"
      }
      static _SimplifyNegation(FF) {
        return "!true" === (FF = (FF = FF.replace(/^[\s!]+/, (FF => (FF = FF.replace(/[\s]/g, (() => ""))).length % 2 ? "!" : ""))).trim()) ? FF = "false" : "!false" === FF && (FF = "true"), FF
      }
    }
    class AF {
      static EnableFor(FF) {
        FF._tags = FF._tags || {}, FF.hasTags = () => AF.HasTags(FF), FF.addTags = WF => AF.AddTagsTo(FF, WF), FF.removeTags = WF => AF.RemoveTagsFrom(FF, WF), FF.matchesTagsQuery = WF => AF.MatchesQuery(FF, WF)
      }
      static DisableFor(FF) {
        delete FF._tags, delete FF.hasTags, delete FF.addTags, delete FF.removeTags, delete FF.matchesTagsQuery
      }
      static HasTags(FF) {
        if (!FF._tags) return !1;
        const WF = FF._tags;
        for (const SF in WF)
          if (Object.prototype.hasOwnProperty.call(WF, SF)) return !0;
        return !1
      }
      static GetTags(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!FF._tags) return null;
        if (WF) {
          const WF = [];
          for (const SF in FF._tags) Object.prototype.hasOwnProperty.call(FF._tags, SF) && !0 === FF._tags[SF] && WF.push(SF);
          return WF.join(" ")
        }
        return FF._tags
      }
      static AddTagsTo(FF, WF) {
        if (!WF) return;
        if ("string" !== typeof WF) return;
        const SF = WF.split(" ");
        for (const CF of SF) AF._AddTagTo(FF, CF)
      }
      static _AddTagTo(FF, WF) {
        "" !== (WF = WF.trim()) && "true" !== WF && "false" !== WF && (WF.match(/[\s]/) || WF.match(/^([!]|([|]|[&]){2})/) || (AF.EnableFor(FF), FF._tags[WF] = !0))
      }
      static RemoveTagsFrom(FF, WF) {
        if (!AF.HasTags(FF)) return;
        const SF = WF.split(" ");
        for (const CF in SF) AF._RemoveTagFrom(FF, SF[CF])
      }
      static _RemoveTagFrom(FF, WF) {
        delete FF._tags[WF]
      }
      static MatchesQuery(FF, WF) {
        return void 0 === WF || ("" === WF ? AF.HasTags(FF) : CF.Eval(WF, (WF => AF.HasTags(FF) && FF._tags[WF])))
      }
    }
  },
  38114: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF
    });
    var CF = SF(38109),
      AF = SF(35647);
    class uF {
      constructor(FF) {
        this._vertexBuffers = {}, this._activePostProcesses = [], this.onBeforeRenderObservable = new AF.b, this._scene = FF
      }
      _prepareBuffers() {
        if (this._vertexBuffers[CF.k.PositionKind]) return;
        const FF = [];
        FF.push(1, 1), FF.push(-1, 1), FF.push(-1, -1), FF.push(1, -1), this._vertexBuffers[CF.k.PositionKind] = new CF.k(this._scene.sC(), FF, CF.k.PositionKind, !1, !1, 2), this._buildIndexBuffer()
      }
      _buildIndexBuffer() {
        const FF = [];
        FF.push(0), FF.push(1), FF.push(2), FF.push(0), FF.push(2), FF.push(3), this._indexBuffer = this._scene.sC().createIndexBuffer(FF)
      }
      _getActivePostProcesses(FF) {
        const WF = this._activePostProcesses;
        WF.length = 0;
        for (let SF = 0; SF < FF.length; SF++) {
          const CF = FF[SF];
          CF && WF.push(CF)
        }
        return WF
      }
      _rebuild() {
        const FF = this._vertexBuffers[CF.k.PositionKind];
        FF && (FF._rebuild(), this._buildIndexBuffer())
      }
      _prepareFrame() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        const SF = this._scene.activeCamera;
        return !!SF && (WF = WF || this._getActivePostProcesses(SF._postProcesses), !(!WF || 0 === WF.length || !this._scene.postProcessesEnabled) && (WF[0].activate(SF, FF, null !== WF && void 0 !== WF), !0))
      }
      directRender(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          uF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          hF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : FF.length;
        const bW = this._scene.sC();
        for (let dF = 0; dF < hF; dF++) {
          dF < FF.length - 1 ? FF[dF + 1].activate(this._scene.activeCamera || this._scene, WF?.texture) : (WF ? bW.bindFramebuffer(WF, CF, void 0, void 0, SF, AF) : uF || bW.restoreDefaultFramebuffer(), bW._debugInsertMarker?.(`post process ${FF[dF].name} output`));
          const hF = FF[dF],
            PF = hF.apply();
          PF && (hF.onBeforeRenderObservable.notifyObservers(PF), this._prepareBuffers(), bW.bindBuffers(this._vertexBuffers, this._indexBuffer, PF), bW.drawElementsType(0, 0, 6), hF.onAfterRenderObservable.notifyObservers(PF))
        }
        bW.setDepthBuffer(!0), bW.setDepthWrite(!0)
      }
      _finalizeFrame(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const uF = this._scene.activeCamera;
        if (!uF) return;
        if (this.onBeforeRenderObservable.notifyObservers(this), 0 === (CF = CF || this._getActivePostProcesses(uF._postProcesses)).length || !this._scene.postProcessesEnabled) return;
        const hF = this._scene.sC();
        for (let bW = 0, dF = CF.length; bW < dF; bW++) {
          const PF = CF[bW];
          if (bW < dF - 1 ? PF._outputTexture = CF[bW + 1].activate(uF, WF?.texture) : (WF ? (hF.bindFramebuffer(WF, SF, void 0, void 0, AF), PF._outputTexture = WF) : (hF.restoreDefaultFramebuffer(), PF._outputTexture = null), hF._debugInsertMarker?.(`post process ${CF[bW].name} output`)), FF) break;
          const RF = PF.apply();
          RF && (PF.onBeforeRenderObservable.notifyObservers(RF), this._prepareBuffers(), hF.bindBuffers(this._vertexBuffers, this._indexBuffer, RF), hF.drawElementsType(0, 0, 6), PF.onAfterRenderObservable.notifyObservers(RF))
        }
        hF.setDepthBuffer(!0), hF.setDepthWrite(!0), hF.setAlphaMode(0)
      }
      dispose() {
        const FF = this._vertexBuffers[CF.k.PositionKind];
        FF && (FF.dispose(), this._vertexBuffers[CF.k.PositionKind] = null), this._indexBuffer && (this._scene.sC()._releaseBuffer(this._indexBuffer), this._indexBuffer = null)
      }
    }
  },
  38128: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF
    });
    var CF = SF(38081),
      AF = SF(35623);
    class uF {
      set opaqueSortCompareFn(FF) {
        this._opaqueSortCompareFn = FF || uF.PainterSortCompare, this._renderOpaque = this._renderOpaqueSorted
      }
      set alphaTestSortCompareFn(FF) {
        this._alphaTestSortCompareFn = FF || uF.PainterSortCompare, this._renderAlphaTest = this._renderAlphaTestSorted
      }
      set transparentSortCompareFn(FF) {
        this._transparentSortCompareFn = FF || uF.defaultTransparentSortCompare, this._renderTransparent = this._renderTransparentSorted
      }
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          uF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        this.index = FF, this._opaqueSubMeshes = new CF.f(256), this._transparentSubMeshes = new CF.f(256), this._alphaTestSubMeshes = new CF.f(256), this._depthOnlySubMeshes = new CF.f(256), this._particleSystems = new CF.f(256), this._spriteManagers = new CF.f(256), this._empty = !0, this._edgesRenderers = new CF.b(16), this.disableDepthPrePass = !1, this._scene = WF, this.opaqueSortCompareFn = SF, this.alphaTestSortCompareFn = AF, this.transparentSortCompareFn = uF
      }
      render(FF, WF, SF, CF) {
        let AF = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          uF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          hF = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          bW = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          dF = arguments.length > 8 ? arguments[8] : void 0;
        if (FF) return void FF(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
        const PF = this._scene.sC();
        AF && 0 !== this._depthOnlySubMeshes.length && (PF.setColorWrite(!1), this._renderAlphaTest(this._depthOnlySubMeshes), PF.setColorWrite(!0)), uF && 0 !== this._opaqueSubMeshes.length && this._renderOpaque(this._opaqueSubMeshes), hF && 0 !== this._alphaTestSubMeshes.length && this._renderAlphaTest(this._alphaTestSubMeshes);
        const RF = PF.getStencilBuffer();
        if (PF.setStencilBuffer(!1), WF && this._renderSprites(), SF && this._renderParticles(CF), this.onBeforeTransparentRendering && this.onBeforeTransparentRendering(), bW && (dF || 0 !== this._transparentSubMeshes.length || this._scene.useOrderIndependentTransparency)) {
          if (PF.setStencilBuffer(RF), dF) dF(this._transparentSubMeshes, this);
          else if (this._scene.useOrderIndependentTransparency) {
            const FF = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
            FF.length && this._renderTransparent(FF)
          } else this._renderTransparent(this._transparentSubMeshes);
          PF.setAlphaMode(0)
        }
        if (PF.setStencilBuffer(!1), uF && this._edgesRenderers.length) {
          for (let FF = 0; FF < this._edgesRenderers.length; FF++) this._edgesRenderers.data[FF].render();
          PF.setAlphaMode(0)
        }
        PF.setStencilBuffer(RF)
      }
      _renderOpaqueSorted(FF) {
        uF._RenderSorted(FF, this._opaqueSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderAlphaTestSorted(FF) {
        uF._RenderSorted(FF, this._alphaTestSortCompareFn, this._scene.activeCamera, !1, this.disableDepthPrePass)
      }
      _renderTransparentSorted(FF) {
        uF._RenderSorted(FF, this._transparentSortCompareFn, this._scene.activeCamera, !0, this.disableDepthPrePass)
      }
      static _RenderSorted(FF, WF, SF, CF, hF) {
        let bW, dF = 0;
        const PF = SF ? SF.globalPosition : uF._ZeroVector;
        if (CF && WF !== uF.PainterSortCompare)
          for (; dF < FF.length; dF++) bW = FF.data[dF], bW._alphaIndex = bW.getMesh().alphaIndex, bW._distanceToCamera = AF.r.Distance(bW.JWF().nPF.centerWorld, PF);
        const RF = FF.length === FF.data.length ? FF.data : FF.data.slice(0, FF.length);
        WF && RF.sort(WF);
        const iW = RF[0].getMesh().OWF();
        for (dF = 0; dF < RF.length; dF++) {
          if (bW = RF[dF], iW._activeMeshesFrozenButKeepClipping && !bW.isInFrustum(iW._frustumPlanes)) continue;
          let FF = !1;
          if (CF) {
            const WF = bW.XC();
            if (WF && WF.needDepthPrePass && !hF) {
              FF = !0;
              const SF = WF.OWF().sC();
              SF.setColorWrite(!1), SF.setAlphaMode(0), bW.render(!1), SF.setColorWrite(!0)
            }
          }
          const WF = bW._renderingMesh;
          !FF && WF._renderRunFollower(bW, CF) || bW.render(CF)
        }
      }
      static defaultTransparentSortCompare(FF, WF) {
        return FF._alphaIndex > WF._alphaIndex ? 1 : FF._alphaIndex < WF._alphaIndex ? -1 : uF.backToFrontSortCompare(FF, WF)
      }
      static backToFrontSortCompare(FF, WF) {
        return FF._distanceToCamera < WF._distanceToCamera ? 1 : FF._distanceToCamera > WF._distanceToCamera ? -1 : 0
      }
      static frontToBackSortCompare(FF, WF) {
        return FF._distanceToCamera < WF._distanceToCamera ? -1 : FF._distanceToCamera > WF._distanceToCamera ? 1 : 0
      }
      static PainterSortCompare(FF, WF) {
        const SF = FF.getMesh(),
          CF = WF.getMesh();
        return SF.material && CF.material ? SF.material.uniqueId - CF.material.uniqueId : SF.uniqueId - CF.uniqueId
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
      dispatch(FF, WF, SF) {
        void 0 === WF && (WF = FF.getMesh()), void 0 === SF && (SF = FF.XC()), null !== SF && void 0 !== SF && (SF.needAlphaBlendingForMesh(WF) ? this._transparentSubMeshes.push(FF) : SF.needAlphaTestingForMesh(WF) ? (SF.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(FF), this._alphaTestSubMeshes.push(FF)) : (SF.needDepthPrePass && !this.disableDepthPrePass && this._depthOnlySubMeshes.push(FF), this._opaqueSubMeshes.push(FF)), WF._renderingGroup = this, WF._edgesRenderer && WF.isEnabled() && WF.isVisible && WF._edgesRenderer.isEnabled && this._edgesRenderers.pushNoDuplicate(WF._edgesRenderer), this._empty = !1)
      }
      dispatchSprites(FF) {
        this._spriteManagers.push(FF), this._empty = !1
      }
      dispatchParticles(FF) {
        this._particleSystems.push(FF), this._empty = !1
      }
      _renderParticles(FF) {
        if (0 === this._particleSystems.length) return;
        const WF = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let SF = 0; SF < this._particleSystems.length; SF++) {
          const CF = this._particleSystems.data[SF];
          if (0 === (WF && WF.layerMask & CF.layerMask)) continue;
          const AF = CF.emitter;
          AF.position && FF && -1 === FF.indexOf(AF) || this._scene._activeParticles.addCount(CF.render(), !1)
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene)
      }
      _renderSprites() {
        if (!this._scene.spritesEnabled || 0 === this._spriteManagers.length) return;
        const FF = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let WF = 0; WF < this._spriteManagers.length; WF++) {
          const SF = this._spriteManagers.data[WF];
          0 !== (FF && FF.layerMask & SF.layerMask) && SF.render()
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene)
      }
    }
    uF._ZeroVector = AF.r.Zero()
  },
  38124: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => uF
    });
    var CF = SF(38128);
    class AF {}
    class uF {
      get disableDepthPrePass() {
        return this._disableDepthPrePass
      }
      set disableDepthPrePass(FF) {
        this._disableDepthPrePass = FF;
        for (const WF of this._renderingGroups) WF.disableDepthPrePass = FF
      }
      get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames
      }
      set maintainStateBetweenFrames(FF) {
        FF !== this._maintainStateBetweenFrames && (this._maintainStateBetweenFrames = FF, this._maintainStateBetweenFrames || this.restoreDispachedFlags())
      }
      restoreDispachedFlags() {
        for (const FF of this._scene.meshes)
          if (FF.Om)
            for (const WF of FF.Om) WF._wasDispatched = !1;
        if (this._scene.spriteManagers)
          for (const FF of this._scene.spriteManagers) FF._wasDispatched = !1;
        for (const FF of this._scene.Zm) FF._wasDispatched = !1
      }
      constructor(FF) {
        this._useSceneAutoClearSetup = !1, this._disableDepthPrePass = !1, this._renderingGroups = new Array, this._autoClearDepthStencil = {}, this._customOpaqueSortCompareFn = {}, this._customAlphaTestSortCompareFn = {}, this._customTransparentSortCompareFn = {}, this._renderingGroupInfo = new AF, this._maintainStateBetweenFrames = !1, this._scene = FF;
        for (let WF = uF.MIN_RENDERINGGROUPS; WF < uF.MAX_RENDERINGGROUPS; WF++) this._autoClearDepthStencil[WF] = {
          autoClear: !0,
          depth: !0,
          stencil: !0
        }
      }
      get renderingGroups() {
        return this._renderingGroups
      }
      getRenderingGroup(FF) {
        const WF = FF || 0;
        return this._prepareRenderingGroup(WF), this._renderingGroups[WF]
      }
      _clearDepthStencilBuffer() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._depthStencilBufferAlreadyCleaned || (this._scene.sC().clear(null, !1, FF, WF), this._depthStencilBufferAlreadyCleaned = !0)
      }
      render(FF, WF, SF, CF) {
        let AF = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          hF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          bW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
          dF = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7],
          PF = arguments.length > 8 ? arguments[8] : void 0,
          RF = arguments.length > 9 ? arguments[9] : void 0;
        const iW = this._renderingGroupInfo;
        iW.ju = this._scene, iW.camera = this._scene.activeCamera, iW.renderingManager = this;
        const eF = RF ?? this._scene.spriteManagers;
        if (eF && CF)
          for (let uF = 0; uF < eF.length; uF++) {
            const FF = eF[uF];
            this.dispatchSprites(FF)
          }
        for (let EF = uF.MIN_RENDERINGGROUPS; EF < uF.MAX_RENDERINGGROUPS; EF++) {
          this._depthStencilBufferAlreadyCleaned = EF === uF.MIN_RENDERINGGROUPS;
          const RF = this._renderingGroups[EF];
          if (!RF || RF._empty) continue;
          const eF = 1 << EF;
          if (iW.renderingGroupId = EF, this._scene.onBeforeRenderingGroupObservable.notifyObservers(iW, eF), uF.AUTOCLEAR) {
            const FF = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(EF) : this._autoClearDepthStencil[EF];
            FF && FF.autoClear && this._clearDepthStencilBuffer(FF.depth, FF.stencil)
          }
          for (let FF = 0, WF = this._scene._beforeRenderingGroupDrawStage; FF < WF.length; FF++) {
            WF[FF].action(EF)
          }
          RF.render(FF, CF, SF, WF, AF, hF, bW, dF, PF);
          for (let FF = 0, WF = this._scene._afterRenderingGroupDrawStage; FF < WF.length; FF++) {
            WF[FF].action(EF)
          }
          this._scene.onAfterRenderingGroupObservable.notifyObservers(iW, eF)
        }
      }
      reset() {
        if (!this.maintainStateBetweenFrames)
          for (let FF = uF.MIN_RENDERINGGROUPS; FF < uF.MAX_RENDERINGGROUPS; FF++) {
            const WF = this._renderingGroups[FF];
            WF && WF.prepare()
          }
      }
      resetSprites() {
        if (!this.maintainStateBetweenFrames)
          for (let FF = uF.MIN_RENDERINGGROUPS; FF < uF.MAX_RENDERINGGROUPS; FF++) {
            const WF = this._renderingGroups[FF];
            WF && WF.prepareSprites()
          }
      }
      dispose() {
        this.freeRenderingGroups(), this._renderingGroups.length = 0, this._renderingGroupInfo = null
      }
      freeRenderingGroups() {
        for (let FF = uF.MIN_RENDERINGGROUPS; FF < uF.MAX_RENDERINGGROUPS; FF++) {
          const WF = this._renderingGroups[FF];
          WF && WF.dispose()
        }
      }
      _prepareRenderingGroup(FF) {
        void 0 === this._renderingGroups[FF] && (this._renderingGroups[FF] = new CF.c(FF, this._scene, this._customOpaqueSortCompareFn[FF], this._customAlphaTestSortCompareFn[FF], this._customTransparentSortCompareFn[FF]), this._renderingGroups[FF].disableDepthPrePass = this._disableDepthPrePass)
      }
      dispatchSprites(FF) {
        this.maintainStateBetweenFrames && FF._wasDispatched || (FF._wasDispatched = !0, this.getRenderingGroup(FF.renderingGroupId).dispatchSprites(FF))
      }
      dispatchParticles(FF) {
        this.maintainStateBetweenFrames && FF._wasDispatched || (FF._wasDispatched = !0, this.getRenderingGroup(FF.renderingGroupId).dispatchParticles(FF))
      }
      dispatch(FF, WF, SF) {
        void 0 === WF && (WF = FF.getMesh()), this.maintainStateBetweenFrames && FF._wasDispatched || (FF._wasDispatched = !0, this.getRenderingGroup(WF.renderingGroupId).dispatch(FF, WF, SF))
      }
      setRenderingOrder(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        if (this._customOpaqueSortCompareFn[FF] = WF, this._customAlphaTestSortCompareFn[FF] = SF, this._customTransparentSortCompareFn[FF] = CF, this._renderingGroups[FF]) {
          const WF = this._renderingGroups[FF];
          WF.opaqueSortCompareFn = this._customOpaqueSortCompareFn[FF], WF.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[FF], WF.transparentSortCompareFn = this._customTransparentSortCompareFn[FF]
        }
      }
      setRenderingAutoClearDepthStencil(FF, WF) {
        let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._autoClearDepthStencil[FF] = {
          autoClear: WF,
          depth: SF,
          stencil: CF
        }
      }
      getAutoClearDepthStencilSetup(FF) {
        return this._autoClearDepthStencil[FF]
      }
    }
    uF.MAX_RENDERINGGROUPS = 4, uF.MIN_RENDERINGGROUPS = 0, uF.AUTOCLEAR = !0
  },
  37879: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF
    });
    class CF {
      constructor(FF) {
        this._supportBlendParametersPerTarget = FF, this._blendFunctionParameters = new Array(32), this._blendEquationParameters = new Array(16), this._blendConstants = new Array(4), this._isBlendConstantsDirty = !1, this._alphaBlend = Array(8).fill(!1), this._numTargetEnabled = 0, this._isAlphaBlendDirty = !1, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1, this.reset()
      }
      get isDirty() {
        return this._isAlphaBlendDirty || this._isBlendFunctionParametersDirty || this._isBlendEquationParametersDirty
      }
      get alphaBlend() {
        return this._numTargetEnabled > 0
      }
      set alphaBlend(FF) {
        this.setAlphaBlend(FF)
      }
      setAlphaBlend(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this._alphaBlend[WF] !== FF && (FF ? this._numTargetEnabled++ : this._numTargetEnabled--, this._alphaBlend[WF] = FF, this._isAlphaBlendDirty = !0)
      }
      setAlphaBlendConstants(FF, WF, SF, CF) {
        this._blendConstants[0] === FF && this._blendConstants[1] === WF && this._blendConstants[2] === SF && this._blendConstants[3] === CF || (this._blendConstants[0] = FF, this._blendConstants[1] = WF, this._blendConstants[2] = SF, this._blendConstants[3] = CF, this._isBlendConstantsDirty = !0)
      }
      setAlphaBlendFunctionParameters(FF, WF, SF, CF) {
        const AF = 4 * (arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0);
        this._blendFunctionParameters[AF + 0] === FF && this._blendFunctionParameters[AF + 1] === WF && this._blendFunctionParameters[AF + 2] === SF && this._blendFunctionParameters[AF + 3] === CF || (this._blendFunctionParameters[AF + 0] = FF, this._blendFunctionParameters[AF + 1] = WF, this._blendFunctionParameters[AF + 2] = SF, this._blendFunctionParameters[AF + 3] = CF, this._isBlendFunctionParametersDirty = !0)
      }
      setAlphaEquationParameters(FF, WF) {
        const SF = 2 * (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0);
        this._blendEquationParameters[SF + 0] === FF && this._blendEquationParameters[SF + 1] === WF || (this._blendEquationParameters[SF + 0] = FF, this._blendEquationParameters[SF + 1] = WF, this._isBlendEquationParametersDirty = !0)
      }
      reset() {
        this._alphaBlend.fill(!1), this._numTargetEnabled = 0, this._blendFunctionParameters.fill(null), this._blendEquationParameters.fill(null), this._blendConstants[0] = null, this._blendConstants[1] = null, this._blendConstants[2] = null, this._blendConstants[3] = null, this._isAlphaBlendDirty = !0, this._isBlendFunctionParametersDirty = !1, this._isBlendEquationParametersDirty = !1, this._isBlendConstantsDirty = !1, this._blendDisabledTargetsMask = 0, this._numTargets = 1
      }
      apply(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._numTargets !== WF && (this._numTargets = WF, this._isAlphaBlendDirty = !0), this._blendDisabledTargetsMask !== SF && (this._blendDisabledTargetsMask = SF, this._isAlphaBlendDirty = !0), !this.isDirty) return;
        if (this._isBlendConstantsDirty && (FF.blendColor(this._blendConstants[0], this._blendConstants[1], this._blendConstants[2], this._blendConstants[3]), this._isBlendConstantsDirty = !1), 1 === WF || !this._supportBlendParametersPerTarget) {
          if (this._isAlphaBlendDirty) {
            if (WF > 1 && 0 !== SF && this.alphaBlend) throw new Error("AlphaState: blending with integer MRT attachments requires per-target blend parameters");
            this._alphaBlend[0] && 0 === (1 & SF) ? FF.enable(FF.BLEND) : FF.disable(FF.BLEND), this._isAlphaBlendDirty = !1
          }
          return this._isBlendFunctionParametersDirty && (FF.blendFuncSeparate(this._blendFunctionParameters[0], this._blendFunctionParameters[1], this._blendFunctionParameters[2], this._blendFunctionParameters[3]), this._isBlendFunctionParametersDirty = !1), void(this._isBlendEquationParametersDirty && (FF.blendEquationSeparate(this._blendEquationParameters[0], this._blendEquationParameters[1]), this._isBlendEquationParametersDirty = !1))
        }
        const CF = FF;
        if (this._isAlphaBlendDirty) {
          for (let AF = 0; AF < WF; AF++) {
            const WF = AF < this._numTargetEnabled ? AF : 0;
            this._alphaBlend[WF] && 0 === (SF & 1 << AF) ? CF.enableIndexed(FF.BLEND, AF) : CF.disableIndexed(FF.BLEND, AF)
          }
          this._isAlphaBlendDirty = !1
        }
        if (this._isBlendFunctionParametersDirty) {
          for (let FF = 0; FF < WF; FF++) {
            const WF = FF < this._numTargetEnabled ? 4 * FF : 0;
            CF.blendFuncSeparateIndexed(FF, this._blendFunctionParameters[WF + 0], this._blendFunctionParameters[WF + 1], this._blendFunctionParameters[WF + 2], this._blendFunctionParameters[WF + 3])
          }
          this._isBlendFunctionParametersDirty = !1
        }
        if (this._isBlendEquationParametersDirty) {
          for (let FF = 0; FF < WF; FF++) {
            const WF = FF < this._numTargetEnabled ? 2 * FF : 0;
            CF.blendEquationSeparateIndexed(FF, this._blendEquationParameters[WF + 0], this._blendEquationParameters[WF + 1])
          }
          this._isBlendEquationParametersDirty = !1
        }
      }
      setAlphaMode(FF, WF) {
        let SF = 32774;
        switch (FF) {
          case 0:
            break;
          case 7:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 1, WF);
            break;
          case 8:
          case 14:
            this.setAlphaBlendFunctionParameters(1, 771, 1, 771, WF);
            break;
          case 2:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 1, WF);
            break;
          case 6:
            this.setAlphaBlendFunctionParameters(1, 1, 0, 1, WF);
            break;
          case 1:
            this.setAlphaBlendFunctionParameters(770, 1, 0, 1, WF);
            break;
          case 3:
            this.setAlphaBlendFunctionParameters(0, 769, 1, 1, WF);
            break;
          case 4:
            this.setAlphaBlendFunctionParameters(774, 0, 1, 1, WF);
            break;
          case 5:
            this.setAlphaBlendFunctionParameters(770, 769, 1, 1, WF);
            break;
          case 9:
            this.setAlphaBlendFunctionParameters(32769, 32770, 32771, 32772, WF);
            break;
          case 10:
            this.setAlphaBlendFunctionParameters(1, 769, 1, 771, WF);
            break;
          case 11:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, WF);
            break;
          case 12:
            this.setAlphaBlendFunctionParameters(772, 1, 0, 0, WF);
            break;
          case 13:
            this.setAlphaBlendFunctionParameters(775, 769, 773, 771, WF);
            break;
          case 15:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 0, WF);
            break;
          case 16:
            this.setAlphaBlendFunctionParameters(775, 769, 0, 1, WF);
            break;
          case 17:
            this.setAlphaBlendFunctionParameters(770, 771, 1, 771, WF);
            break;
          case 18:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, WF), SF = 32775;
            break;
          case 19:
            this.setAlphaBlendFunctionParameters(1, 1, 1, 1, WF), SF = 32776;
            break;
          case 20:
            this.setAlphaBlendFunctionParameters(1, 35065, 0, 1, WF);
            break;
          case 21:
            this.setAlphaBlendFunctionParameters(1, 0, 1, 771, WF)
        }
        this.setAlphaEquationParameters(SF, SF, WF)
      }
    }
  },
  38160: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF
    });
    class CF {}
    CF._IsPickingAvailable = !1
  },
  38057: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => bC,
      f: () => uS
    });
    var CF = SF(38065),
      AF = SF(37860),
      uF = SF(37873),
      hF = SF(35647),
      bW = SF(38081);
    class dF {
      constructor() {
        this._count = 0, this._data = {}
      }
      fdF(FF) {
        this.clear(), FF.forEach(((FF, WF) => this.add(FF, WF)))
      }
      get(FF) {
        const WF = this._data[FF];
        if (void 0 !== WF) return WF
      }
      getOrAddWithFactory(FF, WF) {
        let SF = this.get(FF);
        return void 0 !== SF || (SF = WF(FF), SF && this.add(FF, SF)), SF
      }
      getOrAdd(FF, WF) {
        const SF = this.get(FF);
        return void 0 !== SF ? SF : (this.add(FF, WF), WF)
      }
      contains(FF) {
        return void 0 !== this._data[FF]
      }
      add(FF, WF) {
        return void 0 === this._data[FF] && (this._data[FF] = WF, ++this._count, !0)
      }
      set(FF, WF) {
        return void 0 !== this._data[FF] && (this._data[FF] = WF, !0)
      }
      getAndRemove(FF) {
        const WF = this.get(FF);
        return void 0 !== WF ? (delete this._data[FF], --this._count, WF) : null
      }
      remove(FF) {
        return !!this.contains(FF) && (delete this._data[FF], --this._count, !0)
      }
      clear() {
        this._data = {}, this._count = 0
      }
      get count() {
        return this._count
      }
      forEach(FF) {
        for (const WF in this._data) {
          FF(WF, this._data[WF])
        }
      }
      first(FF) {
        for (const WF in this._data) {
          const SF = FF(WF, this._data[WF]);
          if (SF) return SF
        }
        return null
      }
    }
    var PF = SF(38e3),
      RF = SF(35623),
      iW = SF(38088),
      eF = SF(38098),
      EF = SF(38100);
    class QF {
      constructor(FF, WF, SF, CF, AF, uF) {
        this.source = FF, this.pointerX = WF, this.pointerY = SF, this.meshUnderPointer = CF, this.sourceEvent = AF, this.additionalData = uF
      }
      static CreateNew(FF, WF, SF) {
        const CF = FF.OWF();
        return new QF(FF, CF.pointerX, CF.pointerY, CF.meshUnderPointer || FF, WF, SF)
      }
      static CreateNewFromSprite(FF, WF, SF, CF) {
        return new QF(FF, WF.pointerX, WF.pointerY, WF.meshUnderPointer, SF, CF)
      }
      static CreateNewFromScene(FF, WF) {
        return new QF(null, FF.pointerX, FF.pointerY, FF.meshUnderPointer, WF)
      }
      static CreateNewFromPrimitive(FF, WF, SF, CF) {
        return new QF(FF, WF.x, WF.y, null, SF, CF)
      }
    }
    var rW = SF(38114),
      gW = SF(38116),
      tW = SF(38124),
      TF = SF(38136),
      aW = SF(37835),
      kW = SF(35639),
      qW = SF(37855),
      VF = SF(38145);
    class NF {
      constructor() {
        this.hoverCursor = "", this.actions = [], this.isRecursive = !1, this.disposeWhenUnowned = !0
      }
      static get HasTriggers() {
        for (const FF in NF.Triggers)
          if (Object.prototype.hasOwnProperty.call(NF.Triggers, FF)) return !0;
        return !1
      }
      static get HasPickTriggers() {
        for (const FF in NF.Triggers)
          if (Object.prototype.hasOwnProperty.call(NF.Triggers, FF)) {
            const WF = parseInt(FF);
            if (WF >= 1 && WF <= 7) return !0
          } return !1
      }
      static HasSpecificTrigger(FF) {
        for (const WF in NF.Triggers)
          if (Object.prototype.hasOwnProperty.call(NF.Triggers, WF)) {
            if (parseInt(WF) === FF) return !0
          } return !1
      }
    }
    NF.Triggers = {};
    var DF, LF, mW, OF, xW, ZF, oF, YF = SF(38147);
    ! function(FF) {
      FF[FF.Generic = 0] = "Generic", FF[FF.Keyboard = 1] = "Keyboard", FF[FF.Mouse = 2] = "Mouse", FF[FF.Touch = 3] = "Touch", FF[FF.DualShock = 4] = "DualShock", FF[FF.Xbox = 5] = "Xbox", FF[FF.Switch = 6] = "Switch", FF[FF.DualSense = 7] = "DualSense"
    }(DF || (DF = {})),
    function(FF) {
      FF[FF.Horizontal = 0] = "Horizontal", FF[FF.Vertical = 1] = "Vertical", FF[FF.LeftClick = 2] = "LeftClick", FF[FF.MiddleClick = 3] = "MiddleClick", FF[FF.RightClick = 4] = "RightClick", FF[FF.BrowserBack = 5] = "BrowserBack", FF[FF.BrowserForward = 6] = "BrowserForward", FF[FF.MouseWheelX = 7] = "MouseWheelX", FF[FF.MouseWheelY = 8] = "MouseWheelY", FF[FF.MouseWheelZ = 9] = "MouseWheelZ", FF[FF.Move = 12] = "Move"
    }(LF || (LF = {})),
    function(FF) {
      FF[FF.Horizontal = 0] = "Horizontal", FF[FF.Vertical = 1] = "Vertical", FF[FF.LeftClick = 2] = "LeftClick", FF[FF.MiddleClick = 3] = "MiddleClick", FF[FF.RightClick = 4] = "RightClick", FF[FF.BrowserBack = 5] = "BrowserBack", FF[FF.BrowserForward = 6] = "BrowserForward", FF[FF.MouseWheelX = 7] = "MouseWheelX", FF[FF.MouseWheelY = 8] = "MouseWheelY", FF[FF.MouseWheelZ = 9] = "MouseWheelZ", FF[FF.DeltaHorizontal = 10] = "DeltaHorizontal", FF[FF.DeltaVertical = 11] = "DeltaVertical"
    }(mW || (mW = {})),
    function(FF) {
      FF[FF.Cross = 0] = "Cross", FF[FF.Circle = 1] = "Circle", FF[FF.Square = 2] = "Square", FF[FF.Triangle = 3] = "Triangle", FF[FF.L1 = 4] = "L1", FF[FF.R1 = 5] = "R1", FF[FF.L2 = 6] = "L2", FF[FF.R2 = 7] = "R2", FF[FF.Share = 8] = "Share", FF[FF.Options = 9] = "Options", FF[FF.L3 = 10] = "L3", FF[FF.R3 = 11] = "R3", FF[FF.DPadUp = 12] = "DPadUp", FF[FF.DPadDown = 13] = "DPadDown", FF[FF.DPadLeft = 14] = "DPadLeft", FF[FF.DPadRight = 15] = "DPadRight", FF[FF.Home = 16] = "Home", FF[FF.TouchPad = 17] = "TouchPad", FF[FF.LStickXAxis = 18] = "LStickXAxis", FF[FF.LStickYAxis = 19] = "LStickYAxis", FF[FF.RStickXAxis = 20] = "RStickXAxis", FF[FF.RStickYAxis = 21] = "RStickYAxis"
    }(OF || (OF = {})),
    function(FF) {
      FF[FF.Cross = 0] = "Cross", FF[FF.Circle = 1] = "Circle", FF[FF.Square = 2] = "Square", FF[FF.Triangle = 3] = "Triangle", FF[FF.L1 = 4] = "L1", FF[FF.R1 = 5] = "R1", FF[FF.L2 = 6] = "L2", FF[FF.R2 = 7] = "R2", FF[FF.Create = 8] = "Create", FF[FF.Options = 9] = "Options", FF[FF.L3 = 10] = "L3", FF[FF.R3 = 11] = "R3", FF[FF.DPadUp = 12] = "DPadUp", FF[FF.DPadDown = 13] = "DPadDown", FF[FF.DPadLeft = 14] = "DPadLeft", FF[FF.DPadRight = 15] = "DPadRight", FF[FF.Home = 16] = "Home", FF[FF.TouchPad = 17] = "TouchPad", FF[FF.LStickXAxis = 18] = "LStickXAxis", FF[FF.LStickYAxis = 19] = "LStickYAxis", FF[FF.RStickXAxis = 20] = "RStickXAxis", FF[FF.RStickYAxis = 21] = "RStickYAxis"
    }(xW || (xW = {})),
    function(FF) {
      FF[FF.A = 0] = "A", FF[FF.B = 1] = "B", FF[FF.X = 2] = "X", FF[FF.Y = 3] = "Y", FF[FF.LB = 4] = "LB", FF[FF.RB = 5] = "RB", FF[FF.LT = 6] = "LT", FF[FF.RT = 7] = "RT", FF[FF.Back = 8] = "Back", FF[FF.Start = 9] = "Start", FF[FF.LS = 10] = "LS", FF[FF.RS = 11] = "RS", FF[FF.DPadUp = 12] = "DPadUp", FF[FF.DPadDown = 13] = "DPadDown", FF[FF.DPadLeft = 14] = "DPadLeft", FF[FF.DPadRight = 15] = "DPadRight", FF[FF.Home = 16] = "Home", FF[FF.LStickXAxis = 17] = "LStickXAxis", FF[FF.LStickYAxis = 18] = "LStickYAxis", FF[FF.RStickXAxis = 19] = "RStickXAxis", FF[FF.RStickYAxis = 20] = "RStickYAxis"
    }(ZF || (ZF = {})),
    function(FF) {
      FF[FF.B = 0] = "B", FF[FF.A = 1] = "A", FF[FF.Y = 2] = "Y", FF[FF.X = 3] = "X", FF[FF.L = 4] = "L", FF[FF.R = 5] = "R", FF[FF.ZL = 6] = "ZL", FF[FF.ZR = 7] = "ZR", FF[FF.Minus = 8] = "Minus", FF[FF.Plus = 9] = "Plus", FF[FF.LS = 10] = "LS", FF[FF.RS = 11] = "RS", FF[FF.DPadUp = 12] = "DPadUp", FF[FF.DPadDown = 13] = "DPadDown", FF[FF.DPadLeft = 14] = "DPadLeft", FF[FF.DPadRight = 15] = "DPadRight", FF[FF.Home = 16] = "Home", FF[FF.Capture = 17] = "Capture", FF[FF.LStickXAxis = 18] = "LStickXAxis", FF[FF.LStickYAxis = 19] = "LStickYAxis", FF[FF.RStickXAxis = 20] = "RStickXAxis", FF[FF.RStickYAxis = 21] = "RStickYAxis"
    }(oF || (oF = {}));
    var MF = SF(38152);
    class cW {
      static CreateDeviceEvent(FF, WF, SF, CF, AF, uF, hF) {
        switch (FF) {
          case DF.Keyboard:
            return this._CreateKeyboardEvent(SF, CF, AF, uF);
          case DF.Mouse:
            if (SF === LF.MouseWheelX || SF === LF.MouseWheelY || SF === LF.MouseWheelZ) return this._CreateWheelEvent(FF, WF, SF, CF, AF, uF);
          case DF.Touch:
            return this._CreatePointerEvent(FF, WF, SF, CF, AF, uF, hF);
          default:
            throw `Unable to generate event for device ${DF[FF]}`
        }
      }
      static _CreatePointerEvent(FF, WF, SF, CF, AF, uF, hF) {
        const bW = this._CreateMouseEvent(FF, WF, SF, CF, AF, uF);
        FF === DF.Mouse ? (bW.deviceType = DF.Mouse, bW.pointerId = 1, bW.pointerType = "mouse") : (bW.deviceType = DF.Touch, bW.pointerId = hF ?? WF, bW.pointerType = "touch");
        let dF = 0;
        return dF += AF.pollInput(FF, WF, LF.LeftClick), dF += 2 * AF.pollInput(FF, WF, LF.RightClick), dF += 4 * AF.pollInput(FF, WF, LF.MiddleClick), bW.buttons = dF, SF === LF.Move ? bW.type = "pointermove" : SF >= LF.LeftClick && SF <= LF.RightClick && (bW.type = 1 === CF ? "pointerdown" : "pointerup", bW.button = SF - 2), bW
      }
      static _CreateWheelEvent(FF, WF, SF, CF, AF, uF) {
        const hF = this._CreateMouseEvent(FF, WF, SF, CF, AF, uF);
        switch (hF.pointerId = 1, hF.type = "wheel", hF.deltaMode = MF.c.DOM_DELTA_PIXEL, hF.deltaX = 0, hF.deltaY = 0, hF.deltaZ = 0, SF) {
          case LF.MouseWheelX:
            hF.deltaX = CF;
            break;
          case LF.MouseWheelY:
            hF.deltaY = CF;
            break;
          case LF.MouseWheelZ:
            hF.deltaZ = CF
        }
        return hF
      }
      static _CreateMouseEvent(FF, WF, SF, CF, AF, uF) {
        const hF = this._CreateEvent(uF),
          bW = AF.pollInput(FF, WF, LF.Horizontal),
          dF = AF.pollInput(FF, WF, LF.Vertical);
        return uF ? (hF.movementX = 0, hF.movementY = 0, hF.offsetX = hF.movementX - uF.getBoundingClientRect().x, hF.offsetY = hF.movementY - uF.getBoundingClientRect().y) : (hF.movementX = AF.pollInput(FF, WF, 10), hF.movementY = AF.pollInput(FF, WF, 11), hF.offsetX = 0, hF.offsetY = 0), this._CheckNonCharacterKeys(hF, AF), hF.clientX = bW, hF.clientY = dF, hF.x = bW, hF.y = dF, hF.deviceType = FF, hF.deviceSlot = WF, hF.inputIndex = SF, hF
      }
      static _CreateKeyboardEvent(FF, WF, SF, CF) {
        const AF = this._CreateEvent(CF);
        return this._CheckNonCharacterKeys(AF, SF), AF.deviceType = DF.Keyboard, AF.deviceSlot = 0, AF.inputIndex = FF, AF.type = 1 === WF ? "keydown" : "keyup", AF.key = String.fromCharCode(FF), AF.keyCode = FF, AF
      }
      static _CheckNonCharacterKeys(FF, WF) {
        const SF = WF.isDeviceAvailable(DF.Keyboard),
          CF = SF && 1 === WF.pollInput(DF.Keyboard, 0, 18),
          AF = SF && 1 === WF.pollInput(DF.Keyboard, 0, 17),
          uF = SF && (1 === WF.pollInput(DF.Keyboard, 0, 91) || 1 === WF.pollInput(DF.Keyboard, 0, 92) || 1 === WF.pollInput(DF.Keyboard, 0, 93)),
          hF = SF && 1 === WF.pollInput(DF.Keyboard, 0, 16);
        FF.altKey = CF, FF.ctrlKey = AF, FF.metaKey = uF, FF.shiftKey = hF
      }
      static _CreateEvent(FF) {
        const WF = {
          preventDefault: () => {}
        };
        return WF.target = FF, WF
      }
    }
    class GF {
      constructor(FF, WF, SF) {
        this._nativeInput = _native.DeviceInputSystem ? new _native.DeviceInputSystem(FF, WF, ((FF, WF, CF, AF) => {
          const uF = cW.CreateDeviceEvent(FF, WF, CF, AF, this);
          SF(FF, WF, uF)
        })) : this._createDummyNativeInput()
      }
      pollInput(FF, WF, SF) {
        return this._nativeInput.pollInput(FF, WF, SF)
      }
      isDeviceAvailable(FF) {
        return FF === DF.Mouse || FF === DF.Touch
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
    const zW = Object.keys(LF).length / 2;
    class IF {
      constructor(FF, WF, SF, AF) {
        this._inputs = [], this._keyboardActive = !1, this._pointerActive = !1, this._usingSafari = CF.h.IsSafari(), this._usingMacOs = (0, aW.l)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform), this._keyboardDownEvent = FF => {}, this._keyboardUpEvent = FF => {}, this._keyboardBlurEvent = FF => {}, this._pointerMoveEvent = FF => {}, this._pointerDownEvent = FF => {}, this._pointerUpEvent = FF => {}, this._pointerCancelEvent = FF => {}, this._pointerCancelTouch = FF => {}, this._pointerLeaveEvent = FF => {}, this._pointerWheelEvent = FF => {}, this._pointerBlurEvent = FF => {}, this._pointerMacOsChromeOutEvent = FF => {}, this._eventsAttached = !1, this._mouseId = -1, this._isUsingFirefox = (0, aW.l)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Firefox"), this._isUsingChromium = (0, aW.l)() && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Chrome"), this._maxTouchPoints = 0, this._pointerInputClearObserver = null, this._gamepadConnectedEvent = FF => {}, this._gamepadDisconnectedEvent = FF => {}, this._eventPrefix = CF.h.GetPointerPrefix(FF), this._engine = FF, this._onDeviceConnected = WF, this._onDeviceDisconnected = SF, this._onInputChanged = AF, this._mouseId = this._isUsingFirefox ? 0 : 1, this._enableEvents(), this._usingMacOs && (this._metaKeys = []), this._engine._onEngineViewChanged || (this._engine._onEngineViewChanged = () => {
          this._enableEvents()
        })
      }
      pollInput(FF, WF, SF) {
        const AF = this._inputs[FF][WF];
        if (!AF) throw `Unable to find device ${DF[FF]}`;
        FF >= DF.DualShock && FF <= DF.DualSense && this._updateDevice(FF, WF, SF);
        const uF = AF[SF];
        if (void 0 === uF) throw `Unable to find input ${SF} for device ${DF[FF]} in slot ${WF}`;
        return SF === LF.Move && CF.h.Warn("Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data."), uF
      }
      isDeviceAvailable(FF) {
        return void 0 !== this._inputs[FF]
      }
      dispose() {
        this._onDeviceConnected = () => {}, this._onDeviceDisconnected = () => {}, this._onInputChanged = () => {}, delete this._engine._onEngineViewChanged, this._elementToAttachTo && this._disableEvents()
      }
      _enableEvents() {
        const FF = this?._engine.getInputElement();
        if (FF && (!this._eventsAttached || this._elementToAttachTo !== FF)) {
          if (this._disableEvents(), this._inputs)
            for (const FF of this._inputs)
              if (FF)
                for (const WF in FF) {
                  const SF = FF[+WF];
                  if (SF)
                    for (let FF = 0; FF < SF.length; FF++) SF[FF] = 0
                }
          this._elementToAttachTo = FF, this._elementToAttachTo.tabIndex = -1 !== this._elementToAttachTo.tabIndex ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex, this._handleKeyActions(), this._handlePointerActions(), this._handleGamepadActions(), this._eventsAttached = !0, this._checkForConnectedDevices()
        }
      }
      _disableEvents() {
        this._elementToAttachTo && (this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent), this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.removeEventListener(this._eventPrefix + "AC", this._pointerLeaveEvent), this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent), this._usingMacOs && this._isUsingChromium && this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent), window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent), window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)), this._pointerInputClearObserver && this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver), this._eventsAttached = !1
      }
      _checkForConnectedDevices() {
        if (navigator.getGamepads) {
          const FF = navigator.getGamepads();
          for (const WF of FF) WF && this._addGamePad(WF)
        }
        "function" === typeof matchMedia && matchMedia("(pointer:fine)").matches && this._addPointerDevice(DF.Mouse, 0, 0, 0)
      }
      _addGamePad(FF) {
        const WF = this._getGamepadDeviceType(FF.id),
          SF = FF.index;
        this._gamepads = this._gamepads || new Array(FF.index + 1), this._registerDevice(WF, SF, FF.buttons.length + FF.axes.length), this._gamepads[SF] = WF
      }
      _addPointerDevice(FF, WF, SF, CF) {
        this._pointerActive || (this._pointerActive = !0), this._registerDevice(FF, WF, zW);
        const AF = this._inputs[FF][WF];
        AF[0] = SF, AF[1] = CF
      }
      _registerDevice(FF, WF, SF) {
        if (void 0 === WF) throw `Unable to register device ${DF[FF]} to undefined slot.`;
        if (this._inputs[FF] || (this._inputs[FF] = {}), !this._inputs[FF][WF]) {
          const CF = new Array(SF);
          CF.fill(0), this._inputs[FF][WF] = CF, this._onDeviceConnected(FF, WF)
        }
      }
      _unregisterDevice(FF, WF) {
        this._inputs[FF][WF] && (delete this._inputs[FF][WF], this._onDeviceDisconnected(FF, WF))
      }
      _handleKeyActions() {
        this._keyboardDownEvent = FF => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(DF.Keyboard, 0, 255));
          const WF = this._inputs[DF.Keyboard][0];
          if (WF) {
            WF[FF.keyCode] = 1;
            const SF = FF;
            SF.inputIndex = FF.keyCode, this._usingMacOs && FF.metaKey && "Meta" !== FF.key && (this._metaKeys.includes(FF.keyCode) || this._metaKeys.push(FF.keyCode)), this._onInputChanged(DF.Keyboard, 0, SF)
          }
        }, this._keyboardUpEvent = FF => {
          this._keyboardActive || (this._keyboardActive = !0, this._registerDevice(DF.Keyboard, 0, 255));
          const WF = this._inputs[DF.Keyboard][0];
          if (WF) {
            WF[FF.keyCode] = 0;
            const SF = FF;
            if (SF.inputIndex = FF.keyCode, this._usingMacOs && "Meta" === FF.key && this._metaKeys.length > 0) {
              for (const FF of this._metaKeys) {
                const SF = cW.CreateDeviceEvent(DF.Keyboard, 0, FF, 0, this, this._elementToAttachTo);
                WF[FF] = 0, this._onInputChanged(DF.Keyboard, 0, SF)
              }
              this._metaKeys.splice(0, this._metaKeys.length)
            }
            this._onInputChanged(DF.Keyboard, 0, SF)
          }
        }, this._keyboardBlurEvent = () => {
          if (this._keyboardActive) {
            const FF = this._inputs[DF.Keyboard][0];
            for (let WF = 0; WF < FF.length; WF++)
              if (0 !== FF[WF]) {
                FF[WF] = 0;
                const SF = cW.CreateDeviceEvent(DF.Keyboard, 0, WF, 0, this, this._elementToAttachTo);
                this._onInputChanged(DF.Keyboard, 0, SF)
              } this._usingMacOs && this._metaKeys.splice(0, this._metaKeys.length)
          }
        }, this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent), this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent), this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent)
      }
      _handlePointerActions() {
        this._maxTouchPoints = (0, aW.l)() && navigator.maxTouchPoints || 2, this._activeTouchIds || (this._activeTouchIds = new Array(this._maxTouchPoints));
        for (let CF = 0; CF < this._maxTouchPoints; CF++) this._activeTouchIds[CF] = -1;
        this._pointerMoveEvent = FF => {
          const WF = this._getPointerType(FF);
          let SF = WF === DF.Mouse ? 0 : this._activeTouchIds.indexOf(FF.pointerId);
          if (WF === DF.Touch && -1 === SF) {
            if (0 === FF.buttons) return;
            const AF = this._activeTouchIds.indexOf(-1);
            if (!(AF >= 0)) return void CF.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            SF = AF, this._activeTouchIds[AF] = FF.pointerId, this._onDeviceConnected(WF, SF)
          }
          this._inputs[WF] || (this._inputs[WF] = {}), this._inputs[WF][SF] || this._addPointerDevice(WF, SF, FF.clientX, FF.clientY);
          const AF = this._inputs[WF][SF];
          if (AF) {
            const CF = FF;
            CF.inputIndex = LF.Move, AF[LF.Horizontal] = FF.clientX, AF[LF.Vertical] = FF.clientY, WF === DF.Touch && 0 === AF[LF.LeftClick] && (AF[LF.LeftClick] = 1), void 0 === FF.pointerId && (FF.pointerId = this._mouseId), this._onInputChanged(WF, SF, CF), this._usingSafari || -1 === FF.button || (CF.inputIndex = FF.button + 2, AF[FF.button + 2] = AF[FF.button + 2] ? 0 : 1, this._onInputChanged(WF, SF, CF))
          }
        }, this._pointerDownEvent = FF => {
          const WF = this._getPointerType(FF);
          let SF = WF === DF.Mouse ? 0 : FF.pointerId;
          if (WF === DF.Touch) {
            let WF = this._activeTouchIds.indexOf(FF.pointerId);
            if (-1 === WF && (WF = this._activeTouchIds.indexOf(-1)), !(WF >= 0)) return void CF.h.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
            SF = WF, this._activeTouchIds[WF] = FF.pointerId
          }
          this._inputs[WF] || (this._inputs[WF] = {}), this._inputs[WF][SF] ? WF === DF.Touch && this._onDeviceConnected(WF, SF) : this._addPointerDevice(WF, SF, FF.clientX, FF.clientY);
          const AF = this._inputs[WF][SF];
          if (AF) {
            const CF = AF[LF.Horizontal],
              hF = AF[LF.Vertical];
            if (WF === DF.Mouse) {
              if (void 0 === FF.pointerId && (FF.pointerId = this._mouseId), !document.pointerLockElement) try {
                this._elementToAttachTo.setPointerCapture(this._mouseId)
              } catch (uF) {}
            } else if (FF.pointerId && !document.pointerLockElement) try {
              this._elementToAttachTo.setPointerCapture(FF.pointerId)
            } catch (uF) {}
            AF[LF.Horizontal] = FF.clientX, AF[LF.Vertical] = FF.clientY, AF[FF.button + 2] = 1;
            const bW = FF;
            bW.inputIndex = FF.button + 2, this._onInputChanged(WF, SF, bW), CF === FF.clientX && hF === FF.clientY || (bW.inputIndex = LF.Move, this._onInputChanged(WF, SF, bW))
          }
        }, this._pointerUpEvent = FF => {
          const WF = this._getPointerType(FF),
            SF = WF === DF.Mouse ? 0 : this._activeTouchIds.indexOf(FF.pointerId);
          if (WF === DF.Touch) {
            if (-1 === SF) return;
            this._activeTouchIds[SF] = -1
          }
          const CF = this._inputs[WF]?.[SF];
          let AF = FF.button,
            uF = CF && 0 !== CF[AF + 2];
          if (!uF && this._isUsingFirefox && this._usingMacOs && CF && (AF = 2 === AF ? 0 : 2, uF = 0 !== CF[AF + 2]), uF) {
            const uF = CF[LF.Horizontal],
              hF = CF[LF.Vertical];
            CF[LF.Horizontal] = FF.clientX, CF[LF.Vertical] = FF.clientY, CF[AF + 2] = 0;
            const bW = FF;
            void 0 === FF.pointerId && (FF.pointerId = this._mouseId), uF === FF.clientX && hF === FF.clientY || (bW.inputIndex = LF.Move, this._onInputChanged(WF, SF, bW)), bW.inputIndex = AF + 2, WF === DF.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) ? this._elementToAttachTo.releasePointerCapture(this._mouseId) : FF.pointerId && this._elementToAttachTo.hasPointerCapture?.(FF.pointerId) && this._elementToAttachTo.releasePointerCapture(FF.pointerId), this._onInputChanged(WF, SF, bW), WF === DF.Touch && this._onDeviceDisconnected(WF, SF)
          }
        }, this._pointerCancelTouch = FF => {
          const WF = this._activeTouchIds.indexOf(FF);
          if (-1 === WF) return;
          this._elementToAttachTo.hasPointerCapture?.(FF) && this._elementToAttachTo.releasePointerCapture(FF), this._inputs[DF.Touch][WF][LF.LeftClick] = 0;
          const SF = cW.CreateDeviceEvent(DF.Touch, WF, LF.LeftClick, 0, this, this._elementToAttachTo, FF);
          this._onInputChanged(DF.Touch, WF, SF), this._activeTouchIds[WF] = -1, this._onDeviceDisconnected(DF.Touch, WF)
        }, this._pointerCancelEvent = FF => {
          if ("mouse" === FF.pointerType) {
            const FF = this._inputs[DF.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let WF = LF.LeftClick; WF <= LF.BrowserForward; WF++)
              if (1 === FF[WF]) {
                FF[WF] = 0;
                const SF = cW.CreateDeviceEvent(DF.Mouse, 0, WF, 0, this, this._elementToAttachTo);
                this._onInputChanged(DF.Mouse, 0, SF)
              }
          } else this._pointerCancelTouch(FF.pointerId)
        }, this._pointerLeaveEvent = FF => {
          "pen" === FF.pointerType && this._pointerCancelTouch(FF.pointerId)
        }, this._wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
        let FF = !1;
        const WF = function() {};
        try {
          const SF = Object.defineProperty({}, "passive", {
            get: function() {
              FF = !0
            }
          });
          this._elementToAttachTo.addEventListener("test", WF, SF), this._elementToAttachTo.removeEventListener("test", WF, SF)
        } catch (SF) {}
        this._pointerBlurEvent = () => {
          if (this.isDeviceAvailable(DF.Mouse)) {
            const FF = this._inputs[DF.Mouse][0];
            this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId) && this._elementToAttachTo.releasePointerCapture(this._mouseId);
            for (let WF = LF.LeftClick; WF <= LF.BrowserForward; WF++)
              if (1 === FF[WF]) {
                FF[WF] = 0;
                const SF = cW.CreateDeviceEvent(DF.Mouse, 0, WF, 0, this, this._elementToAttachTo);
                this._onInputChanged(DF.Mouse, 0, SF)
              }
          }
          if (this.isDeviceAvailable(DF.Touch)) {
            const FF = this._inputs[DF.Touch];
            for (let WF = 0; WF < this._activeTouchIds.length; WF++) {
              const SF = this._activeTouchIds[WF];
              if (this._elementToAttachTo.hasPointerCapture?.(SF) && this._elementToAttachTo.releasePointerCapture(SF), -1 !== SF && 1 === FF[WF]?.[LF.LeftClick]) {
                FF[WF][LF.LeftClick] = 0;
                const CF = cW.CreateDeviceEvent(DF.Touch, WF, LF.LeftClick, 0, this, this._elementToAttachTo, SF);
                this._onInputChanged(DF.Touch, WF, CF), this._activeTouchIds[WF] = -1, this._onDeviceDisconnected(DF.Touch, WF)
              }
            }
          }
        }, this._pointerWheelEvent = FF => {
          const WF = DF.Mouse;
          this._inputs[WF] || (this._inputs[WF] = []), this._inputs[WF][0] || (this._pointerActive = !0, this._registerDevice(WF, 0, zW));
          const SF = this._inputs[WF][0];
          if (SF) {
            SF[LF.MouseWheelX] = FF.deltaX || 0, SF[LF.MouseWheelY] = FF.deltaY || FF.wheelDelta || 0, SF[LF.MouseWheelZ] = FF.deltaZ || 0;
            const CF = FF;
            void 0 === FF.pointerId && (FF.pointerId = this._mouseId), 0 !== SF[LF.MouseWheelX] && (CF.inputIndex = LF.MouseWheelX, this._onInputChanged(WF, 0, CF)), 0 !== SF[LF.MouseWheelY] && (CF.inputIndex = LF.MouseWheelY, this._onInputChanged(WF, 0, CF)), 0 !== SF[LF.MouseWheelZ] && (CF.inputIndex = LF.MouseWheelZ, this._onInputChanged(WF, 0, CF))
          }
        }, this._usingMacOs && this._isUsingChromium && (this._pointerMacOsChromeOutEvent = FF => {
          FF.buttons > 1 && this._pointerCancelEvent(FF)
        }, this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOsChromeOutEvent)), this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent), this._elementToAttachTo.addEventListener(this._eventPrefix + "AC", this._pointerLeaveEvent), this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent), this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, !!FF && {
          passive: !1
        }), this._pointerInputClearObserver = this._engine.onEndFrameObservable.add((() => {
          if (this.isDeviceAvailable(DF.Mouse)) {
            const FF = this._inputs[DF.Mouse][0];
            FF[LF.MouseWheelX] = 0, FF[LF.MouseWheelY] = 0, FF[LF.MouseWheelZ] = 0
          }
        }))
      }
      _handleGamepadActions() {
        this._gamepadConnectedEvent = FF => {
          this._addGamePad(FF.gamepad)
        }, this._gamepadDisconnectedEvent = FF => {
          if (this._gamepads) {
            const WF = this._getGamepadDeviceType(FF.gamepad.id),
              SF = FF.gamepad.index;
            this._unregisterDevice(WF, SF), delete this._gamepads[SF]
          }
        }, window.addEventListener("gamepadconnected", this._gamepadConnectedEvent), window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent)
      }
      _updateDevice(FF, WF, SF) {
        const CF = navigator.getGamepads()[WF];
        if (CF && FF === this._gamepads[WF]) {
          const AF = this._inputs[FF][WF];
          SF >= CF.buttons.length ? AF[SF] = CF.axes[SF - CF.buttons.length].valueOf() : AF[SF] = CF.buttons[SF].value
        }
      }
      _getGamepadDeviceType(FF) {
        return -1 !== FF.indexOf("054c") ? -1 !== FF.indexOf("0ce6") ? DF.DualSense : DF.DualShock : -1 !== FF.indexOf("Xbox One") || -1 !== FF.search("Xbox 360") || -1 !== FF.search("xinput") || -1 !== FF.indexOf("045e") && -1 === FF.indexOf("Surface Dock") ? DF.Xbox : -1 !== FF.indexOf("057e") ? DF.Switch : DF.Generic
      }
      _getPointerType(FF) {
        let WF = DF.Mouse;
        return ("touch" === FF.pointerType || "pen" === FF.pointerType || FF.touches) && (WF = DF.Touch), WF
      }
    }
    class fF {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.deviceType = WF, this.deviceSlot = SF, this.onInputChangedObservable = new hF.b, this._deviceInputSystem = FF
      }
      getInput(FF) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, FF)
      }
    }
    class yW {
      constructor(FF) {
        this._registeredManagers = new Array, this._refCount = 0, this.registerManager = FF => {
          for (let WF = 0; WF < this._devices.length; WF++) {
            const SF = this._devices[WF];
            for (const CF in SF) {
              const SF = +CF;
              FF._addDevice(new fF(this._deviceInputSystem, WF, SF))
            }
          }
          this._registeredManagers.push(FF)
        }, this.unregisterManager = FF => {
          const WF = this._registeredManagers.indexOf(FF);
          WF > -1 && this._registeredManagers.splice(WF, 1)
        };
        const WF = Object.keys(DF).length / 2;
        this._devices = new Array(WF);
        const SF = (FF, WF) => {
            this._devices[FF] || (this._devices[FF] = new Array), this._devices[FF][WF] || (this._devices[FF][WF] = WF);
            for (const SF of this._registeredManagers) {
              const CF = new fF(this._deviceInputSystem, FF, WF);
              SF._addDevice(CF)
            }
          },
          CF = (FF, WF) => {
            this._devices[FF]?.[WF] && delete this._devices[FF][WF];
            for (const SF of this._registeredManagers) SF._removeDevice(FF, WF)
          },
          AF = (FF, WF, SF) => {
            if (SF)
              for (const CF of this._registeredManagers) CF._onInputChanged(FF, WF, SF)
          };
        "undefined" !== typeof _native ? this._deviceInputSystem = new GF(SF, CF, AF) : this._deviceInputSystem = new IF(FF, SF, CF, AF)
      }
      dispose() {
        this._deviceInputSystem.dispose()
      }
    }
    class sF {
      getDeviceSource(FF, WF) {
        if (void 0 === WF) {
          if (void 0 === this._firstDevice[FF]) return null;
          WF = this._firstDevice[FF]
        }
        return this._devices[FF] && void 0 !== this._devices[FF][WF] ? this._devices[FF][WF] : null
      }
      getDeviceSources(FF) {
        return this._devices[FF] ? this._devices[FF].filter((FF => !!FF)) : []
      }
      constructor(FF) {
        const WF = Object.keys(DF).length / 2;
        this._devices = new Array(WF), this._firstDevice = new Array(WF), this._engine = FF, this._engine._deviceSourceManager || (this._engine._deviceSourceManager = new yW(FF)), this._engine._deviceSourceManager._refCount++, this.onDeviceConnectedObservable = new hF.b((FF => {
          for (const WF of this._devices)
            if (WF)
              for (const SF of WF) SF && this.onDeviceConnectedObservable.notifyObserver(FF, SF)
        })), this.onDeviceDisconnectedObservable = new hF.b, this._engine._deviceSourceManager.registerManager(this), this._onDisposeObserver = FF.xSF.add((() => {
          this.dispose()
        }))
      }
      dispose() {
        this.onDeviceConnectedObservable.clear(), this.onDeviceDisconnectedObservable.clear(), this._engine._deviceSourceManager && (this._engine._deviceSourceManager.unregisterManager(this), --this._engine._deviceSourceManager._refCount < 1 && (this._engine._deviceSourceManager.dispose(), delete this._engine._deviceSourceManager)), this._engine.xSF.remove(this._onDisposeObserver)
      }
      _addDevice(FF) {
        this._devices[FF.deviceType] || (this._devices[FF.deviceType] = []), this._devices[FF.deviceType][FF.deviceSlot] || (this._devices[FF.deviceType][FF.deviceSlot] = FF, this._updateFirstDevices(FF.deviceType)), this.onDeviceConnectedObservable.notifyObservers(FF)
      }
      _removeDevice(FF, WF) {
        const SF = this._devices[FF]?.[WF];
        this.onDeviceDisconnectedObservable.notifyObservers(SF), this._devices[FF]?.[WF] && delete this._devices[FF][WF], this._updateFirstDevices(FF)
      }
      _onInputChanged(FF, WF, SF) {
        this._devices[FF]?.[WF]?.onInputChangedObservable.notifyObservers(SF)
      }
      _updateFirstDevices(FF) {
        switch (FF) {
          case DF.Keyboard:
          case DF.Mouse:
            this._firstDevice[FF] = 0;
            break;
          case DF.Touch:
          case DF.DualSense:
          case DF.DualShock:
          case DF.Xbox:
          case DF.Switch:
          case DF.Generic: {
            delete this._firstDevice[FF];
            const WF = this._devices[FF];
            if (WF)
              for (let SF = 0; SF < WF.length; SF++)
                if (WF[SF]) {
                  this._firstDevice[FF] = SF;
                  break
                } break
          }
        }
      }
    }
    var nF = SF(38160);
    class HF {
      constructor() {
        this._singleClick = !1, this._doubleClick = !1, this._hasSwiped = !1, this._ignore = !1
      }
      get singleClick() {
        return this._singleClick
      }
      get hiF() {
        return this._doubleClick
      }
      get hasSwiped() {
        return this._hasSwiped
      }
      get ignore() {
        return this._ignore
      }
      set singleClick(FF) {
        this._singleClick = FF
      }
      set hiF(FF) {
        this._doubleClick = FF
      }
      set hasSwiped(FF) {
        this._hasSwiped = FF
      }
      set ignore(FF) {
        this._ignore = FF
      }
    }
    class KF {
      constructor(FF) {
        this._alreadyAttached = !1, this._meshPickProceed = !1, this._currentPickResult = null, this._previousPickResult = null, this._activePointerIds = new Array, this._activePointerIdsCount = 0, this._doubleClickOccured = !1, this._isSwiping = !1, this._swipeButtonPressed = -1, this._skipPointerTap = !1, this._isMultiTouchGesture = !1, this._pointerX = 0, this._pointerY = 0, this._startingPointerPosition = new RF.n(0, 0), this._previousStartingPointerPosition = new RF.n(0, 0), this._startingPointerTime = 0, this._previousStartingPointerTime = 0, this._pointerCaptures = {}, this._meshUnderPointerId = {}, this._movePointerInfo = null, this._latestPointerMoveEvents = new Map, this._cameraObserverCount = 0, this._delayedClicks = [null, null, null, null, null], this._deviceSourceManager = null, this._scene = FF || kW.e.LastCreatedScene, this._scene
      }
      get meshUnderPointer() {
        return this._movePointerInfo && (this._movePointerInfo._generatePickInfo(), this._movePointerInfo = null), this._pointerOverMesh
      }
      getMeshUnderPointerByPointerId(FF) {
        return this._meshUnderPointerId[FF] || null
      }
      get unTranslatedPointer() {
        return new RF.n(this._unTranslatedPointerX, this._unTranslatedPointerY)
      }
      get pointerX() {
        return this._pointerX
      }
      set pointerX(FF) {
        this._pointerX = FF
      }
      get pointerY() {
        return this._pointerY
      }
      set pointerY(FF) {
        this._pointerY = FF
      }
      _updatePointerPosition(FF) {
        const WF = this._scene.sC().getInputElementClientRect();
        WF && (this._pointerX = FF.clientX - WF.left, this._pointerY = FF.clientY - WF.top, this._unTranslatedPointerX = this._pointerX, this._unTranslatedPointerY = this._pointerY)
      }
      _processPointerMove(FF, WF) {
        const SF = this._scene,
          CF = SF.sC(),
          AF = CF.getInputElement();
        AF && (AF.tabIndex = CF.canvasTabIndex, SF.doNotHandleCursors || (AF.style.cursor = SF.defaultCursor)), this._setCursorAndPointerOverMesh(FF, WF, SF);
        for (const bW of SF._pointerMoveStage) {
          FF = FF || this._pickMove(WF);
          const SF = !!FF?.pickedMesh;
          FF = bW.action(this._unTranslatedPointerX, this._unTranslatedPointerY, FF, SF, AF)
        }
        const uF = WF.inputIndex >= LF.MouseWheelX && WF.inputIndex <= LF.MouseWheelZ ? VF.b.POINTERWHEEL : VF.b.POINTERMOVE;
        let hF;
        SF.onPointerMove && (FF = FF || this._pickMove(WF), SF.onPointerMove(WF, FF, uF)), FF ? (hF = new VF.f(uF, WF, FF), this._setRayOnPointerInfo(FF, WF)) : (hF = new VF.f(uF, WF, null, this), this._movePointerInfo = hF), SF.onPointerObservable.hasObservers() && SF.onPointerObservable.notifyObservers(hF, uF)
      }
      _setRayOnPointerInfo(FF, WF) {
        const SF = this._scene;
        FF && nF.c._IsPickingAvailable && (FF.ray || (FF.ray = SF.createPickingRay(WF.offsetX, WF.offsetY, RF.b.Identity(), SF.activeCamera)))
      }
      _addCameraPointerObserver(FF, WF) {
        return this._cameraObserverCount++, this._scene.onPointerObservable.add(FF, WF)
      }
      _removeCameraPointerObserver(FF) {
        return this._cameraObserverCount--, this._scene.onPointerObservable.remove(FF)
      }
      _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick)
      }
      _checkPrePointerObservable(FF, WF, SF) {
        const CF = this._scene,
          AF = new VF.e(SF, WF, this._unTranslatedPointerX, this._unTranslatedPointerY);
        return FF && (AF.originalPickingInfo = FF, AF.ray = FF.ray, "xr-near" === WF.pointerType && FF.originMesh && (AF.nearInteractionPickingInfo = FF)), CF.onPrePointerObservable.notifyObservers(AF, SF), !!AF.skipOnPointerObservable
      }
      _pickMove(FF) {
        const WF = this._scene,
          SF = WF.lW(this._unTranslatedPointerX, this._unTranslatedPointerY, WF.pointerMovePredicate, WF.pointerMoveFastCheck, WF.cameraToUseForPointers, WF.pointerMoveTrianglePredicate);
        return this._setCursorAndPointerOverMesh(SF, FF, WF), SF
      }
      _updateMeshUnderPointer() {
        const FF = this._scene;
        if (!FF.constantlyUpdateMeshUnderPointer || 0 === this._latestPointerMoveEvents.size || FF.skipPointerMovePicking || !FF.cameraToUseForPointers && !FF.activeCamera) return;
        this._ensurePointerMovePredicate();
        const WF = this._pointerX,
          SF = this._pointerY,
          CF = this._unTranslatedPointerX,
          AF = this._unTranslatedPointerY;
        for (const uF of this._latestPointerMoveEvents.values()) this._pointerX = uF.pointerX, this._pointerY = uF.pointerY, this._unTranslatedPointerX = uF.unTranslatedPointerX, this._unTranslatedPointerY = uF.unTranslatedPointerY, this._pickMove(uF.event);
        this._pointerX = WF, this._pointerY = SF, this._unTranslatedPointerX = CF, this._unTranslatedPointerY = AF
      }
      _ensurePointerMovePredicate() {
        const FF = this._scene;
        FF.pointerMovePredicate || (FF.pointerMovePredicate = WF => (WF._isPointerMovePickable ?? WF.JA) && WF.isVisible && WF.isReady() && WF.isEnabled() && (WF.enablePointerMoveEvents || FF.constantlyUpdateMeshUnderPointer || null !== WF._getActionManagerForTrigger()) && (!FF.cameraToUseForPointers || 0 !== (FF.cameraToUseForPointers.layerMask & WF.layerMask)))
      }
      _setCursorAndPointerOverMesh(FF, WF, SF) {
        const CF = SF.sC().getInputElement();
        if (FF?.pickedMesh) {
          if (this.setPointerOverMesh(FF.pickedMesh, WF.pointerId, FF, WF), !SF.doNotHandleCursors && CF && this._pointerOverMesh) {
            const FF = this._pointerOverMesh._getActionManagerForTrigger();
            FF && FF.hasPointerTriggers && (CF.style.cursor = FF.hoverCursor || SF.hoverCursor)
          }
        } else this.setPointerOverMesh(null, WF.pointerId, FF, WF)
      }
      simulatePointerMove(FF, WF) {
        const SF = new PointerEvent("pointermove", WF);
        SF.inputIndex = LF.Move, this._checkPrePointerObservable(FF, SF, VF.b.POINTERMOVE) || this._processPointerMove(FF, SF)
      }
      simulatePointerDown(FF, WF) {
        const SF = new PointerEvent("pointerdown", WF);
        SF.inputIndex = SF.button + 2, this._checkPrePointerObservable(FF, SF, VF.b.POINTERDOWN) || this._processPointerDown(FF, SF)
      }
      _processPointerDown(FF, WF) {
        const SF = this._scene;
        if (FF?.pickedMesh) {
          this._pickedDownMesh = FF.pickedMesh;
          const CF = FF.pickedMesh._getActionManagerForTrigger();
          if (CF) {
            if (CF.hasPickTriggers) switch (CF.processTrigger(5, new QF(FF.pickedMesh, SF.pointerX, SF.pointerY, FF.pickedMesh, WF, FF)), WF.button) {
              case 0:
                CF.processTrigger(2, new QF(FF.pickedMesh, SF.pointerX, SF.pointerY, FF.pickedMesh, WF, FF));
                break;
              case 1:
                CF.processTrigger(4, new QF(FF.pickedMesh, SF.pointerX, SF.pointerY, FF.pickedMesh, WF, FF));
                break;
              case 2:
                CF.processTrigger(3, new QF(FF.pickedMesh, SF.pointerX, SF.pointerY, FF.pickedMesh, WF, FF))
            }
            CF.hasSpecificTrigger(8) && window.setTimeout((() => {
              const FF = SF.lW(this._unTranslatedPointerX, this._unTranslatedPointerY, (FF => FF.JA && FF.isVisible && FF.isReady() && FF.actionManager && FF.actionManager.hasSpecificTrigger(8) && FF === this._pickedDownMesh), !1, SF.cameraToUseForPointers);
              FF?.pickedMesh && CF && 0 !== this._activePointerIdsCount && Date.now() - this._startingPointerTime > KF.LongPressDelay && !this._isPointerSwiping() && (this._startingPointerTime = 0, CF.processTrigger(8, QF.CreateNew(FF.pickedMesh, WF)))
            }), KF.LongPressDelay)
          }
        } else
          for (const uF of SF._pointerDownStage) FF = uF.action(this._unTranslatedPointerX, this._unTranslatedPointerY, FF, WF, !1);
        let CF;
        const AF = VF.b.POINTERDOWN;
        FF ? (SF.onPointerDown && SF.onPointerDown(WF, FF, AF), CF = new VF.f(AF, WF, FF), this._setRayOnPointerInfo(FF, WF)) : CF = new VF.f(AF, WF, null, this), SF.onPointerObservable.hasObservers() && SF.onPointerObservable.notifyObservers(CF, AF)
      }
      _isPointerSwiping() {
        return this._isSwiping
      }
      simulatePointerUp(FF, WF, SF) {
        const CF = new PointerEvent("pointerup", WF);
        CF.inputIndex = LF.Move;
        const AF = new HF;
        SF ? AF.hiF = !0 : AF.singleClick = !0, this._checkPrePointerObservable(FF, CF, VF.b.POINTERUP) || this._processPointerUp(FF, CF, AF)
      }
      _processPointerUp(FF, WF, SF) {
        const CF = this._scene;
        if (FF?.pickedMesh) {
          if (this._pickedUpMesh = FF.pickedMesh, this._pickedDownMesh === this._pickedUpMesh && (CF.onPointerPick && CF.onPointerPick(WF, FF), SF.singleClick && !SF.ignore && CF.onPointerObservable.observers.length > this._cameraObserverCount)) {
            const SF = VF.b.POINTERPICK,
              AF = new VF.f(SF, WF, FF);
            this._setRayOnPointerInfo(FF, WF), CF.onPointerObservable.notifyObservers(AF, SF)
          }
          const AF = FF.pickedMesh._getActionManagerForTrigger();
          if (AF && !SF.ignore) {
            AF.processTrigger(7, QF.CreateNew(FF.pickedMesh, WF, FF)), !SF.hasSwiped && SF.singleClick && AF.processTrigger(1, QF.CreateNew(FF.pickedMesh, WF, FF));
            const CF = FF.pickedMesh._getActionManagerForTrigger(6);
            SF.hiF && CF && CF.processTrigger(6, QF.CreateNew(FF.pickedMesh, WF, FF))
          }
        } else if (!SF.ignore)
          for (const AF of CF._pointerUpStage) FF = AF.action(this._unTranslatedPointerX, this._unTranslatedPointerY, FF, WF, SF.hiF);
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
          const FF = this._pickedDownMesh._getActionManagerForTrigger(16);
          FF && FF.processTrigger(16, QF.CreateNew(this._pickedDownMesh, WF))
        }
        if (!SF.ignore) {
          const AF = new VF.f(VF.b.POINTERUP, WF, FF);
          if (this._setRayOnPointerInfo(FF, WF), CF.onPointerObservable.notifyObservers(AF, VF.b.POINTERUP), CF.onPointerUp && CF.onPointerUp(WF, FF, VF.b.POINTERUP), !SF.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
            let AF = 0;
            if (SF.singleClick ? AF = VF.b.POINTERTAP : SF.hiF && (AF = VF.b.POINTERDOUBLETAP), AF) {
              const SF = new VF.f(AF, WF, FF);
              CF.onPointerObservable.hasObservers() && CF.onPointerObservable.hasSpecificMask(AF) && CF.onPointerObservable.notifyObservers(SF, AF)
            }
          }
        }
      }
      isPointerCaptured() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._pointerCaptures[FF]
      }
      attachControl() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        const AF = this._scene,
          uF = AF.sC();
        CF || (CF = uF.getInputElement()), this._alreadyAttached && this.detachControl(), CF && (this._alreadyAttachedTo = CF), this._deviceSourceManager = new sF(uF), this._initActionManager = FF => {
          if (!this._meshPickProceed) {
            const WF = AF.skipPointerUpPicking || 0 === AF._registeredActions && !this._checkForPicking() && !AF.onPointerUp ? null : AF.lW(this._unTranslatedPointerX, this._unTranslatedPointerY, AF.pointerUpPredicate, AF.pointerUpFastCheck, AF.cameraToUseForPointers, AF.pointerUpTrianglePredicate);
            this._currentPickResult = WF, WF && (FF = WF.hit && WF.pickedMesh ? WF.pickedMesh._getActionManagerForTrigger() : null), this._meshPickProceed = !0
          }
          return FF
        }, this._delayedSimpleClick = (FF, WF, SF) => {
          if ((Date.now() - this._previousStartingPointerTime > KF.DoubleClickDelay && !this._doubleClickOccured || FF !== this._previousButtonPressed) && (this._doubleClickOccured = !1, WF.singleClick = !0, WF.ignore = !1, this._delayedClicks[FF])) {
            const WF = this._delayedClicks[FF].evt,
              SF = VF.b.POINTERTAP,
              CF = new VF.f(SF, WF, this._currentPickResult);
            AF.onPointerObservable.hasObservers() && AF.onPointerObservable.hasSpecificMask(SF) && AF.onPointerObservable.notifyObservers(CF, SF), this._delayedClicks[FF] = null
          }
        }, this._initClickEvent = (FF, WF, SF, CF) => {
          const AF = new HF;
          this._currentPickResult = null;
          let uF = null,
            hF = FF.hasSpecificMask(VF.b.POINTERPICK) || WF.hasSpecificMask(VF.b.POINTERPICK) || FF.hasSpecificMask(VF.b.POINTERTAP) || WF.hasSpecificMask(VF.b.POINTERTAP) || FF.hasSpecificMask(VF.b.POINTERDOUBLETAP) || WF.hasSpecificMask(VF.b.POINTERDOUBLETAP);
          !hF && NF && (uF = this._initActionManager(uF, AF), uF && (hF = uF.hasPickTriggers));
          let bW = !1;
          if (hF = hF && !this._isMultiTouchGesture, hF) {
            const hF = SF.button;
            if (AF.hasSwiped = this._isPointerSwiping(), !AF.hasSwiped) {
              let dF = !KF.ExclusiveDoubleClickMode;
              if (dF || (dF = !FF.hasSpecificMask(VF.b.POINTERDOUBLETAP) && !WF.hasSpecificMask(VF.b.POINTERDOUBLETAP), dF && !NF.HasSpecificTrigger(6) && (uF = this._initActionManager(uF, AF), uF && (dF = !uF.hasSpecificTrigger(6)))), dF)(Date.now() - this._previousStartingPointerTime > KF.DoubleClickDelay || hF !== this._previousButtonPressed) && (AF.singleClick = !0, CF(AF, this._currentPickResult), bW = !0);
              else {
                const FF = {
                  evt: SF,
                  clickInfo: AF,
                  timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, hF, AF, CF), KF.DoubleClickDelay)
                };
                this._delayedClicks[hF] = FF
              }
              let PF = FF.hasSpecificMask(VF.b.POINTERDOUBLETAP) || WF.hasSpecificMask(VF.b.POINTERDOUBLETAP);
              !PF && NF.HasSpecificTrigger(6) && (uF = this._initActionManager(uF, AF), uF && (PF = uF.hasSpecificTrigger(6))), PF && (hF === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < KF.DoubleClickDelay && !this._doubleClickOccured ? (AF.hasSwiped || this._isPointerSwiping() ? (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = hF, KF.ExclusiveDoubleClickMode ? (this._delayedClicks[hF] && (clearTimeout(this._delayedClicks[hF]?.timeoutId), this._delayedClicks[hF] = null), CF(AF, this._previousPickResult)) : CF(AF, this._currentPickResult)) : (this._previousStartingPointerTime = 0, this._doubleClickOccured = !0, AF.hiF = !0, AF.ignore = !1, KF.ExclusiveDoubleClickMode && this._delayedClicks[hF] && (clearTimeout(this._delayedClicks[hF]?.timeoutId), this._delayedClicks[hF] = null), CF(AF, this._currentPickResult)), bW = !0) : (this._doubleClickOccured = !1, this._previousStartingPointerTime = this._startingPointerTime, this._previousStartingPointerPosition.x = this._startingPointerPosition.x, this._previousStartingPointerPosition.y = this._startingPointerPosition.y, this._previousButtonPressed = hF))
            }
          }
          bW || CF(AF, this._currentPickResult)
        }, this._onPointerMove = FF => {
          if (this._updatePointerPosition(FF), this._latestPointerMoveEvents.set(FF.pointerId, {
              event: FF,
              pointerX: this._pointerX,
              pointerY: this._pointerY,
              unTranslatedPointerX: this._unTranslatedPointerX,
              unTranslatedPointerY: this._unTranslatedPointerY
            }), this._isSwiping || -1 === this._swipeButtonPressed || (this._isSwiping = Math.abs(this._startingPointerPosition.x - this._pointerX) > KF.DragMovementThreshold || Math.abs(this._startingPointerPosition.y - this._pointerY) > KF.DragMovementThreshold), uF.isPointerLock && uF._verifyPointerLock(), this._checkPrePointerObservable(null, FF, FF.inputIndex >= LF.MouseWheelX && FF.inputIndex <= LF.MouseWheelZ ? VF.b.POINTERWHEEL : VF.b.POINTERMOVE)) return;
          if (!AF.cameraToUseForPointers && !AF.activeCamera) return;
          if (AF.skipPointerMovePicking) return void this._processPointerMove(new EF.b, FF);
          this._ensurePointerMovePredicate();
          const WF = AF._registeredActions > 0 || AF.constantlyUpdateMeshUnderPointer ? this._pickMove(FF) : null;
          this._processPointerMove(WF, FF)
        }, this._onPointerDown = FF => {
          const WF = this._activePointerIds.indexOf(-1);
          if (-1 === WF ? this._activePointerIds.push(FF.pointerId) : this._activePointerIds[WF] = FF.pointerId, this._activePointerIdsCount++, this._pickedDownMesh = null, this._meshPickProceed = !1, KF.ExclusiveDoubleClickMode)
            for (let CF = 0; CF < this._delayedClicks.length; CF++)
              if (this._delayedClicks[CF])
                if (FF.button === CF) clearTimeout(this._delayedClicks[CF]?.timeoutId);
                else {
                  const FF = this._delayedClicks[CF].clickInfo;
                  this._doubleClickOccured = !1, FF.singleClick = !0, FF.ignore = !1;
                  const WF = this._delayedClicks[CF].evt,
                    SF = VF.b.POINTERTAP,
                    uF = new VF.f(SF, WF, this._currentPickResult);
                  AF.onPointerObservable.hasObservers() && AF.onPointerObservable.hasSpecificMask(SF) && AF.onPointerObservable.notifyObservers(uF, SF), this._delayedClicks[CF] = null
                } if (this._updatePointerPosition(FF), -1 === this._swipeButtonPressed && (this._swipeButtonPressed = FF.button), AF.preventDefaultOnPointerDown && CF && (FF.preventDefault(), CF.focus()), this._startingPointerPosition.x = this._pointerX, this._startingPointerPosition.y = this._pointerY, this._startingPointerTime = Date.now(), this._checkPrePointerObservable(null, FF, VF.b.POINTERDOWN)) return;
          if (!AF.cameraToUseForPointers && !AF.activeCamera) return;
          let SF;
          this._pointerCaptures[FF.pointerId] = !0, AF.pointerDownPredicate || (AF.pointerDownPredicate = FF => FF.JA && FF.isVisible && FF.isReady() && FF.isEnabled() && (!AF.cameraToUseForPointers || 0 !== (AF.cameraToUseForPointers.layerMask & FF.layerMask))), this._pickedDownMesh = null, SF = AF.skipPointerDownPicking || 0 === AF._registeredActions && !this._checkForPicking() && !AF.onPointerDown ? new EF.b : AF.lW(this._unTranslatedPointerX, this._unTranslatedPointerY, AF.pointerDownPredicate, AF.pointerDownFastCheck, AF.cameraToUseForPointers, AF.pointerDownTrianglePredicate), this._processPointerDown(SF, FF)
        }, this._onPointerUp = FF => {
          const WF = this._activePointerIds.indexOf(FF.pointerId); - 1 !== WF && (this._activePointerIds[WF] = -1, this._activePointerIdsCount--, "touch" === FF.pointerType && this._latestPointerMoveEvents.delete(FF.pointerId), this._pickedUpMesh = null, this._meshPickProceed = !1, this._updatePointerPosition(FF), AF.preventDefaultOnPointerUp && CF && (FF.preventDefault(), CF.focus()), this._initClickEvent(AF.onPrePointerObservable, AF.onPointerObservable, FF, ((WF, SF) => {
            if (AF.onPrePointerObservable.hasObservers() && (this._skipPointerTap = !1, !WF.ignore)) {
              if (this._checkPrePointerObservable(null, FF, VF.b.POINTERUP)) return this._swipeButtonPressed === FF.button && (this._isSwiping = !1, this._swipeButtonPressed = -1), void(0 === FF.buttons && (this._pointerCaptures[FF.pointerId] = !1));
              WF.hasSwiped || (WF.singleClick && AF.onPrePointerObservable.hasSpecificMask(VF.b.POINTERTAP) && this._checkPrePointerObservable(null, FF, VF.b.POINTERTAP) && (this._skipPointerTap = !0), WF.hiF && AF.onPrePointerObservable.hasSpecificMask(VF.b.POINTERDOUBLETAP) && this._checkPrePointerObservable(null, FF, VF.b.POINTERDOUBLETAP) && (this._skipPointerTap = !0))
            }
            this._pointerCaptures[FF.pointerId] ? (0 === FF.buttons && (this._pointerCaptures[FF.pointerId] = !1), (AF.cameraToUseForPointers || AF.activeCamera) && (AF.pointerUpPredicate || (AF.pointerUpPredicate = FF => FF.JA && FF.isVisible && FF.isReady() && FF.isEnabled() && (!AF.cameraToUseForPointers || 0 !== (AF.cameraToUseForPointers.layerMask & FF.layerMask))), !this._meshPickProceed && (NF && NF.HasTriggers || this._checkForPicking() || AF.onPointerUp) && this._initActionManager(null, WF), SF || (SF = this._currentPickResult), this._processPointerUp(SF, FF, WF), this._previousPickResult = this._currentPickResult, this._swipeButtonPressed === FF.button && (this._isSwiping = !1, this._swipeButtonPressed = -1))) : this._swipeButtonPressed === FF.button && (this._isSwiping = !1, this._swipeButtonPressed = -1)
          })))
        }, this._onKeyDown = FF => {
          const WF = YF.e.KEYDOWN;
          if (AF.onPreKeyboardObservable.hasObservers()) {
            const SF = new YF.h(WF, FF);
            if (AF.onPreKeyboardObservable.notifyObservers(SF, WF), SF.skipOnKeyboardObservable) return
          }
          if (AF.onKeyboardObservable.hasObservers()) {
            const SF = new YF.k(WF, FF);
            AF.onKeyboardObservable.notifyObservers(SF, WF)
          }
          AF.actionManager && AF.actionManager.processTrigger(14, QF.CreateNewFromScene(AF, FF))
        }, this._onKeyUp = FF => {
          const WF = YF.e.KEYUP;
          if (AF.onPreKeyboardObservable.hasObservers()) {
            const SF = new YF.h(WF, FF);
            if (AF.onPreKeyboardObservable.notifyObservers(SF, WF), SF.skipOnKeyboardObservable) return
          }
          if (AF.onKeyboardObservable.hasObservers()) {
            const SF = new YF.k(WF, FF);
            AF.onKeyboardObservable.notifyObservers(SF, WF)
          }
          AF.actionManager && AF.actionManager.processTrigger(15, QF.CreateNewFromScene(AF, FF))
        }, this._deviceSourceManager.onDeviceConnectedObservable.add((CF => {
          CF.deviceType === DF.Mouse ? CF.onInputChangedObservable.add((AF => {
            this._originMouseEvent = AF, AF.inputIndex === LF.LeftClick || AF.inputIndex === LF.MiddleClick || AF.inputIndex === LF.RightClick || AF.inputIndex === LF.BrowserBack || AF.inputIndex === LF.BrowserForward ? WF && 1 === CF.getInput(AF.inputIndex) ? this._onPointerDown(AF) : FF && 0 === CF.getInput(AF.inputIndex) && this._onPointerUp(AF) : SF && (AF.inputIndex === LF.Move ? this._onPointerMove(AF) : AF.inputIndex !== LF.MouseWheelX && AF.inputIndex !== LF.MouseWheelY && AF.inputIndex !== LF.MouseWheelZ || this._onPointerMove(AF))
          })) : CF.deviceType === DF.Touch ? CF.onInputChangedObservable.add((AF => {
            AF.inputIndex === LF.LeftClick && (WF && 1 === CF.getInput(AF.inputIndex) ? (this._onPointerDown(AF), this._activePointerIdsCount > 1 && (this._isMultiTouchGesture = !0)) : FF && 0 === CF.getInput(AF.inputIndex) && (this._onPointerUp(AF), 0 === this._activePointerIdsCount && (this._isMultiTouchGesture = !1))), SF && AF.inputIndex === LF.Move && this._onPointerMove(AF)
          })) : CF.deviceType === DF.Keyboard && CF.onInputChangedObservable.add((FF => {
            "keydown" === FF.type ? this._onKeyDown(FF) : "keyup" === FF.type && this._onKeyUp(FF)
          }))
        })), this._alreadyAttached = !0
      }
      detachControl() {
        this._alreadyAttached && (this._deviceSourceManager.dispose(), this._deviceSourceManager = null, this._alreadyAttachedTo && !this._scene.doNotHandleCursors && (this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor), this._alreadyAttached = !1, this._alreadyAttachedTo = null, this._latestPointerMoveEvents.clear())
      }
      setPointerOverMesh(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = arguments.length > 3 ? arguments[3] : void 0;
        if (this._meshUnderPointerId[WF] === FF && (!FF || !FF._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) return;
        const AF = this._meshUnderPointerId[WF];
        let uF;
        AF && (uF = AF._getActionManagerForTrigger(10), uF && uF.processTrigger(10, new QF(AF, this._pointerX, this._pointerY, FF, CF, {
          pointerId: WF
        }))), FF ? (this._meshUnderPointerId[WF] = FF, this._pointerOverMesh = FF, uF = FF._getActionManagerForTrigger(9), uF && uF.processTrigger(9, new QF(FF, this._pointerX, this._pointerY, FF, CF, {
          pointerId: WF,
          pickResult: SF
        }))) : (delete this._meshUnderPointerId[WF], this._pointerOverMesh = null), this._scene.onMeshUnderPointerUpdatedObservable.hasObservers() && this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
          mesh: FF,
          pointerId: WF
        })
      }
      getPointerOverMesh() {
        return this.meshUnderPointer
      }
      _invalidateMesh(FF) {
        this._pointerOverMesh === FF && (this._pointerOverMesh = null), this._pickedDownMesh === FF && (this._pickedDownMesh = null), this._pickedUpMesh === FF && (this._pickedUpMesh = null);
        for (const WF in this._meshUnderPointerId) this._meshUnderPointerId[WF] === FF && delete this._meshUnderPointerId[WF]
      }
    }
    KF.DragMovementThreshold = 10, KF.LongPressDelay = 500, KF.DoubleClickDelay = 300, KF.ExclusiveDoubleClickMode = !1;
    var wF = SF(37911),
      XF = SF(35678),
      UF = SF(36173);
    class BF {
      static get UniqueId() {
        const FF = this._UniqueIdCounter;
        return this._UniqueIdCounter++, FF
      }
    }
    BF._UniqueIdCounter = 1;
    var jW = SF(38010),
      vW = SF(38166),
      JF = SF(35631);
    class pF {
      constructor() {
        this.pointerDownFastCheck = !1, this.pointerUpFastCheck = !1, this.pointerMoveFastCheck = !1, this.skipPointerMovePicking = !1, this.skipPointerDownPicking = !1, this.skipPointerUpPicking = !1
      }
    }
    var lF, FW, WW, SW, CW, AW, uW, hW, bS, dW, PW, RW, iS, eW, EW, QW, rS, gS, tS, TW, aS, kS, qS, VW, NW, DW, LW, mS, OW, xS, ZW, oW, YW, MW, cS, GW, zS, IW, fW, yS, sW, nW, HW, KW, wW, XW, UW, BW, jS, vS, JW, pW, lW, FS = SF(37076),
      WS = SF(35660);
    const SS = new RF.v,
      CS = new RF.v;
    var AS;
    ! function(FF) {
      FF[FF.BackwardCompatible = 0] = "BackwardCompatible", FF[FF.Intermediate = 1] = "Intermediate", FF[FF.Aggressive = 2] = "Aggressive"
    }(AS || (AS = {}));
    class uS {
      static DefaultMaterialFactory(FF) {
        throw (0, qW.l)("StandardMaterial")
      }
      static CollisionCoordinatorFactory() {
        throw (0, qW.l)("DefaultCollisionCoordinator")
      }
      get clearColor() {
        return this._clearColor
      }
      set clearColor(FF) {
        FF !== this._clearColor && (this._clearColor = FF, this.onClearColorChangedObservable.notifyObservers(this._clearColor))
      }
      get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration
      }
      get performancePriority() {
        return this._performancePriority
      }
      set performancePriority(FF) {
        if (FF !== this._performancePriority) {
          switch (this._performancePriority = FF, FF) {
            case 0:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !1, this.autoClear = !0;
              break;
            case 1:
              this.skipFrustumClipping = !1, this._renderingManager.maintainStateBetweenFrames = !1, this.skipPointerMovePicking = !0, this.autoClear = !1;
              break;
            case 2:
              this.skipFrustumClipping = !0, this._renderingManager.maintainStateBetweenFrames = !0, this.skipPointerMovePicking = !0, this.autoClear = !1
          }
          this.onScenePerformancePriorityChangedObservable.notifyObservers(FF)
        }
      }
      set forceWireframe(FF) {
        this._forceWireframe !== FF && (this._forceWireframe = FF, this.markAllMaterialsAsDirty(16))
      }
      get forceWireframe() {
        return this._forceWireframe
      }
      set skipFrustumClipping(FF) {
        this._skipFrustumClipping !== FF && (this._skipFrustumClipping = FF)
      }
      get skipFrustumClipping() {
        return this._skipFrustumClipping
      }
      set forcePointsCloud(FF) {
        this._forcePointsCloud !== FF && (this._forcePointsCloud = FF, this.markAllMaterialsAsDirty(16))
      }
      get forcePointsCloud() {
        return this._forcePointsCloud
      }
      get environmentTexture() {
        return this._environmentTexture
      }
      set environmentTexture(FF) {
        this._environmentTexture !== FF && (this._environmentTexture = FF, this.onEnvironmentTextureChangedObservable.notifyObservers(FF), this.markAllMaterialsAsDirty(1))
      }
      getNodes() {
        let FF = [];
        FF = FF.concat(this.meshes), FF = FF.concat(this.lights), FF = FF.concat(this.cameras), FF = FF.concat(this.transformNodes);
        for (const WF of this.skeletons) FF = FF.concat(WF.bones);
        return FF
      }
      get animationPropertiesOverride() {
        return this._animationPropertiesOverride
      }
      set animationPropertiesOverride(FF) {
        this._animationPropertiesOverride = FF
      }
      set onDispose(FF) {
        this._onDisposeObserver && this.xSF.remove(this._onDisposeObserver), this._onDisposeObserver = this.xSF.add(FF)
      }
      set beforeRender(FF) {
        this._onBeforeRenderObserver && this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver), FF && (this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(FF))
      }
      set afterRender(FF) {
        this._onAfterRenderObserver && this.onAfterRenderObservable.remove(this._onAfterRenderObserver), FF && (this._onAfterRenderObserver = this.onAfterRenderObservable.add(FF))
      }
      set beforeCameraRender(FF) {
        this._onBeforeCameraRenderObserver && this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver), this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(FF)
      }
      set afterCameraRender(FF) {
        this._onAfterCameraRenderObserver && this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver), this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(FF)
      }
      get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate
      }
      set pointerDownPredicate(FF) {
        this._pointerPickingConfiguration.pointerDownPredicate = FF
      }
      get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate
      }
      set pointerUpPredicate(FF) {
        this._pointerPickingConfiguration.pointerUpPredicate = FF
      }
      get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate
      }
      set pointerMovePredicate(FF) {
        this._pointerPickingConfiguration.pointerMovePredicate = FF
      }
      get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck
      }
      set pointerDownFastCheck(FF) {
        this._pointerPickingConfiguration.pointerDownFastCheck = FF
      }
      get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck
      }
      set pointerUpFastCheck(FF) {
        this._pointerPickingConfiguration.pointerUpFastCheck = FF
      }
      get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck
      }
      set pointerMoveFastCheck(FF) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = FF
      }
      get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking
      }
      set skipPointerMovePicking(FF) {
        this._pointerPickingConfiguration.skipPointerMovePicking = FF
      }
      get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking
      }
      set skipPointerDownPicking(FF) {
        this._pointerPickingConfiguration.skipPointerDownPicking = FF
      }
      get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking
      }
      set skipPointerUpPicking(FF) {
        this._pointerPickingConfiguration.skipPointerUpPicking = FF
      }
      get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer
      }
      static get DragMovementThreshold() {
        return KF.DragMovementThreshold
      }
      static set DragMovementThreshold(FF) {
        KF.DragMovementThreshold = FF
      }
      static get LongPressDelay() {
        return KF.LongPressDelay
      }
      static set LongPressDelay(FF) {
        KF.LongPressDelay = FF
      }
      static get DoubleClickDelay() {
        return KF.DoubleClickDelay
      }
      static set DoubleClickDelay(FF) {
        KF.DoubleClickDelay = FF
      }
      static get ExclusiveDoubleClickMode() {
        return KF.ExclusiveDoubleClickMode
      }
      static set ExclusiveDoubleClickMode(FF) {
        KF.ExclusiveDoubleClickMode = FF
      }
      get _eyePosition() {
        return this._forcedViewPosition ?? this.activeCamera?.globalPosition ?? RF.r.ZeroReadOnly
      }
      bindEyePosition(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vEyePosition",
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const CF = this._eyePosition,
          AF = this.useRightHandedSystem === (null != this._mirroredCameraPosition),
          uF = this.floatingOriginOffset,
          hF = SS.set(CF.x, CF.y, CF.z, AF ? -1 : 1),
          bW = hF.subtractFromFloatsToRef(uF.x, uF.y, uF.z, 0, CS);
        return FF && (SF ? FF.setFloat3(WF, bW.x, bW.y, bW.z) : FF.setVector4(WF, bW)), hF
      }
      finalizeSceneUbo() {
        const FF = this.getSceneUniformBuffer(),
          WF = this.bindEyePosition(null),
          SF = this.floatingOriginOffset;
        return FF.updateFloat4("vEyePosition", WF.x - SF.x, WF.y - SF.y, WF.z - SF.z, WF.w), FF.update(), FF
      }
      set useRightHandedSystem(FF) {
        this._useRightHandedSystem !== FF && (this._useRightHandedSystem = FF, this.markAllMaterialsAsDirty(16))
      }
      get useRightHandedSystem() {
        return this._useRightHandedSystem
      }
      setStepId(FF) {
        this._currentStepId = FF
      }
      getStepId() {
        return this._currentStepId
      }
      getInternalStep() {
        return this._currentInternalStep
      }
      set fogEnabled(FF) {
        this._fogEnabled !== FF && (this._fogEnabled = FF, this.markAllMaterialsAsDirty(16))
      }
      get fogEnabled() {
        return this._fogEnabled
      }
      set fogMode(FF) {
        this._fogMode !== FF && (this._fogMode = FF, this.markAllMaterialsAsDirty(16))
      }
      get fogMode() {
        return this._fogMode
      }
      get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled
      }
      set shadowsEnabled(FF) {
        this._shadowsEnabled !== FF && (this._shadowsEnabled = FF, this.markAllMaterialsAsDirty(2))
      }
      get shadowsEnabled() {
        return this._shadowsEnabled
      }
      set lightsEnabled(FF) {
        this._lightsEnabled !== FF && (this._lightsEnabled = FF, this.markAllMaterialsAsDirty(2))
      }
      get lightsEnabled() {
        return this._lightsEnabled
      }
      get activeCameras() {
        return this._activeCameras
      }
      set activeCameras(FF) {
        this._unObserveActiveCameras && (this._unObserveActiveCameras(), this._unObserveActiveCameras = null), FF && (this._unObserveActiveCameras = (0, JF.h)(FF, (() => {
          this.onActiveCamerasChanged.notifyObservers(this)
        }))), this._activeCameras = FF
      }
      get activeCamera() {
        return this._activeCamera
      }
      set activeCamera(FF) {
        FF !== this._activeCamera && (this._activeCamera = FF, this.onActiveCameraChanged.notifyObservers(this))
      }
      get _hasDefaultMaterial() {
        return uS.DefaultMaterialFactory !== uS._OriginalDefaultMaterialFactory
      }
      get defaultMaterial() {
        return this._defaultMaterial || (this._defaultMaterial = uS.DefaultMaterialFactory(this)), this._defaultMaterial
      }
      set defaultMaterial(FF) {
        this._defaultMaterial = FF
      }
      set texturesEnabled(FF) {
        this._texturesEnabled !== FF && (this._texturesEnabled = FF, this.markAllMaterialsAsDirty(1))
      }
      get texturesEnabled() {
        return this._texturesEnabled
      }
      get frameGraph() {
        return this._frameGraph
      }
      set frameGraph(FF) {
        if (this._frameGraph) return this._frameGraph = FF, void(FF || (this.customRenderFunction = this._currentCustomRenderFunction));
        this._frameGraph = FF, FF && (this._currentCustomRenderFunction = this.customRenderFunction, this.customRenderFunction = this._renderWithFrameGraph, this.activeCamera = null)
      }
      set skeletonsEnabled(FF) {
        this._skeletonsEnabled !== FF && (this._skeletonsEnabled = FF, this.markAllMaterialsAsDirty(8))
      }
      get skeletonsEnabled() {
        return this._skeletonsEnabled
      }
      get collisionCoordinator() {
        return this._collisionCoordinator || (this._collisionCoordinator = uS.CollisionCoordinatorFactory(), this._collisionCoordinator.init(this)), this._collisionCoordinator
      }
      get renderingManager() {
        return this._renderingManager
      }
      get frustumPlanes() {
        return this._frustumPlanes
      }
      _registerTransientComponents() {
        if (this._transientComponents.length > 0) {
          for (const FF of this._transientComponents) FF.register();
          this._transientComponents.length = 0
        }
      }
      SPF(FF) {
        this._components.push(FF), this._transientComponents.push(FF);
        const WF = FF;
        WF.addFromContainer && WF.serialize && this._serializableComponents.push(WF)
      }
      _getComponent(FF) {
        for (const WF of this._components)
          if (WF.name === FF) return WF;
        return null
      }
      get uniqueId() {
        return this._uniqueId
      }
      constructor(FF, WF) {
        this._inputManager = new KF(this), this.cameraToUseForPointers = null, this._isScene = !0, this._blockEntityCollection = !1, this.autoClear = !0, this.autoClearDepthAndStencil = !0, this._clearColor = new XF.i(.2, .2, .3, 1), this.onClearColorChangedObservable = new hF.b, this.ambientColor = new XF.e(0, 0, 0), this.environmentIntensity = 1, this.iblIntensity = 1, this._performancePriority = 0, this.onScenePerformancePriorityChangedObservable = new hF.b, this._forceWireframe = !1, this._skipFrustumClipping = !1, this._forcePointsCloud = !1, this.rootNodes = [], this.cameras = [], this.lights = [], this.meshes = [], this.skeletons = [], this.Zm = [], this.animations = [], this.animationGroups = [], this.multiMaterials = [], this.materials = [], this.morphTargetManagers = [], this.geometries = [], this.transformNodes = [], this.actionManagers = [], this.objectRenderers = [], this.textures = [], this._environmentTexture = null, this.postProcesses = [], this.effectLayers = [], this.sounds = null, this.layers = [], this.lensFlareSystems = [], this.proceduralTextures = [], this.animationsEnabled = !0, this._animationPropertiesOverride = null, this.useConstantAnimationDeltaTime = !1, this.constantlyUpdateMeshUnderPointer = !1, this.hoverCursor = "pointer", this.defaultCursor = "", this.doNotHandleCursors = !1, this.preventDefaultOnPointerDown = !0, this.preventDefaultOnPointerUp = !0, this.metadata = null, this.reservedDataStore = null, this.disableOfflineSupportExceptionRules = [], this.xSF = new hF.b, this._onDisposeObserver = null, this.onBeforeRenderObservable = new hF.b, this._onBeforeRenderObserver = null, this.onAfterRenderObservable = new hF.b, this.onAfterRenderCameraObservable = new hF.b, this._onAfterRenderObserver = null, this.onBeforeAnimationsObservable = new hF.b, this.onAfterAnimationsObservable = new hF.b, this.onBeforeDrawPhaseObservable = new hF.b, this.onAfterDrawPhaseObservable = new hF.b, this.onReadyObservable = new hF.b, this.onBeforeCameraRenderObservable = new hF.b, this._onBeforeCameraRenderObserver = null, this.onAfterCameraRenderObservable = new hF.b, this._onAfterCameraRenderObserver = null, this.onBeforeActiveMeshesEvaluationObservable = new hF.b, this.onAfterActiveMeshesEvaluationObservable = new hF.b, this.onBeforeParticlesRenderingObservable = new hF.b, this.onAfterParticlesRenderingObservable = new hF.b, this.onDataLoadedObservable = new hF.b, this.onNewCameraAddedObservable = new hF.b, this.onCameraRemovedObservable = new hF.b, this.onNewLightAddedObservable = new hF.b, this.onLightRemovedObservable = new hF.b, this.onNewGeometryAddedObservable = new hF.b, this.onGeometryRemovedObservable = new hF.b, this.onNewTransformNodeAddedObservable = new hF.b, this.onTransformNodeRemovedObservable = new hF.b, this.onNewMeshAddedObservable = new hF.b, this.onMeshRemovedObservable = new hF.b, this.onNewSkeletonAddedObservable = new hF.b, this.onSkeletonRemovedObservable = new hF.b, this.onNewParticleSystemAddedObservable = new hF.b, this.onParticleSystemRemovedObservable = new hF.b, this.onNewAnimationGroupAddedObservable = new hF.b, this.onAnimationGroupRemovedObservable = new hF.b, this.onNewMaterialAddedObservable = new hF.b, this.onNewMultiMaterialAddedObservable = new hF.b, this.onMaterialRemovedObservable = new hF.b, this.onMultiMaterialRemovedObservable = new hF.b, this.onNewTextureAddedObservable = new hF.b, this.onTextureRemovedObservable = new hF.b, this.onNewFrameGraphAddedObservable = new hF.b, this.onFrameGraphRemovedObservable = new hF.b, this.onNewObjectRendererAddedObservable = new hF.b, this.onObjectRendererRemovedObservable = new hF.b, this.onNewPostProcessAddedObservable = new hF.b, this.onPostProcessRemovedObservable = new hF.b, this.onNewEffectLayerAddedObservable = new hF.b, this.onEffectLayerRemovedObservable = new hF.b, this.onBeforeRenderTargetsRenderObservable = new hF.b, this.onAfterRenderTargetsRenderObservable = new hF.b, this.onBeforeStepObservable = new hF.b, this.onAfterStepObservable = new hF.b, this.onActiveCameraChanged = new hF.b, this.onActiveCamerasChanged = new hF.b, this.onBeforeRenderingGroupObservable = new hF.b, this.onAfterRenderingGroupObservable = new hF.b, this.onMeshImportedObservable = new hF.b, this.onAnimationFileImportedObservable = new hF.b, this.onEnvironmentTextureChangedObservable = new hF.b, this.onMeshUnderPointerUpdatedObservable = new hF.b, this._registeredForLateAnimationBindings = new bW.b(256), this._pointerPickingConfiguration = new pF, this.onPrePointerObservable = new hF.b, this.onPointerObservable = new hF.b, this.onPreKeyboardObservable = new hF.b, this.onKeyboardObservable = new hF.b, this._useRightHandedSystem = !1, this._timeAccumulator = 0, this._currentStepId = 0, this._currentInternalStep = 0, this._fogEnabled = !0, this._fogMode = uS.FOGMODE_NONE, this.fogColor = new XF.e(.2, .2, .3), this.fogDensity = .1, this.fogStart = 0, this.fogEnd = 1e3, this.needsPreviousWorldMatrices = !1, this._shadowsEnabled = !0, this._lightsEnabled = !0, this._unObserveActiveCameras = null, this._texturesEnabled = !0, this._frameGraph = null, this.frameGraphs = [], this.NSF = !0, this.particlesEnabled = !0, this.spritesEnabled = !0, this._skeletonsEnabled = !0, this.lensFlaresEnabled = !0, this.collisionsEnabled = !0, this.gravity = new RF.r(0, -9.807, 0), this.postProcessesEnabled = !0, this.renderTargetsEnabled = !0, this.dumpNextRenderTargets = !1, this.customRenderTargets = [], this.importedMeshesFiles = [], this.probesEnabled = !0, this._meshesForIntersections = new bW.b(256), this.proceduralTexturesEnabled = !0, this._totalVertices = new wF.b, this._activeIndices = new wF.b, this._activeParticles = new wF.b, this._activeBones = new wF.b, this._animationTime = 0, this.animationTimeScale = 1, this._renderId = 0, this._frameId = 0, this._renderingMeshEvaluationDepth = 0, this._executeWhenReadyTimeoutId = null, this._intermediateRendering = !1, this._defaultFrameBufferCleared = !1, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1, this._toBeDisposed = new Array(256), this._activeRequests = new Array, this._delayedFileRequests = null, this._pendingData = [], this._isDisposed = !1, this._isDisposing = !1, this._isReadyChecks = [], this.dispatchAllSubMeshesOfActiveMeshes = !1, this._activeMeshes = new bW.f(256), this._processedMaterials = new bW.f(256), this._renderTargets = new bW.b(256), this._materialsRenderTargets = new bW.b(256), this._activeParticleSystems = new bW.f(256), this._activeSkeletons = new bW.b(32), this._softwareSkinnedMeshes = new bW.b(32), this._activeAnimatables = new Array, this._animationWrites = new Array, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._animationStepEvaluated = !1, this._transformMatrix = RF.b.Zero(), this.requireLightSorting = !1, this._components = [], this._serializableComponents = [], this._transientComponents = [], this._beforeCameraUpdateStage = TF.f.Create(), this._beforeClearStage = TF.f.Create(), this._beforeRenderTargetClearStage = TF.f.Create(), this._gatherRenderTargetsStage = TF.f.Create(), this._gatherActiveCameraRenderTargetsStage = TF.f.Create(), this._isReadyForMeshStage = TF.f.Create(), this._beforeEvaluateActiveMeshStage = TF.f.Create(), this._evaluateSubMeshStage = TF.f.Create(), this._preActiveMeshStage = TF.f.Create(), this._cameraDrawRenderTargetStage = TF.f.Create(), this._beforeCameraDrawStage = TF.f.Create(), this._beforeRenderTargetDrawStage = TF.f.Create(), this._beforeRenderingGroupDrawStage = TF.f.Create(), this._beforeRenderingMeshStage = TF.f.Create(), this._afterRenderingMeshStage = TF.f.Create(), this._afterRenderingGroupDrawStage = TF.f.Create(), this._afterCameraDrawStage = TF.f.Create(), this._afterCameraPostProcessStage = TF.f.Create(), this._afterRenderTargetDrawStage = TF.f.Create(), this._afterRenderTargetPostProcessStage = TF.f.Create(), this._afterRenderStage = TF.f.Create(), this._pointerMoveStage = TF.f.Create(), this._pointerDownStage = TF.f.Create(), this._pointerUpStage = TF.f.Create(), this._geometriesByUniqueId = null, this._uniqueId = 0, this._defaultMeshCandidates = {
          data: [],
          length: 0
        }, this._defaultSubMeshCandidates = {
          data: [],
          length: 0
        }, this.onReadyTimeoutObservable = new hF.b, this.onReadyTimeoutDuration = 12e4, this._timeoutChecksStartTime = 0, this._floatingOriginScene = void 0, this._preventFreeActiveMeshesAndRenderingGroups = !1, this._activeMeshesFrozen = !1, this._activeMeshesFrozenButKeepClipping = !1, this._skipEvaluateActiveMeshesCompletely = !1, this._freezeActiveMeshesCancel = null, this._useCurrentFrameBuffer = !1, this._allowPostProcessClearColor = !0, this.getDeterministicFrameTime = () => this._engine.getTimeStep(), this._getFloatingOriginScene = () => this._floatingOriginScene, this._registeredActions = 0, this._blockMaterialDirtyMechanism = !1, this._perfCollector = null, this.activeCameras = [], this._uniqueId = this.getUniqueId();
        const SF = {
          useGeometryUniqueIdsMap: !0,
          useMaterialMeshMap: !0,
          useClonedMeshMap: !0,
          virtual: !1,
          defaultCameraLayerMask: 268435455,
          defaultRenderableLayerMask: 268435455,
          ...WF
        };
        this.defaultCameraLayerMask = SF.defaultCameraLayerMask, this.defaultRenderableLayerMask = SF.defaultRenderableLayerMask, FF = this._engine = FF || kW.e.LastCreatedEngine, SF.virtual ? FF._virtualScenes.push(this) : (kW.e._LastCreatedScene = this, FF.scenes.push(this)), (FF.getCreationOptions().useLargeWorldRendering || WF?.useFloatingOrigin) && ((0, gW.h)(), this._floatingOriginScene = this, gW.e.OWF = this._getFloatingOriginScene), this._uid = null, this._renderingManager = new tW.e(this), rW.c && (this.postProcessManager = new rW.c(this)), (0, aW.m)() && this.attachControl(), this._createUbo(), iW.d && (this._imageProcessingConfiguration = new iW.d), this.setDefaultCandidateProviders(), SF.useGeometryUniqueIdsMap && (this._geometriesByUniqueId = {}), this.useMaterialMeshMap = SF.useMaterialMeshMap, this.useClonedMeshMap = SF.useClonedMeshMap, WF && WF.virtual || FF.onNewSceneAddedObservable.notifyObservers(this)
      }
      getClassName() {
        return "Scene"
      }
      _getDefaultMeshCandidates() {
        return this._defaultMeshCandidates.data = this.meshes, this._defaultMeshCandidates.length = this.meshes.length, this._defaultMeshCandidates
      }
      _getDefaultSubMeshCandidates(FF) {
        return this._defaultSubMeshCandidates.data = FF.Om, this._defaultSubMeshCandidates.length = FF.Om.length, this._defaultSubMeshCandidates
      }
      setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates(), this.getActiveSubMeshCandidates = FF => this._getDefaultSubMeshCandidates(FF), this.getIntersectingSubMeshCandidates = (FF, WF) => this._getDefaultSubMeshCandidates(FF), this.getCollidingSubMeshCandidates = (FF, WF) => this._getDefaultSubMeshCandidates(FF)
      }
      get meshUnderPointer() {
        return this._inputManager.meshUnderPointer
      }
      get pointerX() {
        return this._inputManager.pointerX
      }
      set pointerX(FF) {
        this._inputManager.pointerX = FF
      }
      get pointerY() {
        return this._inputManager.pointerY
      }
      set pointerY(FF) {
        this._inputManager.pointerY = FF
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
      isCachedMaterialInvalid(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this._cachedEffect !== WF || this._cachedMaterial !== FF || this._cachedVisibility !== SF
      }
      sC() {
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
      simulatePointerMove(FF, WF) {
        return this._inputManager.simulatePointerMove(FF, WF), this
      }
      simulatePointerDown(FF, WF) {
        return this._inputManager.simulatePointerDown(FF, WF), this
      }
      simulatePointerUp(FF, WF, SF) {
        return this._inputManager.simulatePointerUp(FF, WF, SF), this
      }
      isPointerCaptured() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._inputManager.isPointerCaptured(FF)
      }
      attachControl() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._inputManager.attachControl(FF, WF, SF)
      }
      detachControl() {
        this._inputManager.detachControl()
      }
      isReady() {
        let FF, WF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        if (this._isDisposed) return !1;
        const SF = this.sC(),
          CF = SF.currentRenderPassId;
        SF.currentRenderPassId = this.activeCamera?.renderPassId ?? CF;
        let AF = !0;
        for (this._pendingData.length > 0 && (AF = !1), this.prePassRenderer?.update(), this.useOrderIndependentTransparency && this.depthPeelingRenderer && AF && (AF = this.depthPeelingRenderer.isReady()), WF && (this._processedMaterials.reset(), this._materialsRenderTargets.reset()), FF = 0; FF < this.meshes.length; FF++) {
          const CF = this.meshes[FF];
          if (!CF.Om || 0 === CF.Om.length) continue;
          if (!CF.isReady(!0)) {
            AF = !1;
            continue
          }
          const uF = CF.hasThinInstances || "InstancedMesh" === CF.getClassName() || "InstancedLinesMesh" === CF.getClassName() || SF.getCaps().instancedArrays && CF.instances.length > 0;
          for (let FF = 0, WF = this._isReadyForMeshStage; FF < WF.length; FF++) {
            WF[FF].action(CF, uF) || (AF = !1)
          }
          if (!WF) continue;
          const hF = CF.material || this.defaultMaterial;
          if (hF)
            if (hF._storeEffectOnSubMeshes)
              for (const FF of CF.Om) {
                const WF = FF.XC();
                WF && WF.hasRenderTargetTextures && null != WF.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(WF) && (this._processedMaterials.push(WF), this._materialsRenderTargets.concatWithNoDuplicate(WF.getRenderTargetTextures()))
              } else hF.hasRenderTargetTextures && null != hF.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(hF) && (this._processedMaterials.push(hF), this._materialsRenderTargets.concatWithNoDuplicate(hF.getRenderTargetTextures()))
        }
        if (WF) {
          for (FF = 0; FF < this._materialsRenderTargets.length; ++FF) {
            this._materialsRenderTargets.data[FF].isReadyForRendering() || (AF = !1)
          }
          for (FF = 0; FF < this.customRenderTargets.length; ++FF) {
            this.customRenderTargets[FF].isReadyForRendering() || (AF = !1)
          }
        }
        for (FF = 0; FF < this.geometries.length; FF++) {
          2 === this.geometries[FF].delayLoadState && (AF = !1)
        }
        if (this.activeCameras && this.activeCameras.length > 0)
          for (const uF of this.activeCameras) uF.isReady(!0) || (AF = !1);
        else this.activeCamera && (this.activeCamera.isReady(!0) || (AF = !1));
        for (const uF of this.Zm) uF.isReady() || (AF = !1);
        if (this.proceduralTexturesEnabled)
          for (const uF of this.proceduralTextures) uF.isReady() || (AF = !1);
        if (this.layers)
          for (const uF of this.layers) uF.isReady() || (AF = !1);
        if (this.effectLayers)
          for (const uF of this.effectLayers) uF.isLayerReady() || (AF = !1);
        for (const uF of this._isReadyChecks) uF.isReady() || (AF = !1);
        return SF.areAllEffectsReady() || (AF = !1), SF.currentRenderPassId = CF, AF
      }
      resetCachedMaterial() {
        this._cachedMaterial = null, this._cachedEffect = null, this._cachedVisibility = null
      }
      registerBeforeRender(FF) {
        this.onBeforeRenderObservable.add(FF)
      }
      unregisterBeforeRender(FF) {
        this.onBeforeRenderObservable.removeCallback(FF)
      }
      registerAfterRender(FF) {
        this.onAfterRenderObservable.add(FF)
      }
      unregisterAfterRender(FF) {
        this.onAfterRenderObservable.removeCallback(FF)
      }
      _executeOnceBeforeRender(FF) {
        const WF = () => {
          FF(), setTimeout((() => {
            this.unregisterBeforeRender(WF)
          }))
        };
        this.registerBeforeRender(WF)
      }
      executeOnceBeforeRender(FF, WF) {
        void 0 !== WF ? setTimeout((() => {
          this._executeOnceBeforeRender(FF)
        }), WF) : this._executeOnceBeforeRender(FF)
      }
      addPendingData(FF) {
        this._pendingData.push(FF)
      }
      removePendingData(FF) {
        const WF = this.isLoading,
          SF = this._pendingData.indexOf(FF); - 1 !== SF && this._pendingData.splice(SF, 1), WF && !this.isLoading && this.onDataLoadedObservable.notifyObservers(this)
      }
      getWaitingItemsCount() {
        return this._pendingData.length
      }
      get isLoading() {
        return this._pendingData.length > 0
      }
      addIsReadyCheck(FF) {
        -1 === this._isReadyChecks.indexOf(FF) && this._isReadyChecks.push(FF)
      }
      removeIsReadyCheck(FF) {
        const WF = this._isReadyChecks.indexOf(FF); - 1 !== WF && this._isReadyChecks.splice(WF, 1)
      }
      executeWhenReady(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.onReadyObservable.addOnce(FF), null === this._executeWhenReadyTimeoutId && this._checkIsReady(WF)
      }
      async whenReadyAsync() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return await new Promise((WF => {
          this.executeWhenReady((() => {
            WF()
          }), FF)
        }))
      }
      _clearReadynessChecksData() {
        this._timeoutChecksStartTime = 0, this.onReadyTimeoutObservable.clear(), this.onReadyObservable.clear(), this._executeWhenReadyTimeoutId = null
      }
      _checkIsReady() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this._registerTransientComponents(), 0 === this._timeoutChecksStartTime) this._timeoutChecksStartTime = uF.d.Now;
        else if (this.onReadyTimeoutDuration > 0 && uF.d.Now - this._timeoutChecksStartTime > this.onReadyTimeoutDuration) return this.onReadyTimeoutObservable.notifyObservers(this), void this._clearReadynessChecksData();
        if (this.isReady(FF)) return this.onReadyObservable.notifyObservers(this), void this._clearReadynessChecksData();
        this._isDisposed ? this._clearReadynessChecksData() : this._executeWhenReadyTimeoutId = setTimeout((() => {
          this.incrementRenderId(), this._checkIsReady(FF)
        }), 100)
      }
      get animatables() {
        return this._activeAnimatables
      }
      resetLastAnimationTimeFrame() {
        this._animationTimeLast = uF.d.Now
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
      setTransformMatrix(FF, WF, SF, CF) {
        this._multiviewSceneUboIsActive = !!(SF && CF && this._multiviewSceneUbo), this._viewUpdateFlag === FF.updateFlag && this._projectionUpdateFlag === WF.updateFlag || (this._viewUpdateFlag = FF.updateFlag, this._projectionUpdateFlag = WF.updateFlag, this._viewMatrix = FF, this._projectionMatrix = WF, this._inverseProjectionMatrix || (this._inverseProjectionMatrix = new RF.b), this._projectionMatrix.invertToRef(this._inverseProjectionMatrix), this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._frustumPlanes ? UF.e.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = UF.e.GetPlanes(this._transformMatrix), this._multiviewSceneUboIsActive && this._multiviewSceneUbo.useUbo ? this._updateMultiviewUbo(SF, CF) : this._sceneUbo.useUbo && (this._sceneUbo.yhF("viewProjection", this._transformMatrix), this._sceneUbo.yhF("view", this._viewMatrix), this._sceneUbo.yhF("projection", this._projectionMatrix), this._sceneUbo.yhF("inverseProjection", this._inverseProjectionMatrix)))
      }
      getSceneUniformBuffer() {
        return this._multiviewSceneUboIsActive && this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo
      }
      createSceneUniformBuffer(FF, WF) {
        const SF = "boolean" === typeof WF ? WF : WF?.trackUBOsInFrame,
          CF = new eF.c(this._engine, void 0, !1, FF ?? "ju", void 0, SF);
        return CF.addUniform("viewProjection", 16), CF.addUniform("view", 16), CF.addUniform("projection", 16), CF.addUniform("vEyePosition", 4), CF.addUniform("inverseProjection", 16), CF
      }
      setSceneUniformBuffer(FF) {
        this._sceneUbo = FF, this._viewUpdateFlag = -1, this._projectionUpdateFlag = -1
      }
      get floatingOriginMode() {
        return void 0 !== this._floatingOriginScene
      }
      get floatingOriginOffset() {
        return this.floatingOriginMode ? this._eyePosition : RF.r.ZeroReadOnly
      }
      getUniqueId() {
        return BF.UniqueId
      }
      gRF(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this._blockEntityCollection && (this.meshes.push(FF), FF._resyncLightSources(), FF.parent || FF._addToSceneRootNodes(), AF.c.SetImmediate((() => {
            this.onNewMeshAddedObservable.notifyObservers(FF)
          })), WF)) {
          const WF = FF.getChildMeshes();
          for (const FF of WF) this.gRF(FF)
        }
      }
      zSF(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const SF = this.meshes.indexOf(FF);
        if (-1 !== SF && (this.meshes.splice(SF, 1), FF.parent || FF._removeFromSceneRootNodes()), this._inputManager._invalidateMesh(FF), this.onMeshRemovedObservable.notifyObservers(FF), WF) {
          const WF = FF.getChildMeshes();
          for (const FF of WF) this.zSF(FF)
        }
        return SF
      }
      addTransformNode(FF) {
        this._blockEntityCollection || FF.OWF() === this && -1 !== FF._indexInSceneTransformNodesArray || (FF._indexInSceneTransformNodesArray = this.transformNodes.length, this.transformNodes.push(FF), FF.parent || FF._addToSceneRootNodes(), this.onNewTransformNodeAddedObservable.notifyObservers(FF))
      }
      removeTransformNode(FF) {
        const WF = FF._indexInSceneTransformNodesArray;
        if (-1 !== WF) {
          if (WF !== this.transformNodes.length - 1) {
            const FF = this.transformNodes[this.transformNodes.length - 1];
            this.transformNodes[WF] = FF, FF._indexInSceneTransformNodesArray = WF
          }
          FF._indexInSceneTransformNodesArray = -1, this.transformNodes.pop(), FF.parent || FF._removeFromSceneRootNodes()
        }
        return this.onTransformNodeRemovedObservable.notifyObservers(FF), WF
      }
      removeSkeleton(FF) {
        const WF = this.skeletons.indexOf(FF);
        return -1 !== WF && (this.skeletons.splice(WF, 1), this.onSkeletonRemovedObservable.notifyObservers(FF), this._executeActiveContainerCleanup(this._activeSkeletons)), WF
      }
      removeMorphTargetManager(FF) {
        const WF = this.morphTargetManagers.indexOf(FF);
        return -1 !== WF && this.morphTargetManagers.splice(WF, 1), WF
      }
      removeLight(FF) {
        const WF = this.lights.indexOf(FF);
        if (-1 !== WF) {
          for (const WF of this.meshes) WF._removeLightSource(FF, !1);
          this.lights.splice(WF, 1), this.sortLightsByPriority(), FF.parent || FF._removeFromSceneRootNodes(), this.onLightRemovedObservable.notifyObservers(FF)
        }
        return WF
      }
      removeCamera(FF) {
        const WF = this.cameras.indexOf(FF);
        if (-1 !== WF && (this.cameras.splice(WF, 1), FF.parent || FF._removeFromSceneRootNodes()), this.activeCameras) {
          const WF = this.activeCameras.indexOf(FF); - 1 !== WF && this.activeCameras.splice(WF, 1)
        }
        return this.activeCamera === FF && (this.cameras.length > 0 ? this.activeCamera = this.cameras[0] : this.activeCamera = null), this.onCameraRemovedObservable.notifyObservers(FF), WF
      }
      removeParticleSystem(FF) {
        const WF = this.Zm.indexOf(FF);
        return -1 !== WF && (this.Zm.splice(WF, 1), this._executeActiveContainerCleanup(this._activeParticleSystems)), this.onParticleSystemRemovedObservable.notifyObservers(FF), WF
      }
      removeAnimation(FF) {
        const WF = this.animations.indexOf(FF);
        return -1 !== WF && this.animations.splice(WF, 1), WF
      }
      stopAnimation(FF, WF, SF) {}
      removeAnimationGroup(FF) {
        const WF = this.animationGroups.indexOf(FF);
        return -1 !== WF && this.animationGroups.splice(WF, 1), this.onAnimationGroupRemovedObservable.notifyObservers(FF), WF
      }
      removeMultiMaterial(FF) {
        const WF = this.multiMaterials.indexOf(FF);
        return -1 !== WF && this.multiMaterials.splice(WF, 1), this.onMultiMaterialRemovedObservable.notifyObservers(FF), WF
      }
      removeMaterial(FF) {
        const WF = FF._indexInSceneMaterialArray;
        if (-1 !== WF && WF < this.materials.length) {
          if (WF !== this.materials.length - 1) {
            const FF = this.materials[this.materials.length - 1];
            this.materials[WF] = FF, FF._indexInSceneMaterialArray = WF
          }
          FF._indexInSceneMaterialArray = -1, this.materials.pop()
        }
        return this.onMaterialRemovedObservable.notifyObservers(FF), WF
      }
      removeActionManager(FF) {
        const WF = this.actionManagers.indexOf(FF);
        return -1 !== WF && this.actionManagers.splice(WF, 1), WF
      }
      removeTexture(FF) {
        const WF = this.textures.indexOf(FF);
        return -1 !== WF && this.textures.splice(WF, 1), this.onTextureRemovedObservable.notifyObservers(FF), WF
      }
      removeFrameGraph(FF) {
        const WF = this.frameGraphs.indexOf(FF);
        return -1 !== WF && this.frameGraphs.splice(WF, 1), this.onFrameGraphRemovedObservable.notifyObservers(FF), WF
      }
      removeObjectRenderer(FF) {
        const WF = this.objectRenderers.indexOf(FF);
        return -1 !== WF && this.objectRenderers.splice(WF, 1), this.onObjectRendererRemovedObservable.notifyObservers(FF), WF
      }
      removePostProcess(FF) {
        const WF = this.postProcesses.indexOf(FF);
        return -1 !== WF && this.postProcesses.splice(WF, 1), this.onPostProcessRemovedObservable.notifyObservers(FF), WF
      }
      removeEffectLayer(FF) {
        const WF = this.effectLayers.indexOf(FF);
        return -1 !== WF && this.effectLayers.splice(WF, 1), this.onEffectLayerRemovedObservable.notifyObservers(FF), WF
      }
      addLight(FF) {
        if (!this._blockEntityCollection) {
          this.lights.push(FF), this.sortLightsByPriority(), FF.parent || FF._addToSceneRootNodes();
          for (const WF of this.meshes) - 1 === WF.lightSources.indexOf(FF) && (WF.lightSources.push(FF), WF._resyncLightSources());
          AF.c.SetImmediate((() => {
            this.onNewLightAddedObservable.notifyObservers(FF)
          }))
        }
      }
      sortLightsByPriority() {
        this.requireLightSorting && this.lights.sort(vW.e.CompareLightsPriority)
      }
      addCamera(FF) {
        this._blockEntityCollection || (this.cameras.push(FF), AF.c.SetImmediate((() => {
          this.onNewCameraAddedObservable.notifyObservers(FF)
        })), FF.parent || FF._addToSceneRootNodes())
      }
      addSkeleton(FF) {
        this._blockEntityCollection || (this.skeletons.push(FF), AF.c.SetImmediate((() => {
          this.onNewSkeletonAddedObservable.notifyObservers(FF)
        })))
      }
      addParticleSystem(FF) {
        this._blockEntityCollection || (this.Zm.push(FF), AF.c.SetImmediate((() => {
          this.onNewParticleSystemAddedObservable.notifyObservers(FF)
        })))
      }
      addAnimation(FF) {
        this._blockEntityCollection || this.animations.push(FF)
      }
      addAnimationGroup(FF) {
        this._blockEntityCollection || (this.animationGroups.push(FF), AF.c.SetImmediate((() => {
          this.onNewAnimationGroupAddedObservable.notifyObservers(FF)
        })))
      }
      addMultiMaterial(FF) {
        this._blockEntityCollection || (this.multiMaterials.push(FF), AF.c.SetImmediate((() => {
          this.onNewMultiMaterialAddedObservable.notifyObservers(FF)
        })))
      }
      addMaterial(FF) {
        this._blockEntityCollection || FF.OWF() === this && -1 !== FF._indexInSceneMaterialArray || (FF._indexInSceneMaterialArray = this.materials.length, this.materials.push(FF), AF.c.SetImmediate((() => {
          this.onNewMaterialAddedObservable.notifyObservers(FF)
        })))
      }
      addMorphTargetManager(FF) {
        this._blockEntityCollection || this.morphTargetManagers.push(FF)
      }
      addGeometry(FF) {
        this._blockEntityCollection || (this._geometriesByUniqueId && (this._geometriesByUniqueId[FF.uniqueId] = this.geometries.length), this.geometries.push(FF))
      }
      addActionManager(FF) {
        this.actionManagers.push(FF)
      }
      addTexture(FF) {
        this._blockEntityCollection || (this.textures.push(FF), this.onNewTextureAddedObservable.notifyObservers(FF))
      }
      addFrameGraph(FF) {
        this.frameGraphs.push(FF), AF.c.SetImmediate((() => {
          this.onNewFrameGraphAddedObservable.notifyObservers(FF)
        }))
      }
      addObjectRenderer(FF) {
        this.objectRenderers.push(FF), AF.c.SetImmediate((() => {
          this.onNewObjectRendererAddedObservable.notifyObservers(FF)
        }))
      }
      addPostProcess(FF) {
        this._blockEntityCollection || (this.postProcesses.push(FF), AF.c.SetImmediate((() => {
          this.onNewPostProcessAddedObservable.notifyObservers(FF)
        })))
      }
      addEffectLayer(FF) {
        this._blockEntityCollection || (this.effectLayers.push(FF), AF.c.SetImmediate((() => {
          this.onNewEffectLayerAddedObservable.notifyObservers(FF)
        })))
      }
      switchActiveCamera(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._engine.getInputElement() && (this.activeCamera && this.activeCamera.detachControl(), this.activeCamera = FF, WF && FF.attachControl())
      }
      setActiveCameraById(FF) {
        const WF = this.getCameraById(FF);
        return WF ? (this.activeCamera = WF, WF) : null
      }
      setActiveCameraByName(FF) {
        const WF = this.getCameraByName(FF);
        return WF ? (this.activeCamera = WF, WF) : null
      }
      getAnimationGroupByName(FF) {
        for (let WF = 0; WF < this.animationGroups.length; WF++)
          if (this.animationGroups[WF].name === FF) return this.animationGroups[WF];
        return null
      }
      _getMaterial(FF, WF) {
        for (let SF = 0; SF < this.materials.length; SF++) {
          const FF = this.materials[SF];
          if (WF(FF)) return FF
        }
        if (FF)
          for (let SF = 0; SF < this.multiMaterials.length; SF++) {
            const FF = this.multiMaterials[SF];
            if (WF(FF)) return FF
          }
        return null
      }
      getMaterialByUniqueID(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.getMaterialByUniqueId(FF, WF)
      }
      getMaterialByUniqueId(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(WF, (WF => WF.uniqueId === FF))
      }
      getMaterialById(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(WF, (WF => WF.id === FF))
      }
      getMaterialByName(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this._getMaterial(WF, (WF => WF.name === FF))
      }
      getLastMaterialById(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        for (let SF = this.materials.length - 1; SF >= 0; SF--)
          if (this.materials[SF].id === FF) return this.materials[SF];
        if (WF)
          for (let SF = this.multiMaterials.length - 1; SF >= 0; SF--)
            if (this.multiMaterials[SF].id === FF) return this.multiMaterials[SF];
        return null
      }
      getTextureByUniqueId(FF) {
        for (let WF = 0; WF < this.textures.length; WF++)
          if (this.textures[WF].uniqueId === FF) return this.textures[WF];
        return null
      }
      getTextureByName(FF) {
        for (let WF = 0; WF < this.textures.length; WF++)
          if (this.textures[WF].name === FF) return this.textures[WF];
        return null
      }
      getCameraById(FF) {
        for (let WF = 0; WF < this.cameras.length; WF++)
          if (this.cameras[WF].id === FF) return this.cameras[WF];
        return null
      }
      getCameraByUniqueId(FF) {
        for (let WF = 0; WF < this.cameras.length; WF++)
          if (this.cameras[WF].uniqueId === FF) return this.cameras[WF];
        return null
      }
      getCameraByName(FF) {
        for (let WF = 0; WF < this.cameras.length; WF++)
          if (this.cameras[WF].name === FF) return this.cameras[WF];
        return null
      }
      getBoneById(FF) {
        for (let WF = 0; WF < this.skeletons.length; WF++) {
          const SF = this.skeletons[WF];
          for (let WF = 0; WF < SF.bones.length; WF++)
            if (SF.bones[WF].id === FF) return SF.bones[WF]
        }
        return null
      }
      getBoneByName(FF) {
        for (let WF = 0; WF < this.skeletons.length; WF++) {
          const SF = this.skeletons[WF];
          for (let WF = 0; WF < SF.bones.length; WF++)
            if (SF.bones[WF].name === FF) return SF.bones[WF]
        }
        return null
      }
      getLightByName(FF) {
        for (let WF = 0; WF < this.lights.length; WF++)
          if (this.lights[WF].name === FF) return this.lights[WF];
        return null
      }
      getLightById(FF) {
        for (let WF = 0; WF < this.lights.length; WF++)
          if (this.lights[WF].id === FF) return this.lights[WF];
        return null
      }
      getLightByUniqueId(FF) {
        for (let WF = 0; WF < this.lights.length; WF++)
          if (this.lights[WF].uniqueId === FF) return this.lights[WF];
        return null
      }
      getParticleSystemById(FF) {
        for (let WF = 0; WF < this.Zm.length; WF++)
          if (this.Zm[WF].id === FF) return this.Zm[WF];
        return null
      }
      getGeometryById(FF) {
        for (let WF = 0; WF < this.geometries.length; WF++)
          if (this.geometries[WF].id === FF) return this.geometries[WF];
        return null
      }
      _getGeometryByUniqueId(FF) {
        if (this._geometriesByUniqueId) {
          const WF = this._geometriesByUniqueId[FF];
          if (void 0 !== WF) return this.geometries[WF]
        } else
          for (let WF = 0; WF < this.geometries.length; WF++)
            if (this.geometries[WF].uniqueId === FF) return this.geometries[WF];
        return null
      }
      getFrameGraphByName(FF) {
        for (let WF = 0; WF < this.frameGraphs.length; WF++)
          if (this.frameGraphs[WF].name === FF) return this.frameGraphs[WF];
        return null
      }
      pushGeometry(FF, WF) {
        return !(!WF && this._getGeometryByUniqueId(FF.uniqueId)) && (this.addGeometry(FF), AF.c.SetImmediate((() => {
          this.onNewGeometryAddedObservable.notifyObservers(FF)
        })), !0)
      }
      removeGeometry(FF) {
        let WF;
        if (this._geometriesByUniqueId) {
          if (WF = this._geometriesByUniqueId[FF.uniqueId], void 0 === WF) return !1
        } else if (WF = this.geometries.indexOf(FF), WF < 0) return !1;
        if (WF !== this.geometries.length - 1) {
          const FF = this.geometries[this.geometries.length - 1];
          FF && (this.geometries[WF] = FF, this._geometriesByUniqueId && (this._geometriesByUniqueId[FF.uniqueId] = WF))
        }
        return this._geometriesByUniqueId && (this._geometriesByUniqueId[FF.uniqueId] = void 0), this.geometries.pop(), this.onGeometryRemovedObservable.notifyObservers(FF), !0
      }
      getGeometries() {
        return this.geometries
      }
      getMeshById(FF) {
        for (let WF = 0; WF < this.meshes.length; WF++)
          if (this.meshes[WF].id === FF) return this.meshes[WF];
        return null
      }
      getMeshesById(FF) {
        return this.meshes.filter((function(WF) {
          return WF.id === FF
        }))
      }
      getTransformNodeById(FF) {
        for (let WF = 0; WF < this.transformNodes.length; WF++)
          if (this.transformNodes[WF].id === FF) return this.transformNodes[WF];
        return null
      }
      getTransformNodeByUniqueId(FF) {
        for (let WF = 0; WF < this.transformNodes.length; WF++)
          if (this.transformNodes[WF].uniqueId === FF) return this.transformNodes[WF];
        return null
      }
      getTransformNodesById(FF) {
        return this.transformNodes.filter((function(WF) {
          return WF.id === FF
        }))
      }
      getMeshByUniqueId(FF) {
        for (let WF = 0; WF < this.meshes.length; WF++)
          if (this.meshes[WF].uniqueId === FF) return this.meshes[WF];
        return null
      }
      getLastMeshById(FF) {
        for (let WF = this.meshes.length - 1; WF >= 0; WF--)
          if (this.meshes[WF].id === FF) return this.meshes[WF];
        return null
      }
      getLastTransformNodeById(FF) {
        for (let WF = this.transformNodes.length - 1; WF >= 0; WF--)
          if (this.transformNodes[WF].id === FF) return this.transformNodes[WF];
        return null
      }
      getLastEntryById(FF) {
        let WF;
        for (WF = this.meshes.length - 1; WF >= 0; WF--)
          if (this.meshes[WF].id === FF) return this.meshes[WF];
        for (WF = this.transformNodes.length - 1; WF >= 0; WF--)
          if (this.transformNodes[WF].id === FF) return this.transformNodes[WF];
        for (WF = this.cameras.length - 1; WF >= 0; WF--)
          if (this.cameras[WF].id === FF) return this.cameras[WF];
        for (WF = this.lights.length - 1; WF >= 0; WF--)
          if (this.lights[WF].id === FF) return this.lights[WF];
        for (WF = this.skeletons.length - 1; WF >= 0; WF--) {
          const SF = this.skeletons[WF];
          for (let WF = SF.bones.length - 1; WF >= 0; WF--)
            if (SF.bones[WF].id === FF) return SF.bones[WF]
        }
        return null
      }
      getNodeById(FF) {
        const WF = this.getMeshById(FF);
        if (WF) return WF;
        const SF = this.getTransformNodeById(FF);
        if (SF) return SF;
        const CF = this.getLightById(FF);
        if (CF) return CF;
        const AF = this.getCameraById(FF);
        if (AF) return AF;
        const uF = this.getBoneById(FF);
        return uF || null
      }
      getNodeByName(FF) {
        const WF = this.getMeshByName(FF);
        if (WF) return WF;
        const SF = this.getTransformNodeByName(FF);
        if (SF) return SF;
        const CF = this.getLightByName(FF);
        if (CF) return CF;
        const AF = this.getCameraByName(FF);
        if (AF) return AF;
        const uF = this.getBoneByName(FF);
        return uF || null
      }
      getMeshByName(FF) {
        for (let WF = 0; WF < this.meshes.length; WF++)
          if (this.meshes[WF].name === FF) return this.meshes[WF];
        return null
      }
      getTransformNodeByName(FF) {
        for (let WF = 0; WF < this.transformNodes.length; WF++)
          if (this.transformNodes[WF].name === FF) return this.transformNodes[WF];
        return null
      }
      getLastSkeletonById(FF) {
        for (let WF = this.skeletons.length - 1; WF >= 0; WF--)
          if (this.skeletons[WF].id === FF) return this.skeletons[WF];
        return null
      }
      getSkeletonByUniqueId(FF) {
        for (let WF = 0; WF < this.skeletons.length; WF++)
          if (this.skeletons[WF].uniqueId === FF) return this.skeletons[WF];
        return null
      }
      getSkeletonById(FF) {
        for (let WF = 0; WF < this.skeletons.length; WF++)
          if (this.skeletons[WF].id === FF) return this.skeletons[WF];
        return null
      }
      getSkeletonByName(FF) {
        for (let WF = 0; WF < this.skeletons.length; WF++)
          if (this.skeletons[WF].name === FF) return this.skeletons[WF];
        return null
      }
      getMorphTargetManagerById(FF) {
        for (let WF = 0; WF < this.morphTargetManagers.length; WF++)
          if (this.morphTargetManagers[WF].uniqueId === FF) return this.morphTargetManagers[WF];
        return null
      }
      getMorphTargetById(FF) {
        for (let WF = 0; WF < this.morphTargetManagers.length; ++WF) {
          const SF = this.morphTargetManagers[WF];
          for (let WF = 0; WF < SF.numTargets; ++WF) {
            const CF = SF.getTarget(WF);
            if (CF.id === FF) return CF
          }
        }
        return null
      }
      getMorphTargetByName(FF) {
        for (let WF = 0; WF < this.morphTargetManagers.length; ++WF) {
          const SF = this.morphTargetManagers[WF];
          for (let WF = 0; WF < SF.numTargets; ++WF) {
            const CF = SF.getTarget(WF);
            if (CF.name === FF) return CF
          }
        }
        return null
      }
      getPostProcessByName(FF) {
        for (let WF = 0; WF < this.postProcesses.length; ++WF) {
          const SF = this.postProcesses[WF];
          if (SF.name === FF) return SF
        }
        return null
      }
      isActiveMesh(FF) {
        return -1 !== this._activeMeshes.indexOf(FF)
      }
      get uid() {
        return this._uid || (this._uid = CF.h.RandomId()), this._uid
      }
      addExternalData(FF, WF) {
        return this._externalData || (this._externalData = new dF), this._externalData.add(FF, WF)
      }
      getExternalData(FF) {
        return this._externalData ? this._externalData.get(FF) : null
      }
      getOrAddExternalDataWithFactory(FF, WF) {
        return this._externalData || (this._externalData = new dF), this._externalData.getOrAddWithFactory(FF, WF)
      }
      removeExternalData(FF) {
        return this._externalData.remove(FF)
      }
      _evaluateSubMesh(FF, WF, SF, CF) {
        if (CF || FF.isInFrustum(this._frustumPlanes)) {
          for (let CF = 0, AF = this._evaluateSubMeshStage; CF < AF.length; CF++) {
            AF[CF].action(WF, FF)
          }
          const SF = FF.XC();
          null !== SF && void 0 !== SF && (SF.hasRenderTargetTextures && null != SF.getRenderTargetTextures && -1 === this._processedMaterials.indexOf(SF) && (this._processedMaterials.push(SF), this._materialsRenderTargets.concatWithNoDuplicate(SF.getRenderTargetTextures())), this._renderingManager.dispatch(FF, WF, SF))
        }
      }
      freeProcessedMaterials() {
        this._processedMaterials.dispose()
      }
      get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups
      }
      set blockfreeActiveMeshesAndRenderingGroups(FF) {
        this._preventFreeActiveMeshesAndRenderingGroups !== FF && (FF && (this.freeActiveMeshes(), this.freeRenderingGroups()), this._preventFreeActiveMeshesAndRenderingGroups = FF)
      }
      freeActiveMeshes() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._activeMeshes.dispose(), this.activeCamera && this.activeCamera._activeMeshes && this.activeCamera._activeMeshes.dispose(), this.activeCameras))
          for (let FF = 0; FF < this.activeCameras.length; FF++) {
            const WF = this.activeCameras[FF];
            WF && WF._activeMeshes && WF._activeMeshes.dispose()
          }
      }
      freeRenderingGroups() {
        if (!this.blockfreeActiveMeshesAndRenderingGroups && (this._renderingManager && this._renderingManager.freeRenderingGroups(), this.textures))
          for (let FF = 0; FF < this.textures.length; FF++) {
            const WF = this.textures[FF];
            WF && WF.renderList && WF.freeRenderingGroups()
          }
      }
      _isInIntermediateRendering() {
        return this._intermediateRendering
      }
      _isInRenderingMeshEvaluation() {
        return this._renderingMeshEvaluationDepth > 0
      }
      freezeActiveMeshes() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          WF = arguments.length > 1 ? arguments[1] : void 0,
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          uF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (this.frameGraph) {
          this._renderWithFrameGraph(!0, !1, !0);
          const hF = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const FF of hF) FF.objectRenderer._freezeActiveMeshes(CF);
          return this._freezeActiveMeshesCancel = (0, AF.f)((() => {
            let FF = !0,
              WF = !0;
            for (const SF of hF) FF && (FF = SF.objectRenderer._isFrozen), WF && (WF = null !== SF.objectRenderer._freezeActiveMeshesCancel);
            if (FF) return !0;
            if (!WF) throw new Error("Freezing active meshes was cancelled");
            return !1
          }), (() => {
            this._freezeActiveMeshesCancel = null, this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = uF, this._skipEvaluateActiveMeshesCompletely = FF, WF?.()
          }), ((FF, WF) => {
            if (this._freezeActiveMeshesCancel = null, this.unfreezeActiveMeshes(), WF) {
              const WF = "Scene: Timeout while waiting for meshes to be frozen.";
              SF ? SF(WF) : (FS.b.Error(WF), FF && FS.b.Error(FF))
            } else {
              const WF = "Scene: An unexpected error occurred while trying to freeze active meshes.";
              SF ? SF(WF) : (FS.b.Error(WF), FF && (FS.b.Error(FF), FF.stack && FS.b.Error(FF.stack)))
            }
          })), this
        }
        return this.executeWhenReady((() => {
          if (this.activeCamera) {
            if (this._frustumPlanes || this.updateTransformMatrix(), this._evaluateActiveMeshes(), this._activeMeshesFrozen = !0, this._activeMeshesFrozenButKeepClipping = uF, this._skipEvaluateActiveMeshesCompletely = FF, CF)
              for (let FF = 0; FF < this._activeMeshes.length; FF++) this._activeMeshes.data[FF]._freeze();
            WF && WF()
          } else SF && SF("No active camera found")
        })), this
      }
      unfreezeActiveMeshes() {
        for (let FF = 0; FF < this.meshes.length; FF++) {
          const WF = this.meshes[FF];
          WF._internalAbstractMeshDataInfo && (WF._internalAbstractMeshDataInfo._isActive = !1)
        }
        if (this._freezeActiveMeshesCancel?.(), this._freezeActiveMeshesCancel = null, this.frameGraph) {
          const FF = this.frameGraph.getTasksByClassName(["FrameGraphObjectRendererTask", "FrameGraphGeometryRendererTask"]);
          for (const WF of FF) WF.objectRenderer._unfreezeActiveMeshes()
        } else
          for (let FF = 0; FF < this._activeMeshes.length; FF++) this._activeMeshes.data[FF]._unFreeze();
        return this._activeMeshesFrozen = !1, this
      }
      _executeActiveContainerCleanup(FF) {
        (!this._engine.snapshotRendering || 1 !== this._engine.snapshotRenderingMode) && this._activeMeshesFrozen && this._activeMeshes.length || this.onBeforeRenderObservable.addOnce((() => FF.dispose()))
      }
      _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) return void(this._activeMeshes.length > 0 && (this.activeCamera?._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset()));
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
          if (!this._skipEvaluateActiveMeshesCompletely) {
            const FF = this._activeMeshes.length;
            for (let WF = 0; WF < FF; WF++) {
              this._activeMeshes.data[WF].computeWorldMatrix()
            }
          }
          if (this._activeParticleSystems) {
            const FF = this._activeParticleSystems.length;
            for (let WF = 0; WF < FF; WF++) this._activeParticleSystems.data[WF].animate()
          }
          return void this._renderingManager.resetSprites()
        }
        if (!this.activeCamera) return;
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this), this.activeCamera._activeMeshes.reset(), this._activeMeshes.reset(), this._renderingManager.reset(), this._processedMaterials.reset(), this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset(), this._materialsRenderTargets.reset();
        for (let AF = 0, uF = this._beforeEvaluateActiveMeshStage; AF < uF.length; AF++) {
          uF[AF].action()
        }
        const FF = this.getActiveMeshCandidates(),
          WF = FF.length,
          SF = wF.b.Enabled,
          CF = this.customLODSelector;
        for (let AF = 0; AF < WF; AF++) {
          const WF = FF.data[AF],
            uF = !CF && !WF.ZWF && !WF._internalMeshDataInfo?._LODLevels.length;
          let hF, bW;
          if ((uF || (hF = WF._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera), hF ? hF[1] = -1 : (hF = [WF, -1], WF._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, hF))), !WF.isBlocked) && (SF && this._totalVertices.addCount(WF.getTotalVertices(), !1), WF.isReady() && WF.isEnabled() && !WF.Ah.hasAZeroComponent)) {
            if (WF.computeWorldMatrix(), WF.actionManager && WF.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(WF), uF) bW = WF;
            else if (bW = CF ? CF(WF, this.activeCamera) : WF.getLOD(this.activeCamera), hF[0] = bW, hF[1] = this._frameId, void 0 === bW || null === bW) continue;
            if (bW !== WF && 0 !== bW.billboardMode && bW.computeWorldMatrix(), WF._preActivate(), WF.isVisible && WF.visibility > 0 && 0 !== (WF.layerMask & this.activeCamera.layerMask) && (this._skipFrustumClipping || WF.nC || WF.isInFrustum(this._frustumPlanes))) {
              this._activeMeshes.push(WF), this.activeCamera._activeMeshes.push(WF), bW !== WF && bW._activate(this._renderId, !1);
              for (let FF = 0, SF = this._preActiveMeshStage; FF < SF.length; FF++) {
                SF[FF].action(WF)
              }
              WF._activate(this._renderId, !1) && (WF.ZWF ? WF._internalAbstractMeshDataInfo._actAsRegularMesh && (bW = WF) : bW._internalAbstractMeshDataInfo._onlyForInstances = !1, bW._internalAbstractMeshDataInfo._isActive = !0, this._activeMesh(WF, bW)), WF._postActivate()
            }
          }
        }
        if (this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this), this.particlesEnabled) {
          this.onBeforeParticlesRenderingObservable.notifyObservers(this);
          for (let FF = 0; FF < this.Zm.length; FF++) {
            const WF = this.Zm[FF];
            if (!WF.isStarted() || !WF.emitter) continue;
            const SF = WF.emitter;
            SF.position && !SF.isEnabled() || (this._activeParticleSystems.push(WF), WF.animate(), this._renderingManager.dispatchParticles(WF))
          }
          this.onAfterParticlesRenderingObservable.notifyObservers(this)
        }
      }
      _prepareSkeleton(FF) {
        this._skeletonsEnabled && FF.skeleton && (this._activeSkeletons.pushNoDuplicate(FF.skeleton) && (FF.skeleton.prepare(), this._activeBones.addCount(FF.skeleton.bones.length, !1)), FF.computeBonesUsingShaders || this._softwareSkinnedMeshes.pushNoDuplicate(FF) && this.frameGraph && FF.applySkeleton(FF.skeleton))
      }
      _activeMesh(FF, WF) {
        this._prepareSkeleton(WF);
        let SF = FF.RRF || FF.ZWF || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || WF.nC;
        if (WF && WF.Om && WF.Om.length > 0) {
          const CF = this.getActiveSubMeshCandidates(WF),
            AF = CF.length;
          SF = SF || 1 === AF;
          for (let uF = 0; uF < AF; uF++) {
            const AF = CF.data[uF];
            this._evaluateSubMesh(AF, WF, FF, SF)
          }
        }
      }
      updateTransformMatrix(FF) {
        const WF = this.activeCamera;
        if (WF)
          if (WF._renderingMultiview) {
            const SF = WF._rigCameras[0],
              CF = WF._rigCameras[1];
            this.setTransformMatrix(SF.getViewMatrix(), SF.getProjectionMatrix(FF), CF.getViewMatrix(), CF.getProjectionMatrix(FF))
          } else this.setTransformMatrix(WF.getViewMatrix(), WF.getProjectionMatrix(FF))
      }
      _bindFrameBuffer(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        this._useCurrentFrameBuffer || (FF && FF._multiviewTexture ? FF._multiviewTexture._bindFrameBuffer() : FF && FF.outputRenderTarget ? FF.outputRenderTarget._bindFrameBuffer() : this._engine._currentFrameBufferIsDefaultFrameBuffer() || this._engine.restoreDefaultFramebuffer()), WF && this._clearFrameBuffer(FF)
      }
      _clearFrameBuffer(FF) {
        if (FF && FF._multiviewTexture);
        else if (FF && FF.outputRenderTarget && !FF._renderingMultiview) {
          const WF = FF.outputRenderTarget;
          WF.onClearObservable.hasObservers() ? WF.onClearObservable.notifyObservers(this._engine) : WF.skipInitialClear || FF.isRightCamera || (this.autoClear && this._engine.clear(WF.clearColor || this._clearColor, !WF._cleared, !0, !0), WF._cleared = !0)
        } else this._defaultFrameBufferCleared ? this._engine.clear(null, !1, !0, !0) : (this._defaultFrameBufferCleared = !0, this._clear())
      }
      _renderForCamera(FF, WF) {
        let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (FF && FF._skipRendering) return;
        const AF = this._engine;
        if (this._activeCamera = FF, !this.activeCamera) throw new Error("Active camera not set");
        if (AF.setViewport(this.activeCamera.viewport), this.resetCachedMaterial(), this._renderId++, !this.prePass && SF) {
          let WF = !0;
          FF._renderingMultiview && FF.outputRenderTarget && (WF = FF.outputRenderTarget.skipInitialClear, this.autoClear && (this._defaultFrameBufferCleared = !1, FF.outputRenderTarget.skipInitialClear = !1)), this._bindFrameBuffer(this._activeCamera), FF._renderingMultiview && FF.outputRenderTarget && (FF.outputRenderTarget.skipInitialClear = WF)
        }
        this.updateTransformMatrix(), this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera), this._engine.currentRenderPassId = FF.outputRenderTarget?.renderPassId ?? FF.renderPassId ?? 0, this._evaluateActiveMeshes();
        for (let CF = 0; CF < this._softwareSkinnedMeshes.length; CF++) {
          const FF = this._softwareSkinnedMeshes.data[CF];
          FF.applySkeleton(FF.skeleton)
        }
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets), FF.customRenderTargets && FF.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(FF.customRenderTargets), WF && WF.customRenderTargets && WF.customRenderTargets.length > 0 && this._renderTargets.concatWithNoDuplicate(WF.customRenderTargets), this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture);
        for (let CF = 0, bW = this._gatherActiveCameraRenderTargetsStage; CF < bW.length; CF++) {
          bW[CF].action(this._renderTargets)
        }
        let uF = !1;
        if (this.renderTargetsEnabled) {
          let FF;
          if (this._intermediateRendering = !0, this._renderTargets.length > 0) {
            CF.h.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
            const WF = this.getBoundingBoxRenderer?.();
            for (let SF = 0; SF < this._renderTargets.length; SF++) {
              const CF = this._renderTargets.data[SF];
              if (CF._shouldRender()) {
                this._renderId++;
                const SF = CF.activeCamera && CF.activeCamera !== this.activeCamera;
                WF && !FF && (FF = WF.renderList.length > 0 ? WF.renderList.data.slice() : [], FF.length = WF.renderList.length), CF.render(SF, this.dumpNextRenderTargets), uF = !0
              }
            }
            WF && FF && (WF.renderList.data = FF, WF.renderList.length = FF.length), CF.h.EndPerformanceCounter("Render targets", this._renderTargets.length > 0), this._renderId++
          }
          if (this._cameraDrawRenderTargetStage.length > 0) {
            const WF = this.getBoundingBoxRenderer?.();
            WF && !FF && (FF = WF.renderList.length > 0 ? WF.renderList.data.slice() : [], FF.length = WF.renderList.length);
            for (let FF = 0, SF = this._cameraDrawRenderTargetStage; FF < SF.length; FF++) {
              uF = SF[FF].action(this.activeCamera) || uF
            }
            WF && FF && (WF.renderList.data = FF, WF.renderList.length = FF.length)
          }
          this._intermediateRendering = !1
        }
        uF && !this.prePass && (this._bindFrameBuffer(this._activeCamera, !1), this.updateTransformMatrix()), this.onAfterRenderTargetsRenderObservable.notifyObservers(this), !this.postProcessManager || FF._multiviewTexture || this.prePass || this.postProcessManager._prepareFrame();
        for (let CF = 0, bW = this._beforeCameraDrawStage; CF < bW.length; CF++) {
          bW[CF].action(this.activeCamera)
        }
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        const hF = AF.snapshotRendering && 1 === AF.snapshotRenderingMode;
        hF && this.finalizeSceneUbo(), this._renderingManager.render(null, null, !0, !hF), this.onAfterDrawPhaseObservable.notifyObservers(this);
        for (let CF = 0, bW = this._afterCameraDrawStage; CF < bW.length; CF++) {
          bW[CF].action(this.activeCamera)
        }
        if (this.postProcessManager && !FF._multiviewTexture) {
          const WF = FF.outputRenderTarget ? FF.outputRenderTarget.renderTarget : void 0;
          this.postProcessManager._finalizeFrame(FF.isIntermediate, WF)
        }
        for (let CF = 0, bW = this._afterCameraPostProcessStage; CF < bW.length; CF++) {
          bW[CF].action(this.activeCamera)
        }
        this._renderTargets.reset(), this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera)
      }
      _processSubCameras(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (0 === FF.cameraRigMode || FF._renderingMultiview) return FF._renderingMultiview && !this._multiviewSceneUbo && this._createMultiviewUbo(), this._renderForCamera(FF, void 0, WF), void this.onAfterRenderCameraObservable.notifyObservers(FF);
        if (FF._useMultiviewToSingleView) this._renderMultiviewToSingleView(FF);
        else {
          this.onBeforeCameraRenderObservable.notifyObservers(FF);
          for (let WF = 0; WF < FF._rigCameras.length; WF++) this._renderForCamera(FF._rigCameras[WF], FF)
        }
        this._activeCamera = FF, this.updateTransformMatrix(), this.onAfterRenderCameraObservable.notifyObservers(FF)
      }
      _checkIntersections() {
        for (let FF = 0; FF < this._meshesForIntersections.length; FF++) {
          const WF = this._meshesForIntersections.data[FF];
          if (WF.actionManager)
            for (let FF = 0; WF.actionManager && FF < WF.actionManager.actions.length; FF++) {
              const SF = WF.actionManager.actions[FF];
              if (12 === SF.trigger || 13 === SF.trigger) {
                const FF = SF.getTriggerParameter(),
                  CF = FF.mesh ? FF.mesh : FF,
                  AF = CF.ARF(WF, FF.usePreciseIntersection),
                  uF = WF._intersectionsInProgress.indexOf(CF);
                AF && -1 === uF ? 12 === SF.trigger ? (SF._executeCurrent(QF.CreateNew(WF, void 0, CF)), WF._intersectionsInProgress.push(CF)) : 13 === SF.trigger && WF._intersectionsInProgress.push(CF) : !AF && uF > -1 && (13 === SF.trigger && SF._executeCurrent(QF.CreateNew(WF, void 0, CF)), WF.actionManager.hasSpecificTrigger(13, (FF => {
                  const WF = FF.mesh ? FF.mesh : FF;
                  return CF === WF
                })) && 13 !== SF.trigger || WF._intersectionsInProgress.splice(uF, 1))
              }
            }
        }
      }
      _advancePhysicsEngineStep(FF) {}
      _animate(FF) {}
      animate() {
        if (this._engine.isDeterministicLockStep()) {
          let FF = Math.max(uS.MinDeltaTime, Math.min(this._engine.getDeltaTime(), uS.MaxDeltaTime)) + this._timeAccumulator;
          const WF = this._engine.getTimeStep(),
            SF = 1e3 / WF / 1e3;
          let CF = 0;
          const AF = this._engine.getLockstepMaxSteps();
          let uF = Math.floor(FF / WF);
          for (uF = Math.min(uF, AF); FF > 0 && CF < uF;) this.onBeforeStepObservable.notifyObservers(this), this._animationRatio = WF * SF, this._animate(WF), this.onAfterAnimationsObservable.notifyObservers(this), this.NSF && this._advancePhysicsEngineStep(WF), this.onAfterStepObservable.notifyObservers(this), this._currentStepId++, CF++, FF -= WF;
          this._timeAccumulator = FF < 0 ? 0 : FF
        } else {
          const FF = this.useConstantAnimationDeltaTime ? 16 : Math.max(uS.MinDeltaTime, Math.min(this._engine.getDeltaTime(), uS.MaxDeltaTime));
          this._animationRatio = .06 * FF, this._animate(), this.onAfterAnimationsObservable.notifyObservers(this), this.NSF && this._advancePhysicsEngineStep(FF)
        }
      }
      _clear() {
        (this.autoClearDepthAndStencil || this.autoClear) && this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil)
      }
      _checkCameraRenderTarget(FF) {
        if (FF?.outputRenderTarget && !FF?.isRigCamera && (FF.outputRenderTarget._cleared = !1), FF?.rigCameras?.length)
          for (let WF = 0; WF < FF.rigCameras.length; ++WF) {
            const SF = FF.rigCameras[WF].outputRenderTarget;
            SF && (SF._cleared = !1)
          }
      }
      resetDrawCache(FF) {
        if (this.meshes)
          for (const WF of this.meshes) WF.resetDrawCache(FF)
      }
      _renderWithFrameGraph() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          WF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.activeCamera = null, this.activeCameras = null, FF)
          for (const SF of this.cameras)
            if (SF.update(), 0 !== SF.cameraRigMode)
              for (let FF = 0; FF < SF._rigCameras.length; FF++) SF._rigCameras[FF].update();
        this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++;
        try {
          this._renderWithFrameGraphAfterBeforeRender(WF)
        } finally {
          this._renderingMeshEvaluationDepth--
        }
      }
      _renderWithFrameGraphAfterBeforeRender(FF) {
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this), this._renderTargets.reset();
        const WF = this._frameGraph?.findMainCamera() ?? null;
        if (this.renderTargetsEnabled) {
          this.environmentTexture && this.environmentTexture.isRenderTarget && this._renderTargets.pushNoDuplicate(this.environmentTexture), this._renderTargets.concatWithNoDuplicate(this.customRenderTargets), CF.h.StartPerformanceCounter("Custom render targets", this._renderTargets.length > 0);
          for (let FF = 0; FF < this._renderTargets.length; FF++) {
            const SF = this._renderTargets.data[FF],
              CF = SF.activeCamera || WF;
            this._renderRenderTarget(SF, CF, !0, this.dumpNextRenderTargets)
          }
          CF.h.EndPerformanceCounter("Custom render targets", this._renderTargets.length > 0), this._renderId++
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        for (let SF = 0, CF = this._beforeClearStage; SF < CF.length; SF++) {
          CF[SF].action()
        }
        if (this._engine.snapshotRendering && 1 === this._engine.snapshotRenderingMode) this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
        else {
          const WF = this.getActiveMeshCandidates(),
            SF = WF.length;
          if (this._activeMeshesFrozen) {
            if (!this._skipEvaluateActiveMeshesCompletely)
              for (let FF = 0; FF < SF; FF++) {
                const SF = WF.data[FF];
                SF._internalAbstractMeshDataInfo._wasActiveLastFrame && SF.computeWorldMatrix()
              }
            if (this.particlesEnabled) {
              const FF = this._activeParticleSystems.length;
              for (let WF = 0; WF < FF; WF++) this._activeParticleSystems.data[WF].animate()
            }
          } else {
            this._activeParticleSystems.reset(), this._activeSkeletons.reset(), this._softwareSkinnedMeshes.reset();
            for (let CF = 0; CF < SF; CF++) {
              const SF = WF.data[CF];
              SF._internalAbstractMeshDataInfo._wasActiveLastFrame = !1, SF.isBlocked || (this._totalVertices.addCount(SF.getTotalVertices(), !1), SF.isReady() && SF.isEnabled() && !SF.Ah.hasAZeroComponent && (SF.computeWorldMatrix(FF), SF.actionManager && SF.actionManager.hasSpecificTriggers2(12, 13) && this._meshesForIntersections.pushNoDuplicate(SF)))
            }
            if (this.particlesEnabled)
              for (let FF = 0; FF < this.Zm.length; FF++) {
                const WF = this.Zm[FF];
                if (!WF.isStarted() || !WF.emitter) continue;
                const SF = WF.emitter;
                SF.position && !SF.isEnabled() || (this._activeParticleSystems.push(WF), WF.animate())
              }
          }
        }
        this.frameGraph?.execute()
      }
      _renderRenderTarget(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._intermediateRendering = !0, FF._shouldRender()) {
          if (this._renderId++, this.activeCamera = WF, !this.activeCamera) throw new Error("Active camera not set");
          this._engine.setViewport(this.activeCamera.viewport), this.updateTransformMatrix(), FF.render(SF, CF)
        }
        this._intermediateRendering = !1
      }
      render() {
        let FF = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.ZdF) return;
        const SF = this._renderingMeshEvaluationDepth;
        try {
          this._renderFrame(FF, WF)
        } finally {
          this._renderingMeshEvaluationDepth = SF
        }
      }
      _renderFrame(FF, WF) {
        if (this.onReadyObservable.hasObservers() && null === this._executeWhenReadyTimeoutId && this._checkIsReady(), gW.e.OWF = this._getFloatingOriginScene, this._frameId++, this._defaultFrameBufferCleared = !1, this._checkCameraRenderTarget(this.activeCamera), this.activeCameras?.length)
          for (const SF of this.activeCameras) this._checkCameraRenderTarget(SF);
        this._registerTransientComponents(), this._activeParticles.fetchNewFrame(), this._totalVertices.fetchNewFrame(), this._activeIndices.fetchNewFrame(), this._activeBones.fetchNewFrame(), this._meshesForIntersections.reset(), this.resetCachedMaterial(), this.onBeforeAnimationsObservable.notifyObservers(this), this.actionManager && this.actionManager.processTrigger(11), WF || this.animate();
        for (let SF = 0, CF = this._beforeCameraUpdateStage; SF < CF.length; SF++) {
          CF[SF].action()
        }
        if (FF)
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let SF = 0; SF < this.activeCameras.length; SF++) {
              const FF = this.activeCameras[SF];
              if (FF.update(), 0 !== FF.cameraRigMode)
                for (let WF = 0; WF < FF._rigCameras.length; WF++) FF._rigCameras[WF].update()
            } else if (this.activeCamera && (this.activeCamera.update(), 0 !== this.activeCamera.cameraRigMode))
              for (let SF = 0; SF < this.activeCamera._rigCameras.length; SF++) this.activeCamera._rigCameras[SF].update();
        if (this.customRenderFunction) this._renderId++, this._engine.currentRenderPassId = 0, this._renderingMeshEvaluationDepth++, this.customRenderFunction(FF, WF);
        else {
          this.onBeforeRenderObservable.notifyObservers(this), this._renderingMeshEvaluationDepth++, this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
          const FF = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
          if (this.renderTargetsEnabled) {
            CF.h.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
            for (let WF = 0; WF < this.customRenderTargets.length; WF++) {
              const SF = this.customRenderTargets[WF],
                CF = SF.activeCamera || this.activeCamera;
              this._renderRenderTarget(SF, CF, FF !== CF, this.dumpNextRenderTargets)
            }
            CF.h.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0), this._renderId++
          }
          this._engine.currentRenderPassId = FF?.renderPassId ?? 0, this.activeCamera = FF, this._activeCamera && 22 !== this._activeCamera.cameraRigMode && !this.prePass && this._bindFrameBuffer(this._activeCamera, !1), this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
          for (let WF = 0, SF = this._beforeClearStage; WF < SF.length; WF++) {
            SF[WF].action()
          }
          this._clearFrameBuffer(this.activeCamera);
          for (let WF = 0, SF = this._gatherRenderTargetsStage; WF < SF.length; WF++) {
            SF[WF].action(this._renderTargets)
          }
          if (this.activeCameras && this.activeCameras.length > 0)
            for (let WF = 0; WF < this.activeCameras.length; WF++) this._processSubCameras(this.activeCameras[WF], WF > 0);
          else {
            if (!this.activeCamera) throw new Error("No camera defined");
            this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget)
          }
        }
        this._inputManager._updateMeshUnderPointer(), this._checkIntersections();
        for (let SF = 0, CF = this._afterRenderStage; SF < CF.length; SF++) {
          CF[SF].action()
        }
        if (this.afterRender && this.afterRender(), this.onAfterRenderObservable.notifyObservers(this), this._toBeDisposed.length) {
          for (let FF = 0; FF < this._toBeDisposed.length; FF++) {
            const WF = this._toBeDisposed[FF];
            WF && WF.dispose()
          }
          this._toBeDisposed.length = 0
        }
        this.dumpNextRenderTargets && (this.dumpNextRenderTargets = !1), this._activeBones.addCount(0, !0), this._activeIndices.addCount(0, !0), this._activeParticles.addCount(0, !0), this._engine.restoreDefaultFramebuffer()
      }
      freezeMaterials() {
        for (let FF = 0; FF < this.materials.length; FF++) this.materials[FF].freeze()
      }
      unfreezeMaterials() {
        for (let FF = 0; FF < this.materials.length; FF++) this.materials[FF].unfreeze()
      }
      dispose() {
        if (this.ZdF) return;
        if (this._isDisposing = !0, this.beforeRender = null, this.afterRender = null, this.metadata = null, this.skeletons.length = 0, this.morphTargetManagers.length = 0, this._transientComponents.length = 0, this._isReadyForMeshStage.clear(), this._beforeEvaluateActiveMeshStage.clear(), this._evaluateSubMeshStage.clear(), this._preActiveMeshStage.clear(), this._cameraDrawRenderTargetStage.clear(), this._beforeCameraDrawStage.clear(), this._beforeRenderTargetDrawStage.clear(), this._beforeRenderingGroupDrawStage.clear(), this._beforeRenderingMeshStage.clear(), this._afterRenderingMeshStage.clear(), this._afterRenderingGroupDrawStage.clear(), this._afterCameraDrawStage.clear(), this._afterRenderTargetDrawStage.clear(), this._afterRenderStage.clear(), this._beforeCameraUpdateStage.clear(), this._beforeClearStage.clear(), this._gatherRenderTargetsStage.clear(), this._gatherActiveCameraRenderTargetsStage.clear(), this._pointerMoveStage.clear(), this._pointerDownStage.clear(), this._pointerUpStage.clear(), this._isReadyChecks.length = 0, this.importedMeshesFiles = [], this._activeAnimatables && (0, qW.b)(this.stopAllAnimations)) {
          for (const FF of this._activeAnimatables) FF.onAnimationEndObservable.clear(), FF.onAnimationEnd = null;
          this.stopAllAnimations()
        }
        this.resetCachedMaterial(), this.activeCamera && (this.activeCamera._activeMeshes.dispose(), this.activeCamera = null), this.activeCameras = null, this._activeMeshes.dispose(), this._renderingManager.dispose(), this._processedMaterials.dispose(), this._activeParticleSystems.dispose(), this._activeSkeletons.dispose(), this._softwareSkinnedMeshes.dispose(), this._renderTargets.dispose(), this._materialsRenderTargets.dispose(), this._registeredForLateAnimationBindings.dispose(), this._animationWrites.length = 0, this._animationWriteCount = 0, this._animationStepWriteCount = 0, this._meshesForIntersections.dispose(), this._toBeDisposed.length = 0;
        const FF = this._activeRequests.slice();
        for (const uF of FF) uF.abort();
        this._activeRequests.length = 0;
        try {
          this.xSF.notifyObservers(this)
        } catch (AF) {
          FS.b.Error("An error occurred while calling onDisposeObservable!", AF)
        }
        this.detachControl();
        const WF = this._engine.getInputElement?.();
        if (WF)
          for (let uF = 0; uF < this.cameras.length; uF++) this.cameras[uF].detachControl();
        this._disposeList(this.animationGroups), this._disposeList(this.lights), this._defaultMaterial && this._defaultMaterial.dispose(), this._disposeList(this.multiMaterials), this._disposeList(this.materials), this._disposeList(this.meshes, (FF => FF.dispose(!0))), this._disposeList(this.transformNodes, (FF => FF.dispose(!0)));
        const SF = this.cameras;
        this._disposeList(SF), this._disposeList(this.Zm), this._disposeList(this.postProcesses), this._disposeList(this.textures), this._disposeList(this.morphTargetManagers), this._disposeList(this.frameGraphs), this._sceneUbo.dispose(), this._multiviewSceneUbo && this._multiviewSceneUbo.dispose(), this.postProcessManager.dispose(), this._disposeList(this._components);
        let CF = this._engine.scenes.indexOf(this);
        if (CF > -1 && this._engine.scenes.splice(CF, 1), this._floatingOriginScene = void 0, 0 === this._engine.scenes.length && (0, gW.i)(), kW.e._LastCreatedScene === this) {
          kW.e._LastCreatedScene = null;
          let FF = kW.e.Instances.length - 1;
          for (; FF >= 0;) {
            const WF = kW.e.Instances[FF];
            if (WF.scenes.length > 0) {
              kW.e._LastCreatedScene = WF.scenes[this._engine.scenes.length - 1];
              break
            }
            FF--
          }
        }
        CF = this._engine._virtualScenes.indexOf(this), CF > -1 && this._engine._virtualScenes.splice(CF, 1), this._engine.wipeCaches(!0), this.xSF.clear(), this.onBeforeRenderObservable.clear(), this.onAfterRenderObservable.clear(), this.onBeforeRenderTargetsRenderObservable.clear(), this.onAfterRenderTargetsRenderObservable.clear(), this.onAfterStepObservable.clear(), this.onBeforeStepObservable.clear(), this.onBeforeActiveMeshesEvaluationObservable.clear(), this.onAfterActiveMeshesEvaluationObservable.clear(), this.onBeforeParticlesRenderingObservable.clear(), this.onAfterParticlesRenderingObservable.clear(), this.onBeforeDrawPhaseObservable.clear(), this.onAfterDrawPhaseObservable.clear(), this.onBeforeAnimationsObservable.clear(), this.onAfterAnimationsObservable.clear(), this.onDataLoadedObservable.clear(), this.onBeforeRenderingGroupObservable.clear(), this.onAfterRenderingGroupObservable.clear(), this.onMeshImportedObservable.clear(), this.onBeforeCameraRenderObservable.clear(), this.onAfterCameraRenderObservable.clear(), this.onAfterRenderCameraObservable.clear(), this.onReadyObservable.clear(), this.onNewCameraAddedObservable.clear(), this.onCameraRemovedObservable.clear(), this.onNewLightAddedObservable.clear(), this.onLightRemovedObservable.clear(), this.onNewGeometryAddedObservable.clear(), this.onGeometryRemovedObservable.clear(), this.onNewTransformNodeAddedObservable.clear(), this.onTransformNodeRemovedObservable.clear(), this.onNewMeshAddedObservable.clear(), this.onMeshRemovedObservable.clear(), this.onNewSkeletonAddedObservable.clear(), this.onSkeletonRemovedObservable.clear(), this.onNewMaterialAddedObservable.clear(), this.onNewMultiMaterialAddedObservable.clear(), this.onMaterialRemovedObservable.clear(), this.onMultiMaterialRemovedObservable.clear(), this.onNewTextureAddedObservable.clear(), this.onTextureRemovedObservable.clear(), this.onNewFrameGraphAddedObservable.clear(), this.onFrameGraphRemovedObservable.clear(), this.onNewObjectRendererAddedObservable.clear(), this.onObjectRendererRemovedObservable.clear(), this.onPrePointerObservable.clear(), this.onPointerObservable.clear(), this.onPreKeyboardObservable.clear(), this.onKeyboardObservable.clear(), this.onActiveCameraChanged.clear(), this.onScenePerformancePriorityChangedObservable.clear(), this.onClearColorChangedObservable.clear(), this.onEnvironmentTextureChangedObservable.clear(), this.onMeshUnderPointerUpdatedObservable.clear(), this._isDisposed = !0
      }
      _disposeList(FF, WF) {
        const SF = FF.slice(0);
        WF = WF ?? (FF => FF.dispose());
        for (const CF of SF) WF(CF);
        FF.length = 0
      }
      get ZdF() {
        return this._isDisposed
      }
      clearCachedVertexData() {
        for (let FF = 0; FF < this.meshes.length; FF++) {
          const WF = this.meshes[FF].geometry;
          WF && WF.clearCachedData()
        }
      }
      cleanCachedTextureBuffer() {
        for (const FF of this.textures) {
          FF._buffer && (FF._buffer = null)
        }
      }
      getWorldExtends(FF) {
        const WF = new RF.r(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE),
          SF = new RF.r(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        FF = FF || (() => !0);
        const CF = this.meshes.filter(FF);
        for (const AF of CF) {
          if (AF.computeWorldMatrix(!0), !AF.Om || 0 === AF.Om.length || AF.infiniteDistance) continue;
          const FF = AF.JWF(),
            CF = FF.boundingBox.minimumWorld,
            uF = FF.boundingBox.maximumWorld;
          RF.r.CheckExtends(CF, WF, SF), RF.r.CheckExtends(uF, WF, SF)
        }
        return WF.x === Number.MAX_VALUE ? {
          min: RF.r.Zero(),
          max: RF.r.Zero()
        } : {
          min: WF,
          max: SF
        }
      }
      createPickingRay(FF, WF, SF, CF) {
        throw (0, qW.l)("Ray")
      }
      createPickingRayToRef(FF, WF, SF, CF, AF) {
        throw (0, qW.l)("Ray")
      }
      createPickingRayInCameraSpace(FF, WF, SF) {
        throw (0, qW.l)("Ray")
      }
      createPickingRayInCameraSpaceToRef(FF, WF, SF, CF) {
        throw (0, qW.l)("Ray")
      }
      lW(FF, WF, SF, CF, AF, uF) {
        const hF = (0, qW.l)("Ray", !0);
        return hF && FS.b.Warn(hF), new EF.b
      }
      pickWithBoundingInfo(FF, WF, SF, CF, AF) {
        const uF = (0, qW.l)("Ray", !0);
        return uF && FS.b.Warn(uF), new EF.b
      }
      pickWithRay(FF, WF, SF, CF) {
        throw (0, qW.l)("Ray")
      }
      multiPick(FF, WF, SF, CF, AF) {
        throw (0, qW.l)("Ray")
      }
      multiPickWithRay(FF, WF, SF) {
        throw (0, qW.l)("Ray")
      }
      setPointerOverMesh(FF, WF, SF) {
        this._inputManager.setPointerOverMesh(FF, WF, SF)
      }
      getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh()
      }
      _rebuildGeometries() {
        for (const FF of this.geometries) FF._rebuild();
        for (const FF of this.meshes) FF._rebuild();
        this.postProcessManager && this.postProcessManager._rebuild();
        for (const FF of this._components) FF.rebuild();
        for (const FF of this.Zm) FF.rebuild();
        if (this.spriteManagers)
          for (const FF of this.spriteManagers) FF.rebuild()
      }
      _rebuildTextures() {
        for (const FF of this.textures) FF._rebuild(!0);
        this.markAllMaterialsAsDirty(1)
      }
      _getByTags(FF, WF, SF) {
        if (void 0 === WF) return FF;
        const CF = [];
        for (const AF in FF) {
          const uF = FF[AF];
          PF.d && PF.d.MatchesQuery(uF, WF) && (!SF || SF(uF)) && CF.push(uF)
        }
        return CF
      }
      getMeshesByTags(FF, WF) {
        return this._getByTags(this.meshes, FF, WF)
      }
      getCamerasByTags(FF, WF) {
        return this._getByTags(this.cameras, FF, WF)
      }
      getLightsByTags(FF, WF) {
        return this._getByTags(this.lights, FF, WF)
      }
      getMaterialByTags(FF, WF) {
        return this._getByTags(this.materials, FF, WF).concat(this._getByTags(this.multiMaterials, FF, WF))
      }
      getTransformNodesByTags(FF, WF) {
        return this._getByTags(this.transformNodes, FF, WF)
      }
      setRenderingOrder(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._renderingManager.setRenderingOrder(FF, WF, SF, CF)
      }
      setRenderingAutoClearDepthStencil(FF, WF) {
        let SF = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._renderingManager.setRenderingAutoClearDepthStencil(FF, WF, SF, CF)
      }
      getAutoClearDepthStencilSetup(FF) {
        return this._renderingManager.getAutoClearDepthStencilSetup(FF)
      }
      _forceBlockMaterialDirtyMechanism(FF) {
        this._blockMaterialDirtyMechanism = FF
      }
      get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism
      }
      set blockMaterialDirtyMechanism(FF) {
        this._blockMaterialDirtyMechanism !== FF && (this._blockMaterialDirtyMechanism = FF, FF || this.markAllMaterialsAsDirty(127))
      }
      markAllMaterialsAsDirty(FF, WF) {
        if (!this._blockMaterialDirtyMechanism)
          for (const SF of this.materials) WF && !WF(SF) || SF.XbF(FF)
      }
      _loadFile(FF, WF, SF, CF, AF, uF, hF) {
        const bW = (0, jW.l)(FF, WF, SF, CF ? this.offlineProvider : void 0, AF, uF, hF);
        return this._activeRequests.push(bW), bW.onCompleteObservable.add((FF => {
          this._activeRequests.splice(this._activeRequests.indexOf(FF), 1)
        })), bW
      }
      async _loadFileAsync(FF, WF, SF, CF, AF) {
        return await new Promise(((uF, hF) => {
          this._loadFile(FF, (FF => {
            uF(FF)
          }), WF, SF, CF, ((FF, WF) => {
            hF(WF)
          }), AF)
        }))
      }
      async _loadDelayedFileAsync(FF, WF, SF) {
        this._delayedFileRequests || (this._delayedFileRequests = new Map);
        const CF = `${FF}|${WF?"binary":"string"}`;
        let AF = this._delayedFileRequests.get(CF);
        if (!AF) {
          AF = WF ? this._loadFileAsync(FF, void 0, SF, !0) : this._loadFileAsync(FF, void 0, SF, !1);
          const uF = AF;
          (async () => {
            try {
              await uF
            } catch {}
            this._delayedFileRequests?.delete(CF)
          })(), this._delayedFileRequests.set(CF, AF)
        }
        return await AF
      }
      _requestFile(FF, WF, SF, CF, AF, uF, hF) {
        const bW = (0, jW.s)(FF, WF, SF, CF ? this.offlineProvider : void 0, AF, uF, hF);
        return this._activeRequests.push(bW), bW.onCompleteObservable.add((FF => {
          this._activeRequests.splice(this._activeRequests.indexOf(FF), 1)
        })), bW
      }
      async _requestFileAsync(FF, WF, SF, CF, AF) {
        return await new Promise(((uF, hF) => {
          this._requestFile(FF, (FF => {
            uF(FF)
          }), WF, SF, CF, (FF => {
            hF(FF)
          }), AF)
        }))
      }
      _readFile(FF, WF, SF, CF, AF) {
        const uF = (0, jW.n)(FF, WF, SF, CF, AF);
        return this._activeRequests.push(uF), uF.onCompleteObservable.add((FF => {
          this._activeRequests.splice(this._activeRequests.indexOf(FF), 1)
        })), uF
      }
      async _readFileAsync(FF, WF, SF) {
        return await new Promise(((CF, AF) => {
          this._readFile(FF, (FF => {
            CF(FF)
          }), WF, SF, (FF => {
            AF(FF)
          }))
        }))
      }
      getPerfCollector() {
        throw (0, qW.l)("performanceViewerSceneExtension")
      }
      setActiveCameraByID(FF) {
        return this.setActiveCameraById(FF)
      }
      getMaterialByID(FF) {
        return this.getMaterialById(FF)
      }
      getLastMaterialByID(FF) {
        return this.getLastMaterialById(FF)
      }
      getTextureByUniqueID(FF) {
        return this.getTextureByUniqueId(FF)
      }
      getCameraByID(FF) {
        return this.getCameraById(FF)
      }
      getCameraByUniqueID(FF) {
        return this.getCameraByUniqueId(FF)
      }
      getBoneByID(FF) {
        return this.getBoneById(FF)
      }
      getLightByID(FF) {
        return this.getLightById(FF)
      }
      getLightByUniqueID(FF) {
        return this.getLightByUniqueId(FF)
      }
      getParticleSystemByID(FF) {
        return this.getParticleSystemById(FF)
      }
      getGeometryByID(FF) {
        return this.getGeometryById(FF)
      }
      getMeshByID(FF) {
        return this.getMeshById(FF)
      }
      getMeshByUniqueID(FF) {
        return this.getMeshByUniqueId(FF)
      }
      getLastMeshByID(FF) {
        return this.getLastMeshById(FF)
      }
      getMeshesByID(FF) {
        return this.getMeshesById(FF)
      }
      getTransformNodeByID(FF) {
        return this.getTransformNodeById(FF)
      }
      getTransformNodeByUniqueID(FF) {
        return this.getTransformNodeByUniqueId(FF)
      }
      getTransformNodesByID(FF) {
        return this.getTransformNodesById(FF)
      }
      getNodeByID(FF) {
        return this.getNodeById(FF)
      }
      getLastEntryByID(FF) {
        return this.getLastEntryById(FF)
      }
      getLastSkeletonByID(FF) {
        return this.getLastSkeletonById(FF)
      }
    }
    uS.FOGMODE_NONE = 0, uS.FOGMODE_EXP = 1, uS.FOGMODE_EXP2 = 2, uS.FOGMODE_LINEAR = 3, uS.MinDeltaTime = 1, uS.MaxDeltaTime = 1e3, uS._OriginalDefaultMaterialFactory = uS.DefaultMaterialFactory;
    let hS = !1;

    function bC() {
      hS || (hS = !0, (0, WS.f)("BABYLON.Scene", uS))
    }(lF = uS.prototype).sortActiveAnimatables ?? (lF.sortActiveAnimatables = (0, qW.j)("Scene", "sortActiveAnimatables")), (FW = uS.prototype).beginWeightedAnimation ?? (FW.beginWeightedAnimation = (0, qW.j)("Scene", "beginWeightedAnimation")), (WW = uS.prototype).beginAnimation ?? (WW.beginAnimation = (0, qW.j)("Scene", "beginAnimation")), (SW = uS.prototype).beginHierarchyAnimation ?? (SW.beginHierarchyAnimation = (0, qW.j)("Scene", "beginHierarchyAnimation")), (CW = uS.prototype).beginDirectAnimation ?? (CW.beginDirectAnimation = (0, qW.j)("Scene", "beginDirectAnimation")), (AW = uS.prototype).beginDirectHierarchyAnimation ?? (AW.beginDirectHierarchyAnimation = (0, qW.j)("Scene", "beginDirectHierarchyAnimation")), (uW = uS.prototype).getAnimatableByTarget ?? (uW.getAnimatableByTarget = (0, qW.j)("Scene", "getAnimatableByTarget")), (hW = uS.prototype).getAllAnimatablesByTarget ?? (hW.getAllAnimatablesByTarget = (0, qW.j)("Scene", "getAllAnimatablesByTarget")), (bS = uS.prototype).stopAllAnimations ?? (bS.stopAllAnimations = (0, qW.j)("Scene", "stopAllAnimations")), (dW = uS.prototype).getSoundByName ?? (dW.getSoundByName = (0, qW.j)("Scene", "getSoundByName")), (PW = uS.prototype).createOrUpdateSelectionOctree ?? (PW.createOrUpdateSelectionOctree = (0, qW.j)("Scene", "createOrUpdateSelectionOctree")), (RW = uS.prototype).createDefaultLight ?? (RW.createDefaultLight = (0, qW.j)("Scene", "createDefaultLight")), (iS = uS.prototype).createDefaultCamera ?? (iS.createDefaultCamera = (0, qW.j)("Scene", "createDefaultCamera")), (eW = uS.prototype).createDefaultCameraOrLight ?? (eW.createDefaultCameraOrLight = (0, qW.j)("Scene", "createDefaultCameraOrLight")), (EW = uS.prototype).createDefaultSkybox ?? (EW.createDefaultSkybox = (0, qW.j)("Scene", "createDefaultSkybox")), (QW = uS.prototype).createDefaultEnvironment ?? (QW.createDefaultEnvironment = (0, qW.j)("Scene", "createDefaultEnvironment")), (rS = uS.prototype).createDefaultVRExperience ?? (rS.createDefaultVRExperience = (0, qW.j)("Scene", "createDefaultVRExperience")), (gS = uS.prototype).createDefaultXRExperienceAsync ?? (gS.createDefaultXRExperienceAsync = (0, qW.j)("Scene", "createDefaultXRExperienceAsync")), (tS = uS.prototype).getGlowLayerByName ?? (tS.getGlowLayerByName = (0, qW.j)("Scene", "getGlowLayerByName")), (TW = uS.prototype).getHighlightLayerByName ?? (TW.getHighlightLayerByName = (0, qW.j)("Scene", "getHighlightLayerByName")), (aS = uS.prototype).getSelectionOutlineLayerByName ?? (aS.getSelectionOutlineLayerByName = (0, qW.j)("Scene", "getSelectionOutlineLayerByName")), (kS = uS.prototype).removeLensFlareSystem ?? (kS.removeLensFlareSystem = (0, qW.j)("Scene", "removeLensFlareSystem")), (qS = uS.prototype).addLensFlareSystem ?? (qS.addLensFlareSystem = (0, qW.j)("Scene", "addLensFlareSystem")), (VW = uS.prototype).getLensFlareSystemByName ?? (VW.getLensFlareSystemByName = (0, qW.j)("Scene", "getLensFlareSystemByName")), (NW = uS.prototype).getLensFlareSystemByID ?? (NW.getLensFlareSystemByID = (0, qW.j)("Scene", "getLensFlareSystemByID")), (DW = uS.prototype).getLensFlareSystemById ?? (DW.getLensFlareSystemById = (0, qW.j)("Scene", "getLensFlareSystemById")), (LW = uS.prototype).getPhysicsEngine ?? (LW.getPhysicsEngine = (0, qW.j)("Scene", "getPhysicsEngine")), (mS = uS.prototype).enablePhysics ?? (mS.enablePhysics = (0, qW.j)("Scene", "enablePhysics")), (OW = uS.prototype).disablePhysicsEngine ?? (OW.disablePhysicsEngine = (0, qW.j)("Scene", "disablePhysicsEngine")), (xS = uS.prototype).isPhysicsEnabled ?? (xS.isPhysicsEnabled = (0, qW.j)("Scene", "isPhysicsEnabled")), (ZW = uS.prototype).deleteCompoundImpostor ?? (ZW.deleteCompoundImpostor = (0, qW.j)("Scene", "deleteCompoundImpostor")), (oW = uS.prototype).removeReflectionProbe ?? (oW.removeReflectionProbe = (0, qW.j)("Scene", "removeReflectionProbe")), (YW = uS.prototype).addReflectionProbe ?? (YW.addReflectionProbe = (0, qW.j)("Scene", "addReflectionProbe")), (MW = uS.prototype).getBoundingBoxRenderer ?? (MW.getBoundingBoxRenderer = (0, qW.j)("Scene", "getBoundingBoxRenderer")), (cS = uS.prototype).enableDepthRenderer ?? (cS.enableDepthRenderer = (0, qW.j)("Scene", "enableDepthRenderer")), (GW = uS.prototype).disableDepthRenderer ?? (GW.disableDepthRenderer = (0, qW.j)("Scene", "disableDepthRenderer")), (zS = uS.prototype).enableFluidRenderer ?? (zS.enableFluidRenderer = (0, qW.j)("Scene", "enableFluidRenderer")), (IW = uS.prototype).disableFluidRenderer ?? (IW.disableFluidRenderer = (0, qW.j)("Scene", "disableFluidRenderer")), (fW = uS.prototype).enableGeometryBufferRenderer ?? (fW.enableGeometryBufferRenderer = (0, qW.j)("Scene", "enableGeometryBufferRenderer")), (yS = uS.prototype).disableGeometryBufferRenderer ?? (yS.disableGeometryBufferRenderer = (0, qW.j)("Scene", "disableGeometryBufferRenderer")), (sW = uS.prototype).enableIblCdfGenerator ?? (sW.enableIblCdfGenerator = (0, qW.j)("Scene", "enableIblCdfGenerator")), (nW = uS.prototype).disableIblCdfGenerator ?? (nW.disableIblCdfGenerator = (0, qW.j)("Scene", "disableIblCdfGenerator")), (HW = uS.prototype).getOutlineRenderer ?? (HW.getOutlineRenderer = (0, qW.j)("Scene", "getOutlineRenderer")), (KW = uS.prototype).enablePrePassRenderer ?? (KW.enablePrePassRenderer = (0, qW.j)("Scene", "enablePrePassRenderer")), (wW = uS.prototype).disablePrePassRenderer ?? (wW.disablePrePassRenderer = (0, qW.j)("Scene", "disablePrePassRenderer")), (XW = uS.prototype).enableSubSurfaceForPrePass ?? (XW.enableSubSurfaceForPrePass = (0, qW.j)("Scene", "enableSubSurfaceForPrePass")), (UW = uS.prototype).disableSubSurfaceForPrePass ?? (UW.disableSubSurfaceForPrePass = (0, qW.j)("Scene", "disableSubSurfaceForPrePass")), (BW = uS.prototype).pickSprite ?? (BW.pickSprite = (0, qW.j)("Scene", "pickSprite")), (jS = uS.prototype).pickSpriteWithRay ?? (jS.pickSpriteWithRay = (0, qW.j)("Scene", "pickSpriteWithRay")), (vS = uS.prototype).multiPickSprite ?? (vS.multiPickSprite = (0, qW.j)("Scene", "multiPickSprite")), (JW = uS.prototype).multiPickSpriteWithRay ?? (JW.multiPickSpriteWithRay = (0, qW.j)("Scene", "multiPickSpriteWithRay")), (pW = uS.prototype).setPointerOverSprite ?? (pW.setPointerOverSprite = (0, qW.j)("Scene", "setPointerOverSprite")), (lW = uS.prototype).getPointerOverSprite ?? (lW.getPointerOverSprite = (0, qW.j)("Scene", "getPointerOverSprite")), Object.getOwnPropertyDescriptor(uS.prototype, "mainSoundTrack") || Object.defineProperty(uS.prototype, "mainSoundTrack", (0, qW.f)("Scene", "mainSoundTrack")), Object.getOwnPropertyDescriptor(uS.prototype, "soundTracks") || Object.defineProperty(uS.prototype, "soundTracks", (0, qW.f)("Scene", "soundTracks")), Object.getOwnPropertyDescriptor(uS.prototype, "audioEnabled") || Object.defineProperty(uS.prototype, "audioEnabled", (0, qW.f)("Scene", "audioEnabled")), Object.getOwnPropertyDescriptor(uS.prototype, "headphone") || Object.defineProperty(uS.prototype, "headphone", (0, qW.f)("Scene", "headphone")), Object.getOwnPropertyDescriptor(uS.prototype, "audioListenerPositionProvider") || Object.defineProperty(uS.prototype, "audioListenerPositionProvider", (0, qW.f)("Scene", "audioListenerPositionProvider")), Object.getOwnPropertyDescriptor(uS.prototype, "audioListenerRotationProvider") || Object.defineProperty(uS.prototype, "audioListenerRotationProvider", (0, qW.f)("Scene", "audioListenerRotationProvider")), Object.getOwnPropertyDescriptor(uS.prototype, "audioPositioningRefreshRate") || Object.defineProperty(uS.prototype, "audioPositioningRefreshRate", (0, qW.f)("Scene", "audioPositioningRefreshRate")), Object.getOwnPropertyDescriptor(uS.prototype, "selectionOctree") || Object.defineProperty(uS.prototype, "selectionOctree", (0, qW.f)("Scene", "selectionOctree")), Object.getOwnPropertyDescriptor(uS.prototype, "debugLayer") || Object.defineProperty(uS.prototype, "debugLayer", (0, qW.f)("Scene", "debugLayer")), Object.getOwnPropertyDescriptor(uS.prototype, "gamepadManager") || Object.defineProperty(uS.prototype, "gamepadManager", (0, qW.f)("Scene", "gamepadManager")), Object.getOwnPropertyDescriptor(uS.prototype, "simplificationQueue") || Object.defineProperty(uS.prototype, "simplificationQueue", (0, qW.f)("Scene", "simplificationQueue")), Object.getOwnPropertyDescriptor(uS.prototype, "onBeforePhysicsObservable") || Object.defineProperty(uS.prototype, "onBeforePhysicsObservable", (0, qW.f)("Scene", "onBeforePhysicsObservable")), Object.getOwnPropertyDescriptor(uS.prototype, "onAfterPhysicsObservable") || Object.defineProperty(uS.prototype, "onAfterPhysicsObservable", (0, qW.f)("Scene", "onAfterPhysicsObservable")), Object.getOwnPropertyDescriptor(uS.prototype, "reflectionProbes") || Object.defineProperty(uS.prototype, "reflectionProbes", (0, qW.f)("Scene", "reflectionProbes")), Object.getOwnPropertyDescriptor(uS.prototype, "forceShowBoundingBoxes") || Object.defineProperty(uS.prototype, "forceShowBoundingBoxes", (0, qW.f)("Scene", "forceShowBoundingBoxes")), Object.getOwnPropertyDescriptor(uS.prototype, "depthPeelingRenderer") || Object.defineProperty(uS.prototype, "depthPeelingRenderer", (0, qW.f)("Scene", "depthPeelingRenderer")), Object.getOwnPropertyDescriptor(uS.prototype, "useOrderIndependentTransparency") || Object.defineProperty(uS.prototype, "useOrderIndependentTransparency", (0, qW.f)("Scene", "useOrderIndependentTransparency")), Object.getOwnPropertyDescriptor(uS.prototype, "fluidRenderer") || Object.defineProperty(uS.prototype, "fluidRenderer", (0, qW.f)("Scene", "fluidRenderer")), Object.getOwnPropertyDescriptor(uS.prototype, "geometryBufferRenderer") || Object.defineProperty(uS.prototype, "geometryBufferRenderer", (0, qW.f)("Scene", "geometryBufferRenderer")), Object.getOwnPropertyDescriptor(uS.prototype, "iblCdfGenerator") || Object.defineProperty(uS.prototype, "iblCdfGenerator", (0, qW.f)("Scene", "iblCdfGenerator")), Object.getOwnPropertyDescriptor(uS.prototype, "prePassRenderer") || Object.defineProperty(uS.prototype, "prePassRenderer", (0, qW.f)("Scene", "prePassRenderer")), Object.getOwnPropertyDescriptor(uS.prototype, "subSurfaceConfiguration") || Object.defineProperty(uS.prototype, "subSurfaceConfiguration", (0, qW.f)("Scene", "subSurfaceConfiguration")), Object.getOwnPropertyDescriptor(uS.prototype, "spriteManagers") || Object.defineProperty(uS.prototype, "spriteManagers", (0, qW.f)("Scene", "spriteManagers")), Object.getOwnPropertyDescriptor(uS.prototype, "onBeforeSpritesRenderingObservable") || Object.defineProperty(uS.prototype, "onBeforeSpritesRenderingObservable", (0, qW.f)("Scene", "onBeforeSpritesRenderingObservable")), Object.getOwnPropertyDescriptor(uS.prototype, "onAfterSpritesRenderingObservable") || Object.defineProperty(uS.prototype, "onAfterSpritesRenderingObservable", (0, qW.f)("Scene", "onAfterSpritesRenderingObservable"))
  },
  38136: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF,
      f: () => AF
    });
    class CF {}
    CF.NAME_EFFECTLAYER = "EffectLayer", CF.NAME_LAYER = "Layer", CF.NAME_LENSFLARESYSTEM = "LensFlareSystem", CF.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer", CF.NAME_PARTICLESYSTEM = "ParticleSystem", CF.NAME_GAMEPAD = "Gamepad", CF.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue", CF.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer", CF.NAME_PREPASSRENDERER = "PrePassRenderer", CF.NAME_DEPTHRENDERER = "DepthRenderer", CF.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer", CF.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager", CF.NAME_SPRITE = "Sprite", CF.NAME_SUBSURFACE = "SubSurface", CF.NAME_OUTLINERENDERER = "Outline", CF.NAME_PROCEDURALTEXTURE = "ProceduralTexture", CF.NAME_SHADOWGENERATOR = "ShadowGenerator", CF.NAME_OCTREE = "mRF", CF.NAME_PHYSICSENGINE = "PhysicsEngine", CF.NAME_AUDIO = "Audio", CF.NAME_FLUIDRENDERER = "FluidRenderer", CF.NAME_IBLCDFGENERATOR = "iblCDFGenerator", CF.NAME_CLUSTEREDLIGHTING = "ClusteredLighting", CF.STEP_ISREADYFORMESH_EFFECTLAYER = 0, CF.STEP_ISREADYFORMESH_DEPTHRENDERER = 1, CF.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0, CF.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0, CF.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0, CF.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1, CF.STEP_BEFORECAMERADRAW_PREPASS = 0, CF.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1, CF.STEP_BEFORECAMERADRAW_LAYER = 2, CF.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0, CF.STEP_BEFORERENDERTARGETDRAW_LAYER = 1, CF.STEP_BEFORERENDERINGMESH_PREPASS = 0, CF.STEP_BEFORERENDERINGMESH_OUTLINE = 1, CF.STEP_AFTERRENDERINGMESH_PREPASS = 0, CF.STEP_AFTERRENDERINGMESH_OUTLINE = 1, CF.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0, CF.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1, CF.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0, CF.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0, CF.STEP_BEFORECLEAR_PREPASS = 1, CF.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0, CF.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0, CF.STEP_AFTERRENDERTARGETDRAW_LAYER = 1, CF.STEP_AFTERCAMERADRAW_PREPASS = 0, CF.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1, CF.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2, CF.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3, CF.STEP_AFTERCAMERADRAW_LAYER = 4, CF.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5, CF.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0, CF.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0, CF.STEP_AFTERRENDER_AUDIO = 0, CF.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0, CF.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1, CF.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2, CF.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3, CF.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0, CF.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1, CF.STEP_GATHERACTIVECAMERARENDERTARGETS_CLUSTEREDLIGHTING = 2, CF.STEP_POINTERMOVE_SPRITE = 0, CF.STEP_POINTERDOWN_SPRITE = 0, CF.STEP_POINTERUP_SPRITE = 0;
    class AF extends Array {
      constructor(FF) {
        super(...FF)
      }
      static Create() {
        return Object.create(AF.prototype)
      }
      registerStep(FF, WF, SF) {
        let CF, AF = 0;
        for (; AF < this.length; AF++) {
          if (CF = this[AF].index, FF < CF) break
        }
        this.splice(AF, 0, {
          index: FF,
          component: WF,
          action: SF.bind(WF)
        })
      }
      clear() {
        this.length = 0
      }
    }
  },
  37972: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => hF,
      h: () => bW,
      j: () => CF,
      k: () => AF,
      l: () => uF
    });

    function CF(FF, WF, SF, CF, AF, uF) {
      function hF(FF) {
        if (void 0 !== FF && "function" !== typeof FF) throw new TypeError("Function expected");
        return FF
      }
      for (var bW, dF = CF.kind, PF = "getter" === dF ? "get" : "setter" === dF ? "set" : "value", RF = !WF && FF ? CF.static ? FF : FF.prototype : null, iW = WF || (RF ? Object.getOwnPropertyDescriptor(RF, CF.name) : {}), eF = !1, EF = SF.length - 1; EF >= 0; EF--) {
        var QF = {};
        for (var rW in CF) QF[rW] = "access" === rW ? {} : CF[rW];
        for (var rW in CF.access) QF.access[rW] = CF.access[rW];
        QF.addInitializer = function(FF) {
          if (eF) throw new TypeError("Cannot add initializers after decoration has completed");
          uF.push(hF(FF || null))
        };
        var gW = (0, SF[EF])("accessor" === dF ? {
          get: iW.get,
          set: iW.set
        } : iW[PF], QF);
        if ("accessor" === dF) {
          if (void 0 === gW) continue;
          if (null === gW || "object" !== typeof gW) throw new TypeError("Object expected");
          (bW = hF(gW.get)) && (iW.get = bW), (bW = hF(gW.set)) && (iW.set = bW), (bW = hF(gW.init)) && AF.unshift(bW)
        } else(bW = hF(gW)) && ("field" === dF ? AF.unshift(bW) : iW[PF] = bW)
      }
      RF && Object.defineProperty(RF, CF.name, iW), eF = !0
    }

    function AF(FF, WF, SF) {
      for (var CF = arguments.length > 2, AF = 0; AF < WF.length; AF++) SF = CF ? WF[AF].call(FF, SF) : WF[AF].call(FF);
      return CF ? SF : void 0
    }

    function uF(FF, WF, SF) {
      return "symbol" === typeof WF && (WF = WF.description ? "[".concat(WF.description, "]") : ""), Object.defineProperty(FF, "name", {
        configurable: !0,
        value: SF ? "".concat(SF, " ", WF) : WF
      })
    }
    Object.create;
    Object.create;

    function hF(FF, WF, SF, CF) {
      if ("a" === SF && !CF) throw new TypeError("Private accessor was defined without a getter");
      if ("function" === typeof WF ? FF !== WF || !CF : !WF.has(FF)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return "m" === SF ? CF : "a" === SF ? CF.call(FF) : CF ? CF.value : WF.get(FF)
    }

    function bW(FF, WF, SF, CF, AF) {
      if ("m" === CF) throw new TypeError("Private method is not writable");
      if ("a" === CF && !AF) throw new TypeError("Private accessor was defined without a setter");
      if ("function" === typeof WF ? FF !== WF || !AF : !WF.has(FF)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return "a" === CF ? AF.call(FF, SF) : AF ? AF.value = SF : WF.set(FF, SF), SF
    }
    "function" === typeof SuppressedError && SuppressedError
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);