export const id = 300;
export const ids = [300];
export const modules = {
  41898: (HH, BH, LH) => {
    LH.d(BH, {
      $b: () => HL,
      $c: () => PH,
      $e: () => lL,
      Ac: () => CH,
      Ad: () => KH,
      Be: () => ML,
      Bg: () => wL,
      C: () => DB,
      Cb: () => LL,
      Cf: () => mL,
      Cg: () => GL,
      Df: () => kL,
      Dg: () => uL,
      Ec: () => wB,
      Ed: () => qH,
      Ee: () => TL,
      F: () => wH,
      Fe: () => DL,
      G: () => dB,
      Gb: () => BL,
      Gc: () => nH,
      Gf: () => rA,
      H: () => GH,
      Hd: () => eH,
      I: () => rB,
      Ic: () => ZH,
      Id: () => uB,
      If: () => yL,
      Jb: () => YB,
      Je: () => YL,
      Jf: () => BA,
      K: () => mH,
      Kc: () => aB,
      Mb: () => tB,
      Md: () => zH,
      Mf: () => pL,
      Ne: () => aL,
      O: () => IH,
      Oc: () => AB,
      Of: () => HA,
      P: () => oH,
      Pb: () => rH,
      Qc: () => XB,
      Qd: () => EH,
      Qe: () => ZL,
      R: () => FB,
      Rc: () => kH,
      Sb: () => MH,
      Se: () => KL,
      Sf: () => LA,
      T: () => YH,
      Td: () => WB,
      Uc: () => CB,
      Uf: () => sL,
      Vc: () => zB,
      W: () => DH,
      Wb: () => xB,
      Wc: () => LB,
      We: () => eL,
      Wf: () => UL,
      Xc: () => bH,
      Xd: () => ZB,
      Xf: () => WL,
      Ye: () => cL,
      Zd: () => jH,
      Zf: () => JL,
      _: () => hA,
      _b: () => JH,
      _e: () => iL,
      ab: () => yB,
      ae: () => GB,
      ag: () => gL,
      bc: () => fH,
      bd: () => AH,
      bf: () => RL,
      cb: () => sH,
      cd: () => OH,
      cg: () => NL,
      d: () => SH,
      de: () => sB,
      ec: () => pH,
      ff: () => fL,
      fg: () => vL,
      g: () => hH,
      gb: () => iB,
      gc: () => iH,
      gd: () => hB,
      ge: () => jB,
      gf: () => FL,
      hc: () => BB,
      hd: () => WH,
      i: () => VH,
      ie: () => HB,
      jb: () => pB,
      jc: () => QB,
      jd: () => QH,
      jf: () => nL,
      jg: () => QL,
      ke: () => yH,
      lc: () => dH,
      m: () => gH,
      md: () => uH,
      nb: () => aH,
      nf: () => jL,
      ng: () => qL,
      ob: () => JB,
      oc: () => lH,
      oe: () => FH,
      of: () => SA,
      og: () => VL,
      pd: () => SL,
      pe: () => TH,
      q: () => CL,
      qb: () => NH,
      qc: () => SB,
      rd: () => hL,
      rf: () => OL,
      sc: () => xH,
      se: () => XH,
      sf: () => oL,
      sg: () => PL,
      t: () => tL,
      ub: () => AL,
      uc: () => vH,
      v: () => tH,
      vb: () => rL,
      vd: () => UH,
      vf: () => bL,
      vg: () => dL,
      wc: () => EB,
      we: () => zL,
      xd: () => cH,
      xe: () => AA,
      y: () => nB,
      yf: () => IL,
      yg: () => xL,
      zb: () => RH
    });
    const AH = -2147483648,
      rH = 12,
      SH = 12,
      hH = 4095,
      tH = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      zH = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072,
        FreeCamMoves: 262144
      },
      CH = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      EH = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      XH = {
        Alive: 16
      },
      GH = 32,
      YH = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      uH = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      QH = 4294967295,
      WH = 0,
      MH = 4294967295,
      xH = 4,
      vH = 123,
      PH = -2147483648,
      TH = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      UH = 51,
      VH = 5,
      OH = 4294967295,
      bH = 4294967295,
      kH = 128,
      mH = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      oH = 16,
      IH = 255,
      fH = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      lH = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      KH = {
        Hotbar: 256,
        Drop: 257
      },
      cH = {
        Down: 1,
        Next: 2,
        Stack: 4,
        Repeat: 8
      },
      eH = {
        Rate: 0,
        Gyro: 1
      },
      qH = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      gH = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      NH = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      RH = {
        LookPointed: 1,
        Held: 2
      },
      jH = 3,
      nH = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      FH = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      DH = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      wH = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      ZH = {
        Stackable: 1
      },
      dH = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      aH = {
        Detail: 1,
        RoomForOne: 2
      },
      sH = {
        HaveIngredients: 1,
        Listed: 2
      },
      JH = {
        HasOpts: 1
      },
      iH = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      pH = {
        Up: 1,
        Down: 2
      },
      yH = {
        TwoD: 1,
        Loop: 2
      },
      HB = {
        StopAfter: 1
      },
      BB = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      LB = {
        Pose: 1,
        Visible: 2,
        Clip: 4,
        Perch: 8
      },
      AB = 255,
      rB = 65535,
      SB = 255,
      hB = 65535,
      tB = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      zB = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      CB = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      EB = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      XB = 4294967295,
      GB = 4294967295,
      YB = 255,
      uB = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      QB = {
        critical: 123
      },
      WB = 4294967295,
      MB = {
        BYTES: 4,
        IX: (HH, BH) => HH.getUint32(BH + 0, !0)
      },
      xB = {
        BYTES: 12,
        serverId: (HH, BH) => HH.getInt32(BH + 0, !0),
        index: (HH, BH) => HH.getUint32(BH + 4, !0),
        kind: (HH, BH) => HH.getUint16(BH + 8, !0)
      },
      vB = {
        BYTES: 20,
        pos: (HH, BH, LH) => HH.getInt32(BH + 0 + 4 * LH, !0),
        actual: (HH, BH) => HH.getUint32(BH + 12, !0),
        dataLen: (HH, BH) => HH.getUint32(BH + 16, !0)
      },
      PB = {
        BYTES: 20,
        what: (HH, BH) => HH.getUint8(BH + 0),
        value: (HH, BH) => HH.getInt16(BH + 2, !0),
        pos: (HH, BH, LH) => HH.getInt32(BH + 4 + 4 * LH, !0),
        block: (HH, BH) => HH.getUint32(BH + 16, !0)
      },
      TB = {
        BYTES: 4,
        item: (HH, BH) => HH.getUint16(BH + 0, !0),
        slot: (HH, BH) => HH.getUint8(BH + 2)
      },
      UB = {
        BYTES: 16,
        target: (HH, BH) => HH.getInt32(BH + 0, !0),
        damage: (HH, BH) => HH.getFloat32(BH + 4, !0),
        distance: (HH, BH) => HH.getFloat32(BH + 8, !0),
        crit: (HH, BH) => HH.getUint8(BH + 12)
      },
      VB = {
        BYTES: 4,
        slot: (HH, BH) => HH.getUint16(BH + 0, !0)
      },
      OB = {
        BYTES: 20,
        what: (HH, BH) => HH.getUint8(BH + 0),
        value: (HH, BH) => HH.getInt16(BH + 2, !0),
        pos: (HH, BH, LH) => HH.getInt32(BH + 4 + 4 * LH, !0),
        block: (HH, BH) => HH.getUint32(BH + 16, !0)
      },
      bB = {
        BYTES: 12,
        serverId: (HH, BH) => HH.getInt32(BH + 0, !0),
        index: (HH, BH) => HH.getUint32(BH + 4, !0),
        what: (HH, BH) => HH.getUint16(BH + 8, !0)
      },
      kB = {
        BYTES: 24,
        cx: (HH, BH) => HH.getInt32(BH + 0, !0),
        cy: (HH, BH) => HH.getInt32(BH + 4, !0),
        cz: (HH, BH) => HH.getInt32(BH + 8, !0),
        slot: (HH, BH) => HH.getUint32(BH + 12, !0),
        generation: (HH, BH) => HH.getUint32(BH + 16, !0),
        flags: (HH, BH) => HH.getUint32(BH + 20, !0)
      },
      mB = {
        BYTES: 44,
        pos: (HH, BH, LH) => HH.getFloat64(BH + 0 + 8 * LH, !0),
        sound: (HH, BH) => HH.getUint16(BH + 24, !0),
        flags: (HH, BH) => HH.getUint16(BH + 26, !0),
        handle: (HH, BH) => HH.getUint32(BH + 28, !0),
        volume: (HH, BH) => HH.getFloat32(BH + 32, !0),
        rate: (HH, BH) => HH.getFloat32(BH + 36, !0),
        refDist: (HH, BH) => HH.getFloat32(BH + 40, !0)
      },
      oB = {
        BYTES: 28,
        pos: (HH, BH, LH) => HH.getFloat64(BH + 0 + 8 * LH, !0),
        handle: (HH, BH) => HH.getUint32(BH + 24, !0)
      },
      IB = {
        BYTES: 16,
        handle: (HH, BH) => HH.getUint32(BH + 0, !0),
        volume: (HH, BH) => HH.getFloat32(BH + 4, !0),
        rate: (HH, BH) => HH.getFloat32(BH + 8, !0),
        refDist: (HH, BH) => HH.getFloat32(BH + 12, !0)
      },
      fB = {
        BYTES: 12,
        handle: (HH, BH) => HH.getUint32(BH + 0, !0),
        to: (HH, BH) => HH.getFloat32(BH + 4, !0),
        ms: (HH, BH) => HH.getUint16(BH + 8, !0),
        flags: (HH, BH) => HH.getUint16(BH + 10, !0)
      },
      lB = {
        BYTES: 4,
        handle: (HH, BH) => HH.getUint32(BH + 0, !0)
      },
      KB = {
        BYTES: 8,
        reason: (HH, BH) => HH.getUint8(BH + 0),
        code: (HH, BH) => HH.getUint8(BH + 1),
        version: (HH, BH) => HH.getUint32(BH + 4, !0)
      },
      cB = {
        BYTES: 4,
        key: (HH, BH) => HH.getUint8(BH + 0),
        tag: (HH, BH) => HH.getUint8(BH + 1)
      },
      eB = {
        BYTES: 16,
        save: (HH, BH) => HH.getUint32(BH + 0, !0),
        index: (HH, BH) => HH.getUint32(BH + 4, !0),
        ptr: (HH, BH) => HH.getUint32(BH + 8, !0),
        len: (HH, BH) => HH.getUint32(BH + 12, !0)
      },
      qB = {
        BYTES: 16,
        save: (HH, BH) => HH.getUint32(BH + 0, !0),
        kind: (HH, BH) => HH.getUint8(BH + 4),
        parts: (HH, BH) => HH.getUint32(BH + 8, !0),
        bytes: (HH, BH) => HH.getUint32(BH + 12, !0)
      },
      gB = {
        BYTES: 4,
        totalTicks: (HH, BH) => HH.getUint32(BH + 0, !0)
      },
      NB = {
        BYTES: 24,
        what: (HH, BH) => HH.getUint8(BH + 0),
        int: (HH, BH) => HH.getInt32(BH + 4, !0),
        x: (HH, BH) => HH.getFloat64(BH + 8, !0),
        y: (HH, BH) => HH.getFloat64(BH + 16, !0)
      },
      RB = {
        BYTES: 8,
        what: (HH, BH) => HH.getUint8(BH + 0),
        kind: (HH, BH) => HH.getUint8(BH + 1),
        save: (HH, BH) => HH.getUint32(BH + 4, !0)
      },
      jB = {
        BYTES: 4,
        kt: (HH, BH) => HH.getUint16(BH + 0, !0)
      },
      nB = {
        BYTES: 360,
        eye: (HH, BH, LH) => HH.getFloat64(BH + 0 + 8 * LH, !0),
        localPos: (HH, BH, LH) => HH.getFloat64(BH + 24 + 8 * LH, !0),
        iBH: (HH, BH, LH) => HH.getFloat64(BH + 48 + 8 * LH, !0),
        viewProj: (HH, BH, LH) => HH.getFloat32(BH + 72 + 4 * LH, !0),
        origin: (HH, BH, LH) => HH.getInt32(BH + 136 + 4 * LH, !0),
        heading: (HH, BH) => HH.getFloat32(BH + 148, !0),
        pitch: (HH, BH) => HH.getFloat32(BH + 152, !0),
        tanHalfFovX: (HH, BH) => HH.getFloat32(BH + 156, !0),
        tanHalfFovY: (HH, BH) => HH.getFloat32(BH + 160, !0),
        viewportCss: (HH, BH, LH) => HH.getFloat32(BH + 164 + 4 * LH, !0),
        localVel: (HH, BH, LH) => HH.getFloat32(BH + 172 + 4 * LH, !0),
        actionDir: (HH, BH, LH) => HH.getFloat32(BH + 184 + 4 * LH, !0),
        localId: (HH, BH) => HH.getInt32(BH + 196, !0),
        playerFlags: (HH, BH) => HH.getUint32(BH + 200, !0),
        targetBlock: (HH, BH, LH) => HH.getInt32(BH + 204 + 4 * LH, !0),
        targetAdjacent: (HH, BH, LH) => HH.getInt32(BH + 216 + 4 * LH, !0),
        targetBlockId: (HH, BH) => HH.getUint32(BH + 228, !0),
        targetNormal: (HH, BH, LH) => HH.getInt8(BH + 232 + 1 * LH),
        targetFlags: (HH, BH) => HH.getUint8(BH + 235),
        pickedEntity: (HH, BH) => HH.getInt32(BH + 236, !0),
        breakingPos: (HH, BH, LH) => HH.getInt32(BH + 240 + 4 * LH, !0),
        breakingProgress: (HH, BH) => HH.getFloat32(BH + 252, !0),
        pU: (HH, BH) => HH.getUint16(BH + 256, !0),
        selectedSlot: (HH, BH) => HH.getUint8(BH + 258),
        heldFlags: (HH, BH) => HH.getUint8(BH + 259),
        heldAttrVersion: (HH, BH) => HH.getUint32(BH + 260, !0),
        inventoryVersion: (HH, BH) => HH.getUint32(BH + 264, !0),
        effectsVersion: (HH, BH) => HH.getUint32(BH + 268, !0),
        entitiesVersion: (HH, BH) => HH.getUint32(BH + 272, !0),
        entRenderPtr: (HH, BH) => HH.getUint32(BH + 276, !0),
        entCapacity: (HH, BH) => HH.getUint32(BH + 280, !0),
        frameMs: (HH, BH) => HH.getFloat32(BH + 284, !0),
        fps: (HH, BH) => HH.getFloat32(BH + 288, !0),
        entVisPtr: (HH, BH) => HH.getUint32(BH + 292, !0),
        momentumFrac: (HH, BH) => HH.getFloat32(BH + 296, !0),
        chunkSlotsPtr: (HH, BH) => HH.getUint32(BH + 300, !0),
        chunkSlotsLen: (HH, BH) => HH.getUint32(BH + 304, !0),
        walkThroughPtr: (HH, BH) => HH.getUint32(BH + 308, !0),
        walkThroughLen: (HH, BH) => HH.getUint32(BH + 312, !0),
        audioViewPtr: (HH, BH) => HH.getUint32(BH + 316, !0),
        inventoryViewPtr: (HH, BH) => HH.getUint32(BH + 320, !0),
        eventOverflowGen: (HH, BH) => HH.getUint32(BH + 324, !0),
        eventOverflowMask: (HH, BH) => HH.getUint32(BH + 328, !0),
        promptEntity: (HH, BH) => HH.getInt32(BH + 332, !0),
        replayViewPtr: (HH, BH) => HH.getUint32(BH + 336, !0),
        slotIcon: (HH, BH) => HH.getUint32(BH + 340, !0),
        localDeaths: (HH, BH) => HH.getUint32(BH + 344, !0),
        cameraFar: (HH, BH) => HH.getFloat32(BH + 348, !0),
        gliderBoostFuel: (HH, BH) => HH.getUint32(BH + 352, !0),
        interactLabel: (HH, BH) => HH.getUint16(BH + 356, !0),
        interactIcon: (HH, BH) => HH.getUint16(BH + 358, !0)
      },
      FB = {
        BYTES: 16,
        voxelsPtr: (HH, BH) => HH.getUint32(BH + 0, !0),
        version: (HH, BH) => HH.getUint32(BH + 4, !0),
        generation: (HH, BH) => HH.getUint32(BH + 8, !0),
        LX: (HH, BH) => HH.getUint32(BH + 12, !0)
      },
      DB = {
        BYTES: 56,
        listener: (HH, BH, LH) => HH.getFloat64(BH + 0 + 8 * LH, !0),
        forward: (HH, BH, LH) => HH.getFloat32(BH + 24 + 4 * LH, !0),
        up: (HH, BH, LH) => HH.getFloat32(BH + 36 + 4 * LH, !0),
        dropped: (HH, BH) => HH.getUint32(BH + 48, !0),
        unfollowed: (HH, BH) => HH.getUint32(BH + 52, !0)
      },
      wB = {
        BYTES: 8,
        item: (HH, BH) => HH.getUint16(BH + 0, !0),
        amount: (HH, BH) => HH.getUint16(BH + 2, !0),
        attrVersion: (HH, BH) => HH.getUint32(BH + 4, !0)
      },
      ZB = {
        BYTES: 76,
        version: (HH, BH) => HH.getUint32(BH + 0, !0),
        state: (HH, BH) => HH.getUint8(BH + 4),
        cameraMode: (HH, BH) => HH.getUint8(BH + 5),
        IX: (HH, BH) => HH.getUint32(BH + 8, !0),
        totalTicks: (HH, BH) => HH.getUint32(BH + 12, !0),
        speed: (HH, BH) => HH.getFloat32(BH + 16, !0),
        markIn: (HH, BH) => HH.getUint32(BH + 20, !0),
        markOut: (HH, BH) => HH.getUint32(BH + 24, !0),
        editVersion: (HH, BH) => HH.getUint32(BH + 28, !0),
        drops: (HH, BH, LH) => HH.getUint32(BH + 32 + 4 * LH, !0)
      },
      dB = {
        BYTES: 6,
        flags: (HH, BH) => HH.getUint8(BH + 0),
        harvestType: (HH, BH) => HH.getUint8(BH + 1),
        harvestLevel: (HH, BH) => HH.getUint8(BH + 2),
        attachedTop: (HH, BH) => HH.getUint16(BH + 4, !0)
      },
      aB = {
        BYTES: 3,
        flags: (HH, BH) => HH.getUint8(BH + 0),
        harvests: (HH, BH) => HH.getUint8(BH + 1),
        level: (HH, BH) => HH.getUint8(BH + 2)
      },
      sB = {
        BYTES: 12,
        item: (HH, BH) => HH.getUint32(BH + 0, !0),
        amount: (HH, BH) => HH.getFloat64(BH + 4, !0)
      },
      JB = {
        BYTES: 16,
        recipes: (HH, BH) => HH.getUint32(BH + 0, !0),
        ingredients: (HH, BH) => HH.getUint32(BH + 4, !0),
        craftAllTimes: (HH, BH) => HH.getUint32(BH + 8, !0),
        flags: (HH, BH) => HH.getUint32(BH + 12, !0)
      },
      iB = {
        BYTES: 10,
        item: (HH, BH) => HH.getUint16(BH + 0, !0),
        recipe: (HH, BH) => HH.getUint16(BH + 2, !0),
        produces: (HH, BH) => HH.getUint16(BH + 4, !0),
        requires: (HH, BH) => HH.getUint16(BH + 6, !0),
        flags: (HH, BH) => HH.getUint8(BH + 8)
      },
      pB = {
        BYTES: 4,
        amount: (HH, BH) => HH.getUint16(BH + 0, !0),
        items: (HH, BH) => HH.getUint16(BH + 2, !0)
      },
      yB = {
        BYTES: 8,
        amount: (HH, BH) => HH.getUint32(BH + 0, !0),
        item: (HH, BH) => HH.getUint16(BH + 4, !0),
        from: (HH, BH) => HH.getUint16(BH + 6, !0)
      },
      HL = {
        BYTES: 16,
        serverId: (HH, BH) => HH.getInt32(BH + 0, !0),
        len: (HH, BH) => HH.getUint32(BH + 4, !0),
        kind: (HH, BH) => HH.getUint16(BH + 8, !0),
        variation: (HH, BH) => HH.getUint16(BH + 10, !0),
        pose: (HH, BH) => HH.getUint8(BH + 12),
        meta: (HH, BH) => HH.getUint8(BH + 13),
        mesh: (HH, BH) => HH.getUint8(BH + 14),
        flags: (HH, BH) => HH.getUint8(BH + 15)
      },
      BL = {
        BYTES: 56,
        terrainOpaque: (HH, BH) => HH.getUint32(BH + 0, !0),
        terrainTransparent: (HH, BH) => HH.getUint32(BH + 4, !0),
        terrainPack: (HH, BH) => HH.getUint32(BH + 8, !0),
        earthSky: (HH, BH) => HH.getUint32(BH + 12, !0),
        skyMeshes: (HH, BH) => HH.getUint32(BH + 16, !0),
        regular: (HH, BH) => HH.getUint32(BH + 20, !0),
        thin: (HH, BH) => HH.getUint32(BH + 24, !0),
        line: (HH, BH) => HH.getUint32(BH + 28, !0),
        text: (HH, BH) => HH.getUint32(BH + 32, !0),
        particles: (HH, BH) => HH.getUint32(BH + 36, !0),
        terrainParts: (HH, BH) => HH.getUint32(BH + 40, !0),
        terrainCompiling: (HH, BH) => HH.getUint32(BH + 44, !0),
        ringCopiesMax: (HH, BH) => HH.getUint32(BH + 48, !0),
        ringBusyWrites: (HH, BH) => HH.getUint32(BH + 52, !0)
      },
      LL = {
        BYTES: 16,
        fov: (HH, BH) => HH.getFloat32(BH + 0, !0),
        baseFov: (HH, BH) => HH.getFloat32(BH + 4, !0),
        aspect: (HH, BH) => HH.getFloat32(BH + 8, !0),
        bodyHeading: (HH, BH) => HH.getFloat32(BH + 12, !0)
      },
      AL = {
        BYTES: 32,
        eye: (HH, BH, LH) => HH.getFloat64(BH + 0 + 8 * LH, !0),
        heading: (HH, BH) => HH.getFloat32(BH + 24, !0),
        pitch: (HH, BH) => HH.getFloat32(BH + 28, !0)
      },
      rL = {
        BYTES: 48,
        feet: (HH, BH, LH) => HH.getFloat64(BH + 0 + 8 * LH, !0),
        eyeHeight: (HH, BH) => HH.getFloat32(BH + 24, !0),
        heading: (HH, BH) => HH.getFloat32(BH + 28, !0),
        headingIsDrawn: (HH, BH) => HH.getUint32(BH + 32, !0),
        pitch: (HH, BH) => HH.getFloat32(BH + 36, !0),
        lookHeading: (HH, BH) => HH.getFloat32(BH + 40, !0)
      },
      SL = 32,
      hL = 63,
      tL = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function zL(HH, BH, LH, AH, rH) {
      var SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH, MH, xH, vH, PH, TH, UH, VH, OH, bH, kH, mH, oH, IH;
      switch (HH) {
        case 32:
          return 4 === AH && (null === (SH = rH.tickEnd) || void 0 === SH || SH.call(rH, MB.IX(BH, LH)), !0);
        case 33:
          return 12 === AH && (null === (hH = rH.entitySpawned) || void 0 === hH || hH.call(rH, xB.serverId(BH, LH), xB.index(BH, LH), xB.kind(BH, LH)), !0);
        case 34:
          return 12 === AH && (null === (tH = rH.entityDespawned) || void 0 === tH || tH.call(rH, xB.serverId(BH, LH), xB.index(BH, LH), xB.kind(BH, LH)), !0);
        case 39:
          return !(AH < 20) && (null === (zH = rH.changeBlockFail) || void 0 === zH || zH.call(rH, vB.pos(BH, LH, 0), vB.pos(BH, LH, 1), vB.pos(BH, LH, 2), vB.actual(BH, LH), vB.dataLen(BH, LH), LH + 20, AH - 20), !0);
        case 46:
          return 0 === AH && (null === (CH = rH.changeBlockFailEnd) || void 0 === CH || CH.call(rH), !0);
        case 48:
          return 20 === AH && (null === (EH = rH.inventoryEvent) || void 0 === EH || EH.call(rH, PB.what(BH, LH), PB.value(BH, LH), PB.pos(BH, LH, 0), PB.pos(BH, LH, 1), PB.pos(BH, LH, 2), PB.block(BH, LH)), !0);
        case 49:
          return 4 === AH && (null === (XH = rH.heldItemChanged) || void 0 === XH || XH.call(rH, TB.item(BH, LH), TB.slot(BH, LH)), !0);
        case 50:
          return 16 === AH && (null === (GH = rH.shotDamage) || void 0 === GH || GH.call(rH, UB.target(BH, LH), UB.damage(BH, LH), UB.distance(BH, LH), UB.crit(BH, LH)), !0);
        case 51:
          return !(AH < 4) && (null === (YH = rH.enchantOffer) || void 0 === YH || YH.call(rH, VB.slot(BH, LH), LH + 4, AH - 4), !0);
        case 52:
          return !(AH < 20) && (null === (uH = rH.uiEvent) || void 0 === uH || uH.call(rH, OB.what(BH, LH), OB.value(BH, LH), OB.pos(BH, LH, 0), OB.pos(BH, LH, 1), OB.pos(BH, LH, 2), OB.block(BH, LH), LH + 20, AH - 20), !0);
        case 53:
          return 12 === AH && (null === (QH = rH.entityInfoChanged) || void 0 === QH || QH.call(rH, bB.serverId(BH, LH), bB.index(BH, LH), bB.what(BH, LH)), !0);
        case 55:
          return 24 === AH && (null === (WH = rH.chunkSlot) || void 0 === WH || WH.call(rH, kB.cx(BH, LH), kB.cy(BH, LH), kB.cz(BH, LH), kB.slot(BH, LH), kB.generation(BH, LH), kB.flags(BH, LH)), !0);
        case 40:
          return 44 === AH && (null === (MH = rH.playSound) || void 0 === MH || MH.call(rH, mB.pos(BH, LH, 0), mB.pos(BH, LH, 1), mB.pos(BH, LH, 2), mB.sound(BH, LH), mB.flags(BH, LH), mB.handle(BH, LH), mB.volume(BH, LH), mB.rate(BH, LH), mB.refDist(BH, LH)), !0);
        case 41:
          return 28 === AH && (null === (xH = rH.soundPos) || void 0 === xH || xH.call(rH, oB.pos(BH, LH, 0), oB.pos(BH, LH, 1), oB.pos(BH, LH, 2), oB.handle(BH, LH)), !0);
        case 42:
          return 16 === AH && (null === (vH = rH.soundSet) || void 0 === vH || vH.call(rH, IB.handle(BH, LH), IB.volume(BH, LH), IB.rate(BH, LH), IB.refDist(BH, LH)), !0);
        case 43:
          return 12 === AH && (null === (PH = rH.soundFade) || void 0 === PH || PH.call(rH, fB.handle(BH, LH), fB.to(BH, LH), fB.ms(BH, LH), fB.flags(BH, LH)), !0);
        case 44:
          return 4 === AH && (null === (TH = rH.soundStop) || void 0 === TH || TH.call(rH, lB.handle(BH, LH)), !0);
        case 45:
          return 0 === AH && (null === (UH = rH.soundReset) || void 0 === UH || UH.call(rH), !0);
        case 56:
          return 8 === AH && (null === (VH = rH.replayFailed) || void 0 === VH || VH.call(rH, KB.reason(BH, LH), KB.code(BH, LH), KB.version(BH, LH)), !0);
        case 57:
          return !(AH < 4) && (null === (OH = rH.replayOption) || void 0 === OH || OH.call(rH, cB.key(BH, LH), cB.tag(BH, LH), LH + 4, AH - 4), !0);
        case 58:
          return 16 === AH && (null === (bH = rH.replayFilePart) || void 0 === bH || bH.call(rH, eB.save(BH, LH), eB.index(BH, LH), eB.ptr(BH, LH), eB.len(BH, LH)), !0);
        case 59:
          return 16 === AH && (null === (kH = rH.replayFileReady) || void 0 === kH || kH.call(rH, qB.save(BH, LH), qB.kind(BH, LH), qB.parts(BH, LH), qB.bytes(BH, LH)), !0);
        case 60:
          return !(AH < 4) && (null === (mH = rH.replayOpened) || void 0 === mH || mH.call(rH, gB.totalTicks(BH, LH), LH + 4, AH - 4), !0);
        case 61:
          return !(AH < 24) && (null === (oH = rH.replayUiEvent) || void 0 === oH || oH.call(rH, NB.what(BH, LH), NB.int(BH, LH), NB.x(BH, LH), NB.y(BH, LH), LH + 24, AH - 24), !0);
        case 62:
          return 8 === AH && (null === (IH = rH.recorderEvent) || void 0 === IH || IH.call(rH, RB.what(BH, LH), RB.kind(BH, LH), RB.save(BH, LH)), !0);
        default:
          return !1
      }
    }
    const CL = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      CosmeticModel: 399,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      HighlightCell: 457,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let EL = new Uint8Array(0);

    function XL(HH) {
      return EL.buffer !== HH.buffer && (EL = new Uint8Array(HH.buffer)), EL
    }

    function GL(HH, BH, LH) {
      const AH = HH.PX(66, BH, 4);
      if (AH < 0) return !1;
      return HH.view.setUint8(AH + 0, LH), !0
    }

    function YL(HH, BH, LH) {
      const AH = HH.PX(67, BH, 4);
      if (AH < 0) return !1;
      return HH.view.setUint32(AH + 0, LH, !0), !0
    }

    function uL(HH, BH, LH) {
      const AH = HH.PX(68, BH, 4);
      if (AH < 0) return !1;
      return HH.view.setUint8(AH + 0, LH), !0
    }

    function QL(HH, BH, LH, AH) {
      const rH = HH.PX(69, BH, 4 + AH.length);
      if (rH < 0) return !1;
      const SH = HH.view;
      return SH.setUint8(rH + 0, LH), XL(SH).set(AH, SH.byteOffset + rH + 4), !0
    }

    function WL(HH, BH, LH, AH, rH) {
      const SH = HH.PX(128, BH, 4 + rH.length);
      if (SH < 0) return !1;
      const hH = HH.view;
      return hH.setUint8(SH + 0, LH), hH.setUint16(SH + 2, AH, !0), XL(hH).set(rH, hH.byteOffset + SH + 4), !0
    }

    function ML(HH, BH, LH) {
      const AH = HH.PX(131, BH, 4);
      if (AH < 0) return !1;
      return HH.view.setInt32(AH + 0, LH, !0), !0
    }

    function xL(HH, BH, LH) {
      const AH = HH.PX(132, BH, 4);
      if (AH < 0) return !1;
      return HH.view.setUint32(AH + 0, LH, !0), !0
    }

    function vL(HH, BH, LH) {
      const AH = HH.PX(133, BH, 4);
      if (AH < 0) return !1;
      return HH.view.setUint32(AH + 0, LH, !0), !0
    }

    function PL(HH, BH, LH) {
      const AH = HH.PX(144, BH, 4);
      if (AH < 0) return !1;
      return HH.view.setUint8(AH + 0, LH), !0
    }

    function TL(HH, BH, LH, AH, rH) {
      const SH = HH.PX(145, BH, 12);
      if (SH < 0) return !1;
      const hH = HH.view;
      return hH.setInt32(SH + 0, LH, !0), hH.setInt32(SH + 4, AH, !0), hH.setInt32(SH + 8, rH, !0), !0
    }

    function UL(HH, BH, LH, AH) {
      const rH = HH.PX(256, BH, 4 + AH.length);
      if (rH < 0) return !1;
      const SH = HH.view;
      return SH.setUint16(rH + 0, LH, !0), XL(SH).set(AH, SH.byteOffset + rH + 4), !0
    }

    function VL(HH, BH, LH) {
      const AH = HH.PX(258, BH, 4);
      if (AH < 0) return !1;
      return HH.view.setUint8(AH + 0, LH), !0
    }

    function OL(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
      const CH = HH.PX(320, BH, 48 + zH.length);
      if (CH < 0) return !1;
      const EH = HH.view;
      EH.setUint32(CH + 0, LH, !0), EH.setUint16(CH + 4, AH, !0), EH.setUint16(CH + 6, rH, !0), EH.setUint32(CH + 8, SH, !0);
      for (let XH = 0; XH < 3; XH++) EH.setFloat64(CH + 12 + 8 * XH, hH[XH], !0);
      for (let XH = 0; XH < 3; XH++) EH.setFloat32(CH + 36 + 4 * XH, tH[XH], !0);
      return XL(EH).set(zH, EH.byteOffset + CH + 48), !0
    }

    function bL(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
      const CH = HH.PX(321, BH, 48 + zH.length);
      if (CH < 0) return !1;
      const EH = HH.view;
      EH.setUint32(CH + 0, LH, !0), EH.setInt32(CH + 4, AH, !0), EH.setUint16(CH + 8, rH, !0), EH.setUint16(CH + 10, SH, !0);
      for (let XH = 0; XH < 3; XH++) EH.setFloat64(CH + 12 + 8 * XH, hH[XH], !0);
      for (let XH = 0; XH < 3; XH++) EH.setFloat32(CH + 36 + 4 * XH, tH[XH], !0);
      return XL(EH).set(zH, EH.byteOffset + CH + 48), !0
    }

    function kL(HH, BH, LH, AH, rH, SH, hH) {
      const tH = HH.PX(322, BH, 44 + hH.length);
      if (tH < 0) return !1;
      const zH = HH.view;
      zH.setUint32(tH + 0, LH, !0), zH.setUint32(tH + 4, AH, !0);
      for (let CH = 0; CH < 3; CH++) zH.setFloat64(tH + 8 + 8 * CH, rH[CH], !0);
      for (let CH = 0; CH < 3; CH++) zH.setFloat32(tH + 32 + 4 * CH, SH[CH], !0);
      return XL(zH).set(hH, zH.byteOffset + tH + 44), !0
    }

    function mL(HH, BH, LH) {
      const AH = HH.PX(323, BH, 4);
      if (AH < 0) return !1;
      return HH.view.setUint32(AH + 0, LH, !0), !0
    }

    function oL(HH, BH, LH, AH, rH, SH) {
      const hH = HH.PX(324, BH, 32 + SH.length);
      if (hH < 0) return !1;
      const tH = HH.view;
      tH.setUint32(hH + 0, LH, !0), tH.setUint32(hH + 4, AH, !0);
      for (let zH = 0; zH < 3; zH++) tH.setFloat64(hH + 8 + 8 * zH, rH[zH], !0);
      return XL(tH).set(SH, tH.byteOffset + hH + 32), !0
    }

    function IL(HH, BH) {
      return !(HH.PX(325, BH, 0) < 0)
    }

    function fL(HH, BH, LH, AH, rH, SH) {
      const hH = HH.PX(384, BH, 16);
      if (hH < 0) return !1;
      const tH = HH.view;
      return tH.setUint32(hH + 0, LH, !0), tH.setUint32(hH + 4, AH, !0), tH.setFloat32(hH + 8, rH, !0), tH.setFloat32(hH + 12, SH, !0), !0
    }

    function lL(HH, BH, LH, AH, rH, SH, hH) {
      const tH = HH.PX(385, BH, 36 + hH.length);
      if (tH < 0) return !1;
      const zH = HH.view;
      zH.setUint32(tH + 0, LH, !0), zH.setUint32(tH + 4, AH, !0);
      for (let CH = 0; CH < 3; CH++) zH.setFloat64(tH + 8 + 8 * CH, rH[CH], !0);
      return zH.setUint32(tH + 32, SH, !0), XL(zH).set(hH, zH.byteOffset + tH + 36), !0
    }

    function KL(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
      const CH = HH.PX(386, BH, 56 + zH.length);
      if (CH < 0) return !1;
      const EH = HH.view;
      EH.setUint32(CH + 0, LH, !0), EH.setUint8(CH + 4, AH);
      for (let XH = 0; XH < 4; XH++) EH.setFloat32(CH + 8 + 4 * XH, rH[XH], !0);
      for (let XH = 0; XH < 3; XH++) EH.setFloat64(CH + 24 + 8 * XH, SH[XH], !0);
      return EH.setUint32(CH + 48, hH, !0), EH.setUint32(CH + 52, tH, !0), XL(EH).set(zH, EH.byteOffset + CH + 56), !0
    }

    function cL(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
      const CH = HH.PX(387, BH, 56);
      if (CH < 0) return !1;
      const EH = HH.view;
      EH.setUint32(CH + 0, LH, !0), EH.setUint16(CH + 4, AH, !0), EH.setUint8(CH + 6, rH);
      for (let XH = 0; XH < 3; XH++) EH.setFloat64(CH + 8 + 8 * XH, SH[XH], !0);
      for (let XH = 0; XH < 2; XH++) EH.setFloat32(CH + 32 + 4 * XH, hH[XH], !0);
      EH.setFloat32(CH + 40, tH, !0);
      for (let XH = 0; XH < 3; XH++) EH.setFloat32(CH + 44 + 4 * XH, zH[XH], !0);
      return !0
    }

    function eL(HH, BH, LH) {
      const AH = HH.PX(388, BH, 4);
      if (AH < 0) return !1;
      return HH.view.setUint32(AH + 0, LH, !0), !0
    }

    function qL(HH, BH, LH, AH) {
      const rH = HH.PX(389, BH, 8);
      if (rH < 0) return !1;
      const SH = HH.view;
      return SH.setInt32(rH + 0, LH, !0), SH.setFloat32(rH + 4, AH, !0), !0
    }

    function gL(HH, BH, LH, AH) {
      const rH = HH.PX(390, BH, 8);
      if (rH < 0) return !1;
      const SH = HH.view;
      return SH.setInt32(rH + 0, LH, !0), SH.setFloat32(rH + 4, AH, !0), !0
    }

    function NL(HH, BH, LH, AH, rH, SH) {
      const hH = HH.PX(391, BH, 12);
      if (hH < 0) return !1;
      const tH = HH.view;
      return tH.setFloat32(hH + 0, LH, !0), tH.setFloat32(hH + 4, AH, !0), tH.setUint8(hH + 8, rH), tH.setUint8(hH + 9, SH), !0
    }

    function RL(HH, BH, LH) {
      const AH = HH.PX(392, BH, 4);
      if (AH < 0) return !1;
      return HH.view.setUint32(AH + 0, LH, !0), !0
    }

    function jL(HH, BH, LH, AH, rH) {
      const SH = HH.PX(393, BH, 12);
      if (SH < 0) return !1;
      const hH = HH.view;
      return hH.setUint32(SH + 0, LH, !0), hH.setUint16(SH + 4, AH, !0), hH.setFloat32(SH + 8, rH, !0), !0
    }

    function nL(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH) {
      const GH = HH.PX(394, BH, 56 + XH.length);
      if (GH < 0) return !1;
      const YH = HH.view;
      YH.setUint32(GH + 0, LH, !0), YH.setUint16(GH + 4, AH, !0), YH.setUint8(GH + 6, rH), YH.setUint8(GH + 7, SH);
      for (let uH = 0; uH < 3; uH++) YH.setFloat64(GH + 8 + 8 * uH, hH[uH], !0);
      YH.setFloat32(GH + 32, tH, !0), YH.setInt32(GH + 36, zH, !0);
      for (let uH = 0; uH < 3; uH++) YH.setFloat32(GH + 40 + 4 * uH, CH[uH], !0);
      return YH.setFloat32(GH + 52, EH, !0), XL(YH).set(XH, YH.byteOffset + GH + 56), !0
    }

    function FL(HH, BH, LH) {
      const AH = HH.PX(398, BH, 4);
      if (AH < 0) return !1;
      return HH.view.setUint32(AH + 0, LH, !0), !0
    }

    function DL(HH, BH, LH, AH, rH) {
      const SH = HH.PX(399, BH, 12);
      if (SH < 0) return !1;
      const hH = HH.view;
      return hH.setUint32(SH + 0, LH, !0), hH.setUint32(SH + 4, AH, !0), hH.setFloat32(SH + 8, rH, !0), !0
    }

    function wL(HH, BH, LH) {
      const AH = HH.PX(448, BH, 4);
      if (AH < 0) return !1;
      return HH.view.setFloat32(AH + 0, LH, !0), !0
    }

    function ZL(HH, BH, LH, AH) {
      const rH = HH.PX(450, BH, 12);
      if (rH < 0) return !1;
      const SH = HH.view;
      for (let hH = 0; hH < 2; hH++) SH.setFloat32(rH + 0 + 4 * hH, LH[hH], !0);
      return SH.setUint8(rH + 8, AH), !0
    }

    function dL(HH, BH, LH, AH) {
      const rH = HH.PX(452, BH, 8);
      if (rH < 0) return !1;
      const SH = HH.view;
      return SH.setFloat32(rH + 0, LH, !0), SH.setUint8(rH + 4, AH), !0
    }

    function aL(HH, BH, LH, AH, rH) {
      const SH = HH.PX(454, BH, 4);
      if (SH < 0) return !1;
      const hH = HH.view;
      return hH.setUint8(SH + 0, LH), hH.setUint8(SH + 1, AH), hH.setUint8(SH + 2, rH), !0
    }

    function sL(HH, BH, LH, AH) {
      const rH = HH.PX(455, BH, 40);
      if (rH < 0) return !1;
      const SH = HH.view;
      for (let hH = 0; hH < 9; hH++) SH.setInt32(rH + 0 + 4 * hH, LH[hH], !0);
      return SH.setUint32(rH + 36, AH, !0), !0
    }

    function JL(HH, BH, LH, AH) {
      const rH = HH.PX(456, BH, 8);
      if (rH < 0) return !1;
      const SH = HH.view;
      return SH.setFloat32(rH + 0, LH, !0), SH.setUint8(rH + 4, AH), !0
    }

    function iL(HH, BH, LH, AH, rH) {
      const SH = HH.PX(457, BH, 16);
      if (SH < 0) return !1;
      const hH = HH.view;
      for (let tH = 0; tH < 3; tH++) hH.setInt32(SH + 0 + 4 * tH, LH[tH], !0);
      for (let tH = 0; tH < 3; tH++) hH.setInt8(SH + 12 + 1 * tH, AH[tH]);
      return hH.setUint8(SH + 15, rH), !0
    }

    function pL(HH, BH, LH, AH) {
      const rH = HH.PX(530, BH, 4 + AH.length);
      if (rH < 0) return !1;
      const SH = HH.view;
      return SH.setUint8(rH + 0, LH), XL(SH).set(AH, SH.byteOffset + rH + 4), !0
    }

    function yL(HH, BH, LH, AH, rH, SH) {
      const hH = HH.PX(531, BH, 12 + SH.length);
      if (hH < 0) return !1;
      const tH = HH.view;
      return tH.setFloat32(hH + 0, LH, !0), tH.setFloat32(hH + 4, AH, !0), tH.setUint32(hH + 8, rH, !0), XL(tH).set(SH, tH.byteOffset + hH + 12), !0
    }

    function HA(HH, BH, LH, AH, rH, SH) {
      const hH = HH.PX(532, BH, 12 + SH.length);
      if (hH < 0) return !1;
      const tH = HH.view;
      return tH.setInt32(hH + 0, LH, !0), tH.setInt32(hH + 4, AH, !0), tH.setUint32(hH + 8, rH, !0), XL(tH).set(SH, tH.byteOffset + hH + 12), !0
    }

    function BA(HH, BH, LH, AH, rH) {
      const SH = HH.PX(533, BH, 8 + rH.length);
      if (SH < 0) return !1;
      const hH = HH.view;
      return hH.setInt32(SH + 0, LH, !0), hH.setInt32(SH + 4, AH, !0), XL(hH).set(rH, hH.byteOffset + SH + 8), !0
    }

    function LA(HH, BH) {
      return !(HH.PX(576, BH, 0) < 0)
    }

    function AA(HH, BH, LH, AH, rH, SH) {
      const hH = HH.PX(577, BH, 36 + SH.length);
      if (hH < 0) return !1;
      const tH = HH.view;
      tH.setUint8(hH + 0, LH);
      for (let zH = 0; zH < 16; zH++) tH.setUint8(hH + 4 + 1 * zH, AH[zH]);
      for (let zH = 0; zH < 16; zH++) tH.setUint8(hH + 20 + 1 * zH, rH[zH]);
      return XL(tH).set(SH, tH.byteOffset + hH + 36), !0
    }

    function rA(HH, BH, LH, AH) {
      const rH = HH.PX(578, BH, 4 + AH.length);
      if (rH < 0) return !1;
      const SH = HH.view;
      return SH.setUint8(rH + 0, LH), XL(SH).set(AH, SH.byteOffset + rH + 4), !0
    }

    function SA(HH, BH, LH, AH, rH, SH, hH, tH) {
      const zH = HH.PX(579, BH, 36);
      if (zH < 0) return !1;
      const CH = HH.view;
      return CH.setFloat64(zH + 0, LH, !0), CH.setFloat64(zH + 8, AH, !0), CH.setFloat64(zH + 16, rH, !0), CH.setFloat64(zH + 24, SH, !0), CH.setUint16(zH + 32, hH, !0), CH.setUint8(zH + 34, tH), !0
    }
    class hA {
      constructor(HH, BH) {
        this.core = HH, this.afterCall = BH
      }
      canModify(HH, BH, LH) {
        const AH = this.core.IhH(HH, BH, LH);
        return this.afterCall(), AH
      }
      terrainBlocked(HH, BH, LH, AH, rH) {
        const SH = this.core.TtH(HH, BH, LH, AH, rH);
        return this.afterCall(), SH
      }
      oq(HH, BH, LH, AH) {
        const rH = this.core.WY(HH, BH, LH, AH);
        return this.afterCall(), rH
      }
      blockData(HH, BH, LH) {
        const AH = this.core.mhH(HH, BH, LH);
        return this.afterCall(), AH
      }
      cameraSweep(HH, BH, LH, AH, rH, SH, hH) {
        const tH = this.core.mSH(HH, BH, LH, AH, rH, SH, hH);
        return this.afterCall(), tH
      }
      hasServerTarget(HH) {
        const BH = this.core.FhH(HH);
        return this.afterCall(), BH
      }
      entityInteractable(HH) {
        const BH = this.core.ghH(HH);
        return this.afterCall(), BH
      }
      entityCrouching(HH) {
        const BH = this.core.qhH(HH);
        return this.afterCall(), BH
      }
      entityDrawn(HH) {
        const BH = this.core.KSH(HH);
        return this.afterCall(), BH
      }
      predictServerPosition(HH, BH, LH, AH) {
        const rH = this.core.HtH(HH, BH, LH, AH);
        return this.afterCall(), rH
      }
      setOtherEntitySetting(HH, BH, LH) {
        const AH = this.core.lSH(HH, BH, LH);
        return this.afterCall(), AH
      }
      entityInfoBatch(HH) {
        const BH = this.core.qSH(HH);
        return this.afterCall(), BH
      }
      entityName(HH) {
        const BH = this.core.NhH(HH);
        return this.afterCall(), BH
      }
      hasEffect(HH, BH) {
        const LH = this.core.nhH(HH, BH);
        return this.afterCall(), LH
      }
      scratchPtr() {
        const HH = this.core.VSH();
        return this.afterCall(), HH
      }
      invSwap(HH, BH) {
        const LH = this.core.shH(HH, BH);
        return this.afterCall(), LH
      }
      invMove(HH, BH, LH) {
        const AH = this.core.ZhH(HH, BH, LH);
        return this.afterCall(), AH
      }
      invQuickMove(HH, BH, LH, AH) {
        const rH = this.core.dhH(HH, BH, LH, AH);
        return this.afterCall(), rH
      }
      invRemove(HH, BH, LH) {
        const AH = this.core.ahH(HH, BH, LH);
        return this.afterCall(), AH
      }
      invEnchant(HH, BH, LH, AH, rH) {
        const SH = this.core.whH(HH, BH, LH, AH, rH);
        return this.afterCall(), SH
      }
      craft(HH, BH, LH) {
        const AH = this.core.craft(HH, BH, LH);
        return this.afterCall(), AH
      }
      salvage(HH, BH, LH) {
        const AH = this.core.salvage(HH, BH, LH);
        return this.afterCall(), AH
      }
      selectSlot(HH) {
        const BH = this.core.rtH(HH);
        return this.afterCall(), BH
      }
      closeChest() {
        const HH = this.core.fhH();
        return this.afterCall(), HH
      }
      itemAttributesBatch(HH) {
        const BH = this.core.eSH(HH);
        return this.afterCall(), BH
      }
      itemNames() {
        const HH = this.core.Zm();
        return this.afterCall(), HH
      }
      blockProps() {
        const HH = this.core.ohH();
        return this.afterCall(), HH
      }
      itemProps() {
        const HH = this.core.JhH();
        return this.afterCall(), HH
      }
      salvageRecipe(HH) {
        const BH = this.core.NSH(HH);
        return this.afterCall(), BH
      }
      craftingView(HH, BH, LH) {
        const AH = this.core.cSH(HH, BH, LH);
        return this.afterCall(), AH
      }
      directorView() {
        const HH = this.core.bSH();
        return this.afterCall(), HH
      }
      directorDefaultPose() {
        const HH = this.core.oSH();
        return this.afterCall(), HH
      }
      directorEntity(HH) {
        const BH = this.core.kSH(HH);
        return this.afterCall(), BH
      }
      directorPose(HH, BH, LH, AH, rH, SH) {
        const hH = this.core.ISH(HH, BH, LH, AH, rH, SH);
        return this.afterCall(), hH
      }
      passTimings(HH) {
        const BH = this.core.yhH(HH);
        return this.afterCall(), BH
      }
      drawCensus() {
        const HH = this.core.ehH();
        return this.afterCall(), HH
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);